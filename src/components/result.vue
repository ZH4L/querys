<template>
	<div class="showrst">
		<router-link to="/"><button class="btn showbtn">返回</button></router-link>
		<div class="showtitle">{{querys[index].title}}</div>
		<div class="showhint">此统计只包含完整回收的数据</div>	
		<hr>
		<div class="results" v-for="(query,i) in querys[index].items">
			<div class="question">
				<p>Q{{i+1}}{{query.content}}</p>
				<p v-for="(question,i) in query.selections">{{i+1}}.{{question.content}}</p>
			</div>
			<div class="showcht" style="width: 600px;height:400px;"></div>
		</div>	
	</div>
</template>
<script>
	var echarts = require('echarts/lib/echarts');
	require('echarts/lib/chart/bar');
	require('echarts/lib/chart/pie');
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/legend')
	import {querys} from '../main'
	export default{
		data(){
			var index=this.$route.query.index;
			return{
				querys,
				index
			}
		},
		methods:{
			drawGraph(cl){
				var myCharts =document.querySelectorAll(cl);
				for(let i=0;i<myCharts.length;i++){
					let myChart=echarts.init(myCharts[i]);
					console.log(this.querys[this.index].items)
					myChart.setOption(this.querys[this.index].items[i].answer)
				}
			}
		},
		mounted() {  
            this.$nextTick(function() {  
                this.drawGraph('.showcht')  
            })  
        } ,
	}
</script>
<style>
	.showrst{margin:50px 150px;padding: 20px;box-shadow: 3px 3px 3px rgba(0,0,0,0); background: #fff;text-align: center;}
	.showrst a{float: left;}
	.results{clear: both;}
	.showcht{display: inline-block;}
	.showtitle{display: block;clear: both;font:bold 20px/40px '微软雅黑';}
	.showhint{font: 14px/28px '微软雅黑'}
	.question{display: inline-block;}
</style>