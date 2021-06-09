(this["webpackJsonptieto-evry"]=this["webpackJsonptieto-evry"]||[]).push([[0],{112:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(11),s=a.n(c),o=(a(85),a(8)),r=(a(86),a(148)),d=a(159),l=a(4),u=Object(r.a)((function(){return Object(d.a)({root:{display:"flex",backgroundColor:"#e4ebf8",minHeight:"10vh",alignItems:"center",justifyContent:"space-between",fontWeight:"1000"},logo:{maxHeight:"7vh",padding:12,paddingBottom:0},p:{margin:0}})})),j=function(){var t=u();return Object(l.jsxs)("header",{className:"".concat(t.root," App-header"),children:[Object(l.jsx)("div",{style:{width:0},children:Object(l.jsx)("img",{className:t.logo,src:"https://www.tietoevry.com/tietoevry-favicons/apple-touch-icon.png",alt:""})}),Object(l.jsx)("p",{className:t.p,children:"Travel packer"}),Object(l.jsx)("p",{children:" "})]})},b=a(15),m=a(155),h=a(48),O=a.n(h),p=Object(r.a)((function(t){return Object(d.a)({root:{"& > *":{margin:t.spacing(1),width:"25ch"}}})}));function g(t){var e=t.placeholder,a=t.location,i=void 0===a?"":a,c=t.setLocation,s=t.setStartLatitude,r=t.setStartLongitude,d=t.setFinishLatitude,u=t.setFinishLongitude,j=t.setTriggerSetDistance,b=p(),h=Object(n.useState)(""),g=Object(o.a)(h,2),f=g[0],x=g[1],v=Object(n.useState)(!1),y=Object(o.a)(v,2),S=y[0],w=y[1],C=function(t){t.preventDefault(),x("Searching..."),w(!1);var e={auth:"139152287377000458062x41123",locate:i,json:"1"};O.a.get("https://geocode.xyz",{params:e}).then((function(t){t.data.error?(w(!0),x('We could not find "'.concat(i,'"'))):(w(!1),x(""),s&&(s(t.data.latt),r(t.data.longt)),d&&(d(t.data.latt),u(t.data.longt)),j(Math.random()))})).catch((function(){w(!0),x("There seems to be a connection error")}))};return Object(l.jsx)("form",{onSubmit:C,className:b.root,children:Object(l.jsx)(m.a,{id:"standard-primary",label:e,color:"primary",value:i,onChange:function(t){return c(t.target.value)},helperText:f,error:S,onBlur:C})})}var f=a(160),x=a(72),v=a(152),y=Object(r.a)((function(t){return{root:{width:"100vw",display:"flex",flexDirection:"column",alignItems:"center"},width:{width:"25ch",fontSize:20}}}));function S(t){var e=t.handleChange,a=t.value,n=t.min,i=t.max,c=t.step,s=y(),o=Object(x.a)({overrides:{MuiSlider:{root:{color:"#e4ebf8"},thumb:{backgroundColor:"#4A4A49"},track:{backgroundColor:"#565656"},rail:{backgroundColor:"#565656",height:1.5}}}});return Object(l.jsx)("div",{className:s.root,children:Object(l.jsx)(v.a,{theme:o,children:Object(l.jsx)(f.a,{value:a,onChange:function(t,a){return e(a)},"aria-labelledby":"discrete-slider-custom",valueLabelDisplay:"auto",className:s.width,min:n,max:i,step:c})})})}var w=i.a.createContext(),C=a(115),k=a(36),A=a(156),N=a(153),L=a(114),q=a(5),B=a(157),D=Object(q.a)((function(){return{root:{color:"#4A4A49",margin:10}}}))(B.a),M=Object(r.a)((function(t){return{margin:{margin:t.spacing(2)},passive:{color:"#c4d4f3",borderColor:"#c4d4f3"}}}));function I(t){var e=t.text,a=t.description,n=t.onClick,i=t.isPassive,c=void 0!==i&&i,s=t.customStyles,o=M();return Object(l.jsx)("div",{children:Object(l.jsxs)(D,{variant:"outlined",className:(o.margin,c?o.passive:""),onClick:n,style:s,children:[e,a]})})}var T=a(68),P=a.n(T),E=a(69),H=a.n(E),F=a(154),z=a(158),W=Object(r.a)((function(t){return{modal:{display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"90vh",margin:"5vh","& h2":{marginBottom:5},"@global":{"*::-webkit-scrollbar":{width:"0.4em"},"*::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 6px rgba(0,0,0,0.00)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",outline:"1px solid slategrey"}}},paperContainer:{maxHeight:"100%",display:"flex",alignItems:"flex-start",overflow:"auto"},paper:{display:"flex",flexDirection:"column",backgroundColor:t.palette.background.paper,border:"1px solid #4A4A49",boxShadow:t.shadows[5],color:"#4A4A49"},header:{background:"#e4ebf8",marginTop:10,marginBottom:10,padding:"10px 20px 10px 20px",minWidth:"50vw"},item:{margin:" 5px 20px 5px 20px",borderBottom:".5px solid #4a4a497e",display:"flex",justifyContent:"space-between"},form:{margin:" 0px 20px 5px 20px",color:"#4A4A49"}}}));function R(t){var e=t.defaultItems,a=W(),i=Object(n.useState)(!1),c=Object(o.a)(i,2),s=c[0],r=c[1],d=Object(n.useState)(e),u=Object(o.a)(d,2),j=u[0],h=u[1],O=Object(n.useState)(""),p=Object(o.a)(O,2),g=p[0],f=p[1],x={margin:0,padding:0,border:0,minWidth:0},v=function(t,e){t.preventDefault();var a=j.map((function(t){return e!==t.name?Object(k.a)({},t):Object(k.a)(Object(k.a)({},t),{},{items:[].concat(Object(b.a)(t.items),[{name:g,id:Object(z.a)(),distance:1,quantity:1}])})}));h(a),f("")};return Object(l.jsxs)("div",{children:[Object(l.jsx)(I,{onClick:function(){r(!0)},text:"Let's pack"}),Object(l.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:s,onClose:function(){r(!1)},closeAfterTransition:!0,BackdropComponent:N.a,BackdropProps:{timeout:500},children:Object(l.jsx)(L.a,{in:s,children:Object(l.jsx)("div",{className:a.paperContainer,children:Object(l.jsxs)("div",{className:a.paper,children:[Object(l.jsx)("h2",{id:"transition-modal-title",className:a.header,children:"Inventory"}),j&&j.map((function(t){return Object(l.jsxs)("span",{children:[Object(l.jsx)("h3",{id:"transition-modal-title",className:a.header,children:t.name},t.id),t.items.map((function(t){return Object(l.jsx)("span",{children:Object(l.jsxs)("div",{id:"transition-modal-description",className:a.item,children:[t.name,Object(l.jsx)(I,{text:Object(l.jsx)(P.a,{style:{width:20}}),onClick:function(){return function(t){var e=j.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t}))})}));h(e)}(t.id)},customStyles:x})]},t.id)},t.id)})),Object(l.jsx)("form",{className:a.form,noValidate:!0,autoComplete:"off",onSubmit:function(e){return v(e,t.name)},children:Object(l.jsx)(m.a,{id:"standard-basic",onChange:function(t){return f(t.target.value)},label:"Add "+t.name+" Item",fullWidth:!0,InputLabelProps:{style:{color:"#4A4A49"}},InputProps:{endAdornment:Object(l.jsx)(F.a,{position:"end",style:{color:"#4A4A49"},children:Object(l.jsx)(I,{text:Object(l.jsx)(H.a,{style:{color:"#4A4A49"}}),customStyles:x,onClick:function(e){return v(e,t.name)}})})}})})]},t.id)}))]})})})})]})}var G=[{name:"Toiletries",id:Object(z.a)(),items:[{name:"Toothbrush",id:Object(z.a)(),distance:1,quantity:1},{name:"Tootpaste",id:Object(z.a)(),distance:1,quantity:1},{name:"Shaver",id:Object(z.a)(),distance:20,quantity:1},{name:"Shaving Gel",id:Object(z.a)(),distance:20,quantity:1}]},{name:"Beach",id:Object(z.a)(),items:[{name:"Swimsuit",id:Object(z.a)(),distance:1,quantity:1},{name:"Sunglasses",id:Object(z.a)(),distance:1,quantity:1}]},{name:"Essentials",id:Object(z.a)(),items:[{name:"Hand Sanitizer",id:Object(z.a)(),distance:1,quantity:1},{name:"Extra Battery For Cell Phone",id:Object(z.a)(),distance:10,quantity:1},{name:"Vitamins",id:Object(z.a)(),distance:25,quantity:1}]},{name:"Camping",id:Object(z.a)(),items:[{name:"Hand Sanitizer",id:Object(z.a)(),distance:1,quantity:1},{name:"Tent",id:Object(z.a)(),distance:1,quantity:1},{name:"Sleeping Bag",id:Object(z.a)(),distance:1,quantity:1},{name:"Eating Utensils",id:Object(z.a)(),distance:15,quantity:1}]}],J=a(70),V=a.n(J),U=a(71),K=a.n(U),Q=Object(r.a)((function(){return{root:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",minHeight:"calc(80vh )"},width:{width:"25ch",fontSize:20,padding:10,paddingTop:20},icons:{display:"flex",paddingBottom:10}}})),X=function(){var t=Q(),e=Object(n.useContext)(w),a=Object(n.useState)(),i=Object(o.a)(a,2),c=i[0],s=i[1],r=Object(n.useState)(),d=Object(o.a)(r,2),u=d[0],j=d[1],m=Object(n.useState)(),h=Object(o.a)(m,2),p=h[0],f=h[1],x=Object(n.useState)(),v=Object(o.a)(x,2),y=v[0],k=v[1],A=Object(n.useState)(),N=Object(o.a)(A,2),L=N[0],q=N[1],B=Object(n.useState)(!1),D=Object(o.a)(B,2),M=D[0],T=D[1],P=Object(n.useState)(!0),E=Object(o.a)(P,2),H=E[0],F=E[1],z=Object(n.useState)(G),W=Object(o.a)(z,2),J=W[0],U=W[1];return Object(n.useEffect)((function(){var t;if("undefined"===typeof e.start)if("geolocation"in navigator){navigator.geolocation.getCurrentPosition((function(a){if(t=a.coords,s(t.latitude),j(t.longitude),t){var n="https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(t.latitude,"&longitude=").concat(t.longitude,"&localityLanguage=en");O.a.get(n).then((function(t){e.setStart(t.data.city)})).catch((function(t){console.warn(t)}))}}),(function(t){console.warn("ERROR(".concat(t.code,"): ").concat(t.message))}),{enableHighAccuracy:!0,timeout:1e3,maximumAge:0})}else console.warn("Geolocation Not Available")}),[e]),Object(n.useEffect)((function(){!function(t,a){if(a.latitude){var n=function(t){return t*Math.PI/180},i=n(a.latitude-t.latitude),c=n(a.longitude-t.longitude),s=Math.sin(i/2)*Math.sin(i/2)+Math.cos(n(t.latitude))*Math.cos(n(a.latitude))*Math.sin(c/2)*Math.sin(c/2),o=6378137*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)));isNaN(o)||e.setDistance(Math.trunc(o/1e3))}}({latitude:c,longitude:u},{latitude:p,longitude:y})}),[L]),Object(n.useEffect)((function(){var t=Object(b.a)(G);M||(t=t.filter((function(t){return"Beach"!==t.name}))),H||(t=t.filter((function(t){return"Camping"!==t.name}))),U(t)}),[M,H]),Object(l.jsxs)("div",{className:t.root,children:[Object(l.jsx)(g,{placeholder:"Departure",location:e.start,setLocation:e.setStart,setStartLatitude:s,setStartLongitude:j,setTriggerSetDistance:q}),Object(l.jsx)(g,{placeholder:"Arrival",location:e.finish,setLocation:e.setFinish,setFinishLatitude:f,setFinishLongitude:k,setTriggerSetDistance:q}),Object(l.jsxs)(C.a,{id:"discrete-slider-always",gutterBottom:!0,className:t.width,children:["Distance: ",e.distance," km"]}),Object(l.jsx)(S,{handleChange:e.setDistance,value:e.distance,min:0,max:100,step:10}),Object(l.jsxs)(C.a,{id:"discrete-slider-always",gutterBottom:!0,className:t.width,children:["Length of stay: ",e.lengthStay," days"]}),Object(l.jsx)(S,{handleChange:e.setLengthStay,value:e.lengthStay,min:0,max:30,step:1}),Object(l.jsx)(C.a,{id:"discrete-slider-always",className:t.width,children:"Activities"}),Object(l.jsxs)("div",{id:"discrete-slider-always",className:t.icons,children:[Object(l.jsx)(I,{text:Object(l.jsx)(V.a,{}),description:"Camping",isPassive:!H,onClick:function(){F(!H)}}),Object(l.jsx)(I,{text:Object(l.jsx)(K.a,{}),description:"Beach",isPassive:!M,onClick:function(){T(!M)}})]}),Object(l.jsx)(R,{defaultItems:J})]})};var Y=function(){var t=Object(n.useState)(),e=Object(o.a)(t,2),a=e[0],i=e[1],c=Object(n.useState)(),s=Object(o.a)(c,2),r=s[0],d=s[1],u=Object(n.useState)(100),b=Object(o.a)(u,2),m=b[0],h=b[1],O=Object(n.useState)(20),p=Object(o.a)(O,2),g={start:a,setStart:i,finish:r,setFinish:d,distance:m,setDistance:h,lengthStay:p[0],setLengthStay:p[1]};return Object(l.jsx)(w.Provider,{value:g,children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(X,{})]})})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(Y,{})}),document.getElementById("root"))},85:function(t,e,a){},86:function(t,e,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.c107c81b.chunk.js.map