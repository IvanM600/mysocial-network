(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(134),a=(n(57),r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d59d0a96-dc14-4681-953e-c6b49c967a3e"}})),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUsers2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("follow?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(45),a=n(3),c=(n(57),"ADD-MESSAGE"),s="DELETE_MESSAGE",o={messagesData:[{id:1,mes:"hi"},{id:2,mes:"How are you?"},{id:3,mes:"Yo"}],dialogsData:[{id:1,name:"Ivan"},{id:2,name:"Sasha"},{id:3,name:"Lena"},{id:4,name:"Vika"},{id:5,name:"Nikita"},{id:6,name:"Ira"}]},i=function(e){return{type:c,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:4,mes:n}])});case s:return Object(a.a)(Object(a.a)({},e),{},{messagesData:e.messagesData.filter((function(e){return e!=t.userId}))});default:return e}}},169:function(e,t,n){},170:function(e,t,n){},20:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk",friends:"Navbar_friends__3-QW_",friendsitems:"Navbar_friendsitems__3vZIC",fre:"Navbar_fre__3wD6y",name:"Navbar_name__3nKwt"}},26:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S",form:"FormsControls_form__kEhdO",form_button:"FormsControls_form_button__1Ywr9",form_input:"FormsControls_form_input__3bn3b"}},291:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(66),o=n.n(s),i=(n(169),n(35)),u=n(36),l=n(38),d=n(37),f=(n(170),n(20)),p=n.n(f),j=n(22),b=function(e){return Object(r.jsxs)("nav",{className:p.a.nav,children:[Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(j.b,{to:"/profile",activeClassName:p.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(r.jsx)(j.b,{to:"/dialogs",activeClassName:p.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(r.jsx)(j.b,{to:"/users",activeClassName:p.a.active,children:"Users"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)("a",{children:"News"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)("a",{children:"Music"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)("a",{children:"Settings"})})]})},h=n(11),O=n(15),m=n(8),g=n.n(m),v=n(14),x=n(45),_=n(3),w=n(12),P=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(_.a)(Object(_.a)(Object(_.a)({},e),n),r):e}))},C="FOLLOW",S="UNFOLLOW",y="SET_USERS",E="SET_CURRENT_PAGE",N="SET_TOTAL_USERS_COUNT",I="TOGGLE_IS_FETCHING",U="TOGGLE_IS_FOLLOWING_PROGRESS",k={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},T=function(e){return{type:C,userId:e}},A=function(e){return{type:S,userId:e}},L=function(e){return{type:E,currentPage:e}},F=function(e){return{type:I,isFetching:e}},z=function(e,t){return{type:U,isFetching:e,userId:t}},D=function(){var e=Object(v.a)(g.a.mark((function e(t,n,r,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(z(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(z(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(_.a)(Object(_.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!0})});case S:return Object(_.a)(Object(_.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!1})});case y:return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case E:return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case N:return Object(_.a)(Object(_.a)({},e),{},{totalUsersCount:t.count});case I:return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case U:return Object(_.a)(Object(_.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},R=n(95),G=n.n(R),H=n(98),q=n(70),W=n(99),B=n(72),V=n.n(B),X=n(135),K=n.n(X),Y=function(e){for(var t=e.totalUsersCount,n=e.pageSize,c=e.currentPage,s=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/i),p=Object(a.useState)(1),j=Object(W.a)(p,2),b=j[0],h=j[1],O=(b-1)*i+1,m=b*i;return Object(r.jsxs)("div",{className:V.a.paginator,children:[b>1&&Object(r.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(r.jsx)("span",{className:K()(Object(q.a)({},V.a.selectedPage,c===e),V.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),f>b&&Object(r.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},Q=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);return Object(r.jsxs)("div",{className:G.a.usersItems,children:[Object(r.jsx)(Y,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(j.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:H.a,className:G.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.city}),Object(r.jsx)("div",{children:t.country})]})]})]},t.id)}))]})},J=n(68),Z=n(136),$=Object(Z.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ee=function(e){return e.usersPage.pageSize},te=function(e){return e.usersPage.totalUsersCount},ne=function(e){return e.usersPage.currentPage},re=function(e){return e.usersPage.isFetching},ae=function(e){return e.usersPage.followingInProgress},ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(J.a,{}):null,Object(r.jsx)(Q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),se=Object(O.b)((function(e){return{users:$(e),pageSize:ee(e),totalUsersCount:te(e),currentPage:ne(e),isFetching:re(e),followingInProgress:ae(e)}}),{follow:function(e){return function(){var t=Object(v.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,w.d.follow.bind(w.d),T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,w.d.unfollow.bind(w.d),A);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleIsFetching:F,toggleFollowingProgress:z,requestUsers:function(e,t){return function(){var n=Object(v.a)(g.a.mark((function n(r){var a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(F(!0)),r(L(e)),n.next=4,w.d.getUsers(e,t);case 4:a=n.sent,r(F(!1)),r((s=a.items,{type:y,users:s})),r((c=a.totalCount,{type:N,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}})(ce),oe=n(56),ie=n.n(oe),ue=function(e){return Object(r.jsxs)("header",{className:ie.a.header,children:[Object(r.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QBRekTRh5l9jt90WeC_6L5LjKlT4IDf3Ew&usqp=CAU"}),Object(r.jsx)("div",{className:ie.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[" ",e.login," ",Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:ie.a.buttonLogout,onClick:e.logout,children:"Logout"})})]}):Object(r.jsx)(j.b,{className:ie.a.buttonLogin,to:"/login",children:"Login"})})]})},le=n(31),de="auth/SET_USER_DATA",fe="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",pe={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},je=function(e,t,n,r){return{type:de,payload:{userId:e,email:t,login:n,isAuth:r}}},be=function(e){return{type:fe,payload:{captchaUrl:e}}},he=function(){return function(){var e=Object(v.a)(g.a.mark((function e(t){var n,r,a,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(je(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){return function(){var e=Object(v.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(be(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:case fe:return Object(_.a)(Object(_.a)({},e),t.payload);default:return e}},ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(ue,Object(_.a)({},this.props))}}]),n}(c.a.Component),ve=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(je(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ge),xe=n(130),_e=n(131),we=n(41),Pe=n(48),Ce=n(26),Se=n.n(Ce),ye=Object(we.a)(25),Ee=Object(_e.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{className:Se.a.form,onSubmit:e.handleSubmit,children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)("div",{children:Object(r.jsx)(xe.a,{className:Se.a.form_input,placeholder:"Email",name:"email",component:Pe.a,validate:[we.b,ye]})}),Object(r.jsx)("div",{children:Object(r.jsx)(xe.a,{className:Se.a.form_input,placeholder:"Password",name:"password",component:Pe.a,validate:[we.b,ye],type:"password"})}),Object(r.jsxs)("div",{className:Se.a.form_checkbox,children:[Object(r.jsx)(xe.a,{component:Pe.a,validate:[we.b,ye],name:"rememberMe",type:"checkbox"}),"remember me"]}),e.captchaUrl&&Object(r.jsx)("img",{src:e.captchaUrl}),e.captchaUrl&&Object(r.jsx)(xe.a,{placeholder:"Symbols from image",name:"captcha",validate:[we.b,ye],component:Pe.a}),e.error&&Object(r.jsx)("div",{className:Se.a.formSummaryError,children:e.error}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:Se.a.form_button,children:"Sign in"})})]})})),Ne=Object(O.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(v.a)(g.a.mark((function a(c){var s,o;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(he()):(10===s.data.resultCode&&c(Oe()),o=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(le.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(h.a,{to:"profile"}):Object(r.jsx)("div",{children:Object(r.jsx)(Ee,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})})})),Ie=n(10),Ue="INITIALIZED_SUCCESS",ke={initialized:!1},Te=function(){return{type:Ue}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},Le=n(57),Fe=n(129),ze=n(138),De=n(132),Me=Object(Ie.c)({profilesPage:Le.b,dialogPage:Fe.b,usersPage:M,auth:me,form:De.a,app:Ae}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ie.d,Ge=Object(Ie.e)(Me,Re(Object(Ie.a)(ze.a)));window._store_=Ge;var He=Ge,qe=function(e){return function(t){return Object(r.jsx)(c.a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(e,Object(_.a)({},t))})}},We=c.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Be=c.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),Ve=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandleErrors=function(e){alert("Some error occured"),console.error(e)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"componentWillUnmount",value:function(){window.addEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(ve,{}),Object(r.jsx)(b,{}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.a,{exact:!0,from:"/",to:"/Profile"}),Object(r.jsx)(h.b,{path:"/dialogs",render:qe(We)}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:qe(Be)}),Object(r.jsx)(h.b,{path:"/users",render:function(){return Object(r.jsx)(se,{})}}),Object(r.jsx)(h.b,{path:"/login",render:function(){return Object(r.jsx)(Ne,{})}}),Object(r.jsx)(h.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 not found"})}})]})})]}):Object(r.jsx)(J.a,{})}}]),n}(a.Component),Xe=Object(Ie.d)(h.g,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(he()).then((function(){e(Te)})),e(Te())}}}))(Ve),Ke=function(e){return Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(j.a,{children:Object(r.jsx)(O.a,{store:He,children:Object(r.jsx)(Xe,{})})})})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Ke,{})}),document.getElementById("root"))},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(1),c=n(74),s=(n(0),n(26)),o=n.n(s),i=function(e){e.input;var t=e.meta,n=(e.child,e.element,Object(c.a)(e,["input","meta","child","element"])),r=t.touched&&t.error;return Object(a.jsxs)("div",{className:o.a.formControl+" "+(r?o.a.error:""),children:[Object(a.jsx)("div",{children:n.children}),r&&Object(a.jsx)("span",{children:t.error})]})},u=function(e){var t=e.input,n=(e.meta,e.child,e.element,Object(c.a)(e,["input","meta","child","element"]));return Object(a.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.child,e.element,Object(c.a)(e,["input","meta","child","element"]));return Object(a.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},56:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5",buttonLogout:"Header_buttonLogout__Ysfz9",buttonLogin:"Header_buttonLogin__XoqjP"}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return _}));var r=n(8),a=n.n(r),c=n(14),s=n(45),o=n(3),i=n(31),u=n(12),l="ADD-POST",d="SET_USER_PROFILE",f="SET_STATUS",p="DELETE_POST",j="SAVE_PHOTO_SUCCESS",b={posts:[{id:0,message:"Hi, how are you?",likesCount:"40"},{id:1,message:"Its my first post",likesCount:"35"}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:f,status:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(O(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:j,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(m(c)),t.next=10;break;case 8:return n(Object(i.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=t.newPostText;return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:5,message:n,likesCount:0}])});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case p:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e!=t.postId}))});case j:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},68:function(e,t,n){"use strict";var r=n(1),a=(n(0),n.p+"static/media/preloader.e1dbdd54.svg");t.a=function(e){return Object(r.jsx)("img",{src:a})}},72:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3aoIo",paginator:"Paginator_paginator__1uFzw",pageNumber:"Paginator_pageNumber__2AXNx"}},95:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1_En6",selectedPage:"users_selectedPage__1mnwI",usersItems:"users_usersItems__3oxvb"}},98:function(e,t,n){"use strict";t.a=n.p+"static/media/user.a2446033.png"}},[[291,1,2]]]);
//# sourceMappingURL=main.aeed542e.chunk.js.map