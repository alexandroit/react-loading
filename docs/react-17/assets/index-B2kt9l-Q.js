var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o(((e,t)=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(e==null)throw TypeError(`Object.assign cannot be called with null or undefined`);return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String(`abc`);if(e[5]=`de`,Object.getOwnPropertyNames(e)[0]===`5`)return!1;for(var t={},n=0;n<10;n++)t[`_`+String.fromCharCode(n)]=n;if(Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(``)!==`0123456789`)return!1;var r={};return`abcdefghijklmnopqrst`.split(``).forEach(function(e){r[e]=e}),Object.keys(Object.assign({},r)).join(``)===`abcdefghijklmnopqrst`}catch{return!1}}t.exports=o()?Object.assign:function(e,t){for(var o,s=a(e),c,l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]),o)r.call(o,u)&&(s[u]=o[u]);if(n){c=n(o);for(var d=0;d<c.length;d++)i.call(o,c[d])&&(s[c[d]]=o[c[d]])}}return s}})),u=o((e=>{var t=l(),n=60103,r=60106;e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114;var i=60109,a=60110,o=60112;e.Suspense=60113;var s=60115,c=60116;if(typeof Symbol==`function`&&Symbol.for){var u=Symbol.for;n=u(`react.element`),r=u(`react.portal`),e.Fragment=u(`react.fragment`),e.StrictMode=u(`react.strict_mode`),e.Profiler=u(`react.profiler`),i=u(`react.provider`),a=u(`react.context`),o=u(`react.forward_ref`),e.Suspense=u(`react.suspense`),s=u(`react.memo`),c=u(`react.lazy`)}var d=typeof Symbol==`function`&&Symbol.iterator;function f(e){return typeof e!=`object`||!e?null:(e=d&&e[d]||e[`@@iterator`],typeof e==`function`?e:null)}function p(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(p(85));this.updater.enqueueSetState(this,e,t,`setState`)},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function _(){}_.prototype=g.prototype;function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}var y=v.prototype=new _;y.constructor=v,t(y,g.prototype),y.isPureReactComponent=!0;var b={current:null},x=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,a={},o=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=``+t.key),t)x.call(t,i)&&!S.hasOwnProperty(i)&&(a[i]=t[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:b.current}}function ee(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===n}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function E(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function D(e,t,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case n:case r:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+E(c,0):a,Array.isArray(o)?(i=``,e!=null&&(i=e.replace(te,`$&/`)+`/`),D(o,t,i,``,function(e){return e})):o!=null&&(w(o)&&(o=ee(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+e)),t.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,Array.isArray(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+E(s,l);c+=D(s,t,i,u,o)}else if(u=f(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+E(s,l++),c+=D(s,t,i,u,o);else if(s===`object`)throw t=``+e,Error(p(31,t===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:t));return c}function O(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}var re={current:null};function k(){var e=re.current;if(e===null)throw Error(p(321));return e}var A={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};e.Children={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},e.Component=g,e.PureComponent=v,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,e.cloneElement=function(e,r,i){if(e==null)throw Error(p(267,e));var a=t({},e.props),o=e.key,s=e.ref,c=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,c=b.current),r.key!==void 0&&(o=``+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in r)x.call(r,u)&&!S.hasOwnProperty(u)&&(a[u]=r[u]===void 0&&l!==void 0?l[u]:r[u])}var u=arguments.length-2;if(u===1)a.children=i;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:n,type:e.type,key:o,ref:s,props:a,_owner:c}},e.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:i,_context:e},e.Consumer=e},e.createElement=C,e.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:o,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:s,type:e,compare:t===void 0?null:t}},e.useCallback=function(e,t){return k().useCallback(e,t)},e.useContext=function(e,t){return k().useContext(e,t)},e.useDebugValue=function(){},e.useEffect=function(e,t){return k().useEffect(e,t)},e.useImperativeHandle=function(e,t,n){return k().useImperativeHandle(e,t,n)},e.useLayoutEffect=function(e,t){return k().useLayoutEffect(e,t)},e.useMemo=function(e,t){return k().useMemo(e,t)},e.useReducer=function(e,t,n){return k().useReducer(e,t,n)},e.useRef=function(e){return k().useRef(e)},e.useState=function(e){return k().useState(e)},e.version=`17.0.2`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{var t,n,r,i;if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}if(typeof window>`u`||typeof MessageChannel!=`function`){var c=null,l=null,u=function(){if(c!==null)try{var t=e.unstable_now();c(!0,t),c=null}catch(e){throw setTimeout(u,0),e}};t=function(e){c===null?(c=e,setTimeout(u,0)):setTimeout(t,0,e)},n=function(e,t){l=setTimeout(e,t)},r=function(){clearTimeout(l)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,f=window.clearTimeout;if(typeof console<`u`){var p=window.cancelAnimationFrame;typeof window.requestAnimationFrame!=`function`&&console.error(`This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`),typeof p!=`function`&&console.error(`This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`)}var m=!1,h=null,g=-1,_=5,v=0;e.unstable_shouldYield=function(){return e.unstable_now()>=v},i=function(){},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):_=0<e?Math.floor(1e3/e):5};var y=new MessageChannel,b=y.port2;y.port1.onmessage=function(){if(h!==null){var t=e.unstable_now();v=t+_;try{h(!0,t)?b.postMessage(null):(m=!1,h=null)}catch(e){throw b.postMessage(null),e}}else m=!1},t=function(e){h=e,m||(m=!0,b.postMessage(null))},n=function(t,n){g=d(function(){t(e.unstable_now())},n)},r=function(){f(g),g=-1}}function x(e,t){var n=e.length;e.push(t);a:for(;;){var r=n-1>>>1,i=e[r];if(i!==void 0&&0<ee(i,t))e[r]=t,e[n]=i,n=r;else break a}}function S(e){return e=e[0],e===void 0?null:e}function C(e){var t=e[0];if(t!==void 0){var n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,i=e.length;r<i;){var a=2*(r+1)-1,o=e[a],s=a+1,c=e[s];if(o!==void 0&&0>ee(o,n))c!==void 0&&0>ee(c,o)?(e[r]=c,e[s]=n,r=s):(e[r]=o,e[a]=n,r=a);else if(c!==void 0&&0>ee(c,n))e[r]=c,e[s]=n,r=s;else break a}}return t}return null}function ee(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}var w=[],T=[],te=1,E=null,D=3,O=!1,ne=!1,re=!1;function k(e){for(var t=S(T);t!==null;){if(t.callback===null)C(T);else if(t.startTime<=e)C(T),t.sortIndex=t.expirationTime,x(w,t);else break;t=S(T)}}function A(e){if(re=!1,k(e),!ne)if(S(w)!==null)ne=!0,t(ie);else{var r=S(T);r!==null&&n(A,r.startTime-e)}}function ie(t,i){ne=!1,re&&(re=!1,r()),O=!0;var a=D;try{for(k(i),E=S(w);E!==null&&(!(E.expirationTime>i)||t&&!e.unstable_shouldYield());){var o=E.callback;if(typeof o==`function`){E.callback=null,D=E.priorityLevel;var s=o(E.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?E.callback=s:E===S(w)&&C(w),k(i)}else C(w);E=S(w)}if(E!==null)var c=!0;else{var l=S(T);l!==null&&n(A,l.startTime-i),c=!1}return c}finally{E=null,D=a,O=!1}}var ae=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){ne||O||(ne=!0,t(ie))},e.unstable_getCurrentPriorityLevel=function(){return D},e.unstable_getFirstCallbackNode=function(){return S(w)},e.unstable_next=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=ae,e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},e.unstable_scheduleCallback=function(i,a,o){var s=e.unstable_now();switch(typeof o==`object`&&o?(o=o.delay,o=typeof o==`number`&&0<o?s+o:s):o=s,i){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=o+c,i={id:te++,callback:a,priorityLevel:i,startTime:o,expirationTime:c,sortIndex:-1},o>s?(i.sortIndex=o,x(T,i),S(w)===null&&i===S(T)&&(re?r():re=!0,n(A,o-s))):(i.sortIndex=c,x(w,i),ne||O||(ne=!0,t(ie))),i},e.unstable_wrapCallback=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d(),n=l(),r=p();function i(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}if(!t)throw Error(i(227));var a=new Set,o={};function s(e,t){c(e,t),c(e+`Capture`,t)}function c(e,t){for(o[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m=Object.prototype.hasOwnProperty,h={},g={};function _(e){return m.call(g,e)?!0:m.call(h,e)?!1:f.test(e)?g[e]=!0:(h[e]=!0,!1)}function v(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function y(e,t,n,r){if(t==null||v(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var x={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){x[e]=new b(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];x[t]=new b(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){x[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){x[e]=new b(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){x[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){x[e]=new b(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){x[e]=new b(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){x[e]=new b(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){x[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(S,C);x[t]=new b(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(S,C);x[t]=new b(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(S,C);x[t]=new b(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){x[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){x[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var i=x.hasOwnProperty(t)?x[t]:null;(i===null?!r&&!(!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`):i.type===0)||(y(t,n,i,r)&&(n=null),r||i===null?_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var w=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,T=60103,te=60106,E=60107,D=60108,O=60114,ne=60109,re=60110,k=60112,A=60113,ie=60120,ae=60115,j=60116,oe=60121,se=60128,ce=60129,le=60130,ue=60131;if(typeof Symbol==`function`&&Symbol.for){var M=Symbol.for;T=M(`react.element`),te=M(`react.portal`),E=M(`react.fragment`),D=M(`react.strict_mode`),O=M(`react.profiler`),ne=M(`react.provider`),re=M(`react.context`),k=M(`react.forward_ref`),A=M(`react.suspense`),ie=M(`react.suspense_list`),ae=M(`react.memo`),j=M(`react.lazy`),oe=M(`react.block`),M(`react.scope`),se=M(`react.opaque.id`),ce=M(`react.debug_trace_mode`),le=M(`react.offscreen`),ue=M(`react.legacy_hidden`)}var de=typeof Symbol==`function`&&Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var pe;function me(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``}return`
`+pe+e}var he=!1;function ge(e,t){if(!e||he)return``;he=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(e){if(e&&r&&typeof e.stack==`string`){for(var i=e.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s])return`
`+i[o].replace(` at new `,` at `);while(1<=o&&0<=s);break}}}finally{he=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?me(e):``}function _e(e){switch(e.tag){case 5:return me(e.type);case 16:return me(`Lazy`);case 13:return me(`Suspense`);case 19:return me(`SuspenseList`);case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 22:return e=ge(e.type._render,!1),e;case 1:return e=ge(e.type,!0),e;default:return``}}function ve(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case te:return`Portal`;case O:return`Profiler`;case D:return`StrictMode`;case A:return`Suspense`;case ie:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case re:return(e.displayName||`Context`)+`.Consumer`;case ne:return(e._context.displayName||`Context`)+`.Provider`;case k:var t=e.render;return t=t.displayName||t.name||``,e.displayName||(t===``?`ForwardRef`:`ForwardRef(`+t+`)`);case ae:return ve(e.type);case oe:return ve(e._render);case j:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function ye(e){switch(typeof e){case`boolean`:case`number`:case`object`:case`string`:case`undefined`:return e;default:return``}}function be(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function xe(e){var t=be(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Se(e){e._valueTracker||=xe(e)}function Ce(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=be(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function we(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function N(e,t){var r=t.checked;return n({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Te(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=ye(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Ee(e,t){t=t.checked,t!=null&&ee(e,`checked`,t,!1)}function De(e,t){Ee(e,t);var n=ye(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?ke(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&ke(e,t.type,ye(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oe(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function ke(e,t,n){(t!==`number`||we(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}function Ae(e){var n=``;return t.Children.forEach(e,function(e){e!=null&&(n+=e)}),n}function je(e,t){return e=n({children:void 0},t),(t=Ae(t.children))&&(e.children=t),e}function Me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ye(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ne(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return n({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Pe(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(i(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:ye(n)}}function Fe(e,t){var n=ye(t.value),r=ye(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}var Le={html:`http://www.w3.org/1999/xhtml`,mathml:`http://www.w3.org/1998/Math/MathML`,svg:`http://www.w3.org/2000/svg`};function Re(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function ze(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Re(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Be,Ve=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==Le.svg||`innerHTML`in e)e.innerHTML=t;else{for(Be||=document.createElement(`div`),Be.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Be.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function He(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ue={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Ue).forEach(function(e){We.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ue[t]=Ue[e]})});function Ge(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Ue.hasOwnProperty(e)&&Ue[e]?(``+t).trim():t+`px`}function Ke(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ge(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var qe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(e,t){if(t){if(qe[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(!(typeof t.dangerouslySetInnerHTML==`object`&&`__html`in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(i(62))}}function Ye(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}function Xe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ze=null,Qe=null,$e=null;function et(e){if(e=Pi(e)){if(typeof Ze!=`function`)throw Error(i(280));var t=e.stateNode;t&&(t=Ii(t),Ze(e.stateNode,e.type,t))}}function tt(e){Qe?$e?$e.push(e):$e=[e]:Qe=e}function nt(){if(Qe){var e=Qe,t=$e;if($e=Qe=null,et(e),t)for(e=0;e<t.length;e++)et(t[e])}}function rt(e,t){return e(t)}function it(e,t,n,r,i){return e(t,n,r,i)}function at(){}var ot=rt,st=!1,ct=!1;function lt(){(Qe!==null||$e!==null)&&(at(),nt())}function ut(e,t,n){if(ct)return e(t,n);ct=!0;try{return ot(e,t,n)}finally{ct=!1,lt()}}function dt(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ft=!1;if(u)try{var pt={};Object.defineProperty(pt,`passive`,{get:function(){ft=!0}}),window.addEventListener(`test`,pt,pt),window.removeEventListener(`test`,pt,pt)}catch{ft=!1}function mt(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ht=!1,gt=null,_t=!1,vt=null,yt={onError:function(e){ht=!0,gt=e}};function bt(e,t,n,r,i,a,o,s,c){ht=!1,gt=null,mt.apply(yt,arguments)}function xt(e,t,n,r,a,o,s,c,l){if(bt.apply(this,arguments),ht){if(ht){var u=gt;ht=!1,gt=null}else throw Error(i(198));_t||(_t=!0,vt=u)}}function St(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ct(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wt(e){if(St(e)!==e)throw Error(i(188))}function Tt(e){var t=e.alternate;if(!t){if(t=St(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return wt(a),e;if(o===r)return wt(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,r=o;break}if(c===r){s=!0,r=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=a;break}if(c===r){s=!0,r=o,n=a;break}c=c.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function Et(e){if(e=Tt(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Dt(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Ot,kt,At,jt,Mt=!1,Nt=[],Pt=null,Ft=null,It=null,Lt=new Map,Rt=new Map,zt=[],Bt=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function Vt(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Ht(e,t){switch(e){case`focusin`:case`focusout`:Pt=null;break;case`dragenter`:case`dragleave`:Ft=null;break;case`mouseover`:case`mouseout`:It=null;break;case`pointerover`:case`pointerout`:Lt.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Rt.delete(t.pointerId)}}function Ut(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e=Vt(t,n,r,i,a),t!==null&&(t=Pi(t),t!==null&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wt(e,t,n,r,i){switch(t){case`focusin`:return Pt=Ut(Pt,e,t,n,r,i),!0;case`dragenter`:return Ft=Ut(Ft,e,t,n,r,i),!0;case`mouseover`:return It=Ut(It,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Lt.set(a,Ut(Lt.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Rt.set(a,Ut(Rt.get(a)||null,e,t,n,r,i)),!0}return!1}function Gt(e){var t=Ni(e.target);if(t!==null){var n=St(t);if(n!==null){if(t=n.tag,t===13){if(t=Ct(n),t!==null){e.blockedOn=t,jt(e.lanePriority,function(){r.unstable_runWithPriority(e.priority,function(){At(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kt(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Pi(n),t!==null&&kt(t),e.blockedOn=n,!1;t.shift()}return!0}function qt(e,t,n){Kt(e)&&n.delete(t)}function Jt(){for(Mt=!1;0<Nt.length;){var e=Nt[0];if(e.blockedOn!==null){e=Pi(e.blockedOn),e!==null&&Ot(e);break}for(var t=e.targetContainers;0<t.length;){var n=jn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Nt.shift()}Pt!==null&&Kt(Pt)&&(Pt=null),Ft!==null&&Kt(Ft)&&(Ft=null),It!==null&&Kt(It)&&(It=null),Lt.forEach(qt),Rt.forEach(qt)}function Yt(e,t){e.blockedOn===t&&(e.blockedOn=null,Mt||(Mt=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Jt)))}function Xt(e){function t(t){return Yt(t,e)}if(0<Nt.length){Yt(Nt[0],e);for(var n=1;n<Nt.length;n++){var r=Nt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Yt(Pt,e),Ft!==null&&Yt(Ft,e),It!==null&&Yt(It,e),Lt.forEach(t),Rt.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Gt(n),n.blockedOn===null&&zt.shift()}function Zt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Qt={animationend:Zt(`Animation`,`AnimationEnd`),animationiteration:Zt(`Animation`,`AnimationIteration`),animationstart:Zt(`Animation`,`AnimationStart`),transitionend:Zt(`Transition`,`TransitionEnd`)},$t={},en={};u&&(en=document.createElement(`div`).style,`AnimationEvent`in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),`TransitionEvent`in window||delete Qt.transitionend.transition);function tn(e){if($t[e])return $t[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in en)return $t[e]=t[n];return e}var nn=tn(`animationend`),rn=tn(`animationiteration`),an=tn(`animationstart`),on=tn(`transitionend`),sn=new Map,cn=new Map,ln=[`abort`,`abort`,nn,`animationEnd`,rn,`animationIteration`,an,`animationStart`,`canplay`,`canPlay`,`canplaythrough`,`canPlayThrough`,`durationchange`,`durationChange`,`emptied`,`emptied`,`encrypted`,`encrypted`,`ended`,`ended`,`error`,`error`,`gotpointercapture`,`gotPointerCapture`,`load`,`load`,`loadeddata`,`loadedData`,`loadedmetadata`,`loadedMetadata`,`loadstart`,`loadStart`,`lostpointercapture`,`lostPointerCapture`,`playing`,`playing`,`progress`,`progress`,`seeking`,`seeking`,`stalled`,`stalled`,`suspend`,`suspend`,`timeupdate`,`timeUpdate`,on,`transitionEnd`,`waiting`,`waiting`];function un(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i=`on`+(i[0].toUpperCase()+i.slice(1)),cn.set(r,t),sn.set(r,i),s(i,[r])}}var dn=r.unstable_now;dn();var P=8;function fn(e){if(1&e)return P=15,1;if(2&e)return P=14,2;if(4&e)return P=13,4;var t=24&e;return t===0?e&32?(P=11,32):(t=192&e,t===0?e&256?(P=9,256):(t=3584&e,t===0?e&4096?(P=7,4096):(t=4186112&e,t===0?(t=62914560&e,t===0?e&67108864?(P=4,67108864):e&134217728?(P=3,134217728):(t=805306368&e,t===0?1073741824&e?(P=1,1073741824):(P=8,e):(P=2,t)):(P=5,t)):(P=6,t)):(P=8,t)):(P=10,t)):(P=12,t)}function pn(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function mn(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(i(358,e))}}function hn(e,t){var n=e.pendingLanes;if(n===0)return P=0;var r=0,i=0,a=e.expiredLanes,o=e.suspendedLanes,s=e.pingedLanes;if(a!==0)r=a,i=P=15;else if(a=n&134217727,a!==0){var c=a&~o;c===0?(s&=a,s!==0&&(r=fn(s),i=P)):(r=fn(c),i=P)}else a=n&~o,a===0?s!==0&&(r=fn(s),i=P):(r=fn(a),i=P);if(r===0)return 0;if(r=31-xn(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&o)===0){if(fn(t),i<=P)return t;P=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xn(t),i=1<<n,r|=e[n],t&=~i;return r}function gn(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function _n(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=vn(24&~t),e===0?_n(10,t):e;case 10:return e=vn(192&~t),e===0?_n(8,t):e;case 8:return e=vn(3584&~t),e===0&&(e=vn(4186112&~t),e===0&&(e=512)),e;case 2:return t=vn(805306368&~t),t===0&&(t=268435456),t}throw Error(i(358,e))}function vn(e){return e&-e}function yn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bn(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-xn(t),e[t]=n}var xn=Math.clz32?Math.clz32:wn,Sn=Math.log,Cn=Math.LN2;function wn(e){return e===0?32:31-(Sn(e)/Cn|0)|0}var Tn=r.unstable_UserBlockingPriority,En=r.unstable_runWithPriority,Dn=!0;function On(e,t,n,r){st||at();var i=An,a=st;st=!0;try{it(i,e,t,n,r)}finally{(st=a)||lt()}}function kn(e,t,n,r){En(Tn,An.bind(null,e,t,n,r))}function An(e,t,n,r){if(Dn){var i;if((i=(t&4)==0)&&0<Nt.length&&-1<Bt.indexOf(e))e=Vt(null,e,t,n,r),Nt.push(e);else{var a=jn(e,t,n,r);if(a===null)i&&Ht(e,r);else{if(i){if(-1<Bt.indexOf(e)){e=Vt(a,e,t,n,r),Nt.push(e);return}if(Wt(a,e,t,n,r))return;Ht(e,r)}di(e,t,r,null,n)}}}}function jn(e,t,n,r){var i=Xe(r);if(i=Ni(i),i!==null){var a=St(i);if(a===null)i=null;else{var o=a.tag;if(o===13){if(i=Ct(a),i!==null)return i;i=null}else if(o===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return di(e,t,r,i,n),null}var Mn=null,Nn=null,Pn=null;function Fn(){if(Pn)return Pn;var e,t=Nn,n=t.length,r,i=`value`in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Pn=i.slice(e,1<r?1-r:void 0)}function In(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function Rn(){return!1}function zn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Ln:Rn,this.isPropagationStopped=Rn,this}return n(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vn=zn(Bn),Hn=n({},Bn,{view:0,detail:0}),Un=zn(Hn),Wn,Gn,Kn,qn=n({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Kn&&(Kn&&e.type===`mousemove`?(Wn=e.screenX-Kn.screenX,Gn=e.screenY-Kn.screenY):Gn=Wn=0,Kn=e),Wn)},movementY:function(e){return`movementY`in e?e.movementY:Gn}}),Jn=zn(qn),Yn=zn(n({},qn,{dataTransfer:0})),Xn=zn(n({},Hn,{relatedTarget:0})),Zn=zn(n({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Qn=zn(n({},Bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),$n=zn(n({},Bn,{data:0})),er={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},tr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},nr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function rr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nr[e])?!!t[e]:!1}function ir(){return rr}var ar=zn(n({},Hn,{key:function(e){if(e.key){var t=er[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=In(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?tr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type===`keypress`?In(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?In(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),or=zn(n({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),sr=zn(n({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir})),cr=zn(n({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),lr=zn(n({},qn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ur=[9,13,27,32],dr=u&&`CompositionEvent`in window,fr=null;u&&`documentMode`in document&&(fr=document.documentMode);var pr=u&&`TextEvent`in window&&!fr,mr=u&&(!dr||fr&&8<fr&&11>=fr),hr=` `,gr=!1;function _r(e,t){switch(e){case`keyup`:return ur.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function vr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var yr=!1;function br(e,t){switch(e){case`compositionend`:return vr(t);case`keypress`:return t.which===32?(gr=!0,hr):null;case`textInput`:return e=t.data,e===hr&&gr?null:e;default:return null}}function xr(e,t){if(yr)return e===`compositionend`||!dr&&_r(e,t)?(e=Fn(),Pn=Nn=Mn=null,yr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return mr&&t.locale!==`ko`?null:t.data;default:return null}}var Sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Sr[e.type]:t===`textarea`}function wr(e,t,n,r){tt(r),t=pi(t,`onChange`),0<t.length&&(n=new Vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Er=null;function Dr(e){oi(e,0)}function Or(e){if(Ce(Fi(e)))return e}function kr(e,t){if(e===`change`)return t}var Ar=!1;if(u){var jr;if(u){var Mr=`oninput`in document;if(!Mr){var Nr=document.createElement(`div`);Nr.setAttribute(`oninput`,`return;`),Mr=typeof Nr.oninput==`function`}jr=Mr}else jr=!1;Ar=jr&&(!document.documentMode||9<document.documentMode)}function Pr(){Tr&&(Tr.detachEvent(`onpropertychange`,Fr),Er=Tr=null)}function Fr(e){if(e.propertyName===`value`&&Or(Er)){var t=[];if(wr(t,Er,e,Xe(e)),e=Dr,st)e(t);else{st=!0;try{rt(e,t)}finally{st=!1,lt()}}}}function Ir(e,t,n){e===`focusin`?(Pr(),Tr=t,Er=n,Tr.attachEvent(`onpropertychange`,Fr)):e===`focusout`&&Pr()}function Lr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Or(Er)}function Rr(e,t){if(e===`click`)return Or(t)}function zr(e,t){if(e===`input`||e===`change`)return Or(t)}function Br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Vr=typeof Object.is==`function`?Object.is:Br,Hr=Object.prototype.hasOwnProperty;function Ur(e,t){if(Vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Hr.call(t,n[r])||!Vr(e[n[r]],t[n[r]]))return!1;return!0}function Wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gr(e,t){var n=Wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Wr(n)}}function Kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qr(){for(var e=window,t=we();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=we(e.document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Yr=u&&`documentMode`in document&&11>=document.documentMode,Xr=null,Zr=null,Qr=null,$r=!1;function ei(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$r||Xr==null||Xr!==we(r)||(r=Xr,`selectionStart`in r&&Jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Ur(Qr,r)||(Qr=r,r=pi(Zr,`onSelect`),0<r.length&&(t=new Vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Xr)))}un(`cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange`.split(` `),0),un(`drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel`.split(` `),1),un(ln,2);for(var ti=`change selectionchange textInput compositionstart compositionend compositionupdate`.split(` `),ni=0;ni<ti.length;ni++)cn.set(ti[ni],0);c(`onMouseEnter`,[`mouseout`,`mouseover`]),c(`onMouseLeave`,[`mouseout`,`mouseover`]),c(`onPointerEnter`,[`pointerout`,`pointerover`]),c(`onPointerLeave`,[`pointerout`,`pointerover`]),s(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),s(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),s(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),s(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),s(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),s(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ri=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ii=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ri));function ai(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,xt(r,t,void 0,e),e.currentTarget=null}function oi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ai(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ai(i,s,l),a=c}}}if(_t)throw e=vt,_t=!1,vt=null,e}function F(e,t){var n=Li(t),r=e+`__bubble`;n.has(r)||(ui(t,e,2,!1),n.add(r))}var si=`_reactListening`+Math.random().toString(36).slice(2);function ci(e){e[si]||(e[si]=!0,a.forEach(function(t){ii.has(t)||li(t,!1,e,null),li(t,!0,e,null)}))}function li(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=n;if(e===`selectionchange`&&n.nodeType!==9&&(a=n.ownerDocument),r!==null&&!t&&ii.has(e)){if(e!==`scroll`)return;i|=2,a=r}var o=Li(a),s=e+`__`+(t?`capture`:`bubble`);o.has(s)||(t&&(i|=4),ui(a,e,i,t),o.add(s))}function ui(e,t,n,r){var i=cn.get(t);switch(i===void 0?2:i){case 0:i=On;break;case 1:i=kn;break;default:i=An}n=i.bind(null,t,n,e),i=void 0,!ft||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function di(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ni(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}ut(function(){var r=a,i=Xe(n),o=[];a:{var s=sn.get(e);if(s!==void 0){var c=Vn,l=e;switch(e){case`keypress`:if(In(n)===0)break a;case`keydown`:case`keyup`:c=ar;break;case`focusin`:l=`focus`,c=Xn;break;case`focusout`:l=`blur`,c=Xn;break;case`beforeblur`:case`afterblur`:c=Xn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Yn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=sr;break;case nn:case rn:case an:c=Zn;break;case on:c=cr;break;case`scroll`:c=Un;break;case`wheel`:c=lr;break;case`copy`:case`cut`:case`paste`:c=Qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=or}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=dt(p,f),h!=null&&u.push(fi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&!(t&16)&&(l=n.relatedTarget||n.fromElement)&&(Ni(l)||l[ji]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ni(l):null,l!==null&&(d=St(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Jn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=or,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Fi(c),m=l==null?s:Fi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ni(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=mi(m))p++;for(m=0,h=f;h;h=mi(h))m++;for(;0<p-m;)u=mi(u),p--;for(;0<m-p;)f=mi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=mi(u),f=mi(f)}u=null}else u=null;c!==null&&hi(o,s,c,u,!1),l!==null&&d!==null&&hi(o,d,l,u,!0)}}a:{if(s=r?Fi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=kr;else if(Cr(s))if(Ar)g=zr;else{g=Lr;var _=Ir}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Rr);if(g&&=g(e,r)){wr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&ke(s,`number`,s.value)}switch(_=r?Fi(r):window,e){case`focusin`:(Cr(_)||_.contentEditable===`true`)&&(Xr=_,Zr=r,Qr=null);break;case`focusout`:Qr=Zr=Xr=null;break;case`mousedown`:$r=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:$r=!1,ei(o,n,i);break;case`selectionchange`:if(Yr)break;case`keydown`:case`keyup`:ei(o,n,i)}var v;if(dr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else yr?_r(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(mr&&n.locale!==`ko`&&(yr||y!==`onCompositionStart`?y===`onCompositionEnd`&&yr&&(v=Fn()):(Mn=i,Nn=`value`in Mn?Mn.value:Mn.textContent,yr=!0)),_=pi(r,y),0<_.length&&(y=new $n(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=vr(n),v!==null&&(y.data=v)))),(v=pr?br(e,n):xr(e,n))&&(r=pi(r,`onBeforeInput`),0<r.length&&(i=new $n(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}oi(o,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=dt(e,n),a!=null&&r.unshift(fi(e,a,i)),a=dt(e,t),a!=null&&r.push(fi(e,a,i))),e=e.return}return r}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=dt(n,a),c!=null&&o.unshift(fi(n,c,s))):i||(c=dt(n,a),c!=null&&o.push(fi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}function gi(){}var _i=null,vi=null;function yi(e,t){switch(e){case`button`:case`input`:case`select`:case`textarea`:return!!t.autoFocus}return!1}function bi(e,t){return e===`textarea`||e===`option`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout==`function`?setTimeout:void 0,Si=typeof clearTimeout==`function`?clearTimeout:void 0;function Ci(e){e.nodeType===1?e.textContent=``:e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=``))}function wi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Ti(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ei=0;function Di(e){return{$$typeof:se,toString:e,valueOf:e}}var Oi=Math.random().toString(36).slice(2),ki=`__reactFiber$`+Oi,Ai=`__reactProps$`+Oi,ji=`__reactContainer$`+Oi,Mi=`__reactEvents$`+Oi;function Ni(e){var t=e[ki];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ji]||n[ki]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ti(e);e!==null;){if(n=e[ki])return n;e=Ti(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[ki]||e[ji],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ii(e){return e[Ai]||null}function Li(e){var t=e[Mi];return t===void 0&&(t=e[Mi]=new Set),t}var Ri=[],zi=-1;function Bi(e){return{current:e}}function I(e){0>zi||(e.current=Ri[zi],Ri[zi]=null,zi--)}function L(e,t){zi++,Ri[zi]=e.current,e.current=t}var Vi={},R=Bi(Vi),z=Bi(!1),Hi=Vi;function Ui(e,t){var n=e.type.contextTypes;if(!n)return Vi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function B(e){return e=e.childContextTypes,e!=null}function Wi(){I(z),I(R)}function Gi(e,t,n){if(R.current!==Vi)throw Error(i(168));L(R,t),L(z,n)}function Ki(e,t,r){var a=e.stateNode;if(e=t.childContextTypes,typeof a.getChildContext!=`function`)return r;for(var o in a=a.getChildContext(),a)if(!(o in e))throw Error(i(108,ve(t)||`Unknown`,o));return n({},r,a)}function qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vi,Hi=R.current,L(R,e),L(z,z.current),!0}function Ji(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Ki(e,t,Hi),r.__reactInternalMemoizedMergedChildContext=e,I(z),I(R),L(R,e)):I(z),L(z,n)}var Yi=null,Xi=null,Zi=r.unstable_runWithPriority,Qi=r.unstable_scheduleCallback,$i=r.unstable_cancelCallback,ea=r.unstable_shouldYield,ta=r.unstable_requestPaint,na=r.unstable_now,ra=r.unstable_getCurrentPriorityLevel,ia=r.unstable_ImmediatePriority,aa=r.unstable_UserBlockingPriority,oa=r.unstable_NormalPriority,sa=r.unstable_LowPriority,ca=r.unstable_IdlePriority,la={},ua=ta===void 0?function(){}:ta,da=null,fa=null,pa=!1,ma=na(),V=1e4>ma?na:function(){return na()-ma};function ha(){switch(ra()){case ia:return 99;case aa:return 98;case oa:return 97;case sa:return 96;case ca:return 95;default:throw Error(i(332))}}function ga(e){switch(e){case 99:return ia;case 98:return aa;case 97:return oa;case 96:return sa;case 95:return ca;default:throw Error(i(332))}}function _a(e,t){return e=ga(e),Zi(e,t)}function va(e,t,n){return e=ga(e),Qi(e,t,n)}function ya(){if(fa!==null){var e=fa;fa=null,$i(e)}ba()}function ba(){if(!pa&&da!==null){pa=!0;var e=0;try{var t=da;_a(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),da=null}catch(t){throw da!==null&&(da=da.slice(e+1)),Qi(ia,ya),t}finally{pa=!1}}}var xa=w.ReactCurrentBatchConfig;function Sa(e,t){if(e&&e.defaultProps){for(var r in t=n({},t),e=e.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Ca=Bi(null),wa=null,Ta=null,Ea=null;function Da(){Ea=Ta=wa=null}function Oa(e){var t=Ca.current;I(Ca),e.type._context._currentValue=t}function ka(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Aa(e,t){wa=e,Ea=Ta=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rs=!0),e.firstContext=null)}function ja(e,t){if(Ea!==e&&!1!==t&&t!==0)if((typeof t!=`number`||t===1073741823)&&(Ea=e,t=1073741823),t={context:e,observedBits:t,next:null},Ta===null){if(wa===null)throw Error(i(308));Ta=t,wa.dependencies={lanes:0,firstContext:t,responders:null}}else Ta=Ta.next=t;return e._currentValue}var Ma=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Pa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ra(e,t,r,i){var a=e.updateQueue;Ma=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var l=c,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;if(d!==null){d=d.updateQueue;var f=d.lastBaseUpdate;f!==s&&(f===null?d.firstBaseUpdate=u:f.next=u,d.lastBaseUpdate=l)}}if(o!==null){f=a.baseState,s=0,d=u=l=null;do{c=o.lane;var p=o.eventTime;if((i&c)===c){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});a:{var m=e,h=o;switch(c=t,p=r,h.tag){case 1:if(m=h.payload,typeof m==`function`){f=m.call(p,f,c);break a}f=m;break a;case 3:m.flags=m.flags&-4097|64;case 0:if(m=h.payload,c=typeof m==`function`?m.call(p,f,c):m,c==null)break a;f=n({},f,c);break a;case 2:Ma=!0}}o.callback!==null&&(e.flags|=32,c=a.effects,c===null?a.effects=[o]:c.push(o))}else p={eventTime:p,lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=c;if(o=o.next,o===null){if(c=a.shared.pending,c===null)break;o=c.next,c.next=null,a.lastBaseUpdate=c,a.shared.pending=null}}while(1);d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=d,tc|=s,e.lanes=s,e.memoizedState=f}}function za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!=`function`)throw Error(i(191,a));a.call(r)}}}var Ba=new t.Component().refs;function Va(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:n({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ha={isMounted:function(e){return(e=e._reactInternals)?St(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=wc(),i=Tc(e),a=Fa(r,i);a.payload=t,n!=null&&(a.callback=n),Ia(e,a),Ec(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=wc(),i=Tc(e),a=Fa(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),Ia(e,a),Ec(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wc(),r=Tc(e),i=Fa(n,r);i.tag=2,t!=null&&(i.callback=t),Ia(e,i),Ec(e,r,n)}};function Ua(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,a):!0}function Wa(e,t,n){var r=!1,i=Vi,a=t.contextType;return typeof a==`object`&&a?a=ja(a):(i=B(t)?Hi:R.current,r=t.contextTypes,a=(r=r!=null)?Ui(e,i):Vi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ha,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ga(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ha.enqueueReplaceState(t,t.state,null)}function Ka(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ba,Na(e);var a=t.contextType;typeof a==`object`&&a?i.context=ja(a):(a=B(t)?Hi:R.current,i.context=Ui(e,a)),Ra(e,n,i,r),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Va(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Ha.enqueueReplaceState(i,i.state,null),Ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4)}var qa=Array.isArray;function Ja(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===a?t.ref:(t=function(e){var t=r.refs;t===Ba&&(t=r.refs={}),e===null?delete t[a]:t[a]=e},t._stringRef=a,t)}if(typeof e!=`string`)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Ya(e,t){if(e.type!==`textarea`)throw Error(i(31,Object.prototype.toString.call(t)===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:t))}function Xa(e){function t(t,n){if(e){var r=t.lastEffect;r===null?t.firstEffect=t.lastEffect=n:(r.nextEffect=n,t.lastEffect=n),n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=sl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags=2,n):(r=r.index,r<n?(t.flags=2,n):r)):n}function s(t){return e&&t.alternate===null&&(t.flags=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=dl(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){return t!==null&&t.elementType===n.type?(r=a(t,n.props),r.ref=Ja(e,t,n),r.return=e,r):(r=cl(n.type,n.key,n.props,null,e.mode,r),r.ref=Ja(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fl(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ll(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`||typeof t==`number`)return t=dl(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case T:return n=cl(t.type,t.key,t.props,null,e.mode,n),n.ref=Ja(e,null,t),n.return=e,n;case te:return t=fl(t,e.mode,n),t.return=e,t}if(qa(t)||fe(t))return t=ll(t,e.mode,n,null),t.return=e,t;Ya(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case T:return n.key===i?n.type===E?d(e,t,n.props.children,r,i):l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null}if(qa(n)||fe(n))return i===null?d(e,t,n,r,null):null;Ya(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case T:return e=e.get(r.key===null?n:r.key)||null,r.type===E?d(t,e,r.props.children,i,r.key):l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i)}if(qa(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);Ya(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return l}for(d=r(i,d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),l}function g(a,s,c,l){var u=fe(c);if(typeof u!=`function`)throw Error(i(150));if(c=u.call(c),c==null)throw Error(i(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return u}for(h=r(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),u}return function(e,r,o,c){var l=typeof o==`object`&&!!o&&o.type===E&&o.key===null;l&&(o=o.props.children);var u=typeof o==`object`&&!!o;if(u)switch(o.$$typeof){case T:a:{for(u=o.key,l=r;l!==null;){if(l.key===u){switch(l.tag){case 7:if(o.type===E){n(e,l.sibling),r=a(l,o.props.children),r.return=e,e=r;break a}break;default:if(l.elementType===o.type){n(e,l.sibling),r=a(l,o.props),r.ref=Ja(e,l,o),r.return=e,e=r;break a}}n(e,l);break}else t(e,l);l=l.sibling}o.type===E?(r=ll(o.props.children,e.mode,c,o.key),r.return=e,e=r):(c=cl(o.type,o.key,o.props,null,e.mode,c),c.ref=Ja(e,r,o),c.return=e,e=c)}return s(e);case te:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),r=a(r,o.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=fl(o,e.mode,c),r.return=e,e=r}return s(e)}if(typeof o==`string`||typeof o==`number`)return o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,o),r.return=e,e=r):(n(e,r),r=dl(o,e.mode,c),r.return=e,e=r),s(e);if(qa(o))return h(e,r,o,c);if(fe(o))return g(e,r,o,c);if(u&&Ya(e,o),o===void 0&&!l)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(i(152,ve(e.type)||`Component`))}return n(e,r)}}var Za=Xa(!0),Qa=Xa(!1),$a={},eo=Bi($a),to=Bi($a),no=Bi($a);function ro(e){if(e===$a)throw Error(i(174));return e}function io(e,t){switch(L(no,t),L(to,e),L(eo,$a),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ze(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ze(t,e)}I(eo),L(eo,t)}function ao(){I(eo),I(to),I(no)}function oo(e){ro(no.current);var t=ro(eo.current),n=ze(t,e.type);t!==n&&(L(to,e),L(eo,n))}function so(e){to.current===e&&(I(eo),I(to))}var H=Bi(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lo=null,uo=null,fo=!1;function po(e,t){var n=il(5,null,null,0);n.elementType=`DELETED`,n.type=`DELETED`,n.stateNode=t,n.return=e,n.flags=8,e.lastEffect===null?e.firstEffect=e.lastEffect=n:(e.lastEffect.nextEffect=n,e.lastEffect=n)}function mo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,!0);case 13:return!1;default:return!1}}function ho(e){if(fo){var t=uo;if(t){var n=t;if(!mo(e,t)){if(t=wi(n.nextSibling),!t||!mo(e,t)){e.flags=e.flags&-1025|2,fo=!1,lo=e;return}po(lo,n)}lo=e,uo=wi(t.firstChild)}else e.flags=e.flags&-1025|2,fo=!1,lo=e}}function go(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lo=e}function _o(e){if(e!==lo)return!1;if(!fo)return go(e),fo=!0,!1;var t=e.type;if(e.tag!==5||t!==`head`&&t!==`body`&&!bi(t,e.memoizedProps))for(t=uo;t;)po(e,t),t=wi(t.nextSibling);if(go(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){uo=wi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}uo=null}}else uo=lo?wi(e.stateNode.nextSibling):null;return!0}function vo(){uo=lo=null,fo=!1}var yo=[];function bo(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var xo=w.ReactCurrentDispatcher,So=w.ReactCurrentBatchConfig,Co=0,U=null,W=null,G=null,wo=!1,To=!1;function K(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vr(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,a,o){if(Co=o,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?$o:es,e=n(r,a),To){o=0;do{if(To=!1,!(25>o))throw Error(i(301));o+=1,G=W=null,t.updateQueue=null,xo.current=ts,e=n(r,a)}while(To)}if(xo.current=Qo,t=W!==null&&W.next!==null,Co=0,G=W=U=null,wo=!1,t)throw Error(i(300));return e}function Oo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?U.memoizedState=G=e:G=G.next=e,G}function ko(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=G===null?U.memoizedState:G.next;if(t!==null)G=t,W=e;else{if(e===null)throw Error(i(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},G===null?U.memoizedState=G=e:G=G.next=e}return G}function Ao(e,t){return typeof t==`function`?t(e):t}function jo(e){var t=ko(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=W,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}r.baseQueue=a=o,n.pending=null}if(a!==null){a=a.next,r=r.baseState;var c=s=o=null,l=a;do{var u=l.lane;if((Co&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var d={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};c===null?(s=c=d,o=r):c=c.next=d,U.lanes|=u,tc|=u}l=l.next}while(l!==null&&l!==a);c===null?o=r:c.next=s,Vr(r,t.memoizedState)||(rs=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Mo(e){var t=ko(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Vr(o,t.memoizedState)||(rs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function No(e,t,n){var r=t._getVersion;r=r(t._source);var a=t._workInProgressVersionPrimary;if(a===null?(e=e.mutableReadLanes,(e=(Co&e)===e)&&(t._workInProgressVersionPrimary=r,yo.push(t))):e=a===r,e)return n(t._source);throw yo.push(t),Error(i(350))}function Po(e,t,n,r){var a=Y;if(a===null)throw Error(i(349));var o=t._getVersion,s=o(t._source),c=xo.current,l=c.useState(function(){return No(a,t,n)}),u=l[1],d=l[0];l=G;var f=e.memoizedState,p=f.refs,m=p.getSnapshot,h=f.source;f=f.subscribe;var g=U;return e.memoizedState={refs:p,source:t,subscribe:r},c.useEffect(function(){p.getSnapshot=n,p.setSnapshot=u;var e=o(t._source);if(!Vr(s,e)){e=n(t._source),Vr(d,e)||(u(e),e=Tc(g),a.mutableReadLanes|=e&a.pendingLanes),e=a.mutableReadLanes,a.entangledLanes|=e;for(var r=a.entanglements,i=e;0<i;){var c=31-xn(i),l=1<<c;r[c]|=e,i&=~l}}},[n,t,r]),c.useEffect(function(){return r(t._source,function(){var e=p.getSnapshot,n=p.setSnapshot;try{n(e(t._source));var r=Tc(g);a.mutableReadLanes|=r&a.pendingLanes}catch(e){n(function(){throw e})}})},[t,r]),Vr(m,n)&&Vr(h,t)&&Vr(f,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:d},e.dispatch=u=Zo.bind(null,U,e),l.queue=e,l.baseQueue=null,d=No(a,t,n),l.memoizedState=l.baseState=d),d}function Fo(e,t,n){return Po(ko(),e,t,n)}function Io(e){var t=Oo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:e},e=e.dispatch=Zo.bind(null,U,e),[t.memoizedState,e]}function Lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ro(e){var t=Oo();return e={current:e},t.memoizedState=e}function zo(){return ko().memoizedState}function Bo(e,t,n,r){var i=Oo();U.flags|=e,i.memoizedState=Lo(1|t,n,void 0,r===void 0?null:r)}function Vo(e,t,n,r){var i=ko();r=r===void 0?null:r;var a=void 0;if(W!==null){var o=W.memoizedState;if(a=o.destroy,r!==null&&Eo(r,o.deps)){Lo(t,n,a,r);return}}U.flags|=e,i.memoizedState=Lo(1|t,n,a,r)}function Ho(e,t){return Bo(516,4,e,t)}function Uo(e,t){return Vo(516,4,e,t)}function Wo(e,t){return Vo(4,2,e,t)}function Go(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ko(e,t,n){return n=n==null?null:n.concat([e]),Vo(4,2,Go.bind(null,t,e),n)}function qo(){}function Jo(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yo(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xo(e,t){var n=ha();_a(98>n?98:n,function(){e(!0)}),_a(97<n?97:n,function(){var n=So.transition;So.transition=1;try{e(!1),t()}finally{So.transition=n}})}function Zo(e,t,n){var r=wc(),i=Tc(e),a={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=t.pending;if(o===null?a.next=a:(a.next=o.next,o.next=a),t.pending=a,o=e.alternate,e===U||o!==null&&o===U)To=wo=!0;else{if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,n);if(a.eagerReducer=o,a.eagerState=c,Vr(c,s))return}catch{}Ec(e,i,r)}}var Qo={readContext:ja,useCallback:K,useContext:K,useEffect:K,useImperativeHandle:K,useLayoutEffect:K,useMemo:K,useReducer:K,useRef:K,useState:K,useDebugValue:K,useDeferredValue:K,useTransition:K,useMutableSource:K,useOpaqueIdentifier:K,unstable_isNewReconciler:!1},$o={readContext:ja,useCallback:function(e,t){return Oo().memoizedState=[e,t===void 0?null:t],e},useContext:ja,useEffect:Ho,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Bo(4,2,Go.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bo(4,2,e,t)},useMemo:function(e,t){var n=Oo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Zo.bind(null,U,e),[r.memoizedState,e]},useRef:Ro,useState:Io,useDebugValue:qo,useDeferredValue:function(e){var t=Io(e),n=t[0],r=t[1];return Ho(function(){var t=So.transition;So.transition=1;try{r(e)}finally{So.transition=t}},[e]),n},useTransition:function(){var e=Io(!1),t=e[0];return e=Xo.bind(null,e[1]),Ro(e),[e,t]},useMutableSource:function(e,t,n){var r=Oo();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Po(r,e,t,n)},useOpaqueIdentifier:function(){if(fo){var e=!1,t=Di(function(){throw e||(e=!0,n(`r:`+(Ei++).toString(36))),Error(i(355))}),n=Io(t)[1];return!(U.mode&2)&&(U.flags|=516,Lo(5,function(){n(`r:`+(Ei++).toString(36))},void 0,null)),t}return t=`r:`+(Ei++).toString(36),Io(t),t},unstable_isNewReconciler:!1},es={readContext:ja,useCallback:Jo,useContext:ja,useEffect:Uo,useImperativeHandle:Ko,useLayoutEffect:Wo,useMemo:Yo,useReducer:jo,useRef:zo,useState:function(){return jo(Ao)},useDebugValue:qo,useDeferredValue:function(e){var t=jo(Ao),n=t[0],r=t[1];return Uo(function(){var t=So.transition;So.transition=1;try{r(e)}finally{So.transition=t}},[e]),n},useTransition:function(){var e=jo(Ao)[0];return[zo().current,e]},useMutableSource:Fo,useOpaqueIdentifier:function(){return jo(Ao)[0]},unstable_isNewReconciler:!1},ts={readContext:ja,useCallback:Jo,useContext:ja,useEffect:Uo,useImperativeHandle:Ko,useLayoutEffect:Wo,useMemo:Yo,useReducer:Mo,useRef:zo,useState:function(){return Mo(Ao)},useDebugValue:qo,useDeferredValue:function(e){var t=Mo(Ao),n=t[0],r=t[1];return Uo(function(){var t=So.transition;So.transition=1;try{r(e)}finally{So.transition=t}},[e]),n},useTransition:function(){var e=Mo(Ao)[0];return[zo().current,e]},useMutableSource:Fo,useOpaqueIdentifier:function(){return Mo(Ao)[0]},unstable_isNewReconciler:!1},ns=w.ReactCurrentOwner,rs=!1;function q(e,t,n,r){t.child=e===null?Qa(t,null,n,r):Za(t,e.child,n,r)}function is(e,t,n,r,i){n=n.render;var a=t.ref;return Aa(t,i),r=Do(e,t,n,r,a,i),e!==null&&!rs?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,xs(e,t,i)):(t.flags|=1,q(e,t,r,i),t.child)}function as(e,t,n,r,i,a){if(e===null){var o=n.type;return typeof o==`function`&&!al(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,os(e,t,o,r,i,a)):(e=cl(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}return o=e.child,(i&a)===0&&(i=o.memoizedProps,n=n.compare,n=n===null?Ur:n,n(i,r)&&e.ref===t.ref)?xs(e,t,a):(t.flags|=1,e=sl(o,r),e.ref=t.ref,e.return=t,t.child=e)}function os(e,t,n,r,i,a){if(e!==null&&Ur(e.memoizedProps,r)&&e.ref===t.ref)if(rs=!1,(a&i)!==0)e.flags&16384&&(rs=!0);else return t.lanes=e.lanes,xs(e,t,a);return ls(e,t,n,r,a)}function ss(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`||r.mode===`unstable-defer-without-hiding`)if(!(t.mode&4))t.memoizedState={baseLanes:0},Fc(t,n);else if(n&1073741824)t.memoizedState={baseLanes:0},Fc(t,a===null?n:a.baseLanes);else return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Fc(t,e),null;else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),Fc(t,r);return q(e,t,i,n),t.child}function cs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function ls(e,t,n,r,i){var a=B(n)?Hi:R.current;return a=Ui(t,a),Aa(t,i),n=Do(e,t,n,r,a,i),e!==null&&!rs?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,xs(e,t,i)):(t.flags|=1,q(e,t,n,i),t.child)}function us(e,t,n,r,i){if(B(n)){var a=!0;qi(t)}else a=!1;if(Aa(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Wa(t,n,r),Ka(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=ja(l):(l=B(n)?Hi:R.current,l=Ui(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ga(t,o,r,l),Ma=!1;var f=t.memoizedState;o.state=f,Ra(t,r,o,i),c=t.memoizedState,s!==r||f!==c||z.current||Ma?(typeof u==`function`&&(Va(t,n,u,r),c=t.memoizedState),(s=Ma||Ua(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4)):(typeof o.componentDidMount==`function`&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4),r=!1)}else{o=t.stateNode,Pa(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Sa(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=ja(c):(c=B(n)?Hi:R.current,c=Ui(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ga(t,o,r,c),Ma=!1,f=t.memoizedState,o.state=f,Ra(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||z.current||Ma?(typeof p==`function`&&(Va(t,n,p,r),m=t.memoizedState),(l=Ma||Ua(t,n,l,r,f,m,c))?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=256)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),r=!1)}return ds(e,t,n,r,a,i)}function ds(e,t,n,r,i,a){cs(e,t);var o=(t.flags&64)!=0;if(!r&&!o)return i&&Ji(t,n,!1),xs(e,t,a);r=t.stateNode,ns.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Za(t,e.child,null,a),t.child=Za(t,null,s,a)):q(e,t,s,a),t.memoizedState=r.state,i&&Ji(t,n,!0),t.child}function fs(e){var t=e.stateNode;t.pendingContext?Gi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gi(e,t.context,!1),io(e,t.containerInfo)}var ps={dehydrated:null,retryLane:0};function ms(e,t,n){var r=t.pendingProps,i=H.current,a=!1,o;return(o=(t.flags&64)!=0)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!=0),o?(a=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||!0===r.unstable_avoidThisFallback||(i|=1),L(H,i&1),e===null?(r.fallback!==void 0&&ho(t),e=r.children,i=r.fallback,a?(e=hs(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ps,e):typeof r.unstable_expectedLoadTime==`number`?(e=hs(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ps,t.lanes=33554432,e):(n=ul({mode:`visible`,children:e},t.mode,n,null),n.return=t,t.child=n)):(e.memoizedState,a?(r=_s(e,t,r.children,r.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=ps,r):(n=gs(e,t,r.children,n),t.memoizedState=null,n))}function hs(e,t,n,r){var i=e.mode,a=e.child;return t={mode:`hidden`,children:t},!(i&2)&&a!==null?(a.childLanes=0,a.pendingProps=t):a=ul(t,i,0,null),n=ll(n,i,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function gs(e,t,n,r){var i=e.child;return e=i.sibling,n=sl(i,{mode:`visible`,children:n}),!(t.mode&2)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function _s(e,t,n,r,i){var a=t.mode,o=e.child;e=o.sibling;var s={mode:`hidden`,children:n};return!(a&2)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=s,o=n.lastEffect,o===null?t.firstEffect=t.lastEffect=null:(t.firstEffect=n.firstEffect,t.lastEffect=o,o.nextEffect=null)):n=sl(o,s),e===null?(r=ll(r,a,i,null),r.flags|=2):r=sl(e,r),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function vs(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ka(e.return,t)}function ys(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=a)}function bs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(q(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=64;else{if(e!==null&&e.flags&64)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vs(e,n);else if(e.tag===19)vs(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(H,r),!(t.mode&2))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ys(t,!1,i,n,a,t.lastEffect);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ys(t,!0,n,null,a,t.lastEffect);break;case`together`:ys(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function xs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tc|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=sl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Ss=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Cs=function(e,t,r,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,ro(eo.current);var s=null;switch(r){case`input`:a=N(e,a),i=N(e,i),s=[];break;case`option`:a=je(e,a),i=je(e,i),s=[];break;case`select`:a=n({},a,{value:void 0}),i=n({},i,{value:void 0}),s=[];break;case`textarea`:a=Ne(e,a),i=Ne(e,i),s=[];break;default:typeof a.onClick!=`function`&&typeof i.onClick==`function`&&(e.onclick=gi)}Je(r,i);var c;for(d in r=null,a)if(!i.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d===`style`){var l=a[d];for(c in l)l.hasOwnProperty(c)&&(r||={},r[c]=``)}else d!==`dangerouslySetInnerHTML`&&d!==`children`&&d!==`suppressContentEditableWarning`&&d!==`suppressHydrationWarning`&&d!==`autoFocus`&&(o.hasOwnProperty(d)?s||=[]:(s||=[]).push(d,null));for(d in i){var u=i[d];if(l=a?.[d],i.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d===`style`)if(l){for(c in l)!l.hasOwnProperty(c)||u&&u.hasOwnProperty(c)||(r||={},r[c]=``);for(c in u)u.hasOwnProperty(c)&&l[c]!==u[c]&&(r||={},r[c]=u[c])}else r||(s||=[],s.push(d,r)),r=u;else d===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s||=[]).push(d,u)):d===`children`?typeof u!=`string`&&typeof u!=`number`||(s||=[]).push(d,``+u):d!==`suppressContentEditableWarning`&&d!==`suppressHydrationWarning`&&(o.hasOwnProperty(d)?(u!=null&&d===`onScroll`&&F(`scroll`,e),s||l===u||(s=[])):typeof u==`object`&&u&&u.$$typeof===se?u.toString():(s||=[]).push(d,u))}r&&(s||=[]).push(`style`,r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}},ws=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ts(e,t){if(!fo)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Es(e,t,r){var a=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return B(t.type)&&Wi(),null;case 3:return ao(),I(z),I(R),bo(),a=t.stateNode,a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:a.hydrate||(t.flags|=256)),null;case 5:so(t);var s=ro(no.current);if(r=t.type,e!==null&&t.stateNode!=null)Cs(e,t,r,a,s),e.ref!==t.ref&&(t.flags|=128);else{if(!a){if(t.stateNode===null)throw Error(i(166));return null}if(e=ro(eo.current),_o(t)){a=t.stateNode,r=t.type;var c=t.memoizedProps;switch(a[ki]=t,a[Ai]=c,r){case`dialog`:F(`cancel`,a),F(`close`,a);break;case`iframe`:case`object`:case`embed`:F(`load`,a);break;case`video`:case`audio`:for(e=0;e<ri.length;e++)F(ri[e],a);break;case`source`:F(`error`,a);break;case`img`:case`image`:case`link`:F(`error`,a),F(`load`,a);break;case`details`:F(`toggle`,a);break;case`input`:Te(a,c),F(`invalid`,a);break;case`select`:a._wrapperState={wasMultiple:!!c.multiple},F(`invalid`,a);break;case`textarea`:Pe(a,c),F(`invalid`,a)}for(var l in Je(r,c),e=null,c)c.hasOwnProperty(l)&&(s=c[l],l===`children`?typeof s==`string`?a.textContent!==s&&(e=[`children`,s]):typeof s==`number`&&a.textContent!==``+s&&(e=[`children`,``+s]):o.hasOwnProperty(l)&&s!=null&&l===`onScroll`&&F(`scroll`,a));switch(r){case`input`:Se(a),Oe(a,c,!0);break;case`textarea`:Se(a),Ie(a);break;case`select`:case`option`:break;default:typeof c.onClick==`function`&&(a.onclick=gi)}a=e,t.updateQueue=a,a!==null&&(t.flags|=4)}else{switch(l=s.nodeType===9?s:s.ownerDocument,e===Le.html&&(e=Re(r)),e===Le.html?r===`script`?(e=l.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof a.is==`string`?e=l.createElement(r,{is:a.is}):(e=l.createElement(r),r===`select`&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,r),e[ki]=t,e[Ai]=a,Ss(e,t,!1,!1),t.stateNode=e,l=Ye(r,a),r){case`dialog`:F(`cancel`,e),F(`close`,e),s=a;break;case`iframe`:case`object`:case`embed`:F(`load`,e),s=a;break;case`video`:case`audio`:for(s=0;s<ri.length;s++)F(ri[s],e);s=a;break;case`source`:F(`error`,e),s=a;break;case`img`:case`image`:case`link`:F(`error`,e),F(`load`,e),s=a;break;case`details`:F(`toggle`,e),s=a;break;case`input`:Te(e,a),s=N(e,a),F(`invalid`,e);break;case`option`:s=je(e,a);break;case`select`:e._wrapperState={wasMultiple:!!a.multiple},s=n({},a,{value:void 0}),F(`invalid`,e);break;case`textarea`:Pe(e,a),s=Ne(e,a),F(`invalid`,e);break;default:s=a}Je(r,s);var u=s;for(c in u)if(u.hasOwnProperty(c)){var d=u[c];c===`style`?Ke(e,d):c===`dangerouslySetInnerHTML`?(d=d?d.__html:void 0,d!=null&&Ve(e,d)):c===`children`?typeof d==`string`?(r!==`textarea`||d!==``)&&He(e,d):typeof d==`number`&&He(e,``+d):c!==`suppressContentEditableWarning`&&c!==`suppressHydrationWarning`&&c!==`autoFocus`&&(o.hasOwnProperty(c)?d!=null&&c===`onScroll`&&F(`scroll`,e):d!=null&&ee(e,c,d,l))}switch(r){case`input`:Se(e),Oe(e,a,!1);break;case`textarea`:Se(e),Ie(e);break;case`option`:a.value!=null&&e.setAttribute(`value`,``+ye(a.value));break;case`select`:e.multiple=!!a.multiple,c=a.value,c==null?a.defaultValue!=null&&Me(e,!!a.multiple,a.defaultValue,!0):Me(e,!!a.multiple,c,!1);break;default:typeof s.onClick==`function`&&(e.onclick=gi)}yi(r,a)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)ws(e,t,e.memoizedProps,a);else{if(typeof a!=`string`&&t.stateNode===null)throw Error(i(166));r=ro(no.current),ro(eo.current),_o(t)?(a=t.stateNode,r=t.memoizedProps,a[ki]=t,a.nodeValue!==r&&(t.flags|=4)):(a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[ki]=t,t.stateNode=a)}return null;case 13:return I(H),a=t.memoizedState,t.flags&64?(t.lanes=r,t):(a=a!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&_o(t):r=e.memoizedState!==null,a&&!r&&t.mode&2&&(e===null&&!0!==t.memoizedProps.unstable_avoidThisFallback||H.current&1?Q===0&&(Q=3):((Q===0||Q===3)&&(Q=4),Y===null||!(tc&134217727)&&!(nc&134217727)||Ac(Y,Z))),(a||r)&&(t.flags|=4),null);case 4:return ao(),e===null&&ci(t.stateNode.containerInfo),null;case 10:return Oa(t),null;case 17:return B(t.type)&&Wi(),null;case 19:if(I(H),a=t.memoizedState,a===null)return null;if(c=(t.flags&64)!=0,l=a.rendering,l===null)if(c)Ts(a,!1);else{if(Q!==0||e!==null&&e.flags&64)for(e=t.child;e!==null;){if(l=co(e),l!==null){for(t.flags|=64,Ts(a,!1),c=l.updateQueue,c!==null&&(t.updateQueue=c,t.flags|=4),a.lastEffect===null&&(t.firstEffect=null),t.lastEffect=a.lastEffect,a=r,r=t.child;r!==null;)c=r,e=a,c.flags&=2,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null,l=c.alternate,l===null?(c.childLanes=0,c.lanes=e,c.child=null,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=l.childLanes,c.lanes=l.lanes,c.child=l.child,c.memoizedProps=l.memoizedProps,c.memoizedState=l.memoizedState,c.updateQueue=l.updateQueue,c.type=l.type,e=l.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return L(H,H.current&1|2),t.child}e=e.sibling}a.tail!==null&&V()>oc&&(t.flags|=64,c=!0,Ts(a,!1),t.lanes=33554432)}else{if(!c)if(e=co(l),e!==null){if(t.flags|=64,c=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ts(a,!0),a.tail===null&&a.tailMode===`hidden`&&!l.alternate&&!fo)return t=t.lastEffect=a.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*V()-a.renderingStartTime>oc&&r!==1073741824&&(t.flags|=64,c=!0,Ts(a,!1),t.lanes=33554432);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r===null?t.child=l:r.sibling=l,a.last=l)}return a.tail===null?null:(r=a.tail,a.rendering=r,a.tail=r.sibling,a.lastEffect=t.lastEffect,a.renderingStartTime=V(),r.sibling=null,t=H.current,L(H,c?t&1|2:t&1),r);case 23:case 24:return Ic(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&a.mode!==`unstable-defer-without-hiding`&&(t.flags|=4),null}throw Error(i(156,t.tag))}function Ds(e){switch(e.tag){case 1:B(e.type)&&Wi();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(ao(),I(z),I(R),bo(),t=e.flags,t&64)throw Error(i(285));return e.flags=t&-4097|64,e;case 5:return so(e),null;case 13:return I(H),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return I(H),null;case 4:return ao(),null;case 10:return Oa(e),null;case 23:case 24:return Ic(),null;default:return null}}function Os(e,t){try{var n=``,r=t;do n+=_e(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i}}function ks(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var As=typeof WeakMap==`function`?WeakMap:Map;function js(e,t,n){n=Fa(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cc||(cc=!0,lc=r),ks(e,t)},n}function Ms(e,t,n){n=Fa(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return ks(e,t),r(i)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){typeof r!=`function`&&(uc===null?uc=new Set([this]):uc.add(this),ks(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}var Ns=typeof WeakSet==`function`?WeakSet:Set;function Ps(e){var t=e.ref;if(t!==null)if(typeof t==`function`)try{t(null)}catch(t){$c(e,t)}else t.current=null}function Fs(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Sa(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Ci(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(i(163))}function Is(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t===null?null:t.lastEffect,t!==null){e=t=t.next;do{if((e.tag&3)==3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t===null?null:t.lastEffect,t!==null){e=t=t.next;do{var a=e;r=a.next,a=a.tag,a&4&&a&1&&(Xc(n,e),Yc(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Sa(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&za(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}za(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&yi(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Xt(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(i(163))}function Ls(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`;else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty(`display`)?i.display:null,r.style.display=Ge(`display`,i)}}else if(n.tag===6)n.stateNode.nodeValue=t?``:n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Rs(e,t){if(Xi&&typeof Xi.onCommitFiberUnmount==`function`)try{Xi.onCommitFiberUnmount(Yi,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if(r&4)Xc(t,n);else{r=t;try{i()}catch(e){$c(r,e)}}n=n.next}while(n!==e)}break;case 1:if(Ps(t),e=t.stateNode,typeof e.componentWillUnmount==`function`)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){$c(t,e)}break;case 5:Ps(t);break;case 4:Ws(e,t)}}function zs(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Bs(e){return e.tag===5||e.tag===3||e.tag===4}function Vs(e){a:{for(var t=e.return;t!==null;){if(Bs(t))break a;t=t.return}throw Error(i(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(i(161))}n.flags&16&&(He(t,``),n.flags&=-17);a:b:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Bs(n.return)){n=null;break a}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue b;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break a}}r?Hs(e,n,t):Us(e,n,t)}function Hs(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gi));else if(r!==4&&(e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function Us(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}function Ws(e,t){for(var n=t,r=!1,a,o;;){if(!r){r=n.return;a:for(;;){if(r===null)throw Error(i(160));switch(a=r.stateNode,r.tag){case 5:o=!1;break a;case 3:a=a.containerInfo,o=!0;break a;case 4:a=a.containerInfo,o=!0;break a}r=r.return}r=!0}if(n.tag===5||n.tag===6){a:for(var s=e,c=n,l=c;;)if(Rs(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===c)break a;for(;l.sibling===null;){if(l.return===null||l.return===c)break a;l=l.return}l.sibling.return=l.return,l=l.sibling}o?(s=a,c=n.stateNode,s.nodeType===8?s.parentNode.removeChild(c):s.removeChild(c)):a.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){a=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(Rs(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Gs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n===null?null:n.lastEffect,n!==null){var r=n=n.next;do(r.tag&3)==3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var a=e===null?r:e.memoizedProps;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[Ai]=r,e===`input`&&r.type===`radio`&&r.name!=null&&Ee(n,r),Ye(e,a),t=Ye(e,r),a=0;a<o.length;a+=2){var s=o[a],c=o[a+1];s===`style`?Ke(n,c):s===`dangerouslySetInnerHTML`?Ve(n,c):s===`children`?He(n,c):ee(n,s,c,t)}switch(e){case`input`:De(n,r);break;case`textarea`:Fe(n,r);break;case`select`:e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o==null?e!==!!r.multiple&&(r.defaultValue==null?Me(n,!!r.multiple,r.multiple?[]:``,!1):Me(n,!!r.multiple,r.defaultValue,!0)):Me(n,!!r.multiple,o,!1)}}}return;case 6:if(t.stateNode===null)throw Error(i(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Xt(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(ac=V(),Ls(t.child,!0)),Ks(t);return;case 19:Ks(t);return;case 17:return;case 23:case 24:Ls(t,t.memoizedState!==null);return}throw Error(i(163))}function Ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ns),t.forEach(function(t){var r=tl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function qs(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Js=Math.ceil,Ys=w.ReactCurrentDispatcher,Xs=w.ReactCurrentOwner,J=0,Y=null,X=null,Z=0,Zs=0,Qs=Bi(0),Q=0,$s=null,ec=0,tc=0,nc=0,rc=0,ic=null,ac=0,oc=1/0;function sc(){oc=V()+500}var $=null,cc=!1,lc=null,uc=null,dc=!1,fc=null,pc=90,mc=[],hc=[],gc=null,_c=0,vc=null,yc=-1,bc=0,xc=0,Sc=null,Cc=!1;function wc(){return J&48?V():yc===-1?yc=V():yc}function Tc(e){if(e=e.mode,!(e&2))return 1;if(!(e&4))return ha()===99?1:2;if(bc===0&&(bc=ec),xa.transition!==0){xc!==0&&(xc=ic===null?0:ic.pendingLanes),e=bc;var t=4186112&~xc;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=ha(),J&4&&e===98?e=_n(12,bc):(e=pn(e),e=_n(e,bc)),e}function Ec(e,t,n){if(50<_c)throw _c=0,vc=null,Error(i(185));if(e=Dc(e,t),e===null)return null;bn(e,t,n),e===Y&&(nc|=t,Q===4&&Ac(e,Z));var r=ha();t===1?J&8&&!(J&48)?jc(e):(Oc(e,n),J===0&&(sc(),ya())):(!(J&4)||r!==98&&r!==99||(gc===null?gc=new Set([e]):gc.add(e)),Oc(e,n)),ic=e}function Dc(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Oc(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-xn(o),c=1<<s,l=a[s];if(l===-1){if((c&r)===0||(c&i)!==0){l=t,fn(c);var u=P;a[s]=10<=u?l+250:6<=u?l+5e3:-1}}else l<=t&&(e.expiredLanes|=c);o&=~c}if(r=hn(e,e===Y?Z:0),t=P,r===0)n!==null&&(n!==la&&$i(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==la&&$i(n)}t===15?(n=jc.bind(null,e),da===null?(da=[n],fa=Qi(ia,ba)):da.push(n),n=la):t===14?n=va(99,jc.bind(null,e)):(n=mn(t),n=va(n,kc.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function kc(e){if(yc=-1,xc=bc=0,J&48)throw Error(i(327));var t=e.callbackNode;if(Jc()&&e.callbackNode!==t)return null;var n=hn(e,e===Y?Z:0);if(n===0)return null;var r=n,a=J;J|=16;var o=zc();(Y!==e||Z!==r)&&(sc(),Lc(e,r));do try{Hc();break}catch(t){Rc(e,t)}while(1);if(Da(),Ys.current=o,J=a,X===null?(Y=null,Z=0,r=Q):r=0,(ec&nc)!==0)Lc(e,0);else if(r!==0){if(r===2&&(J|=64,e.hydrate&&(e.hydrate=!1,Ci(e.containerInfo)),n=gn(e),n!==0&&(r=Bc(e,n))),r===1)throw t=$s,Lc(e,0),Ac(e,n),Oc(e,V()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(i(345));case 2:Gc(e);break;case 3:if(Ac(e,n),(n&62914560)===n&&(r=ac+500-V(),10<r)){if(hn(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){wc(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=xi(Gc.bind(null,e),r);break}Gc(e);break;case 4:if(Ac(e,n),(n&4186112)===n)break;for(r=e.eventTimes,a=-1;0<n;){var s=31-xn(n);o=1<<s,s=r[s],s>a&&(a=s),n&=~o}if(n=a,n=V()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Js(n/1960))-n,10<n){e.timeoutHandle=xi(Gc.bind(null,e),n);break}Gc(e);break;case 5:Gc(e);break;default:throw Error(i(329))}}return Oc(e,V()),e.callbackNode===t?kc.bind(null,e):null}function Ac(e,t){for(t&=~rc,t&=~nc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xn(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if(J&48)throw Error(i(327));if(Jc(),e===Y&&(e.expiredLanes&Z)!==0){var t=Z,n=Bc(e,t);(ec&nc)!==0&&(t=hn(e,t),n=Bc(e,t))}else t=hn(e,0),n=Bc(e,t);if(e.tag!==0&&n===2&&(J|=64,e.hydrate&&(e.hydrate=!1,Ci(e.containerInfo)),t=gn(e),t!==0&&(n=Bc(e,t))),n===1)throw n=$s,Lc(e,0),Ac(e,t),Oc(e,V()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gc(e),Oc(e,V()),null}function Mc(){if(gc!==null){var e=gc;gc=null,e.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Oc(e,V())})}ya()}function Nc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(sc(),ya())}}function Pc(e,t){var n=J;J&=-2,J|=8;try{return e(t)}finally{J=n,J===0&&(sc(),ya())}}function Fc(e,t){L(Qs,Zs),Zs|=t,ec|=t}function Ic(){Zs=Qs.current,I(Qs)}function Lc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Si(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wi();break;case 3:ao(),I(z),I(R),bo();break;case 5:so(r);break;case 4:ao();break;case 13:I(H);break;case 19:I(H);break;case 10:Oa(r);break;case 23:case 24:Ic()}n=n.return}Y=e,X=sl(e.current,null),Z=Zs=ec=t,Q=0,$s=null,rc=nc=tc=0}function Rc(e,t){do{var n=X;try{if(Da(),xo.current=Qo,wo){for(var r=U.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wo=!1}if(Co=0,G=W=U=null,To=!1,Xs.current=null,n===null||n.return===null){Q=1,$s=t,X=null;break}a:{var a=e,o=n.return,s=n,c=t;if(t=Z,s.flags|=2048,s.firstEffect=s.lastEffect=null,typeof c==`object`&&c&&typeof c.then==`function`){var l=c;if(!(s.mode&2)){var u=s.alternate;u?(s.updateQueue=u.updateQueue,s.memoizedState=u.memoizedState,s.lanes=u.lanes):(s.updateQueue=null,s.memoizedState=null)}var d=(H.current&1)!=0,f=o;do{var p;if(p=f.tag===13){var m=f.memoizedState;if(m!==null)p=m.dehydrated!==null;else{var h=f.memoizedProps;p=h.fallback===void 0?!1:!0===h.unstable_avoidThisFallback?!d:!0}}if(p){var g=f.updateQueue;if(g===null){var _=new Set;_.add(l),f.updateQueue=_}else g.add(l);if(!(f.mode&2)){if(f.flags|=64,s.flags|=16384,s.flags&=-2981,s.tag===1)if(s.alternate===null)s.tag=17;else{var v=Fa(-1,1);v.tag=2,Ia(s,v)}s.lanes|=1;break a}c=void 0,s=t;var y=a.pingCache;if(y===null?(y=a.pingCache=new As,c=new Set,y.set(l,c)):(c=y.get(l),c===void 0&&(c=new Set,y.set(l,c))),!c.has(s)){c.add(s);var b=el.bind(null,a,l,s);l.then(b,b)}f.flags|=4096,f.lanes=t;break a}f=f.return}while(f!==null);c=Error((ve(s.type)||`A React component`)+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Q!==5&&(Q=2),c=Os(c,s),f=o;do{switch(f.tag){case 3:a=c,f.flags|=4096,t&=-t,f.lanes|=t;var x=js(f,a,t);La(f,x);break a;case 1:a=c;var S=f.type,C=f.stateNode;if(!(f.flags&64)&&(typeof S.getDerivedStateFromError==`function`||C!==null&&typeof C.componentDidCatch==`function`&&(uc===null||!uc.has(C)))){f.flags|=4096,t&=-t,f.lanes|=t;var ee=Ms(f,a,t);La(f,ee);break a}}f=f.return}while(f!==null)}Wc(n)}catch(e){t=e,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function zc(){var e=Ys.current;return Ys.current=Qo,e===null?Qo:e}function Bc(e,t){var n=J;J|=16;var r=zc();Y===e&&Z===t||Lc(e,t);do try{Vc();break}catch(t){Rc(e,t)}while(1);if(Da(),J=n,Ys.current=r,X!==null)throw Error(i(261));return Y=null,Z=0,Q}function Vc(){for(;X!==null;)Uc(X)}function Hc(){for(;X!==null&&!ea();)Uc(X)}function Uc(e){var t=nl(e.alternate,e,Zs);e.memoizedProps=e.pendingProps,t===null?Wc(e):X=t,Xs.current=null}function Wc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&2048){if(n=Ds(t),n!==null){n.flags&=2047,X=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}else{if(n=Es(n,t,Zs),n!==null){X=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||Zs&1073741824||!(n.mode&4)){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&!(e.flags&2048)&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect===null?e.firstEffect=t:e.lastEffect.nextEffect=t,e.lastEffect=t))}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Q===0&&(Q=5)}function Gc(e){var t=ha();return _a(99,Kc.bind(null,e,t)),null}function Kc(e,t){do Jc();while(fc!==null);if(J&48)throw Error(i(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null;var r=n.lanes|n.childLanes,a=r,o=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;for(var s=e.eventTimes,c=e.expirationTimes;0<o;){var l=31-xn(o),u=1<<l;a[l]=0,s[l]=-1,c[l]=-1,o&=~u}if(gc!==null&&!(r&24)&&gc.has(e)&&gc.delete(e),e===Y&&(X=Y=null,Z=0),1<n.flags?n.lastEffect===null?r=n:(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n.firstEffect,r!==null){if(a=J,J|=32,Xs.current=null,_i=Dn,s=qr(),Jr(s)){if(`selectionStart`in s)c={start:s.selectionStart,end:s.selectionEnd};else a:if(c=(c=s.ownerDocument)&&c.defaultView||window,(u=c.getSelection&&c.getSelection())&&u.rangeCount!==0){c=u.anchorNode,o=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{c.nodeType,l.nodeType}catch{c=null;break a}var d=0,f=-1,p=-1,m=0,h=0,g=s,_=null;b:for(;;){for(var v;g!==c||o!==0&&g.nodeType!==3||(f=d+o),g!==l||u!==0&&g.nodeType!==3||(p=d+u),g.nodeType===3&&(d+=g.nodeValue.length),(v=g.firstChild)!==null;)_=g,g=v;for(;;){if(g===s)break b;if(_===c&&++m===o&&(f=d),_===l&&++h===u&&(p=d),(v=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=v}c=f===-1||p===-1?null:{start:f,end:p}}else c=null;c||={start:0,end:0}}else c=null;vi={focusedElem:s,selectionRange:c},Dn=!1,Sc=null,Cc=!1,$=r;do try{qc()}catch(e){if($===null)throw Error(i(330));$c($,e),$=$.nextEffect}while($!==null);Sc=null,$=r;do try{for(s=e;$!==null;){var y=$.flags;if(y&16&&He($.stateNode,``),y&128){var b=$.alternate;if(b!==null){var x=b.ref;x!==null&&(typeof x==`function`?x(null):x.current=null)}}switch(y&1038){case 2:Vs($),$.flags&=-3;break;case 6:Vs($),$.flags&=-3,Gs($.alternate,$);break;case 1024:$.flags&=-1025;break;case 1028:$.flags&=-1025,Gs($.alternate,$);break;case 4:Gs($.alternate,$);break;case 8:c=$,Ws(s,c);var S=c.alternate;zs(c),S!==null&&zs(S)}$=$.nextEffect}}catch(e){if($===null)throw Error(i(330));$c($,e),$=$.nextEffect}while($!==null);if(x=vi,b=qr(),y=x.focusedElem,s=x.selectionRange,b!==y&&y&&y.ownerDocument&&Kr(y.ownerDocument.documentElement,y)){for(s!==null&&Jr(y)&&(b=s.start,x=s.end,x===void 0&&(x=b),(`selectionStart`in y)?(y.selectionStart=b,y.selectionEnd=Math.min(x,y.value.length)):(x=(b=y.ownerDocument||document)&&b.defaultView||window,x.getSelection&&(x=x.getSelection(),c=y.textContent.length,S=Math.min(s.start,c),s=s.end===void 0?S:Math.min(s.end,c),!x.extend&&S>s&&(c=s,s=S,S=c),c=Gr(y,S),o=Gr(y,s),c&&o&&(x.rangeCount!==1||x.anchorNode!==c.node||x.anchorOffset!==c.offset||x.focusNode!==o.node||x.focusOffset!==o.offset)&&(b=b.createRange(),b.setStart(c.node,c.offset),x.removeAllRanges(),S>s?(x.addRange(b),x.extend(o.node,o.offset)):(b.setEnd(o.node,o.offset),x.addRange(b)))))),b=[],x=y;x=x.parentNode;)x.nodeType===1&&b.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof y.focus==`function`&&y.focus(),y=0;y<b.length;y++)x=b[y],x.element.scrollLeft=x.left,x.element.scrollTop=x.top}Dn=!!_i,vi=_i=null,e.current=n,$=r;do try{for(y=e;$!==null;){var C=$.flags;if(C&36&&Is(y,$.alternate,$),C&128){b=void 0;var ee=$.ref;if(ee!==null){var w=$.stateNode;switch($.tag){case 5:b=w;break;default:b=w}typeof ee==`function`?ee(b):ee.current=b}}$=$.nextEffect}}catch(e){if($===null)throw Error(i(330));$c($,e),$=$.nextEffect}while($!==null);$=null,ua(),J=a}else e.current=n;if(dc)dc=!1,fc=e,pc=t;else for($=r;$!==null;)t=$.nextEffect,$.nextEffect=null,$.flags&8&&(C=$,C.sibling=null,C.stateNode=null),$=t;if(r=e.pendingLanes,r===0&&(uc=null),r===1?e===vc?_c++:(_c=0,vc=e):_c=0,n=n.stateNode,Xi&&typeof Xi.onCommitFiberRoot==`function`)try{Xi.onCommitFiberRoot(Yi,n,void 0,(n.current.flags&64)==64)}catch{}if(Oc(e,V()),cc)throw cc=!1,e=lc,lc=null,e;return J&8||ya(),null}function qc(){for(;$!==null;){var e=$.alternate;Cc||Sc===null||($.flags&8?Dt($,Sc)&&(Cc=!0):$.tag===13&&qs(e,$)&&Dt($,Sc)&&(Cc=!0));var t=$.flags;t&256&&Fs(e,$),!(t&512)||dc||(dc=!0,va(97,function(){return Jc(),null})),$=$.nextEffect}}function Jc(){if(pc!==90){var e=97<pc?97:pc;return pc=90,_a(e,Zc)}return!1}function Yc(e,t){mc.push(t,e),dc||(dc=!0,va(97,function(){return Jc(),null}))}function Xc(e,t){hc.push(t,e),dc||(dc=!0,va(97,function(){return Jc(),null}))}function Zc(){if(fc===null)return!1;var e=fc;if(fc=null,J&48)throw Error(i(331));var t=J;J|=32;var n=hc;hc=[];for(var r=0;r<n.length;r+=2){var a=n[r],o=n[r+1],s=a.destroy;if(a.destroy=void 0,typeof s==`function`)try{s()}catch(e){if(o===null)throw Error(i(330));$c(o,e)}}for(n=mc,mc=[],r=0;r<n.length;r+=2){a=n[r],o=n[r+1];try{var c=a.create;a.destroy=c()}catch(e){if(o===null)throw Error(i(330));$c(o,e)}}for(c=e.current.firstEffect;c!==null;)e=c.nextEffect,c.nextEffect=null,c.flags&8&&(c.sibling=null,c.stateNode=null),c=e;return J=t,ya(),!0}function Qc(e,t,n){t=Os(n,t),t=js(e,t,1),Ia(e,t),t=wc(),e=Dc(e,1),e!==null&&(bn(e,1,t),Oc(e,t))}function $c(e,t){if(e.tag===3)Qc(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Qc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(uc===null||!uc.has(r))){e=Os(t,e);var i=Ms(n,e,1);if(Ia(n,i),i=wc(),n=Dc(n,1),n!==null)bn(n,1,i),Oc(n,i);else if(typeof r.componentDidCatch==`function`&&(uc===null||!uc.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function el(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=wc(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Z&n)===n&&(Q===4||Q===3&&(Z&62914560)===Z&&500>V()-ac?Lc(e,0):rc|=n),Oc(e,t)}function tl(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,t&2?t&4?(bc===0&&(bc=ec),t=vn(62914560&~bc),t===0&&(t=4194304)):t=ha()===99?1:2:t=1),n=wc(),e=Dc(e,t),e!==null&&(bn(e,t,n),Oc(e,n))}var nl=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||z.current)rs=!0;else if((n&r)!==0)rs=!!(e.flags&16384);else{switch(rs=!1,t.tag){case 3:fs(t),vo();break;case 5:oo(t);break;case 1:B(t.type)&&qi(t);break;case 4:io(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var a=t.type._context;L(Ca,a._currentValue),a._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)===0?(L(H,H.current&1),t=xs(e,t,n),t===null?null:t.sibling):ms(e,t,n);L(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&64){if(r)return bs(e,t,n);t.flags|=64}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),L(H,H.current),r)break;return null;case 23:case 24:return t.lanes=0,ss(e,t,n)}return xs(e,t,n)}else rs=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=Ui(t,R.current),Aa(t,n),a=Do(null,t,r,e,a,n),t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,B(r)){var o=!0;qi(t)}else o=!1;t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Na(t);var s=r.getDerivedStateFromProps;typeof s==`function`&&Va(t,r,s,e),a.updater=Ha,t.stateNode=a,a._reactInternals=t,Ka(t,r,e,n),t=ds(null,t,r,!0,o,n)}else t.tag=0,q(null,t,a,n),t=t.child;return t;case 16:a=t.elementType;a:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=ol(a),e=Sa(a,e),o){case 0:t=ls(null,t,a,e,n);break a;case 1:t=us(null,t,a,e,n);break a;case 11:t=is(null,t,a,e,n);break a;case 14:t=as(null,t,a,Sa(a.type,e),r,n);break a}throw Error(i(306,a,``))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Sa(r,a),ls(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Sa(r,a),us(e,t,r,a,n);case 3:if(fs(t),r=t.updateQueue,e===null||r===null)throw Error(i(282));if(r=t.pendingProps,a=t.memoizedState,a=a===null?null:a.element,Pa(e,t),Ra(t,r,null,n),r=t.memoizedState.element,r===a)vo(),t=xs(e,t,n);else{if(a=t.stateNode,(o=a.hydrate)&&(uo=wi(t.stateNode.containerInfo.firstChild),lo=t,o=fo=!0),o){if(e=a.mutableSourceEagerHydrationData,e!=null)for(a=0;a<e.length;a+=2)o=e[a],o._workInProgressVersionPrimary=e[a+1],yo.push(o);for(n=Qa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else q(e,t,r,n),vo();t=t.child}return t;case 5:return oo(t),e===null&&ho(t),r=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,bi(r,a)?s=null:o!==null&&bi(r,o)&&(t.flags|=16),cs(e,t),q(e,t,s,n),t.child;case 6:return e===null&&ho(t),null;case 13:return ms(e,t,n);case 4:return io(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Za(t,null,r,n):q(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Sa(r,a),is(e,t,r,a,n);case 7:return q(e,t,t.pendingProps,n),t.child;case 8:return q(e,t,t.pendingProps.children,n),t.child;case 12:return q(e,t,t.pendingProps.children,n),t.child;case 10:a:{r=t.type._context,a=t.pendingProps,s=t.memoizedProps,o=a.value;var c=t.type._context;if(L(Ca,c._currentValue),c._currentValue=o,s!==null)if(c=s.value,o=Vr(c,o)?0:(typeof r._calculateChangedBits==`function`?r._calculateChangedBits(c,o):1073741823)|0,o===0){if(s.children===a.children&&!z.current){t=xs(e,t,n);break a}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var l=c.dependencies;if(l!==null){s=c.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&o)!==0){c.tag===1&&(u=Fa(-1,n&-n),u.tag=2,Ia(c,u)),c.lanes|=n,u=c.alternate,u!==null&&(u.lanes|=n),ka(c.return,n),l.lanes|=n;break}u=u.next}}else s=c.tag===10&&c.type===t.type?null:c.child;if(s!==null)s.return=c;else for(s=c;s!==null;){if(s===t){s=null;break}if(c=s.sibling,c!==null){c.return=s.return,s=c;break}s=s.return}c=s}q(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps,r=o.children,Aa(t,n),a=ja(a,o.unstable_observedBits),r=r(a),t.flags|=1,q(e,t,r,n),t.child;case 14:return a=t.type,o=Sa(a,t.pendingProps),o=Sa(a.type,o),as(e,t,a,o,r,n);case 15:return os(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Sa(r,a),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,B(r)?(e=!0,qi(t)):e=!1,Aa(t,n),Wa(t,r,a),Ka(t,r,a,n),ds(null,t,r,!0,e,n);case 19:return bs(e,t,n);case 23:return ss(e,t,n);case 24:return ss(e,t,n)}throw Error(i(156,t.tag))};function rl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function il(e,t,n,r){return new rl(e,t,n,r)}function al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ol(e){if(typeof e==`function`)return al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===k)return 11;if(e===ae)return 14}return 2}function sl(e,t){var n=e.alternate;return n===null?(n=il(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function cl(e,t,n,r,a,o){var s=2;if(r=e,typeof e==`function`)al(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return ll(n.children,a,o,t);case ce:s=8,a|=16;break;case D:s=8,a|=1;break;case O:return e=il(12,n,t,a|8),e.elementType=O,e.type=O,e.lanes=o,e;case A:return e=il(13,n,t,a),e.type=A,e.elementType=A,e.lanes=o,e;case ie:return e=il(19,n,t,a),e.elementType=ie,e.lanes=o,e;case le:return ul(n,a,o,t);case ue:return e=il(24,n,t,a),e.elementType=ue,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case ne:s=10;break a;case re:s=9;break a;case k:s=11;break a;case ae:s=14;break a;case j:s=16,r=null;break a;case oe:s=22;break a}throw Error(i(130,e==null?e:typeof e,``))}return t=il(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ll(e,t,n,r){return e=il(7,e,r,t),e.lanes=n,e}function ul(e,t,n,r){return e=il(23,e,r,t),e.elementType=le,e.lanes=n,e}function dl(e,t,n){return e=il(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=il(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pl(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.mutableSourceEagerHydrationData=null}function ml(e,t,n,r){var a=t.current,o=wc(),s=Tc(a);a:if(n){n=n._reactInternals;b:{if(St(n)!==n||n.tag!==1)throw Error(i(170));var c=n;do{switch(c.tag){case 3:c=c.stateNode.context;break b;case 1:if(B(c.type)){c=c.stateNode.__reactInternalMemoizedMergedChildContext;break b}}c=c.return}while(c!==null);throw Error(i(171))}if(n.tag===1){var l=n.type;if(B(l)){n=Ki(n,l,c);break a}}n=c}else n=Vi;return t.context===null?t.context=n:t.pendingContext=n,t=Fa(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Ia(a,t),Ec(a,s,o),s}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _l(e,t){gl(e,t),(e=e.alternate)&&gl(e,t)}function vl(){return null}function yl(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new pl(e,t,n!=null&&!0===n.hydrate),t=il(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Na(t),e[ji]=n.current,ci(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}yl.prototype.render=function(e){ml(e,this._internalRoot,null,null)},yl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;ml(null,e,null,function(){t[ji]=null})};function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function xl(e,t){if(t||=(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,!(!t||t.nodeType!==1||!t.hasAttribute(`data-reactroot`))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new yl(e,0,t?{hydrate:!0}:void 0)}function Sl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a._internalRoot;if(typeof i==`function`){var s=i;i=function(){var e=hl(o);s.call(e)}}ml(t,o,e,i)}else{if(a=n._reactRootContainer=xl(n,r),o=a._internalRoot,typeof i==`function`){var c=i;i=function(){var e=hl(o);c.call(e)}}Pc(function(){ml(t,o,e,i)})}return hl(o)}Ot=function(e){e.tag===13&&(Ec(e,4,wc()),_l(e,4))},kt=function(e){e.tag===13&&(Ec(e,67108864,wc()),_l(e,67108864))},At=function(e){if(e.tag===13){var t=wc(),n=Tc(e);Ec(e,n,t),_l(e,n)}},jt=function(e,t){return t()},Ze=function(e,t,n){switch(t){case`input`:if(De(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ii(r);if(!a)throw Error(i(90));Ce(r),De(r,a)}}}break;case`textarea`:Fe(e,n);break;case`select`:t=n.value,t!=null&&Me(e,!!n.multiple,t,!1)}},rt=Nc,it=function(e,t,n,r,i){var a=J;J|=4;try{return _a(98,e.bind(null,t,n,r,i))}finally{J=a,J===0&&(sc(),ya())}},at=function(){!(J&49)&&(Mc(),Jc())},ot=function(e,t){var n=J;J|=2;try{return e(t)}finally{J=n,J===0&&(sc(),ya())}};var Cl={findFiberByHostInstance:Ni,bundleType:0,version:`17.0.2`,rendererPackageName:`react-dom`},wl={bundleType:Cl.bundleType,version:Cl.version,rendererPackageName:Cl.rendererPackageName,rendererConfig:Cl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Et(e),e===null?null:e.stateNode},findFiberByHostInstance:Cl.findFiberByHostInstance||vl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{Yi=Tl.inject(wl),Xi=Tl}catch{}}e.render=function(e,t,n){if(!bl(t))throw Error(i(200));return Sl(null,e,t,!1,n)}})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=c(d()),_=c(h()),v=Object.defineProperty,y=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t,n)=>y(e,typeof t==`symbol`?t:t+``,n);function x(e,t,n){return Math.min(Math.max(e,t),n)}function S(e,t){return typeof e!=`number`||Number.isNaN(e)?t:Math.max(0,e)}var C={ring:{value:`ring`,label:`Ring`,category:`spinner`,description:`A refined circular spinner for general loading states.`,recommendedUse:`Use for default async states inside cards, panels, and centered sections.`,defaultCount:1,minCount:1,maxCount:1},"dual-ring":{value:`dual-ring`,label:`Dual Ring`,category:`spinner`,description:`Two concentric rings rotating in opposite directions for more visual energy.`,recommendedUse:`Use when you want a richer spinner without overwhelming compact layouts.`,defaultCount:2,minCount:2,maxCount:2},"segmented-ring":{value:`segmented-ring`,label:`Segmented Ring`,category:`spinner`,description:`A segmented circular loader with precise ticks and premium motion.`,recommendedUse:`Use when you want a polished technical spinner for dashboards, analytics, or admin tools.`,defaultCount:10,minCount:6,maxCount:12},arc:{value:`arc`,label:`Arc`,category:`spinner`,description:`A thick curved sweep with strong motion and excellent legibility.`,recommendedUse:`Use on dashboards or surfaces where the loader needs a bold silhouette.`,defaultCount:1,minCount:1,maxCount:1},orbit:{value:`orbit`,label:`Orbit`,category:`spinner`,description:`A premium orbital motion with a stable central anchor.`,recommendedUse:`Use in hero states, polished overlays, or brand-forward experiences.`,defaultCount:2,minCount:2,maxCount:2},comet:{value:`comet`,label:`Comet`,category:`spinner`,description:`A luminous point with a trailing comet tail orbiting a soft ring.`,recommendedUse:`Use for premium hero states, modal loading, and brand-forward async moments.`,defaultCount:2,minCount:2,maxCount:2},halo:{value:`halo`,label:`Halo`,category:`spinner`,description:`A thin halo with soft glow pulses and minimal visual noise.`,recommendedUse:`Use in refined enterprise interfaces where the loading state should stay elegant.`,defaultCount:2,minCount:2,maxCount:2},radar:{value:`radar`,label:`Radar`,category:`spinner`,description:`A scanning beam effect with layered depth.`,recommendedUse:`Use for search, sync, telemetry, or data discovery moments.`,defaultCount:3,minCount:3,maxCount:3},astronaut:{value:`astronaut`,label:`Astronaut`,category:`surface`,description:`A floating astronaut illustration with soft starfield motion.`,recommendedUse:`Use for onboarding, empty states, playful overlays, and premium loading moments.`,defaultCount:3,minCount:3,maxCount:3},"astronaut-to-mars":{value:`astronaut-to-mars`,label:`Astronaut To Mars`,category:`surface`,description:`A tiny astronaut traveling toward Mars with a cinematic space-route feel.`,recommendedUse:`Use for route transitions, splash states, and standout brand-forward loading sequences.`,defaultCount:4,minCount:4,maxCount:4},"baseball-player":{value:`baseball-player`,label:`Baseball Player`,category:`surface`,description:`A batter driving the ball with a clean swing and curved flight path.`,recommendedUse:`Use for sports products, onboarding, and illustrative loading states with momentum.`,defaultCount:4,minCount:4,maxCount:4},"football-player":{value:`football-player`,label:`Football Player`,category:`surface`,description:`A footballer striking the ball forward with a smooth kick arc.`,recommendedUse:`Use for soccer experiences, score views, and highly expressive loading moments.`,defaultCount:4,minCount:4,maxCount:4},galaxy:{value:`galaxy`,label:`Galaxy`,category:`surface`,description:`A glowing spiral galaxy with a bright core, orbiting stars, and drifting cosmic dust.`,recommendedUse:`Use for splash screens, premium hero states, sci-fi interfaces, and high-drama loading moments.`,defaultCount:6,minCount:6,maxCount:6},pulse:{value:`pulse`,label:`Pulse`,category:`surface`,description:`A breathing pulse with soft echo rings.`,recommendedUse:`Use for ambient loading and low-noise inline states.`,defaultCount:2,minCount:2,maxCount:2},"wave-dots":{value:`wave-dots`,label:`Wave Dots`,category:`dots`,description:`Dots that ripple upward in sequence.`,recommendedUse:`Use for conversational UIs, message streams, and compact inline feedback.`,defaultCount:4,minCount:3,maxCount:8},"bouncing-dots":{value:`bouncing-dots`,label:`Bouncing Dots`,category:`dots`,description:`Classic dot rhythm with a more premium bounce curve.`,recommendedUse:`Use for buttons, compact surfaces, and general-purpose text-adjacent loading.`,defaultCount:3,minCount:3,maxCount:8},"typing-dots":{value:`typing-dots`,label:`Typing Dots`,category:`dots`,description:`A staggered fade-and-scale sequence inspired by chat typing indicators.`,recommendedUse:`Use in assistants, feeds, or message composer feedback states.`,defaultCount:3,minCount:3,maxCount:5},"grid-pulse":{value:`grid-pulse`,label:`Grid Pulse`,category:`surface`,description:`A 3x3 pulse grid that feels structured, compact, and modern.`,recommendedUse:`Use for compact surfaces, icon-scale loading, and data-heavy interface chrome.`,defaultCount:9,minCount:9,maxCount:9},"magnetic-dots":{value:`magnetic-dots`,label:`Magnetic Dots`,category:`dots`,description:`Dots that pull toward the center and relax outward in a magnetic rhythm.`,recommendedUse:`Use for inline controls, button states, and compact polished micro-feedback.`,defaultCount:4,minCount:3,maxCount:6},"spiral-dots":{value:`spiral-dots`,label:`Spiral Dots`,category:`dots`,description:`Layered dots arranged in a rotating spiral with subtle depth.`,recommendedUse:`Use for premium overlays and loaders that should feel more bespoke than a standard spinner.`,defaultCount:6,minCount:5,maxCount:8},constellation:{value:`constellation`,label:`Constellation`,category:`dots`,description:`Network-like nodes with a soft connected-system feel.`,recommendedUse:`Use for AI, search, sync, and graph-oriented product experiences.`,defaultCount:6,minCount:5,maxCount:6},"equalizer-bars":{value:`equalizer-bars`,label:`Equalizer Bars`,category:`bars`,description:`Animated bars with an audio-like rhythm.`,recommendedUse:`Use for analytics, media, and lively data surfaces.`,defaultCount:5,minCount:3,maxCount:8},"rising-bars":{value:`rising-bars`,label:`Rising Bars`,category:`bars`,description:`Clean bars that rise from a subtle track.`,recommendedUse:`Use in tables, forms, and panels where you want linear motion.`,defaultCount:4,minCount:3,maxCount:8},shimmer:{value:`shimmer`,label:`Shimmer`,category:`surface`,description:`A modern skeleton-like shimmer strip.`,recommendedUse:`Use for content placeholders, cards, and container-level loading.`,defaultCount:1,minCount:1,maxCount:1},"scan-line":{value:`scan-line`,label:`Scan Line`,category:`surface`,description:`A scanning line that sweeps across a clean data surface.`,recommendedUse:`Use for tables, data panes, security-style scans, and content inspection states.`,defaultCount:1,minCount:1,maxCount:1},"liquid-pill":{value:`liquid-pill`,label:`Liquid Pill`,category:`surface`,description:`A rounded pill loader with fluid motion and soft internal glow.`,recommendedUse:`Use for buttons, compact forms, and ambient inline loading with branded motion.`,defaultCount:2,minCount:2,maxCount:2},"ripple-stack":{value:`ripple-stack`,label:`Ripple Stack`,category:`surface`,description:`Concentric ripples that radiate outward with a calm layered cadence.`,recommendedUse:`Use for overlays, fullscreen states, and soft-focus loading moments.`,defaultCount:3,minCount:3,maxCount:4},"minimal-spinner":{value:`minimal-spinner`,label:`Minimal Spinner`,category:`spinner`,description:`A thin understated spinner with understated motion.`,recommendedUse:`Use where UI chrome should stay quiet and elegant.`,defaultCount:1,minCount:1,maxCount:1},"neon-spinner":{value:`neon-spinner`,label:`Neon Spinner`,category:`spinner`,description:`A glowing spinner with high-contrast accents.`,recommendedUse:`Use in dark surfaces, product tours, and expressive brand moments.`,defaultCount:2,minCount:2,maxCount:2},"glass-spinner":{value:`glass-spinner`,label:`Glass Spinner`,category:`spinner`,description:`A frosted, translucent spinner with soft highlights.`,recommendedUse:`Use on overlays and premium surface treatments.`,defaultCount:2,minCount:2,maxCount:2},vortex:{value:`vortex`,label:`Vortex`,category:`spinner`,description:`Multiple rotating elements that create a layered vortex effect.`,recommendedUse:`Use for major loading transitions, modals, and splash states.`,defaultCount:3,minCount:3,maxCount:3},cube:{value:`cube`,label:`Cube`,category:`surface`,description:`Rotating geometric blocks with a clean enterprise-friendly feel.`,recommendedUse:`Use in dashboards, admin tools, and product surfaces with grid structure.`,defaultCount:4,minCount:4,maxCount:4},diamond:{value:`diamond`,label:`Diamond`,category:`surface`,description:`Four angular facets that pulse in a diamond pattern.`,recommendedUse:`Use when you want geometric motion that still feels compact.`,defaultCount:4,minCount:4,maxCount:4},prism:{value:`prism`,label:`Prism`,category:`surface`,description:`Glass-like prism shards rotating with translucent layered highlights.`,recommendedUse:`Use on premium overlays, polished product shells, and modern dark themes.`,defaultCount:3,minCount:3,maxCount:3},"skeleton-blocks":{value:`skeleton-blocks`,label:`Skeleton Blocks`,category:`surface`,description:`A compact skeleton-style block layout with animated shimmer passes.`,recommendedUse:`Use for content placeholders, side panels, cards, and list loading states.`,defaultCount:4,minCount:4,maxCount:4}},ee=Object.values(C);function w(e){return C[e]}function T(e,t){let n=w(e);return x(t.count??n.defaultCount,n.minCount,n.maxCount)}function te(e,t){let n=e??t;return typeof n==`number`?`${n}px`:n}function E(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function D(e,t){Object.entries(t).forEach(([t,n])=>{let r=t.startsWith(`--`)?t:E(t);if(n==null){e.style.removeProperty(r);return}e.style.setProperty(r,O(n))})}function O(e){return typeof e==`number`?String(e):e??``}function ne(e,t){let n=e.replace(`#`,``).trim(),r=n.length===3||n.length===4?n.split(``).map(e=>`${e}${e}`).join(``):n;if(r.length!==6&&r.length!==8)return`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`;let i=parseInt(r.slice(0,2),16),a=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16),s=r.length===8?parseInt(r.slice(6,8),16)/255:1;return`rgba(${i}, ${a}, ${o}, ${Math.max(0,Math.min(1,s*t))})`}function re(e,t){let n=e.replace(/rgba?\(/,``).replace(`)`,``).split(`,`).map(e=>e.trim());return n.length<3?`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`:`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t})`}function k(e,t){let n=Math.max(0,Math.min(1,t));return e.startsWith(`#`)?ne(e,n):e.startsWith(`rgb`)?re(e,n):`color-mix(in srgb, ${e} ${Math.round(n*100)}%, transparent)`}var A={variant:`ring`,size:`40px`,color:`var(--rvl-theme-color)`,secondaryColor:`var(--rvl-theme-secondary)`,speed:900,thickness:3,opacity:1,background:`var(--rvl-theme-overlay)`,overlay:!1,blur:12,radius:`18px`,gap:8,direction:`normal`,label:``,inline:!1,centered:!1,fullscreen:!1,visible:!1,delay:0,minVisible:240,zIndex:1600,className:``,style:{},ariaLive:`polite`,target:null};function ie(e={}){let t=e.variant??A.variant,n=w(t),r=e.color??A.color,i=e.secondaryColor??k(r,.2),a=Object.prototype.hasOwnProperty.call(e,`label`),o={variant:t,size:te(e.size,A.size),color:r,secondaryColor:i,speed:x(S(e.speed,A.speed),200,8e3),thickness:x(S(e.thickness,A.thickness),1,16),opacity:x(typeof e.opacity==`number`?e.opacity:A.opacity,.12,1),background:e.background??A.background,overlay:e.overlay??A.overlay,blur:x(S(e.blur,A.blur),0,32),radius:te(e.radius,A.radius),gap:x(S(e.gap,A.gap),0,48),count:T(t,e),direction:e.direction??A.direction,label:a?e.label??``:A.label,inline:e.inline??A.inline,centered:e.centered??A.centered,fullscreen:e.fullscreen??A.fullscreen,visible:e.visible??A.visible,delay:x(S(e.delay,A.delay),0,3e4),minVisible:x(S(e.minVisible,A.minVisible),0,6e4),zIndex:x(S(e.zIndex,A.zIndex),1,2147483647),className:e.className?.trim()??A.className,style:e.style??{},ariaLive:e.ariaLive??A.ariaLive,target:e.target??A.target};return o.fullscreen&&(o.overlay=!0,o.inline=!1,o.centered=!0),o.inline&&(o.overlay=!1,o.fullscreen=!1),!a&&!o.label&&(o.label=`Loading with ${n.label.toLowerCase()}`),o}var ae=`
:root {
  --rvl-theme-color: #2563eb;
  --rvl-theme-secondary: rgba(37, 99, 235, 0.18);
  --rvl-theme-surface: rgba(255, 255, 255, 0.92);
  --rvl-theme-overlay: rgba(255, 255, 255, 0.72);
  --rvl-theme-text: #0f172a;
  --rvl-theme-muted: #475569;
}

.rvl-loader {
  --rvl-size: 40px;
  --rvl-color: var(--rvl-theme-color);
  --rvl-secondary-color: var(--rvl-theme-secondary);
  --rvl-speed: 900ms;
  --rvl-thickness: 3px;
  --rvl-opacity: 1;
  --rvl-background: var(--rvl-theme-overlay);
  --rvl-blur: 12px;
  --rvl-radius: 18px;
  --rvl-gap: 8px;
  --rvl-z-index: 1600;
  position: relative;
  box-sizing: border-box;
  color: var(--rvl-color);
  opacity: var(--rvl-opacity);
  isolation: isolate;
}

.rvl-loader,
.rvl-loader * {
  box-sizing: border-box;
}

.rvl-loader[hidden] {
  display: none !important;
}

.rvl-loader.is-inline {
  display: inline-flex;
  vertical-align: middle;
}

.rvl-loader.is-block {
  display: flex;
}

.rvl-loader.is-centered:not(.is-overlay):not(.is-fullscreen) {
  width: 100%;
  min-height: calc(var(--rvl-size) * 1.9);
  justify-content: center;
}

.rvl-loader.is-overlay,
.rvl-loader.is-fullscreen {
  position: absolute;
  inset: 0;
  width: auto;
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: 20px;
  background: var(--rvl-background);
  backdrop-filter: blur(var(--rvl-blur));
  border-radius: inherit;
  z-index: var(--rvl-z-index);
}

.rvl-loader.is-fullscreen {
  position: fixed;
  border-radius: 0;
}

.rvl-body {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--rvl-gap) * 0.7);
  min-width: max-content;
  padding: 0;
}

.rvl-loader.is-overlay .rvl-body,
.rvl-loader.is-fullscreen .rvl-body {
  padding: clamp(14px, 2vw, 22px);
  border-radius: var(--rvl-radius);
  background: color-mix(in srgb, var(--rvl-theme-surface) 86%, transparent);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.14);
}

.rvl-visual {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: var(--rvl-size);
  height: var(--rvl-size);
  flex: 0 0 auto;
}

.rvl-part {
  position: absolute;
  display: block;
}

.rvl-label {
  display: none;
  color: var(--rvl-theme-text);
  font: 600 0.92rem/1.3 "Inter", "Segoe UI", sans-serif;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.rvl-loader.has-label .rvl-label {
  display: inline-block;
}

.rvl-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes rvl-rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes rvl-rotate-reverse {
  to {
    transform: rotate(-360deg);
  }
}

@keyframes rvl-pulse {
  0%, 100% {
    transform: scale(0.92);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}

@keyframes rvl-wave {
  0%, 100% {
    transform: translateY(18%);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-18%);
    opacity: 1;
  }
}

@keyframes rvl-bounce {
  0%, 80%, 100% {
    transform: translateY(0) scale(0.82);
    opacity: 0.45;
  }
  40% {
    transform: translateY(-28%) scale(1);
    opacity: 1;
  }
}

@keyframes rvl-bars {
  0%, 100% {
    transform: scaleY(0.35);
    opacity: 0.42;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes rvl-shimmer {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(120%);
  }
}

@keyframes rvl-glow {
  0%, 100% {
    opacity: 0.45;
    transform: scale(0.94);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@keyframes rvl-scan {
  0% {
    transform: translateY(-115%);
  }
  100% {
    transform: translateY(220%);
  }
}

@keyframes rvl-liquid {
  0%, 100% {
    transform: translateX(-18%) scale(0.9);
  }
  50% {
    transform: translateX(18%) scale(1.06);
  }
}

@keyframes rvl-ripple {
  0% {
    transform: scale(0.28);
    opacity: 0;
  }
  35% {
    opacity: 0.85;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes rvl-prism {
  0%, 100% {
    transform: rotate(0deg) translateY(0) scale(0.96);
    opacity: 0.7;
  }
  50% {
    transform: rotate(180deg) translateY(-6%) scale(1.04);
    opacity: 1;
  }
}

@keyframes rvl-magnetic {
  0%, 100% {
    transform: translateX(var(--magnet-offset, 0)) scale(0.82);
    opacity: 0.48;
  }
  50% {
    transform: translateX(0) scale(1.08);
    opacity: 1;
  }
}

@keyframes rvl-float {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-10%);
    opacity: 1;
  }
}

@keyframes rvl-space-float {
  0%, 100% {
    transform: translateY(4%) rotate(-5deg);
  }
  50% {
    transform: translateY(-4%) rotate(3deg);
  }
}

@keyframes rvl-star-twinkle {
  0%, 100% {
    opacity: 0.35;
    transform: scale(0.82);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@keyframes rvl-planet-bob {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3%);
  }
}

@keyframes rvl-mars-trip {
  0% {
    transform: translate(0, 0) rotate(-10deg) scale(0.92);
  }
  45% {
    transform: translate(calc(var(--rvl-size) * 0.44), calc(var(--rvl-size) * -0.16)) rotate(-2deg) scale(1);
  }
  100% {
    transform: translate(calc(var(--rvl-size) * 0.82), calc(var(--rvl-size) * -0.04)) rotate(8deg) scale(0.92);
  }
}

@keyframes rvl-athlete-sway {
  0%, 100% {
    transform: translateY(2%) rotate(-6deg);
  }
  50% {
    transform: translateY(-2%) rotate(4deg);
  }
}

@keyframes rvl-baseball-flight {
  0% {
    transform: translate(0, 0) scale(0.9);
  }
  50% {
    transform: translate(calc(var(--rvl-size) * 0.68), calc(var(--rvl-size) * -0.32)) scale(1);
  }
  100% {
    transform: translate(calc(var(--rvl-size) * 1.04), calc(var(--rvl-size) * -0.12)) scale(0.88);
  }
}

@keyframes rvl-football-flight {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(0.9);
  }
  45% {
    transform: translate(calc(var(--rvl-size) * 0.58), calc(var(--rvl-size) * -0.22)) rotate(180deg) scale(1);
  }
  100% {
    transform: translate(calc(var(--rvl-size) * 0.96), calc(var(--rvl-size) * -0.04)) rotate(360deg) scale(0.88);
  }
}

@keyframes rvl-galaxy-core {
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.92);
    box-shadow:
      0 0 calc(var(--rvl-size) * 0.2) rgba(125, 211, 252, 0.26),
      0 0 calc(var(--rvl-size) * 0.44) rgba(129, 140, 248, 0.16);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.06);
    box-shadow:
      0 0 calc(var(--rvl-size) * 0.28) rgba(125, 211, 252, 0.34),
      0 0 calc(var(--rvl-size) * 0.58) rgba(129, 140, 248, 0.22);
  }
}

@keyframes rvl-galaxy-drift {
  0%, 100% {
    transform: rotate(0deg) scale(0.96);
  }
  50% {
    transform: rotate(180deg) scale(1.04);
  }
}

@media (prefers-reduced-motion: reduce) {
  .rvl-loader,
  .rvl-loader * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`,j=`
.rvl-variant--ring .rvl-part:nth-child(1) {
  inset: 0;
  border: var(--rvl-thickness) solid var(--rvl-secondary-color);
  border-top-color: var(--rvl-color);
  border-radius: 999px;
  animation: rvl-rotate var(--rvl-speed) linear infinite;
}

.rvl-variant--dual-ring .rvl-part:nth-child(1),
.rvl-variant--dual-ring .rvl-part:nth-child(2) {
  border-radius: 999px;
  border-style: solid;
}

.rvl-variant--dual-ring .rvl-part:nth-child(1) {
  inset: 0;
  border-width: var(--rvl-thickness);
  border-color: var(--rvl-color) transparent var(--rvl-secondary-color) transparent;
  animation: rvl-rotate var(--rvl-speed) linear infinite;
}

.rvl-variant--dual-ring .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.18);
  border-width: calc(var(--rvl-thickness) * 0.85);
  border-color: transparent var(--rvl-color) transparent var(--rvl-secondary-color);
  animation: rvl-rotate-reverse calc(var(--rvl-speed) * 1.35) linear infinite;
}

.rvl-variant--segmented-ring .rvl-visual {
  animation: rvl-rotate calc(var(--rvl-speed) * 1.4) linear infinite;
}

.rvl-variant--segmented-ring .rvl-part {
  top: 6%;
  left: 50%;
  width: calc(var(--rvl-thickness) * 0.9);
  height: calc(var(--rvl-size) * 0.18);
  margin-left: calc(var(--rvl-thickness) * -0.45);
  border-radius: 999px;
  background: var(--rvl-color);
  transform-origin: 50% calc((var(--rvl-size) * 0.44));
}

.rvl-variant--segmented-ring .rvl-part:nth-child(1) { transform: rotate(0deg); opacity: 0.28; }
.rvl-variant--segmented-ring .rvl-part:nth-child(2) { transform: rotate(30deg); opacity: 0.34; }
.rvl-variant--segmented-ring .rvl-part:nth-child(3) { transform: rotate(60deg); opacity: 0.4; }
.rvl-variant--segmented-ring .rvl-part:nth-child(4) { transform: rotate(90deg); opacity: 0.46; }
.rvl-variant--segmented-ring .rvl-part:nth-child(5) { transform: rotate(120deg); opacity: 0.52; }
.rvl-variant--segmented-ring .rvl-part:nth-child(6) { transform: rotate(150deg); opacity: 0.58; }
.rvl-variant--segmented-ring .rvl-part:nth-child(7) { transform: rotate(180deg); opacity: 0.66; }
.rvl-variant--segmented-ring .rvl-part:nth-child(8) { transform: rotate(210deg); opacity: 0.74; }
.rvl-variant--segmented-ring .rvl-part:nth-child(9) { transform: rotate(240deg); opacity: 0.82; }
.rvl-variant--segmented-ring .rvl-part:nth-child(10) { transform: rotate(270deg); opacity: 0.9; }
.rvl-variant--segmented-ring .rvl-part:nth-child(11) { transform: rotate(300deg); opacity: 0.96; }
.rvl-variant--segmented-ring .rvl-part:nth-child(12) { transform: rotate(330deg); opacity: 1; }

.rvl-variant--arc .rvl-part:nth-child(1) {
  inset: 0;
  border-radius: 999px;
  border: var(--rvl-thickness) solid transparent;
  border-top-color: var(--rvl-color);
  border-right-color: var(--rvl-color);
  box-shadow: inset 0 0 0 calc(var(--rvl-thickness) * 0.15) var(--rvl-secondary-color);
  animation: rvl-rotate var(--rvl-speed) cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
}

.rvl-variant--orbit .rvl-part:nth-child(1) {
  inset: calc(var(--rvl-size) * 0.29);
  width: calc(var(--rvl-size) * 0.18);
  height: calc(var(--rvl-size) * 0.18);
  background: var(--rvl-color);
  border-radius: 999px;
  box-shadow: 0 0 0 calc(var(--rvl-size) * 0.12) var(--rvl-secondary-color);
}

.rvl-variant--orbit .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.75) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 1.1) linear infinite;
}

.rvl-variant--orbit .rvl-visual::after {
  content: "";
  position: absolute;
  top: calc(var(--rvl-size) * 0.1);
  left: 50%;
  width: calc(var(--rvl-size) * 0.16);
  height: calc(var(--rvl-size) * 0.16);
  background: var(--rvl-color);
  border-radius: 999px;
  transform-origin: 50% calc((var(--rvl-size) * 0.4));
  animation: rvl-rotate calc(var(--rvl-speed) * 1.1) linear infinite;
}

.rvl-variant--comet .rvl-part:nth-child(1) {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.7) solid color-mix(in srgb, var(--rvl-color) 20%, transparent);
}

.rvl-variant--comet .rvl-part:nth-child(2) {
  top: calc(var(--rvl-size) * 0.06);
  left: 50%;
  width: calc(var(--rvl-size) * 0.14);
  height: calc(var(--rvl-size) * 0.14);
  margin-left: calc(var(--rvl-size) * -0.07);
  background: var(--rvl-color);
  border-radius: 999px;
  box-shadow:
    0 0 0 calc(var(--rvl-size) * 0.08) color-mix(in srgb, var(--rvl-color) 16%, transparent),
    0 calc(var(--rvl-size) * 0.12) calc(var(--rvl-size) * 0.16) color-mix(in srgb, var(--rvl-color) 20%, transparent);
  transform-origin: 50% calc((var(--rvl-size) * 0.44));
  animation: rvl-rotate calc(var(--rvl-speed) * 1.08) linear infinite;
}

.rvl-variant--halo .rvl-part:nth-child(1),
.rvl-variant--halo .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
}

.rvl-variant--halo .rvl-part:nth-child(1) {
  border: calc(var(--rvl-thickness) * 0.75) solid color-mix(in srgb, var(--rvl-color) 34%, transparent);
  box-shadow:
    0 0 18px color-mix(in srgb, var(--rvl-color) 22%, transparent),
    inset 0 0 14px color-mix(in srgb, var(--rvl-color) 12%, transparent);
  animation: rvl-glow calc(var(--rvl-speed) * 1.4) ease-in-out infinite;
}

.rvl-variant--halo .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.18);
  border: calc(var(--rvl-thickness) * 0.55) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 1.2) linear infinite;
}

.rvl-variant--radar .rvl-part:nth-child(1),
.rvl-variant--radar .rvl-part:nth-child(2) {
  border: 1px solid color-mix(in srgb, var(--rvl-color) 30%, transparent);
  border-radius: 999px;
}

.rvl-variant--radar .rvl-part:nth-child(1) {
  inset: 0;
}

.rvl-variant--radar .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.18);
}

.rvl-variant--radar .rvl-part:nth-child(3) {
  width: 52%;
  height: 52%;
  top: 24%;
  left: 24%;
  background:
    linear-gradient(120deg, transparent 0%, color-mix(in srgb, var(--rvl-color) 56%, transparent) 55%, transparent 100%);
  clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
  transform-origin: 50% 50%;
  animation: rvl-rotate calc(var(--rvl-speed) * 1.2) linear infinite;
}

.rvl-variant--astronaut .rvl-visual {
  width: calc(var(--rvl-size) * 1.18);
  height: calc(var(--rvl-size) * 1.18);
  animation: rvl-space-float calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--astronaut .rvl-part:nth-child(1) {
  top: 13%;
  left: 37%;
  width: 30%;
  height: 30%;
  border-radius: 999px;
  background:
    radial-gradient(circle at 42% 34%, rgba(255, 255, 255, 0.98) 0 42%, #dbeafe 43% 62%, #bfdbfe 63% 100%);
  box-shadow:
    inset 0 -2px 0 rgba(96, 165, 250, 0.22),
    0 8px 18px color-mix(in srgb, var(--rvl-color) 14%, transparent);
}

.rvl-variant--astronaut .rvl-part:nth-child(1)::before {
  content: "";
  position: absolute;
  inset: 22% 18% 26% 18%;
  border-radius: 999px 999px 52% 52%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.88), color-mix(in srgb, var(--rvl-color) 72%, #0f172a));
}

.rvl-variant--astronaut .rvl-part:nth-child(1)::after {
  content: "";
  position: absolute;
  top: 28%;
  left: 28%;
  width: 18%;
  height: 18%;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
}

.rvl-variant--astronaut .rvl-part:nth-child(2) {
  top: 42%;
  left: 34%;
  width: 32%;
  height: 34%;
  border-radius: 46% 46% 34% 34%;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), #dbeafe 70%, #bfdbfe 100%);
  box-shadow:
    inset 0 -2px 0 rgba(96, 165, 250, 0.16),
    0 10px 24px color-mix(in srgb, var(--rvl-color) 10%, transparent);
}

.rvl-variant--astronaut .rvl-part:nth-child(2)::before {
  content: "";
  position: absolute;
  left: -16%;
  top: 16%;
  width: 24%;
  height: 44%;
  border-radius: 10px;
  background: #c7d2fe;
  box-shadow: calc(var(--rvl-size) * 0.24) 0 0 #eff6ff;
}

.rvl-variant--astronaut .rvl-part:nth-child(2)::after {
  content: "";
  position: absolute;
  left: 21%;
  bottom: -18%;
  width: 16%;
  height: 26%;
  border-radius: 999px;
  background: #dbeafe;
  box-shadow:
    calc(var(--rvl-size) * 0.14) 0 0 #dbeafe,
    calc(var(--rvl-size) * -0.14) calc(var(--rvl-size) * -0.1) 0 #eff6ff,
    calc(var(--rvl-size) * 0.18) calc(var(--rvl-size) * -0.1) 0 #eff6ff;
}

.rvl-variant--astronaut .rvl-part:nth-child(3) {
  top: 16%;
  left: 18%;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    calc(var(--rvl-size) * 0.18) calc(var(--rvl-size) * 0.14) 0 rgba(255, 255, 255, 0.7),
    calc(var(--rvl-size) * 0.54) calc(var(--rvl-size) * 0.08) 0 rgba(255, 255, 255, 0.95),
    calc(var(--rvl-size) * 0.64) calc(var(--rvl-size) * 0.42) 0 rgba(255, 255, 255, 0.7),
    calc(var(--rvl-size) * 0.08) calc(var(--rvl-size) * 0.56) 0 rgba(255, 255, 255, 0.82);
  animation: rvl-star-twinkle calc(var(--rvl-speed) * 1.6) ease-in-out infinite;
}

.rvl-variant--astronaut-to-mars .rvl-visual {
  width: calc(var(--rvl-size) * 1.82);
  height: calc(var(--rvl-size) * 1.16);
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(1) {
  top: 16%;
  right: 6%;
  width: 34%;
  height: 54%;
  border-radius: 999px;
  background:
    radial-gradient(circle at 34% 32%, rgba(254, 202, 202, 0.72) 0 10%, transparent 11%),
    radial-gradient(circle at 68% 60%, rgba(248, 113, 113, 0.64) 0 10%, transparent 11%),
    radial-gradient(circle at 52% 44%, #fb7185 0 16%, #ef4444 17% 60%, #991b1b 100%);
  box-shadow:
    0 0 0 calc(var(--rvl-size) * 0.06) rgba(248, 113, 113, 0.12),
    0 16px 28px rgba(127, 29, 29, 0.18);
  animation: rvl-planet-bob calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(2) {
  top: 26%;
  left: 14%;
  width: 58%;
  height: 34%;
  border-top: calc(var(--rvl-thickness) * 0.68) dashed color-mix(in srgb, var(--rvl-color) 26%, transparent);
  border-radius: 999px;
  opacity: 0.9;
  transform: rotate(8deg);
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(3) {
  top: 44%;
  left: 6%;
  width: 10%;
  height: 18%;
  border-radius: 44% 44% 34% 34%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), #dbeafe 72%, #bfdbfe 100%);
  box-shadow: 0 8px 18px color-mix(in srgb, var(--rvl-color) 10%, transparent);
  animation: rvl-mars-trip calc(var(--rvl-speed) * 2.1) ease-in-out infinite;
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(3)::before {
  content: "";
  position: absolute;
  top: -56%;
  left: 16%;
  width: 68%;
  height: 68%;
  border-radius: 999px;
  background:
    radial-gradient(circle at 42% 34%, rgba(255, 255, 255, 0.98) 0 42%, #dbeafe 43% 62%, #bfdbfe 63% 100%);
  box-shadow: inset 0 -1px 0 rgba(96, 165, 250, 0.18);
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(3)::after {
  content: "";
  position: absolute;
  left: -120%;
  top: 46%;
  width: 120%;
  height: 2px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--rvl-color) 32%, transparent), transparent);
  opacity: 0.72;
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(4) {
  top: 12%;
  left: 10%;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    calc(var(--rvl-size) * 0.34) calc(var(--rvl-size) * 0.12) 0 rgba(255, 255, 255, 0.7),
    calc(var(--rvl-size) * 0.88) calc(var(--rvl-size) * 0.04) 0 rgba(255, 255, 255, 0.9),
    calc(var(--rvl-size) * 1.08) calc(var(--rvl-size) * 0.44) 0 rgba(255, 255, 255, 0.74),
    calc(var(--rvl-size) * 0.42) calc(var(--rvl-size) * 0.56) 0 rgba(255, 255, 255, 0.86);
  animation: rvl-star-twinkle calc(var(--rvl-speed) * 1.7) ease-in-out infinite;
}

.rvl-variant--baseball-player .rvl-visual,
.rvl-variant--football-player .rvl-visual {
  width: calc(var(--rvl-size) * 1.76);
  height: calc(var(--rvl-size) * 1.12);
}

.rvl-variant--baseball-player .rvl-part:nth-child(1),
.rvl-variant--football-player .rvl-part:nth-child(1) {
  top: 28%;
  left: 14%;
  width: 18%;
  height: 42%;
  border-radius: 18px 18px 14px 14px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 78%, white), var(--rvl-color));
  clip-path: polygon(36% 0%, 70% 0%, 100% 22%, 80% 56%, 78% 100%, 54% 100%, 48% 72%, 34% 100%, 12% 100%, 18% 56%, 0% 22%);
  transform-origin: 50% 76%;
  animation: rvl-athlete-sway calc(var(--rvl-speed) * 1.45) ease-in-out infinite;
}

.rvl-variant--baseball-player .rvl-part:nth-child(1)::before,
.rvl-variant--football-player .rvl-part:nth-child(1)::before {
  content: "";
  position: absolute;
  top: -26%;
  left: 26%;
  width: 46%;
  height: 30%;
  border-radius: 999px;
  background: color-mix(in srgb, white 72%, var(--rvl-color));
}

.rvl-variant--baseball-player .rvl-part:nth-child(1)::after,
.rvl-variant--football-player .rvl-part:nth-child(1)::after {
  content: "";
  position: absolute;
  left: 92%;
  top: 32%;
  width: 92%;
  height: 6%;
  border-radius: 999px;
  background: color-mix(in srgb, var(--rvl-color) 32%, transparent);
  transform-origin: left center;
}

.rvl-variant--baseball-player .rvl-part:nth-child(1)::after {
  width: 116%;
  top: 12%;
  transform: rotate(-28deg);
  background: linear-gradient(90deg, color-mix(in srgb, #f59e0b 84%, white), color-mix(in srgb, #b45309 82%, white));
}

.rvl-variant--football-player .rvl-part:nth-child(1)::after {
  width: 82%;
  top: 52%;
  transform: rotate(-34deg);
  background: color-mix(in srgb, var(--rvl-color) 18%, transparent);
}

.rvl-variant--baseball-player .rvl-part:nth-child(3),
.rvl-variant--football-player .rvl-part:nth-child(3) {
  left: 8%;
  right: 8%;
  bottom: 12%;
  height: 2px;
  border-radius: 999px;
}

.rvl-variant--baseball-player .rvl-part:nth-child(2) {
  left: 34%;
  top: 42%;
  width: calc(var(--rvl-size) * 0.12);
  height: calc(var(--rvl-size) * 0.12);
  border-radius: 999px;
  background:
    radial-gradient(circle at 40% 40%, white 0 38%, #f8fafc 39% 100%);
  box-shadow:
    inset -1px -1px 0 rgba(239, 68, 68, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.5);
  animation: rvl-baseball-flight calc(var(--rvl-speed) * 1.42) ease-in-out infinite;
}

.rvl-variant--baseball-player .rvl-part:nth-child(3) {
  left: 24%;
  top: 18%;
  width: 54%;
  height: 54%;
  border-top: calc(var(--rvl-thickness) * 0.5) solid color-mix(in srgb, var(--rvl-color) 16%, transparent);
  border-radius: 999px;
  background: none;
}

.rvl-variant--baseball-player .rvl-part:nth-child(4) {
  left: 8%;
  right: 8%;
  bottom: 14%;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, #94a3b8 44%, transparent), transparent);
}

.rvl-variant--football-player .rvl-part:nth-child(2) {
  left: 34%;
  top: 60%;
  width: calc(var(--rvl-size) * 0.16);
  height: calc(var(--rvl-size) * 0.1);
  border-radius: 999px;
  background:
    radial-gradient(circle at 36% 50%, white 0 20%, transparent 21%),
    radial-gradient(circle at 64% 50%, white 0 20%, transparent 21%),
    linear-gradient(90deg, white 0 16%, #111827 17% 26%, white 27% 42%, #111827 43% 58%, white 59% 74%, #111827 75% 84%, white 85% 100%);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
  animation: rvl-football-flight calc(var(--rvl-speed) * 1.36) ease-in-out infinite;
}

.rvl-variant--football-player .rvl-part:nth-child(3) {
  background: linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.5), transparent);
}

.rvl-variant--football-player .rvl-part:nth-child(4) {
  left: 36%;
  top: 56%;
  width: calc(var(--rvl-size) * 0.28);
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, color-mix(in srgb, white 58%, transparent), transparent);
  opacity: 0.68;
  animation: rvl-football-flight calc(var(--rvl-speed) * 1.36) ease-in-out infinite;
}

.rvl-variant--galaxy .rvl-visual {
  width: calc(var(--rvl-size) * 1.76);
  height: calc(var(--rvl-size) * 1.76);
  animation: rvl-galaxy-drift calc(var(--rvl-speed) * 2.6) linear infinite;
}

.rvl-variant--galaxy .rvl-visual::before {
  content: "";
  position: absolute;
  inset: 14%;
  border-radius: 999px;
  background:
    radial-gradient(circle at center, transparent 0 28%, color-mix(in srgb, var(--rvl-color) 18%, transparent) 28.8% 29.8%, transparent 30.8%),
    radial-gradient(circle at center, transparent 0 40%, color-mix(in srgb, #a78bfa 18%, transparent) 40.8% 41.8%, transparent 42.8%),
    linear-gradient(35deg, transparent 22%, color-mix(in srgb, var(--rvl-color) 24%, transparent) 42%, transparent 58%),
    linear-gradient(145deg, transparent 24%, color-mix(in srgb, #818cf8 22%, transparent) 44%, transparent 60%);
  filter: blur(1px);
  opacity: 0.95;
}

.rvl-variant--galaxy .rvl-visual::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(var(--rvl-size) * 0.22);
  height: calc(var(--rvl-size) * 0.22);
  border-radius: 999px;
  background:
    radial-gradient(circle at center, #f8fafc 0 22%, #bfdbfe 23% 54%, #818cf8 55% 100%);
  transform: translate(-50%, -50%);
  animation: rvl-galaxy-core calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--galaxy .rvl-part {
  border-radius: 999px;
}

.rvl-variant--galaxy .rvl-part:nth-child(1),
.rvl-variant--galaxy .rvl-part:nth-child(2) {
  top: 50%;
  left: 50%;
  width: calc(var(--rvl-size) * 1.08);
  height: calc(var(--rvl-size) * 0.38);
  margin-left: calc(var(--rvl-size) * -0.54);
  margin-top: calc(var(--rvl-size) * -0.19);
  border-radius: 999px;
  background:
    radial-gradient(circle at 18% 50%, rgba(255, 255, 255, 0.88) 0 3%, transparent 4%),
    radial-gradient(circle at 36% 38%, rgba(196, 181, 253, 0.88) 0 3%, transparent 4%),
    radial-gradient(circle at 62% 62%, rgba(125, 211, 252, 0.88) 0 3.2%, transparent 4.2%),
    radial-gradient(circle at 82% 44%, rgba(255, 255, 255, 0.74) 0 2.8%, transparent 3.8%),
    linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, #a78bfa 24%, transparent) 18%,
      color-mix(in srgb, var(--rvl-color) 28%, transparent) 50%,
      color-mix(in srgb, #7dd3fc 24%, transparent) 82%,
      transparent 100%
    );
  filter: blur(2px);
}

.rvl-variant--galaxy .rvl-part:nth-child(1) {
  transform: rotate(28deg);
}

.rvl-variant--galaxy .rvl-part:nth-child(2) {
  transform: rotate(-24deg);
}

.rvl-variant--galaxy .rvl-part:nth-child(3),
.rvl-variant--galaxy .rvl-part:nth-child(4),
.rvl-variant--galaxy .rvl-part:nth-child(5),
.rvl-variant--galaxy .rvl-part:nth-child(6) {
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  animation: rvl-rotate linear infinite;
}

.rvl-variant--galaxy .rvl-part:nth-child(3) {
  width: calc(var(--rvl-size) * 0.64);
  height: calc(var(--rvl-size) * 0.64);
  margin-left: calc(var(--rvl-size) * -0.32);
  margin-top: calc(var(--rvl-size) * -0.32);
  animation-duration: calc(var(--rvl-speed) * 1.8);
}

.rvl-variant--galaxy .rvl-part:nth-child(3)::before {
  content: "";
  position: absolute;
  width: calc(var(--rvl-size) * 0.07);
  height: calc(var(--rvl-size) * 0.07);
  transform: translateX(calc(var(--rvl-size) * 0.32));
  border-radius: 999px;
  background: #f8fafc;
}

.rvl-variant--galaxy .rvl-part:nth-child(4) {
  width: calc(var(--rvl-size) * 0.88);
  height: calc(var(--rvl-size) * 0.88);
  margin-left: calc(var(--rvl-size) * -0.44);
  margin-top: calc(var(--rvl-size) * -0.44);
  animation-duration: calc(var(--rvl-speed) * 2.4);
}

.rvl-variant--galaxy .rvl-part:nth-child(4)::before {
  content: "";
  position: absolute;
  width: calc(var(--rvl-size) * 0.06);
  height: calc(var(--rvl-size) * 0.06);
  transform: translateX(calc(var(--rvl-size) * 0.44));
  border-radius: 999px;
  background: #a78bfa;
}

.rvl-variant--galaxy .rvl-part:nth-child(5) {
  width: calc(var(--rvl-size) * 1.08);
  height: calc(var(--rvl-size) * 1.08);
  margin-left: calc(var(--rvl-size) * -0.54);
  margin-top: calc(var(--rvl-size) * -0.54);
  animation-duration: calc(var(--rvl-speed) * 3.1);
}

.rvl-variant--galaxy .rvl-part:nth-child(5)::before {
  content: "";
  position: absolute;
  width: calc(var(--rvl-size) * 0.052);
  height: calc(var(--rvl-size) * 0.052);
  transform: translateX(calc(var(--rvl-size) * 0.54));
  border-radius: 999px;
  background: #7dd3fc;
}

.rvl-variant--galaxy .rvl-part:nth-child(6) {
  top: 18%;
  left: 20%;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    calc(var(--rvl-size) * 0.18) calc(var(--rvl-size) * 0.12) 0 rgba(255, 255, 255, 0.76),
    calc(var(--rvl-size) * 0.68) calc(var(--rvl-size) * 0.06) 0 rgba(196, 181, 253, 0.92),
    calc(var(--rvl-size) * 0.88) calc(var(--rvl-size) * 0.46) 0 rgba(125, 211, 252, 0.86),
    calc(var(--rvl-size) * 0.22) calc(var(--rvl-size) * 0.86) 0 rgba(255, 255, 255, 0.78);
  animation: rvl-star-twinkle calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--pulse .rvl-part:nth-child(1),
.rvl-variant--pulse .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
}

.rvl-variant--pulse .rvl-part:nth-child(1) {
  background: var(--rvl-color);
  transform: scale(0.34);
}

.rvl-variant--pulse .rvl-part:nth-child(2) {
  border: calc(var(--rvl-thickness) * 0.8) solid var(--rvl-color);
  animation: rvl-pulse calc(var(--rvl-speed) * 1.5) ease-in-out infinite;
}

.rvl-variant--wave-dots .rvl-part,
.rvl-variant--bouncing-dots .rvl-part,
.rvl-variant--typing-dots .rvl-part,
.rvl-variant--magnetic-dots .rvl-part {
  position: static;
  width: calc(var(--rvl-size) / 5.5);
  height: calc(var(--rvl-size) / 5.5);
  border-radius: 999px;
  background: var(--rvl-color);
}

.rvl-variant--wave-dots .rvl-visual,
.rvl-variant--bouncing-dots .rvl-visual,
.rvl-variant--typing-dots .rvl-visual,
.rvl-variant--magnetic-dots .rvl-visual {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--rvl-gap) * 0.5);
  width: auto;
}

.rvl-variant--wave-dots .rvl-part {
  animation: rvl-wave calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--bouncing-dots .rvl-part {
  animation: rvl-bounce var(--rvl-speed) ease-in-out infinite;
}

.rvl-variant--typing-dots .rvl-part {
  animation: rvl-pulse calc(var(--rvl-speed) * 1.2) ease-in-out infinite;
}

.rvl-variant--magnetic-dots .rvl-part {
  animation: rvl-magnetic calc(var(--rvl-speed) * 1.15) ease-in-out infinite;
}

.rvl-variant--magnetic-dots .rvl-part:nth-child(1) { --magnet-offset: -32%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(2) { --magnet-offset: -14%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(3) { --magnet-offset: 14%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(4) { --magnet-offset: 32%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(5) { --magnet-offset: 44%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(6) { --magnet-offset: -44%; }

.rvl-variant--grid-pulse .rvl-visual {
  display: grid;
  width: calc(var(--rvl-size) * 0.98);
  height: calc(var(--rvl-size) * 0.98);
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--rvl-gap) * 0.24);
}

.rvl-variant--grid-pulse .rvl-part {
  position: static;
  width: calc(var(--rvl-size) * 0.22);
  height: calc(var(--rvl-size) * 0.22);
  border-radius: calc(var(--rvl-radius) * 0.14);
  background: linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 84%, white), var(--rvl-color));
  animation: rvl-pulse calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--spiral-dots .rvl-visual {
  animation: rvl-rotate calc(var(--rvl-speed) * 1.4) linear infinite;
}

.rvl-variant--spiral-dots .rvl-part,
.rvl-variant--constellation .rvl-part {
  width: calc(var(--rvl-size) * 0.12);
  height: calc(var(--rvl-size) * 0.12);
  border-radius: 999px;
  background: var(--rvl-color);
}

.rvl-variant--spiral-dots .rvl-part {
  box-shadow: 0 0 0 calc(var(--rvl-size) * 0.05) color-mix(in srgb, var(--rvl-color) 10%, transparent);
  animation: rvl-pulse calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--spiral-dots .rvl-part:nth-child(1) { top: 50%; left: 50%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(2) { top: 30%; left: 50%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(3) { top: 28%; left: 67%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(4) { top: 48%; left: 78%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(5) { top: 68%; left: 66%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(6) { top: 74%; left: 42%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(7) { top: 58%; left: 22%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(8) { top: 24%; left: 24%; margin: calc(var(--rvl-size) * -0.06); }

.rvl-variant--wave-dots .rvl-part,
.rvl-variant--bouncing-dots .rvl-part,
.rvl-variant--typing-dots .rvl-part,
.rvl-variant--magnetic-dots .rvl-part,
.rvl-variant--grid-pulse .rvl-part,
.rvl-variant--spiral-dots .rvl-part,
.rvl-variant--equalizer-bars .rvl-part,
.rvl-variant--rising-bars .rvl-part {
  animation-delay: calc(var(--part-index, 0) * 90ms);
}

.rvl-variant--constellation .rvl-visual::before {
  content: "";
  position: absolute;
  inset: calc(var(--rvl-size) * 0.14);
  background:
    linear-gradient(28deg, transparent 47%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 49%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 51%, transparent 53%),
    linear-gradient(152deg, transparent 47%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 49%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 51%, transparent 53%);
  opacity: 0.9;
}

.rvl-variant--constellation .rvl-part {
  animation: rvl-float calc(var(--rvl-speed) * 1.5) ease-in-out infinite;
  box-shadow: 0 0 0 calc(var(--rvl-size) * 0.05) color-mix(in srgb, var(--rvl-color) 12%, transparent);
}

.rvl-variant--constellation .rvl-part:nth-child(1) { top: 18%; left: 28%; }
.rvl-variant--constellation .rvl-part:nth-child(2) { top: 34%; left: 62%; }
.rvl-variant--constellation .rvl-part:nth-child(3) { top: 58%; left: 74%; }
.rvl-variant--constellation .rvl-part:nth-child(4) { top: 74%; left: 42%; }
.rvl-variant--constellation .rvl-part:nth-child(5) { top: 52%; left: 16%; }
.rvl-variant--constellation .rvl-part:nth-child(6) { top: 24%; left: 78%; }

.rvl-variant--equalizer-bars .rvl-visual,
.rvl-variant--rising-bars .rvl-visual {
  display: inline-flex;
  align-items: end;
  justify-content: center;
  gap: calc(var(--rvl-gap) * 0.35);
  width: auto;
}

.rvl-variant--equalizer-bars .rvl-part,
.rvl-variant--rising-bars .rvl-part {
  position: static;
  width: calc(var(--rvl-size) / 9);
  min-width: 4px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--rvl-color), color-mix(in srgb, var(--rvl-color) 36%, white));
  transform-origin: bottom center;
}

.rvl-variant--equalizer-bars .rvl-part {
  height: calc(var(--rvl-size) * 0.72);
  animation: rvl-bars calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--rising-bars .rvl-part {
  height: calc(var(--rvl-size) * 0.74);
  animation: rvl-bars calc(var(--rvl-speed) * 1.35) cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
}

.rvl-variant--shimmer .rvl-visual {
  width: calc(var(--rvl-size) * 2.6);
  height: calc(var(--rvl-size) * 0.42);
  overflow: hidden;
  border-radius: calc(var(--rvl-radius) * 0.8);
  background: color-mix(in srgb, var(--rvl-color) 12%, transparent);
}

.rvl-variant--shimmer .rvl-part:nth-child(1) {
  inset: 0;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, white 78%, var(--rvl-color)) 45%,
      transparent 100%
    );
  transform: translateX(-120%);
  animation: rvl-shimmer calc(var(--rvl-speed) * 1.35) linear infinite;
}

.rvl-variant--scan-line .rvl-visual,
.rvl-variant--skeleton-blocks .rvl-visual {
  width: calc(var(--rvl-size) * 2.85);
  overflow: hidden;
  border-radius: calc(var(--rvl-radius) * 0.85);
}

.rvl-variant--scan-line .rvl-visual {
  height: calc(var(--rvl-size) * 1.55);
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 5%, transparent), transparent 40%),
    color-mix(in srgb, var(--rvl-color) 9%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rvl-color) 12%, transparent);
}

.rvl-variant--scan-line .rvl-part:nth-child(1) {
  top: 0;
  left: 0;
  right: 0;
  height: calc(var(--rvl-thickness) * 1.6);
  background: linear-gradient(90deg, transparent, var(--rvl-color), transparent);
  box-shadow: 0 0 20px color-mix(in srgb, var(--rvl-color) 24%, transparent);
  animation: rvl-scan calc(var(--rvl-speed) * 1.5) ease-in-out infinite;
}

.rvl-variant--liquid-pill .rvl-visual {
  width: calc(var(--rvl-size) * 2.4);
  height: calc(var(--rvl-size) * 0.66);
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--rvl-color) 12%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rvl-color) 10%, transparent);
}

.rvl-variant--liquid-pill .rvl-part:nth-child(1),
.rvl-variant--liquid-pill .rvl-part:nth-child(2) {
  top: 12%;
  bottom: 12%;
  border-radius: 999px;
}

.rvl-variant--liquid-pill .rvl-part:nth-child(1) {
  left: 10%;
  width: 44%;
  background: linear-gradient(90deg, color-mix(in srgb, var(--rvl-color) 84%, white), var(--rvl-color));
  filter: blur(0.4px);
  animation: rvl-liquid calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--liquid-pill .rvl-part:nth-child(2) {
  left: 22%;
  width: 32%;
  background: color-mix(in srgb, white 68%, var(--rvl-color));
  opacity: 0.56;
  animation: rvl-liquid calc(var(--rvl-speed) * 1.1) ease-in-out infinite reverse;
}

.rvl-variant--ripple-stack .rvl-part {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.72) solid var(--rvl-color);
  opacity: 0;
  animation: rvl-ripple calc(var(--rvl-speed) * 1.65) ease-out infinite;
}

.rvl-variant--ripple-stack .rvl-part:nth-child(2) {
  animation-delay: calc(var(--rvl-speed) * 0.22);
}

.rvl-variant--ripple-stack .rvl-part:nth-child(3) {
  animation-delay: calc(var(--rvl-speed) * 0.44);
}

.rvl-variant--ripple-stack .rvl-part:nth-child(4) {
  animation-delay: calc(var(--rvl-speed) * 0.66);
}

.rvl-variant--minimal-spinner .rvl-part:nth-child(1) {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.72) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 0.85) linear infinite;
}

.rvl-variant--neon-spinner .rvl-part:nth-child(1),
.rvl-variant--neon-spinner .rvl-part:nth-child(2),
.rvl-variant--glass-spinner .rvl-part:nth-child(1),
.rvl-variant--glass-spinner .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
}

.rvl-variant--neon-spinner .rvl-part:nth-child(1) {
  border: var(--rvl-thickness) solid color-mix(in srgb, var(--rvl-color) 24%, transparent);
  box-shadow:
    0 0 16px color-mix(in srgb, var(--rvl-color) 35%, transparent),
    inset 0 0 12px color-mix(in srgb, var(--rvl-color) 20%, transparent);
}

.rvl-variant--neon-spinner .rvl-part:nth-child(2) {
  border: var(--rvl-thickness) solid transparent;
  border-top-color: var(--rvl-color);
  border-right-color: color-mix(in srgb, var(--rvl-color) 66%, white);
  animation: rvl-rotate var(--rvl-speed) linear infinite;
}

.rvl-variant--glass-spinner .rvl-part:nth-child(1) {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.08));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.44),
    0 14px 28px rgba(15, 23, 42, 0.12);
}

.rvl-variant--glass-spinner .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.06);
  border: calc(var(--rvl-thickness) * 0.8) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 1.1) linear infinite;
}

.rvl-variant--vortex .rvl-part {
  border-radius: 999px;
  border-style: solid;
}

.rvl-variant--vortex .rvl-part:nth-child(1) {
  inset: 0;
  border-width: calc(var(--rvl-thickness) * 0.55);
  border-color: color-mix(in srgb, var(--rvl-color) 24%, transparent);
}

.rvl-variant--vortex .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.12);
  border-width: calc(var(--rvl-thickness) * 0.75);
  border-color: var(--rvl-color) transparent transparent transparent;
  animation: rvl-rotate calc(var(--rvl-speed) * 0.95) linear infinite;
}

.rvl-variant--vortex .rvl-part:nth-child(3) {
  inset: calc(var(--rvl-size) * 0.28);
  border-width: calc(var(--rvl-thickness) * 0.85);
  border-color: transparent transparent var(--rvl-color) transparent;
  animation: rvl-rotate-reverse calc(var(--rvl-speed) * 1.25) linear infinite;
}

.rvl-variant--cube .rvl-visual,
.rvl-variant--diamond .rvl-visual {
  display: grid;
  place-items: center;
  width: calc(var(--rvl-size) * 0.92);
  height: calc(var(--rvl-size) * 0.92);
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--rvl-gap) * 0.35);
}

.rvl-variant--cube .rvl-part,
.rvl-variant--diamond .rvl-part {
  position: static;
  width: calc(var(--rvl-size) * 0.34);
  height: calc(var(--rvl-size) * 0.34);
  background: linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 82%, white), var(--rvl-color));
  border-radius: calc(var(--rvl-radius) * 0.28);
  animation: rvl-pulse calc(var(--rvl-speed) * 1.12) ease-in-out infinite;
}

.rvl-variant--diamond .rvl-part {
  transform: rotate(45deg);
  border-radius: calc(var(--rvl-radius) * 0.18);
}

.rvl-variant--prism .rvl-visual {
  width: calc(var(--rvl-size) * 1.02);
  height: calc(var(--rvl-size) * 1.02);
}

.rvl-variant--prism .rvl-part {
  width: calc(var(--rvl-size) * 0.4);
  height: calc(var(--rvl-size) * 0.4);
  border-radius: calc(var(--rvl-radius) * 0.2);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.34), color-mix(in srgb, var(--rvl-color) 78%, transparent));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.38),
    0 10px 24px color-mix(in srgb, var(--rvl-color) 12%, transparent);
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  animation: rvl-prism calc(var(--rvl-speed) * 1.45) ease-in-out infinite;
}

.rvl-variant--prism .rvl-part:nth-child(1) { top: 10%; left: 31%; }
.rvl-variant--prism .rvl-part:nth-child(2) { top: 41%; left: 7%; animation-delay: 120ms; }
.rvl-variant--prism .rvl-part:nth-child(3) { top: 41%; right: 7%; animation-delay: 240ms; }

.rvl-variant--skeleton-blocks .rvl-visual {
  height: calc(var(--rvl-size) * 1.78);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: start;
  gap: calc(var(--rvl-gap) * 0.45);
  padding: calc(var(--rvl-gap) * 0.35);
  background: color-mix(in srgb, var(--rvl-color) 6%, transparent);
}

.rvl-variant--skeleton-blocks .rvl-part {
  position: static;
  width: 100%;
  height: calc(var(--rvl-size) * 0.38);
  border-radius: calc(var(--rvl-radius) * 0.5);
  background: color-mix(in srgb, var(--rvl-color) 12%, transparent);
  overflow: hidden;
}

.rvl-variant--skeleton-blocks .rvl-part::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, white 80%, var(--rvl-color)) 48%,
      transparent 100%
    );
  transform: translateX(-120%);
  animation: rvl-shimmer calc(var(--rvl-speed) * 1.4) linear infinite;
}

