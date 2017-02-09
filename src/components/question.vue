<template>
	<div class="question">
		<div class="sin" v-if="question.type=='single'">
			<span>Q{{index+1}}:&nbsp;<input type="text" v-model='question.content'></span>
			<p v-for="(item,i) in question.selections">
				<el-radio class="radio" v-model="radio" :label="i"><input type="text" v-model="item.content"></el-radio>
			</p>
			<operation :question="question" :index="index" :questions="questions"></operation>
		</div>
		<div class="mul" v-if="question.type=='multiple'">
			<span>Q{{index+1}}:&nbsp; <input type="text" v-model="question.content"></span>
			<p v-for="item in question.selections"> <el-checkbox><input type="text" v-model="item.content"></el-checkbox></p>
			<operation :question="question" :index="index" :questions="questions"></operation>
		</div>
		<div class="txt" v-if="question.type=='txt'">
			<span>Q{{index+1}}</span>
			<input type="text" v-model="question.content">
			<p><textarea cols="70" rows="5"></textarea></p>
			<operation :question="question" :index="index" :questions="questions"></operation>
		</div>
	</div>
</template>
<script>
	import Operation from './operation.vue'
	export default{
		props:["questions",'question','index'],
		data () {
      		return {
        	radio: '1',
        	checked:false
      		};
    	},
    	components:{'operation':Operation}
	}
</script>
<style>
	.question{padding: 20px;line-height: 27px;font-size: 24px;overflow:hidden}
	.question:hover{background-color: #fdf1e6}
	.question input{padding-left: 15px;border:0px;vertical-align:baseline; font-size: 20px;background: transparent;width: 800px}
	.question input:focus{border: 1px solid #999;}
	.question textarea{padding: 10px;vertical-align: top;font-size: 20px;}
	.question p{margin-left: 40px;margin-top: 20px;}
</style>