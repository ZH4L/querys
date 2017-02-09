<template>
	<div class="create">
		<router-link :to="{path:'edit',query:{index:'new'}}" ><button class="btn btn-cre"> + 新建问卷</button></router-link>
	</div>
</template>
<script>
	import {router,querys} from'../main.js'
	export default{
		name:'create',
	}
</script>
<style>
	.create{position: absolute;left: 50%; width: 1050px;height: 325px;margin-left: -525px; box-shadow: 3px 3px 5px #999;margin-top: 80px;background-color: #fff;}
	.btn.btn-cre{position: absolute;left: 50%;top: 50%; width: 194px;height: 52px;margin-left: -97px;margin-top: -26px;}
</style>