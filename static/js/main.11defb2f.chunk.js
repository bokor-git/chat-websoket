(this["webpackJsonpchat-websoket"]=this["webpackJsonpchat-websoket"]||[]).push([[0],{1:function(e,t,n){e.exports={app:"chat_app__2kSe6",chat:"chat_chat__2Y7Jk",taping:"chat_taping__2i4lW",message_block:"chat_message_block__3N7S5",name:"chat_name__2rRhU",message:"chat_message__r3lLH",input_text:"chat_input_text__3xNzL",send_text:"chat_send_text__3NRSZ",send_name:"chat_send_name__hdFTs",use_name:"chat_use_name__ODTjQ"}},43:function(e,t,n){e.exports=n(80)},48:function(e,t,n){},49:function(e,t,n){},77:function(e,t){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(12),r=n.n(c),o=(n(48),n(7)),i=(n(49),n(1)),u=n.n(i),l=n(5),m=n(25),d=n(14),g=n(41),h=n.n(g),f={socket:null,createConnection:function(){this.socket=h()("https://chat-websoket-back.herokuapp.com/")},subscribe:function(e,t,n){var a,s,c;null===(a=this.socket)||void 0===a||a.on("innit-massaged-published",e),null===(s=this.socket)||void 0===s||s.on("new-message-sent",t),null===(c=this.socket)||void 0===c||c.on("user-typing",n)},destroyConnection:function(){var e;null===(e=this.socket)||void 0===e||e.disconnect(),this.socket=null},sendName:function(e){var t;null===(t=this.socket)||void 0===t||t.emit("client-name-sent",e)},sendNewMassage:function(e){var t;null===(t=this.socket)||void 0===t||t.emit("client-message-sent",e)},typeMessage:function(){var e;null===(e=this.socket)||void 0===e||e.emit("client-typed")}},p={messages:[],typingUsers:[]};var _=function(){var e=Object(l.c)((function(e){return e.chat.messages})),t=Object(l.c)((function(e){return e.chat.typingUsers})),n=Object(l.b)();Object(a.useEffect)((function(){return n((function(e){f.createConnection(),f.subscribe((function(t){e(function(e){return{type:"messages-received",messages:e}}(t))}),(function(t){e(function(e){return{type:"new-message-received",message:e}}(t))}),(function(t){return e(function(e){return{type:"typing-user-added",user:e}}(t))}))})),function(){n((function(e){f.destroyConnection()}))}}),[]);var c=Object(a.useRef)(null),r=Object(a.useState)(!0),i=Object(o.a)(r,2),m=i[0],d=i[1],g=Object(a.useState)(0),h=Object(o.a)(g,2),p=h[0],_=h[1];Object(a.useEffect)((function(){var e;m&&(null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[e]);var b=Object(a.useState)(""),v=Object(o.a)(b,2),k=v[0],y=v[1],j=Object(a.useState)(""),O=Object(o.a)(j,2),w=O[0],E=O[1];return s.a.createElement("div",{className:u.a.app},s.a.createElement("div",{className:u.a.chat,onScroll:function(e){var t=e.currentTarget,n=t.scrollHeight-t.clientHeight;t.scrollTop>p&&Math.abs(n-t.scrollTop)<15?d(!0):d(!1),_(e.currentTarget.scrollTop)}},e.map((function(e){return s.a.createElement("div",{className:u.a.message_block,key:e.id},s.a.createElement("span",{className:u.a.name},e.user.name,":"),s.a.createElement("span",{className:u.a.message},e.message))})),t.map((function(e){return s.a.createElement("div",{className:u.a.taping,key:e.id},s.a.createElement("b",null,e.name),"...")})),s.a.createElement("div",{ref:c})),s.a.createElement("button",{className:u.a.send_name,onClick:function(){n(function(e){return function(t){f.sendName(e)}}(w))}},"Use name:"),s.a.createElement("input",{placeholder:"Your name...",className:u.a.use_name,value:w,onChange:function(e){return E(e.currentTarget.value)},type:"text"}),s.a.createElement("button",{className:u.a.send_text,onClick:function(){n(function(e){return function(t){f.sendNewMassage(e)}}(k)),y("")}},"Send message"),s.a.createElement("textarea",{placeholder:"Your message...",className:u.a.input_text,onKeyPress:function(){n((function(e){f.typeMessage()}))},value:k,onChange:function(e){return y(e.currentTarget.value)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(4),v=n(42),k=Object(b.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"messages-received":return Object(d.a)({},e,{messages:t.messages});case"new-message-received":return Object(d.a)({},e,{messages:[].concat(Object(m.a)(e.messages),[t.message]),typingUsers:e.typingUsers.filter((function(e){return e.id!==t.message.user.id}))});case"typing-user-added":return Object(d.a)({},e,{typingUsers:[].concat(Object(m.a)(e.typingUsers.filter((function(e){return e.id!==t.user.id}))),[t.user])});default:return e}}}),y=Object(b.d)(k,Object(b.a)(v.a));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(l.a,{store:y},s.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.11defb2f.chunk.js.map