import{I as G,l as te,j as q,J as b,d as $,r as W,A as ne,o as re,K as oe,b as m,c as v,g as p,e as l,B as se,F as E,E as I,w as J,t as A,L as ie,C as V,H as j,D as k,G as z,k as ae}from"./entry.eJcGi3SD.js";import{u as ce}from"./index.BhVDORku.js";import{_ as de}from"./Avatar.BXRFmKen.js";import{u as M}from"./asyncData.DWiLU_ed.js";import{q as N}from"./query.B5PaxQcE.js";import{_ as le}from"./ProjectCard.-YWWc3Hm.js";import{_ as ue}from"./Button.DbxqK-zY.js";import"./Icon.B_XW0suY.js";import"./preview.C9_knZYz.js";const he=/#/g,me=/&/g,fe=/\//g,ge=/\?/g,_e=/\+/g,pe=/%7c/gi,ye=/%252f/gi;function ve(e){return encodeURI(""+e).replace(pe,"|")}function X(e){return ve(e).replace(he,"%23").replace(ge,"%3F").replace(ye,"%2F").replace(me,"%26").replace(_e,"%2B")}function B(e){return X(e).replace(fe,"%2F")}const xe=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,we=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,be=/^([/\\]\s*){2,}[^/\\]/;function R(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?xe.test(e):we.test(e)||(t.acceptRelative?be.test(e):!1)}const Se=/\/$|\/\?|\/#/;function $e(e="",t){return t?Se.test(e):e.endsWith("/")}function Ee(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if($e(e,!0))return e||"/";let r=e,n="";const o=e.indexOf("#");if(o>=0&&(r=e.slice(0,o),n=e.slice(o),!r))return n;const[s,...i]=r.split("?");return s+"/"+(i.length>0?`?${i.join("?")}`:"")+n}function Ie(e=""){return e.startsWith("/")}function je(e=""){return Ie(e)?e:"/"+e}function Ae(e){return e&&e!=="/"}const Re=/^\.?\//;function P(e,...t){let r=e||"";for(const n of t.filter(o=>Ae(o)))if(r){const o=n.replace(Re,"");r=Ee(r)+o}else r=n;return r}function Y(e="",t){const r=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(r){const[,f,w=""]=r;return{protocol:f.toLowerCase(),pathname:w,href:f+w,auth:"",host:"",search:"",hash:""}}if(!R(e,{acceptRelative:!0}))return t?Y(t+e):T(e);const[,n="",o,s=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,i="",a=""]=s.match(/([^#/?]*)(.*)?/)||[],{pathname:d,search:u,hash:h}=T(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n.toLowerCase(),auth:o?o.slice(0,Math.max(0,o.length-1)):"",host:i,pathname:d,search:u,hash:h}}function T(e=""){const[t="",r="",n=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:r,hash:n}}async function Pe(e,t){return await ke(t).catch(n=>(console.error("Failed to get image meta for "+t,n+""),{width:0,height:0,ratio:0}))}async function ke(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const n=new Image;n.onload=()=>{const o={width:n.width,height:n.height,ratio:n.width/n.height};t(o)},n.onerror=o=>r(o),n.src=e})}function U(e){return t=>t?e[t]||t:e.missingValue}function ze({formatter:e,keyMap:t,joinWith:r="/",valueMap:n}={}){e||(e=(s,i)=>`${s}=${i}`),t&&typeof t!="function"&&(t=U(t));const o=n||{};return Object.keys(o).forEach(s=>{typeof o[s]!="function"&&(o[s]=U(o[s]))}),(s={})=>Object.entries(s).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const u=o[a];return typeof u=="function"&&(d=u(s[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(r)}function y(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Me(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const n=parseInt(r.replace("x",""));n&&t.add(n)}return Array.from(t)}function Ne(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Le(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(n=>n)){const n=r.split(":");n.length!==2?t["1px"]=n[0].trim():t[n[0].trim()]=n[1].trim()}else Object.assign(t,e);return t}function Oe(e){const t={options:e},r=(o,s={})=>Z(t,o,s),n=(o,s={},i={})=>r(o,{...i,modifiers:G(s,i.modifiers||{})}).url;for(const o in e.presets)n[o]=(s,i,a)=>n(s,i,{...e.presets[o],...a});return n.options=e,n.getImage=r,n.getMeta=(o,s)=>Ce(t,o,s),n.getSizes=(o,s)=>Be(t,o,s),t.$img=n,n}async function Ce(e,t,r){const n=Z(e,t,{...r});return typeof n.getMeta=="function"?await n.getMeta():await Pe(e,n.url)}function Z(e,t,r){var u,h;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:n,defaults:o}=He(e,r.provider||e.options.provider),s=We(e,r.preset);if(t=R(t)?t:je(t),!n.supportsAlias)for(const f in e.options.alias)t.startsWith(f)&&(t=P(e.options.alias[f],t.substr(f.length)));if(n.validateDomains&&R(t)){const f=Y(t).host;if(!e.options.domains.find(w=>w===f))return{url:t}}const i=G(r,s,o);i.modifiers={...i.modifiers};const a=i.modifiers.format;(u=i.modifiers)!=null&&u.width&&(i.modifiers.width=y(i.modifiers.width)),(h=i.modifiers)!=null&&h.height&&(i.modifiers.height=y(i.modifiers.height));const d=n.getImage(t,i,e);return d.format=d.format||a||"",d}function He(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function We(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Be(e,t,r){var _,L,O,C,H;const n=y((_=r.modifiers)==null?void 0:_.width),o=y((L=r.modifiers)==null?void 0:L.height),s=Le(r.sizes),i=(O=r.densities)!=null&&O.trim()?Me(r.densities.trim()):e.options.densities;Ne(i);const a=n&&o?o/n:0,d=[],u=[];if(Object.keys(s).length>=1){for(const g in s){const x=F(g,String(s[g]),o,a,e);if(x!==void 0){d.push({size:x.size,screenMaxWidth:x.screenMaxWidth,media:`(max-width: ${x.screenMaxWidth}px)`});for(const S of i)u.push({width:x._cWidth*S,src:D(e,t,r,x,S)})}}Te(d)}else for(const g of i){const x=Object.keys(s)[0];let S=F(x,String(s[x]),o,a,e);S===void 0&&(S={size:"",screenMaxWidth:0,_cWidth:(C=r.modifiers)==null?void 0:C.width,_cHeight:(H=r.modifiers)==null?void 0:H.height}),u.push({width:g,src:D(e,t,r,S,g)})}Ue(u);const h=u[u.length-1],f=d.length?d.map(g=>`${g.media?g.media+" ":""}${g.size}`).join(", "):void 0,w=f?"w":"x",c=u.map(g=>`${g.src} ${g.width}${w}`).join(", ");return{sizes:f,srcset:c,src:h==null?void 0:h.src}}function F(e,t,r,n,o){const s=o.options.screens&&o.options.screens[e]||parseInt(e),i=t.endsWith("vw");if(!i&&/^\d+$/.test(t)&&(t=t+"px"),!i&&!t.endsWith("px"))return;let a=parseInt(t);if(!s||!a)return;i&&(a=Math.round(a/100*s));const d=n?Math.round(a*n):r;return{size:t,screenMaxWidth:s,_cWidth:a,_cHeight:d}}function D(e,t,r,n,o){return e.$img(t,{...r.modifiers,width:n._cWidth?n._cWidth*o:void 0,height:n._cHeight?n._cHeight*o:void 0},r)}function Te(e){var r;e.sort((n,o)=>n.screenMaxWidth-o.screenMaxWidth);let t=null;for(let n=e.length-1;n>=0;n--){const o=e[n];o.media===t&&e.splice(n,1),t=o.media}for(let n=0;n<e.length;n++)e[n].media=((r=e[n+1])==null?void 0:r.media)||""}function Ue(e){e.sort((r,n)=>r.width-n.width);let t=null;for(let r=e.length-1;r>=0;r--){const n=e[r];n.width===t&&e.splice(r,1),t=n.width}}const Fe=ze({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>B(e)+"_"+B(t)}),De=(e,{modifiers:t={},baseURL:r}={},n)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=Fe(t)||"_";return r||(r=P(n.options.nuxt.baseURL,"/_ipx")),{url:P(r,o,X(e))}},Ge=!0,qe=!0,Je=Object.freeze(Object.defineProperty({__proto__:null,getImage:De,supportsAlias:qe,validateDomains:Ge},Symbol.toStringTag,{value:"Module"})),Q={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{},densities:[1,2],format:["webp"]};Q.providers={ipx:{provider:Je,defaults:{}}};const K=()=>{const e=te(),t=q();return t.$img||t._img||(t._img=Oe({...Q,nuxt:{baseURL:e.app.baseURL}}))},Ve={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Xe=e=>{const t=b(()=>({provider:e.provider,preset:e.preset})),r=b(()=>({width:y(e.width),height:y(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),n=K(),o=b(()=>({...e.modifiers,width:y(e.width),height:y(e.height),format:e.format,quality:e.quality||n.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:o}},Ye={...Ve,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Ze=$({name:"NuxtImg",props:Ye,emits:["load","error"],setup:(e,t)=>{const r=K(),n=Xe(e),o=W(!1),s=b(()=>r.getSizes(e.src,{...n.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...n.modifiers.value,width:y(e.width),height:y(e.height)}})),i=b(()=>{const c={...n.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(c.sizes=s.value.sizes,c.srcset=s.value.srcset),c}),a=b(()=>{let c=e.placeholder;if(c===""&&(c=!0),!c||o.value)return!1;if(typeof c=="string")return c;const _=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return r(e.src,{...n.modifiers.value,width:_[0],height:_[1],quality:_[2]||50,blur:_[3]||3},n.options.value)}),d=b(()=>e.sizes?s.value.src:r(e.src,n.modifiers.value,n.options.value)),u=b(()=>a.value?a.value:d.value);if(e.preload){const c=Object.values(s.value).every(_=>_);ne({link:[{rel:"preload",as:"image",nonce:e.nonce,...c?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:u.value}}]})}const h=W(),w=q().isHydrating;return re(()=>{if(a.value){const c=new Image;c.src=d.value,e.sizes&&(c.sizes=s.value.sizes||"",c.srcset=s.value.srcset),c.onload=_=>{o.value=!0,t.emit("load",_)};return}h.value&&(h.value.complete&&w&&(h.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),h.value.onload=c=>{t.emit("load",c)},h.value.onerror=c=>{t.emit("error",c)})}),()=>oe("img",{ref:h,src:u.value,...i.value,...t.attrs})}}),Qe={class:"space-y-6"},Ke=l("h1",{class:"text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"}," Hello there!👋 ",-1),et=l("p",{class:"text-gray-900 dark:text-gray-400",style:{"text-align":"justify"}}," Muhammad Murtadha Ramadhan, usually called Ado, is a business analytics professional with solid experiences in 2 largest Indonesia tech companies #1 Grab and #2 Tokopedia (GoTo Group) where he took part in composing actionable insights through analytics and developing business strategy and operations. Ado is currently a Master of Science in Business Analytics candidate in University of Southern California Marshall School of Business. Prior to it, Ado graduated with a Bachelor's Degree in Computer Science from IPB University and was awarded as one of the best students in Indonesia. ",-1),tt=l("p",{class:"text-gray-900 dark:text-gray-400"},[se(" My resume is accessible "),l("a",{href:"https://drive.google.com/file/d/1WMiAsEDsJmUcozfC1UFTJUk_GHxBsm8V/view?usp=sharing",target:"_blank",style:{color:"blue"}},"here")],-1),nt={__name:"Intro",setup(e){return ce({title:"Muhammad Murtadha Ramadhan",description:"I'm Ado, your data guy"}),(t,r)=>{const n=Ze;return m(),v("div",Qe,[p(n,{src:"/avatar.png",alt:"Fayaz Ahmed",class:"ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16",sizes:"48px sm:64px",placeholder:"",format:"webp"}),Ke,et,tt])}}},rt=nt,ot=l("h2",{class:"uppercase text-xs font-semibold text-gray-400 mb-4"},"FIND ME ON",-1),st={class:"space-y-5"},it={class:"text-sm"},at=l("div",{class:"flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"},null,-1),ct=$({__name:"SocialLinks",setup(e){const t=[{name:"GitHub",url:"https://github.com/murtadhamr",icon:"mdi:github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/murtadhamr/",icon:"mdi:linkedin"}];return(r,n)=>{const o=ie,s=V;return m(),v("div",null,[ot,l("div",st,[(m(),v(E,null,I(t,i=>p(s,{key:i.icon,to:i.url,target:"_blank",external:"",class:"flex items-end gap-4 dark:hover:text-gray-300 group"},{default:J(()=>[l("span",it,A(i.name),1),at,p(o,{name:i.icon,class:"w-6 h-6"},null,8,["name"])]),_:2},1032,["to"])),64))])])}}}),dt={class:"max-w-m"},lt={class:"text-sm font-medium group-hover:text-primary-600"},ut={class:"text-gray-400 text-sm"},ht=l("div",{class:"flex-1 border-b border-dashed border-gray-50 dark:border-gray-50 group-hover:border-gray-50"},null,-1),mt={__name:"NonProjectCard",props:{project:{type:Object,required:!0}},setup(e){return(t,r)=>{const n=de,o=V;return m(),j(o,{class:"flex items-center gap-4 group p-2 -m-2 rounded-lg",to:e.project.url,target:"_blank",external:""},{default:J(()=>[l("div",dt,[l("h3",lt,A(e.project.name),1),l("p",ut,A(e.project.description),1)]),ht,p(n,{src:e.project.thumbnail,ui:{rounded:"rounded z-10 relative"},size:"md",alt:e.project.name},null,8,["src","alt"])]),_:1},8,["to"])}}},ee=mt,ft=l("h2",{class:"uppercase text-xs font-semibold text-gray-400 mb-6"}," PROFESSIONAL EXPERIENCES ",-1),gt={class:"space-y-4"},_t=$({__name:"ProfessionalExperiences",async setup(e){let t,r;const{data:n}=([t,r]=k(()=>M("professinalexp-home",()=>N("/professionalexp").find())),t=await t,r(),t);return(o,s)=>{const i=ee;return m(),v("div",null,[ft,l("div",gt,[(m(!0),v(E,null,I(z(n),(a,d)=>(m(),j(i,{key:d,project:a},null,8,["project"]))),128))])])}}}),pt=l("h2",{class:"uppercase text-xs font-semibold text-gray-400 mb-6"}," EDUCATION ",-1),yt={class:"space-y-4"},vt=$({__name:"Education",async setup(e){let t,r;const{data:n}=([t,r]=k(()=>M("education-home",()=>N("/education").find())),t=await t,r(),t);return(o,s)=>{const i=ee;return m(),v("div",null,[pt,l("div",yt,[(m(!0),v(E,null,I(z(n),(a,d)=>(m(),j(i,{key:d,project:a},null,8,["project"]))),128))])])}}}),xt=l("h2",{class:"uppercase text-xs font-semibold text-gray-400 mb-6"}," FEATURED PROJECTS ",-1),wt={class:"space-y-4"},bt={class:"flex items-center justify-center mt-6 text-sm"},St=$({__name:"FeaturedProjects",async setup(e){let t,r;const{data:n}=([t,r]=k(()=>M("projects-home",()=>N("/projects").limit(3).find())),t=await t,r(),t);return(o,s)=>{const i=le,a=ue;return m(),v("div",null,[xt,l("div",wt,[(m(!0),v(E,null,I(z(n),(d,u)=>(m(),j(i,{key:u,project:d},null,8,["project"]))),128))]),l("div",bt,[p(a,{label:"All Projects →",to:"/projects",variant:"link",color:"gray"})])])}}}),$t={},Et={class:"min-h-screen"},It={class:"space-y-24"};function jt(e,t){const r=rt,n=ct,o=_t,s=vt,i=St;return m(),v("main",Et,[l("div",It,[p(r),p(n),p(o),p(s),p(i)])])}const Ct=ae($t,[["render",jt]]);export{Ct as default};
