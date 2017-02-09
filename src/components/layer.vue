<template>
	<div class="m-layer z-show" v-if="layer.show"><table><tbody><tr><td>
    <article class="lywrap">
	    <header class="lytt"><h2 class="u-tt">提示</h2><span class="lyclose" @click="cancle">×</span></header>
	    <section class="lyct">
	        <p>是否发布问卷?</p>
	        <p>(此问卷截止日期为{{date}})</p>
	    </section>
	    <footer class="lybt">
	        <div class="lyother">
	            
	        </div>
	        <div class="lybtns">
	            <button type="button" class="u-btn" @click.stop="check">确定</button>
	            <button type="button" class="u-btn u-btn-c4" @click="cancle">取消</button>
	        </div>
	    </footer>
    </article></td></tr></tbody></table>
</div>
</template>
<script>
	export default{
		props:['layer','date'],
		methods:{
			cancle(){
				this.layer.show=false;
			},
			check(){
				this.layer.show=false;
				this.$emit('public')
			}
		},
	}
</script>
<style>
	/* 操作型弹出浮层-默认居中 */
.m-layer{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6); z-index: 2}
.m-layer > table{table-layout:fixed;width:100%;height:100%;}
.m-layer > table > tbody > tr > td{vertical-align:middle;}
.m-layer .lywrap{position:relative;width:400px;margin:0 auto;border:5px solid rgba(0,0,0,0.3);border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.2);}
.m-layer .lytt{position:relative;padding:10px;height:20px;margin:0 0 -1px;line-height:20px;border-bottom:1px solid #ddd;border-radius:5px 5px 0 0;background:#fafafa;}
.m-layer .lytt h2{float:left;font-size:16px;}
.m-layer .lyclose{float:right;font-weight:bold;font-family:arial;font-size:24px;color:#ccc;text-shadow:0 1px #fff;cursor:pointer;}
.m-layer .lyclose:hover{color:#aaa;}
.m-layer .lyct:last-child,.m-layer .lybt{border-bottom-right-radius:5px;border-bottom-left-radius:5px;}
.m-layer .lyct:first-child{border-top-left-radius:5px;border-top-right-radius:5px;}
.m-layer .lyct{padding:20px;background:#fff;height: 60px;font-size: 15px;}
.m-layer .lybt{height:30px;line-height:30px;padding:10px;margin:-1px 0 0;border-top:1px solid #ddd;background:#f7f7f7;}
.m-layer .lyother{float:left;color:#999;}
.m-layer .lybtns{float:right;}
.m-layer .lybtns button{float:left;margin-left:10px;}
/* 通用自定义按钮-默认蓝色 */
.u-btn{display:inline-block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;padding:0 12px;height:28px;line-height:28px;border:1px solid #2d88bf;border-radius:5px;font-size:12px;letter-spacing:1px;text-align:center;vertical-align:middle;cursor:pointer;word-wrap:normal;white-space:nowrap;box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);text-shadow:0 -1px rgba(0,0,0,0.2);background:-webkit-gradient(linear,0% 0%,0% 100%,from(#6dbde4),to(#399dd8));background:-webkit-linear-gradient(#6dbde4,#399dd8);background:-moz-linear-gradient(#6dbde4,#399dd8);background:-ms-linear-gradient(#6dbde4,#399dd8);background:linear-gradient(#6dbde4,#399dd8);}
.u-btn,.u-btn:hover{color:#fff;text-decoration:none;}
.u-btn:hover,.u-btn:focus{background:#399dd8;}
.u-btn:active{box-shadow:inset 0 1px 4px rgba(0,0,0,0.2);}
.u-btn::-moz-focus-inner{padding:0;margin:0;border:0;}
.u-btn .btnsel{display:inline-block;vertical-align:middle;border-style:solid;border-width:4px 4px 0;border-color:rgba(255,255,255,0.8) transparent transparent;}
.u-btn:hover .btnsel,.u-btn:focus .btnsel{border-top-color:rgba(255,255,255,1);}
/* 较大 */
.u-btn-lg{padding:0 15px;height:36px;line-height:36px;font-size:18px;}
.u-btn-lg .btnsel{border-width:5px 5px 0;}
/* 较小 */
.u-btn-sm{padding:0 10px;height:22px;line-height:22px;}
/* 红色 */
.u-btn-c1{border-color:#9f161b;background:-webkit-gradient(linear,0% 0%,0% 100%,from(#ee232a),to(#cc1c23));background:-webkit-linear-gradient(#ee232a,#cc1c23);background:-moz-linear-gradient(#ee232a,#cc1c23);background:-ms-linear-gradient(#ee232a,#cc1c23);background:linear-gradient(#ee232a,#cc1c23);}
.u-btn-c1:hover,.u-btn-c1:focus{background:#cc1c23;}
/* 黄色 */
.u-btn-c2{border-color:#e1962d;background:-webkit-gradient(linear,0% 0%,0% 100%,from(#fbb149),to(#f8960a));background:-webkit-linear-gradient(#fbb149,#f8960a);background:-moz-linear-gradient(#fbb149,#f8960a);background:-ms-linear-gradient(#fbb149,#f8960a);background:linear-gradient(#fbb149,#f8960a);}
.u-btn-c2:hover,.u-btn-c2:focus{background:#f8960a;}
</style>