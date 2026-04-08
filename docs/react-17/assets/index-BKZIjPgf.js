var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o(((e,t)=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(e==null)throw TypeError(`Object.assign cannot be called with null or undefined`);return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String(`abc`);if(e[5]=`de`,Object.getOwnPropertyNames(e)[0]===`5`)return!1;for(var t={},n=0;n<10;n++)t[`_`+String.fromCharCode(n)]=n;if(Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(``)!==`0123456789`)return!1;var r={};return`abcdefghijklmnopqrst`.split(``).forEach(function(e){r[e]=e}),Object.keys(Object.assign({},r)).join(``)===`abcdefghijklmnopqrst`}catch{return!1}}t.exports=o()?Object.assign:function(e,t){for(var o,s=a(e),c,l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]),o)r.call(o,u)&&(s[u]=o[u]);if(n){c=n(o);for(var d=0;d<c.length;d++)i.call(o,c[d])&&(s[c[d]]=o[c[d]])}}return s}})),u=o((e=>{var t=l(),n=60103,r=60106;e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114;var i=60109,a=60110,o=60112;e.Suspense=60113;var s=60115,c=60116;if(typeof Symbol==`function`&&Symbol.for){var u=Symbol.for;n=u(`react.element`),r=u(`react.portal`),e.Fragment=u(`react.fragment`),e.StrictMode=u(`react.strict_mode`),e.Profiler=u(`react.profiler`),i=u(`react.provider`),a=u(`react.context`),o=u(`react.forward_ref`),e.Suspense=u(`react.suspense`),s=u(`react.memo`),c=u(`react.lazy`)}var d=typeof Symbol==`function`&&Symbol.iterator;function f(e){return typeof e!=`object`||!e?null:(e=d&&e[d]||e[`@@iterator`],typeof e==`function`?e:null)}function p(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(p(85));this.updater.enqueueSetState(this,e,t,`setState`)},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function _(){}_.prototype=g.prototype;function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}var y=v.prototype=new _;y.constructor=v,t(y,g.prototype),y.isPureReactComponent=!0;var b={current:null},x=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,a={},o=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=``+t.key),t)x.call(t,i)&&!S.hasOwnProperty(i)&&(a[i]=t[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:b.current}}function w(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===n}function E(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ee=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?E(``+e.key):t.toString(36)}function O(e,t,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case n:case r:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+D(c,0):a,Array.isArray(o)?(i=``,e!=null&&(i=e.replace(ee,`$&/`)+`/`),O(o,t,i,``,function(e){return e})):o!=null&&(T(o)&&(o=w(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ee,`$&/`)+`/`)+e)),t.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,Array.isArray(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+D(s,l);c+=O(s,t,i,u,o)}else if(u=f(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+D(s,l++),c+=O(s,t,i,u,o);else if(s===`object`)throw t=``+e,Error(p(31,t===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:t));return c}function k(e,t,n){if(e==null)return e;var r=[],i=0;return O(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}var A={current:null};function j(){var e=A.current;if(e===null)throw Error(p(321));return e}var ne={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};e.Children={map:k,forEach:function(e,t,n){k(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return k(e,function(){t++}),t},toArray:function(e){return k(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(p(143));return e}},e.Component=g,e.PureComponent=v,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,e.cloneElement=function(e,r,i){if(e==null)throw Error(p(267,e));var a=t({},e.props),o=e.key,s=e.ref,c=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,c=b.current),r.key!==void 0&&(o=``+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in r)x.call(r,u)&&!S.hasOwnProperty(u)&&(a[u]=r[u]===void 0&&l!==void 0?l[u]:r[u])}var u=arguments.length-2;if(u===1)a.children=i;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:n,type:e.type,key:o,ref:s,props:a,_owner:c}},e.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:i,_context:e},e.Consumer=e},e.createElement=C,e.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:o,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:s,type:e,compare:t===void 0?null:t}},e.useCallback=function(e,t){return j().useCallback(e,t)},e.useContext=function(e,t){return j().useContext(e,t)},e.useDebugValue=function(){},e.useEffect=function(e,t){return j().useEffect(e,t)},e.useImperativeHandle=function(e,t,n){return j().useImperativeHandle(e,t,n)},e.useLayoutEffect=function(e,t){return j().useLayoutEffect(e,t)},e.useMemo=function(e,t){return j().useMemo(e,t)},e.useReducer=function(e,t,n){return j().useReducer(e,t,n)},e.useRef=function(e){return j().useRef(e)},e.useState=function(e){return j().useState(e)},e.version=`17.0.2`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{var t,n,r,i;if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}if(typeof window>`u`||typeof MessageChannel!=`function`){var c=null,l=null,u=function(){if(c!==null)try{var t=e.unstable_now();c(!0,t),c=null}catch(e){throw setTimeout(u,0),e}};t=function(e){c===null?(c=e,setTimeout(u,0)):setTimeout(t,0,e)},n=function(e,t){l=setTimeout(e,t)},r=function(){clearTimeout(l)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,f=window.clearTimeout;if(typeof console<`u`){var p=window.cancelAnimationFrame;typeof window.requestAnimationFrame!=`function`&&console.error(`This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`),typeof p!=`function`&&console.error(`This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`)}var m=!1,h=null,g=-1,_=5,v=0;e.unstable_shouldYield=function(){return e.unstable_now()>=v},i=function(){},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):_=0<e?Math.floor(1e3/e):5};var y=new MessageChannel,b=y.port2;y.port1.onmessage=function(){if(h!==null){var t=e.unstable_now();v=t+_;try{h(!0,t)?b.postMessage(null):(m=!1,h=null)}catch(e){throw b.postMessage(null),e}}else m=!1},t=function(e){h=e,m||(m=!0,b.postMessage(null))},n=function(t,n){g=d(function(){t(e.unstable_now())},n)},r=function(){f(g),g=-1}}function x(e,t){var n=e.length;e.push(t);a:for(;;){var r=n-1>>>1,i=e[r];if(i!==void 0&&0<w(i,t))e[r]=t,e[n]=i,n=r;else break a}}function S(e){return e=e[0],e===void 0?null:e}function C(e){var t=e[0];if(t!==void 0){var n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,i=e.length;r<i;){var a=2*(r+1)-1,o=e[a],s=a+1,c=e[s];if(o!==void 0&&0>w(o,n))c!==void 0&&0>w(c,o)?(e[r]=c,e[s]=n,r=s):(e[r]=o,e[a]=n,r=a);else if(c!==void 0&&0>w(c,n))e[r]=c,e[s]=n,r=s;else break a}}return t}return null}function w(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}var T=[],E=[],ee=1,D=null,O=3,k=!1,te=!1,A=!1;function j(e){for(var t=S(E);t!==null;){if(t.callback===null)C(E);else if(t.startTime<=e)C(E),t.sortIndex=t.expirationTime,x(T,t);else break;t=S(E)}}function ne(e){if(A=!1,j(e),!te)if(S(T)!==null)te=!0,t(M);else{var r=S(E);r!==null&&n(ne,r.startTime-e)}}function M(t,i){te=!1,A&&(A=!1,r()),k=!0;var a=O;try{for(j(i),D=S(T);D!==null&&(!(D.expirationTime>i)||t&&!e.unstable_shouldYield());){var o=D.callback;if(typeof o==`function`){D.callback=null,O=D.priorityLevel;var s=o(D.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?D.callback=s:D===S(T)&&C(T),j(i)}else C(T);D=S(T)}if(D!==null)var c=!0;else{var l=S(E);l!==null&&n(ne,l.startTime-i),c=!1}return c}finally{D=null,O=a,k=!1}}var re=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){te||k||(te=!0,t(M))},e.unstable_getCurrentPriorityLevel=function(){return O},e.unstable_getFirstCallbackNode=function(){return S(T)},e.unstable_next=function(e){switch(O){case 1:case 2:case 3:var t=3;break;default:t=O}var n=O;O=t;try{return e()}finally{O=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=re,e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},e.unstable_scheduleCallback=function(i,a,o){var s=e.unstable_now();switch(typeof o==`object`&&o?(o=o.delay,o=typeof o==`number`&&0<o?s+o:s):o=s,i){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=o+c,i={id:ee++,callback:a,priorityLevel:i,startTime:o,expirationTime:c,sortIndex:-1},o>s?(i.sortIndex=o,x(E,i),S(T)===null&&i===S(E)&&(A?r():A=!0,n(ne,o-s))):(i.sortIndex=c,x(T,i),te||k||(te=!0,t(M))),i},e.unstable_wrapCallback=function(e){var t=O;return function(){var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d(),n=l(),r=p();function i(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}if(!t)throw Error(i(227));var a=new Set,o={};function s(e,t){c(e,t),c(e+`Capture`,t)}function c(e,t){for(o[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m=Object.prototype.hasOwnProperty,h={},g={};function _(e){return m.call(g,e)?!0:m.call(h,e)?!1:f.test(e)?g[e]=!0:(h[e]=!0,!1)}function v(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function y(e,t,n,r){if(t==null||v(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var x={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){x[e]=new b(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];x[t]=new b(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){x[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){x[e]=new b(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){x[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){x[e]=new b(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){x[e]=new b(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){x[e]=new b(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){x[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(S,C);x[t]=new b(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(S,C);x[t]=new b(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(S,C);x[t]=new b(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){x[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){x[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function w(e,t,n,r){var i=x.hasOwnProperty(t)?x[t]:null;(i===null?!r&&!(!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`):i.type===0)||(y(t,n,i,r)&&(n=null),r||i===null?_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var T=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=60103,ee=60106,D=60107,O=60108,k=60114,te=60109,A=60110,j=60112,ne=60113,M=60120,re=60115,ie=60116,ae=60121,oe=60128,se=60129,ce=60130,le=60131;if(typeof Symbol==`function`&&Symbol.for){var N=Symbol.for;E=N(`react.element`),ee=N(`react.portal`),D=N(`react.fragment`),O=N(`react.strict_mode`),k=N(`react.profiler`),te=N(`react.provider`),A=N(`react.context`),j=N(`react.forward_ref`),ne=N(`react.suspense`),M=N(`react.suspense_list`),re=N(`react.memo`),ie=N(`react.lazy`),ae=N(`react.block`),N(`react.scope`),oe=N(`react.opaque.id`),se=N(`react.debug_trace_mode`),ce=N(`react.offscreen`),le=N(`react.legacy_hidden`)}var ue=typeof Symbol==`function`&&Symbol.iterator;function de(e){return typeof e!=`object`||!e?null:(e=ue&&e[ue]||e[`@@iterator`],typeof e==`function`?e:null)}var fe;function pe(e){if(fe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);fe=t&&t[1]||``}return`
`+fe+e}var me=!1;function he(e,t){if(!e||me)return``;me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(e){if(e&&r&&typeof e.stack==`string`){for(var i=e.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s])return`
`+i[o].replace(` at new `,` at `);while(1<=o&&0<=s);break}}}finally{me=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?pe(e):``}function ge(e){switch(e.tag){case 5:return pe(e.type);case 16:return pe(`Lazy`);case 13:return pe(`Suspense`);case 19:return pe(`SuspenseList`);case 0:case 2:case 15:return e=he(e.type,!1),e;case 11:return e=he(e.type.render,!1),e;case 22:return e=he(e.type._render,!1),e;case 1:return e=he(e.type,!0),e;default:return``}}function _e(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case D:return`Fragment`;case ee:return`Portal`;case k:return`Profiler`;case O:return`StrictMode`;case ne:return`Suspense`;case M:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case A:return(e.displayName||`Context`)+`.Consumer`;case te:return(e._context.displayName||`Context`)+`.Provider`;case j:var t=e.render;return t=t.displayName||t.name||``,e.displayName||(t===``?`ForwardRef`:`ForwardRef(`+t+`)`);case re:return _e(e.type);case ae:return _e(e._render);case ie:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}function ve(e){switch(typeof e){case`boolean`:case`number`:case`object`:case`string`:case`undefined`:return e;default:return``}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function P(e){var t=ye(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function be(e){e._valueTracker||=P(e)}function xe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ye(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function F(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Se(e,t){var r=t.checked;return n({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ce(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=ve(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function we(e,t){t=t.checked,t!=null&&w(e,`checked`,t,!1)}function Te(e,t){we(e,t);var n=ve(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?De(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&De(e,t.type,ve(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ee(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function De(e,t,n){(t!==`number`||F(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}function Oe(e){var n=``;return t.Children.forEach(e,function(e){e!=null&&(n+=e)}),n}function ke(e,t){return e=n({children:void 0},t),(t=Oe(t.children))&&(e.children=t),e}function Ae(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ve(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function je(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return n({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Me(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(i(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:ve(n)}}function Ne(e,t){var n=ve(t.value),r=ve(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Pe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}var Fe={html:`http://www.w3.org/1999/xhtml`,mathml:`http://www.w3.org/1998/Math/MathML`,svg:`http://www.w3.org/2000/svg`};function Ie(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Le(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Ie(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Re,ze=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==Fe.svg||`innerHTML`in e)e.innerHTML=t;else{for(Re||=document.createElement(`div`),Re.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Re.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Be(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ve={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Ve).forEach(function(e){He.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ve[t]=Ve[e]})});function Ue(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Ve.hasOwnProperty(e)&&Ve[e]?(``+t).trim():t+`px`}function We(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ue(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ge=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(e,t){if(t){if(Ge[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(!(typeof t.dangerouslySetInnerHTML==`object`&&`__html`in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(i(62))}}function qe(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}function Je(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ye=null,Xe=null,Ze=null;function Qe(e){if(e=Mi(e)){if(typeof Ye!=`function`)throw Error(i(280));var t=e.stateNode;t&&(t=Pi(t),Ye(e.stateNode,e.type,t))}}function $e(e){Xe?Ze?Ze.push(e):Ze=[e]:Xe=e}function et(){if(Xe){var e=Xe,t=Ze;if(Ze=Xe=null,Qe(e),t)for(e=0;e<t.length;e++)Qe(t[e])}}function tt(e,t){return e(t)}function nt(e,t,n,r,i){return e(t,n,r,i)}function rt(){}var it=tt,at=!1,ot=!1;function st(){(Xe!==null||Ze!==null)&&(rt(),et())}function ct(e,t,n){if(ot)return e(t,n);ot=!0;try{return it(e,t,n)}finally{ot=!1,st()}}function lt(e,t){var n=e.stateNode;if(n===null)return null;var r=Pi(n);if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ut=!1;if(u)try{var dt={};Object.defineProperty(dt,`passive`,{get:function(){ut=!0}}),window.addEventListener(`test`,dt,dt),window.removeEventListener(`test`,dt,dt)}catch{ut=!1}function ft(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var pt=!1,mt=null,ht=!1,gt=null,_t={onError:function(e){pt=!0,mt=e}};function vt(e,t,n,r,i,a,o,s,c){pt=!1,mt=null,ft.apply(_t,arguments)}function yt(e,t,n,r,a,o,s,c,l){if(vt.apply(this,arguments),pt){if(pt){var u=mt;pt=!1,mt=null}else throw Error(i(198));ht||(ht=!0,gt=u)}}function bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function St(e){if(bt(e)!==e)throw Error(i(188))}function Ct(e){var t=e.alternate;if(!t){if(t=bt(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return St(a),e;if(o===r)return St(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,r=o;break}if(c===r){s=!0,r=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=a;break}if(c===r){s=!0,r=o,n=a;break}c=c.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function wt(e){if(e=Ct(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Tt(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Et,Dt,Ot,kt,At=!1,jt=[],Mt=null,Nt=null,Pt=null,Ft=new Map,It=new Map,Lt=[],Rt=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function zt(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Bt(e,t){switch(e){case`focusin`:case`focusout`:Mt=null;break;case`dragenter`:case`dragleave`:Nt=null;break;case`mouseover`:case`mouseout`:Pt=null;break;case`pointerover`:case`pointerout`:Ft.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:It.delete(t.pointerId)}}function Vt(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e=zt(t,n,r,i,a),t!==null&&(t=Mi(t),t!==null&&Dt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ht(e,t,n,r,i){switch(t){case`focusin`:return Mt=Vt(Mt,e,t,n,r,i),!0;case`dragenter`:return Nt=Vt(Nt,e,t,n,r,i),!0;case`mouseover`:return Pt=Vt(Pt,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Ft.set(a,Vt(Ft.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,It.set(a,Vt(It.get(a)||null,e,t,n,r,i)),!0}return!1}function Ut(e){var t=ji(e.target);if(t!==null){var n=bt(t);if(n!==null){if(t=n.tag,t===13){if(t=xt(n),t!==null){e.blockedOn=t,kt(e.lanePriority,function(){r.unstable_runWithPriority(e.priority,function(){Ot(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wt(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Mi(n),t!==null&&Dt(t),e.blockedOn=n,!1;t.shift()}return!0}function Gt(e,t,n){Wt(e)&&n.delete(t)}function Kt(){for(At=!1;0<jt.length;){var e=jt[0];if(e.blockedOn!==null){e=Mi(e.blockedOn),e!==null&&Et(e);break}for(var t=e.targetContainers;0<t.length;){var n=kn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&jt.shift()}Mt!==null&&Wt(Mt)&&(Mt=null),Nt!==null&&Wt(Nt)&&(Nt=null),Pt!==null&&Wt(Pt)&&(Pt=null),Ft.forEach(Gt),It.forEach(Gt)}function qt(e,t){e.blockedOn===t&&(e.blockedOn=null,At||(At=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Kt)))}function Jt(e){function t(t){return qt(t,e)}if(0<jt.length){qt(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&qt(Mt,e),Nt!==null&&qt(Nt,e),Pt!==null&&qt(Pt,e),Ft.forEach(t),It.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Ut(n),n.blockedOn===null&&Lt.shift()}function Yt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Xt={animationend:Yt(`Animation`,`AnimationEnd`),animationiteration:Yt(`Animation`,`AnimationIteration`),animationstart:Yt(`Animation`,`AnimationStart`),transitionend:Yt(`Transition`,`TransitionEnd`)},Zt={},Qt={};u&&(Qt=document.createElement(`div`).style,`AnimationEvent`in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),`TransitionEvent`in window||delete Xt.transitionend.transition);function $t(e){if(Zt[e])return Zt[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qt)return Zt[e]=t[n];return e}var en=$t(`animationend`),tn=$t(`animationiteration`),nn=$t(`animationstart`),rn=$t(`transitionend`),an=new Map,on=new Map,sn=[`abort`,`abort`,en,`animationEnd`,tn,`animationIteration`,nn,`animationStart`,`canplay`,`canPlay`,`canplaythrough`,`canPlayThrough`,`durationchange`,`durationChange`,`emptied`,`emptied`,`encrypted`,`encrypted`,`ended`,`ended`,`error`,`error`,`gotpointercapture`,`gotPointerCapture`,`load`,`load`,`loadeddata`,`loadedData`,`loadedmetadata`,`loadedMetadata`,`loadstart`,`loadStart`,`lostpointercapture`,`lostPointerCapture`,`playing`,`playing`,`progress`,`progress`,`seeking`,`seeking`,`stalled`,`stalled`,`suspend`,`suspend`,`timeupdate`,`timeUpdate`,rn,`transitionEnd`,`waiting`,`waiting`];function cn(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i=`on`+(i[0].toUpperCase()+i.slice(1)),on.set(r,t),an.set(r,i),s(i,[r])}}var ln=r.unstable_now;ln();var I=8;function un(e){if(1&e)return I=15,1;if(2&e)return I=14,2;if(4&e)return I=13,4;var t=24&e;return t===0?e&32?(I=11,32):(t=192&e,t===0?e&256?(I=9,256):(t=3584&e,t===0?e&4096?(I=7,4096):(t=4186112&e,t===0?(t=62914560&e,t===0?e&67108864?(I=4,67108864):e&134217728?(I=3,134217728):(t=805306368&e,t===0?1073741824&e?(I=1,1073741824):(I=8,e):(I=2,t)):(I=5,t)):(I=6,t)):(I=8,t)):(I=10,t)):(I=12,t)}function dn(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function fn(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(i(358,e))}}function pn(e,t){var n=e.pendingLanes;if(n===0)return I=0;var r=0,i=0,a=e.expiredLanes,o=e.suspendedLanes,s=e.pingedLanes;if(a!==0)r=a,i=I=15;else if(a=n&134217727,a!==0){var c=a&~o;c===0?(s&=a,s!==0&&(r=un(s),i=I)):(r=un(c),i=I)}else a=n&~o,a===0?s!==0&&(r=un(s),i=I):(r=un(a),i=I);if(r===0)return 0;if(r=31-yn(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&o)===0){if(un(t),i<=I)return t;I=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yn(t),i=1<<n,r|=e[n],t&=~i;return r}function mn(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function hn(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=gn(24&~t),e===0?hn(10,t):e;case 10:return e=gn(192&~t),e===0?hn(8,t):e;case 8:return e=gn(3584&~t),e===0&&(e=gn(4186112&~t),e===0&&(e=512)),e;case 2:return t=gn(805306368&~t),t===0&&(t=268435456),t}throw Error(i(358,e))}function gn(e){return e&-e}function _n(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vn(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-yn(t),e[t]=n}var yn=Math.clz32?Math.clz32:Sn,bn=Math.log,xn=Math.LN2;function Sn(e){return e===0?32:31-(bn(e)/xn|0)|0}var Cn=r.unstable_UserBlockingPriority,wn=r.unstable_runWithPriority,Tn=!0;function En(e,t,n,r){at||rt();var i=On,a=at;at=!0;try{nt(i,e,t,n,r)}finally{(at=a)||st()}}function Dn(e,t,n,r){wn(Cn,On.bind(null,e,t,n,r))}function On(e,t,n,r){if(Tn){var i;if((i=(t&4)==0)&&0<jt.length&&-1<Rt.indexOf(e))e=zt(null,e,t,n,r),jt.push(e);else{var a=kn(e,t,n,r);if(a===null)i&&Bt(e,r);else{if(i){if(-1<Rt.indexOf(e)){e=zt(a,e,t,n,r),jt.push(e);return}if(Ht(a,e,t,n,r))return;Bt(e,r)}li(e,t,r,null,n)}}}}function kn(e,t,n,r){var i=Je(r);if(i=ji(i),i!==null){var a=bt(i);if(a===null)i=null;else{var o=a.tag;if(o===13){if(i=xt(a),i!==null)return i;i=null}else if(o===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return li(e,t,r,i,n),null}var An=null,jn=null,Mn=null;function Nn(){if(Mn)return Mn;var e,t=jn,n=t.length,r,i=`value`in An?An.value:An.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Mn=i.slice(e,1<r?1-r:void 0)}function Pn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fn(){return!0}function In(){return!1}function Ln(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Fn:In,this.isPropagationStopped=In,this}return n(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zn=Ln(Rn),Bn=n({},Rn,{view:0,detail:0}),Vn=Ln(Bn),Hn,Un,Wn,Gn=n({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Wn&&(Wn&&e.type===`mousemove`?(Hn=e.screenX-Wn.screenX,Un=e.screenY-Wn.screenY):Un=Hn=0,Wn=e),Hn)},movementY:function(e){return`movementY`in e?e.movementY:Un}}),Kn=Ln(Gn),qn=Ln(n({},Gn,{dataTransfer:0})),Jn=Ln(n({},Bn,{relatedTarget:0})),Yn=Ln(n({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0})),Xn=Ln(n({},Rn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Zn=Ln(n({},Rn,{data:0})),Qn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},$n={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},er={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function tr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=er[e])?!!t[e]:!1}function nr(){return tr}var rr=Ln(n({},Bn,{key:function(e){if(e.key){var t=Qn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Pn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?$n[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(e){return e.type===`keypress`?Pn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Pn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),ir=Ln(n({},Gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),ar=Ln(n({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr})),or=Ln(n({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0})),sr=Ln(n({},Gn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),cr=[9,13,27,32],lr=u&&`CompositionEvent`in window,ur=null;u&&`documentMode`in document&&(ur=document.documentMode);var dr=u&&`TextEvent`in window&&!ur,fr=u&&(!lr||ur&&8<ur&&11>=ur),pr=` `,mr=!1;function hr(e,t){switch(e){case`keyup`:return cr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function gr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var _r=!1;function vr(e,t){switch(e){case`compositionend`:return gr(t);case`keypress`:return t.which===32?(mr=!0,pr):null;case`textInput`:return e=t.data,e===pr&&mr?null:e;default:return null}}function yr(e,t){if(_r)return e===`compositionend`||!lr&&hr(e,t)?(e=Nn(),Mn=jn=An=null,_r=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return fr&&t.locale!==`ko`?null:t.data;default:return null}}var br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!br[e.type]:t===`textarea`}function Sr(e,t,n,r){$e(r),t=di(t,`onChange`),0<t.length&&(n=new zn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Cr=null,wr=null;function Tr(e){ii(e,0)}function Er(e){if(xe(Ni(e)))return e}function Dr(e,t){if(e===`change`)return t}var Or=!1;if(u){var kr;if(u){var Ar=`oninput`in document;if(!Ar){var jr=document.createElement(`div`);jr.setAttribute(`oninput`,`return;`),Ar=typeof jr.oninput==`function`}kr=Ar}else kr=!1;Or=kr&&(!document.documentMode||9<document.documentMode)}function Mr(){Cr&&(Cr.detachEvent(`onpropertychange`,Nr),wr=Cr=null)}function Nr(e){if(e.propertyName===`value`&&Er(wr)){var t=[];if(Sr(t,wr,e,Je(e)),e=Tr,at)e(t);else{at=!0;try{tt(e,t)}finally{at=!1,st()}}}}function Pr(e,t,n){e===`focusin`?(Mr(),Cr=t,wr=n,Cr.attachEvent(`onpropertychange`,Nr)):e===`focusout`&&Mr()}function Fr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Er(wr)}function Ir(e,t){if(e===`click`)return Er(t)}function Lr(e,t){if(e===`input`||e===`change`)return Er(t)}function Rr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var zr=typeof Object.is==`function`?Object.is:Rr,Br=Object.prototype.hasOwnProperty;function Vr(e,t){if(zr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Br.call(t,n[r])||!zr(e[n[r]],t[n[r]]))return!1;return!0}function Hr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ur(e,t){var n=Hr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Hr(n)}}function Wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gr(){for(var e=window,t=F();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=F(e.document)}return t}function Kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var qr=u&&`documentMode`in document&&11>=document.documentMode,Jr=null,Yr=null,Xr=null,Zr=!1;function Qr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zr||Jr==null||Jr!==F(r)||(r=Jr,`selectionStart`in r&&Kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&Vr(Xr,r)||(Xr=r,r=di(Yr,`onSelect`),0<r.length&&(t=new zn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Jr)))}cn(`cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange`.split(` `),0),cn(`drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel`.split(` `),1),cn(sn,2);for(var $r=`change selectionchange textInput compositionstart compositionend compositionupdate`.split(` `),ei=0;ei<$r.length;ei++)on.set($r[ei],0);c(`onMouseEnter`,[`mouseout`,`mouseover`]),c(`onMouseLeave`,[`mouseout`,`mouseover`]),c(`onPointerEnter`,[`pointerout`,`pointerover`]),c(`onPointerLeave`,[`pointerout`,`pointerover`]),s(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),s(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),s(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),s(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),s(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),s(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ti=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ni=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ti));function ri(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,yt(r,t,void 0,e),e.currentTarget=null}function ii(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ri(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ri(i,s,l),a=c}}}if(ht)throw e=gt,ht=!1,gt=null,e}function L(e,t){var n=Fi(t),r=e+`__bubble`;n.has(r)||(ci(t,e,2,!1),n.add(r))}var ai=`_reactListening`+Math.random().toString(36).slice(2);function oi(e){e[ai]||(e[ai]=!0,a.forEach(function(t){ni.has(t)||si(t,!1,e,null),si(t,!0,e,null)}))}function si(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=n;if(e===`selectionchange`&&n.nodeType!==9&&(a=n.ownerDocument),r!==null&&!t&&ni.has(e)){if(e!==`scroll`)return;i|=2,a=r}var o=Fi(a),s=e+`__`+(t?`capture`:`bubble`);o.has(s)||(t&&(i|=4),ci(a,e,i,t),o.add(s))}function ci(e,t,n,r){var i=on.get(t);switch(i===void 0?2:i){case 0:i=En;break;case 1:i=Dn;break;default:i=On}n=i.bind(null,t,n,e),i=void 0,!ut||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function li(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=ji(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}ct(function(){var r=a,i=Je(n),o=[];a:{var s=an.get(e);if(s!==void 0){var c=zn,l=e;switch(e){case`keypress`:if(Pn(n)===0)break a;case`keydown`:case`keyup`:c=rr;break;case`focusin`:l=`focus`,c=Jn;break;case`focusout`:l=`blur`,c=Jn;break;case`beforeblur`:case`afterblur`:c=Jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=qn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=ar;break;case en:case tn:case nn:c=Yn;break;case rn:c=or;break;case`scroll`:c=Vn;break;case`wheel`:c=sr;break;case`copy`:case`cut`:case`paste`:c=Xn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=ir}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=lt(p,f),h!=null&&u.push(ui(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&!(t&16)&&(l=n.relatedTarget||n.fromElement)&&(ji(l)||l[ki]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?ji(l):null,l!==null&&(d=bt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Kn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=ir,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Ni(c),m=l==null?s:Ni(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,ji(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=fi(m))p++;for(m=0,h=f;h;h=fi(h))m++;for(;0<p-m;)u=fi(u),p--;for(;0<m-p;)f=fi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=fi(u),f=fi(f)}u=null}else u=null;c!==null&&pi(o,s,c,u,!1),l!==null&&d!==null&&pi(o,d,l,u,!0)}}a:{if(s=r?Ni(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Dr;else if(xr(s))if(Or)g=Lr;else{g=Fr;var _=Pr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Ir);if(g&&=g(e,r)){Sr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&De(s,`number`,s.value)}switch(_=r?Ni(r):window,e){case`focusin`:(xr(_)||_.contentEditable===`true`)&&(Jr=_,Yr=r,Xr=null);break;case`focusout`:Xr=Yr=Jr=null;break;case`mousedown`:Zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Zr=!1,Qr(o,n,i);break;case`selectionchange`:if(qr)break;case`keydown`:case`keyup`:Qr(o,n,i)}var v;if(lr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else _r?hr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(fr&&n.locale!==`ko`&&(_r||y!==`onCompositionStart`?y===`onCompositionEnd`&&_r&&(v=Nn()):(An=i,jn=`value`in An?An.value:An.textContent,_r=!0)),_=di(r,y),0<_.length&&(y=new Zn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=gr(n),v!==null&&(y.data=v)))),(v=dr?vr(e,n):yr(e,n))&&(r=di(r,`onBeforeInput`),0<r.length&&(i=new Zn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ii(o,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=lt(e,n),a!=null&&r.unshift(ui(e,a,i)),a=lt(e,t),a!=null&&r.push(ui(e,a,i))),e=e.return}return r}function fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=lt(n,a),c!=null&&o.unshift(ui(n,c,s))):i||(c=lt(n,a),c!=null&&o.push(ui(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}function mi(){}var hi=null,gi=null;function _i(e,t){switch(e){case`button`:case`input`:case`select`:case`textarea`:return!!t.autoFocus}return!1}function vi(e,t){return e===`textarea`||e===`option`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout==`function`?setTimeout:void 0,bi=typeof clearTimeout==`function`?clearTimeout:void 0;function xi(e){e.nodeType===1?e.textContent=``:e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=``))}function Si(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Ci(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var wi=0;function Ti(e){return{$$typeof:oe,toString:e,valueOf:e}}var Ei=Math.random().toString(36).slice(2),Di=`__reactFiber$`+Ei,Oi=`__reactProps$`+Ei,ki=`__reactContainer$`+Ei,Ai=`__reactEvents$`+Ei;function ji(e){var t=e[Di];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ki]||n[Di]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ci(e);e!==null;){if(n=e[Di])return n;e=Ci(e)}return t}e=n,n=e.parentNode}return null}function Mi(e){return e=e[Di]||e[ki],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Pi(e){return e[Oi]||null}function Fi(e){var t=e[Ai];return t===void 0&&(t=e[Ai]=new Set),t}var Ii=[],Li=-1;function Ri(e){return{current:e}}function R(e){0>Li||(e.current=Ii[Li],Ii[Li]=null,Li--)}function z(e,t){Li++,Ii[Li]=e.current,e.current=t}var zi={},B=Ri(zi),V=Ri(!1),Bi=zi;function Vi(e,t){var n=e.type.contextTypes;if(!n)return zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function H(e){return e=e.childContextTypes,e!=null}function Hi(){R(V),R(B)}function Ui(e,t,n){if(B.current!==zi)throw Error(i(168));z(B,t),z(V,n)}function Wi(e,t,r){var a=e.stateNode;if(e=t.childContextTypes,typeof a.getChildContext!=`function`)return r;for(var o in a=a.getChildContext(),a)if(!(o in e))throw Error(i(108,_e(t)||`Unknown`,o));return n({},r,a)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zi,Bi=B.current,z(B,e),z(V,V.current),!0}function Ki(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Wi(e,t,Bi),r.__reactInternalMemoizedMergedChildContext=e,R(V),R(B),z(B,e)):R(V),z(V,n)}var qi=null,Ji=null,Yi=r.unstable_runWithPriority,Xi=r.unstable_scheduleCallback,Zi=r.unstable_cancelCallback,Qi=r.unstable_shouldYield,$i=r.unstable_requestPaint,ea=r.unstable_now,ta=r.unstable_getCurrentPriorityLevel,na=r.unstable_ImmediatePriority,ra=r.unstable_UserBlockingPriority,ia=r.unstable_NormalPriority,aa=r.unstable_LowPriority,oa=r.unstable_IdlePriority,sa={},ca=$i===void 0?function(){}:$i,la=null,ua=null,da=!1,fa=ea(),U=1e4>fa?ea:function(){return ea()-fa};function pa(){switch(ta()){case na:return 99;case ra:return 98;case ia:return 97;case aa:return 96;case oa:return 95;default:throw Error(i(332))}}function ma(e){switch(e){case 99:return na;case 98:return ra;case 97:return ia;case 96:return aa;case 95:return oa;default:throw Error(i(332))}}function ha(e,t){return e=ma(e),Yi(e,t)}function ga(e,t,n){return e=ma(e),Xi(e,t,n)}function _a(){if(ua!==null){var e=ua;ua=null,Zi(e)}va()}function va(){if(!da&&la!==null){da=!0;var e=0;try{var t=la;ha(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),la=null}catch(t){throw la!==null&&(la=la.slice(e+1)),Xi(na,_a),t}finally{da=!1}}}var ya=T.ReactCurrentBatchConfig;function ba(e,t){if(e&&e.defaultProps){for(var r in t=n({},t),e=e.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var xa=Ri(null),Sa=null,Ca=null,wa=null;function Ta(){wa=Ca=Sa=null}function Ea(e){var t=xa.current;R(xa),e.type._context._currentValue=t}function Da(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Oa(e,t){Sa=e,wa=Ca=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ns=!0),e.firstContext=null)}function ka(e,t){if(wa!==e&&!1!==t&&t!==0)if((typeof t!=`number`||t===1073741823)&&(wa=e,t=1073741823),t={context:e,observedBits:t,next:null},Ca===null){if(Sa===null)throw Error(i(308));Ca=t,Sa.dependencies={lanes:0,firstContext:t,responders:null}}else Ca=Ca.next=t;return e._currentValue}var Aa=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Ma(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Na(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Fa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ia(e,t,r,i){var a=e.updateQueue;Aa=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var l=c,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;if(d!==null){d=d.updateQueue;var f=d.lastBaseUpdate;f!==s&&(f===null?d.firstBaseUpdate=u:f.next=u,d.lastBaseUpdate=l)}}if(o!==null){f=a.baseState,s=0,d=u=l=null;do{c=o.lane;var p=o.eventTime;if((i&c)===c){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});a:{var m=e,h=o;switch(c=t,p=r,h.tag){case 1:if(m=h.payload,typeof m==`function`){f=m.call(p,f,c);break a}f=m;break a;case 3:m.flags=m.flags&-4097|64;case 0:if(m=h.payload,c=typeof m==`function`?m.call(p,f,c):m,c==null)break a;f=n({},f,c);break a;case 2:Aa=!0}}o.callback!==null&&(e.flags|=32,c=a.effects,c===null?a.effects=[o]:c.push(o))}else p={eventTime:p,lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=c;if(o=o.next,o===null){if(c=a.shared.pending,c===null)break;o=c.next,c.next=null,a.lastBaseUpdate=c,a.shared.pending=null}}while(1);d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=d,tc|=s,e.lanes=s,e.memoizedState=f}}function La(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!=`function`)throw Error(i(191,a));a.call(r)}}}var Ra=new t.Component().refs;function za(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:n({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ba={isMounted:function(e){return(e=e._reactInternals)?bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=wc(),i=Tc(e),a=Na(r,i);a.payload=t,n!=null&&(a.callback=n),Pa(e,a),Ec(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=wc(),i=Tc(e),a=Na(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),Pa(e,a),Ec(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wc(),r=Tc(e),i=Na(n,r);i.tag=2,t!=null&&(i.callback=t),Pa(e,i),Ec(e,r,n)}};function Va(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(i,a):!0}function Ha(e,t,n){var r=!1,i=zi,a=t.contextType;return typeof a==`object`&&a?a=ka(a):(i=H(t)?Bi:B.current,r=t.contextTypes,a=(r=r!=null)?Vi(e,i):zi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ua(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function Wa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ra,ja(e);var a=t.contextType;typeof a==`object`&&a?i.context=ka(a):(a=H(t)?Bi:B.current,i.context=Vi(e,a)),Ia(e,n,i,r),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(za(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Ba.enqueueReplaceState(i,i.state,null),Ia(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4)}var Ga=Array.isArray;function Ka(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===a?t.ref:(t=function(e){var t=r.refs;t===Ra&&(t=r.refs={}),e===null?delete t[a]:t[a]=e},t._stringRef=a,t)}if(typeof e!=`string`)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function qa(e,t){if(e.type!==`textarea`)throw Error(i(31,Object.prototype.toString.call(t)===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:t))}function Ja(e){function t(t,n){if(e){var r=t.lastEffect;r===null?t.firstEffect=t.lastEffect=n:(r.nextEffect=n,t.lastEffect=n),n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=sl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags=2,n):(r=r.index,r<n?(t.flags=2,n):r)):n}function s(t){return e&&t.alternate===null&&(t.flags=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=dl(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){return t!==null&&t.elementType===n.type?(r=a(t,n.props),r.ref=Ka(e,t,n),r.return=e,r):(r=cl(n.type,n.key,n.props,null,e.mode,r),r.ref=Ka(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fl(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ll(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`||typeof t==`number`)return t=dl(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case E:return n=cl(t.type,t.key,t.props,null,e.mode,n),n.ref=Ka(e,null,t),n.return=e,n;case ee:return t=fl(t,e.mode,n),t.return=e,t}if(Ga(t)||de(t))return t=ll(t,e.mode,n,null),t.return=e,t;qa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case E:return n.key===i?n.type===D?d(e,t,n.props.children,r,i):l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null}if(Ga(n)||de(n))return i===null?d(e,t,n,r,null):null;qa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case E:return e=e.get(r.key===null?n:r.key)||null,r.type===D?d(t,e,r.props.children,i,r.key):l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i)}if(Ga(r)||de(r))return e=e.get(n)||null,d(t,e,r,i,null);qa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return l}for(d=r(i,d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),l}function g(a,s,c,l){var u=de(c);if(typeof u!=`function`)throw Error(i(150));if(c=u.call(c),c==null)throw Error(i(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return u}for(h=r(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),u}return function(e,r,o,c){var l=typeof o==`object`&&!!o&&o.type===D&&o.key===null;l&&(o=o.props.children);var u=typeof o==`object`&&!!o;if(u)switch(o.$$typeof){case E:a:{for(u=o.key,l=r;l!==null;){if(l.key===u){switch(l.tag){case 7:if(o.type===D){n(e,l.sibling),r=a(l,o.props.children),r.return=e,e=r;break a}break;default:if(l.elementType===o.type){n(e,l.sibling),r=a(l,o.props),r.ref=Ka(e,l,o),r.return=e,e=r;break a}}n(e,l);break}else t(e,l);l=l.sibling}o.type===D?(r=ll(o.props.children,e.mode,c,o.key),r.return=e,e=r):(c=cl(o.type,o.key,o.props,null,e.mode,c),c.ref=Ka(e,r,o),c.return=e,e=c)}return s(e);case ee:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),r=a(r,o.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=fl(o,e.mode,c),r.return=e,e=r}return s(e)}if(typeof o==`string`||typeof o==`number`)return o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,o),r.return=e,e=r):(n(e,r),r=dl(o,e.mode,c),r.return=e,e=r),s(e);if(Ga(o))return h(e,r,o,c);if(de(o))return g(e,r,o,c);if(u&&qa(e,o),o===void 0&&!l)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(i(152,_e(e.type)||`Component`))}return n(e,r)}}var Ya=Ja(!0),Xa=Ja(!1),Za={},Qa=Ri(Za),$a=Ri(Za),eo=Ri(Za);function to(e){if(e===Za)throw Error(i(174));return e}function no(e,t){switch(z(eo,t),z($a,e),z(Qa,Za),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Le(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Le(t,e)}R(Qa),z(Qa,t)}function ro(){R(Qa),R($a),R(eo)}function io(e){to(eo.current);var t=to(Qa.current),n=Le(t,e.type);t!==n&&(z($a,e),z(Qa,n))}function ao(e){$a.current===e&&(R(Qa),R($a))}var W=Ri(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=null,co=null,lo=!1;function uo(e,t){var n=il(5,null,null,0);n.elementType=`DELETED`,n.type=`DELETED`,n.stateNode=t,n.return=e,n.flags=8,e.lastEffect===null?e.firstEffect=e.lastEffect=n:(e.lastEffect.nextEffect=n,e.lastEffect=n)}function fo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,!0);case 13:return!1;default:return!1}}function po(e){if(lo){var t=co;if(t){var n=t;if(!fo(e,t)){if(t=Si(n.nextSibling),!t||!fo(e,t)){e.flags=e.flags&-1025|2,lo=!1,so=e;return}uo(so,n)}so=e,co=Si(t.firstChild)}else e.flags=e.flags&-1025|2,lo=!1,so=e}}function mo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;so=e}function ho(e){if(e!==so)return!1;if(!lo)return mo(e),lo=!0,!1;var t=e.type;if(e.tag!==5||t!==`head`&&t!==`body`&&!vi(t,e.memoizedProps))for(t=co;t;)uo(e,t),t=Si(t.nextSibling);if(mo(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){co=Si(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}co=null}}else co=so?Si(e.stateNode.nextSibling):null;return!0}function go(){co=so=null,lo=!1}var _o=[];function vo(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var yo=T.ReactCurrentDispatcher,bo=T.ReactCurrentBatchConfig,xo=0,G=null,K=null,q=null,So=!1,Co=!1;function wo(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,a,o){if(xo=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yo.current=e===null||e.memoizedState===null?Qo:$o,e=n(r,a),Co){o=0;do{if(Co=!1,!(25>o))throw Error(i(301));o+=1,q=K=null,t.updateQueue=null,yo.current=es,e=n(r,a)}while(Co)}if(yo.current=Zo,t=K!==null&&K.next!==null,xo=0,q=K=G=null,So=!1,t)throw Error(i(300));return e}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?G.memoizedState=q=e:q=q.next=e,q}function Oo(){if(K===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=K.next;var t=q===null?G.memoizedState:q.next;if(t!==null)q=t,K=e;else{if(e===null)throw Error(i(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},q===null?G.memoizedState=q=e:q=q.next=e}return q}function ko(e,t){return typeof t==`function`?t(e):t}function Ao(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=K,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}r.baseQueue=a=o,n.pending=null}if(a!==null){a=a.next,r=r.baseState;var c=s=o=null,l=a;do{var u=l.lane;if((xo&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var d={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};c===null?(s=c=d,o=r):c=c.next=d,G.lanes|=u,tc|=u}l=l.next}while(l!==null&&l!==a);c===null?o=r:c.next=s,zr(r,t.memoizedState)||(ns=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function jo(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);zr(o,t.memoizedState)||(ns=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mo(e,t,n){var r=t._getVersion;r=r(t._source);var a=t._workInProgressVersionPrimary;if(a===null?(e=e.mutableReadLanes,(e=(xo&e)===e)&&(t._workInProgressVersionPrimary=r,_o.push(t))):e=a===r,e)return n(t._source);throw _o.push(t),Error(i(350))}function No(e,t,n,r){var a=Y;if(a===null)throw Error(i(349));var o=t._getVersion,s=o(t._source),c=yo.current,l=c.useState(function(){return Mo(a,t,n)}),u=l[1],d=l[0];l=q;var f=e.memoizedState,p=f.refs,m=p.getSnapshot,h=f.source;f=f.subscribe;var g=G;return e.memoizedState={refs:p,source:t,subscribe:r},c.useEffect(function(){p.getSnapshot=n,p.setSnapshot=u;var e=o(t._source);if(!zr(s,e)){e=n(t._source),zr(d,e)||(u(e),e=Tc(g),a.mutableReadLanes|=e&a.pendingLanes),e=a.mutableReadLanes,a.entangledLanes|=e;for(var r=a.entanglements,i=e;0<i;){var c=31-yn(i),l=1<<c;r[c]|=e,i&=~l}}},[n,t,r]),c.useEffect(function(){return r(t._source,function(){var e=p.getSnapshot,n=p.setSnapshot;try{n(e(t._source));var r=Tc(g);a.mutableReadLanes|=r&a.pendingLanes}catch(e){n(function(){throw e})}})},[t,r]),zr(m,n)&&zr(h,t)&&zr(f,r)||(e={pending:null,dispatch:null,lastRenderedReducer:ko,lastRenderedState:d},e.dispatch=u=Xo.bind(null,G,e),l.queue=e,l.baseQueue=null,d=Mo(a,t,n),l.memoizedState=l.baseState=d),d}function Po(e,t,n){return No(Oo(),e,t,n)}function Fo(e){var t=Do();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},e=e.dispatch=Xo.bind(null,G,e),[t.memoizedState,e]}function Io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lo(e){var t=Do();return e={current:e},t.memoizedState=e}function Ro(){return Oo().memoizedState}function zo(e,t,n,r){var i=Do();G.flags|=e,i.memoizedState=Io(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=void 0;if(K!==null){var o=K.memoizedState;if(a=o.destroy,r!==null&&To(r,o.deps)){Io(t,n,a,r);return}}G.flags|=e,i.memoizedState=Io(1|t,n,a,r)}function Vo(e,t){return zo(516,4,e,t)}function Ho(e,t){return Bo(516,4,e,t)}function Uo(e,t){return Bo(4,2,e,t)}function Wo(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Go(e,t,n){return n=n==null?null:n.concat([e]),Bo(4,2,Wo.bind(null,t,e),n)}function Ko(){}function qo(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jo(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yo(e,t){var n=pa();ha(98>n?98:n,function(){e(!0)}),ha(97<n?97:n,function(){var n=bo.transition;bo.transition=1;try{e(!1),t()}finally{bo.transition=n}})}function Xo(e,t,n){var r=wc(),i=Tc(e),a={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=t.pending;if(o===null?a.next=a:(a.next=o.next,o.next=a),t.pending=a,o=e.alternate,e===G||o!==null&&o===G)Co=So=!0;else{if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,n);if(a.eagerReducer=o,a.eagerState=c,zr(c,s))return}catch{}Ec(e,i,r)}}var Zo={readContext:ka,useCallback:wo,useContext:wo,useEffect:wo,useImperativeHandle:wo,useLayoutEffect:wo,useMemo:wo,useReducer:wo,useRef:wo,useState:wo,useDebugValue:wo,useDeferredValue:wo,useTransition:wo,useMutableSource:wo,useOpaqueIdentifier:wo,unstable_isNewReconciler:!1},Qo={readContext:ka,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:ka,useEffect:Vo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),zo(4,2,Wo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var n=Do();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Do();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Xo.bind(null,G,e),[r.memoizedState,e]},useRef:Lo,useState:Fo,useDebugValue:Ko,useDeferredValue:function(e){var t=Fo(e),n=t[0],r=t[1];return Vo(function(){var t=bo.transition;bo.transition=1;try{r(e)}finally{bo.transition=t}},[e]),n},useTransition:function(){var e=Fo(!1),t=e[0];return e=Yo.bind(null,e[1]),Lo(e),[e,t]},useMutableSource:function(e,t,n){var r=Do();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},No(r,e,t,n)},useOpaqueIdentifier:function(){if(lo){var e=!1,t=Ti(function(){throw e||(e=!0,n(`r:`+(wi++).toString(36))),Error(i(355))}),n=Fo(t)[1];return!(G.mode&2)&&(G.flags|=516,Io(5,function(){n(`r:`+(wi++).toString(36))},void 0,null)),t}return t=`r:`+(wi++).toString(36),Fo(t),t},unstable_isNewReconciler:!1},$o={readContext:ka,useCallback:qo,useContext:ka,useEffect:Ho,useImperativeHandle:Go,useLayoutEffect:Uo,useMemo:Jo,useReducer:Ao,useRef:Ro,useState:function(){return Ao(ko)},useDebugValue:Ko,useDeferredValue:function(e){var t=Ao(ko),n=t[0],r=t[1];return Ho(function(){var t=bo.transition;bo.transition=1;try{r(e)}finally{bo.transition=t}},[e]),n},useTransition:function(){var e=Ao(ko)[0];return[Ro().current,e]},useMutableSource:Po,useOpaqueIdentifier:function(){return Ao(ko)[0]},unstable_isNewReconciler:!1},es={readContext:ka,useCallback:qo,useContext:ka,useEffect:Ho,useImperativeHandle:Go,useLayoutEffect:Uo,useMemo:Jo,useReducer:jo,useRef:Ro,useState:function(){return jo(ko)},useDebugValue:Ko,useDeferredValue:function(e){var t=jo(ko),n=t[0],r=t[1];return Ho(function(){var t=bo.transition;bo.transition=1;try{r(e)}finally{bo.transition=t}},[e]),n},useTransition:function(){var e=jo(ko)[0];return[Ro().current,e]},useMutableSource:Po,useOpaqueIdentifier:function(){return jo(ko)[0]},unstable_isNewReconciler:!1},ts=T.ReactCurrentOwner,ns=!1;function rs(e,t,n,r){t.child=e===null?Xa(t,null,n,r):Ya(t,e.child,n,r)}function is(e,t,n,r,i){n=n.render;var a=t.ref;return Oa(t,i),r=Eo(e,t,n,r,a,i),e!==null&&!ns?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,xs(e,t,i)):(t.flags|=1,rs(e,t,r,i),t.child)}function as(e,t,n,r,i,a){if(e===null){var o=n.type;return typeof o==`function`&&!al(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,os(e,t,o,r,i,a)):(e=cl(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}return o=e.child,(i&a)===0&&(i=o.memoizedProps,n=n.compare,n=n===null?Vr:n,n(i,r)&&e.ref===t.ref)?xs(e,t,a):(t.flags|=1,e=sl(o,r),e.ref=t.ref,e.return=t,t.child=e)}function os(e,t,n,r,i,a){if(e!==null&&Vr(e.memoizedProps,r)&&e.ref===t.ref)if(ns=!1,(a&i)!==0)e.flags&16384&&(ns=!0);else return t.lanes=e.lanes,xs(e,t,a);return ls(e,t,n,r,a)}function ss(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`||r.mode===`unstable-defer-without-hiding`)if(!(t.mode&4))t.memoizedState={baseLanes:0},Fc(t,n);else if(n&1073741824)t.memoizedState={baseLanes:0},Fc(t,a===null?n:a.baseLanes);else return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Fc(t,e),null;else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),Fc(t,r);return rs(e,t,i,n),t.child}function cs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function ls(e,t,n,r,i){var a=H(n)?Bi:B.current;return a=Vi(t,a),Oa(t,i),n=Eo(e,t,n,r,a,i),e!==null&&!ns?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,xs(e,t,i)):(t.flags|=1,rs(e,t,n,i),t.child)}function us(e,t,n,r,i){if(H(n)){var a=!0;Gi(t)}else a=!1;if(Oa(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Ha(t,n,r),Wa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=ka(l):(l=H(n)?Bi:B.current,l=Vi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ua(t,o,r,l),Aa=!1;var f=t.memoizedState;o.state=f,Ia(t,r,o,i),c=t.memoizedState,s!==r||f!==c||V.current||Aa?(typeof u==`function`&&(za(t,n,u,r),c=t.memoizedState),(s=Aa||Va(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4)):(typeof o.componentDidMount==`function`&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4),r=!1)}else{o=t.stateNode,Ma(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:ba(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=ka(c):(c=H(n)?Bi:B.current,c=Vi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ua(t,o,r,c),Aa=!1,f=t.memoizedState,o.state=f,Ia(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||V.current||Aa?(typeof p==`function`&&(za(t,n,p,r),m=t.memoizedState),(l=Aa||Va(t,n,l,r,f,m,c))?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=256)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),r=!1)}return ds(e,t,n,r,a,i)}function ds(e,t,n,r,i,a){cs(e,t);var o=(t.flags&64)!=0;if(!r&&!o)return i&&Ki(t,n,!1),xs(e,t,a);r=t.stateNode,ts.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ya(t,e.child,null,a),t.child=Ya(t,null,s,a)):rs(e,t,s,a),t.memoizedState=r.state,i&&Ki(t,n,!0),t.child}function fs(e){var t=e.stateNode;t.pendingContext?Ui(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ui(e,t.context,!1),no(e,t.containerInfo)}var ps={dehydrated:null,retryLane:0};function ms(e,t,n){var r=t.pendingProps,i=W.current,a=!1,o;return(o=(t.flags&64)!=0)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!=0),o?(a=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||!0===r.unstable_avoidThisFallback||(i|=1),z(W,i&1),e===null?(r.fallback!==void 0&&po(t),e=r.children,i=r.fallback,a?(e=hs(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ps,e):typeof r.unstable_expectedLoadTime==`number`?(e=hs(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ps,t.lanes=33554432,e):(n=ul({mode:`visible`,children:e},t.mode,n,null),n.return=t,t.child=n)):(e.memoizedState,a?(r=_s(e,t,r.children,r.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=ps,r):(n=gs(e,t,r.children,n),t.memoizedState=null,n))}function hs(e,t,n,r){var i=e.mode,a=e.child;return t={mode:`hidden`,children:t},!(i&2)&&a!==null?(a.childLanes=0,a.pendingProps=t):a=ul(t,i,0,null),n=ll(n,i,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function gs(e,t,n,r){var i=e.child;return e=i.sibling,n=sl(i,{mode:`visible`,children:n}),!(t.mode&2)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function _s(e,t,n,r,i){var a=t.mode,o=e.child;e=o.sibling;var s={mode:`hidden`,children:n};return!(a&2)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=s,o=n.lastEffect,o===null?t.firstEffect=t.lastEffect=null:(t.firstEffect=n.firstEffect,t.lastEffect=o,o.nextEffect=null)):n=sl(o,s),e===null?(r=ll(r,a,i,null),r.flags|=2):r=sl(e,r),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function vs(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Da(e.return,t)}function ys(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=a)}function bs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(rs(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=64;else{if(e!==null&&e.flags&64)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vs(e,n);else if(e.tag===19)vs(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(W,r),!(t.mode&2))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ys(t,!1,i,n,a,t.lastEffect);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ys(t,!0,n,null,a,t.lastEffect);break;case`together`:ys(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function xs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tc|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=sl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Ss=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Cs=function(e,t,r,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,to(Qa.current);var s=null;switch(r){case`input`:a=Se(e,a),i=Se(e,i),s=[];break;case`option`:a=ke(e,a),i=ke(e,i),s=[];break;case`select`:a=n({},a,{value:void 0}),i=n({},i,{value:void 0}),s=[];break;case`textarea`:a=je(e,a),i=je(e,i),s=[];break;default:typeof a.onClick!=`function`&&typeof i.onClick==`function`&&(e.onclick=mi)}Ke(r,i);var c;for(d in r=null,a)if(!i.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d===`style`){var l=a[d];for(c in l)l.hasOwnProperty(c)&&(r||={},r[c]=``)}else d!==`dangerouslySetInnerHTML`&&d!==`children`&&d!==`suppressContentEditableWarning`&&d!==`suppressHydrationWarning`&&d!==`autoFocus`&&(o.hasOwnProperty(d)?s||=[]:(s||=[]).push(d,null));for(d in i){var u=i[d];if(l=a?.[d],i.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d===`style`)if(l){for(c in l)!l.hasOwnProperty(c)||u&&u.hasOwnProperty(c)||(r||={},r[c]=``);for(c in u)u.hasOwnProperty(c)&&l[c]!==u[c]&&(r||={},r[c]=u[c])}else r||(s||=[],s.push(d,r)),r=u;else d===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s||=[]).push(d,u)):d===`children`?typeof u!=`string`&&typeof u!=`number`||(s||=[]).push(d,``+u):d!==`suppressContentEditableWarning`&&d!==`suppressHydrationWarning`&&(o.hasOwnProperty(d)?(u!=null&&d===`onScroll`&&L(`scroll`,e),s||l===u||(s=[])):typeof u==`object`&&u&&u.$$typeof===oe?u.toString():(s||=[]).push(d,u))}r&&(s||=[]).push(`style`,r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}},ws=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ts(e,t){if(!lo)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Es(e,t,r){var a=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return H(t.type)&&Hi(),null;case 3:return ro(),R(V),R(B),vo(),a=t.stateNode,a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ho(t)?t.flags|=4:a.hydrate||(t.flags|=256)),null;case 5:ao(t);var s=to(eo.current);if(r=t.type,e!==null&&t.stateNode!=null)Cs(e,t,r,a,s),e.ref!==t.ref&&(t.flags|=128);else{if(!a){if(t.stateNode===null)throw Error(i(166));return null}if(e=to(Qa.current),ho(t)){a=t.stateNode,r=t.type;var c=t.memoizedProps;switch(a[Di]=t,a[Oi]=c,r){case`dialog`:L(`cancel`,a),L(`close`,a);break;case`iframe`:case`object`:case`embed`:L(`load`,a);break;case`video`:case`audio`:for(e=0;e<ti.length;e++)L(ti[e],a);break;case`source`:L(`error`,a);break;case`img`:case`image`:case`link`:L(`error`,a),L(`load`,a);break;case`details`:L(`toggle`,a);break;case`input`:Ce(a,c),L(`invalid`,a);break;case`select`:a._wrapperState={wasMultiple:!!c.multiple},L(`invalid`,a);break;case`textarea`:Me(a,c),L(`invalid`,a)}for(var l in Ke(r,c),e=null,c)c.hasOwnProperty(l)&&(s=c[l],l===`children`?typeof s==`string`?a.textContent!==s&&(e=[`children`,s]):typeof s==`number`&&a.textContent!==``+s&&(e=[`children`,``+s]):o.hasOwnProperty(l)&&s!=null&&l===`onScroll`&&L(`scroll`,a));switch(r){case`input`:be(a),Ee(a,c,!0);break;case`textarea`:be(a),Pe(a);break;case`select`:case`option`:break;default:typeof c.onClick==`function`&&(a.onclick=mi)}a=e,t.updateQueue=a,a!==null&&(t.flags|=4)}else{switch(l=s.nodeType===9?s:s.ownerDocument,e===Fe.html&&(e=Ie(r)),e===Fe.html?r===`script`?(e=l.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof a.is==`string`?e=l.createElement(r,{is:a.is}):(e=l.createElement(r),r===`select`&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,r),e[Di]=t,e[Oi]=a,Ss(e,t,!1,!1),t.stateNode=e,l=qe(r,a),r){case`dialog`:L(`cancel`,e),L(`close`,e),s=a;break;case`iframe`:case`object`:case`embed`:L(`load`,e),s=a;break;case`video`:case`audio`:for(s=0;s<ti.length;s++)L(ti[s],e);s=a;break;case`source`:L(`error`,e),s=a;break;case`img`:case`image`:case`link`:L(`error`,e),L(`load`,e),s=a;break;case`details`:L(`toggle`,e),s=a;break;case`input`:Ce(e,a),s=Se(e,a),L(`invalid`,e);break;case`option`:s=ke(e,a);break;case`select`:e._wrapperState={wasMultiple:!!a.multiple},s=n({},a,{value:void 0}),L(`invalid`,e);break;case`textarea`:Me(e,a),s=je(e,a),L(`invalid`,e);break;default:s=a}Ke(r,s);var u=s;for(c in u)if(u.hasOwnProperty(c)){var d=u[c];c===`style`?We(e,d):c===`dangerouslySetInnerHTML`?(d=d?d.__html:void 0,d!=null&&ze(e,d)):c===`children`?typeof d==`string`?(r!==`textarea`||d!==``)&&Be(e,d):typeof d==`number`&&Be(e,``+d):c!==`suppressContentEditableWarning`&&c!==`suppressHydrationWarning`&&c!==`autoFocus`&&(o.hasOwnProperty(c)?d!=null&&c===`onScroll`&&L(`scroll`,e):d!=null&&w(e,c,d,l))}switch(r){case`input`:be(e),Ee(e,a,!1);break;case`textarea`:be(e),Pe(e);break;case`option`:a.value!=null&&e.setAttribute(`value`,``+ve(a.value));break;case`select`:e.multiple=!!a.multiple,c=a.value,c==null?a.defaultValue!=null&&Ae(e,!!a.multiple,a.defaultValue,!0):Ae(e,!!a.multiple,c,!1);break;default:typeof s.onClick==`function`&&(e.onclick=mi)}_i(r,a)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)ws(e,t,e.memoizedProps,a);else{if(typeof a!=`string`&&t.stateNode===null)throw Error(i(166));r=to(eo.current),to(Qa.current),ho(t)?(a=t.stateNode,r=t.memoizedProps,a[Di]=t,a.nodeValue!==r&&(t.flags|=4)):(a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Di]=t,t.stateNode=a)}return null;case 13:return R(W),a=t.memoizedState,t.flags&64?(t.lanes=r,t):(a=a!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&ho(t):r=e.memoizedState!==null,a&&!r&&t.mode&2&&(e===null&&!0!==t.memoizedProps.unstable_avoidThisFallback||W.current&1?Q===0&&(Q=3):((Q===0||Q===3)&&(Q=4),Y===null||!(tc&134217727)&&!(nc&134217727)||Ac(Y,Z))),(a||r)&&(t.flags|=4),null);case 4:return ro(),e===null&&oi(t.stateNode.containerInfo),null;case 10:return Ea(t),null;case 17:return H(t.type)&&Hi(),null;case 19:if(R(W),a=t.memoizedState,a===null)return null;if(c=(t.flags&64)!=0,l=a.rendering,l===null)if(c)Ts(a,!1);else{if(Q!==0||e!==null&&e.flags&64)for(e=t.child;e!==null;){if(l=oo(e),l!==null){for(t.flags|=64,Ts(a,!1),c=l.updateQueue,c!==null&&(t.updateQueue=c,t.flags|=4),a.lastEffect===null&&(t.firstEffect=null),t.lastEffect=a.lastEffect,a=r,r=t.child;r!==null;)c=r,e=a,c.flags&=2,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null,l=c.alternate,l===null?(c.childLanes=0,c.lanes=e,c.child=null,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=l.childLanes,c.lanes=l.lanes,c.child=l.child,c.memoizedProps=l.memoizedProps,c.memoizedState=l.memoizedState,c.updateQueue=l.updateQueue,c.type=l.type,e=l.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return z(W,W.current&1|2),t.child}e=e.sibling}a.tail!==null&&U()>oc&&(t.flags|=64,c=!0,Ts(a,!1),t.lanes=33554432)}else{if(!c)if(e=oo(l),e!==null){if(t.flags|=64,c=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ts(a,!0),a.tail===null&&a.tailMode===`hidden`&&!l.alternate&&!lo)return t=t.lastEffect=a.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*U()-a.renderingStartTime>oc&&r!==1073741824&&(t.flags|=64,c=!0,Ts(a,!1),t.lanes=33554432);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r===null?t.child=l:r.sibling=l,a.last=l)}return a.tail===null?null:(r=a.tail,a.rendering=r,a.tail=r.sibling,a.lastEffect=t.lastEffect,a.renderingStartTime=U(),r.sibling=null,t=W.current,z(W,c?t&1|2:t&1),r);case 23:case 24:return Ic(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&a.mode!==`unstable-defer-without-hiding`&&(t.flags|=4),null}throw Error(i(156,t.tag))}function Ds(e){switch(e.tag){case 1:H(e.type)&&Hi();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(ro(),R(V),R(B),vo(),t=e.flags,t&64)throw Error(i(285));return e.flags=t&-4097|64,e;case 5:return ao(e),null;case 13:return R(W),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return R(W),null;case 4:return ro(),null;case 10:return Ea(e),null;case 23:case 24:return Ic(),null;default:return null}}function Os(e,t){try{var n=``,r=t;do n+=ge(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i}}function ks(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var As=typeof WeakMap==`function`?WeakMap:Map;function js(e,t,n){n=Na(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cc||(cc=!0,lc=r),ks(e,t)},n}function Ms(e,t,n){n=Na(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return ks(e,t),r(i)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){typeof r!=`function`&&(uc===null?uc=new Set([this]):uc.add(this),ks(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}var Ns=typeof WeakSet==`function`?WeakSet:Set;function Ps(e){var t=e.ref;if(t!==null)if(typeof t==`function`)try{t(null)}catch(t){$c(e,t)}else t.current=null}function Fs(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:ba(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&xi(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(i(163))}function Is(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t===null?null:t.lastEffect,t!==null){e=t=t.next;do{if((e.tag&3)==3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t===null?null:t.lastEffect,t!==null){e=t=t.next;do{var a=e;r=a.next,a=a.tag,a&4&&a&1&&(Xc(n,e),Yc(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:ba(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&La(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}La(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&_i(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Jt(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(i(163))}function Ls(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`;else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty(`display`)?i.display:null,r.style.display=Ue(`display`,i)}}else if(n.tag===6)n.stateNode.nodeValue=t?``:n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Rs(e,t){if(Ji&&typeof Ji.onCommitFiberUnmount==`function`)try{Ji.onCommitFiberUnmount(qi,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if(r&4)Xc(t,n);else{r=t;try{i()}catch(e){$c(r,e)}}n=n.next}while(n!==e)}break;case 1:if(Ps(t),e=t.stateNode,typeof e.componentWillUnmount==`function`)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){$c(t,e)}break;case 5:Ps(t);break;case 4:Ws(e,t)}}function zs(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Bs(e){return e.tag===5||e.tag===3||e.tag===4}function Vs(e){a:{for(var t=e.return;t!==null;){if(Bs(t))break a;t=t.return}throw Error(i(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(i(161))}n.flags&16&&(Be(t,``),n.flags&=-17);a:b:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Bs(n.return)){n=null;break a}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue b;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break a}}r?Hs(e,n,t):Us(e,n,t)}function Hs(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(r!==4&&(e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function Us(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}function Ws(e,t){for(var n=t,r=!1,a,o;;){if(!r){r=n.return;a:for(;;){if(r===null)throw Error(i(160));switch(a=r.stateNode,r.tag){case 5:o=!1;break a;case 3:a=a.containerInfo,o=!0;break a;case 4:a=a.containerInfo,o=!0;break a}r=r.return}r=!0}if(n.tag===5||n.tag===6){a:for(var s=e,c=n,l=c;;)if(Rs(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===c)break a;for(;l.sibling===null;){if(l.return===null||l.return===c)break a;l=l.return}l.sibling.return=l.return,l=l.sibling}o?(s=a,c=n.stateNode,s.nodeType===8?s.parentNode.removeChild(c):s.removeChild(c)):a.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){a=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(Rs(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Gs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n===null?null:n.lastEffect,n!==null){var r=n=n.next;do(r.tag&3)==3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var a=e===null?r:e.memoizedProps;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[Oi]=r,e===`input`&&r.type===`radio`&&r.name!=null&&we(n,r),qe(e,a),t=qe(e,r),a=0;a<o.length;a+=2){var s=o[a],c=o[a+1];s===`style`?We(n,c):s===`dangerouslySetInnerHTML`?ze(n,c):s===`children`?Be(n,c):w(n,s,c,t)}switch(e){case`input`:Te(n,r);break;case`textarea`:Ne(n,r);break;case`select`:e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o==null?e!==!!r.multiple&&(r.defaultValue==null?Ae(n,!!r.multiple,r.multiple?[]:``,!1):Ae(n,!!r.multiple,r.defaultValue,!0)):Ae(n,!!r.multiple,o,!1)}}}return;case 6:if(t.stateNode===null)throw Error(i(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Jt(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(ac=U(),Ls(t.child,!0)),Ks(t);return;case 19:Ks(t);return;case 17:return;case 23:case 24:Ls(t,t.memoizedState!==null);return}throw Error(i(163))}function Ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ns),t.forEach(function(t){var r=tl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function qs(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Js=Math.ceil,Ys=T.ReactCurrentDispatcher,Xs=T.ReactCurrentOwner,J=0,Y=null,X=null,Z=0,Zs=0,Qs=Ri(0),Q=0,$s=null,ec=0,tc=0,nc=0,rc=0,ic=null,ac=0,oc=1/0;function sc(){oc=U()+500}var $=null,cc=!1,lc=null,uc=null,dc=!1,fc=null,pc=90,mc=[],hc=[],gc=null,_c=0,vc=null,yc=-1,bc=0,xc=0,Sc=null,Cc=!1;function wc(){return J&48?U():yc===-1?yc=U():yc}function Tc(e){if(e=e.mode,!(e&2))return 1;if(!(e&4))return pa()===99?1:2;if(bc===0&&(bc=ec),ya.transition!==0){xc!==0&&(xc=ic===null?0:ic.pendingLanes),e=bc;var t=4186112&~xc;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=pa(),J&4&&e===98?e=hn(12,bc):(e=dn(e),e=hn(e,bc)),e}function Ec(e,t,n){if(50<_c)throw _c=0,vc=null,Error(i(185));if(e=Dc(e,t),e===null)return null;vn(e,t,n),e===Y&&(nc|=t,Q===4&&Ac(e,Z));var r=pa();t===1?J&8&&!(J&48)?jc(e):(Oc(e,n),J===0&&(sc(),_a())):(!(J&4)||r!==98&&r!==99||(gc===null?gc=new Set([e]):gc.add(e)),Oc(e,n)),ic=e}function Dc(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Oc(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-yn(o),c=1<<s,l=a[s];if(l===-1){if((c&r)===0||(c&i)!==0){l=t,un(c);var u=I;a[s]=10<=u?l+250:6<=u?l+5e3:-1}}else l<=t&&(e.expiredLanes|=c);o&=~c}if(r=pn(e,e===Y?Z:0),t=I,r===0)n!==null&&(n!==sa&&Zi(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==sa&&Zi(n)}t===15?(n=jc.bind(null,e),la===null?(la=[n],ua=Xi(na,va)):la.push(n),n=sa):t===14?n=ga(99,jc.bind(null,e)):(n=fn(t),n=ga(n,kc.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function kc(e){if(yc=-1,xc=bc=0,J&48)throw Error(i(327));var t=e.callbackNode;if(Jc()&&e.callbackNode!==t)return null;var n=pn(e,e===Y?Z:0);if(n===0)return null;var r=n,a=J;J|=16;var o=zc();(Y!==e||Z!==r)&&(sc(),Lc(e,r));do try{Hc();break}catch(t){Rc(e,t)}while(1);if(Ta(),Ys.current=o,J=a,X===null?(Y=null,Z=0,r=Q):r=0,(ec&nc)!==0)Lc(e,0);else if(r!==0){if(r===2&&(J|=64,e.hydrate&&(e.hydrate=!1,xi(e.containerInfo)),n=mn(e),n!==0&&(r=Bc(e,n))),r===1)throw t=$s,Lc(e,0),Ac(e,n),Oc(e,U()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(i(345));case 2:Gc(e);break;case 3:if(Ac(e,n),(n&62914560)===n&&(r=ac+500-U(),10<r)){if(pn(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){wc(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=yi(Gc.bind(null,e),r);break}Gc(e);break;case 4:if(Ac(e,n),(n&4186112)===n)break;for(r=e.eventTimes,a=-1;0<n;){var s=31-yn(n);o=1<<s,s=r[s],s>a&&(a=s),n&=~o}if(n=a,n=U()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Js(n/1960))-n,10<n){e.timeoutHandle=yi(Gc.bind(null,e),n);break}Gc(e);break;case 5:Gc(e);break;default:throw Error(i(329))}}return Oc(e,U()),e.callbackNode===t?kc.bind(null,e):null}function Ac(e,t){for(t&=~rc,t&=~nc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yn(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if(J&48)throw Error(i(327));if(Jc(),e===Y&&(e.expiredLanes&Z)!==0){var t=Z,n=Bc(e,t);(ec&nc)!==0&&(t=pn(e,t),n=Bc(e,t))}else t=pn(e,0),n=Bc(e,t);if(e.tag!==0&&n===2&&(J|=64,e.hydrate&&(e.hydrate=!1,xi(e.containerInfo)),t=mn(e),t!==0&&(n=Bc(e,t))),n===1)throw n=$s,Lc(e,0),Ac(e,t),Oc(e,U()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gc(e),Oc(e,U()),null}function Mc(){if(gc!==null){var e=gc;gc=null,e.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Oc(e,U())})}_a()}function Nc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(sc(),_a())}}function Pc(e,t){var n=J;J&=-2,J|=8;try{return e(t)}finally{J=n,J===0&&(sc(),_a())}}function Fc(e,t){z(Qs,Zs),Zs|=t,ec|=t}function Ic(){Zs=Qs.current,R(Qs)}function Lc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bi(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hi();break;case 3:ro(),R(V),R(B),vo();break;case 5:ao(r);break;case 4:ro();break;case 13:R(W);break;case 19:R(W);break;case 10:Ea(r);break;case 23:case 24:Ic()}n=n.return}Y=e,X=sl(e.current,null),Z=Zs=ec=t,Q=0,$s=null,rc=nc=tc=0}function Rc(e,t){do{var n=X;try{if(Ta(),yo.current=Zo,So){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}So=!1}if(xo=0,q=K=G=null,Co=!1,Xs.current=null,n===null||n.return===null){Q=1,$s=t,X=null;break}a:{var a=e,o=n.return,s=n,c=t;if(t=Z,s.flags|=2048,s.firstEffect=s.lastEffect=null,typeof c==`object`&&c&&typeof c.then==`function`){var l=c;if(!(s.mode&2)){var u=s.alternate;u?(s.updateQueue=u.updateQueue,s.memoizedState=u.memoizedState,s.lanes=u.lanes):(s.updateQueue=null,s.memoizedState=null)}var d=(W.current&1)!=0,f=o;do{var p;if(p=f.tag===13){var m=f.memoizedState;if(m!==null)p=m.dehydrated!==null;else{var h=f.memoizedProps;p=h.fallback===void 0?!1:!0===h.unstable_avoidThisFallback?!d:!0}}if(p){var g=f.updateQueue;if(g===null){var _=new Set;_.add(l),f.updateQueue=_}else g.add(l);if(!(f.mode&2)){if(f.flags|=64,s.flags|=16384,s.flags&=-2981,s.tag===1)if(s.alternate===null)s.tag=17;else{var v=Na(-1,1);v.tag=2,Pa(s,v)}s.lanes|=1;break a}c=void 0,s=t;var y=a.pingCache;if(y===null?(y=a.pingCache=new As,c=new Set,y.set(l,c)):(c=y.get(l),c===void 0&&(c=new Set,y.set(l,c))),!c.has(s)){c.add(s);var b=el.bind(null,a,l,s);l.then(b,b)}f.flags|=4096,f.lanes=t;break a}f=f.return}while(f!==null);c=Error((_e(s.type)||`A React component`)+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Q!==5&&(Q=2),c=Os(c,s),f=o;do{switch(f.tag){case 3:a=c,f.flags|=4096,t&=-t,f.lanes|=t;var x=js(f,a,t);Fa(f,x);break a;case 1:a=c;var S=f.type,C=f.stateNode;if(!(f.flags&64)&&(typeof S.getDerivedStateFromError==`function`||C!==null&&typeof C.componentDidCatch==`function`&&(uc===null||!uc.has(C)))){f.flags|=4096,t&=-t,f.lanes|=t;var w=Ms(f,a,t);Fa(f,w);break a}}f=f.return}while(f!==null)}Wc(n)}catch(e){t=e,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function zc(){var e=Ys.current;return Ys.current=Zo,e===null?Zo:e}function Bc(e,t){var n=J;J|=16;var r=zc();Y===e&&Z===t||Lc(e,t);do try{Vc();break}catch(t){Rc(e,t)}while(1);if(Ta(),J=n,Ys.current=r,X!==null)throw Error(i(261));return Y=null,Z=0,Q}function Vc(){for(;X!==null;)Uc(X)}function Hc(){for(;X!==null&&!Qi();)Uc(X)}function Uc(e){var t=nl(e.alternate,e,Zs);e.memoizedProps=e.pendingProps,t===null?Wc(e):X=t,Xs.current=null}function Wc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&2048){if(n=Ds(t),n!==null){n.flags&=2047,X=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}else{if(n=Es(n,t,Zs),n!==null){X=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||Zs&1073741824||!(n.mode&4)){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&!(e.flags&2048)&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect===null?e.firstEffect=t:e.lastEffect.nextEffect=t,e.lastEffect=t))}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Q===0&&(Q=5)}function Gc(e){var t=pa();return ha(99,Kc.bind(null,e,t)),null}function Kc(e,t){do Jc();while(fc!==null);if(J&48)throw Error(i(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null;var r=n.lanes|n.childLanes,a=r,o=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;for(var s=e.eventTimes,c=e.expirationTimes;0<o;){var l=31-yn(o),u=1<<l;a[l]=0,s[l]=-1,c[l]=-1,o&=~u}if(gc!==null&&!(r&24)&&gc.has(e)&&gc.delete(e),e===Y&&(X=Y=null,Z=0),1<n.flags?n.lastEffect===null?r=n:(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n.firstEffect,r!==null){if(a=J,J|=32,Xs.current=null,hi=Tn,s=Gr(),Kr(s)){if(`selectionStart`in s)c={start:s.selectionStart,end:s.selectionEnd};else a:if(c=(c=s.ownerDocument)&&c.defaultView||window,(u=c.getSelection&&c.getSelection())&&u.rangeCount!==0){c=u.anchorNode,o=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{c.nodeType,l.nodeType}catch{c=null;break a}var d=0,f=-1,p=-1,m=0,h=0,g=s,_=null;b:for(;;){for(var v;g!==c||o!==0&&g.nodeType!==3||(f=d+o),g!==l||u!==0&&g.nodeType!==3||(p=d+u),g.nodeType===3&&(d+=g.nodeValue.length),(v=g.firstChild)!==null;)_=g,g=v;for(;;){if(g===s)break b;if(_===c&&++m===o&&(f=d),_===l&&++h===u&&(p=d),(v=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=v}c=f===-1||p===-1?null:{start:f,end:p}}else c=null;c||={start:0,end:0}}else c=null;gi={focusedElem:s,selectionRange:c},Tn=!1,Sc=null,Cc=!1,$=r;do try{qc()}catch(e){if($===null)throw Error(i(330));$c($,e),$=$.nextEffect}while($!==null);Sc=null,$=r;do try{for(s=e;$!==null;){var y=$.flags;if(y&16&&Be($.stateNode,``),y&128){var b=$.alternate;if(b!==null){var x=b.ref;x!==null&&(typeof x==`function`?x(null):x.current=null)}}switch(y&1038){case 2:Vs($),$.flags&=-3;break;case 6:Vs($),$.flags&=-3,Gs($.alternate,$);break;case 1024:$.flags&=-1025;break;case 1028:$.flags&=-1025,Gs($.alternate,$);break;case 4:Gs($.alternate,$);break;case 8:c=$,Ws(s,c);var S=c.alternate;zs(c),S!==null&&zs(S)}$=$.nextEffect}}catch(e){if($===null)throw Error(i(330));$c($,e),$=$.nextEffect}while($!==null);if(x=gi,b=Gr(),y=x.focusedElem,s=x.selectionRange,b!==y&&y&&y.ownerDocument&&Wr(y.ownerDocument.documentElement,y)){for(s!==null&&Kr(y)&&(b=s.start,x=s.end,x===void 0&&(x=b),(`selectionStart`in y)?(y.selectionStart=b,y.selectionEnd=Math.min(x,y.value.length)):(x=(b=y.ownerDocument||document)&&b.defaultView||window,x.getSelection&&(x=x.getSelection(),c=y.textContent.length,S=Math.min(s.start,c),s=s.end===void 0?S:Math.min(s.end,c),!x.extend&&S>s&&(c=s,s=S,S=c),c=Ur(y,S),o=Ur(y,s),c&&o&&(x.rangeCount!==1||x.anchorNode!==c.node||x.anchorOffset!==c.offset||x.focusNode!==o.node||x.focusOffset!==o.offset)&&(b=b.createRange(),b.setStart(c.node,c.offset),x.removeAllRanges(),S>s?(x.addRange(b),x.extend(o.node,o.offset)):(b.setEnd(o.node,o.offset),x.addRange(b)))))),b=[],x=y;x=x.parentNode;)x.nodeType===1&&b.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof y.focus==`function`&&y.focus(),y=0;y<b.length;y++)x=b[y],x.element.scrollLeft=x.left,x.element.scrollTop=x.top}Tn=!!hi,gi=hi=null,e.current=n,$=r;do try{for(y=e;$!==null;){var C=$.flags;if(C&36&&Is(y,$.alternate,$),C&128){b=void 0;var w=$.ref;if(w!==null){var T=$.stateNode;switch($.tag){case 5:b=T;break;default:b=T}typeof w==`function`?w(b):w.current=b}}$=$.nextEffect}}catch(e){if($===null)throw Error(i(330));$c($,e),$=$.nextEffect}while($!==null);$=null,ca(),J=a}else e.current=n;if(dc)dc=!1,fc=e,pc=t;else for($=r;$!==null;)t=$.nextEffect,$.nextEffect=null,$.flags&8&&(C=$,C.sibling=null,C.stateNode=null),$=t;if(r=e.pendingLanes,r===0&&(uc=null),r===1?e===vc?_c++:(_c=0,vc=e):_c=0,n=n.stateNode,Ji&&typeof Ji.onCommitFiberRoot==`function`)try{Ji.onCommitFiberRoot(qi,n,void 0,(n.current.flags&64)==64)}catch{}if(Oc(e,U()),cc)throw cc=!1,e=lc,lc=null,e;return J&8||_a(),null}function qc(){for(;$!==null;){var e=$.alternate;Cc||Sc===null||($.flags&8?Tt($,Sc)&&(Cc=!0):$.tag===13&&qs(e,$)&&Tt($,Sc)&&(Cc=!0));var t=$.flags;t&256&&Fs(e,$),!(t&512)||dc||(dc=!0,ga(97,function(){return Jc(),null})),$=$.nextEffect}}function Jc(){if(pc!==90){var e=97<pc?97:pc;return pc=90,ha(e,Zc)}return!1}function Yc(e,t){mc.push(t,e),dc||(dc=!0,ga(97,function(){return Jc(),null}))}function Xc(e,t){hc.push(t,e),dc||(dc=!0,ga(97,function(){return Jc(),null}))}function Zc(){if(fc===null)return!1;var e=fc;if(fc=null,J&48)throw Error(i(331));var t=J;J|=32;var n=hc;hc=[];for(var r=0;r<n.length;r+=2){var a=n[r],o=n[r+1],s=a.destroy;if(a.destroy=void 0,typeof s==`function`)try{s()}catch(e){if(o===null)throw Error(i(330));$c(o,e)}}for(n=mc,mc=[],r=0;r<n.length;r+=2){a=n[r],o=n[r+1];try{var c=a.create;a.destroy=c()}catch(e){if(o===null)throw Error(i(330));$c(o,e)}}for(c=e.current.firstEffect;c!==null;)e=c.nextEffect,c.nextEffect=null,c.flags&8&&(c.sibling=null,c.stateNode=null),c=e;return J=t,_a(),!0}function Qc(e,t,n){t=Os(n,t),t=js(e,t,1),Pa(e,t),t=wc(),e=Dc(e,1),e!==null&&(vn(e,1,t),Oc(e,t))}function $c(e,t){if(e.tag===3)Qc(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Qc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(uc===null||!uc.has(r))){e=Os(t,e);var i=Ms(n,e,1);if(Pa(n,i),i=wc(),n=Dc(n,1),n!==null)vn(n,1,i),Oc(n,i);else if(typeof r.componentDidCatch==`function`&&(uc===null||!uc.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function el(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=wc(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Z&n)===n&&(Q===4||Q===3&&(Z&62914560)===Z&&500>U()-ac?Lc(e,0):rc|=n),Oc(e,t)}function tl(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,t&2?t&4?(bc===0&&(bc=ec),t=gn(62914560&~bc),t===0&&(t=4194304)):t=pa()===99?1:2:t=1),n=wc(),e=Dc(e,t),e!==null&&(vn(e,t,n),Oc(e,n))}var nl=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||V.current)ns=!0;else if((n&r)!==0)ns=!!(e.flags&16384);else{switch(ns=!1,t.tag){case 3:fs(t),go();break;case 5:io(t);break;case 1:H(t.type)&&Gi(t);break;case 4:no(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var a=t.type._context;z(xa,a._currentValue),a._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)===0?(z(W,W.current&1),t=xs(e,t,n),t===null?null:t.sibling):ms(e,t,n);z(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&64){if(r)return bs(e,t,n);t.flags|=64}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),z(W,W.current),r)break;return null;case 23:case 24:return t.lanes=0,ss(e,t,n)}return xs(e,t,n)}else ns=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=Vi(t,B.current),Oa(t,n),a=Eo(null,t,r,e,a,n),t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,H(r)){var o=!0;Gi(t)}else o=!1;t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ja(t);var s=r.getDerivedStateFromProps;typeof s==`function`&&za(t,r,s,e),a.updater=Ba,t.stateNode=a,a._reactInternals=t,Wa(t,r,e,n),t=ds(null,t,r,!0,o,n)}else t.tag=0,rs(null,t,a,n),t=t.child;return t;case 16:a=t.elementType;a:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=ol(a),e=ba(a,e),o){case 0:t=ls(null,t,a,e,n);break a;case 1:t=us(null,t,a,e,n);break a;case 11:t=is(null,t,a,e,n);break a;case 14:t=as(null,t,a,ba(a.type,e),r,n);break a}throw Error(i(306,a,``))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),ls(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),us(e,t,r,a,n);case 3:if(fs(t),r=t.updateQueue,e===null||r===null)throw Error(i(282));if(r=t.pendingProps,a=t.memoizedState,a=a===null?null:a.element,Ma(e,t),Ia(t,r,null,n),r=t.memoizedState.element,r===a)go(),t=xs(e,t,n);else{if(a=t.stateNode,(o=a.hydrate)&&(co=Si(t.stateNode.containerInfo.firstChild),so=t,o=lo=!0),o){if(e=a.mutableSourceEagerHydrationData,e!=null)for(a=0;a<e.length;a+=2)o=e[a],o._workInProgressVersionPrimary=e[a+1],_o.push(o);for(n=Xa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else rs(e,t,r,n),go();t=t.child}return t;case 5:return io(t),e===null&&po(t),r=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,vi(r,a)?s=null:o!==null&&vi(r,o)&&(t.flags|=16),cs(e,t),rs(e,t,s,n),t.child;case 6:return e===null&&po(t),null;case 13:return ms(e,t,n);case 4:return no(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ya(t,null,r,n):rs(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),is(e,t,r,a,n);case 7:return rs(e,t,t.pendingProps,n),t.child;case 8:return rs(e,t,t.pendingProps.children,n),t.child;case 12:return rs(e,t,t.pendingProps.children,n),t.child;case 10:a:{r=t.type._context,a=t.pendingProps,s=t.memoizedProps,o=a.value;var c=t.type._context;if(z(xa,c._currentValue),c._currentValue=o,s!==null)if(c=s.value,o=zr(c,o)?0:(typeof r._calculateChangedBits==`function`?r._calculateChangedBits(c,o):1073741823)|0,o===0){if(s.children===a.children&&!V.current){t=xs(e,t,n);break a}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var l=c.dependencies;if(l!==null){s=c.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&o)!==0){c.tag===1&&(u=Na(-1,n&-n),u.tag=2,Pa(c,u)),c.lanes|=n,u=c.alternate,u!==null&&(u.lanes|=n),Da(c.return,n),l.lanes|=n;break}u=u.next}}else s=c.tag===10&&c.type===t.type?null:c.child;if(s!==null)s.return=c;else for(s=c;s!==null;){if(s===t){s=null;break}if(c=s.sibling,c!==null){c.return=s.return,s=c;break}s=s.return}c=s}rs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps,r=o.children,Oa(t,n),a=ka(a,o.unstable_observedBits),r=r(a),t.flags|=1,rs(e,t,r,n),t.child;case 14:return a=t.type,o=ba(a,t.pendingProps),o=ba(a.type,o),as(e,t,a,o,r,n);case 15:return os(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,H(r)?(e=!0,Gi(t)):e=!1,Oa(t,n),Ha(t,r,a),Wa(t,r,a,n),ds(null,t,r,!0,e,n);case 19:return bs(e,t,n);case 23:return ss(e,t,n);case 24:return ss(e,t,n)}throw Error(i(156,t.tag))};function rl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function il(e,t,n,r){return new rl(e,t,n,r)}function al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ol(e){if(typeof e==`function`)return al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===j)return 11;if(e===re)return 14}return 2}function sl(e,t){var n=e.alternate;return n===null?(n=il(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function cl(e,t,n,r,a,o){var s=2;if(r=e,typeof e==`function`)al(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case D:return ll(n.children,a,o,t);case se:s=8,a|=16;break;case O:s=8,a|=1;break;case k:return e=il(12,n,t,a|8),e.elementType=k,e.type=k,e.lanes=o,e;case ne:return e=il(13,n,t,a),e.type=ne,e.elementType=ne,e.lanes=o,e;case M:return e=il(19,n,t,a),e.elementType=M,e.lanes=o,e;case ce:return ul(n,a,o,t);case le:return e=il(24,n,t,a),e.elementType=le,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case A:s=9;break a;case j:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a;case ae:s=22;break a}throw Error(i(130,e==null?e:typeof e,``))}return t=il(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ll(e,t,n,r){return e=il(7,e,r,t),e.lanes=n,e}function ul(e,t,n,r){return e=il(23,e,r,t),e.elementType=ce,e.lanes=n,e}function dl(e,t,n){return e=il(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=il(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pl(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.mutableSourceEagerHydrationData=null}function ml(e,t,n,r){var a=t.current,o=wc(),s=Tc(a);a:if(n){n=n._reactInternals;b:{if(bt(n)!==n||n.tag!==1)throw Error(i(170));var c=n;do{switch(c.tag){case 3:c=c.stateNode.context;break b;case 1:if(H(c.type)){c=c.stateNode.__reactInternalMemoizedMergedChildContext;break b}}c=c.return}while(c!==null);throw Error(i(171))}if(n.tag===1){var l=n.type;if(H(l)){n=Wi(n,l,c);break a}}n=c}else n=zi;return t.context===null?t.context=n:t.pendingContext=n,t=Na(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Pa(a,t),Ec(a,s,o),s}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _l(e,t){gl(e,t),(e=e.alternate)&&gl(e,t)}function vl(){return null}function yl(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new pl(e,t,n!=null&&!0===n.hydrate),t=il(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,ja(t),e[ki]=n.current,oi(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}yl.prototype.render=function(e){ml(e,this._internalRoot,null,null)},yl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;ml(null,e,null,function(){t[ki]=null})};function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function xl(e,t){if(t||=(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,!(!t||t.nodeType!==1||!t.hasAttribute(`data-reactroot`))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new yl(e,0,t?{hydrate:!0}:void 0)}function Sl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a._internalRoot;if(typeof i==`function`){var s=i;i=function(){var e=hl(o);s.call(e)}}ml(t,o,e,i)}else{if(a=n._reactRootContainer=xl(n,r),o=a._internalRoot,typeof i==`function`){var c=i;i=function(){var e=hl(o);c.call(e)}}Pc(function(){ml(t,o,e,i)})}return hl(o)}Et=function(e){e.tag===13&&(Ec(e,4,wc()),_l(e,4))},Dt=function(e){e.tag===13&&(Ec(e,67108864,wc()),_l(e,67108864))},Ot=function(e){if(e.tag===13){var t=wc(),n=Tc(e);Ec(e,n,t),_l(e,n)}},kt=function(e,t){return t()},Ye=function(e,t,n){switch(t){case`input`:if(Te(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Pi(r);if(!a)throw Error(i(90));xe(r),Te(r,a)}}}break;case`textarea`:Ne(e,n);break;case`select`:t=n.value,t!=null&&Ae(e,!!n.multiple,t,!1)}},tt=Nc,nt=function(e,t,n,r,i){var a=J;J|=4;try{return ha(98,e.bind(null,t,n,r,i))}finally{J=a,J===0&&(sc(),_a())}},rt=function(){!(J&49)&&(Mc(),Jc())},it=function(e,t){var n=J;J|=2;try{return e(t)}finally{J=n,J===0&&(sc(),_a())}};var Cl={findFiberByHostInstance:ji,bundleType:0,version:`17.0.2`,rendererPackageName:`react-dom`},wl={bundleType:Cl.bundleType,version:Cl.version,rendererPackageName:Cl.rendererPackageName,rendererConfig:Cl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wt(e),e===null?null:e.stateNode},findFiberByHostInstance:Cl.findFiberByHostInstance||vl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{qi=Tl.inject(wl),Ji=Tl}catch{}}e.render=function(e,t,n){if(!bl(t))throw Error(i(200));return Sl(null,e,t,!1,n)}})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=Object.defineProperty,_=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t,n)=>_(e,typeof t==`symbol`?t:t+``,n);function y(e,t,n){return Math.min(Math.max(e,t),n)}function b(e,t){return typeof e!=`number`||Number.isNaN(e)?t:Math.max(0,e)}var x={ring:{value:`ring`,label:`Ring`,category:`spinner`,description:`A refined circular spinner for general loading states.`,recommendedUse:`Use for default async states inside cards, panels, and centered sections.`,defaultCount:1,minCount:1,maxCount:1},"dual-ring":{value:`dual-ring`,label:`Dual Ring`,category:`spinner`,description:`Two concentric rings rotating in opposite directions for more visual energy.`,recommendedUse:`Use when you want a richer spinner without overwhelming compact layouts.`,defaultCount:2,minCount:2,maxCount:2},"segmented-ring":{value:`segmented-ring`,label:`Segmented Ring`,category:`spinner`,description:`A segmented circular loader with precise ticks and premium motion.`,recommendedUse:`Use when you want a polished technical spinner for dashboards, analytics, or admin tools.`,defaultCount:10,minCount:6,maxCount:12},arc:{value:`arc`,label:`Arc`,category:`spinner`,description:`A thick curved sweep with strong motion and excellent legibility.`,recommendedUse:`Use on dashboards or surfaces where the loader needs a bold silhouette.`,defaultCount:1,minCount:1,maxCount:1},orbit:{value:`orbit`,label:`Orbit`,category:`spinner`,description:`A premium orbital motion with a stable central anchor.`,recommendedUse:`Use in hero states, polished overlays, or brand-forward experiences.`,defaultCount:2,minCount:2,maxCount:2},comet:{value:`comet`,label:`Comet`,category:`spinner`,description:`A luminous point with a trailing comet tail orbiting a soft ring.`,recommendedUse:`Use for premium hero states, modal loading, and brand-forward async moments.`,defaultCount:2,minCount:2,maxCount:2},halo:{value:`halo`,label:`Halo`,category:`spinner`,description:`A thin halo with soft glow pulses and minimal visual noise.`,recommendedUse:`Use in refined enterprise interfaces where the loading state should stay elegant.`,defaultCount:2,minCount:2,maxCount:2},radar:{value:`radar`,label:`Radar`,category:`spinner`,description:`A scanning beam effect with layered depth.`,recommendedUse:`Use for search, sync, telemetry, or data discovery moments.`,defaultCount:3,minCount:3,maxCount:3},astronaut:{value:`astronaut`,label:`Astronaut`,category:`surface`,description:`A floating astronaut illustration with soft starfield motion.`,recommendedUse:`Use for onboarding, empty states, playful overlays, and premium loading moments.`,defaultCount:3,minCount:3,maxCount:3},"astronaut-to-mars":{value:`astronaut-to-mars`,label:`Astronaut To Mars`,category:`surface`,description:`A tiny astronaut traveling toward Mars with a cinematic space-route feel.`,recommendedUse:`Use for route transitions, splash states, and standout brand-forward loading sequences.`,defaultCount:4,minCount:4,maxCount:4},"baseball-player":{value:`baseball-player`,label:`Baseball Player`,category:`surface`,description:`A batter driving the ball with a clean swing and curved flight path.`,recommendedUse:`Use for sports products, onboarding, and illustrative loading states with momentum.`,defaultCount:4,minCount:4,maxCount:4},"football-player":{value:`football-player`,label:`Football Player`,category:`surface`,description:`A footballer striking the ball forward with a smooth kick arc.`,recommendedUse:`Use for soccer experiences, score views, and highly expressive loading moments.`,defaultCount:4,minCount:4,maxCount:4},galaxy:{value:`galaxy`,label:`Galaxy`,category:`surface`,description:`A glowing spiral galaxy with a bright core, orbiting stars, and drifting cosmic dust.`,recommendedUse:`Use for splash screens, premium hero states, sci-fi interfaces, and high-drama loading moments.`,defaultCount:6,minCount:6,maxCount:6},pulse:{value:`pulse`,label:`Pulse`,category:`surface`,description:`A breathing pulse with soft echo rings.`,recommendedUse:`Use for ambient loading and low-noise inline states.`,defaultCount:2,minCount:2,maxCount:2},"wave-dots":{value:`wave-dots`,label:`Wave Dots`,category:`dots`,description:`Dots that ripple upward in sequence.`,recommendedUse:`Use for conversational UIs, message streams, and compact inline feedback.`,defaultCount:4,minCount:3,maxCount:8},"bouncing-dots":{value:`bouncing-dots`,label:`Bouncing Dots`,category:`dots`,description:`Classic dot rhythm with a more premium bounce curve.`,recommendedUse:`Use for buttons, compact surfaces, and general-purpose text-adjacent loading.`,defaultCount:3,minCount:3,maxCount:8},"typing-dots":{value:`typing-dots`,label:`Typing Dots`,category:`dots`,description:`A staggered fade-and-scale sequence inspired by chat typing indicators.`,recommendedUse:`Use in assistants, feeds, or message composer feedback states.`,defaultCount:3,minCount:3,maxCount:5},"grid-pulse":{value:`grid-pulse`,label:`Grid Pulse`,category:`surface`,description:`A 3x3 pulse grid that feels structured, compact, and modern.`,recommendedUse:`Use for compact surfaces, icon-scale loading, and data-heavy interface chrome.`,defaultCount:9,minCount:9,maxCount:9},"magnetic-dots":{value:`magnetic-dots`,label:`Magnetic Dots`,category:`dots`,description:`Dots that pull toward the center and relax outward in a magnetic rhythm.`,recommendedUse:`Use for inline controls, button states, and compact polished micro-feedback.`,defaultCount:4,minCount:3,maxCount:6},"spiral-dots":{value:`spiral-dots`,label:`Spiral Dots`,category:`dots`,description:`Layered dots arranged in a rotating spiral with subtle depth.`,recommendedUse:`Use for premium overlays and loaders that should feel more bespoke than a standard spinner.`,defaultCount:6,minCount:5,maxCount:8},constellation:{value:`constellation`,label:`Constellation`,category:`dots`,description:`Network-like nodes with a soft connected-system feel.`,recommendedUse:`Use for AI, search, sync, and graph-oriented product experiences.`,defaultCount:6,minCount:5,maxCount:6},"equalizer-bars":{value:`equalizer-bars`,label:`Equalizer Bars`,category:`bars`,description:`Animated bars with an audio-like rhythm.`,recommendedUse:`Use for analytics, media, and lively data surfaces.`,defaultCount:5,minCount:3,maxCount:8},"rising-bars":{value:`rising-bars`,label:`Rising Bars`,category:`bars`,description:`Clean bars that rise from a subtle track.`,recommendedUse:`Use in tables, forms, and panels where you want linear motion.`,defaultCount:4,minCount:3,maxCount:8},shimmer:{value:`shimmer`,label:`Shimmer`,category:`surface`,description:`A modern skeleton-like shimmer strip.`,recommendedUse:`Use for content placeholders, cards, and container-level loading.`,defaultCount:1,minCount:1,maxCount:1},"scan-line":{value:`scan-line`,label:`Scan Line`,category:`surface`,description:`A scanning line that sweeps across a clean data surface.`,recommendedUse:`Use for tables, data panes, security-style scans, and content inspection states.`,defaultCount:1,minCount:1,maxCount:1},"liquid-pill":{value:`liquid-pill`,label:`Liquid Pill`,category:`surface`,description:`A rounded pill loader with fluid motion and soft internal glow.`,recommendedUse:`Use for buttons, compact forms, and ambient inline loading with branded motion.`,defaultCount:2,minCount:2,maxCount:2},"ripple-stack":{value:`ripple-stack`,label:`Ripple Stack`,category:`surface`,description:`Concentric ripples that radiate outward with a calm layered cadence.`,recommendedUse:`Use for overlays, fullscreen states, and soft-focus loading moments.`,defaultCount:3,minCount:3,maxCount:4},"minimal-spinner":{value:`minimal-spinner`,label:`Minimal Spinner`,category:`spinner`,description:`A thin understated spinner with understated motion.`,recommendedUse:`Use where UI chrome should stay quiet and elegant.`,defaultCount:1,minCount:1,maxCount:1},"neon-spinner":{value:`neon-spinner`,label:`Neon Spinner`,category:`spinner`,description:`A glowing spinner with high-contrast accents.`,recommendedUse:`Use in dark surfaces, product tours, and expressive brand moments.`,defaultCount:2,minCount:2,maxCount:2},"glass-spinner":{value:`glass-spinner`,label:`Glass Spinner`,category:`spinner`,description:`A frosted, translucent spinner with soft highlights.`,recommendedUse:`Use on overlays and premium surface treatments.`,defaultCount:2,minCount:2,maxCount:2},vortex:{value:`vortex`,label:`Vortex`,category:`spinner`,description:`Multiple rotating elements that create a layered vortex effect.`,recommendedUse:`Use for major loading transitions, modals, and splash states.`,defaultCount:3,minCount:3,maxCount:3},cube:{value:`cube`,label:`Cube`,category:`surface`,description:`Rotating geometric blocks with a clean enterprise-friendly feel.`,recommendedUse:`Use in dashboards, admin tools, and product surfaces with grid structure.`,defaultCount:4,minCount:4,maxCount:4},diamond:{value:`diamond`,label:`Diamond`,category:`surface`,description:`Four angular facets that pulse in a diamond pattern.`,recommendedUse:`Use when you want geometric motion that still feels compact.`,defaultCount:4,minCount:4,maxCount:4},prism:{value:`prism`,label:`Prism`,category:`surface`,description:`Glass-like prism shards rotating with translucent layered highlights.`,recommendedUse:`Use on premium overlays, polished product shells, and modern dark themes.`,defaultCount:3,minCount:3,maxCount:3},"skeleton-blocks":{value:`skeleton-blocks`,label:`Skeleton Blocks`,category:`surface`,description:`A compact skeleton-style block layout with animated shimmer passes.`,recommendedUse:`Use for content placeholders, side panels, cards, and list loading states.`,defaultCount:4,minCount:4,maxCount:4}},S=Object.values(x);function C(e){return x[e]}function w(e,t){let n=C(e);return y(t.count??n.defaultCount,n.minCount,n.maxCount)}function T(e,t){let n=e??t;return typeof n==`number`?`${n}px`:n}function E(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ee(e,t){Object.entries(t).forEach(([t,n])=>{let r=t.startsWith(`--`)?t:E(t);if(n==null){e.style.removeProperty(r);return}e.style.setProperty(r,D(n))})}function D(e){return typeof e==`number`?String(e):e??``}function O(e,t){let n=e.replace(`#`,``).trim(),r=n.length===3||n.length===4?n.split(``).map(e=>`${e}${e}`).join(``):n;if(r.length!==6&&r.length!==8)return`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`;let i=parseInt(r.slice(0,2),16),a=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16),s=r.length===8?parseInt(r.slice(6,8),16)/255:1;return`rgba(${i}, ${a}, ${o}, ${Math.max(0,Math.min(1,s*t))})`}function k(e,t){let n=e.replace(/rgba?\(/,``).replace(`)`,``).split(`,`).map(e=>e.trim());return n.length<3?`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`:`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t})`}function te(e,t){let n=Math.max(0,Math.min(1,t));return e.startsWith(`#`)?O(e,n):e.startsWith(`rgb`)?k(e,n):`color-mix(in srgb, ${e} ${Math.round(n*100)}%, transparent)`}var A={variant:`ring`,size:`40px`,color:`var(--rvl-theme-color)`,secondaryColor:`var(--rvl-theme-secondary)`,speed:900,thickness:3,opacity:1,background:`var(--rvl-theme-overlay)`,overlay:!1,blur:12,radius:`18px`,gap:8,direction:`normal`,label:``,inline:!1,centered:!1,fullscreen:!1,visible:!1,delay:0,minVisible:240,zIndex:1600,className:``,style:{},ariaLive:`polite`,target:null};function j(e={}){let t=e.variant??A.variant,n=C(t),r=e.color??A.color,i=e.secondaryColor??te(r,.2),a=Object.prototype.hasOwnProperty.call(e,`label`),o={variant:t,size:T(e.size,A.size),color:r,secondaryColor:i,speed:y(b(e.speed,A.speed),200,8e3),thickness:y(b(e.thickness,A.thickness),1,16),opacity:y(typeof e.opacity==`number`?e.opacity:A.opacity,.12,1),background:e.background??A.background,overlay:e.overlay??A.overlay,blur:y(b(e.blur,A.blur),0,32),radius:T(e.radius,A.radius),gap:y(b(e.gap,A.gap),0,48),count:w(t,e),direction:e.direction??A.direction,label:a?e.label??``:A.label,inline:e.inline??A.inline,centered:e.centered??A.centered,fullscreen:e.fullscreen??A.fullscreen,visible:e.visible??A.visible,delay:y(b(e.delay,A.delay),0,3e4),minVisible:y(b(e.minVisible,A.minVisible),0,6e4),zIndex:y(b(e.zIndex,A.zIndex),1,2147483647),className:e.className?.trim()??A.className,style:e.style??{},ariaLive:e.ariaLive??A.ariaLive,target:e.target??A.target};return o.fullscreen&&(o.overlay=!0,o.inline=!1,o.centered=!0),o.inline&&(o.overlay=!1,o.fullscreen=!1),!a&&!o.label&&(o.label=`Loading with ${n.label.toLowerCase()}`),o}var ne=`
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
`,M=`
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
`,re=`.rvl-variant--`,ie=new Map;function ae(e){let t=`${re}${e}`,n=[],r=0;for(;r<M.length;){for(;r<M.length&&/\s/.test(M[r]??``);)r+=1;if(r>=M.length)break;let e=r;for(;r<M.length&&M[r]!==`{`;)r+=1;if(r>=M.length)break;let i=M.slice(e,r).trim();r+=1;let a=r,o=1;for(;r<M.length&&o>0;){let e=M[r];e===`{`?o+=1:e===`}`&&--o,r+=1}if(!i.includes(re))continue;let s=i.split(`,`).map(e=>e.trim()).filter(Boolean).filter(e=>e.includes(t));if(!s.length)continue;let c=M.slice(a,r-1).trimEnd();n.push(`${s.join(`,
`)} {
${c}
}`)}return n.join(`

`)}function oe(e){let t=ie.get(e);if(t)return t;let n=ae(e);return ie.set(e,n),n}function se(e){return e?`${ne}
${oe(e)}`:`${ne}
${M}`}var ce=ne;se();function le(){return typeof window<`u`&&typeof document<`u`}var N=`data-rvl-loading-base`,ue=`data-rvl-loading-variant`;function de(e){if(e.head.querySelector(`[${N}]`))return;let t=e.createElement(`style`);t.setAttribute(N,`true`),t.textContent=ce,e.head.append(t)}function fe(e,t){if(t.head.querySelector(`[${ue}="${e}"]`))return;let n=oe(e);if(!n.trim())return;let r=t.createElement(`style`);r.setAttribute(ue,e),r.textContent=n,t.head.append(r)}function pe(e,t=document){le()&&(de(t),fe(e,t))}function me(e,t=document){if(typeof e==`string`){let n=t.querySelector(e);if(!n)throw Error(`@stackline/loading could not find target "${e}".`);return n}return e instanceof HTMLElement?e:t.body}function he(e){if(e===document.body||e===document.documentElement)return()=>void 0;let t=window.getComputedStyle(e).position;if(t&&t!==`static`)return()=>void 0;let n=e.style.position;return e.style.position=`relative`,()=>{if(n){e.style.position=n;return}e.style.removeProperty(`position`)}}var ge=0;function _e(e=`rvl`){return ge+=1,`${e}-${ge}`}var ve=class{constructor(e={}){if(v(this,`id`,_e()),v(this,`element`),v(this,`state`,{mounted:!1,visible:!1,destroyed:!1,pending:null}),v(this,`bodyElement`),v(this,`visualElement`),v(this,`labelElement`),v(this,`srElement`),v(this,`options`),v(this,`mountedTarget`,null),v(this,`restorePositionContext`,null),v(this,`showTimeoutId`,null),v(this,`hideTimeoutId`,null),v(this,`showResolver`,null),v(this,`hideResolver`,null),v(this,`shownAt`,0),!le())throw Error(`@stackline/loading requires a browser-like DOM to create loaders.`);this.options=j(e),pe(this.options.variant),this.element=document.createElement(`div`),this.element.dataset.rvlLoader=this.id,this.bodyElement=document.createElement(`div`),this.bodyElement.className=`rvl-body`,this.visualElement=document.createElement(`div`),this.visualElement.className=`rvl-visual`,this.visualElement.setAttribute(`aria-hidden`,`true`),this.labelElement=document.createElement(`span`),this.labelElement.className=`rvl-label`,this.srElement=document.createElement(`span`),this.srElement.className=`rvl-sr-only`,this.bodyElement.append(this.visualElement,this.labelElement,this.srElement),this.element.append(this.bodyElement),this.render(),(this.options.target||this.options.fullscreen)&&this.mount(this.options.target),this.options.visible?this.show():this.element.hidden=!0}getOptions(){return{...this.options,style:{...this.options.style}}}mount(e){this.assertAlive();let t=this.resolveMountTarget(e);return this.mountedTarget===t&&this.state.mounted?this:(this.unmount(),this.options.overlay&&!this.options.fullscreen&&(this.restorePositionContext=he(t)),t.append(this.element),this.mountedTarget=t,this.state.mounted=!0,this)}unmount(){return this.element.parentElement&&this.element.parentElement.removeChild(this.element),this.restorePositionContext&&=(this.restorePositionContext(),null),this.mountedTarget=null,this.state.mounted=!1,this}show(){return this.assertAlive(),this.state.visible&&this.state.pending!==`hide`?Promise.resolve():(this.clearHideTimer(!0),this.state.pending=`show`,this.state.mounted||this.mount(this.options.target),new Promise(e=>{let t=()=>{this.state.pending=null,this.state.visible=!0,this.shownAt=Date.now(),this.element.hidden=!1,this.syncVisibility(),this.showResolver?.(),this.showResolver=null};if(this.clearShowTimer(!0),this.showResolver=e,this.options.delay>0){this.showTimeoutId=window.setTimeout(t,this.options.delay);return}t()}))}hide(){return this.assertAlive(),!this.state.visible&&this.state.pending!==`show`?(this.syncVisibility(),Promise.resolve()):(this.clearShowTimer(!0),this.state.pending=`hide`,new Promise(e=>{let t=()=>{this.state.pending=null,this.state.visible=!1,this.syncVisibility(),this.hideResolver?.(),this.hideResolver=null};if(this.clearHideTimer(!0),this.hideResolver=e,!this.state.visible){t();return}let n=this.shownAt?Date.now()-this.shownAt:0,r=Math.max(0,this.options.minVisible-n);if(r>0){this.hideTimeoutId=window.setTimeout(t,r);return}t()}))}toggle(e){return(typeof e==`boolean`?e:!this.state.visible)?this.show():this.hide()}update(e){this.assertAlive();let t=this.resolveMountTarget();this.options=j({...this.options,...e,style:{...this.options.style,...e.style??{}}}),pe(this.options.variant),this.render();let n=this.resolveMountTarget();return t!==n&&this.state.mounted&&this.mount(n),this}destroy(){this.state.destroyed||(this.clearShowTimer(!0),this.clearHideTimer(!0),this.unmount(),this.state.destroyed=!0)}render(){let e=C(this.options.variant);this.element.className=[`rvl-loader`,`rvl-variant--${this.options.variant}`,this.options.inline?`is-inline`:`is-block`,this.options.overlay?`is-overlay`:``,this.options.fullscreen?`is-fullscreen`:``,this.options.centered?`is-centered`:``,this.options.label?`has-label`:``,this.options.className].filter(Boolean).join(` `),this.element.setAttribute(`role`,`status`),this.element.setAttribute(`aria-live`,this.options.ariaLive),this.element.setAttribute(`aria-atomic`,`true`),this.element.setAttribute(`aria-busy`,this.state.visible?`true`:`false`),this.element.dataset.variant=this.options.variant,this.element.style.cssText=``,this.element.style.setProperty(`--rvl-size`,this.options.size),this.element.style.setProperty(`--rvl-color`,this.options.color),this.element.style.setProperty(`--rvl-secondary-color`,this.options.secondaryColor),this.element.style.setProperty(`--rvl-speed`,`${this.options.speed}ms`),this.element.style.setProperty(`--rvl-thickness`,`${this.options.thickness}px`),this.element.style.setProperty(`--rvl-opacity`,`${this.options.opacity}`),this.element.style.setProperty(`--rvl-background`,this.options.background),this.element.style.setProperty(`--rvl-blur`,`${this.options.blur}px`),this.element.style.setProperty(`--rvl-radius`,this.options.radius),this.element.style.setProperty(`--rvl-gap`,`${this.options.gap}px`),this.element.style.setProperty(`--rvl-z-index`,`${this.options.zIndex}`),this.element.style.setProperty(`animation-direction`,this.options.direction),ee(this.element,this.options.style),this.labelElement.textContent=this.options.label,this.srElement.textContent=this.options.label,this.options.label?this.element.setAttribute(`aria-label`,this.options.label):this.element.removeAttribute(`aria-label`),this.element.title=e.label,this.visualElement.replaceChildren();for(let e=0;e<this.options.count;e+=1){let t=document.createElement(`span`);t.className=`rvl-part`,t.style.setProperty(`--part-index`,String(e)),this.visualElement.append(t)}this.syncVisibility()}syncVisibility(){this.element.hidden=!this.state.visible,this.element.setAttribute(`aria-busy`,this.state.visible?`true`:`false`),this.element.setAttribute(`aria-hidden`,this.state.visible?`false`:`true`)}resolveMountTarget(e){return this.options.fullscreen?document.body:me(e??this.options.target)}clearShowTimer(e=!1){this.showTimeoutId!=null&&(window.clearTimeout(this.showTimeoutId),this.showTimeoutId=null),e&&this.showResolver&&(this.showResolver(),this.showResolver=null)}clearHideTimer(e=!1){this.hideTimeoutId!=null&&(window.clearTimeout(this.hideTimeoutId),this.hideTimeoutId=null),e&&this.hideResolver&&(this.hideResolver(),this.hideResolver=null)}assertAlive(){if(this.state.destroyed)throw Error(`@stackline/loading cannot operate on a destroyed loader.`)}};function ye(e={}){return new ve(e)}var P=c(d(),1),be=typeof window<`u`?P.useLayoutEffect:P.useEffect,xe=o((e=>{l();var t=d(),n=60103;if(e.Fragment=60107,typeof Symbol==`function`&&Symbol.for){var r=Symbol.for;n=r(`react.element`),e.Fragment=r(`react.fragment`)}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)a.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:i.current}}e.jsx=s,e.jsxs=s})),F=o(((e,t)=>{t.exports=xe()}))();function Se(e,t,n){return e.current?n.current?(n.current.update({...t,target:e.current}),n.current):(n.current=ye({...t,target:e.current,visible:!1}),n.current):null}var Ce=(0,P.forwardRef)(function({options:e={},visible:t=!0,onCreate:n,onShown:r,onHidden:i,onUpdated:a,onDestroyed:o,...s},c){let l=(0,P.useRef)(null),u=(0,P.useRef)(null);return(0,P.useImperativeHandle)(c,()=>({getInstance(){return u.current},show(){return u.current?u.current.show():Promise.resolve()},hide(){return u.current?u.current.hide():Promise.resolve()},toggle(e){return u.current?u.current.toggle(e):Promise.resolve()},update(e){u.current&&u.current.update(e)},destroy(){if(u.current){let e=u.current;e.destroy(),u.current=null,o?.(e)}}}),[o]),be(()=>{let t=Se(l,e,u);if(t)return n?.(t),()=>{if(u.current){let e=u.current;e.destroy(),u.current=null,o?.(e)}}},[]),(0,P.useEffect)(()=>{let n=Se(l,e,u);if(n){if(a?.(n),t){n.show().then(()=>{r?.(n)});return}n.hide().then(()=>{i?.(n)})}},[e,t,i,r,a]),(0,F.jsx)(`div`,{ref:l,...s})});function we(e,t,n){if(!e.current)return null;let r={overlay:!0,centered:!0,...t,target:e.current};return n.current?(n.current.update(r),n.current):(n.current=ye({...r,visible:!1}),n.current)}var Te=(0,P.forwardRef)(function({children:e,options:t={},visible:n=!0,onCreate:r,onShown:i,onHidden:a,onUpdated:o,onDestroyed:s,style:c,...l},u){let d=(0,P.useRef)(null),f=(0,P.useRef)(null);return(0,P.useImperativeHandle)(u,()=>({getInstance(){return f.current},show(){return f.current?f.current.show():Promise.resolve()},hide(){return f.current?f.current.hide():Promise.resolve()},toggle(e){return f.current?f.current.toggle(e):Promise.resolve()},update(e){f.current&&f.current.update(e)},destroy(){if(f.current){let e=f.current;e.destroy(),f.current=null,s?.(e)}}}),[s]),be(()=>{let e=we(d,t,f);if(e)return r?.(e),()=>{if(f.current){let e=f.current;e.destroy(),f.current=null,s?.(e)}}},[]),(0,P.useEffect)(()=>{let e=we(d,t,f);if(e){if(o?.(e),n){e.show().then(()=>{i?.(e)});return}e.hide().then(()=>{a?.(e)})}},[t,n,a,i,o]),(0,F.jsx)(`div`,{ref:d,style:{position:`relative`,...c},...l,children:e})});function Ee(e,t,n){let r={...e,...n||{}};return t!==void 0&&(r.target=t),r}function De(e={}){let t=(0,P.useRef)(null),n=(0,P.useRef)(e);n.current=e,(0,P.useEffect)(()=>()=>{t.current&&=(t.current.destroy(),null)},[]);function r(e,r){let i=Ee(n.current,e,r);return t.current?(i.target!==void 0&&t.current.mount(i.target),t.current.update(i),t.current):(t.current=ye({...i,visible:!1}),t.current)}return{create(e,t){return r(e,t)},mount(e,t){return r(e,t)},async show(e,t){let n=r(e,t);return await n.show(),n},hide(){return t.current?t.current.hide():Promise.resolve()},toggle(e){return t.current?t.current.toggle(e):Promise.resolve()},update(e){return t.current?(t.current.update(e),t.current):null},destroy(){t.current&&=(t.current.destroy(),null)},getInstance(){return t.current}}}var Oe=c(h()),ke=(S||[]).map(e=>({value:e.value,label:e.label})),Ae=[{id:`default`,label:`Default`,description:`A clean centered stage for checking size, color, speed, and label choices.`},{id:`dashboard`,label:`Dashboard`,description:`Keep product cards visible while the active region stays anchored to a loading state.`},{id:`table`,label:`Table`,description:`A common analytics refresh pattern where the user should keep their table context.`},{id:`page`,label:`Page`,description:`Simulate a route-level or workspace-level loading state inside the docs shell.`},{id:`modal`,label:`Modal`,description:`Load only the modal body while keeping the dialog frame stable.`},{id:`chart`,label:`Chart`,description:`Useful for analytical surfaces where movement should feel intentional and data-centric.`},{id:`upload`,label:`Upload`,description:`A drop zone preview for uploads, media workflows, and file-heavy forms.`}],je={variant:`orbit`,size:60,speed:900,color:`#2563eb`,secondaryColor:`#c7d2fe`,overlay:!1,fullscreen:!1,centered:!0,label:`Loading preview`,delay:0,minVisible:240,reducedMotion:!1};function Me(e,t){let n=``;for(let r=0;r<t;r+=1)n+=e;return n}function Ne(e){return String(e).split(`'`).join(`\\'`)}function Pe(e){let t=e.fullscreen,n=e.overlay||t,r={variant:e.variant,size:e.size,speed:e.speed,color:e.color,secondaryColor:e.secondaryColor,centered:n?!0:e.centered,delay:e.delay,minVisible:e.minVisible};return e.label&&(r.label=e.label),n&&(r.overlay=!0),t&&(r.background=`rgba(15, 23, 42, 0.54)`),r}function Fe(e,t,n=!1){let r=Me(` `,t),i=Me(` `,t+2),a=[`{`,`${i}variant: '${e.variant}',`,`${i}size: ${e.size},`,`${i}speed: ${e.speed},`,`${i}color: '${e.color}',`,`${i}secondaryColor: '${e.secondaryColor}',`];return(e.overlay||e.fullscreen||n)&&a.push(`${i}overlay: true,`),e.fullscreen&&(a.push(`${i}fullscreen: true,`),a.push(`${i}background: 'rgba(15, 23, 42, 0.54)',`)),e.centered&&!e.fullscreen&&a.push(`${i}centered: true,`),e.label&&a.push(`${i}label: '${Ne(e.label)}',`),e.delay>0&&a.push(`${i}delay: ${e.delay},`),e.minVisible!==240&&a.push(`${i}minVisible: ${e.minVisible},`),a.push(`${r}}`),a.join(`
`)}function Ie(e){return e===`modal`?[`<div className="modal-shell">`,`  <div className="modal-header" />`,`  <div className="modal-body">`,`    <div className="modal-line" />`,`    <div className="modal-line short" />`,`    <div className="modal-line" />`,`  </div>`,`</div>`].join(`
`):e===`table`?[`<div className="table-shell">`,`  <div className="table-head">`,`    <span>Status</span>`,`    <span>Customer</span>`,`    <span>Plan</span>`,`    <span>MRR</span>`,`  </div>`,`  <div className="table-row">...</div>`,`  <div className="table-row">...</div>`,`</div>`].join(`
`):e===`chart`?[`<div className="chart-panel">`,`  <div className="chart-bar" />`,`  <div className="chart-bar" />`,`  <div className="chart-bar" />`,`</div>`].join(`
`):e===`upload`?[`<div className="upload-zone">`,`  <div className="upload-icon" />`,`  <p>Drop files here</p>`,`</div>`].join(`
`):e===`page`?[`<section className="page-shell">`,`  <header className="page-topbar" />`,`  <div className="page-grid">...</div>`,`</section>`].join(`
`):[`<section className="dashboard-cards">`,`  <div className="card" />`,`  <div className="card" />`,`  <div className="card card-wide" />`,`</section>`].join(`
`)}function Le(e,t){return e.fullscreen?[`import { useLoadingController } from '@stackline/react-loading';`,``,`export function WorkspaceAction() {`,`  const loading = useLoadingController();`,``,`  async function showLoader() {`,`    const instance = await loading.show(document.body, ${Fe(e,6,!0)});`,`    window.setTimeout(() => {`,`      void instance.hide();`,`    }, 1200);`,`  }`,``,`  return <button onClick={showLoader}>Show fullscreen loader</button>;`,`}`].join(`
`):t===`default`&&!e.overlay?[`import { Loading } from '@stackline/react-loading';`,``,`export function LoadingPreview() {`,`  return (`,`    <Loading`,`      visible={isLoading}`,`      options=${Fe(e,6)}`,`      style={{ minHeight: 220 }}`,`    />`,`  );`,`}`].join(`
`):[`import { LoadingOverlay } from '@stackline/react-loading';`,``,`export function LoadingSurface() {`,`  return (`,`    <LoadingOverlay`,`      visible={isLoading}`,`      options=${Fe(e,6,!0)}`,`    >`,Ie(t).split(`
`).map(e=>`      ${e}`).join(`
`),`    </LoadingOverlay>`,`  );`,`}`].join(`
`)}function Re({fullscreen:e,options:t,surface:n,visible:r}){return n===`default`&&!t.overlay?(0,F.jsx)(`div`,{className:`playground-surface playground-surface--clean ${e?`is-fullscreen-simulated`:``}`,children:(0,F.jsx)(Ce,{visible:r,options:t,className:`playground-loader-host`,style:{minHeight:e?400:320,width:`100%`}})}):n===`table`?(0,F.jsxs)(Te,{visible:r,options:t,className:`playground-surface surface-table ${e?`is-fullscreen-simulated`:``}`,children:[(0,F.jsxs)(`div`,{className:`playground-table-head`,children:[(0,F.jsx)(`span`,{children:`Status`}),(0,F.jsx)(`span`,{children:`Customer`}),(0,F.jsx)(`span`,{children:`Plan`}),(0,F.jsx)(`span`,{children:`MRR`})]}),Array.from({length:4},(e,t)=>(0,F.jsxs)(`div`,{className:`playground-table-row`,children:[(0,F.jsx)(`span`,{children:(0,F.jsx)(`i`,{})}),(0,F.jsx)(`span`,{children:(0,F.jsx)(`i`,{})}),(0,F.jsx)(`span`,{children:(0,F.jsx)(`i`,{})}),(0,F.jsx)(`span`,{children:(0,F.jsx)(`i`,{})})]},`row-${t}`))]}):n===`page`?(0,F.jsxs)(Te,{visible:r,options:t,className:`playground-surface surface-page ${e?`is-fullscreen-simulated`:``}`,children:[(0,F.jsx)(`div`,{className:`page-topbar`}),(0,F.jsxs)(`div`,{className:`page-grid`,children:[(0,F.jsx)(`div`,{className:`page-tile`}),(0,F.jsx)(`div`,{className:`page-tile`}),(0,F.jsx)(`div`,{className:`page-tile`}),(0,F.jsx)(`div`,{className:`page-tile`})]})]}):n===`modal`?(0,F.jsx)(`div`,{className:`playground-surface surface-modal ${e?`is-fullscreen-simulated`:``}`,children:(0,F.jsxs)(`div`,{className:`modal-shell`,children:[(0,F.jsx)(`div`,{className:`modal-header`}),(0,F.jsxs)(Te,{visible:r,options:t,className:`modal-body`,children:[(0,F.jsx)(`div`,{className:`modal-line`}),(0,F.jsx)(`div`,{className:`modal-line short`}),(0,F.jsx)(`div`,{className:`modal-line`})]})]})}):n===`chart`?(0,F.jsxs)(Te,{visible:r,options:t,className:`playground-surface surface-chart ${e?`is-fullscreen-simulated`:``}`,children:[(0,F.jsx)(`div`,{className:`chart-bar`,style:{height:`28%`}}),(0,F.jsx)(`div`,{className:`chart-bar`,style:{height:`46%`}}),(0,F.jsx)(`div`,{className:`chart-bar`,style:{height:`60%`}}),(0,F.jsx)(`div`,{className:`chart-bar`,style:{height:`38%`}}),(0,F.jsx)(`div`,{className:`chart-bar`,style:{height:`72%`}}),(0,F.jsx)(`div`,{className:`chart-bar`,style:{height:`55%`}})]}):n===`upload`?(0,F.jsxs)(Te,{visible:r,options:t,className:`playground-surface surface-upload ${e?`is-fullscreen-simulated`:``}`,children:[(0,F.jsx)(`div`,{className:`upload-icon`}),(0,F.jsx)(`div`,{className:`upload-title`,children:`Drop files here`}),(0,F.jsx)(`div`,{className:`upload-caption`,children:`PNG, SVG, PDF up to 25 MB`})]}):(0,F.jsxs)(Te,{visible:r,options:t,className:`playground-surface surface-card-grid ${e?`is-fullscreen-simulated`:``}`,children:[(0,F.jsx)(`div`,{className:`surface-card-cell`}),(0,F.jsx)(`div`,{className:`surface-card-cell`}),(0,F.jsx)(`div`,{className:`surface-card-cell wide`})]})}function ze(){let[e,t]=(0,P.useState)(je),[n,r]=(0,P.useState)(`default`),[i,a]=(0,P.useState)(`Copy code`),[o,s]=(0,P.useState)(!0),c=Pe(e),l=Le(e,n);function u(e,n){t(t=>({...t,[e]:n}))}function d(){s(!1),window.setTimeout(()=>{s(!0)},40)}async function f(){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(l);else{let e=document.createElement(`textarea`);e.value=l,e.setAttribute(`readonly`,`true`),e.style.position=`absolute`,e.style.left=`-9999px`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e)}a(`Copied`)}catch{a(`Copy failed`)}window.setTimeout(()=>{a(`Copy code`)},1200)}let p=Ae.find(e=>e.id===n)?.description||``;return(0,F.jsxs)(`section`,{className:`demo-card playground-card`,id:`playground`,children:[(0,F.jsx)(`div`,{className:`demo-head`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:`Playground`}),(0,F.jsx)(`p`,{children:`Use the React wrapper against the same kind of interactive preview shell as the core docs.`})]})}),(0,F.jsxs)(`div`,{className:`playground-shell`,children:[(0,F.jsxs)(`form`,{className:`playground-controls`,children:[(0,F.jsxs)(`div`,{className:`field`,children:[(0,F.jsx)(`label`,{htmlFor:`playground-variant`,children:`Variant`}),(0,F.jsx)(`select`,{id:`playground-variant`,value:e.variant,onChange:e=>u(`variant`,e.target.value),children:ke.map(e=>(0,F.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,F.jsxs)(`div`,{className:`field`,children:[(0,F.jsxs)(`label`,{htmlFor:`playground-size`,children:[`Size `,(0,F.jsxs)(`span`,{children:[e.size,`px`]})]}),(0,F.jsx)(`input`,{id:`playground-size`,type:`range`,min:`18`,max:`96`,value:e.size,onChange:e=>u(`size`,Number(e.target.value))})]}),(0,F.jsxs)(`div`,{className:`field`,children:[(0,F.jsxs)(`label`,{htmlFor:`playground-speed`,children:[`Speed `,(0,F.jsxs)(`span`,{children:[e.speed,`ms`]})]}),(0,F.jsx)(`input`,{id:`playground-speed`,type:`range`,min:`300`,max:`2200`,step:`50`,value:e.speed,onChange:e=>u(`speed`,Number(e.target.value))})]}),(0,F.jsxs)(`div`,{className:`field two-up`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{htmlFor:`playground-color`,children:`Primary`}),(0,F.jsx)(`input`,{id:`playground-color`,type:`color`,value:e.color,onChange:e=>u(`color`,e.target.value)})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{htmlFor:`playground-secondary-color`,children:`Secondary`}),(0,F.jsx)(`input`,{id:`playground-secondary-color`,type:`color`,value:e.secondaryColor,onChange:e=>u(`secondaryColor`,e.target.value)})]})]}),(0,F.jsxs)(`div`,{className:`field`,children:[(0,F.jsx)(`label`,{htmlFor:`playground-label`,children:`Label`}),(0,F.jsx)(`input`,{id:`playground-label`,type:`text`,value:e.label,onChange:e=>u(`label`,e.target.value)})]}),(0,F.jsxs)(`div`,{className:`field two-up`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{htmlFor:`playground-delay`,children:`Delay`}),(0,F.jsx)(`input`,{id:`playground-delay`,type:`number`,min:`0`,step:`50`,value:e.delay,onChange:e=>u(`delay`,Number(e.target.value))})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{htmlFor:`playground-min-visible`,children:`Min visible`}),(0,F.jsx)(`input`,{id:`playground-min-visible`,type:`number`,min:`0`,step:`50`,value:e.minVisible,onChange:e=>u(`minVisible`,Number(e.target.value))})]})]}),(0,F.jsxs)(`div`,{className:`toggle-row`,children:[(0,F.jsxs)(`label`,{children:[(0,F.jsx)(`input`,{type:`checkbox`,checked:e.overlay,onChange:e=>u(`overlay`,e.target.checked)}),` Overlay`]}),(0,F.jsxs)(`label`,{children:[(0,F.jsx)(`input`,{type:`checkbox`,checked:e.fullscreen,onChange:e=>u(`fullscreen`,e.target.checked)}),` Fullscreen`]}),(0,F.jsxs)(`label`,{children:[(0,F.jsx)(`input`,{type:`checkbox`,checked:e.centered,onChange:e=>u(`centered`,e.target.checked)}),` Centered`]}),(0,F.jsxs)(`label`,{children:[(0,F.jsx)(`input`,{type:`checkbox`,checked:e.reducedMotion,onChange:e=>u(`reducedMotion`,e.target.checked)}),` Reduced motion`]})]}),(0,F.jsxs)(`div`,{className:`playground-actions`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:d,children:`Replay timing`}),(0,F.jsx)(`button`,{type:`button`,className:`ghost-button`,onClick:f,children:i})]})]}),(0,F.jsxs)(`div`,{className:`playground-preview`,children:[(0,F.jsx)(`div`,{className:`playground-preview-tabs`,role:`tablist`,"aria-label":`Preview surfaces`,children:Ae.map(e=>(0,F.jsx)(`button`,{type:`button`,role:`tab`,className:`playground-preview-tab ${n===e.id?`is-active`:``}`,"aria-selected":n===e.id,onClick:()=>r(e.id),children:e.label},e.id))}),(0,F.jsx)(`p`,{className:`playground-description`,children:p}),(0,F.jsx)(`div`,{className:`playground-stage ${e.reducedMotion?`is-reduced-motion`:``}`,children:(0,F.jsx)(Re,{fullscreen:e.fullscreen,options:c,surface:n,visible:o})}),(0,F.jsx)(`pre`,{className:`code-block code-preview`,children:l})]})]})]})}var Be=`npm install @stackline/react-loading`,Ve=`import { Loading } from '@stackline/react-loading';

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
}`,He=`import { LoadingOverlay } from '@stackline/react-loading';

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
}`,Ue=`import { useLoadingController } from '@stackline/react-loading';

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
}`;function We(e){return`${new Date().toLocaleTimeString(`en-US`,{hour12:!1})}  ${e}`}function Ge({code:e,compact:t=!1}){let[n,r]=(0,P.useState)(`Copy`);async function i(){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,`true`),t.style.position=`absolute`,t.style.left=`-9999px`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t)}r(`Copied`)}catch{r(`Copy failed`)}window.setTimeout(()=>{r(`Copy`)},1200)}return(0,F.jsxs)(`div`,{className:`code-block-shell ${t?`is-compact`:``}`,children:[(0,F.jsx)(`div`,{className:`code-block-head`,children:(0,F.jsx)(`button`,{type:`button`,className:`ghost-button copy-button`,onClick:i,children:n})}),(0,F.jsx)(`pre`,{className:`code-block ${t?`compact`:``}`,children:e})]})}function Ke({title:e,description:t,code:n,children:r}){return(0,F.jsxs)(`section`,{className:`demo-card`,children:[(0,F.jsx)(`div`,{className:`demo-head`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:e}),(0,F.jsx)(`p`,{children:t})]})}),n?(0,F.jsx)(Ge,{code:n}):null,r]})}function qe({reactLine:e}){let t=De(),[n,r]=(0,P.useState)([We(`React ${e} docs ready.`)]),[i,a]=(0,P.useState)(!0),[o,s]=(0,P.useState)(!1);function c(e){r(t=>[We(e),...t].slice(0,16))}async function l(){c(`Showing fullscreen loader from useLoadingController.`);let e=await t.show(document.body,{fullscreen:!0,overlay:!0,centered:!0,variant:`galaxy`,color:`#38bdf8`,secondaryColor:`#bfdbfe`,minVisible:500,label:`Loading workspace`});window.setTimeout(()=>{e.hide().then(()=>{c(`Fullscreen loader hidden.`)})},1300)}function u(){a(!1),window.setTimeout(()=>{a(!0),c(`Dashboard overlay replayed.`)},40)}function d(){s(!0),c(`Button loading state activated.`),window.setTimeout(()=>{s(!1),c(`Button loading state cleared.`)},1200)}return(0,F.jsxs)(`div`,{className:`app-shell`,children:[(0,F.jsxs)(`header`,{className:`hero-grid`,children:[(0,F.jsxs)(`section`,{className:`hero-card hero-main`,children:[(0,F.jsxs)(`span`,{className:`badge`,children:[`React `,e,` · Loading wrapper`]}),(0,F.jsx)(`h1`,{children:`@stackline/react-loading`}),(0,F.jsx)(`p`,{children:`Maintained React bindings for the Stackline loading toolkit. Keep the loading engine framework-agnostic, then add React-native ergonomics for declarative components, container overlays, and fullscreen programmatic states.`}),(0,F.jsxs)(`div`,{className:`hero-actions`,children:[(0,F.jsx)(`a`,{className:`button primary`,href:`#playground`,children:`Open playground`}),(0,F.jsx)(`a`,{className:`button secondary`,href:`https://github.com/alexandroit/react-loading#readme`,rel:`noreferrer`,target:`_blank`,children:`README`})]}),(0,F.jsxs)(`div`,{className:`hero-notes`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`strong`,{children:`Declarative`}),` Use a plain React component when the loader itself is what you want to render.`]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`strong`,{children:`Overlay-ready`}),` Wrap a card, table, modal body, chart shell, or upload zone without rewriting the surface.`]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`strong`,{children:`Programmatic`}),` Use a hook for fullscreen or route-level loading where document-level control is useful.`]})]})]}),(0,F.jsxs)(`section`,{className:`hero-card hero-setup`,children:[(0,F.jsx)(`h2`,{children:`Setup in 3 steps`}),(0,F.jsxs)(`div`,{className:`step`,children:[(0,F.jsx)(`span`,{children:`1`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`strong`,{children:`Install the wrapper`}),(0,F.jsx)(Ge,{code:Be,compact:!0})]})]}),(0,F.jsxs)(`div`,{className:`step`,children:[(0,F.jsx)(`span`,{children:`2`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`strong`,{children:`Render a component or wrap a surface`}),(0,F.jsx)(Ge,{code:`<Loading visible options={{ variant: 'orbit' }} />`,compact:!0})]})]}),(0,F.jsxs)(`div`,{className:`step`,children:[(0,F.jsx)(`span`,{children:`3`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`strong`,{children:`Use a hook for fullscreen workflows`}),(0,F.jsx)(Ge,{code:`const loading = useLoadingController();`,compact:!0})]})]})]})]}),(0,F.jsx)(`div`,{className:`playground-row`,children:(0,F.jsx)(ze,{})}),(0,F.jsxs)(`main`,{className:`content-grid`,id:`examples`,children:[(0,F.jsxs)(`section`,{className:`examples-column`,children:[(0,F.jsx)(Ke,{title:`Basic component`,description:`Use the React component when the loading element itself is the thing being rendered in the tree.`,code:Ve,children:(0,F.jsx)(`div`,{className:`surface-frame`,children:(0,F.jsx)(Ce,{visible:!0,options:{variant:`orbit`,size:56,centered:!0,color:`#2563eb`,secondaryColor:`#bfdbfe`,label:`Loading dashboard`},className:`component-stage`,style:{minHeight:220}})})}),(0,F.jsxs)(Ke,{title:`Dashboard card overlay`,description:`Wrap an existing card surface and let the loader overlay the active region while the rest of the UI stays stable.`,code:He,children:[(0,F.jsx)(`div`,{className:`inline-actions`,children:(0,F.jsx)(`button`,{type:`button`,className:`button secondary`,onClick:u,children:`Replay card loader`})}),(0,F.jsxs)(Te,{visible:i,options:{overlay:!0,centered:!0,variant:`glass-spinner`,color:`#2563eb`,secondaryColor:`#dbeafe`,label:`Loading revenue card`,minVisible:400},className:`card-shell`,children:[(0,F.jsx)(`div`,{className:`card-metric`,children:`$128,400`}),(0,F.jsx)(`div`,{className:`card-caption`,children:`Quarterly expansion pipeline`}),(0,F.jsxs)(`div`,{className:`card-bars`,children:[(0,F.jsx)(`span`,{style:{height:`46%`}}),(0,F.jsx)(`span`,{style:{height:`68%`}}),(0,F.jsx)(`span`,{style:{height:`54%`}}),(0,F.jsx)(`span`,{style:{height:`79%`}})]})]})]}),(0,F.jsx)(Ke,{title:`Button and submit states`,description:`Use the same overlay wrapper around a button group when a request should stay anchored to the action that triggered it.`,children:(0,F.jsx)(`div`,{className:`button-surface`,children:(0,F.jsx)(Te,{visible:o,options:{overlay:!0,centered:!0,variant:`liquid-pill`,size:42,label:``},className:`button-shell`,children:(0,F.jsx)(`button`,{type:`button`,className:`cta-button`,onClick:d,children:`Sync invoice`})})})}),(0,F.jsx)(Ke,{title:`Fullscreen and programmatic hook`,description:`Use the hook when the loading state is tied to navigation, bootstrapping, or a larger workspace transition.`,code:Ue,children:(0,F.jsx)(`div`,{className:`inline-actions`,children:(0,F.jsx)(`button`,{type:`button`,className:`button primary`,onClick:l,children:`Show fullscreen loader`})})})]}),(0,F.jsxs)(`aside`,{className:`sidebar-column`,children:[(0,F.jsxs)(`section`,{className:`demo-card side-card`,children:[(0,F.jsx)(`div`,{className:`demo-head`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:`Wrapper surface`}),(0,F.jsx)(`p`,{children:`The public API stays intentionally small so the real behavior continues to live in the core loading package.`})]})}),(0,F.jsxs)(`ul`,{className:`feature-list`,children:[(0,F.jsxs)(`li`,{children:[(0,F.jsx)(`code`,{children:`<Loading />`}),` for component-first loading states.`]}),(0,F.jsxs)(`li`,{children:[(0,F.jsx)(`code`,{children:`<LoadingOverlay />`}),` for cards, tables, modals, charts, and buttons.`]}),(0,F.jsxs)(`li`,{children:[(0,F.jsx)(`code`,{children:`useLoadingController()`}),` for fullscreen and programmatic flows.`]}),(0,F.jsxs)(`li`,{children:[`Core exports like `,(0,F.jsx)(`code`,{children:`loaderVariants`}),`, `,(0,F.jsx)(`code`,{children:`createLoader`}),`, and theme helpers stay available.`]})]})]}),(0,F.jsxs)(`section`,{className:`demo-card side-card`,children:[(0,F.jsx)(`div`,{className:`demo-head`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:`Release lines`}),(0,F.jsx)(`p`,{children:`Each maintained runtime line gets its own docs build and npm release.`})]})}),(0,F.jsxs)(`div`,{className:`release-links`,children:[(0,F.jsx)(`a`,{href:`../react-17/`,children:`React 17`}),(0,F.jsx)(`a`,{href:`../react-18/`,children:`React 18`}),(0,F.jsx)(`a`,{href:`../react-19/`,children:`React 19`})]})]}),(0,F.jsxs)(`section`,{className:`demo-card side-card`,children:[(0,F.jsx)(`div`,{className:`demo-head`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:`Event log`}),(0,F.jsx)(`p`,{children:`Small runtime notes from the docs interactions while you test the wrapper.`})]})}),(0,F.jsx)(`div`,{className:`event-log`,children:n.map(e=>(0,F.jsx)(`div`,{className:`log-line`,children:e},e))})]})]})]})]})}Oe.render((0,F.jsx)(qe,{reactLine:`17.0.2`}),document.getElementById(`root`));