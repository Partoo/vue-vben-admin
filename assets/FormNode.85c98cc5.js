var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var s=(o,e,t)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,a=(o,e)=>{for(var t in e||(e={}))F.call(e,t)&&s(o,t,e[t]);if(p)for(var t of p(e))v.call(e,t)&&s(o,t,e[t]);return o},n=(o,e)=>g(o,C(e));import{a as b,w as N,bc as S,au as k,aw as c,o as y,h as V,i as l,n as f,t as w,q as O,bl as $}from"./index.6fad3ec4.js";import B from"./FormNodeOperate.a7a8a174.js";import{u as D}from"./useFormDesignState.6a9b38b4.js";import _ from"./index.68f914fe.js";import"./index.b6541d10.js";import"./isNumber.86489034.js";import"./formItemConfig.133ffdb1.js";import"./componentMap.4f67364e.js";import"./index.2fe5934d.js";import"./Checkbox.117f7cf3.js";import"./index.96aab1e6.js";import"./index.c4b6e410.js";import"./index.c6ab0e1b.js";import"./index.ed9ac83e.js";import"./index.e2c7509a.js";import"./index.4989020f.js";import"./index.0cd4deb4.js";import"./useFormItem.0512a239.js";import"./RadioButtonGroup.46f181d7.js";import"./get.5b4a0871.js";import"./index.a5f02ea8.js";import"./eagerComputed.bdee3624.js";import"./index.66d22026.js";import"./_baseIteratee.2e490545.js";import"./DeleteOutlined.e08e4c1d.js";import"./index.06e43162.js";import"./useRefs.0b96b7b8.js";import"./Form.e29e1da8.js";import"./Col.c0bbb885.js";import"./useFlexGapSupport.6f696ffa.js";import"./useSize.89e3d7be.js";import"./transButton.7e9f66af.js";import"./index.9bce5e82.js";import"./index.3652a5ec.js";import"./useWindowSizeFn.87c1f21b.js";import"./FullscreenOutlined.8dff0fa3.js";import"./index.88b0a48c.js";import"./index.4085ba48.js";import"./uuid.2b29000c.js";import"./download.4c6b3bff.js";import"./base64Conver.08b9f4ec.js";import"./index.11277286.js";import"./index.22688888.js";/* empty css              */import"./index.60da8520.js";const q=b({name:"FormNode",components:{VFormItem:_,FormNodeOperate:B},props:{schema:{type:Object,required:!0}},setup(o){const{formConfig:e,formDesignMethods:t}=D(),r=N({}),m=()=>{t.handleSetSelectItem(o.schema)};return n(a({},S(r)),{handleSelectItem:m,formConfig:e})}}),M={class:"form-item-box"},j={class:"show-key-box"};function z(o,e,t,r,m,E){var i;const d=c("VFormItem"),h=c("FormNodeOperate");return y(),V("div",{class:O(["drag-move-box",{active:o.schema.key===((i=o.formConfig.currentItem)==null?void 0:i.key)}]),onClick:e[0]||(e[0]=$((...u)=>o.handleSelectItem&&o.handleSelectItem(...u),["stop"]))},[l("div",M,[f(d,{formConfig:o.formConfig,schema:o.schema},null,8,["formConfig","schema"])]),l("div",j,w(o.schema.label+(o.schema.field?"/"+o.schema.field:"")),1),f(h,{schema:o.schema,currentItem:o.formConfig.currentItem},null,8,["schema","currentItem"])],2)}var Do=k(q,[["render",z]]);export{Do as default};
