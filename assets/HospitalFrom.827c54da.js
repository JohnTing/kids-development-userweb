import"./papaparse.min.2786dcc2.js";import{d as k,r as p,o as n,c as l,a as t,F as r,g as b,t as u,b as a}from"./index.dc5f7c1c.js";import"./_commonjsHelpers.4e997714.js";const y=t("br",null,null,-1),E={class:"row"},A={class:"col-md-6"},f={class:"table .table-striped"},B=t("thead",null,[t("tr",null,[t("th",null,"\u81FA\u4E2D\u5E02\u5152\u7AE5\u767C\u5C55\u806F\u5408\u8A55\u4F30\u4E2D\u5FC3"),t("th",null,"\u4EBA\u6578"),t("th",null,"\u4E0A\u9650"),t("th",null,"\u639B\u865F")])],-1),C=["onClick"],g={key:1,class:"btn btn-secondary",disabled:""},D={class:"col-md-6"},H={class:"table .table-striped"},L=t("thead",null,[t("tr",null,[t("th",null,"\u5340\u57DF\u7D1A\u4EE5\u4E0A\u91AB\u7642\u55AE\u4F4D"),t("th",null,"\u4EBA\u6578"),t("th",null,"\u4E0A\u9650"),t("th",null,"\u639B\u865F")])],-1),T=["onClick"],O={key:1,class:"btn btn-secondary",disabled:""},Q=k({__name:"HospitalFrom",setup(G){const c=p([]),d=p([]);function _(){const s=new Headers;s.append("X-Parse-Application-Id","kYUbkvUsiOYbHlfGTekGVCsdoLgHXglAcQbaO57f"),s.append("X-Parse-REST-API-Key","HBi7YTskQm6k7AcUFIN3Rp5sH2FMKvHbRyfEyr4Q"),s.append("Content-Type","application/json"),fetch("https://kds.b4a.io/classes/HospitalList/",{method:"GET",headers:s}).then(e=>e.json()).then(e=>{console.log(e.results),c.value=e.results.filter(o=>o.type==0),d.value=e.results.filter(o=>o.type==1)}).catch(e=>console.log("error",e))}_();function i(s){console.log("\u639B\u865F:"+s)}return(s,h)=>(n(),l(r,null,[y,t("div",E,[t("div",A,[t("table",f,[B,t("tbody",null,[(n(!0),l(r,null,b(c.value,(e,o,m)=>(n(),l("tr",null,[t("td",null,u(e.name),1),t("td",null,u(e.number),1),t("td",null,u(e.cap),1),t("td",null,[e.number<e.cap?(n(),l("button",{key:0,class:"btn btn-primary",onClick:F=>i(e.name)},"\u639B\u865F",8,C)):a("",!0),e.number>=e.cap?(n(),l("button",g,"\u984D\u6EFF")):a("",!0)])]))),256))])])]),t("div",D,[t("table",H,[L,t("tbody",null,[(n(!0),l(r,null,b(d.value,(e,o,m)=>(n(),l("tr",null,[t("td",null,u(e.name),1),t("td",null,u(e.number),1),t("td",null,u(e.cap),1),t("td",null,[e.number<e.cap?(n(),l("button",{key:0,class:"btn btn-primary",onClick:F=>i(e.name)},"\u639B\u865F",8,T)):a("",!0),e.number>=e.cap?(n(),l("button",O,"\u984D\u6EFF")):a("",!0)])]))),256))])])])])],64))}});export{Q as default};
//# sourceMappingURL=HospitalFrom.827c54da.js.map
