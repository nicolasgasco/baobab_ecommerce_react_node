(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{60:function(e,t,a){"use strict";var c=a(22),r=a(2),n=a(0),s=a(6),l=a(36),o=a(14),i=a(1);t.a=function(e){var t=e.items,a=e.classes,d=Object(n.useState)(!1),j=Object(r.a)(d,2),b=j[0],x=j[1],m=Object(n.useState)(""),u=Object(r.a)(m,2),g=u[0],h=u[1],O=Object(n.useState)(0),p=Object(r.a)(O,2),f=p[0],y=p[1],w=Object(n.useState)([]),N=Object(r.a)(w,2),k=N[0],v=N[1],S=Object(n.useState)([]),F=Object(r.a)(S,2)[1],C=Object(n.useState)([]),_=Object(r.a)(C,2)[1],R=Object(o.a)().sendRequest;Object(n.useEffect)((function(){y(0)}),[]);var q=function(e){console.log(e,"value is"),y(e)},Y=function(e){return-1!==k.indexOf(e)?Object(i.jsx)("p",{className:"font-bold",children:"Your rating was saved!"}):-1!==k.indexOf(e)?Object(i.jsx)("p",{className:"font-bold",children:"An error ocurred!"}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.a,{getRatingValue:q}),Object(i.jsx)("button",{onClick:function(){return function(e){console.log(f,"value"),f&&R({url:"api/products/rating/".concat(e),method:"POST",headers:{"Content-Type":"application/json"},body:{rating:f}},(function(t){v((function(t){return[].concat(Object(c.a)(t),[e])})),_((function(t){return[].concat(Object(c.a)(t),[e])}))}),(function(){F((function(t){return[].concat(Object(c.a)(t),[e])}))}))}(e)},type:"button",className:"inline-flex justify-center py-2 px-4 my-2  ml-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Rate"})]})},D=t.map((function(e,t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("tr",{className:"h-24 border-gray-300 dark:border-gray-200 border-b ",children:[Object(i.jsx)("td",{className:"hidden md:table-cell text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("img",{src:e.pictures[0].url,className:"w-16 h-16 mx-auto object-contain rounded-full ring-2 ring-green-500",alt:e.pictures[0].alt})}),Object(i.jsx)("td",{className:"text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("p",{className:"mb-2 md:ml-4",children:"".concat(e.completeName.brand," ").concat(e.completeName.productName,", ").concat(e.completeName.color,", ").concat(e.completeName.productGender)})}),Object(i.jsx)("td",{className:"text-center text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("div",{className:"relative flex flex-row justify-center w-12 h-8",children:Object(i.jsx)("p",{children:e.quantity})})}),Object(i.jsx)("td",{className:"pr-4 whitespace-no-wrap  hidden md:table-cell",children:Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("span",{className:"text-xs lg:text-base font-medium",children:"".concat(e.pricingInfo.price).concat(String.fromCharCode(160),"\u20ac")})})}),Object(i.jsx)("td",{className:"text-center text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("span",{className:"text-sm lg:text-base font-medium",children:"".concat((e.pricingInfo.price*e.quantity).toFixed(2)).concat(String.fromCharCode(160),"\u20ac")})}),Object(i.jsxs)("td",{className:"text-center text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:[Object(i.jsx)("span",{className:"sr-only",children:"Rate product"}),Object(i.jsx)(s.j,{onClick:function(){return t=e._id,g!==t&&""!==g||x((function(e){return e&&h(""),!e})),F((function(e){return Object(c.a)(e).filter((function(e){return e!==t}))})),h(t),void y(0);var t},fill:"".concat(b&&g===e._id?"#FDE68A":"#FFFF"),className:"h-6 cursor-pointer"})]})]},"item-".concat(e._id)),b&&g===e._id&&Object(i.jsx)("tr",{className:"h-16 border-gray-300 dark:border-gray-200 border-b ",children:Object(i.jsx)("td",{colSpan:6,className:"text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("div",{className:"flex justify-center",children:Y(e._id)})})},"rating-".concat(e._id))]})}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"w-full ".concat(a),children:Object(i.jsxs)("table",{className:"min-w-full overflow-x-auto",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8",children:[Object(i.jsx)("th",{className:"w-2/12 hidden md:table-cell text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"}),Object(i.jsx)("th",{className:"w-5/12  text-center text-gray-600 dark:text-gray-400 font-bold pr-6 text-sm tracking-normal leading-4",children:"Product"}),Object(i.jsx)("th",{className:"w-1/12  text-center text-gray-600 dark:text-gray-400 font-bold pr-6 text-sm tracking-normal leading-4",children:"Quantity"}),Object(i.jsx)("th",{className:"w-1/12  text-center hidden md:table-cell text-gray-600 dark:text-gray-400 font-bold pr-6 text-sm tracking-normal leading-4",children:"Unit"}),Object(i.jsx)("th",{className:"w-2/12  text-center text-gray-600 dark:text-gray-400 font-bold pr-8 text-sm tracking-normal leading-4",children:"Total"}),Object(i.jsx)("th",{className:"w-2/12  text-center text-gray-600 dark:text-gray-400 font-bold pr-8 text-sm tracking-normal leading-4",children:"Rate"})]})}),Object(i.jsx)("tbody",{children:D})]})})})}},64:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(60),s=a(15),l=a(18),o=a(16),i=a(14),d=a(1);t.default=function(){var e=Object(r.useContext)(s.a).lastOrder,t=Object(i.a)().sendRequest,a=Object(r.useState)((function(){if(e&&Object.keys(e).length>0)x(e);else{var a=Object(o.a)(localStorage.getItem("token"));t({url:"api/order/latest/".concat(a._id)},(function(e){x(e.result)}))}})),j=Object(c.a)(a,2),b=j[0],x=j[1],m=function(e){return e.getDate()+"/"+String(e.getMonth()+1).padStart(2,"0")+"/"+e.getFullYear()};return Object(d.jsx)(d.Fragment,{children:b?Object(d.jsxs)("div",{className:"p-6",children:[Object(d.jsxs)("div",{className:"text-xl",children:[Object(d.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Your order (".concat(b.orderId,") was received!")}),Object(d.jsx)("p",{className:"mb-2 ",children:"You will receive confirmation via e-mail. You should receive your order betweeen 2-5 working days depending on your location."}),Object(d.jsxs)("p",{children:["For any query or doubt, contact with our ",Object(d.jsx)("a",{className:"font-bold text-green-600 hover:underline",href:"mailto:baobad@example.com",children:"Customer support"}),"."]})]}),Object(d.jsxs)("div",{className:"mt-6",children:[Object(d.jsx)("h3",{className:"font-bold text-2xl",children:"Order overview:"}),Object(d.jsx)(n.a,{items:b.items}),Object(d.jsxs)("h4",{children:[Object(d.jsx)("span",{className:"font-bold",children:"Estimated arrival date: "}),"".concat(m(new Date)," - ").concat(m(new Date),".")]})]})]}):Object(d.jsx)(l.a,{})})}}}]);
//# sourceMappingURL=4.7cf8276a.chunk.js.map