(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{133:function(e,t,a){e.exports=a.p+"static/media/logo-iiitu.5d4aee40.gif"},151:function(e,t,a){e.exports=a(210)},184:function(e,t,a){e.exports=a.p+"static/media/memoriesText.2b89c5fa.png"},209:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=a(15),i=a(43),s=a(127),u=a(61),p=a(7),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(p.a)({},null===t||void 0===t?void 0:t.data))),Object(p.a)(Object(p.a)({},e),{},{authData:t.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(p.a)(Object(p.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},d=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"END_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1});case"FETCH_ALL":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case"FETCH_BY_SEARCH":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data});case"FETCH_POST":return Object(p.a)(Object(p.a)({},e),{},{post:t.payload.post});case"LIKE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"CREATE":return Object(p.a)(Object(p.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[t.payload])});case"UPDATE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"DELETE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},auth:m}),g=a(246),f=a(26),b=a(14),v=a(143),h=a(235),E=a(215),x=a(236),O=a(76),y=a.n(O),j=a(12),w=a.n(j),C=a(23),k=a(128),N=a.n(k).a.create({baseURL:"http://localhost:5000"});N.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var S=function(e){return N.get("/posts/".concat(e))},I=function(e){return N.get("/posts?page=".concat(e))},T=function(e){return N.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},A=function(e){return N.patch("/posts/".concat(e,"/likePost"))},D=function(e,t){return N.patch("/posts/".concat(e),t)},L=function(e){return N.delete("/posts/".concat(e))},_=function(e){return N.post("/user/signin",e)},P=function(e){return N.post("/user/signup",e)},B=function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,T(e);case 4:n=t.sent,r=n.data.data,a({type:"FETCH_BY_SEARCH",payload:{data:r}}),a({type:"END_LOADING"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"START_LOADING"}),a.next=4,c=e,N.post("/posts",c);case 4:r=a.sent,o=r.data,n({type:"CREATE",payload:o}),t.push("/posts/".concat(o._id)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}var c}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},R=function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D(e,t);case 3:r=a.sent,o=r.data,n({type:"UPDATE",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},H=a(21),W=a(233),z=Object(W.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(H.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:Object(H.a)({marginLeft:"20px"},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(H.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"}}})),G=function(){var e=Object(l.c)((function(e){return e.posts})),t=e.post,a=e.posts,o=e.isLoading,c=Object(l.b)(),i=Object(b.g)(),s=z(),u=Object(b.i)().id;if(Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,S(e);case 4:n=t.sent,r=n.data,a({type:"FETCH_POST",payload:{post:r}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(u))}),[u]),Object(n.useEffect)((function(){t&&c(B({search:"none",tags:null===t||void 0===t?void 0:t.tags.join(",")}))}),[t]),!t)return null;if(o)return r.a.createElement(v.a,{elevation:6,className:s.loadingPaper},r.a.createElement(h.a,{size:"7em"}));var p=a.filter((function(e){return e._id!==t._id}));return r.a.createElement(v.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},r.a.createElement("div",{className:s.card},r.a.createElement("div",{className:s.section},r.a.createElement(E.a,{variant:"h3",component:"h2"},t.title),r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"#".concat(e," ")}))),r.a.createElement(E.a,{gutterBottom:!0,variant:"body1",component:"p"},t.message),r.a.createElement(E.a,{variant:"h6"},"Created by: ",t.name),r.a.createElement(E.a,{variant:"body1"},y()(t.createdAt).fromNow()),r.a.createElement(x.a,{style:{margin:"20px 0"}})),r.a.createElement("div",{className:s.imageSection},r.a.createElement("img",{className:s.media,src:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:t.title}))),!!p.length&&r.a.createElement("div",{className:s.section},r.a.createElement(E.a,{gutterBottom:!0,variant:"h5"},"You might also like:"),r.a.createElement(x.a,null),r.a.createElement("div",{className:s.recommendedPosts},p.map((function(e){var t=e.title,a=e.name,n=e.message,o=e.likes,c=e.selectedFile,l=e._id;return r.a.createElement("div",{style:{margin:"20px",cursor:"pointer"},onClick:function(){return function(e){return i.push("/posts/".concat(e))}(l)},key:l},r.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},t),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2"},a),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2"},n),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1"},"Likes: ",o.length),r.a.createElement("img",{src:c,width:"200px"}))})))))},U=a(30),J=a(238),M=a(239),q=a(252),Y=a(240),K=a(132),Q=a(133),V=a.n(Q),Z=(a(184),a(237)),X=Object(W.a)((function(e){var t;return{appBar:(t={borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},Object(H.a)(t,e.breakpoints.down("sm"),{flexDirection:"column"}),Object(H.a)(t,"backgroundColor","lightblue"),t),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginRight:"10px",marginTop:"5px"},toolbar:Object(H.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(H.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center",textDecoration:"none",color:"black"},purple:{color:e.palette.getContrastText(Z.a[500]),backgroundColor:Z.a[500]}}})),$=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(U.a)(e,2),a=t[0],o=t[1],c=Object(l.b)(),i=Object(b.h)(),s=Object(b.g)(),u=X(),p=function(){c({type:"LOGOUT"}),s.push("/auth"),o(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(K.a)(e).exp<(new Date).getTime()&&p());o(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(J.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement(f.b,{to:"/",className:u.brandContainer},r.a.createElement("img",{className:u.image,src:V.a,alt:"icon",height:"50px"}),r.a.createElement(E.a,{variant:"h4"},"Campus Memories@iiitu")),r.a.createElement(M.a,{className:u.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(q.a,{className:u.purple,alt:null===a||void 0===a?void 0:a.result.name,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.name.charAt(0)),r.a.createElement(E.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.name),r.a.createElement(Y.a,{variant:"contained",className:u.logout,color:"secondary",onClick:p},"Logout")):r.a.createElement(Y.a,{component:f.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},ee=a(251),te=a(245),ae=a(249),ne=a(82),re=a.n(ne),oe=a(241),ce=a(145),le=a(242),ie=a(243),se=a(244),ue=a(134),pe=a.n(ue),me=a(136),de=a.n(me),ge=a(135),fe=a.n(ge),be=a(96),ve=a.n(be),he=Object(W.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),Ee=function(e){var t,a,n,o,c=e.post,i=e.setCurrentId,s=Object(l.b)(),u=he(),p=JSON.parse(localStorage.getItem("profile")),m=Object(b.g)(),d=function(){var e;return(null===c||void 0===c||null===(e=c.likes)||void 0===e?void 0:e.length)>0?c.likes.find((function(e){var t,a;return e===((null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.googleId)||(null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(oe.a,{className:u.card,raised:!0,elevation:6},r.a.createElement(ce.a,{component:"span",name:"test",className:u.cardAction,onClick:function(e){m.push("/posts/".concat(c._id))}},r.a.createElement(le.a,{className:u.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),r.a.createElement("div",{className:u.overlay},r.a.createElement(E.a,{variant:"h6"},c.name),r.a.createElement(E.a,{variant:"body2"},y()(c.createdAt).fromNow())),((null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement("div",{className:u.overlay2,name:"edit"},r.a.createElement(Y.a,{onClick:function(e){e.stopPropagation(),i(c._id)},style:{color:"white"},size:"small"},r.a.createElement(fe.a,{fontSize:"default"}))),r.a.createElement("div",{className:u.details},r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"h2"},c.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(E.a,{className:u.title,gutterBottom:!0,variant:"h5",component:"h2"},c.title),r.a.createElement(ie.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},c.message.split(" ").splice(0,20).join(" "),"..."))),r.a.createElement(se.a,{className:u.cardActions},r.a.createElement(Y.a,{size:"small",color:"primary",disabled:!(null===p||void 0===p?void 0:p.result),onClick:function(){return s((e=c._id,function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,A(e,null===n||void 0===n||n.token);case 4:r=t.sent,o=r.data,a({type:"LIKE",payload:o}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(d,null)),((null===p||void 0===p||null===(n=p.result)||void 0===n?void 0:n.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===p||void 0===p||null===(o=p.result)||void 0===o?void 0:o._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement(Y.a,{size:"small",color:"secondary",onClick:function(){return s((e=c._id,function(){var t=Object(C.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(de.a,{fontSize:"small"})," \xa0 Delete")))},xe=Object(W.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(Z.a[500]),backgroundColor:Z.a[500]}},Object(H.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(H.a)(t,"actionDiv",{textAlign:"center"}),t})),Oe=function(e){var t=e.setCurrentId,a=Object(l.c)((function(e){return e.posts})),n=a.posts,o=a.isLoading,c=xe();return n.length||o?o?r.a.createElement(h.a,null):r.a.createElement(te.a,{className:c.container,container:!0,alignItems:"stretch",spacing:3},null===n||void 0===n?void 0:n.map((function(e){return r.a.createElement(te.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},r.a.createElement(Ee,{post:e,setCurrentId:t}))}))):"No posts"},ye=a(137),je=a.n(ye),we=Object(W.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Ce=function(e){var t,a=e.currentId,o=e.setCurrentId,c=Object(n.useState)({title:"",message:"",tags:[],selectedFile:""}),i=Object(U.a)(c,2),s=i[0],m=i[1],d=Object(l.c)((function(e){return a?e.posts.posts.find((function(e){return e._id===a})):null})),g=Object(l.b)(),f=we(),h=JSON.parse(localStorage.getItem("profile")),x=Object(b.g)(),O=function(){o(0),m({title:"",message:"",tags:[],selectedFile:""})};Object(n.useEffect)((function(){(null===d||void 0===d?void 0:d.title)||O(),d&&m(d)}),[d]);var y=function(){var e=Object(C.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(g(F(Object(p.a)(Object(p.a)({},s),{},{name:null===h||void 0===h||null===(n=h.result)||void 0===n?void 0:n.name}),x)),O()):(g(R(a,Object(p.a)(Object(p.a)({},s),{},{name:null===h||void 0===h||null===(r=h.result)||void 0===r?void 0:r.name}))),O());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!(null===h||void 0===h||null===(t=h.result)||void 0===t?void 0:t.name))return r.a.createElement(v.a,{className:f.paper,elevation:6},r.a.createElement(E.a,{variant:"h6",align:"center"},"Please Sign In to create your own campus memories and like other's campus memories."));return r.a.createElement(v.a,{className:f.paper,elevation:6},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(f.root," ").concat(f.form),onSubmit:y},r.a.createElement(E.a,{variant:"h6"},a?'Editing "'.concat(null===d||void 0===d?void 0:d.title,'"'):"Creating a Memory"),r.a.createElement(ae.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return m(Object(p.a)(Object(p.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(ae.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return m(Object(p.a)(Object(p.a)({},s),{},{message:e.target.value}))}}),r.a.createElement("div",{style:{padding:"5px 0",width:"94%"}},r.a.createElement(re.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onAdd:function(e){return t=e,void m(Object(p.a)(Object(p.a)({},s),{},{tags:[].concat(Object(u.a)(s.tags),[t])}));var t},onDelete:function(e){return t=e,void m(Object(p.a)(Object(p.a)({},s),{},{tags:s.tags.filter((function(e){return e!==t}))}));var t}})),r.a.createElement("div",{className:f.fileInput},r.a.createElement(je.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return m(Object(p.a)(Object(p.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(Y.a,{className:f.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(Y.a,{variant:"contained",color:"secondary",size:"small",onClick:O,fullWidth:!0},"Clear")))},ke=a(253),Ne=a(250),Se=Object(W.a)((function(){return{ul:{justifyContent:"space-around"}}})),Ie=function(e){var t=e.page,a=Object(l.c)((function(e){return e.posts})).numberOfPages,o=Object(l.b)(),c=Se();return Object(n.useEffect)((function(){t&&o(function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r,o,c,l;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,I(e);case 4:n=t.sent,r=n.data,o=r.data,c=r.currentPage,l=r.numberOfPages,a({type:"FETCH_ALL",payload:{data:o,currentPage:c,numberOfPages:l}}),a({type:"END_LOADING"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[o,t]),r.a.createElement(ke.a,{classes:{ul:c.ul},count:a,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return r.a.createElement(Ne.a,Object.assign({},e,{component:f.b,to:"/posts?page=".concat(e.page)}))}})},Te=Object(W.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(H.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var Ae=function(){var e=Te(),t=new URLSearchParams(Object(b.h)().search),a=t.get("page")||1,o=t.get("searchQuery"),c=Object(n.useState)(0),i=Object(U.a)(c,2),s=i[0],p=i[1],m=Object(l.b)(),d=Object(n.useState)(""),f=Object(U.a)(d,2),h=f[0],E=f[1],x=Object(n.useState)([]),O=Object(U.a)(x,2),y=O[0],j=O[1],w=Object(b.g)(),C=function(){h.trim()||y?(m(B({search:h,tags:y.join(",")})),w.push("/posts/search?searchQuery=".concat(h||"none","&tags=").concat(y.join(",")))):w.push("/")};return r.a.createElement(ee.a,{in:!0},r.a.createElement(g.a,{maxWidth:"xl"},r.a.createElement(te.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer},r.a.createElement(te.a,{item:!0,xs:12,sm:6,md:9},r.a.createElement(Oe,{setCurrentId:p})),r.a.createElement(te.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(J.a,{className:e.appBarSearch,position:"static",color:"inherit"},r.a.createElement(ae.a,{onKeyDown:function(e){13===e.keyCode&&C()},name:"search",variant:"outlined",label:"Search Memories",fullWidth:!0,value:h,onChange:function(e){return E(e.target.value)}}),r.a.createElement(re.a,{style:{margin:"10px 0"},value:y,onAdd:function(e){return t=e,j([].concat(Object(u.a)(y),[t]));var t},onDelete:function(e){return t=e,j(y.filter((function(e){return e!==t})));var t},label:"Search Tags",variant:"outlined"}),r.a.createElement(Y.a,{onClick:C,className:e.searchButton,variant:"contained",color:"primary"},"Search")),r.a.createElement(Ce,{currentId:s,setCurrentId:p}),!o&&!y.length&&r.a.createElement(v.a,{className:e.pagination,elevation:6},r.a.createElement(Ie,{page:a}))))))},De=a(138),Le=a(141),_e=a.n(Le),Pe=function(){return r.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}))},Be=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Fe=a(247),Re=a(248),He=a(139),We=a.n(He),ze=a(140),Ge=a.n(ze),Ue=function(e){var t=e.name,a=e.handleChange,n=e.label,o=e.half,c=e.autoFocus,l=e.type,i=e.handleShowPassword;return r.a.createElement(te.a,{item:!0,xs:12,sm:o?6:12},r.a.createElement(ae.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c,type:l,InputProps:"password"===t?{endAdornment:r.a.createElement(Fe.a,{position:"end"},r.a.createElement(Re.a,{onClick:i},"password"===l?r.a.createElement(We.a,null):r.a.createElement(Ge.a,null)))}:null}))},Je={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Me=function(){var e=Object(n.useState)(Je),t=Object(U.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(U.a)(c,2),s=i[0],u=i[1],m=Object(l.b)(),d=Object(b.g)(),f=Be(),h=Object(n.useState)(!1),x=Object(U.a)(h,2),O=x[0],y=x[1],j=function(){var e=Object(C.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{m({type:"AUTH",data:{result:a,token:n}}),d.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return o(Object(p.a)(Object(p.a)({},a),{},Object(H.a)({},e.target.name,e.target.value)))};return r.a.createElement(g.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,{className:f.paper,elevation:6},r.a.createElement(q.a,{className:f.avatar},r.a.createElement(_e.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:f.form,onSubmit:function(e){var t,n;e.preventDefault(),m(s?(t=a,n=d,function(){var e=Object(C.a)(w.a.mark((function e(a){var r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(t);case 3:r=e.sent,o=r.data,a({type:"AUTH",data:o}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_(e);case 3:r=a.sent,o=r.data,n({type:"AUTH",data:o}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,d))}},r.a.createElement(te.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,{name:"firstName",label:"First Name",handleChange:k,autoFocus:!0,half:!0}),r.a.createElement(Ue,{name:"lastName",label:"Last Name",handleChange:k,half:!0})),r.a.createElement(Ue,{name:"email",label:"Email Address",handleChange:k,type:"email"}),r.a.createElement(Ue,{name:"password",label:"Password",handleChange:k,type:O?"text":"password",handleShowPassword:function(){return y(!O)}}),s&&r.a.createElement(Ue,{name:"confirmPassword",label:"Repeat Password",handleChange:k,type:"password"})),r.a.createElement(Y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:f.submit},s?"Sign Up":"Sign In"),r.a.createElement(De.GoogleLogin,{clientId:"564033717568-bu2nr1l9h31bhk9bff4pqbenvvoju3oq.apps.googleusercontent.com",render:function(e){return r.a.createElement(Y.a,{className:f.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:r.a.createElement(Pe,null),variant:"contained"},"Google Sign In")},onSuccess:j,onFailure:function(){return console.log("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),r.a.createElement(te.a,{container:!0,justify:"flex-end"},r.a.createElement(te.a,{item:!0},r.a.createElement(Y.a,{onClick:function(){o(Je),u((function(e){return!e})),y(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},qe=function(){var e=JSON.parse(localStorage.getItem("profile"));return r.a.createElement(f.a,null,r.a.createElement(g.a,{maxWidth:"xl"},r.a.createElement($,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/",exact:!0,component:function(){return r.a.createElement(b.a,{to:"/posts"})}}),r.a.createElement(b.b,{path:"/posts",exact:!0,component:Ae}),r.a.createElement(b.b,{path:"/posts/search",exact:!0,component:Ae}),r.a.createElement(b.b,{path:"/posts/:id",exact:!0,component:G}),r.a.createElement(b.b,{path:"/auth",exact:!0,component:function(){return e?r.a.createElement(b.a,{to:"/posts"}):r.a.createElement(Me,null)}}))))},Ye=(a(209),Object(i.e)(d,{},Object(i.d)(Object(i.a)(s.a))));c.a.render(r.a.createElement(l.a,{store:Ye},r.a.createElement(qe,null)),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.6efc82ef.chunk.js.map