(this["webpackJsonp3d-projects"]=this["webpackJsonp3d-projects"]||[]).push([[0],{47:function(e,t,a){},52:function(e,t,a){var A={"./back.svg":53,"./base.svg":54,"./cushions.svg":55,"./legs.svg":56,"./supports.svg":57};function c(e){var t=n(e);return a(t)}function n(e){if(!a.o(A,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return A[e]}c.keys=function(){return Object.keys(A)},c.resolve=n,e.exports=c,c.id=52},53:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/back.b1f4edb2.svg"},54:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/base.4ee01d7b.svg"},55:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/cushions.5dcad69f.svg"},56:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/legs.6995e2b3.svg"},57:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/supports.403fafb0.svg"},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var A=a(5),c=a.n(A),n=a(21),s=a.n(n),r=(a(47),a(14)),o=a(11),l=a(71),i=a(72),d=a(74),u=a(12),g=a(10),b=a(41),j=a(73),C=a.p+"static/media/chair.f909e231.glb",h=a(9);function Q(e){var t=Object(A.useRef)(),a=Object(j.a)(C),c=a.nodes,n=a.materials;return Object(h.jsx)("group",{ref:t,dispose:null,children:Object(h.jsxs)("group",{name:"Scene",children:[Object(h.jsx)("mesh",{name:"legs",castShadow:!0,receiveShadow:!0,geometry:c.legs.geometry,material:c.legs.material,rotation:[Math.PI,1.25*Math.PI,Math.PI],scale:[.2,.2,.2],userData:{name:"legs"},children:Object(h.jsx)("meshStandardMaterial",{color:e.legsColor})}),Object(h.jsx)("mesh",{name:"cushions",castShadow:!0,receiveShadow:!0,geometry:c.cushions.geometry,material:n.wire_196010216,rotation:[Math.PI,1.25*Math.PI,Math.PI],scale:[.2,.2,.2],userData:{name:"cushions"},children:Object(h.jsx)("meshStandardMaterial",{color:e.cushionsColor})}),Object(h.jsx)("mesh",{name:"back",castShadow:!0,receiveShadow:!0,geometry:c.back.geometry,material:c.back.material,rotation:[Math.PI,1.25*Math.PI,Math.PI],scale:[.2,.2,.2],userData:{name:"back"},children:Object(h.jsx)("meshStandardMaterial",{color:e.backColor})}),Object(h.jsx)("mesh",{name:"supports",castShadow:!0,receiveShadow:!0,geometry:c.supports.geometry,material:c.supports.material,rotation:[Math.PI,1.25*Math.PI,Math.PI],scale:[.2,.2,.2],userData:{name:"supports"},children:Object(h.jsx)("meshStandardMaterial",{color:e.supportsColor})}),Object(h.jsx)("mesh",{name:"base",castShadow:!0,receiveShadow:!0,geometry:c.base.geometry,material:c.base.material,rotation:[Math.PI,1.25*Math.PI,Math.PI],scale:[.2,.2,.2],userData:{name:"base"},children:Object(h.jsx)("meshStandardMaterial",{color:e.baseColor})})]})})}j.a.preload("/chair.glb");var m=function(e){var t=e.legsColor,a=e.cushionsColor,c=e.supportsColor,n=e.backColor,s=e.baseColor,r=Object(A.useRef)(),l=Object(A.useState)([0,0,0]),i=Object(o.a)(l,2),d=i[0],j=i[1],C=Object(u.d)(),m=C.size,O=C.viewport,V=m.width/O.width,p=Object(b.a)((function(e){var t=Object(o.a)(e.offset,2),a=t[0],A=t[1],c=Object(o.a)(d,3)[2];j([A/V,a/V,c])}),{pointerEvents:!0});return Object(h.jsx)("mesh",Object(g.a)(Object(g.a)({},p()),{},{ref:r,children:Object(h.jsx)(Q,{legsColor:t,cushionsColor:a,supportsColor:c,backColor:n,baseColor:s})}))},O=function(e){var t=e.allParts,A=e.selectedPart,c=e.setSelectedPart;return Object(h.jsx)("div",{className:"part-selector",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(h.jsx)("div",{onClick:function(){return c(e)},children:Object(h.jsx)("img",{src:a(52)("./".concat(e,".svg")).default,alt:"chair-".concat(e),className:A===e?"chair-part-image selected":"chair-part-image"})},t)}))})},V=a(42),p=a.n(V),v=function(e){var t=e.handleColorChange,a=e.selectedPart,A=e.isModalOpen,c=e.handleOpenModal,n=e.handleCloseModal,s=e.allColors,r=e.addColor,o=e.setAddColor,l=e.handleAddColor;return Object(h.jsxs)("div",{className:"colorpicker-container",children:[null===s||void 0===s?void 0:s.map((function(e,A){return Object(h.jsx)("div",{className:"color-picker",onClick:function(){return t(a,e)},style:{backgroundColor:e}},A)})),Object(h.jsx)("div",{className:"color-picker add-icon-div",onClick:c,children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"add-icon"})}),Object(h.jsxs)(p.a,{isOpen:A,ariaHideApp:!1,children:[Object(h.jsx)("div",{className:"modal-header-div"}),Object(h.jsxs)("form",{className:"modal-form-div",onSubmit:function(e){return l(e)},children:[Object(h.jsxs)("div",{className:"form-header-div",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Click to select color:"}),Object(h.jsx)("input",{type:"color",value:r,onChange:function(e){return o(e.target.value)},className:"color-selector"}),Object(h.jsx)("input",{type:"text",placeholder:"Hex color without #",value:r,onChange:function(e){return e.target.value.includes("#")?o(e.target.value):o("#"+e.target.value)},className:"color-input-text"})]}),Object(h.jsx)("h4",{onClick:n,children:"X"})]}),Object(h.jsx)("button",{type:"submit",className:"form-submit-button",children:"Add color"})]})]})]})},I=function(){var e=Object(A.useRef)(),t=Object(A.useState)(["#4A90E2","#525252","#C22727","#42AD87","#C5BE26"]),a=Object(o.a)(t,2),c=a[0],n=a[1],s=Object(A.useState)(["back","base","cushions","legs","supports"]),g=Object(o.a)(s,2),b=g[0],j=(g[1],Object(A.useState)(b[0])),C=Object(o.a)(j,2),Q=C[0],V=C[1],p=Object(A.useState)(c[0]),I=Object(o.a)(p,2),f=I[0],E=I[1],x=Object(A.useState)(c[0]),P=Object(o.a)(x,2),w=P[0],H=P[1],S=Object(A.useState)(c[0]),M=Object(o.a)(S,2),F=M[0],B=M[1],k=Object(A.useState)(c[0]),J=Object(o.a)(k,2),D=J[0],z=J[1],U=Object(A.useState)(c[0]),q=Object(o.a)(U,2),T=q[0],X=q[1],y=Object(A.useState)(!1),N=Object(o.a)(y,2),R=N[0],W=N[1],L=Object(A.useState)("#000000"),Y=Object(o.a)(L,2),Z=Y[0],G=Y[1];function K(){return Object(h.jsx)(l.a,{center:!0})}return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{allParts:b,selectedPart:Q,setSelectedPart:V}),Object(h.jsxs)(u.a,{className:"chair-canvas",shadows:!0,shadowMap:!0,dpr:[1,2],camera:{fov:50,position:[0,3,5]},frameloop:"demand",performance:{current:1,min:.1,max:1,debounce:200},children:[Object(h.jsx)(A.Suspense,{fallback:Object(h.jsx)(K,{}),children:Object(h.jsx)(i.a,{controls:e,preset:"rembrandt",intensity:1,environment:"city",children:Object(h.jsx)(m,{legsColor:f,cushionsColor:w,supportsColor:F,backColor:D,baseColor:T})})}),Object(h.jsx)(d.a,{ref:e,autoRotate:!0,minDistance:"5",maxDistance:"10",minPolarAngle:Math.PI/3,maxPolarAngle:Math.PI/2,enableDamping:!0,dampingFactor:"0.1",enablePan:!1})]}),Object(h.jsx)(v,{selectedPart:Q,handleColorChange:function(e,t){switch(e){case"legs":E(t);break;case"cushions":H(t);break;case"supports":B(t);break;case"back":z(t);break;default:X(t)}},allColors:c,setAllColors:n,isModalOpen:R,handleOpenModal:function(){W(!0)},handleCloseModal:function(){W(!1)},setAddColor:G,addColor:Z,handleAddColor:function(e){e.preventDefault(),console.log("adding this color",Z),n([].concat(Object(r.a)(c),[Z])),W(!1)}})]})};a(69);var f=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(I,{})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,A=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),A(e),c(e),n(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),E()}},[[70,1,2]]]);
//# sourceMappingURL=main.1dc91a79.chunk.js.map