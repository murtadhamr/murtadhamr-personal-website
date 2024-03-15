import{_ as $}from"./Header.B31jm9GQ.js";import{d as A,b as t,c as o,e,t as g,g as l,w as I,C,D as H,F as p,E as d,G as f,L as h}from"./entry.C-bgoBsy.js";import{u as S}from"./index.DXxpeKb3.js";import{u as B}from"./asyncData.Cy3LVh-9.js";import{q as D}from"./query.BOBulvvo.js";import"./preview._kSb2xM1.js";const U={class:"relative after:-z-10 after:block after:h-[2px] after:absolute after:top-1/2 after:transform after:bg-gray-100 dark:after:bg-white/10 after:w-full after:left-0 after:right-0"},q={class:"font-medium text-sm text-gray-600 dark:text-gray-500 bg-gray-50 dark:bg-black pr-4"},F=A({__name:"UsesHeader",props:{title:String},setup(n){return(c,_)=>(t(),o("li",null,[e("div",U,[e("span",q,g(n.title),1)])]))}}),L={class:"text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600"},N={class:"text-sm text-gray-500"},z={__name:"UsesItem",props:{item:Object,required:!0},setup(n){return(c,_)=>{const i=C;return t(),o("li",null,[l(i,{to:n.item.url,class:"group",target:"_blank",external:""},{default:I(()=>[e("p",L,g(n.item.name),1),e("p",N,g(n.item.description),1)]),_:1},8,["to"])])}}},E=z,O={class:"min-h-screen"},V={class:"space-y-24"},j={class:"space-y-8"},G={class:"space-y-8"},M={class:"space-y-8"},T={class:"space-y-8"},y="Software I use, gadgets I love, and other things I recommend. Here’s a big list of all of my favorite stuff.",Y={__name:"whats-in-my-bag",async setup(n){let c,_;S({title:"Things I use | Fayaz Ahmed",description:y});const{data:i}=([c,_]=H(()=>B("uses",()=>D("/uses").find())),c=await c,_(),c),x=i.value.filter(s=>s.category==="hardware"),k=i.value.filter(s=>s.category==="software"),b=i.value.filter(s=>s.category==="desk"),w=i.value.filter(s=>s.category==="others");return(s,W)=>{const v=$,m=F,u=E;return t(),o("main",O,[l(v,{class:"mb-12",title:"What's in my bag?",description:y}),e("div",V,[e("ul",j,[l(m,{title:"Hardware"}),(t(!0),o(p,null,d(f(x),(a,r)=>(t(),h(u,{key:r,item:a},null,8,["item"]))),128))]),e("ul",G,[l(m,{title:"Software"}),(t(!0),o(p,null,d(f(k),(a,r)=>(t(),h(u,{key:r,item:a},null,8,["item"]))),128))]),e("ul",M,[l(m,{title:"Desk"}),(t(!0),o(p,null,d(f(b),(a,r)=>(t(),h(u,{key:r,item:a},null,8,["item"]))),128))]),e("ul",T,[l(m,{title:"Other"}),(t(!0),o(p,null,d(f(w),(a,r)=>(t(),h(u,{key:r,item:a},null,8,["item"]))),128))])])])}}};export{Y as default};
