function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.bd1ac8fe.js","eyyUD":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,f,d,p={};d=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h=Function.prototype,v=h.call,g=d&&h.bind.bind(v,v);p=d?g:function(e){return function(){return v.apply(e,arguments)}};var m,y={},b="object"==typeof document&&document.all,_=(m={all:b,IS_HTMLDDA:void 0===b&&void 0!==b}).all;y=m.IS_HTMLDDA?function(e){return"function"==typeof e||e===_}:function(e){return"function"==typeof e};var w,k,E,S={};E=function(e){return null==e};var L=TypeError;k=function(e){if(E(e))throw L("Can't call method on "+e);return e};var O=Object;w=function(e){return O(k(e))};var j=p({}.hasOwnProperty);S=Object.hasOwn||function(e,t){return j(w(e),t)};var M,T=Function.prototype,F=c&&Object.getOwnPropertyDescriptor,$=S(T,"name"),x={EXISTS:$,PROPER:$&&"something"===function(){}.name,CONFIGURABLE:$&&(!c||c&&F(T,"name").configurable)}.CONFIGURABLE,P={},I={},H=Object.defineProperty;M=function(e,t){try{H(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var q="__core-js_shared__",C=a[q]||M(q,{});I=C;var A=p(Function.toString);y(I.inspectSource)||(I.inspectSource=function(e){return A(e)}),P=I.inspectSource;var N,R,D=a.WeakMap;R=y(D)&&/native code/.test(String(D));var z={},U=m.all;z=m.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:y(e)||e===U}:function(e){return"object"==typeof e?null!==e:y(e)};var G,B,W,J={},V=a.document,Y=z(V)&&z(V.createElement);W=function(e){return Y?V.createElement(e):{}},B=!c&&!u((function(){return 7!=Object.defineProperty(W("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(z(e))return e;throw Z(X(e)+" is not an object")};var ee,te,ne={},re=Function.prototype.call;ne=d?re.bind(re):function(){return re.apply(re,arguments)};var ie,oe={},ae=function(e){return y(e)?e:void 0};ie=function(e,t){return arguments.length<2?ae(a[e]):a[e]&&a[e][t]};var se={};se=p({}.isPrototypeOf);var ce,ue,le,fe={};fe="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var de,pe,he=a.process,ve=a.Deno,ge=he&&he.versions||ve&&ve.version,me=ge&&ge.v8;me&&(pe=(de=me.split("."))[0]>0&&de[0]<4?1:+(de[0]+de[1])),!pe&&fe&&(!(de=fe.match(/Edge\/(\d+)/))||de[1]>=74)&&(de=fe.match(/Chrome\/(\d+)/))&&(pe=+de[1]),le=pe,ce=(ue=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&le&&le<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ye=Object;oe=ce?function(e){return"symbol"==typeof e}:function(e){var t=ie("Symbol");return y(t)&&se(t.prototype,ye(e))};var be,_e,we,ke=String;we=function(e){try{return ke(e)}catch(e){return"Object"}};var Ee=TypeError;_e=function(e){if(y(e))return e;throw Ee(we(e)+" is not a function")},be=function(e,t){var n=e[t];return E(n)?void 0:_e(n)};var Se,Le=TypeError;Se=function(e,t){var n,r;if("string"===t&&y(n=e.toString)&&!z(r=ne(n,e)))return r;if(y(n=e.valueOf)&&!z(r=ne(n,e)))return r;if("string"!==t&&y(n=e.toString)&&!z(r=ne(n,e)))return r;throw Le("Can't convert object to primitive value")};var Oe;(Oe=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.29.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"});var je,Me=0,Te=Math.random(),Fe=p(1..toString);je=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Fe(++Me+Te,36)};var $e=a.Symbol,xe=Oe("wks"),Pe=ce?$e.for||$e:$e&&$e.withoutSetter||je,Ie=TypeError,He=function(e){return S(xe,e)||(xe[e]=ue&&S($e,e)?$e[e]:Pe("Symbol."+e)),xe[e]}("toPrimitive");te=function(e,t){if(!z(e)||oe(e))return e;var n,r=be(e,He);if(r){if(void 0===t&&(t="default"),n=ne(r,e,t),!z(n)||oe(n))return n;throw Ie("Can't convert object to primitive value")}return void 0===t&&(t="number"),Se(e,t)},ee=function(e){var t=te(e,"string");return oe(t)?t:t+""};var qe=TypeError,Ce=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Ne="enumerable",Re="configurable",De="writable";G=c?Q?function(e,t,n){if(K(e),t=ee(t),K(n),"function"==typeof e&&"prototype"===t&&"value"in n&&De in n&&!n[De]){var r=Ae(e,t);r&&r[De]&&(e[t]=n.value,n={configurable:Re in n?n[Re]:r[Re],enumerable:Ne in n?n[Ne]:r[Ne],writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(K(e),t=ee(t),K(n),B)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw qe("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var ze;ze=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},J=c?function(e,t,n){return G(e,t,ze(1,n))}:function(e,t,n){return e[t]=n,e};var Ue,Ge=Oe("keys");Ue=function(e){return Ge[e]||(Ge[e]=je(e))};var Be={};Be={};var We,Je,Ve,Ye="Object already initialized",Qe=a.TypeError,Ke=a.WeakMap;if(R||I.state){var Xe=I.state||(I.state=new Ke);Xe.get=Xe.get,Xe.has=Xe.has,Xe.set=Xe.set,We=function(e,t){if(Xe.has(e))throw Qe(Ye);return t.facade=e,Xe.set(e,t),t},Je=function(e){return Xe.get(e)||{}},Ve=function(e){return Xe.has(e)}}else{var Ze=Ue("state");Be[Ze]=!0,We=function(e,t){if(S(e,Ze))throw Qe(Ye);return t.facade=e,J(e,Ze,t),t},Je=function(e){return S(e,Ze)?e[Ze]:{}},Ve=function(e){return S(e,Ze)}}var et=(N={set:We,get:Je,has:Ve,enforce:function(e){return Ve(e)?Je(e):We(e,{})},getterFor:function(e){return function(t){var n;if(!z(t)||(n=Je(t)).type!==e)throw Qe("Incompatible receiver, "+e+" required");return n}}}).enforce,tt=N.get,nt=String,rt=Object.defineProperty,it=p("".slice),ot=p("".replace),at=p([].join),st=c&&!u((function(){return 8!==rt((function(){}),"length",{value:8}).length})),ct=String(String).split("String"),ut=f=function(e,t,n){"Symbol("===it(nt(t),0,7)&&(t="["+ot(nt(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!S(e,"name")||x&&e.name!==t)&&(c?rt(e,"name",{value:t,configurable:!0}):e.name=t),st&&n&&S(n,"arity")&&e.length!==n.arity&&rt(e,"length",{value:n.arity});try{n&&S(n,"constructor")&&n.constructor?c&&rt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=et(e);return S(r,"source")||(r.source=at(ct,"string"==typeof t?t:"")),e};Function.prototype.toString=ut((function(){return y(this)&&tt(this).source||P(this)}),"toString"),l=function(e,t,n){return n.get&&f(n.get,t,{getter:!0}),n.set&&f(n.set,t,{setter:!0}),G(e,t,n)};var lt;lt=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var ft=a.RegExp,dt=ft.prototype;c&&u((function(){var e=!0;try{ft(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(dt,"flags").get.call(t)!==r||n!==r}))&&l(dt,"flags",{configurable:!0,get:lt});var pt,ht,vt,gt={}.propertyIsEnumerable,mt=Object.getOwnPropertyDescriptor,yt=mt&&!gt.call({1:2},1);vt=yt?function(e){var t=mt(this,e);return!!t&&t.enumerable}:gt;var bt,_t,wt={},kt=p({}.toString),Et=p("".slice);_t=function(e){return Et(kt(e),8,-1)};var St=Object,Lt=p("".split);wt=u((function(){return!St("z").propertyIsEnumerable(0)}))?function(e){return"String"==_t(e)?Lt(e,""):St(e)}:St,bt=function(e){return wt(k(e))};var Ot,jt=Object.getOwnPropertyDescriptor,Mt=ht=c?jt:function(e,t){if(e=bt(e),t=ee(t),B)try{return jt(e,t)}catch(e){}if(S(e,t))return ze(!ne(vt,e,t),e[t])};Ot=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(y(n)&&f(n,o,r),r.global)i?e[t]=n:M(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:G(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var Tt,Ft,$t,xt,Pt,It={},Ht={},qt=Math.ceil,Ct=Math.floor;Ht=Math.trunc||function(e){var t=+e;return(t>0?Ct:qt)(t)},Pt=function(e){var t=+e;return t!=t||0===t?0:Ht(t)};var At=Math.max,Nt=Math.min;xt=function(e,t){var n=Pt(e);return n<0?At(n+t,0):Nt(n,t)};var Rt,Dt,zt=Math.min;Dt=function(e){return e>0?zt(Pt(e),9007199254740991):0},Rt=function(e){return Dt(e.length)};var Ut=function(e){return function(t,n,r){var i,o=bt(t),a=Rt(o),s=xt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Gt={includes:Ut(!0),indexOf:Ut(!1)}.indexOf,Bt=p([].push);$t=function(e,t){var n,r=bt(e),i=0,o=[];for(n in r)!S(Be,n)&&S(r,n)&&Bt(o,n);for(;t.length>i;)S(r,n=t[i++])&&(~Gt(o,n)||Bt(o,n));return o};var Wt,Jt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Ft=Object.getOwnPropertyNames||function(e){return $t(e,Jt)},Wt=Object.getOwnPropertySymbols;var Vt=p([].concat);It=ie("Reflect","ownKeys")||function(e){var t=Ft(K(e));return Wt?Vt(t,Wt(e)):t},Tt=function(e,t,n){for(var r=It(t),i=G,o=ht,a=0;a<r.length;a++){var s=r[a];S(e,s)||n&&S(n,s)||i(e,s,o(t,s))}};var Yt={},Qt=/#|\.prototype\./,Kt=function(e,t){var n=Zt[Xt(e)];return n==tn||n!=en&&(y(t)?u(t):!!t)},Xt=Kt.normalize=function(e){return String(e).replace(Qt,".").toLowerCase()},Zt=Kt.data={},en=Kt.NATIVE="N",tn=Kt.POLYFILL="P";Yt=Kt,pt=function(e,t){var n,r,i,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[c]||M(c,{}):(a[c]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(s=Mt(n,r))&&s.value:n[r],!Yt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Tt(o,i)}(e.sham||i&&i.sham)&&J(o,"sham",!0),Ot(n,r,o,e)}};var nn,rn={},on=Function.prototype,an=on.apply,sn=on.call;rn="object"==typeof Reflect&&Reflect.apply||(d?sn.bind(an):function(){return sn.apply(an,arguments)});var cn,un,ln=(un=function(e){if("Function"===_t(e))return p(e)})(un.bind);cn=function(e,t){return _e(e),void 0===t?e:d?ln(e,t):function(){return e.apply(t,arguments)}};var fn={};fn=ie("document","documentElement");var dn={};dn=p([].slice);var pn={},hn=TypeError;pn=function(e,t){if(e<t)throw hn("Not enough arguments");return e};var vn;vn=/(?:ipad|iphone|ipod).*applewebkit/i.test(fe);var gn,mn,yn,bn,_n=mn={};function wn(){throw new Error("setTimeout has not been defined")}function kn(){throw new Error("clearTimeout has not been defined")}function En(e){if(yn===setTimeout)return setTimeout(e,0);if((yn===wn||!yn)&&setTimeout)return yn=setTimeout,setTimeout(e,0);try{return yn(e,0)}catch(t){try{return yn.call(null,e,0)}catch(t){return yn.call(this,e,0)}}}!function(){try{yn="function"==typeof setTimeout?setTimeout:wn}catch(e){yn=wn}try{bn="function"==typeof clearTimeout?clearTimeout:kn}catch(e){bn=kn}}();var Sn,Ln=[],On=!1,jn=-1;function Mn(){On&&Sn&&(On=!1,Sn.length?Ln=Sn.concat(Ln):jn=-1,Ln.length&&Tn())}function Tn(){if(!On){var e=En(Mn);On=!0;for(var t=Ln.length;t;){for(Sn=Ln,Ln=[];++jn<t;)Sn&&Sn[jn].run();jn=-1,t=Ln.length}Sn=null,On=!1,function(e){if(bn===clearTimeout)return clearTimeout(e);if((bn===kn||!bn)&&clearTimeout)return bn=clearTimeout,clearTimeout(e);try{return bn(e)}catch(t){try{return bn.call(null,e)}catch(t){return bn.call(this,e)}}}(e)}}function Fn(e,t){this.fun=e,this.array=t}function $n(){}_n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Ln.push(new Fn(e,t)),1!==Ln.length||On||En(Tn)},Fn.prototype.run=function(){this.fun.apply(null,this.array)},_n.title="browser",_n.browser=!0,_n.env={},_n.argv=[],_n.version="",_n.versions={},_n.on=$n,_n.addListener=$n,_n.once=$n,_n.off=$n,_n.removeListener=$n,_n.removeAllListeners=$n,_n.emit=$n,_n.prependListener=$n,_n.prependOnceListener=$n,_n.listeners=function(e){return[]},_n.binding=function(e){throw new Error("process.binding is not supported")},_n.cwd=function(){return"/"},_n.chdir=function(e){throw new Error("process.chdir is not supported")},_n.umask=function(){return 0},gn=void 0!==mn&&"process"==_t(mn);var xn,Pn,In,Hn,qn=a.setImmediate,Cn=a.clearImmediate,An=a.process,Nn=a.Dispatch,Rn=a.Function,Dn=a.MessageChannel,zn=a.String,Un=0,Gn={},Bn="onreadystatechange";u((function(){xn=a.location}));var Wn=function(e){if(S(Gn,e)){var t=Gn[e];delete Gn[e],t()}},Jn=function(e){return function(){Wn(e)}},Vn=function(e){Wn(e.data)},Yn=function(e){a.postMessage(zn(e),xn.protocol+"//"+xn.host)};qn&&Cn||(qn=function(e){pn(arguments.length,1);var t=y(e)?e:Rn(e),n=dn(arguments,1);return Gn[++Un]=function(){rn(t,void 0,n)},Pn(Un),Un},Cn=function(e){delete Gn[e]},gn?Pn=function(e){An.nextTick(Jn(e))}:Nn&&Nn.now?Pn=function(e){Nn.now(Jn(e))}:Dn&&!vn?(Hn=(In=new Dn).port2,In.port1.onmessage=Vn,Pn=cn(Hn.postMessage,Hn)):a.addEventListener&&y(a.postMessage)&&!a.importScripts&&xn&&"file:"!==xn.protocol&&!u(Yn)?(Pn=Yn,a.addEventListener("message",Vn,!1)):Pn=Bn in W("script")?function(e){fn.appendChild(W("script"))[Bn]=function(){fn.removeChild(this),Wn(e)}}:function(e){setTimeout(Jn(e),0)});var Qn=(nn={set:qn,clear:Cn}).clear;pt({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Qn},{clearImmediate:Qn});var Kn,Xn,Zn=nn.set;Xn="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var er,tr=a.Function,nr=/MSIE .\./.test(fe)||Xn&&((er=a.Bun.version.split(".")).length<3||0==er[0]&&(er[1]<3||3==er[1]&&0==er[2]));Kn=function(e,t){var n=t?2:1;return nr?function(r,i){var o=pn(arguments.length,1)>n,a=y(r)?r:tr(r),s=o?dn(arguments,n):[],c=o?function(){rn(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rr=a.setImmediate?Kn(Zn,!1):Zn;pt({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==rr},{setImmediate:rr});var ir=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),s=new F(r||[]);return i(a,"_invoke",{value:O(e,n,s)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="suspendedYield",h="executing",v="completed",g={};function m(){}function y(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w($([])));k&&k!==n&&r.call(k,a)&&(_=k);var E=b.prototype=m.prototype=Object.create(_);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(i,o,a,s){var c=f(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function O(e,t,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return x()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=f(e,t,n);if("normal"===c.type){if(r=n.done?v:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=f(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function $(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:x}}function x(){return{value:t,done:!0}}return y.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(L.prototype),u(L.prototype,s,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new L(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=$,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=ir}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=ir:Function("r","regeneratorRuntime = r")(ir)}const or="https://forkify-api.herokuapp.com/api/v2/recipes/",ar=10,sr="4b880f91-d8ff-4a14-af48-d75eefba7086",cr=2.5,ur=function(e){return new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))};async function lr(e,t){try{const n=await Promise.race([t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),ur(ar)]),r=await n.json();if(!n.ok)throw new Error(r.message);return r}catch(e){throw e}}const fr={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]};function dr(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,cookingTime:t.cooking_time,image:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,sourceUrl:t.source_url,...t.key&&{key:t.key}}}function pr(e=fr.search.page){fr.search.page=e;const t=(e-1)*fr.search.resultsPerPage,n=e*fr.search.resultsPerPage;return fr.search.results.slice(t,n)}function hr(){localStorage.setItem("bookmarks",JSON.stringify(fr.bookmarks))}function vr(e){fr.bookmarks.push(e),e.id===fr.recipe.id&&(fr.recipe.bookmarked=!0),hr()}!function(){const e=localStorage.getItem("bookmarks");e&&(fr.bookmarks=JSON.parse(e))}();var gr,mr,yr,br;gr=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class _r{_data;update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>{n.setAttribute(e.name,e.value)}))}))}render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this.clearContainer(),this._parentElement.insertAdjacentHTML("afterbegin",n)}clearContainer(){this._parentElement.innerHTML=""}renderSpinner(){const e=`<div class="spinner">\n  <svg>\n    <use href="${n(gr)}#icon-loader"></use>\n  </svg>\n</div>`;this.clearContainer(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(e=this._successMessage){const t=`<div class="recipe">\n    <div class="message">\n      <div>\n        <svg>\n          <use href="${n(gr)}#icon-smile"></use>\n        </svg>\n      </div>\n      <p>${e}</p>\n    </div>`;this.clearContainer(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(e=this._errorMessage){const t=`<div class="error">\n    <div>\n      <svg>\n        <use href="${n(gr)}#icon-alert-triangle"></use>\n      </svg>\n    </div>\n    <p>${e}</p>\n  </div>`;this.clearContainer(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(yr=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},br=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(yr(this.denominator)){var e=br(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}yr(this.numerator)&&(e=br(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},mr=Fraction;var wr=new class extends _r{_parentElement=document.querySelector(".recipe");_errorMessage="Sorry, we couldn't find your recipe, try another one!";_successMessage="";_generateMarkup(){return`<figure class="recipe__fig">\n    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this._data.title}</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(gr)}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(gr)}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button data-update-to="${this._data.servings-1}" type="button" class="btn--tiny btn--update-servings">\n          <svg>\n            <use href="${n(gr)}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button data-update-to="${this._data.servings+1}" type="button" class="btn--tiny btn--update-servings">\n          <svg>\n            <use href="${n(gr)}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n      <svg>\n        <use href="${n(gr)}#icon-user"></use>\n      </svg>\n    </div>\n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="${n(gr)}#${this._data.bookmarked?"icon-bookmark-fill":"icon-bookmark"}"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n\n      ${this._data.ingredients.map((e=>this._generateMarkupIngredient(e))).join("")}\n    </ul>\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this._data.sourceUrl}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${n(gr)}#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>`}_generateMarkupIngredient(e){return`<li class="recipe__ingredient">\n    <svg class="recipe__icon">\n      <use href="${n(gr)}#icon-check"></use>\n    </svg>\n    <div class="recipe__quantity">${e.quantity?new mr(e.quantity).toString():"q.b."}</div>\n    <div class="recipe__description">\n      <span class="recipe__unit">${e.unit}</span>\n      ${e.description}\n    </div>\n  </li>`}addHandlerRender(e){["hashchange","load"].forEach((t=>{window.addEventListener(t,e)}))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r<=0||e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}};var kr=new class extends _r{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}_clearInput(){this._parentElement.querySelector(".search__field").value=""}};var Er=new class extends _r{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`<li class="preview">\n    <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n      <figure class="preview__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" />\n      </figure>\n      <div class="preview__data">\n        <h4 class="preview__title">${this._data.title}</h4>\n        <p class="preview__publisher">${this._data.publisher}</p>\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n      <svg>\n        <use href="${n(gr)}#icon-user"></use>\n      </svg>\n    </div>\n      </div>\n    </a>\n  </li>`}};var Sr=new class extends _r{_parentElement=document.querySelector(".results");_errorMessage="Sorry, we couldn't find any recipe for your query, try another one!";_successMessage="";_generateMarkup(){return this._data.map((e=>Er.render(e,!1))).join("")}};var Lr=new class extends _r{_parentElement=document.querySelector(".pagination");addHandlerCLick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=Number(n.dataset.goto);e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n      <span>Page ${e+1}</span>\n      <svg class="search__icon">\n        <use href="${n(gr)}#icon-arrow-right"></use>\n      </svg>\n    </button>`:e===t?`\n        <button data-goto="${e-1}" type="button" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(gr)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n          </button>\n        `:e>1&&e<t?`\n      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n        <span>Page ${e+1}</span>\n        <svg class="search__icon">\n          <use href="${n(gr)}#icon-arrow-right"></use>\n        </svg>\n      </button>\n      <button data-goto="${e-1}" type="button" class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n            <use href="${n(gr)}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${e-1}</span>\n        </button>\n      `:""}};var Or=new class extends _r{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Er.render(e,!1))).join("")}};var jr=new class extends _r{_parentElement=document.querySelector(".upload");_successMessage="Recipe was succesfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_defaultHTML=this._parentElement.innerHTML;constructor(){super(),this._addHandlerShowWindow()}render(){this._parentElement.innerHTML=this._defaultHTML}hideModal(){this._overlay.classList.add("hidden"),this._window.classList.add("hidden")}_addHandlerShowWindow(){[this._btnOpen,this._btnClose,this._overlay].forEach((e=>{e.addEventListener("click",(()=>{this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}))}))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};async function Mr(){try{Sr.renderSpinner();const e=kr.getQuery();if(!e)return;await async function(e){try{const t=await lr(`${or}?search=${e}&key=${sr}`);fr.search.query=e,fr.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,image:e.image_url,publisher:e.publisher,...e.key&&{key:e.key}}))),fr.search.page=1}catch(e){throw e}}(e),Sr.render(pr()),Lr.render(fr.search)}catch(e){console.error(e)}}async function Tr(){try{const e=window.location.hash;if(!e)return;Sr.update(pr()),Or.update(fr.bookmarks),wr.renderSpinner(),await async function(e){try{const t=await lr(`${or}${e}?key=${sr}`);fr.recipe=dr(t),fr.bookmarks.some((t=>t.id===e))?fr.recipe.bookmarked=!0:fr.recipe.bookmarked=!1}catch(e){throw e}}(e.slice(1));const t=await fr.recipe;wr.render(t)}catch(e){wr.renderError()}}function Fr(e){Sr.render(pr(e)),Lr.render(fr.search)}function $r(e){!function(e){fr.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*(e/fr.recipe.servings)})),fr.recipe.servings=e}(e),wr.update(fr.recipe)}function xr(){var e;fr.recipe.bookmarked?(e=fr.recipe.id,fr.bookmarks.splice(fr.bookmarks.findIndex((t=>t.id===e)),1),e===fr.recipe.id&&(fr.recipe.bookmarked=!1),hr()):vr(fr.recipe),wr.update(fr.recipe),Or.render(fr.bookmarks)}function Pr(){Or.render(fr.bookmarks)}async function Ir(e){try{jr.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim));if(3!==t.length)throw new Error("Wrong ingredient format! Please reformat!");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await lr(`${or}?key=${sr}`,n);fr.recipe=dr(r),vr(fr.recipe)}catch(e){throw e}}(e),wr.render(fr.recipe),Or.render(fr.bookmarks),window.history.pushState(null,"",`#${fr.recipe.id}`),jr.renderMessage(),setTimeout((()=>{jr.hideModal(),setTimeout((()=>{jr.render()}),1e3)}),1e3*cr)}catch(e){jr.renderError(e.message)}}Or.addHandlerRender(Pr),wr.addHandlerRender(Tr),wr.addHandlerUpdateServings($r),wr.addHandlerAddBookmark(xr),kr.addHandlerSearch(Mr),Lr.addHandlerCLick(Fr),jr.addHandlerUpload(Ir);
//# sourceMappingURL=index.bd1ac8fe.js.map
