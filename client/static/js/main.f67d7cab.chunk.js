(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t){},54:function(e,t,n){e.exports=n(85)},59:function(e,t,n){},61:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),o=n.n(c),s=(n(59),n(1)),i=n.n(s),l=n(3),u=n(10),m=n(2),p=n(4),f=(n(61),n(12)),d=function(e,t){localStorage.setItem(e,t)},b=function(){var e={};for(var t in localStorage){var n=localStorage[t];["key","getItem","setItem","removeItem","clear","length"].includes(t)||(e[t]=n)}return e},v=function(){for(var e in localStorage)["key","getItem","setItem","removeItem","clear","length"].includes(e)||localStorage.removeItem(e)};function j(e){var t=e.loginObj,n=e.lsObj,c=t.loggedIn,o=t.setLoggedIn,s=n.username,u=Object(a.useState)(""),d=Object(m.a)(u,2),b=d[0],j=d[1],g=Object(a.useState)(!1),O=Object(m.a)(g,2),h=O[0],E=O[1],y=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("logging out"),v(),o((function(){return!1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Nav"},r.a.createElement("form",{className:"search",onSubmit:function(e){return e.preventDefault(),r.a.createElement(f.a,{to:"search".concat(b)})}},r.a.createElement("input",{type:"text",className:"searchbar",value:b,placeholder:"find projects/users",onChange:function(e){var t=e.target.value;j(t)}})),r.a.createElement(p.b,{to:c?"/feed":"/"},r.a.createElement("div",{className:"logo noselect"},r.a.createElement("div",{className:"left noselect"},"Diff"),r.a.createElement("div",{className:"right noselect"},"use"))),c?r.a.createElement("div",{className:"projects-profiles-links"},r.a.createElement(p.b,{to:{pathname:"/project/active/",state:{projectNavObj:{}}},className:"projects noselect"},"Create Project"),r.a.createElement("div",{className:"login-profile noselect",onMouseEnter:function(e){return E(!0)},onMouseLeave:function(e){return E(!1)}},r.a.createElement(p.b,{to:"/".concat(s,"/")},s),r.a.createElement("div",{className:"pplDropDown-container"},h&&r.a.createElement("div",{className:"pplDropDown-card"},r.a.createElement("div",{className:"logout",onClick:y},"Logout"))))):r.a.createElement("div",{className:"projects-profiles-links"},r.a.createElement(p.b,{to:"/projects/",className:"projects noselect"},"Recent Projects"),r.a.createElement(p.b,{to:"/login/",className:"login-profile noselect"},"Login / Register")))}function g(){return r.a.createElement("div",{className:"About"},"This is a little intro about the page")}var O=function(e){var t=document.cookie;if(e?t&&""!==t?t.includes(e)||alert("Key is not in cookie"):console.log("Cookie is empty"):alert("Please enter a valid key"),t&&""!==t){var n;if(t.split(";").forEach((function(t){var a=t.trim().split("="),r=a[0],c=a[1];e===r&&(n=c.trim())})),n)return n;alert("no return value!")}},h=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O("csrftoken"),e.next=3,fetch(t,{credentials:"include",method:"POST",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":a},body:n});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=O("csrftoken"),n.Authorization="Token ".concat(a),e.next=4,fetch(t,{credentials:"include",method:"PUT",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":r,Authorization:"Token ".concat(a)},body:JSON.stringify(n)});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={Accept:"application/json","Content-Type":"application/json"},n&&n.diffuse_jwt&&(a=O("csrftoken"),r["X-CSRFToken"]=a),e.next=4,fetch(t,{credentials:"include",method:"GET",mode:"same-origin",headers:r,body:n});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=O("csrftoken"),n.Authorization="Token ".concat(a),e.next=4,fetch(t,{credentials:"include",method:"DELETE",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":r,Authorization:"Token ".concat(a)},body:JSON.stringify(n)});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,n);case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,n,a);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,n);case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t,n,a);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();function I(e){var t=e.projectObj,n=t.user,a=t.name,c=t.project_slug,o=n.username;n.id;return r.a.createElement("div",{className:"ProjectListElem",key:"PLE".concat(c)},r.a.createElement("div",{className:"author"},r.a.createElement(p.b,{to:"/".concat(o,"/")},o)),r.a.createElement("div",{className:"name"},r.a.createElement(p.b,{to:"/".concat(o,"/").concat(c,"/")},a)))}function C(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/project/",e.next=3,k("/api/project/");case 3:t=e.sent,n=t.map((function(e,t){return r.a.createElement(I,{projectObj:e,key:"ple-".concat(t)})})),c(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),r.a.createElement("div",{className:"ProjectList fade-in"},n)}n(67);function D(e){var t=e.projectNavObj,n=t.collaborators,c=Object(a.useState)(n||[]),o=Object(m.a)(c,2),s=o[0];o[1];return r.a.createElement("div",{className:"ProjectCollaboratorCard",key:"pcc--".concat(t.user.username-t.project_slug)},r.a.createElement("div",{className:"title"},"Add"),r.a.createElement("div",{className:"collaborator-container"},s.map((function(e,t){return r.a.createElement("div",{className:"collaborator",key:"collab-name-".concat(t)},r.a.createElement(p.b,{to:"/".concat(e.username,"/")},e.username))}))))}var _=function(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",n=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(n,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e){e.loggedIn;var t=e.projectNavProps,n=e.saveProps;e.currentUsername;console.log(t);var c=t.projectObj,o=t.projectSlug,s=c.user,u=b().username,f=(b().user_id,c.collaborators),d=n.save,v=n.setSave,j=Object(a.useState)(!1),g=Object(m.a)(j,2),O=g[0],h=g[1],E=Object(a.useState)(!1),y=Object(m.a)(E,2),w=y[0],x=y[1],k=Object(a.useState)(!1),I=Object(m.a)(k,2),C=I[0],T=I[1],L=Object(a.useState)(c.name?c.name:"New Project"),R=Object(m.a)(L,2),M=R[0],F=R[1],U=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n="/api/project/",(a=A({},c)).project_slug=_(c.name),a.resource_id=_("".concat(c.user.username,"-").concat(c.name)),delete a.user,"/project/active/"!==document.location.pathname){e.next=11;break}return e.next=9,N(n,JSON.stringify(a));case 9:e.next=15;break;case 11:return n="/api/project/".concat(a.resource_id,"/"),delete a.resource_id,e.next=15,S(n,a,b().diffuse_jwt);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e){e.preventDefault(),T((function(){return!1}))};return r.a.createElement("div",{className:"ProjectNav"},r.a.createElement("div",{className:"title-container",onClick:function(e){T((function(){return!0}))}},C?r.a.createElement("form",{onSubmit:function(e){X(e)}},r.a.createElement("input",{type:"text",className:"title-edit",value:M,onChange:function(e){!function(e){var t=e.currentTarget.value;console.log(t),F((function(){return t}))}(e)},onBlur:function(e){X(e)},autoFocus:!0}),r.a.createElement("input",{type:"submit",className:"title-edit-submit",value:""})):r.a.createElement("div",{className:"title"},M)),r.a.createElement("div",{className:"sub-nav"},r.a.createElement("div",{className:"creator"},r.a.createElement(p.b,{to:"/".concat(s.username,"/")},s.username)),r.a.createElement("div",{className:"collaborate-history-container noselect"},r.a.createElement("div",{className:"collab-link noselect",onClick:function(){h(!O)}},f?"".concat(f.length," Collaborator").concat(f.length>1?"s":""):"Add Collaborators"),O&&r.a.createElement("div",{className:"collab-card fade-in noselect"},r.a.createElement(D,{projectNavObj:c})),r.a.createElement("div",{className:"history-link noselect"},r.a.createElement(p.b,{to:{pathname:"/".concat(s.username,"/").concat(o,"/history/"),state:{projectObj:c}}},"History"))),s.username===u&&r.a.createElement("div",{className:"save-edit-delete-container noselect",onClick:function(){x(!w),v((function(){return!d}))}},"|||",w?r.a.createElement("div",{className:"s-e-d-dropdown fade-in"},r.a.createElement("div",{className:"save",onClick:function(e){U(e)}},"Save"),r.a.createElement("div",{className:"delete",onClick:function(e){P(e)}},"Delete")):r.a.createElement("div",null))))}function R(e){var t=e.name;return r.a.createElement("div",{className:"InstrumentHead",style:{display:"flex",flexFlow:"row",justifyContent:"center",alignItems:"center"}},t)}var M=n(20),F=n(9),U={xScale:null,yScale:null,radiusScale:null,colorXScale:null,colorYScale:null};function X(e){var t=e.contentObj,n=e.midi,c=e.idProps,o=e.save,s=t.contentArr,i=(t.projectName,t.updateProjectObjContent),l=n.pianoRoll.notes,u=c.idStr,p=c.instrumentArrIdx,f=l.map((function(e){var t=e.x,n=e.y,a=e.stepStart,r=e.midinote,c=e.weight,o=e.duration;return c=c||1,o=o||1,{x:t=t||a,y:n=n||r,weight:1}})),d=Object(a.useState)(1500),b=Object(m.a)(d,1)[0],v=Object(a.useState)(1100),j=Object(m.a)(v,1)[0],g=Object(a.useState)(25),O=Object(m.a)(g,1)[0],h=Object(a.useState)(Math.floor(b/O)),E=Object(m.a)(h,1)[0],y=Object(a.useState)(Math.floor(j/O)),w=Object(m.a)(y,1)[0],N=Object(a.useState)(Object(M.a)(f)),x=Object(m.a)(N,2),S=x[0],k=x[1],P=Object(a.useState)(),I=Object(m.a)(P,2),C=I[0],D=I[1],_=function(){C.selectAll("circle").remove(),C.selectAll("circle").data(S).enter().append("circle").attr("cx",(function(e){return U.xScale(e.x)})).attr("cy",(function(e){return U.yScale(e.y)})).attr("r",(function(){return(O-10)/2})).attr("fill","orange").attr("stroke",(function(e){return"rgba(".concat((U.colorXScale(e.x)+U.colorYScale(e.y))/2,", 0, 0, ").concat(.5*e.weight,")")})).attr("stroke-width",(function(e){return 10})),D((function(){return C}))},T=function(){var e,t=F.e("#".concat(u)).append("svg").attr("class","canvas").attr("width",j).attr("height",b);U.xScale=F.d().domain([1,w]).range([8,j-7]),U.yScale=F.d().domain([1,E]).range([b,1]),U.colorXScale=F.d().domain([0,F.c(S,(function(e){return e.x}))]).range([100,101]),U.colorYScale=F.d().domain([0,F.c(S,(function(e){return e.y}))]).range([100,101]),(e=t).append("g").attr("transform","translate(0,".concat(b,")")).call(F.a(U.xScale).ticks(w)),e.append("g").attr("transform","translate(0, 0)").call(F.b(U.yScale).ticks(w)),D((function(){return t}))};return Object(a.useEffect)((function(){k((function(){return Object(M.a)(f)})),C&&(F.e(".canvas").remove(),D((function(){})))}),[document.location.pathname]),Object(a.useEffect)((function(){C?_():T()}),[C,S]),Object(a.useEffect)((function(){console.log("also saving here"),s[p].midi.pianoRoll.notes=S,C&&i(s)}),[o]),r.a.createElement("div",{className:"InstrumentCanvas",onClick:function(e){!function(e){var t=e.currentTarget.scrollTop,n=e.currentTarget.getBoundingClientRect().top,a=e.currentTarget.getBoundingClientRect().left,r=e.pageX-a,c=t+e.pageY-n,o={x:w-Math.floor((j-r)/O),y:1+Math.floor((b-c)/O),weight:1},s=S.filter((function(e){return!(o.x===e.x&&o.y===e.y&&o.weight===e.weight)}));s.length===S.length&&s.push(o),k((function(){return Object(M.a)(s)}))}(e)}},r.a.createElement("div",{className:"canvas-container",id:u}))}function z(e){var t=e.contentObj,n=e.instrumentObj,a=e.idProps,c=e.save,o=n.name,s=n.midi;return r.a.createElement("div",{className:"InstrumentContainer"},r.a.createElement(R,{name:o}),r.a.createElement(X,{contentObj:t,midi:s,idProps:a,save:c}))}function B(e){var t=e.contentObj,n=e.save,a=t.contentArr;return r.a.createElement("div",{className:"InstrumentList"},function(e){var a=[];return e&&(a=e.map((function(e,a){var c={idStr:"".concat(e.name).concat(a),instrumentArrIdx:a};return r.a.createElement(z,{contentObj:t,instrumentObj:e,idProps:c,save:n,key:"iccc-".concat(a)})}))),a}(a))}function J(e){var t=e.loggedIn,n=e.projectMainProps,a=e.save,c=n.projectMainObj.content,o=n.projectMainObj.name,s=n.updateProjectObjContent;return r.a.createElement("div",{className:"ProjectMain"},r.a.createElement(B,{loggedIn:t,contentObj:{contentArr:c,projectName:o,updateProjectObjContent:s},save:a}))}var V=function(e,t){return{content:[{midi:{bpm:128,pianoRoll:{automation:[],notes:[]},timeSig:"4/4"},name:"Piano"}],name:"New Project",user:{username:e,id:t},collaborators:[]}};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e){var t=e.loggedIn,n=e.props,c=n.match.params,o=(n.location.state,c.project_slug),s=c.username,u=b().username,p=b().user_id,f=Object(a.useState)(!1),d=Object(m.a)(f,2),v=d[0],j=d[1],g=Object(a.useState)(),O=Object(m.a)(g,2),h=O[0],E=O[1],y=Object(a.useState)(),w=Object(m.a)(y,2),N=(w[0],w[1]),x=Object(a.useState)(),S=Object(m.a)(x,2),P=S[0],I=S[1],C="".concat(s,"-").concat(o),D=function(e){e||((e=h).user={username:u,userId:p});var t={user:e.user,name:e.name,project_slug:e.project_slug,collaborators:e.collaborators},n={name:e.name,content:e.content};N((function(){return H({},t)})),I((function(){return H({},n)}))};return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/api/project/".concat(C,"/"),e.prev=1,e.next=4,k(t);case 4:(n=e.sent)&&D(n),E((function(){return H({},n)})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0,"\n",e.t0.message),alert("Error in ProjectView: requesting",t,e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();if("/project/active/"===document.location.pathname){var t=V(u,p);E((function(){return H({},t)})),D(t)}else e()}),[document.location.pathname]),r.a.createElement("div",{className:"ProjectView"},h&&r.a.createElement(L,{loggedIn:t,projectNavProps:{projectObj:h,projectSlug:o},saveProps:{save:v,setSave:j},currentUsername:u}),h&&r.a.createElement(J,{loggedIn:t,projectMainProps:{projectMainObj:P,updateProjectObjContent:function(e){E((function(){return H({},h,{content:e})}))}},save:v,currentUsername:u}))}var $=n(44),q=n.n($);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e){e.loggedIn;var t=e.props,n=Object(a.useState)({}),c=Object(m.a)(n,2),o=c[0],s=c[1],u=t.match.params.username;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/api/user/".concat(u,"/"),e.next=3,k(t);case 3:n=e.sent,s((function(){return K({},n)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement("div",{className:"UserView"},r.a.createElement("div",{className:"right-side"},r.a.createElement("div",{className:"profile-picture"},r.a.createElement("img",{src:o.profile_picture,alt:"Profile Pictire"})),r.a.createElement("div",{className:"name"},r.a.createElement("div",{className:"first-name"},o.first_name),r.a.createElement("div",{className:"last-name"},o.last_name)),r.a.createElement("div",{className:"username"},o.username),r.a.createElement("div",{className:"contact-info"})),o.project&&function(){var e=o.project.map((function(e,t){console.log(e);var n=e.name,a=e.user,c=e.project_slug,o=(e.resource_id,e.created_dt),s=(e.updated_dt,e.collaborators);return r.a.createElement("div",{className:"project-info",key:"uvpa-".concat(t)},r.a.createElement(p.b,{to:"/".concat(a.username,"/").concat(c,"/")},r.a.createElement("div",{className:"project-name"},n)),r.a.createElement("div",{className:"collaborator-ct"},"".concat(s.length," collaborator").concat(s.length>1?"s":"")),r.a.createElement("div",{className:"dt-created"},o))}));return r.a.createElement("div",{className:"project-list"},e)}())}function Z(e){var t=e.loginObj;console.log("USERCREAETEFORM");var n=t.loggedIn,c=Object(a.useState)(""),o=Object(m.a)(c,2),s=o[0],u=(o[1],function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),n=t.target,a={},r=0;r<n.length;r++)c=n[r],o=c.name,a[o]=c.value,console.log(o,a[o]);return"/api/user/",e.next=7,x("/api/user/",a);case 7:s=e.sent,console.log(s),console.log(s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Object(a.useEffect)((function(){return console.log("returning redirect in the useeffect!","loggenin = ".concat(n)),r.a.createElement(f.a,{to:"/".concat(s,"/")})}),[n,s]);var p=function(e,t,n){return"phone"===t?r.a.createElement("input",{onChange:function(e){console.log(e.target.value)},type:e,name:t,className:t,placeholder:n}):r.a.createElement("input",{type:e,name:t,className:t,placeholder:n})};return r.a.createElement("div",{className:"UserCreateForm"},r.a.createElement("div",{className:"title"},"Register"),r.a.createElement("form",{onSubmit:function(e){return u(e)},className:"user-form"},r.a.createElement("div",{className:"part-1"},p("email","email","Email"),p("text","username","Userame"),p("password","password","Password")),r.a.createElement("div",{className:"part-2"},p("text","firstname","First Name"),p("text","lastname","Last Name"),p("phone","phone","Phone"),p("date","dob","Birthdate")),r.a.createElement("div",{className:"part-3"},p("url","profilepicture","Profile Picture")),p("submit","submit","Submit")))}function ee(e){var t=e.loginObj,n=t.loggedIn,c=t.setLoggedIn,o=Object(a.useState)(),s=Object(m.a)(o,2),u=s[0],b=s[1],v=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,o,s,l,u,m,p,f,v,j,g,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),r=t.target,o=0;o<r.length;o++)(s=r[o]).name&&"username"===s.name?n=s.value:s.name&&"password"===s.name&&(a=s.value);if(n&&b((function(){return n})),!n||!a){e.next=28;break}return"/api/auth/login/",e.prev=6,l=JSON.stringify({username:n,password:a}),e.next=10,N("/api/auth/login/",l);case 10:return u=e.sent,e.next=13,u.json();case 13:m=e.sent,p=u.status,f=m.token,v=m.user.pk,[403].includes(p)?alert("something went wrong, 403 status"):(d("diffuse_jwt",f),d("username",n),d("user_id",v),c((function(){return!0})),console.log("logged in!")),e.next=26;break;case 20:for(g in e.prev=20,e.t0=e.catch(6),j=e.t0.status,console.log("\n\nerror (below)\n\n",j,e.t0),e.t0)console.log(g,e.t0[g]);console.log("error (above)\n\n");case 26:e.next=30;break;case 28:n||a?n?a||(O="password field"):O="username field":O="username and password fields",alert("Please enter ".concat(O,"."));case 30:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}();return n&&u?r.a.createElement(f.a,{to:"/".concat(u,"/")}):r.a.createElement("div",{className:"UserLogin"},r.a.createElement("form",{onSubmit:function(e){return v(e)},className:"login"},r.a.createElement("input",{name:"username",type:"text",className:"username",placeholder:"Username",autoFocus:!0}),r.a.createElement("input",{name:"password",type:"password",className:"password",placeholder:"Password"}),r.a.createElement("input",{name:"submit",type:"submit",className:"submit",value:"Submit"})),r.a.createElement(p.b,{to:"/user/new/",className:"create-user"},"New here? Click here to signup"))}function te(e){var t=e.commitObj,n=e.projectId,a=t.name,c=t.author,o=t.commitId;return console.log("commitcard projectObj"),console.log(t.name),console.log(t.author),console.log(t.midi),console.log("commitcard projectObj"),r.a.createElement(p.b,{to:{pathname:"/".concat(void 0,"/").concat(n,"/history/").concat(o),state:{commitObj:t}}},r.a.createElement("div",{className:"CommitCard"},r.a.createElement("div",{className:"name"},a),r.a.createElement("div",{className:"author"},c)))}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e){var t=e.props.match,n=t.params,a=t.location.state.projectObj.history,c=n.id;return r.a.createElement("div",{className:"HistoryView"},a.length>0&&a.map((function(e,t){return r.a.createElement(te,{commitObj:ae({},e,{commitId:t}),projectId:c,key:"har-".concat(t)})})))}function ce(e){var t=e.props.location.state.commitObj,n=t.name,a=t.author,c=t.midi;return console.log("commitcard projectObj"),console.log(t.name),console.log(t.author),console.log(t.commitId),console.log(t.midi),console.log("commitcard projectObj"),r.a.createElement(p.b,null,r.a.createElement("div",{className:"CommitView"},r.a.createElement("div",{className:"name"},n),r.a.createElement("div",{className:"author"},a),r.a.createElement("div",{className:"midi"},c)))}function oe(e){var t=e.loginObj,n=e.lsObj,a=t.loggedIn,c=t.setLoggedIn,o=n.username;return r.a.createElement("div",{className:"Main"},r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/project/active/",render:function(e){return r.a.createElement(W,{loggedIn:a,props:e})}}),r.a.createElement(f.b,{exact:!0,path:"/login/",render:function(){return r.a.createElement(ee,{loginObj:{loggedIn:a,setLoggedIn:c},username:o})}}),r.a.createElement(f.b,{exact:!0,path:"/new/",render:function(){return r.a.createElement(Z,{loginObj:{loggedIn:a,setLoggedIn:c}})}}),r.a.createElement(f.b,{exact:!0,path:"/users/",render:function(e){return r.a.createElement(q.a,{loggedIn:a,props:e})}}),r.a.createElement(f.b,{exact:!0,path:"/projects/recent/",render:function(){return r.a.createElement(C,{loggedIn:a})}}),r.a.createElement(f.b,{exact:!0,path:"/feed/",render:function(){return r.a.createElement(C,{loggedIn:a})}}),r.a.createElement(f.b,{exact:!0,path:"/:username/:project_slug/history/:commitId/",render:function(e){return r.a.createElement(ce,{props:e})}}),r.a.createElement(f.b,{exact:!0,path:"/:username/:project_slug/history/",render:function(e){return r.a.createElement(re,{props:e})}}),r.a.createElement(f.b,{exact:!0,path:"/:username/:project_slug/",render:function(e){return r.a.createElement(W,{props:e})}}),r.a.createElement(f.b,{exact:!0,path:"/:username/",render:function(e){return r.a.createElement(Q,{loggedIn:a,props:e,username:o})}}),r.a.createElement(f.b,{exact:!0,path:"/",component:g})))}function se(){var e=document.location.pathname,t=[];return e&&"/project/active/"===e&&t.push(r.a.createElement("div",{className:"add-instrument",onClick:function(){r.a.createElement("div",{className:"instrument-dropdown"},[])},key:"psbr"},"Add Instrument")),r.a.createElement("div",{className:"ProjectSidebar fade-in"},t)}function ie(e){var t=e.loggedIn;return r.a.createElement("div",{className:"SidebarLeft"},t&&r.a.createElement(se,null))}function le(e){e.loggedIn;return r.a.createElement("div",{className:"SidebarRight"})}function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=b(),t=Object(a.useState)(!1),n=Object(m.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(e),f=Object(m.a)(s,2),d=f[0],v=f[1],g=function(){var e=b();v((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)}))};return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d.diffuse_jwt)){e.next=12;break}return e.prev=2,e.next=5,k("/api/user/johnnyadams/");case 5:e.sent&&t&&o((function(){return!0})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(a.useEffect)((function(){g()}),[c]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,{loginObj:{loggedIn:c,setLoggedIn:o},lsObj:d,checkLsObj:g}),r.a.createElement(ie,{loggedIn:c}),r.a.createElement(oe,{loginObj:{loggedIn:c,setLoggedIn:o},lsObj:d}),r.a.createElement(le,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.f67d7cab.chunk.js.map