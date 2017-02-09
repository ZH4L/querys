<template>
	<div class="type">
		<div class="choice sincho" @click="addsin"><span class="el-radio__input is-checked"><span class="el-radio__inner"></span></span>单选题</div>
		<div class="choice mulcho" @click="addmul"><span class="el-checkbox__input is-checked"><span class="el-checkbox__inner"></span></span>多选题</div>
		<div class="choice txtque" @click="addtxt"><i class="el-icon-document"></i>文本题</div>
	</div>
</template>
<script>
	export default{
		 data() {
      		return {
        		checked: true,
        		radio: '1'
      		};
    	},
    	methods:{
    		addsin(){
    			this.$emit('adds')
    		},
    		addmul(){
    			this.$emit('addm')
    		},
    		addtxt(){
    			this.$emit('addt')
    		}
    	},
	}
</script>
<style>
	.type{text-align: center;margin-bottom: 18px;}
	.type .choice{display: inline-block;width: 100px;height: 36px;border: 1px solid #999;margin-right: 32px; line-height: 36px;text-align: center;font-size: 16px;cursor: pointer;background-color: #eee;}
	.type .choice:hover{box-shadow: 2px 2px 2px #eee;}
</style>