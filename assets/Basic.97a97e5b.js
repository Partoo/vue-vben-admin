import{B as f}from"./TableImg.c05574a0.js";import"./componentMap.4f67364e.js";import{getBasicColumns as B,getBasicData as v}from"./tableData.0b4a80b5.js";import{au as b,a as h,v as i,aw as c,o as A,h as E,n as e,z as r,B as m,t as l}from"./index.6fad3ec4.js";import"./index.2fe5934d.js";import"./Checkbox.117f7cf3.js";import"./index.96aab1e6.js";import"./index.a5f02ea8.js";import"./eagerComputed.bdee3624.js";import"./BasicForm.f341dcde.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.c26f483d.js";import"./index.0cd4deb4.js";import"./index.66d22026.js";import"./_baseIteratee.2e490545.js";import"./get.5b4a0871.js";import"./DeleteOutlined.e08e4c1d.js";import"./index.06e43162.js";import"./useRefs.0b96b7b8.js";import"./Form.e29e1da8.js";import"./Col.c0bbb885.js";import"./useFlexGapSupport.6f696ffa.js";import"./useSize.89e3d7be.js";import"./index.60da8520.js";import"./uniqBy.7499566e.js";import"./index.3652a5ec.js";import"./useWindowSizeFn.87c1f21b.js";import"./FullscreenOutlined.8dff0fa3.js";import"./index.24db2984.js";import"./useForm.04fea4bb.js";import"./RadioButtonGroup.46f181d7.js";import"./useFormItem.0512a239.js";import"./index.dbd14e87.js";import"./index.ee946476.js";import"./index.0372eaac.js";import"./useContentViewHeight.4aa1fd71.js";import"./ArrowLeftOutlined.e14f706f.js";import"./index.dae6b52c.js";import"./transButton.7e9f66af.js";import"./index.ed9ac83e.js";import"./index.e2c7509a.js";import"./index.c6ab0e1b.js";import"./index.c4b6e410.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.f74d228c.js";import"./index.4085ba48.js";import"./isNumber.86489034.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e0abe7e5.js";import"./index.411d35cb.js";import"./index.4989020f.js";import"./index.9bce5e82.js";import"./index.88b0a48c.js";import"./download.4c6b3bff.js";import"./base64Conver.08b9f4ec.js";import"./index.11277286.js";import"./index.22688888.js";import"./select.9fda38b3.js";const k=h({components:{BasicTable:f},setup(){const o=i(!1),a=i(!1),p=i(!0),n=i(!0),u=i(!1);function d(){o.value=!o.value}function t(){p.value=!p.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,u.value={pageSize:20}},3e3)}function g(){n.value=!n.value}function C(F){}return{columns:B(),data:v(),canResize:o,loading:a,striped:p,border:n,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:u,handleColumnChange:C}}}),y={class:"p-4"};function z(o,a,p,n,u,d){const t=c("a-button"),s=c("BasicTable");return A(),E("div",y,[e(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[e(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[m(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[m(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[m(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[m(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var Lo=b(k,[["render",z]]);export{Lo as default};
