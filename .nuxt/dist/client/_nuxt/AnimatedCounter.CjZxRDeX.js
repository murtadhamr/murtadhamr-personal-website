import{_ as i}from"./Button.D5cZvwKD.js";import{k as m,X as l,r as p,Y as _,Z as d,b as f,c as x,e,t as h,B as n,g as b,w as g,p as w,i as y}from"./entry.CYVtK0uM.js";import"./Icon.BFp4rC2z.js";const N=t=>(w("data-v-e9f86973"),t=t(),y(),t),C={class:"px-4 py-8 flex items-center justify-center flex-col"},k={class:"sr-only"},S=N(()=>e("p",{class:"text-xs mt-2 text-gray-500"}," or start the counter when this component is in the viewport ",-1)),V={__name:"AnimatedCounter",props:{targetNumber:{type:Number,required:!0,default:1234}},setup(t){l(r=>({"4977d1da":a.targetNumber}));const s=p(null),c=_(s),a=t,o=()=>{document.querySelector(".animate-counter").animate([{"--num":0},{"--num":a.targetNumber}],{duration:1e3,easing:"ease-out",fill:"forwards"})};return d(c,()=>{o()}),(r,v)=>{const u=i;return f(),x("div",C,[e("span",{ref_key:"target",ref:s,class:"flex tabular-nums text-slate-900 dark:text-white text-5xl font-extrabold mb-2 [counter-set:_num_var(--num)] before:content-[counter(num)] animate-counter"},[e("span",k,h(t.targetNumber),1),n("+ ")],512),b(u,{color:"white",onClick:o,class:"mt-4",size:"xs"},{default:g(()=>[n(" Start Counter ")]),_:1}),S])}}},A=m(V,[["__scopeId","data-v-e9f86973"]]);export{A as default};