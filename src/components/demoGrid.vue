<template>
	<div class="wrapper">
		<layer :layer="layer" :content="'发布未结束'"></layer>
		<table class="content">
			<thead>
				<tr>
					<th class="title">标题</th>
					<th class="time">截止时间</th>
					<th class="status">状态</th>
					<th class="opera">操作</th>
					<th ><router-link to="/create"><button class="btn">+ 新建问卷</button></router-link ></th>
				</tr>
			</thead>
			<tbody>
				<tr is="query" v-for="(ques,index) in querys" :ques="ques" :i="index" :selectAll="checked" @edit="edit" @delete="deleteq" @result="result"></tr>
			</tbody>
			<tfoot>
				<tr>
					<td class="title" colspan="5"><el-checkbox v-model="checked" ><button class="btn btn-sm" @click.self="deleteAll">删除选中项</button></el-checkbox></td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>
<script>
	import Query from './query.vue'
	import {querys,router} from '../main.js'
	import layer from './layer.vue'
	export default{
		name:'demoGrid',
		components:{'query':Query,'layer':layer},
		data(){
			return{
				checked:false,
				querys:querys,
				layer:{show:false}
			}
		},
		methods:{
			edit(i){
				router.push({path:'/edit',query:{index:i}})
			},
			result(i){
				if(this.querys[i].status=='已结束'){
				router.push({path:'/result',query:{index:i}})	
				} else{
					this.layer.show=true;
				}
			},
			deleteq(i){
				querys.splice(i,1)
			},
			deleteAll(){
				for(var i=0;i<querys.length;i++){
					if(querys[i].checked==true){
						querys.splice(i,1);
						i--;
					}
					
				}
			},
		},
	}
</script>
<style>
	.content{position: absolute; margin-top: 88px;width: 1045px;left: 50%;transform: translate(-50%); text-align: center;font: 17px '微软雅黑'}
	.content th,.content td{line-height: 53px;border-bottom: 1px solid #aaa;text-align: left;}
	.content .title{width: 453px;;padding-left: 73px;}
	.content .time{width: 166px;}
	.content .status{width:115px;}
	.content .opera{width: 178px;}
	.btn{width: 98px;height: 29px;border-radius: 3px;border: 0px; box-shadow: inset 0 1px 0 rgba(255,255,255,0); background-color: #f07600;color:#fff;font:17px/29px '微软雅黑'; white-space: pre;}
	.btn a{color: #fff;white-space: pre;}
	.btn:hover{background-color: #f49335}
	.btn:active{box-shadow: 1px 1px 2px #999}
	.content tbody,.content tfoot{background-color: #fff;}
	.content tbody tr:hover{background-color: #fcf0e5}
</style>