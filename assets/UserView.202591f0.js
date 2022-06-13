import{d as D,r as _,o as n,c as u,b as e,F as l,f as c,u as y,a as A,w as B,e as b,g,h as q,i,m as w,k as Y,t as d,l as T}from"./index.fee6adf3.js";const V=["onSubmit"],S={class:"form-row"},U=e("div",{class:"col-md-12"},[i(" \u586B\u8868\u4EBA\u59D3\u540D\uFF1A "),e("input",{type:"text",class:"form-control",name:"userName",required:""})],-1),x={class:"col-md-12"},H=i(" \u586B\u8868\u4EBA\u8EAB\u5206\uFF1A "),M={class:"form-check-inline"},O=["id","value"],j=["for"],P={class:"col-md-12"},I=i(" \u5BB6\u9577\u570B\u7C4D\uFF1A "),L={class:"form-check-inline"},Q=["id","value"],R=["for"],X=e("br",null,null,-1),K=e("h3",null,"\u5152\u7AE5\u57FA\u672C\u8CC7\u6599",-1),G={class:"form-row"},J={class:"col-md-12"},Z=i(" \u5152\u7AE5\u59D3\u540D\uFF1A "),$=e("input",{type:"text",class:"form-control",name:"childName",required:""},null,-1),z=e("label",null,"\u6027\u5225\uFF1A",-1),W={class:"form-check-inline"},ee=["id","value"],te=["for"],se=e("br",null,null,-1),oe={class:"form-row"},ne={class:"col-md-6"},ue=i(" \u6AA2\u6838\u65E5\u671F\uFF1A "),ae=["value"],ie={class:"col-md-6"},re=i(" \u51FA\u751F\u65E5\u671F\uFF1A "),le=["value"],ce={class:"form-row"},de={class:"col-sm-12 form-inline"},_e=i(" \u6236\u7C4D\u4F4F\u5740\uFF1A "),me=w('<div class="form-row"><div class="col-sm-6"> \u8EAB\u5206\u8B49\u8CC7\u6599\uFF1A <input class="form-control" name="identityCard" required pattern="[A-Z][01][0-9]{8}"></div><div class="col-sm-6"> \u96FB\u8A71\uFF1A <input class="form-control" name="phoneNumber" required></div></div>',1),pe=["disabled"],he=i(" \u78BA\u8A8D "),fe={key:0,class:"spinner-border spinner-border-sm"},ve=D({__name:"UserFrom",setup(E){const f=["\u91AB\u7642\u4EBA\u54E1","\u8001\u5E2B","\u793E\u653F\u4EBA\u54E1","\u5BB6\u9577","\u5176\u4ED6"],v=["\u672C\u570B\u7C4D","\u5927\u9678","\u6CF0\u570B","\u5370\u5C3C","\u8D8A\u5357","\u67EC\u57D4\u5BE8","\u7DEC\u7538","\u5176\u4ED6"],k=["\u7537","\u5973"],m=_({}),p=_(""),F=_("");fetch("administrativeArea.json").then(a=>a.json()).then(a=>{m.value=a});const h=_(!1);function C(a){a.preventDefault();const s=new FormData(a.target);let t={};s.forEach((o,r,Fe)=>t[r]=o.toString()),console.log(t),h.value=!0,N(t)}function N(a){const s=new Headers;s.append("X-Parse-Application-Id","kYUbkvUsiOYbHlfGTekGVCsdoLgHXglAcQbaO57f"),s.append("X-Parse-REST-API-Key","HBi7YTskQm6k7AcUFIN3Rp5sH2FMKvHbRyfEyr4Q"),s.append("Content-Type","application/json");const t=JSON.stringify(a);fetch("https://kds.b4a.io/classes/UserFrom",{method:"POST",headers:s,body:t}).then(r=>r.text()).then(r=>{console.log(r),Y.push("/map")}).catch(r=>console.log("error",r))}return(a,s)=>(n(),u("form",{id:"from",onSubmit:q(C,["prevent"])},[e("div",S,[U,e("div",x,[H,(n(),u(l,null,c(f,(t,o)=>e("div",M,[e("input",{class:"form-check-input",type:"radio",name:"userType",id:"userType_"+o,value:t,required:""},null,8,O),e("label",{class:"form-check-label",for:"userType_"+o},d(t),9,j)])),64))]),e("div",P,[I,(n(),u(l,null,c(v,(t,o)=>e("div",L,[e("input",{class:"form-check-input",type:"radio",name:"parentNationality",id:"parentNationality_"+o,value:t,required:""},null,8,Q),e("label",{class:"form-check-label",for:"parentNationality_"+o},d(t),9,R)])),64))])]),X,K,e("div",G,[e("div",J,[Z,$,z,(n(),u(l,null,c(k,t=>e("div",W,[e("input",{class:"form-check-input",type:"radio",name:"childGender",id:t,value:t,required:""},null,8,ee),e("label",{class:"form-check-label",for:t},d(t),9,te)])),64))])]),se,e("div",oe,[e("div",ne,[ue,e("input",{type:"date",class:"form-control",id:"inspectionDate",name:"inspectionDate",value:y(A)().format("YYYY-MM-DD"),required:""},null,8,ae)]),e("div",ie,[re,e("input",{type:"date",class:"form-control",id:"childBirthday",name:"childBirthday",value:y(A)().format("YYYY-MM-DD"),required:""},null,8,le)])]),e("div",ce,[e("div",de,[_e,B(e("select",{class:"form-control",id:"city",name:"city","onUpdate:modelValue":s[0]||(s[0]=t=>p.value=t),required:""},[(n(!0),u(l,null,c(m.value,(t,o)=>(n(),u("option",null,d(o),1))),256))],512),[[b,p.value]]),B(e("select",{class:"form-control",id:"district",name:"district","onUpdate:modelValue":s[1]||(s[1]=t=>F.value=t),required:""},[(n(!0),u(l,null,c(m.value[p.value],(t,o)=>(n(),u("option",{key:t},d(t),1))),128))],512),[[b,F.value]])])]),me,e("button",{class:"btn btn-primary",type:"submit",disabled:h.value},[he,h.value?(n(),u("span",fe)):g("",!0)],8,pe)],40,V))}}),Ae=D({__name:"UserView",setup(E){return(f,v)=>(n(),u("main",null,[T(ve)]))}});export{Ae as default};
//# sourceMappingURL=UserView.202591f0.js.map
