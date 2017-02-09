import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Create from './components/create.vue'
import DemoGrid from './components/DemoGrid.vue'
import Headbar from './components/headbar.vue'
import Edit from './components/edit.vue'
import {DatePicker,Radio,Checkbox,Icon} from 'element-ui'
Vue.use(VueRouter);
Vue.use(DatePicker);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Icon);
var querys=[];
var ex={
	title:'示例1',
	items:[
		{
    		type:'single',
    		selections:[{content:'选项一'},{content:'选项二'}],
    		content:"单选题（点击修改内容）",
   	 		answer:[]
		},
		{
    		type:'multiple',
    		selections:[{content:'选项一'},{content:'选项二'},{content:'选项三'},{content:'选项四'}],
    		content:'多选题',
    		answer:[]
    	},
    	{
    		type:'txt',
    		content:"文本题",
    		answer:[]
    	}
	],
	deadline:'2017/5/1',
	status:'发布中',
	checked:false
};
querys.push(ex);
ex={
	title:'示例2',
	items:[
		{
    		type:'single',
    		selections:[{content:'选项一'},{content:'选项二'}],
    		content:"单选题（点击修改内容）",
   	 		answer:[]
		},
		{
    		type:'multiple',
    		selections:[{content:'选项一'},{content:'选项二'},{content:'选项三'},{content:'选项四'}],
    		content:'多选题',
    		answer:[]
    	},
    	{
    		type:'txt',
    		content:"文本题",
    		answer:[]
    	}
	],
	deadline:'2017/1/1',
	status:'已结束',
	checked:false
};
querys.push(ex);
ex={
	title:'示例3',
	items:[
		{
    		type:'single',
    		selections:[{content:'选项一'},{content:'选项二'}],
    		content:"单选题（点击修改内容）",
   	 		answer:[]
		},
		{
    		type:'multiple',
    		selections:[{content:'选项一'},{content:'选项二'},{content:'选项三'},{content:'选项四'}],
    		content:'多选题',
    		answer:[]
    	},
    	{
    		type:'txt',
    		content:"文本题",
    		answer:[]
    	}
	],
	deadline:'2017/7/1',
	status:'未发布',
	checked:false
};
querys.push(ex);
const routes=[
    {path:'/',component:DemoGrid},
    {path:'/create',component:Create},
    {path:'/edit',component:Edit,},
]
const router = new VueRouter({routes,mode:'history'});

new Vue({
	router,
	components:{'headbar':Headbar},
}).$mount('#demo')

export {router,querys}