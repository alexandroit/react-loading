var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r,i,a,o){return r=o.ref,{$$typeof:t,type:e,key:n,ref:r===void 0?null:r,props:o}}function ne(e,t){return te(e.type,t,void 0,void 0,void 0,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function C(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function w(){}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+C(e,0):a,x(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(x(e))for(var u=0;u<e.length;u++)a=e[u],s=l+C(a,u),c+=se(a,r,i,s,o);else if(u=p(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+C(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function T(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ue(){}e.Children={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.act=function(){throw Error(`act(...) is not supported in production builds of React.`)},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=h({},e.props),i=e.key,a=void 0;if(t!=null)for(o in t.ref!==void 0&&(a=void 0),t.key!==void 0&&(i=``+t.key),t)!ee.call(t,o)||o===`key`||o===`__self`||o===`__source`||o===`ref`&&t.ref===void 0||(r[o]=t[o]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];r.children=s}return te(e.type,i,void 0,void 0,a,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,void 0,void 0,null,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ue,le)}catch(e){le(e)}finally{S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.0.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,w();else{var t=n(l);t!==null&&oe(b,t.startTime-e)}}var x=!1,S=-1,ee=5,te=-1;function ne(){return!(e.unstable_now()-te<ee)}function re(){if(x){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,_(S),S=-1),p=!0;var a=f;try{b:{for(y(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,y(t),i=!0;break b}d===n(c)&&r(c),y(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(b,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():x=!1}}}var ie;if(typeof v==`function`)ie=function(){v(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,C=ae.port2;ae.port1.onmessage=re,ie=function(){C.postMessage(null)}}else ie=function(){g(re,0)};function w(){x||(x=!0,ie())}function oe(t,n){S=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,w())},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(S),S=-1):h=!0,oe(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,w())),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.0.0`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var o=Symbol.for(`react.element`),s=Symbol.for(`react.transitional.element`),c=Symbol.for(`react.portal`),l=Symbol.for(`react.fragment`),d=Symbol.for(`react.strict_mode`),p=Symbol.for(`react.profiler`),h=Symbol.for(`react.provider`),g=Symbol.for(`react.consumer`),_=Symbol.for(`react.context`),v=Symbol.for(`react.forward_ref`),y=Symbol.for(`react.suspense`),b=Symbol.for(`react.suspense_list`),x=Symbol.for(`react.memo`),S=Symbol.for(`react.lazy`),ee=Symbol.for(`react.offscreen`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case l:return`Fragment`;case c:return`Portal`;case p:return`Profiler`;case d:return`StrictMode`;case y:return`Suspense`;case b:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case _:return(e.displayName||`Context`)+`.Provider`;case g:return(e._context.displayName||`Context`)+`.Consumer`;case v:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case x:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case S:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var C=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=Object.assign,oe,se;function T(e){if(oe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);oe=t&&t[1]||``,se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+oe+e+se}var ce=!1;function le(e,t){if(!e||ce)return``;ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?T(n):``}function ue(e){switch(e.tag){case 26:case 27:case 5:return T(e.type);case 16:return T(`Lazy`);case 13:return T(`Suspense`);case 19:return T(`SuspenseList`);case 0:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return``}}function de(e){try{var t=``;do t+=ue(e),e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function fe(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function me(e){if(fe(e)!==e)throw Error(i(188))}function he(e){var t=e.alternate;if(!t){if(t=fe(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return me(a),e;if(o===r)return me(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,r=o;break}if(c===r){s=!0,r=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=a;break}if(c===r){s=!0,r=o,n=a;break}c=c.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function ge(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ge(e),t!==null)return t;e=e.sibling}return null}var _e=Array.isArray,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve={pending:!1,data:null,method:null,action:null},ye=[],be=-1;function xe(e){return{current:e}}function D(e){0>be||(e.current=ye[be],ye[be]=null,be--)}function O(e,t){be++,ye[be]=e.current,e.current=t}var Se=xe(null),Ce=xe(null),we=xe(null),Te=xe(null);function k(e,t){switch(O(we,t),O(Ce,e),O(Se,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?bd(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=bd(e),t=xd(e,t);else switch(t){case`svg`:t=1;break;case`math`:t=2;break;default:t=0}}D(Se),O(Se,t)}function Ee(){D(Se),D(Ce),D(we)}function De(e){e.memoizedState!==null&&O(Te,e);var t=Se.current,n=xd(t,e.type);t!==n&&(O(Ce,e),O(Se,n))}function A(e){Ce.current===e&&(D(Se),D(Ce)),Te.current===e&&(D(Te),Cf._currentValue=ve)}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,e,void 0,(e.current.flags&128)==128)}catch{}}function Ge(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=128,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=e.warmLanes;e=e.finishedLanes!==0;var s=n&134217727;return s===0?(s=n&~i,s===0?a===0?e||(o=n&~o,o!==0&&(r=Qe(o))):r=Qe(a):r=Qe(s)):(n=s&~i,n===0?(a&=s,a===0?e||(o=s&~o,o!==0&&(r=Qe(o))):r=Qe(a)):r=Qe(n)),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===32&&o&4194176)?t:r}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Xe;return Xe<<=1,!(Xe&4194176)&&(Xe=128),e}function rt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194218}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=E.p;return e===0?(e=window.event,e===void 0?32:Rf(e.type)):e}function dt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fd(e);e!==null;){if(n=e[pt])return n;e=Fd(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function j(e){e[bt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return Oe.call(Nt,e)?!0:Oe.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e){var t=zt(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){e._valueTracker||=Bt(e)}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null))return;n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(_e(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(au(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!1;if(At)try{var gn={};Object.defineProperty(gn,`passive`,{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=w({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=w({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(w({},Mn,{dataTransfer:0})),Fn=wn(w({},Dn,{relatedTarget:0})),In=wn(w({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=wn(w({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=wn(w({},Tn,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=wn(w({},Dn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=wn(w({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=wn(w({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=wn(w({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=wn(w({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=wn(w({},Tn,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=At&&`CompositionEvent`in window,Qn=null;At&&`documentMode`in document&&(Qn=document.documentMode);var $n=At&&`TextEvent`in window&&!Qn,er=At&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=bn(),yn=vn=_n=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=od(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){$u(e,0)}function mr(e){if(Ht(wt(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(At){var _r;if(At){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,cn(e)),pn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Pr(e,t){var n=Mr(t);t=e.focusedElem;var r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&jr(t.ownerDocument.documentElement,t)){if(r!==null&&Nr(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),`selectionStart`in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!n.extend&&a>r&&(i=r,r=a,a=i),i=Ar(t,a);var o=Ar(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),a>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus==`function`&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fr=At&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Or(Rr,r)||(Rr=r,r=od(Lr,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};At&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel`.split(` `);function ti(e,t){$r.set(e,t),Ot(t,[e])}var ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;i&&t!==null&&e.tag===3&&(a=e.stateNode,i=31-Ke(n),a=a.hiddenUpdates,e=a[i],e===null?a[i]=[t]:e.push(t),t.lane=n|536870912)}function ui(e){if(50<Yl)throw Yl=0,Xl=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={},fi=new WeakMap;function pi(e,t){if(typeof e==`object`&&e){var n=fi.get(e);return n===void 0?(t={value:e,source:t,stack:de(t)},fi.set(e,t),t):n}return{value:e,source:t,stack:de(t)}}var mi=[],hi=0,gi=null,_i=0,vi=[],yi=0,bi=null,xi=1,Si=``;function Ci(e,t){mi[hi++]=_i,mi[hi++]=gi,gi=e,_i=t}function wi(e,t,n){vi[yi++]=xi,vi[yi++]=Si,vi[yi++]=bi,bi=e;var r=xi;e=Si;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xi=1<<32-Ke(t)+i|n<<i|r,Si=a+e}else xi=1<<a|n<<i|r,Si=e}function Ti(e){e.return!==null&&(Ci(e,1),wi(e,1,0))}function Ei(e){for(;e===gi;)gi=mi[--hi],mi[hi]=null,_i=mi[--hi],mi[hi]=null;for(;e===bi;)bi=vi[--yi],vi[yi]=null,Si=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null}var Di=null,Oi=null,M=!1,ki=null,Ai=!1,ji=Error(i(519));function Mi(e){throw Li(pi(Error(i(418,``)),e)),ji}function Ni(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<Zu.length;n++)Q(Zu[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Vt(t);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children),Vt(t)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||fd(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=pd),t=!0):t=!1,t||Mi(e)}function Pi(e){for(Di=e.return;Di;)switch(Di.tag){case 3:case 27:Ai=!0;return;case 5:case 13:Ai=!1;return;default:Di=Di.return}}function Fi(e){if(e!==Di)return!1;if(!M)return Pi(e),M=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Sd(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&Oi&&Mi(e),Pi(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n===`/$`){if(t===0){Oi=Pd(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++;e=e.nextSibling}Oi=null}}else Oi=Di?Pd(e.stateNode.nextSibling):null;return!0}function Ii(){Oi=Di=null,M=!1}function Li(e){ki===null?ki=[e]:ki.push(e)}var Ri=Error(i(460)),zi=Error(i(474)),Bi={then:function(){}};function Vi(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Hi(){}function Ui(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Hi,Hi),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,e===Ri?Error(i(483)):e;default:if(typeof t.status==`string`)t.then(Hi,Hi);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,e===Ri?Error(i(483)):e}throw Wi=t,Ri}}var Wi=null;function Gi(){if(Wi===null)throw Error(i(459));var e=Wi;return Wi=null,e}var Ki=null,qi=0;function Ji(e){var t=qi;return qi+=1,Ki===null&&(Ki=[]),Ui(Ki,e,t)}function Yi(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Xi(e,t){throw t.$$typeof===o?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Zi(e){var t=e._init;return t(e._payload)}function Qi(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=dl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=33554434,n):(r=r.index,r<n?(t.flags|=33554434,n):r)):(t.flags|=1048576,n)}function u(t){return e&&t.alternate===null&&(t.flags|=33554434),t}function d(e,t,n,r){return t===null||t.tag!==6?(t=gl(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n,r){var i=n.type;return i===l?m(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===S&&Zi(i)===t.type)?(t=a(t,n.props),Yi(t,n),t.return=e,t):(t=pl(n.type,n.key,n.props,null,e.mode,r),Yi(t,n),t.return=e,t)}function p(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=_l(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function m(e,t,n,r,i){return t===null||t.tag!==7?(t=ml(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function h(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=gl(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case s:return n=pl(t.type,t.key,t.props,null,e.mode,n),Yi(n,t),n.return=e,n;case c:return t=_l(t,e.mode,n),t.return=e,t;case S:var r=t._init;return t=r(t._payload),h(e,t,n)}if(_e(t)||re(t))return t=ml(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return h(e,Ji(t),n);if(t.$$typeof===_)return h(e,tc(e,t),n);Xi(e,t)}return null}function g(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?d(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case s:return n.key===i?f(e,t,n,r):null;case c:return n.key===i?p(e,t,n,r):null;case S:return i=n._init,n=i(n._payload),g(e,t,n,r)}if(_e(n)||re(n))return i===null?m(e,t,n,r,null):null;if(typeof n.then==`function`)return g(e,t,Ji(n),r);if(n.$$typeof===_)return g(e,t,tc(e,n),r);Xi(e,n)}return null}function v(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,d(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case s:return e=e.get(r.key===null?n:r.key)||null,f(t,e,r,i);case c:return e=e.get(r.key===null?n:r.key)||null,p(t,e,r,i);case S:var a=r._init;return r=a(r._payload),v(e,t,n,r,i)}if(_e(r)||re(r))return e=e.get(n)||null,m(t,e,r,i,null);if(typeof r.then==`function`)return v(e,t,n,Ji(r),i);if(r.$$typeof===_)return v(e,t,n,tc(t,r),i);Xi(t,r)}return null}function y(i,a,s,c){for(var l=null,u=null,d=a,f=a=0,p=null;d!==null&&f<s.length;f++){d.index>f?(p=d,d=null):p=d.sibling;var m=g(i,d,s[f],c);if(m===null){d===null&&(d=p);break}e&&d&&m.alternate===null&&t(i,d),a=o(m,a,f),u===null?l=m:u.sibling=m,u=m,d=p}if(f===s.length)return n(i,d),M&&Ci(i,f),l;if(d===null){for(;f<s.length;f++)d=h(i,s[f],c),d!==null&&(a=o(d,a,f),u===null?l=d:u.sibling=d,u=d);return M&&Ci(i,f),l}for(d=r(d);f<s.length;f++)p=v(d,i,f,s[f],c),p!==null&&(e&&p.alternate!==null&&d.delete(p.key===null?f:p.key),a=o(p,a,f),u===null?l=p:u.sibling=p,u=p);return e&&d.forEach(function(e){return t(i,e)}),M&&Ci(i,f),l}function b(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,f=s,p=s=0,m=null,_=c.next();f!==null&&!_.done;p++,_=c.next()){f.index>p?(m=f,f=null):m=f.sibling;var y=g(a,f,_.value,l);if(y===null){f===null&&(f=m);break}e&&f&&y.alternate===null&&t(a,f),s=o(y,s,p),d===null?u=y:d.sibling=y,d=y,f=m}if(_.done)return n(a,f),M&&Ci(a,p),u;if(f===null){for(;!_.done;p++,_=c.next())_=h(a,_.value,l),_!==null&&(s=o(_,s,p),d===null?u=_:d.sibling=_,d=_);return M&&Ci(a,p),u}for(f=r(f);!_.done;p++,_=c.next())_=v(f,a,p,_.value,l),_!==null&&(e&&_.alternate!==null&&f.delete(_.key===null?p:_.key),s=o(_,s,p),d===null?u=_:d.sibling=_,d=_);return e&&f.forEach(function(e){return t(a,e)}),M&&Ci(a,p),u}function x(e,r,o,d){if(typeof o==`object`&&o&&o.type===l&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case s:a:{for(var f=o.key;r!==null;){if(r.key===f){if(f=o.type,f===l){if(r.tag===7){n(e,r.sibling),d=a(r,o.props.children),d.return=e,e=d;break a}}else if(r.elementType===f||typeof f==`object`&&f&&f.$$typeof===S&&Zi(f)===r.type){n(e,r.sibling),d=a(r,o.props),Yi(d,o),d.return=e,e=d;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===l?(d=ml(o.props.children,e.mode,d,o.key),d.return=e,e=d):(d=pl(o.type,o.key,o.props,null,e.mode,d),Yi(d,o),d.return=e,e=d)}return u(e);case c:a:{for(f=o.key;r!==null;){if(r.key===f)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),d=a(r,o.children||[]),d.return=e,e=d;break a}else{n(e,r);break}else t(e,r);r=r.sibling}d=_l(o,e.mode,d),d.return=e,e=d}return u(e);case S:return f=o._init,o=f(o._payload),x(e,r,o,d)}if(_e(o))return y(e,r,o,d);if(re(o)){if(f=re(o),typeof f!=`function`)throw Error(i(150));return o=f.call(o),b(e,r,o,d)}if(typeof o.then==`function`)return x(e,r,Ji(o),d);if(o.$$typeof===_)return x(e,r,tc(e,o),d);Xi(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),d=a(r,o),d.return=e,e=d):(n(e,r),d=gl(o,e.mode,d),d.return=e,e=d),u(e)):n(e,r)}return function(e,t,n,r){try{qi=0;var i=x(e,t,n,r);return Ki=null,i}catch(t){if(t===Ri)throw t;var a=ll(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var $i=Qi(!0),ea=Qi(!1),ta=xe(null),na=xe(0);function ra(e,t){e=jl,O(na,e),O(ta,t),jl=e|t.baseLanes}function ia(){O(na,jl),O(ta,ta.current)}function aa(){jl=na.current,D(ta),D(na)}var oa=xe(null),sa=null;function ca(e){var t=e.alternate;O(N,N.current&1),O(oa,e),sa===null&&(t===null||ta.current!==null||t.memoizedState!==null)&&(sa=e)}function la(e){if(e.tag===22){if(O(N,N.current),O(oa,e),sa===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(sa=e)}}else ua(e)}function ua(){O(N,N.current),O(oa,oa.current)}function da(e){D(oa),sa===e&&(sa=null),D(N)}var N=xe(0);function fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ma=t.unstable_scheduleCallback,ha=t.unstable_NormalPriority,P={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ga(){return{controller:new pa,data:new Map,refCount:0}}function _a(e){e.refCount--,e.refCount===0&&ma(ha,function(){e.controller.abort()})}var va=null,ya=0,ba=0,xa=null;function Sa(e,t){if(va===null){var n=va=[];ya=0,ba=Gu(),xa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ya++,t.then(Ca,Ca),t}function Ca(){if(--ya===0&&va!==null){xa!==null&&(xa.status=`fulfilled`);var e=va;va=null,ba=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ta=C.S;C.S=function(e,t){typeof t==`object`&&t&&typeof t.then==`function`&&Sa(e,t),Ta!==null&&Ta(e,t)};var Ea=xe(null);function Da(){var e=Ea.current;return e===null?K.pooledCache:e}function Oa(e,t){t===null?O(Ea,Ea.current):O(Ea,t.pool)}function ka(){var e=Da();return e===null?null:{parent:P._currentValue,pool:e}}var Aa=0,F=null,I=null,L=null,ja=!1,Ma=!1,Na=!1,Pa=0,Fa=0,Ia=null,La=0;function R(){throw Error(i(321))}function Ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function za(e,t,n,r,i,a){return Aa=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?es:ts,Na=!1,a=n(r,i),Na=!1,Ma&&(a=Va(t,n,r,i)),Ba(e),a}function Ba(e){C.H=$o;var t=I!==null&&I.next!==null;if(Aa=0,L=I=F=null,ja=!1,Fa=0,Ia=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&Qs(e)&&(B=!0))}function Va(e,t,n,r){F=e;var a=0;do{if(Ma&&(Ia=null),Fa=0,Ma=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}C.H=ns,o=t(n,r)}while(Ma);return o}function Ha(){var e=C.H,t=e.useState()[0];return t=typeof t.then==`function`?Ja(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function Ua(){var e=Pa!==0;return Pa=0,e}function Wa(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ga(e){if(ja){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ja=!1}Aa=0,L=I=F=null,Ma=!1,Fa=Pa=0,Ia=null}function Ka(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}var qa=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ja(e){var t=Fa;return Fa+=1,Ia===null&&(Ia=[]),e=Ui(Ia,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?es:ts),e}function Ya(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ja(e);if(e.$$typeof===_)return ec(e)}throw Error(i(438,String(e)))}function Xa(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=qa(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Za(e,t){return typeof t==`function`?t(e):t}function Qa(e){return $a(z(),I,e)}function $a(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Aa&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ba&&(d=!0);else if((Aa&p)===p){u=u.next,p===ba&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Ml|=p;f=u.action,Na&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Ml|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(B=!0,d&&(n=xa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function eo(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function to(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,Do(io.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,So(9,ro.bind(null,r,a,n,t),{destroy:void 0},null),K===null)throw Error(i(349));o||Aa&60||no(r,t,n)}return n}function no(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=qa(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ro(e,t,n,r){t.value=n,t.getSnapshot=r,ao(t)&&oo(e)}function io(e,t,n){return n(function(){ao(t)&&oo(e)})}function ao(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function oo(e){var t=ci(e,2);t!==null&&$l(t,e,2)}function so(e){var t=Ka();if(typeof e==`function`){var n=e;if(e=n(),Na){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:e},t}function co(e,t,n,r){return e.baseState=n,$a(e,I,typeof r==`function`?r:Za)}function lo(e,t,n,r,a){if(Xo(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};C.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,uo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function uo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=C.T,o={};C.T=o;try{var s=n(i,r),c=C.S;c!==null&&c(o,s),fo(e,t,s)}catch(n){mo(e,t,n)}finally{C.T=a}}else try{a=n(i,r),fo(e,t,a)}catch(n){mo(e,t,n)}}function fo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){po(e,t,n)},function(n){return mo(e,t,n)}):po(e,t,n)}function po(e,t,n){t.status=`fulfilled`,t.value=n,ho(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,uo(e,n)))}function mo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ho(t),t=t.next;while(t!==r)}e.action=null}function ho(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function go(e,t){return t}function _o(e,t){if(M){var n=K.formState;if(n!==null){a:{var r=F;if(M){if(Oi){b:{for(var i=Oi,a=Ai;i.nodeType!==8;){if(!a){i=null;break b}if(i=Pd(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Oi=Pd(i.nextSibling),r=i.data===`F!`;break a}}Mi(r)}r=!1}r&&(t=n[0])}}return n=Ka(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},n.queue=r,n=qo.bind(null,F,r),r.dispatch=n,r=so(!1),a=Yo.bind(null,F,!1,r.queue),r=Ka(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=lo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function vo(e){return yo(z(),I,e)}function yo(e,t,n){t=$a(e,t,go)[0],e=Qa(Za)[0],t=typeof t==`object`&&t&&typeof t.then==`function`?Ja(t):t;var r=z(),i=r.queue,a=i.dispatch;return n!==r.memoizedState&&(F.flags|=2048,So(9,bo.bind(null,i,n),{destroy:void 0},null)),[t,a,e]}function bo(e,t){e.action=t}function xo(e){var t=z(),n=I;if(n!==null)return yo(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function So(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},t=F.updateQueue,t===null&&(t=qa(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Co(){return z().memoizedState}function wo(e,t,n,r){var i=Ka();F.flags|=e,i.memoizedState=So(1|t,n,{destroy:void 0},r===void 0?null:r)}function To(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Ra(r,I.memoizedState.deps)?i.memoizedState=So(t,n,a,r):(F.flags|=e,i.memoizedState=So(1|t,n,a,r))}function Eo(e,t){wo(8390656,8,e,t)}function Do(e,t){To(2048,8,e,t)}function Oo(e,t){return To(4,2,e,t)}function ko(e,t){return To(4,4,e,t)}function Ao(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jo(e,t,n){n=n==null?null:n.concat([e]),To(4,4,Ao.bind(null,t,e),n)}function Mo(){}function No(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Po(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Ra(t,r[1]))return r[0];if(r=e(),Na){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Fo(e,t,n){return n===void 0||Aa&1073741824?e.memoizedState=t:(e.memoizedState=n,e=Ql(),F.lanes|=e,Ml|=e,n)}function Io(e,t,n,r){return Dr(n,t)?n:ta.current===null?Aa&42?(e=Ql(),F.lanes|=e,Ml|=e,t):(B=!0,e.memoizedState=n):(e=Fo(e,n,r),Dr(e,t)||(B=!0),e)}function Lo(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=C.T,s={};C.T=s,Yo(e,!1,t,n);try{var c=i(),l=C.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Jo(e,t,wa(c,r),Zl(e)):Jo(e,t,r,Zl(e))}catch(n){Jo(e,t,{then:function(){},status:`rejected`,reason:n},Zl())}finally{E.p=a,C.T=o}}function Ro(){}function zo(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Bo(e).queue;Lo(e,a,t,ve,n===null?Ro:function(){return Vo(e),n(r)})}function Bo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ve,baseState:ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:ve},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vo(e){var t=Bo(e).next.queue;Jo(e,t,{},Zl())}function Ho(){return ec(Cf)}function Uo(){return z().memoizedState}function Wo(){return z().memoizedState}function Go(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Zl();e=oc(n);var r=sc(t,e,n);r!==null&&($l(r,t,n),cc(r,t,n)),t={cache:ga()},e.payload=t;return}t=t.return}}function Ko(e,t,n){var r=Zl();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Xo(e)?Zo(t,n):(n=si(e,t,n,r),n!==null&&($l(n,e,r),Qo(n,t,r)))}function qo(e,t,n){Jo(e,t,n,Zl())}function Jo(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xo(e))Zo(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),K===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return $l(n,e,r),Qo(n,t,r),!0}return!1}function Yo(e,t,n,r){if(r={lane:2,revertLane:Gu(),action:r,hasEagerState:!1,eagerState:null,next:null},Xo(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&$l(t,e,2)}function Xo(e){var t=e.alternate;return e===F||t!==null&&t===F}function Zo(e,t){Ma=ja=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if(n&4194176){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var $o={readContext:ec,use:Ya,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R};$o.useCacheRefresh=R,$o.useMemoCache=R,$o.useHostTransitionStatus=R,$o.useFormState=R,$o.useActionState=R,$o.useOptimistic=R;var es={readContext:ec,use:Ya,useCallback:function(e,t){return Ka().memoizedState=[e,t===void 0?null:t],e},useContext:ec,useEffect:Eo,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),wo(4194308,4,Ao.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){wo(4,2,e,t)},useMemo:function(e,t){var n=Ka();t=t===void 0?null:t;var r=e();if(Na){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ka();if(n!==void 0){var i=n(t);if(Na){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ko.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Ka();return e={current:e},t.memoizedState=e},useState:function(e){e=so(e);var t=e.queue,n=qo.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Mo,useDeferredValue:function(e,t){return Fo(Ka(),e,t)},useTransition:function(){var e=so(!1);return e=Lo.bind(null,F,e.queue,!0,!1),Ka().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Ka();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&60||no(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Eo(io.bind(null,r,o,e),[e]),r.flags|=2048,So(9,ro.bind(null,r,o,n,t),{destroy:void 0},null),n},useId:function(){var e=Ka(),t=K.identifierPrefix;if(M){var n=Si,r=xi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Pa++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=La++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},useCacheRefresh:function(){return Ka().memoizedState=Go.bind(null,F)}};es.useMemoCache=Xa,es.useHostTransitionStatus=Ho,es.useFormState=_o,es.useActionState=_o,es.useOptimistic=function(e){var t=Ka();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Yo.bind(null,F,!0,n),n.dispatch=t,[e,t]};var ts={readContext:ec,use:Ya,useCallback:No,useContext:ec,useEffect:Do,useImperativeHandle:jo,useInsertionEffect:Oo,useLayoutEffect:ko,useMemo:Po,useReducer:Qa,useRef:Co,useState:function(){return Qa(Za)},useDebugValue:Mo,useDeferredValue:function(e,t){return Io(z(),I.memoizedState,e,t)},useTransition:function(){var e=Qa(Za)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Ja(e),t]},useSyncExternalStore:to,useId:Uo};ts.useCacheRefresh=Wo,ts.useMemoCache=Xa,ts.useHostTransitionStatus=Ho,ts.useFormState=vo,ts.useActionState=vo,ts.useOptimistic=function(e,t){return co(z(),I,e,t)};var ns={readContext:ec,use:Ya,useCallback:No,useContext:ec,useEffect:Do,useImperativeHandle:jo,useInsertionEffect:Oo,useLayoutEffect:ko,useMemo:Po,useReducer:eo,useRef:Co,useState:function(){return eo(Za)},useDebugValue:Mo,useDeferredValue:function(e,t){var n=z();return I===null?Fo(n,e,t):Io(n,I.memoizedState,e,t)},useTransition:function(){var e=eo(Za)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Ja(e),t]},useSyncExternalStore:to,useId:Uo};ns.useCacheRefresh=Wo,ns.useMemoCache=Xa,ns.useHostTransitionStatus=Ho,ns.useFormState=xo,ns.useActionState=xo,ns.useOptimistic=function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):co(n,I,e,t)};function rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return(e=e._reactInternals)?fe(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Zl(),i=oc(r);i.payload=t,n!=null&&(i.callback=n),t=sc(e,i,r),t!==null&&($l(t,e,r),cc(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Zl(),i=oc(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=sc(e,i,r),t!==null&&($l(t,e,r),cc(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zl(),r=oc(n);r.tag=2,t!=null&&(r.callback=t),t=sc(e,r,n),t!==null&&($l(t,e,n),cc(t,e,n))}};function as(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function os(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ss(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=w({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}var cs=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ls(e){cs(e)}function us(e){console.error(e)}function ds(e){cs(e)}function fs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ps(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ms(e,t,n){return n=oc(n),n.tag=3,n.payload={element:null},n.callback=function(){fs(e,t)},n}function hs(e){return e=oc(e),e.tag=3,e}function gs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ps(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ps(t,n,r),typeof i!=`function`&&(Ul===null?Ul=new Set([this]):Ul.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function _s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zs(t,n,a,!0),n=oa.current,n!==null){switch(n.tag){case 13:return sa===null?du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Bi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Eu(e,r,a)),!1;case 22:return n.flags|=65536,r===Bi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Eu(e,r,a)),!1}throw Error(i(435,n.tag))}return Eu(e,r,a),du(),!1}if(M)return t=oa.current,t===null?(r!==ji&&(t=Error(i(423),{cause:r}),Li(pi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=pi(r,n),a=ms(e.stateNode,r,a),lc(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ji&&(e=Error(i(422),{cause:r}),Li(pi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=pi(o,n),Ll===null?Ll=[o]:Ll.push(o),X!==4&&(X=2),t===null)return!0;r=pi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ms(n.stateNode,r,e),lc(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(Ul===null||!Ul.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=hs(a),gs(a,e,n,r),lc(n,a),!1}n=n.return}while(n!==null);return!1}var vs=Error(i(461)),B=!1;function ys(e,t,n,r){t.child=e===null?ea(t,null,n,r):$i(t,e.child,n,r)}function bs(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $s(t),r=za(e,t,n,o,a,i),s=Ua(),e!==null&&!B?(Wa(e,t,i),Bs(e,t,i)):(M&&s&&Ti(t),t.flags|=1,ys(e,t,r,i),t.child)}function xs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ul(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ss(e,t,a,r,i)):(e=pl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Vs(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Bs(e,t,i)}return t.flags|=1,e=dl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Vs(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Bs(e,t,i)}return Es(e,t,n,r,i)}function Cs(e,t,n){var r=t.pendingProps,i=r.children,a=(t.stateNode._pendingVisibility&2)!=0,o=e===null?null:e.memoizedState;if(Ts(e,t),r.mode===`hidden`||a){if(t.flags&128){if(r=o===null?n:o.baseLanes|n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return ws(e,t,r,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Oa(t,o===null?null:o.cachePool),o===null?ia():ra(t,o),la(t);else return t.lanes=t.childLanes=536870912,ws(e,t,o===null?n:o.baseLanes|n,n)}else o===null?(e!==null&&Oa(t,null),ia(),ua(t)):(Oa(t,o.cachePool),ra(t,o),ua(t),t.memoizedState=null);return ys(e,t,i,n),t.child}function ws(e,t,n,r){var i=Da();return i=i===null?null:{parent:P._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Oa(t,null),ia(),la(t),e!==null&&Zs(e,t,r,!0),null}function Ts(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Es(e,t,n,r,i){return $s(t),n=za(e,t,n,r,void 0,i),r=Ua(),e!==null&&!B?(Wa(e,t,i),Bs(e,t,i)):(M&&r&&Ti(t),t.flags|=1,ys(e,t,n,i),t.child)}function Ds(e,t,n,r,i,a){return $s(t),t.updateQueue=null,n=Va(t,r,n,i),Ba(e),r=Ua(),e!==null&&!B?(Wa(e,t,a),Bs(e,t,a)):(M&&r&&Ti(t),t.flags|=1,ys(e,t,n,a),t.child)}function Os(e,t,n,r,i){if($s(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=ec(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=is,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ic(t),o=n.contextType,a.context=typeof o==`object`&&o?ec(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(rs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&is.enqueueReplaceState(a,a.state,null),fc(t,r,a,i),dc(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=ss(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=ec(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&os(t,a,r,o),rc=!1;var f=t.memoizedState;a.state=f,fc(t,r,a,i),dc(),l=t.memoizedState,s||f!==l||rc?(typeof d==`function`&&(rs(t,n,d,r),l=t.memoizedState),(c=rc||as(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ac(e,t),o=t.memoizedProps,u=ss(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=ec(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&os(t,a,r,c),rc=!1,f=t.memoizedState,a.state=f,fc(t,r,a,i),dc();var p=t.memoizedState;o!==d||f!==p||rc||e!==null&&e.dependencies!==null&&Qs(e.dependencies)?(typeof s==`function`&&(rs(t,n,s,r),p=t.memoizedState),(u=rc||as(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qs(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Ts(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=$i(t,e.child,null,i),t.child=$i(t,null,n,i)):ys(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Bs(e,t,i),e}function ks(e,t,n,r){return Ii(),t.flags|=256,ys(e,t,n,r),t.child}var As={dehydrated:null,treeContext:null,retryLane:0};function js(e){return{baseLanes:e,cachePool:ka()}}function Ms(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Fl),e}function Ns(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?ca(t):ua(t),M){var c=Oi,l;if(l=c){c:{for(l=c,c=Ai;l.nodeType!==8;){if(!c){c=null;break c}if(l=Pd(l.nextSibling),l===null){c=null;break c}}c=l}c===null?l=!1:(t.memoizedState={dehydrated:c,treeContext:bi===null?null:{id:xi,overflow:Si},retryLane:536870912},l=ll(18,null,null,0),l.stateNode=c,l.return=t,t.child=l,Di=t,Oi=null,l=!0)}l||Mi(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data===`$!`?t.lanes=16:t.lanes=536870912,null;da(t)}return c=r.children,r=r.fallback,a?(ua(t),a=t.mode,c=Fs({mode:`hidden`,children:c},a),r=ml(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,a=t.child,a.memoizedState=js(n),a.childLanes=Ms(e,s,n),t.memoizedState=As,r):(ca(t),Ps(t,c))}if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ca(t),t.flags&=-257,t=Is(e,t,n)):t.memoizedState===null?(ua(t),a=r.fallback,c=t.mode,r=Fs({mode:`visible`,children:r.children},c),a=ml(a,c,n,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,$i(t,e.child,null,n),r=t.child,r.memoizedState=js(n),r.childLanes=Ms(e,s,n),t.memoizedState=As,t=a):(ua(t),t.child=e.child,t.flags|=128,t=null);else if(ca(t),c.data===`$!`){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Li({value:r,source:null,stack:null}),t=Is(e,t,n)}else if(B||Zs(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=K,s!==null){if(r=n&-n,r&42)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(s.suspendedLanes|n))===0?r:0,r!==0&&r!==l.retryLane)throw l.retryLane=r,ci(e,r),$l(s,e,r),vs}c.data===`$?`||du(),t=Is(e,t,n)}else c.data===`$?`?(t.flags|=128,t.child=e.child,t=ku.bind(null,e),c._reactRetry=t,t=null):(e=l.treeContext,Oi=Pd(c.nextSibling),Di=t,M=!0,ki=null,Ai=!1,e!==null&&(vi[yi++]=xi,vi[yi++]=Si,vi[yi++]=bi,xi=e.id,Si=e.overflow,bi=t),t=Ps(t,r.children),t.flags|=4096);return t}return a?(ua(t),a=r.fallback,c=t.mode,l=e.child,u=l.sibling,r=dl(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&31457280,u===null?(a=ml(a,c,n,null),a.flags|=2):a=dl(u,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,c=e.child.memoizedState,c===null?c=js(n):(l=c.cachePool,l===null?l=ka():(u=P._currentValue,l=l.parent===u?l:{parent:u,pool:u}),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=Ms(e,s,n),t.memoizedState=As,r):(ca(t),n=e.child,e=n.sibling,n=dl(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ps(e,t){return t=Fs({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Fs(e,t){return hl(e,t,0,null)}function Is(e,t,n){return $i(t,e.child,null,n),e=Ps(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ls(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ys(e.return,t,n)}function Rs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function zs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ys(e,t,r.children,n),r=N.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,n,t);else if(e.tag===19)Ls(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(O(N,r),i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rs(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rs(t,!0,n,null,a);break;case`together`:Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ml|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zs(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=dl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vs(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qs(e))):!0}function Hs(e,t,n){switch(t.tag){case 3:k(t,t.stateNode.containerInfo),qs(t,P,e.memoizedState.cache),Ii();break;case 27:case 5:De(t);break;case 4:k(t,t.stateNode.containerInfo);break;case 10:qs(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ca(t),e=Bs(e,t,n),e===null?null:e.sibling):Ns(e,t,n):(ca(t),t.flags|=128,null);ca(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zs(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return zs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(N,N.current),r)break;return null;case 22:case 23:return t.lanes=0,Cs(e,t,n);case 24:qs(t,P,e.memoizedState.cache)}return Bs(e,t,n)}function Us(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Vs(e,n)&&!(t.flags&128))return B=!1,Hs(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&wi(t,_i,t.index);switch(t.lanes=0,t.tag){case 16:a:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,typeof r==`function`)ul(r)?(e=ss(r,e),t.tag=1,t=Os(null,t,r,e,n)):(t.tag=0,t=Es(null,t,r,e,n));else{if(r!=null){if(a=r.$$typeof,a===v){t.tag=11,t=bs(null,t,r,e,n);break a}else if(a===x){t.tag=14,t=xs(null,t,r,e,n);break a}}throw t=ae(r)||r,Error(i(306,t,``))}}return t;case 0:return Es(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=ss(r,t.pendingProps),Os(e,t,r,a,n);case 3:a:{if(k(t,t.stateNode.containerInfo),e===null)throw Error(i(387));var o=t.pendingProps;a=t.memoizedState,r=a.element,ac(e,t),fc(t,o,null,n);var s=t.memoizedState;if(o=s.cache,qs(t,P,o),o!==a.cache&&Xs(t,[P],n,!0),dc(),o=s.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=ks(e,t,o,n);break a}else if(o!==r){r=pi(Error(i(424)),t),Li(r),t=ks(e,t,o,n);break a}else for(Oi=Pd(t.stateNode.containerInfo.firstChild),Di=t,M=!0,ki=null,Ai=!0,n=ea(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ii(),o===r){t=Bs(e,t,n);break a}ys(e,t,o,n)}t=t.child}return t;case 26:return Ts(e,t),e===null?(n=Qd(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=yd(we.current).createElement(n),r[pt]=t,r[mt]=e,hd(r,n,e),j(r),t.stateNode=r):t.memoizedState=Qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return De(t),e===null&&M&&(r=t.stateNode=Id(t.type,t.pendingProps,we.current),Di=t,Ai=!0,Oi=Pd(r.firstChild)),r=t.pendingProps.children,e!==null||M?ys(e,t,r,n):t.child=$i(t,null,r,n),Ts(e,t),t.child;case 5:return e===null&&M&&((a=r=Oi)&&(r=Md(r,t.type,t.pendingProps,Ai),r===null?a=!1:(t.stateNode=r,Di=t,Oi=Pd(r.firstChild),Ai=!1,a=!0)),a||Mi(t)),De(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Sd(a,o)?r=null:s!==null&&Sd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=za(e,t,Ha,null,null,n),Cf._currentValue=a),Ts(e,t),ys(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=Oi)&&(n=Nd(n,t.pendingProps,Ai),n===null?e=!1:(t.stateNode=n,Di=t,Oi=null,e=!0)),e||Mi(t)),null;case 13:return Ns(e,t,n);case 4:return k(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$i(t,null,r,n):ys(e,t,r,n),t.child;case 11:return bs(e,t,t.type,t.pendingProps,n);case 7:return ys(e,t,t.pendingProps,n),t.child;case 8:return ys(e,t,t.pendingProps.children,n),t.child;case 12:return ys(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qs(t,t.type,r.value),ys(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$s(t),a=ec(a),r=r(a),t.flags|=1,ys(e,t,r,n),t.child;case 14:return xs(e,t,t.type,t.pendingProps,n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 19:return zs(e,t,n);case 22:return Cs(e,t,n);case 24:return $s(t),r=ec(P),e===null?(a=Da(),a===null&&(a=K,o=ga(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},ic(t),qs(t,P,a)):((e.lanes&n)!==0&&(ac(e,t),fc(t,null,null,n),dc()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qs(t,P,r),r!==a.cache&&Xs(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qs(t,P,r))),ys(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}var Ws=xe(null),Gs=null,Ks=null;function qs(e,t,n){O(Ws,t._currentValue),t._currentValue=n}function Js(e){e._currentValue=Ws.current,D(Ws)}function Ys(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xs(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ys(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ys(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zs(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Te.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Cf]:e.push(Cf))}a=a.return}e!==null&&Xs(t,e,n,r),t.flags|=262144}function Qs(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $s(e){Gs=e,Ks=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ec(e){return nc(Gs,e)}function tc(e,t){return Gs===null&&$s(e),nc(e,t)}function nc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ks===null){if(e===null)throw Error(i(308));Ks=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ks=Ks.next=t;return n}var rc=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oc(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sc(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function cc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194176)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var uc=!1;function dc(){if(uc){var e=xa;if(e!==null)throw e}}function fc(e,t,n,r){uc=!1;var i=e.updateQueue;rc=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ba&&(uc=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:rc=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ml|=o,e.lanes=o,e.memoizedState=d}}function pc(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function mc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)pc(n[e],t)}function hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n;try{s()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function _c(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{mc(t,n)}catch(t){Z(e,e.return,t)}}}function vc(e,t,n){n.props=ss(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function yc(e,t){try{var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=r;break;default:i=r}typeof n==`function`?e.refCleanup=n(i):n.current=i}}catch(n){Z(e,t,n)}}function bc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Sc(e,t,n){try{var r=e.stateNode;gd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Cc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function wc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pd));else if(r!==4&&r!==27&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&r!==27&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}var Dc=!1,V=!1,Oc=!1,kc=typeof WeakSet==`function`?WeakSet:Set,H=null,Ac=!1;function jc(e,t){if(e=e.containerInfo,_d=jf,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(vd={focusedElem:e,selectionRange:n},jf=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=ss(n.type,a,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)jd(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:jd(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return h=Ac,Ac=!1,h}function Mc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Gc(e,n),r&4&&hc(5,n);break;case 1:if(Gc(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=ss(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&_c(n),r&512&&yc(n,n.return);break;case 3:if(Gc(e,n),r&64&&(r=n.updateQueue,r!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{mc(r,e)}catch(e){Z(n,n.return,e)}}break;case 26:Gc(e,n),r&512&&yc(n,n.return);break;case 27:case 5:Gc(e,n),t===null&&r&4&&xc(n),r&512&&yc(n,n.return);break;case 12:Gc(e,n);break;case 13:Gc(e,n),r&4&&Lc(e,n);break;case 22:if(i=n.memoizedState!==null||Dc,!i){t=t!==null&&t.memoizedState!==null||V;var a=Dc,o=V;Dc=i,(V=t)&&!o?qc(e,n,(n.subtreeFlags&8772)!=0):Gc(e,n),Dc=a,V=o}r&512&&(n.memoizedProps.mode===`manual`?yc(n,n.return):bc(n,n.return));break;default:Gc(e,n)}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Pc=!1;function Fc(e,t,n){for(n=n.child;n!==null;)Ic(e,t,n),n=n.sibling}function Ic(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:V||bc(n,t),Fc(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||bc(n,t);var r=U,i=Pc;for(U=n.stateNode,Fc(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);xt(n),U=r,Pc=i;break;case 5:V||bc(n,t);case 6:i=U;var a=Pc;if(U=null,Fc(e,t,n),U=i,Pc=a,U!==null)if(Pc)try{e=U,r=n.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(Pc?(t=U,n=n.stateNode,t.nodeType===8?Ad(t.parentNode,n):t.nodeType===1&&Ad(t,n),rp(t)):Ad(U,n.stateNode));break;case 4:r=U,i=Pc,U=n.stateNode.containerInfo,Pc=!0,Fc(e,t,n),U=r,Pc=i;break;case 0:case 11:case 14:case 15:V||gc(2,n,t),V||gc(4,n,t),Fc(e,t,n);break;case 1:V||(bc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&vc(n,t,r)),Fc(e,t,n);break;case 21:Fc(e,t,n);break;case 22:V||bc(n,t),V=(r=V)||n.memoizedState!==null,Fc(e,t,n),V=r;break;default:Fc(e,t,n)}}function Lc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rp(e)}catch(e){Z(t,t.return,e)}}function Rc(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new kc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new kc),t;default:throw Error(i(435,e.tag))}}function zc(e,t){var n=Rc(e);t.forEach(function(t){var r=Au.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Bc(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:case 5:U=c.stateNode,Pc=!1;break a;case 3:U=c.stateNode.containerInfo,Pc=!0;break a;case 4:U=c.stateNode.containerInfo,Pc=!0;break a}c=c.return}if(U===null)throw Error(i(160));Ic(o,s,a),U=null,Pc=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Hc(t,e),t=t.sibling}var Vc=null;function Hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bc(t,e),Uc(e),r&4&&(gc(3,e,e.return),hc(3,e),gc(5,e,e.return));break;case 1:Bc(t,e),Uc(e),r&512&&(V||n===null||bc(n,n.return)),r&64&&Dc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=Vc;if(Bc(t,e),Uc(e),r&512&&(V||n===null||bc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),hd(o,r,n),o[pt]=e,j(o),r=o;break a;case`link`:var s=df(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),hd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=df(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),hd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,j(o),r=o}e.stateNode=r}else ff(a,e.type,e.stateNode);else e.stateNode=of(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Sc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?ff(a,e.type,e.stateNode):of(a,r,e.memoizedProps))}break;case 27:if(r&4&&e.alternate===null){a=e.stateNode,o=e.memoizedProps;try{for(var l=a.firstChild;l;){var u=l.nextSibling,d=l.nodeName;l[bt]||d===`HEAD`||d===`BODY`||d===`SCRIPT`||d===`STYLE`||d===`LINK`&&l.rel.toLowerCase()===`stylesheet`||a.removeChild(l),l=u}for(var f=e.type,p=a.attributes;p.length;)a.removeAttributeNode(p[0]);hd(a,f,o),a[pt]=e,a[mt]=o}catch(t){Z(e,e.return,t)}}case 5:if(Bc(t,e),Uc(e),r&512&&(V||n===null||bc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Sc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Oc=!0);break;case 6:if(Bc(t,e),Uc(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(uf=null,a=Vc,Vc=zd(t.containerInfo),Bc(t,e),Vc=a,Uc(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rp(t.containerInfo)}catch(t){Z(e,e.return,t)}Oc&&(Oc=!1,Wc(e));break;case 4:r=Vc,Vc=zd(e.stateNode.containerInfo),Bc(t,e),Uc(e),Vc=r;break;case 12:Bc(t,e),Uc(e);break;case 13:Bc(t,e),Uc(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Bl=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zc(e,r)));break;case 22:if(r&512&&(V||n===null||bc(n,n.return)),l=e.memoizedState!==null,u=n!==null&&n.memoizedState!==null,d=Dc,f=V,Dc=d||l,V=f||u,Bc(t,e),V=f,Dc=d,Uc(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,r&8192&&(t._visibility=l?t._visibility&-2:t._visibility|1,l&&(t=Dc||V,n===null||u||t||Kc(e)),e.memoizedProps===null||e.memoizedProps.mode!==`manual`))a:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){u=n=t;try{if(a=u.stateNode,l)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{s=u.stateNode,c=u.memoizedProps.style;var m=c!=null&&c.hasOwnProperty(`display`)?c.display:null;s.style.display=m==null||typeof m==`boolean`?``:(``+m).trim()}}catch(e){Z(u,u.return,e)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=l?``:u.memoizedProps}catch(e){Z(u,u.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,zc(e,n))));break;case 19:Bc(t,e),Uc(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zc(e,r)));break;case 21:break;default:Bc(t,e),Uc(e)}}function Uc(e){var t=e.flags;if(t&2){try{if(e.tag!==27){a:{for(var n=e.return;n!==null;){if(Cc(n)){var r=n;break a}n=n.return}throw Error(i(160))}switch(r.tag){case 27:var a=r.stateNode;Ec(e,wc(e),a);break;case 5:var o=r.stateNode;r.flags&32&&(Qt(o,``),r.flags&=-33),Ec(e,wc(e),o);break;case 3:case 4:var s=r.stateNode.containerInfo;Tc(e,wc(e),s);break;default:throw Error(i(161))}}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gc(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Mc(e,t.alternate,t),t=t.sibling}function Kc(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:gc(4,t,t.return),Kc(t);break;case 1:bc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&vc(t,t.return,n),Kc(t);break;case 26:case 27:case 5:bc(t,t.return),Kc(t);break;case 22:bc(t,t.return),t.memoizedState===null&&Kc(t);break;default:Kc(t)}e=e.sibling}}function qc(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:qc(i,a,n),hc(4,a);break;case 1:if(qc(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)pc(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&_c(a),yc(a,a.return);break;case 26:case 27:case 5:qc(i,a,n),n&&r===null&&o&4&&xc(a),yc(a,a.return);break;case 12:qc(i,a,n);break;case 13:qc(i,a,n),n&&o&4&&Lc(i,a);break;case 22:a.memoizedState===null&&qc(i,a,n),yc(a,a.return);break;default:qc(i,a,n)}t=t.sibling}}function Jc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&_a(n))}function Yc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e))}function Xc(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zc(e,t,n,r),t=t.sibling}function Zc(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Xc(e,t,n,r),i&2048&&hc(9,t);break;case 3:Xc(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e)));break;case 12:if(i&2048){Xc(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Xc(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,t.memoizedState===null?a._visibility&4?Xc(e,t,n,r):(a._visibility|=4,Qc(e,t,n,r,(t.subtreeFlags&10256)!=0)):a._visibility&4?Xc(e,t,n,r):$c(e,t),i&2048&&Jc(t.alternate,t);break;case 24:Xc(e,t,n,r),i&2048&&Yc(t.alternate,t);break;default:Xc(e,t,n,r)}}function Qc(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Qc(a,o,s,c,i),hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=4,Qc(a,o,s,c,i)):u._visibility&4?Qc(a,o,s,c,i):$c(a,o),i&&l&2048&&Jc(o.alternate,o);break;case 24:Qc(a,o,s,c,i),i&&l&2048&&Yc(o.alternate,o);break;default:Qc(a,o,s,c,i)}t=t.sibling}}function $c(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:$c(n,r),i&2048&&Jc(r.alternate,r);break;case 24:$c(n,r),i&2048&&Yc(r.alternate,r);break;default:$c(n,r)}t=t.sibling}}var el=8192;function tl(e){if(e.subtreeFlags&el)for(e=e.child;e!==null;)nl(e),e=e.sibling}function nl(e){switch(e.tag){case 26:tl(e),e.flags&el&&e.memoizedState!==null&&_f(Vc,e.memoizedState,e.memoizedProps);break;case 5:tl(e);break;case 3:case 4:var t=Vc;Vc=zd(e.stateNode.containerInfo),tl(e),Vc=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=el,el=16777216,tl(e),el=t):tl(e));break;default:tl(e)}}function rl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,sl(r,e)}rl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)al(e),e=e.sibling}function al(e){switch(e.tag){case 0:case 11:case 15:il(e),e.flags&2048&&gc(9,e,e.return);break;case 3:il(e);break;case 12:il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,ol(e)):il(e);break;default:il(e)}}function ol(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,sl(r,e)}rl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gc(8,t,t.return),ol(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,ol(t));break;default:ol(t)}e=e.sibling}}function sl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:_a(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(Nc(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}function cl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ll(e,t,n,r){return new cl(e,t,n,r)}function ul(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dl(e,t){var n=e.alternate;return n===null?(n=ll(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fl(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pl(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ul(e)&&(s=1);else if(typeof e==`string`)s=pf(e,n,Se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case l:return ml(n.children,a,o,t);case d:s=8,a|=24;break;case p:return e=ll(12,n,t,a|2),e.elementType=p,e.lanes=o,e;case y:return e=ll(13,n,t,a),e.elementType=y,e.lanes=o,e;case b:return e=ll(19,n,t,a),e.elementType=b,e.lanes=o,e;case ee:return hl(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case h:case _:s=10;break a;case g:s=9;break a;case v:s=11;break a;case x:s=14;break a;case S:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ll(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ml(e,t,n,r){return e=ll(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){e=ll(22,e,r,t),e.elementType=ee,e.lanes=n;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=a._current;if(e===null)throw Error(i(456));if(!(a._pendingVisibility&2)){var t=ci(e,2);t!==null&&(a._pendingVisibility|=2,$l(t,e,2))}},attach:function(){var e=a._current;if(e===null)throw Error(i(456));if(a._pendingVisibility&2){var t=ci(e,2);t!==null&&(a._pendingVisibility&=-3,$l(t,e,2))}}};return e.stateNode=a,e}function gl(e,t,n){return e=ll(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=ll(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vl(e){e.flags|=4}function yl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!mf(t)){if(t=oa.current,t!==null&&((J&4194176)===J?sa!==null:(J&62914560)!==J&&!(J&536870912)||t!==sa))throw Wi=Bi,zi;e.flags|=8192}}function bl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Il|=t)}function xl(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&31457280,r|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sl(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Js(P),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fi(t)?vl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ki!==null&&(tu(ki),ki=null))),W(t),null;case 26:return n=t.memoizedState,e===null?(vl(t),n===null?(W(t),t.flags&=-16777217):(W(t),yl(t,n))):n?n===e.memoizedState?(W(t),t.flags&=-16777217):(vl(t),W(t),yl(t,n)):(e.memoizedProps!==r&&vl(t),W(t),t.flags&=-16777217),null;case 27:A(t),n=we.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=Se.current,Fi(t)?Ni(t,e):(e=Id(a,r,n),t.stateNode=e,vl(t))}return W(t),null;case 5:if(A(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(e=Se.current,Fi(t))Ni(t,e);else{switch(a=yd(we.current),e){case 1:e=a.createElementNS(`http://www.w3.org/2000/svg`,n);break;case 2:e=a.createElementNS(`http://www.w3.org/1998/Math/MathML`,n);break;default:switch(n){case`svg`:e=a.createElementNS(`http://www.w3.org/2000/svg`,n);break;case`math`:e=a.createElementNS(`http://www.w3.org/1998/Math/MathML`,n);break;case`script`:e=a.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild);break;case`select`:e=typeof r.is==`string`?a.createElement(`select`,{is:r.is}):a.createElement(`select`),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is==`string`?a.createElement(n,{is:r.is}):a.createElement(n)}}e[pt]=t,e[mt]=r;a:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break a;for(;a.sibling===null;){if(a.return===null||a.return===t)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;a:switch(hd(e,n,r),n){case`button`:case`input`:case`select`:case`textarea`:e=!!r.autoFocus;break a;case`img`:e=!0;break a;default:e=!1}e&&vl(t)}}return W(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=we.current,Fi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Di,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||fd(e.nodeValue,n)),e||Mi(t)}else e=yd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else ki!==null&&(tu(ki),ki=null),a=!0;if(!a)return t.flags&256?(da(t),t):(da(t),null)}if(da(t),t.flags&128)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var o=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),bl(t,t.updateQueue),W(t),null;case 4:return Ee(),e===null&&nd(t.stateNode.containerInfo),W(t),null;case 10:return Js(t.type),W(t),null;case 19:if(D(N),a=t.memoizedState,a===null)return W(t),null;if(r=(t.flags&128)!=0,o=a.rendering,o===null)if(r)xl(a,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fa(e),o!==null){for(t.flags|=128,xl(a,!1),e=o.updateQueue,t.updateQueue=e,bl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fl(n,e),n=n.sibling;return O(N,N.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ne()>Vl&&(t.flags|=128,r=!0,xl(a,!1),t.lanes=4194304)}else{if(!r)if(e=fa(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,bl(t,e),xl(a,!0),a.tail===null&&a.tailMode===`hidden`&&!o.alternate&&!M)return W(t),null}else 2*Ne()-a.renderingStartTime>Vl&&n!==536870912&&(t.flags|=128,r=!0,xl(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e===null?t.child=o:e.sibling=o,a.last=o)}return a.tail===null?(W(t),null):(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ne(),t.sibling=null,e=N.current,O(N,r?e&1|2:e&1),t);case 22:case 23:return da(t),aa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&bl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Js(P),W(t),null;case 25:return null}throw Error(i(156,t.tag))}function Cl(e,t){switch(Ei(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Js(P),Ee(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return A(t),null;case 13:if(da(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(N),null;case 4:return Ee(),null;case 10:return Js(t.type),null;case 22:case 23:return da(t),aa(),e!==null&&D(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Js(P),null;case 25:return null;default:return null}}function wl(e,t){switch(Ei(t),t.tag){case 3:Js(P),Ee();break;case 26:case 27:case 5:A(t);break;case 4:Ee();break;case 13:da(t);break;case 19:D(N);break;case 10:Js(t.type);break;case 22:case 23:da(t),aa(),e!==null&&D(Ea);break;case 24:Js(P)}}var Tl={getCacheForType:function(e){var t=ec(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},El=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Dl=null,Ol=!1,kl=!1,Al=!1,jl=0,X=0,Ml=0,Nl=0,Pl=0,Fl=0,Il=0,Ll=null,Rl=null,zl=!1,Bl=0,Vl=1/0,Hl=null,Ul=null,Wl=!1,Gl=null,Kl=0,ql=0,Jl=null,Yl=0,Xl=null;function Zl(){if(G&2&&J!==0)return J&-J;if(C.T!==null){var e=ba;return e===0?Gu():e}return ut()}function Ql(){Fl===0&&(Fl=!(J&536870912)||M?nt():536870912);var e=oa.current;return e!==null&&(e.flags|=32),Fl}function $l(e,t,n){(e===K&&Y===2||e.cancelPendingCommit!==null)&&(su(e,0),iu(e,J,Fl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Nl|=n),X===4&&iu(e,J,Fl,!1)),Ru(e))}function eu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&60)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?mu(e,t):fu(e,t,!0),o=r;do{if(a===0){kl&&!r&&iu(e,t,0,!1);break}else if(a===6)iu(e,t,0,!Ol);else{if(n=e.current.alternate,o&&!ru(n)){a=fu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Ll;var l=c.current.memoizedState.isDehydrated;if(l&&(su(c,s).flags|=256),s=fu(c,s,!1),s!==2){if(Al&&!l){c.errorRecoveryDisabledLanes|=o,Nl|=o,a=4;break a}o=Rl,Rl=a,o!==null&&tu(o)}a=s}if(o=!1,a!==2)continue}}if(a===1){su(e,0),iu(e,t,0,!0);break}a:{switch(r=e,a){case 0:case 1:throw Error(i(345));case 4:if((t&4194176)===t){iu(r,t,Fl,!Ol);break a}break;case 2:Rl=null;break;case 3:case 5:break;default:throw Error(i(329))}if(r.finishedWork=n,r.finishedLanes=t,(t&62914560)===t&&(o=Bl+300-Ne(),10<o)){if(iu(r,t,Fl,!Ol),$e(r,0)!==0)break a;r.timeoutHandle=Td(nu.bind(null,r,n,Rl,Hl,zl,t,Fl,Nl,Il,Ol,2,-0,0),o);break a}nu(r,n,Rl,Hl,zl,t,Fl,Nl,Il,Ol,0,-0,0)}}break}while(1);Ru(e)}function tu(e){Rl===null?Rl=e:Rl.push.apply(Rl,e)}function nu(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=t.subtreeFlags;if((p&8192||(p&16785408)==16785408)&&(hf={stylesheets:null,count:0,unsuspend:gf},nl(t),t=vf(),t!==null)){e.cancelPendingCommit=t(xu.bind(null,e,n,r,i,o,s,c,1,d,f)),iu(e,a,o,!l);return}xu(e,n,r,i,o,s,c,u,d,f)}function ru(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function iu(e,t,n,r){t&=~Pl,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function au(){return G&6?!0:(zu(0,!1),!1)}function ou(){if(q!==null){if(Y===0)var e=q.return;else e=q,Ks=Gs=null,Ga(e),Ki=null,qi=0,e=q;for(;e!==null;)wl(e.alternate,e),e=e.return;q=null}}function su(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ed(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ou(),K=e,q=n=dl(e.current,null),J=t,Y=0,Dl=null,Ol=!1,kl=et(e,t),Al=!1,Il=Fl=Pl=Nl=Ml=X=0,Rl=Ll=null,zl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return jl=t,ai(),n}function cu(e,t){F=null,C.H=$o,t===Ri?(t=Gi(),Y=3):t===zi?(t=Gi(),Y=4):Y=t===vs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Dl=t,q===null&&(X=1,fs(e,pi(t,e.current)))}function lu(){var e=C.H;return C.H=$o,e===null?$o:e}function uu(){var e=C.A;return C.A=Tl,e}function du(){X=4,Ol||(J&4194176)!==J&&oa.current!==null||(kl=!0),!(Ml&134217727)&&!(Nl&134217727)||K===null||iu(K,J,Fl,!1)}function fu(e,t,n){var r=G;G|=2;var i=lu(),a=uu();(K!==e||J!==t)&&(Hl=null,su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Dl;switch(Y){case 8:ou(),o=6;break a;case 3:case 2:case 6:oa.current===null&&(t=!0);var l=Y;if(Y=0,Dl=null,vu(e,s,c,l),n&&kl){o=0;break a}break;default:l=Y,Y=0,Dl=null,vu(e,s,c,l)}}pu(),o=X;break}catch(t){cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ks=Gs=null,G=r,C.H=i,C.A=a,q===null&&(K=null,J=0,ai()),o}function pu(){for(;q!==null;)gu(q)}function mu(e,t){var n=G;G|=2;var r=lu(),a=uu();K!==e||J!==t?(Hl=null,Vl=Ne()+500,su(e,t)):kl=et(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Dl;b:switch(Y){case 1:Y=0,Dl=null,vu(e,t,o,1);break;case 2:if(Vi(o)){Y=0,Dl=null,_u(t);break}t=function(){Y===2&&K===e&&(Y=7),Ru(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Vi(o)?(Y=0,Dl=null,_u(t)):(Y=0,Dl=null,vu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(!s||mf(s)){Y=0,Dl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,yu(u))}break b}}Y=0,Dl=null,vu(e,t,o,5);break;case 6:Y=0,Dl=null,vu(e,t,o,6);break;case 8:ou(),X=6;break a;default:throw Error(i(462))}}hu();break}catch(t){cu(e,t)}while(1);return Ks=Gs=null,C.H=r,C.A=a,G=n,q===null?(K=null,J=0,ai(),X):0}function hu(){for(;q!==null&&!je();)gu(q)}function gu(e){var t=Us(e.alternate,e,jl);e.memoizedProps=e.pendingProps,t===null?yu(e):q=t}function _u(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ds(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Ds(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ga(t);default:wl(n,t),t=q=fl(t,jl),t=Us(n,t,jl)}e.memoizedProps=e.pendingProps,t===null?yu(e):q=t}function vu(e,t,n,r){Ks=Gs=null,Ga(t),Ki=null,qi=0;var i=t.return;try{if(_s(e,i,t,n,J)){X=1,fs(e,pi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,fs(e,pi(n,e.current)),q=null;return}t.flags&32768?(M||r===1?e=!0:kl||J&536870912?e=!1:(Ol=e=!0,(r===2||r===3||r===6)&&(r=oa.current,r!==null&&r.tag===13&&(r.flags|=16384))),bu(t,e)):yu(t)}function yu(e){var t=e;do{if(t.flags&32768){bu(t,Ol);return}e=t.return;var n=Sl(t.alternate,t,jl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function bu(e,t){do{var n=Cl(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function xu(e,t,n,r,i,a,o,s,c,l){var u=C.T,d=E.p;try{E.p=2,C.T=null,Su(e,t,n,r,d,i,a,o,s,c,l)}finally{C.T=u,E.p=d}}function Su(e,t,n,r,a,o,s,c){do wu();while(Gl!==null);if(G&6)throw Error(i(327));var l=e.finishedWork;if(r=e.finishedLanes,l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var u=l.lanes|l.childLanes;if(u|=ii,ot(e,r,u,o,s,c),e===K&&(q=K=null,J=0),!(l.subtreeFlags&10256)&&!(l.flags&10256)||Wl||(Wl=!0,ql=u,Jl=n,ju(Le,function(){return wu(!0),null})),n=(l.flags&15990)!=0,l.subtreeFlags&15990||n?(n=C.T,C.T=null,o=E.p,E.p=2,s=G,G|=4,jc(e,l),Hc(l,e),Pr(vd,e.containerInfo),jf=!!_d,vd=_d=null,e.current=l,Mc(e,l.alternate,l),Me(),G=s,E.p=o,C.T=n):e.current=l,Wl?(Wl=!1,Gl=e,Kl=r):Cu(e,u),u=e.pendingLanes,u===0&&(Ul=null),We(l.stateNode,a),Ru(e),t!==null)for(a=e.onRecoverableError,l=0;l<t.length;l++)u=t[l],a(u.value,{componentStack:u.stack});return Kl&3&&wu(),u=e.pendingLanes,r&4194218&&u&42?e===Xl?Yl++:(Yl=0,Xl=e):Yl=0,zu(0,!1),null}function Cu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_a(t)))}function wu(){if(Gl!==null){var e=Gl,t=ql;ql=0;var n=lt(Kl),r=C.T,a=E.p;try{if(E.p=32>n?32:n,C.T=null,Gl===null)var o=!1;else{n=Jl,Jl=null;var s=Gl,c=Kl;if(Gl=null,Kl=0,G&6)throw Error(i(331));var l=G;if(G|=4,al(s.current),Zc(s,s.current,c,n),G=l,zu(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,s)}catch{}o=!0}return o}finally{E.p=a,C.T=r,Cu(e,t)}}return!1}function Tu(e,t,n){t=pi(n,t),t=ms(e.stateNode,t,2),e=sc(e,t,2),e!==null&&(at(e,2),Ru(e))}function Z(e,t,n){if(e.tag===3)Tu(e,e,n);else for(;t!==null;){if(t.tag===3){Tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(Ul===null||!Ul.has(r))){e=pi(n,e),n=hs(2),r=sc(t,n,2),r!==null&&(gs(n,r,t,e),at(r,2),Ru(r));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new El;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Al=!0,i.add(n),e=Du.bind(null,e,t,n),t.then(e,e))}function Du(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ne()-Bl?!(G&2)&&su(e,0):Pl|=n,Il===J&&(Il=0)),Ru(e)}function Ou(e,t){t===0&&(t=rt()),e=ci(e,t),e!==null&&(at(e,t),Ru(e))}function ku(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ou(e,n)}function Au(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ou(e,n)}function ju(e,t){return ke(e,t)}var Mu=null,Nu=null,Pu=!1,Fu=!1,Iu=!1,Lu=0;function Ru(e){e!==Nu&&e.next===null&&(Nu===null?Mu=Nu=e:Nu=Nu.next=e),Fu=!0,Pu||(Pu=!0,Wu(Bu))}function zu(e,t){if(!Iu&&Fu){Iu=!0;do for(var n=!1,r=Mu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326677?a&201326677|1:a?a|2:0}a!==0&&(n=!0,Uu(r,a))}else a=J,a=$e(r,r===K?a:0),!(a&3)||et(r,a)||(n=!0,Uu(r,a));r=r.next}while(n);Iu=!1}}function Bu(){Fu=Pu=!1;var e=0;Lu!==0&&(wd()&&(e=Lu),Lu=0);for(var t=Ne(),n=null,r=Mu;r!==null;){var i=r.next,a=Vu(r,t);a===0?(r.next=null,n===null?Mu=i:n.next=i,i===null&&(Nu=n)):(n=r,(e!==0||a&3)&&(Fu=!0)),r=i}zu(e,!1)}function Vu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=$e(e,e===t?n:0),r=e.callbackNode,n===0||e===t&&Y===2||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),lt(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=Hu.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function Hu(e,t){var n=e.callbackNode;if(wu()&&e.callbackNode!==n)return null;var r=J;return r=$e(e,e===K?r:0),r===0?null:(eu(e,r,t),Vu(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?Hu.bind(null,e):null)}function Uu(e,t){if(wu())return null;eu(e,t,!0)}function Wu(e){Od(function(){G&6?ke(Fe,e):e()})}function Gu(){return Lu===0&&(Lu=nt()),Lu}function Ku(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function qu(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ju(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ku((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?Ku(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Lu!==0){var e=o?qu(i,o):new FormData(i);zo(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?qu(i,o):new FormData(i),zo(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Yu=0;Yu<ei.length;Yu++){var Xu=ei[Yu];ti(Xu.toLowerCase(),`on`+(Xu[0].toUpperCase()+Xu.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Zu=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Qu=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Zu));function $u(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){cs(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){cs(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(rd(t,e,2,!1),n.add(r))}function ed(e,t,n){var r=0;t&&(r|=4),rd(n,e,r,t)}var td=`_reactListening`+Math.random().toString(36).slice(2);function nd(e){if(!e[td]){e[td]=!0,Et.forEach(function(t){t!==`selectionchange`&&(Qu.has(t)||ed(t,!1,e),ed(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[td]||(t[td]=!0,ed(`selectionchange`,!1,t))}}function rd(e,t,n,r){switch(Rf(t)){case 2:var i=Mf;break;case 8:i=Nf;break;default:i=Pf}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function id(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=St(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),o=[];a:{var s=$r.get(e);if(s!==void 0){var c=En,l=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:c=Wn;break;case`focusin`:l=`focus`,c=Fn;break;case`focusout`:l=`blur`,c=Fn;break;case`beforeblur`:case`afterblur`:c=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Kn;break;case Kr:case qr:case Jr:c=In;break;case Qr:c=qn;break;case`scroll`:case`scrollend`:c=On;break;case`wheel`:c=Jn;break;case`copy`:case`cut`:case`paste`:c=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Gn;break;case`toggle`:case`beforetoggle`:c=Yn}var u=(t&4)!=0,d=!u&&(e===`scroll`||e===`scrollend`),f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){var h=p;if(m=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||m===null||f===null||(h=mn(p,f),h!=null&&u.push(ad(p,h,m))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==sn&&(l=n.relatedTarget||n.fromElement)&&(St(l)||l[ht]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?St(l):null,l!==null&&(d=fe(l),u=l.tag,l!==d||u!==5&&u!==27&&u!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Nn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Gn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:wt(c),m=l==null?s:wt(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,St(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=sd(m))p++;for(m=0,h=f;h;h=sd(h))m++;for(;0<p-m;)u=sd(u),p--;for(;0<m-p;)f=sd(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=sd(u),f=sd(f)}u=null}else u=null;c!==null&&cd(o,s,c,u,!1),l!==null&&d!==null&&cd(o,d,l,u,!0)}}a:{if(s=r?wt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=hr;else if(lr(s))if(gr)g=Tr;else{g=Cr;var _=Sr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&nn(r.elementType)&&(g=hr):g=wr;if(g&&=g(e,r)){ur(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Jt(s,`number`,s.value)}switch(_=r?wt(r):window,e){case`focusin`:(lr(_)||_.contentEditable===`true`)&&(Ir=_,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(o,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(o,n,i)}var v;if(Zn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else ar?rr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(er&&n.locale!==`ko`&&(ar||y!==`onCompositionStart`?y===`onCompositionEnd`&&ar&&(v=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ar=!0)),_=od(r,y),0<_.length&&(y=new Rn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=ir(n),v!==null&&(y.data=v)))),(v=$n?or(e,n):sr(e,n))&&(y=od(r,`onBeforeInput`),0<y.length&&(_=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:_,listeners:y}),_.data=v)),Ju(o,e,r,n,i)}$u(o,t)})}function ad(e,t,n){return{instance:e,listener:t,currentTarget:n}}function od(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(ad(e,i,a)),i=mn(e,t),i!=null&&r.push(ad(e,i,a))),e=e.return}return r}function sd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(ad(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(ad(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ld=/\r\n?/g,ud=/\u0000|\uFFFD/g;function dd(e){return(typeof e==`string`?e:``+e).replace(ld,`
`).replace(ud,``)}function fd(e,t){return t=dd(t),dd(e)===t}function pd(){}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=pd);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function md(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=pd);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function hd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1),Vt(e);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o),Vt(e);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<Zu.length;r++)Q(Zu[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&md(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function gd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&md(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||md(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}var _d=null,vd=null;function yd(e){return e.nodeType===9?e:e.ownerDocument}function bd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function xd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Sd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cd=null;function wd(){var e=window.event;return e&&e.type===`popstate`?e===Cd?!1:(Cd=e,!0):(Cd=null,!1)}var Td=typeof setTimeout==`function`?setTimeout:void 0,Ed=typeof clearTimeout==`function`?clearTimeout:void 0,Dd=typeof Promise==`function`?Promise:void 0,Od=typeof queueMicrotask==`function`?queueMicrotask:Dd===void 0?Td:function(e){return Dd.resolve(null).then(e).catch(kd)};function kd(e){setTimeout(function(){throw e})}function Ad(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),rp(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);rp(t)}function jd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:jd(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function Md(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=Pd(e.nextSibling),e===null)break}return null}function Nd(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=Pd(e.nextSibling),e===null))return null;return e}function Pd(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`F!`||t===`F`)break;if(t===`/$`)return null}}return e}function Fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}function Id(e,t,n){switch(t=yd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}var Ld=new Map,Rd=new Set;function zd(e){return typeof e.getRootNode==`function`?e.getRootNode():e.ownerDocument}var Bd=E.d;E.d={f:Vd,r:Hd,D:Gd,C:Kd,L:qd,m:Jd,X:Xd,S:Yd,M:Zd};function Vd(){var e=Bd.f(),t=au();return e||t}function Hd(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Vo(t):Bd.r(e)}var Ud=typeof document>`u`?null:document;function Wd(e,t,n){var r=Ud;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Rd.has(i)||(Rd.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),hd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Gd(e){Bd.D(e),Wd(`dns-prefetch`,e,null)}function Kd(e,t){Bd.C(e,t),Wd(`preconnect`,e,t)}function qd(e,t,n){Bd.L(e,t,n);var r=Ud;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=$d(e);break;case`script`:a=rf(e)}Ld.has(a)||(e=w({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Ld.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(ef(a))||t===`script`&&r.querySelector(af(a))||(t=r.createElement(`link`),hd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Jd(e,t){Bd.m(e,t);var n=Ud;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=rf(e)}if(!Ld.has(a)&&(e=w({rel:`modulepreload`,href:e},t),Ld.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(af(a)))return}r=n.createElement(`link`),hd(r,`link`,e),j(r),n.head.appendChild(r)}}}function Yd(e,t,n){Bd.S(e,t,n);var r=Ud;if(r&&e){var i=Tt(r).hoistableStyles,a=$d(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(ef(a)))s.loading=5;else{e=w({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Ld.get(a))&&cf(e,n);var c=o=r.createElement(`link`);j(c),hd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,sf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Xd(e,t){Bd.X(e,t);var n=Ud;if(n&&e){var r=Tt(n).hoistableScripts,i=rf(e),a=r.get(i);a||(a=n.querySelector(af(i)),a||(e=w({src:e,async:!0},t),(t=Ld.get(i))&&lf(e,t),a=n.createElement(`script`),j(a),hd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Zd(e,t){Bd.M(e,t);var n=Ud;if(n&&e){var r=Tt(n).hoistableScripts,i=rf(e),a=r.get(i);a||(a=n.querySelector(af(i)),a||(e=w({src:e,async:!0,type:`module`},t),(t=Ld.get(i))&&lf(e,t),a=n.createElement(`script`),j(a),hd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Qd(e,t,n,r){var a=(a=we.current)?zd(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=$d(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=$d(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(ef(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Ld.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ld.set(e,n),o||nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=rf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function $d(e){return`href="`+Gt(e)+`"`}function ef(e){return`link[rel="stylesheet"][`+e+`]`}function tf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),hd(t,`link`,n),j(t),e.head.appendChild(t))}function rf(e){return`[src="`+Gt(e)+`"]`}function af(e){return`script[async]`+e}function of(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,j(r),r;var a=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),j(r),hd(r,`style`,a),sf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=$d(n.href);var o=e.querySelector(ef(a));if(o)return t.state.loading|=4,t.instance=o,j(o),o;r=tf(n),(a=Ld.get(a))&&cf(r,a),o=(e.ownerDocument||e).createElement(`link`),j(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),hd(o,`link`,r),t.state.loading|=4,sf(o,n.precedence,e),t.instance=o;case`script`:return o=rf(n.src),(a=e.querySelector(af(o)))?(t.instance=a,j(a),a):(r=n,(a=Ld.get(o))&&(r=w({},n),lf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),j(a),hd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,sf(r,n.precedence,e));return t.instance}function sf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function cf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function lf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var uf=null;function df(e,t,n){if(uf===null){var r=new Map,i=uf=new Map;i.set(n,r)}else i=uf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function ff(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function pf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function mf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}var hf=null;function gf(){}function _f(e,t,n){if(hf===null)throw Error(i(475));var r=hf;if(t.type===`stylesheet`&&(typeof n.media!=`string`||!1!==matchMedia(n.media).matches)&&!(t.state.loading&4)){if(t.instance===null){var a=$d(n.href),o=e.querySelector(ef(a));if(o){e=o._p,typeof e==`object`&&e&&typeof e.then==`function`&&(r.count++,r=yf.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,j(o);return}o=e.ownerDocument||e,n=tf(n),(a=Ld.get(a))&&cf(n,a),o=o.createElement(`link`),j(o);var s=o;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),hd(o,`link`,n),t.instance=o}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(r.count++,t=yf.bind(r),e.addEventListener(`load`,t),e.addEventListener(`error`,t))}}function vf(){if(hf===null)throw Error(i(475));var e=hf;return e.stylesheets&&e.count===0&&xf(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function yf(){if(this.count--,this.count===0){if(this.stylesheets)xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bf=null;function xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bf=new Map,t.forEach(Sf,e),bf=null,yf.call(e))}function Sf(e,t){if(!(t.state.loading&4)){var n=bf.get(e);if(n)var r=n.get(null);else{n=new Map,bf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Cf={$$typeof:_,Provider:null,Consumer:null,_currentValue:ve,_currentValue2:ve,_threadCount:0};function wf(e,t,n,r,i,a,o,s){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Tf(e,t,n,r,i,a,o,s,c,l,u,d){return e=new wf(e,t,n,o,s,c,l,d),t=1,!0===a&&(t|=24),a=ll(3,null,null,t),e.current=a,a.stateNode=e,t=ga(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ic(a),e}function Ef(e){return e?(e=di,e):di}function Df(e,t,n,r,i,a){i=Ef(i),r.context===null?r.context=i:r.pendingContext=i,r=oc(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=sc(e,r,t),n!==null&&($l(n,e,t),cc(n,e,t))}function Of(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kf(e,t){Of(e,t),(e=e.alternate)&&Of(e,t)}function Af(e){if(e.tag===13){var t=ci(e,67108864);t!==null&&$l(t,e,67108864),kf(e,67108864)}}var jf=!0;function Mf(e,t,n,r){var i=C.T;C.T=null;var a=E.p;try{E.p=2,Pf(e,t,n,r)}finally{E.p=a,C.T=i}}function Nf(e,t,n,r){var i=C.T;C.T=null;var a=E.p;try{E.p=8,Pf(e,t,n,r)}finally{E.p=a,C.T=i}}function Pf(e,t,n,r){if(jf){var i=Ff(r);if(i===null)id(e,t,r,If,n),qf(e,r);else if(Yf(i,e,t,n,r))r.stopPropagation();else if(qf(e,r),t&4&&-1<Kf.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}Ru(a),!(G&6)&&(Vl=Ne()+500,zu(0,!1))}}break;case 13:s=ci(a,2),s!==null&&$l(s,a,2),au(),kf(a,2)}if(a=Ff(r),a===null&&id(e,t,r,If,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else id(e,t,r,null,n)}}function Ff(e){return e=cn(e),Lf(e)}var If=null;function Lf(e){if(If=null,e=St(e),e!==null){var t=fe(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=pe(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return If=e,null}function Rf(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var zf=!1,Bf=null,Vf=null,Hf=null,Uf=new Map,Wf=new Map,Gf=[],Kf=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function qf(e,t){switch(e){case`focusin`:case`focusout`:Bf=null;break;case`dragenter`:case`dragleave`:Vf=null;break;case`mouseover`:case`mouseout`:Hf=null;break;case`pointerover`:case`pointerout`:Uf.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Wf.delete(t.pointerId)}}function Jf(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&Af(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yf(e,t,n,r,i){switch(t){case`focusin`:return Bf=Jf(Bf,e,t,n,r,i),!0;case`dragenter`:return Vf=Jf(Vf,e,t,n,r,i),!0;case`mouseover`:return Hf=Jf(Hf,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Uf.set(a,Jf(Uf.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Wf.set(a,Jf(Wf.get(a)||null,e,t,n,r,i)),!0}return!1}function Xf(e){var t=St(e.target);if(t!==null){var n=fe(t);if(n!==null){if(t=n.tag,t===13){if(t=pe(n),t!==null){e.blockedOn=t,dt(e.priority,function(){if(n.tag===13){var e=Zl(),t=ci(n,e);t!==null&&$l(t,n,e),kf(n,e)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ff(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=Ct(n),t!==null&&Af(t),e.blockedOn=n,!1;t.shift()}return!0}function Qf(e,t,n){Zf(e)&&n.delete(t)}function $f(){zf=!1,Bf!==null&&Zf(Bf)&&(Bf=null),Vf!==null&&Zf(Vf)&&(Vf=null),Hf!==null&&Zf(Hf)&&(Hf=null),Uf.forEach(Qf),Wf.forEach(Qf)}function ep(e,n){e.blockedOn===n&&(e.blockedOn=null,zf||(zf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,$f)))}var tp=null;function np(e){tp!==e&&(tp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){tp===e&&(tp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Lf(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,zo(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function rp(e){function t(t){return ep(t,e)}Bf!==null&&ep(Bf,e),Vf!==null&&ep(Vf,e),Hf!==null&&ep(Hf,e),Uf.forEach(t),Wf.forEach(t);for(var n=0;n<Gf.length;n++){var r=Gf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Gf.length&&(n=Gf[0],n.blockedOn===null);)Xf(n),n.blockedOn===null&&Gf.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(Lf(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),np(n)}}}function ip(e){this._internalRoot=e}ap.prototype.render=ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;Df(n,Zl(),e,t,null,null)},ap.prototype.unmount=ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&wu(),Df(e.current,2,null,e,null,null),au(),t[ht]=null}};function ap(e){this._internalRoot=e}ap.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gf.length&&t!==0&&t<Gf[n].priority;n++);Gf.splice(n,0,e),n===0&&Xf(e)}};var op=n.version;if(op!==`19.0.0`)throw Error(i(527,op,`19.0.0`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=he(t),e=e===null?null:ge(e),e=e===null?null:e.stateNode,e};var sp={bundleType:0,version:`19.0.0`,rendererPackageName:`react-dom`,currentDispatcherRef:C,findFiberByHostInstance:St,reconcilerVersion:`19.0.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var cp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cp.isDisabled&&cp.supportsFiber)try{He=cp.inject(sp),Ue=cp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=ls,s=us,c=ds,l=null;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(l=t.unstable_transitionCallbacks)),t=Tf(e,1,!1,null,null,n,r,o,s,c,l,null),e[ht]=t.current,nd(e.nodeType===8?e.parentNode:e),new ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=Object.defineProperty,v=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t,n)=>v(e,typeof t==`symbol`?t:t+``,n);function b(e,t,n){return Math.min(Math.max(e,t),n)}function x(e,t){return typeof e!=`number`||Number.isNaN(e)?t:Math.max(0,e)}var S={ring:{value:`ring`,label:`Ring`,category:`spinner`,description:`A refined circular spinner for general loading states.`,recommendedUse:`Use for default async states inside cards, panels, and centered sections.`,defaultCount:1,minCount:1,maxCount:1},"dual-ring":{value:`dual-ring`,label:`Dual Ring`,category:`spinner`,description:`Two concentric rings rotating in opposite directions for more visual energy.`,recommendedUse:`Use when you want a richer spinner without overwhelming compact layouts.`,defaultCount:2,minCount:2,maxCount:2},"segmented-ring":{value:`segmented-ring`,label:`Segmented Ring`,category:`spinner`,description:`A segmented circular loader with precise ticks and premium motion.`,recommendedUse:`Use when you want a polished technical spinner for dashboards, analytics, or admin tools.`,defaultCount:10,minCount:6,maxCount:12},arc:{value:`arc`,label:`Arc`,category:`spinner`,description:`A thick curved sweep with strong motion and excellent legibility.`,recommendedUse:`Use on dashboards or surfaces where the loader needs a bold silhouette.`,defaultCount:1,minCount:1,maxCount:1},orbit:{value:`orbit`,label:`Orbit`,category:`spinner`,description:`A premium orbital motion with a stable central anchor.`,recommendedUse:`Use in hero states, polished overlays, or brand-forward experiences.`,defaultCount:2,minCount:2,maxCount:2},comet:{value:`comet`,label:`Comet`,category:`spinner`,description:`A luminous point with a trailing comet tail orbiting a soft ring.`,recommendedUse:`Use for premium hero states, modal loading, and brand-forward async moments.`,defaultCount:2,minCount:2,maxCount:2},halo:{value:`halo`,label:`Halo`,category:`spinner`,description:`A thin halo with soft glow pulses and minimal visual noise.`,recommendedUse:`Use in refined enterprise interfaces where the loading state should stay elegant.`,defaultCount:2,minCount:2,maxCount:2},radar:{value:`radar`,label:`Radar`,category:`spinner`,description:`A scanning beam effect with layered depth.`,recommendedUse:`Use for search, sync, telemetry, or data discovery moments.`,defaultCount:3,minCount:3,maxCount:3},astronaut:{value:`astronaut`,label:`Astronaut`,category:`surface`,description:`A floating astronaut illustration with soft starfield motion.`,recommendedUse:`Use for onboarding, empty states, playful overlays, and premium loading moments.`,defaultCount:3,minCount:3,maxCount:3},"astronaut-to-mars":{value:`astronaut-to-mars`,label:`Astronaut To Mars`,category:`surface`,description:`A tiny astronaut traveling toward Mars with a cinematic space-route feel.`,recommendedUse:`Use for route transitions, splash states, and standout brand-forward loading sequences.`,defaultCount:4,minCount:4,maxCount:4},"baseball-player":{value:`baseball-player`,label:`Baseball Player`,category:`surface`,description:`A batter driving the ball with a clean swing and curved flight path.`,recommendedUse:`Use for sports products, onboarding, and illustrative loading states with momentum.`,defaultCount:4,minCount:4,maxCount:4},"football-player":{value:`football-player`,label:`Football Player`,category:`surface`,description:`A footballer striking the ball forward with a smooth kick arc.`,recommendedUse:`Use for soccer experiences, score views, and highly expressive loading moments.`,defaultCount:4,minCount:4,maxCount:4},galaxy:{value:`galaxy`,label:`Galaxy`,category:`surface`,description:`A glowing spiral galaxy with a bright core, orbiting stars, and drifting cosmic dust.`,recommendedUse:`Use for splash screens, premium hero states, sci-fi interfaces, and high-drama loading moments.`,defaultCount:6,minCount:6,maxCount:6},pulse:{value:`pulse`,label:`Pulse`,category:`surface`,description:`A breathing pulse with soft echo rings.`,recommendedUse:`Use for ambient loading and low-noise inline states.`,defaultCount:2,minCount:2,maxCount:2},"wave-dots":{value:`wave-dots`,label:`Wave Dots`,category:`dots`,description:`Dots that ripple upward in sequence.`,recommendedUse:`Use for conversational UIs, message streams, and compact inline feedback.`,defaultCount:4,minCount:3,maxCount:8},"bouncing-dots":{value:`bouncing-dots`,label:`Bouncing Dots`,category:`dots`,description:`Classic dot rhythm with a more premium bounce curve.`,recommendedUse:`Use for buttons, compact surfaces, and general-purpose text-adjacent loading.`,defaultCount:3,minCount:3,maxCount:8},"typing-dots":{value:`typing-dots`,label:`Typing Dots`,category:`dots`,description:`A staggered fade-and-scale sequence inspired by chat typing indicators.`,recommendedUse:`Use in assistants, feeds, or message composer feedback states.`,defaultCount:3,minCount:3,maxCount:5},"grid-pulse":{value:`grid-pulse`,label:`Grid Pulse`,category:`surface`,description:`A 3x3 pulse grid that feels structured, compact, and modern.`,recommendedUse:`Use for compact surfaces, icon-scale loading, and data-heavy interface chrome.`,defaultCount:9,minCount:9,maxCount:9},"magnetic-dots":{value:`magnetic-dots`,label:`Magnetic Dots`,category:`dots`,description:`Dots that pull toward the center and relax outward in a magnetic rhythm.`,recommendedUse:`Use for inline controls, button states, and compact polished micro-feedback.`,defaultCount:4,minCount:3,maxCount:6},"spiral-dots":{value:`spiral-dots`,label:`Spiral Dots`,category:`dots`,description:`Layered dots arranged in a rotating spiral with subtle depth.`,recommendedUse:`Use for premium overlays and loaders that should feel more bespoke than a standard spinner.`,defaultCount:6,minCount:5,maxCount:8},constellation:{value:`constellation`,label:`Constellation`,category:`dots`,description:`Network-like nodes with a soft connected-system feel.`,recommendedUse:`Use for AI, search, sync, and graph-oriented product experiences.`,defaultCount:6,minCount:5,maxCount:6},"equalizer-bars":{value:`equalizer-bars`,label:`Equalizer Bars`,category:`bars`,description:`Animated bars with an audio-like rhythm.`,recommendedUse:`Use for analytics, media, and lively data surfaces.`,defaultCount:5,minCount:3,maxCount:8},"rising-bars":{value:`rising-bars`,label:`Rising Bars`,category:`bars`,description:`Clean bars that rise from a subtle track.`,recommendedUse:`Use in tables, forms, and panels where you want linear motion.`,defaultCount:4,minCount:3,maxCount:8},shimmer:{value:`shimmer`,label:`Shimmer`,category:`surface`,description:`A modern skeleton-like shimmer strip.`,recommendedUse:`Use for content placeholders, cards, and container-level loading.`,defaultCount:1,minCount:1,maxCount:1},"scan-line":{value:`scan-line`,label:`Scan Line`,category:`surface`,description:`A scanning line that sweeps across a clean data surface.`,recommendedUse:`Use for tables, data panes, security-style scans, and content inspection states.`,defaultCount:1,minCount:1,maxCount:1},"liquid-pill":{value:`liquid-pill`,label:`Liquid Pill`,category:`surface`,description:`A rounded pill loader with fluid motion and soft internal glow.`,recommendedUse:`Use for buttons, compact forms, and ambient inline loading with branded motion.`,defaultCount:2,minCount:2,maxCount:2},"ripple-stack":{value:`ripple-stack`,label:`Ripple Stack`,category:`surface`,description:`Concentric ripples that radiate outward with a calm layered cadence.`,recommendedUse:`Use for overlays, fullscreen states, and soft-focus loading moments.`,defaultCount:3,minCount:3,maxCount:4},"minimal-spinner":{value:`minimal-spinner`,label:`Minimal Spinner`,category:`spinner`,description:`A thin understated spinner with understated motion.`,recommendedUse:`Use where UI chrome should stay quiet and elegant.`,defaultCount:1,minCount:1,maxCount:1},"neon-spinner":{value:`neon-spinner`,label:`Neon Spinner`,category:`spinner`,description:`A glowing spinner with high-contrast accents.`,recommendedUse:`Use in dark surfaces, product tours, and expressive brand moments.`,defaultCount:2,minCount:2,maxCount:2},"glass-spinner":{value:`glass-spinner`,label:`Glass Spinner`,category:`spinner`,description:`A frosted, translucent spinner with soft highlights.`,recommendedUse:`Use on overlays and premium surface treatments.`,defaultCount:2,minCount:2,maxCount:2},vortex:{value:`vortex`,label:`Vortex`,category:`spinner`,description:`Multiple rotating elements that create a layered vortex effect.`,recommendedUse:`Use for major loading transitions, modals, and splash states.`,defaultCount:3,minCount:3,maxCount:3},cube:{value:`cube`,label:`Cube`,category:`surface`,description:`Rotating geometric blocks with a clean enterprise-friendly feel.`,recommendedUse:`Use in dashboards, admin tools, and product surfaces with grid structure.`,defaultCount:4,minCount:4,maxCount:4},diamond:{value:`diamond`,label:`Diamond`,category:`surface`,description:`Four angular facets that pulse in a diamond pattern.`,recommendedUse:`Use when you want geometric motion that still feels compact.`,defaultCount:4,minCount:4,maxCount:4},prism:{value:`prism`,label:`Prism`,category:`surface`,description:`Glass-like prism shards rotating with translucent layered highlights.`,recommendedUse:`Use on premium overlays, polished product shells, and modern dark themes.`,defaultCount:3,minCount:3,maxCount:3},"skeleton-blocks":{value:`skeleton-blocks`,label:`Skeleton Blocks`,category:`surface`,description:`A compact skeleton-style block layout with animated shimmer passes.`,recommendedUse:`Use for content placeholders, side panels, cards, and list loading states.`,defaultCount:4,minCount:4,maxCount:4}},ee=Object.values(S);function te(e){return S[e]}function ne(e,t){let n=te(e);return b(t.count??n.defaultCount,n.minCount,n.maxCount)}function re(e,t){let n=e??t;return typeof n==`number`?`${n}px`:n}function ie(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ae(e,t){Object.entries(t).forEach(([t,n])=>{let r=t.startsWith(`--`)?t:ie(t);if(n==null){e.style.removeProperty(r);return}e.style.setProperty(r,C(n))})}function C(e){return typeof e==`number`?String(e):e??``}function w(e,t){let n=e.replace(`#`,``).trim(),r=n.length===3||n.length===4?n.split(``).map(e=>`${e}${e}`).join(``):n;if(r.length!==6&&r.length!==8)return`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`;let i=parseInt(r.slice(0,2),16),a=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16),s=r.length===8?parseInt(r.slice(6,8),16)/255:1;return`rgba(${i}, ${a}, ${o}, ${Math.max(0,Math.min(1,s*t))})`}function oe(e,t){let n=e.replace(/rgba?\(/,``).replace(`)`,``).split(`,`).map(e=>e.trim());return n.length<3?`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`:`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t})`}function se(e,t){let n=Math.max(0,Math.min(1,t));return e.startsWith(`#`)?w(e,n):e.startsWith(`rgb`)?oe(e,n):`color-mix(in srgb, ${e} ${Math.round(n*100)}%, transparent)`}var T={variant:`ring`,size:`40px`,color:`var(--rvl-theme-color)`,secondaryColor:`var(--rvl-theme-secondary)`,speed:900,thickness:3,opacity:1,background:`var(--rvl-theme-overlay)`,overlay:!1,blur:12,radius:`18px`,gap:8,direction:`normal`,label:``,inline:!1,centered:!1,fullscreen:!1,visible:!1,delay:0,minVisible:240,zIndex:1600,className:``,style:{},ariaLive:`polite`,target:null};function ce(e={}){let t=e.variant??T.variant,n=te(t),r=e.color??T.color,i=e.secondaryColor??se(r,.2),a=Object.prototype.hasOwnProperty.call(e,`label`),o={variant:t,size:re(e.size,T.size),color:r,secondaryColor:i,speed:b(x(e.speed,T.speed),200,8e3),thickness:b(x(e.thickness,T.thickness),1,16),opacity:b(typeof e.opacity==`number`?e.opacity:T.opacity,.12,1),background:e.background??T.background,overlay:e.overlay??T.overlay,blur:b(x(e.blur,T.blur),0,32),radius:re(e.radius,T.radius),gap:b(x(e.gap,T.gap),0,48),count:ne(t,e),direction:e.direction??T.direction,label:a?e.label??``:T.label,inline:e.inline??T.inline,centered:e.centered??T.centered,fullscreen:e.fullscreen??T.fullscreen,visible:e.visible??T.visible,delay:b(x(e.delay,T.delay),0,3e4),minVisible:b(x(e.minVisible,T.minVisible),0,6e4),zIndex:b(x(e.zIndex,T.zIndex),1,2147483647),className:e.className?.trim()??T.className,style:e.style??{},ariaLive:e.ariaLive??T.ariaLive,target:e.target??T.target};return o.fullscreen&&(o.overlay=!0,o.inline=!1,o.centered=!0),o.inline&&(o.overlay=!1,o.fullscreen=!1),!a&&!o.label&&(o.label=`Loading with ${n.label.toLowerCase()}`),o}var le=`
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
`,ue=`
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
`,de=`.rvl-variant--`,fe=new Map;function pe(e){let t=`${de}${e}`,n=[],r=0;for(;r<ue.length;){for(;r<ue.length&&/\s/.test(ue[r]??``);)r+=1;if(r>=ue.length)break;let e=r;for(;r<ue.length&&ue[r]!==`{`;)r+=1;if(r>=ue.length)break;let i=ue.slice(e,r).trim();r+=1;let a=r,o=1;for(;r<ue.length&&o>0;){let e=ue[r];e===`{`?o+=1:e===`}`&&--o,r+=1}if(!i.includes(de))continue;let s=i.split(`,`).map(e=>e.trim()).filter(Boolean).filter(e=>e.includes(t));if(!s.length)continue;let c=ue.slice(a,r-1).trimEnd();n.push(`${s.join(`,
`)} {
${c}
}`)}return n.join(`

`)}function me(e){let t=fe.get(e);if(t)return t;let n=pe(e);return fe.set(e,n),n}function he(e){return e?`${le}
${me(e)}`:`${le}
${ue}`}var ge=le;he();function _e(){return typeof window<`u`&&typeof document<`u`}var E=`data-rvl-loading-base`,ve=`data-rvl-loading-variant`;function ye(e){if(e.head.querySelector(`[${E}]`))return;let t=e.createElement(`style`);t.setAttribute(E,`true`),t.textContent=ge,e.head.append(t)}function be(e,t){if(t.head.querySelector(`[${ve}="${e}"]`))return;let n=me(e);if(!n.trim())return;let r=t.createElement(`style`);r.setAttribute(ve,e),r.textContent=n,t.head.append(r)}function xe(e,t=document){_e()&&(ye(t),be(e,t))}function D(e,t=document){if(typeof e==`string`){let n=t.querySelector(e);if(!n)throw Error(`@revivejs/loading could not find target "${e}".`);return n}return e instanceof HTMLElement?e:t.body}function O(e){if(e===document.body||e===document.documentElement)return()=>void 0;let t=window.getComputedStyle(e).position;if(t&&t!==`static`)return()=>void 0;let n=e.style.position;return e.style.position=`relative`,()=>{if(n){e.style.position=n;return}e.style.removeProperty(`position`)}}var Se=0;function Ce(e=`rvl`){return Se+=1,`${e}-${Se}`}var we=class{constructor(e={}){if(y(this,`id`,Ce()),y(this,`element`),y(this,`state`,{mounted:!1,visible:!1,destroyed:!1,pending:null}),y(this,`bodyElement`),y(this,`visualElement`),y(this,`labelElement`),y(this,`srElement`),y(this,`options`),y(this,`mountedTarget`,null),y(this,`restorePositionContext`,null),y(this,`showTimeoutId`,null),y(this,`hideTimeoutId`,null),y(this,`showResolver`,null),y(this,`hideResolver`,null),y(this,`shownAt`,0),!_e())throw Error(`@revivejs/loading requires a browser-like DOM to create loaders.`);this.options=ce(e),xe(this.options.variant),this.element=document.createElement(`div`),this.element.dataset.rvlLoader=this.id,this.bodyElement=document.createElement(`div`),this.bodyElement.className=`rvl-body`,this.visualElement=document.createElement(`div`),this.visualElement.className=`rvl-visual`,this.visualElement.setAttribute(`aria-hidden`,`true`),this.labelElement=document.createElement(`span`),this.labelElement.className=`rvl-label`,this.srElement=document.createElement(`span`),this.srElement.className=`rvl-sr-only`,this.bodyElement.append(this.visualElement,this.labelElement,this.srElement),this.element.append(this.bodyElement),this.render(),(this.options.target||this.options.fullscreen)&&this.mount(this.options.target),this.options.visible?this.show():this.element.hidden=!0}getOptions(){return{...this.options,style:{...this.options.style}}}mount(e){this.assertAlive();let t=this.resolveMountTarget(e);return this.mountedTarget===t&&this.state.mounted?this:(this.unmount(),this.options.overlay&&!this.options.fullscreen&&(this.restorePositionContext=O(t)),t.append(this.element),this.mountedTarget=t,this.state.mounted=!0,this)}unmount(){return this.element.parentElement&&this.element.parentElement.removeChild(this.element),this.restorePositionContext&&=(this.restorePositionContext(),null),this.mountedTarget=null,this.state.mounted=!1,this}show(){return this.assertAlive(),this.state.visible&&this.state.pending!==`hide`?Promise.resolve():(this.clearHideTimer(!0),this.state.pending=`show`,this.state.mounted||this.mount(this.options.target),new Promise(e=>{let t=()=>{this.state.pending=null,this.state.visible=!0,this.shownAt=Date.now(),this.element.hidden=!1,this.syncVisibility(),this.showResolver?.(),this.showResolver=null};if(this.clearShowTimer(!0),this.showResolver=e,this.options.delay>0){this.showTimeoutId=window.setTimeout(t,this.options.delay);return}t()}))}hide(){return this.assertAlive(),!this.state.visible&&this.state.pending!==`show`?(this.syncVisibility(),Promise.resolve()):(this.clearShowTimer(!0),this.state.pending=`hide`,new Promise(e=>{let t=()=>{this.state.pending=null,this.state.visible=!1,this.syncVisibility(),this.hideResolver?.(),this.hideResolver=null};if(this.clearHideTimer(!0),this.hideResolver=e,!this.state.visible){t();return}let n=this.shownAt?Date.now()-this.shownAt:0,r=Math.max(0,this.options.minVisible-n);if(r>0){this.hideTimeoutId=window.setTimeout(t,r);return}t()}))}toggle(e){return(typeof e==`boolean`?e:!this.state.visible)?this.show():this.hide()}update(e){this.assertAlive();let t=this.resolveMountTarget();this.options=ce({...this.options,...e,style:{...this.options.style,...e.style??{}}}),xe(this.options.variant),this.render();let n=this.resolveMountTarget();return t!==n&&this.state.mounted&&this.mount(n),this}destroy(){this.state.destroyed||(this.clearShowTimer(!0),this.clearHideTimer(!0),this.unmount(),this.state.destroyed=!0)}render(){let e=te(this.options.variant);this.element.className=[`rvl-loader`,`rvl-variant--${this.options.variant}`,this.options.inline?`is-inline`:`is-block`,this.options.overlay?`is-overlay`:``,this.options.fullscreen?`is-fullscreen`:``,this.options.centered?`is-centered`:``,this.options.label?`has-label`:``,this.options.className].filter(Boolean).join(` `),this.element.setAttribute(`role`,`status`),this.element.setAttribute(`aria-live`,this.options.ariaLive),this.element.setAttribute(`aria-atomic`,`true`),this.element.setAttribute(`aria-busy`,this.state.visible?`true`:`false`),this.element.dataset.variant=this.options.variant,this.element.style.cssText=``,this.element.style.setProperty(`--rvl-size`,this.options.size),this.element.style.setProperty(`--rvl-color`,this.options.color),this.element.style.setProperty(`--rvl-secondary-color`,this.options.secondaryColor),this.element.style.setProperty(`--rvl-speed`,`${this.options.speed}ms`),this.element.style.setProperty(`--rvl-thickness`,`${this.options.thickness}px`),this.element.style.setProperty(`--rvl-opacity`,`${this.options.opacity}`),this.element.style.setProperty(`--rvl-background`,this.options.background),this.element.style.setProperty(`--rvl-blur`,`${this.options.blur}px`),this.element.style.setProperty(`--rvl-radius`,this.options.radius),this.element.style.setProperty(`--rvl-gap`,`${this.options.gap}px`),this.element.style.setProperty(`--rvl-z-index`,`${this.options.zIndex}`),this.element.style.setProperty(`animation-direction`,this.options.direction),ae(this.element,this.options.style),this.labelElement.textContent=this.options.label,this.srElement.textContent=this.options.label,this.options.label?this.element.setAttribute(`aria-label`,this.options.label):this.element.removeAttribute(`aria-label`),this.element.title=e.label,this.visualElement.replaceChildren();for(let e=0;e<this.options.count;e+=1){let t=document.createElement(`span`);t.className=`rvl-part`,t.style.setProperty(`--part-index`,String(e)),this.visualElement.append(t)}this.syncVisibility()}syncVisibility(){this.element.hidden=!this.state.visible,this.element.setAttribute(`aria-busy`,this.state.visible?`true`:`false`),this.element.setAttribute(`aria-hidden`,this.state.visible?`false`:`true`)}resolveMountTarget(e){return this.options.fullscreen?document.body:D(e??this.options.target)}clearShowTimer(e=!1){this.showTimeoutId!=null&&(window.clearTimeout(this.showTimeoutId),this.showTimeoutId=null),e&&this.showResolver&&(this.showResolver(),this.showResolver=null)}clearHideTimer(e=!1){this.hideTimeoutId!=null&&(window.clearTimeout(this.hideTimeoutId),this.hideTimeoutId=null),e&&this.hideResolver&&(this.hideResolver(),this.hideResolver=null)}assertAlive(){if(this.state.destroyed)throw Error(`@revivejs/loading cannot operate on a destroyed loader.`)}};function Te(e={}){return new we(e)}var k=c(u(),1),Ee=typeof window<`u`?k.useLayoutEffect:k.useEffect,De=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),A=o(((e,t)=>{t.exports=De()}))();function Oe(e,t,n){return e.current?n.current?(n.current.update({...t,target:e.current}),n.current):(n.current=Te({...t,target:e.current,visible:!1}),n.current):null}var ke=(0,k.forwardRef)(function({options:e={},visible:t=!0,onCreate:n,onShown:r,onHidden:i,onUpdated:a,onDestroyed:o,...s},c){let l=(0,k.useRef)(null),u=(0,k.useRef)(null);return(0,k.useImperativeHandle)(c,()=>({getInstance(){return u.current},show(){return u.current?u.current.show():Promise.resolve()},hide(){return u.current?u.current.hide():Promise.resolve()},toggle(e){return u.current?u.current.toggle(e):Promise.resolve()},update(e){u.current&&u.current.update(e)},destroy(){if(u.current){let e=u.current;e.destroy(),u.current=null,o?.(e)}}}),[o]),Ee(()=>{let t=Oe(l,e,u);if(t)return n?.(t),()=>{if(u.current){let e=u.current;e.destroy(),u.current=null,o?.(e)}}},[]),(0,k.useEffect)(()=>{let n=Oe(l,e,u);if(n){if(a?.(n),t){n.show().then(()=>{r?.(n)});return}n.hide().then(()=>{i?.(n)})}},[e,t,i,r,a]),(0,A.jsx)(`div`,{ref:l,...s})});function Ae(e,t,n){if(!e.current)return null;let r={overlay:!0,centered:!0,...t,target:e.current};return n.current?(n.current.update(r),n.current):(n.current=Te({...r,visible:!1}),n.current)}var je=(0,k.forwardRef)(function({children:e,options:t={},visible:n=!0,onCreate:r,onShown:i,onHidden:a,onUpdated:o,onDestroyed:s,style:c,...l},u){let d=(0,k.useRef)(null),f=(0,k.useRef)(null);return(0,k.useImperativeHandle)(u,()=>({getInstance(){return f.current},show(){return f.current?f.current.show():Promise.resolve()},hide(){return f.current?f.current.hide():Promise.resolve()},toggle(e){return f.current?f.current.toggle(e):Promise.resolve()},update(e){f.current&&f.current.update(e)},destroy(){if(f.current){let e=f.current;e.destroy(),f.current=null,s?.(e)}}}),[s]),Ee(()=>{let e=Ae(d,t,f);if(e)return r?.(e),()=>{if(f.current){let e=f.current;e.destroy(),f.current=null,s?.(e)}}},[]),(0,k.useEffect)(()=>{let e=Ae(d,t,f);if(e){if(o?.(e),n){e.show().then(()=>{i?.(e)});return}e.hide().then(()=>{a?.(e)})}},[t,n,a,i,o]),(0,A.jsx)(`div`,{ref:d,style:{position:`relative`,...c},...l,children:e})});function Me(e,t,n){let r={...e,...n||{}};return t!==void 0&&(r.target=t),r}function Ne(e={}){let t=(0,k.useRef)(null),n=(0,k.useRef)(e);n.current=e,(0,k.useEffect)(()=>()=>{t.current&&=(t.current.destroy(),null)},[]);function r(e,r){let i=Me(n.current,e,r);return t.current?(i.target!==void 0&&t.current.mount(i.target),t.current.update(i),t.current):(t.current=Te({...i,visible:!1}),t.current)}return{create(e,t){return r(e,t)},mount(e,t){return r(e,t)},async show(e,t){let n=r(e,t);return await n.show(),n},hide(){return t.current?t.current.hide():Promise.resolve()},toggle(e){return t.current?t.current.toggle(e):Promise.resolve()},update(e){return t.current?(t.current.update(e),t.current):null},destroy(){t.current&&=(t.current.destroy(),null)},getInstance(){return t.current}}}var Pe=g(),Fe=(ee||[]).map(e=>({value:e.value,label:e.label})),Ie=[{id:`default`,label:`Default`,description:`A clean centered stage for checking size, color, speed, and label choices.`},{id:`dashboard`,label:`Dashboard`,description:`Keep product cards visible while the active region stays anchored to a loading state.`},{id:`table`,label:`Table`,description:`A common analytics refresh pattern where the user should keep their table context.`},{id:`page`,label:`Page`,description:`Simulate a route-level or workspace-level loading state inside the docs shell.`},{id:`modal`,label:`Modal`,description:`Load only the modal body while keeping the dialog frame stable.`},{id:`chart`,label:`Chart`,description:`Useful for analytical surfaces where movement should feel intentional and data-centric.`},{id:`upload`,label:`Upload`,description:`A drop zone preview for uploads, media workflows, and file-heavy forms.`}],Le={variant:`orbit`,size:60,speed:900,color:`#2563eb`,secondaryColor:`#c7d2fe`,overlay:!1,fullscreen:!1,centered:!0,label:`Loading preview`,delay:0,minVisible:240,reducedMotion:!1};function Re(e,t){let n=``;for(let r=0;r<t;r+=1)n+=e;return n}function ze(e){return String(e).split(`'`).join(`\\'`)}function Be(e){let t=e.fullscreen,n=e.overlay||t,r={variant:e.variant,size:e.size,speed:e.speed,color:e.color,secondaryColor:e.secondaryColor,centered:n?!0:e.centered,delay:e.delay,minVisible:e.minVisible};return e.label&&(r.label=e.label),n&&(r.overlay=!0),t&&(r.background=`rgba(15, 23, 42, 0.54)`),r}function Ve(e,t,n=!1){let r=Re(` `,t),i=Re(` `,t+2),a=[`{`,`${i}variant: '${e.variant}',`,`${i}size: ${e.size},`,`${i}speed: ${e.speed},`,`${i}color: '${e.color}',`,`${i}secondaryColor: '${e.secondaryColor}',`];return(e.overlay||e.fullscreen||n)&&a.push(`${i}overlay: true,`),e.fullscreen&&(a.push(`${i}fullscreen: true,`),a.push(`${i}background: 'rgba(15, 23, 42, 0.54)',`)),e.centered&&!e.fullscreen&&a.push(`${i}centered: true,`),e.label&&a.push(`${i}label: '${ze(e.label)}',`),e.delay>0&&a.push(`${i}delay: ${e.delay},`),e.minVisible!==240&&a.push(`${i}minVisible: ${e.minVisible},`),a.push(`${r}}`),a.join(`
`)}function He(e){return e===`modal`?[`<div className="modal-shell">`,`  <div className="modal-header" />`,`  <div className="modal-body">`,`    <div className="modal-line" />`,`    <div className="modal-line short" />`,`    <div className="modal-line" />`,`  </div>`,`</div>`].join(`
`):e===`table`?[`<div className="table-shell">`,`  <div className="table-head">`,`    <span>Status</span>`,`    <span>Customer</span>`,`    <span>Plan</span>`,`    <span>MRR</span>`,`  </div>`,`  <div className="table-row">...</div>`,`  <div className="table-row">...</div>`,`</div>`].join(`
`):e===`chart`?[`<div className="chart-panel">`,`  <div className="chart-bar" />`,`  <div className="chart-bar" />`,`  <div className="chart-bar" />`,`</div>`].join(`
`):e===`upload`?[`<div className="upload-zone">`,`  <div className="upload-icon" />`,`  <p>Drop files here</p>`,`</div>`].join(`
`):e===`page`?[`<section className="page-shell">`,`  <header className="page-topbar" />`,`  <div className="page-grid">...</div>`,`</section>`].join(`
`):[`<section className="dashboard-cards">`,`  <div className="card" />`,`  <div className="card" />`,`  <div className="card card-wide" />`,`</section>`].join(`
`)}function Ue(e,t){return e.fullscreen?[`import { useLoadingController } from '@stackline/react-loading';`,``,`export function WorkspaceAction() {`,`  const loading = useLoadingController();`,``,`  async function showLoader() {`,`    const instance = await loading.show(document.body, ${Ve(e,6,!0)});`,`    window.setTimeout(() => {`,`      void instance.hide();`,`    }, 1200);`,`  }`,``,`  return <button onClick={showLoader}>Show fullscreen loader</button>;`,`}`].join(`
`):t===`default`&&!e.overlay?[`import { Loading } from '@stackline/react-loading';`,``,`export function LoadingPreview() {`,`  return (`,`    <Loading`,`      visible={isLoading}`,`      options=${Ve(e,6)}`,`      style={{ minHeight: 220 }}`,`    />`,`  );`,`}`].join(`
`):[`import { LoadingOverlay } from '@stackline/react-loading';`,``,`export function LoadingSurface() {`,`  return (`,`    <LoadingOverlay`,`      visible={isLoading}`,`      options=${Ve(e,6,!0)}`,`    >`,He(t).split(`
`).map(e=>`      ${e}`).join(`
`),`    </LoadingOverlay>`,`  );`,`}`].join(`
`)}function We({fullscreen:e,options:t,surface:n,visible:r}){return n===`default`&&!t.overlay?(0,A.jsx)(`div`,{className:`playground-surface playground-surface--clean ${e?`is-fullscreen-simulated`:``}`,children:(0,A.jsx)(ke,{visible:r,options:t,className:`playground-loader-host`,style:{minHeight:e?400:320,width:`100%`}})}):n===`table`?(0,A.jsxs)(je,{visible:r,options:t,className:`playground-surface surface-table ${e?`is-fullscreen-simulated`:``}`,children:[(0,A.jsxs)(`div`,{className:`playground-table-head`,children:[(0,A.jsx)(`span`,{children:`Status`}),(0,A.jsx)(`span`,{children:`Customer`}),(0,A.jsx)(`span`,{children:`Plan`}),(0,A.jsx)(`span`,{children:`MRR`})]}),Array.from({length:4},(e,t)=>(0,A.jsxs)(`div`,{className:`playground-table-row`,children:[(0,A.jsx)(`span`,{children:(0,A.jsx)(`i`,{})}),(0,A.jsx)(`span`,{children:(0,A.jsx)(`i`,{})}),(0,A.jsx)(`span`,{children:(0,A.jsx)(`i`,{})}),(0,A.jsx)(`span`,{children:(0,A.jsx)(`i`,{})})]},`row-${t}`))]}):n===`page`?(0,A.jsxs)(je,{visible:r,options:t,className:`playground-surface surface-page ${e?`is-fullscreen-simulated`:``}`,children:[(0,A.jsx)(`div`,{className:`page-topbar`}),(0,A.jsxs)(`div`,{className:`page-grid`,children:[(0,A.jsx)(`div`,{className:`page-tile`}),(0,A.jsx)(`div`,{className:`page-tile`}),(0,A.jsx)(`div`,{className:`page-tile`}),(0,A.jsx)(`div`,{className:`page-tile`})]})]}):n===`modal`?(0,A.jsx)(`div`,{className:`playground-surface surface-modal ${e?`is-fullscreen-simulated`:``}`,children:(0,A.jsxs)(`div`,{className:`modal-shell`,children:[(0,A.jsx)(`div`,{className:`modal-header`}),(0,A.jsxs)(je,{visible:r,options:t,className:`modal-body`,children:[(0,A.jsx)(`div`,{className:`modal-line`}),(0,A.jsx)(`div`,{className:`modal-line short`}),(0,A.jsx)(`div`,{className:`modal-line`})]})]})}):n===`chart`?(0,A.jsxs)(je,{visible:r,options:t,className:`playground-surface surface-chart ${e?`is-fullscreen-simulated`:``}`,children:[(0,A.jsx)(`div`,{className:`chart-bar`,style:{height:`28%`}}),(0,A.jsx)(`div`,{className:`chart-bar`,style:{height:`46%`}}),(0,A.jsx)(`div`,{className:`chart-bar`,style:{height:`60%`}}),(0,A.jsx)(`div`,{className:`chart-bar`,style:{height:`38%`}}),(0,A.jsx)(`div`,{className:`chart-bar`,style:{height:`72%`}}),(0,A.jsx)(`div`,{className:`chart-bar`,style:{height:`55%`}})]}):n===`upload`?(0,A.jsxs)(je,{visible:r,options:t,className:`playground-surface surface-upload ${e?`is-fullscreen-simulated`:``}`,children:[(0,A.jsx)(`div`,{className:`upload-icon`}),(0,A.jsx)(`div`,{className:`upload-title`,children:`Drop files here`}),(0,A.jsx)(`div`,{className:`upload-caption`,children:`PNG, SVG, PDF up to 25 MB`})]}):(0,A.jsxs)(je,{visible:r,options:t,className:`playground-surface surface-card-grid ${e?`is-fullscreen-simulated`:``}`,children:[(0,A.jsx)(`div`,{className:`surface-card-cell`}),(0,A.jsx)(`div`,{className:`surface-card-cell`}),(0,A.jsx)(`div`,{className:`surface-card-cell wide`})]})}function Ge(){let[e,t]=(0,k.useState)(Le),[n,r]=(0,k.useState)(`default`),[i,a]=(0,k.useState)(`Copy code`),[o,s]=(0,k.useState)(!0),c=Be(e),l=Ue(e,n);function u(e,n){t(t=>({...t,[e]:n}))}function d(){s(!1),window.setTimeout(()=>{s(!0)},40)}async function f(){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(l);else{let e=document.createElement(`textarea`);e.value=l,e.setAttribute(`readonly`,`true`),e.style.position=`absolute`,e.style.left=`-9999px`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e)}a(`Copied`)}catch{a(`Copy failed`)}window.setTimeout(()=>{a(`Copy code`)},1200)}let p=Ie.find(e=>e.id===n)?.description||``;return(0,A.jsxs)(`section`,{className:`demo-card playground-card`,id:`playground`,children:[(0,A.jsx)(`div`,{className:`demo-head`,children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Playground`}),(0,A.jsx)(`p`,{children:`Use the React wrapper against the same kind of interactive preview shell as the core docs.`})]})}),(0,A.jsxs)(`div`,{className:`playground-shell`,children:[(0,A.jsxs)(`form`,{className:`playground-controls`,children:[(0,A.jsxs)(`div`,{className:`field`,children:[(0,A.jsx)(`label`,{htmlFor:`playground-variant`,children:`Variant`}),(0,A.jsx)(`select`,{id:`playground-variant`,value:e.variant,onChange:e=>u(`variant`,e.target.value),children:Fe.map(e=>(0,A.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,A.jsxs)(`div`,{className:`field`,children:[(0,A.jsxs)(`label`,{htmlFor:`playground-size`,children:[`Size `,(0,A.jsxs)(`span`,{children:[e.size,`px`]})]}),(0,A.jsx)(`input`,{id:`playground-size`,type:`range`,min:`18`,max:`96`,value:e.size,onChange:e=>u(`size`,Number(e.target.value))})]}),(0,A.jsxs)(`div`,{className:`field`,children:[(0,A.jsxs)(`label`,{htmlFor:`playground-speed`,children:[`Speed `,(0,A.jsxs)(`span`,{children:[e.speed,`ms`]})]}),(0,A.jsx)(`input`,{id:`playground-speed`,type:`range`,min:`300`,max:`2200`,step:`50`,value:e.speed,onChange:e=>u(`speed`,Number(e.target.value))})]}),(0,A.jsxs)(`div`,{className:`field two-up`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{htmlFor:`playground-color`,children:`Primary`}),(0,A.jsx)(`input`,{id:`playground-color`,type:`color`,value:e.color,onChange:e=>u(`color`,e.target.value)})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{htmlFor:`playground-secondary-color`,children:`Secondary`}),(0,A.jsx)(`input`,{id:`playground-secondary-color`,type:`color`,value:e.secondaryColor,onChange:e=>u(`secondaryColor`,e.target.value)})]})]}),(0,A.jsxs)(`div`,{className:`field`,children:[(0,A.jsx)(`label`,{htmlFor:`playground-label`,children:`Label`}),(0,A.jsx)(`input`,{id:`playground-label`,type:`text`,value:e.label,onChange:e=>u(`label`,e.target.value)})]}),(0,A.jsxs)(`div`,{className:`field two-up`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{htmlFor:`playground-delay`,children:`Delay`}),(0,A.jsx)(`input`,{id:`playground-delay`,type:`number`,min:`0`,step:`50`,value:e.delay,onChange:e=>u(`delay`,Number(e.target.value))})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{htmlFor:`playground-min-visible`,children:`Min visible`}),(0,A.jsx)(`input`,{id:`playground-min-visible`,type:`number`,min:`0`,step:`50`,value:e.minVisible,onChange:e=>u(`minVisible`,Number(e.target.value))})]})]}),(0,A.jsxs)(`div`,{className:`toggle-row`,children:[(0,A.jsxs)(`label`,{children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:e.overlay,onChange:e=>u(`overlay`,e.target.checked)}),` Overlay`]}),(0,A.jsxs)(`label`,{children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:e.fullscreen,onChange:e=>u(`fullscreen`,e.target.checked)}),` Fullscreen`]}),(0,A.jsxs)(`label`,{children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:e.centered,onChange:e=>u(`centered`,e.target.checked)}),` Centered`]}),(0,A.jsxs)(`label`,{children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:e.reducedMotion,onChange:e=>u(`reducedMotion`,e.target.checked)}),` Reduced motion`]})]}),(0,A.jsxs)(`div`,{className:`playground-actions`,children:[(0,A.jsx)(`button`,{type:`button`,onClick:d,children:`Replay timing`}),(0,A.jsx)(`button`,{type:`button`,className:`ghost-button`,onClick:f,children:i})]})]}),(0,A.jsxs)(`div`,{className:`playground-preview`,children:[(0,A.jsx)(`div`,{className:`playground-preview-tabs`,role:`tablist`,"aria-label":`Preview surfaces`,children:Ie.map(e=>(0,A.jsx)(`button`,{type:`button`,role:`tab`,className:`playground-preview-tab ${n===e.id?`is-active`:``}`,"aria-selected":n===e.id,onClick:()=>r(e.id),children:e.label},e.id))}),(0,A.jsx)(`p`,{className:`playground-description`,children:p}),(0,A.jsx)(`div`,{className:`playground-stage ${e.reducedMotion?`is-reduced-motion`:``}`,children:(0,A.jsx)(We,{fullscreen:e.fullscreen,options:c,surface:n,visible:o})}),(0,A.jsx)(`pre`,{className:`code-block code-preview`,children:l})]})]})]})}var Ke=`npm install @stackline/react-loading`,qe=`import { Loading } from '@stackline/react-loading';

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
}`,Je=`import { LoadingOverlay } from '@stackline/react-loading';

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
}`,Ye=`import { useLoadingController } from '@stackline/react-loading';

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
}`;function Xe(e){return`${new Date().toLocaleTimeString(`en-US`,{hour12:!1})}  ${e}`}function Ze({code:e,compact:t=!1}){let[n,r]=(0,k.useState)(`Copy`);async function i(){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,`true`),t.style.position=`absolute`,t.style.left=`-9999px`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t)}r(`Copied`)}catch{r(`Copy failed`)}window.setTimeout(()=>{r(`Copy`)},1200)}return(0,A.jsxs)(`div`,{className:`code-block-shell ${t?`is-compact`:``}`,children:[(0,A.jsx)(`div`,{className:`code-block-head`,children:(0,A.jsx)(`button`,{type:`button`,className:`ghost-button copy-button`,onClick:i,children:n})}),(0,A.jsx)(`pre`,{className:`code-block ${t?`compact`:``}`,children:e})]})}function Qe({title:e,description:t,code:n,children:r}){return(0,A.jsxs)(`section`,{className:`demo-card`,children:[(0,A.jsx)(`div`,{className:`demo-head`,children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:e}),(0,A.jsx)(`p`,{children:t})]})}),n?(0,A.jsx)(Ze,{code:n}):null,r]})}function $e({reactLine:e}){let t=Ne(),[n,r]=(0,k.useState)([Xe(`React ${e} docs ready.`)]),[i,a]=(0,k.useState)(!0),[o,s]=(0,k.useState)(!1);function c(e){r(t=>[Xe(e),...t].slice(0,16))}async function l(){c(`Showing fullscreen loader from useLoadingController.`);let e=await t.show(document.body,{fullscreen:!0,overlay:!0,centered:!0,variant:`galaxy`,color:`#38bdf8`,secondaryColor:`#bfdbfe`,minVisible:500,label:`Loading workspace`});window.setTimeout(()=>{e.hide().then(()=>{c(`Fullscreen loader hidden.`)})},1300)}function u(){a(!1),window.setTimeout(()=>{a(!0),c(`Dashboard overlay replayed.`)},40)}function d(){s(!0),c(`Button loading state activated.`),window.setTimeout(()=>{s(!1),c(`Button loading state cleared.`)},1200)}return(0,A.jsxs)(`div`,{className:`app-shell`,children:[(0,A.jsxs)(`header`,{className:`hero-grid`,children:[(0,A.jsxs)(`section`,{className:`hero-card hero-main`,children:[(0,A.jsxs)(`span`,{className:`badge`,children:[`React `,e,` · Loading wrapper`]}),(0,A.jsx)(`h1`,{children:`@stackline/react-loading`}),(0,A.jsx)(`p`,{children:`Maintained React bindings for the ReviveJS loading toolkit. Keep the loading engine framework-agnostic, then add React-native ergonomics for declarative components, container overlays, and fullscreen programmatic states.`}),(0,A.jsxs)(`div`,{className:`hero-actions`,children:[(0,A.jsx)(`a`,{className:`button primary`,href:`#playground`,children:`Open playground`}),(0,A.jsx)(`a`,{className:`button secondary`,href:`https://github.com/alexandroit/react-loading#readme`,rel:`noreferrer`,target:`_blank`,children:`README`})]}),(0,A.jsxs)(`div`,{className:`hero-notes`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Declarative`}),` Use a plain React component when the loader itself is what you want to render.`]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Overlay-ready`}),` Wrap a card, table, modal body, chart shell, or upload zone without rewriting the surface.`]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Programmatic`}),` Use a hook for fullscreen or route-level loading where document-level control is useful.`]})]})]}),(0,A.jsxs)(`section`,{className:`hero-card hero-setup`,children:[(0,A.jsx)(`h2`,{children:`Setup in 3 steps`}),(0,A.jsxs)(`div`,{className:`step`,children:[(0,A.jsx)(`span`,{children:`1`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Install the wrapper`}),(0,A.jsx)(Ze,{code:Ke,compact:!0})]})]}),(0,A.jsxs)(`div`,{className:`step`,children:[(0,A.jsx)(`span`,{children:`2`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Render a component or wrap a surface`}),(0,A.jsx)(Ze,{code:`<Loading visible options={{ variant: 'orbit' }} />`,compact:!0})]})]}),(0,A.jsxs)(`div`,{className:`step`,children:[(0,A.jsx)(`span`,{children:`3`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Use a hook for fullscreen workflows`}),(0,A.jsx)(Ze,{code:`const loading = useLoadingController();`,compact:!0})]})]})]})]}),(0,A.jsx)(`div`,{className:`playground-row`,children:(0,A.jsx)(Ge,{})}),(0,A.jsxs)(`main`,{className:`content-grid`,id:`examples`,children:[(0,A.jsxs)(`section`,{className:`examples-column`,children:[(0,A.jsx)(Qe,{title:`Basic component`,description:`Use the React component when the loading element itself is the thing being rendered in the tree.`,code:qe,children:(0,A.jsx)(`div`,{className:`surface-frame`,children:(0,A.jsx)(ke,{visible:!0,options:{variant:`orbit`,size:56,centered:!0,color:`#2563eb`,secondaryColor:`#bfdbfe`,label:`Loading dashboard`},className:`component-stage`,style:{minHeight:220}})})}),(0,A.jsxs)(Qe,{title:`Dashboard card overlay`,description:`Wrap an existing card surface and let the loader overlay the active region while the rest of the UI stays stable.`,code:Je,children:[(0,A.jsx)(`div`,{className:`inline-actions`,children:(0,A.jsx)(`button`,{type:`button`,className:`button secondary`,onClick:u,children:`Replay card loader`})}),(0,A.jsxs)(je,{visible:i,options:{overlay:!0,centered:!0,variant:`glass-spinner`,color:`#2563eb`,secondaryColor:`#dbeafe`,label:`Loading revenue card`,minVisible:400},className:`card-shell`,children:[(0,A.jsx)(`div`,{className:`card-metric`,children:`$128,400`}),(0,A.jsx)(`div`,{className:`card-caption`,children:`Quarterly expansion pipeline`}),(0,A.jsxs)(`div`,{className:`card-bars`,children:[(0,A.jsx)(`span`,{style:{height:`46%`}}),(0,A.jsx)(`span`,{style:{height:`68%`}}),(0,A.jsx)(`span`,{style:{height:`54%`}}),(0,A.jsx)(`span`,{style:{height:`79%`}})]})]})]}),(0,A.jsx)(Qe,{title:`Button and submit states`,description:`Use the same overlay wrapper around a button group when a request should stay anchored to the action that triggered it.`,children:(0,A.jsx)(`div`,{className:`button-surface`,children:(0,A.jsx)(je,{visible:o,options:{overlay:!0,centered:!0,variant:`liquid-pill`,size:42,label:``},className:`button-shell`,children:(0,A.jsx)(`button`,{type:`button`,className:`cta-button`,onClick:d,children:`Sync invoice`})})})}),(0,A.jsx)(Qe,{title:`Fullscreen and programmatic hook`,description:`Use the hook when the loading state is tied to navigation, bootstrapping, or a larger workspace transition.`,code:Ye,children:(0,A.jsx)(`div`,{className:`inline-actions`,children:(0,A.jsx)(`button`,{type:`button`,className:`button primary`,onClick:l,children:`Show fullscreen loader`})})})]}),(0,A.jsxs)(`aside`,{className:`sidebar-column`,children:[(0,A.jsxs)(`section`,{className:`demo-card side-card`,children:[(0,A.jsx)(`div`,{className:`demo-head`,children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Wrapper surface`}),(0,A.jsx)(`p`,{children:`The public API stays intentionally small so the real behavior continues to live in the core loading package.`})]})}),(0,A.jsxs)(`ul`,{className:`feature-list`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`code`,{children:`<Loading />`}),` for component-first loading states.`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`code`,{children:`<LoadingOverlay />`}),` for cards, tables, modals, charts, and buttons.`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`code`,{children:`useLoadingController()`}),` for fullscreen and programmatic flows.`]}),(0,A.jsxs)(`li`,{children:[`Core exports like `,(0,A.jsx)(`code`,{children:`loaderVariants`}),`, `,(0,A.jsx)(`code`,{children:`createLoader`}),`, and theme helpers stay available.`]})]})]}),(0,A.jsxs)(`section`,{className:`demo-card side-card`,children:[(0,A.jsx)(`div`,{className:`demo-head`,children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Release lines`}),(0,A.jsx)(`p`,{children:`Each maintained runtime line gets its own docs build and npm release.`})]})}),(0,A.jsxs)(`div`,{className:`release-links`,children:[(0,A.jsx)(`a`,{href:`../react-17/`,children:`React 17`}),(0,A.jsx)(`a`,{href:`../react-18/`,children:`React 18`}),(0,A.jsx)(`a`,{href:`../react-19/`,children:`React 19`})]})]}),(0,A.jsxs)(`section`,{className:`demo-card side-card`,children:[(0,A.jsx)(`div`,{className:`demo-head`,children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Event log`}),(0,A.jsx)(`p`,{children:`Small runtime notes from the docs interactions while you test the wrapper.`})]})}),(0,A.jsx)(`div`,{className:`event-log`,children:n.map(e=>(0,A.jsx)(`div`,{className:`log-line`,children:e},e))})]})]})]})]})}var et=document.getElementById(`root`);if(!et)throw Error(`Root element not found.`);(0,Pe.createRoot)(et).render((0,A.jsx)(k.StrictMode,{children:(0,A.jsx)($e,{reactLine:`19.2.4`})}));