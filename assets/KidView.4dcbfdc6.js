import{d as g,r as d,f as C,o as a,c as i,a as e,w as m,v as k,t as _,g as V,F as b,h as p,b as B,i as M,j,n as D,k as y}from"./index.f31f4880.js";const S=e("h2",null,"\u7B2C\u4E00\u6B65\u8A08\u7B97\u5E74\u9F61",-1),U=e("label",null,"\u8ACB\u9078\u64C7\u60A8\u7684\u5BF6\u8C9D\u5E74\u9F61\u9032\u884C\u6AA2\u6E2C\uFF1A",-1),q=e("br",null,null,-1),Y={class:"form-inline"},N=e("br",null,null,-1),I=["onSubmit"],L={key:0},R=["value"],T=e("br",null,null,-1),$={key:1,class:"table table-sm"},z=e("h2",null,"\u7B2C\u4E8C\u6B65\u767C\u5C55\u91CC\u7A0B\u6AA2\u6838",-1),K=e("h4",null,"\u5152\u7AE5\u7B26\u5408\u8A72\u9805\u76EE\u63CF\u8FF0\u7684\u73FE\u8C61\u5708\u9078[\u662F]\uFF0C\u82E5\u4E0D\u7B26\u5408\u6216\u6C92\u6709\u8A72\u9805\u76EE\u63CF\u8FF0\u7684\u73FE\u8C61\u5708\u9078[\u5426]\u3002",-1),O=e("h5",null,"\u2605\u8868\u793A\u70BA\u91CD\u8981\u6AA2\u6E2C\u984C\u76EE\uFF0C\u8ACB\u5BE6\u5730\u6E2C\u8A66\uFF0C\u518D\u7D00\u9304\u5152\u7AE5\u53CD\u61C9\u3002",-1),G=e("h5",null,"\u6709\u4EFB\u4F552\u984C\u7B54\u6848\u662F\u5708\u9078\u5728\u7DB2\u5E95\u6B04\u5167\uFF0C\u6216\u984C\u865F\u524D\u6709\u2605\u4E4B\u4EFB\u4F551\u984C\u7B54\u6848\u662F\u5708\u9078\u5728\u7DB2\u5E95\u6B04\u5167\uFF0C \u6216\u586B\u5BEB\u4EBA\u8A8D\u70BA\u5152\u7AE5\u6709\u5176\u4ED6\u4E0D\u5C0B\u5E38\u7684\u529F\u80FD\u6216\u884C\u70BA\u8868\u73FE\uFF0C\u8ACB\u81F3\u4E0B\u4E00\u9801\u6240\u5217\u4E4B\u91AB\u7642\u9662\u6240\u505A\u9032\u4E00\u6B65\u6AA2\u67E5\u3002",-1),H={class:"col-sm-10 d-flex"},J={style:{width:"25px"}},P={style:{width:"25px"}},Q={class:"col-sm-2 d-flex justify-content-center"},W=["id","name","onUpdate:modelValue"],X=["for"],Z=["id","name","onUpdate:modelValue"],uu=["for"],eu=["disabled"],tu=j(" \u78BA\u8A8D "),lu={key:0,class:"spinner-border spinner-border-sm"},au=g({__name:"KidView",setup(nu){const c=d({});fetch("monthRoot.json").then(l=>l.json()).then(l=>{c.value=l});const v=d(""),s=d([]),r=d([]);function A(){r.value=[],fetch(v.value).then(l=>l.json()).then(l=>{s.value=l.inspectionItems;for(let t in s.value)s.value[t].title=s.value[t].title.replace(/\d+\.(.+)/,"$1")})}const f=d(C().format("YYYY-MM-DD")),F=d("");function x(){console.log(f.value);const t=C().diff(C(f.value))/(1e3*60*60*24);console.log("diffday = "+t);for(const u in c.value)c.value[u].min<=t&&c.value[u].max>=t&&(v.value=u,A());F.value=""+(t/30).toFixed(1)+"\u6708"}const E=d(!1);function w(l){l.preventDefault();const t=new FormData(l.target);let u={};if(t.forEach((o,h,su)=>u[h]=o.toString()),console.log(u),Object.keys(u).length==0){alert("\u8ACB\u8F38\u5165\u8CC7\u6599");return}console.log(s.value.map(o=>o.answer));let n=0;for(const o in s.value){const h=u["q_"+o]=="true";h==s.value[o].answer&&(console.log(o+"ans = "+h+"; "+(s.value[o].answer?"true":"false")),s.value[o].special?n+=2:n+=1)}alert("\u5371\u96AA\u5EA6"+n)}return(l,t)=>(a(),i("main",null,[S,e("div",null,[U,q,e("div",Y,[m(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=u=>f.value=u)},null,512),[[k,f.value]]),e("button",{type:"button",class:"btn btn-secondary",onClick:x},"\u78BA\u5B9A")]),N,e("label",null,"\u8A66\u7B97\u7D50\u679C\uFF1A"+_(F.value),1)]),e("form",{id:"form",onSubmit:M(w,["prevent"])},[F.value?(a(),i("div",L,[m(e("select",{class:"form-control",id:"selectDistrict",name:"selectDistrict",onChange:A,"onUpdate:modelValue":t[1]||(t[1]=u=>v.value=u),disabled:""},[(a(!0),i(b,null,p(c.value,(u,n,o)=>(a(),i("option",{value:n},_(u.title),9,R))),256))],544),[[V,v.value]])])):B("",!0),T,s.value.length?(a(),i("table",$,[z,K,O,G,(a(!0),i(b,null,p(s.value.map((u,n)=>({value:u,index:n,id:`inspectionItem_ + ${n}`})),u=>(a(),i("div",{class:"row",key:u.index},[e("div",H,[e("tr",null,[e("td",J,_(u.index+1+"."),1),e("td",P,_(u.value.special?"\u2605":""),1),e("td",null,_(u.value.title),1)])]),e("div",Q,[e("tr",null,[e("td",{class:D("slist_radio "+(u.value.answer?"slist_answer":""))},[m(e("input",{type:"radio",id:u.id+"_1",name:"q_"+u.index,value:"true","onUpdate:modelValue":n=>r.value[u.index]=n,required:""},null,8,W),[[y,r.value[u.index]]]),e("label",{for:u.id+"_1"},"\u662F",8,X)],2),e("td",{class:D("slist_radio "+(u.value.answer?"":"slist_answer"))},[m(e("input",{type:"radio",id:u.id+"_0",name:"q_"+u.index,value:"false","onUpdate:modelValue":n=>r.value[u.index]=n,required:""},null,8,Z),[[y,r.value[u.index]]]),e("label",{for:u.id+"_0"},"\u5426",8,uu)],2)])])]))),128)),e("button",{class:"btn btn-primary",type:"submit",disabled:E.value},[tu,E.value?(a(),i("span",lu)):B("",!0)],8,eu)])):B("",!0)],40,I)]))}});export{au as default};
