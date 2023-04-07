import{b as X,aH as O,k as Y,ad as B,aI as k,l as w,e as S,af as P,ae as _,d as U,bL as $,ah as x,a6 as ee,u as ae,bM as te,c as u,ap as ie,bG as ne,a as I,a2 as oe,A as V,am as se,z as le,v as o,x as d,G as T,F as a,Z as r,a_ as re,Q as v,H as b,aC as E,aB as g,S as c,R as N,f as ce,bN as ue,T as A,aZ as de,a4 as ve,t as fe,bO as K,al as pe,n as me}from"./index.js";import{i as he}from"./el-input.js";const ye=X({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:O},inactiveIcon:{type:O},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:Y(Function)},size:{type:String,validator:he},tabindex:{type:[String,Number]}}),be={[B]:s=>k(s)||w(s)||S(s),[P]:s=>k(s)||w(s)||S(s),[_]:s=>k(s)||w(s)||S(s)},ge=["onClick"],ke=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Ce=["aria-hidden"],we=["aria-hidden"],Se=["aria-hidden"],z="ElSwitch",Ie=U({name:z}),Ve=U({...Ie,props:ye,emits:be,setup(s,{expose:G,emit:f}){const t=s,H=$(),{formItem:m}=x(),L=ee(),i=ae("switch");te({from:'"value"',replacement:'"model-value" or "v-model"',scope:z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u(()=>{var e;return!!((e=H.vnode.props)!=null&&e.value)}));const{inputId:Z}=ie(t,{formItemContext:m}),h=ne(u(()=>t.loading)),C=I(t.modelValue!==!1),p=I(),Q=I(),R=u(()=>[i.b(),i.m(L.value),i.is("disabled",h.value),i.is("checked",n.value)]),W=u(()=>({width:oe(t.width)}));V(()=>t.modelValue,()=>{C.value=!0}),V(()=>t.value,()=>{C.value=!1});const D=u(()=>C.value?t.modelValue:t.value),n=u(()=>D.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(D.value)||(f(B,t.inactiveValue),f(P,t.inactiveValue),f(_,t.inactiveValue)),V(n,e=>{var l;p.value.checked=e,t.validateEvent&&((l=m==null?void 0:m.validate)==null||l.call(m,"change").catch(J=>se()))});const y=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(B,e),f(P,e),f(_,e),fe(()=>{p.value.checked=n.value})},F=()=>{if(h.value)return;const{beforeChange:e}=t;if(!e){y();return}const l=e();[K(l),k(l)].includes(!0)||pe(z,"beforeChange must return type `Promise<boolean>` or `boolean`"),K(l)?l.then(M=>{M&&y()}).catch(M=>{}):l&&y()},j=u(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),q=()=>{var e,l;(l=(e=p.value)==null?void 0:e.focus)==null||l.call(e)};return le(()=>{p.value.checked=n.value}),G({focus:q,checked:n}),(e,l)=>(o(),d("div",{class:r(a(R)),style:A(a(j)),onClick:de(F,["prevent"])},[T("input",{id:a(Z),ref_key:"input",ref:p,class:r(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(h),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(h),tabindex:e.tabindex,onChange:y,onKeydown:re(F,["enter"])},null,42,ke),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),d("span",{key:0,class:r([a(i).e("label"),a(i).em("label","left"),a(i).is("active",!a(n))])},[e.inactiveIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.inactiveIcon)))]),_:1})):c("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),d("span",{key:1,"aria-hidden":a(n)},N(e.inactiveText),9,Ce)):c("v-if",!0)],2)):c("v-if",!0),T("span",{ref_key:"core",ref:Q,class:r(a(i).e("core")),style:A(a(W))},[e.inlinePrompt?(o(),d("div",{key:0,class:r(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),v(a(g),{key:0,class:r(a(i).is("icon"))},{default:b(()=>[(o(),v(E(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),d("span",{key:1,class:r(a(i).is("text")),"aria-hidden":!a(n)},N(a(n)?e.activeText:e.inactiveText),11,we)):c("v-if",!0)],2)):c("v-if",!0),T("div",{class:r(a(i).e("action"))},[e.loading?(o(),v(a(g),{key:0,class:r(a(i).is("loading"))},{default:b(()=>[ce(a(ue))]),_:1},8,["class"])):c("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),d("span",{key:1,class:r([a(i).e("label"),a(i).em("label","right"),a(i).is("active",a(n))])},[e.activeIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.activeIcon)))]),_:1})):c("v-if",!0),!e.activeIcon&&e.activeText?(o(),d("span",{key:1,"aria-hidden":!a(n)},N(e.activeText),9,Se)):c("v-if",!0)],2)):c("v-if",!0)],14,ge))}});var Te=ve(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Be=me(Te);export{Be as E};