import{d as J,a2 as ee,a as le,aC as ne,aD as te,o as C,c as F,w as n,h as ue,b as e,u as t,j as x,g as $,k as L,F as G,t as ae,aE as U,aF as K,C as k,ah as O,a5 as P,aj as Q,ak as W,l as oe,aB as X,J as de,ax as Z,aa as N,G as T,ay as M,a6 as ie,r as H,aG as se,aH as re,aI as ce}from"./vendor.d29aee7b.js";/* empty css                        *//* empty css                        *//* empty css                  *//* empty css                 */import"./index.89072eab.js";/* empty css                 *//* empty css                     */import{_ as pe}from"./IconSelect.ba9de4d9.js";import{n as me}from"./index.browser.150d7466.js";import{_ as _e}from"./index.54d904d5.js";/* empty css                */import"./lodash.cc168b67.js";/* empty css                   */import"./FileSaver.min.f2d6a31a.js";var j=(l=>(l.input="input",l.numberInput="numberInput",l.select="select",l.radio="radio",l.checkbox="checkbox",l.switch="switch",l.datePicker="datePicker",l.dateTimePicker="dateTimePicker",l.object="object",l))(j||{}),Y=(l=>(l.year="year",l.month="month",l.week="week",l.dates="dates",l.daterange="daterange",l))(Y||{});function fe(l){function f(){const m=l.data;!m.options&&(m.options=[]),m.options.push({label:"",value:""})}function u(m){const y=l.data;!y.options&&(y.options=[]),y.options.splice(m+1,0,{label:"",value:""})}function b(m){l.data.expand.options.splice(m,1)}function V(m){m?l.data.defaultValue=m.value:(l.data.defaultValue="",delete l.data.defaultValue)}return[f,u,b,V]}function be(l){function f(u=[]){return typeof u=="string"?u===l.data.type:u.includes(l.data.type)}return[f]}function he(l){function f(u){l.visible=!0,l.data=u}return{operation:f}}const Ce={key:0},ye={key:1},Ve=k("\u6DFB\u52A0\u8868\u5355"),Fe={class:"dialog-footer"},ve=k("\u53D6\u6D88"),ke=k(" \u4FDD\u5B58 "),Be=J({setup(l,{expose:f}){const u=ee({visible:!1,data:{label:"",field:"",type:j.input,id:"",parent:"",required:!1,expand:{}}}),[b,V,m,y]=fe(u),[s]=be(u);return f(he(u)),(r,a)=>{const h=O,o=P,p=Q,_=W,R=le("warning"),z=oe,B=ne,A=X,w=de,g=Z,I=N,v=T,S=M,d=ie,c=te;return C(),F(c,{modelValue:t(u).visible,"onUpdate:modelValue":a[7]||(a[7]=i=>t(u).visible=i),title:t(u).data.label},{footer:n(()=>[ue("span",Fe,[e(v,{onClick:a[5]||(a[5]=i=>t(u).visible=!1)},{default:n(()=>[ve]),_:1}),e(v,{type:"primary",onClick:a[6]||(a[6]=i=>t(u).visible=!1)},{default:n(()=>[ke]),_:1})])]),default:n(()=>[e(d,{model:t(u).data,"label-position":"top"},{default:n(()=>[t(s)(["checkbox","radio","switch"])?x("",!0):(C(),F(o,{key:0,label:"\u6E05\u7A7A\u6309\u94AE",prop:"clearable"},{default:n(()=>[e(h,{modelValue:t(u).data.expand.clearable,"onUpdate:modelValue":a[0]||(a[0]=i=>t(u).data.expand.clearable=i)},null,8,["modelValue"])]),_:1})),e(o,{label:"\u7981\u542F\u7528",prop:"disabled"},{default:n(()=>[e(h,{modelValue:t(u).data.expand.disabled,"onUpdate:modelValue":a[1]||(a[1]=i=>t(u).data.expand.disabled=i)},null,8,["modelValue"])]),_:1}),t(s)("select")?(C(),F(o,{key:1,label:"\u662F\u5426\u591A\u9009",prop:"multiple"},{default:n(()=>[e(h,{modelValue:t(u).data.expand.multiple,"onUpdate:modelValue":a[2]||(a[2]=i=>t(u).data.expand.multiple=i)},null,8,["modelValue"])]),_:1})):x("",!0),t(s)(["checkbox","radio","switch"])?x("",!0):(C(),F(o,{key:2,label:"\u8868\u5355\u5934\u90E8\u56FE\u6807",prop:"readonly"},{default:n(()=>[e(pe,{value:t(u).data.expand.prefix,"onUpdate:value":a[3]||(a[3]=i=>t(u).data.expand.prefix=i)},null,8,["value"])]),_:1})),t(s)(["datePicker"])?(C(),F(o,{key:3,label:"\u5E74/\u6708/\u5468/\u65E5",prop:"readonly"},{default:n(()=>[e(A,null,{default:n(()=>[e(_,{modelValue:t(u).data.expand.type,"onUpdate:modelValue":a[4]||(a[4]=i=>t(u).data.expand.type=i)},{default:n(()=>[(C(!0),$(G,null,L(t(Y),i=>(C(),F(p,{key:i,label:i,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(B,{placement:"top",title:"\u63D0\u793A",width:200,trigger:"hover",content:"\u65E5\u671F\u7B5B\u9009\u4EE5/\u5E74/\u6708/\u5468/\u65E5\u4E3A\u5355\u4F4D\u7684\u5C55\u793A\u6548\u679C\u8FDB\u884C\u7B5B\u9009"},{reference:n(()=>[e(z,null,{default:n(()=>[e(R)]),_:1})]),_:1})]),_:1})]),_:1})):x("",!0),t(s)(["checkbox","radio","select"])?(C(),F(o,{key:4,label:"\u679A\u4E3E\u7C7B\u578B"},{default:n(()=>[e(w,{type:"warning","show-icon":""},{title:n(()=>[t(u).data.defaultValue?(C(),$("span",Ce," \u5F53\u524D\u9009\u4E2D\u7684\u9ED8\u8BA4\u503C\u4E3A\uFF1A"+ae(t(u).data.defaultValue),1)):(C(),$("span",ye," \u5355\u51FB\u8868\u8868\u683C\u53EF\u9009\u4E2D\u679A\u4E3E\u7684\u9ED8\u8BA4\u663E\u793A\u503C "))]),_:1}),e(S,{size:"small",class:"mb14",border:"",data:t(u).data.options,"highlight-current-row":"",onCurrentChange:t(y)},{default:n(()=>[e(g,{type:"index",label:"\u5E8F\u53F7",width:"50",align:"center"}),e(g,{prop:"value",label:"\u503C",align:"center"},{default:n(({row:i,$index:D})=>[e(o,{prop:`options[${D}].value`,rules:{required:!0}},{default:n(()=>[e(I,{modelValue:i.value,"onUpdate:modelValue":E=>i.value=E,placeholder:"\u8F93\u5165\u8868\u5355\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(g,{prop:"label",label:"\u6587\u672C",align:"center"},{default:n(({row:i,$index:D})=>[e(o,{prop:`options[${D}].label`,rules:{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u5355\u540D\u79F0"}},{default:n(()=>[e(I,{modelValue:i.label,"onUpdate:modelValue":E=>i.label=E,placeholder:"\u8F93\u5165\u8868\u5355\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(g,{prop:"required",label:"\u64CD\u4F5C",align:"center"},{default:n(({row:i,$index:D})=>[e(A,null,{default:n(()=>[e(v,{type:"success",size:"small",onClick:E=>t(V)(D),circle:"",icon:t(U),title:"\u6DFB\u52A0\u76F8\u90BB\u5143\u7D20"},null,8,["onClick","icon"]),e(v,{type:"danger",size:"small",onClick:E=>t(m)(D),circle:"",icon:t(K)},null,8,["onClick","icon"])]),_:2},1024)]),_:1})]),_:1},8,["data","onCurrentChange"]),e(v,{type:"success",class:"w100",icon:t(U),onClick:t(b)},{default:n(()=>[Ve]),_:1},8,["icon","onClick"])]),_:1})):x("",!0)]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}});function ge(){function l(u,b){b.defaultValue=u==="object"?{}:""}function f(u,b){const V=["select","checkbox"].includes(b.type)?"\u8BF7\u9009\u62E9":"\u8BF7\u8F93\u5165"+b.label;u?b.rules={message:V,required:u}:delete b.rules}return[l,f]}function De(l,f){function u(s,r){if(s==="adjoin"){f.value="add";const a=q();a.parent=`${r.parent}|${a.id}`;const h=r.parent.split("|");if(h.length===1){const o=l.findIndex(p=>p.id===r.id);l.splice(o+1,0,a)}else{const o=h.pop();o&&y(h,o,l)}}else{const a=q();a.parent=`${r.parent}|${a.id}`,r.children&&Array.isArray(r.children)||(r.children=[]),r.children.push(a)}}function b(){const s=q();s.parent=s.id,l.push(s)}function V(s){f.value="delete";const r=s.parent.split("|");if(r.length===1){const a=l.findIndex(h=>h.id===r[0]);a!==-1&&l.splice(a,1)}else{const a=r.pop();a&&m(r,a,l)}}return[u,b,V];function m(s,r,a){s.forEach(h=>{const o=a.find(p=>p.id===h);if(o&&Array.isArray(o.children)){const p=o.children.findIndex(_=>_.id===r);p!==-1?o.children.splice(p,1):(s.unshift(),m(s,r,o.children))}})}function y(s,r,a){s.forEach(h=>{const o=a.find(p=>p.id===h);if(o&&Array.isArray(o.children)){const p=o.children.findIndex(_=>_.id===r);if(p!==-1){const _=q();_.parent=`${o.parent}|${_.id}`,o.children.splice(p+1,0,_)}else s.unshift(),y(s,r,o.children)}})}}function q(){const l=me();return{label:"",field:"",type:j.input,id:l,parent:"",show:!0,expand:{clearable:!0},required:!1}}const xe=k("\u66F4\u591A"),Ae=k("\u6DFB\u52A0\u76F8\u90BB\u8282\u70B9"),Ee=k("\u6DFB\u52A0\u5B50\u8282\u70B9"),$e=k("\u6DFB\u52A0\u8868\u5355"),we=J({props:{datas:{default:Array}},setup(l){const f=l,u=H(),b=H("add"),[V,m]=ge(),[y,s,r]=De(f.datas,b);return(a,h)=>{const o=N,p=P,_=Z,R=Q,z=W,B=T,A=O,w=se,g=re,I=ce,v=X,S=M;return C(),$(G,null,[e(S,{size:"small",class:"mb18",border:"",data:l.datas,"row-key":"id"},{default:n(()=>[e(_,{prop:"label",label:"\u8868\u5355\u540D\u79F0"},{default:n(({row:d})=>[e(p,{rules:{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u5355\u540D\u79F0"}},{default:n(()=>[e(o,{modelValue:d.label,"onUpdate:modelValue":c=>d.label=c,placeholder:"\u8F93\u5165\u8868\u5355\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(_,{prop:"field",label:"\u8868\u5355\u5B57\u6BB5"},{default:n(({row:d})=>[e(p,{rules:{required:!0}},{default:n(()=>[e(o,{modelValue:d.field,"onUpdate:modelValue":c=>d.field=c,placeholder:"\u8F93\u5165\u8868\u5355\u5B57\u6BB5\u540D"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(_,{prop:"type",label:"\u8868\u5355\u7C7B\u578B",width:"297"},{default:n(({row:d})=>[e(p,{rules:{required:!0}},{default:n(()=>[e(z,{modelValue:d.type,"onUpdate:modelValue":c=>d.type=c,onChange:c=>t(V)(c,d)},{default:n(()=>[(C(!0),$(G,null,L(t(j),c=>(C(),F(R,{key:c,label:c,value:c},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),e(B,{class:"ml6",disabled:d.type==="object",onClick:c=>u.value.operation(d)},{default:n(()=>[xe]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),_:1}),e(_,{prop:"required",label:"\u662F\u5426\u5FC5\u586B"},{default:n(({row:d})=>[e(p,null,{default:n(()=>[e(A,{modelValue:d.required,"onUpdate:modelValue":c=>d.required=c,onChange:c=>t(m)(c,d),disabled:d.type==="object"},null,8,["modelValue","onUpdate:modelValue","onChange","disabled"])]),_:2},1024)]),_:1}),e(_,{prop:"show",label:"\u663E\u793A"},{default:n(({row:d})=>[e(p,null,{default:n(()=>[e(A,{modelValue:d.show,"onUpdate:modelValue":c=>d.show=c},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(_,{label:"\u64CD\u4F5C"},{default:n(({row:d})=>[e(v,null,{default:n(()=>[e(I,{placement:"bottom-start",onCommand:c=>t(y)(c,d)},{dropdown:n(()=>[e(g,null,{default:n(()=>[e(w,{command:"adjoin"},{default:n(()=>[Ae]),_:1}),["object","array"].includes(d.type)?(C(),F(w,{key:0,command:"children"},{default:n(()=>[Ee]),_:1})):x("",!0)]),_:2},1024)]),default:n(()=>[e(B,{type:"success",size:"small",circle:"",icon:t(U)},null,8,["icon"])]),_:2},1032,["onCommand"]),e(B,{type:"danger",size:"small",onClick:c=>t(r)(d),circle:"",icon:t(K)},null,8,["onClick","icon"])]),_:2},1024)]),_:1})]),_:1},8,["data"]),e(B,{type:"success",class:"w100",icon:t(U),onClick:t(s)},{default:n(()=>[$e]),_:1},8,["icon","onClick"]),e(Be,{ref_key:"operationRef",ref:u},null,512)],64)}}});var We=_e(we,[["__scopeId","data-v-3a8c4dac"]]);export{We as default};