(function(e){function t(t){for(var r,o,s=t[0],l=t[1],i=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&m.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==c[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/forense/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"446f":function(e,t,n){"use strict";n("8f85")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,o){var s=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(s)}var a=n("1da1"),o=(n("d3b7"),n("e9c4"),n("ac1f"),n("5319"),n("96cf"),{name:"App",data:function(){return{token:null,authenticated:!1,apiUrl:"https://sbcb.inf.ufrgs.br/forense/api/v1/"}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(this.authenticated);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getRequestHeader:function(){return{"Content-Type":"application/json",Authorization:"Bearer "+this.token.access_token}},checkToken:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!=this.token){e.next=5;break}if(t=JSON.parse(localStorage.getItem("token")),null!=t){e.next=4;break}return e.abrupt("return",!1);case 4:this.token=t;case 5:return n=this.$root.apiUrl+"login/test-token",e.next=8,fetch(n,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token.access_token}});case 8:if(r=e.sent,!r.ok){e.next=17;break}return e.t0=localStorage,e.t1=JSON,e.next=14,r.json();case 14:e.t2=e.sent,e.t3=e.t1.stringify.call(e.t1,e.t2),e.t0.setItem.call(e.t0,"user",e.t3);case 17:return e.abrupt("return",r.ok);case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getRequest:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.checkToken();case 2:return n=this.apiUrl+t.replace("./",""),e.next=5,fetch(n,{method:"GET",mode:"cors",cache:"no-cache",headers:this.getRequestHeader()});case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),patchRequest:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"",r=this.apiUrl+t.replace("./",""),e.next=4,fetch(r,{method:"PATCH",mode:"cors",cache:"no-cache",headers:this.getRequestHeader(),body:JSON.stringify(n)});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),postData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=this.apiUrl+t.replace("./",""),e.next=3,fetch(r,{method:"POST",mode:"cors",cache:"no-cache",headers:this.getRequestHeader(),body:JSON.stringify(n)});case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){this.token=null,localStorage.removeItem("token"),this.$router.push({name:"Login"})}}}),s=(n("841d"),n("6b0d")),l=n.n(s);const i=l()(o,[["render",c]]);var u=i,d=n("6c02"),m={class:"wrapper"},p={class:"container-fluid"},b={class:"page-wrapper"},h={class:"page-body"},O={key:0,class:"d-flex h-100 justify-content-center align-items-center"};function v(e,t,n,c,a,o){var s=Object(r["resolveComponent"])("navbar"),l=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",m,[Object(r["createElementVNode"])("aside",{class:"navbar navbar-vertical navbar-expand-lg navbar-dark",onClick:t[0]||(t[0]=function(){return e.printCategories&&e.printCategories.apply(e,arguments)})},[Object(r["createElementVNode"])("div",p,[Object(r["createVNode"])(s,{user:e.user},null,8,["user"])])]),Object(r["createElementVNode"])("div",b,[Object(r["createElementVNode"])("div",h,[e.ready?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",O,[Object(r["createVNode"])(l)])):Object(r["createCommentVNode"])("",!0)])])])}n("b0c0");var j={class:"collapse navbar-collapse"},f={key:0,class:"navbar-nav pt-lg-3 d-flex"},g={class:"nav-item"},N={class:"nav-link disabled"},y={class:"title"},V={class:"nav-item"},E=Object(r["createTextVNode"])(" Página Inicial "),k={key:0},w={class:"nav-item"},x=Object(r["createTextVNode"])(" Painel Administrador "),S={class:"nav-item"},B=Object(r["createTextVNode"])(" Fenótipo "),C={class:"nav-item"},R=Object(r["createTextVNode"])(" Ancestralidade "),_={class:"nav-item mt-auto"},T=Object(r["createStaticVNode"])('<span class="nav-link-icon d-md-none d-lg-inline-block text-white"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M7 12h14l-3 -3m0 6l3 -3"></path></svg></span><span class="nav-link-title text-white"><strong>Log out</strong></span>',2),D=[T];function M(e,t,n,c,a,o){var s=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",j,[n.user?(Object(r["openBlock"])(),Object(r["createElementBlock"])("ul",f,[Object(r["createElementVNode"])("li",g,[Object(r["createElementVNode"])("div",N,[Object(r["createElementVNode"])("span",y,[Object(r["createElementVNode"])("h3",null,Object(r["toDisplayString"])(n.user.name),1)])])]),Object(r["createElementVNode"])("li",V,[Object(r["createVNode"])(s,{class:"nav-link",to:{name:"Profile"}},{default:Object(r["withCtx"])((function(){return[E]})),_:1})]),n.user.is_superuser?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",k,[Object(r["createElementVNode"])("li",w,[Object(r["createVNode"])(s,{class:"nav-link",to:{name:"Admin"}},{default:Object(r["withCtx"])((function(){return[x]})),_:1})])])):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("li",S,[Object(r["createVNode"])(s,{class:"nav-link",to:{name:"Phenotype"}},{default:Object(r["withCtx"])((function(){return[B]})),_:1})]),Object(r["createElementVNode"])("li",C,[Object(r["createVNode"])(s,{class:"nav-link",to:{name:"Ancestry"}},{default:Object(r["withCtx"])((function(){return[R]})),_:1})])]),Object(r["createElementVNode"])("li",_,[Object(r["createElementVNode"])("a",{href:"#",class:"nav-link",onClick:t[0]||(t[0]=function(){return o.logout&&o.logout.apply(o,arguments)})},D)])])):Object(r["createCommentVNode"])("",!0)])}var P={name:"Navbar",props:["categories","user"],methods:{logout:function(){this.$root.logout()}}};const q=l()(P,[["render",M]]);var U=q,A={name:"Home",data:function(){return{user:JSON.parse(localStorage.getItem("user")),ready:!0}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$root.checkToken();case 2:t=e.sent,0==t?this.$router.push({name:"Login"}):this.$router.push({name:"Profile"});case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),components:{Navbar:U}};const L=l()(A,[["render",v]]);var H=L,z=n("9b19"),$=n.n(z),J=n("634b"),F=n.n(J),I={id:"container",class:"container h-100"},G={class:"row align-items-center justify-content-around h-100"},Z={class:"col-sm-5"},W={class:"card"},K=Object(r["createElementVNode"])("div",{class:"card-header"},[Object(r["createElementVNode"])("h3",{class:"card-title"},"Login")],-1),Q={class:"card-body"},X={class:"input-icon mb-3"},Y=Object(r["createStaticVNode"])('<span class="input-icon-addon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-at" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="4"></circle><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path></svg></span>',1),ee={class:"input-icon mb-3"},te=Object(r["createStaticVNode"])('<span class="input-icon-addon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="5" y="11" width="14" height="10" rx="2"></rect><circle cx="12" cy="16" r="1"></circle><path d="M8 11v-4a4 4 0 0 1 8 0v4"></path></svg></span>',1),ne={class:"row"},re=Object(r["createElementVNode"])("div",{class:"col"},[Object(r["createElementVNode"])("a",{href:"#"},"Esqueceu sua senha?")],-1),ce={key:0,class:"red"},ae={class:"card-footer text-end"},oe={class:"d-flex"},se=Object(r["createStaticVNode"])('<div class="row my-4 align-items-center justify-content-around"><div class="col-md-5"><a href="https://sbcb.inf.ufrgs.br/" target="_blank"><img id="sbcb-logo" src="'+$.a+'"></a></div><div class="col-md-5 d-flex align-content-center justify-content-center align-items-center"><a href="https://inctforense.wordpress.com/" target="_blank"><img id="inct-logo" class="resize-img" src="'+F.a+'"></a></div></div>',1);function le(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",I,[Object(r["createElementVNode"])("div",G,[Object(r["createElementVNode"])("div",Z,[Object(r["createElementVNode"])("div",W,[K,Object(r["createElementVNode"])("div",Q,[Object(r["createElementVNode"])("div",X,[Y,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",name:"email","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.user.email=t}),class:"form-control",placeholder:"E-mail"},null,512),[[r["vModelText"],e.user.email]])]),Object(r["createElementVNode"])("div",ee,[te,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.user.password=t}),name:"password",class:"form-control",placeholder:"Senha"},null,512),[[r["vModelText"],e.user.password]])]),Object(r["createElementVNode"])("div",ne,[re,e.incorrect?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",ce,"E-mail ou senha inválidos")):Object(r["createCommentVNode"])("",!0)])]),Object(r["createElementVNode"])("div",ae,[Object(r["createElementVNode"])("div",oe,[Object(r["createElementVNode"])("button",{class:"btn btn-primary ms-auto",onClick:t[2]||(t[2]=function(){return o.login&&o.login.apply(o,arguments)})}," Login ")])])]),se])])])}var ie={name:"Login",data:function(){return{user:{email:"",password:""},incorrect:!1,authentication:!1}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$root.checkToken();case 2:t=e.sent,t&&this.$router.push({name:"Home"});case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{login:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.$root.apiUrl+"login/access-token",e.next=3,fetch(n,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",body:JSON.stringify(this.user)});case 3:if(t=e.sent,!t.ok){e.next=14;break}return e.next=7,t.json();case 7:r=e.sent,this.$root.token=r,this.incorrect=!1,localStorage.setItem("token",JSON.stringify(r)),this.$router.push({name:"Home"}),e.next=15;break;case 14:this.incorrect=!0;case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};n("a2f9");const ue=l()(ie,[["render",le]]);var de=ue,me={class:"col-10"},pe={class:"row w-100"},be={class:"col-2"},he=Object(r["createElementVNode"])("label",{class:"form-label"},"Número de resultados:",-1),Oe=Object(r["createElementVNode"])("option",{value:"10"},"10",-1),ve=Object(r["createElementVNode"])("option",{value:"50"},"50",-1),je=Object(r["createElementVNode"])("option",{value:"100"},"100",-1),fe=[Oe,ve,je],ge={class:"col-8"},Ne=Object(r["createElementVNode"])("label",{class:"form-label"},"Pesquisar:",-1),ye={class:"input-icon mb-3"},Ve=Object(r["createStaticVNode"])('<span class="input-icon-addon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg></span>',1),Ee=["placeholder"],ke={class:"col-2"},we=Object(r["createElementVNode"])("label",{class:"form-label"},"Filtrar por:",-1),xe=Object(r["createElementVNode"])("option",{value:"0"},"Nome",-1),Se=Object(r["createElementVNode"])("option",{value:"1"},"Amostra",-1),Be=[xe,Se],Ce={class:"row w-100"},Re={class:"col-12"},_e={class:"card"},Te={class:"table-responsive"},De={class:"table table-vcenter table-striped"},Me=Object(r["createElementVNode"])("thead",null,[Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("th",null,"Avatar"),Object(r["createElementVNode"])("th",null,"Amostra"),Object(r["createElementVNode"])("th",null,"Nome"),Object(r["createElementVNode"])("th",null,"E-mail"),Object(r["createElementVNode"])("th"),Object(r["createElementVNode"])("th")])],-1),Pe={class:"avatar avatar-sm bg-blue-lt"},qe=Object(r["createElementVNode"])("span",null," Visualizar ",-1),Ue=["onClick"],Ae=Object(r["createElementVNode"])("span",null," Editar ",-1),Le=[Ae];function He(e,t,n,c,a,o){var s=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",me,[Object(r["createElementVNode"])("div",pe,[Object(r["createElementVNode"])("div",be,[he,Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{class:"form-select","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.rowsNumber=t})},fe,512),[[r["vModelSelect"],e.rowsNumber]])]),Object(r["createElementVNode"])("div",ge,[Ne,Object(r["createElementVNode"])("div",ye,[Ve,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"pesquisa-usuario",class:"form-control",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.query=t}),placeholder:o.placeholder()},null,8,Ee),[[r["vModelText"],e.query]])])]),Object(r["createElementVNode"])("div",ke,[we,Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.searchType=t})},Be,512),[[r["vModelSelect"],e.searchType]])])]),Object(r["createElementVNode"])("div",Ce,[Object(r["createElementVNode"])("div",Re,[Object(r["createElementVNode"])("div",_e,[Object(r["createElementVNode"])("div",Te,[Object(r["createElementVNode"])("table",De,[Me,Object(r["createElementVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.filteredUsers,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:t.id},[Object(r["createElementVNode"])("td",null,[Object(r["createElementVNode"])("span",Pe,Object(r["toDisplayString"])(o.get_initials(t.name)),1)]),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.sample),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.name),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.email),1),Object(r["createElementVNode"])("td",null,[Object(r["createVNode"])(s,{to:{path:"/users/"+t.id}},{default:Object(r["withCtx"])((function(){return[qe]})),_:2},1032,["to"])]),Object(r["createElementVNode"])("td",null,[Object(r["createElementVNode"])("a",{href:"#","data-toggle":"modal","data-target":"#user-admin-modal",onClick:function(n){return e.editUser(t)}},Le,8,Ue)])])})),128))])])])])])])])}var ze=n("b85c"),$e=(n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("fb6a"),n("4de4"),n("466d"),n("a9e3"),n("1276"),{name:"Admin",data:function(){return{users:[],query:"",skip:0,timeout:null,allUsersFetched:!1,rowsNumber:10,searchType:0}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,document.querySelector("#pesquisa-usuario").addEventListener("keyup",(function(){clearTimeout(t.timeout),this.timeout=setTimeout(Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getUsers();case 2:case"end":return e.stop()}}),e)}))),1e3)})),e.next=4,this.getUsers();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:{filteredUsers:function(){var e=this,t=new RegExp(this.query.toLowerCase());return this.users.filter((function(n){if(0==e.searchType){if(n.name&&!n.is_superuser)return n.name.toLowerCase().match(t)}else if(n.sample&&!n.is_superuser)return n.sample.toLowerCase().match(t)})).slice(0,Number(this.rowsNumber))}},methods:{getUsers:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$root.getRequest("users/?skip=0"+this.queryGet());case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.pushUsers(n),this.increaseCountUsers(),0==n.data.length&&(this.skip=this.users.length,this.allUsersFetched=!0);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),pushUsers:function(e){var t,n=this,r=Object(ze["a"])(e.data);try{var c=function(){var e=t.value,r=n.users.filter((function(t){if(e.name==t.name)return!0})).length;if(r>0)return"continue";n.users.push(e)};for(r.s();!(t=r.n()).done;)c()}catch(a){r.e(a)}finally{r.f()}},placeholder:function(){return 0==this.searchType?"Pesquise o nome do usuário...":"Pesquise o nome da amostra..."},queryGet:function(){return""==this.query?"":"&name="+this.query},get_initials:function(e){var t=e.split(" ");return String(t[0][0]+t[t.length-1][0]).toUpperCase()},filterUsers:function(){var e=this,t=new RegExp(this.query.toLowerCase());return this.users.filter((function(n){if(0==e.searchType){if(n.name&&!n.is_superuser)return n.name.toLowerCase().match(t)}else if(n.sample&&!n.is_superuser)return n.sample.toLowerCase().match(t)})).slice(0,Number(this.rowsNumber))}}});const Je=l()($e,[["render",He]]);var Fe=Je,Ie={class:"col-10"},Ge={class:"row row-deck row-cards"},Ze={class:"card d-flex flex-column card-profile p-0"},We={class:"row row-0 flex-fill mb-2"},Ke={class:"col-md-auto"},Qe={class:"avatar avatar-xl"},Xe={class:"col"},Ye={class:"card-body d-flex"},et={class:"col-12"},tt={class:"row"},nt={class:"card-title"},rt={class:"row"},ct={class:"col-md-auto"},at={class:"row"},ot={key:0,class:"text-azure strong"},st=Object(r["createElementVNode"])("div",{class:"row"},[Object(r["createElementVNode"])("span",{class:"text-azure strong"},"E-mail:")],-1),lt={class:"col"},it={key:0,class:"row"},ut={class:"row"},dt=Object(r["createStaticVNode"])('<div class="row row-0 flex-fill"><ul class="nav nav-tabs" data-bs-toggle="tabs"><li class="nav-item"><a href="#tabs-home" class="nav-link active" data-bs-toggle="tab">Feed</a></li><li class="nav-item"><a href="#tabs-contato" class="nav-link" data-bs-toggle="tab">Dados de Contato</a></li><li class="nav-item"><a href="#tabs-antropometrico" class="nav-link" data-bs-toggle="tab">Dados Antropométricos</a></li></ul></div>',1),mt={class:"card d-flex flex-column card-profile p-0 tab-content"},pt={class:"tab-pane active show card-body",id:"tabs-home"},bt={class:"col-12"},ht={class:"row"},Ot={key:0},vt={key:1},jt=Object(r["createElementVNode"])("div",{class:"row"},[Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("span",null,"Neste painel você encontra informações e atualizações sobre a pesquisa corrente.")])],-1),ft={class:"tab-pane card-body",id:"tabs-contato"},gt={class:"col-8"},Nt=Object(r["createElementVNode"])("div",{class:"row"},[Object(r["createElementVNode"])("div",{class:"col-10"},[Object(r["createElementVNode"])("h2",null,"Dados de Contato")])],-1),yt={class:"row mb-3"},Vt=Object(r["createElementVNode"])("label",{class:"form-label"},"E-mail:",-1),Et=Object(r["createElementVNode"])("div",{class:"row mb-3"},[Object(r["createElementVNode"])("label",{class:"form-label"},"Telefone:"),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("input",{type:"tel",class:"form-control",pattern:"\\([0-9]{2}\\) [0-9]{4,6}-[0-9]{3,4}$",name:"phone",placeholder:"(99)99999-9999"})])],-1),kt={class:"tab-pane card-body",id:"tabs-antropometrico"},wt={class:"col-8"},xt=Object(r["createElementVNode"])("div",{class:"row"},[Object(r["createElementVNode"])("div",{class:"col-10"},[Object(r["createElementVNode"])("h2",null,"Dados Antropométricos")])],-1),St={class:"row mb-3"},Bt=Object(r["createElementVNode"])("label",{class:"form-label"},"Altura:",-1),Ct={class:"row mb-3"},Rt=Object(r["createElementVNode"])("label",{class:"form-label"},"Peso:",-1),_t={class:"row mb-3"},Tt=Object(r["createElementVNode"])("label",{class:"form-label"},"Tamanho do Calçado:",-1);function Dt(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Ie,[Object(r["createElementVNode"])("div",Ge,[Object(r["createElementVNode"])("div",Ze,[Object(r["createElementVNode"])("div",We,[Object(r["createElementVNode"])("div",Ke,[Object(r["createElementVNode"])("span",Qe,Object(r["toDisplayString"])(o.initials),1)]),Object(r["createElementVNode"])("div",Xe,[Object(r["createElementVNode"])("div",Ye,[Object(r["createElementVNode"])("div",et,[Object(r["createElementVNode"])("div",tt,[Object(r["createElementVNode"])("h1",nt,Object(r["toDisplayString"])(e.user.name),1)]),Object(r["createElementVNode"])("div",rt,[Object(r["createElementVNode"])("div",ct,[Object(r["createElementVNode"])("div",at,[e.user.is_superuser?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",ot,"Amostra:"))]),st]),Object(r["createElementVNode"])("div",lt,[e.user.is_superuser?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",it,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.user.sample),1)])),Object(r["createElementVNode"])("div",ut,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.user.email),1)])])])])])])]),dt]),Object(r["createElementVNode"])("div",mt,[Object(r["createElementVNode"])("div",pt,[Object(r["createElementVNode"])("div",bt,[Object(r["createElementVNode"])("div",ht,[Object(r["createElementVNode"])("div",null,["Male"==e.user.sex?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h2",Ot,"Bem-vindo, "+Object(r["toDisplayString"])(e.user.name),1)):Object(r["createCommentVNode"])("",!0),"Female"==e.user.sex?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h2",vt,"Bem-vinda, "+Object(r["toDisplayString"])(e.user.name),1)):Object(r["createCommentVNode"])("",!0)])]),jt])]),Object(r["createElementVNode"])("div",ft,[Object(r["createElementVNode"])("div",gt,[Nt,Object(r["createElementVNode"])("div",yt,[Vt,Object(r["createElementVNode"])("div",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control",name:"email","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.user.email=t})},null,512),[[r["vModelText"],e.user.email]])])]),Et])]),Object(r["createElementVNode"])("div",kt,[Object(r["createElementVNode"])("div",wt,[xt,Object(r["createElementVNode"])("div",St,[Bt,Object(r["createElementVNode"])("div",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"number",class:"form-control",name:"height","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.user.height=t})},null,512),[[r["vModelText"],e.user.height]])])]),Object(r["createElementVNode"])("div",Ct,[Rt,Object(r["createElementVNode"])("div",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"number",class:"form-control",name:"weight","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.user.weight=t})},null,512),[[r["vModelText"],e.user.weight]])])]),Object(r["createElementVNode"])("div",_t,[Tt,Object(r["createElementVNode"])("div",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"number",class:"form-control",name:"shoe-size","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.user.shoe_size=t})},null,512),[[r["vModelText"],e.user.shoe_size]])])])])])])])])}var Mt={name:"Profile",data:function(){return{user:JSON.parse(localStorage.getItem("user"))}},computed:{initials:function(){var e=this.user.name.split(" ");return String(e[0][0]+e[e.length-1][0]).toUpperCase()}}};n("b8bc");const Pt=l()(Mt,[["render",Dt]]);var qt=Pt,Ut={class:"col-10"},At={class:"card"},Lt=Object(r["createElementVNode"])("div",{class:"card-header"},[Object(r["createElementVNode"])("h1",null,"Ancestralidade Gencove")],-1),Ht={class:"card-body"};function zt(e,t,n,c,a,o){var s=Object(r["resolveComponent"])("ancestry-panel");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Ut,[Object(r["createElementVNode"])("div",At,[Lt,Object(r["createElementVNode"])("div",Ht,[Object(r["createVNode"])(s,{fetchurl:"ancestry/prediction/1"})])])])}var $t={key:0,class:"col-12"},Jt={class:"row w-100"},Ft=Object(r["createElementVNode"])("div",{class:"col-9"},[Object(r["createElementVNode"])("div",{id:"gencove"})],-1),It={class:"col-3"},Gt={class:"card h-100"},Zt={class:"card-body card-body-scrollable card-body-scrollable-shadow"},Wt={class:"divide-y"},Kt={class:"col-9"},Qt={style:{color:"#444"},class:"mx-1 strong name-region"},Xt={class:"col text-end text-nowrap"},Yt={class:"strong text-azure",style:{"font-size":"0.9em"}};function en(e,t,n,c,a,o){return n.fetchurl?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",$t,[Object(r["createElementVNode"])("div",Jt,[Ft,Object(r["createElementVNode"])("div",It,[Object(r["createElementVNode"])("div",Gt,[Object(r["createElementVNode"])("div",Zt,[Object(r["createElementVNode"])("div",Wt,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.ancestry_data,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"ancestry-list row",key:e.id,onMouseout:t[0]||(t[0]=function(){return o.clearRegion&&o.clearRegion.apply(o,arguments)}),onMouseover:t[1]||(t[1]=function(){return o.selectRegion&&o.selectRegion.apply(o,arguments)})},[Object(r["createElementVNode"])("div",Kt,[Object(r["createElementVNode"])("a",{href:"#",class:"badge",style:Object(r["normalizeStyle"])({backgroundColor:e.color})},null,4),Object(r["createElementVNode"])("span",Qt,Object(r["toDisplayString"])(e.name),1)]),Object(r["createElementVNode"])("div",Xt,[Object(r["createElementVNode"])("span",Yt,Object(r["toDisplayString"])(o.percent(e.prediction)),1)])],32)})),128))])])])])])])):Object(r["createCommentVNode"])("",!0)}n("4e82"),n("d81d"),n("159b"),n("a15b");var tn=n("898b"),nn=n("e11e"),rn=n.n(nn),cn=n("595b"),an=(n("6cc5"),n("ab33"),n("1d1b"),{name:"AncestryPanel",props:{fetchurl:{type:String,required:!0}},data:function(){return{ancestry_data:[],map:null,svg:null,fillOpacity:.4,fillOpacityHover:.1,strokeOpacity:.6,strokeOpacityHover:.3}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$props.fetchurl,this.createMap(),e.next=4,this.$root.getRequest(t);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,r.length&&(this.ancestry_data=r.sort((function(e,t){return t.prediction-e.prediction}))),this.fillMap();case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{createMap:function(){var e=rn.a.map("gencove",{minZoom:2,maxBounds:[[84.67351256610522,-174.0234375],[-58.995311187950925,223.2421875]]}).setView([14,2],3);rn.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',maxZoom:6,noWrap:!0}).addTo(e),this.svg=rn.a.svg({clickable:!0}).addTo(e);var t=tn["a"](e.getPanes().overlayPane);t.select("svg").attr("pointer-events","auto"),this.map=e},fillMap:function(){var e=this;this.ancestry_data.slice().reverse().forEach((function(t){var n=cn["polygonSmooth"](cn["polygon"](t.region),{iterations:8}),c=rn.a.geoJson(n,{color:t.color,fillOpacity:e.fillOpacity,strokeOpacity:e.strokeOpacity}).addTo(Object(r["toRaw"])(e.map));c.bindTooltip(t.name+" - "+e.percent(t.prediction))}));var t=this;tn["b"]("path.leaflet-interactive").data(this.ancestry_data.slice().reverse()).join("path.leaflet-interactive").on("mouseover",(function(){tn["b"]("path").style("fill-opacity",t.fillOpacityHover).style("stroke-opacity",t.strokeOpacityHover),tn["a"](this).style("fill-opacity",t.fillOpacity),tn["a"](this).style("stroke-opacity",t.strokeOpacity)})).on("mouseout",(function(){tn["b"]("path").style("fill-opacity",t.fillOpacity).style("stroke-opacity",t.strokeOpacity)}))},selectRegion:function(e){var t,n=this;t=e.target.querySelector(".name-region")?e.target.querySelector(".name-region").innerHTML:e.target.innerHTML,tn["b"]("path.leaflet-interactive").style("stroke-opacity",(function(e){if(e.name!=t)return n.strokeOpacityHover})).style("fill-opacity",(function(e){if(e.name!=t)return n.fillOpacityHover}))},clearRegion:function(){var e=this;tn["b"]("path.leaflet-interactive").style("fill-opacity",e.fillOpacity).style("stroke-opacity",e.strokeOpacity)},percent:function(e){return Math.ceil(100*e)+"%"}}});n("446f");const on=l()(an,[["render",en]]);var sn=on,ln={name:"Ancestry",components:{AncestryPanel:sn}};const un=l()(ln,[["render",zt]]);var dn=un,mn={class:"col-10"};function pn(e,t,n,c,a,o){var s=Object(r["resolveComponent"])("phenotype-panel");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",mn,[Object(r["createVNode"])(s,{user:o.user,url:e.url},null,8,["user","url"])])}n("a4d3"),n("e01a");var bn={key:0,class:"card"},hn={class:"card-header align-bottom"},On={class:"card-subtitle"},vn={class:"card-body"},jn={class:"row row-deck row-cards"},fn={class:"col-md-6"},gn={class:"card"},Nn={class:"card-body d-flex align-items-center justify-content-center"},yn={class:"col-md-6"},Vn={class:"card"},En={class:"card-body"},kn={key:0,class:"card-footer"},wn={class:"card-title"},xn={class:"card-title"};function Sn(e,t,n,c,a,o){var s=Object(r["resolveComponent"])("donut"),l=Object(r["resolveComponent"])("tabela");return n.url?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",bn,[Object(r["createElementVNode"])("div",hn,[Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("h1",null,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("span",On,Object(r["toDisplayString"])(e.description),1)])]),Object(r["createElementVNode"])("div",vn,[Object(r["createElementVNode"])("div",jn,[Object(r["createElementVNode"])("div",fn,[Object(r["createElementVNode"])("div",gn,[Object(r["createElementVNode"])("div",Nn,[Object(r["createVNode"])(s,{prediction:e.prediction},null,8,["prediction"])])])]),Object(r["createElementVNode"])("div",yn,[Object(r["createElementVNode"])("div",Vn,[Object(r["createElementVNode"])("div",En,[Object(r["createVNode"])(l,{snps:e.snps},null,8,["snps"])])])])])]),n.user?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",kn,[Object(r["createElementVNode"])("span",wn,"Amostra: "+Object(r["toDisplayString"])(n.user.sample),1),Object(r["createElementVNode"])("span",xn,"Classe Real: "+Object(r["toDisplayString"])(e.classe_real),1)])):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0)}var Bn={key:0};function Cn(e,t,n,c,a,o){var s=Object(r["resolveComponent"])("apexchart");return n.prediction?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Bn,[Object(r["createVNode"])(s,{width:"380",type:"donut",options:e.options,series:e.series},null,8,["options","series"])])):Object(r["createCommentVNode"])("",!0)}n("b64b"),n("07ac");var Rn={name:"Donut",props:["prediction"],data:function(){return{series:[44,55,41,17,15],options:{colors:["#206bc4","#79a6dc","#d2e1f3","#e9ecf1","#3889A6","#83D5F2"],labels:[]}}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$props.prediction,this.labels=this.getLabels(t),this.series=this.getSeries(t);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getLabels:function(e){return Object.keys(e)},getSeries:function(e){return Object.values(e)}}};const _n=l()(Rn,[["render",Cn]]);var Tn=_n,Dn={class:"col-md"},Mn={class:"table-responsive"},Pn={class:"table table-vcenter"},qn=Object(r["createElementVNode"])("thead",null,[Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("th",null,"SNP"),Object(r["createElementVNode"])("th",null,"Gene"),Object(r["createElementVNode"])("th",null,"Alelo Observado")])],-1),Un=["href"],An=["href"];function Ln(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Dn,[Object(r["createElementVNode"])("div",Mn,[Object(r["createElementVNode"])("table",Pn,[qn,Object(r["createElementVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.snps,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:e.snp},[Object(r["createElementVNode"])("td",null,[Object(r["createElementVNode"])("a",{href:e.url_snp,target:"_blank"},Object(r["toDisplayString"])(e.snp),9,Un)]),Object(r["createElementVNode"])("td",null,[Object(r["createElementVNode"])("a",{href:e.url_gene,target:"_blank"},Object(r["toDisplayString"])(e.gene),9,An)]),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(e.genotype),1)])})),128))])])])])}var Hn={name:"Tabela",props:["snps"]};const zn=l()(Hn,[["render",Ln]]);var $n=zn,Jn={name:"PhenotypePanel",props:["url","user"],data:function(){return{classe_real:null,snps:[],prediction:[],title:"",description:""}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$props.url,e.next=3,this.$root.getRequest(t);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,this.title=r.title,this.prediction=r.prediction,this.classe_real=r.classe_real,this.snps=r.snps.map((function(e){return e["url_gene"]="https://www.genecards.org/cgi-bin/carddisp.pl?gene="+e.gene,e["url_snp"]="https://www.ncbi.nlm.nih.gov/snp/"+e.snp,e}));case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),components:{Donut:Tn,Tabela:$n}};const Fn=l()(Jn,[["render",Sn]]);var In=Fn,Gn={name:"Phenotype",data:function(){return{url:"views/1/complete"}},components:{PhenotypePanel:In},computed:{user:function(){return localStorage.getItem("user")}}};const Zn=l()(Gn,[["render",pn]]);var Wn=Zn,Kn=[{path:"/",name:"Home",component:H,children:[{path:"/admin",name:"Admin",meta:{is_superuser:!0},component:Fe,children:[{path:"usuarios/:id",name:"ListCategories",meta:{is_superuser:!0}},{path:"usuarios/:id/:categories",name:"Category",meta:{is_superuser:!0}}]},{path:"/perfil",name:"Profile",component:qt},{path:"/fenotipo",name:"Phenotype",component:Wn},{path:"/fenotipo/ancestralidade",name:"Ancestry",component:dn},{path:"/fenotipo/:category",name:"OwnCategory"}]},{path:"/login",name:"Login",component:de}],Qn=Object(d["a"])({history:Object(d["b"])("/forense/"),routes:Kn});Qn.beforeEach((function(e,t,n){var r=JSON.parse(localStorage.getItem("user"));e.matched.some((function(e){return e.meta.is_superuser}))?r.is_superuser?n():n({name:"profile"}):n()}));var Xn=Qn,Yn=(n("45e6"),n("ae27")),er=n.n(Yn);Object(r["createApp"])(u).use(Xn).use(er.a).mount("#app")},"634b":function(e,t,n){e.exports=n.p+"img/INCT1.ec17cf71.png"},"7ffb":function(e,t,n){},"841d":function(e,t,n){"use strict";n("b5b8")},"8f85":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.0497ab39.svg"},"9bc0":function(e,t,n){},a2f9:function(e,t,n){"use strict";n("9bc0")},b5b8:function(e,t,n){},b8bc:function(e,t,n){"use strict";n("7ffb")}});
//# sourceMappingURL=app.a0206274.js.map