import{d as x,r as c,m as U,g,o as i,c as a,a as e,w as d,h as N,F as p,e as A,l as f,b,p as R,u as B,t as _,j as T,k as s,f as I}from"./index.19fc492a.js";const L=["onSubmit"],M={class:"form-row"},Q=e("h5",null,"1.\u5152\u7AE5\u57FA\u672C\u8CC7\u6599",-1),O={class:"col-md-12"},J=s(" \u5152\u7AE5\u8EAB\u4EFD\u8B49\u865F\uFF1A "),P=e("input",{type:"text",class:"form-control",name:"identityNumber",required:"",pattern:"[A-Z][01][0-9]{8}"},null,-1),Z=s(" \u5152\u7AE5\u59D3\u540D\uFF1A "),$=e("input",{type:"text",class:"form-control",name:"childName",required:""},null,-1),z=s(" \u5152\u7AE5\u51FA\u751F\u65E5\u671F "),G=e("br",null,null,-1),H={class:"col-md-12"},K=s(" \u586B\u5BEB\u4EBA\u8207\u5152\u7AE5\u95DC\u4FC2\uFF1A "),W={class:"form-inline"},X={class:"form-check-inline"},Y={class:"form-check-label"},ee=["value"],ue=["placeholder","disabled"],te=e("br",null,null,-1),se=e("h5",null,"2.\u662F\u5426\u66FE\u7D93\u65BC\u672C\u9662/\u4ED6\u9662\u770B\u904E\u5152\u7AE5\u767C\u5C55\u806F\u5408\u8A55\u4F30\u9580\u8A3A\uFF1F",-1),oe={class:"form-check"},le={class:"form-check-label"},ne=s("\u5426 "),ie={class:"form-check"},ae={class:"form-check-label"},ce=s("\u662F "),de={key:0},re=e("div",{class:"form-inline"},[s(" \u524D\u6B21\u8A55\u4F30\u65E5\u671F\uFF1A"),e("input",{type:"date",class:"form-control",name:"lastEvaluate",required:""})],-1),_e=e("div",{class:"form-inline"},[s(" \u5EFA\u8B70\u8907\u8A55\u6642\u9593\uFF1A"),e("input",{type:"date",class:"form-control",name:"SuggestEvaluate"}),s("\uFF08\u53EF\u4E0D\u586B\uFF09 ")],-1),he=[re,_e],me=e("br",null,null,-1),ve=e("h5",null,"3\u3001\u662F\u5426\u6709\u7279\u6B8A\u75BE\u75C5\uFF1F",-1),pe={class:"form-check"},fe={class:"form-check-label"},Fe=s("\u5426 "),Ee={class:"form-check"},Ae={class:"form-check-label"},be=s("\u662F "),De={class:"form-inline"},ke={class:"form-check"},Be={class:"form-check-label"},ye=["value"],Ce=e("br",null,null,-1),ge=e("h5",null,"4\u3001\u524D\u6B21\u8A55\u4F30\u9072\u7DE9/\u81E8\u754C\u9072\u7DE9\uFF1A",-1),xe={class:"form-inline"},qe={class:"form-check"},Se={class:"form-check-label"},Ve=["value"],je=e("br",null,null,-1),we=e("h5",null,"5\u3001TAIPEI II \u7BE9\u6AA2\u8868",-1),Ue={key:0},Ne=e("h6",null,"\u9700\u8F38\u5165\u51FA\u751F\u65E5\u671F",-1),Re=[Ne],Te={key:1},Ie={class:"form-inline"},Le={class:"form-check"},Me={class:"form-check-label"},Qe=["value"],Oe=e("div",{class:"form-row"},null,-1),Je=e("button",{class:"btn btn-primary",type:"submit"},"\u63D0\u4EA4",-1),Pe={key:0},Ze=x({__name:"UserFrom",setup(q){const r=["\u7236\u6BCD/\u76E3\u8B77\u4EBA","\u8001\u5E2B","\u793E\u5DE5","\u8B77\u7406\u5E2B","\u5176\u4ED6"],y=["\u795E\u7D93\u7CFB\u7D71","\u5167\u5206\u6CCC","\u7F55\u898B\u75BE\u75C5","\u65E9\u7522"],S=["\u52D5\u4F5C\u985E","\u8A9E\u8A00","\u8A8D\u77E5\u3001\u793E\u6703\u60C5\u7DD2\u3001\u5C08\u6CE8\u529B\u3001\u904E\u52D5\u7B49"],F=c(""),h=c(null),m=c(null),V=c({});fetch("administrativeArea.json").then(l=>l.json()).then(l=>{V.value=l});const j=c(!1),D=c("");function w(l){l.preventDefault();const t=new FormData(l.target);let u={};t.forEach((o,n,$e)=>{n in u?u[n]=u[n]+","+o.toString():u[n]=o.toString()}),console.log(u),D.value=JSON.stringify(u,null,2),j.value=!0}const v=c({}),C=c({questions:[]});fetch("monthRoot.json").then(l=>l.json()).then(l=>{v.value=l});const E=c(null),k=U(()=>{console.log(E.value);const t=g().diff(g(E.value))/(1e3*60*60*24);let u="";for(const o in v.value)if(v.value[o].min<=t&&v.value[o].max>=t){u=v.value[o].title,fetch(o).then(n=>n.json()).then(n=>{console.log(n),C.value=n});break}return u});return(l,t)=>(i(),a(p,null,[e("form",{id:"from",onSubmit:T(w,["prevent"])},[e("div",M,[Q,e("div",O,[J,P,Z,$,z,d(e("input",{type:"date",class:"form-control",name:"childBirthday",required:"","onUpdate:modelValue":t[0]||(t[0]=u=>E.value=u)},null,512),[[N,E.value]])]),G,e("div",H,[K,e("div",W,[(i(),a(p,null,A(r,(u,o)=>e("div",X,[e("label",Y,[d(e("input",{class:"form-check-input",type:"radio",name:"userRelationship",value:u,"onUpdate:modelValue":t[1]||(t[1]=n=>F.value=n),required:""},null,8,ee),[[f,F.value]]),s(_(u),1)])])),64)),e("div",null,[e("input",{type:"text",class:"form-control",name:"userRelationshipOther",placeholder:F.value==r.at(r.length-1)?"\u8ACB\u8F38\u5165\u95DC\u4FC2":"",disabled:F.value!=r.at(r.length-1)},null,8,ue)])])])]),te,e("div",null,[se,e("div",oe,[e("label",le,[d(e("input",{type:"radio",class:"form-check-input",name:"isEvaluate",value:!1,"onUpdate:modelValue":t[2]||(t[2]=u=>h.value=u),required:""},null,512),[[f,h.value]]),ne])]),e("div",ie,[e("label",ae,[d(e("input",{type:"radio",class:"form-check-input",name:"isEvaluate",value:!0,"onUpdate:modelValue":t[3]||(t[3]=u=>h.value=u),required:""},null,512),[[f,h.value]]),ce]),h.value?(i(),a("div",de,he)):b("",!0)])]),me,e("div",null,[ve,e("div",pe,[e("label",fe,[d(e("input",{type:"radio",class:"form-check-input",name:"isSpecialDisease",value:!1,"onUpdate:modelValue":t[4]||(t[4]=u=>m.value=u),required:""},null,512),[[f,m.value]]),Fe])]),e("div",Ee,[e("label",Ae,[d(e("input",{type:"radio",class:"form-check-input",name:"isSpecialDisease",value:!0,"onUpdate:modelValue":t[5]||(t[5]=u=>m.value=u),required:""},null,512),[[f,m.value]]),be]),d(e("div",null,[(i(),a(p,null,A(y,(u,o)=>e("div",De,[e("div",ke,[e("label",Be,[e("input",{type:"checkbox",class:"form-check-input",name:"specialDisease",value:u},null,8,ye),s(_(u),1)])])])),64))],512),[[R,m.value]])])]),Ce,e("div",null,[ge,(i(),a(p,null,A(S,(u,o)=>e("div",xe,[e("div",qe,[e("label",Se,[e("input",{type:"checkbox",class:"form-check-input",name:"retarded",value:o},null,8,Ve),s(_(u),1)])])])),64))]),je,e("div",null,[we,B(k)?b("",!0):(i(),a("div",Ue,Re)),B(k)?(i(),a("div",Te,[e("h6",null,_(B(k)),1),(i(!0),a(p,null,A(C.value.questions,(u,o)=>(i(),a("div",Ie,[e("div",Le,[e("label",Me,[e("input",{type:"checkbox",class:"form-check-input",name:"monthQuestion",value:o},null,8,Qe),s(_(u.title),1)])])]))),256))])):b("",!0)]),Oe,Je],40,L),D.value?(i(),a("pre",Pe,`\u63D0\u4EA4\u8CC7\u6599\uFF1A\r
`+_(D.value),1)):b("",!0)],64))}}),Ge=x({__name:"UserView",setup(q){return(r,y)=>(i(),a("main",null,[I(Ze)]))}});export{Ge as default};
