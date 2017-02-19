<template>
	<tr>
		<td class="title"><el-checkbox v-bind:value="checked" v-on:input="toggle" >{{ques.title}}</el-checkbox></td>
		<td class="time">{{ques.deadline}}</td>
		<td class="status">{{ques.status}}</td>
		<td colspan="2" class="opera">
			<button class="btn btn-sm" @click="$emit('edit',i)">编辑</button>
			<button class="btn btn-sm" @click="$emit('delete',i)">删除</button>
			<button class="btn btn-sm" @click="$emit('result',i)">查看结果</button>
		</td>
	</tr>
</template>
<script>
	export default{
		data(){
			return{
				checked:false
			}
		},
      	props:['ques','i','selectAll'],
      	methods:{
      		toggle(){
      			this.ques.checked=(!this.ques.checked);
      			this.checked=!this.checked;
      		}
      	},
      	watch:{
      		selectAll(){
      			this.ques.checked=this.selectAll
      			this.checked=this.selectAll
      		}
      	}
	}
</script>
<style>
	.btn.btn-sm{width: 69px;height: 24px;background-color: transparent;font: 16px/24px '微软雅黑';color: #000;}
	.btn.btn-sm:hover{font-weight: bold;}
</style>