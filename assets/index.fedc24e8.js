import{a as _,aE as v,v as t,b,f as x,k as e,o as y,h as w,n as H,z as k,i as z,q as c,bm as l,b1 as S,au as R}from"./index.6fad3ec4.js";import{u as C}from"./useWindowSizeFn.87c1f21b.js";import{a as B}from"./useContentViewHeight.4aa1fd71.js";const E=["src"],L=_({__name:"index",props:{frameSrc:v.string.def("")},setup(p){const i=t(!0),g=t(50),s=t(window.innerHeight),o=t(),{headerHeightRef:m}=B(),{prefixCls:r}=b("iframe-page");C(d,150,{immediate:!0});const f=x(()=>({height:`${e(s)}px`}));function d(){const n=e(o);if(!n)return;const a=m.value;g.value=a,s.value=window.innerHeight-a;const h=document.documentElement.clientHeight-a;n.style.height=`${h}px`}function u(){i.value=!1,d()}return(n,a)=>(y(),w("div",{class:c(e(r)),style:l(e(f))},[H(e(S),{spinning:i.value,size:"large",style:l(e(f))},{default:k(()=>[z("iframe",{src:p.frameSrc,class:c(`${e(r)}__main`),ref_key:"frameRef",ref:o,onLoad:u},null,42,E)]),_:1},8,["spinning","style"])],6))}});var V=R(L,[["__scopeId","data-v-179381bf"]]);export{V as default};
