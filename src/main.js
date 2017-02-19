import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Create from './components/create.vue'
import DemoGrid from './components/DemoGrid.vue'
import Headbar from './components/headbar.vue'
import Edit from './components/edit.vue'
import Result from './components/result.vue'
import {DatePicker,Radio,Checkbox,Icon} from 'element-ui'
import './components/animate.css'
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
            selections:[{content:'地域'},{content:'薪酬与福利'}],
            content:"在求职过程中，你优先考虑的因素是？(单选)",
            answer:{ 
                    tooltip: {},
                    legend:{
                        data:['数量']
                    },
                    xAxis:{
                        data:["地域","薪酬与福利"]
                    },
                    yAxis:{},
                    series:[{
                        name:'数量',
                        type:'bar',
                        data:[300,500]
                    }]
                }
        },
        {
            type:'multiple',
            selections:[{content:'专业能力'},{content:'自我表达能力'},{content:'外语能力'},{content:'人际交往能力'}],
            content:'你在求职过程中遇到的与自身能力相关的主要问题是？(可选一项或两项) ',
            answer:{ 
                    tooltip: {},
                    series : [
                        {
                            name: '主要问题',
                            type: 'pie',
                            radius: '55%',
                            data:[
                                {value:400, name:'专业能力'},
                                {value:335, name:'自我表达能力'},
                                {value:335, name:'外语能力'},
                                {value:335, name:'人际交往能力'},
                            ],
                            roseType: 'angle',
                            itemStyle: {
                                normal: {
                                    shadowBlur: 200,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
        },
        {
            type:'txt',
            content:"你认为最有效的求职途径是？（文本题）",
            answer:{ 
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['有效回答','无效回答']
                    },
                    series : [
                        {
                            name: '回答',
                            type: 'pie',
                            radius: ['50%','70%'],
                            avoidLabelOverlap:false,
                            label:{
                                normal:{
                                    show:false,
                                    position:'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine:{
                                normal:{
                                    show:false
                                }
                            },
                            data:[
                                {value:900, name:'有效回答'},
                                {value:335, name:'无效回答'},
                            ]
                        }
                    ]
                }
        }
    ],
    deadline:'2017/1/1',
    status:'已结束',
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
            answer:{ 
            }
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
    deadline:'2017/6/1',
    status:'发布中',
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
    {path:'/result',component:Result}
]
const router = new VueRouter({routes,mode:'history'});
new Vue({
    router,
    components:{'headbar':Headbar},
    data:{transitionName:'slde-fade'},
    watch: {
        '$route' (to, from) {     
            this.transitionName = 'slide-fade'
        }
    }
}).$mount('#demo')

export {router,querys}