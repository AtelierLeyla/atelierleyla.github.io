_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"0idp":function(t,e,n){"use strict";(function(t){var r=n("1OyB"),i=n("vuIU"),o=n("Ji7U"),s=n("md7G"),l=n("foSv"),c=n("q1tI"),u=n.n(c),a=n("YFqc"),f=n.n(a),d=n("/MKj"),h=u.a.createElement;function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var i=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var m=function(e){Object(o.a)(s,e);var n=p(s);function s(){return Object(r.a)(this,s),n.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this.props.categories.filter((function(t){return t.link}));return h("div",{className:"bg-brand300 py-5 collection-banner"},h("div",{className:"custom-container py-5"},h("p",{className:"font-size-display2 my-3 py-5 text-center font-family-secondary"},"Categories"),h("div",{className:"row"},e.map((function(e,n){return h("div",{key:"category-item-".concat(n),className:"col-12 col-md-4 collection-item mb-5"},h(f.a,{href:e.link,as:t.env.BACKEND_URL+"".concat(e.link)},h("a",{className:"align-items-center font-color-black flex-column cursor-pointer mb-5"},h("div",null,h("div",{className:"mb-4 w-100 collection-item-image",style:{background:'url("'.concat(e.image,'") center center/cover')}}),h("p",{className:"mb-2 font-size-heading text-center",key:e.id},e.name),h("p",{className:"text-center"},e.count," products")))))})))))}}]),s}(c.Component);m.defaultProps={categories:[]},e.a=Object(d.b)((function(t){return t}))(m)}).call(this,n("8oxB"))},"19JU":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var r="undefined"===typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,i="undefined"===typeof window?{document:r,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window},"1UgB":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return y}));var r=n("1OyB"),i=n("vuIU"),o=n("Ji7U"),s=n("md7G"),l=n("foSv"),c=n("q1tI"),u=n.n(c),a=n("YVwf"),f=n.n(a),d=n("YFqc"),h=n.n(d),p=u.a.createElement;function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var i=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var g={modules:[a.EffectFade,a.Autoplay],slidesPerView:1,watchOverflow:!1,autoplay:{delay:5e3},loop:!0,allowTouchMove:!1,speed:1e3,effect:"fade",fadeEffect:{crossFade:!0}},v=["/images/home-1.jpg","/images/home-2.jpg","/images/home-3.jpg","/images/home-4.jpg"],y=function(e){Object(o.a)(s,e);var n=m(s);function s(){return Object(r.a)(this,s),n.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return p("div",{className:"hero-section position-relative"},p(f.a,g,v.map((function(e,n){return p("div",{key:e},p("div",{className:"hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5",style:{backgroundImage:'url("'.concat(e,'")')}},p("p",{className:"font-size-display5 font-family-secondary mb-4 text-center hero-header"},"The care you've always needed"),p("p",{className:"text-transform-uppercase font-size-title mb-5 hero-subheader"},"A range of products for you"),p(h.a,{href:"/collection",as:t.env.BACKEND_URL+"/collection"},p("a",{className:"d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn"},"Shop now"))))}))))}}]),s}(c.Component)}).call(this,n("8oxB"))},"4HLL":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c}));var r=n("q1tI"),i=n.n(r),o=n("YFqc"),s=n.n(o),l=i.a.createElement;function c(e){var n=e.permalink,r=e.image,i=e.name,o=e.description,c=e.price;return l(s.a,{href:"/product/[permalink]",as:t.env.BACKEND_URL+"/product/".concat(n)},l("a",{className:"mb-5 d-block font-color-black cursor-pointer"},l("div",{className:"mb-3",style:{paddingBottom:"125%",background:'url("'.concat(r,'") center center/cover')}}),l("p",{className:"font-size-subheader mb-2 font-weight-medium"},i),l("p",{className:"mb-2 font-color-medium"},o),l("p",{className:"font-size-subheader font-weight-medium pb-2 borderbottom border-color-black"},c)))}}).call(this,n("8oxB"))},"69ZJ":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI");e.classNames=function(t){return"string"===typeof t?t.split(".").join(" ").trim():t instanceof HTMLElement?t.className:""},e.validateChildren=function(t){var e=!0;return Array.isArray(t)?r.Children.forEach(t,(function(t){r.isValidElement(t)||(e=!1)})):e=r.isValidElement(t),e},e.isReactElement=function(t){return r.isValidElement(t)&&("string"===typeof t.type||"function"===typeof t.type||"object"===typeof t.type)},e.isModuleAvailable=function(t,e){for(var n=!1,r=0;r<t.length;r++)if(t[r].name===e){n=!0;break}return n}},"9Pxm":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"F",(function(){return c})),n.d(e,"n",(function(){return u})),n.d(e,"I",(function(){return a})),n.d(e,"e",(function(){return f})),n.d(e,"E",(function(){return d})),n.d(e,"i",(function(){return h})),n.d(e,"J",(function(){return p})),n.d(e,"K",(function(){return m})),n.d(e,"v",(function(){return g})),n.d(e,"t",(function(){return v})),n.d(e,"M",(function(){return y})),n.d(e,"L",(function(){return b})),n.d(e,"x",(function(){return E})),n.d(e,"w",(function(){return w})),n.d(e,"u",(function(){return N})),n.d(e,"G",(function(){return x})),n.d(e,"h",(function(){return L})),n.d(e,"j",(function(){return O})),n.d(e,"l",(function(){return S})),n.d(e,"o",(function(){return j})),n.d(e,"H",(function(){return C})),n.d(e,"q",(function(){return _})),n.d(e,"p",(function(){return k})),n.d(e,"k",(function(){return R})),n.d(e,"d",(function(){return D})),n.d(e,"A",(function(){return B})),n.d(e,"r",(function(){return P})),n.d(e,"s",(function(){return T})),n.d(e,"B",(function(){return A})),n.d(e,"C",(function(){return q})),n.d(e,"y",(function(){return M})),n.d(e,"z",(function(){return I})),n.d(e,"g",(function(){return U})),n.d(e,"m",(function(){return H})),n.d(e,"f",(function(){return F})),n.d(e,"D",(function(){return V})),n.d(e,"b",(function(){return K}));var r=n("19JU");class i{constructor(t){const e=this;for(let n=0;n<t.length;n+=1)e[n]=t[n];return e.length=t.length,this}}function o(t,e){const n=[];let o=0;if(t&&!e&&t instanceof i)return t;if(t)if("string"===typeof t){let i,s;const l=t.trim();if(l.indexOf("<")>=0&&l.indexOf(">")>=0){let t="div";for(0===l.indexOf("<li")&&(t="ul"),0===l.indexOf("<tr")&&(t="tbody"),0!==l.indexOf("<td")&&0!==l.indexOf("<th")||(t="tr"),0===l.indexOf("<tbody")&&(t="table"),0===l.indexOf("<option")&&(t="select"),s=r.a.createElement(t),s.innerHTML=l,o=0;o<s.childNodes.length;o+=1)n.push(s.childNodes[o])}else for(i=e||"#"!==t[0]||t.match(/[ .<>:~]/)?(e||r.a).querySelectorAll(t.trim()):[r.a.getElementById(t.trim().split("#")[1])],o=0;o<i.length;o+=1)i[o]&&n.push(i[o])}else if(t.nodeType||t===r.b||t===r.a)n.push(t);else if(t.length>0&&t[0].nodeType)for(o=0;o<t.length;o+=1)n.push(t[o]);return new i(n)}function s(t){const e=[];for(let n=0;n<t.length;n+=1)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function l(t){if("undefined"===typeof t)return this;const e=t.split(" ");for(let n=0;n<e.length;n+=1)for(let t=0;t<this.length;t+=1)"undefined"!==typeof this[t]&&"undefined"!==typeof this[t].classList&&this[t].classList.add(e[n]);return this}function c(t){const e=t.split(" ");for(let n=0;n<e.length;n+=1)for(let t=0;t<this.length;t+=1)"undefined"!==typeof this[t]&&"undefined"!==typeof this[t].classList&&this[t].classList.remove(e[n]);return this}function u(t){return!!this[0]&&this[0].classList.contains(t)}function a(t){const e=t.split(" ");for(let n=0;n<e.length;n+=1)for(let t=0;t<this.length;t+=1)"undefined"!==typeof this[t]&&"undefined"!==typeof this[t].classList&&this[t].classList.toggle(e[n]);return this}function f(t,e){if(1===arguments.length&&"string"===typeof t)return this[0]?this[0].getAttribute(t):void 0;for(let n=0;n<this.length;n+=1)if(2===arguments.length)this[n].setAttribute(t,e);else for(const e in t)this[n][e]=t[e],this[n].setAttribute(e,t[e]);return this}function d(t){for(let e=0;e<this.length;e+=1)this[e].removeAttribute(t);return this}function h(t,e){let n;if("undefined"!==typeof e){for(let r=0;r<this.length;r+=1)n=this[r],n.dom7ElementDataStorage||(n.dom7ElementDataStorage={}),n.dom7ElementDataStorage[t]=e;return this}if(n=this[0],n){if(n.dom7ElementDataStorage&&t in n.dom7ElementDataStorage)return n.dom7ElementDataStorage[t];const e=n.getAttribute("data-"+t);return e||void 0}}function p(t){for(let e=0;e<this.length;e+=1){const n=this[e].style;n.webkitTransform=t,n.transform=t}return this}function m(t){"string"!==typeof t&&(t+="ms");for(let e=0;e<this.length;e+=1){const n=this[e].style;n.webkitTransitionDuration=t,n.transitionDuration=t}return this}function g(...t){let[e,n,r,i]=t;function s(t){const e=t.target;if(!e)return;const i=t.target.dom7EventData||[];if(i.indexOf(t)<0&&i.unshift(t),o(e).is(n))r.apply(e,i);else{const t=o(e).parents();for(let e=0;e<t.length;e+=1)o(t[e]).is(n)&&r.apply(t[e],i)}}function l(t){const e=t&&t.target&&t.target.dom7EventData||[];e.indexOf(t)<0&&e.unshift(t),r.apply(this,e)}"function"===typeof t[1]&&([e,r,i]=t,n=void 0),i||(i=!1);const c=e.split(" ");let u;for(let o=0;o<this.length;o+=1){const t=this[o];if(n)for(u=0;u<c.length;u+=1){const e=c[u];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:s}),t.addEventListener(e,s,i)}else for(u=0;u<c.length;u+=1){const e=c[u];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,i)}}return this}function v(...t){let[e,n,r,i]=t;"function"===typeof t[1]&&([e,r,i]=t,n=void 0),i||(i=!1);const o=e.split(" ");for(let s=0;s<o.length;s+=1){const t=o[s];for(let e=0;e<this.length;e+=1){const o=this[e];let s;if(!n&&o.dom7Listeners?s=o.dom7Listeners[t]:n&&o.dom7LiveListeners&&(s=o.dom7LiveListeners[t]),s&&s.length)for(let e=s.length-1;e>=0;e-=1){const n=s[e];r&&n.listener===r||r&&n.listener&&n.listener.dom7proxy&&n.listener.dom7proxy===r?(o.removeEventListener(t,n.proxyListener,i),s.splice(e,1)):r||(o.removeEventListener(t,n.proxyListener,i),s.splice(e,1))}}}return this}function y(...t){const e=t[0].split(" "),n=t[1];for(let o=0;o<e.length;o+=1){const s=e[o];for(let e=0;e<this.length;e+=1){const o=this[e];let l;try{l=new r.b.CustomEvent(s,{detail:n,bubbles:!0,cancelable:!0})}catch(i){l=r.a.createEvent("Event"),l.initEvent(s,!0,!0),l.detail=n}o.dom7EventData=t.filter((t,e)=>e>0),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}}return this}function b(t){const e=["webkitTransitionEnd","transitionend"],n=this;let r;function i(o){if(o.target===this)for(t.call(this,o),r=0;r<e.length;r+=1)n.off(e[r],i)}if(t)for(r=0;r<e.length;r+=1)n.on(e[r],i);return this}function E(t){if(this.length>0){if(t){const t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function w(t){if(this.length>0){if(t){const t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function N(){if(this.length>0){const t=this[0],e=t.getBoundingClientRect(),n=r.a.body,i=t.clientTop||n.clientTop||0,o=t.clientLeft||n.clientLeft||0,s=t===r.b?r.b.scrollY:t.scrollTop,l=t===r.b?r.b.scrollX:t.scrollLeft;return{top:e.top+s-i,left:e.left+l-o}}return null}function x(){return this[0]?r.b.getComputedStyle(this[0],null):{}}function L(t,e){let n;if(1===arguments.length){if("string"!==typeof t){for(n=0;n<this.length;n+=1)for(let e in t)this[n].style[e]=t[e];return this}if(this[0])return r.b.getComputedStyle(this[0],null).getPropertyValue(t)}if(2===arguments.length&&"string"===typeof t){for(n=0;n<this.length;n+=1)this[n].style[t]=e;return this}return this}function O(t){if(!t)return this;for(let e=0;e<this.length;e+=1)if(!1===t.call(this[e],e,this[e]))return this;return this}function S(t){const e=[],n=this;for(let r=0;r<n.length;r+=1)t.call(n[r],r,n[r])&&e.push(n[r]);return new i(e)}function j(t){if("undefined"===typeof t)return this[0]?this[0].innerHTML:void 0;for(let e=0;e<this.length;e+=1)this[e].innerHTML=t;return this}function C(t){if("undefined"===typeof t)return this[0]?this[0].textContent.trim():null;for(let e=0;e<this.length;e+=1)this[e].textContent=t;return this}function _(t){const e=this[0];let n,s;if(!e||"undefined"===typeof t)return!1;if("string"===typeof t){if(e.matches)return e.matches(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);for(n=o(t),s=0;s<n.length;s+=1)if(n[s]===e)return!0;return!1}if(t===r.a)return e===r.a;if(t===r.b)return e===r.b;if(t.nodeType||t instanceof i){for(n=t.nodeType?[t]:t,s=0;s<n.length;s+=1)if(n[s]===e)return!0;return!1}return!1}function k(){let t,e=this[0];if(e){for(t=0;null!==(e=e.previousSibling);)1===e.nodeType&&(t+=1);return t}}function R(t){if("undefined"===typeof t)return this;const e=this.length;let n;return t>e-1?new i([]):t<0?(n=e+t,new i(n<0?[]:[this[n]])):new i([this[t]])}function D(...t){let e;for(let n=0;n<t.length;n+=1){e=t[n];for(let t=0;t<this.length;t+=1)if("string"===typeof e){const n=r.a.createElement("div");for(n.innerHTML=e;n.firstChild;)this[t].appendChild(n.firstChild)}else if(e instanceof i)for(let n=0;n<e.length;n+=1)this[t].appendChild(e[n]);else this[t].appendChild(e)}return this}function B(t){let e,n;for(e=0;e<this.length;e+=1)if("string"===typeof t){const i=r.a.createElement("div");for(i.innerHTML=t,n=i.childNodes.length-1;n>=0;n-=1)this[e].insertBefore(i.childNodes[n],this[e].childNodes[0])}else if(t instanceof i)for(n=0;n<t.length;n+=1)this[e].insertBefore(t[n],this[e].childNodes[0]);else this[e].insertBefore(t,this[e].childNodes[0]);return this}function P(t){return this.length>0?t?this[0].nextElementSibling&&o(this[0].nextElementSibling).is(t)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])}function T(t){const e=[];let n=this[0];if(!n)return new i([]);for(;n.nextElementSibling;){const r=n.nextElementSibling;t?o(r).is(t)&&e.push(r):e.push(r),n=r}return new i(e)}function A(t){if(this.length>0){const e=this[0];return t?e.previousElementSibling&&o(e.previousElementSibling).is(t)?new i([e.previousElementSibling]):new i([]):e.previousElementSibling?new i([e.previousElementSibling]):new i([])}return new i([])}function q(t){const e=[];let n=this[0];if(!n)return new i([]);for(;n.previousElementSibling;){const r=n.previousElementSibling;t?o(r).is(t)&&e.push(r):e.push(r),n=r}return new i(e)}function M(t){const e=[];for(let n=0;n<this.length;n+=1)null!==this[n].parentNode&&(t?o(this[n].parentNode).is(t)&&e.push(this[n].parentNode):e.push(this[n].parentNode));return o(s(e))}function I(t){const e=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)t?o(r).is(t)&&e.push(r):e.push(r),r=r.parentNode}return o(s(e))}function U(t){let e=this;return"undefined"===typeof t?new i([]):(e.is(t)||(e=e.parents(t).eq(0)),e)}function H(t){const e=[];for(let n=0;n<this.length;n+=1){const r=this[n].querySelectorAll(t);for(let t=0;t<r.length;t+=1)e.push(r[t])}return new i(e)}function F(t){const e=[];for(let n=0;n<this.length;n+=1){const r=this[n].childNodes;for(let n=0;n<r.length;n+=1)t?1===r[n].nodeType&&o(r[n]).is(t)&&e.push(r[n]):1===r[n].nodeType&&e.push(r[n])}return new i(s(e))}function V(){for(let t=0;t<this.length;t+=1)this[t].parentNode&&this[t].parentNode.removeChild(this[t]);return this}function K(...t){const e=this;let n,r;for(n=0;n<t.length;n+=1){const i=o(t[n]);for(r=0;r<i.length;r+=1)e[e.length]=i[r],e.length+=1}return e}o.fn=i.prototype,o.Class=i,o.Dom7=i;"resize scroll".split(" ")},Kw3X:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(n("q1tI")),l=o(n("thk6")),c=o(n("Qetd")),u=n("69ZJ"),a=function(t){var e=t.activeSlideKey,n=t.ContainerEl,i=t.children,o=t.containerClass,a=t.getSwiper,f=t.navigation,d=t.noSwiping,h=t.pagination,p=t.parallax,m=t.parallaxEl,g=t.WrapperEl,v=t.wrapperClass,y=t.rebuildOnUpdate,b=t.renderScrollbar,E=t.renderPagination,w=t.renderPrevButton,N=t.renderNextButton,x=t.renderParallax,L=t.rtl,O=t.scrollbar,S=t.shouldSwiperUpdate,j=t.slideClass,C=t.loop,_=s.createRef(),k=s.useRef(null),R=function(){if(!e)return null;var t=0,n=C?1:0;return s.Children.forEach(i,(function(r){s.isValidElement(r)&&(r.key===e&&(t=n),n+=1)})),t},D=function(){null!==k.current&&(k.current.destroy(!0,!0),k.current=null)},B=function(){_.current&&null===k.current&&(k.current=new l.default(_.current,c.default({},t)))};return s.useEffect((function(){B();var t=R();return null!==k.current&&null!==t&&k.current.slideTo(t),function(){return D()}}),[]),s.useEffect((function(){if(null!==k.current){if(y)D(),B();else if(S){null!==k.current&&k.current.update();var t=k.current.slides.length;if(t<=k.current.activeIndex){var e=Math.max(t-1,0);k.current.slideTo(e)}}var n=R();null!==n&&k.current.slideTo(n)}})),s.useEffect((function(){var t;t=k.current,"function"===typeof a&&a(t)}),[k]),i&&n&&g?u.validateChildren(i)?s.default.createElement(n,{className:o,dir:L&&"rtl",ref:_},p&&m&&x&&x(t),s.default.createElement(g,{className:v},s.Children.map(i,(function(t){if(!u.isReactElement(t))return null;var e=[j,t.props.className];return d&&e.push("swiper-no-swiping"),s.cloneElement(t,r(r({},t.props),{className:e.join(" ").trim()}))}))),h&&h.el&&E&&E(t),O&&O.el&&b&&b(t),f&&f.nextEl&&N&&N(t),f&&f.prevEl&&w&&w(t)):(console.warn("Children should be react element or an array of react element!!"),null):null};a.defaultProps={containerClass:"swiper-container",wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",ContainerEl:"div",WrapperEl:"div",renderScrollbar:function(t){var e=t.scrollbar;return e?s.default.createElement("div",{className:u.classNames(e.el)}):null},renderPagination:function(t){var e=t.pagination;return e?s.default.createElement("div",{className:u.classNames(e.el)}):null},renderPrevButton:function(t){var e=t.navigation;return e?s.default.createElement("div",{className:u.classNames(e.prevEl)}):null},renderNextButton:function(t){var e=t.navigation;return e?s.default.createElement("div",{className:u.classNames(e.nextEl)}):null},renderParallax:function(t){var e=t.parallaxEl;return e?s.default.createElement("div",{className:u.classNames(e.el),"data-swiper-parallax":e.value}):null}},a.displayName="ReactIdSwiper",e.default=a},"L+vA":function(t,e,n){"use strict";var r=n("1OyB"),i=n("vuIU"),o=n("Ji7U"),s=n("md7G"),l=n("foSv"),c=n("q1tI"),u=n.n(c),a=n("4HLL"),f=u.a.createElement;function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var i=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var h=function(t){Object(o.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.products,e=/(<([^>]+)>)/gi;return f("div",{className:"row mb-5"},t.map((function(t){var n=t.id,r=t.permalink,i=t.media,o=t.name,s=t.price,l=t.description;return f("div",{key:n,className:"col-6 col-sm-6 col-lg-3"},f(a.a,{id:n,permalink:r,image:i.source,name:o,price:s.formatted_with_symbol,description:l&&l.replace(e,"")}))})))}}]),n}(c.Component);h.defaultProps={products:[]},e.a=h},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),s=n.n(o),l=n("EfCc"),c=n("ZHqB"),u=n("41O1"),a=n("dC16"),f=n("1UgB"),d=n("mNXe"),h=n("0idp"),p=n("hXbQ"),m=i.a.createElement;e.default=function(){return m(l.a,{transparentHeader:!0},m(s.a,null,m("title",null,"Home | AtelierLeyla")),m(f.a,null),m(d.a,null),m(h.a,null),m(p.a,null),m(a.a,null),m(u.a,null),m(c.a,null))}},YVwf:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("Kw3X"));e.default=i.default},hXbQ:function(t,e,n){"use strict";(function(t){var r=n("1OyB"),i=n("vuIU"),o=n("Ji7U"),s=n("md7G"),l=n("foSv"),c=n("q1tI"),u=n.n(c),a=n("YFqc"),f=n.n(a),d=n("L+vA"),h=n("/MKj"),p=u.a.createElement;function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var i=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var g=function(e){Object(o.a)(s,e);var n=m(s);function s(){return Object(r.a)(this,s),n.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this.props.products;return p("div",{className:"custom-container py-5 my-5"},p("div",{className:"d-flex flex-column align-items-center mb-5 pb-4"},p("p",{className:"font-color-medium mb-4"},"Introducing Our Latest Products"),p("p",{className:"text-center font-size-display1 mb-3 font-weight-medium",style:{maxWidth:"32rem"}},"Limited reservations on upcoming products and restocks."),p(f.a,{href:"/collection",as:t.env.BACKEND_URL+"/collection"},p("a",{className:"d-flex py-3 align-items-center font-color-black borderbottom border-color-black"},p("p",{className:"mr-3"},"See more products"),p("img",{src:"/icon/arrow-long-right.svg"})))),p(d.a,{products:e.slice(0,4)}))}}]),s}(c.Component);g.defaultProps={products:[]},e.a=Object(h.b)((function(t){return t}))(g)}).call(this,n("8oxB"))},mNXe:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c}));var r=n("q1tI"),i=n.n(r),o=n("YFqc"),s=n.n(o),l=i.a.createElement;function c(){return l("div",{className:"p-5"},l("p",{className:"font-size-display1 mt-5 text-center mx-auto text-uppercase",style:{maxWidth:"53rem"}},"Moisture is the essence of wetness, and wetness is the essence of beauty."),l("div",{className:"d-flex align-items-center justify-content-center mt-3 mb-5"},l(s.a,{href:"/about",as:t.env.BACKEND_URL+"/about"},l("a",{className:"d-flex py-3 align-items-center font-color-black borderbottom border-color-black"},l("p",{className:"mr-3"},"Find out more"),l("img",{src:"/icon/arrow-long-right.svg"})))))}}).call(this,n("8oxB"))},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",2,1,4,9,0,3,5,6]]]);