import{_ as O,G as w,a as ce,w as De,v as M,N as be,al as te,a7 as Y,b$ as pe,f as K,c0 as Ee,R as se,S as V,n as C,T as H,c1 as ge,c2 as Me,c3 as je,ar as Ce,c4 as ze,U as _e,ak as xe,K as Ie,J as Le,c5 as oe,a4 as Ve,c6 as le,c7 as Be}from"./index.6fad3ec4.js";var ke=function(){return{prefixCls:String,width:w.oneOfType([w.string,w.number]),height:w.oneOfType([w.string,w.number]),style:{type:Object,default:void 0},class:String,placement:{type:String},wrapperClassName:String,level:{type:[String,Array]},levelMove:{type:[Number,Function,Array]},duration:String,ease:String,showMask:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},afterVisibleChange:Function,keyboard:{type:Boolean,default:void 0},contentWrapperStyle:{type:Object,default:void 0},autofocus:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0}}},Fe=function(){return O(O({},ke()),{forceRender:{type:Boolean,default:void 0},getContainer:w.oneOfType([w.string,w.func,w.object,w.looseBool])})},Ae=function(){return O(O({},ke()),{getContainer:Function,getOpenCount:Function,scrollLocker:w.any,switchScrollingEffect:Function})};function He(a){return Array.isArray(a)?a:[a]}var Se={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},We=Object.keys(Se).filter(function(a){if(typeof document=="undefined")return!1;var e=document.getElementsByTagName("html")[0];return a in(e?e.style:{})})[0],ue=Se[We];function fe(a,e,l,n){a.addEventListener?a.addEventListener(e,l,n):a.attachEvent&&a.attachEvent("on".concat(e),l)}function ve(a,e,l,n){a.removeEventListener?a.removeEventListener(e,l,n):a.attachEvent&&a.detachEvent("on".concat(e),l)}function Re(a,e){var l=typeof a=="function"?a(e):a;return Array.isArray(l)?l.length===2?l:[l[0],l[1]]:[l]}var he=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ie=!(typeof window!="undefined"&&window.document&&window.document.createElement),$e=function a(e,l,n,i){if(!l||l===document||l instanceof Document)return!1;if(l===e.parentNode)return!0;var N=Math.max(Math.abs(n),Math.abs(i))===Math.abs(i),P=Math.max(Math.abs(n),Math.abs(i))===Math.abs(n),T=l.scrollHeight-l.clientHeight,d=l.scrollWidth-l.clientWidth,v=document.defaultView.getComputedStyle(l),j=v.overflowY==="auto"||v.overflowY==="scroll",k=v.overflowX==="auto"||v.overflowX==="scroll",D=T&&j,E=d&&k;return N&&(!D||D&&(l.scrollTop>=T&&i<0||l.scrollTop<=0&&i>0))||P&&(!E||E&&(l.scrollLeft>=d&&n<0||l.scrollLeft<=0&&n>0))?a(e,l.parentNode,n,i):!1},Xe=globalThis&&globalThis.__rest||function(a,e){var l={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(l[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(a);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(a,n[i])&&(l[n[i]]=a[n[i]]);return l},X={},Ye=ce({inheritAttrs:!1,props:Ae(),emits:["close","handleClick","change"],setup:function(e,l){var n=l.emit,i=l.slots,N=De({startPos:{x:null,y:null}}),P,T=M(),d=M(),v=M(),j=M(),k=M(),D=[],E="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),W=!ie&&je?{passive:!1}:!1;be(function(){te(function(){var r,t=e.open,o=e.getContainer,u=e.showMask,f=e.autofocus,y=o==null?void 0:o();g(e),t&&(y&&y.parentNode===document.body&&(X[E]=t),G(),te(function(){f&&z()}),u&&((r=e.scrollLocker)===null||r===void 0||r.lock()))})}),Y(function(){return e.level},function(){g(e)},{flush:"post"}),Y(function(){return e.open},function(){var r=e.open,t=e.getContainer,o=e.scrollLocker,u=e.showMask,f=e.autofocus,y=t==null?void 0:t();y&&y.parentNode===document.body&&(X[E]=!!r),G(),r?(f&&z(),u&&(o==null||o.lock())):o==null||o.unLock()},{flush:"post"}),pe(function(){var r,t=e.open;delete X[E],t&&(J(!1),document.body.style.touchAction=""),(r=e.scrollLocker)===null||r===void 0||r.unLock()}),Y(function(){return e.placement},function(r){r&&(k.value=null)});var z=function(){var t,o;(o=(t=d.value)===null||t===void 0?void 0:t.focus)===null||o===void 0||o.call(t)},B=function(t){t.touches.length>1||(N.startPos={x:t.touches[0].clientX,y:t.touches[0].clientY})},L=function(t){if(!(t.changedTouches.length>1)){var o=t.currentTarget,u=t.changedTouches[0].clientX-N.startPos.x,f=t.changedTouches[0].clientY-N.startPos.y;(o===v.value||o===j.value||o===k.value&&$e(o,t.target,u,f))&&t.cancelable&&t.preventDefault()}},$=function r(t){var o=t.target;ve(o,ue,r),o.style.transition=""},U=function(t){n("close",t)},Z=function(t){t.keyCode===Me.ESC&&(t.stopPropagation(),U(t))},ae=function(t){var o=e.open,u=e.afterVisibleChange;t.target===T.value&&t.propertyName.match(/transform$/)&&(d.value.style.transition="",!o&&p()&&(document.body.style.overflowX="",v.value&&(v.value.style.left="",v.value.style.width="")),u&&u(!!o))},q=K(function(){var r=e.placement,t=r==="left"||r==="right",o="translate".concat(t?"X":"Y");return{isHorizontal:t,placementName:o}}),G=function(){var t=e.open,o=e.width,u=e.height,f=q.value,y=f.isHorizontal,m=f.placementName,b=k.value?k.value.getBoundingClientRect()[y?"width":"height"]:0,S=(y?o:u)||b;ne(t,m,S)},J=function(t,o,u,f){var y=e.placement,m=e.levelMove,b=e.duration,S=e.ease,I=e.showMask;D.forEach(function(R){R.style.transition="transform ".concat(b," ").concat(S),fe(R,ue,$);var F=t?u:0;if(m){var Q=Re(m,{target:R,open:t});F=t?Q[0]:Q[1]||0}var ee=typeof F=="number"?"".concat(F,"px"):F,A=y==="left"||y==="top"?ee:"-".concat(ee);A=I&&y==="right"&&f?"calc(".concat(A," + ").concat(f,"px)"):A,R.style.transform=F?"".concat(o,"(").concat(A,")"):""})},ne=function(t,o,u){if(!ie){var f=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?Ee(!0):0;J(t,o,u,f),h(f)}n("change",t)},h=function(t){var o=e.getContainer,u=e.showMask,f=e.open,y=o==null?void 0:o();if(y&&y.parentNode===document.body&&u){var m=["touchstart"],b=[document.body,v.value,j.value,k.value];f&&document.body.style.overflow!=="hidden"?(t&&s(t),document.body.style.touchAction="none",b.forEach(function(S,I){!S||fe(S,m[I]||"touchmove",I?L:B,W)})):p()&&(document.body.style.touchAction="",t&&c(t),b.forEach(function(S,I){!S||ve(S,m[I]||"touchmove",I?L:B,W)}))}},s=function(t){var o=e.placement,u=e.duration,f=e.ease,y="width ".concat(u," ").concat(f),m="transform ".concat(u," ").concat(f);switch(d.value.style.transition="none",o){case"right":d.value.style.transform="translateX(-".concat(t,"px)");break;case"top":case"bottom":d.value.style.width="calc(100% - ".concat(t,"px)"),d.value.style.transform="translateZ(0)";break}clearTimeout(P),P=setTimeout(function(){d.value&&(d.value.style.transition="".concat(m,",").concat(y),d.value.style.width="",d.value.style.transform="")})},c=function(t){var o=e.placement,u=e.duration,f=e.ease;d.value.style.transition="none";var y,m="width ".concat(u," ").concat(f),b="transform ".concat(u," ").concat(f);switch(o){case"left":{d.value.style.width="100%",m="width 0s ".concat(f," ").concat(u);break}case"right":{d.value.style.transform="translateX(".concat(t,"px)"),d.value.style.width="100%",m="width 0s ".concat(f," ").concat(u),v.value&&(v.value.style.left="-".concat(t,"px"),v.value.style.width="calc(100% + ".concat(t,"px)"));break}case"top":case"bottom":{d.value.style.width="calc(100% + ".concat(t,"px)"),d.value.style.height="100%",d.value.style.transform="translateZ(0)",y="height 0s ".concat(f," ").concat(u);break}}clearTimeout(P),P=setTimeout(function(){d.value&&(d.value.style.transition="".concat(b,",").concat(y?"".concat(y,","):"").concat(m),d.value.style.transform="",d.value.style.width="",d.value.style.height="")})},p=function(){return!Object.keys(X).some(function(t){return X[t]})},g=function(t){var o=t.level,u=t.getContainer;if(!ie){var f=u==null?void 0:u(),y=f?f.parentNode:null;if(D=[],o==="all"){var m=y?Array.prototype.slice.call(y.children):[];m.forEach(function(b){b.nodeName!=="SCRIPT"&&b.nodeName!=="STYLE"&&b.nodeName!=="LINK"&&b!==f&&D.push(b)})}else o&&He(o).forEach(function(b){document.querySelectorAll(b).forEach(function(S){D.push(S)})})}},x=function(t){n("handleClick",t)},_=M(!1);return Y(d,function(){te(function(){_.value=!0})}),function(){var r,t,o,u=e.width,f=e.height,y=e.open,m=e.prefixCls,b=e.placement;e.level,e.levelMove,e.ease,e.duration,e.getContainer,e.onChange,e.afterVisibleChange;var S=e.showMask,I=e.maskClosable,R=e.maskStyle,F=e.keyboard;e.getOpenCount,e.scrollLocker;var Q=e.contentWrapperStyle,ee=e.style,A=e.class,Oe=Xe(e,["width","height","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","keyboard","getOpenCount","scrollLocker","contentWrapperStyle","style","class"]),re=y&&_.value,Pe=se(m,(r={},V(r,"".concat(m,"-").concat(b),!0),V(r,"".concat(m,"-open"),re),V(r,A,!!A),V(r,"no-mask",!S),r)),Ne=q.value.placementName,Te=b==="left"||b==="top"?"-100%":"100%",de=re?"":"".concat(Ne,"(").concat(Te,")");return C("div",H(H({},ge(Oe,["switchScrollingEffect","autofocus"])),{},{tabindex:-1,class:Pe,style:ee,ref:d,onKeydown:re&&F?Z:void 0,onTransitionend:ae}),[S&&C("div",{class:"".concat(m,"-mask"),onClick:I?U:void 0,style:R,ref:v},null),C("div",{class:"".concat(m,"-content-wrapper"),style:O({transform:de,msTransform:de,width:he(u)?"".concat(u,"px"):u,height:he(f)?"".concat(f,"px"):f},Q),ref:T},[C("div",{class:"".concat(m,"-content"),ref:k},[(t=i.default)===null||t===void 0?void 0:t.call(i)]),i.handler?C("div",{onClick:x,ref:j},[(o=i.handler)===null||o===void 0?void 0:o.call(i)]):null])])}}}),we=Ye,ye=globalThis&&globalThis.__rest||function(a,e){var l={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(l[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(a);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(a,n[i])&&(l[n[i]]=a[n[i]]);return l},Ke=ce({inheritAttrs:!1,props:Ce(Fe(),{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",afterVisibleChange:function(){},showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",keyboard:!0,forceRender:!1,autofocus:!0}),emits:["handleClick","close"],slots:["handler"],setup:function(e,l){var n=l.emit,i=l.slots,N=M(null),P=function(v){n("handleClick",v)},T=function(v){n("close",v)};return function(){e.afterVisibleChange;var d=e.getContainer,v=e.wrapperClassName,j=e.forceRender,k=ye(e,["afterVisibleChange","getContainer","wrapperClassName","forceRender"]),D=null;if(!d)return C("div",{class:v,ref:N},[C(we,H(H({},k),{},{open:e.open,getContainer:function(){return N.value},onClose:T,onHandleClick:P}),i)]);var E=!!i.handler||j;return(E||e.open||N.value)&&(D=C(ze,{visible:e.open,forceRender:E,getContainer:d,wrapperClassName:v},{default:function(z){var B=z.visible,L=z.afterClose,$=ye(z,["visible","afterClose"]);return C(we,H(H(H({ref:N},k),$),{},{open:B!==void 0?B:e.open,afterVisibleChange:L!==void 0?L:e.afterVisibleChange,onClose:T,onHandleClick:P}),i)}})),D}}}),Ue=Ke,Ze=globalThis&&globalThis.__rest||function(a,e){var l={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(l[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(a);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(a,n[i])&&(l[n[i]]=a[n[i]]);return l},qe=xe("top","right","bottom","left");xe("default","large");var me={distance:180},Ge=function(){return{autofocus:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:w.any,destroyOnClose:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},getContainer:w.any,maskClosable:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},wrapStyle:{type:Object,default:void 0},style:{type:Object,default:void 0},class:w.any,wrapClassName:String,size:{type:String},drawerStyle:{type:Object,default:void 0},headerStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},contentWrapperStyle:{type:Object,default:void 0},title:w.any,visible:{type:Boolean,default:void 0},width:w.oneOfType([w.string,w.number]),height:w.oneOfType([w.string,w.number]),zIndex:Number,prefixCls:String,push:w.oneOfType([w.looseBool,{type:Object}]),placement:w.oneOf(qe),keyboard:{type:Boolean,default:void 0},extra:w.any,footer:w.any,footerStyle:{type:Object,default:void 0},level:w.any,levelMove:{type:[Number,Array,Function]},handle:w.any,afterVisibleChange:Function,onAfterVisibleChange:Function,"onUpdate:visible":Function,onClose:Function}},Je=ce({name:"ADrawer",inheritAttrs:!1,props:Ce(Ge(),{closable:!0,placement:"right",maskClosable:!0,mask:!0,level:null,keyboard:!0,push:me}),slots:["closeIcon","title","extra","footer","handle"],setup:function(e,l){var n=l.emit,i=l.slots,N=l.attrs,P=M(!1),T=M(!1),d=M(null),v=Ie("parentDrawerOpts",null),j=Le("drawer",e),k=j.prefixCls;oe(!e.afterVisibleChange,"Drawer","`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"),oe(e.wrapStyle===void 0,"Drawer","`wrapStyle` prop is deprecated, please use `style` instead"),oe(e.wrapClassName===void 0,"Drawer","`wrapClassName` prop is deprecated, please use `class` instead");var D=function(){P.value=!0},E=function(){P.value=!1,te(function(){W()})};Ve("parentDrawerOpts",{setPush:D,setPull:E}),be(function(){var h=e.visible;h&&v&&v.setPush()}),pe(function(){v&&v.setPull()}),Y(function(){return e.visible},function(h){v&&(h?v.setPush():v.setPull())},{flush:"post"});var W=function(){var s,c;(c=(s=d.value)===null||s===void 0?void 0:s.domFocus)===null||c===void 0||c.call(s)},z=function(s){n("update:visible",!1),n("close",s)},B=function(s){var c;(c=e.afterVisibleChange)===null||c===void 0||c.call(e,s),n("afterVisibleChange",s)},L=K(function(){return e.destroyOnClose&&!e.visible}),$=function(){var s=L.value;!s||e.visible||(T.value=!0)},U=K(function(){var h=e.push,s=e.placement,c;return typeof h=="boolean"?c=h?me.distance:0:c=h.distance,c=parseFloat(String(c||0)),s==="left"||s==="right"?"translateX(".concat(s==="left"?c:-c,"px)"):s==="top"||s==="bottom"?"translateY(".concat(s==="top"?c:-c,"px)"):null}),Z=K(function(){var h=e.visible,s=e.mask,c=e.placement,p=e.size,g=p===void 0?"default":p,x=e.width,_=e.height;if(!h&&!s)return{};var r={};if(c==="left"||c==="right"){var t=g==="large"?736:378;r.width=typeof x=="undefined"?t:x,r.width=typeof r.width=="string"?r.width:"".concat(r.width,"px")}else{var o=g==="large"?736:378;r.height=typeof _=="undefined"?o:_,r.height=typeof r.height=="string"?r.height:"".concat(r.height,"px")}return r}),ae=K(function(){var h=e.zIndex,s=e.wrapStyle,c=e.mask,p=e.style,g=c?{}:Z.value;return O(O(O({zIndex:h,transform:P.value?U.value:void 0},g),s),p)}),q=function(s){var c=e.closable,p=e.headerStyle,g=le(i,e,"extra"),x=le(i,e,"title");return!x&&!c?null:C("div",{class:se("".concat(s,"-header"),V({},"".concat(s,"-header-close-only"),c&&!x&&!g)),style:p},[C("div",{class:"".concat(s,"-header-title")},[G(s),x&&C("div",{class:"".concat(s,"-title")},[x])]),g&&C("div",{class:"".concat(s,"-extra")},[g])])},G=function(s){var c,p=e.closable,g=i.closeIcon?(c=i.closeIcon)===null||c===void 0?void 0:c.call(i):e.closeIcon;return p&&C("button",{key:"closer",onClick:z,"aria-label":"Close",class:"".concat(s,"-close")},[g===void 0?C(Be,null,null):g])},J=function(s){var c;if(T.value&&!e.visible)return null;T.value=!1;var p=e.bodyStyle,g=e.drawerStyle,x={},_=L.value;return _&&(x.opacity=0,x.transition="opacity .3s"),C("div",{class:"".concat(s,"-wrapper-body"),style:O(O({},x),g),onTransitionend:$},[q(s),C("div",{key:"body",class:"".concat(s,"-body"),style:p},[(c=i.default)===null||c===void 0?void 0:c.call(i)]),ne(s)])},ne=function(s){var c=le(i,e,"footer");if(!c)return null;var p="".concat(s,"-footer");return C("div",{class:p,style:e.footerStyle},[c])};return function(){var h;e.width,e.height;var s=e.visible,c=e.placement,p=e.mask,g=e.wrapClassName,x=e.class,_=Ze(e,["width","height","visible","placement","mask","wrapClassName","class"]),r=p?Z.value:{},t=p?"":"no-mask",o=O(O(O(O({},N),ge(_,["size","closeIcon","closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","wrapStyle","onAfterVisibleChange","onClose","onUpdate:visible"])),r),{onClose:z,afterVisibleChange:B,handler:!1,prefixCls:k.value,open:s,showMask:p,placement:c,class:se((h={},V(h,x,x),V(h,g,!!g),V(h,t,!!t),h)),style:ae.value,ref:d});return C(Ue,o,{handler:e.handle?function(){return e.handle}:i.handle,default:function(){return J(k.value)}})}}}),et=_e(Je);export{et as D};
