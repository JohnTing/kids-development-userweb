import{d as b,r as p,o as n,c as l,a as t,F as d,h as _,t as u,b as a,e as E}from"./index.b5407430.js";const A=t("br",null,null,-1),f={class:"row"},B={class:"col-md-6"},C={class:"table .table-striped"},H=t("thead",null,[t("tr",null,[t("th",null,"\u81FA\u4E2D\u5E02\u5152\u7AE5\u767C\u5C55\u806F\u5408\u8A55\u4F30\u4E2D\u5FC3"),t("th",null,"\u4EBA\u6578"),t("th",null,"\u4E0A\u9650"),t("th",null,"\u639B\u865F")])],-1),D=["onClick"],g={key:1,class:"btn btn-secondary",disabled:""},L={class:"col-md-6"},T={class:"table .table-striped"},V=t("thead",null,[t("tr",null,[t("th",null,"\u5340\u57DF\u7D1A\u4EE5\u4E0A\u91AB\u7642\u55AE\u4F4D"),t("th",null,"\u4EBA\u6578"),t("th",null,"\u4E0A\u9650"),t("th",null,"\u639B\u865F")])],-1),N=["onClick"],O={key:1,class:"btn btn-secondary",disabled:""},w=b({__name:"HospitalFrom",setup(h){const r=p([]),c=p([]);function m(){const s=new Headers;s.append("X-Parse-Application-Id","kYUbkvUsiOYbHlfGTekGVCsdoLgHXglAcQbaO57f"),s.append("X-Parse-REST-API-Key","HBi7YTskQm6k7AcUFIN3Rp5sH2FMKvHbRyfEyr4Q"),s.append("Content-Type","application/json"),fetch("https://kds.b4a.io/classes/HospitalList/",{method:"GET",headers:s}).then(e=>e.json()).then(e=>{console.log(e.results),r.value=e.results.filter(o=>o.type==0),c.value=e.results.filter(o=>o.type==1)}).catch(e=>console.log("error",e))}m();function i(s){console.log("\u639B\u865F:"+s)}return(s,F)=>(n(),l(d,null,[A,t("div",f,[t("div",B,[t("table",C,[H,t("tbody",null,[(n(!0),l(d,null,_(r.value,(e,o,k)=>(n(),l("tr",null,[t("td",null,u(e.name),1),t("td",null,u(e.number),1),t("td",null,u(e.cap),1),t("td",null,[e.number<e.cap?(n(),l("button",{key:0,class:"btn btn-primary",onClick:y=>i(e.name)},"\u639B\u865F",8,D)):a("",!0),e.number>=e.cap?(n(),l("button",g,"\u984D\u6EFF")):a("",!0)])]))),256))])])]),t("div",L,[t("table",T,[V,t("tbody",null,[(n(!0),l(d,null,_(c.value,(e,o,k)=>(n(),l("tr",null,[t("td",null,u(e.name),1),t("td",null,u(e.number),1),t("td",null,u(e.cap),1),t("td",null,[e.number<e.cap?(n(),l("button",{key:0,class:"btn btn-primary",onClick:y=>i(e.name)},"\u639B\u865F",8,N)):a("",!0),e.number>=e.cap?(n(),l("button",O,"\u984D\u6EFF")):a("",!0)])]))),256))])])])])],64))}}),G=b({__name:"HospitalView",setup(h){return(r,c)=>(n(),l("main",null,[E(w)]))}});export{G as default};
