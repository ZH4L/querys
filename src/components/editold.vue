<template>
		<div class="edit">
		<div class="ehead">
			<input type="text" v-model='ques.title'>
		</div>
		<div class="ebody">
			<question v-for="(item,index) in ques.items" v-bind:question="item" v-bind:index="index" :questions="ques.items"></question>
			<router-view v-on:adds="addsin" v-on:addm='addmul' v-on:addt="addtxt"></router-view>
			<div class="addque" ><router-link to="/edit/type"> <span>+</span>&nbsp;&nbsp;添加问题</router-link></div>
		</div>
		<div class="efoot">
			<div class="time">
				<span>问卷截止日期</span>
				<el-date-picker
      				v-model="value1"
      				type="date"
      				placeholder="选择日期"
      				:picker-options="pickerOptions0">
    			</el-date-picker>
			</div>
			<div class="ctrl">
				<button class="save btn btnw">保存问卷</button>
				<button class="pub btn btnw" @click.stop="confirm">发布问卷</button>
			</div>
		</div>
		<layer :layer="layer" @public="public" :date="value1"></layer>
	</div>
</template>
<script>
	import Question from './question.vue'
	import Layer from './layer.vue'
	import {router,querys} from'../main.js'
	export default {
    data() {
      	return {
          ques:
          ,
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
    	},
    	addmul(){
    		this.ques.items.push({
    			type:'multiple',
    			selections:[{content:'选项一'},{content:'选项二'},{content:'选项三'},{content:'选项四'}],
    			content:'多选题',
    			answer:[]
    		})
    	},
    	addtxt(){
    		this.ques.items.push({
    			type:'txt',
    			content:"文本题",
    			answer:[]
    		})
    	},
    	confirm(){
    		this.layer.show=true;
    	},
    	public(){
    		router.push('/');
    		querys.push(this.ques);
    	}
    },
    components:{'question':Question,'layer':Layer}
  };
</script>
<style></style>