_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{o0o1:function(t,e,n){t.exports=n("ls82")},wGCd:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/[id]",function(){return n("zfUn")}])},zfUn:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var l=n("o0o1"),r=n.n(l);function a(t,e,n,l,r,a,o){try{var c=t[a](o),s=c.value}catch(i){return void n(i)}c.done?e(s):Promise.resolve(s).then(l,r)}var o=n("q1tI"),c=n.n(o),s=n("8Kt/"),i=n.n(s),u=n("YFqc"),d=n.n(u),m=n("nOHt"),f=n.n(m),p=n("/MKj"),v=n("wd/R"),h=n.n(v),_=n("EfCc"),g=n("ZHqB"),w=n("pI11"),b=c.a.createElement;function y(){var t=Object(m.useRouter)().query.id,e=Object(o.useState)(null),n=e[0],l=e[1],c=Object(o.useState)(!0),s=c[0],u=c[1],v=Object(o.useState)(null),y=v[0],N=v[1],x=Object(p.c)((function(t){return t.customer}));f.a.push("/"),Object(o.useEffect)((function(){(function(){var t,e=(t=r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,commerce.customer.getOrder(e,x.id);case 3:n=t.sent,u(!1),l(n.data),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),u(!1),N(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var e=this,n=arguments;return new Promise((function(l,r){var o=t.apply(e,n);function c(t){a(o,l,r,c,s,"next",t)}function s(t){a(o,l,r,c,s,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}})()(t)}),[t]);var S=function(t){var e=t.image;return e.media?b("img",{className:"img-thumbnail h-72 mr-4",alt:e.product_name,src:e.media.source}):null},O=function(t){var e=t.page;return b(_.a,null,b(i.a,null,b("title",null,"commerce")),b("div",{className:"py-5 my-5 text-center"},b("h4",{className:"mt-4"},e.message)),b(g.a,null))};return x?y?b(O,{page:{message:"Sorry something went wrong."}}):s?b(O,{page:{message:"Loading"}}):n?b(_.a,null,b(i.a,null,b("title",null,n.customer_reference," | commerce")),b("div",{className:"account-container"},b("div",{className:"custom-container py-5 my-4 my-sm-5"},b("div",{className:"row mt-4"},b("div",{className:"col-12"},b("div",{className:"d-flex pb-4 breadcrumb-container"},b(d.a,{href:"/account"},b("div",{className:"font-size-caption text-decoration-underline cursor-pointer"},"Account")),b("img",{src:"/icon/arrow-right.svg",className:"w-16 mx-1",alt:"Arrow icon"}),b("div",{className:"font-size-caption font-weight-bold cursor-pointer"},n.customer_reference)))),b("div",{className:"row mt-5 pt-5"},b("div",{className:"col-12"},b("h2",{className:"font-size-header mb-4 pt-5 text-center"},"Order: #",n.customer_reference),alert)),b("div",{className:"row mt-5 pt-5"},b("div",{className:"col-12 col-md-8 col-lg-8"},b("div",{className:"d-flex flex-row justify-content-between"},b("h5",null,"Items"),b((function(t){var e=t.date;if(!e)return null;var n=h.a.unix(e);return n.isValid?b("small",null,b("strong",null,"Ordered placed on:")," ",h()(n).format("MMM Do Y")):null}),{date:n.created})),b("table",{className:"table table-bordered"},b("thead",null,b("tr",null,b("th",null,"Product"),b("th",null,"Price"),b("th",null,"Quantity"),b("th",null,"Total"))),b("tbody",null,n.order.line_items.map((function(t){return b("tr",{key:t.id},b("td",null,b(S,{image:t}),t.product_name),b("td",null,t.price.formatted_with_symbol),b("td",null,t.quantity),b("td",null,t.line_total.formatted_with_symbol))}))),b("tfoot",null,b("tr",null,b("td",{colSpan:"3",className:"border-right-0"},"Subtotal"),b("td",{className:"border-left-0 text-right"},n.order.subtotal.formatted_with_symbol)),b("tr",null,b("td",{colSpan:"3",className:"border-right-0"},"Shipping"),b("td",{className:"border-left-0 text-right"},n.order.shipping.price.formatted_with_symbol)),b("tr",null,b("td",{colSpan:"3",className:"border-right-0"},"Tax"),b("td",{className:"border-left-0 text-right"},n.order.tax.amount.formatted_with_symbol)),b("tr",null,b("td",{colSpan:"3",className:"border-right-0"},b("strong",null,"Total")),b("td",{className:"border-left-0 text-right"},b("strong",null,n.order.total.formatted_with_symbol)))))),b("div",{className:"col-12 col-md-4 col-lg-4 row-content"},b((function(t){var e=t.address;return 0===e.length?null:b("div",null,b("h5",null,"Billing address"),b("div",{className:"card p-2 mb-4"},b("div",null,b("div",null,b("strong",null,e.name)),b("div",null,e.street),b("div",null,e.town_city,e.town_city&&e.county_state?",":""," ",e.county_state),b("div",null,e.country,e.town_city&&e.county_state?",":""," ",e.postal_zip_code))))}),{address:n.billing}),b((function(t){var e=t.address;return 0===e.length?null:b("div",null,b("h5",null,"Shipping address"),b("div",{className:"card p-2"},b("div",null,b("div",null,b("strong",null,e.name)),b("div",null,e.street),b("div",null,e.town_city,e.town_city&&e.county_state?",":""," ",e.county_state),b("div",null,e.country,e.town_city&&e.county_state?",":""," ",e.postal_zip_code))))}),{address:n.shipping}))))),b(g.a,null)):b(O,{page:{message:"Sorry we cannot find an order witht that number, if you think this is in error please contact us!"}}):b(w.default,null)}}},[["wGCd",2,1,4,7,0,3,5,8]]]);