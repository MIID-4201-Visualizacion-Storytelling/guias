(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{296:function(t,n,e){"use strict";var r={value:()=>{}};function o(){for(var t,i=0,n=arguments.length,e={};i<n;++i){if(!(t=arguments[i]+"")||t in e||/[\s.]/.test(t))throw new Error("illegal type: "+t);e[t]=[]}return new l(e)}function l(t){this._=t}function c(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",i=t.indexOf(".");if(i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function h(t,n){for(var e,i=0,r=t.length;i<r;++i)if((e=t[i]).name===n)return e.value}function f(t,n,e){for(var i=0,o=t.length;i<o;++i)if(t[i].name===n){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=e&&t.push({name:n,value:e}),t}l.prototype=o.prototype={constructor:l,on:function(t,n){var e,r=this._,o=c(t+"",r),i=-1,l=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++i<l;)if(e=(t=o[i]).type)r[e]=f(r[e],t.name,n);else if(null==n)for(e in r)r[e]=f(r[e],t.name,null);return this}for(;++i<l;)if((e=(t=o[i]).type)&&(e=h(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new l(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,o=new Array(e),i=0;i<e;++i)o[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(i=0,e=(r=this._[t]).length;i<e;++i)r[i].value.apply(n,o)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var d=o;function v(){}var y=function(t){return null==t?v:function(){return this.querySelector(t)}};function _(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function w(){return[]}var m=function(t){return null==t?w:function(){return this.querySelectorAll(t)}};var x=function(t){return function(){return this.matches(t)}};function k(t){return function(n){return n.matches(t)}}var A=Array.prototype.find;function M(){return this.firstElementChild}var N=Array.prototype.filter;function E(){return Array.from(this.children)}var S=function(t){return new Array(t.length)};function C(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}C.prototype={constructor:C,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var X=function(t){return function(){return t}};function P(t,n,e,r,o,data){for(var l,i=0,c=n.length,h=data.length;i<h;++i)(l=n[i])?(l.__data__=data[i],r[i]=l):e[i]=new C(t,data[i]);for(;i<c;++i)(l=n[i])&&(o[i]=l)}function T(t,n,e,r,o,data,l){var i,c,h,f=new Map,d=n.length,v=data.length,y=new Array(d);for(i=0;i<d;++i)(c=n[i])&&(y[i]=h=l.call(c,c.__data__,i,n)+"",f.has(h)?o[i]=c:f.set(h,c));for(i=0;i<v;++i)h=l.call(t,data[i],i,data)+"",(c=f.get(h))?(r[i]=c,c.__data__=data[i],f.delete(h)):e[i]=new C(t,data[i]);for(i=0;i<d;++i)(c=n[i])&&f.get(y[i])===c&&(o[i]=c)}function O(t){return t.__data__}function R(data){return"object"==typeof data&&"length"in data?data:Array.from(data)}function I(a,b){return a<b?-1:a>b?1:a>=b?0:NaN}var Y="http://www.w3.org/1999/xhtml",j={svg:"http://www.w3.org/2000/svg",xhtml:Y,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},L=function(t){var n=t+="",i=n.indexOf(":");return i>=0&&"xmlns"!==(n=t.slice(0,i))&&(t=t.slice(i+1)),j.hasOwnProperty(n)?{space:j[n],local:t}:t};function D(t){return function(){this.removeAttribute(t)}}function H(t){return function(){this.removeAttributeNS(t.space,t.local)}}function B(t,n){return function(){this.setAttribute(t,n)}}function $(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function V(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function z(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var U=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function F(t){return function(){this.style.removeProperty(t)}}function J(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Q(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function K(t,n){return t.style.getPropertyValue(n)||U(t).getComputedStyle(t,null).getPropertyValue(n)}function W(t){return function(){delete this[t]}}function G(t,n){return function(){this[t]=n}}function Z(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function tt(t){return t.trim().split(/^|\s+/)}function nt(t){return t.classList||new et(t)}function et(t){this._node=t,this._names=tt(t.getAttribute("class")||"")}function it(t,n){for(var e=nt(t),i=-1,r=n.length;++i<r;)e.add(n[i])}function ot(t,n){for(var e=nt(t),i=-1,r=n.length;++i<r;)e.remove(n[i])}function ut(t){return function(){it(this,t)}}function at(t){return function(){ot(this,t)}}function st(t,n){return function(){(n.apply(this,arguments)?it:ot)(this,t)}}et.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var i=this._names.indexOf(t);i>=0&&(this._names.splice(i,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function lt(){this.textContent=""}function ct(t){return function(){this.textContent=t}}function ht(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function ft(){this.innerHTML=""}function pt(t){return function(){this.innerHTML=t}}function vt(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function yt(){this.nextSibling&&this.parentNode.appendChild(this)}function _t(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function gt(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===Y&&n.documentElement.namespaceURI===Y?n.createElement(t):n.createElementNS(e,t)}}function wt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var mt=function(t){var n=L(t);return(n.local?wt:gt)(n)};function bt(){return null}function xt(){var t=this.parentNode;t&&t.removeChild(this)}function kt(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function At(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Mt(t){return t.trim().split(/^|\s+/).map((function(t){var n="",i=t.indexOf(".");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{type:t,name:n}}))}function Nt(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function Et(t,n,e){return function(){var r,o=this.__on,l=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(o)for(var c=0,h=o.length;c<h;++c)if((r=o[c]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=l,r.options=e),void(r.value=n);this.addEventListener(t.type,l,e),r={type:t.type,name:t.name,value:n,listener:l,options:e},o?o.push(r):this.__on=[r]}}function St(t,n,e){var r=U(t),o=r.CustomEvent;"function"==typeof o?o=new o(n,e):(o=r.document.createEvent("Event"),e?(o.initEvent(n,e.bubbles,e.cancelable),o.detail=e.detail):o.initEvent(n,!1,!1)),t.dispatchEvent(o)}function Ct(t,n){return function(){return St(this,t,n)}}function qt(t,n){return function(){return St(this,t,n.apply(this,arguments))}}var Xt=[null];function Pt(t,n){this._groups=t,this._parents=n}function Tt(){return new Pt([[document.documentElement]],Xt)}Pt.prototype=Tt.prototype={constructor:Pt,select:function(select){"function"!=typeof select&&(select=y(select));for(var t=this._groups,n=t.length,e=new Array(n),r=0;r<n;++r)for(var o,l,c=t[r],h=c.length,f=e[r]=new Array(h),i=0;i<h;++i)(o=c[i])&&(l=select.call(o,o.__data__,i,c))&&("__data__"in o&&(l.__data__=o.__data__),f[i]=l);return new Pt(e,this._parents)},selectAll:function(select){select="function"==typeof select?function(select){return function(){return _(select.apply(this,arguments))}}(select):m(select);for(var t=this._groups,n=t.length,e=[],r=[],o=0;o<n;++o)for(var l,c=t[o],h=c.length,i=0;i<h;++i)(l=c[i])&&(e.push(select.call(l,l.__data__,i,c)),r.push(l));return new Pt(e,r)},selectChild:function(t){return this.select(null==t?M:function(t){return function(){return A.call(this.children,t)}}("function"==typeof t?t:k(t)))},selectChildren:function(t){return this.selectAll(null==t?E:function(t){return function(){return N.call(this.children,t)}}("function"==typeof t?t:k(t)))},filter:function(t){"function"!=typeof t&&(t=x(t));for(var n=this._groups,e=n.length,r=new Array(e),o=0;o<e;++o)for(var l,c=n[o],h=c.length,f=r[o]=[],i=0;i<h;++i)(l=c[i])&&t.call(l,l.__data__,i,c)&&f.push(l);return new Pt(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,O);var e=n?T:P,r=this._parents,o=this._groups;"function"!=typeof t&&(t=X(t));for(var l=o.length,c=new Array(l),h=new Array(l),f=new Array(l),d=0;d<l;++d){var v=r[d],y=o[d],_=y.length,data=R(t.call(v,v&&v.__data__,d,r)),w=data.length,m=h[d]=new Array(w),x=c[d]=new Array(w),k=f[d]=new Array(_);e(v,y,m,x,k,data,n);for(var A,M,N=0,E=0;N<w;++N)if(A=m[N]){for(N>=E&&(E=N+1);!(M=x[E])&&++E<w;);A._next=M||null}}return(c=new Pt(c,r))._enter=h,c._exit=f,c},enter:function(){return new Pt(this._enter||this._groups.map(S),this._parents)},exit:function(){return new Pt(this._exit||this._groups.map(S),this._parents)},join:function(t,n,e){var r=this.enter(),o=this,l=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(o=n(o))&&(o=o.selection()),null==e?l.remove():e(l),r&&o?r.merge(o).order():o},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,o=e.length,l=r.length,c=Math.min(o,l),h=new Array(o),f=0;f<c;++f)for(var d,v=e[f],y=r[f],_=v.length,w=h[f]=new Array(_),i=0;i<_;++i)(d=v[i]||y[i])&&(w[i]=d);for(;f<o;++f)h[f]=e[f];return new Pt(h,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,o=t[n],i=o.length-1,l=o[i];--i>=0;)(r=o[i])&&(l&&4^r.compareDocumentPosition(l)&&l.parentNode.insertBefore(r,l),l=r);return this},sort:function(t){function n(a,b){return a&&b?t(a.__data__,b.__data__):!a-!b}t||(t=I);for(var e=this._groups,r=e.length,o=new Array(r),l=0;l<r;++l){for(var c,h=e[l],f=h.length,d=o[l]=new Array(f),i=0;i<f;++i)(c=h[i])&&(d[i]=c);d.sort(n)}return new Pt(o,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var l=r[i];if(l)return l}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var o,l=n[e],i=0,c=l.length;i<c;++i)(o=l[i])&&t.call(o,o.__data__,i,l);return this},attr:function(t,n){var e=L(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?H:D:"function"==typeof n?e.local?z:V:e.local?$:B)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?F:"function"==typeof n?Q:J)(t,n,null==e?"":e)):K(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?W:"function"==typeof n?Z:G)(t,n)):this.node()[t]},classed:function(t,n){var e=tt(t+"");if(arguments.length<2){for(var r=nt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?st:n?ut:at)(e,n))},text:function(t){return arguments.length?this.each(null==t?lt:("function"==typeof t?ht:ct)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?ft:("function"==typeof t?vt:pt)(t)):this.node().innerHTML},raise:function(){return this.each(yt)},lower:function(){return this.each(_t)},append:function(t){var n="function"==typeof t?t:mt(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:mt(t),select=null==n?bt:"function"==typeof n?n:y(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),select.apply(this,arguments)||null)}))},remove:function(){return this.each(xt)},clone:function(t){return this.select(t?At:kt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var i,r,o=Mt(t+""),l=o.length;if(!(arguments.length<2)){for(c=n?Et:Nt,i=0;i<l;++i)this.each(c(o[i],n,e));return this}var c=this.node().__on;if(c)for(var h,f=0,d=c.length;f<d;++f)for(i=0,h=c[f];i<l;++i)if((r=o[i]).type===h.type&&r.name===h.name)return h.value},dispatch:function(t,n){return this.each(("function"==typeof n?qt:Ct)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,o=t[n],i=0,l=o.length;i<l;++i)(r=o[i])&&(yield r)}};var Ot=Tt;var Rt=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t};function It(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Yt(){}var jt=.7,Lt=1/jt,Dt="\\s*([+-]?\\d+)\\s*",Ht="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Bt="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",$t=/^#([0-9a-f]{3,8})$/,Vt=new RegExp("^rgb\\("+[Dt,Dt,Dt]+"\\)$"),zt=new RegExp("^rgb\\("+[Bt,Bt,Bt]+"\\)$"),Ut=new RegExp("^rgba\\("+[Dt,Dt,Dt,Ht]+"\\)$"),Ft=new RegExp("^rgba\\("+[Bt,Bt,Bt,Ht]+"\\)$"),Jt=new RegExp("^hsl\\("+[Ht,Bt,Bt]+"\\)$"),Qt=new RegExp("^hsla\\("+[Ht,Bt,Bt,Ht]+"\\)$"),Kt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Wt(){return this.rgb().formatHex()}function Gt(){return this.rgb().formatRgb()}function Zt(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=$t.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?tn(n):3===e?new on(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?nn(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?nn(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=Vt.exec(t))?new on(n[1],n[2],n[3],1):(n=zt.exec(t))?new on(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Ut.exec(t))?nn(n[1],n[2],n[3],n[4]):(n=Ft.exec(t))?nn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Jt.exec(t))?ln(n[1],n[2]/100,n[3]/100,1):(n=Qt.exec(t))?ln(n[1],n[2]/100,n[3]/100,n[4]):Kt.hasOwnProperty(t)?tn(Kt[t]):"transparent"===t?new on(NaN,NaN,NaN,0):null}function tn(t){return new on(t>>16&255,t>>8&255,255&t,1)}function nn(t,g,b,a){return a<=0&&(t=g=b=NaN),new on(t,g,b,a)}function en(t){return t instanceof Yt||(t=Zt(t)),t?new on((t=t.rgb()).r,t.g,t.b,t.opacity):new on}function rn(t,g,b,n){return 1===arguments.length?en(t):new on(t,g,b,null==n?1:n)}function on(t,g,b,n){this.r=+t,this.g=+g,this.b=+b,this.opacity=+n}function un(){return"#"+sn(this.r)+sn(this.g)+sn(this.b)}function an(){var a=this.opacity;return(1===(a=isNaN(a)?1:Math.max(0,Math.min(1,a)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===a?")":", "+a+")")}function sn(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function ln(t,s,n,a){return a<=0?t=s=n=NaN:n<=0||n>=1?t=s=NaN:s<=0&&(t=NaN),new hn(t,s,n,a)}function cn(t){if(t instanceof hn)return new hn(t.h,t.s,t.l,t.opacity);if(t instanceof Yt||(t=Zt(t)),!t)return new hn;if(t instanceof hn)return t;var n=(t=t.rgb()).r/255,g=t.g/255,b=t.b/255,e=Math.min(n,g,b),r=Math.max(n,g,b),o=NaN,s=r-e,l=(r+e)/2;return s?(o=n===r?(g-b)/s+6*(g<b):g===r?(b-n)/s+2:(n-g)/s+4,s/=l<.5?r+e:2-r-e,o*=60):s=l>0&&l<1?0:o,new hn(o,s,l,t.opacity)}function hn(t,s,n,e){this.h=+t,this.s=+s,this.l=+n,this.opacity=+e}function fn(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function pn(t,n,e,r,o){var l=t*t,c=l*t;return((1-3*t+3*l-c)*n+(4-6*l+3*c)*e+(1+3*t+3*l-3*c)*r+c*o)/6}Rt(Yt,Zt,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:Wt,formatHex:Wt,formatHsl:function(){return cn(this).formatHsl()},formatRgb:Gt,toString:Gt}),Rt(on,rn,It(Yt,{brighter:function(t){return t=null==t?Lt:Math.pow(Lt,t),new on(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?jt:Math.pow(jt,t),new on(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:un,formatHex:un,formatRgb:an,toString:an})),Rt(hn,(function(t,s,n,e){return 1===arguments.length?cn(t):new hn(t,s,n,null==e?1:e)}),It(Yt,{brighter:function(t){return t=null==t?Lt:Math.pow(Lt,t),new hn(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?jt:Math.pow(jt,t),new hn(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),s=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,e=n+(n<.5?n:1-n)*s,r=2*n-e;return new on(fn(t>=240?t-240:t+120,r,e),fn(t,r,e),fn(t<120?t+240:t-120,r,e),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var a=this.opacity;return(1===(a=isNaN(a)?1:Math.max(0,Math.min(1,a)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===a?")":", "+a+")")}}));var dn=t=>()=>t;function vn(a,t){return function(n){return a+n*t}}function yn(t){return 1==(t=+t)?_n:function(a,b){return b-a?function(a,b,t){return a=Math.pow(a,t),b=Math.pow(b,t)-a,t=1/t,function(n){return Math.pow(a+n*b,t)}}(a,b,t):dn(isNaN(a)?b:a)}}function _n(a,b){var t=b-a;return t?vn(a,t):dn(isNaN(a)?b:a)}var gn=function t(n){var e=yn(n);function r(t,n){var r=e((t=rn(t)).r,(n=rn(n)).r),g=e(t.g,n.g),b=e(t.b,n.b),o=_n(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=g(n),t.b=b(n),t.opacity=o(n),t+""}}return r.gamma=t,r}(1);function wn(t){return function(n){var i,e,r=n.length,o=new Array(r),g=new Array(r),b=new Array(r);for(i=0;i<r;++i)e=rn(n[i]),o[i]=e.r||0,g[i]=e.g||0,b[i]=e.b||0;return o=t(o),g=t(g),b=t(b),e.opacity=1,function(t){return e.r=o(t),e.g=g(t),e.b=b(t),e+""}}}wn((function(t){var n=t.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),r=t[i],o=t[i+1],l=i>0?t[i-1]:2*r-o,c=i<n-1?t[i+2]:2*o-r;return pn((e-i/n)*n,l,r,o,c)}})),wn((function(t){var n=t.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*n),r=t[(i+n-1)%n],o=t[i%n],l=t[(i+1)%n],c=t[(i+2)%n];return pn((e-i/n)*n,r,o,l,c)}}));var mn=function(a,b){return a=+a,b=+b,function(t){return a*(1-t)+b*t}},bn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,xn=new RegExp(bn.source,"g");var kn,An,Mn=function(a,b){var t,n,e,r=bn.lastIndex=xn.lastIndex=0,i=-1,s=[],q=[];for(a+="",b+="";(t=bn.exec(a))&&(n=xn.exec(b));)(e=n.index)>r&&(e=b.slice(r,e),s[i]?s[i]+=e:s[++i]=e),(t=t[0])===(n=n[0])?s[i]?s[i]+=n:s[++i]=n:(s[++i]=null,q.push({i:i,x:mn(t,n)})),r=xn.lastIndex;return r<b.length&&(e=b.slice(r),s[i]?s[i]+=e:s[++i]=e),s.length<2?q[0]?function(b){return function(t){return b(t)+""}}(q[0].x):function(b){return function(){return b}}(b):(b=q.length,function(t){for(var n,i=0;i<b;++i)s[(n=q[i]).i]=n.x(t);return s.join("")})},Nn=0,En=0,Sn=0,Cn=0,qn=0,Xn=0,Pn="object"==typeof performance&&performance.now?performance:Date,Tn="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function On(){return qn||(Tn(Rn),qn=Pn.now()+Xn)}function Rn(){qn=0}function In(){this._call=this._time=this._next=null}function Yn(t,n,time){var e=new In;return e.restart(t,n,time),e}function jn(){qn=(Cn=Pn.now())+Xn,Nn=En=0;try{!function(){On(),++Nn;for(var t,n=kn;n;)(t=qn-n._time)>=0&&n._call.call(void 0,t),n=n._next;--Nn}()}finally{Nn=0,function(){var t,n,e=kn,time=1/0;for(;e;)e._call?(time>e._time&&(time=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:kn=n);An=t,Dn(time)}(),qn=0}}function Ln(){var t=Pn.now(),n=t-Cn;n>1e3&&(Xn-=n,Cn=t)}function Dn(time){Nn||(En&&(En=clearTimeout(En)),time-qn>24?(time<1/0&&(En=setTimeout(jn,time-Pn.now()-Xn)),Sn&&(Sn=clearInterval(Sn))):(Sn||(Cn=Pn.now(),Sn=setInterval(Ln,1e3)),Nn=1,Tn(jn)))}In.prototype=Yn.prototype={constructor:In,restart:function(t,n,time){if("function"!=typeof t)throw new TypeError("callback is not a function");time=(null==time?On():+time)+(null==n?0:+n),this._next||An===this||(An?An._next=this:kn=this,An=this),this._call=t,this._time=time,Dn()},stop:function(){this._call&&(this._call=null,this._time=1/0,Dn())}};var Hn=function(t,n,time){var e=new In;return n=null==n?0:+n,e.restart((r=>{e.stop(),t(r+n)}),n,time),e},Bn=d("start","end","cancel","interrupt"),$n=[],Vn=function(t,n,e,r,o,l){var c=t.__transition;if(c){if(e in c)return}else t.__transition={};!function(t,n,e){var r,o=t.__transition;function l(t){e.state=1,e.timer.restart(c,e.delay,e.time),e.delay<=t&&c(t-e.delay)}function c(l){var i,d,v,y;if(1!==e.state)return f();for(i in o)if((y=o[i]).name===e.name){if(3===y.state)return Hn(c);4===y.state?(y.state=6,y.timer.stop(),y.on.call("interrupt",t,t.__data__,y.index,y.group),delete o[i]):+i<n&&(y.state=6,y.timer.stop(),y.on.call("cancel",t,t.__data__,y.index,y.group),delete o[i])}if(Hn((function(){3===e.state&&(e.state=4,e.timer.restart(h,e.delay,e.time),h(l))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=3,r=new Array(v=e.tween.length),i=0,d=-1;i<v;++i)(y=e.tween[i].value.call(t,t.__data__,e.index,e.group))&&(r[++d]=y);r.length=d+1}}function h(n){for(var o=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(f),e.state=5,1),i=-1,l=r.length;++i<l;)r[i].call(t,o);5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),f())}function f(){for(var i in e.state=6,e.timer.stop(),delete o[n],o)return;delete t.__transition}o[n]=e,e.timer=Yn(l,0,e.time)}(t,e,{name:n,index:r,group:o,on:Bn,tween:$n,time:l.time,delay:l.delay,duration:l.duration,ease:l.ease,timer:null,state:0})};function zn(t,n){var e=Fn(t,n);if(e.state>0)throw new Error("too late; already scheduled");return e}function Un(t,n){var e=Fn(t,n);if(e.state>3)throw new Error("too late; already running");return e}function Fn(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}var Jn,Qn=function(t,n){var e,r,i,o=t.__transition,l=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):l=!1;l&&delete t.__transition}},Kn=180/Math.PI,Wn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Gn=function(a,b,t,n,e,r){var o,l,c;return(o=Math.sqrt(a*a+b*b))&&(a/=o,b/=o),(c=a*t+b*n)&&(t-=a*c,n-=b*c),(l=Math.sqrt(t*t+n*n))&&(t/=l,n/=l,c/=l),a*n<b*t&&(a=-a,b=-b,c=-c,o=-o),{translateX:e,translateY:r,rotate:Math.atan2(b,a)*Kn,skewX:Math.atan(c)*Kn,scaleX:o,scaleY:l}};function Zn(t,n,e,r){function o(s){return s.length?s.pop()+" ":""}return function(a,b){var s=[],q=[];return a=t(a),b=t(b),function(t,r,o,l,s,q){if(t!==o||r!==l){var i=s.push("translate(",null,n,null,e);q.push({i:i-4,x:mn(t,o)},{i:i-2,x:mn(r,l)})}else(o||l)&&s.push("translate("+o+n+l+e)}(a.translateX,a.translateY,b.translateX,b.translateY,s,q),function(a,b,s,q){a!==b?(a-b>180?b+=360:b-a>180&&(a+=360),q.push({i:s.push(o(s)+"rotate(",null,r)-2,x:mn(a,b)})):b&&s.push(o(s)+"rotate("+b+r)}(a.rotate,b.rotate,s,q),function(a,b,s,q){a!==b?q.push({i:s.push(o(s)+"skewX(",null,r)-2,x:mn(a,b)}):b&&s.push(o(s)+"skewX("+b+r)}(a.skewX,b.skewX,s,q),function(t,n,e,r,s,q){if(t!==e||n!==r){var i=s.push(o(s)+"scale(",null,",",null,")");q.push({i:i-4,x:mn(t,e)},{i:i-2,x:mn(n,r)})}else 1===e&&1===r||s.push(o(s)+"scale("+e+","+r+")")}(a.scaleX,a.scaleY,b.scaleX,b.scaleY,s,q),a=b=null,function(t){for(var n,i=-1,e=q.length;++i<e;)s[(n=q[i]).i]=n.x(t);return s.join("")}}}var te=Zn((function(t){const n=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Wn:Gn(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),ne=Zn((function(t){return null==t?Wn:(Jn||(Jn=document.createElementNS("http://www.w3.org/2000/svg","g")),Jn.setAttribute("transform",t),(t=Jn.transform.baseVal.consolidate())?(t=t.matrix,Gn(t.a,t.b,t.c,t.d,t.e,t.f)):Wn)}),", ",")",")");function ee(t,n){var e,r;return function(){var o=Un(this,t),l=o.tween;if(l!==e)for(var i=0,c=(r=e=l).length;i<c;++i)if(r[i].name===n){(r=r.slice()).splice(i,1);break}o.tween=r}}function re(t,n,e){var r,o;if("function"!=typeof e)throw new Error;return function(){var l=Un(this,t),c=l.tween;if(c!==r){o=(r=c).slice();for(var h={name:n,value:e},i=0,f=o.length;i<f;++i)if(o[i].name===n){o[i]=h;break}i===f&&o.push(h)}l.tween=o}}function ie(t,n,e){var r=t._id;return t.each((function(){var t=Un(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return Fn(t,r).value[n]}}var oe=function(a,b){var t;return("number"==typeof b?mn:b instanceof Zt?gn:(t=Zt(b))?(b=t,gn):Mn)(a,b)};function ue(t){return function(){this.removeAttribute(t)}}function ae(t){return function(){this.removeAttributeNS(t.space,t.local)}}function se(t,n,e){var r,o,l=e+"";return function(){var c=this.getAttribute(t);return c===l?null:c===r?o:o=n(r=c,e)}}function le(t,n,e){var r,o,l=e+"";return function(){var c=this.getAttributeNS(t.space,t.local);return c===l?null:c===r?o:o=n(r=c,e)}}function ce(t,n,e){var r,o,l;return function(){var c,h,f=e(this);if(null!=f)return(c=this.getAttribute(t))===(h=f+"")?null:c===r&&h===o?l:(o=h,l=n(r=c,f));this.removeAttribute(t)}}function he(t,n,e){var r,o,l;return function(){var c,h,f=e(this);if(null!=f)return(c=this.getAttributeNS(t.space,t.local))===(h=f+"")?null:c===r&&h===o?l:(o=h,l=n(r=c,f));this.removeAttributeNS(t.space,t.local)}}function fe(t,i){return function(n){this.setAttribute(t,i.call(this,n))}}function pe(t,i){return function(n){this.setAttributeNS(t.space,t.local,i.call(this,n))}}function de(t,n){var e,r;function o(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&pe(t,i)),e}return o._value=n,o}function ve(t,n){var e,r;function o(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&fe(t,i)),e}return o._value=n,o}function ye(t,n){return function(){zn(this,t).delay=+n.apply(this,arguments)}}function _e(t,n){return n=+n,function(){zn(this,t).delay=n}}function ge(t,n){return function(){Un(this,t).duration=+n.apply(this,arguments)}}function we(t,n){return n=+n,function(){Un(this,t).duration=n}}function me(t,n){if("function"!=typeof n)throw new Error;return function(){Un(this,t).ease=n}}function be(t,n,e){var r,o,l=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var i=t.indexOf(".");return i>=0&&(t=t.slice(0,i)),!t||"start"===t}))}(n)?zn:Un;return function(){var c=l(this,t),h=c.on;h!==r&&(o=(r=h).copy()).on(n,e),c.on=o}}var xe=Ot.prototype.constructor;function ke(t){return function(){this.style.removeProperty(t)}}function Ae(t,i,n){return function(e){this.style.setProperty(t,i.call(this,e),n)}}function Me(t,n,e){var r,o;function l(){var i=n.apply(this,arguments);return i!==o&&(r=(o=i)&&Ae(t,i,e)),r}return l._value=n,l}function Ne(i){return function(t){this.textContent=i.call(this,t)}}function Ee(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&Ne(i)),n}return r._value=t,r}var Se=0;function Ce(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function qe(){return++Se}var Xe=Ot.prototype;Ce.prototype=function(t){return Ot().transition(t)}.prototype={constructor:Ce,select:function(select){var t=this._name,n=this._id;"function"!=typeof select&&(select=y(select));for(var e=this._groups,r=e.length,o=new Array(r),l=0;l<r;++l)for(var c,h,f=e[l],d=f.length,v=o[l]=new Array(d),i=0;i<d;++i)(c=f[i])&&(h=select.call(c,c.__data__,i,f))&&("__data__"in c&&(h.__data__=c.__data__),v[i]=h,Vn(v[i],t,n,i,v,Fn(c,n)));return new Ce(o,this._parents,t,n)},selectAll:function(select){var t=this._name,n=this._id;"function"!=typeof select&&(select=m(select));for(var e=this._groups,r=e.length,o=[],l=[],c=0;c<r;++c)for(var h,f=e[c],d=f.length,i=0;i<d;++i)if(h=f[i]){for(var v,y=select.call(h,h.__data__,i,f),_=Fn(h,n),w=0,x=y.length;w<x;++w)(v=y[w])&&Vn(v,t,n,w,y,_);o.push(y),l.push(h)}return new Ce(o,l,t,n)},selectChild:Xe.selectChild,selectChildren:Xe.selectChildren,filter:function(t){"function"!=typeof t&&(t=x(t));for(var n=this._groups,e=n.length,r=new Array(e),o=0;o<e;++o)for(var l,c=n[o],h=c.length,f=r[o]=[],i=0;i<h;++i)(l=c[i])&&t.call(l,l.__data__,i,c)&&f.push(l);return new Ce(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,o=e.length,l=Math.min(r,o),c=new Array(r),h=0;h<l;++h)for(var f,d=n[h],v=e[h],y=d.length,_=c[h]=new Array(y),i=0;i<y;++i)(f=d[i]||v[i])&&(_[i]=f);for(;h<r;++h)c[h]=n[h];return new Ce(c,this._parents,this._name,this._id)},selection:function(){return new xe(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=qe(),r=this._groups,o=r.length,l=0;l<o;++l)for(var c,h=r[l],f=h.length,i=0;i<f;++i)if(c=h[i]){var d=Fn(c,n);Vn(c,t,e,i,h,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Ce(r,this._parents,t,e)},call:Xe.call,nodes:Xe.nodes,node:Xe.node,size:Xe.size,empty:Xe.empty,each:Xe.each,on:function(t,n){var e=this._id;return arguments.length<2?Fn(this.node(),e).on.on(t):this.each(be(e,t,n))},attr:function(t,n){var e=L(t),i="transform"===e?ne:oe;return this.attrTween(t,"function"==typeof n?(e.local?he:ce)(e,i,ie(this,"attr."+t,n)):null==n?(e.local?ae:ue)(e):(e.local?le:se)(e,i,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=L(t);return this.tween(e,(r.local?de:ve)(r,n))},style:function(t,n,e){var i="transform"==(t+="")?te:oe;return null==n?this.styleTween(t,function(t,n){var e,r,o;return function(){var l=K(this,t),c=(this.style.removeProperty(t),K(this,t));return l===c?null:l===e&&c===r?o:o=n(e=l,r=c)}}(t,i)).on("end.style."+t,ke(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,o,l;return function(){var c=K(this,t),h=e(this),f=h+"";return null==h&&(this.style.removeProperty(t),f=h=K(this,t)),c===f?null:c===r&&f===o?l:(o=f,l=n(r=c,h))}}(t,i,ie(this,"style."+t,n))).each(function(t,n){var e,r,o,l,c="style."+n,h="end."+c;return function(){var f=Un(this,t),d=f.on,v=null==f.value[c]?l||(l=ke(n)):void 0;d===e&&o===v||(r=(e=d).copy()).on(h,o=v),f.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,o,l=e+"";return function(){var c=K(this,t);return c===l?null:c===r?o:o=n(r=c,e)}}(t,i,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,Me(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(ie(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,Ee(t))},remove:function(){return this.on("end.remove",(t=this._id,function(){var n=this.parentNode;for(var i in this.__transition)if(+i!==t)return;n&&n.removeChild(this)}));var t},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,o=Fn(this.node(),e).tween,i=0,l=o.length;i<l;++i)if((r=o[i]).name===t)return r.value;return null}return this.each((null==n?ee:re)(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?ye:_e)(n,t)):Fn(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?ge:we)(n,t)):Fn(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(me(n,t)):Fn(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,n){return function(){var e=n.apply(this,arguments);if("function"!=typeof e)throw new Error;Un(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,o=e.size();return new Promise((function(l,c){var h={value:c},f={value:function(){0==--o&&l()}};e.each((function(){var e=Un(this,r),o=e.on;o!==t&&((n=(t=o).copy())._.cancel.push(h),n._.interrupt.push(h),n._.end.push(f)),e.on=n})),0===o&&l()}))},[Symbol.iterator]:Xe[Symbol.iterator]};var Pe={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function Te(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}Ot.prototype.interrupt=function(t){return this.each((function(){Qn(this,t)}))},Ot.prototype.transition=function(t){var n,e;t instanceof Ce?(n=t._id,t=t._name):(n=qe(),(e=Pe).time=On(),t=null==t?null:t+"");for(var r=this._groups,o=r.length,l=0;l<o;++l)for(var c,h=r[l],f=h.length,i=0;i<f;++i)(c=h[i])&&Vn(c,t,n,i,h,e||Te(c,n));return new Ce(r,this._parents,t,n)};const{abs:Oe,max:Re,min:Ie}=Math;function Ye(t){return[+t[0],+t[1]]}function je(t){return[Ye(t[0]),Ye(t[1])]}["w","e"].map(Le),["n","s"].map(Le),["n","w","e","s","nw","ne","sw","se"].map(Le);function Le(t){return{type:t}}function De(t){return((t=Math.exp(t))+1/t)/2}(function t(n,e,r){function o(t,o){var i,l,c=t[0],h=t[1],f=t[2],d=o[0],v=o[1],y=o[2],_=d-c,w=v-h,m=_*_+w*w;if(m<1e-12)l=Math.log(y/f)/n,i=function(t){return[c+t*_,h+t*w,f*Math.exp(n*t*l)]};else{var x=Math.sqrt(m),k=(y*y-f*f+r*m)/(2*f*e*x),A=(y*y-f*f-r*m)/(2*y*e*x),M=Math.log(Math.sqrt(k*k+1)-k),N=Math.log(Math.sqrt(A*A+1)-A);l=(N-M)/n,i=function(t){var r,s=t*l,o=De(M),u=f/(e*x)*(o*(r=n*s+M,((r=Math.exp(2*r))-1)/(r+1))-function(t){return((t=Math.exp(t))-1/t)/2}(M));return[c+u*_,h+u*w,f*o/De(n*s+M)]}}return i.duration=1e3*l*n/Math.SQRT2,i}return o.rho=function(n){var e=Math.max(.001,+n),r=e*e;return t(e,r,r*r)},o})(Math.SQRT2,2,4);function He(t,n,e){this.k=t,this.x=n,this.y=e}He.prototype={constructor:He,scale:function(t){return 1===t?this:new He(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new He(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new He(1,0,0);He.prototype}}]);