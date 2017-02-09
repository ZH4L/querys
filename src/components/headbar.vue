<template>
	<div class="head">
		<div class="logo">
			<div class="query">?</div>问卷管理
		</div>
		<div class="mysurvey">我的问卷</div>
	</div>
</template>
<script>
	export default{
		name:'headbar'
	}
</script>
<style>
	.head{box-sizing: border-box; width: 100%;height: 48px;padding-left: 84px; background-color: #ee7419;color: #fff;line-height: 48px;cursor: default;}
	.head .logo{float: left;margin-right: 80px; font:bold 20px/48px '宋体';}
	.head .logo .query{display: inline-block; width:20px;height: 20px;margin-right: 8px; border-radius: 20px;vertical-align:middle;line-height: 20px;text-align: center;  background-color: #fff;color: #ee7419;}
	.head .mysurvey{font: 16px/48px '宋体'}
</style>