.rvl-variant--skeleton-blocks .rvl-part:nth-child(3) {
  grid-column: span 2;
  height: calc(var(--rvl-size) * 0.48);
}

.rvl-variant--skeleton-blocks .rvl-part:nth-child(4) {
  grid-column: span 2;
  height: calc(var(--rvl-size) * 0.28);
  width: 62%;
}
`,oe=`.rvl-variant--`,se=new Map;function ce(e){let t=`${oe}${e}`,n=[],r=0;for(;r<j.length;){for(;r<j.length&&/\s/.test(j[r]??``);)r+=1;if(r>=j.length)break;let e=r;for(;r<j.length&&j[r]!==`{`;)r+=1;if(r>=j.length)break;let i=j.slice(e,r).trim();r+=1;let a=r,o=1;for(;r<j.length&&o>0;){let e=j[r];e===`{`?o+=1:e===`}`&&--o,r+=1}if(!i.includes(oe))continue;let s=i.split(`,`).map(e=>e.trim()).filter(Boolean).filter(e=>e.includes(t));if(!s.length)continue;let c=j.slice(a,r-1).trimEnd();n.push(`${s.join(`,
`)} {
${c}
}`)}return n.join(`

`)}function le(e){let t=se.get(e);if(t)return t;let n=ce(e);return se.set(e,n),n}function ue(e){return e?`${ae}
${le(e)}`:`${ae}
${j}`}var M=ae;ue();function de(){return typeof window<`u`&&typeof document<`u`}var fe=`data-rvl-loading-base`,pe=`data-rvl-loading-variant`;function me(e){if(e.head.querySelector(`[${fe}]`))return;let t=e.createElement(`style`);t.setAttribute(fe,`true`),t.textContent=M,e.head.append(t)}function he(e,t){if(t.head.querySelector(`[${pe}="${e}"]`))return;let n=le(e);if(!n.trim())return;let r=t.createElement(`style`);r.setAttribute(pe,e),r.textContent=n,t.head.append(r)}function ge(e,t=document){de()&&(me(t),he(e,t))}function _e(e,t=document){if(typeof e==`string`){let n=t.querySelector(e);if(!n)throw Error(`@stackline/loading could not find target "${e}".`);return n}return e instanceof HTMLElement?e:t.body}function ve(e){if(e===document.body||e===document.documentElement)return()=>void 0;let t=window.getComputedStyle(e).position;if(t&&t!==`static`)return()=>void 0;let n=e.style.position;return e.style.position=`relative`,()=>{if(n){e.style.position=n;return}e.style.removeProperty(`position`)}}var ye=0;function be(e=`rvl`){return ye+=1,`${e}-${ye}`}var xe=class{constructor(e={}){if(b(this,`id`,be()),b(this,`element`),b(this,`state`,{mounted:!1,visible:!1,destroyed:!1,pending:null}),b(this,`bodyElement`),b(this,`visualElement`),b(this,`labelElement`),b(this,`srElement`),b(this,`options`),b(this,`mountedTarget`,null),b(this,`restorePositionContext`,null),b(this,`showTimeoutId`,null),b(this,`hideTimeoutId`,null),b(this,`showResolver`,null),b(this,`hideResolver`,null),b(this,`shownAt`,0),!de())throw Error(`@stackline/loading requires a browser-like DOM to create loaders.`);this.options=ie(e),ge(this.options.variant),this.element=document.createElement(`div`),this.element.dataset.rvlLoader=this.id,this.bodyElement=document.createElement(`div`),this.bodyElement.className=`rvl-body`,this.visualElement=document.createElement(`div`),this.visualElement.className=`rvl-visual`,this.visualElement.setAttribute(`aria-hidden`,`true`),this.labelElement=document.createElement(`span`),this.labelElement.className=`rvl-label`,this.srElement=document.createElement(`span`),this.srElement.className=`rvl-sr-only`,this.bodyElement.append(this.visualElement,this.labelElement,this.srElement),this.element.append(this.bodyElement),this.render(),(this.options.target||this.options.fullscreen)&&this.mount(this.options.target),this.options.visible?this.show():this.element.hidden=!0}getOptions(){return{...this.options,style:{...this.options.style}}}mount(e){this.assertAlive();let t=this.resolveMountTarget(e);return this.mountedTarget===t&&this.state.mounted?this:(this.unmount(),this.options.overlay&&!this.options.fullscreen&&(this.restorePositionContext=ve(t)),t.append(this.element),this.mountedTarget=t,this.state.mounted=!0,this)}unmount(){return this.element.parentElement&&this.element.parentElement.removeChild(this.element),this.restorePositionContext&&=(this.restorePositionContext(),null),this.mountedTarget=null,this.state.mounted=!1,this}show(){return this.assertAlive(),this.state.visible&&this.state.pending!==`hide`?Promise.resolve():(this.clearHideTimer(!0),this.state.pending=`show`,this.state.mounted||this.mount(this.options.target),new Promise(e=>{let t=()=>{this.state.pending=null,this.state.visible=!0,this.shownAt=Date.now(),this.element.hidden=!1,this.syncVisibility(),this.showResolver?.(),this.showResolver=null};if(this.clearShowTimer(!0),this.showResolver=e,this.options.delay>0){this.showTimeoutId=window.setTimeout(t,this.options.delay);return}t()}))}hide(){return this.assertAlive(),!this.state.visible&&this.state.pending!==`show`?(this.syncVisibility(),Promise.resolve()):(this.clearShowTimer(!0),this.state.pending=`hide`,new Promise(e=>{let t=()=>{this.state.pending=null,this.state.visible=!1,this.syncVisibility(),this.hideResolver?.(),this.hideResolver=null};if(this.clearHideTimer(!0),this.hideResolver=e,!this.state.visible){t();return}let n=this.shownAt?Date.now()-this.shownAt:0,r=Math.max(0,this.options.minVisible-n);if(r>0){this.hideTimeoutId=window.setTimeout(t,r);return}t()}))}toggle(e){return(typeof e==`boolean`?e:!this.state.visible)?this.show():this.hide()}update(e){this.assertAlive();let t=this.resolveMountTarget();this.options=ie({...this.options,...e,style:{...this.options.style,...e.style??{}}}),ge(this.options.variant),this.render();let n=this.resolveMountTarget();return t!==n&&this.state.mounted&&this.mount(n),this}destroy(){this.state.destroyed||(this.clearShowTimer(!0),this.clearHideTimer(!0),this.unmount(),this.state.destroyed=!0)}render(){let e=w(this.options.variant);this.element.className=[`rvl-loader`,`rvl-variant--${this.options.variant}`,this.options.inline?`is-inline`:`is-block`,this.options.overlay?`is-overlay`:``,this.options.fullscreen?`is-fullscreen`:``,this.options.centered?`is-centered`:``,this.options.label?`has-label`:``,this.options.className].filter(Boolean).join(` `),this.element.setAttribute(`role`,`status`),this.element.setAttribute(`aria-live`,this.options.ariaLive),this.element.setAttribute(`aria-atomic`,`true`),this.element.setAttribute(`aria-busy`,this.state.visible?`true`:`false`),this.element.dataset.variant=this.options.variant,this.element.style.cssText=``,this.element.style.setProperty(`--rvl-size`,this.options.size),this.element.style.setProperty(`--rvl-color`,this.options.color),this.element.style.setProperty(`--rvl-secondary-color`,this.options.secondaryColor),this.element.style.setProperty(`--rvl-speed`,`${this.options.speed}ms`),this.element.style.setProperty(`--rvl-thickness`,`${this.options.thickness}px`),this.element.style.setProperty(`--rvl-opacity`,`${this.options.opacity}`),this.element.style.setProperty(`--rvl-background`,this.options.background),this.element.style.setProperty(`--rvl-blur`,`${this.options.blur}px`),this.element.style.setProperty(`--rvl-radius`,this.options.radius),this.element.style.setProperty(`--rvl-gap`,`${this.options.gap}px`),this.element.style.setProperty(`--rvl-z-index`,`${this.options.zIndex}`),this.element.style.setProperty(`animation-direction`,this.options.direction),D(this.element,this.options.style),this.labelElement.textContent=this.options.label,this.srElement.textContent=this.options.label,this.options.label?this.element.setAttribute(`aria-label`,this.options.label):this.element.removeAttribute(`aria-label`),this.element.title=e.label,this.visualElement.replaceChildren();for(let e=0;e<this.options.count;e+=1){let t=document.createElement(`span`);t.className=`rvl-part`,t.style.setProperty(`--part-index`,String(e)),this.visualElement.append(t)}this.syncVisibility()}syncVisibility(){this.element.hidden=!this.state.visible,this.element.setAttribute(`aria-busy`,this.state.visible?`true`:`false`),this.element.setAttribute(`aria-hidden`,this.state.visible?`false`:`true`)}resolveMountTarget(e){return this.options.fullscreen?document.body:_e(e??this.options.target)}clearShowTimer(e=!1){this.showTimeoutId!=null&&(window.clearTimeout(this.showTimeoutId),this.showTimeoutId=null),e&&this.showResolver&&(this.showResolver(),this.showResolver=null)}clearHideTimer(e=!1){this.hideTimeoutId!=null&&(window.clearTimeout(this.hideTimeoutId),this.hideTimeoutId=null),e&&this.hideResolver&&(this.hideResolver(),this.hideResolver=null)}assertAlive(){if(this.state.destroyed)throw Error(`@stackline/loading cannot operate on a destroyed loader.`)}};function Se(e={}){return new xe(e)}var Ce=typeof window<`u`?g.useLayoutEffect:g.useEffect,we=o((e=>{l();var t=d(),n=60103;if(e.Fragment=60107,typeof Symbol==`function`&&Symbol.for){var r=Symbol.for;n=r(`react.element`),e.Fragment=r(`react.fragment`)}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)a.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:i.current}}e.jsx=s,e.jsxs=s})),N=o(((e,t)=>{t.exports=we()}))();function Te(e,t,n){return e.current?n.current?(n.current.update({...t,target:e.current}),n.current):(n.current=Se({...t,target:e.current,visible:!1}),n.current):null}var Ee=(0,g.forwardRef)(function({options:e={},visible:t=!0,onCreate:n,onShown:r,onHidden:i,onUpdated:a,onDestroyed:o,...s},c){let l=(0,g.useRef)(null),u=(0,g.useRef)(null);return(0,g.useImperativeHandle)(c,()=>({getInstance(){return u.current},show(){return u.current?u.current.show():Promise.resolve()},hide(){return u.current?u.current.hide():Promise.resolve()},toggle(e){return u.current?u.current.toggle(e):Promise.resolve()},update(e){u.current&&u.current.update(e)},destroy(){if(u.current){let e=u.current;e.destroy(),u.current=null,o?.(e)}}}),[o]),Ce(()=>{let t=Te(l,e,u);if(t)return n?.(t),()=>{if(u.current){let e=u.current;e.destroy(),u.current=null,o?.(e)}}},[]),(0,g.useEffect)(()=>{let n=Te(l,e,u);if(n){if(a?.(n),t){n.show().then(()=>{r?.(n)});return}n.hide().then(()=>{i?.(n)})}},[e,t,i,r,a]),(0,N.jsx)(`div`,{ref:l,...s})});function De(e,t,n){if(!e.current)return null;let r={overlay:!0,centered:!0,...t,target:e.current};return n.current?(n.current.update(r),n.current):(n.current=Se({...r,visible:!1}),n.current)}var Oe=(0,g.forwardRef)(function({children:e,options:t={},visible:n=!0,onCreate:r,onShown:i,onHidden:a,onUpdated:o,onDestroyed:s,style:c,...l},u){let d=(0,g.useRef)(null),f=(0,g.useRef)(null);return(0,g.useImperativeHandle)(u,()=>({getInstance(){return f.current},show(){return f.current?f.current.show():Promise.resolve()},hide(){return f.current?f.current.hide():Promise.resolve()},toggle(e){return f.current?f.current.toggle(e):Promise.resolve()},update(e){f.current&&f.current.update(e)},destroy(){if(f.current){let e=f.current;e.destroy(),f.current=null,s?.(e)}}}),[s]),Ce(()=>{let e=De(d,t,f);if(e)return r?.(e),()=>{if(f.current){let e=f.current;e.destroy(),f.current=null,s?.(e)}}},[]),(0,g.useEffect)(()=>{let e=De(d,t,f);if(e){if(o?.(e),n){e.show().then(()=>{i?.(e)});return}e.hide().then(()=>{a?.(e)})}},[t,n,a,i,o]),(0,N.jsx)(`div`,{ref:d,style:{position:`relative`,...c},...l,children:e})});function ke(e,t,n){let r={...e,...n||{}};return t!==void 0&&(r.target=t),r}function Ae(e={}){let t=(0,g.useRef)(null),n=(0,g.useRef)(e);n.current=e,(0,g.useEffect)(()=>()=>{t.current&&=(t.current.destroy(),null)},[]);function r(e,r){let i=ke(n.current,e,r);return t.current?(i.target!==void 0&&t.current.mount(i.target),t.current.update(i),t.current):(t.current=Se({...i,visible:!1}),t.current)}return{create(e,t){return r(e,t)},mount(e,t){return r(e,t)},async show(e,t){let n=r(e,t);return await n.show(),n},hide(){return t.current?t.current.hide():Promise.resolve()},toggle(e){return t.current?t.current.toggle(e):Promise.resolve()},update(e){return t.current?(t.current.update(e),t.current):null},destroy(){t.current&&=(t.current.destroy(),null)},getInstance(){return t.current}}}var je=(ee||[]).map(e=>({value:e.value,label:e.label})),Me=[{id:`default`,label:`Default`,description:`A clean centered stage for checking size, color, speed, and label choices.`},{id:`dashboard`,label:`Dashboard`,description:`Keep product cards visible while the active region stays anchored to a loading state.`},{id:`table`,label:`Table`,description:`A common analytics refresh pattern where the user should keep their table context.`},{id:`page`,label:`Page`,description:`Simulate a route-level or workspace-level loading state inside the docs shell.`},{id:`modal`,label:`Modal`,description:`Load only the modal body while keeping the dialog frame stable.`},{id:`chart`,label:`Chart`,description:`Useful for analytical surfaces where movement should feel intentional and data-centric.`},{id:`upload`,label:`Upload`,description:`A drop zone preview for uploads, media workflows, and file-heavy forms.`}],Ne={variant:`orbit`,size:60,speed:900,color:`#2563eb`,secondaryColor:`#c7d2fe`,overlay:!1,fullscreen:!1,centered:!0,label:`Loading preview`,delay:0,minVisible:240,reducedMotion:!1};function Pe(e,t){let n=``;for(let r=0;r<t;r+=1)n+=e;return n}function Fe(e){return String(e).split(`'`).join(`\\'`)}function Ie(e){let t=e.fullscreen,n=e.overlay||t,r={variant:e.variant,size:e.size,speed:e.speed,color:e.color,secondaryColor:e.secondaryColor,centered:n?!0:e.centered,delay:e.delay,minVisible:e.minVisible};return e.label&&(r.label=e.label),n&&(r.overlay=!0),t&&(r.background=`rgba(15, 23, 42, 0.54)`),r}function Le(e,t,n=!1){let r=Pe(` `,t),i=Pe(` `,t+2),a=[`{`,`${i}variant: '${e.variant}',`,`${i}size: ${e.size},`,`${i}speed: ${e.speed},`,`${i}color: '${e.color}',`,`${i}secondaryColor: '${e.secondaryColor}',`];return(e.overlay||e.fullscreen||n)&&a.push(`${i}overlay: true,`),e.fullscreen&&(a.push(`${i}fullscreen: true,`),a.push(`${i}background: 'rgba(15, 23, 42, 0.54)',`)),e.centered&&!e.fullscreen&&a.push(`${i}centered: true,`),e.label&&a.push(`${i}label: '${Fe(e.label)}',`),e.delay>0&&a.push(`${i}delay: ${e.delay},`),e.minVisible!==240&&a.push(`${i}minVisible: ${e.minVisible},`),a.push(`${r}}`),a.join(`
`)}function Re(e){return e===`modal`?[`<div className="modal-shell">`,`  <div className="modal-header" />`,`  <div className="modal-body">`,`    <div className="modal-line" />`,`    <div className="modal-line short" />`,`    <div className="modal-line" />`,`  </div>`,`</div>`].join(`
`):e===`table`?[`<div className="table-shell">`,`  <div className="table-head">`,`    <span>Status</span>`,`    <span>Customer</span>`,`    <span>Plan</span>`,`    <span>MRR</span>`,`  </div>`,`  <div className="table-row">...</div>`,`  <div className="table-row">...</div>`,`</div>`].join(`
`):e===`chart`?[`<div className="chart-panel">`,`  <div className="chart-bar" />`,`  <div className="chart-bar" />`,`  <div className="chart-bar" />`,`</div>`].join(`
`):e===`upload`?[`<div className="upload-zone">`,`  <div className="upload-icon" />`,`  <p>Drop files here</p>`,`</div>`].join(`
`):e===`page`?[`<section className="page-shell">`,`  <header className="page-topbar" />`,`  <div className="page-grid">...</div>`,`</section>`].join(`
`):[`<section className="dashboard-cards">`,`  <div className="card" />`,`  <div className="card" />`,`  <div className="card card-wide" />`,`</section>`].join(`
`)}function ze(e,t){return e.fullscreen?[`import { useLoadingController } from '@stackline/react-loading';`,``,`export function WorkspaceAction() {`,`  const loading = useLoadingController();`,``,`  async function showLoader() {`,`    const instance = await loading.show(document.body, ${Le(e,6,!0)});`,`    window.setTimeout(() => {`,`      void instance.hide();`,`    }, 1200);`,`  }`,``,`  return <button onClick={showLoader}>Show fullscreen loader</button>;`,`}`].join(`
`):t===`default`&&!e.overlay?[`import { Loading } from '@stackline/react-loading';`,``,`export function LoadingPreview() {`,`  return (`,`    <Loading`,`      visible={isLoading}`,`      options=${Le(e,6)}`,`      style={{ minHeight: 220 }}`,`    />`,`  );`,`}`].join(`
`):[`import { LoadingOverlay } from '@stackline/react-loading';`,``,`export function LoadingSurface() {`,`  return (`,`    <LoadingOverlay`,`      visible={isLoading}`,`      options=${Le(e,6,!0)}`,`    >`,Re(t).split(`
`).map(e=>`      ${e}`).join(`
`),`    </LoadingOverlay>`,`  );`,`}`].join(`
`)}function Be({fullscreen:e,options:t,surface:n,visible:r}){return n===`default`&&!t.overlay?(0,N.jsx)(`div`,{className:`playground-surface playground-surface--clean ${e?`is-fullscreen-simulated`:``}`,children:(0,N.jsx)(Ee,{visible:r,options:t,className:`playground-loader-host`,style:{minHeight:e?400:320,width:`100%`}})}):n===`table`?(0,N.jsxs)(Oe,{visible:r,options:t,className:`playground-surface surface-table ${e?`is-fullscreen-simulated`:``}`,children:[(0,N.jsxs)(`div`,{className:`playground-table-head`,children:[(0,N.jsx)(`span`,{children:`Status`}),(0,N.jsx)(`span`,{children:`Customer`}),(0,N.jsx)(`span`,{children:`Plan`}),(0,N.jsx)(`span`,{children:`MRR`})]}),Array.from({length:4},(e,t)=>(0,N.jsxs)(`div`,{className:`playground-table-row`,children:[(0,N.jsx)(`span`,{children:(0,N.jsx)(`i`,{})}),(0,N.jsx)(`span`,{children:(0,N.jsx)(`i`,{})}),(0,N.jsx)(`span`,{children:(0,N.jsx)(`i`,{})}),(0,N.jsx)(`span`,{children:(0,N.jsx)(`i`,{})})]},`row-${t}`))]}):n===`page`?(0,N.jsxs)(Oe,{visible:r,options:t,className:`playground-surface surface-page ${e?`is-fullscreen-simulated`:``}`,children:[(0,N.jsx)(`div`,{className:`page-topbar`}),(0,N.jsxs)(`div`,{className:`page-grid`,children:[(0,N.jsx)(`div`,{className:`page-tile`}),(0,N.jsx)(`div`,{className:`page-tile`}),(0,N.jsx)(`div`,{className:`page-tile`}),(0,N.jsx)(`div`,{className:`page-tile`})]})]}):n===`modal`?(0,N.jsx)(`div`,{className:`playground-surface surface-modal ${e?`is-fullscreen-simulated`:``}`,children:(0,N.jsxs)(`div`,{className:`modal-shell`,children:[(0,N.jsx)(`div`,{className:`modal-header`}),(0,N.jsxs)(Oe,{visible:r,options:t,className:`modal-body`,children:[(0,N.jsx)(`div`,{className:`modal-line`}),(0,N.jsx)(`div`,{className:`modal-line short`}),(0,N.jsx)(`div`,{className:`modal-line`})]})]})}):n===`chart`?(0,N.jsxs)(Oe,{visible:r,options:t,className:`playground-surface surface-chart ${e?`is-fullscreen-simulated`:``}`,children:[(0,N.jsx)(`div`,{className:`chart-bar`,style:{height:`28%`}}),(0,N.jsx)(`div`,{className:`chart-bar`,style:{height:`46%`}}),(0,N.jsx)(`div`,{className:`chart-bar`,style:{height:`60%`}}),(0,N.jsx)(`div`,{className:`chart-bar`,style:{height:`38%`}}),(0,N.jsx)(`div`,{className:`chart-bar`,style:{height:`72%`}}),(0,N.jsx)(`div`,{className:`chart-bar`,style:{height:`55%`}})]}):n===`upload`?(0,N.jsxs)(Oe,{visible:r,options:t,className:`playground-surface surface-upload ${e?`is-fullscreen-simulated`:``}`,children:[(0,N.jsx)(`div`,{className:`upload-icon`}),(0,N.jsx)(`div`,{className:`upload-title`,children:`Drop files here`}),(0,N.jsx)(`div`,{className:`upload-caption`,children:`PNG, SVG, PDF up to 25 MB`})]}):(0,N.jsxs)(Oe,{visible:r,options:t,className:`playground-surface surface-card-grid ${e?`is-fullscreen-simulated`:``}`,children:[(0,N.jsx)(`div`,{className:`surface-card-cell`}),(0,N.jsx)(`div`,{className:`surface-card-cell`}),(0,N.jsx)(`div`,{className:`surface-card-cell wide`})]})}function Ve(){let[e,t]=(0,g.useState)(Ne),[n,r]=(0,g.useState)(`default`),[i,a]=(0,g.useState)(`Copy code`),[o,s]=(0,g.useState)(!0),c=Ie(e),l=ze(e,n);function u(e,n){t(t=>({...t,[e]:n}))}function d(){s(!1),window.setTimeout(()=>{s(!0)},40)}async function f(){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(l);else{let e=document.createElement(`textarea`);e.value=l,e.setAttribute(`readonly`,`true`),e.style.position=`absolute`,e.style.left=`-9999px`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e)}a(`Copied`)}catch{a(`Copy failed`)}window.setTimeout(()=>{a(`Copy code`)},1200)}let p=Me.find(e=>e.id===n)?.description||``;return(0,N.jsxs)(`section`,{className:`demo-card playground-card`,id:`playground`,children:[(0,N.jsx)(`div`,{className:`demo-head`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Playground`}),(0,N.jsx)(`p`,{children:`Use the React wrapper against the same kind of interactive preview shell as the core docs.`})]})}),(0,N.jsxs)(`div`,{className:`playground-shell`,children:[(0,N.jsxs)(`form`,{className:`playground-controls`,children:[(0,N.jsxs)(`div`,{className:`field`,children:[(0,N.jsx)(`label`,{htmlFor:`playground-variant`,children:`Variant`}),(0,N.jsx)(`select`,{id:`playground-variant`,value:e.variant,onChange:e=>u(`variant`,e.target.value),children:je.map(e=>(0,N.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,N.jsxs)(`div`,{className:`field`,children:[(0,N.jsxs)(`label`,{htmlFor:`playground-size`,children:[`Size `,(0,N.jsxs)(`span`,{children:[e.size,`px`]})]}),(0,N.jsx)(`input`,{id:`playground-size`,type:`range`,min:`18`,max:`96`,value:e.size,onChange:e=>u(`size`,Number(e.target.value))})]}),(0,N.jsxs)(`div`,{className:`field`,children:[(0,N.jsxs)(`label`,{htmlFor:`playground-speed`,children:[`Speed `,(0,N.jsxs)(`span`,{children:[e.speed,`ms`]})]}),(0,N.jsx)(`input`,{id:`playground-speed`,type:`range`,min:`300`,max:`2200`,step:`50`,value:e.speed,onChange:e=>u(`speed`,Number(e.target.value))})]}),(0,N.jsxs)(`div`,{className:`field two-up`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{htmlFor:`playground-color`,children:`Primary`}),(0,N.jsx)(`input`,{id:`playground-color`,type:`color`,value:e.color,onChange:e=>u(`color`,e.target.value)})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{htmlFor:`playground-secondary-color`,children:`Secondary`}),(0,N.jsx)(`input`,{id:`playground-secondary-color`,type:`color`,value:e.secondaryColor,onChange:e=>u(`secondaryColor`,e.target.value)})]})]}),(0,N.jsxs)(`div`,{className:`field`,children:[(0,N.jsx)(`label`,{htmlFor:`playground-label`,children:`Label`}),(0,N.jsx)(`input`,{id:`playground-label`,type:`text`,value:e.label,onChange:e=>u(`label`,e.target.value)})]}),(0,N.jsxs)(`div`,{className:`field two-up`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{htmlFor:`playground-delay`,children:`Delay`}),(0,N.jsx)(`input`,{id:`playground-delay`,type:`number`,min:`0`,step:`50`,value:e.delay,onChange:e=>u(`delay`,Number(e.target.value))})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{htmlFor:`playground-min-visible`,children:`Min visible`}),(0,N.jsx)(`input`,{id:`playground-min-visible`,type:`number`,min:`0`,step:`50`,value:e.minVisible,onChange:e=>u(`minVisible`,Number(e.target.value))})]})]}),(0,N.jsxs)(`div`,{className:`toggle-row`,children:[(0,N.jsxs)(`label`,{children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:e.overlay,onChange:e=>u(`overlay`,e.target.checked)}),` Overlay`]}),(0,N.jsxs)(`label`,{children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:e.fullscreen,onChange:e=>u(`fullscreen`,e.target.checked)}),` Fullscreen`]}),(0,N.jsxs)(`label`,{children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:e.centered,onChange:e=>u(`centered`,e.target.checked)}),` Centered`]}),(0,N.jsxs)(`label`,{children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:e.reducedMotion,onChange:e=>u(`reducedMotion`,e.target.checked)}),` Reduced motion`]})]}),(0,N.jsxs)(`div`,{className:`playground-actions`,children:[(0,N.jsx)(`button`,{type:`button`,onClick:d,children:`Replay timing`}),(0,N.jsx)(`button`,{type:`button`,className:`ghost-button`,onClick:f,children:i})]})]}),(0,N.jsxs)(`div`,{className:`playground-preview`,children:[(0,N.jsx)(`div`,{className:`playground-preview-tabs`,role:`tablist`,"aria-label":`Preview surfaces`,children:Me.map(e=>(0,N.jsx)(`button`,{type:`button`,role:`tab`,className:`playground-preview-tab ${n===e.id?`is-active`:``}`,"aria-selected":n===e.id,onClick:()=>r(e.id),children:e.label},e.id))}),(0,N.jsx)(`p`,{className:`playground-description`,children:p}),(0,N.jsx)(`div`,{className:`playground-stage ${e.reducedMotion?`is-reduced-motion`:``}`,children:(0,N.jsx)(Be,{fullscreen:e.fullscreen,options:c,surface:n,visible:o})}),(0,N.jsx)(`pre`,{className:`code-block code-preview`,children:l})]})]})]})}var He=`npm install @stackline/react-loading@17`,Ue=`import { Loading } from '@stackline/react-loading';

export function LoadingPreview() {
  return (
    <Loading
      visible
      options={{
        variant: 'orbit',
        size: 56,
        centered: true,
        label: 'Loading dashboard'
      }}
      style={{ minHeight: 180 }}
    />
  );
}`,We=`import { LoadingOverlay } from '@stackline/react-loading';

export function RevenueCard({ isLoading }: { isLoading: boolean }) {
  return (
    <LoadingOverlay
      visible={isLoading}
      options={{
        overlay: true,
        centered: true,
        variant: 'glass-spinner',
        label: 'Loading revenue card'
      }}
    >
      <section className="card-shell">...</section>
    </LoadingOverlay>
  );
}`,Ge=`import { useLoadingController } from '@stackline/react-loading';

export function WorkspaceAction() {
  const loading = useLoadingController();

  async function showLoader() {
    const instance = await loading.show(document.body, {
      fullscreen: true,
      overlay: true,
      centered: true,
      variant: 'galaxy',
      label: 'Loading workspace'
    });

    window.setTimeout(() => {
      void instance.hide();
    }, 1200);
  }

  return <button onClick={showLoader}>Show fullscreen loader</button>;
}`;function Ke(e){return`${new Date().toLocaleTimeString(`en-US`,{hour12:!1})}  ${e}`}function qe({code:e,compact:t=!1}){let[n,r]=(0,g.useState)(`Copy`);async function i(){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,`true`),t.style.position=`absolute`,t.style.left=`-9999px`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t)}r(`Copied`)}catch{r(`Copy failed`)}window.setTimeout(()=>{r(`Copy`)},1200)}return(0,N.jsxs)(`div`,{className:`code-block-shell ${t?`is-compact`:``}`,children:[(0,N.jsx)(`div`,{className:`code-block-head`,children:(0,N.jsx)(`button`,{type:`button`,className:`ghost-button copy-button`,onClick:i,children:n})}),(0,N.jsx)(`pre`,{className:`code-block ${t?`compact`:``}`,children:e})]})}function Je({title:e,description:t,code:n,children:r}){return(0,N.jsxs)(`section`,{className:`demo-card`,children:[(0,N.jsx)(`div`,{className:`demo-head`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:e}),(0,N.jsx)(`p`,{children:t})]})}),n?(0,N.jsx)(qe,{code:n}):null,r]})}function Ye({reactLine:e}){let t=Ae(),[n,r]=(0,g.useState)([Ke(`React ${e} docs ready.`)]),[i,a]=(0,g.useState)(!0),[o,s]=(0,g.useState)(!1);function c(e){r(t=>[Ke(e),...t].slice(0,16))}async function l(){c(`Showing fullscreen loader from useLoadingController.`);let e=await t.show(document.body,{fullscreen:!0,overlay:!0,centered:!0,variant:`galaxy`,color:`#38bdf8`,secondaryColor:`#bfdbfe`,minVisible:500,label:`Loading workspace`});window.setTimeout(()=>{e.hide().then(()=>{c(`Fullscreen loader hidden.`)})},1300)}function u(){a(!1),window.setTimeout(()=>{a(!0),c(`Dashboard overlay replayed.`)},40)}function d(){s(!0),c(`Button loading state activated.`),window.setTimeout(()=>{s(!1),c(`Button loading state cleared.`)},1200)}return(0,N.jsxs)(`div`,{className:`app-shell`,children:[(0,N.jsxs)(`header`,{className:`hero-grid`,children:[(0,N.jsxs)(`section`,{className:`hero-card hero-main`,children:[(0,N.jsxs)(`span`,{className:`badge`,children:[`React `,e,` · Loading wrapper`]}),(0,N.jsx)(`h1`,{children:`@stackline/react-loading`}),(0,N.jsx)(`p`,{children:`Maintained React bindings for the Stackline loading toolkit. Keep the loading engine framework-agnostic, then add React-native ergonomics for declarative components, container overlays, and fullscreen programmatic states.`}),(0,N.jsxs)(`div`,{className:`hero-actions`,children:[(0,N.jsx)(`a`,{className:`button primary`,href:`#playground`,children:`Open playground`}),(0,N.jsx)(`a`,{className:`button secondary`,href:`https://github.com/alexandroit/react-loading#readme`,rel:`noreferrer`,target:`_blank`,children:`README`})]}),(0,N.jsxs)(`div`,{className:`hero-notes`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:`Declarative`}),` Use a plain React component when the loader itself is what you want to render.`]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:`Overlay-ready`}),` Wrap a card, table, modal body, chart shell, or upload zone without rewriting the surface.`]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:`Programmatic`}),` Use a hook for fullscreen or route-level loading where document-level control is useful.`]})]})]}),(0,N.jsxs)(`section`,{className:`hero-card hero-setup`,children:[(0,N.jsx)(`h2`,{children:`Setup in 3 steps`}),(0,N.jsxs)(`div`,{className:`step`,children:[(0,N.jsx)(`span`,{children:`1`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:`Install the wrapper`}),(0,N.jsx)(qe,{code:He,compact:!0})]})]}),(0,N.jsxs)(`div`,{className:`step`,children:[(0,N.jsx)(`span`,{children:`2`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:`Render a component or wrap a surface`}),(0,N.jsx)(qe,{code:`<Loading visible options={{ variant: 'orbit' }} />`,compact:!0})]})]}),(0,N.jsxs)(`div`,{className:`step`,children:[(0,N.jsx)(`span`,{children:`3`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:`Use a hook for fullscreen workflows`}),(0,N.jsx)(qe,{code:`const loading = useLoadingController();`,compact:!0})]})]})]})]}),(0,N.jsx)(`div`,{className:`playground-row`,children:(0,N.jsx)(Ve,{})}),(0,N.jsxs)(`main`,{className:`content-grid`,id:`examples`,children:[(0,N.jsxs)(`section`,{className:`examples-column`,children:[(0,N.jsx)(Je,{title:`Basic component`,description:`Use the React component when the loading element itself is the thing being rendered in the tree.`,code:Ue,children:(0,N.jsx)(`div`,{className:`surface-frame`,children:(0,N.jsx)(Ee,{visible:!0,options:{variant:`orbit`,size:56,centered:!0,color:`#2563eb`,secondaryColor:`#bfdbfe`,label:`Loading dashboard`},className:`component-stage`,style:{minHeight:220}})})}),(0,N.jsxs)(Je,{title:`Dashboard card overlay`,description:`Wrap an existing card surface and let the loader overlay the active region while the rest of the UI stays stable.`,code:We,children:[(0,N.jsx)(`div`,{className:`inline-actions`,children:(0,N.jsx)(`button`,{type:`button`,className:`button secondary`,onClick:u,children:`Replay card loader`})}),(0,N.jsxs)(Oe,{visible:i,options:{overlay:!0,centered:!0,variant:`glass-spinner`,color:`#2563eb`,secondaryColor:`#dbeafe`,label:`Loading revenue card`,minVisible:400},className:`card-shell`,children:[(0,N.jsx)(`div`,{className:`card-metric`,children:`$128,400`}),(0,N.jsx)(`div`,{className:`card-caption`,children:`Quarterly expansion pipeline`}),(0,N.jsxs)(`div`,{className:`card-bars`,children:[(0,N.jsx)(`span`,{style:{height:`46%`}}),(0,N.jsx)(`span`,{style:{height:`68%`}}),(0,N.jsx)(`span`,{style:{height:`54%`}}),(0,N.jsx)(`span`,{style:{height:`79%`}})]})]})]}),(0,N.jsx)(Je,{title:`Button and submit states`,description:`Use the same overlay wrapper around a button group when a request should stay anchored to the action that triggered it.`,children:(0,N.jsx)(`div`,{className:`button-surface`,children:(0,N.jsx)(Oe,{visible:o,options:{overlay:!0,centered:!0,variant:`liquid-pill`,size:42,label:``},className:`button-shell`,children:(0,N.jsx)(`button`,{type:`button`,className:`cta-button`,onClick:d,children:`Sync invoice`})})})}),(0,N.jsx)(Je,{title:`Fullscreen and programmatic hook`,description:`Use the hook when the loading state is tied to navigation, bootstrapping, or a larger workspace transition.`,code:Ge,children:(0,N.jsx)(`div`,{className:`inline-actions`,children:(0,N.jsx)(`button`,{type:`button`,className:`button primary`,onClick:l,children:`Show fullscreen loader`})})})]}),(0,N.jsxs)(`aside`,{className:`sidebar-column`,children:[(0,N.jsxs)(`section`,{className:`demo-card side-card`,children:[(0,N.jsx)(`div`,{className:`demo-head`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Wrapper surface`}),(0,N.jsx)(`p`,{children:`The public API stays intentionally small so the real behavior continues to live in the core loading package.`})]})}),(0,N.jsxs)(`ul`,{className:`feature-list`,children:[(0,N.jsxs)(`li`,{children:[(0,N.jsx)(`code`,{children:`<Loading />`}),` for component-first loading states.`]}),(0,N.jsxs)(`li`,{children:[(0,N.jsx)(`code`,{children:`<LoadingOverlay />`}),` for cards, tables, modals, charts, and buttons.`]}),(0,N.jsxs)(`li`,{children:[(0,N.jsx)(`code`,{children:`useLoadingController()`}),` for fullscreen and programmatic flows.`]}),(0,N.jsxs)(`li`,{children:[`Core exports like `,(0,N.jsx)(`code`,{children:`loaderVariants`}),`, `,(0,N.jsx)(`code`,{children:`createLoader`}),`, and theme helpers stay available.`]})]})]}),(0,N.jsxs)(`section`,{className:`demo-card side-card`,children:[(0,N.jsx)(`div`,{className:`demo-head`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Release lines`}),(0,N.jsx)(`p`,{children:`Each maintained runtime line gets its own docs build and npm release.`})]})}),(0,N.jsxs)(`div`,{className:`release-links`,children:[(0,N.jsx)(`a`,{href:`../react-17/`,children:`React 17`}),(0,N.jsx)(`a`,{href:`../react-18/`,children:`React 18`}),(0,N.jsx)(`a`,{href:`../react-19/`,children:`React 19`})]})]}),(0,N.jsxs)(`section`,{className:`demo-card side-card`,children:[(0,N.jsx)(`div`,{className:`demo-head`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Event log`}),(0,N.jsx)(`p`,{children:`Small runtime notes from the docs interactions while you test the wrapper.`})]})}),(0,N.jsx)(`div`,{className:`event-log`,children:n.map(e=>(0,N.jsx)(`div`,{className:`log-line`,children:e},e))})]})]})]})]})}_.render((0,N.jsx)(Ye,{reactLine:`17.0.2`}),document.getElementById(`root`));