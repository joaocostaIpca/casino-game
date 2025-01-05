(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var hm={exports:{}},ta={},dm={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=Symbol.for("react.element"),Tw=Symbol.for("react.portal"),Cw=Symbol.for("react.fragment"),kw=Symbol.for("react.strict_mode"),Rw=Symbol.for("react.profiler"),Nw=Symbol.for("react.provider"),Aw=Symbol.for("react.context"),Pw=Symbol.for("react.forward_ref"),xw=Symbol.for("react.suspense"),Ow=Symbol.for("react.memo"),Dw=Symbol.for("react.lazy"),Ff=Symbol.iterator;function Lw(t){return t===null||typeof t!="object"?null:(t=Ff&&t[Ff]||t["@@iterator"],typeof t=="function"?t:null)}var fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pm=Object.assign,gm={};function Ci(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||fm}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mm(){}mm.prototype=Ci.prototype;function nh(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||fm}var rh=nh.prototype=new mm;rh.constructor=nh;pm(rh,Ci.prototype);rh.isPureReactComponent=!0;var Uf=Array.isArray,_m=Object.prototype.hasOwnProperty,ih={current:null},ym={key:!0,ref:!0,__self:!0,__source:!0};function vm(t,e,n){var r,i={},s=null,l=null;if(e!=null)for(r in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)_m.call(e,r)&&!ym.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xs,type:t,key:s,ref:l,props:i,_owner:ih.current}}function Mw(t,e){return{$$typeof:Xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xs}function bw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jf=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bw(""+t.key):e.toString(36)}function qo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Xs:case Tw:l=!0}}if(l)return l=t,i=i(l),t=r===""?"."+tu(l,0):r,Uf(i)?(n="",t!=null&&(n=t.replace(jf,"$&/")+"/"),qo(i,e,n,"",function(d){return d})):i!=null&&(sh(i)&&(i=Mw(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(jf,"$&/")+"/")+t)),e.push(i)),1;if(l=0,r=r===""?".":r+":",Uf(t))for(var a=0;a<t.length;a++){s=t[a];var c=r+tu(s,a);l+=qo(s,e,n,c,i)}else if(c=Lw(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=r+tu(s,a++),l+=qo(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function No(t,e,n){if(t==null)return t;var r=[],i=0;return qo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Fw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qe={current:null},Qo={transition:null},Uw={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Qo,ReactCurrentOwner:ih};function wm(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!sh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=Ci;$.Fragment=Cw;$.Profiler=Rw;$.PureComponent=nh;$.StrictMode=kw;$.Suspense=xw;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;$.act=wm;$.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pm({},t.props),i=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=ih.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)_m.call(e,c)&&!ym.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Xs,type:t.type,key:i,ref:s,props:r,_owner:l}};$.createContext=function(t){return t={$$typeof:Aw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nw,_context:t},t.Consumer=t};$.createElement=vm;$.createFactory=function(t){var e=vm.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:Pw,render:t}};$.isValidElement=sh;$.lazy=function(t){return{$$typeof:Dw,_payload:{_status:-1,_result:t},_init:Fw}};$.memo=function(t,e){return{$$typeof:Ow,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=Qo.transition;Qo.transition={};try{t()}finally{Qo.transition=e}};$.unstable_act=wm;$.useCallback=function(t,e){return Qe.current.useCallback(t,e)};$.useContext=function(t){return Qe.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return Qe.current.useDeferredValue(t)};$.useEffect=function(t,e){return Qe.current.useEffect(t,e)};$.useId=function(){return Qe.current.useId()};$.useImperativeHandle=function(t,e,n){return Qe.current.useImperativeHandle(t,e,n)};$.useInsertionEffect=function(t,e){return Qe.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return Qe.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return Qe.current.useMemo(t,e)};$.useReducer=function(t,e,n){return Qe.current.useReducer(t,e,n)};$.useRef=function(t){return Qe.current.useRef(t)};$.useState=function(t){return Qe.current.useState(t)};$.useSyncExternalStore=function(t,e,n){return Qe.current.useSyncExternalStore(t,e,n)};$.useTransition=function(){return Qe.current.useTransition()};$.version="18.3.1";dm.exports=$;var ee=dm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jw=ee,zw=Symbol.for("react.element"),Ww=Symbol.for("react.fragment"),Bw=Object.prototype.hasOwnProperty,Hw=jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vw={key:!0,ref:!0,__self:!0,__source:!0};function Em(t,e,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)Bw.call(e,r)&&!Vw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zw,type:t,key:s,ref:l,props:i,_owner:Hw.current}}ta.Fragment=Ww;ta.jsx=Em;ta.jsxs=Em;hm.exports=ta;var W=hm.exports,Sm={exports:{}},ht={},Im={exports:{}},Tm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var V=U.length;U.push(H);e:for(;0<V;){var fe=V-1>>>1,re=U[fe];if(0<i(re,H))U[fe]=H,U[V]=re,V=fe;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var H=U[0],V=U.pop();if(V!==H){U[0]=V;e:for(var fe=0,re=U.length,ye=re>>>1;fe<ye;){var Yt=2*(fe+1)-1,qt=U[Yt],Qt=Yt+1,Xt=U[Qt];if(0>i(qt,V))Qt<re&&0>i(Xt,qt)?(U[fe]=Xt,U[Qt]=V,fe=Qt):(U[fe]=qt,U[Yt]=V,fe=Yt);else if(Qt<re&&0>i(Xt,V))U[fe]=Xt,U[Qt]=V,fe=Qt;else break e}}return H}function i(U,H){var V=U.sortIndex-H.sortIndex;return V!==0?V:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var c=[],d=[],m=1,g=null,_=3,A=!1,N=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(U){for(var H=n(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=U)r(d),H.sortIndex=H.expirationTime,e(c,H);else break;H=n(d)}}function O(U){if(x=!1,C(U),!N)if(n(c)!==null)N=!0,Li(b);else{var H=n(d);H!==null&&Kt(O,H.startTime-U)}}function b(U,H){N=!1,x&&(x=!1,T(p),p=-1),A=!0;var V=_;try{for(C(H),g=n(c);g!==null&&(!(g.expirationTime>H)||U&&!I());){var fe=g.callback;if(typeof fe=="function"){g.callback=null,_=g.priorityLevel;var re=fe(g.expirationTime<=H);H=t.unstable_now(),typeof re=="function"?g.callback=re:g===n(c)&&r(c),C(H)}else r(c);g=n(c)}if(g!==null)var ye=!0;else{var Yt=n(d);Yt!==null&&Kt(O,Yt.startTime-H),ye=!1}return ye}finally{g=null,_=V,A=!1}}var F=!1,v=null,p=-1,y=5,S=-1;function I(){return!(t.unstable_now()-S<y)}function R(){if(v!==null){var U=t.unstable_now();S=U;var H=!0;try{H=v(!0,U)}finally{H?E():(F=!1,v=null)}}else F=!1}var E;if(typeof w=="function")E=function(){w(R)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,ir=ft.port2;ft.port1.onmessage=R,E=function(){ir.postMessage(null)}}else E=function(){j(R,0)};function Li(U){v=U,F||(F=!0,E())}function Kt(U,H){p=j(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){N||A||(N=!0,Li(b))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var V=_;_=H;try{return U()}finally{_=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var V=_;_=U;try{return H()}finally{_=V}},t.unstable_scheduleCallback=function(U,H,V){var fe=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?fe+V:fe):V=fe,U){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=V+re,U={id:m++,callback:H,priorityLevel:U,startTime:V,expirationTime:re,sortIndex:-1},V>fe?(U.sortIndex=V,e(d,U),n(c)===null&&U===n(d)&&(x?(T(p),p=-1):x=!0,Kt(O,V-fe))):(U.sortIndex=re,e(c,U),N||A||(N=!0,Li(b))),U},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(U){var H=_;return function(){var V=_;_=H;try{return U.apply(this,arguments)}finally{_=V}}}})(Tm);Im.exports=Tm;var $w=Im.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gw=ee,ct=$w;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,Ns={};function Pr(t,e){pi(t,e),pi(t+"Capture",e)}function pi(t,e){for(Ns[t]=e,t=0;t<e.length;t++)Cm.add(e[t])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,Kw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zf={},Wf={};function Yw(t){return Bu.call(Wf,t)?!0:Bu.call(zf,t)?!1:Kw.test(t)?Wf[t]=!0:(zf[t]=!0,!1)}function qw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qw(t,e,n,r){if(e===null||typeof e>"u"||qw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var oh=/[\-:]([a-z])/g;function lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(oh,lh);Le[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(oh,lh);Le[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(oh,lh);Le[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function ah(t,e,n,r){var i=Le.hasOwnProperty(e)?Le[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qw(e,n,i,r)&&(n=null),r||i===null?Yw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wn=Gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ao=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),km=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),ch=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),hh=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),Nm=Symbol.for("react.offscreen"),Bf=Symbol.iterator;function Yi(t){return t===null||typeof t!="object"?null:(t=Bf&&t[Bf]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,nu;function os(t){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||""}return`
`+nu+t}var ru=!1;function iu(t,e){if(!t||ru)return"";ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var c=`
`+i[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=a);break}}}finally{ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?os(t):""}function Xw(t){switch(t.tag){case 5:return os(t.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Hr:return"Portal";case Hu:return"Profiler";case uh:return"StrictMode";case Vu:return"Suspense";case $u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rm:return(t.displayName||"Context")+".Consumer";case km:return(t._context.displayName||"Context")+".Provider";case ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hh:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case Nn:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function Jw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Am(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zw(t){var e=Am(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Po(t){t._valueTracker||(t._valueTracker=Zw(t))}function Pm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Am(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ku(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xm(t,e){e=e.checked,e!=null&&ah(t,"checked",e,!1)}function Yu(t,e){xm(t,e);var n=qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&qu(t,e.type,qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qu(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ls=Array.isArray;function ri(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $f(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(ls(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qn(n)}}function Om(t,e){var n=qn(e.value),r=qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xo,Lm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function As(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eE=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(t){eE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ds[e]=ds[t]})});function Mm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ds.hasOwnProperty(t)&&ds[t]?(""+e).trim():e+"px"}function bm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tE=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ju(t,e){if(e){if(tE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ec=null;function dh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tc=null,ii=null,si=null;function Kf(t){if(t=eo(t)){if(typeof tc!="function")throw Error(D(280));var e=t.stateNode;e&&(e=oa(e),tc(t.stateNode,t.type,e))}}function Fm(t){ii?si?si.push(t):si=[t]:ii=t}function Um(){if(ii){var t=ii,e=si;if(si=ii=null,Kf(t),e)for(t=0;t<e.length;t++)Kf(e[t])}}function jm(t,e){return t(e)}function zm(){}var su=!1;function Wm(t,e,n){if(su)return t(e,n);su=!0;try{return jm(t,e,n)}finally{su=!1,(ii!==null||si!==null)&&(zm(),Um())}}function Ps(t,e){var n=t.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var nc=!1;if(dn)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){nc=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{nc=!1}function nE(t,e,n,r,i,s,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var fs=!1,fl=null,pl=!1,rc=null,rE={onError:function(t){fs=!0,fl=t}};function iE(t,e,n,r,i,s,l,a,c){fs=!1,fl=null,nE.apply(rE,arguments)}function sE(t,e,n,r,i,s,l,a,c){if(iE.apply(this,arguments),fs){if(fs){var d=fl;fs=!1,fl=null}else throw Error(D(198));pl||(pl=!0,rc=d)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yf(t){if(xr(t)!==t)throw Error(D(188))}function oE(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yf(i),t;if(s===r)return Yf(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function Hm(t){return t=oE(t),t!==null?Vm(t):null}function Vm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vm(t);if(e!==null)return e;t=t.sibling}return null}var $m=ct.unstable_scheduleCallback,qf=ct.unstable_cancelCallback,lE=ct.unstable_shouldYield,aE=ct.unstable_requestPaint,we=ct.unstable_now,uE=ct.unstable_getCurrentPriorityLevel,fh=ct.unstable_ImmediatePriority,Gm=ct.unstable_UserBlockingPriority,gl=ct.unstable_NormalPriority,cE=ct.unstable_LowPriority,Km=ct.unstable_IdlePriority,na=null,Bt=null;function hE(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(na,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:pE,dE=Math.log,fE=Math.LN2;function pE(t){return t>>>=0,t===0?32:31-(dE(t)/fE|0)|0}var Oo=64,Do=4194304;function as(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=as(a):(s&=l,s!==0&&(r=as(s)))}else l=n&~i,l!==0?r=as(l):s!==0&&(r=as(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ot(e),i=1<<n,r|=t[n],e&=~i;return r}function gE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-Ot(s),a=1<<l,c=i[l];c===-1?(!(a&n)||a&r)&&(i[l]=gE(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ym(){var t=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),t}function ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ot(e),t[e]=n}function _E(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ph(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function qm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qm,gh,Xm,Jm,Zm,sc=!1,Lo=[],Un=null,jn=null,zn=null,xs=new Map,Os=new Map,Pn=[],yE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,e){switch(t){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":xs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(e.pointerId)}}function Qi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=eo(e),e!==null&&gh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vE(t,e,n,r,i){switch(e){case"focusin":return Un=Qi(Un,t,e,n,r,i),!0;case"dragenter":return jn=Qi(jn,t,e,n,r,i),!0;case"mouseover":return zn=Qi(zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xs.set(s,Qi(xs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Os.set(s,Qi(Os.get(s)||null,t,e,n,r,i)),!0}return!1}function e_(t){var e=dr(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=Bm(n),e!==null){t.blockedOn=e,Zm(t.priority,function(){Xm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ec=r,n.target.dispatchEvent(r),ec=null}else return e=eo(n),e!==null&&gh(e),t.blockedOn=n,!1;e.shift()}return!0}function Xf(t,e,n){Xo(t)&&n.delete(e)}function wE(){sc=!1,Un!==null&&Xo(Un)&&(Un=null),jn!==null&&Xo(jn)&&(jn=null),zn!==null&&Xo(zn)&&(zn=null),xs.forEach(Xf),Os.forEach(Xf)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,sc||(sc=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,wE)))}function Ds(t){function e(i){return Xi(i,t)}if(0<Lo.length){Xi(Lo[0],t);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Un!==null&&Xi(Un,t),jn!==null&&Xi(jn,t),zn!==null&&Xi(zn,t),xs.forEach(e),Os.forEach(e),n=0;n<Pn.length;n++)r=Pn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)e_(n),n.blockedOn===null&&Pn.shift()}var oi=wn.ReactCurrentBatchConfig,_l=!0;function EE(t,e,n,r){var i=te,s=oi.transition;oi.transition=null;try{te=1,mh(t,e,n,r)}finally{te=i,oi.transition=s}}function SE(t,e,n,r){var i=te,s=oi.transition;oi.transition=null;try{te=4,mh(t,e,n,r)}finally{te=i,oi.transition=s}}function mh(t,e,n,r){if(_l){var i=oc(t,e,n,r);if(i===null)mu(t,e,r,yl,n),Qf(t,r);else if(vE(i,t,e,n,r))r.stopPropagation();else if(Qf(t,r),e&4&&-1<yE.indexOf(t)){for(;i!==null;){var s=eo(i);if(s!==null&&Qm(s),s=oc(t,e,n,r),s===null&&mu(t,e,r,yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mu(t,e,r,null,n)}}var yl=null;function oc(t,e,n,r){if(yl=null,t=dh(r),t=dr(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function t_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uE()){case fh:return 1;case Gm:return 4;case gl:case cE:return 16;case Km:return 536870912;default:return 16}default:return 16}}var bn=null,_h=null,Jo=null;function n_(){if(Jo)return Jo;var t,e=_h,n=e.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var l=n-t;for(r=1;r<=l&&e[n-r]===i[s-r];r++);return Jo=i.slice(t,1<r?1-r:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mo(){return!0}function Jf(){return!1}function dt(t){function e(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mo:Jf,this.isPropagationStopped=Jf,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yh=dt(ki),Zs=me({},ki,{view:0,detail:0}),IE=dt(Zs),lu,au,Ji,ra=me({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(lu=t.screenX-Ji.screenX,au=t.screenY-Ji.screenY):au=lu=0,Ji=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:au}}),Zf=dt(ra),TE=me({},ra,{dataTransfer:0}),CE=dt(TE),kE=me({},Zs,{relatedTarget:0}),uu=dt(kE),RE=me({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),NE=dt(RE),AE=me({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PE=dt(AE),xE=me({},ki,{data:0}),ep=dt(xE),OE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ME(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LE[t])?!!e[t]:!1}function vh(){return ME}var bE=me({},Zs,{key:function(t){if(t.key){var e=OE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?DE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vh,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FE=dt(bE),UE=me({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=dt(UE),jE=me({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vh}),zE=dt(jE),WE=me({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),BE=dt(WE),HE=me({},ra,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VE=dt(HE),$E=[9,13,27,32],wh=dn&&"CompositionEvent"in window,ps=null;dn&&"documentMode"in document&&(ps=document.documentMode);var GE=dn&&"TextEvent"in window&&!ps,r_=dn&&(!wh||ps&&8<ps&&11>=ps),np=" ",rp=!1;function i_(t,e){switch(t){case"keyup":return $E.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function KE(t,e){switch(t){case"compositionend":return s_(e);case"keypress":return e.which!==32?null:(rp=!0,np);case"textInput":return t=e.data,t===np&&rp?null:t;default:return null}}function YE(t,e){if($r)return t==="compositionend"||!wh&&i_(t,e)?(t=n_(),Jo=_h=bn=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return r_&&e.locale!=="ko"?null:e.data;default:return null}}var qE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qE[t.type]:e==="textarea"}function o_(t,e,n,r){Fm(r),e=vl(e,"onChange"),0<e.length&&(n=new yh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gs=null,Ls=null;function QE(t){__(t,0)}function ia(t){var e=Yr(t);if(Pm(e))return t}function XE(t,e){if(t==="change")return e}var l_=!1;if(dn){var cu;if(dn){var hu="oninput"in document;if(!hu){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),hu=typeof sp.oninput=="function"}cu=hu}else cu=!1;l_=cu&&(!document.documentMode||9<document.documentMode)}function op(){gs&&(gs.detachEvent("onpropertychange",a_),Ls=gs=null)}function a_(t){if(t.propertyName==="value"&&ia(Ls)){var e=[];o_(e,Ls,t,dh(t)),Wm(QE,e)}}function JE(t,e,n){t==="focusin"?(op(),gs=e,Ls=n,gs.attachEvent("onpropertychange",a_)):t==="focusout"&&op()}function ZE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ia(Ls)}function eS(t,e){if(t==="click")return ia(e)}function tS(t,e){if(t==="input"||t==="change")return ia(e)}function nS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mt=typeof Object.is=="function"?Object.is:nS;function Ms(t,e){if(Mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bu.call(e,i)||!Mt(t[i],e[i]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ap(t,e){var n=lp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function u_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?u_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c_(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rS(t){var e=c_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&u_(n.ownerDocument.documentElement,n)){if(r!==null&&Eh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ap(n,s);var l=ap(n,r);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=dn&&"documentMode"in document&&11>=document.documentMode,Gr=null,lc=null,ms=null,ac=!1;function up(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ac||Gr==null||Gr!==dl(r)||(r=Gr,"selectionStart"in r&&Eh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ms&&Ms(ms,r)||(ms=r,r=vl(lc,"onSelect"),0<r.length&&(e=new yh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gr)))}function bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},du={},h_={};dn&&(h_=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function sa(t){if(du[t])return du[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in h_)return du[t]=e[n];return t}var d_=sa("animationend"),f_=sa("animationiteration"),p_=sa("animationstart"),g_=sa("transitionend"),m_=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(t,e){m_.set(t,e),Pr(e,[t])}for(var fu=0;fu<cp.length;fu++){var pu=cp[fu],sS=pu.toLowerCase(),oS=pu[0].toUpperCase()+pu.slice(1);Zn(sS,"on"+oS)}Zn(d_,"onAnimationEnd");Zn(f_,"onAnimationIteration");Zn(p_,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(g_,"onTransitionEnd");pi("onMouseEnter",["mouseout","mouseover"]);pi("onMouseLeave",["mouseout","mouseover"]);pi("onPointerEnter",["pointerout","pointerover"]);pi("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("cancel close invalid load scroll toggle".split(" ").concat(us));function hp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sE(r,e,void 0,t),t.currentTarget=null}function __(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;hp(i,a,d),s=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;hp(i,a,d),s=c}}}if(pl)throw t=rc,pl=!1,rc=null,t}function le(t,e){var n=e[fc];n===void 0&&(n=e[fc]=new Set);var r=t+"__bubble";n.has(r)||(y_(e,t,2,!1),n.add(r))}function gu(t,e,n){var r=0;e&&(r|=4),y_(n,t,r,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function bs(t){if(!t[Fo]){t[Fo]=!0,Cm.forEach(function(n){n!=="selectionchange"&&(lS.has(n)||gu(n,!1,t),gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,gu("selectionchange",!1,e))}}function y_(t,e,n,r){switch(t_(e)){case 1:var i=EE;break;case 4:i=SE;break;default:i=mh}n=i.bind(null,e,n,t),i=void 0,!nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;a!==null;){if(l=dr(a),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}a=a.parentNode}}r=r.return}Wm(function(){var d=s,m=dh(n),g=[];e:{var _=m_.get(t);if(_!==void 0){var A=yh,N=t;switch(t){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":A=FE;break;case"focusin":N="focus",A=uu;break;case"focusout":N="blur",A=uu;break;case"beforeblur":case"afterblur":A=uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=CE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=zE;break;case d_:case f_:case p_:A=NE;break;case g_:A=BE;break;case"scroll":A=IE;break;case"wheel":A=VE;break;case"copy":case"cut":case"paste":A=PE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=tp}var x=(e&4)!==0,j=!x&&t==="scroll",T=x?_!==null?_+"Capture":null:_;x=[];for(var w=d,C;w!==null;){C=w;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,T!==null&&(O=Ps(w,T),O!=null&&x.push(Fs(w,O,C)))),j)break;w=w.return}0<x.length&&(_=new A(_,N,null,n,m),g.push({event:_,listeners:x}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",_&&n!==ec&&(N=n.relatedTarget||n.fromElement)&&(dr(N)||N[fn]))break e;if((A||_)&&(_=m.window===m?m:(_=m.ownerDocument)?_.defaultView||_.parentWindow:window,A?(N=n.relatedTarget||n.toElement,A=d,N=N?dr(N):null,N!==null&&(j=xr(N),N!==j||N.tag!==5&&N.tag!==6)&&(N=null)):(A=null,N=d),A!==N)){if(x=Zf,O="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(x=tp,O="onPointerLeave",T="onPointerEnter",w="pointer"),j=A==null?_:Yr(A),C=N==null?_:Yr(N),_=new x(O,w+"leave",A,n,m),_.target=j,_.relatedTarget=C,O=null,dr(m)===d&&(x=new x(T,w+"enter",N,n,m),x.target=C,x.relatedTarget=j,O=x),j=O,A&&N)t:{for(x=A,T=N,w=0,C=x;C;C=Wr(C))w++;for(C=0,O=T;O;O=Wr(O))C++;for(;0<w-C;)x=Wr(x),w--;for(;0<C-w;)T=Wr(T),C--;for(;w--;){if(x===T||T!==null&&x===T.alternate)break t;x=Wr(x),T=Wr(T)}x=null}else x=null;A!==null&&dp(g,_,A,x,!1),N!==null&&j!==null&&dp(g,j,N,x,!0)}}e:{if(_=d?Yr(d):window,A=_.nodeName&&_.nodeName.toLowerCase(),A==="select"||A==="input"&&_.type==="file")var b=XE;else if(ip(_))if(l_)b=tS;else{b=ZE;var F=JE}else(A=_.nodeName)&&A.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(b=eS);if(b&&(b=b(t,d))){o_(g,b,n,m);break e}F&&F(t,_,d),t==="focusout"&&(F=_._wrapperState)&&F.controlled&&_.type==="number"&&qu(_,"number",_.value)}switch(F=d?Yr(d):window,t){case"focusin":(ip(F)||F.contentEditable==="true")&&(Gr=F,lc=d,ms=null);break;case"focusout":ms=lc=Gr=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,up(g,n,m);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":up(g,n,m)}var v;if(wh)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else $r?i_(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(r_&&n.locale!=="ko"&&($r||p!=="onCompositionStart"?p==="onCompositionEnd"&&$r&&(v=n_()):(bn=m,_h="value"in bn?bn.value:bn.textContent,$r=!0)),F=vl(d,p),0<F.length&&(p=new ep(p,t,null,n,m),g.push({event:p,listeners:F}),v?p.data=v:(v=s_(n),v!==null&&(p.data=v)))),(v=GE?KE(t,n):YE(t,n))&&(d=vl(d,"onBeforeInput"),0<d.length&&(m=new ep("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=v))}__(g,e)})}function Fs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ps(t,n),s!=null&&r.unshift(Fs(t,s,i)),s=Ps(t,e),s!=null&&r.push(Fs(t,s,i))),t=t.return}return r}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dp(t,e,n,r,i){for(var s=e._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,i?(c=Ps(n,s),c!=null&&l.unshift(Fs(n,c,a))):i||(c=Ps(n,s),c!=null&&l.push(Fs(n,c,a)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var aS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function fp(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(uS,"")}function Uo(t,e,n){if(e=fp(e),fp(t)!==e&&n)throw Error(D(425))}function wl(){}var uc=null,cc=null;function hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(t){return pp.resolve(null).then(t).catch(dS)}:dc;function dS(t){setTimeout(function(){throw t})}function _u(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ds(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ds(e)}function Wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ri=Math.random().toString(36).slice(2),jt="__reactFiber$"+Ri,Us="__reactProps$"+Ri,fn="__reactContainer$"+Ri,fc="__reactEvents$"+Ri,fS="__reactListeners$"+Ri,pS="__reactHandles$"+Ri;function dr(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gp(t);t!==null;){if(n=t[jt])return n;t=gp(t)}return e}t=n,n=t.parentNode}return null}function eo(t){return t=t[jt]||t[fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function oa(t){return t[Us]||null}var pc=[],qr=-1;function er(t){return{current:t}}function ce(t){0>qr||(t.current=pc[qr],pc[qr]=null,qr--)}function se(t,e){qr++,pc[qr]=t.current,t.current=e}var Qn={},He=er(Qn),rt=er(!1),vr=Qn;function gi(t,e){var n=t.type.contextTypes;if(!n)return Qn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function it(t){return t=t.childContextTypes,t!=null}function El(){ce(rt),ce(He)}function mp(t,e,n){if(He.current!==Qn)throw Error(D(168));se(He,e),se(rt,n)}function v_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,Jw(t)||"Unknown",i));return me({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qn,vr=He.current,se(He,t),se(rt,rt.current),!0}function _p(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=v_(t,e,vr),r.__reactInternalMemoizedMergedChildContext=t,ce(rt),ce(He),se(He,t)):ce(rt),se(rt,n)}var tn=null,la=!1,yu=!1;function w_(t){tn===null?tn=[t]:tn.push(t)}function gS(t){la=!0,w_(t)}function tr(){if(!yu&&tn!==null){yu=!0;var t=0,e=te;try{var n=tn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tn=null,la=!1}catch(i){throw tn!==null&&(tn=tn.slice(t+1)),$m(fh,tr),i}finally{te=e,yu=!1}}return null}var Qr=[],Xr=0,Il=null,Tl=0,gt=[],mt=0,wr=null,nn=1,rn="";function ar(t,e){Qr[Xr++]=Tl,Qr[Xr++]=Il,Il=t,Tl=e}function E_(t,e,n){gt[mt++]=nn,gt[mt++]=rn,gt[mt++]=wr,wr=t;var r=nn;t=rn;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(e)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,nn=1<<32-Ot(e)+i|n<<i|r,rn=s+t}else nn=1<<s|n<<i|r,rn=t}function Sh(t){t.return!==null&&(ar(t,1),E_(t,1,0))}function Ih(t){for(;t===Il;)Il=Qr[--Xr],Qr[Xr]=null,Tl=Qr[--Xr],Qr[Xr]=null;for(;t===wr;)wr=gt[--mt],gt[mt]=null,rn=gt[--mt],gt[mt]=null,nn=gt[--mt],gt[mt]=null}var ut=null,at=null,de=!1,Nt=null;function S_(t,e){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ut=t,at=Wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ut=t,at=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wr!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ut=t,at=null,!0):!1;default:return!1}}function gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mc(t){if(de){var e=at;if(e){var n=e;if(!yp(t,e)){if(gc(t))throw Error(D(418));e=Wn(n.nextSibling);var r=ut;e&&yp(t,e)?S_(r,n):(t.flags=t.flags&-4097|2,de=!1,ut=t)}}else{if(gc(t))throw Error(D(418));t.flags=t.flags&-4097|2,de=!1,ut=t}}}function vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ut=t}function jo(t){if(t!==ut)return!1;if(!de)return vp(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hc(t.type,t.memoizedProps)),e&&(e=at)){if(gc(t))throw I_(),Error(D(418));for(;e;)S_(t,e),e=Wn(e.nextSibling)}if(vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){at=Wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}at=null}}else at=ut?Wn(t.stateNode.nextSibling):null;return!0}function I_(){for(var t=at;t;)t=Wn(t.nextSibling)}function mi(){at=ut=null,de=!1}function Th(t){Nt===null?Nt=[t]:Nt.push(t)}var mS=wn.ReactCurrentBatchConfig;function Zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wp(t){var e=t._init;return e(t._payload)}function T_(t){function e(T,w){if(t){var C=T.deletions;C===null?(T.deletions=[w],T.flags|=16):C.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=$n(T,w),T.index=0,T.sibling=null,T}function s(T,w,C){return T.index=C,t?(C=T.alternate,C!==null?(C=C.index,C<w?(T.flags|=2,w):C):(T.flags|=2,w)):(T.flags|=1048576,w)}function l(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,w,C,O){return w===null||w.tag!==6?(w=Cu(C,T.mode,O),w.return=T,w):(w=i(w,C),w.return=T,w)}function c(T,w,C,O){var b=C.type;return b===Vr?m(T,w,C.props.children,O,C.key):w!==null&&(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Nn&&wp(b)===w.type)?(O=i(w,C.props),O.ref=Zi(T,w,C),O.return=T,O):(O=ol(C.type,C.key,C.props,null,T.mode,O),O.ref=Zi(T,w,C),O.return=T,O)}function d(T,w,C,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==C.containerInfo||w.stateNode.implementation!==C.implementation?(w=ku(C,T.mode,O),w.return=T,w):(w=i(w,C.children||[]),w.return=T,w)}function m(T,w,C,O,b){return w===null||w.tag!==7?(w=yr(C,T.mode,O,b),w.return=T,w):(w=i(w,C),w.return=T,w)}function g(T,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Cu(""+w,T.mode,C),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ao:return C=ol(w.type,w.key,w.props,null,T.mode,C),C.ref=Zi(T,null,w),C.return=T,C;case Hr:return w=ku(w,T.mode,C),w.return=T,w;case Nn:var O=w._init;return g(T,O(w._payload),C)}if(ls(w)||Yi(w))return w=yr(w,T.mode,C,null),w.return=T,w;zo(T,w)}return null}function _(T,w,C,O){var b=w!==null?w.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return b!==null?null:a(T,w,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ao:return C.key===b?c(T,w,C,O):null;case Hr:return C.key===b?d(T,w,C,O):null;case Nn:return b=C._init,_(T,w,b(C._payload),O)}if(ls(C)||Yi(C))return b!==null?null:m(T,w,C,O,null);zo(T,C)}return null}function A(T,w,C,O,b){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(C)||null,a(w,T,""+O,b);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ao:return T=T.get(O.key===null?C:O.key)||null,c(w,T,O,b);case Hr:return T=T.get(O.key===null?C:O.key)||null,d(w,T,O,b);case Nn:var F=O._init;return A(T,w,C,F(O._payload),b)}if(ls(O)||Yi(O))return T=T.get(C)||null,m(w,T,O,b,null);zo(w,O)}return null}function N(T,w,C,O){for(var b=null,F=null,v=w,p=w=0,y=null;v!==null&&p<C.length;p++){v.index>p?(y=v,v=null):y=v.sibling;var S=_(T,v,C[p],O);if(S===null){v===null&&(v=y);break}t&&v&&S.alternate===null&&e(T,v),w=s(S,w,p),F===null?b=S:F.sibling=S,F=S,v=y}if(p===C.length)return n(T,v),de&&ar(T,p),b;if(v===null){for(;p<C.length;p++)v=g(T,C[p],O),v!==null&&(w=s(v,w,p),F===null?b=v:F.sibling=v,F=v);return de&&ar(T,p),b}for(v=r(T,v);p<C.length;p++)y=A(v,T,p,C[p],O),y!==null&&(t&&y.alternate!==null&&v.delete(y.key===null?p:y.key),w=s(y,w,p),F===null?b=y:F.sibling=y,F=y);return t&&v.forEach(function(I){return e(T,I)}),de&&ar(T,p),b}function x(T,w,C,O){var b=Yi(C);if(typeof b!="function")throw Error(D(150));if(C=b.call(C),C==null)throw Error(D(151));for(var F=b=null,v=w,p=w=0,y=null,S=C.next();v!==null&&!S.done;p++,S=C.next()){v.index>p?(y=v,v=null):y=v.sibling;var I=_(T,v,S.value,O);if(I===null){v===null&&(v=y);break}t&&v&&I.alternate===null&&e(T,v),w=s(I,w,p),F===null?b=I:F.sibling=I,F=I,v=y}if(S.done)return n(T,v),de&&ar(T,p),b;if(v===null){for(;!S.done;p++,S=C.next())S=g(T,S.value,O),S!==null&&(w=s(S,w,p),F===null?b=S:F.sibling=S,F=S);return de&&ar(T,p),b}for(v=r(T,v);!S.done;p++,S=C.next())S=A(v,T,p,S.value,O),S!==null&&(t&&S.alternate!==null&&v.delete(S.key===null?p:S.key),w=s(S,w,p),F===null?b=S:F.sibling=S,F=S);return t&&v.forEach(function(R){return e(T,R)}),de&&ar(T,p),b}function j(T,w,C,O){if(typeof C=="object"&&C!==null&&C.type===Vr&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Ao:e:{for(var b=C.key,F=w;F!==null;){if(F.key===b){if(b=C.type,b===Vr){if(F.tag===7){n(T,F.sibling),w=i(F,C.props.children),w.return=T,T=w;break e}}else if(F.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Nn&&wp(b)===F.type){n(T,F.sibling),w=i(F,C.props),w.ref=Zi(T,F,C),w.return=T,T=w;break e}n(T,F);break}else e(T,F);F=F.sibling}C.type===Vr?(w=yr(C.props.children,T.mode,O,C.key),w.return=T,T=w):(O=ol(C.type,C.key,C.props,null,T.mode,O),O.ref=Zi(T,w,C),O.return=T,T=O)}return l(T);case Hr:e:{for(F=C.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===C.containerInfo&&w.stateNode.implementation===C.implementation){n(T,w.sibling),w=i(w,C.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=ku(C,T.mode,O),w.return=T,T=w}return l(T);case Nn:return F=C._init,j(T,w,F(C._payload),O)}if(ls(C))return N(T,w,C,O);if(Yi(C))return x(T,w,C,O);zo(T,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,C),w.return=T,T=w):(n(T,w),w=Cu(C,T.mode,O),w.return=T,T=w),l(T)):n(T,w)}return j}var _i=T_(!0),C_=T_(!1),Cl=er(null),kl=null,Jr=null,Ch=null;function kh(){Ch=Jr=kl=null}function Rh(t){var e=Cl.current;ce(Cl),t._currentValue=e}function _c(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function li(t,e){kl=t,Ch=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tt=!0),t.firstContext=null)}function wt(t){var e=t._currentValue;if(Ch!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(kl===null)throw Error(D(308));Jr=t,kl.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var fr=null;function Nh(t){fr===null?fr=[t]:fr.push(t)}function k_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nh(e)):(n.next=i.next,i.next=n),e.interleaved=n,pn(t,r)}function pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var An=!1;function Ah(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,pn(t,n)}return i=r.interleaved,i===null?(e.next=e,Nh(r)):(e.next=i.next,i.next=e),r.interleaved=e,pn(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ph(t,n)}}function Ep(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,r){var i=t.updateQueue;An=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=d:a.next=d,m.lastBaseUpdate=c))}if(s!==null){var g=i.baseState;l=0,m=d=c=null,a=s;do{var _=a.lane,A=a.eventTime;if((r&_)===_){m!==null&&(m=m.next={eventTime:A,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var N=t,x=a;switch(_=e,A=n,x.tag){case 1:if(N=x.payload,typeof N=="function"){g=N.call(A,g,_);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=x.payload,_=typeof N=="function"?N.call(A,g,_):N,_==null)break e;g=me({},g,_);break e;case 2:An=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[a]:_.push(a))}else A={eventTime:A,lane:_,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(d=m=A,c=g):m=m.next=A,l|=_;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;_=a,a=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(m===null&&(c=g),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Sr|=l,t.lanes=l,t.memoizedState=g}}function Sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var to={},Ht=er(to),js=er(to),zs=er(to);function pr(t){if(t===to)throw Error(D(174));return t}function Ph(t,e){switch(se(zs,e),se(js,t),se(Ht,to),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xu(e,t)}ce(Ht),se(Ht,e)}function yi(){ce(Ht),ce(js),ce(zs)}function N_(t){pr(zs.current);var e=pr(Ht.current),n=Xu(e,t.type);e!==n&&(se(js,t),se(Ht,n))}function xh(t){js.current===t&&(ce(Ht),ce(js))}var pe=er(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function Oh(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var tl=wn.ReactCurrentDispatcher,wu=wn.ReactCurrentBatchConfig,Er=0,ge=null,Se=null,ke=null,Al=!1,_s=!1,Ws=0,_S=0;function Ue(){throw Error(D(321))}function Dh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mt(t[n],e[n]))return!1;return!0}function Lh(t,e,n,r,i,s){if(Er=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?ES:SS,t=n(r,i),_s){s=0;do{if(_s=!1,Ws=0,25<=s)throw Error(D(301));s+=1,ke=Se=null,e.updateQueue=null,tl.current=IS,t=n(r,i)}while(_s)}if(tl.current=Pl,e=Se!==null&&Se.next!==null,Er=0,ke=Se=ge=null,Al=!1,e)throw Error(D(300));return t}function Mh(){var t=Ws!==0;return Ws=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ge.memoizedState=ke=t:ke=ke.next=t,ke}function Et(){if(Se===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Se.next;var e=ke===null?ge.memoizedState:ke.next;if(e!==null)ke=e,Se=t;else{if(t===null)throw Error(D(310));Se=t,t={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},ke===null?ge.memoizedState=ke=t:ke=ke.next=t}return ke}function Bs(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=Et(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=l=null,c=null,d=s;do{var m=d.lane;if((Er&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=g,l=r):c=c.next=g,ge.lanes|=m,Sr|=m}d=d.next}while(d!==null&&d!==s);c===null?l=r:c.next=a,Mt(r,e.memoizedState)||(tt=!0),e.memoizedState=r,e.baseState=l,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=Et(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=t(s,l.action),l=l.next;while(l!==i);Mt(s,e.memoizedState)||(tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function A_(){}function P_(t,e){var n=ge,r=Et(),i=e(),s=!Mt(r.memoizedState,i);if(s&&(r.memoizedState=i,tt=!0),r=r.queue,bh(D_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Hs(9,O_.bind(null,n,r,i,e),void 0,null),Ne===null)throw Error(D(349));Er&30||x_(n,e,i)}return i}function x_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O_(t,e,n,r){e.value=n,e.getSnapshot=r,L_(e)&&M_(t)}function D_(t,e,n){return n(function(){L_(e)&&M_(t)})}function L_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mt(t,n)}catch{return!0}}function M_(t){var e=pn(t,1);e!==null&&Dt(e,t,1,-1)}function Ip(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:t},e.queue=t,t=t.dispatch=wS.bind(null,ge,t),[e.memoizedState,t]}function Hs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function b_(){return Et().memoizedState}function nl(t,e,n,r){var i=Ut();ge.flags|=t,i.memoizedState=Hs(1|e,n,void 0,r===void 0?null:r)}function aa(t,e,n,r){var i=Et();r=r===void 0?null:r;var s=void 0;if(Se!==null){var l=Se.memoizedState;if(s=l.destroy,r!==null&&Dh(r,l.deps)){i.memoizedState=Hs(e,n,s,r);return}}ge.flags|=t,i.memoizedState=Hs(1|e,n,s,r)}function Tp(t,e){return nl(8390656,8,t,e)}function bh(t,e){return aa(2048,8,t,e)}function F_(t,e){return aa(4,2,t,e)}function U_(t,e){return aa(4,4,t,e)}function j_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z_(t,e,n){return n=n!=null?n.concat([t]):null,aa(4,4,j_.bind(null,e,t),n)}function Fh(){}function W_(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function B_(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function H_(t,e,n){return Er&21?(Mt(n,e)||(n=Ym(),ge.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tt=!0),t.memoizedState=n)}function yS(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=wu.transition;wu.transition={};try{t(!1),e()}finally{te=n,wu.transition=r}}function V_(){return Et().memoizedState}function vS(t,e,n){var r=Vn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$_(t))G_(e,n);else if(n=k_(t,e,n,r),n!==null){var i=Ye();Dt(n,t,r,i),K_(n,e,r)}}function wS(t,e,n){var r=Vn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($_(t))G_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Mt(a,l)){var c=e.interleaved;c===null?(i.next=i,Nh(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=k_(t,e,i,r),n!==null&&(i=Ye(),Dt(n,t,r,i),K_(n,e,r))}}function $_(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function G_(t,e){_s=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function K_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ph(t,n)}}var Pl={readContext:wt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},ES={readContext:wt,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:wt,useEffect:Tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,j_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vS.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:Ip,useDebugValue:Fh,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=Ip(!1),e=t[0];return t=yS.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Ut();if(de){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),Ne===null)throw Error(D(349));Er&30||x_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tp(D_.bind(null,r,s,t),[t]),r.flags|=2048,Hs(9,O_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ut(),e=Ne.identifierPrefix;if(de){var n=rn,r=nn;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_S++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SS={readContext:wt,useCallback:W_,useContext:wt,useEffect:bh,useImperativeHandle:z_,useInsertionEffect:F_,useLayoutEffect:U_,useMemo:B_,useReducer:Eu,useRef:b_,useState:function(){return Eu(Bs)},useDebugValue:Fh,useDeferredValue:function(t){var e=Et();return H_(e,Se.memoizedState,t)},useTransition:function(){var t=Eu(Bs)[0],e=Et().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:P_,useId:V_,unstable_isNewReconciler:!1},IS={readContext:wt,useCallback:W_,useContext:wt,useEffect:bh,useImperativeHandle:z_,useInsertionEffect:F_,useLayoutEffect:U_,useMemo:B_,useReducer:Su,useRef:b_,useState:function(){return Su(Bs)},useDebugValue:Fh,useDeferredValue:function(t){var e=Et();return Se===null?e.memoizedState=t:H_(e,Se.memoizedState,t)},useTransition:function(){var t=Su(Bs)[0],e=Et().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:P_,useId:V_,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ua={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Vn(t),s=un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Bn(t,s,i),e!==null&&(Dt(e,t,i,r),el(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Vn(t),s=un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bn(t,s,i),e!==null&&(Dt(e,t,i,r),el(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=Vn(t),i=un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bn(t,i,r),e!==null&&(Dt(e,t,r,n),el(e,t,r))}};function Cp(t,e,n,r,i,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,l):e.prototype&&e.prototype.isPureReactComponent?!Ms(n,r)||!Ms(i,s):!0}function Y_(t,e,n){var r=!1,i=Qn,s=e.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=it(e)?vr:He.current,r=e.contextTypes,s=(r=r!=null)?gi(t,i):Qn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ua,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ua.enqueueReplaceState(e,e.state,null)}function vc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ah(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=it(e)?vr:He.current,i.context=gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ua.enqueueReplaceState(i,i.state,null),Rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vi(t,e){try{var n="",r=e;do n+=Xw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TS=typeof WeakMap=="function"?WeakMap:Map;function q_(t,e,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,Pc=r),wc(t,e)},n}function Q_(t,e,n){n=un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wc(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Rp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=US.bind(null,t,e,n),e.then(t,t))}function Np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=un(-1,1),e.tag=2,Bn(n,e,1))),n.lanes|=1),t)}var CS=wn.ReactCurrentOwner,tt=!1;function Ge(t,e,n,r){e.child=t===null?C_(e,null,n,r):_i(e,t.child,n,r)}function Pp(t,e,n,r,i){n=n.render;var s=e.ref;return li(e,i),r=Lh(t,e,n,r,s,i),n=Mh(),t!==null&&!tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(de&&n&&Sh(e),e.flags|=1,Ge(t,e,r,i),e.child)}function xp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$h(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X_(t,e,s,r,i)):(t=ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ms,n(l,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function X_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ms(s,r)&&t.ref===e.ref)if(tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tt=!0);else return e.lanes=t.lanes,gn(t,e,i)}return Ec(t,e,n,r,i)}function J_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(ei,lt),lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(ei,lt),lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(ei,lt),lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(ei,lt),lt|=r;return Ge(t,e,i,n),e.child}function Z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ec(t,e,n,r,i){var s=it(n)?vr:He.current;return s=gi(e,s),li(e,i),n=Lh(t,e,n,r,s,i),r=Mh(),t!==null&&!tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(de&&r&&Sh(e),e.flags|=1,Ge(t,e,n,i),e.child)}function Op(t,e,n,r,i){if(it(n)){var s=!0;Sl(e)}else s=!1;if(li(e,i),e.stateNode===null)rl(t,e),Y_(e,n,r),vc(e,n,r,i),r=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=wt(d):(d=it(n)?vr:He.current,d=gi(e,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==d)&&kp(e,l,r,d),An=!1;var _=e.memoizedState;l.state=_,Rl(e,r,l,i),c=e.memoizedState,a!==r||_!==c||rt.current||An?(typeof m=="function"&&(yc(e,n,m,r),c=e.memoizedState),(a=An||Cp(e,n,a,r,_,c,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),l.props=r,l.state=c,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,R_(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:kt(e.type,a),l.props=d,g=e.pendingProps,_=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=wt(c):(c=it(n)?vr:He.current,c=gi(e,c));var A=n.getDerivedStateFromProps;(m=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||_!==c)&&kp(e,l,r,c),An=!1,_=e.memoizedState,l.state=_,Rl(e,r,l,i);var N=e.memoizedState;a!==g||_!==N||rt.current||An?(typeof A=="function"&&(yc(e,n,A,r),N=e.memoizedState),(d=An||Cp(e,n,d,r,_,N,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,N,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,N,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),l.props=r,l.state=N,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Sc(t,e,n,r,s,i)}function Sc(t,e,n,r,i,s){Z_(t,e);var l=(e.flags&128)!==0;if(!r&&!l)return i&&_p(e,n,!1),gn(t,e,s);r=e.stateNode,CS.current=e;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&l?(e.child=_i(e,t.child,null,s),e.child=_i(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&_p(e,n,!0),e.child}function ey(t){var e=t.stateNode;e.pendingContext?mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mp(t,e.context,!1),Ph(t,e.containerInfo)}function Dp(t,e,n,r,i){return mi(),Th(i),e.flags|=256,Ge(t,e,n,r),e.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function Tc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ty(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(pe,i&1),t===null)return mc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=r.children,t=r.fallback,s?(r=e.mode,s=e.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=da(l,r,0,null),t=yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tc(n),e.memoizedState=Ic,t):Uh(e,l));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kS(t,e,l,r,a,i,n);if(s){s=r.fallback,l=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=$n(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$n(a,s):(s=yr(s,l,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,l=t.child.memoizedState,l=l===null?Tc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~n,e.memoizedState=Ic,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Uh(t,e){return e=da({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wo(t,e,n,r){return r!==null&&Th(r),_i(e,t.child,null,n),t=Uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kS(t,e,n,r,i,s,l){if(n)return e.flags&256?(e.flags&=-257,r=Iu(Error(D(422))),Wo(t,e,l,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=da({mode:"visible",children:r.children},i,0,null),s=yr(s,i,l,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_i(e,t.child,null,l),e.child.memoizedState=Tc(l),e.memoizedState=Ic,s);if(!(e.mode&1))return Wo(t,e,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=Iu(s,r,void 0),Wo(t,e,l,r)}if(a=(l&t.childLanes)!==0,tt||a){if(r=Ne,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,pn(t,i),Dt(r,t,i,-1))}return Vh(),r=Iu(Error(D(421))),Wo(t,e,l,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=jS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,at=Wn(i.nextSibling),ut=e,de=!0,Nt=null,t!==null&&(gt[mt++]=nn,gt[mt++]=rn,gt[mt++]=wr,nn=t.id,rn=t.overflow,wr=e),e=Uh(e,r.children),e.flags|=4096,e)}function Lp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_c(t.return,e,n)}function Tu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ny(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lp(t,n,e);else if(t.tag===19)Lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tu(e,!0,n,null,s);break;case"together":Tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RS(t,e,n){switch(e.tag){case 3:ey(e),mi();break;case 5:N_(e);break;case 1:it(e.type)&&Sl(e);break;case 4:Ph(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?ty(t,e,n):(se(pe,pe.current&1),t=gn(t,e,n),t!==null?t.sibling:null);se(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ny(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,J_(t,e,n)}return gn(t,e,n)}var ry,Cc,iy,sy;ry=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cc=function(){};iy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pr(Ht.current);var s=null;switch(n){case"input":i=Ku(t,i),r=Ku(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Qu(t,i),r=Qu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wl)}Ju(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ns.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&le("scroll",t),s||a===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};sy=function(t,e,n,r){n!==r&&(e.flags|=4)};function es(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NS(t,e,n){var r=e.pendingProps;switch(Ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(e),null;case 1:return it(e.type)&&El(),je(e),null;case 3:return r=e.stateNode,yi(),ce(rt),ce(He),Oh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nt!==null&&(Dc(Nt),Nt=null))),Cc(t,e),je(e),null;case 5:xh(e);var i=pr(zs.current);if(n=e.type,t!==null&&e.stateNode!=null)iy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return je(e),null}if(t=pr(Ht.current),jo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[Us]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<us.length;i++)le(us[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Hf(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":$f(r,s),le("invalid",r)}Ju(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Uo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Uo(r.textContent,a,t),i=["children",""+a]):Ns.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&le("scroll",r)}switch(n){case"input":Po(r),Vf(r,s,!0);break;case"textarea":Po(r),Gf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=l.createElement(n,{is:r.is}):(t=l.createElement(n),n==="select"&&(l=t,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):t=l.createElementNS(t,n),t[jt]=e,t[Us]=r,ry(t,e,!1,!1),e.stateNode=t;e:{switch(l=Zu(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<us.length;i++)le(us[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Hf(t,r),i=Ku(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),le("invalid",t);break;case"textarea":$f(t,r),i=Qu(t,r),le("invalid",t);break;default:i=r}Ju(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?bm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Lm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&As(t,c):typeof c=="number"&&As(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ns.hasOwnProperty(s)?c!=null&&s==="onScroll"&&le("scroll",t):c!=null&&ah(t,s,c,l))}switch(n){case"input":Po(t),Vf(t,r,!1);break;case"textarea":Po(t),Gf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ri(t,!!r.multiple,s,!1):r.defaultValue!=null&&ri(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return je(e),null;case 6:if(t&&e.stateNode!=null)sy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=pr(zs.current),pr(Ht.current),jo(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=ut,t!==null))switch(t.tag){case 3:Uo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return je(e),null;case 13:if(ce(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&at!==null&&e.mode&1&&!(e.flags&128))I_(),mi(),e.flags|=98560,s=!1;else if(s=jo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[jt]=e}else mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;je(e),s=!1}else Nt!==null&&(Dc(Nt),Nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Te===0&&(Te=3):Vh())),e.updateQueue!==null&&(e.flags|=4),je(e),null);case 4:return yi(),Cc(t,e),t===null&&bs(e.stateNode.containerInfo),je(e),null;case 10:return Rh(e.type._context),je(e),null;case 17:return it(e.type)&&El(),je(e),null;case 19:if(ce(pe),s=e.memoizedState,s===null)return je(e),null;if(r=(e.flags&128)!==0,l=s.rendering,l===null)if(r)es(s,!1);else{if(Te!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Nl(t),l!==null){for(e.flags|=128,es(s,!1),r=l.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>wi&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nl(l),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!de)return je(e),null}else 2*we()-s.renderingStartTime>wi&&n!==1073741824&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(n=s.last,n!==null?n.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=pe.current,se(pe,r?n&1|2:n&1),e):(je(e),null);case 22:case 23:return Hh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?lt&1073741824&&(je(e),e.subtreeFlags&6&&(e.flags|=8192)):je(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function AS(t,e){switch(Ih(e),e.tag){case 1:return it(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yi(),ce(rt),ce(He),Oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xh(e),null;case 13:if(ce(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(pe),null;case 4:return yi(),null;case 10:return Rh(e.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var Bo=!1,ze=!1,PS=typeof WeakSet=="function"?WeakSet:Set,z=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function kc(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Mp=!1;function xS(t,e){if(uc=_l,t=c_(),Eh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,d=0,m=0,g=t,_=null;t:for(;;){for(var A;g!==n||i!==0&&g.nodeType!==3||(a=l+i),g!==s||r!==0&&g.nodeType!==3||(c=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(A=g.firstChild)!==null;)_=g,g=A;for(;;){if(g===t)break t;if(_===n&&++d===i&&(a=l),_===s&&++m===r&&(c=l),(A=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=A}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(cc={focusedElem:t,selectionRange:n},_l=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var x=N.memoizedProps,j=N.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?x:kt(e.type,x),j);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(O){_e(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return N=Mp,Mp=!1,N}function ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kc(e,n,s)}i=i.next}while(i!==r)}}function ca(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function oy(t){var e=t.alternate;e!==null&&(t.alternate=null,oy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[Us],delete e[fc],delete e[fS],delete e[pS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ly(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ly(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(r!==4&&(t=t.child,t!==null))for(Nc(t,e,n),t=t.sibling;t!==null;)Nc(t,e,n),t=t.sibling}function Ac(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}var Pe=null,Rt=!1;function kn(t,e,n){for(n=n.child;n!==null;)ay(t,e,n),n=n.sibling}function ay(t,e,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:ze||Zr(n,e);case 6:var r=Pe,i=Rt;Pe=null,kn(t,e,n),Pe=r,Rt=i,Pe!==null&&(Rt?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Rt?(t=Pe,n=n.stateNode,t.nodeType===8?_u(t.parentNode,n):t.nodeType===1&&_u(t,n),Ds(t)):_u(Pe,n.stateNode));break;case 4:r=Pe,i=Rt,Pe=n.stateNode.containerInfo,Rt=!0,kn(t,e,n),Pe=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&kc(n,e,l),i=i.next}while(i!==r)}kn(t,e,n);break;case 1:if(!ze&&(Zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,e,a)}kn(t,e,n);break;case 21:kn(t,e,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,kn(t,e,n),ze=r):kn(t,e,n);break;default:kn(t,e,n)}}function Fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PS),e.forEach(function(r){var i=zS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Rt=!1;break e;case 3:Pe=a.stateNode.containerInfo,Rt=!0;break e;case 4:Pe=a.stateNode.containerInfo,Rt=!0;break e}a=a.return}if(Pe===null)throw Error(D(160));ay(s,l,i),Pe=null,Rt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){_e(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uy(e,t),e=e.sibling}function uy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ct(e,t),Ft(t),r&4){try{ys(3,t,t.return),ca(3,t)}catch(x){_e(t,t.return,x)}try{ys(5,t,t.return)}catch(x){_e(t,t.return,x)}}break;case 1:Ct(e,t),Ft(t),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(Ct(e,t),Ft(t),r&512&&n!==null&&Zr(n,n.return),t.flags&32){var i=t.stateNode;try{As(i,"")}catch(x){_e(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,l=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&xm(i,s),Zu(a,l);var d=Zu(a,s);for(l=0;l<c.length;l+=2){var m=c[l],g=c[l+1];m==="style"?bm(i,g):m==="dangerouslySetInnerHTML"?Lm(i,g):m==="children"?As(i,g):ah(i,m,g,d)}switch(a){case"input":Yu(i,s);break;case"textarea":Om(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?ri(i,!!s.multiple,A,!1):_!==!!s.multiple&&(s.defaultValue!=null?ri(i,!!s.multiple,s.defaultValue,!0):ri(i,!!s.multiple,s.multiple?[]:"",!1))}i[Us]=s}catch(x){_e(t,t.return,x)}}break;case 6:if(Ct(e,t),Ft(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){_e(t,t.return,x)}}break;case 3:if(Ct(e,t),Ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ds(e.containerInfo)}catch(x){_e(t,t.return,x)}break;case 4:Ct(e,t),Ft(t);break;case 13:Ct(e,t),Ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wh=we())),r&4&&Fp(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(ze=(d=ze)||m,Ct(e,t),ze=d):Ct(e,t),Ft(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(z=t,m=t.child;m!==null;){for(g=z=m;z!==null;){switch(_=z,A=_.child,_.tag){case 0:case 11:case 14:case 15:ys(4,_,_.return);break;case 1:Zr(_,_.return);var N=_.stateNode;if(typeof N.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(x){_e(r,n,x)}}break;case 5:Zr(_,_.return);break;case 22:if(_.memoizedState!==null){jp(g);continue}}A!==null?(A.return=_,z=A):jp(g)}m=m.sibling}e:for(m=null,g=t;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=g.stateNode,c=g.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Mm("display",l))}catch(x){_e(t,t.return,x)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(x){_e(t,t.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ct(e,t),Ft(t),r&4&&Fp(t);break;case 21:break;default:Ct(e,t),Ft(t)}}function Ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ly(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(As(i,""),r.flags&=-33);var s=bp(t);Ac(t,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=bp(t);Nc(t,a,l);break;default:throw Error(D(161))}}catch(c){_e(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OS(t,e,n){z=t,cy(t)}function cy(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Bo;if(!l){var a=i.alternate,c=a!==null&&a.memoizedState!==null||ze;a=Bo;var d=ze;if(Bo=l,(ze=c)&&!d)for(z=i;z!==null;)l=z,c=l.child,l.tag===22&&l.memoizedState!==null?zp(i):c!==null?(c.return=l,z=c):zp(i);for(;s!==null;)z=s,cy(s),s=s.sibling;z=i,Bo=a,ze=d}Up(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Up(t)}}function Up(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ze||ca(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sp(e,s,r);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sp(e,l,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Ds(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}ze||e.flags&512&&Rc(e)}catch(_){_e(e,e.return,_)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function jp(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function zp(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ca(4,e)}catch(c){_e(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){_e(e,i,c)}}var s=e.return;try{Rc(e)}catch(c){_e(e,s,c)}break;case 5:var l=e.return;try{Rc(e)}catch(c){_e(e,l,c)}}}catch(c){_e(e,e.return,c)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var DS=Math.ceil,xl=wn.ReactCurrentDispatcher,jh=wn.ReactCurrentOwner,vt=wn.ReactCurrentBatchConfig,Q=0,Ne=null,Ee=null,De=0,lt=0,ei=er(0),Te=0,Vs=null,Sr=0,ha=0,zh=0,vs=null,Je=null,Wh=0,wi=1/0,en=null,Ol=!1,Pc=null,Hn=null,Ho=!1,Fn=null,Dl=0,ws=0,xc=null,il=-1,sl=0;function Ye(){return Q&6?we():il!==-1?il:il=we()}function Vn(t){return t.mode&1?Q&2&&De!==0?De&-De:mS.transition!==null?(sl===0&&(sl=Ym()),sl):(t=te,t!==0||(t=window.event,t=t===void 0?16:t_(t.type)),t):1}function Dt(t,e,n,r){if(50<ws)throw ws=0,xc=null,Error(D(185));Js(t,n,r),(!(Q&2)||t!==Ne)&&(t===Ne&&(!(Q&2)&&(ha|=n),Te===4&&xn(t,De)),st(t,r),n===1&&Q===0&&!(e.mode&1)&&(wi=we()+500,la&&tr()))}function st(t,e){var n=t.callbackNode;mE(t,e);var r=ml(t,t===Ne?De:0);if(r===0)n!==null&&qf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qf(n),e===1)t.tag===0?gS(Wp.bind(null,t)):w_(Wp.bind(null,t)),hS(function(){!(Q&6)&&tr()}),n=null;else{switch(qm(r)){case 1:n=fh;break;case 4:n=Gm;break;case 16:n=gl;break;case 536870912:n=Km;break;default:n=gl}n=yy(n,hy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hy(t,e){if(il=-1,sl=0,Q&6)throw Error(D(327));var n=t.callbackNode;if(ai()&&t.callbackNode!==n)return null;var r=ml(t,t===Ne?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ll(t,r);else{e=r;var i=Q;Q|=2;var s=fy();(Ne!==t||De!==e)&&(en=null,wi=we()+500,_r(t,e));do try{bS();break}catch(a){dy(t,a)}while(!0);kh(),xl.current=s,Q=i,Ee!==null?e=0:(Ne=null,De=0,e=Te)}if(e!==0){if(e===2&&(i=ic(t),i!==0&&(r=i,e=Oc(t,i))),e===1)throw n=Vs,_r(t,0),xn(t,r),st(t,we()),n;if(e===6)xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!LS(i)&&(e=Ll(t,r),e===2&&(s=ic(t),s!==0&&(r=s,e=Oc(t,s))),e===1))throw n=Vs,_r(t,0),xn(t,r),st(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:ur(t,Je,en);break;case 3:if(xn(t,r),(r&130023424)===r&&(e=Wh+500-we(),10<e)){if(ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dc(ur.bind(null,t,Je,en),e);break}ur(t,Je,en);break;case 4:if(xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var l=31-Ot(r);s=1<<l,l=e[l],l>i&&(i=l),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DS(r/1960))-r,10<r){t.timeoutHandle=dc(ur.bind(null,t,Je,en),r);break}ur(t,Je,en);break;case 5:ur(t,Je,en);break;default:throw Error(D(329))}}}return st(t,we()),t.callbackNode===n?hy.bind(null,t):null}function Oc(t,e){var n=vs;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=Je,Je=n,e!==null&&Dc(e)),t}function Dc(t){Je===null?Je=t:Je.push.apply(Je,t)}function LS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~zh,e&=~ha,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ot(e),r=1<<n;t[n]=-1,e&=~r}}function Wp(t){if(Q&6)throw Error(D(327));ai();var e=ml(t,0);if(!(e&1))return st(t,we()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var r=ic(t);r!==0&&(e=r,n=Oc(t,r))}if(n===1)throw n=Vs,_r(t,0),xn(t,e),st(t,we()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Je,en),st(t,we()),null}function Bh(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(wi=we()+500,la&&tr())}}function Ir(t){Fn!==null&&Fn.tag===0&&!(Q&6)&&ai();var e=Q;Q|=1;var n=vt.transition,r=te;try{if(vt.transition=null,te=1,t)return t()}finally{te=r,vt.transition=n,Q=e,!(Q&6)&&tr()}}function Hh(){lt=ei.current,ce(ei)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:yi(),ce(rt),ce(He),Oh();break;case 5:xh(r);break;case 4:yi();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:Rh(r.type._context);break;case 22:case 23:Hh()}n=n.return}if(Ne=t,Ee=t=$n(t.current,null),De=lt=e,Te=0,Vs=null,zh=ha=Sr=0,Je=vs=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}fr=null}return t}function dy(t,e){do{var n=Ee;try{if(kh(),tl.current=Pl,Al){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(Er=0,ke=Se=ge=null,_s=!1,Ws=0,jh.current=null,n===null||n.return===null){Te=1,Vs=e,Ee=null;break}e:{var s=t,l=n.return,a=n,c=e;if(e=De,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=a,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var _=m.alternate;_?(m.updateQueue=_.updateQueue,m.memoizedState=_.memoizedState,m.lanes=_.lanes):(m.updateQueue=null,m.memoizedState=null)}var A=Np(l);if(A!==null){A.flags&=-257,Ap(A,l,a,s,e),A.mode&1&&Rp(s,d,e),e=A,c=d;var N=e.updateQueue;if(N===null){var x=new Set;x.add(c),e.updateQueue=x}else N.add(c);break e}else{if(!(e&1)){Rp(s,d,e),Vh();break e}c=Error(D(426))}}else if(de&&a.mode&1){var j=Np(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ap(j,l,a,s,e),Th(vi(c,a));break e}}s=c=vi(c,a),Te!==4&&(Te=2),vs===null?vs=[s]:vs.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=q_(s,c,e);Ep(s,T);break e;case 1:a=c;var w=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Hn===null||!Hn.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Q_(s,a,e);Ep(s,O);break e}}s=s.return}while(s!==null)}gy(n)}catch(b){e=b,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function fy(){var t=xl.current;return xl.current=Pl,t===null?Pl:t}function Vh(){(Te===0||Te===3||Te===2)&&(Te=4),Ne===null||!(Sr&268435455)&&!(ha&268435455)||xn(Ne,De)}function Ll(t,e){var n=Q;Q|=2;var r=fy();(Ne!==t||De!==e)&&(en=null,_r(t,e));do try{MS();break}catch(i){dy(t,i)}while(!0);if(kh(),Q=n,xl.current=r,Ee!==null)throw Error(D(261));return Ne=null,De=0,Te}function MS(){for(;Ee!==null;)py(Ee)}function bS(){for(;Ee!==null&&!lE();)py(Ee)}function py(t){var e=_y(t.alternate,t,lt);t.memoizedProps=t.pendingProps,e===null?gy(t):Ee=e,jh.current=null}function gy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AS(n,e),n!==null){n.flags&=32767,Ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Te=6,Ee=null;return}}else if(n=NS(n,e,lt),n!==null){Ee=n;return}if(e=e.sibling,e!==null){Ee=e;return}Ee=e=t}while(e!==null);Te===0&&(Te=5)}function ur(t,e,n){var r=te,i=vt.transition;try{vt.transition=null,te=1,FS(t,e,n,r)}finally{vt.transition=i,te=r}return null}function FS(t,e,n,r){do ai();while(Fn!==null);if(Q&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_E(t,s),t===Ne&&(Ee=Ne=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,yy(gl,function(){return ai(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vt.transition,vt.transition=null;var l=te;te=1;var a=Q;Q|=4,jh.current=null,xS(t,n),uy(n,t),rS(cc),_l=!!uc,cc=uc=null,t.current=n,OS(n),aE(),Q=a,te=l,vt.transition=s}else t.current=n;if(Ho&&(Ho=!1,Fn=t,Dl=i),s=t.pendingLanes,s===0&&(Hn=null),hE(n.stateNode),st(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=Pc,Pc=null,t;return Dl&1&&t.tag!==0&&ai(),s=t.pendingLanes,s&1?t===xc?ws++:(ws=0,xc=t):ws=0,tr(),null}function ai(){if(Fn!==null){var t=qm(Dl),e=vt.transition,n=te;try{if(vt.transition=null,te=16>t?16:t,Fn===null)var r=!1;else{if(t=Fn,Fn=null,Dl=0,Q&6)throw Error(D(331));var i=Q;for(Q|=4,z=t.current;z!==null;){var s=z,l=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(z=d;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:ys(8,m,s)}var g=m.child;if(g!==null)g.return=m,z=g;else for(;z!==null;){m=z;var _=m.sibling,A=m.return;if(oy(m),m===d){z=null;break}if(_!==null){_.return=A,z=_;break}z=A}}}var N=s.alternate;if(N!==null){var x=N.child;if(x!==null){N.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}z=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,z=l;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ys(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,z=T;break e}z=s.return}}var w=t.current;for(z=w;z!==null;){l=z;var C=l.child;if(l.subtreeFlags&2064&&C!==null)C.return=l,z=C;else e:for(l=w;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ca(9,a)}}catch(b){_e(a,a.return,b)}if(a===l){z=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,z=O;break e}z=a.return}}if(Q=i,tr(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(na,t)}catch{}r=!0}return r}finally{te=n,vt.transition=e}}return!1}function Bp(t,e,n){e=vi(n,e),e=q_(t,e,1),t=Bn(t,e,1),e=Ye(),t!==null&&(Js(t,1,e),st(t,e))}function _e(t,e,n){if(t.tag===3)Bp(t,t,n);else for(;e!==null;){if(e.tag===3){Bp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=vi(n,t),t=Q_(e,t,1),e=Bn(e,t,1),t=Ye(),e!==null&&(Js(e,1,t),st(e,t));break}}e=e.return}}function US(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(De&n)===n&&(Te===4||Te===3&&(De&130023424)===De&&500>we()-Wh?_r(t,0):zh|=n),st(t,e)}function my(t,e){e===0&&(t.mode&1?(e=Do,Do<<=1,!(Do&130023424)&&(Do=4194304)):e=1);var n=Ye();t=pn(t,e),t!==null&&(Js(t,e,n),st(t,n))}function jS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),my(t,n)}function zS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),my(t,n)}var _y;_y=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rt.current)tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tt=!1,RS(t,e,n);tt=!!(t.flags&131072)}else tt=!1,de&&e.flags&1048576&&E_(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var i=gi(e,He.current);li(e,n),i=Lh(null,e,r,t,i,n);var s=Mh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,it(r)?(s=!0,Sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ah(e),i.updater=ua,e.stateNode=i,i._reactInternals=e,vc(e,r,t,n),e=Sc(null,e,r,!0,s,n)):(e.tag=0,de&&s&&Sh(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BS(r),t=kt(r,t),i){case 0:e=Ec(null,e,r,t,n);break e;case 1:e=Op(null,e,r,t,n);break e;case 11:e=Pp(null,e,r,t,n);break e;case 14:e=xp(null,e,r,kt(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Ec(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Op(t,e,r,i,n);case 3:e:{if(ey(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,R_(t,e),Rl(e,r,null,n);var l=e.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(D(423)),e),e=Dp(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(D(424)),e),e=Dp(t,e,r,n,i);break e}else for(at=Wn(e.stateNode.containerInfo.firstChild),ut=e,de=!0,Nt=null,n=C_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){e=gn(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return N_(e),t===null&&mc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,hc(r,i)?l=null:s!==null&&hc(r,s)&&(e.flags|=32),Z_(t,e),Ge(t,e,l,n),e.child;case 6:return t===null&&mc(e),null;case 13:return ty(t,e,n);case 4:return Ph(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_i(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Pp(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,l=i.value,se(Cl,r._currentValue),r._currentValue=l,s!==null)if(Mt(s.value,l)){if(s.children===i.children&&!rt.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=un(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),_c(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(D(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),_c(l,n,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,li(e,n),i=wt(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),xp(t,e,r,i,n);case 15:return X_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),rl(t,e),e.tag=1,it(r)?(t=!0,Sl(e)):t=!1,li(e,n),Y_(e,r,i),vc(e,r,i,n),Sc(null,e,r,!0,t,n);case 19:return ny(t,e,n);case 22:return J_(t,e,n)}throw Error(D(156,e.tag))};function yy(t,e){return $m(t,e)}function WS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(t,e,n,r){return new WS(t,e,n,r)}function $h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BS(t){if(typeof t=="function")return $h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ch)return 11;if(t===hh)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=_t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,i,s){var l=2;if(r=t,typeof t=="function")$h(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case Vr:return yr(n.children,i,s,e);case uh:l=8,i|=8;break;case Hu:return t=_t(12,n,e,i|2),t.elementType=Hu,t.lanes=s,t;case Vu:return t=_t(13,n,e,i),t.elementType=Vu,t.lanes=s,t;case $u:return t=_t(19,n,e,i),t.elementType=$u,t.lanes=s,t;case Nm:return da(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case km:l=10;break e;case Rm:l=9;break e;case ch:l=11;break e;case hh:l=14;break e;case Nn:l=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=_t(l,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function yr(t,e,n,r){return t=_t(7,t,r,e),t.lanes=n,t}function da(t,e,n,r){return t=_t(22,t,r,e),t.elementType=Nm,t.lanes=n,t.stateNode={isHidden:!1},t}function Cu(t,e,n){return t=_t(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=_t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ou(0),this.expirationTimes=ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,r,i,s,l,a,c){return t=new HS(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ah(s),t}function VS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vy(t){if(!t)return Qn;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(it(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(it(n))return v_(t,n,e)}return e}function wy(t,e,n,r,i,s,l,a,c){return t=Gh(n,r,!0,t,i,s,l,a,c),t.context=vy(null),n=t.current,r=Ye(),i=Vn(n),s=un(r,i),s.callback=e??null,Bn(n,s,i),t.current.lanes=i,Js(t,i,r),st(t,r),t}function fa(t,e,n,r){var i=e.current,s=Ye(),l=Vn(i);return n=vy(n),e.context===null?e.context=n:e.pendingContext=n,e=un(s,l),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bn(i,e,l),t!==null&&(Dt(t,i,l,s),el(t,i,l)),l}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kh(t,e){Hp(t,e),(t=t.alternate)&&Hp(t,e)}function $S(){return null}var Ey=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yh(t){this._internalRoot=t}pa.prototype.render=Yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));fa(t,e,null,null)};pa.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){fa(null,t,null,null)}),e[fn]=null}};function pa(t){this._internalRoot=t}pa.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pn.length&&e!==0&&e<Pn[n].priority;n++);Pn.splice(n,0,t),n===0&&e_(t)}};function qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function GS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Ml(l);s.call(d)}}var l=wy(e,r,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=l,t[fn]=l.current,bs(t.nodeType===8?t.parentNode:t),Ir(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Ml(c);a.call(d)}}var c=Gh(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=c,t[fn]=c.current,bs(t.nodeType===8?t.parentNode:t),Ir(function(){fa(e,c,n,r)}),c}function ma(t,e,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var c=Ml(l);a.call(c)}}fa(e,l,t,i)}else l=GS(n,e,t,i,r);return Ml(l)}Qm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=as(e.pendingLanes);n!==0&&(ph(e,n|1),st(e,we()),!(Q&6)&&(wi=we()+500,tr()))}break;case 13:Ir(function(){var r=pn(t,1);if(r!==null){var i=Ye();Dt(r,t,1,i)}}),Kh(t,1)}};gh=function(t){if(t.tag===13){var e=pn(t,134217728);if(e!==null){var n=Ye();Dt(e,t,134217728,n)}Kh(t,134217728)}};Xm=function(t){if(t.tag===13){var e=Vn(t),n=pn(t,e);if(n!==null){var r=Ye();Dt(n,t,e,r)}Kh(t,e)}};Jm=function(){return te};Zm=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};tc=function(t,e,n){switch(e){case"input":if(Yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oa(r);if(!i)throw Error(D(90));Pm(r),Yu(r,i)}}}break;case"textarea":Om(t,n);break;case"select":e=n.value,e!=null&&ri(t,!!n.multiple,e,!1)}};jm=Bh;zm=Ir;var KS={usingClientEntryPoint:!1,Events:[eo,Yr,oa,Fm,Um,Bh]},ts={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YS={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hm(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||$S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{na=Vo.inject(YS),Bt=Vo}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(e))throw Error(D(200));return VS(t,e,null,n)};ht.createRoot=function(t,e){if(!qh(t))throw Error(D(299));var n=!1,r="",i=Ey;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,r,i),t[fn]=e.current,bs(t.nodeType===8?t.parentNode:t),new Yh(e)};ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=Hm(e),t=t===null?null:t.stateNode,t};ht.flushSync=function(t){return Ir(t)};ht.hydrate=function(t,e,n){if(!ga(e))throw Error(D(200));return ma(null,t,e,!0,n)};ht.hydrateRoot=function(t,e,n){if(!qh(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=Ey;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=wy(e,null,t,1,n??null,i,!1,s,l),t[fn]=e.current,bs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pa(e)};ht.render=function(t,e,n){if(!ga(e))throw Error(D(200));return ma(null,t,e,!1,n)};ht.unmountComponentAtNode=function(t){if(!ga(t))throw Error(D(40));return t._reactRootContainer?(Ir(function(){ma(null,null,t,!1,function(){t._reactRootContainer=null,t[fn]=null})}),!0):!1};ht.unstable_batchedUpdates=Bh;ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ga(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return ma(t,e,n,!1,r)};ht.version="18.3.1-next-f1338f8080-20240426";function Sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sy)}catch(t){console.error(t)}}Sy(),Sm.exports=ht;var qS=Sm.exports,Iy,$p=qS;Iy=$p.createRoot,$p.hydrateRoot;var Gp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(t,e){if(!t)throw Ni(e)},Ni=function(t){return new Error("Firebase Database ("+Ty.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],l=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(l&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|l&63)}}return e.join("")},Qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],l=i+1<t.length,a=l?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,m=s>>2,g=(s&3)<<4|a>>4;let _=(a&15)<<2|d>>6,A=d&63;c||(A=64,l||(_=64)),r.push(n[m],n[g],n[_],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||d==null||g==null)throw new XS;const _=s<<2|a>>4;if(r.push(_),d!==64){const A=a<<4&240|d>>2;if(r.push(A),g!==64){const N=d<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ky=function(t){const e=Cy(t);return Qh.encodeByteArray(e,!0)},bl=function(t){return ky(t).replace(/\./g,"")},Fl=function(t){try{return Qh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t){return Ry(void 0,t)}function Ry(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZS(n)||(t[n]=Ry(t[n],e[n]));return t}function ZS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=()=>e1().__FIREBASE_DEFAULTS__,n1=()=>{if(typeof process>"u"||typeof Gp>"u")return;const t=Gp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fl(t[1]);return e&&JSON.parse(e)},Xh=()=>{try{return t1()||n1()||r1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ny=t=>{var e,n;return(n=(e=Xh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ay=t=>{const e=Ny(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Py=()=>{var t;return(t=Xh())===null||t===void 0?void 0:t.config},xy=t=>{var e;return(e=Xh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bl(JSON.stringify(n)),bl(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function i1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function s1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o1(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ly(){return Ty.NODE_ADMIN===!0}function l1(){try{return typeof indexedDB=="object"}catch{return!1}}function a1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=u1,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],l=s?c1(s,r):"Error",a=`${this.serviceName}: ${l} (${i}).`;return new En(i,a,r)}}function c1(t,e){return t.replace(h1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const h1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=$s(Fl(s[0])||""),n=$s(Fl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},d1=function(t){const e=My(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},f1=function(t){const e=My(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Lc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ul(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function jl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],l=e[i];if(Kp(s)&&Kp(l)){if(!jl(s,l))return!1}else if(s!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let g=0;g<16;g++)r[g]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let g=0;g<16;g++)r[g]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let g=16;g<80;g++){const _=r[g-3]^r[g-8]^r[g-14]^r[g-16];r[g]=(_<<1|_>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],l=this.chain_[2],a=this.chain_[3],c=this.chain_[4],d,m;for(let g=0;g<80;g++){g<40?g<20?(d=a^s&(l^a),m=1518500249):(d=s^l^a,m=1859775393):g<60?(d=s&l|a&(s|l),m=2400959708):(d=s^l^a,m=3395469782);const _=(i<<5|i>>>27)+d+c+m+r[g]&4294967295;c=a,a=l,l=(s<<30|s>>>2)&4294967295,s=i,i=_}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let l=this.inbuf_;for(;i<n;){if(l===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[l]=e.charCodeAt(i),++l,++i,l===this.blockSize){this.compress_(s),l=0;break}}else for(;i<n;)if(s[l]=e[i],++l,++i,l===this.blockSize){this.compress_(s),l=0;break}}this.inbuf_=l,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function g1(t,e){const n=new m1(t,e);return n.subscribe.bind(n)}class m1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ru),i.error===void 0&&(i.error=Ru),i.complete===void 0&&(i.complete=Ru);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ru(){}function Zh(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,M(r<t.length,"Surrogate pair missing trail surrogate.");const l=t.charCodeAt(r)-56320;i=65536+(s<<10)+l}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ya=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _a;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E1(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,l]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&l.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const l=this.instances.get(i);return l&&e(l,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:w1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w1(t){return t===cr?void 0:t}function E1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new v1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const I1={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},T1=J.INFO,C1={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},k1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=C1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class va{constructor(e){this.name=e,this._logLevel=T1,this._logHandler=k1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const R1=(t,e)=>e.some(n=>t instanceof n);let Yp,qp;function N1(){return Yp||(Yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A1(){return qp||(qp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const by=new WeakMap,Mc=new WeakMap,Fy=new WeakMap,Nu=new WeakMap,ed=new WeakMap;function P1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",l)},s=()=>{n(Gn(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&by.set(n,t)}).catch(()=>{}),ed.set(e,t),e}function x1(t){if(Mc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",l),t.removeEventListener("abort",l)},s=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",l),t.addEventListener("abort",l)});Mc.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O1(t){bc=t(bc)}function D1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Au(this),e,...n);return Fy.set(r,e.sort?e.sort():[e]),Gn(r)}:A1().includes(t)?function(...e){return t.apply(Au(this),e),Gn(by.get(this))}:function(...e){return Gn(t.apply(Au(this),e))}}function L1(t){return typeof t=="function"?D1(t):(t instanceof IDBTransaction&&x1(t),R1(t,N1())?new Proxy(t,bc):t)}function Gn(t){if(t instanceof IDBRequest)return P1(t);if(Nu.has(t))return Nu.get(t);const e=L1(t);return e!==t&&(Nu.set(t,e),ed.set(e,t)),e}const Au=t=>ed.get(t);function M1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const l=indexedDB.open(t,e),a=Gn(l);return r&&l.addEventListener("upgradeneeded",c=>{r(Gn(l.result),c.oldVersion,c.newVersion,Gn(l.transaction),c)}),n&&l.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const b1=["get","getKey","getAll","getAllKeys","count"],F1=["put","add","delete","clear"],Pu=new Map;function Qp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pu.get(e))return Pu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=F1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||b1.includes(n)))return;const s=async function(l,...a){const c=this.transaction(l,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&c.done]))[0]};return Pu.set(e,s),s}O1(t=>({...t,get:(e,n,r)=>Qp(e,n)||t.get(e,n,r),has:(e,n)=>!!Qp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function j1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fc="@firebase/app",Xp="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new va("@firebase/app"),z1="@firebase/app-compat",W1="@firebase/analytics-compat",B1="@firebase/analytics",H1="@firebase/app-check-compat",V1="@firebase/app-check",$1="@firebase/auth",G1="@firebase/auth-compat",K1="@firebase/database",Y1="@firebase/data-connect",q1="@firebase/database-compat",Q1="@firebase/functions",X1="@firebase/functions-compat",J1="@firebase/installations",Z1="@firebase/installations-compat",eI="@firebase/messaging",tI="@firebase/messaging-compat",nI="@firebase/performance",rI="@firebase/performance-compat",iI="@firebase/remote-config",sI="@firebase/remote-config-compat",oI="@firebase/storage",lI="@firebase/storage-compat",aI="@firebase/firestore",uI="@firebase/vertexai",cI="@firebase/firestore-compat",hI="firebase",dI="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="[DEFAULT]",fI={[Fc]:"fire-core",[z1]:"fire-core-compat",[B1]:"fire-analytics",[W1]:"fire-analytics-compat",[V1]:"fire-app-check",[H1]:"fire-app-check-compat",[$1]:"fire-auth",[G1]:"fire-auth-compat",[K1]:"fire-rtdb",[Y1]:"fire-data-connect",[q1]:"fire-rtdb-compat",[Q1]:"fire-fn",[X1]:"fire-fn-compat",[J1]:"fire-iid",[Z1]:"fire-iid-compat",[eI]:"fire-fcm",[tI]:"fire-fcm-compat",[nI]:"fire-perf",[rI]:"fire-perf-compat",[iI]:"fire-rc",[sI]:"fire-rc-compat",[oI]:"fire-gcs",[lI]:"fire-gcs-compat",[aI]:"fire-fst",[cI]:"fire-fst-compat",[uI]:"fire-vertex","fire-js":"fire-js",[hI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map,pI=new Map,jc=new Map;function Jp(t,e){try{t.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tr(t){const e=t.name;if(jc.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;jc.set(e,t);for(const n of zl.values())Jp(n,t);for(const n of pI.values())Jp(n,t);return!0}function wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new no("app","Firebase",gI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=dI;function Uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(n||(n=Py()),!n)throw Kn.create("no-options");const s=zl.get(i);if(s){if(jl(n,s.options)&&jl(r,s.config))return s;throw Kn.create("duplicate-app",{appName:i})}const l=new S1(i);for(const c of jc.values())l.addComponent(c);const a=new mI(n,r,l);return zl.set(i,a),a}function td(t=Uc){const e=zl.get(t);if(!e&&t===Uc&&Py())return Uy();if(!e)throw Kn.create("no-app",{appName:t});return e}function Vt(t,e,n){var r;let i=(r=fI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),l=e.match(/\s|\//);if(s||l){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&l&&a.push("and"),l&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(a.join(" "));return}Tr(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="firebase-heartbeat-database",yI=1,Gs="firebase-heartbeat-store";let xu=null;function jy(){return xu||(xu=M1(_I,yI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),xu}async function vI(t){try{const n=(await jy()).transaction(Gs),r=await n.objectStore(Gs).get(zy(t));return await n.done,r}catch(e){if(e instanceof En)mn.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(n.message)}}}async function Zp(t,e){try{const r=(await jy()).transaction(Gs,"readwrite");await r.objectStore(Gs).put(e,zy(t)),await r.done}catch(n){if(n instanceof En)mn.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function zy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=1024,EI=30*24*60*60*1e3;class SI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const a=new Date(l.date).valueOf();return Date.now()-a<=EI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=eg(),{heartbeatsToSend:r,unsentEntries:i}=II(this._heartbeatsCache.heartbeats),s=bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return mn.warn(n),""}}}function eg(){return new Date().toISOString().substring(0,10)}function II(t,e=wI){const n=[];let r=t.slice();for(const i of t){const s=n.find(l=>l.agent===i.agent);if(s){if(s.dates.push(i.date),tg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l1()?a1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tg(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t){Tr(new Xn("platform-logger",e=>new U1(e),"PRIVATE")),Tr(new Xn("heartbeat",e=>new SI(e),"PRIVATE")),Vt(Fc,Xp,t),Vt(Fc,Xp,"esm2017"),Vt("fire-js","")}CI("");var ng={};const rg="@firebase/database",ig="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wy="";function kI(t){Wy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new RI(e)}}catch{}return new NI},gr=By("localStorage"),AI=By("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new va("@firebase/database"),PI=function(){let t=1;return function(){return t++}}(),Hy=function(t){const e=y1(t),n=new p1;n.update(e);const r=n.digest();return Qh.encodeByteArray(r)},ro=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ro.apply(null,r):typeof r=="object"?e+=Oe(r):e+=r,e+=" "}return e};let Es=null,sg=!0;const xI=function(t,e){M(!e,"Can't turn on custom loggers persistently."),ui.logLevel=J.VERBOSE,Es=ui.log.bind(ui)},We=function(...t){if(sg===!0&&(sg=!1,Es===null&&AI.get("logging_enabled")===!0&&xI()),Es){const e=ro.apply(null,t);Es(e)}},io=function(t){return function(...e){We(t,...e)}},zc=function(...t){const e="FIREBASE INTERNAL ERROR: "+ro(...t);ui.error(e)},_n=function(...t){const e=`FIREBASE FATAL ERROR: ${ro(...t)}`;throw ui.error(e),new Error(e)},ot=function(...t){const e="FIREBASE WARNING: "+ro(...t);ui.warn(e)},OI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},DI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Si="[MIN_NAME]",Cr="[MAX_NAME]",Pi=function(t,e){if(t===e)return 0;if(t===Si||e===Cr)return-1;if(e===Si||t===Cr)return 1;{const n=og(t),r=og(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},LI=function(t,e){return t===e?0:t<e?-1:1},ns=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},nd=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Oe(e[r]),n+=":",n+=nd(t[e[r]]);return n+="}",n},$y=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function St(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gy=function(t){M(!Vy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,l,a,c;t===0?(s=0,l=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,l=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,l=Math.round(t/Math.pow(2,1-r-n))));const d=[];for(c=n;c;c-=1)d.push(l%2?1:0),l=Math.floor(l/2);for(c=e;c;c-=1)d.push(s%2?1:0),s=Math.floor(s/2);d.push(i?1:0),d.reverse();const m=d.join("");let g="";for(c=0;c<64;c+=8){let _=parseInt(m.substr(c,8),2).toString(16);_.length===1&&(_="0"+_),g=g+_}return g.toLowerCase()},MI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},FI=new RegExp("^-?(0*)\\d{1,10}$"),UI=-2147483648,jI=2147483647,og=function(t){if(FI.test(t)){const e=Number(t);if(e>=UI&&e<=jI)return e}return null},xi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},zI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ss=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class ll{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ll.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="5",Ky="v",Yy="s",qy="r",Qy="f",Xy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jy="ls",Zy="p",Wc="ac",ev="websocket",tv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n,r,i,s=!1,l="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=l,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function rv(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let r;if(e===ev)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===tv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HI(t)&&(n.ns=t.namespace);const i=[];return St(n,(s,l)=>{i.push(s+"="+l)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.counters_={}}incrementCounter(e,n=1){Sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou={},Du={};function id(t){const e=t.toString();return Ou[e]||(Ou[e]=new VI),Ou[e]}function $I(t,e){const n=t.toString();return Du[n]||(Du[n]=e()),Du[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&xi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="start",KI="close",YI="pLPCommand",qI="pRTLPCB",iv="id",sv="pw",ov="ser",QI="cb",XI="seg",JI="ts",ZI="d",eT="dframe",lv=1870,av=30,tT=lv-av,nT=25e3,rT=3e4;class ti{constructor(e,n,r,i,s,l,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=l,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=io(e),this.stats_=id(n),this.urlFn=c=>(this.appCheckToken&&(c[Wc]=this.appCheckToken),rv(n,tv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new GI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rT)),DI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sd((...s)=>{const[l,a,c,d,m]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===lg)this.id=a,this.password=c;else if(l===KI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...s)=>{const[l,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(l,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[lg]="t",r[ov]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[QI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ky]=rd,this.transportSessionId&&(r[Yy]=this.transportSessionId),this.lastSessionId&&(r[Jy]=this.lastSessionId),this.applicationId&&(r[Zy]=this.applicationId),this.appCheckToken&&(r[Wc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xy.test(location.hostname)&&(r[qy]=Qy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ti.forceAllow_=!0}static forceDisallow(){ti.forceDisallow_=!0}static isAvailable(){return ti.forceAllow_?!0:!ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!MI()&&!bI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ky(n),i=$y(r,tT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[eT]="t",r[iv]=e,r[sv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=PI(),window[YI+this.uniqueCallbackIdentifier]=e,window[qI+this.uniqueCallbackIdentifier]=n,this.myIFrame=sd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[iv]=this.myID,e[sv]=this.myPW,e[ov]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+av+r.length<=lv;){const l=this.pendingSegs.shift();r=r+"&"+XI+i+"="+l.seg+"&"+JI+i+"="+l.ts+"&"+ZI+i+"="+l.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(nT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=16384,sT=45e3;let Wl=null;typeof MozWebSocket<"u"?Wl=MozWebSocket:typeof WebSocket<"u"&&(Wl=WebSocket);class At{constructor(e,n,r,i,s,l,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=io(this.connId),this.stats_=id(n),this.connURL=At.connectionURL_(n,l,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const l={};return l[Ky]=rd,typeof location<"u"&&location.hostname&&Xy.test(location.hostname)&&(l[qy]=Qy),n&&(l[Yy]=n),r&&(l[Jy]=r),i&&(l[Wc]=i),s&&(l[Zy]=s),rv(e,ev,l)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gr.set("previous_websocket_failure",!0);try{let r;Ly(),this.mySock=new Wl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Wl!==null&&!At.forceDisallow_}static previouslyFailed(){return gr.isInMemoryStorage||gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=$s(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$y(n,iT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}At.responsesRequiredToBeHealthy=2;At.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{static get ALL_TRANSPORTS(){return[ti,At]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=At&&At.isAvailable();let r=n&&!At.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[At];else{const i=this.transports_=[];for(const s of Ks.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ks.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ks.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=6e4,lT=5e3,aT=10*1024,uT=100*1024,Lu="t",ag="d",cT="s",ug="r",hT="e",cg="o",hg="a",dg="n",fg="p",dT="h";class fT{constructor(e,n,r,i,s,l,a,c,d,m){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=l,this.onReady_=a,this.onDisconnect_=c,this.onKill_=d,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=io("c:"+this.id+":"),this.transportManager_=new Ks(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lu in e){const n=e[Lu];n===hg?this.upgradeIfSecondaryHealthy_():n===ug?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ns("t",e),r=ns("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ns("t",e),r=ns("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ns(Lu,e);if(ag in e){const r=e[ag];if(n===dT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cT?this.onConnectionShutdown_(r):n===ug?this.onReset_(r):n===hT?zc("Server Error: "+r):n===cg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),rd!==r&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends cv{static getInstance(){return new Bl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=32,gg=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new he("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Jn(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function hv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function dv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof he)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new he(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function yt(t,e){const n=G(t),r=G(e);if(n===null)return e;if(n===r)return yt(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function pv(t,e){if(Jn(t)!==Jn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Jn(t)>Jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class gT{constructor(e,n){this.errorPrefix_=n,this.parts_=dv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ya(this.parts_[r]);gv(this)}}function mT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ya(e),gv(t)}function _T(t){const e=t.parts_.pop();t.byteLength_-=ya(e),t.parts_.length>0&&(t.byteLength_-=1)}function gv(t){if(t.byteLength_>gg)throw new Error(t.errorPrefix_+"has a key path longer than "+gg+" bytes ("+t.byteLength_+").");if(t.parts_.length>pg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pg+") or object contains a cycle "+hr(t))}function hr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od extends cv{static getInstance(){return new od}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=1e3,yT=60*5*1e3,mg=30*1e3,vT=1.3,wT=3e4,ET="server_kill",_g=3;class cn extends uv{constructor(e,n,r,i,s,l,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=l,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=cn.nextPersistentConnectionId_++,this.log_=io("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rs,this.maxReconnectDelay_=yT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ly())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");od.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Oe(s)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new _a,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const a=l.d;l.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+s),this.listens.has(l)||this.listens.set(l,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(l).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(l).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},l="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(l,s,a=>{const c=a.d,d=a.s;cn.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),d!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(d,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sn(e,"w")){const r=Ei(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||f1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=d1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,l=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},l="n";i&&(s.q=r,s.t=i),this.sendRequest(l,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,l=>{i&&setTimeout(()=>{i(l.s,l.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const l={p:n,d:r};s!==void 0&&(l.h=s),this.outstandingPuts_.push({action:e,request:l,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zc("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wT&&(this.reconnectDelay_=rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cn.nextConnectionId_++,s=this.lastSessionId;let l=!1,a=null;const c=function(){a?a.close():(l=!0,r())},d=function(g){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(g)};this.realtime_={close:c,sendRequest:d};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[g,_]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);l?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=g&&g.accessToken,this.appCheckToken_=_&&_.token,a=new fT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,A=>{ot(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(ET)},s))}catch(g){this.log_("Failed to get token: "+g),l||(this.repoInfo_.nodeAdmin&&ot(g),c())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lc(this.interruptReasons_)&&(this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>nd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new he(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){We("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_g&&(this.reconnectDelay_=mg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){We("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_g&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wy.replace(/\./g,"-")]=1,Jh()?e["framework.cordova"]=1:Dy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bl.getInstance().currentlyOnline();return Lc(this.interruptReasons_)&&e}}cn.nextPersistentConnectionId_=0;cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(Si,e),i=new q(Si,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;class mv extends Ea{static get __EMPTY_NODE(){return $o}static set __EMPTY_NODE(e){$o=e}compare(e,n){return Pi(e.name,n.name)}isDefinedOn(e){throw Ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(Cr,$o)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,$o)}toString(){return".key"}}const ci=new mv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=n?r(e.key,n):1,i&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Re.RED,this.left=i??nt.EMPTY_NODE,this.right=s??nt.EMPTY_NODE}copy(e,n,r,i,s){return new Re(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class ST{copy(e,n,r,i,s){return this}insert(e,n,r){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Go(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Go(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Go(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Go(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new ST;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t,e){return Pi(t.name,e.name)}function ld(t,e){return Pi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;function TT(t){Bc=t}const _v=function(t){return typeof t=="number"?"number:"+Gy(t):"string:"+t},yv=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sn(e,".sv"),"Priority must be a string or number.")}else M(t===Bc||t.isEmpty(),"priority of unexpected type.");M(t===Bc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yg;class Ce{static set __childrenNodeConstructor(e){yg=e}static get __childrenNodeConstructor(){return yg}constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:G(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=G(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(M(r!==".priority"||Jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_v(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gy(this.value_):e+=this.value_,this.lazyHash_=Hy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),s=Ce.VALUE_TYPE_ORDER.indexOf(r);return M(i>=0,"Unknown leaf type: "+n),M(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vv,wv;function CT(t){vv=t}function kT(t){wv=t}class RT extends Ea{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Pi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(Cr,new Ce("[PRIORITY-POST]",wv))}makePost(e,n){const r=vv(e);return new q(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const Be=new RT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=Math.log(2);class AT{constructor(e){const n=s=>parseInt(Math.log(s)/NT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Hl=function(t,e,n,r){t.sort(e);const i=function(c,d){const m=d-c;let g,_;if(m===0)return null;if(m===1)return g=t[c],_=n?n(g):g,new Re(_,g.node,Re.BLACK,null,null);{const A=parseInt(m/2,10)+c,N=i(c,A),x=i(A+1,d);return g=t[A],_=n?n(g):g,new Re(_,g.node,Re.BLACK,N,x)}},s=function(c){let d=null,m=null,g=t.length;const _=function(N,x){const j=g-N,T=g;g-=N;const w=i(j+1,T),C=t[j],O=n?n(C):C;A(new Re(O,C.node,x,null,w))},A=function(N){d?(d.left=N,d=N):(m=N,d=N)};for(let N=0;N<c.count;++N){const x=c.nextBitIsOne(),j=Math.pow(2,c.count-(N+1));x?_(j,Re.BLACK):(_(j,Re.BLACK),_(j,Re.RED))}return m},l=new AT(t.length),a=s(l);return new nt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu;const Br={};class sn{static get Default(){return M(Br&&Be,"ChildrenNode.ts has not been loaded"),Mu=Mu||new sn({".priority":Br},{".priority":Be}),Mu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return Sn(this.indexSet_,e.toString())}addIndex(e,n){M(e!==ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let l=s.getNext();for(;l;)i=i||e.isDefinedOn(l.node),r.push(l),l=s.getNext();let a;i?a=Hl(r,e.getCompare()):a=Br;const c=e.toString(),d=Object.assign({},this.indexSet_);d[c]=e;const m=Object.assign({},this.indexes_);return m[c]=a,new sn(m,d)}addToIndexes(e,n){const r=Ul(this.indexes_,(i,s)=>{const l=Ei(this.indexSet_,s);if(M(l,"Missing index implementation for "+s),i===Br)if(l.isDefinedOn(e.node)){const a=[],c=n.getIterator(q.Wrap);let d=c.getNext();for(;d;)d.name!==e.name&&a.push(d),d=c.getNext();return a.push(e),Hl(a,l.getCompare())}else return Br;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new q(e.name,a))),c.insert(e,e.node)}});return new sn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ul(this.indexes_,i=>{if(i===Br)return i;{const s=n.get(e.name);return s?i.remove(new q(e.name,s)):i}});return new sn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;class Z{static get EMPTY_NODE(){return is||(is=new Z(new nt(ld),null,sn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&yv(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||is}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?is:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const l=i.isEmpty()?is:this.priorityNode_;return new Z(i,l,s)}}updateChild(e,n){const r=G(e);if(r===null)return n;{M(G(e)!==".priority"||Jn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Be,(l,a)=>{n[l]=a.val(e),r++,s&&Z.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):s=!1}),!e&&s&&i<2*r){const l=[];for(const a in n)l[a]=n[a];return l}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_v(this.getPriority().val())+":"),this.forEachChild(Be,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Hy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===so?-1:0}withIndex(e){if(e===ci||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Be),i=n.getIterator(Be);let s=r.getNext(),l=i.getNext();for(;s&&l;){if(s.name!==l.name||!s.node.equals(l.node))return!1;s=r.getNext(),l=i.getNext()}return s===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===ci?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PT extends Z{constructor(){super(new nt(ld),Z.EMPTY_NODE,sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const so=new PT;Object.defineProperties(q,{MIN:{value:new q(Si,Z.EMPTY_NODE)},MAX:{value:new q(Cr,so)}});mv.__EMPTY_NODE=Z.EMPTY_NODE;Ce.__childrenNodeConstructor=Z;TT(so);kT(so);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=!0;function xe(t,e=null){if(t===null)return Z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,xe(e))}if(!(t instanceof Array)&&xT){const n=[];let r=!1;if(St(t,(l,a)=>{if(l.substring(0,1)!=="."){const c=xe(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new q(l,c)))}}),n.length===0)return Z.EMPTY_NODE;const s=Hl(n,IT,l=>l.name,ld);if(r){const l=Hl(n,Be.getCompare());return new Z(s,xe(e),new sn({".priority":l},{".priority":Be}))}else return new Z(s,xe(e),sn.Default)}else{let n=Z.EMPTY_NODE;return St(t,(r,i)=>{if(Sn(t,r)&&r.substring(0,1)!=="."){const s=xe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(xe(e))}}CT(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT extends Ea{constructor(e){super(),this.indexPath_=e,M(!K(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Pi(e.name,n.name):s}makePost(e,n){const r=xe(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,so);return new q(Cr,e)}toString(){return dv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT extends Ea{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Pi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=xe(e);return new q(n,r)}toString(){return".value"}}const LT=new DT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){return{type:"value",snapshotNode:t}}function bT(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function FT(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function UT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Si}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new ad;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Be?n="$priority":t.index_===LT?n="$value":t.index_===ci?n="$key":(M(t.index_ instanceof OT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Oe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Oe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Oe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Eg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends uv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=io("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const l=Vl.getListenId_(e,r),a={};this.listens_[l]=a;const c=wg(e._queryParams);this.restRequest_(s+".json",c,(d,m)=>{let g=m;if(d===404&&(g=null,d=null),d===null&&this.onDataUpdate_(s,g,!1,r),Ei(this.listens_,l)===a){let _;d?d===401?_="permission_denied":_="rest_error:"+d:_="ok",i(_,null)}})}unlisten(e,n){const r=Vl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=wg(e._queryParams),r=e._path.toString(),i=new _a;return this.restRequest_(r+".json",n,(s,l)=>{let a=l;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ai(n);this.log_("Sending REST request for "+l);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+l+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=$s(a.responseText)}catch{ot("Failed to parse JSON response for "+l+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&ot("Got unsuccessful REST response for "+l+" Status: "+a.status),r(a.status);r=null}},a.open("GET",l,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){return{value:null,children:new Map}}function Ev(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=G(e);t.children.has(r)||t.children.set(r,$l());const i=t.children.get(r);e=ue(e),Ev(i,e,n)}}function Hc(t,e,n){t.value!==null?n(e,t.value):zT(t,(r,i)=>{const s=new he(e.toString()+"/"+r);Hc(i,s,n)})}function zT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&St(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=10*1e3,BT=30*1e3,HT=5*60*1e3;class VT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WT(e);const r=Sg+(BT-Sg)*Math.random();Ss(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;St(e,(i,s)=>{s>0&&Sn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*HT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wt||(Wt={}));function Sv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Iv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Tv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Wt.ACK_USER_WRITE,this.source=Sv()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Gl(ne(),n,this.revert)}}else return M(G(this.path)===e,"operationForChild called for unrelated child."),new Gl(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Wt.OVERWRITE}operationForChild(e){return K(this.path)?new kr(this.source,ne(),this.snap.getImmediateChild(e)):new kr(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Wt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new kr(this.source,ne(),n.value):new Ys(this.source,ne(),n)}else return M(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ys(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function $T(t,e,n,r){const i=[],s=[];return e.forEach(l=>{l.type==="child_changed"&&t.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&s.push(UT(l.childName,l.snapshotNode))}),ss(t,i,"child_removed",e,r,n),ss(t,i,"child_added",e,r,n),ss(t,i,"child_moved",s,r,n),ss(t,i,"child_changed",e,r,n),ss(t,i,"value",e,r,n),i}function ss(t,e,n,r,i,s){const l=r.filter(a=>a.type===n);l.sort((a,c)=>KT(t,a,c)),l.forEach(a=>{const c=GT(t,a,s);i.forEach(d=>{d.respondsTo(a.type)&&e.push(d.createEvent(c,t.query_))})})}function GT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function KT(t,e,n){if(e.childName==null||n.childName==null)throw Ni("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t,e){return{eventCache:t,serverCache:e}}function Is(t,e,n,r){return Cv(new ud(e,n,r),t.serverCache)}function kv(t,e,n,r){return Cv(t.eventCache,new ud(e,n,r))}function Vc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu;const YT=()=>(bu||(bu=new nt(LI)),bu);class ae{static fromObject(e){let n=new ae(null);return St(e,(r,i)=>{n=n.set(new he(r),i)}),n}constructor(e,n=YT()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(K(e))return null;{const r=G(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ue(e),n);return s!=null?{path:Ie(new he(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=G(e),r=this.children.get(n);return r!==null?r.subtree(ue(e)):new ae(null)}}set(e,n){if(K(e))return new ae(n,this.children);{const r=G(e),s=(this.children.get(r)||new ae(null)).set(ue(e),n),l=this.children.insert(r,s);return new ae(this.value,l)}}remove(e){if(K(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=G(e),r=this.children.get(n);if(r){const i=r.remove(ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ae(null):new ae(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=G(e),r=this.children.get(n);return r?r.get(ue(e)):null}}setTree(e,n){if(K(e))return n;{const r=G(e),s=(this.children.get(r)||new ae(null)).setTree(ue(e),n);let l;return s.isEmpty()?l=this.children.remove(r):l=this.children.insert(r,s),new ae(this.value,l)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=G(e),l=this.children.get(s);return l?l.findOnPath_(ue(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=G(e),s=this.children.get(i);return s?s.foreachOnPath_(ue(e),Ie(n,i),r):new ae(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new ae(null))}}function Ts(t,e,n){if(K(e))return new Lt(new ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const l=yt(i,e);return s=s.updateChild(l,n),new Lt(t.writeTree_.set(i,s))}else{const i=new ae(n),s=t.writeTree_.setTree(e,i);return new Lt(s)}}}function Ig(t,e,n){let r=t;return St(n,(i,s)=>{r=Ts(r,Ie(e,i),s)}),r}function Tg(t,e){if(K(e))return Lt.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new Lt(n)}}function $c(t,e){return Dr(t,e)!=null}function Dr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(yt(n.path,e)):null}function Cg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(r,i)=>{e.push(new q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new q(r,i.value))}),e}function Yn(t,e){if(K(e))return t;{const n=Dr(t,e);return n!=null?new Lt(new ae(n)):new Lt(t.writeTree_.subtree(e))}}function Gc(t){return t.writeTree_.isEmpty()}function Ii(t,e){return Rv(ne(),t.writeTree_,e)}function Rv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(M(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Rv(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e){return Dv(e,t)}function qT(t,e,n,r,i){M(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ts(t.visibleWrites,e,n)),t.lastWriteId=r}function QT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function XT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,l=t.allWrites.length-1;for(;i&&l>=0;){const a=t.allWrites[l];a.visible&&(l>=n&&JT(a,r.path)?i=!1:Pt(r.path,a.path)&&(s=!0)),l--}if(i){if(s)return ZT(t),!0;if(r.snap)t.visibleWrites=Tg(t.visibleWrites,r.path);else{const a=r.children;St(a,c=>{t.visibleWrites=Tg(t.visibleWrites,Ie(r.path,c))})}return!0}else return!1}function JT(t,e){if(t.snap)return Pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pt(Ie(t.path,n),e))return!0;return!1}function ZT(t){t.visibleWrites=Av(t.allWrites,eC,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function eC(t){return t.visible}function Av(t,e,n){let r=Lt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const l=s.path;let a;if(s.snap)Pt(n,l)?(a=yt(n,l),r=Ts(r,a,s.snap)):Pt(l,n)&&(a=yt(l,n),r=Ts(r,ne(),s.snap.getChild(a)));else if(s.children){if(Pt(n,l))a=yt(n,l),r=Ig(r,a,s.children);else if(Pt(l,n))if(a=yt(l,n),K(a))r=Ig(r,ne(),s.children);else{const c=Ei(s.children,G(a));if(c){const d=c.getChild(ue(a));r=Ts(r,ne(),d)}}}else throw Ni("WriteRecord should have .snap or .children")}}return r}function Pv(t,e,n,r,i){if(!r&&!i){const s=Dr(t.visibleWrites,e);if(s!=null)return s;{const l=Yn(t.visibleWrites,e);if(Gc(l))return n;if(n==null&&!$c(l,ne()))return null;{const a=n||Z.EMPTY_NODE;return Ii(l,a)}}}else{const s=Yn(t.visibleWrites,e);if(!i&&Gc(s))return n;if(!i&&n==null&&!$c(s,ne()))return null;{const l=function(d){return(d.visible||i)&&(!r||!~r.indexOf(d.writeId))&&(Pt(d.path,e)||Pt(e,d.path))},a=Av(t.allWrites,l,e),c=n||Z.EMPTY_NODE;return Ii(a,c)}}}function tC(t,e,n){let r=Z.EMPTY_NODE;const i=Dr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Be,(s,l)=>{r=r.updateImmediateChild(s,l)}),r;if(n){const s=Yn(t.visibleWrites,e);return n.forEachChild(Be,(l,a)=>{const c=Ii(Yn(s,new he(l)),a);r=r.updateImmediateChild(l,c)}),Cg(s).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}else{const s=Yn(t.visibleWrites,e);return Cg(s).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}}function nC(t,e,n,r,i){M(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if($c(t.visibleWrites,s))return null;{const l=Yn(t.visibleWrites,s);return Gc(l)?i.getChild(n):Ii(l,i.getChild(n))}}function rC(t,e,n,r){const i=Ie(e,n),s=Dr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const l=Yn(t.visibleWrites,i);return Ii(l,r.getNode().getImmediateChild(n))}else return null}function iC(t,e){return Dr(t.visibleWrites,e)}function sC(t,e,n,r,i,s,l){let a;const c=Yn(t.visibleWrites,e),d=Dr(c,ne());if(d!=null)a=d;else if(n!=null)a=Ii(c,n);else return[];if(a=a.withIndex(l),!a.isEmpty()&&!a.isLeafNode()){const m=[],g=l.getCompare(),_=s?a.getReverseIteratorFrom(r,l):a.getIteratorFrom(r,l);let A=_.getNext();for(;A&&m.length<i;)g(A,r)!==0&&m.push(A),A=_.getNext();return m}else return[]}function oC(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function Kc(t,e,n,r){return Pv(t.writeTree,t.treePath,e,n,r)}function xv(t,e){return tC(t.writeTree,t.treePath,e)}function kg(t,e,n,r){return nC(t.writeTree,t.treePath,e,n,r)}function Kl(t,e){return iC(t.writeTree,Ie(t.treePath,e))}function lC(t,e,n,r,i,s){return sC(t.writeTree,t.treePath,e,n,r,i,s)}function cd(t,e,n){return rC(t.writeTree,t.treePath,e,n)}function Ov(t,e){return Dv(Ie(t.treePath,e),t.writeTree)}function Dv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,vg(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,FT(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,bT(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,vg(r,e.snapshotNode,i.oldSnap));else throw Ni("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Lv=new uC;class hd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ud(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),s=lC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function cC(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hC(t,e,n,r,i){const s=new aC;let l,a;if(n.type===Wt.OVERWRITE){const d=n;d.source.fromUser?l=Yc(t,e,d.path,d.snap,r,i,s):(M(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered()&&!K(d.path),l=Yl(t,e,d.path,d.snap,r,i,a,s))}else if(n.type===Wt.MERGE){const d=n;d.source.fromUser?l=fC(t,e,d.path,d.children,r,i,s):(M(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered(),l=qc(t,e,d.path,d.children,r,i,a,s))}else if(n.type===Wt.ACK_USER_WRITE){const d=n;d.revert?l=mC(t,e,d.path,r,i,s):l=pC(t,e,d.path,d.affectedTree,r,i,s)}else if(n.type===Wt.LISTEN_COMPLETE)l=gC(t,e,n.path,r,s);else throw Ni("Unknown operation type: "+n.type);const c=s.getChanges();return dC(e,l,c),{viewCache:l,changes:c}}function dC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Vc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(MT(Vc(e)))}}function Mv(t,e,n,r,i,s){const l=e.eventCache;if(Kl(r,n)!=null)return e;{let a,c;if(K(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Rr(e),m=d instanceof Z?d:Z.EMPTY_NODE,g=xv(r,m);a=t.filter.updateFullNode(e.eventCache.getNode(),g,s)}else{const d=Kc(r,Rr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const d=G(n);if(d===".priority"){M(Jn(n)===1,"Can't have a priority with additional path components");const m=l.getNode();c=e.serverCache.getNode();const g=kg(r,n,m,c);g!=null?a=t.filter.updatePriority(m,g):a=l.getNode()}else{const m=ue(n);let g;if(l.isCompleteForChild(d)){c=e.serverCache.getNode();const _=kg(r,n,l.getNode(),c);_!=null?g=l.getNode().getImmediateChild(d).updateChild(m,_):g=l.getNode().getImmediateChild(d)}else g=cd(r,d,e.serverCache);g!=null?a=t.filter.updateChild(l.getNode(),d,g,m,i,s):a=l.getNode()}}return Is(e,a,l.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Yl(t,e,n,r,i,s,l,a){const c=e.serverCache;let d;const m=l?t.filter:t.filter.getIndexedFilter();if(K(n))d=m.updateFullNode(c.getNode(),r,null);else if(m.filtersNodes()&&!c.isFiltered()){const A=c.getNode().updateChild(n,r);d=m.updateFullNode(c.getNode(),A,null)}else{const A=G(n);if(!c.isCompleteForPath(n)&&Jn(n)>1)return e;const N=ue(n),j=c.getNode().getImmediateChild(A).updateChild(N,r);A===".priority"?d=m.updatePriority(c.getNode(),j):d=m.updateChild(c.getNode(),A,j,N,Lv,null)}const g=kv(e,d,c.isFullyInitialized()||K(n),m.filtersNodes()),_=new hd(i,g,s);return Mv(t,g,n,i,_,a)}function Yc(t,e,n,r,i,s,l){const a=e.eventCache;let c,d;const m=new hd(i,e,s);if(K(n))d=t.filter.updateFullNode(e.eventCache.getNode(),r,l),c=Is(e,d,!0,t.filter.filtersNodes());else{const g=G(n);if(g===".priority")d=t.filter.updatePriority(e.eventCache.getNode(),r),c=Is(e,d,a.isFullyInitialized(),a.isFiltered());else{const _=ue(n),A=a.getNode().getImmediateChild(g);let N;if(K(_))N=r;else{const x=m.getCompleteChild(g);x!=null?hv(_)===".priority"&&x.getChild(fv(_)).isEmpty()?N=x:N=x.updateChild(_,r):N=Z.EMPTY_NODE}if(A.equals(N))c=e;else{const x=t.filter.updateChild(a.getNode(),g,N,_,m,l);c=Is(e,x,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Rg(t,e){return t.eventCache.isCompleteForChild(e)}function fC(t,e,n,r,i,s,l){let a=e;return r.foreach((c,d)=>{const m=Ie(n,c);Rg(e,G(m))&&(a=Yc(t,a,m,d,i,s,l))}),r.foreach((c,d)=>{const m=Ie(n,c);Rg(e,G(m))||(a=Yc(t,a,m,d,i,s,l))}),a}function Ng(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function qc(t,e,n,r,i,s,l,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,d;K(n)?d=r:d=new ae(null).setTree(n,r);const m=e.serverCache.getNode();return d.children.inorderTraversal((g,_)=>{if(m.hasChild(g)){const A=e.serverCache.getNode().getImmediateChild(g),N=Ng(t,A,_);c=Yl(t,c,new he(g),N,i,s,l,a)}}),d.children.inorderTraversal((g,_)=>{const A=!e.serverCache.isCompleteForChild(g)&&_.value===null;if(!m.hasChild(g)&&!A){const N=e.serverCache.getNode().getImmediateChild(g),x=Ng(t,N,_);c=Yl(t,c,new he(g),x,i,s,l,a)}}),c}function pC(t,e,n,r,i,s,l){if(Kl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Yl(t,e,n,c.getNode().getChild(n),i,s,a,l);if(K(n)){let d=new ae(null);return c.getNode().forEachChild(ci,(m,g)=>{d=d.set(new he(m),g)}),qc(t,e,n,d,i,s,a,l)}else return e}else{let d=new ae(null);return r.foreach((m,g)=>{const _=Ie(n,m);c.isCompleteForPath(_)&&(d=d.set(m,c.getNode().getChild(_)))}),qc(t,e,n,d,i,s,a,l)}}function gC(t,e,n,r,i){const s=e.serverCache,l=kv(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return Mv(t,l,n,r,Lv,i)}function mC(t,e,n,r,i,s){let l;if(Kl(r,n)!=null)return e;{const a=new hd(r,e,i),c=e.eventCache.getNode();let d;if(K(n)||G(n)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=Kc(r,Rr(e));else{const g=e.serverCache.getNode();M(g instanceof Z,"serverChildren would be complete if leaf node"),m=xv(r,g)}m=m,d=t.filter.updateFullNode(c,m,s)}else{const m=G(n);let g=cd(r,m,e.serverCache);g==null&&e.serverCache.isCompleteForChild(m)&&(g=c.getImmediateChild(m)),g!=null?d=t.filter.updateChild(c,m,g,ue(n),a,s):e.eventCache.getNode().hasChild(m)?d=t.filter.updateChild(c,m,Z.EMPTY_NODE,ue(n),a,s):d=c,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=Kc(r,Rr(e)),l.isLeafNode()&&(d=t.filter.updateFullNode(d,l,s)))}return l=e.serverCache.isFullyInitialized()||Kl(r,ne())!=null,Is(e,d,l,t.filter.filtersNodes())}}function _C(t,e){const n=Rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Ag(t,e,n,r){e.type===Wt.MERGE&&e.source.queryId!==null&&(M(Rr(t.viewCache_),"We should always have a full cache before handling merges"),M(Vc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=hC(t.processor_,i,e,n,r);return cC(t.processor_,s.viewCache),M(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,yC(t,s.changes,s.viewCache.eventCache.getNode())}function yC(t,e,n,r){const i=t.eventRegistrations_;return $T(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pg;function vC(t){M(!Pg,"__referenceConstructor has already been defined"),Pg=t}function dd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return M(s!=null,"SyncTree gave us an op for an invalid query."),Ag(s,e,n,r)}else{let s=[];for(const l of t.views.values())s=s.concat(Ag(l,e,n,r));return s}}function fd(t,e){let n=null;for(const r of t.views.values())n=n||_C(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xg;function wC(t){M(!xg,"__referenceConstructor has already been defined"),xg=t}class Og{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=oC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bv(t,e,n,r,i){return qT(t.pendingWriteTree_,e,n,r,i),i?Ia(t,new kr(Sv(),e,n)):[]}function mr(t,e,n=!1){const r=QT(t.pendingWriteTree_,e);if(XT(t.pendingWriteTree_,e)){let s=new ae(null);return r.snap!=null?s=s.set(ne(),!0):St(r.children,l=>{s=s.set(new he(l),!0)}),Ia(t,new Gl(r.path,s,n))}else return[]}function Sa(t,e,n){return Ia(t,new kr(Iv(),e,n))}function EC(t,e,n){const r=ae.fromObject(n);return Ia(t,new Ys(Iv(),e,r))}function SC(t,e,n,r){const i=jv(t,r);if(i!=null){const s=zv(i),l=s.path,a=s.queryId,c=yt(l,e),d=new kr(Tv(a),c,n);return Wv(t,l,d)}else return[]}function IC(t,e,n,r){const i=jv(t,r);if(i){const s=zv(i),l=s.path,a=s.queryId,c=yt(l,e),d=ae.fromObject(n),m=new Ys(Tv(a),c,d);return Wv(t,l,m)}else return[]}function pd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(l,a)=>{const c=yt(l,e),d=fd(a,c);if(d)return d});return Pv(i,e,s,n,!0)}function Ia(t,e){return Fv(e,t.syncPointTree_,null,Nv(t.pendingWriteTree_,ne()))}function Fv(t,e,n,r){if(K(t.path))return Uv(t,e,n,r);{const i=e.get(ne());n==null&&i!=null&&(n=fd(i,ne()));let s=[];const l=G(t.path),a=t.operationForChild(l),c=e.children.get(l);if(c&&a){const d=n?n.getImmediateChild(l):null,m=Ov(r,l);s=s.concat(Fv(a,c,d,m))}return i&&(s=s.concat(dd(i,t,r,n))),s}}function Uv(t,e,n,r){const i=e.get(ne());n==null&&i!=null&&(n=fd(i,ne()));let s=[];return e.children.inorderTraversal((l,a)=>{const c=n?n.getImmediateChild(l):null,d=Ov(r,l),m=t.operationForChild(l);m&&(s=s.concat(Uv(m,a,c,d)))}),i&&(s=s.concat(dd(i,t,r,n))),s}function jv(t,e){return t.tagToQueryMap.get(e)}function zv(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Wv(t,e,n){const r=t.syncPointTree_.get(e);M(r,"Missing sync point for query tag that we're tracking");const i=Nv(t.pendingWriteTree_,e);return dd(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gd(n)}node(){return this.node_}}class md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new md(this.syncTree_,n)}node(){return pd(this.syncTree_,this.path_)}}const TC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dg=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return CC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kC(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},CC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},kC=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&M(!1,"Unexpected increment value: "+r);const i=e.node();if(M(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const l=i.getValue();return typeof l!="number"?r:l+r},RC=function(t,e,n,r){return _d(e,new md(n,t),r)},Bv=function(t,e,n){return _d(t,new gd(e),n)};function _d(t,e,n){const r=t.getPriority().val(),i=Dg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const l=t,a=Dg(l.getValue(),e,n);return a!==l.getValue()||i!==l.getPriority().val()?new Ce(a,xe(i)):t}else{const l=t;return s=l,i!==l.getPriority().val()&&(s=s.updatePriority(new Ce(i))),l.forEachChild(Be,(a,c)=>{const d=_d(c,e.getImmediateChild(a),n);d!==c&&(s=s.updateImmediateChild(a,d))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function vd(t,e){let n=e instanceof he?e:new he(e),r=t,i=G(n);for(;i!==null;){const s=Ei(r.node.children,i)||{children:{},childCount:0};r=new yd(i,r,s),n=ue(n),i=G(n)}return r}function Oi(t){return t.node.value}function Hv(t,e){t.node.value=e,Qc(t)}function Vv(t){return t.node.childCount>0}function NC(t){return Oi(t)===void 0&&!Vv(t)}function Ta(t,e){St(t.node.children,(n,r)=>{e(new yd(n,t,r))})}function $v(t,e,n,r){n&&!r&&e(t),Ta(t,i=>{$v(i,e,!0,r)}),n&&r&&e(t)}function AC(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function oo(t){return new he(t.parent===null?t.name:oo(t.parent)+"/"+t.name)}function Qc(t){t.parent!==null&&PC(t.parent,t.name,t)}function PC(t,e,n){const r=NC(n),i=Sn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=/[\[\].#$\/\u0000-\u001F\u007F]/,OC=/[\[\].#$\u0000-\u001F\u007F]/,Fu=10*1024*1024,Gv=function(t){return typeof t=="string"&&t.length!==0&&!xC.test(t)},Kv=function(t){return typeof t=="string"&&t.length!==0&&!OC.test(t)},DC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Kv(t)},LC=function(t,e,n,r){wd(Zh(t,"value"),e,n)},wd=function(t,e,n){const r=n instanceof he?new gT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+hr(r));if(typeof e=="function")throw new Error(t+"contains a function "+hr(r)+" with contents = "+e.toString());if(Vy(e))throw new Error(t+"contains "+e.toString()+" "+hr(r));if(typeof e=="string"&&e.length>Fu/3&&ya(e)>Fu)throw new Error(t+"contains a string greater than "+Fu+" utf8 bytes "+hr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(St(e,(l,a)=>{if(l===".value")i=!0;else if(l!==".priority"&&l!==".sv"&&(s=!0,!Gv(l)))throw new Error(t+" contains an invalid key ("+l+") "+hr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mT(r,l),wd(t,a,r),_T(r)}),i&&s)throw new Error(t+' contains ".value" child '+hr(r)+" in addition to actual children.")}},Yv=function(t,e,n,r){if(!Kv(n))throw new Error(Zh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},MC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yv(t,e,n)},bC=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DC(n))throw new Error(Zh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qv(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!pv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function yn(t,e,n){qv(t,n),jC(t,r=>Pt(r,e)||Pt(e,r))}function jC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(zC(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Es&&We("event: "+n.toString()),xi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="repo_interrupt",BC=25;class HC{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$l(),this.transactionQueueTree_=new yd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VC(t,e,n){if(t.stats_=id(t.repoInfo_),t.forceRestClient_||zI())t.server_=new Vl(t.repoInfo_,(r,i,s,l)=>{Lg(t,r,i,s,l)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new cn(t.repoInfo_,e,(r,i,s,l)=>{Lg(t,r,i,s,l)},r=>{Mg(t,r)},r=>{GC(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=$I(t.repoInfo_,()=>new VT(t.stats_,t.server_)),t.infoData_=new jT,t.infoSyncTree_=new Og({startListening:(r,i,s,l)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Sa(t.infoSyncTree_,r._path,c),setTimeout(()=>{l("ok")},0)),a},stopListening:()=>{}}),Sd(t,"connected",!1),t.serverSyncTree_=new Og({startListening:(r,i,s,l)=>(t.server_.listen(r,s,i,(a,c)=>{const d=l(a,c);yn(t.eventQueue_,r._path,d)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function $C(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ed(t){return TC({timestamp:$C(t)})}function Lg(t,e,n,r,i){t.dataUpdateCount++;const s=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let l=[];if(i)if(r){const c=Ul(n,d=>xe(d));l=IC(t.serverSyncTree_,s,c,i)}else{const c=xe(n);l=SC(t.serverSyncTree_,s,c,i)}else if(r){const c=Ul(n,d=>xe(d));l=EC(t.serverSyncTree_,s,c)}else{const c=xe(n);l=Sa(t.serverSyncTree_,s,c)}let a=s;l.length>0&&(a=Ca(t,s)),yn(t.eventQueue_,a,l)}function Mg(t,e){Sd(t,"connected",e),e===!1&&YC(t)}function GC(t,e){St(e,(n,r)=>{Sd(t,n,r)})}function Sd(t,e,n){const r=new he("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(r,i);const s=Sa(t.infoSyncTree_,r,i);yn(t.eventQueue_,r,s)}function Qv(t){return t.nextWriteId_++}function KC(t,e,n,r,i){Id(t,"set",{path:e.toString(),value:n,priority:r});const s=Ed(t),l=xe(n,r),a=pd(t.serverSyncTree_,e),c=Bv(l,a,s),d=Qv(t),m=bv(t.serverSyncTree_,e,c,d,!0);qv(t.eventQueue_,m),t.server_.put(e.toString(),l.val(!0),(_,A)=>{const N=_==="ok";N||ot("set at "+e+" failed: "+_);const x=mr(t.serverSyncTree_,d,!N);yn(t.eventQueue_,e,x),QC(t,i,_,A)});const g=t0(t,e);Ca(t,g),yn(t.eventQueue_,g,[])}function YC(t){Id(t,"onDisconnectEvents");const e=Ed(t),n=$l();Hc(t.onDisconnect_,ne(),(i,s)=>{const l=RC(i,s,t.serverSyncTree_,e);Ev(n,i,l)});let r=[];Hc(n,ne(),(i,s)=>{r=r.concat(Sa(t.serverSyncTree_,i,s));const l=t0(t,i);Ca(t,l)}),t.onDisconnect_=$l(),yn(t.eventQueue_,ne(),r)}function qC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(WC)}function Id(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),We(n,...e)}function QC(t,e,n,r){e&&xi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const l=new Error(s);l.code=i,e(l)}})}function Xv(t,e,n){return pd(t.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Td(t,e=t.transactionQueueTree_){if(e||ka(t,e),Oi(e)){const n=Zv(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&XC(t,oo(e),n)}else Vv(e)&&Ta(e,n=>{Td(t,n)})}function XC(t,e,n){const r=n.map(d=>d.currentWriteId),i=Xv(t,e,r);let s=i;const l=i.hash();for(let d=0;d<n.length;d++){const m=n[d];M(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const g=yt(e,m.path);s=s.updateChild(g,m.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,d=>{Id(t,"transaction put response",{path:c.toString(),status:d});let m=[];if(d==="ok"){const g=[];for(let _=0;_<n.length;_++)n[_].status=2,m=m.concat(mr(t.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&g.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();ka(t,vd(t.transactionQueueTree_,e)),Td(t,t.transactionQueueTree_),yn(t.eventQueue_,e,m);for(let _=0;_<g.length;_++)xi(g[_])}else{if(d==="datastale")for(let g=0;g<n.length;g++)n[g].status===3?n[g].status=4:n[g].status=0;else{ot("transaction at "+c.toString()+" failed: "+d);for(let g=0;g<n.length;g++)n[g].status=4,n[g].abortReason=d}Ca(t,e)}},l)}function Ca(t,e){const n=Jv(t,e),r=oo(n),i=Zv(t,n);return JC(t,i,r),r}function JC(t,e,n){if(e.length===0)return;const r=[];let i=[];const l=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],d=yt(n,c.path);let m=!1,g;if(M(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)m=!0,g=c.abortReason,i=i.concat(mr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=BC)m=!0,g="maxretry",i=i.concat(mr(t.serverSyncTree_,c.currentWriteId,!0));else{const _=Xv(t,c.path,l);c.currentInputSnapshot=_;const A=e[a].update(_.val());if(A!==void 0){wd("transaction failed: Data returned ",A,c.path);let N=xe(A);typeof A=="object"&&A!=null&&Sn(A,".priority")||(N=N.updatePriority(_.getPriority()));const j=c.currentWriteId,T=Ed(t),w=Bv(N,_,T);c.currentOutputSnapshotRaw=N,c.currentOutputSnapshotResolved=w,c.currentWriteId=Qv(t),l.splice(l.indexOf(j),1),i=i.concat(bv(t.serverSyncTree_,c.path,w,c.currentWriteId,c.applyLocally)),i=i.concat(mr(t.serverSyncTree_,j,!0))}else m=!0,g="nodata",i=i.concat(mr(t.serverSyncTree_,c.currentWriteId,!0))}yn(t.eventQueue_,n,i),i=[],m&&(e[a].status=2,function(_){setTimeout(_,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(g==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(g),!1,null))))}ka(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)xi(r[a]);Td(t,t.transactionQueueTree_)}function Jv(t,e){let n,r=t.transactionQueueTree_;for(n=G(e);n!==null&&Oi(r)===void 0;)r=vd(r,n),e=ue(e),n=G(e);return r}function Zv(t,e){const n=[];return e0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function e0(t,e,n){const r=Oi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ta(e,i=>{e0(t,i,n)})}function ka(t,e){const n=Oi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Hv(e,n.length>0?n:void 0)}Ta(e,r=>{ka(t,r)})}function t0(t,e){const n=oo(Jv(t,e)),r=vd(t.transactionQueueTree_,e);return AC(r,i=>{Uu(t,i)}),Uu(t,r),$v(r,i=>{Uu(t,i)}),n}function Uu(t,e){const n=Oi(e);if(n){const r=[];let i=[],s=-1;for(let l=0;l<n.length;l++)n[l].status===3||(n[l].status===1?(M(s===l-1,"All SENT items should be at beginning of queue."),s=l,n[l].status=3,n[l].abortReason="set"):(M(n[l].status===0,"Unexpected transaction status in abort"),n[l].unwatcher(),i=i.concat(mr(t.serverSyncTree_,n[l].currentWriteId,!0)),n[l].onComplete&&r.push(n[l].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hv(e,void 0):n.length=s+1,yn(t.eventQueue_,oo(e),i);for(let l=0;l<r.length;l++)xi(r[l])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ek(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const bg=function(t,e){const n=tk(t),r=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new he(n.pathString)}},tk=function(t){let e="",n="",r="",i="",s="",l=!0,a="https",c=443;if(typeof t=="string"){let d=t.indexOf("//");d>=0&&(a=t.substring(0,d-1),t=t.substring(d+2));let m=t.indexOf("/");m===-1&&(m=t.length);let g=t.indexOf("?");g===-1&&(g=t.length),e=t.substring(0,Math.min(m,g)),m<g&&(i=ZC(t.substring(m,g)));const _=ek(t.substring(Math.min(t.length,g)));d=e.indexOf(":"),d>=0?(l=a==="https"||a==="wss",c=parseInt(e.substring(d+1),10)):d=e.length;const A=e.slice(0,d);if(A.toLowerCase()==="localhost")n="localhost";else if(A.split(".").length<=2)n=A;else{const N=e.indexOf(".");r=e.substring(0,N).toLowerCase(),n=e.substring(N+1),s=r}"ns"in _&&(s=_.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:l,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:hv(this._path)}get ref(){return new Lr(this._repo,this._path)}get _queryIdentifier(){const e=Eg(this._queryParams),n=nd(e);return n==="{}"?"default":n}get _queryObject(){return Eg(this._queryParams)}isEqual(e){if(e=It(e),!(e instanceof Cd))return!1;const n=this._repo===e._repo,r=pv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pT(this._path)}}class Lr extends Cd{constructor(e,n){super(e,n,new ad,!1)}get parent(){const e=fv(this._path);return e===null?null:new Lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function n0(t,e){return t=It(t),t._checkNotDeleted("ref"),e!==void 0?nk(t._root,e):t._root}function nk(t,e){return t=It(t),G(t._path)===null?MC("child","path",e):Yv("child","path",e),new Lr(t._repo,Ie(t._path,e))}function r0(t,e){t=It(t),bC("set",t._path),LC("set",e,t._path);const n=new _a;return KC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}vC(Lr);wC(Lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="FIREBASE_DATABASE_EMULATOR_HOST",Xc={};let ik=!1;function sk(t,e,n,r){t.repoInfo_=new nv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function ok(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let l=bg(s,i),a=l.repoInfo,c;typeof process<"u"&&ng&&(c=ng[rk]),c?(s=`http://${c}?ns=${a.namespace}`,l=bg(s,i),a=l.repoInfo):l.repoInfo.secure;const d=new BI(t.name,t.options,e);FC("Invalid Firebase Database URL",l),K(l.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const m=ak(a,t,d,new WI(t.name,n));return new uk(m,t)}function lk(t,e){const n=Xc[e];(!n||n[t.key]!==t)&&_n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qC(t),delete n[t.key]}function ak(t,e,n,r){let i=Xc[e.name];i||(i={},Xc[e.name]=i);let s=i[t.toURLString()];return s&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new HC(t,ik,n,r),i[t.toURLString()]=s,s}class uk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lr(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function ck(t=td(),e){const n=wa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ay("database");r&&hk(n,...r)}return n}function hk(t,e,n,r={}){t=It(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&_n("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ll(ll.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Oy(r.mockUserToken,t.app.options.projectId);s=new ll(l)}sk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){kI(Or),Tr(new Xn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return ok(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Vt(rg,ig,t),Vt(rg,ig,"esm2017")}cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dk();var fk="firebase",pk="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(fk,pk,"app");function kd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function i0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gk=i0,s0=new no("auth","Firebase",i0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new va("@firebase/auth");function mk(t,...e){ql.logLevel<=J.WARN&&ql.warn(`Auth (${Or}): ${t}`,...e)}function al(t,...e){ql.logLevel<=J.ERROR&&ql.error(`Auth (${Or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Rd(t,...e)}function $t(t,...e){return Rd(t,...e)}function o0(t,e,n){const r=Object.assign(Object.assign({},gk()),{[e]:n});return new no("auth","Firebase",r).create(e,{appName:t.name})}function hn(t){return o0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return s0.create(t,...e)}function B(t,e,...n){if(!t)throw Rd(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function vn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _k(){return Fg()==="http:"||Fg()==="https:"}function Fg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_k()||s1()||"connection"in navigator)?navigator.onLine:!0}function vk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Jh()||Dy()}get(){return yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new lo(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,i={}){return a0(t,i,async()=>{let s={},l={};r&&(e==="GET"?l=r:s={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},l)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},s);return i1()||(d.referrerPolicy="no-referrer"),l0.fetch()(u0(t,t.config.apiHost,n,a),d)})}async function a0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wk),e);try{const i=new Ik(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await s.json();if("needConfirmation"in l)throw Ko(t,"account-exists-with-different-credential",l);if(s.ok&&!("errorMessage"in l))return l;{const a=s.ok?l.errorMessage:l.error.message,[c,d]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",l);if(c==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",l);if(c==="USER_DISABLED")throw Ko(t,"user-disabled",l);const m=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw o0(t,m,d);bt(t,m)}}catch(i){if(i instanceof En)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function ao(t,e,n,r,i={}){const s=await rr(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function u0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Nd(t.config,i):`${t.config.apiScheme}://${i}`}function Sk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ik{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),Ek.get())})}}function Ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$t(t,e,r);return i.customData._tokenResponse=n,i}function Ug(t){return t!==void 0&&t.enterprise!==void 0}class Tk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Sk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ck(t,e){return rr(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function c0(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rk(t,e=!1){const n=It(t),r=await n.getIdToken(e),i=Ad(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,l=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cs(ju(i.auth_time)),issuedAtTime:Cs(ju(i.iat)),expirationTime:Cs(ju(i.exp)),signInProvider:l||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ju(t){return Number(t)*1e3}function Ad(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fl(n);return i?JSON.parse(i):(al("Failed to decode base64 JWT payload"),null)}catch(i){return al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jg(t){const e=Ad(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&Nk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cs(this.lastLoginAt),this.creationTime=Cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qs(t,c0(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const l=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?h0(s.providerUserInfo):[],a=xk(t.providerData,l),c=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),m=c?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zc(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(t,g)}async function Pk(t){const e=It(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function h0(t){return t.map(e=>{var{providerId:n}=e,r=kd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(t,e){const n=await a0(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,l=u0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",l0.fetch()(l,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dk(t,e){return rr(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=jg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ok(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,l=new hi;return r&&(B(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),l.expirationTime=s),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qs(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rk(this,e)}reload(){return Pk(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await qs(this,kk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,l,a,c,d,m;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(l=n.photoURL)!==null&&l!==void 0?l:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,j=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,w=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:C,emailVerified:O,isAnonymous:b,providerData:F,stsTokenManager:v}=n;B(C&&v,e,"internal-error");const p=hi.fromJSON(this.name,v);B(typeof C=="string",e,"internal-error"),Rn(g,e.name),Rn(_,e.name),B(typeof O=="boolean",e,"internal-error"),B(typeof b=="boolean",e,"internal-error"),Rn(A,e.name),Rn(N,e.name),Rn(x,e.name),Rn(j,e.name),Rn(T,e.name),Rn(w,e.name);const y=new ln({uid:C,auth:e,email:_,emailVerified:O,displayName:g,isAnonymous:b,photoURL:N,phoneNumber:A,tenantId:x,stsTokenManager:p,createdAt:T,lastLoginAt:w});return F&&Array.isArray(F)&&(y.providerData=F.map(S=>Object.assign({},S))),j&&(y._redirectEventId=j),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new hi;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ql(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?h0(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new hi;a.updateFromIdToken(r);const c=new ln({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:l}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Map;function an(t){vn(t instanceof Function,"Expected a class definition");let e=zg.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d0.type="NONE";const Wg=d0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new di(an(Wg),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||an(Wg);const l=ul(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const m=await d._get(l);if(m){const g=ln._fromJSON(e,m);d!==s&&(a=g),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new di(s,e,r):(s=c[0],a&&await s._set(l,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(l)}catch{}})),new di(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y0(e))return"Blackberry";if(v0(e))return"Webos";if(p0(e))return"Safari";if((e.includes("chrome/")||g0(e))&&!e.includes("edge/"))return"Chrome";if(_0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f0(t=qe()){return/firefox\//i.test(t)}function p0(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g0(t=qe()){return/crios\//i.test(t)}function m0(t=qe()){return/iemobile/i.test(t)}function _0(t=qe()){return/android/i.test(t)}function y0(t=qe()){return/blackberry/i.test(t)}function v0(t=qe()){return/webos/i.test(t)}function Pd(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lk(t=qe()){var e;return Pd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mk(){return o1()&&document.documentMode===10}function w0(t=qe()){return Pd(t)||_0(t)||v0(t)||y0(t)||/windows phone/i.test(t)||m0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t,e=[]){let n;switch(t){case"Browser":n=Bg(qe());break;case"Worker":n=`${Bg(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((l,a)=>{try{const c=e(s);l(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e={}){return rr(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=6;class jk{constructor(e){var n,r,i,s;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Uk,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,l,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNumericCharacter)!==null&&l!==void 0?l:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hg(this),this.idTokenSubscription=new Hg(this),this.beforeStateQueue=new bk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await c0(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!l||l===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(hn(this));const n=e?It(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fk(this),n=new jk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let l=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{l||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{l=!0,c()}}else{const c=e.addObserver(n);return()=>{l=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mr(t){return It(t)}class Hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=g1(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wk(t){Ra=t}function S0(t){return Ra.loadJS(t)}function Bk(){return Ra.recaptchaEnterpriseScript}function Hk(){return Ra.gapiScript}function Vk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $k{constructor(){this.enterprise=new Gk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Gk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Kk="recaptcha-enterprise",I0="NO_RECAPTCHA";class Yk{constructor(e){this.type=Kk,this.auth=Mr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(l,a)=>{Ck(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new Tk(c);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,l(d.siteKey)}}).catch(c=>{a(c)})})}function i(s,l,a){const c=window.grecaptcha;Ug(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(d=>{l(d)}).catch(()=>{l(I0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $k().execute("siteKey",{action:"verify"}):new Promise((s,l)=>{r(this.auth).then(a=>{if(!n&&Ug(window.grecaptcha))i(a,s,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Bk();c.length!==0&&(c+=a),S0(c).then(()=>{i(a,s,l)}).catch(d=>{l(d)})}}).catch(a=>{l(a)})})}}async function Vg(t,e,n,r=!1,i=!1){const s=new Yk(t);let l;if(i)l=I0;else try{l=await s.verify(n)}catch{l=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,d=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:l}):Object.assign(a,{captchaResponse:l}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function eh(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Vg(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Vg(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e){const n=wa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(jl(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function Qk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xk(t,e,n){const r=Mr(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=T0(e),{host:l,port:a}=Jk(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${l}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Zk()}function T0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jk(t){const e=T0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$g(r.substr(s.length+1))}}else{const[s,l]=r.split(":");return{host:s,port:$g(l)}}}function $g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function eR(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e){return ao(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e){return ao(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function rR(t,e){return ao(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends xd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eh(e,n,"signInWithPassword",tR);case"emailLink":return nR(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eh(e,r,"signUpPassword",eR);case"emailLink":return rR(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e){return ao(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="http://localhost";class Nr extends xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kd(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new Nr(r,i);return l.idToken=s.idToken||void 0,l.accessToken=s.accessToken||void 0,l.secret=s.secret,l.nonce=s.nonce,l.pendingToken=s.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:iR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oR(t){const e=cs(hs(t)).link,n=e?cs(hs(e)).deep_link_id:null,r=cs(hs(t)).deep_link_id;return(r?cs(hs(r)).link:null)||r||n||e||t}class Od{constructor(e){var n,r,i,s,l,a;const c=cs(hs(e)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,m=(r=c.oobCode)!==null&&r!==void 0?r:null,g=sR((i=c.mode)!==null&&i!==void 0?i:null);B(d&&m&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=m,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(l=c.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=oR(e);try{return new Od(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return Qs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Od.parseLink(n);return B(r,"argument-error"),Qs._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends C0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends uo{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends uo{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends uo{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e){return ao(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),l=Gg(r);return new Ar({user:s,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gg(r);return new Ar({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends En{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xl(e,n,r,i)}}function k0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xl._fromErrorAndOperation(t,s,e,r):s})}async function aR(t,e,n=!1){const r=await qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ar._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(hn(r));const i="reauthenticate";try{const s=await qs(t,k0(r,i,e,t),n);B(s.idToken,r,"internal-error");const l=Ad(s.idToken);B(l,r,"internal-error");const{sub:a}=l;return B(t.uid===a,r,"user-mismatch"),Ar._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(t,e,n=!1){if(zt(t.app))return Promise.reject(hn(t));const r="signIn",i=await k0(t,r,e),s=await Ar._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cR(t,e){return R0(Mr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N0(t){const e=Mr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hR(t,e,n){if(zt(t.app))return Promise.reject(hn(t));const r=Mr(t),l=await eh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&N0(t),c}),a=await Ar._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(a.user),a}function dR(t,e,n){return zt(t.app)?Promise.reject(hn(t)):cR(It(t),Di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&N0(t),r})}function fR(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function pR(t,e,n){return It(t).beforeAuthStateChanged(e,n)}const Jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jl,"1"),this.storage.removeItem(Jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=1e3,mR=10;class P0 extends A0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,a,c)=>{this.notifyListeners(l,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},s=this.storage.getItem(r);Mk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P0.type="LOCAL";const _R=P0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0 extends A0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}x0.type="SESSION";const O0=x0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(l).map(async d=>d(n.origin,s)),c=await yR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,l;return new Promise((a,c)=>{const d=Dd("",20);i.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(g){const _=g;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(_.data.response);break;default:clearTimeout(m),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function wR(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IR(){return D0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="firebaseLocalStorageDb",TR=1,Zl="firebaseLocalStorage",M0="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(t,e){return t.transaction([Zl],e?"readwrite":"readonly").objectStore(Zl)}function CR(){const t=indexedDB.deleteDatabase(L0);return new co(t).toPromise()}function th(){const t=indexedDB.open(L0,TR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zl,{keyPath:M0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zl)?e(r):(r.close(),await CR(),e(await th()))})})}async function Kg(t,e,n){const r=Aa(t,!0).put({[M0]:e,value:n});return new co(r).toPromise()}async function kR(t,e){const n=Aa(t,!1).get(e),r=await new co(n).toPromise();return r===void 0?null:r.value}function Yg(t,e){const n=Aa(t,!0).delete(e);return new co(n).toPromise()}const RR=800,NR=3;class b0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(IR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await th();return await Kg(e,Jl,"1"),await Yg(e,Jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Aa(i,!1).getAll();return new co(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b0.type="LOCAL";const AR=b0;new lo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t,e){return e?an(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xR(t){return R0(t.auth,new Ld(t),t.bypassAuthState)}function OR(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),uR(n,new Ld(t),t.bypassAuthState)}async function DR(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),aR(n,new Ld(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:l,type:a}=e;if(l){this.reject(l);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xR;case"linkViaPopup":case"linkViaRedirect":return DR;case"reauthViaPopup":case"reauthViaRedirect":return OR;default:bt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new lo(2e3,1e4);class ni extends F0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LR.get())};e()}}ni.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="pendingRedirect",cl=new Map;class bR extends F0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const r=await FR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FR(t,e){const n=zR(e),r=jR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UR(t,e){cl.set(t._key(),e)}function jR(t){return an(t._redirectPersistence)}function zR(t){return ul(MR,t.config.apiKey,t.name)}async function WR(t,e,n=!1){if(zt(t.app))return Promise.reject(hn(t));const r=Mr(t),i=PR(r,e),l=await new bR(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=10*60*1e3;class HR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BR&&this.cachedEventUids.clear(),this.cachedEventUids.has(qg(e))}saveEventToCache(e){this.cachedEventUids.add(qg(e)),this.lastProcessedEventTime=Date.now()}}function qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KR=/^https?/;async function YR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $R(t);for(const n of e)try{if(qR(n))return}catch{}bt(t,"unauthorized-domain")}function qR(t){const e=Jc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!KR.test(n))return!1;if(GR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=new lo(3e4,6e4);function Qg(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XR(t){return new Promise((e,n)=>{var r,i,s;function l(){Qg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qg(),n($t(t,"network-request-failed"))},timeout:QR.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)l();else{const a=Vk("iframefcb");return Gt()[a]=()=>{gapi.load?l():n($t(t,"network-request-failed"))},S0(`${Hk()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw hl=null,e})}let hl=null;function JR(t){return hl=hl||XR(t),hl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new lo(5e3,15e3),eN="__/auth/iframe",tN="emulator/auth/iframe",nN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iN(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nd(e,tN):`https://${t.config.authDomain}/${eN}`,r={apiKey:e.apiKey,appName:t.name,v:Or},i=rN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ai(r).slice(1)}`}async function sN(t){const e=await JR(t),n=Gt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:iN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const l=$t(t,"network-request-failed"),a=Gt().setTimeout(()=>{s(l)},ZR.get());function c(){Gt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lN=500,aN=600,uN="_blank",cN="http://localhost";class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hN(t,e,n,r=lN,i=aN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},oN),{width:r.toString(),height:i.toString(),top:s,left:l}),d=qe().toLowerCase();n&&(a=g0(d)?uN:n),f0(d)&&(e=e||cN,c.scrollbars="yes");const m=Object.entries(c).reduce((_,[A,N])=>`${_}${A}=${N},`,"");if(Lk(d)&&a!=="_self")return dN(e||"",a),new Xg(null);const g=window.open(e||"",a,m);B(g,t,"popup-blocked");try{g.focus()}catch{}return new Xg(g)}function dN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="__/auth/handler",pN="emulator/auth/handler",gN=encodeURIComponent("fac");async function Jg(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:i};if(e instanceof C0){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",Lc(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))l[m]=g}if(e instanceof uo){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(l.scopes=m.join(","))}t.tenantId&&(l.tid=t.tenantId);const a=l;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const c=await t._getAppCheckToken(),d=c?`#${gN}=${encodeURIComponent(c)}`:"";return`${mN(t)}?${Ai(a).slice(1)}${d}`}function mN({config:t}){return t.emulator?Nd(t,pN):`https://${t.authDomain}/${fN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="webStorageSupport";class _N{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O0,this._completeRedirectFn=WR,this._overrideRedirectResult=UR}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const l=await Jg(e,n,r,Jc(),i);return hN(e,l,Dd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jg(e,n,r,Jc(),i);return wR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sN(e),r=new HR(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zu,{type:zu},i=>{var s;const l=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zu];l!==void 0&&n(!!l),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return w0()||p0()||Pd()}}const yN=_N;var Zg="@firebase/auth",em="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EN(t){Tr(new Xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:l,authDomain:a}=r.options;B(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:l,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E0(t)},d=new zk(r,i,s,c);return Qk(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new Xn("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new vN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Zg,em,wN(t)),Vt(Zg,em,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=5*60,IN=xy("authIdTokenMaxAge")||SN;let tm=null;const TN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IN)return;const i=n==null?void 0:n.token;tm!==i&&(tm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CN(t=td()){const e=wa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qk(t,{popupRedirectResolver:yN,persistence:[AR,_R,O0]}),r=xy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const l=TN(s.toString());pR(n,l,()=>l(n.currentUser)),fR(n,a=>l(a))}}const i=Ny("auth");return i&&Xk(n,`http://${i}`),n}function kN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Wk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EN("Browser");var nm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var j0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,p){function y(){}y.prototype=p.prototype,v.D=p.prototype,v.prototype=new y,v.prototype.constructor=v,v.C=function(S,I,R){for(var E=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)E[ft-2]=arguments[ft];return p.prototype[I].apply(S,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,y){y||(y=0);var S=Array(16);if(typeof p=="string")for(var I=0;16>I;++I)S[I]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(I=0;16>I;++I)S[I]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=v.g[0],y=v.g[1],I=v.g[2];var R=v.g[3],E=p+(R^y&(I^R))+S[0]+3614090360&4294967295;p=y+(E<<7&4294967295|E>>>25),E=R+(I^p&(y^I))+S[1]+3905402710&4294967295,R=p+(E<<12&4294967295|E>>>20),E=I+(y^R&(p^y))+S[2]+606105819&4294967295,I=R+(E<<17&4294967295|E>>>15),E=y+(p^I&(R^p))+S[3]+3250441966&4294967295,y=I+(E<<22&4294967295|E>>>10),E=p+(R^y&(I^R))+S[4]+4118548399&4294967295,p=y+(E<<7&4294967295|E>>>25),E=R+(I^p&(y^I))+S[5]+1200080426&4294967295,R=p+(E<<12&4294967295|E>>>20),E=I+(y^R&(p^y))+S[6]+2821735955&4294967295,I=R+(E<<17&4294967295|E>>>15),E=y+(p^I&(R^p))+S[7]+4249261313&4294967295,y=I+(E<<22&4294967295|E>>>10),E=p+(R^y&(I^R))+S[8]+1770035416&4294967295,p=y+(E<<7&4294967295|E>>>25),E=R+(I^p&(y^I))+S[9]+2336552879&4294967295,R=p+(E<<12&4294967295|E>>>20),E=I+(y^R&(p^y))+S[10]+4294925233&4294967295,I=R+(E<<17&4294967295|E>>>15),E=y+(p^I&(R^p))+S[11]+2304563134&4294967295,y=I+(E<<22&4294967295|E>>>10),E=p+(R^y&(I^R))+S[12]+1804603682&4294967295,p=y+(E<<7&4294967295|E>>>25),E=R+(I^p&(y^I))+S[13]+4254626195&4294967295,R=p+(E<<12&4294967295|E>>>20),E=I+(y^R&(p^y))+S[14]+2792965006&4294967295,I=R+(E<<17&4294967295|E>>>15),E=y+(p^I&(R^p))+S[15]+1236535329&4294967295,y=I+(E<<22&4294967295|E>>>10),E=p+(I^R&(y^I))+S[1]+4129170786&4294967295,p=y+(E<<5&4294967295|E>>>27),E=R+(y^I&(p^y))+S[6]+3225465664&4294967295,R=p+(E<<9&4294967295|E>>>23),E=I+(p^y&(R^p))+S[11]+643717713&4294967295,I=R+(E<<14&4294967295|E>>>18),E=y+(R^p&(I^R))+S[0]+3921069994&4294967295,y=I+(E<<20&4294967295|E>>>12),E=p+(I^R&(y^I))+S[5]+3593408605&4294967295,p=y+(E<<5&4294967295|E>>>27),E=R+(y^I&(p^y))+S[10]+38016083&4294967295,R=p+(E<<9&4294967295|E>>>23),E=I+(p^y&(R^p))+S[15]+3634488961&4294967295,I=R+(E<<14&4294967295|E>>>18),E=y+(R^p&(I^R))+S[4]+3889429448&4294967295,y=I+(E<<20&4294967295|E>>>12),E=p+(I^R&(y^I))+S[9]+568446438&4294967295,p=y+(E<<5&4294967295|E>>>27),E=R+(y^I&(p^y))+S[14]+3275163606&4294967295,R=p+(E<<9&4294967295|E>>>23),E=I+(p^y&(R^p))+S[3]+4107603335&4294967295,I=R+(E<<14&4294967295|E>>>18),E=y+(R^p&(I^R))+S[8]+1163531501&4294967295,y=I+(E<<20&4294967295|E>>>12),E=p+(I^R&(y^I))+S[13]+2850285829&4294967295,p=y+(E<<5&4294967295|E>>>27),E=R+(y^I&(p^y))+S[2]+4243563512&4294967295,R=p+(E<<9&4294967295|E>>>23),E=I+(p^y&(R^p))+S[7]+1735328473&4294967295,I=R+(E<<14&4294967295|E>>>18),E=y+(R^p&(I^R))+S[12]+2368359562&4294967295,y=I+(E<<20&4294967295|E>>>12),E=p+(y^I^R)+S[5]+4294588738&4294967295,p=y+(E<<4&4294967295|E>>>28),E=R+(p^y^I)+S[8]+2272392833&4294967295,R=p+(E<<11&4294967295|E>>>21),E=I+(R^p^y)+S[11]+1839030562&4294967295,I=R+(E<<16&4294967295|E>>>16),E=y+(I^R^p)+S[14]+4259657740&4294967295,y=I+(E<<23&4294967295|E>>>9),E=p+(y^I^R)+S[1]+2763975236&4294967295,p=y+(E<<4&4294967295|E>>>28),E=R+(p^y^I)+S[4]+1272893353&4294967295,R=p+(E<<11&4294967295|E>>>21),E=I+(R^p^y)+S[7]+4139469664&4294967295,I=R+(E<<16&4294967295|E>>>16),E=y+(I^R^p)+S[10]+3200236656&4294967295,y=I+(E<<23&4294967295|E>>>9),E=p+(y^I^R)+S[13]+681279174&4294967295,p=y+(E<<4&4294967295|E>>>28),E=R+(p^y^I)+S[0]+3936430074&4294967295,R=p+(E<<11&4294967295|E>>>21),E=I+(R^p^y)+S[3]+3572445317&4294967295,I=R+(E<<16&4294967295|E>>>16),E=y+(I^R^p)+S[6]+76029189&4294967295,y=I+(E<<23&4294967295|E>>>9),E=p+(y^I^R)+S[9]+3654602809&4294967295,p=y+(E<<4&4294967295|E>>>28),E=R+(p^y^I)+S[12]+3873151461&4294967295,R=p+(E<<11&4294967295|E>>>21),E=I+(R^p^y)+S[15]+530742520&4294967295,I=R+(E<<16&4294967295|E>>>16),E=y+(I^R^p)+S[2]+3299628645&4294967295,y=I+(E<<23&4294967295|E>>>9),E=p+(I^(y|~R))+S[0]+4096336452&4294967295,p=y+(E<<6&4294967295|E>>>26),E=R+(y^(p|~I))+S[7]+1126891415&4294967295,R=p+(E<<10&4294967295|E>>>22),E=I+(p^(R|~y))+S[14]+2878612391&4294967295,I=R+(E<<15&4294967295|E>>>17),E=y+(R^(I|~p))+S[5]+4237533241&4294967295,y=I+(E<<21&4294967295|E>>>11),E=p+(I^(y|~R))+S[12]+1700485571&4294967295,p=y+(E<<6&4294967295|E>>>26),E=R+(y^(p|~I))+S[3]+2399980690&4294967295,R=p+(E<<10&4294967295|E>>>22),E=I+(p^(R|~y))+S[10]+4293915773&4294967295,I=R+(E<<15&4294967295|E>>>17),E=y+(R^(I|~p))+S[1]+2240044497&4294967295,y=I+(E<<21&4294967295|E>>>11),E=p+(I^(y|~R))+S[8]+1873313359&4294967295,p=y+(E<<6&4294967295|E>>>26),E=R+(y^(p|~I))+S[15]+4264355552&4294967295,R=p+(E<<10&4294967295|E>>>22),E=I+(p^(R|~y))+S[6]+2734768916&4294967295,I=R+(E<<15&4294967295|E>>>17),E=y+(R^(I|~p))+S[13]+1309151649&4294967295,y=I+(E<<21&4294967295|E>>>11),E=p+(I^(y|~R))+S[4]+4149444226&4294967295,p=y+(E<<6&4294967295|E>>>26),E=R+(y^(p|~I))+S[11]+3174756917&4294967295,R=p+(E<<10&4294967295|E>>>22),E=I+(p^(R|~y))+S[2]+718787259&4294967295,I=R+(E<<15&4294967295|E>>>17),E=y+(R^(I|~p))+S[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var y=p-this.blockSize,S=this.B,I=this.h,R=0;R<p;){if(I==0)for(;R<=y;)i(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<p;)if(S[I++]=v.charCodeAt(R++),I==this.blockSize){i(this,S),I=0;break}}else for(;R<p;)if(S[I++]=v[R++],I==this.blockSize){i(this,S),I=0;break}}this.h=I,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var y=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=y&255,y/=256;for(this.u(v),v=Array(16),p=y=0;4>p;++p)for(var S=0;32>S;S+=8)v[y++]=this.g[p]>>>S&255;return v};function s(v,p){var y=a;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=p(v)}function l(v,p){this.h=p;for(var y=[],S=!0,I=v.length-1;0<=I;I--){var R=v[I]|0;S&&R==p||(y[I]=R,S=!1)}this.g=y}var a={};function c(v){return-128<=v&&128>v?s(v,function(p){return new l([p|0],0>p?-1:0)}):new l([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return g;if(0>v)return j(d(-v));for(var p=[],y=1,S=0;v>=y;S++)p[S]=v/y|0,y*=4294967296;return new l(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return j(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),S=g,I=0;I<v.length;I+=8){var R=Math.min(8,v.length-I),E=parseInt(v.substring(I,I+R),p);8>R?(R=d(Math.pow(p,R)),S=S.j(R).add(d(E))):(S=S.j(y),S=S.add(d(E)))}return S}var g=c(0),_=c(1),A=c(16777216);t=l.prototype,t.m=function(){if(x(this))return-j(this).m();for(var v=0,p=1,y=0;y<this.g.length;y++){var S=this.i(y);v+=(0<=S?S:4294967296+S)*p,p*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(x(this))return"-"+j(this).toString(v);for(var p=d(Math.pow(v,6)),y=this,S="";;){var I=O(y,p).g;y=T(y,I.j(p));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(v);if(y=I,N(y))return R+S;for(;6>R.length;)R="0"+R;S=R+S}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}t.l=function(v){return v=T(this,v),x(v)?-1:N(v)?0:1};function j(v){for(var p=v.g.length,y=[],S=0;S<p;S++)y[S]=~v.g[S];return new l(y,~v.h).add(_)}t.abs=function(){return x(this)?j(this):this},t.add=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],S=0,I=0;I<=p;I++){var R=S+(this.i(I)&65535)+(v.i(I)&65535),E=(R>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);S=E>>>16,R&=65535,E&=65535,y[I]=E<<16|R}return new l(y,y[y.length-1]&-2147483648?-1:0)};function T(v,p){return v.add(j(p))}t.j=function(v){if(N(this)||N(v))return g;if(x(this))return x(v)?j(this).j(j(v)):j(j(this).j(v));if(x(v))return j(this.j(j(v)));if(0>this.l(A)&&0>v.l(A))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,y=[],S=0;S<2*p;S++)y[S]=0;for(S=0;S<this.g.length;S++)for(var I=0;I<v.g.length;I++){var R=this.i(S)>>>16,E=this.i(S)&65535,ft=v.i(I)>>>16,ir=v.i(I)&65535;y[2*S+2*I]+=E*ir,w(y,2*S+2*I),y[2*S+2*I+1]+=R*ir,w(y,2*S+2*I+1),y[2*S+2*I+1]+=E*ft,w(y,2*S+2*I+1),y[2*S+2*I+2]+=R*ft,w(y,2*S+2*I+2)}for(S=0;S<p;S++)y[S]=y[2*S+1]<<16|y[2*S];for(S=p;S<2*p;S++)y[S]=0;return new l(y,0)};function w(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function C(v,p){this.g=v,this.h=p}function O(v,p){if(N(p))throw Error("division by zero");if(N(v))return new C(g,g);if(x(v))return p=O(j(v),p),new C(j(p.g),j(p.h));if(x(p))return p=O(v,j(p)),new C(j(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var y=_,S=p;0>=S.l(v);)y=b(y),S=b(S);var I=F(y,1),R=F(S,1);for(S=F(S,2),y=F(y,2);!N(S);){var E=R.add(S);0>=E.l(v)&&(I=I.add(y),R=E),S=F(S,1),y=F(y,1)}return p=T(v,I.j(p)),new C(I,p)}for(I=g;0<=v.l(p);){for(y=Math.max(1,Math.floor(v.m()/p.m())),S=Math.ceil(Math.log(y)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),R=d(y),E=R.j(p);x(E)||0<E.l(v);)y-=S,R=d(y),E=R.j(p);N(R)&&(R=_),I=I.add(R),v=T(v,E)}return new C(I,v)}t.A=function(v){return O(this,v).h},t.and=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],S=0;S<p;S++)y[S]=this.i(S)&v.i(S);return new l(y,this.h&v.h)},t.or=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],S=0;S<p;S++)y[S]=this.i(S)|v.i(S);return new l(y,this.h|v.h)},t.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],S=0;S<p;S++)y[S]=this.i(S)^v.i(S);return new l(y,this.h^v.h)};function b(v){for(var p=v.g.length+1,y=[],S=0;S<p;S++)y[S]=v.i(S)<<1|v.i(S-1)>>>31;return new l(y,v.h)}function F(v,p){var y=p>>5;p%=32;for(var S=v.g.length-y,I=[],R=0;R<S;R++)I[R]=0<p?v.i(R+y)>>>p|v.i(R+y+1)<<32-p:v.i(R+y);return new l(I,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=m,j0=l}).apply(typeof nm<"u"?nm:typeof self<"u"?self:typeof window<"u"?window:{});var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yo=="object"&&Yo];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var k=o[f];if(!(k in h))break e;h=h[k]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,f=!1,k={next:function(){if(!f&&h<o.length){var P=h++;return{value:u(P,o[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},a=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function m(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,f),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function _(o,u,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,_.apply(null,arguments)}function A(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,k,P){for(var L=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)L[ie-2]=arguments[ie];return u.prototype[k].apply(f,L)}}function x(o){const u=o.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function j(o,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(c(f)){const k=o.length||0,P=f.length||0;o.length=k+P;for(let L=0;L<P;L++)o[k+L]=f[L]}else o.push(f)}}class T{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function w(o){return/^[\s\xa0]*$/.test(o)}function C(){var o=a.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var b=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function F(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function v(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function p(o){const u={};for(const h in o)u[h]=o[h];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(o,u){let h,f;for(let k=1;k<arguments.length;k++){f=arguments[k];for(h in f)o[h]=f[h];for(let P=0;P<y.length;P++)h=y[P],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function R(o){a.setTimeout(()=>{throw o},0)}function E(){var o=H;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,h){const f=ir.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var ir=new T(()=>new Li,o=>o.reset());class Li{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,U=!1,H=new ft,V=()=>{const o=a.Promise.resolve(void 0);Kt=()=>{o.then(fe)}};var fe=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){R(h)}var u=ir;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}U=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Yt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,u),a.removeEventListener("test",h,u)}catch{}return o}();function qt(o,u){if(ye.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(b){e:{try{O(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qt.aa.h.call(this)}}N(qt,ye);var Qt={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),$0=0;function G0(o,u,h,f,k){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=k,this.key=++$0,this.da=this.fa=!1}function fo(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function po(o){this.src=o,this.g={},this.h=0}po.prototype.add=function(o,u,h,f,k){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var L=xa(o,u,f,k);return-1<L?(u=o[L],h||(u.fa=!1)):(u=new G0(u,this.src,P,!!f,k),u.fa=h,o.push(u)),u};function Pa(o,u){var h=u.type;if(h in o.g){var f=o.g[h],k=Array.prototype.indexOf.call(f,u,void 0),P;(P=0<=k)&&Array.prototype.splice.call(f,k,1),P&&(fo(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function xa(o,u,h,f){for(var k=0;k<o.length;++k){var P=o[k];if(!P.da&&P.listener==u&&P.capture==!!h&&P.ha==f)return k}return-1}var Oa="closure_lm_"+(1e6*Math.random()|0),Da={};function jd(o,u,h,f,k){if(Array.isArray(u)){for(var P=0;P<u.length;P++)jd(o,u[P],h,f,k);return null}return h=Bd(h),o&&o[Xt]?o.K(u,h,d(f)?!!f.capture:!!f,k):K0(o,u,h,!1,f,k)}function K0(o,u,h,f,k,P){if(!u)throw Error("Invalid event type");var L=d(k)?!!k.capture:!!k,ie=Ma(o);if(ie||(o[Oa]=ie=new po(o)),h=ie.add(u,h,f,L,P),h.proxy)return h;if(f=Y0(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Yt||(k=L),k===void 0&&(k=!1),o.addEventListener(u.toString(),f,k);else if(o.attachEvent)o.attachEvent(Wd(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Y0(){function o(h){return u.call(o.src,o.listener,h)}const u=q0;return o}function zd(o,u,h,f,k){if(Array.isArray(u))for(var P=0;P<u.length;P++)zd(o,u[P],h,f,k);else f=d(f)?!!f.capture:!!f,h=Bd(h),o&&o[Xt]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],h=xa(P,h,f,k),-1<h&&(fo(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=Ma(o))&&(u=o.g[u.toString()],o=-1,u&&(o=xa(u,h,f,k)),(h=-1<o?u[o]:null)&&La(h))}function La(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Xt])Pa(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(Wd(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=Ma(u))?(Pa(h,o),h.h==0&&(h.src=null,u[Oa]=null)):fo(o)}}}function Wd(o){return o in Da?Da[o]:Da[o]="on"+o}function q0(o,u){if(o.da)o=!0;else{u=new qt(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&La(o),o=h.call(f,u)}return o}function Ma(o){return o=o[Oa],o instanceof po?o:null}var ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bd(o){return typeof o=="function"?o:(o[ba]||(o[ba]=function(u){return o.handleEvent(u)}),o[ba])}function Me(){re.call(this),this.i=new po(this),this.M=this,this.F=null}N(Me,re),Me.prototype[Xt]=!0,Me.prototype.removeEventListener=function(o,u,h,f){zd(this,o,u,h,f)};function Ve(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new ye(u,o);else if(u instanceof ye)u.target=u.target||o;else{var k=u;u=new ye(f,o),S(u,k)}if(k=!0,h)for(var P=h.length-1;0<=P;P--){var L=u.g=h[P];k=go(L,f,!0,u)&&k}if(L=u.g=o,k=go(L,f,!0,u)&&k,k=go(L,f,!1,u)&&k,h)for(P=0;P<h.length;P++)L=u.g=h[P],k=go(L,f,!1,u)&&k}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)fo(h[f]);delete o.g[u],o.h--}}this.F=null},Me.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},Me.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function go(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,P=0;P<u.length;++P){var L=u[P];if(L&&!L.da&&L.capture==h){var ie=L.listener,Ae=L.ha||L.src;L.fa&&Pa(o.i,L),k=ie.call(Ae,f)!==!1&&k}}return k&&!f.defaultPrevented}function Hd(o,u,h){if(typeof o=="function")h&&(o=_(o,h));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:a.setTimeout(o,u||0)}function Vd(o){o.g=Hd(()=>{o.g=null,o.i&&(o.i=!1,Vd(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Q0 extends re{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Vd(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mi(o){re.call(this),this.h=o,this.g={}}N(Mi,re);var $d=[];function Gd(o){F(o.g,function(u,h){this.g.hasOwnProperty(h)&&La(u)},o),o.g={}}Mi.prototype.N=function(){Mi.aa.N.call(this),Gd(this)},Mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fa=a.JSON.stringify,X0=a.JSON.parse,J0=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ua(){}Ua.prototype.h=null;function Kd(o){return o.h||(o.h=o.i())}function Z0(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ja(){ye.call(this,"d")}N(ja,ye);function za(){ye.call(this,"c")}N(za,ye);var br={},Yd=null;function Wa(){return Yd=Yd||new Me}br.La="serverreachability";function qd(o){ye.call(this,br.La,o)}N(qd,ye);function Fi(o){const u=Wa();Ve(u,new qd(u))}br.STAT_EVENT="statevent";function Qd(o,u){ye.call(this,br.STAT_EVENT,o),this.stat=u}N(Qd,ye);function $e(o){const u=Wa();Ve(u,new Qd(u,o))}br.Ma="timingevent";function Xd(o,u){ye.call(this,br.Ma,o),this.size=u}N(Xd,ye);function Ui(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function ji(){this.g=!0}ji.prototype.xa=function(){this.g=!1};function ew(o,u,h,f,k,P){o.info(function(){if(o.g)if(P)for(var L="",ie=P.split("&"),Ae=0;Ae<ie.length;Ae++){var X=ie[Ae].split("=");if(1<X.length){var be=X[0];X=X[1];var Fe=be.split("_");L=2<=Fe.length&&Fe[1]=="type"?L+(be+"="+X+"&"):L+(be+"=redacted&")}}else L=null;else L=P;return"XMLHTTP REQ ("+f+") [attempt "+k+"]: "+u+`
`+h+`
`+L})}function tw(o,u,h,f,k,P,L){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+k+"]: "+u+`
`+h+`
`+P+" "+L})}function Fr(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+rw(o,h)+(f?" "+f:"")})}function nw(o,u){o.info(function(){return"TIMEOUT: "+u})}ji.prototype.info=function(){};function rw(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var k=f[1];if(Array.isArray(k)&&!(1>k.length)){var P=k[0];if(P!="noop"&&P!="stop"&&P!="close")for(var L=1;L<k.length;L++)k[L]=""}}}}return Fa(h)}catch{return u}}var Ba={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},iw={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ha;function mo(){}N(mo,Ua),mo.prototype.g=function(){return new XMLHttpRequest},mo.prototype.i=function(){return{}},Ha=new mo;function In(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new Mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jd}function Jd(){this.i=null,this.g="",this.h=!1}var Zd={},Va={};function $a(o,u,h){o.L=1,o.v=wo(Jt(u)),o.m=h,o.P=!0,ef(o,null)}function ef(o,u){o.F=Date.now(),_o(o),o.A=Jt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),gf(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Jd,o.g=Df(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Q0(_(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var k="readystatechange";Array.isArray(k)||(k&&($d[0]=k.toString()),k=$d);for(var P=0;P<k.length;P++){var L=jd(h,k[P],f||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Fi(),ew(o.i,o.u,o.A,o.l,o.R,o.m)}In.prototype.ca=function(o){o=o.target;const u=this.M;u&&Zt(o)==3?u.j():this.Y(o)},In.prototype.Y=function(o){try{if(o==this.g)e:{const Fe=Zt(this.g);var u=this.g.Ba();const zr=this.g.Z();if(!(3>Fe)&&(Fe!=3||this.g&&(this.h.h||this.g.oa()||Sf(this.g)))){this.J||Fe!=4||u==7||(u==8||0>=zr?Fi(3):Fi(2)),Ga(this);var h=this.g.Z();this.X=h;t:if(tf(this)){var f=Sf(this.g);o="";var k=f.length,P=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),zi(this);var L="";break t}this.h.i=new a.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(P&&u==k-1)});f.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,tw(this.i,this.u,this.A,this.l,this.R,Fe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Ae=this.g;if((ie=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ie)){var X=ie;break t}}X=null}if(h=X)Fr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ka(this,h);else{this.o=!1,this.s=3,$e(12),sr(this),zi(this);break e}}if(this.P){h=!0;let Tt;for(;!this.J&&this.C<L.length;)if(Tt=sw(this,L),Tt==Va){Fe==4&&(this.s=4,$e(14),h=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Zd){this.s=4,$e(15),Fr(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else Fr(this.i,this.l,Tt,null),Ka(this,Tt);if(tf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Fe!=4||L.length!=0||this.h.h||(this.s=1,$e(16),h=!1),this.o=this.o&&h,!h)Fr(this.i,this.l,L,"[Invalid Chunked Response]"),sr(this),zi(this);else if(0<L.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Za(be),be.M=!0,$e(11))}}else Fr(this.i,this.l,L,null),Ka(this,L);Fe==4&&sr(this),this.o&&!this.J&&(Fe==4?Af(this.j,this):(this.o=!1,_o(this)))}else Sw(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),sr(this),zi(this)}}}catch{}finally{}};function tf(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function sw(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?Va:(h=Number(u.substring(h,f)),isNaN(h)?Zd:(f+=1,f+h>u.length?Va:(u=u.slice(f,f+h),o.C=f+h,u)))}In.prototype.cancel=function(){this.J=!0,sr(this)};function _o(o){o.S=Date.now()+o.I,nf(o,o.I)}function nf(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ui(_(o.ba,o),u)}function Ga(o){o.B&&(a.clearTimeout(o.B),o.B=null)}In.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(nw(this.i,this.A),this.L!=2&&(Fi(),$e(17)),sr(this),this.s=2,zi(this)):nf(this,this.S-o)};function zi(o){o.j.G==0||o.J||Af(o.j,o)}function sr(o){Ga(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Gd(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ka(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Ya(h.h,o))){if(!o.K&&Ya(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var k=f;if(k[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ko(h),To(h);else break e;Ja(h),$e(18)}}else h.za=k[1],0<h.za-h.T&&37500>k[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ui(_(h.Za,h),6e3));if(1>=of(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else lr(h,11)}else if((o.K||h.g==o)&&ko(h),!w(u))for(k=h.Da.g.parse(u),u=0;u<k.length;u++){let X=k[u];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const be=X[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));const Fe=X[4];Fe!=null&&(h.Aa=Fe,h.j.info("SVER="+h.Aa));const zr=X[5];zr!=null&&typeof zr=="number"&&0<zr&&(f=1.5*zr,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Tt=o.g;if(Tt){const Ro=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ro){var P=f.h;P.g||Ro.indexOf("spdy")==-1&&Ro.indexOf("quic")==-1&&Ro.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(qa(P,P.h),P.h=null))}if(f.D){const eu=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;eu&&(f.ya=eu,oe(f.I,f.D,eu))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var L=o;if(f.qa=Of(f,f.J?f.ia:null,f.W),L.K){lf(f.h,L);var ie=L,Ae=f.L;Ae&&(ie.I=Ae),ie.B&&(Ga(ie),_o(ie)),f.g=L}else Rf(f);0<h.i.length&&Co(h)}else X[0]!="stop"&&X[0]!="close"||lr(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?lr(h,7):Xa(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}Fi(4)}catch{}}var ow=class{constructor(o,u){this.g=o,this.map=u}};function rf(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sf(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function of(o){return o.h?1:o.g?o.g.size:0}function Ya(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function qa(o,u){o.g?o.g.add(u):o.h=u}function lf(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}rf.prototype.cancel=function(){if(this.i=af(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function af(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return x(o.i)}function lw(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function aw(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const f in o)u[h++]=f;return u}}}function uf(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=aw(o),f=lw(o),k=f.length,P=0;P<k;P++)u.call(void 0,f[P],h&&h[P],o)}var cf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uw(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),k=null;if(0<=f){var P=o[h].substring(0,f);k=o[h].substring(f+1)}else P=o[h];u(P,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function or(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof or){this.h=o.h,yo(this,o.j),this.o=o.o,this.g=o.g,vo(this,o.s),this.l=o.l;var u=o.i,h=new Hi;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),hf(this,h),this.m=o.m}else o&&(u=String(o).match(cf))?(this.h=!1,yo(this,u[1]||"",!0),this.o=Wi(u[2]||""),this.g=Wi(u[3]||"",!0),vo(this,u[4]),this.l=Wi(u[5]||"",!0),hf(this,u[6]||"",!0),this.m=Wi(u[7]||"")):(this.h=!1,this.i=new Hi(null,this.h))}or.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Bi(u,df,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Bi(u,df,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Bi(h,h.charAt(0)=="/"?dw:hw,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Bi(h,pw)),o.join("")};function Jt(o){return new or(o)}function yo(o,u,h){o.j=h?Wi(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function vo(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function hf(o,u,h){u instanceof Hi?(o.i=u,gw(o.i,o.h)):(h||(u=Bi(u,fw)),o.i=new Hi(u,o.h))}function oe(o,u,h){o.i.set(u,h)}function wo(o){return oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wi(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Bi(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,cw),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function cw(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var df=/[#\/\?@]/g,hw=/[#\?:]/g,dw=/[#\?]/g,fw=/[#\?@]/g,pw=/#/g;function Hi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&uw(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=Hi.prototype,t.add=function(o,u){Tn(this),this.i=null,o=Ur(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function ff(o,u){Tn(o),u=Ur(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function pf(o,u){return Tn(o),u=Ur(o,u),o.g.has(u)}t.forEach=function(o,u){Tn(this),this.g.forEach(function(h,f){h.forEach(function(k){o.call(u,k,f,this)},this)},this)},t.na=function(){Tn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const k=o[f];for(let P=0;P<k.length;P++)h.push(u[f])}return h},t.V=function(o){Tn(this);let u=[];if(typeof o=="string")pf(this,o)&&(u=u.concat(this.g.get(Ur(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},t.set=function(o,u){return Tn(this),this.i=null,o=Ur(this,o),pf(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function gf(o,u,h){ff(o,u),0<h.length&&(o.i=null,o.g.set(Ur(o,u),x(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const P=encodeURIComponent(String(f)),L=this.V(f);for(f=0;f<L.length;f++){var k=P;L[f]!==""&&(k+="="+encodeURIComponent(String(L[f]))),o.push(k)}}return this.i=o.join("&")};function Ur(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function gw(o,u){u&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(h,f){var k=f.toLowerCase();f!=k&&(ff(this,f),gf(this,k,h))},o)),o.j=u}function mw(o,u){const h=new ji;if(a.Image){const f=new Image;f.onload=A(Cn,h,"TestLoadImage: loaded",!0,u,f),f.onerror=A(Cn,h,"TestLoadImage: error",!1,u,f),f.onabort=A(Cn,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=A(Cn,h,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function _w(o,u){const h=new ji,f=new AbortController,k=setTimeout(()=>{f.abort(),Cn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(P=>{clearTimeout(k),P.ok?Cn(h,"TestPingServer: ok",!0,u):Cn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),Cn(h,"TestPingServer: error",!1,u)})}function Cn(o,u,h,f,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),f(h)}catch{}}function yw(){this.g=new J0}function vw(o,u,h){const f=h||"";try{uf(o,function(k,P){let L=k;d(k)&&(L=Fa(k)),u.push(f+P+"="+encodeURIComponent(L))})}catch(k){throw u.push(f+"type="+encodeURIComponent("_badmap")),k}}function Eo(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Eo,Ua),Eo.prototype.g=function(){return new So(this.l,this.j)},Eo.prototype.i=function(o){return function(){return o}}({});function So(o,u){Me.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(So,Me),t=So.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,$i(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||a).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mf(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function mf(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Vi(this):$i(this),this.readyState==3&&mf(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Vi(this))},t.Qa=function(o){this.g&&(this.response=o,Vi(this))},t.ga=function(){this.g&&Vi(this)};function Vi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,$i(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function $i(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(So.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function _f(o){let u="";return F(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function Qa(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=_f(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):oe(o,u,h))}function ve(o){Me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ve,Me);var ww=/^https?$/i,Ew=["POST","PUT"];t=ve.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ha.g(),this.v=this.o?Kd(this.o):Kd(Ha),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){yf(this,P);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var k in f)h.set(k,f[k]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())h.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),k=a.FormData&&o instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Ew,u,void 0))||f||k||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of h)this.g.setRequestHeader(P,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ef(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){yf(this,P)}};function yf(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,vf(o),Io(o)}function vf(o){o.A||(o.A=!0,Ve(o,"complete"),Ve(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ve(this,"complete"),Ve(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wf(this):this.bb())},t.bb=function(){wf(this)};function wf(o){if(o.h&&typeof l<"u"&&(!o.v[1]||Zt(o)!=4||o.Z()!=2)){if(o.u&&Zt(o)==4)Hd(o.Ea,0,o);else if(Ve(o,"readystatechange"),Zt(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=L===0){var k=String(o.D).match(cf)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),f=!ww.test(k?k.toLowerCase():"")}h=f}if(h)Ve(o,"complete"),Ve(o,"success");else{o.m=6;try{var P=2<Zt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",vf(o)}}finally{Io(o)}}}}function Io(o,u){if(o.g){Ef(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ve(o,"ready");try{h.onreadystatechange=f}catch{}}}function Ef(o){o.I&&(a.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Zt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),X0(u)}};function Sf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sw(o){const u={};o=(o.g&&2<=Zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(w(o[f]))continue;var h=I(o[f]);const k=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=u[k]||[];u[k]=P,P.push(h)}v(u,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gi(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function If(o){this.Aa=0,this.i=[],this.j=new ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gi("baseRetryDelayMs",5e3,o),this.cb=Gi("retryDelaySeedMs",1e4,o),this.Wa=Gi("forwardChannelMaxRetries",2,o),this.wa=Gi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new rf(o&&o.concurrentRequestLimit),this.Da=new yw,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=If.prototype,t.la=8,t.G=1,t.connect=function(o,u,h,f){$e(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Of(this,null,this.W),Co(this)};function Xa(o){if(Tf(o),o.G==3){var u=o.U++,h=Jt(o.I);if(oe(h,"SID",o.K),oe(h,"RID",u),oe(h,"TYPE","terminate"),Ki(o,h),u=new In(o,o.j,u),u.L=2,u.v=wo(Jt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&a.Image&&(new Image().src=u.v,h=!0),h||(u.g=Df(u.j,null),u.g.ea(u.v)),u.F=Date.now(),_o(u)}xf(o)}function To(o){o.g&&(Za(o),o.g.cancel(),o.g=null)}function Tf(o){To(o),o.u&&(a.clearTimeout(o.u),o.u=null),ko(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&a.clearTimeout(o.s),o.s=null)}function Co(o){if(!sf(o.h)&&!o.s){o.s=!0;var u=o.Ga;Kt||V(),U||(Kt(),U=!0),H.add(u,o),o.B=0}}function Iw(o,u){return of(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ui(_(o.Ga,o,u),Pf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new In(this,this.j,o);let P=this.o;if(this.S&&(P?(P=p(P),S(P,this.S)):P=this.S),this.m!==null||this.O||(k.H=P,P=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=kf(this,k,u),h=Jt(this.I),oe(h,"RID",o),oe(h,"CVER",22),this.D&&oe(h,"X-HTTP-Session-Id",this.D),Ki(this,h),P&&(this.O?u="headers="+encodeURIComponent(String(_f(P)))+"&"+u:this.m&&Qa(h,this.m,P)),qa(this.h,k),this.Ua&&oe(h,"TYPE","init"),this.P?(oe(h,"$req",u),oe(h,"SID","null"),k.T=!0,$a(k,h,null)):$a(k,h,u),this.G=2}}else this.G==3&&(o?Cf(this,o):this.i.length==0||sf(this.h)||Cf(this))};function Cf(o,u){var h;u?h=u.l:h=o.U++;const f=Jt(o.I);oe(f,"SID",o.K),oe(f,"RID",h),oe(f,"AID",o.T),Ki(o,f),o.m&&o.o&&Qa(f,o.m,o.o),h=new In(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=kf(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),qa(o.h,h),$a(h,f,u)}function Ki(o,u){o.H&&F(o.H,function(h,f){oe(u,f,h)}),o.l&&uf({},function(h,f){oe(u,f,h)})}function kf(o,u,h){h=Math.min(o.i.length,h);var f=o.l?_(o.l.Na,o.l,o):null;e:{var k=o.i;let P=-1;for(;;){const L=["count="+h];P==-1?0<h?(P=k[0].g,L.push("ofs="+P)):P=0:L.push("ofs="+P);let ie=!0;for(let Ae=0;Ae<h;Ae++){let X=k[Ae].g;const be=k[Ae].map;if(X-=P,0>X)P=Math.max(0,k[Ae].g-100),ie=!1;else try{vw(be,L,"req"+X+"_")}catch{f&&f(be)}}if(ie){f=L.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function Rf(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Kt||V(),U||(Kt(),U=!0),H.add(u,o),o.v=0}}function Ja(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ui(_(o.Fa,o),Pf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Nf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ui(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),To(this),Nf(this))};function Za(o){o.A!=null&&(a.clearTimeout(o.A),o.A=null)}function Nf(o){o.g=new In(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Jt(o.qa);oe(u,"RID","rpc"),oe(u,"SID",o.K),oe(u,"AID",o.T),oe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&oe(u,"TO",o.ja),oe(u,"TYPE","xmlhttp"),Ki(o,u),o.m&&o.o&&Qa(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=wo(Jt(u)),h.m=null,h.P=!0,ef(h,o)}t.Za=function(){this.C!=null&&(this.C=null,To(this),Ja(this),$e(19))};function ko(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Af(o,u){var h=null;if(o.g==u){ko(o),Za(o),o.g=null;var f=2}else if(Ya(o.h,u))h=u.D,lf(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;f=Wa(),Ve(f,new Xd(f,h)),Co(o)}else Rf(o);else if(k=u.s,k==3||k==0&&0<u.X||!(f==1&&Iw(o,u)||f==2&&Ja(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),k){case 1:lr(o,5);break;case 4:lr(o,10);break;case 3:lr(o,6);break;default:lr(o,2)}}}function Pf(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function lr(o,u){if(o.j.info("Error code "+u),u==2){var h=_(o.fb,o),f=o.Xa;const k=!f;f=new or(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||yo(f,"https"),wo(f),k?mw(f.toString(),h):_w(f.toString(),h)}else $e(2);o.G=0,o.l&&o.l.sa(u),xf(o),Tf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function xf(o){if(o.G=0,o.ka=[],o.l){const u=af(o.h);(u.length!=0||o.i.length!=0)&&(j(o.ka,u),j(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Of(o,u,h){var f=h instanceof or?Jt(h):new or(h);if(f.g!="")u&&(f.g=u+"."+f.g),vo(f,f.s);else{var k=a.location;f=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var P=new or(null);f&&yo(P,f),u&&(P.g=u),k&&vo(P,k),h&&(P.l=h),f=P}return h=o.D,u=o.ya,h&&u&&oe(f,h,u),oe(f,"VER",o.la),Ki(o,f),f}function Df(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ve(new Eo({eb:h})):new ve(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lf(){}t=Lf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function pt(o,u){Me.call(this),this.g=new If(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!w(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!w(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new jr(this)}N(pt,Me),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Xa(this.g)},pt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Fa(o),o=h);u.i.push(new ow(u.Ya++,o)),u.G==3&&Co(u)},pt.prototype.N=function(){this.g.l=null,delete this.j,Xa(this.g),delete this.g,pt.aa.N.call(this)};function Mf(o){ja.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}N(Mf,ja);function bf(){za.call(this),this.status=1}N(bf,za);function jr(o){this.g=o}N(jr,Lf),jr.prototype.ua=function(){Ve(this.g,"a")},jr.prototype.ta=function(o){Ve(this.g,new Mf(o))},jr.prototype.sa=function(o){Ve(this.g,new bf)},jr.prototype.ra=function(){Ve(this.g,"b")},pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,Ba.NO_ERROR=0,Ba.TIMEOUT=8,Ba.HTTP_ERROR=6,iw.COMPLETE="complete",Z0.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",Me.prototype.listen=Me.prototype.K,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha}).apply(typeof Yo<"u"?Yo:typeof self<"u"?self:typeof window<"u"?window:{});const rm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new va("@firebase/firestore");function xt(t,...e){if(Ti.logLevel<=J.DEBUG){const n=e.map(Md);Ti.debug(`Firestore (${ho}): ${t}`,...n)}}function z0(t,...e){if(Ti.logLevel<=J.ERROR){const n=e.map(Md);Ti.error(`Firestore (${ho}): ${t}`,...n)}}function RN(t,...e){if(Ti.logLevel<=J.WARN){const n=e.map(Md);Ti.warn(`Firestore (${ho}): ${t}`,...n)}}function Md(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t="Unexpected state"){const e=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: `+t;throw z0(e),new Error(e)}function ks(t,e){t||bd()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class et extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class AN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PN{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ks(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rs,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{xt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(xt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rs)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(xt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ks(typeof r.accessToken=="string"),new W0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ks(e===null||typeof e=="string"),new Ke(e)}}class xN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ON{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ks(this.o===void 0);const r=s=>{s.error!=null&&xt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const l=s.token!==this.R;return this.R=s.token,xt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{xt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):xt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ks(typeof n.token=="string"),this.R=n.token,new DN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function MN(t){return t.name==="IndexedDbTransactionError"}class ea{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var im,Y;(Y=im||(im={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new j0([4294967295,4294967295],0);function Wu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&xt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const l=Date.now()+r,a=new Fd(e,n,l,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new et(Ze.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var sm,om;(om=sm||(sm={})).na="default",om.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new Map;function UN(t,e,n,r){if(e===!0&&r===!0)throw new et(Ze.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jN(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":bd()}function zN(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new et(Ze.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jN(t);throw new et(Ze.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new et(Ze.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new et(Ze.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FN((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new et(Ze.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new et(Ze.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new et(Ze.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class B0{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new am({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new et(Ze.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new et(Ze.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new am(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NN;switch(r.type){case"firstParty":return new ON(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new et(Ze.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=lm.get(n);r&&(xt("ComponentProvider","Removing Datastore"),lm.delete(n),r.terminate())}(this),Promise.resolve()}}function WN(t,e,n,r={}){var i;const s=(t=zN(t,B0))._getSettings(),l=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==l&&RN("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:l,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ke.MOCK_USER;else{a=Oy(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new et(Ze.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ke(d)}t._authCredentials=new AN(new W0(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new bN(this,"async_queue_retry"),this.fu=()=>{const r=Wu();r&&xt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Wu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Rs;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!MN(e))throw e;xt("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(l){let a=l.message||"";return l.stack&&(a=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),a}(r);throw z0("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=Fd.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&bd()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class BN extends B0{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new um,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new um(e),this._firestoreClient=void 0,await e}}}function HN(t,e){const n=typeof t=="object"?t:td(),r=typeof t=="string"?t:"(default)",i=wa(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ay("firestore");s&&WN(i,...s)}return i}(function(e,n=!0){(function(i){ho=i})(Or),Tr(new Xn("firestore",(r,{instanceIdentifier:i,options:s})=>{const l=r.getProvider("app").getImmediate(),a=new BN(new PN(r.getProvider("auth-internal")),new LN(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new et(Ze.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(d.options.projectId,m)}(l,i),l);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Vt(rm,"4.7.5",e),Vt(rm,"4.7.5","esm2017")})();const VN={apiKey:"AIzaSyDRcADmjKXGcXt6KPMUoxMmJkyMLcAU8uw",authDomain:"gamblinggame-f6fcf.firebaseapp.com",projectId:"gamblinggame-f6fcf",storageBucket:"gamblinggame-f6fcf.appspot.com",messagingSenderId:"661998980834",appId:"1:661998980834:web:ef8168c9ee7cb0f99898bb",measurementId:"G-75XLMQFC2P",databaseURL:"https://gamblinggame-f6fcf-default-rtdb.europe-west1.firebasedatabase.app/"},Ud=Uy(VN),H0=CN(Ud),V0=ck(Ud);HN(Ud);const $N=({onStart:t})=>W.jsxs("div",{className:"h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white",children:[W.jsx("h1",{className:"text-4xl font-bold mb-8",children:"The Gambling Trap"}),W.jsx("button",{onClick:t,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Start Game"})]}),GN=({onResult:t})=>{const[e,n]=ee.useState(["🍒","🍋","🍊"]),[r,i]=ee.useState(!1),s=["🍒","🍋","🍊","⭐","💎"];return ee.useEffect(()=>{i(!0);const l=setInterval(()=>{n([s[Math.floor(Math.random()*s.length)],s[Math.floor(Math.random()*s.length)],s[Math.floor(Math.random()*s.length)]])},100);return setTimeout(()=>{clearInterval(l);const a=["🍒","🍋","🍊"];n(a),i(!1),t(a)},2e3),()=>clearInterval(l)},[t]),W.jsx("div",{className:"bg-gray-900 text-white p-4 rounded",children:W.jsx("div",{className:"flex justify-center space-x-4 text-4xl mb-4",children:e.map((l,a)=>W.jsx("span",{className:"transition-transform duration-300",children:l},a))})})},KN={1:{text:"YYou are a successful individual with a family. One day, you pass by a casino and see a slot machine. It seems tempting. What do you do?",choices:[{text:"Enter the casino",next:"2"},{text:"Walk away",next:"win1"}]},2:{text:"AAs you approach the slot machine, you remember your wife's warning about gambling. What do you do?",requiresSlotMachine:!0,choices:[{text:"Ignore the warning and play",next:"3"},{text:"Heed the warning and leave",next:"win1"}],moneyChange:-10},3:{text:"YYou lost your frist $20. Do you play?",requiresSlotMachine:!0,choices:[{text:"Play the slot machine",next:"4"},{text:"Leave the casino",next:"lose2"}],moneyChange:-10},4:{text:"YYou play the slot machine. The reels spin, and you lose $20. What do you do next?",requiresSlotMachine:!0,choices:[{text:"Play again",next:"5"},{text:"Leave with your losses",next:"lose2"}],moneyChange:-10},5:{text:"YYou play again, losing another $20. The thrill is addictive. What now?",requiresSlotMachine:!0,choices:[{text:"Play again",next:"6"},{text:"Leave with your losses",next:"lose2"}],moneyChange:-10},6:{text:"YYou play again, losing another $20. You are now $80 in the hole. What do you do?",requiresSlotMachine:!0,choices:[{text:"Play again",next:"7"},{text:"Leave with your losses",next:"lose2"}],moneyChange:-10},7:{text:"YYou lost your last $20 and have no more cash to play. Do you sell your car, your house, or stop playing?",choices:[{text:"Sell the car",next:"8",moneyChange:100},{text:"Sell the house",next:"9",moneyChange:200},{text:"Stop playing",next:"lose3"}]},8:{text:"YYou sold your car for $100. What do you do with the money?",choices:[{text:"Play again",next:"10",moneyChange:-100},{text:"Leave with your losses",next:"lose2"}]},9:{text:"YYou sold your house for $200. What do you do with the money?",choices:[{text:"Play again",next:"10",moneyChange:-200},{text:"Leave with your losses",next:"lose2"}]},10:{text:"AAfter selling everything, you play again and lose it all. Your family leaves you. What now?",choices:[{text:"Reflect on your mistakes",next:"lose"}]},11:{text:"AAfter selling everything, you play again and lose it all. Your family leaves you. What now?",choices:[{text:"Reflect on your mistakes",next:"lose"}]},win1:{text:"YYou walk away from the casino, feeling proud of your self-control. You go home to your family.",outcome:"win",choices:[]},lose:{text:"YYou gamble at what cost? Everything... Your family has left you, and you have nothing left.",outcome:"lose",choices:[]},lose2:{text:"YYou leave the casino with your losses, feeling regretful. You go home to your family.",outcome:"lose2",choices:[]},lose3:{text:"YYou chose to stop playing. Despite your losses, you go home and try to rebuild your life.",outcome:"lose3",choices:[]}},cm={scenes:KN},YN=({message:t,buttonText:e,onButtonClick:n})=>W.jsxs("div",{className:"h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white",children:[W.jsx("h1",{className:"text-5xl font-bold mb-8 text-center",children:t}),W.jsx("button",{onClick:n,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:e})]}),qN=({text:t,speed:e=50,onComplete:n})=>{const[r,i]=ee.useState("");return ee.useEffect(()=>{let s=0;i("");const l=setInterval(()=>{s<t.length-1?(i(a=>a+t[s]),s++):(clearInterval(l),n&&n())},e);return()=>clearInterval(l)},[t,e,n]),W.jsx("span",{children:r})},QN=({onGameOver:t})=>{const[e,n]=ee.useState("1"),[r,i]=ee.useState(cm.scenes[1]),[s,l]=ee.useState(100),[a,c]=ee.useState(0),[d,m]=ee.useState(!1),[g,_]=ee.useState(null);ee.useEffect(()=>{console.log("Current Scene ID:",e);const x=cm.scenes[e];if(!x){console.error("Invalid scene ID:",e);return}i(x),x.outcome||_(null),x.outcome==="win"?_("You Win! You resisted temptation and walked away!"):x.outcome==="lose"?_("You gamble at what cost? Everything... Your family has left you, and you have nothing left."):x.outcome==="lose2"?_("You leave the casino with your losses, feeling regretful."):x.outcome==="lose3"&&_("You chose to stop playing. Despite your losses, you go home and try to rebuild your life.")},[e]),ee.useEffect(()=>{s<0&&(console.log("Money depleted. Setting to Lose condition."),n("lose"))},[s]);const A=x=>{x.moneyChange&&l(j=>j+x.moneyChange),r.requiresSlotMachine&&x.text.toLowerCase().includes("play")?m(!0):n(x.next)},N=()=>{setTimeout(()=>{var j,T;m(!1),r.moneyChange&&(l(w=>w+r.moneyChange),c(w=>w-r.moneyChange));const x=((j=r.choices.find(w=>w.text.toLowerCase().includes("play again")))==null?void 0:j.next)||((T=r.choices[0])==null?void 0:T.next);x?n(x):console.error("No valid next scene found!")},2e3)};return g?W.jsx(YN,{message:g||"An unexpected outcome occurred.",buttonText:"Back to Menu",onButtonClick:()=>t("menu")}):W.jsxs("div",{className:"h-screen w-screen flex flex-col justify-end items-center bg-cover bg-center",style:{backgroundImage:'url("/public/background.png")'},children:[(e==="2"||e==="8"||e==="9")&&W.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2",children:W.jsx("img",{src:"/public/stand1.png",alt:"placehoder",className:"rounded-lg shadow-lg"})}),e==="7"&&W.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2",children:W.jsx("img",{src:"/public/lose4.png",alt:"placehoder",className:"rounded-lg shadow-lg"})}),e==="5"&&W.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2",children:W.jsx("img",{src:"/public/lose3.png",alt:"placehoder",className:"rounded-lg shadow-lg"})}),e==="4"&&W.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2",children:W.jsx("img",{src:"/public/lose2.png",alt:"placehoder",className:"rounded-lg shadow-lg"})}),(e==="3"||e==="6"||e==="10"||e==="11")&&W.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2",children:W.jsx("img",{src:"/public/lose1.png",alt:"Losing the Game",className:"rounded-lg shadow-lg"})}),d&&W.jsx("div",{className:"absolute",style:{bottom:"140px",right:"10%",transform:"translateY(-50%)"},children:W.jsx(GN,{onResult:N})}),W.jsxs("div",{className:"w-5/6 bg-gray-900 bg-opacity-75 text-white p-6 rounded-lg mb-4",children:[W.jsx("p",{className:"mb-4 text-center",children:W.jsx(qN,{text:r.text.replace("[spent]",a),speed:50})}),W.jsxs("p",{className:"text-center",children:["Money: $",s]}),!d&&W.jsx("div",{className:"flex justify-center space-x-4 mt-4",children:r.choices.map((x,j)=>W.jsx("button",{onClick:()=>A(x),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:x.text},j))})]})]})},XN=({onLogin:t,onSwitchToRegister:e})=>{const[n,r]=ee.useState(""),[i,s]=ee.useState(""),[l,a]=ee.useState(""),c=async d=>{d.preventDefault();try{const g=(await dR(H0,n,i)).user;t(g)}catch(m){console.error("Login error:",m),a(m.message)}};return W.jsxs("div",{className:"h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white",children:[W.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Login"}),W.jsxs("form",{onSubmit:c,className:"flex flex-col space-y-4",children:[W.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:d=>r(d.target.value),className:"p-2 rounded text-black"}),W.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:d=>s(d.target.value),className:"p-2 rounded text-black"}),l&&W.jsx("p",{className:"text-red-500",children:l}),W.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Login"})]}),W.jsxs("p",{className:"mt-4",children:["Don't have an account?"," ",W.jsx("button",{onClick:e,className:"text-blue-500 underline",children:"Register here"})]})]})},JN=({onRegister:t,onSwitchToLogin:e})=>{ee.useState("");const[n,r]=ee.useState(""),[i,s]=ee.useState(""),[l,a]=ee.useState(""),c=async d=>{d.preventDefault();try{const g=(await hR(H0,n,i)).user;t(g)}catch(m){console.error("Registration error:",m),a(m.message)}};return W.jsxs("div",{className:"h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white",children:[W.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Register"}),W.jsxs("form",{onSubmit:c,className:"flex flex-col space-y-4",children:[W.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:d=>r(d.target.value),className:"p-2 rounded text-black"}),W.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:d=>s(d.target.value),className:"p-2 rounded text-black"}),l&&W.jsx("p",{className:"text-red-500",children:l}),W.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Register"})]}),W.jsxs("p",{className:"mt-4",children:["Already have an account?"," ",W.jsx("button",{onClick:e,className:"text-blue-500 underline",children:"Login here"})]})]})},ZN=({userId:t,onNameInserted:e})=>{const[n,r]=ee.useState(""),[i,s]=ee.useState(""),l=async a=>{if(a.preventDefault(),n.trim()===""){s("Name cannot be empty");return}try{await r0(n0(V0,"users/"+t),{name:n}),e()}catch(c){console.error("Error saving name:",c),s("Failed to save name. Please try again.")}};return W.jsxs("div",{className:"h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white",children:[W.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Insert Your Name"}),W.jsxs("form",{onSubmit:l,className:"flex flex-col space-y-4",children:[W.jsx("input",{type:"text",placeholder:"Name",value:n,onChange:a=>r(a.target.value),className:"p-2 rounded text-black"}),i&&W.jsx("p",{className:"text-red-500",children:i}),W.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Save Name"})]})]})},eA=()=>{const[t,e]=ee.useState("login"),[n,r]=ee.useState(""),[i,s]=ee.useState(0),[l,a]=ee.useState(null),c=A=>{a(A.uid),e("insertName")},d=A=>{a(A.uid),e("login")},m=()=>{e("menu")},g=()=>e("game"),_=async(A,N)=>{if(r(A),s(N),e("gameOver"),l){const x=n0(V0,"users/"+l);await r0(x,{money:N})}};return W.jsxs("div",{children:[t==="login"&&W.jsx(XN,{onLogin:c,onSwitchToRegister:()=>e("register")}),t==="register"&&W.jsx(JN,{onRegister:d,onSwitchToLogin:()=>e("login")}),t==="insertName"&&W.jsx(ZN,{userId:l,onNameInserted:m}),t==="menu"&&W.jsx($N,{onStart:g}),t==="game"&&W.jsx(QN,{onGameOver:_}),t==="gameOver"&&W.jsxs("div",{className:"h-screen w-screen bg-gray-800 flex flex-col justify-center items-center text-white",children:[W.jsxs("h1",{className:"text-4xl font-bold mb-8",children:[n==="win"&&"You win, and you didn’t lose anything.",n==="escaped"&&"Well, you got caught in gambling, but you escaped successfully.",n==="lose"&&`You lost everything at the price of $${i}.`]}),W.jsx("button",{onClick:()=>e("menu"),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Back to Menu"})]})]})};Iy(document.getElementById("root")).render(W.jsx(ee.StrictMode,{children:W.jsx(eA,{})}));
