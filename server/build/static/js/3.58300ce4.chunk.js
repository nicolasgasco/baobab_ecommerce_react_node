(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{80:function(e,t,n){e.exports={root:"CheckoutForm_root__3K8CL",form:"CheckoutForm_form__b3C4D",input:"CheckoutForm_input__O47qW","result-message":"CheckoutForm_result-message__2ogXe",hidden:"CheckoutForm_hidden__Ch46_","card-error":"CheckoutForm_card-error__2x9_g","card-element":"CheckoutForm_card-element__qXSeS","payment-request-button":"CheckoutForm_payment-request-button__2KYZ-",button:"CheckoutForm_button__1x1s5",spinner:"CheckoutForm_spinner__2w__G",loading:"CheckoutForm_loading__1Tqr4"}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(15),a=n.n(r),c=n(26),o=n(3),s=n(0),i=n(53),l=n(24),u=n(80),m=n.n(u),d=n(11),b=n(25),j=n(5),p=n(23),h=n(1);function f(){var e=Object(s.useContext)(b.a),t=e.items,n=e.saveOrder,r=(e.userAddress,Object(j.g)()),u=Object(s.useState)(!1),f=Object(o.a)(u,2),x=f[0],_=f[1],O=Object(s.useState)(null),g=Object(o.a)(O,2),v=g[0],C=g[1],y=Object(s.useState)(""),k=Object(o.a)(y,2),w=k[0],N=k[1],S=Object(s.useState)(!0),F=Object(o.a)(S,2),E=F[0],q=F[1],P=Object(s.useState)(""),D=Object(o.a)(P,2),T=D[0],A=D[1],J=Object(i.useStripe)(),K=Object(i.useElements)(),L=Object(p.a)().sendRequest;Object(s.useEffect)((function(){L({url:"/api/order/payment",method:"POST",headers:{"Content-Type":"application/json"},body:{items:t}},(function(e){A(e.clientSecret)}),(function(){N(!1)}))}),[t,L]);var R=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(t.empty),C(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(c.a)(a.a.mark((function e(c){var o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),N(!0),e.next=4,J.confirmCardPayment(T,{payment_method:{card:K.getElement(i.CardElement)}});case 4:(o=e.sent).error?(C("Payment failed ".concat(o.error.message)),N(!1)):(s=Object(l.a)(localStorage.getItem("token"))._id,n(s,t),C(null),N(!1),_(!0),r.push("/success"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"mt-10 md:mt-0 w-full mx-auto",style:{maxWidth:"600px"},children:[Object(h.jsx)("div",{className:"w-full pt-1 pb-5",children:Object(h.jsx)("div",{className:"bg-yellow-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-20 md:-mt-16 mx-auto shadow-lg flex justify-center items-center",children:Object(h.jsx)(d.a,{className:"w-2/3"})})}),Object(h.jsx)("div",{className:"mb-10",children:Object(h.jsx)("h2",{className:"mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center",children:"Secure payment info"})}),Object(h.jsxs)("form",{onSubmit:W,className:"w-full",children:[Object(h.jsx)(i.CardElement,{className:"".concat(m.a.input),options:{style:{base:{color:"black",fontFamily:"Roboto, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"black"}},invalid:{color:"#EF4444",iconColor:"#EF4444"}}},onChange:R}),Object(h.jsx)("button",{disabled:w||E||x,className:"".concat(m.a.submit," ").concat(m.a.button),children:Object(h.jsx)("span",{className:m.a["button-text"],children:w?Object(h.jsx)("div",{className:m.a.spinner,id:"spinner"}):"Pay now"})}),Object(h.jsx)("div",{className:"".concat(!v&&"invisible"," card-error text-center text-red-600 font-bold mt-2"),role:"alert",children:v||"No error"})]}),Object(h.jsx)("div",{className:"px- mt-6 flex justify-end",children:Object(h.jsx)("img",{src:"https://res.cloudinary.com/ngasco/image/upload/v1623952029/bonsai_background/logo-stripe_ouoag3.png",alt:"Logos of Visa, MasterCard, American Express, and Discover",className:"w-1/3"})})]})}}}]);
//# sourceMappingURL=3.58300ce4.chunk.js.map