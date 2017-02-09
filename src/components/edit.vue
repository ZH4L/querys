<template>
	<div class="edit">
		<div class="ehead">
			<input type="text" v-model='ques.title'>
		</div>
		<div class="ebody">
			<transition-group name="list" tag="p">
        <question v-for="(item,index) in ques.items" v-bind:question="item" v-bind:index="index" :questions="ques.items" v-bind:key="item" class="list-item"></question>
      </transition-group>
			<transition name="slide-fade"><type v-on:adds="addsin" v-on:addm='addmul' v-on:addt="addtxt" v-if="type"></type></transition>
			<div class="addque" v-on:click=" type = !type "> <span>+</span>&nbsp;&nbsp;添加问题</router-link></div>
		</div>
		<div class="efoot">
			<div class="time">
				<span>问卷截止日期</span>
				<el-date-picker
      				:value="value1"
              @input="upDate"
      				type="date"
      				placeholder="选择日期"
      				:picker-options="pickerOptions0">
    			</el-date-picker>
			</div>
			<div class="ctrl">
				<button class="pub btn btnw" @click.stop="confirm">发布问卷</button>
			</div>
		</div>
		<layer :layer="layer" @public="public" :date="ques.deadline"></layer>
	</div>
</template>
<script>
	import Question from './question.vue'
	import Layer from './layer.vue'
	import {router,querys} from'../main.js'
  import Type from './type.vue'
  export default{
    data() {
      var ques;
      if (this.$route.query.index=='new'){
        ques={
          title:'这里是标题(点我修改内容)',
          items:[],
          deadline:'',
          status:'未发布',
          checked:false
        }
        querys.push(ques);
      }else{
        ques=querys[this.$route.query.index]
      }
      return {
        type:false,
        ques:ques,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          	}
        },
        value1: '',
       	 value2: '',
       	 layer:{show:false},
      };
    },
    methods:{
    	addsin(){
    		this.ques.items.push({
    			type:'single',
    			selections:[{content:'选项一'},{content:'选项二'}],
    			content:"单选题",
    			answer:[]
    		})
        this.type=false
    	},
    	addmul(){
    		this.ques.items.push({
    			type:'multiple',
    			selections:[{content:'选项一'},{content:'选项二'},{content:'选项三'},{content:'选项四'}],
    			content:'多选题',
    			answer:[]
    		})
        this.type=false
    	},
    	addtxt(){
    		this.ques.items.push({
    			type:'txt',
    			content:"文本题",
    			answer:[]
    		})
        this.type=false
    	},
    	confirm(){
    		this.layer.show=true;
    	},
    	public(){
        this.ques.status="发布中"
    		router.push('/');
    	},
      upDate(arg){
        this.value1=arg;
        this.ques.deadline=(new Date(arg)).toLocaleDateString()
      }
    },
    components:{'question':Question,'layer':Layer,'type':Type},
  };
</script>
<style>
	.edit{position: absolute;left: 50%; width: 1045px;padding: 0 54px 20px; margin-top: 80px;margin-left: -550px;background-color: #fff;}
	.ehead:hover{background-color: #fdf1e6}
	.ehead{height: 104px; border-bottom: 2px solid #eee; text-align: center;}
	.ehead input{width: 100%;height: 100%;border: 0px; text-align: center;vertical-align: middle;font: bold 30px/104px '微软雅黑';background: transparent;}
	.ehead input:focus{border:1px solid #ccc; }
	.ebody{padding: 26px;border-bottom: 1px solid #eee;}
	.ebody .addque{border: 1px solid #ccc; text-align: center;vertical-align: middle;font: 16px/80px '微软雅黑';background-color: #eee;color: #999;}
	.ebody .addque span{font-size: 20px;}
	.ebody .addque a{display: inline-block;width: 100%;height: 100%;}
	.ebody .addque:hover{cursor: pointer;color: #555;box-shadow: 1px 1px 2px #666;}
	.efoot{padding: 36px 87px 0;}
	.btn.btnw{border: 1px solid #999; background-color: #fff;color: #999;}
	.efoot .time{font: 20px '微软雅黑';color: #999; float: left;}
	.efoot .ctrl{float: right;}
	.efoot .save{margin-right: 22px;}
  .slide-fade-enter-active {transition: all .3s ease;}
  .slide-fade-leave-active {transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
  .slide-fade-enter, .slide-fade-leave-active {transform: translateX(10px);opacity: 0;}
  .list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
</style>