import{d as g,r as d,o as a,c as i,a as e,w as v,v as k,t as _,f as V,F as A,g as E,b as C,n as x,h as y,i as M,j}from"./index.f9bb6120.js";import{d as p}from"./dayjs.min.e6000195.js";import"./_commonjsHelpers.4e997714.js";const S=e("h2",null,"\u7B2C\u4E00\u6B65\u8A08\u7B97\u5E74\u9F61",-1),U=e("label",null,"\u8ACB\u9078\u64C7\u60A8\u7684\u5BF6\u8C9D\u5E74\u9F61\u9032\u884C\u6AA2\u6E2C\uFF1A",-1),q=e("br",null,null,-1),Y={class:"form-inline"},N=e("br",null,null,-1),I=["onSubmit"],K={key:0},L=["value"],R=e("br",null,null,-1),T={key:1,class:"table table-sm"},$=e("h2",null,"\u7B2C\u4E8C\u6B65\u767C\u5C55\u91CC\u7A0B\u6AA2\u6838",-1),z=e("h4",null,"\u5152\u7AE5\u7B26\u5408\u8A72\u9805\u76EE\u63CF\u8FF0\u7684\u73FE\u8C61\u5708\u9078[\u662F]\uFF0C\u82E5\u4E0D\u7B26\u5408\u6216\u6C92\u6709\u8A72\u9805\u76EE\u63CF\u8FF0\u7684\u73FE\u8C61\u5708\u9078[\u5426]\u3002",-1),O=e("h5",null,"\u2605\u8868\u793A\u70BA\u91CD\u8981\u6AA2\u6E2C\u984C\u76EE\uFF0C\u8ACB\u5BE6\u5730\u6E2C\u8A66\uFF0C\u518D\u7D00\u9304\u5152\u7AE5\u53CD\u61C9\u3002",-1),G=e("h5",null,"\u6709\u4EFB\u4F552\u984C\u7B54\u6848\u662F\u5708\u9078\u5728\u7DB2\u5E95\u6B04\u5167\uFF0C\u6216\u984C\u865F\u524D\u6709\u2605\u4E4B\u4EFB\u4F551\u984C\u7B54\u6848\u662F\u5708\u9078\u5728\u7DB2\u5E95\u6B04\u5167\uFF0C \u6216\u586B\u5BEB\u4EBA\u8A8D\u70BA\u5152\u7AE5\u6709\u5176\u4ED6\u4E0D\u5C0B\u5E38\u7684\u529F\u80FD\u6216\u884C\u70BA\u8868\u73FE\uFF0C\u8ACB\u81F3\u4E0B\u4E00\u9801\u6240\u5217\u4E4B\u91AB\u7642\u9662\u6240\u505A\u9032\u4E00\u6B65\u6AA2\u67E5\u3002",-1),H={class:"col-sm-10 d-flex"},J={style:{width:"25px"}},P={style:{width:"25px"}},Q={class:"col-sm-2 d-flex justify-content-center"},W=["id","name","onUpdate:modelValue"],X=["for"],Z=["id","name","onUpdate:modelValue"],uu=["for"],eu=["disabled"],tu=j(" \u78BA\u8A8D "),ou={key:0,class:"spinner-border spinner-border-sm"},du=g({__name:"KidView",setup(lu){const r=d({});fetch("monthRoot.json").then(o=>o.json()).then(o=>{r.value=o});const f=d(""),n=d([]),c=d([]);function B(){c.value=[],fetch(f.value).then(o=>o.json()).then(o=>{n.value=o.inspectionItems;for(let t in n.value)n.value[t].title=n.value[t].title.replace(/\d+\.(.+)/,"$1")})}const h=d(p().format("YYYY-MM-DD")),F=d("");function w(){console.log(h.value);const t=p().diff(p(h.value))/(1e3*60*60*24);console.log("diffday = "+t);for(const u in r.value)r.value[u].min<=t&&r.value[u].max>=t&&(f.value=u,B());F.value=""+(t/30).toFixed(1)+"\u6708"}const b=d(!1);function D(o){o.preventDefault();const t=new FormData(o.target);let u={};if(t.forEach((s,m,nu)=>u[m]=s.toString()),console.log(u),Object.keys(u).length==0){alert("\u8ACB\u8F38\u5165\u8CC7\u6599");return}console.log(n.value.map(s=>s.answer));let l=0;for(const s in n.value){const m=u["q_"+s]=="true";m==n.value[s].answer&&(console.log(s+"ans = "+m+"; "+(n.value[s].answer?"true":"false")),n.value[s].special?l+=2:l+=1)}alert("\u5371\u96AA\u5EA6"+l)}return(o,t)=>(a(),i("main",null,[S,e("div",null,[U,q,e("div",Y,[v(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=u=>h.value=u)},null,512),[[k,h.value]]),e("button",{type:"button",class:"btn btn-secondary",onClick:w},"\u78BA\u5B9A")]),N,e("label",null,"\u8A66\u7B97\u7D50\u679C\uFF1A"+_(F.value),1)]),e("form",{id:"form",onSubmit:M(D,["prevent"])},[F.value?(a(),i("div",K,[v(e("select",{class:"form-control",id:"selectDistrict",name:"selectDistrict",onChange:B,"onUpdate:modelValue":t[1]||(t[1]=u=>f.value=u),disabled:""},[(a(!0),i(A,null,E(r.value,(u,l,s)=>(a(),i("option",{value:l},_(u.title),9,L))),256))],544),[[V,f.value]])])):C("",!0),R,n.value.length?(a(),i("table",T,[$,z,O,G,(a(!0),i(A,null,E(n.value.map((u,l)=>({value:u,index:l,id:`inspectionItem_ + ${l}`})),u=>(a(),i("div",{class:"row",key:u.index},[e("div",H,[e("tr",null,[e("td",J,_(u.index+1+"."),1),e("td",P,_(u.value.special?"\u2605":""),1),e("td",null,_(u.value.title),1)])]),e("div",Q,[e("tr",null,[e("td",{class:x("slist_radio "+(u.value.answer?"slist_answer":""))},[v(e("input",{type:"radio",id:u.id+"_1",name:"q_"+u.index,value:"true","onUpdate:modelValue":l=>c.value[u.index]=l,required:""},null,8,W),[[y,c.value[u.index]]]),e("label",{for:u.id+"_1"},"\u662F",8,X)],2),e("td",{class:x("slist_radio "+(u.value.answer?"":"slist_answer"))},[v(e("input",{type:"radio",id:u.id+"_0",name:"q_"+u.index,value:"false","onUpdate:modelValue":l=>c.value[u.index]=l,required:""},null,8,Z),[[y,c.value[u.index]]]),e("label",{for:u.id+"_0"},"\u5426",8,uu)],2)])])]))),128)),e("button",{class:"btn btn-primary",type:"submit",disabled:b.value},[tu,b.value?(a(),i("span",ou)):C("",!0)],8,eu)])):C("",!0)],40,I)]))}});export{du as default};
