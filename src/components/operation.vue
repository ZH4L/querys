<template>
	<div class="operation">
		<button @click.stop="up">上移</button>
		<button @click.stop="down">下移</button>
		<button @click.stop="repeat">复用</button>
		<button @click.stop="deleteq">删除</button>
	</div>
</template>
<script>
	export default{
		props:['questions','question','index'],
		methods:{
			up(){
				var temp;
				var index=this.index;
				var questions=this.questions;
				if (questions[index-1]){
					temp=questions[index-1]
					questions.splice(index-1,1)
					questions.splice(index,0,temp)
				}
			},
			down(){
				var temp;
				var index=this.index;
				var questions=this.questions;
				if (questions[index+1]){
					temp=questions[index+1]
					questions.splice(index+1,1)
					questions.splice(index,0,temp)
				}
			},
			repeat(){
				var question =this.question
				var index=this.index;
				var questions=this.questions;
				var newq={};
				newq.type=question.type;
				newq.content=question.content;
				if(question.selections){
					newq.selections=[];
					var temp;
					for(var i=0;i<question.selections.length;i++){
						temp={};
						temp.content=question.selections[i].content;
						newq.selections.push(temp)
					}
				}
				newq.answer=[]
				questions.splice(index,0,newq)
			},
			deleteq(){
				var index=this.index;
				var questions=this.questions;
				questions.splice(index,1)

			}

		}
	}
</script>
<style>
	.operation{float: right;}
	.operation button{background: transparent;border: 0px;font: 16px '微软雅黑';}
	.operation button:hover{font-weight: bold;}
</style>