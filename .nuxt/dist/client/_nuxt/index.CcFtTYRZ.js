import{_ as h}from"./Header.DxX2kB41.js";import{b as r,H as x,w as g,e as t,B as y,t as c,C as f,D as b,c as o,g as l,F as k,E as A,G as w}from"./entry.CSFD3OIY.js";import{u as B}from"./index.Civmozwt.js";import{u as C}from"./asyncData.4VFOOrTZ.js";import{q as D}from"./query.Bho_6aNw.js";import"./preview.ui2yLDQg.js";const N={class:"relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5",datetime:"2022-09-05"},S=t("span",{class:"absolute inset-y-0 left-0 flex items-center","aria-hidden":"true"},[t("span",{class:"h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"})],-1),$={class:"text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"},q={class:"relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400 text-justify"},v={__name:"ArticleCard",props:{article:{type:Object,required:!0}},setup(a){const e=s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return(s,n)=>{const i=f;return r(),x(i,{to:a.article._path,class:"group"},{default:g(()=>[t("article",null,[t("time",N,[S,y(" "+c(e(a.article.published)),1)]),t("h2",$,c(a.article.title),1),t("p",q,c(a.article.description),1)])]),_:1},8,["to"])}}},L=v,M={class:"min-h-screen"},V={class:"space-y-16"},_="All about interesting things: data, analytics, machine learning.",O={__name:"index",async setup(a){let e,s;B({title:"Blog | Muhammad Murtadha Ramadhan",description:_});const{data:n}=([e,s]=b(()=>C("all-articles",()=>D("/articles").sort({published:-1}).find())),e=await e,s(),e);return(i,j)=>{const d=h,m=L;return r(),o("main",M,[l(d,{class:"mb-16",title:"Articles",description:_}),t("ul",V,[(r(!0),o(k,null,A(w(n),(u,p)=>(r(),o("li",{key:p},[l(m,{article:u},null,8,["article"])]))),128))])])}}};export{O as default};
