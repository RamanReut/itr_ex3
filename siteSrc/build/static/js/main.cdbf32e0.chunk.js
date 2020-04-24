(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{132:function(e,t,a){e.exports=a(285)},137:function(e,t,a){},281:function(e,t){},284:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(137),a(121)),i=a(120),l=a(28),u=a(24),m=a(12),f=a(322),h=a(319),g=a(324),b=a(316),d=Object(b.a)((function(e){return{lightTextField:{"& input":{color:e.palette.secondary.contrastText}}}}));function v(e){var t=e.value,a=e.onChange,n=d();return r.a.createElement(g.a,{variant:"filled",className:n.lightTextField,color:"secondary",onChange:a,value:t,size:"medium"})}var E=a(320),j=Object(b.a)((function(e){return{lightButton:{color:e.palette.primary.contrastText}}}));function p(e){var t=e.onChange,a=e.onButtonClick,n=e.value,c=e.buttonText,s=e.mainXS,o=void 0===s?3:s,i=j();return r.a.createElement(h.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:0},r.a.createElement(h.a,{item:!0,xs:o},r.a.createElement(v,{value:n,onChange:t})),r.a.createElement(h.a,{item:!0,xs:1},r.a.createElement(E.a,{className:i.lightButton,onClick:a,fullWidth:!0},c)))}var O=a(321),k=a(111),w=a.n(k),x=Object(b.a)((function(e){return{label:Object(u.a)({},e.typography.h4,{color:e.palette.primary.contrastText}),icon:{color:e.palette.primary.contrastText}}}));function C(e){var t=e.value,a=e.onButtonClick,n=e.mainXS,c=void 0===n?3:n,s=x();return r.a.createElement(h.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:0},r.a.createElement(h.a,{container:!0,item:!0,xs:c,justify:"flex-start",alignItems:"center"},r.a.createElement("div",{className:s.label},t)),r.a.createElement(h.a,{item:!0,xs:1},r.a.createElement(O.a,{className:s.icon,onClick:a},r.a.createElement(w.a,null))))}var y=a(323);function M(e){switch(e.type){default:console.error("Wrong widget type "+e.type);break;case"label":return r.a.createElement(C,e);case"edit":return r.a.createElement(p,e)}}function D(e){var t=e.username,a=e.onChange,n=e.onButtonClick,c=e.type;return r.a.createElement(f.a,{position:"static"},r.a.createElement(y.a,null,r.a.createElement(M,{onChange:a,value:t,buttonText:"apply",type:c,onButtonClick:n,mainXS:3})))}var N=a(325),I=a(18),_=a.n(I),S=Object(b.a)({box:{borderRadius:"5px"}});function U(e){var t=e.children,a=e.className,n=S();return r.a.createElement(N.a,{className:_()(a,n.box)},t)}var B=Object(b.a)({message:{paddingBottom:"0.2em"},userMessage:{backgroundColor:"#e8e8e8"},otherMessage:{backgroundColor:"#b5ceff"}});function T(e){var t=e.children,a=e.type,n=B();return r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0},r.a.createElement(U,{className:_()(n[a+"Message"],n.message)},r.a.createElement(y.a,null,t))))}var W=a(119),q=a(327);function H(e){var t=e.anchorEl,a=e.onClose,n=e.onDelete,c=e.onEdit;return r.a.createElement(W.a,{anchorEl:t,open:Boolean(t),onClose:a},r.a.createElement(q.a,{onClick:function(){c(),a()}},"Edit"),r.a.createElement(q.a,{onClick:function(){n(),a()}},"Delete"))}var P=a(112),R=a.n(P),A=a(66),L=a.n(A),X=a(67);function F(e){var t=e.children;return r.a.createElement(X.Emojione,{text:t})}function J(e){var t=e.text;return r.a.createElement(L.a,{source:t,renderers:{text:F}})}new R.a.Converter;var z=Object(b.a)((function(e){return{label:{color:e.palette.primary.main,marginBottom:"0.4em"},message:{"& p":{marginTop:"0.1em",marginBottom:"0.1em",textAlign:"left"}}}}));var G=a(113),Y=a.n(G);var $,K=($=function(e){var t=e.type,a=e.message,c=e.username,s=e.onMessageEdit,o=e.onMessageDelete,i=z(),l=Object(n.useState)(null),u=Object(m.a)(l,2),f=u[0],g=u[1],b=Object(n.useCallback)((function(e){"user"===t&&g(e.currentTarget),e.preventDefault()}),[t]),d=Object(n.useCallback)((function(){g(null)}),[]);return r.a.createElement(N.a,{onContextMenu:b},r.a.createElement(T,{type:t},r.a.createElement(h.a,{container:!0,direction:"column",alignItems:"flex-start"},r.a.createElement(h.a,{item:!0},r.a.createElement("div",{className:i.label},c)),r.a.createElement(h.a,{item:!0,className:i.message},r.a.createElement(J,{text:a})))),r.a.createElement(H,{anchorEl:f,onDelete:o,onEdit:s,onClose:d}))},function(e){var t={user:"flex-end",other:"flex-start"}[e.type];return r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(h.a,{container:!0,direction:"row",justify:t},r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(h.a,{container:!0,direction:"row",justify:t},r.a.createElement(h.a,{item:!0},r.a.createElement($,e))))))});function Q(e){var t=e.usernames,a=e.userID,n=e.messages,c=e.onMessageEdit,s=e.onMessageDelete,o=e.scrollParentRef,i=e.hasMore,l=e.requestLoadMore;return r.a.createElement(Y.a,{loadMore:l,hasMore:i,isReverse:!0,useWindow:!1,getScrollParent:function(){return o}},r.a.createElement(h.a,{container:!0,spacing:1,direction:"column",wrap:"nowrap"},Object.keys(n).sort((function(e,t){return e-t})).map((function(e){var o=n[e].authorUserID,i=a==o?"user":"other";return r.a.createElement(K,{key:e,type:i,message:n[e].text,username:t[o],onMessageEdit:function(){return c(e)},onMessageDelete:function(){return s(e)}})}))))}var V=a(115),Z=a.n(V),ee=a(114),te=a.n(ee),ae=(a(251),Object(b.a)({textArea:{height:"100px"},preview:{height:"100px"}}));function ne(e){var t=e.message,a=e.onClick,c=e.onChange,s=ae(),o=Object(n.useState)("write"),i=Object(m.a)(o,2),l=i[0],u=i[1];return r.a.createElement(h.a,{container:!0,alignItems:"center"},r.a.createElement(h.a,{item:!0,xs:11},r.a.createElement(te.a,{value:t,onChange:c,classes:s,selectedTab:l,onTabChange:u,generateMarkdownPreview:function(e){return Promise.resolve(r.a.createElement(J,{text:e}))},minPreviewHeight:100,maxEditorHeight:200,minEditorHeight:100,textAreaProps:{autoFocus:!0}})),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(O.a,{color:"primary",onClick:a},r.a.createElement(Z.a,null))))}var re=a(116),ce=a(117),se=a(118),oe=a.n(se),ie=function(){function e(){Object(re.a)(this,e),this.socket={},this.__handleNewMessage=function(){},this.__handleNewUser=function(){},this.__handleDeleteMessage=function(){},this.socket=oe.a.connect("/"),this.socket.on("message",this.handleNewMessage.bind(this)),this.socket.on("user",this.handleNewUser.bind(this)),this.socket.on("delete message",this.handleDeleteMessage.bind(this))}return Object(ce.a)(e,[{key:"subscribeNewMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e,t){};this.__handleNewMessage=e}},{key:"subscribeNewUsers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e,t){};this.__handleNewUser=e}},{key:"subscribeDeleteMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){};this.__handleDeleteMessage=e}},{key:"handleNewMessage",value:function(e){var t=e.messageID,a=e.authorID,n=e.text,r=e.authorUsername;this.__handleNewMessage(t,a,n,r)}},{key:"handleNewUser",value:function(e){var t=e.id,a=e.username;this.__handleNewUser(t,a)}},{key:"handleDeleteMessage",value:function(e){var t=e.id;this.__handleDeleteMessage(t)}},{key:"requestUserID",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};fetch("/api/newUserID").then((function(t){t.ok&&t.json().then((function(t){e(t.id)}))}))}},{key:"requestInitData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e,t){};fetch("/api/initData").then((function(t){t.ok&&t.json().then((function(t){e(t.messages,t.usernames)}))}))}},{key:"requestMessages",value:function(e,t,a){fetch("/api/messages?offset=".concat(e,"&count=").concat(t)).then((function(e){e.ok&&e.json().then((function(e){var t=e.messages,n=e.usernames,r=e.hasMore;a(t,n,r)}))}))}},{key:"sendMessage",value:function(e,t,a){this.socket.emit("message",{userID:e,messageID:t,message:a})}},{key:"deleteMessage",value:function(e,t){this.socket.emit("delete message",{messageID:e,userID:t})}},{key:"changeUsername",value:function(e,t){this.socket.emit("username",{id:e,username:t})}}]),e}(),le=a(68),ue=a.n(le),me=(a(284),Object(b.a)((function(e){return{root:{height:"100vh",overflow:"hidden"},messageListWrapper:{flexGrow:1,overflowY:"auto",overflowX:"hidden",marginTop:e.spacing(),marginBottom:e.spacing()},fullHeight:{height:"100%"},gridWrapper:{boxShadow:e.shadows[4]}}})));var fe=function(){var e=me(),t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],s=a[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),b=g[0],d=g[1],v=Object(n.useState)(!1),E=Object(m.a)(v,2),j=E[0],p=E[1],O=Object(n.useState)([]),k=Object(m.a)(O,2),w=k[0],x=k[1],C=Object(n.useState)({}),M=Object(m.a)(C,2),I=M[0],S=M[1],U=Object(n.useState)("label"),B=Object(m.a)(U,2),T=B[0],W=B[1],q=Object(n.useState)("new"),H=Object(m.a)(q,2),P=H[0],R=H[1],A=Object(n.useState)(0),L=Object(m.a)(A,2),X=L[0],F=L[1],J=Object(n.useRef)(),z=Object(n.useRef)(),G=Object(n.useCallback)((function(e){F(e),ue.a.set("userID",e,{expires:90})}),[]),Y=Object(n.useCallback)((function(){I[X]=c,W("label"),z.current.changeUsername(X,c)}),[I,X,c]),$=Object(n.useCallback)((function(){W("edit")}),[W]),K=Object(n.useCallback)((function(e){return"edit"===T?Y(e):$(e)}),[Y,$,T]),V=Object(n.useCallback)((function(e){d(w[e].text),R(e)}),[w]),Z=Object(n.useCallback)((function(e){z.current.deleteMessage(e,X)}),[X]),ee=Object(n.useCallback)((function(e,t){S(Object(u.a)({},I,Object(l.a)({},e,t)))}),[I]),te=Object(n.useCallback)((function(){z.current.sendMessage(X,P,b),d(""),R("new")}),[X,P,b]),ae=Object(n.useCallback)((function(e){w[e];var t=Object(o.a)(w,[e].map(i.a));x(t)}),[w]),re=Object(n.useCallback)((function(e,t,a,n){x(Object(u.a)({},w,Object(l.a)({},e,{authorUserID:t,text:a}))),S(Object(u.a)({},I,Object(l.a)({},t,n)))}),[w,I]),ce=Object(n.useCallback)((function(e,t,a){x(Object(u.a)({},w,{},e)),S(Object(u.a)({},I,{},t)),p(a)}),[w,I]),se=Object(n.useCallback)((function(){p(!1),z.current.requestMessages(Object.keys(w).length||0,5,ce)}),[ce]);return Object(n.useEffect)((function(){z.current=new ie}),[]),Object(n.useEffect)((function(){var e=ue.a.get("userID");e?(F(e),s(I[e])):(z.current.requestUserID(G),s("Anonimus"))}),[G,I]),Object(n.useEffect)((function(){s(I[X])}),[I,X]),Object(n.useEffect)((function(){se()}),[]),Object(n.useEffect)((function(){z.current.subscribeNewUsers(ee),z.current.subscribeNewMessage(re),z.current.subscribeDeleteMessage(ae)}),[ee,re,ae]),r.a.createElement("div",{className:_()("App",e.root)},r.a.createElement(y.a,{className:_()(e.fullHeight),maxWidth:"md"},r.a.createElement(N.a,{className:_()(e.fullHeight,e.gridWrapper)},r.a.createElement(h.a,{container:!0,direction:"column",className:e.fullHeight,wrap:"nowrap",spacing:0},r.a.createElement(h.a,{item:!0},r.a.createElement(D,{username:c,type:T,onChange:function(e){return s(e.target.value)},onButtonClick:K})),r.a.createElement(h.a,{item:!0,className:e.messageListWrapper,xs:12,container:!0,direction:"column-reverse",innerRef:function(e){return J.current=e}},r.a.createElement(y.a,null,r.a.createElement(Q,Object(l.a)({hasMore:!1,messages:w,usernames:I,userID:X,onMessageDelete:Z,onMessageEdit:V,scrollParentRef:J.current,requestLoadMore:se},"hasMore",j)))),r.a.createElement(h.a,{item:!0},r.a.createElement(y.a,null,r.a.createElement(ne,{message:b,onChange:d,onClick:te})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[132,1,2]]]);
//# sourceMappingURL=main.cdbf32e0.chunk.js.map