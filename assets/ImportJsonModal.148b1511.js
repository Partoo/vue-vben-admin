var F=Object.defineProperty,y=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var _=(o,e,t)=>e in o?F(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,d=(o,e)=>{for(var t in e||(e={}))I.call(e,t)&&_(o,t,e[t]);if(C)for(var t of C(e))M.call(e,t)&&_(o,t,e[t]);return o},i=(o,e)=>y(o,E(e));import{u as B}from"./useFormDesignState.6a9b38b4.js";import{f as D,g as U}from"./index.b6541d10.js";import{C as g,M as j}from"./index.fd6efea5.js";import{a as w,dG as J,w as S,bc as k,au as O,E as N,aw as l,o as x,j as $,z as n,n as r,B as c,i as h,fh as T,fi as V}from"./index.6fad3ec4.js";import{U as z}from"./index.66d22026.js";import"./index.06e43162.js";import"./isNumber.86489034.js";import"./useWindowSizeFn.87c1f21b.js";import"./_baseIteratee.2e490545.js";import"./get.5b4a0871.js";import"./DeleteOutlined.e08e4c1d.js";import"./Form.e29e1da8.js";import"./Col.c0bbb885.js";import"./useFlexGapSupport.6f696ffa.js";import"./useSize.89e3d7be.js";import"./useRefs.0b96b7b8.js";const A=w({name:"ImportJsonModal",components:{CodeEditor:g,Upload:z,Modal:J},setup(){const{createMessage:o}=N(),e=S({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "\u8F93\u5165\u6846",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:t}=B(),p=()=>{e.visible=!1},m=()=>{e.visible=!0},u=()=>{try{const a=JSON.parse(e.json);a.schemas&&D(a.schemas,s=>{U(s)}),t.setFormConfig(i(d({},a),{activeKey:1,currentItem:{component:""}})),p(),o.success("\u5BFC\u5165\u6210\u529F")}catch(a){o.error("\u5BFC\u5165\u5931\u8D25\uFF0C\u6570\u636E\u683C\u5F0F\u4E0D\u5BF9")}};return i(d({handleImportJson:u,beforeUpload:a=>{const s=new FileReader;return s.readAsText(a),s.onload=function(){e.json=this.result,u()},!1},handleCancel:p,showModal:m},k(e)),{MODE:j})}}),K=o=>(T("data-v-69289c55"),o=o(),V(),o),L=K(()=>h("p",{class:"hint-box"},"\u5BFC\u5165\u683C\u5F0F\u5982\u4E0B:",-1)),R={class:"v-json-box"};function G(o,e,t,p,m,u){const f=l("CodeEditor"),a=l("a-button"),s=l("Upload"),b=l("Modal");return x(),$(b,{title:"JSON\u6570\u636E",visible:o.visible,onOk:o.handleImportJson,onCancel:o.handleCancel,cancelText:"\u5173\u95ED",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[r(a,{onClick:o.handleCancel},{default:n(()=>[c("\u53D6\u6D88")]),_:1},8,["onClick"]),r(s,{class:"upload-button",beforeUpload:o.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[r(a,{type:"primary"},{default:n(()=>[c("\u5BFC\u5165json\u6587\u4EF6")]),_:1})]),_:1},8,["beforeUpload"]),r(a,{type:"primary",onClick:o.handleImportJson},{default:n(()=>[c("\u786E\u5B9A")]),_:1},8,["onClick"])]),default:n(()=>[L,h("div",R,[r(f,{value:o.json,"onUpdate:value":e[0]||(e[0]=v=>o.json=v),ref:"myEditor",mode:o.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["visible","onOk","onCancel"])}var uo=O(A,[["render",G],["__scopeId","data-v-69289c55"]]);export{uo as default};
