(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{60:function(e,t,r){"use strict";var a=r(22),c=r(2),n=r(0),s=r(6),o=r(36),l=r(14),i=r(1);t.a=function(e){var t=e.items,r=e.classes,d=Object(n.useState)(!1),x=Object(c.a)(d,2),j=x[0],b=x[1],m=Object(n.useState)(""),u=Object(c.a)(m,2),g=u[0],h=u[1],O=Object(n.useState)(0),f=Object(c.a)(O,2),p=f[0],y=f[1],N=Object(n.useState)([]),w=Object(c.a)(N,2),k=w[0],v=w[1],S=Object(n.useState)([]),F=Object(c.a)(S,2)[1],C=Object(n.useState)([]),A=Object(c.a)(C,2)[1],_=Object(l.a)().sendRequest;Object(n.useEffect)((function(){y(0)}),[]);var I=function(e){console.log(e,"value is"),y(e)},R=function(e){return-1!==k.indexOf(e)?Object(i.jsx)("p",{className:"font-bold",children:"Your rating was saved!"}):-1!==k.indexOf(e)?Object(i.jsx)("p",{className:"font-bold",children:"An error ocurred!"}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{getRatingValue:I}),Object(i.jsx)("button",{onClick:function(){return function(e){console.log(p,"value"),p&&_({url:"api/products/rating/".concat(e),method:"POST",headers:{"Content-Type":"application/json"},body:{rating:p}},(function(t){v((function(t){return[].concat(Object(a.a)(t),[e])})),A((function(t){return[].concat(Object(a.a)(t),[e])}))}),(function(){F((function(t){return[].concat(Object(a.a)(t),[e])}))}))}(e)},type:"button",className:"inline-flex justify-center py-2 px-4 my-2  ml-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Rate"})]})},D=t.map((function(e,t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("tr",{className:"h-24 border-gray-300 dark:border-gray-200 border-b ",children:[Object(i.jsx)("td",{className:"hidden md:table-cell text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("img",{src:e.pictures[0].url,className:"w-16 h-16 mx-auto object-contain rounded-full ring-2 ring-green-500",alt:e.pictures[0].alt})}),Object(i.jsx)("td",{className:"text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("p",{className:"mb-2 md:ml-4",children:"".concat(e.completeName.brand," ").concat(e.completeName.productName,", ").concat(e.completeName.color,", ").concat(e.completeName.productGender)})}),Object(i.jsx)("td",{className:"text-center text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("div",{className:"relative flex flex-row justify-center w-12 h-8",children:Object(i.jsx)("p",{children:e.quantity})})}),Object(i.jsx)("td",{className:"pr-4 whitespace-no-wrap  hidden md:table-cell",children:Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("span",{className:"text-xs lg:text-base font-medium",children:"".concat(e.pricingInfo.price).concat(String.fromCharCode(160),"\u20ac")})})}),Object(i.jsx)("td",{className:"text-center text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("span",{className:"text-sm lg:text-base font-medium",children:"".concat((e.pricingInfo.price*e.quantity).toFixed(2)).concat(String.fromCharCode(160),"\u20ac")})}),Object(i.jsxs)("td",{className:"text-center text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:[Object(i.jsx)("span",{className:"sr-only",children:"Rate product"}),Object(i.jsx)(s.j,{onClick:function(){return t=e._id,g!==t&&""!==g||b((function(e){return e&&h(""),!e})),F((function(e){return Object(a.a)(e).filter((function(e){return e!==t}))})),h(t),void y(0);var t},fill:"".concat(j&&g===e._id?"#FDE68A":"#FFFF"),className:"h-6 cursor-pointer"})]})]},"item-".concat(e._id)),j&&g===e._id&&Object(i.jsx)("tr",{className:"h-16 border-gray-300 dark:border-gray-200 border-b ",children:Object(i.jsx)("td",{colSpan:6,className:"text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4",children:Object(i.jsx)("div",{className:"flex justify-center",children:R(e._id)})})},"rating-".concat(e._id))]})}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"w-full ".concat(r),children:Object(i.jsxs)("table",{className:"min-w-full overflow-x-auto",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8",children:[Object(i.jsx)("th",{className:"w-2/12 hidden md:table-cell text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"}),Object(i.jsx)("th",{className:"w-5/12  text-center text-gray-600 dark:text-gray-400 font-bold pr-6 text-sm tracking-normal leading-4",children:"Product"}),Object(i.jsx)("th",{className:"w-1/12  text-center text-gray-600 dark:text-gray-400 font-bold pr-6 text-sm tracking-normal leading-4",children:"Quantity"}),Object(i.jsx)("th",{className:"w-1/12  text-center hidden md:table-cell text-gray-600 dark:text-gray-400 font-bold pr-6 text-sm tracking-normal leading-4",children:"Unit"}),Object(i.jsx)("th",{className:"w-2/12  text-center text-gray-600 dark:text-gray-400 font-bold pr-8 text-sm tracking-normal leading-4",children:"Total"}),Object(i.jsx)("th",{className:"w-2/12  text-center text-gray-600 dark:text-gray-400 font-bold pr-8 text-sm tracking-normal leading-4",children:"Rate"})]})}),Object(i.jsx)("tbody",{children:D})]})})})}},65:function(e,t,r){"use strict";r.r(t);var a=r(2),c=r(0),n=r(60),s=r(14),o=r(16),l=r(15),i=r(1);t.default=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),r=t[0],d=t[1],x=Object(s.a)().sendRequest;Object(c.useContext)(l.a).userAddress;Object(c.useEffect)((function(){var e=Object(o.a)(localStorage.getItem("token"));x({url:"/api/order/".concat(e._id)},(function(e){if(console.log(e),!e.ordersFound)throw new Error("No results found");d(e.result)}))}),[x]);var j=function(e){e=Date.parse(e);var t=(e=new Date(e)).getDate(),r=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear(),c=e.getHours(),n=e.getMinutes(),s=e.getSeconds();return"".concat(t,"/").concat(r,"/").concat(a," (").concat(c,":").concat(n,":").concat(s,")")},b=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},m=r.map((function(e){return console.log(e.userAddress),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{className:"font-bold text-xl mt-6",children:["Order number # ",e.orderId]}),Object(i.jsxs)("h3",{className:"font-bold text-xl",children:["Order sent:"," ",Object(i.jsx)("span",{className:"font-normal text-sm",children:j(e.creationDate)})]}),Object(i.jsxs)("h3",{className:"font-bold text-xl",children:["Sent to:"," ",Object(i.jsx)("span",{className:"font-normal text-sm",children:"".concat(b(e.userAddress.street),", ").concat(e.userAddress.zip," ").concat((t=e.userAddress.city,t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()),",  ").concat(b(e.userAddress.province))})]}),Object(i.jsx)(n.a,{classes:"mb-12",items:e.items,id:e.orderId})]},e.orderId);var t}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:"Your orders"}),Object(i.jsx)("div",{children:m})]})}}}]);
//# sourceMappingURL=5.5c32fd93.chunk.js.map