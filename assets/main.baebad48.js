var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=(t,o,l)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&n(e,s,a[s]);if(o)for(var s of o(a))l.call(a,s)&&n(e,s,a[s]);return e};import"./index.124f267a.js";import{d as s,r as i,u as r,t as c,o as d,c as u,w as p,a as m,_ as g,b as f,e as v,i as h,m as b,f as y,g as C,h as k,j as w,k as _,l as V,n as j,W as D,p as O,q as P,s as S,v as x,x as N,y as U,z as E,A as I,B as $,C as B,F,D as J,E as R,G as M,H as W,I as z,J as L,K as T,L as A,M as q,N as K,O as G,P as H,Q as X,R as Y,S as Q,T as Z,U as ee,V as te,X as oe,Y as le,Z as ne,$ as ae,a0 as se,a1 as ie,a2 as re,a3 as ce,a4 as de,a5 as ue,a6 as pe,a7 as me,a8 as ge,a9 as fe,aa as ve,ab as he,ac as be,ad as ye,ae as Ce,af as ke,ag as we,ah as _e,ai as Ve,aj as je,ak as De,al as Oe,am as Pe,an as Se,ao as xe,ap as Ne,aq as Ue,ar as Ee,as as Ie,at as $e,au as Be,av as Fe}from"./json.worker.fda81c68.js";import{v as Je,c as Re,V as Me,u as We,a as ze}from"./visual.config.2402df0c.js";var Le=s({name:"Preview",props:{visible:{type:Boolean,default:!1}},emits:["update:visible"],setup(e,{emit:t}){const o=i({dialogVisible:r(e,"visible",t),previewUrl:`/vite-vue3-lowcode/preview/${location.hash}`});return a({},c(o))}});Le.render=function(e,t,o,l,n,a){const s=g;return d(),u(s,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=t=>e.dialogVisible=t),"custom-class":"h5-preview","show-close":!1,width:"360px"},{default:p((()=>[m("iframe",{style:{width:"360px",height:"640px"},src:e.previewUrl,frameborder:"0",scrolling:"auto"},null,8,["src"])])),_:1},8,["modelValue"])};const Te=Symbol("injectKey"),Ae=()=>h(Te);const qe=s({props:{options:{type:Object,default:()=>({})}},setup(e){const t=C(),o=i({options:e.options,visible:!0}),l={service:e=>{o.options=e,l.show()},show:()=>o.visible=!0,hide:()=>o.visible=!1},n={onConfirm:()=>{var e,t;l.hide(),null==(t=(e=o.options).onConfirm)||t.call(e)},onCancel:()=>{var e,t;l.hide(),null==(t=(e=o.options).onCancel)||t.call(e)}};return Object.assign(t.proxy,l),()=>m(y,b({modelValue:o.visible,title:o.options.title},o.options.props,{onClose:l.hide}),{default:()=>k(o.options.content)?m(w("content"),null,null):"function"==typeof o.options.content?o.options.content():null,footer:()=>null===o.options.footer?null:m("div",null,[m(_,{onClick:n.onCancel},{default:()=>[V("取消")]}),m(_,{onClick:n.onConfirm},{default:()=>[V("确定")]})])})}}),Ke=(()=>{let e;return t=>{if(e)return e.service(t),e;const o=document.createElement("div");document.body.appendChild(o);const l=j(qe,{options:t});return e=l.mount(o),e}})();(globalThis||window).MonacoEnvironment={getWorker:(e,t)=>"json"===t?new D:"css"===t||"scss"===t||"less"===t?new O:void 0},P.getLanguages();var Ge="_container_z26um_9",He="_title_z26um_16",Xe="_code_z26um_21";let Ye,Qe=!1;var Ze=s({name:"MonacoEditor",props:{code:{type:String,required:!0},layout:{type:Object,required:!0,default:()=>({})},options:{type:Object,default:()=>({})},vid:[String,Number],onChange:{type:Function},title:{type:String,default:""}},setup(e){const t=S(null),o=x(null),l=()=>{window.requestIdleCallback((()=>{t.value.getAction("editor.action.formatDocument").run()}),{timeout:800})};N((()=>{t.value=U.create(o.value,a({value:e.code,theme:"vs-dark",language:"json",formatOnPaste:!0,tabSize:2,minimap:{enabled:!1},fontFamily:"微软雅黑",overviewRulerBorder:!1,scrollBeyondLastLine:!1},e.options)),Ye=t.value.onDidChangeModelContent((o=>{var l;Qe||null==(l=e.onChange)||l.call(e,t.value.getValue(),o)})),l(),t.value.layout(e.layout)})),E((()=>{Ye&&Ye.dispose()}));return I((()=>e.vid),(()=>{if(t.value){const o=t.value,n=o.getModel();n&&e.code!==n.getValue()&&(o.pushUndoStop(),Qe=!0,n.pushEditOperations([],[{range:n.getFullModelRange(),text:e.code}],(()=>null))),o.pushUndoStop(),Qe=!1,l()}})),()=>m("div",{class:Ge},[e.title&&m("div",{class:He},[m("span",null,[e.title])]),m("div",{class:Xe,ref:o},null)])}});var et=s({name:"Header",components:{Preview:Le},setup(){const e=i({isShowH5Preview:!1}),t=(()=>{const{jsonData:e,updatePage:t,currentPage:o,overrideProject:l}=Ae(),n=i({coverRadio:"current",importJsonValue:""}),a=e=>{n.importJsonValue=e};return[{title:"导入JSON",icon:"el-icon-upload2",onClick:()=>{Ke({title:"导入JSON",props:{width:642},content:()=>m(F,null,[m($,{modelValue:n.coverRadio,"onUpdate:modelValue":e=>n.coverRadio=e},{default:()=>[m(B,{label:"current"},{default:()=>[V("覆盖当前页面")]}),m(B,{label:"all"},{default:()=>[V("覆盖整个项目")]})]}),m(Ze,{onChange:a,code:JSON.stringify(e),layout:{width:600,height:600}},null)]),onConfirm:()=>{const e="current"==n.coverRadio;e?t({oldPath:o.value.path,page:JSON.parse(n.importJsonValue)}):l(JSON.parse(n.importJsonValue)),J({showClose:!0,type:"success",duration:2e3,message:e?"成功覆盖当前页面":"成功覆盖整个项目"})}})}},{title:"导出JSON",icon:"el-icon-download",onClick:()=>{const{copy:t}=R({source:JSON.stringify(e)});t().then((()=>J.success("复制成功"))).catch((e=>J.error(`复制失败：${e}`)))}},{title:"真机预览",icon:"el-icon-mobile-phone",onClick:()=>{const e=M(location.origin+"/preview");Ke({title:"预览二维码（暂不可用）",props:{width:300},footer:null,content:()=>m("div",{class:"flex justify-center"},[m("img",{width:220,height:220,src:e.value},null)])})}},{title:"复制页面",icon:"el-icon-document-copy",onClick:()=>{J({showClose:!0,type:"info",duration:2e3,message:"敬请期待！"})}},{title:"撤销",icon:"el-icon-refresh-left",onClick:()=>{J({showClose:!0,type:"info",duration:2e3,message:"敬请期待！"})}},{title:"重做",icon:"el-icon-refresh-right",onClick:()=>{J({showClose:!0,type:"info",duration:2e3,message:"敬请期待！"})}},{title:"清空页面",icon:"el-icon-delete",onClick:()=>{J({showClose:!0,type:"info",duration:2e3,message:"敬请期待！"})}},{title:"预览",icon:"el-icon-position",onClick:()=>{localStorage.setItem("jsonData",JSON.stringify(e)),window.open(location.href.replace("/#/","/preview/"))}},{title:"反馈",icon:"el-icon-chat-line-square",onClick:()=>{window.open("https://github.com/buqiyuan/vite-vue3-lowcode/issues/new")}}]})(),{jsonData:o}=Ae();return a(a({},c(e)),{BASE_URL:"/vite-vue3-lowcode/",tools:t,runPreview:()=>{sessionStorage.setItem("jsonData",JSON.stringify(o)),localStorage.setItem("jsonData",JSON.stringify(o)),e.isShowH5Preview=!0}})}});const tt=A();W("data-v-09f4d910");const ot=m("div",{class:"logo"},null,-1),lt=m("h3",{class:"font-semibold"},"H5低代码",-1),nt={class:"title"},at={href:"https://github.com/buqiyuan/vite-vue3-lowcode",target:"_blank"};z();const st=tt(((e,t,o,l,n,a)=>{const s=q,i=K,r=G,c=H,p=w("preview");return d(),u(F,null,[m(c,{type:"flex",class:"header"},{default:tt((()=>[m(s,{span:6,class:"flex items-center"},{default:tt((()=>[ot,lt])),_:1}),m(s,{class:"flex items-center",span:12},{default:tt((()=>[(d(!0),u(F,null,L(e.tools,((t,o)=>(d(),u("div",{key:o,class:[[`w-1/${e.tools.length}`],"w-1/9"]},[m("div",{class:"tool-item flex flex-col items-center cursor-pointer",onClick:t.onClick},[m("i",{class:t.icon},null,2),m("div",nt,X(t.title),1)],8,["onClick"])],2)))),128))])),_:1}),m(s,{span:6,class:"right-tools flex flex-row-reverse items-center"},{default:tt((()=>[m(r,{class:"item",effect:"dark",content:"运行",placement:"bottom"},{default:tt((()=>[m(i,{type:"primary",size:"mini",icon:"el-icon-video-play",circle:"",class:"flex-shrink-0",onClick:e.runPreview},null,8,["onClick"])])),_:1}),m(r,{class:"item",effect:"dark",content:"github",placement:"bottom"},{default:tt((()=>[m("a",at,[m("img",{src:`${e.BASE_URL}github.svg`,width:"40",height:"40",alt:""},null,8,["src"])])])),_:1})])),_:1})])),_:1}),e.isShowH5Preview?(d(),u(p,{key:0,visible:e.isShowH5Preview,"onUpdate:visible":t[1]||(t[1]=t=>e.isShowH5Preview=t)},null,8,["visible"])):T("",!0)],64)}));et.render=st,et.__scopeId="data-v-09f4d910";const it=[{name:"pages",icon:"el-icon-tickets",label:"页面",componentName:"PageTree"},{name:"base-widget",icon:"el-icon-edit",label:"基础控件",componentName:"BaseWidgets"},{name:"complex-component",icon:"el-icon-suitcase",label:"容器组件",componentName:"ContainerComponent"},{name:"custom-component",icon:"el-icon-upload",label:"自定义组件",componentName:"custom-component"}];var rt={"list-group-item":"_list-group-item_1kgpy_1",listGroupItem:"_list-group-item_1kgpy_1"},ct=s({name:"BaseWidgets",setup(){const e=e=>{window.console.log(e)},t=e=>{console.log("当前拖拽的组件：",e);const t=Q.cloneDeep(e);return t._vid=Date.now(),Re({left:0,top:0,component:t})};return()=>m(F,null,[m(Y,{class:rt.listGroup,sort:!1,forceFallback:!1,list:Je.componentModules.baseWidgets,group:{name:"components",pull:"clone",put:!1},clone:t,"item-key":"key",onChange:e},{item:({element:e})=>m("div",{class:rt.listGroupItem,"data-label":e.label},[e.preview()])})])}}),dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct});var ut={"list-group-item":"_list-group-item_1kgpy_1",listGroupItem:"_list-group-item_1kgpy_1"},pt=s({name:"ContainerComponent",setup(){const e=e=>{window.console.log(e)},t=e=>{console.log("当前拖拽的组件：",e);const t=Q.cloneDeep(e);return t._vid=Date.now(),Re({left:0,top:0,component:t})};return()=>m(F,null,[m(Y,{class:ut.listGroup,sort:!1,forceFallback:!1,list:Je.componentModules.containerComponents,group:{name:"components",pull:"clone",put:!1},clone:t,"item-key":"key",onChange:e},{item:({element:e})=>m("div",{class:ut.listGroupItem,"data-label":e.label},[e.preview()])})])}}),mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pt});const gt={name:"CustomComponent"};gt.render=function(e,t,o,l,n,a){return"自定义组件"};var ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gt}),vt=s({name:"PageTree",setup(){const e=Z(),{jsonData:t,setCurrentPage:o,deletePage:l,updatePage:n,incrementPage:s}=Ae(),r=i({defaultProps:{children:"children",label:"title"},currentNodeKey:location.hash.slice(1),dialogFormVisible:!1,operatePageData:null,form:{title:"",path:""}}),d=v((()=>Object.keys(t.pages).map((e=>({title:t.pages[e].title,path:e})))));return a(a({},c(r)),{setCurrentPage:o,pages:d,onSubmit:async()=>{const{title:t,path:o}=r.form;r.operatePageData?(n({newPath:o,oldPath:r.operatePageData.path||o,page:{title:t}}),await e.replace(o),r.currentNodeKey=o):s(o,{title:t,blocks:[]}),r.dialogFormVisible=!1},setDefaultPage:e=>{console.log("设置该页面为默认页面",e)},handleNodeClick:t=>{o(t.path),e.push(t.path)},addPage:()=>{r.operatePageData=null,r.form={title:"",path:""},r.dialogFormVisible=!0},editPage:e=>{r.operatePageData=e,r.form={title:e.title,path:e.path},r.dialogFormVisible=!0,console.log("子页面数据：",e)},delPage:e=>{console.log("删除子页面数据",e),l(e.path,"/")}})}});const ht=A();W("data-v-66790180");const bt=V("添加页面"),yt={class:"custom-tree-node"},Ct=V("默认"),kt=m("span",{class:"el-dropdown-link"},[m("i",{class:"el-icon-more"})],-1),wt=V("编辑"),_t=V("删除"),Vt=V("设为默认"),jt={class:"dialog-footer"},Dt=V("取 消"),Ot=V("确 定");z();const Pt=ht(((e,t,o,l,n,a)=>{const s=K,i=te,r=oe,c=le,p=ne,f=ae,v=se,h=ie,b=re,y=g;return d(),u(F,null,[m(s,{type:"primary",size:"small",style:{margin:"10px 0"},icon:"el-icon-plus",onClick:e.addPage},{default:ht((()=>[bt])),_:1},8,["onClick"]),m(f,{data:e.pages,props:e.defaultProps,"node-key":"path","highlight-current":"","current-node-key":e.currentNodeKey,onNodeClick:e.handleNodeClick},{default:ht((({node:o,data:l})=>[m("span",yt,[m("span",null,[V(X(o.label)+"（"+X(l.path)+"） ",1),l.isDefault?(d(),u(i,{key:0,size:"mini"},{default:ht((()=>[Ct])),_:1})):T("",!0)]),m("span",{onClick:t[1]||(t[1]=ee((()=>{}),["stop"]))},[m(p,{trigger:"click"},{dropdown:ht((()=>[m(c,null,{default:ht((()=>[m(r,{icon:"el-icon-edit",onClick:t=>e.editPage(l)},{default:ht((()=>[wt])),_:2},1032,["onClick"]),m(r,{icon:"el-icon-delete",onClick:t=>e.delPage(l)},{default:ht((()=>[_t])),_:2},1032,["onClick"]),m(r,{icon:"el-icon-link",onClick:t=>e.setDefaultPage(l)},{default:ht((()=>[Vt])),_:2},1032,["onClick"])])),_:2},1024)])),default:ht((()=>[kt])),_:2},1024)])])])),_:1},8,["data","props","current-node-key","onNodeClick"]),m(y,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[5]||(t[5]=t=>e.dialogFormVisible=t),width:"380px",title:e.operatePageData?"编辑页面":"新增页面"},{footer:ht((()=>[m("span",jt,[m(s,{onClick:t[4]||(t[4]=t=>e.dialogFormVisible=!1)},{default:ht((()=>[Dt])),_:1}),m(s,{type:"primary",onClick:e.onSubmit},{default:ht((()=>[Ot])),_:1},8,["onClick"])])])),default:ht((()=>[m(b,{model:e.form},{default:ht((()=>[m(h,{label:"页面标题","label-width":"80px"},{default:ht((()=>[m(v,{modelValue:e.form.title,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.title=t),autocomplete:"off"},null,8,["modelValue"])])),_:1}),m(h,{label:"页面路径","label-width":"80px"},{default:ht((()=>[m(v,{modelValue:e.form.path,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.path=t),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])],64)}));vt.render=Pt,vt.__scopeId="data-v-66790180";const St={"./base-widgets/index.tsx":dt,"./container-component/index.tsx":mt,"./custom-component/index.vue":ft,"./page-tree/index.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vt})},xt={};console.log(St,"起航");for(const bo in St){const e=St[bo].default;xt[e.name]=e}console.log("left-aside components:",xt);var Nt=s({name:"LeftAside",components:xt,setup(){const e=i({activeName:it[0].name});return a(a({},c(e)),{tabs:it,handleClick:(e,t)=>{console.log(e,t)}})}});const Ut=A();W("data-v-6e5ac0ae");const Et={class:"flex flex-col items-center justify-center"};z();const It=Ut(((e,t,o,l,n,a)=>{const s=ue,i=ce;return d(),u(i,{modelValue:e.activeName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.activeName=t),"tab-position":"left",onTabClick:e.handleClick},{default:Ut((()=>[(d(!0),u(F,null,L(e.tabs,(t=>(d(),u(s,{key:t.name,name:t.name},{label:Ut((()=>[m("div",Et,[m("i",{class:t.icon},null,2),V(" "+X(t.label),1)])])),default:Ut((()=>[(d(),u(de(t.componentName),e.$attrs,null,16))])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue","onTabClick"])}));Nt.render=It,Nt.__scopeId="data-v-6e5ac0ae";var $t="_drawer_e36ge_9",Bt="_is-open_e36ge_26",Ft="_floating-action-btn_e36ge_21",Jt="_attrs_e36ge_53";function Rt(e,t){const o=x(e());return I(e,(e=>{e!==o.value&&(o.value=e)})),{get value(){return o.value},set value(e){o.value!==e&&(o.value=e,t(e))}}}s({props:{modelValue:{type:String}},emits:["update:modelValue"],setup(e,t){const o=Rt((()=>e.modelValue),(e=>t.emit("update:modelValue",e)));return()=>m("div",null,[V("自定义的输入框"),pe(m("input",{type:"text","onUpdate:modelValue":e=>o.value=e},null),[[me,o.value]])])}});const Mt=()=>{const e={};return e.promise=new Promise(((t,o)=>{e.resolve=t,e.reject=o})),e};const Wt=s({props:{option:{type:Object,required:!0}},setup(e){const t=C(),o=i({option:e.option,showFlag:!1,mounted:(()=>{const e=Mt();return N((()=>setTimeout((()=>e.resolve()),0))),e.promise})(),editData:[]}),l={service:e=>{o.option=e,o.editData=Q.cloneDeep(e.data||[]),l.show()},show:async()=>{await o.mounted,o.showFlag=!0},hide:()=>{o.showFlag=!1},add:()=>{o.editData.push({})},reset:()=>{o.editData=Q.cloneDeep(o.option.data)}},n={onConfirm:()=>{o.option.onConfirm(o.editData),l.hide()},onCancel:()=>{l.hide()},onDelete:e=>{o.editData.splice(e,1)}};return Object.assign(t.proxy,l),()=>m(F,null,[m(y,{modelValue:o.showFlag},{default:()=>m("div",null,[m("div",null,[m(_,{onClick:l.add},{default:()=>[V("添加")]}),m(_,{onClick:l.reset},{default:()=>[V("重置")]})]),m(ge,{data:o.editData},{default:()=>[m(fe,{type:"index"},null),o.option.config.table.options.map((e=>m(fe,{label:e.label},{default:({row:t})=>m(ve,{modelValue:t[e.field],"onUpdate:modelValue":o=>t[e.field]=o},null)}))),m(fe,{label:"操作栏"},{default:({$index:e})=>m(_,b({type:"danger"},{onClick:()=>n.onDelete(e)}),{default:()=>[V("删除")]})})]})]),footer:()=>m(F,null,[m(_,{onClick:n.onCancel},{default:()=>[V("取消")]}),m(_,b({type:"primary"},{onClick:n.onConfirm}),{default:()=>[V("确定")]})])})])}}),zt=(()=>{let e;return t=>{if(!e){const o=document.createElement("div");document.body.appendChild(o);const l=j(Wt,{option:t});e=l.mount(o)}const o=Mt();return e.service(a(a({},t),{onConfirm:o.resolve})),o.promise}})(),Lt=s({props:{modelValue:{type:Array},propConfig:{type:Object,required:!0}},emits:["update:modelValue"],setup(e,t){const o=Rt((()=>e.modelValue),(e=>t.emit("update:modelValue",e))),l=async()=>{const t=await zt({config:e.propConfig,data:e.modelValue||[]});o.value=t};return()=>m("div",null,[(!o.value||0==o.value.length)&&m(_,{onClick:l},{default:()=>[V("添加")]}),(o.value||[]).map((t=>m(he,{onClick:l},{default:()=>[t[e.propConfig.table.showKey]]})))])}});function Tt(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!k(e)}var At=s({name:"RightAttributePanel",props:{block:{type:Object,default:()=>({})}},setup(e,{emit:t}){const{visualConfig:o}=Ae(),l=i({activeName:"attr",isOpen:!0,editData:r(e,"block",t)}),n=(e,t)=>{const{propObj:o,prop:n}=We(l.editData.props,e);return{[Me.input]:()=>m(ve,{modelValue:o[n],"onUpdate:modelValue":e=>o[n]=e},null),[Me.inputNumber]:()=>m(ye,{modelValue:o[n],"onUpdate:modelValue":e=>o[n]=e},null),[Me.switch]:()=>m(Ce,{modelValue:o[n],"onUpdate:modelValue":e=>o[n]=e},null),[Me.color]:()=>m(ke,{modelValue:o[n],"onUpdate:modelValue":e=>o[n]=e},null),[Me.select]:()=>{let e;return m(we,{modelValue:o[n],"onUpdate:modelValue":e=>o[n]=e,valueKey:"value"},Tt(e=t.options.map((e=>m(_e,{label:e.label,value:e.val},null))))?e:{default:()=>[e]})},[Me.table]:()=>m(Lt,{modelValue:o[n],"onUpdate:modelValue":e=>o[n]=e,propConfig:t},null)}[t.type]()};return()=>{const t=[];if(e.block){const{componentKey:l}=e.block,a=o.componentMap[l];console.log("props.block:",e.block),t.push(m(be,{label:"组件ID",labelWidth:"76px"},{default:()=>[e.block._vid,m(Ve,{width:200,trigger:"hover",content:`你可以利用该组件ID。对该组件进行获取和设置其属性，组件可用属性可在控制台输入：$$refs.${e.block._vid} 进行查看`},{reference:()=>m("i",{style:{marginLeft:"6px"},class:"el-icon-warning-outline"},null)})]})),a&&a.props&&t.push(m(F,null,[Object.entries(a.props||{}).map((([e,t])=>m(be,{key:e},{default:()=>[n(e,t)],label:()=>t.tips?m(F,null,[m(Ve,{width:200,trigger:"hover",content:t.tips},{reference:()=>m("i",{class:"el-icon-warning-outline"},null)}),t.label]):t.label})))]))}else t.push(m(F,null,[m(be,{label:"容器宽度"},{default:()=>[m(ye,b({modelValue:l.editData.width,"onUpdate:modelValue":e=>l.editData.width=e},{step:100}),null)]}),m(be,{label:"容器高度"},{default:()=>[m(ye,b({modelValue:l.editData.height,"onUpdate:modelValue":e=>l.editData.height=e},{step:100}),null)]})]));const a=e=>{try{const t=JSON.parse(e);Object.assign(l.editData,t)}catch(t){console.log("JSON格式有误：",t)}};return m(F,null,[m("div",{class:[$t,{[Bt]:l.isOpen}]},[m("div",{class:Ft,onClick:()=>l.isOpen=!l.isOpen},[m("i",{class:"el-icon-d-arrow-"+(l.isOpen?"right":"left")},null)]),m("div",{class:Jt},[m(je,{modelValue:l.activeName,"onUpdate:modelValue":e=>l.activeName=e},{default:()=>[m(De,{label:"属性面板",name:"attr"},{default:()=>[m(Oe,{size:"mini","label-position":"left"},Tt(t)?t:{default:()=>[t]})]}),m(De,{label:"JSON",name:"json",lazy:!0},{default:()=>[m(Ze,{code:JSON.stringify(e.block),layout:{width:300,height:800},vid:"json"==l.activeName?e.block._vid:-1,onChange:a,title:""},null)]})]})])])])}}}),qt=s({name:"DraggableTransitionGroup",components:{draggable:Y},props:{moduleValue:{type:Array,default:()=>[]},drag:{type:Boolean,default:!1}},emits:["update:moduleValue","update:drag"],setup(e,{emit:t}){const o=i({list:r(e,"moduleValue",t),isDrag:r(e,"drag",t)}),l=v((()=>({animation:200,group:"components",disabled:!1,ghostClass:"ghost"})));return a(a({},c(o)),{log:()=>{},dragOptions:l})}});const Kt=A(),Gt=Kt(((e,t,o,l,n,a)=>{const s=w("draggable");return d(),u(s,b({modelValue:e.list,"onUpdate:modelValue":t[1]||(t[1]=t=>e.list=t),class:["dragArea list-group",{isDrag:e.isDrag}],tag:"transition-group",group:{name:"nested-draggable"},"component-data":{tag:"div",type:"transition-group",name:e.isDrag?null:"flip-list"},"item-key":"_vid"},e.dragOptions,{onStart:t[2]||(t[2]=t=>e.isDrag=!0),onEnd:t[3]||(t[3]=t=>e.isDrag=!1),onChange:e.log}),{item:Kt((t=>[m("div",null,[Pe(e.$slots,"item",t,void 0,!0)])])),_:1},16,["modelValue","class","component-data","onChange"])}));qt.render=Gt,qt.__scopeId="data-v-225673ea";const Ht=(()=>{const e="@@DROPDOWN_SERVICE_PROVIDER";return{provide:t=>Se(e,t),inject:()=>h(e)}})(),Xt=s({props:{option:{type:Object,required:!0}},setup(e){const t=C(),o=x({}),l=i({option:e.option,showFlag:!1,top:0,left:0,mounted:(()=>{const e=Mt();return N((()=>setTimeout((()=>e.resolve()),0))),e.promise})()}),n={show:async()=>{await l.mounted,l.showFlag=!0},hide:()=>{l.showFlag=!1}},a=v((()=>["dropdown-service",{"dropdown-service-show":l.showFlag}])),s=v((()=>({top:`${l.top}px`,left:`${l.left}px`})));Object.assign(t.proxy,{service:e=>{if(l.option=e,"addEventListener"in e.reference){const{top:t,left:o,height:n}=e.reference.getBoundingClientRect();l.top=t+n,l.left=o}else{const{clientX:t,clientY:o}=e.reference;l.left=t,l.top=o}n.show()}});const r=e=>{o.value.contains(e.target)||n.hide()};return N((()=>document.body.addEventListener("mousedown",r,!0))),E((()=>document.body.removeEventListener("mousedown",r,!0))),Ht.provide({onClick:n.hide}),()=>m("div",{class:a.value,style:s.value,ref:o},[l.option.content()])}}),Yt=s({props:{label:{type:String},icon:{type:String}},emits:["click"],setup(e,t){const{onClick:o}=Ht.inject(),l={onClick:e=>{t.emit("click",e),o()}};return()=>m("div",{class:"dropdown-option",onClick:l.onClick},[m("i",{class:e.icon},null),m("span",null,[e.label])])}}),Qt=(()=>{let e;return t=>{if(!e){const o=document.createElement("div");document.body.appendChild(o);const l=j(Xt,{option:t});e=l.mount(o)}e.service(t)}})();var Zt=s({name:"CompRender",props:{element:{type:Object,default:()=>({})},config:{type:Object,default:()=>({})}},setup:e=>()=>e.config.componentMap[e.element.componentKey].render({size:{},props:e.element.props||{},model:{},block:e.element,custom:{}})}),eo=s({name:"SlotItem",components:{CompRender:Zt,DraggableTransitionGroup:qt},props:{slotKey:String,config:{type:Object,default:()=>({})},children:{type:Array,default:()=>[]},selectComp:{type:Function},onContextmenuBlock:{type:Function}},emits:["update:children","on-selected"],setup:(e,{emit:t})=>({drag:x(!1),slotChildren:r(e,"children",t)})});const to=A(),oo=to(((e,t,o,l,n,a)=>{var s;const i=w("SlotItem",!0),r=w("comp-render"),c=w("draggable-transition-group");return d(),u(c,{modelValue:e.slotChildren,"onUpdate:modelValue":t[1]||(t[1]=t=>e.slotChildren=t),drag:e.drag,"onUpdate:drag":t[2]||(t[2]=t=>e.drag=t),class:["inner-draggable",{slot:!(null==(s=e.slotChildren)?void 0:s.length)}],"data-slot":`插槽（${e.slotKey}）\n 拖拽组件到此处`},{item:to((({element:t})=>{var o,l;return[m("div",{class:["list-group-item inner",{focus:t.focus,focusWithChild:t.focusWithChild}],"data-label":t.label,onContextmenu:ee((o=>e.onContextmenuBlock(o,t,e.slotChildren)),["stop","prevent"]),onMousedown:ee((o=>e.selectComp(t)),["stop"])},[m(r,{config:e.config,element:t,style:{pointerEvents:Object.keys((null==(o=t.props)?void 0:o.slots)||{}).length?"auto":"none"}},xe({_:2},[L(null==(l=t.props)?void 0:l.slots,((t,o)=>({name:o,fn:to((()=>[m(i,{children:t.children,"onUpdate:children":e=>t.children=e,"slot-key":o,config:e.config,"on-contextmenu-block":e.onContextmenuBlock,"select-comp":e.selectComp},null,8,["children","onUpdate:children","slot-key","config","on-contextmenu-block","select-comp"])]))})))]),1032,["config","element","style"])],42,["data-label","onContextmenu","onMousedown"])]})),_:1},8,["modelValue","drag","class","data-slot"])}));eo.render=oo,eo.__scopeId="data-v-a3397532";var lo=s({name:"SimulatorEditor",components:{DraggableTransitionGroup:qt,CompRender:Zt,SlotItem:eo},emits:["on-selected"],setup(e,{emit:t}){const{globalProperties:o}=ze(),{currentPage:l,visualConfig:n}=Ae(),s=i({compRefs:[],drag:!1}),r=(e,t=[],o=[])=>{var l,n;for(let a=0;a<t.length;a++){const s=o.concat();if(s.push(t[a]),e==t[a]._vid)return s;const i=(null==(l=t[a].props)?void 0:l.slots)||{},c=Object.keys(i);for(let t=0;t<c.length;t++){const o=null==(n=i[c[t]])?void 0:n.children;if(o){const t=r(e,o,s);if(t)return t}}}},d=(e,t)=>{var o;const n=(null==(o=e.props)?void 0:o.slots)||{};Object.keys(n).length>0&&Object.keys(n).forEach((e=>{var o,a;null==(a=null==(o=n[e])?void 0:o.children)||a.forEach((e=>{var o;if(e.focusWithChild=!1,e.focus=e._vid==t,e.focus){r(t,l.value.blocks).forEach((e=>e.focusWithChild=!0))}Object.keys((null==(o=e.props)?void 0:o.slots)||{}).length&&d(e,t)}))}))};return a(a({},c(s)),{currentPage:l,visualConfig:n,selectComp:e=>{t("on-selected",e),l.value.blocks.forEach((t=>{t.focus=e._vid==t._vid,t.focusWithChild=!1,d(t,e._vid),e.focusWithChild=!1}))},onContextmenuBlock:(e,t,n=l.value.blocks)=>{Qt({reference:e,content:()=>m(F,null,[m(Yt,b({label:"复制节点",icon:"el-icon-document-copy"},{onClick:()=>{const e=n.findIndex((e=>e._vid==t._vid));if(-1!=e){const t=(e,o=-1)=>{var l;e._vid=`vid_${Date.now()+o}`;const n=(null==(l=null==e?void 0:e.props)?void 0:l.slots)||{},a=Object.keys(n);a.length&&a.forEach((e=>{var o,l;null==(l=null==(o=n[e])?void 0:o.children)||l.forEach(((e,o)=>t(e,o)))}))},o=Q.cloneDeep(n[e]);t(o),n.splice(e,0,o)}}}),null),m(Yt,b({label:"删除节点",icon:"el-icon-delete"},{onClick:()=>{const e=n.findIndex((e=>e._vid==t._vid));-1!=e&&(delete o.$$refs[n[e]._vid],n.splice(e,1))}}),null)])})}})}});const no=A(),ao=no(((e,t)=>{const o=w("slot-item"),l=w("comp-render"),n=w("draggable-transition-group");return d(),u(n,{drag:e.drag,"onUpdate:drag":t[1]||(t[1]=t=>e.drag=t),modelValue:e.currentPage.blocks,"onUpdate:modelValue":t[2]||(t[2]=t=>e.currentPage.blocks=t)},{item:no((({element:t})=>{var n,a;return[m("div",{class:["list-group-item",{focus:t.focus,focusWithChild:t.focusWithChild,drag:e.drag,"no-child":!Object.keys(t.props.slots||{}).length}],"data-label":t.label,onContextmenu:ee((o=>e.onContextmenuBlock(o,t)),["stop","prevent"]),onMousedown:o=>e.selectComp(t)},[m(l,{config:e.visualConfig,element:t,style:{pointerEvents:Object.keys((null==(n=t.props)?void 0:n.slots)||{}).length?"auto":"none"}},xe({_:2},[L(null==(a=t.props)?void 0:a.slots,((t,l)=>({name:l,fn:no((()=>[m(o,{children:t.children,"onUpdate:children":e=>t.children=e,"slot-key":l,config:e.visualConfig,"on-contextmenu-block":e.onContextmenuBlock,"select-comp":e.selectComp},null,8,["children","onUpdate:children","slot-key","config","on-contextmenu-block","select-comp"])]))})))]),1032,["config","element","style"])],42,["data-label","onContextmenu","onMousedown"])]})),_:1},8,["drag","modelValue"])}));lo.render=ao,lo.__scopeId="data-v-e513dd64";var so=s({name:"Simulator"});const io=A();W("data-v-39828a84");const ro={class:"simulator-container"},co={class:"simulator-editor"};z();const uo=io(((e,t)=>(d(),u("div",ro,[m("div",co,[Pe(e.$slots,"default",{},void 0,!0)])]))));so.render=uo,so.__scopeId="data-v-39828a84";var po=s({name:"Layout",components:{Header:et,LeftAside:Nt,RightAttributePanel:At,SimulatorEditor:lo,Simulator:so},setup(){const e=i({currentBlock:{}});return a(a({},c(e)),{onSelected:t=>{e.currentBlock=t,console.log("currentBlock:",e.currentBlock)}})}});po.render=function(e,t,o,l,n,a){const s=w("Header"),i=Ne,r=w("left-aside"),c=Ue,g=w("simulator-editor"),f=w("simulator"),v=w("right-attribute-panel"),h=Ee,b=Ie;return d(),u(b,null,{default:p((()=>[m(i,{height:"80px",class:"flex items-center shadow-md"},{default:p((()=>[m(s)])),_:1}),m(b,{class:"layout-container"},{default:p((()=>[m(c,{class:"shadow-sm",width:"350px"},{default:p((()=>[m(r)])),_:1}),m(h,null,{default:p((()=>[m(f,null,{default:p((()=>[m(g,{onOnSelected:e.onSelected},null,8,["onOnSelected"])])),_:1}),m(v,{block:e.currentBlock,"onUpdate:block":t[1]||(t[1]=t=>e.currentBlock=t)},null,8,["block"])])),_:1})])),_:1})])),_:1})};var mo=s({name:"App",components:{VisualEditor:po},setup(){const e=(()=>{var e;const t=JSON.parse(sessionStorage.getItem("jsonData"))||{container:{width:360,height:960},pages:{"/":{title:"首页",path:"/",blocks:[]}}};console.log("jsonData：",t);const o=()=>location.hash.slice(1),l=e=>e.startsWith("/")?e:`/${e}`,n=i({jsonData:t,currentPage:null!=(e=t.pages[o()])?e:t.pages["/"]});window.addEventListener("hashchange",(()=>{r(o())}));const s=(e="",t="")=>{delete n.jsonData.pages[e],t&&r(t)},r=(e="/")=>{n.currentPage=t.pages[e]};return{visualConfig:Je,jsonData:f(n.jsonData),currentPage:v((()=>n.currentPage)),overrideProject:e=>{n.jsonData="string"==typeof e?JSON.parse(e):e},setCurrentPage:r,updatePage:({newPath:e,oldPath:t,page:o})=>{console.log(n.jsonData.pages[t],o),e&&e!=t?(o.path=e,n.jsonData.pages[l(e)]=a(a({},n.jsonData.pages[t]),o),s(t,l(e))):Object.assign(n.jsonData.pages[t],o)},incrementPage:(e="",t)=>{n.jsonData.pages[l(e)]=null!=t?t:{title:"新页面",path:e,blocks:[]}},deletePage:s,updatePageBlock:(e="",t=[])=>{n.jsonData.pages[e].blocks=t}}})();Se(Te,e);const{jsonData:t}=e;window.addEventListener("beforeunload",(()=>{sessionStorage.setItem("jsonData",JSON.stringify(t))}))}});mo.render=function(e,t,o,l,n,a){const s=w("visual-editor");return d(),u(s)};const go=$e({history:Be(),routes:[]}),fo={count:0};var vo=Fe({state:()=>fo,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});const ho=j(mo);ho.config.globalProperties.$$refs={},window.$$refs=ho.config.globalProperties.$$refs,ho.use(go).use(vo).mount("#app");
