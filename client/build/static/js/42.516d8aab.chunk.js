"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[42],{4373:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(4165),o=t(5861),a=t(9439),i=t(2791),s=t(5987),c=t(1243),l=["params","urlParams"],d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=a.length>2?a[2]:void 0,(t=a.length>1&&void 0!==a[1]?a[1]:{}).params,t.urlParams,(0,s.Z)(t,l),n.next=5,(0,c.Z)({method:e.method,url:"".concat("http://localhost:8000","/").concat(e.endpoint,"/").concat(o),data:t});case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=d,u=function(n){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),s=t[0],c=t[1],l=(0,i.useState)(""),d=(0,a.Z)(l,2),u=d[0],x=d[1],f=(0,i.useState)(!1),h=(0,a.Z)(f,2),m=h[0],Z=h[1],g=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var o,a,i=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.length>1&&void 0!==i[1]?i[1]:"",c(null),Z(!0),x(""),e.prev=4,e.next=7,p(n,t,o);case 7:a=e.sent,c(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),x(e.t0.message);case 14:return e.prev=14,Z(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[4,11,14,17]])})));return function(n){return e.apply(this,arguments)}}();return{call:g,response:s,error:u,isLoading:m}}},2042:function(n,e,t){t.r(e),t.d(e,{default:function(){return wn}});var r,o,a,i,s,c,l,d,p,u,x,f=t(9439),h=t(168),m=t(2791),Z=t(7630),g=t(4395),v=t(4554),j=t(4663),w=t(6098),b=t(7607),S=t(2167),P=t(4035),E=t(4371),_=t(2155),y=t(3512),D=t(5652),C=t(6148),T=t(184),k=(0,Z.ZP)(g.Z)(r||(r=(0,h.Z)(["\n    background: #f5F5F5;\n    box-shadow: none;\n"]))),O=(0,Z.ZP)(v.Z)(o||(o=(0,h.Z)(["\n    background: #EAF1FB;\n    margin-left: 80px;\n    border-radius: 8px;\n    min-width: 690px;\n    max-width: 720px;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    & > div {\n        width: 100%\n    }\n"]))),R=(0,Z.ZP)(v.Z)(a||(a=(0,h.Z)(["\n    width: 100%;\n    display: flex;\n    justify-content: end;\n    & > svg {\n        margin-left: 20px;\n    }\n"]))),F=function(n){var e=n.toggleDrawer;return(0,T.jsx)(k,{position:"static",children:(0,T.jsxs)(j.Z,{children:[(0,T.jsx)(b.Z,{color:"action",onClick:e}),(0,T.jsx)("img",{src:C.Pv,alt:"logo",style:{width:110,marginLeft:15}}),(0,T.jsxs)(O,{children:[(0,T.jsx)(S.Z,{color:"action"}),(0,T.jsx)(w.ZP,{}),(0,T.jsx)(P.Z,{color:"action"})]}),(0,T.jsxs)(R,{children:[(0,T.jsx)(E.Z,{color:"action"}),(0,T.jsx)(_.Z,{color:"action"}),(0,T.jsx)(y.Z,{color:"action"}),(0,T.jsx)(D.Z,{color:"action"})]})]})})},A=t(9953),L=t(4294),B=t(493),H=t(4852),M=t(4165),W=t(5861),U=t(4942),I=t(1413),K=t(9818),N=t(890),z=t(539),Y=t(6739),V=t(4220),G=t(4373),q=t(5372),J={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},Q=(0,Z.ZP)(v.Z)(i||(i=(0,h.Z)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 15px;\n    background: #f2f6fc;\n    & > p {\n        font-size: 14px;\n        font-weight: 500;\n    }\n"]))),X=(0,Z.ZP)(v.Z)(s||(s=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    padding: 0 15px;\n    & > div {\n        font-size: 14px;\n        border-bottom: 1px solid #F5F5F5;\n        margin-top: 10px;\n    }\n"]))),$=(0,Z.ZP)(v.Z)(c||(c=(0,h.Z)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 15px;\n    align-items: center;\n"]))),nn=(0,Z.ZP)(L.Z)(l||(l=(0,h.Z)(["\n    background: #0B57D0;\n    color: #fff;\n    font-weight: 500;\n    text-transform: none;\n    border-radius: 18px;\n    width: 100px;\n"]))),en=function(n){var e=n.open,t=n.setOpenDrawer,r=(0,m.useState)({}),o=(0,f.Z)(r,2),a=o[0],i=o[1],s=(0,G.Z)(q.Y.saveSentEmails),c=(0,G.Z)(q.Y.saveDraftEmails),l={Username:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_USERNAME,Password:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_PASSWORD,Host:"smtp.elasticemail.com",Port:2525},d=function(n){i((0,I.Z)((0,I.Z)({},a),{},(0,U.Z)({},n.target.name,n.target.value)))},p=function(){var n=(0,W.Z)((0,M.Z)().mark((function n(e){var r;return(0,M.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),window.Email&&window.Email.send((0,I.Z)((0,I.Z)({},l),{},{To:a.to,From:"codeforinterview03@gmail.com",Subject:a.subject,Body:a.body})).then((function(n){return alert(n)})),r={to:a.to,from:"codeforinterview03@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Code for Interview",starred:!1,type:"sent"},s.call(r),s.error||(t(!1),i({}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,T.jsxs)(K.Z,{open:e,PaperProps:{sx:J},children:[(0,T.jsxs)(Q,{children:[(0,T.jsx)(N.Z,{children:"New Message"}),(0,T.jsx)(Y.Z,{fontSize:"small",onClick:function(n){return function(n){n.preventDefault();var e={to:a.to,from:"codeforinterview03@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Code for Interview",starred:!1,type:"drafts"};c.call(e),c.error||(t(!1),i({}))}(n)}})]}),(0,T.jsxs)(X,{children:[(0,T.jsx)(w.ZP,{placeholder:"Recipients",name:"to",onChange:function(n){return d(n)},value:a.to}),(0,T.jsx)(w.ZP,{placeholder:"Subject",name:"subject",onChange:function(n){return d(n)},value:a.subject})]}),(0,T.jsx)(z.Z,{multiline:!0,rows:20,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:function(n){return d(n)},value:a.body}),(0,T.jsxs)($,{children:[(0,T.jsx)(nn,{onClick:function(n){return p(n)},children:"Send"}),(0,T.jsx)(V.Z,{onClick:function(){return t(!1)}})]})]})},tn=t(5806),rn=t(4287),on=t(3026),an=t(2192),sn=t(3513),cn=t(9825),ln=t(8265),dn=[{name:"inbox",title:"Inbox",icon:rn.Z,path:tn._.emails.path},{name:"starred",title:"Starred",icon:on.Z,path:tn._.emails.path},{name:"sent",title:"Sent",icon:an.Z,path:tn._.emails.path},{name:"drafts",title:"Drafts",icon:sn.Z,path:tn._.emails.path},{name:"bin",title:"Bin",icon:cn.Z,path:tn._.emails.path},{name:"allmail",title:"All Mail",icon:ln.Z,path:tn._.emails.path}],pn=t(5905),un=t(7689),xn=t(1087),fn=(0,Z.ZP)(v.Z)(d||(d=(0,h.Z)(["\n    padding: 8px;\n    & > ul {\n        padding: 10px 0 0 5px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        & > a {\n            text-decoration: none;\n            color: inherit;\n        }\n        & > a > li > svg {\n            margin-right: 20px;\n        }\n    }\n"]))),hn=(0,Z.ZP)(L.Z)(p||(p=(0,h.Z)(["\n    background: #c2e7ff;\n    color: #001d35;\n    border-radius: 16px;\n    padding: 15px;\n    min-width: 140px;\n    text-transform: none;\n"]))),mn=function(){var n=(0,m.useState)(!1),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=(0,un.UO)().type;return(0,T.jsxs)(fn,{children:[(0,T.jsxs)(hn,{onClick:function(){r(!0)},children:[(0,T.jsx)(pn.Z,{style:{marginRight:10}}),"Compose"]}),(0,T.jsx)(B.Z,{children:dn.map((function(n){return(0,T.jsx)(xn.OL,{to:"".concat(tn._.emails.path,"/").concat(n.name),children:(0,T.jsxs)(H.ZP,{style:o===n.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,T.jsx)(n.icon,{fontSize:"small"}),n.title]})},n.name)}))}),(0,T.jsx)(en,{open:t,setOpenDrawer:r})]})},Zn=(0,Z.ZP)(A.ZP)(u||(u=(0,h.Z)(["\n    margin-top: 54px;\n"]))),gn=function(n){var e=n.toggleDrawer,t=n.openDrawer;return(0,T.jsx)(Zn,{anchor:"left",open:t,onClose:e,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{width:250,borderRight:"none",background:"#f5F5F5",marginTop:"64px",height:"calc(100vh - 64px)"}},children:(0,T.jsx)(mn,{})})},vn=t(2247),jn=(0,Z.ZP)(v.Z)(x||(x=(0,h.Z)(["\n    display: flex;\n"]))),wn=function(){var n=(0,m.useState)(!0),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=function(){r((function(n){return!n}))};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(F,{toggleDrawer:o}),(0,T.jsxs)(jn,{children:[(0,T.jsx)(gn,{toggleDrawer:o,openDrawer:t}),(0,T.jsx)(m.Suspense,{fallback:(0,T.jsx)(vn.Z,{}),children:(0,T.jsx)(un.j3,{context:{openDrawer:t}})})]})]})}},5372:function(n,e,t){t.d(e,{Y:function(){return r}});var r={saveSentEmails:{endpoint:"save",method:"POST"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}}}]);
//# sourceMappingURL=42.516d8aab.chunk.js.map