import{d as B,r as l,b as p,o as a,c as d,e as t,w as f,v as k,t as h,f as A,g as V,F as b,h as y,i as M,j as U,k as E,l as S}from"./index.92c5bbd3.js";const j=t("label",null,"\u8ACB\u9078\u64C7\u60A8\u7684\u5BF6\u8C9D\u5E74\u9F61\u9032\u884C\u6AA2\u6E2C\uFF1A",-1),H=t("br",null,null,-1),O={class:"form-inline"},T=t("br",null,null,-1),Y={key:0},q=["onSubmit"],w=["value"],I={id:"mytable",class:"table table-striped table-sm"},N=t("thead",null,null,-1),R={class:"star"},K={class:"star"},P={class:"slist_radio"},L=["id","name","onUpdate:modelValue"],Q=["for"],X={class:"slist_radio"},G=["id","name","onUpdate:modelValue"],$=["for"],J=["disabled"],z=U(" \u78BA\u8A8D "),W={key:0,class:"spinner-border spinner-border-sm"},ue=B({__name:"KidForm",setup(Z){const i=l({});fetch("monthRoot.json").then(o=>o.json()).then(o=>{i.value=o});const r=l(""),c=l([]),_=l([]);function F(){_.value=[],fetch(r.value).then(o=>o.json()).then(o=>{c.value=o.inspectionItems;for(let u in c.value)c.value[u].title=c.value[u].title.replace(/\d+\.(.+)/,"$1")})}const m=l(p().format("YYYY-MM-DD")),C=l("");function D(){console.log(m.value);const u=p().diff(p(m.value))/(1e3*60*60*24);console.log("diffday = "+u);for(const e in i.value)i.value[e].min<=u&&i.value[e].max>=u&&(r.value=e,F());C.value=""+(u/30).toFixed(1)+"\u6708"}const v=l(!1);function g(o){o.preventDefault();const u=new FormData(o.target);let e={};if(u.forEach((n,s,ee)=>e[s]=n.toString()),console.log(e),Object.keys(e).length==0){alert("\u8ACB\u8F38\u5165\u8CC7\u6599");return}x(e)}function x(o){v.value=!0;const u=new Headers;u.append("X-Parse-Application-Id","kYUbkvUsiOYbHlfGTekGVCsdoLgHXglAcQbaO57f"),u.append("X-Parse-REST-API-Key","HBi7YTskQm6k7AcUFIN3Rp5sH2FMKvHbRyfEyr4Q"),u.append("Content-Type","application/json");const e=JSON.stringify(o);fetch("https://kds.b4a.io/classes/KidFrom",{method:"POST",headers:u,body:e}).then(s=>s.text()).then(s=>{console.log(s),S.push("/user")}).catch(s=>console.log("error",s))}return(o,u)=>(a(),d(b,null,[t("div",null,[j,H,t("div",O,[f(t("input",{type:"date",class:"form-control","onUpdate:modelValue":u[0]||(u[0]=e=>m.value=e)},null,512),[[k,m.value]]),t("button",{type:"button",class:"btn btn-secondary",onClick:D},"\u78BA\u5B9A")]),T,t("label",null,"\u8A66\u7B97\u7D50\u679C\uFF1A"+h(C.value),1)]),r.value?(a(),d("pre",Y,`    \u5152\u7AE5\u7B26\u5408\u8A72\u9805\u76EE\u63CF\u8FF0\u7684\u73FE\u8C61\u5708\u9078[\u662F]\uFF0C\u82E5\u4E0D\u7B26\u5408\u6216\u6C92\u6709\u8A72\u9805\u76EE\u63CF\u8FF0\u7684\u73FE\u8C61\u5708\u9078[\u5426]\u3002\r
    \u2605\u8868\u793A\u70BA\u91CD\u8981\u6AA2\u6E2C\u984C\u76EE\uFF0C\u8ACB\u5BE6\u5730\u6E2C\u8A66\uFF0C\u518D\u7D00\u9304\u5152\u7AE5\u53CD\u61C9\u3002`)):A("",!0),t("form",{id:"form",onSubmit:M(g,["prevent"])},[f(t("select",{class:"form-control",id:"selectDistrict",name:"selectDistrict",onChange:F,"onUpdate:modelValue":u[1]||(u[1]=e=>r.value=e)},[(a(!0),d(b,null,y(i.value,(e,n,s)=>(a(),d("option",{value:n},h(e.title),9,w))),256))],544),[[V,r.value]]),t("table",I,[N,t("tbody",null,[(a(!0),d(b,null,y(c.value.map((e,n)=>({value:e,index:n,id:`inspectionItem_ + ${n}`})),e=>(a(),d("tr",{key:e.index},[t("th",R,h(e.index+1+"."),1),t("th",K,h(e.value.special?"\u2605":""),1),t("th",null,h(e.value.title),1),t("th",P,[f(t("input",{type:"radio",id:e.id+"_1",name:"q_"+e.index,value:"true","onUpdate:modelValue":n=>_.value[e.index]=n,required:""},null,8,L),[[E,_.value[e.index]]]),t("label",{for:e.id+"_1"},"\u662F",8,Q)]),t("th",X,[f(t("input",{type:"radio",id:e.id+"_0",name:"q_"+e.index,value:"false","onUpdate:modelValue":n=>_.value[e.index]=n,required:""},null,8,G),[[E,_.value[e.index]]]),t("label",{for:e.id+"_0"},"\u5426",8,$)])]))),128))])]),t("button",{class:"btn btn-primary",type:"submit",disabled:v.value},[z,v.value?(a(),d("span",W)):A("",!0)],8,J)],40,q)],64))}});export{ue as _};
//# sourceMappingURL=KidForm.90d445a6.js.map
