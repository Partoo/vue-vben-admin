import{a as o,v as r,a7 as n,o as u,j as l,z as s,i as m,bm as d,k as f}from"./index.6fad3ec4.js";import{C as p}from"./index.876b8487.js";import"./index.cd216192.js";/* empty css              */import{u as c}from"./useECharts.fc0fe2a9.js";import"./index.ba8b3889.js";import"./index.24db2984.js";import"./Col.c0bbb885.js";import"./useFlexGapSupport.6f696ffa.js";import"./index.60da8520.js";import"./useRefs.0b96b7b8.js";import"./PlusOutlined.45e0fa6c.js";const A=o({__name:"VisitSource",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=r(null),{setOptions:i}=c(a);return n(()=>t.loading,()=>{t.loading||i({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u641C\u7D22\u5F15\u64CE"},{value:735,name:"\u76F4\u63A5\u8BBF\u95EE"},{value:580,name:"\u90AE\u4EF6\u8425\u9500"},{value:484,name:"\u8054\u76DF\u5E7F\u544A"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),(h,g)=>(u(),l(f(p),{title:"\u8BBF\u95EE\u6765\u6E90",loading:e.loading},{default:s(()=>[m("div",{ref_key:"chartRef",ref:a,style:d({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{A as default};
