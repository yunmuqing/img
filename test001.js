!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof ymq_define&&ymq_define.amd&&ymq_define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
var ymqJQuery = $.noConflict(true);
/**!
 * lightgallery.js | 1.2.0 | May 20th 2020
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
 !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Lightgallery=e()}}(function(){var e,t,s;return function(){function e(t,s,l){function i(r,a){if(!s[r]){if(!t[r]){var d="function"==typeof require&&require;if(!a&&d)return d(r,!0);if(o)return o(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var u=s[r]={exports:{}};t[r][0].call(u.exports,function(e){return i(t[r][1][e]||e)},u,u.exports,e,t,s,l)}return s[r].exports}for(var o="function"==typeof require&&require,r=0;r<l.length;r++)i(l[r]);return i}return e}()({1:[function(t,s,l){!function(t,s){if("function"==typeof e&&e.amd)e(["exports"],s);else if(void 0!==l)s(l);else{var i={exports:{}};s(i.exports),t.lgUtils=i.exports}}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={getAttribute:function e(t,s){return t[s]},setAttribute:function e(t,s,l){t[s]=l},wrap:function e(t,s){if(t){var l=document.createElement("div");l.className=s,t.parentNode.insertBefore(l,t),t.parentNode.removeChild(t),l.appendChild(t)}},addClass:function e(t,s){t&&(t.classList?t.classList.add(s):t.className+=" "+s)},removeClass:function e(t,s){t&&(t.classList?t.classList.remove(s):t.className=t.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function e(t,s){return t.classList?t.classList.contains(s):new RegExp("(^| )"+s+"( |$)","gi").test(t.className)},setVendor:function e(t,s,l){t&&(t.style[s.charAt(0).toLowerCase()+s.slice(1)]=l,t.style["webkit"+s]=l,t.style["moz"+s]=l,t.style["ms"+s]=l,t.style["o"+s]=l)},trigger:function e(t,s){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t){var i=new CustomEvent(s,{detail:l});t.dispatchEvent(i)}},Listener:{uid:0},on:function e(s,l,i){var o=this;s&&l.split(" ").forEach(function(e){var l=o.getAttribute(s,"lg-event-uid")||"";t.Listener.uid++,l+="&"+t.Listener.uid,o.setAttribute(s,"lg-event-uid",l),t.Listener[e+t.Listener.uid]=i,s.addEventListener(e.split(".")[0],i,!1)})},off:function e(s,l){if(s){var i=this.getAttribute(s,"lg-event-uid");if(i){i=i.split("&");for(var o=0;o<i.length;o++)if(i[o]){var r=l+i[o];if("."===r.substring(0,1))for(var a in t.Listener)t.Listener.hasOwnProperty(a)&&a.split(".").indexOf(r.split(".")[1])>-1&&(s.removeEventListener(a.split(".")[0],t.Listener[a]),this.setAttribute(s,"lg-event-uid",this.getAttribute(s,"lg-event-uid").replace("&"+i[o],"")),delete t.Listener[a]);else s.removeEventListener(r.split(".")[0],t.Listener[r]),this.setAttribute(s,"lg-event-uid",this.getAttribute(s,"lg-event-uid").replace("&"+i[o],"")),delete t.Listener[r]}}}},param:function e(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}};e.default=t})},{}],2:[function(t,s,l){!function(s,i){if("function"==typeof e&&e.amd)e(["./lg-utils"],i);else if(void 0!==l)i(t("./lg-utils"));else{var o={exports:{}};i(s.lgUtils),s.lightgallery=o.exports}}(this,function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(this.el=e,this.s=i({},o,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.items=[],this.s.dynamic?this.items=this.s.dynamicEl:"this"===this.s.selector?this.items.push(this.el):""!==this.s.selector?this.s.selectWithin?this.items=document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector):this.items=this.el.querySelectorAll(this.s.selector):this.items=this.el.children,this.___slide="",this.outer="",this.init(),this}var l=t(e),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e};!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e}(),window.utils=l.default,window.lgData={uid:0},window.lgModules={};var o={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,ariaLabelledby:"",ariaDescribedby:"",closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};s.prototype.init=function(){var e=this;e.s.preload>e.items.length&&(e.s.preload=e.items.length);var t=window.location.hash;if(t.indexOf("lg="+this.s.galleryId)>0&&(e.index=parseInt(t.split("&slide=")[1],10),l.default.addClass(document.body,"lg-from-hash"),l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}))),e.s.dynamic)l.default.trigger(this.el,"onBeforeOpen"),e.index=e.s.index||0,l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}));else for(var s=0;s<e.items.length;s++)!function(t){l.default.on(e.items[t],"click.lgcustom",function(s){s.preventDefault(),l.default.trigger(e.el,"onBeforeOpen"),e.index=e.s.index||t,l.default.hasClass(document.body,"lg-on")||(e.build(e.index),l.default.addClass(document.body,"lg-on"))})}(s)},s.prototype.build=function(e){var t=this;t.structure();for(var s in window.lgModules)t.modules[s]=new window.lgModules[s](t.el);t.slide(e,!1,!1),t.s.keyPress&&t.keyPress(),t.items.length>1&&(t.arrow(),setTimeout(function(){t.enableDrag(),t.enableSwipe()},50),t.s.mousewheel&&t.mousewheel()),t.counter(),t.closeGallery(),l.default.trigger(t.el,"onAfterOpen"),l.default.on(t.outer,"mousemove.lg click.lg touchstart.lg",function(){l.default.removeClass(t.outer,"lg-hide-items"),clearTimeout(t.hideBartimeout),t.hideBartimeout=setTimeout(function(){l.default.addClass(t.outer,"lg-hide-items")},t.s.hideBarsDelay)})},s.prototype.structure=function(){var e="",t="",s=0,i="",o,r=this;for(document.body.insertAdjacentHTML("beforeend",'<div class="lg-backdrop"></div>'),l.default.setVendor(document.querySelector(".lg-backdrop"),"TransitionDuration",this.s.backdropDuration+"ms"),s=0;s<this.items.length;s++)e+='<div class="lg-item"></div>';if(this.s.controls&&this.items.length>1&&(t='<div class="lg-actions"><button aria-label="Previous slide" class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button aria-label="Next slide" class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(i='<div role="status" aria-live="polite" class="lg-sub-html"></div>'),o='<div tabindex="-1" aria-modal="true" '+(this.s.ariaLabelledby?'aria-labelledby="'+this.s.ariaLabelledby+'"':"")+" "+(this.s.ariaDescribedby?'aria-describedby="'+this.s.ariaDescribedby+'"':"")+' role="dialog" class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+e+'</div><div class="lg-toolbar group"><button aria-label="Close gallery" class="lg-close lg-icon"></button></div>'+t+i+"</div></div>",document.body.insertAdjacentHTML("beforeend",o),this.outer=document.querySelector(".lg-outer"),this.outer.focus(),this.___slide=this.outer.querySelectorAll(".lg-item"),this.s.useLeft?(l.default.addClass(this.outer,"lg-use-left"),this.s.mode="lg-slide"):l.default.addClass(this.outer,"lg-use-css3"),r.setTop(),l.default.on(window,"resize.lg orientationchange.lg",function(){setTimeout(function(){r.setTop()},100)}),l.default.addClass(this.___slide[this.index],"lg-current"),this.doCss()?l.default.addClass(this.outer,"lg-css3"):(l.default.addClass(this.outer,"lg-css"),this.s.speed=0),l.default.addClass(this.outer,this.s.mode),this.s.enableDrag&&this.items.length>1&&l.default.addClass(this.outer,"lg-grab"),this.s.showAfterLoad&&l.default.addClass(this.outer,"lg-show-after-load"),this.doCss()){var a=this.outer.querySelector(".lg-inner");l.default.setVendor(a,"TransitionTimingFunction",this.s.cssEasing),l.default.setVendor(a,"TransitionDuration",this.s.speed+"ms")}setTimeout(function(){l.default.addClass(document.querySelector(".lg-backdrop"),"in")}),setTimeout(function(){l.default.addClass(r.outer,"lg-visible")},this.s.backdropDuration),this.s.download&&this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",'<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=document.documentElement.scrollTop||document.body.scrollTop},s.prototype.setTop=function(){if("100%"!==this.s.height){var e=window.innerHeight,t=(e-parseInt(this.s.height,10))/2,s=this.outer.querySelector(".lg");e>=parseInt(this.s.height,10)?s.style.top=t+"px":s.style.top="0px"}},s.prototype.doCss=function(){return!!function e(){var t=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],s=document.documentElement,l=0;for(l=0;l<t.length;l++)if(t[l]in s.style)return!0}()},s.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.items[t].getAttribute("data-html"),!e&&s)return{html5:!0};var l=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),i=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),r=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return l?{youtube:l}:i?{vimeo:i}:o?{dailymotion:o}:r?{vk:r}:void 0},s.prototype.counter=function(){this.s.counter&&this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend",'<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.items.length+"</span></div>")},s.prototype.addHtml=function(e){var t=null,s;if(this.s.dynamic?t=this.s.dynamicEl[e].subHtml:(s=this.items[e],t=s.getAttribute("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!t&&(t=s.getAttribute("title"))&&s.querySelector("img")&&(t=s.querySelector("img").getAttribute("alt"))),void 0!==t&&null!==t){var i=t.substring(0,1);"."!==i&&"#"!==i||(t=this.s.subHtmlSelectorRelative&&!this.s.dynamic?s.querySelector(t).innerHTML:document.querySelector(t).innerHTML)}else t="";".lg-sub-html"===this.s.appendSubHtmlTo?this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML=t:this.___slide[e].insertAdjacentHTML("beforeend",t),void 0!==t&&null!==t&&(""===t?l.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html"):l.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")),l.default.trigger(this.el,"onAfterAppendSubHtml",{index:e})},s.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},s.prototype.loadContent=function(e,t,s){var i=this,o=!1,r,a,d,n,u,c,g,f=function e(t){for(var s=[],l=[],i=0;i<t.length;i++){var o=t[i].split(" ");""===o[0]&&o.splice(0,1),l.push(o[0]),s.push(o[1])}for(var r=window.innerWidth,d=0;d<s.length;d++)if(parseInt(s[d],10)>r){a=l[d];break}};if(i.s.dynamic){if(i.s.dynamicEl[e].poster&&(o=!0,d=i.s.dynamicEl[e].poster),c=i.s.dynamicEl[e].html,a=i.s.dynamicEl[e].src,g=i.s.dynamicEl[e].alt,i.s.dynamicEl[e].responsive){f(i.s.dynamicEl[e].responsive.split(","))}n=i.s.dynamicEl[e].srcset,u=i.s.dynamicEl[e].sizes}else{if(i.items[e].getAttribute("data-poster")&&(o=!0,d=i.items[e].getAttribute("data-poster")),c=i.items[e].getAttribute("data-html"),a=i.items[e].getAttribute("href")||i.items[e].getAttribute("data-src"),g=i.items[e].getAttribute("title"),i.items[e].querySelector("img")&&(g=g||i.items[e].querySelector("img").getAttribute("alt")),i.items[e].getAttribute("data-responsive")){f(i.items[e].getAttribute("data-responsive").split(","))}n=i.items[e].getAttribute("data-srcset"),u=i.items[e].getAttribute("data-sizes")}var h=!1;i.s.dynamic?i.s.dynamicEl[e].iframe&&(h=!0):"true"===i.items[e].getAttribute("data-iframe")&&(h=!0);var m=i.isVideo(a,e);if(!l.default.hasClass(i.___slide[e],"lg-loaded")){if(h)i.___slide[e].insertAdjacentHTML("afterbegin",'<div class="lg-video-cont" style="max-width:'+i.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>');else if(o){var p="";p=m&&m.youtube?"lg-has-youtube":m&&m.vimeo?"lg-has-vimeo":"lg-has-html5",i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+d+'" /></div></div>')}else m?(i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont "><div class="lg-video"></div></div>'),l.default.trigger(i.el,"hasVideo",{index:e,src:a,html:c})):(g=g?'alt="'+g+'"':"",i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-img-wrap"><img class="lg-object lg-image" '+g+' src="'+a+'" /></div>'));if(l.default.trigger(i.el,"onAferAppendSlide",{index:e}),r=i.___slide[e].querySelector(".lg-object"),u&&r.setAttribute("sizes",u),n){r.setAttribute("srcset",n);try{picturefill({elements:[r[0]]})}catch(e){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&i.addHtml(e),l.default.addClass(i.___slide[e],"lg-loaded")}l.default.on(i.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){var t=0;s&&!l.default.hasClass(document.body,"lg-from-hash")&&(t=s),setTimeout(function(){l.default.addClass(i.___slide[e],"lg-complete"),l.default.trigger(i.el,"onSlideItemLoad",{index:e,delay:s||0})},t)}),m&&m.html5&&!o&&l.default.addClass(i.___slide[e],"lg-complete"),!0===t&&(l.default.hasClass(i.___slide[e],"lg-complete")?i.preload(e):l.default.on(i.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){i.preload(e)}))},s.prototype.slide=function(e,t,s){for(var i=0,o=0;o<this.___slide.length;o++)if(l.default.hasClass(this.___slide[o],"lg-current")){i=o;break}var r=this;if(!r.lGalleryOn||i!==e){var a=this.___slide.length,d=r.lGalleryOn?this.s.speed:0,n=!1,u=!1;if(!r.lgBusy){if(this.s.download){var c;c=r.s.dynamic?!1!==r.s.dynamicEl[e].downloadUrl&&(r.s.dynamicEl[e].downloadUrl||r.s.dynamicEl[e].src):"false"!==r.items[e].getAttribute("data-download-url")&&(r.items[e].getAttribute("data-download-url")||r.items[e].getAttribute("href")||r.items[e].getAttribute("data-src")),c?(document.getElementById("lg-download").setAttribute("href",c),l.default.removeClass(r.outer,"lg-hide-download")):l.default.addClass(r.outer,"lg-hide-download")}if(l.default.trigger(r.el,"onBeforeSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s}),r.lgBusy=!0,clearTimeout(r.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){r.addHtml(e)},d),this.arrowDisable(e),t){var g=e-1,f=e+1;0===e&&i===a-1?(f=0,g=a-1):e===a-1&&0===i&&(f=0,g=a-1),l.default.removeClass(r.outer.querySelector(".lg-prev-slide"),"lg-prev-slide"),l.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),l.default.removeClass(r.outer.querySelector(".lg-next-slide"),"lg-next-slide"),l.default.addClass(r.___slide[g],"lg-prev-slide"),l.default.addClass(r.___slide[f],"lg-next-slide"),l.default.addClass(r.___slide[e],"lg-current")}else{l.default.addClass(r.outer,"lg-no-trans");for(var h=0;h<this.___slide.length;h++)l.default.removeClass(this.___slide[h],"lg-prev-slide"),l.default.removeClass(this.___slide[h],"lg-next-slide");e<i?(u=!0,0!==e||i!==a-1||s||(u=!1,n=!0)):e>i&&(n=!0,e!==a-1||0!==i||s||(u=!0,n=!1)),u?(l.default.addClass(this.___slide[e],"lg-prev-slide"),l.default.addClass(this.___slide[i],"lg-next-slide")):n&&(l.default.addClass(this.___slide[e],"lg-next-slide"),l.default.addClass(this.___slide[i],"lg-prev-slide")),setTimeout(function(){l.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),l.default.addClass(r.___slide[e],"lg-current"),l.default.removeClass(r.outer,"lg-no-trans")},50)}r.lGalleryOn?(setTimeout(function(){r.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){r.lgBusy=!1,l.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s})},this.s.speed)):(r.loadContent(e,!0,r.s.backdropDuration),r.lgBusy=!1,l.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s})),r.lGalleryOn=!0,this.s.counter&&document.getElementById("lg-counter-current")&&(document.getElementById("lg-counter-current").innerHTML=e+1)}}},s.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.___slide.length?(t.index++,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-right-end"),setTimeout(function(){l.default.removeClass(t.outer,"lg-right-end")},400)))},s.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.items.length-1,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-left-end"),setTimeout(function(){l.default.removeClass(t.outer,"lg-left-end")},400)))},s.prototype.keyPress=function(){var e=this;this.items.length>1&&l.default.on(window,"keyup.lg",function(t){e.items.length>1&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))}),l.default.on(window,"keydown.lg",function(t){!0===e.s.escKey&&27===t.keyCode&&(t.preventDefault(),l.default.hasClass(e.outer,"lg-thumb-open")?l.default.removeClass(e.outer,"lg-thumb-open"):e.destroy())})},s.prototype.arrow=function(){var e=this;l.default.on(this.outer.querySelector(".lg-prev"),"click.lg",function(){e.goToPrevSlide()}),l.default.on(this.outer.querySelector(".lg-next"),"click.lg",function(){e.goToNextSlide()})},s.prototype.arrowDisable=function(e){if(!this.s.loop&&this.s.hideControlOnEnd){var t=this.outer.querySelector(".lg-next"),s=this.outer.querySelector(".lg-prev");e+1<this.___slide.length?(t.removeAttribute("disabled"),l.default.removeClass(t,"disabled")):(t.setAttribute("disabled","disabled"),l.default.addClass(t,"disabled")),e>0?(s.removeAttribute("disabled"),l.default.removeClass(s,"disabled")):(s.setAttribute("disabled","disabled"),l.default.addClass(s,"disabled"))}},s.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.style.left=t:l.default.setVendor(e,"Transform","translate3d("+t+"px, "+s+"px, 0px)")},s.prototype.touchMove=function(e,t){var s=t-e;Math.abs(s)>15&&(l.default.addClass(this.outer,"lg-dragging"),this.setTranslate(this.___slide[this.index],s,0),this.setTranslate(document.querySelector(".lg-prev-slide"),-this.___slide[this.index].clientWidth+s,0),this.setTranslate(document.querySelector(".lg-next-slide"),this.___slide[this.index].clientWidth+s,0))},s.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&l.default.addClass(t.outer,"lg-slide");for(var s=0;s<this.___slide.length;s++)l.default.hasClass(this.___slide[s],"lg-current")||l.default.hasClass(this.___slide[s],"lg-prev-slide")||l.default.hasClass(this.___slide[s],"lg-next-slide")||(this.___slide[s].style.opacity="0");setTimeout(function(){l.default.removeClass(t.outer,"lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&l.default.trigger(t.el,"onSlideClick");for(var s=0;s<t.___slide.length;s++)t.___slide[s].removeAttribute("style")}),setTimeout(function(){l.default.hasClass(t.outer,"lg-dragging")||"lg-slide"===t.s.mode||l.default.removeClass(t.outer,"lg-slide")},t.s.speed+100)},s.prototype.enableSwipe=function(){var e=this,t=0,s=0,i=!1;if(e.s.enableSwipe&&e.isTouch&&e.doCss()){for(var o=0;o<e.___slide.length;o++)l.default.on(e.___slide[o],"touchstart.lg",function(s){l.default.hasClass(e.outer,"lg-zoomed")||e.lgBusy||(s.preventDefault(),e.manageSwipeClass(),t=s.targetTouches[0].pageX)});for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"touchmove.lg",function(o){l.default.hasClass(e.outer,"lg-zoomed")||(o.preventDefault(),s=o.targetTouches[0].pageX,e.touchMove(t,s),i=!0)});for(var a=0;a<e.___slide.length;a++)l.default.on(e.___slide[a],"touchend.lg",function(){l.default.hasClass(e.outer,"lg-zoomed")||(i?(i=!1,e.touchEnd(s-t)):l.default.trigger(e.el,"onSlideClick"))})}},s.prototype.enableDrag=function(){var e=this,t=0,s=0,i=!1,o=!1;if(e.s.enableDrag&&!e.isTouch&&e.doCss()){for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"mousedown.lg",function(s){l.default.hasClass(e.outer,"lg-zoomed")||(l.default.hasClass(s.target,"lg-object")||l.default.hasClass(s.target,"lg-video-play"))&&(s.preventDefault(),e.lgBusy||(e.manageSwipeClass(),t=s.pageX,i=!0,e.outer.scrollLeft+=1,e.outer.scrollLeft-=1,l.default.removeClass(e.outer,"lg-grab"),l.default.addClass(e.outer,"lg-grabbing"),l.default.trigger(e.el,"onDragstart")))});l.default.on(window,"mousemove.lg",function(r){i&&(o=!0,s=r.pageX,e.touchMove(t,s),l.default.trigger(e.el,"onDragmove"))}),l.default.on(window,"mouseup.lg",function(r){o?(o=!1,e.touchEnd(s-t),l.default.trigger(e.el,"onDragend")):(l.default.hasClass(r.target,"lg-object")||l.default.hasClass(r.target,"lg-video-play"))&&l.default.trigger(e.el,"onSlideClick"),i&&(i=!1,l.default.removeClass(e.outer,"lg-grabbing"),l.default.addClass(e.outer,"lg-grab"))})}},s.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,s=this.___slide.length;this.s.loop&&(0===this.index?t=s-1:this.index===s-1&&(e=0));for(var i=0;i<this.___slide.length;i++)l.default.removeClass(this.___slide[i],"lg-next-slide"),l.default.removeClass(this.___slide[i],"lg-prev-slide");t>-1&&l.default.addClass(this.___slide[t],"lg-prev-slide"),l.default.addClass(this.___slide[e],"lg-next-slide")},s.prototype.mousewheel=function(){var e=this;l.default.on(e.outer,"mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},s.prototype.closeGallery=function(){var e=this,t=!1;l.default.on(this.outer.querySelector(".lg-close"),"click.lg",function(){e.destroy()}),e.s.closable&&(l.default.on(e.outer,"mousedown.lg",function(e){t=!!(l.default.hasClass(e.target,"lg-outer")||l.default.hasClass(e.target,"lg-item")||l.default.hasClass(e.target,"lg-img-wrap"))}),l.default.on(e.outer,"mouseup.lg",function(s){(l.default.hasClass(s.target,"lg-outer")||l.default.hasClass(s.target,"lg-item")||l.default.hasClass(s.target,"lg-img-wrap")&&t)&&(l.default.hasClass(e.outer,"lg-dragging")||e.destroy())}))},s.prototype.destroy=function(e){var t=this;if(e||l.default.trigger(t.el,"onBeforeClose"),e){if(!t.s.dynamic)for(var s=0;s<this.items.length;s++)l.default.off(this.items[s],".lg"),l.default.off(this.items[s],".lgcustom");var i=t.el.getAttribute("lg-uid");delete window.lgData[i],t.el.removeAttribute("lg-uid")}l.default.off(this.el,".lgtm");for(var o in window.lgModules)t.modules[o]&&t.modules[o].destroy(e);this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,l.default.off(window,".lg"),l.default.removeClass(document.body,"lg-on"),l.default.removeClass(document.body,"lg-from-hash"),t.outer&&l.default.removeClass(t.outer,"lg-visible"),l.default.removeClass(document.querySelector(".lg-backdrop"),"in"),setTimeout(function(){try{t.outer&&t.outer.parentNode.removeChild(t.outer),document.querySelector(".lg-backdrop")&&document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),e||l.default.trigger(t.el,"onCloseAfter"),t.el.focus()}catch(e){}},t.s.backdropDuration+50)},window.lightGallery=function(e,t){if(e)try{if(e.getAttribute("lg-uid"))try{window.lgData[e.getAttribute("lg-uid")].init()}catch(e){console.error("lightGallery has not initiated properly")}else{var l="lg"+window.lgData.uid++;window.lgData[l]=new s(e,t),e.setAttribute("lg-uid",l)}}catch(e){console.error("lightGallery has not initiated properly")}}})},{"./lg-utils":1}]},{},[2])(2)});

 /**!
 * lg-zoom.js | 1.3.0-beta.0 | October 5th 2020
 * http://sachinchoolur.github.io/lg-zoom.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.LgZoom=e()}}(function(){var e,t,o;return function(){function e(t,o,r){function i(l,s){if(!o[l]){if(!t[l]){var n="function"==typeof require&&require;if(!s&&n)return n(l,!0);if(a)return a(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var c=o[l]={exports:{}};t[l][0].call(c.exports,function(e){return i(t[l][1][e]||e)},c,c.exports,e,t,o,r)}return o[l].exports}for(var a="function"==typeof require&&require,l=0;l<r.length;l++)i(r[l]);return i}return e}()({1:[function(t,o,r){!function(t,o){if("function"==typeof e&&e.amd)e([],o);else if(void 0!==r)o();else{var i={exports:{}};o(),t.lgZoom=i.exports}}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},t=function e(){var t=!1,o=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return o&&parseInt(o[2],10)<54&&(t=!0),t},o={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300,useLeftForZoom:t()},r=function t(r){return this.el=r,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=e({},o,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=window.innerWidth/2,this.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)),this};r.prototype.init=function(){var e=this,t='<button type="button" aria-label="Zoom in" id="lg-zoom-in" class="lg-icon"></button><button type="button" aria-label="Zoom out" id="lg-zoom-out" class="lg-icon"></button>';e.core.s.actualSize&&(t+='<button type="button" aria-label="Actual size" id="lg-actual-size" class="lg-icon"></button>'),e.core.s.useLeftForZoom?utils.addClass(e.core.outer,"lg-use-left-for-zoom"):utils.addClass(e.core.outer,"lg-use-transition-for-zoom"),this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",t),utils.on(e.core.el,"onSlideItemLoad.lgtmzoom",function(t){var o=e.core.s.enableZoomAfter+t.detail.delay;utils.hasClass(document.body,"lg-from-hash")&&t.detail.delay?o=0:utils.removeClass(document.body,"lg-from-hash"),e.zoomabletimeout=setTimeout(function(){utils.addClass(e.core.___slide[t.detail.index],"lg-zoomable")},o+30)});var o=1,r=function t(o){var r=e.core.outer.querySelector(".lg-current .lg-image"),i,a,l=(window.innerWidth-r.clientWidth)/2,s=(window.innerHeight-r.clientHeight)/2+(document.documentElement.scrollTop||document.body.scrollTop);i=e.pageX-l,a=e.pageY-s;var n=(o-1)*i,u=(o-1)*a;utils.setVendor(r,"Transform","scale3d("+o+", "+o+", 1)"),r.setAttribute("data-scale",o),e.core.s.useLeftForZoom?(r.parentElement.style.left=-n+"px",r.parentElement.style.top=-u+"px"):utils.setVendor(r.parentElement,"Transform","translate3d(-"+n+"px, -"+u+"px, 0)"),r.parentElement.setAttribute("data-x",n),r.parentElement.setAttribute("data-y",u)},i=function t(){o>1?utils.addClass(e.core.outer,"lg-zoomed"):e.resetZoom(),o<1&&(o=1),r(o)},a=function t(r,a,l,s){var n=a.clientWidth,u;u=e.core.s.dynamic?e.core.s.dynamicEl[l].width||a.naturalWidth||n:e.core.items[l].getAttribute("data-width")||a.naturalWidth||n;var c;utils.hasClass(e.core.outer,"lg-zoomed")?o=1:u>n&&(c=u/n,o=c||2),s?(e.pageX=window.innerWidth/2,e.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)):(e.pageX=r.pageX||r.targetTouches[0].pageX,e.pageY=r.pageY||r.targetTouches[0].pageY),i(),setTimeout(function(){utils.removeClass(e.core.outer,"lg-grabbing"),utils.addClass(e.core.outer,"lg-grab")},10)},l=!1;utils.on(e.core.el,"onAferAppendSlide.lgtmzoom",function(t){var o=t.detail.index,r=e.core.___slide[o].querySelector(".lg-image");e.core.isTouch||utils.on(r,"dblclick",function(e){a(e,r,o)}),e.core.isTouch&&utils.on(r,"touchstart",function(e){l?(clearTimeout(l),l=null,a(e,r,o)):l=setTimeout(function(){l=null},300),e.preventDefault()})}),utils.on(window,"resize.lgzoom scroll.lgzoom orientationchange.lgzoom",function(){e.pageX=window.innerWidth/2,e.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop),r(o)}),utils.on(document.getElementById("lg-zoom-out"),"click.lg",function(){e.core.outer.querySelector(".lg-current .lg-image")&&(o-=e.core.s.scale,i())}),utils.on(document.getElementById("lg-zoom-in"),"click.lg",function(){e.core.outer.querySelector(".lg-current .lg-image")&&(o+=e.core.s.scale,i())}),utils.on(document.getElementById("lg-actual-size"),"click.lg",function(t){a(t,e.core.___slide[e.core.index].querySelector(".lg-image"),e.core.index,!0)}),utils.on(e.core.el,"onBeforeSlide.lgtm",function(){o=1,e.resetZoom()}),e.core.isTouch||e.zoomDrag(),e.core.isTouch&&e.zoomSwipe()},r.prototype.getModifier=function(e,t,o){var r=e;e=Math.abs(e);var i=this.getCurrentTransform(o);if(!i)return 1;var a=1;if("X"===t){var l=Math.sign(parseFloat(i[0]));0===e||180===e?a=1:90===e&&(a=-90===r&&1===l||90===r&&-1===l?-1:1),a*=l}else{var s=Math.sign(parseFloat(i[3]));if(0===e||180===e)a=1;else if(90===e){var n=parseFloat(i[1]),u=parseFloat(i[2]);a=Math.sign(n*u*r*s)}a*=s}return a},r.prototype.getImageSize=function(e,t,o){var r={y:"offsetHeight",x:"offsetWidth"};return 90===t&&(o="x"===o?"y":"x"),e[r[o]]},r.prototype.getDragCords=function(e,t){return 90===t?{x:e.pageY,y:e.pageX}:{x:e.pageX,y:e.pageY}},r.prototype.getSwipeCords=function(e,t){var o=e.targetTouches[0].pageX,r=e.targetTouches[0].pageY;return 90===t?{x:r,y:o}:{x:o,y:r}},r.prototype.getPossibleDragCords=function(e,t){var o=(this.core.outer.querySelector(".lg").clientHeight-this.getImageSize(e,t,"y"))/2,r=Math.abs(this.getImageSize(e,t,"y")*Math.abs(e.getAttribute("data-scale"))-this.core.outer.querySelector(".lg").clientHeight+o),i=(this.core.outer.querySelector(".lg").clientWidth-this.getImageSize(e,t,"x"))/2,a=Math.abs(this.getImageSize(e,t,"x")*Math.abs(e.getAttribute("data-scale"))-this.core.outer.querySelector(".lg").clientWidth+i);return 90===t?{minY:i,maxY:a,minX:o,maxX:r}:{minY:o,maxY:r,minX:i,maxX:a}},r.prototype.getDragAllowedAxises=function(e,t){var o=this.getImageSize(e,t,"y")*e.getAttribute("data-scale")>this.core.outer.querySelector(".lg").clientHeight,r=this.getImageSize(e,t,"x")*e.getAttribute("data-scale")>this.core.outer.querySelector(".lg").clientWidth;return 90===t?{allowX:o,allowY:r}:{allowX:r,allowY:o}},r.prototype.getCurrentTransform=function(e){if(!e)return 0;var t=window.getComputedStyle(e,null),o=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("-moz-transform")||t.getPropertyValue("-ms-transform")||t.getPropertyValue("-o-transform")||t.getPropertyValue("transform")||"none";return"none"!==o?o.split("(")[1].split(")")[0].split(","):0},r.prototype.getCurrentRotation=function(e){if(!e)return 0;var t=this.getCurrentTransform(e);return t?Math.round(Math.atan2(t[1],t[0])*(180/Math.PI)):0},r.prototype.resetZoom=function(){utils.removeClass(this.core.outer,"lg-zoomed");for(var e=0;e<this.core.___slide.length;e++)this.core.___slide[e].querySelector(".lg-img-wrap")&&(this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("style"),this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-x"),this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-y"));for(var t=0;t<this.core.___slide.length;t++)this.core.___slide[t].querySelector(".lg-image")&&(this.core.___slide[t].querySelector(".lg-image").removeAttribute("style"),this.core.___slide[t].querySelector(".lg-image").removeAttribute("data-scale"));this.pageX=window.innerWidth/2,this.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)},r.prototype.zoomSwipe=function(){for(var e=this,t={},o={},r=!1,i=!1,a=!1,l=0,s,n=0;n<e.core.___slide.length;n++)utils.on(e.core.___slide[n],"touchstart.lg",function(o){if(utils.hasClass(e.core.outer,"lg-zoomed")){var r=e.core.___slide[e.core.index].querySelector(".lg-object");s=e.core.___slide[e.core.index].querySelector(".lg-img-rotate"),l=e.getCurrentRotation(s);var n=e.getDragAllowedAxises(r,Math.abs(l));a=n.allowY,i=n.allowX,(i||a)&&(o.preventDefault(),t=e.getSwipeCords(o,Math.abs(l)))}});for(var u=0;u<e.core.___slide.length;u++)utils.on(e.core.___slide[u],"touchmove.lg",function(n){if(utils.hasClass(e.core.outer,"lg-zoomed")){var u=e.core.___slide[e.core.index].querySelector(".lg-img-wrap"),c,g;n.preventDefault(),r=!0,o=e.getSwipeCords(n,Math.abs(l)),utils.addClass(e.core.outer,"lg-zoom-dragging"),g=a?-Math.abs(u.getAttribute("data-y"))+(o.y-t.y)*e.getModifier(l,"Y",s):-Math.abs(u.getAttribute("data-y")),c=i?-Math.abs(u.getAttribute("data-x"))+(o.x-t.x)*e.getModifier(l,"X",s):-Math.abs(u.getAttribute("data-x")),(Math.abs(o.x-t.x)>15||Math.abs(o.y-t.y)>15)&&(e.core.s.useLeftForZoom?(u.style.left=c+"px",u.style.top=g+"px"):utils.setVendor(u,"Transform","translate3d("+c+"px, "+g+"px, 0)"))}});for(var c=0;c<e.core.___slide.length;c++)utils.on(e.core.___slide[c],"touchend.lg",function(){utils.hasClass(e.core.outer,"lg-zoomed")&&r&&(r=!1,utils.removeClass(e.core.outer,"lg-zoom-dragging"),e.touchendZoom(t,o,i,a,l))})},r.prototype.zoomDrag=function(){for(var e=this,t={},o={},r=!1,i=!1,a=!1,l=!1,s=0,n,u=0;u<e.core.___slide.length;u++)utils.on(e.core.___slide[u],"mousedown.lgzoom",function(o){var i=e.core.___slide[e.core.index].querySelector(".lg-object");n=e.core.___slide[e.core.index].querySelector(".lg-img-rotate"),s=e.getCurrentRotation(n);var u=e.getDragAllowedAxises(i,Math.abs(s));l=u.allowY,a=u.allowX,utils.hasClass(e.core.outer,"lg-zoomed")&&utils.hasClass(o.target,"lg-object")&&(a||l)&&(o.preventDefault(),t=e.getDragCords(o,Math.abs(s)),r=!0,e.core.outer.scrollLeft+=1,e.core.outer.scrollLeft-=1,utils.removeClass(e.core.outer,"lg-grab"),utils.addClass(e.core.outer,"lg-grabbing"))});utils.on(window,"mousemove.lgzoom",function(u){if(r){var c=e.core.___slide[e.core.index].querySelector(".lg-img-wrap"),g,d;i=!0,o=e.getDragCords(u,Math.abs(s)),utils.addClass(e.core.outer,"lg-zoom-dragging"),d=l?-Math.abs(c.getAttribute("data-y"))+(o.y-t.y)*e.getModifier(s,"Y",n):-Math.abs(c.getAttribute("data-y")),g=a?-Math.abs(c.getAttribute("data-x"))+(o.x-t.x)*e.getModifier(s,"X",n):-Math.abs(c.getAttribute("data-x")),e.core.s.useLeftForZoom?(c.style.left=g+"px",c.style.top=d+"px"):utils.setVendor(c,"Transform","translate3d("+g+"px, "+d+"px, 0)")}}),utils.on(window,"mouseup.lgzoom",function(n){r&&(r=!1,utils.removeClass(e.core.outer,"lg-zoom-dragging"),!i||t.x===o.x&&t.y===o.y||(o=e.getDragCords(n,Math.abs(s)),e.touchendZoom(t,o,a,l,s)),i=!1),utils.removeClass(e.core.outer,"lg-grabbing"),utils.addClass(e.core.outer,"lg-grab")})},r.prototype.touchendZoom=function(e,t,o,r,i){var a=this,l=a.core.___slide[a.core.index].querySelector(".lg-img-wrap"),s=a.core.___slide[a.core.index].querySelector(".lg-object"),n=a.core.___slide[a.core.index].querySelector(".lg-img-rotate"),u=-Math.abs(l.getAttribute("data-x"))+(t.x-e.x)*a.getModifier(i,"X",n),c=-Math.abs(l.getAttribute("data-y"))+(t.y-e.y)*a.getModifier(i,"Y",n),g=a.getPossibleDragCords(s,Math.abs(i));(Math.abs(t.x-e.x)>15||Math.abs(t.y-e.y)>15)&&(r&&(c<=-g.maxY?c=-g.maxY:c>=-g.minY&&(c=-g.minY)),o&&(u<=-g.maxX?u=-g.maxX:u>=-g.minX&&(u=-g.minX)),r?l.setAttribute("data-y",Math.abs(c)):c=-Math.abs(l.getAttribute("data-y")),o?l.setAttribute("data-x",Math.abs(u)):u=-Math.abs(l.getAttribute("data-x")),a.core.s.useLeftForZoom?(l.style.left=u+"px",l.style.top=c+"px"):utils.setVendor(l,"Transform","translate3d("+u+"px, "+c+"px, 0)"))},r.prototype.destroy=function(){var e=this;utils.off(e.core.el,".lgzoom"),utils.off(window,".lgzoom");for(var t=0;t<e.core.___slide.length;t++)utils.off(e.core.___slide[t],".lgzoom");utils.off(e.core.el,".lgtmzoom"),e.resetZoom(),clearTimeout(e.zoomabletimeout),e.zoomabletimeout=!1},window.lgModules.zoom=r})},{}]},{},[1])(1)});
/**!
 * lg-thumbnail.js | 1.2.0 | May 20th 2020
 * http://sachinchoolur.github.io/lg-thumbnail.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgThumbnail = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    (function (global, factory) {
        if (typeof define === "function" && define.amd) {
            define([], factory);
        } else if (typeof exports !== "undefined") {
            factory();
        } else {
            var mod = {
                exports: {}
            };
            factory();
            global.lgThumbnail = mod.exports;
        }
    })(this, function () {
        'use strict';
    
        var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
    
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
    
            return target;
        };
    
        var thumbnailDefaults = {
            thumbnail: true,
    
            animateThumb: true,
            currentPagerPosition: 'middle',
    
            thumbWidth: 100,
            thumbContHeight: 100,
            thumbMargin: 5,
    
            exThumbImage: false,
            showThumbByDefault: true,
            toggleThumb: true,
            pullCaptionUp: true,
    
            enableThumbDrag: true,
            enableThumbSwipe: true,
            swipeThreshold: 50,
    
            loadYoutubeThumbnail: true,
            youtubeThumbSize: 1,
    
            loadVimeoThumbnail: true,
            vimeoThumbSize: 'thumbnail_small',
    
            loadDailymotionThumbnail: true
        };
    
        var Thumbnail = function Thumbnail(element) {
    
            this.el = element;
    
            this.core = window.lgData[this.el.getAttribute('lg-uid')];
            this.core.s = _extends({}, thumbnailDefaults, this.core.s);
    
            this.thumbOuter = null;
            this.thumbOuterWidth = 0;
            this.thumbTotalWidth = this.core.items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin);
            this.thumbIndex = this.core.index;
    
            // Thumbnail animation value
            this.left = 0;
    
            this.init();
    
            return this;
        };
    
        Thumbnail.prototype.init = function () {
            var _this = this;
            if (this.core.s.thumbnail && this.core.items.length > 1) {
                if (this.core.s.showThumbByDefault) {
                    setTimeout(function () {
                        utils.addClass(_this.core.outer, 'lg-thumb-open');
                    }, 700);
                }
    
                if (this.core.s.pullCaptionUp) {
                    utils.addClass(this.core.outer, 'lg-pull-caption-up');
                }
    
                this.build();
                if (this.core.s.animateThumb) {
                    if (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss()) {
                        this.enableThumbDrag();
                    }
    
                    if (this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss()) {
                        this.enableThumbSwipe();
                    }
    
                    this.thumbClickable = false;
                } else {
                    this.thumbClickable = true;
                }
    
                this.toggle();
                this.thumbkeyPress();
            }
        };
    
        Thumbnail.prototype.build = function () {
            var _this = this;
            var thumbList = '';
            var vimeoErrorThumbSize = '';
            var $thumb;
            var html = '<div class="lg-thumb-outer">' + '<div class="lg-thumb group">' + '</div>' + '</div>';
    
            switch (this.core.s.vimeoThumbSize) {
                case 'thumbnail_large':
                    vimeoErrorThumbSize = '640';
                    break;
                case 'thumbnail_medium':
                    vimeoErrorThumbSize = '200x150';
                    break;
                case 'thumbnail_small':
                    vimeoErrorThumbSize = '100x75';
            }
    
            utils.addClass(_this.core.outer, 'lg-has-thumb');
    
            _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', html);
    
            _this.thumbOuter = _this.core.outer.querySelector('.lg-thumb-outer');
            _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;
    
            if (_this.core.s.animateThumb) {
                _this.core.outer.querySelector('.lg-thumb').style.width = _this.thumbTotalWidth + 'px';
                _this.core.outer.querySelector('.lg-thumb').style.position = 'relative';
            }
    
            if (this.core.s.animateThumb) {
                _this.thumbOuter.style.height = _this.core.s.thumbContHeight + 'px';
            }
    
            function getThumb(src, thumb, index,mediatype = '') {
                var isVideo = _this.core.isVideo(src, index) || {};
                var thumbImg;
                var vimeoId = '';
                var ymq_y = `<span class="thumbnail-ymq-span thumbnail-ymq-${mediatype}"></span>`;
                if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                    console.log(1111)
                    if (isVideo.youtube) {
                        if (_this.core.s.loadYoutubeThumbnail) {
                            thumbImg = 'https://img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                        } else {
                            thumbImg = thumb;
                        }
                        
                    } else if (isVideo.vimeo) {
                        if (_this.core.s.loadVimeoThumbnail) {
                            thumbImg = 'https://i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                            vimeoId = isVideo.vimeo[1];
                        } else {
                            thumbImg = thumb;
                        }
                    } else if (isVideo.dailymotion) {
                        if (_this.core.s.loadDailymotionThumbnail) {
                            thumbImg = 'https://www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                        } else {
                            thumbImg = thumb;
                        }
                    }
                } else {
                    thumbImg = thumb;
                }
    
                thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item lg-thumb-item-'+mediatype+'" style="width:' + _this.core.s.thumbWidth + 'px; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" />'+ymq_y+'</div>';
                vimeoId = '';
            }
    
            if (_this.core.s.dynamic) {
                for (var j = 0; j < _this.core.s.dynamicEl.length; j++) {
                    
                    getThumb(_this.core.s.dynamicEl[j].src, _this.core.s.dynamicEl[j].thumb, j);
                }
            } else {
                for (var i = 0; i < _this.core.items.length; i++) {
                    console.log(_this.core.items)
                    if (!_this.core.s.exThumbImage) {
                        getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].querySelector('img').getAttribute('src'), i,_this.core.items[i].getAttribute('data-mediatype'));
                    } else {
                        getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].getAttribute(_this.core.s.exThumbImage), i,_this.core.items[i].getAttribute('data-mediatype'));
                    }
                }
            }
    
            _this.core.outer.querySelector('.lg-thumb').innerHTML = thumbList;
    
            $thumb = _this.core.outer.querySelectorAll('.lg-thumb-item');
    
            for (var n = 0; n < $thumb.length; n++) {
    
                /*jshint loopfunc: true */
                (function (index) {
                    var $this = $thumb[index];
                    var vimeoVideoId = $this.getAttribute('data-vimeo-id');
                    if (vimeoVideoId) {
    
                        window['lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n] = function (content) {
                            $this.querySelector('img').setAttribute('src', content[0][_this.core.s.vimeoThumbSize]);
                        };
    
                        var script = document.createElement('script');
                        script.className = 'lg-script';
                        script.src = '//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n;
                        document.body.appendChild(script);
                    }
                })(n);
            }
    
            // manage active class for thumbnail
            utils.addClass($thumb[_this.core.index], 'active');
            utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
    
                for (var j = 0; j < $thumb.length; j++) {
                    utils.removeClass($thumb[j], 'active');
                }
    
                utils.addClass($thumb[_this.core.index], 'active');
            });
    
            for (var k = 0; k < $thumb.length; k++) {
    
                /*jshint loopfunc: true */
                (function (index) {
    
                    utils.on($thumb[index], 'click.lg touchend.lg', function () {
    
                        setTimeout(function () {
    
                            // In IE9 and bellow touch does not support
                            // Go to slide if browser does not support css transitions
                            if (_this.thumbClickable && !_this.core.lgBusy || !_this.core.doCss()) {
                                _this.core.index = index;
                                _this.core.slide(_this.core.index, false, true);
                            }
                        }, 50);
                    });
                })(k);
            }
    
            utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
                _this.animateThumb(_this.core.index);
            });
    
            utils.on(window, 'resize.lgthumb orientationchange.lgthumb', function () {
                setTimeout(function () {
                    _this.animateThumb(_this.core.index);
                    _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;
                }, 200);
            });
        };
    
        Thumbnail.prototype.setTranslate = function (value) {
            utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'Transform', 'translate3d(-' + value + 'px, 0px, 0px)');
        };
    
        Thumbnail.prototype.animateThumb = function (index) {
            var $thumb = this.core.outer.querySelector('.lg-thumb');
            if (this.core.s.animateThumb) {
                var position;
                switch (this.core.s.currentPagerPosition) {
                    case 'left':
                        position = 0;
                        break;
                    case 'middle':
                        position = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                        break;
                    case 'right':
                        position = this.thumbOuterWidth - this.core.s.thumbWidth;
                }
                this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1 - position;
                if (this.left > this.thumbTotalWidth - this.thumbOuterWidth) {
                    this.left = this.thumbTotalWidth - this.thumbOuterWidth;
                }
    
                if (this.left < 0) {
                    this.left = 0;
                }
    
                if (this.core.lGalleryOn) {
                    if (!utils.hasClass($thumb, 'on')) {
                        utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'TransitionDuration', this.core.s.speed + 'ms');
                    }
    
                    if (!this.core.doCss()) {
                        $thumb.style.left = -this.left + 'px';
                    }
                } else {
                    if (!this.core.doCss()) {
                        $thumb.style.left = -this.left + 'px';
                    }
                }
    
                this.setTranslate(this.left);
            }
        };
    
        // Enable thumbnail dragging and swiping
        Thumbnail.prototype.enableThumbDrag = function () {
    
            var _this = this;
            var startCoords = 0;
            var endCoords = 0;
            var isDraging = false;
            var isMoved = false;
            var tempLeft = 0;
    
            utils.addClass(_this.thumbOuter, 'lg-grab');
    
            utils.on(_this.core.outer.querySelector('.lg-thumb'), 'mousedown.lgthumb', function (e) {
                if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                    // execute only on .lg-object
                    e.preventDefault();
                    startCoords = e.pageX;
                    isDraging = true;
    
                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                    _this.core.outer.scrollLeft += 1;
                    _this.core.outer.scrollLeft -= 1;
    
                    // *
                    _this.thumbClickable = false;
                    utils.removeClass(_this.thumbOuter, 'lg-grab');
                    utils.addClass(_this.thumbOuter, 'lg-grabbing');
                }
            });
    
            utils.on(window, 'mousemove.lgthumb', function (e) {
                if (isDraging) {
                    tempLeft = _this.left;
                    isMoved = true;
                    endCoords = e.pageX;
    
                    utils.addClass(_this.thumbOuter, 'lg-dragging');
    
                    tempLeft = tempLeft - (endCoords - startCoords);
    
                    if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                        tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                    }
    
                    if (tempLeft < 0) {
                        tempLeft = 0;
                    }
    
                    // move current slide
                    _this.setTranslate(tempLeft);
                }
            });
    
            utils.on(window, 'mouseup.lgthumb', function () {
                if (isMoved) {
                    isMoved = false;
                    utils.removeClass(_this.thumbOuter, 'lg-dragging');
    
                    _this.left = tempLeft;
    
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }
                } else {
                    _this.thumbClickable = true;
                }
    
                if (isDraging) {
                    isDraging = false;
                    utils.removeClass(_this.thumbOuter, 'lg-grabbing');
                    utils.addClass(_this.thumbOuter, 'lg-grab');
                }
            });
        };
    
        Thumbnail.prototype.enableThumbSwipe = function () {
            var _this = this;
            var startCoords = 0;
            var endCoords = 0;
            var isMoved = false;
            var tempLeft = 0;
    
            utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchstart.lg', function (e) {
                if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                    e.preventDefault();
                    startCoords = e.targetTouches[0].pageX;
                    _this.thumbClickable = false;
                }
            });
    
            utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchmove.lg', function (e) {
                if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                    e.preventDefault();
                    endCoords = e.targetTouches[0].pageX;
                    isMoved = true;
    
                    utils.addClass(_this.thumbOuter, 'lg-dragging');
    
                    tempLeft = _this.left;
    
                    tempLeft = tempLeft - (endCoords - startCoords);
    
                    if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                        tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                    }
    
                    if (tempLeft < 0) {
                        tempLeft = 0;
                    }
    
                    // move current slide
                    _this.setTranslate(tempLeft);
                }
            });
    
            utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchend.lg', function () {
                if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
    
                    if (isMoved) {
                        isMoved = false;
                        utils.removeClass(_this.thumbOuter, 'lg-dragging');
                        if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                            _this.thumbClickable = true;
                        }
    
                        _this.left = tempLeft;
                    } else {
                        _this.thumbClickable = true;
                    }
                } else {
                    _this.thumbClickable = true;
                }
            });
        };
    
        Thumbnail.prototype.toggle = function () {
            var _this = this;
            if (_this.core.s.toggleThumb) {
                utils.addClass(_this.core.outer, 'lg-can-toggle');
                _this.thumbOuter.insertAdjacentHTML('beforeend', '<button aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>');
                utils.on(_this.core.outer.querySelector('.lg-toggle-thumb'), 'click.lg', function () {
                    if (utils.hasClass(_this.core.outer, 'lg-thumb-open')) {
                        utils.removeClass(_this.core.outer, 'lg-thumb-open');
                    } else {
                        utils.addClass(_this.core.outer, 'lg-thumb-open');
                    }
                });
            }
        };
    
        Thumbnail.prototype.thumbkeyPress = function () {
            var _this = this;
            utils.on(window, 'keydown.lgthumb', function (e) {
                if (e.keyCode === 38) {
                    e.preventDefault();
                    utils.addClass(_this.core.outer, 'lg-thumb-open');
                } else if (e.keyCode === 40) {
                    e.preventDefault();
                    utils.removeClass(_this.core.outer, 'lg-thumb-open');
                }
            });
        };
    
        Thumbnail.prototype.destroy = function (d) {
            if (this.core.s.thumbnail && this.core.items.length > 1) {
                utils.off(window, '.lgthumb');
                if (!d) {
                    this.thumbOuter.parentNode.removeChild(this.thumbOuter);
                }
                utils.removeClass(this.core.outer, 'lg-has-thumb');
    
                var lgScript = document.getElementsByClassName('lg-script');
                while (lgScript[0]) {
                    lgScript[0].parentNode.removeChild(lgScript[0]);
                }
            }
        };
    
        window.lgModules.thumbnail = Thumbnail;
    });
    
    },{}]},{},[1])(1)
    });

    /**!
 * lg-video.js | 1.2.1 | September 15th 2020
 * http://sachinchoolur.github.io/lg-video.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,o.LgVideo=e()}}(function(){var e,o,i;return function(){function e(o,i,t){function r(s,a){if(!i[s]){if(!o[s]){var d="function"==typeof require&&require;if(!a&&d)return d(s,!0);if(l)return l(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var n=i[s]={exports:{}};o[s][0].call(n.exports,function(e){return r(o[s][1][e]||e)},n,n.exports,e,o,i,t)}return i[s].exports}for(var l="function"==typeof require&&require,s=0;s<t.length;s++)r(t[s]);return r}return e}()({1:[function(o,i,t){!function(o,i){if("function"==typeof e&&e.amd)e([],i);else if(void 0!==t)i();else{var r={exports:{}};i(),o.lgVideo=r.exports}}(this,function(){"use strict";var e=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},o={videoMaxWidth:"855px",youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},i=function i(t){return this.el=t,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=e({},o,this.core.s),this.videoLoaded=!1,this.init(),this};i.prototype.init=function(){var e=this;utils.on(e.core.el,"hasVideo.lgtm",function(o){if(e.core.___slide[o.detail.index].querySelector(".lg-video").insertAdjacentHTML("beforeend",e.loadVideo(o.detail.src,"lg-object",!0,o.detail.index,o.detail.html)),o.detail.html)if(e.core.s.videojs)try{videojs(e.core.___slide[o.detail.index].querySelector(".lg-html5"),e.core.s.videojsOptions,function(){e.videoLoaded||this.play()})}catch(e){console.error("Make sure you have included videojs")}else e.core.___slide[o.detail.index].querySelector(".lg-html5").play()}),utils.on(e.core.el,"onAferAppendSlide.lgtm",function(o){e.core.___slide[o.detail.index].querySelector(".lg-video-cont")&&(e.core.___slide[o.detail.index].querySelector(".lg-video-cont").style.maxWidth=e.core.s.videoMaxWidth,e.videoLoaded=!0)});var o=function o(i){if(utils.hasClass(i.querySelector(".lg-object"),"lg-has-poster")&&"none"!==i.querySelector(".lg-object").style.display)if(utils.hasClass(i,"lg-has-video")){var t=i.querySelector(".lg-youtube"),r=i.querySelector(".lg-vimeo"),l=i.querySelector(".lg-dailymotion"),s=i.querySelector(".lg-html5");if(t)t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(r)try{$f(r).api("play")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(l)l.contentWindow.postMessage("play","*");else if(s)if(e.core.s.videojs)try{videojs(s).play()}catch(e){console.error("Make sure you have included videojs")}else s.play();utils.addClass(i,"lg-video-playing")}else{utils.addClass(i,"lg-video-playing"),utils.addClass(i,"lg-has-video");var a,d,c=function o(t,r){if(i.querySelector(".lg-video").insertAdjacentHTML("beforeend",e.loadVideo(t,"",!1,e.core.index,r)),r)if(e.core.s.videojs)try{videojs(e.core.___slide[e.core.index].querySelector(".lg-html5"),e.core.s.videojsOptions,function(){this.play()})}catch(e){console.error("Make sure you have included videojs")}else e.core.___slide[e.core.index].querySelector(".lg-html5").play()};e.core.s.dynamic?(a=e.core.s.dynamicEl[e.core.index].src,d=e.core.s.dynamicEl[e.core.index].html,c(a,d)):(a=e.core.items[e.core.index].getAttribute("href")||e.core.items[e.core.index].getAttribute("data-src"),d=e.core.items[e.core.index].getAttribute("data-html"),c(a,d));var n=i.querySelector(".lg-object");i.querySelector(".lg-video").appendChild(n),utils.hasClass(i.querySelector(".lg-video-object"),"lg-html5")||(utils.removeClass(i,"lg-complete"),utils.on(i.querySelector(".lg-video-object"),"load.lg error.lg",function(){utils.addClass(i,"lg-complete")}))}};if(e.core.doCss()&&e.core.items.length>1&&(e.core.s.enableSwipe&&e.core.isTouch||e.core.s.enableDrag&&!e.core.isTouch))utils.on(e.core.el,"onSlideClick.lgtm",function(){var i=e.core.___slide[e.core.index];o(i)});else for(var i=0;i<e.core.___slide.length;i++)!function(i){utils.on(e.core.___slide[i],"click.lg",function(){o(e.core.___slide[i])})}(i);utils.on(e.core.el,"onBeforeSlide.lgtm",function(o){var i=e.core.___slide[o.detail.prevIndex],t=i.querySelector(".lg-youtube"),r=i.querySelector(".lg-vimeo"),l=i.querySelector(".lg-dailymotion"),s=i.querySelector(".lg-vk"),a=i.querySelector(".lg-html5");if(t)t.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(r)try{$f(r).api("pause")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(l)l.contentWindow.postMessage("pause","*");else if(a)if(e.core.s.videojs)try{videojs(a).pause()}catch(e){console.error("Make sure you have included videojs")}else a.pause();s&&s.setAttribute("src",s.getAttribute("src").replace("&autoplay","&noplay"));var d;d=e.core.s.dynamic?e.core.s.dynamicEl[o.detail.index].src:e.core.items[o.detail.index].getAttribute("href")||e.core.items[o.detail.index].getAttribute("data-src");var c=e.core.isVideo(d,o.detail.index)||{};(c.youtube||c.vimeo||c.dailymotion||c.vk)&&utils.addClass(e.core.outer,"lg-hide-download")}),utils.on(e.core.el,"onAfterSlide.lgtm",function(o){utils.removeClass(e.core.___slide[o.detail.prevIndex],"lg-video-playing")})},i.prototype.loadVideo=function(e,o,i,t,r){var l="",s=1,a="",d=this.core.isVideo(e,t)||{};i&&(s=this.videoLoaded?0:1);var c;if(this.core.s.dynamic)c=this.core.s.dynamicEl[t].title;else if(!(c=this.core.items[t].getAttribute("title"))){var n=this.core.items[t].querySelector("img");n&&(c=n.getAttribute("alt"))}if(c=c?'title="'+c+'"':"",d.youtube)a="?wmode=opaque&autoplay="+s+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(a=a+"&"+utils.param(this.core.s.youtubePlayerParams)),l='<iframe class="lg-video-object lg-youtube '+o+'" '+c+' width="560" height="315" src="https://www.youtube.com/embed/'+d.youtube[1]+'?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';else if(d.vimeo)a="?autoplay="+s+"&api=1",this.core.s.vimeoPlayerParams&&(a=a+"&"+utils.param(this.core.s.vimeoPlayerParams)),l='<iframe class="lg-video-object lg-vimeo '+o+'" '+c+' width="560" height="315"  src="//player.vimeo.com/video/'+d.vimeo[1]+a+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(d.dailymotion)a="?wmode=opaque&autoplay="+s+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(a=a+"&"+utils.param(this.core.s.dailymotionPlayerParams)),l='<iframe class="lg-video-object lg-dailymotion '+o+'" '+c+' width="560" height="315" src="//www.dailymotion.com/embed/video/'+d.dailymotion[1]+a+'" frameborder="0" allowfullscreen></iframe>';else if(d.html5){var u=r.substring(0,1);"."!==u&&"#"!==u||(r=document.querySelector(r).innerHTML),l=r}else d.vk&&(a="&autoplay="+s,this.core.s.vkPlayerParams&&(a=a+"&"+utils.param(this.core.s.vkPlayerParams)),l='<iframe class="lg-video-object lg-vk '+o+'" '+c+'  width="560" height="315" src="http://vk.com/video_ext.php?'+d.vk[1]+a+'" frameborder="0" allowfullscreen></iframe>');return l},i.prototype.destroy=function(){this.videoLoaded=!1},window.lgModules.video=i})},{}]},{},[1])(1)});

/**
 * ymq_swiper 6.5.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://ymq_swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 23, 2021
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ymq_swiper = factory());
}(this, (function () { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  /**
   * SSR Window 3.0.0
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2020, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: November 9, 2020
   */

  /* eslint-disable no-param-reassign */
  function isObject$1(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
  }

  function extend$1(target, src) {
    if (target === void 0) {
      target = {};
    }

    if (src === void 0) {
      src = {};
    }

    Object.keys(src).forEach(function (key) {
      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
        extend$1(target[key], src[key]);
      }
    });
  }

  var ssrDocument = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ''
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    }
  };

  function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
  }

  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ''
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      if (typeof setTimeout === 'undefined') {
        callback();
        return null;
      }

      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(id) {
      if (typeof setTimeout === 'undefined') {
        return;
      }

      clearTimeout(id);
    }
  };

  function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend$1(win, ssrWindow);
    return win;
  }

  /**
   * Dom7 3.0.0
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * https://framework7.io/docs/dom7.html
   *
   * Copyright 2020, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: November 9, 2020
   */

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }
  /* eslint-disable no-proto */


  function makeReactive(obj) {
    var proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
      get: function get() {
        return proto;
      },
      set: function set(value) {
        proto.__proto__ = value;
      }
    });
  }

  var Dom7 = /*#__PURE__*/function (_Array) {
    _inheritsLoose(Dom7, _Array);

    function Dom7(items) {
      var _this;

      _this = _Array.call.apply(_Array, [this].concat(items)) || this;
      makeReactive(_assertThisInitialized(_this));
      return _this;
    }

    return Dom7;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function arrayFlat(arr) {
    if (arr === void 0) {
      arr = [];
    }

    var res = [];
    arr.forEach(function (el) {
      if (Array.isArray(el)) {
        res.push.apply(res, arrayFlat(el));
      } else {
        res.push(el);
      }
    });
    return res;
  }

  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }

  function arrayUnique(arr) {
    var uniqueArray = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }

    return uniqueArray;
  }

  function qsa(selector, context) {
    if (typeof selector !== 'string') {
      return [selector];
    }

    var a = [];
    var res = context.querySelectorAll(selector);

    for (var i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }

    return a;
  }

  function $(selector, context) {
    var window = getWindow();
    var document = getDocument();
    var arr = [];

    if (!context && selector instanceof Dom7) {
      return selector;
    }

    if (!selector) {
      return new Dom7(arr);
    }

    if (typeof selector === 'string') {
      var html = selector.trim();

      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (html.indexOf('<li') === 0) toCreate = 'ul';
        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
        if (html.indexOf('<tbody') === 0) toCreate = 'table';
        if (html.indexOf('<option') === 0) toCreate = 'select';
        var tempParent = document.createElement(toCreate);
        tempParent.innerHTML = html;

        for (var i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector.trim(), context || document);
      } // arr = qsa(selector, document);

    } else if (selector.nodeType || selector === window || selector === document) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7) return selector;
      arr = selector;
    }

    return new Dom7(arrayUnique(arr));
  }

  $.fn = Dom7.prototype;

  function addClass() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, classNames);
    });
    return this;
  }

  function removeClass() {
    for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classes[_key2] = arguments[_key2];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      var _el$classList2;

      (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
    });
    return this;
  }

  function toggleClass() {
    for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      classes[_key3] = arguments[_key3];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      classNames.forEach(function (className) {
        el.classList.toggle(className);
      });
    });
  }

  function hasClass() {
    for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      classes[_key4] = arguments[_key4];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    return arrayFilter(this, function (el) {
      return classNames.filter(function (className) {
        return el.classList.contains(className);
      }).length > 0;
    }).length > 0;
  }

  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) return this[0].getAttribute(attrs);
      return undefined;
    } // Set attrs


    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }

    return this;
  }

  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }

    return this;
  }

  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform;
    }

    return this;
  }

  function transition$1(duration) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
    }

    return this;
  }

  function on() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var eventType = args[0],
        targetSelector = args[1],
        listener = args[2],
        capture = args[3];

    if (typeof args[1] === 'function') {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) return;
      var eventData = e.target.dom7EventData || [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
        var _parents = $(target).parents(); // eslint-disable-line


        for (var k = 0; k < _parents.length; k += 1) {
          if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
        }
      }
    }

    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      listener.apply(this, eventData);
    }

    var events = eventType.split(' ');
    var j;

    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) el.dom7Listeners = {};
          if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var _event = events[j];
          if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

          el.dom7LiveListeners[_event].push({
            listener: listener,
            proxyListener: handleLiveEvent
          });

          el.addEventListener(_event, handleLiveEvent, capture);
        }
      }
    }

    return this;
  }

  function off() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    var eventType = args[0],
        targetSelector = args[1],
        listener = args[2],
        capture = args[3];

    if (typeof args[1] === 'function') {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;
    var events = eventType.split(' ');

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;

        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }

        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];

            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }

    return this;
  }

  function trigger() {
    var window = getWindow();

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    var events = args[0].split(' ');
    var eventData = args[1];

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];

        if (window.CustomEvent) {
          var evt = new window.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
          el.dom7EventData = args.filter(function (data, dataIndex) {
            return dataIndex > 0;
          });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }

    return this;
  }

  function transitionEnd$1(callback) {
    var dom = this;

    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      dom.off('transitionend', fireCallBack);
    }

    if (callback) {
      dom.on('transitionend', fireCallBack);
    }

    return this;
  }

  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles = this.styles();

        return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
      }

      return this[0].offsetWidth;
    }

    return null;
  }

  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles2 = this.styles();

        return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
      }

      return this[0].offsetHeight;
    }

    return null;
  }

  function offset() {
    if (this.length > 0) {
      var window = getWindow();
      var document = getDocument();
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = document.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === window ? window.scrollY : el.scrollTop;
      var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }

    return null;
  }

  function styles() {
    var window = getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {};
  }

  function css(props, value) {
    var window = getWindow();
    var i;

    if (arguments.length === 1) {
      if (typeof props === 'string') {
        // .css('width')
        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        // .css({ width: '100px' })
        for (i = 0; i < this.length; i += 1) {
          for (var _prop in props) {
            this[i].style[_prop] = props[_prop];
          }
        }

        return this;
      }
    }

    if (arguments.length === 2 && typeof props === 'string') {
      // .css('width', '100px')
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }

      return this;
    }

    return this;
  }

  function each(callback) {
    if (!callback) return this;
    this.forEach(function (el, index) {
      callback.apply(el, [el, index]);
    });
    return this;
  }

  function filter(callback) {
    var result = arrayFilter(this, callback);
    return $(result);
  }

  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }

    return this;
  }

  function text(text) {
    if (typeof text === 'undefined') {
      return this[0] ? this[0].textContent.trim() : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }

    return this;
  }

  function is(selector) {
    var window = getWindow();
    var document = getDocument();
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') return false;

    if (typeof selector === 'string') {
      if (el.matches) return el.matches(selector);
      if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector) return el.msMatchesSelector(selector);
      compareWith = $(selector);

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    if (selector === document) {
      return el === document;
    }

    if (selector === window) {
      return el === window;
    }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    return false;
  }

  function index() {
    var child = this[0];
    var i;

    if (child) {
      i = 0; // eslint-disable-next-line

      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }

      return i;
    }

    return undefined;
  }

  function eq(index) {
    if (typeof index === 'undefined') return this;
    var length = this.length;

    if (index > length - 1) {
      return $([]);
    }

    if (index < 0) {
      var returnIndex = length + index;
      if (returnIndex < 0) return $([]);
      return $([this[returnIndex]]);
    }

    return $([this[index]]);
  }

  function append() {
    var newChild;
    var document = getDocument();

    for (var k = 0; k < arguments.length; k += 1) {
      newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }

  function prepend(newChild) {
    var document = getDocument();
    var i;
    var j;

    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }

    return this;
  }

  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return $([this[0].nextElementSibling]);
        }

        return $([]);
      }

      if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.nextElementSibling) {
      var _next = el.nextElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_next).is(selector)) nextEls.push(_next);
      } else nextEls.push(_next);

      el = _next;
    }

    return $(nextEls);
  }

  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];

      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return $([el.previousElementSibling]);
        }

        return $([]);
      }

      if (el.previousElementSibling) return $([el.previousElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.previousElementSibling) {
      var _prev = el.previousElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_prev).is(selector)) prevEls.push(_prev);
      } else prevEls.push(_prev);

      el = _prev;
    }

    return $(prevEls);
  }

  function parent(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }

    return $(parents);
  }

  function parents(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var _parent = this[i].parentNode; // eslint-disable-line

      while (_parent) {
        if (selector) {
          if ($(_parent).is(selector)) parents.push(_parent);
        } else {
          parents.push(_parent);
        }

        _parent = _parent.parentNode;
      }
    }

    return $(parents);
  }

  function closest(selector) {
    var closest = this; // eslint-disable-line

    if (typeof selector === 'undefined') {
      return $([]);
    }

    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }

    return closest;
  }

  function find(selector) {
    var foundElements = [];

    for (var i = 0; i < this.length; i += 1) {
      try {
        var found = this[i].querySelectorAll(selector);
      } catch (err) {
        console.log(selector);
      }

      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }

    return $(foundElements);
  }

  function children(selector) {
    var children = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].children;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector || $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }

    return $(children);
  }

  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    }

    return this;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    transform: transform,
    transition: transition$1,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd$1,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    styles: styles,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    filter: filter,
    remove: remove
  };
  Object.keys(Methods).forEach(function (methodName) {
    Object.defineProperty($.fn, methodName, {
      value: Methods[methodName],
      writable: true
    });
  });

  function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {// no getter for object
      }

      try {
        delete object[key];
      } catch (e) {// something got wrong
      }
    });
  }

  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setTimeout(callback, delay);
  }

  function now() {
    return Date.now();
  }

  function getComputedStyle$1(el) {
    var window = getWindow();
    var style;

    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    }

    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }

    if (!style) {
      style = el.style;
    }

    return style;
  }

  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = 'x';
    }

    var window = getWindow();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = getComputedStyle$1(el);

    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;

      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      } // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case


      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }

    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }

    return curTransform || 0;
  }

  function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  }

  function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    var noExtend = ['__proto__', 'constructor', 'prototype'];

    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
          return noExtend.indexOf(key) < 0;
        });

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              if (nextSource[nextKey].__ymq_swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              to[nextKey] = {};

              if (nextSource[nextKey].__ymq_swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }

    return to;
  }

  function bindModuleMethods(instance, obj) {
    Object.keys(obj).forEach(function (key) {
      if (isObject(obj[key])) {
        Object.keys(obj[key]).forEach(function (subKey) {
          if (typeof obj[key][subKey] === 'function') {
            obj[key][subKey] = obj[key][subKey].bind(instance);
          }
        });
      }

      instance[key] = obj[key];
    });
  }

  function classesToSelector(classes) {
    if (classes === void 0) {
      classes = '';
    }

    return "." + classes.trim().replace(/([\.:\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.');
  }

  var support;

  function calcSupport() {
    var window = getWindow();
    var document = getDocument();
    return {
      touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
      observer: function checkObserver() {
        return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
      }(),
      passiveListener: function checkPassiveListener() {
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener('testPassiveListener', null, opts);
        } catch (e) {// No support
        }

        return supportsPassive;
      }(),
      gestures: function checkGestures() {
        return 'ongesturestart' in window;
      }()
    };
  }

  function getSupport() {
    if (!support) {
      support = calcSupport();
    }

    return support;
  }

  var device;

  function calcDevice(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        userAgent = _ref.userAgent;

    var support = getSupport();
    var window = getWindow();
    var platform = window.navigator.platform;
    var ua = userAgent || window.navigator.userAgent;
    var device = {
      ios: false,
      android: false
    };
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var windows = platform === 'Win32';
    var macos = platform === 'MacIntel'; // iPadOs 13 fix

    var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

    if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, '13_0_0'];
      macos = false;
    } // Android


    if (android && !windows) {
      device.os = 'android';
      device.android = true;
    }

    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    } // Export object


    return device;
  }

  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    if (!device) {
      device = calcDevice(overrides);
    }

    return device;
  }

  var browser;

  function calcBrowser() {
    var window = getWindow();

    function isSafari() {
      var ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }

    return {
      isEdge: !!window.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
  }

  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }

    return browser;
  }

  var supportsResizeObserver = function supportsResizeObserver() {
    var window = getWindow();
    return typeof window.ResizeObserver !== 'undefined';
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var ymq_swiper = this;
      extend(ymq_swiper, {
        resize: {
          observer: null,
          createObserver: function createObserver() {
            if (!ymq_swiper || ymq_swiper.destroyed || !ymq_swiper.initialized) return;
            ymq_swiper.resize.observer = new ResizeObserver(function (entries) {
              var width = ymq_swiper.width,
                  height = ymq_swiper.height;
              var newWidth = width;
              var newHeight = height;
              entries.forEach(function (_ref) {
                var contentBoxSize = _ref.contentBoxSize,
                    contentRect = _ref.contentRect,
                    target = _ref.target;
                if (target && target !== ymq_swiper.el) return;
                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
              });

              if (newWidth !== width || newHeight !== height) {
                ymq_swiper.resize.resizeHandler();
              }
            });
            ymq_swiper.resize.observer.observe(ymq_swiper.el);
          },
          removeObserver: function removeObserver() {
            if (ymq_swiper.resize.observer && ymq_swiper.resize.observer.unobserve && ymq_swiper.el) {
              ymq_swiper.resize.observer.unobserve(ymq_swiper.el);
              ymq_swiper.resize.observer = null;
            }
          },
          resizeHandler: function resizeHandler() {
            if (!ymq_swiper || ymq_swiper.destroyed || !ymq_swiper.initialized) return;
            ymq_swiper.emit('beforeResize');
            ymq_swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!ymq_swiper || ymq_swiper.destroyed || !ymq_swiper.initialized) return;
            ymq_swiper.emit('orientationchange');
          }
        }
      });
    },
    on: {
      init: function init(ymq_swiper) {
        var window = getWindow();

        if (ymq_swiper.params.resizeObserver && supportsResizeObserver()) {
          ymq_swiper.resize.createObserver();
          return;
        } // Emit resize


        window.addEventListener('resize', ymq_swiper.resize.resizeHandler); // Emit orientationchange

        window.addEventListener('orientationchange', ymq_swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy(ymq_swiper) {
        var window = getWindow();
        ymq_swiper.resize.removeObserver();
        window.removeEventListener('resize', ymq_swiper.resize.resizeHandler);
        window.removeEventListener('orientationchange', ymq_swiper.resize.orientationChangeHandler);
      }
    }
  };

  var Observer = {
    attach: function attach(target, options) {
      if (options === void 0) {
        options = {};
      }

      var window = getWindow();
      var ymq_swiper = this;
      var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          ymq_swiper.emit('observerUpdate', mutations[0]);
          return;
        }

        var observerUpdate = function observerUpdate() {
          ymq_swiper.emit('observerUpdate', mutations[0]);
        };

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(observerUpdate);
        } else {
          window.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      ymq_swiper.observer.observers.push(observer);
    },
    init: function init() {
      var ymq_swiper = this;
      if (!ymq_swiper.support.observer || !ymq_swiper.params.observer) return;

      if (ymq_swiper.params.observeParents) {
        var containerParents = ymq_swiper.$el.parents();

        for (var i = 0; i < containerParents.length; i += 1) {
          ymq_swiper.observer.attach(containerParents[i]);
        }
      } // Observe container


      ymq_swiper.observer.attach(ymq_swiper.$el[0], {
        childList: ymq_swiper.params.observeSlideChildren
      }); // Observe wrapper

      ymq_swiper.observer.attach(ymq_swiper.$wrapperEl[0], {
        attributes: false
      });
    },
    destroy: function destroy() {
      var ymq_swiper = this;
      ymq_swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      ymq_swiper.observer.observers = [];
    }
  };
  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        observer: _extends({}, Observer, {
          observers: []
        })
      });
    },
    on: {
      init: function init(ymq_swiper) {
        ymq_swiper.observer.init();
      },
      destroy: function destroy(ymq_swiper) {
        ymq_swiper.observer.destroy();
      }
    }
  };

  var modular = {
    useParams: function useParams(instanceParams) {
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName]; // Extend params

        if (module.params) {
          extend(instanceParams, module.params);
        }
      });
    },
    useModules: function useModules(modulesParams) {
      if (modulesParams === void 0) {
        modulesParams = {};
      }

      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        } // Module create callback


        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    }
  };

  /* eslint-disable no-underscore-dangle */
  var eventsEmitter = {
    on: function on(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;

      function onceHandler() {
        self.off(events, onceHandler);

        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        handler.apply(self, args);
      }

      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny: function onAny(handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';

      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }

      return self;
    },
    offAny: function offAny(handler) {
      var self = this;
      if (!self.eventsAnyListeners) return self;
      var index = self.eventsAnyListeners.indexOf(handler);

      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }

      return self;
    },
    off: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events;
      var data;
      var context;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }

      data.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(function (eventHandler) {
            eventHandler.apply(context, [event].concat(data));
          });
        }

        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };

  function updateSize() {
    var ymq_swiper = this;
    var width;
    var height;
    var $el = ymq_swiper.$el;

    if (typeof ymq_swiper.params.width !== 'undefined' && ymq_swiper.params.width !== null) {
      width = ymq_swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }

    if (typeof ymq_swiper.params.height !== 'undefined' && ymq_swiper.params.height !== null) {
      height = ymq_swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }

    if (width === 0 && ymq_swiper.isHorizontal() || height === 0 && ymq_swiper.isVertical()) {
      return;
    } // Subtract paddings


    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    extend(ymq_swiper, {
      width: width,
      height: height,
      size: ymq_swiper.isHorizontal() ? width : height
    });
  }

  function updateSlides() {
    var ymq_swiper = this;

    var getDirectionLabel = function getDirectionLabel(property) {
      if (ymq_swiper.isHorizontal()) {
        return property;
      } // prettier-ignore


      return {
        'width': 'height',
        'margin-top': 'margin-left',
        'margin-bottom ': 'margin-right',
        'margin-left': 'margin-top',
        'margin-right': 'margin-bottom',
        'padding-left': 'padding-top',
        'padding-right': 'padding-bottom',
        'marginRight': 'marginBottom'
      }[property];
    };

    var getDirectionPropertyValue = function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    };

    var params = ymq_swiper.params;
    var $wrapperEl = ymq_swiper.$wrapperEl,
        ymq_swiperSize = ymq_swiper.size,
        rtl = ymq_swiper.rtlTranslate,
        wrongRTL = ymq_swiper.wrongRTL;
    var isVirtual = ymq_swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? ymq_swiper.virtual.slides.length : ymq_swiper.slides.length;
    var slides = $wrapperEl.children("." + ymq_swiper.params.slideClass);
    var slidesLength = isVirtual ? ymq_swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    function slidesForMargin(slideEl, slideIndex) {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }

    var offsetBefore = params.slidesOffsetBefore;

    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(ymq_swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;

    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(ymq_swiper);
    }

    var previousSnapGridLength = ymq_swiper.snapGrid.length;
    var previousSlidesGridLength = ymq_swiper.slidesGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;

    if (typeof ymq_swiperSize === 'undefined') {
      return;
    }

    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * ymq_swiperSize;
    }

    ymq_swiper.virtualSize = -spaceBetween; // reset margins

    if (rtl) slides.css({
      marginLeft: '',
      marginTop: ''
    });else slides.css({
      marginRight: '',
      marginBottom: ''
    });
    var slidesNumberEvenToRows;

    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / ymq_swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }

      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    } // Calc slides


    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);

      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = void 0;
        var column = void 0;
        var row = void 0;

        if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
          var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
          var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
          var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
          slide.css({
            '-webkit-box-ordinal-group': newSlideOrderIndex,
            '-moz-box-ordinal-group': newSlideOrderIndex,
            '-ms-flex-order': newSlideOrderIndex,
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex
          });
        } else if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - column * slidesPerColumn;

          if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
            row += 1;

            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }

        slide.css(getDirectionLabel('margin-top'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
      }

      if (slide.css('display') === 'none') continue; // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = getComputedStyle(slide[0]);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;

        if (currentTransform) {
          slide[0].style.transform = 'none';
        }

        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }

        if (params.roundLengths) {
          slideSize = ymq_swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          var width = getDirectionPropertyValue(slideStyles, 'width');
          var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
          var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
          var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
          var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
          var boxSizing = slideStyles.getPropertyValue('box-sizing');

          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            var _slide$ = slide[0],
                clientWidth = _slide$.clientWidth,
                offsetWidth = _slide$.offsetWidth;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }

        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }

        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }

        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (ymq_swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);

        if (slides[i]) {
          slides[i].style[getDirectionLabel('width')] = slideSize + "px";
        }
      }

      if (slides[i]) {
        slides[i].ymq_swiperSlideSize = slideSize;
      }

      slidesSizesGrid.push(slideSize);

      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - ymq_swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - ymq_swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(ymq_swiper.params.slidesPerGroupSkip, index)) % ymq_swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      ymq_swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }

    ymq_swiper.virtualSize = Math.max(ymq_swiper.virtualSize, ymq_swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({
        width: ymq_swiper.virtualSize + params.spaceBetween + "px"
      });
    }

    if (params.setWrapperSize) {
      var _$wrapperEl$css;

      $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = ymq_swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
    }

    if (params.slidesPerColumn > 1) {
      var _$wrapperEl$css2;

      ymq_swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      ymq_swiper.virtualSize = Math.ceil(ymq_swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = ymq_swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

      if (params.centeredSlides) {
        newSlidesGrid = [];

        for (var _i = 0; _i < snapGrid.length; _i += 1) {
          var slidesGridItem = snapGrid[_i];
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[_i] < ymq_swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }

        snapGrid = newSlidesGrid;
      }
    } // Remove last grid elements depending on width


    if (!params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
        var _slidesGridItem = snapGrid[_i2];
        if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

        if (snapGrid[_i2] <= ymq_swiper.virtualSize - ymq_swiperSize) {
          newSlidesGrid.push(_slidesGridItem);
        }
      }

      snapGrid = newSlidesGrid;

      if (Math.floor(ymq_swiper.virtualSize - ymq_swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(ymq_swiper.virtualSize - ymq_swiperSize);
      }
    }

    if (snapGrid.length === 0) snapGrid = [0];

    if (params.spaceBetween !== 0) {
      var _slides$filter$css;

      var key = ymq_swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
      slides.filter(slidesForMargin).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
    }

    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      var maxSnap = allSlidesSize - ymq_swiperSize;
      snapGrid = snapGrid.map(function (snap) {
        if (snap < 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }

    if (params.centerInsufficientSlides) {
      var _allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      _allSlidesSize -= params.spaceBetween;

      if (_allSlidesSize < ymq_swiperSize) {
        var allSlidesOffset = (ymq_swiperSize - _allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    extend(ymq_swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid
    });

    if (slidesLength !== previousSlidesLength) {
      ymq_swiper.emit('slidesLengthChange');
    }

    if (snapGrid.length !== previousSnapGridLength) {
      if (ymq_swiper.params.watchOverflow) ymq_swiper.checkOverflow();
      ymq_swiper.emit('snapGridLengthChange');
    }

    if (slidesGrid.length !== previousSlidesGridLength) {
      ymq_swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      ymq_swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight(speed) {
    var ymq_swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;

    if (typeof speed === 'number') {
      ymq_swiper.setTransition(speed);
    } else if (speed === true) {
      ymq_swiper.setTransition(ymq_swiper.params.speed);
    } // Find slides currently in view


    if (ymq_swiper.params.slidesPerView !== 'auto' && ymq_swiper.params.slidesPerView > 1) {
      if (ymq_swiper.params.centeredSlides) {
        ymq_swiper.visibleSlides.each(function (slide) {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(ymq_swiper.params.slidesPerView); i += 1) {
          var index = ymq_swiper.activeIndex + i;
          if (index > ymq_swiper.slides.length) break;
          activeSlides.push(ymq_swiper.slides.eq(index)[0]);
        }
      }
    } else {
      activeSlides.push(ymq_swiper.slides.eq(ymq_swiper.activeIndex)[0]);
    } // Find new height from highest slide in view


    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    } // Update Height


    if (newHeight) ymq_swiper.$wrapperEl.css('height', newHeight + "px");
  }

  function updateSlidesOffset() {
    var ymq_swiper = this;
    var slides = ymq_swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      slides[i].ymq_swiperSlideOffset = ymq_swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }

    var ymq_swiper = this;
    var params = ymq_swiper.params;
    var slides = ymq_swiper.slides,
        rtl = ymq_swiper.rtlTranslate;
    if (slides.length === 0) return;
    if (typeof slides[0].ymq_swiperSlideOffset === 'undefined') ymq_swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides

    slides.removeClass(params.slideVisibleClass);
    ymq_swiper.visibleSlidesIndexes = [];
    ymq_swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (offsetCenter + (params.centeredSlides ? ymq_swiper.minTranslate() : 0) - slide.ymq_swiperSlideOffset) / (slide.ymq_swiperSlideSize + params.spaceBetween);

      if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
        var slideBefore = -(offsetCenter - slide.ymq_swiperSlideOffset);
        var slideAfter = slideBefore + ymq_swiper.slidesSizesGrid[i];
        var isVisible = slideBefore >= 0 && slideBefore < ymq_swiper.size - 1 || slideAfter > 1 && slideAfter <= ymq_swiper.size || slideBefore <= 0 && slideAfter >= ymq_swiper.size;

        if (isVisible) {
          ymq_swiper.visibleSlides.push(slide);
          ymq_swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }

      slide.progress = rtl ? -slideProgress : slideProgress;
    }

    ymq_swiper.visibleSlides = $(ymq_swiper.visibleSlides);
  }

  function updateProgress(translate) {
    var ymq_swiper = this;

    if (typeof translate === 'undefined') {
      var multiplier = ymq_swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

      translate = ymq_swiper && ymq_swiper.translate && ymq_swiper.translate * multiplier || 0;
    }

    var params = ymq_swiper.params;
    var translatesDiff = ymq_swiper.maxTranslate() - ymq_swiper.minTranslate();
    var progress = ymq_swiper.progress,
        isBeginning = ymq_swiper.isBeginning,
        isEnd = ymq_swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;

    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - ymq_swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }

    extend(ymq_swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd
    });
    if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) ymq_swiper.updateSlidesProgress(translate);

    if (isBeginning && !wasBeginning) {
      ymq_swiper.emit('reachBeginning toEdge');
    }

    if (isEnd && !wasEnd) {
      ymq_swiper.emit('reachEnd toEdge');
    }

    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      ymq_swiper.emit('fromEdge');
    }

    ymq_swiper.emit('progress', progress);
  }

  function updateSlidesClasses() {
    var ymq_swiper = this;
    var slides = ymq_swiper.slides,
        params = ymq_swiper.params,
        $wrapperEl = ymq_swiper.$wrapperEl,
        activeIndex = ymq_swiper.activeIndex,
        realIndex = ymq_swiper.realIndex;
    var isVirtual = ymq_swiper.virtual && params.virtual.enabled;
    slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
    var activeSlide;

    if (isVirtual) {
      activeSlide = ymq_swiper.$wrapperEl.find("." + params.slideClass + "[data-ymq_swiper-slide-index=\"" + activeIndex + "\"]");
    } else {
      activeSlide = slides.eq(activeIndex);
    } // Active classes


    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-ymq_swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-ymq_swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
      }
    } // Next Slide


    var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    } // Prev Slide


    var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }

    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-ymq_swiper-slide-index=\"" + nextSlide.attr('data-ymq_swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-ymq_swiper-slide-index=\"" + nextSlide.attr('data-ymq_swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
      }

      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-ymq_swiper-slide-index=\"" + prevSlide.attr('data-ymq_swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-ymq_swiper-slide-index=\"" + prevSlide.attr('data-ymq_swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
      }
    }

    ymq_swiper.emitSlidesClasses();
  }

  function updateActiveIndex(newActiveIndex) {
    var ymq_swiper = this;
    var translate = ymq_swiper.rtlTranslate ? ymq_swiper.translate : -ymq_swiper.translate;
    var slidesGrid = ymq_swiper.slidesGrid,
        snapGrid = ymq_swiper.snapGrid,
        params = ymq_swiper.params,
        previousIndex = ymq_swiper.activeIndex,
        previousRealIndex = ymq_swiper.realIndex,
        previousSnapIndex = ymq_swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;

    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      } // Normalize slideIndex


      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
      }
    }

    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }

    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        ymq_swiper.snapIndex = snapIndex;
        ymq_swiper.emit('snapIndexChange');
      }

      return;
    } // Get real index


    var realIndex = parseInt(ymq_swiper.slides.eq(activeIndex).attr('data-ymq_swiper-slide-index') || activeIndex, 10);
    extend(ymq_swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex
    });
    ymq_swiper.emit('activeIndexChange');
    ymq_swiper.emit('snapIndexChange');

    if (previousRealIndex !== realIndex) {
      ymq_swiper.emit('realIndexChange');
    }

    if (ymq_swiper.initialized || ymq_swiper.params.runCallbacksOnInit) {
      ymq_swiper.emit('slideChange');
    }
  }

  function updateClickedSlide(e) {
    var ymq_swiper = this;
    var params = ymq_swiper.params;
    var slide = $(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;
    var slideIndex;

    if (slide) {
      for (var i = 0; i < ymq_swiper.slides.length; i += 1) {
        if (ymq_swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }

    if (slide && slideFound) {
      ymq_swiper.clickedSlide = slide;

      if (ymq_swiper.virtual && ymq_swiper.params.virtual.enabled) {
        ymq_swiper.clickedIndex = parseInt($(slide).attr('data-ymq_swiper-slide-index'), 10);
      } else {
        ymq_swiper.clickedIndex = slideIndex;
      }
    } else {
      ymq_swiper.clickedSlide = undefined;
      ymq_swiper.clickedIndex = undefined;
      return;
    }

    if (params.slideToClickedSlide && ymq_swiper.clickedIndex !== undefined && ymq_swiper.clickedIndex !== ymq_swiper.activeIndex) {
      ymq_swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
  };

  function getymq_swiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? 'x' : 'y';
    }

    var ymq_swiper = this;
    var params = ymq_swiper.params,
        rtl = ymq_swiper.rtlTranslate,
        translate = ymq_swiper.translate,
        $wrapperEl = ymq_swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    if (params.cssMode) {
      return translate;
    }

    var currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  function setTranslate(translate, byController) {
    var ymq_swiper = this;
    var rtl = ymq_swiper.rtlTranslate,
        params = ymq_swiper.params,
        $wrapperEl = ymq_swiper.$wrapperEl,
        wrapperEl = ymq_swiper.wrapperEl,
        progress = ymq_swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (ymq_swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (params.cssMode) {
      wrapperEl[ymq_swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = ymq_swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
    }

    ymq_swiper.previousTranslate = ymq_swiper.translate;
    ymq_swiper.translate = ymq_swiper.isHorizontal() ? x : y; // Check if we need to update progress

    var newProgress;
    var translatesDiff = ymq_swiper.maxTranslate() - ymq_swiper.minTranslate();

    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - ymq_swiper.minTranslate()) / translatesDiff;
    }

    if (newProgress !== progress) {
      ymq_swiper.updateProgress(translate);
    }

    ymq_swiper.emit('setTranslate', ymq_swiper.translate, byController);
  }

  function minTranslate() {
    return -this.snapGrid[0];
  }

  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) {
      translate = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (translateBounds === void 0) {
      translateBounds = true;
    }

    var ymq_swiper = this;
    var params = ymq_swiper.params,
        wrapperEl = ymq_swiper.wrapperEl;

    if (ymq_swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var minTranslate = ymq_swiper.minTranslate();
    var maxTranslate = ymq_swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

    ymq_swiper.updateProgress(newTranslate);

    if (params.cssMode) {
      var isH = ymq_swiper.isHorizontal();

      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;

          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        }
      }

      return true;
    }

    if (speed === 0) {
      ymq_swiper.setTransition(0);
      ymq_swiper.setTranslate(newTranslate);

      if (runCallbacks) {
        ymq_swiper.emit('beforeTransitionStart', speed, internal);
        ymq_swiper.emit('transitionEnd');
      }
    } else {
      ymq_swiper.setTransition(speed);
      ymq_swiper.setTranslate(newTranslate);

      if (runCallbacks) {
        ymq_swiper.emit('beforeTransitionStart', speed, internal);
        ymq_swiper.emit('transitionStart');
      }

      if (!ymq_swiper.animating) {
        ymq_swiper.animating = true;

        if (!ymq_swiper.onTranslateToWrapperTransitionEnd) {
          ymq_swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!ymq_swiper || ymq_swiper.destroyed) return;
            if (e.target !== this) return;
            ymq_swiper.$wrapperEl[0].removeEventListener('transitionend', ymq_swiper.onTranslateToWrapperTransitionEnd);
            ymq_swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', ymq_swiper.onTranslateToWrapperTransitionEnd);
            ymq_swiper.onTranslateToWrapperTransitionEnd = null;
            delete ymq_swiper.onTranslateToWrapperTransitionEnd;

            if (runCallbacks) {
              ymq_swiper.emit('transitionEnd');
            }
          };
        }

        ymq_swiper.$wrapperEl[0].addEventListener('transitionend', ymq_swiper.onTranslateToWrapperTransitionEnd);
        ymq_swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', ymq_swiper.onTranslateToWrapperTransitionEnd);
      }
    }

    return true;
  }

  var translate = {
    getTranslate: getymq_swiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo
  };

  function setTransition(duration, byController) {
    var ymq_swiper = this;

    if (!ymq_swiper.params.cssMode) {
      ymq_swiper.$wrapperEl.transition(duration);
    }

    ymq_swiper.emit('setTransition', duration, byController);
  }

  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var ymq_swiper = this;
    var activeIndex = ymq_swiper.activeIndex,
        params = ymq_swiper.params,
        previousIndex = ymq_swiper.previousIndex;
    if (params.cssMode) return;

    if (params.autoHeight) {
      ymq_swiper.updateAutoHeight();
    }

    var dir = direction;

    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
    }

    ymq_swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        ymq_swiper.emit('slideResetTransitionStart');
        return;
      }

      ymq_swiper.emit('slideChangeTransitionStart');

      if (dir === 'next') {
        ymq_swiper.emit('slideNextTransitionStart');
      } else {
        ymq_swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var ymq_swiper = this;
    var activeIndex = ymq_swiper.activeIndex,
        previousIndex = ymq_swiper.previousIndex,
        params = ymq_swiper.params;
    ymq_swiper.animating = false;
    if (params.cssMode) return;
    ymq_swiper.setTransition(0);
    var dir = direction;

    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
    }

    ymq_swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        ymq_swiper.emit('slideResetTransitionEnd');
        return;
      }

      ymq_swiper.emit('slideChangeTransitionEnd');

      if (dir === 'next') {
        ymq_swiper.emit('slideNextTransitionEnd');
      } else {
        ymq_swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd
  };

  function slideTo(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (typeof index !== 'number' && typeof index !== 'string') {
      throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
    }

    if (typeof index === 'string') {
      /**
       * The `index` argument converted from `string` to `number`.
       * @type {number}
       */
      var indexAsNumber = parseInt(index, 10);
      /**
       * Determines whether the `index` argument is a valid `number`
       * after being converted from the `string` type.
       * @type {boolean}
       */

      var isValidNumber = isFinite(indexAsNumber);

      if (!isValidNumber) {
        throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
      } // Knowing that the converted `index` is a valid number,
      // we can update the original argument's value.


      index = indexAsNumber;
    }

    var ymq_swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    var params = ymq_swiper.params,
        snapGrid = ymq_swiper.snapGrid,
        slidesGrid = ymq_swiper.slidesGrid,
        previousIndex = ymq_swiper.previousIndex,
        activeIndex = ymq_swiper.activeIndex,
        rtl = ymq_swiper.rtlTranslate,
        wrapperEl = ymq_swiper.wrapperEl;

    if (ymq_swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var skip = Math.min(ymq_swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex = skip + Math.floor((slideIndex - skip) / ymq_swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      ymq_swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex]; // Update progress

    ymq_swiper.updateProgress(translate); // Normalize slideIndex

    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        var normalizedTranslate = -Math.floor(translate * 100);
        var normalizedGird = Math.floor(slidesGrid[i] * 100);
        var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGird) {
          slideIndex = i;
        }
      }
    } // Directions locks


    if (ymq_swiper.initialized && slideIndex !== activeIndex) {
      if (!ymq_swiper.allowSlideNext && translate < ymq_swiper.translate && translate < ymq_swiper.minTranslate()) {
        return false;
      }

      if (!ymq_swiper.allowSlidePrev && translate > ymq_swiper.translate && translate > ymq_swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) return false;
      }
    }

    var direction;
    if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

    if (rtl && -translate === ymq_swiper.translate || !rtl && translate === ymq_swiper.translate) {
      ymq_swiper.updateActiveIndex(slideIndex); // Update Height

      if (params.autoHeight) {
        ymq_swiper.updateAutoHeight();
      }

      ymq_swiper.updateSlidesClasses();

      if (params.effect !== 'slide') {
        ymq_swiper.setTranslate(translate);
      }

      if (direction !== 'reset') {
        ymq_swiper.transitionStart(runCallbacks, direction);
        ymq_swiper.transitionEnd(runCallbacks, direction);
      }

      return false;
    }

    if (params.cssMode) {
      var isH = ymq_swiper.isHorizontal();
      var t = -translate;

      if (rtl) {
        t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
      }

      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;

          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        }
      }

      return true;
    }

    if (speed === 0) {
      ymq_swiper.setTransition(0);
      ymq_swiper.setTranslate(translate);
      ymq_swiper.updateActiveIndex(slideIndex);
      ymq_swiper.updateSlidesClasses();
      ymq_swiper.emit('beforeTransitionStart', speed, internal);
      ymq_swiper.transitionStart(runCallbacks, direction);
      ymq_swiper.transitionEnd(runCallbacks, direction);
    } else {
      ymq_swiper.setTransition(speed);
      ymq_swiper.setTranslate(translate);
      ymq_swiper.updateActiveIndex(slideIndex);
      ymq_swiper.updateSlidesClasses();
      ymq_swiper.emit('beforeTransitionStart', speed, internal);
      ymq_swiper.transitionStart(runCallbacks, direction);

      if (!ymq_swiper.animating) {
        ymq_swiper.animating = true;

        if (!ymq_swiper.onSlideToWrapperTransitionEnd) {
          ymq_swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!ymq_swiper || ymq_swiper.destroyed) return;
            if (e.target !== this) return;
            ymq_swiper.$wrapperEl[0].removeEventListener('transitionend', ymq_swiper.onSlideToWrapperTransitionEnd);
            ymq_swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', ymq_swiper.onSlideToWrapperTransitionEnd);
            ymq_swiper.onSlideToWrapperTransitionEnd = null;
            delete ymq_swiper.onSlideToWrapperTransitionEnd;
            ymq_swiper.transitionEnd(runCallbacks, direction);
          };
        }

        ymq_swiper.$wrapperEl[0].addEventListener('transitionend', ymq_swiper.onSlideToWrapperTransitionEnd);
        ymq_swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', ymq_swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var ymq_swiper = this;
    var newIndex = index;

    if (ymq_swiper.params.loop) {
      newIndex += ymq_swiper.loopedSlides;
    }

    return ymq_swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var ymq_swiper = this;
    var params = ymq_swiper.params,
        animating = ymq_swiper.animating;
    var increment = ymq_swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      ymq_swiper.loopFix(); // eslint-disable-next-line

      ymq_swiper._clientLeft = ymq_swiper.$wrapperEl[0].clientLeft;
    }

    return ymq_swiper.slideTo(ymq_swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var ymq_swiper = this;
    var params = ymq_swiper.params,
        animating = ymq_swiper.animating,
        snapGrid = ymq_swiper.snapGrid,
        slidesGrid = ymq_swiper.slidesGrid,
        rtlTranslate = ymq_swiper.rtlTranslate;

    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      ymq_swiper.loopFix(); // eslint-disable-next-line

      ymq_swiper._clientLeft = ymq_swiper.$wrapperEl[0].clientLeft;
    }

    var translate = rtlTranslate ? ymq_swiper.translate : -ymq_swiper.translate;

    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }

    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

    if (typeof prevSnap === 'undefined' && params.cssMode) {
      snapGrid.forEach(function (snap) {
        if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
      });
    }

    var prevIndex;

    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = ymq_swiper.activeIndex - 1;
    }

    return ymq_swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var ymq_swiper = this;
    return ymq_swiper.slideTo(ymq_swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (threshold === void 0) {
      threshold = 0.5;
    }

    var ymq_swiper = this;
    var index = ymq_swiper.activeIndex;
    var skip = Math.min(ymq_swiper.params.slidesPerGroupSkip, index);
    var snapIndex = skip + Math.floor((index - skip) / ymq_swiper.params.slidesPerGroup);
    var translate = ymq_swiper.rtlTranslate ? ymq_swiper.translate : -ymq_swiper.translate;

    if (translate >= ymq_swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      var currentSnap = ymq_swiper.snapGrid[snapIndex];
      var nextSnap = ymq_swiper.snapGrid[snapIndex + 1];

      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += ymq_swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      var prevSnap = ymq_swiper.snapGrid[snapIndex - 1];
      var _currentSnap = ymq_swiper.snapGrid[snapIndex];

      if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
        index -= ymq_swiper.params.slidesPerGroup;
      }
    }

    index = Math.max(index, 0);
    index = Math.min(index, ymq_swiper.slidesGrid.length - 1);
    return ymq_swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide() {
    var ymq_swiper = this;
    var params = ymq_swiper.params,
        $wrapperEl = ymq_swiper.$wrapperEl;
    var slidesPerView = params.slidesPerView === 'auto' ? ymq_swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = ymq_swiper.clickedIndex;
    var realIndex;

    if (params.loop) {
      if (ymq_swiper.animating) return;
      realIndex = parseInt($(ymq_swiper.clickedSlide).attr('data-ymq_swiper-slide-index'), 10);

      if (params.centeredSlides) {
        if (slideToIndex < ymq_swiper.loopedSlides - slidesPerView / 2 || slideToIndex > ymq_swiper.slides.length - ymq_swiper.loopedSlides + slidesPerView / 2) {
          ymq_swiper.loopFix();
          slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-ymq_swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
          nextTick(function () {
            ymq_swiper.slideTo(slideToIndex);
          });
        } else {
          ymq_swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > ymq_swiper.slides.length - slidesPerView) {
        ymq_swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-ymq_swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        nextTick(function () {
          ymq_swiper.slideTo(slideToIndex);
        });
      } else {
        ymq_swiper.slideTo(slideToIndex);
      }
    } else {
      ymq_swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
  };

  function loopCreate() {
    var ymq_swiper = this;
    var document = getDocument();
    var params = ymq_swiper.params,
        $wrapperEl = ymq_swiper.$wrapperEl; // Remove duplicated slides

    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
    var slides = $wrapperEl.children("." + params.slideClass);

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
          $wrapperEl.append(blankNode);
        }

        slides = $wrapperEl.children("." + params.slideClass);
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    ymq_swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    ymq_swiper.loopedSlides += params.loopAdditionalSlides;

    if (ymq_swiper.loopedSlides > slides.length) {
      ymq_swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (el, index) {
      var slide = $(el);

      if (index < ymq_swiper.loopedSlides) {
        appendSlides.push(el);
      }

      if (index < slides.length && index >= slides.length - ymq_swiper.loopedSlides) {
        prependSlides.push(el);
      }

      slide.attr('data-ymq_swiper-slide-index', index);
    });

    for (var _i = 0; _i < appendSlides.length; _i += 1) {
      $wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }

    for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
      $wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix() {
    var ymq_swiper = this;
    ymq_swiper.emit('beforeLoopFix');
    var activeIndex = ymq_swiper.activeIndex,
        slides = ymq_swiper.slides,
        loopedSlides = ymq_swiper.loopedSlides,
        allowSlidePrev = ymq_swiper.allowSlidePrev,
        allowSlideNext = ymq_swiper.allowSlideNext,
        snapGrid = ymq_swiper.snapGrid,
        rtl = ymq_swiper.rtlTranslate;
    var newIndex;
    ymq_swiper.allowSlidePrev = true;
    ymq_swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - ymq_swiper.getTranslate(); // Fix For Negative Oversliding

    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = ymq_swiper.slideTo(newIndex, 0, false, true);

      if (slideChanged && diff !== 0) {
        ymq_swiper.setTranslate((rtl ? -ymq_swiper.translate : ymq_swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;

      var _slideChanged = ymq_swiper.slideTo(newIndex, 0, false, true);

      if (_slideChanged && diff !== 0) {
        ymq_swiper.setTranslate((rtl ? -ymq_swiper.translate : ymq_swiper.translate) - diff);
      }
    }

    ymq_swiper.allowSlidePrev = allowSlidePrev;
    ymq_swiper.allowSlideNext = allowSlideNext;
    ymq_swiper.emit('loopFix');
  }

  function loopDestroy() {
    var ymq_swiper = this;
    var $wrapperEl = ymq_swiper.$wrapperEl,
        params = ymq_swiper.params,
        slides = ymq_swiper.slides;
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
    slides.removeAttr('data-ymq_swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
  };

  function setGrabCursor(moving) {
    var ymq_swiper = this;
    if (ymq_swiper.support.touch || !ymq_swiper.params.simulateTouch || ymq_swiper.params.watchOverflow && ymq_swiper.isLocked || ymq_swiper.params.cssMode) return;
    var el = ymq_swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor() {
    var ymq_swiper = this;

    if (ymq_swiper.support.touch || ymq_swiper.params.watchOverflow && ymq_swiper.isLocked || ymq_swiper.params.cssMode) {
      return;
    }

    ymq_swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
  };

  function appendSlide(slides) {
    var ymq_swiper = this;
    var $wrapperEl = ymq_swiper.$wrapperEl,
        params = ymq_swiper.params;

    if (params.loop) {
      ymq_swiper.loopDestroy();
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.append(slides[i]);
      }
    } else {
      $wrapperEl.append(slides);
    }

    if (params.loop) {
      ymq_swiper.loopCreate();
    }

    if (!(params.observer && ymq_swiper.support.observer)) {
      ymq_swiper.update();
    }
  }

  function prependSlide(slides) {
    var ymq_swiper = this;
    var params = ymq_swiper.params,
        $wrapperEl = ymq_swiper.$wrapperEl,
        activeIndex = ymq_swiper.activeIndex;

    if (params.loop) {
      ymq_swiper.loopDestroy();
    }

    var newActiveIndex = activeIndex + 1;

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.prepend(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }

    if (params.loop) {
      ymq_swiper.loopCreate();
    }

    if (!(params.observer && ymq_swiper.support.observer)) {
      ymq_swiper.update();
    }

    ymq_swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide(index, slides) {
    var ymq_swiper = this;
    var $wrapperEl = ymq_swiper.$wrapperEl,
        params = ymq_swiper.params,
        activeIndex = ymq_swiper.activeIndex;
    var activeIndexBuffer = activeIndex;

    if (params.loop) {
      activeIndexBuffer -= ymq_swiper.loopedSlides;
      ymq_swiper.loopDestroy();
      ymq_swiper.slides = $wrapperEl.children("." + params.slideClass);
    }

    var baseLength = ymq_swiper.slides.length;

    if (index <= 0) {
      ymq_swiper.prependSlide(slides);
      return;
    }

    if (index >= baseLength) {
      ymq_swiper.appendSlide(slides);
      return;
    }

    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];

    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = ymq_swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var _i = 0; _i < slides.length; _i += 1) {
        if (slides[_i]) $wrapperEl.append(slides[_i]);
      }

      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
      $wrapperEl.append(slidesBuffer[_i2]);
    }

    if (params.loop) {
      ymq_swiper.loopCreate();
    }

    if (!(params.observer && ymq_swiper.support.observer)) {
      ymq_swiper.update();
    }

    if (params.loop) {
      ymq_swiper.slideTo(newActiveIndex + ymq_swiper.loopedSlides, 0, false);
    } else {
      ymq_swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide(slidesIndexes) {
    var ymq_swiper = this;
    var params = ymq_swiper.params,
        $wrapperEl = ymq_swiper.$wrapperEl,
        activeIndex = ymq_swiper.activeIndex;
    var activeIndexBuffer = activeIndex;

    if (params.loop) {
      activeIndexBuffer -= ymq_swiper.loopedSlides;
      ymq_swiper.loopDestroy();
      ymq_swiper.slides = $wrapperEl.children("." + params.slideClass);
    }

    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (ymq_swiper.slides[indexToRemove]) ymq_swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }

      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (ymq_swiper.slides[indexToRemove]) ymq_swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      ymq_swiper.loopCreate();
    }

    if (!(params.observer && ymq_swiper.support.observer)) {
      ymq_swiper.update();
    }

    if (params.loop) {
      ymq_swiper.slideTo(newActiveIndex + ymq_swiper.loopedSlides, 0, false);
    } else {
      ymq_swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides() {
    var ymq_swiper = this;
    var slidesIndexes = [];

    for (var i = 0; i < ymq_swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }

    ymq_swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides
  };

  function onTouchStart(event) {
    var ymq_swiper = this;
    var document = getDocument();
    var window = getWindow();
    var data = ymq_swiper.touchEventsData;
    var params = ymq_swiper.params,
        touches = ymq_swiper.touches;

    if (ymq_swiper.animating && params.preventInteractionOnTransition) {
      return;
    }

    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    var $targetEl = $(e.target);

    if (params.touchEventsTarget === 'wrapper') {
      if (!$targetEl.closest(ymq_swiper.wrapperEl).length) return;
    }

    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet

    var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
      $targetEl = $(event.path[0]);
    }

    if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
      ymq_swiper.allowClick = true;
      return;
    }

    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === 'prevent') {
        event.preventDefault();
      } else {
        return;
      }
    }

    extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    ymq_swiper.allowClick = true;
    ymq_swiper.updateSize();
    ymq_swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;

    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($targetEl.is(data.formElements)) preventDefault = false;

      if (document.activeElement && $(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
        document.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && ymq_swiper.allowTouchMove && params.touchStartPreventDefault;

      if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
        e.preventDefault();
      }
    }

    ymq_swiper.emit('touchStart', e);
  }

  function onTouchMove(event) {
    var document = getDocument();
    var ymq_swiper = this;
    var data = ymq_swiper.touchEventsData;
    var params = ymq_swiper.params,
        touches = ymq_swiper.touches,
        rtl = ymq_swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;

    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        ymq_swiper.emit('touchMoveOpposite', e);
      }

      return;
    }

    if (data.isTouchEvent && e.type !== 'touchmove') return;
    var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

    if (e.preventedByNestedymq_swiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }

    if (!ymq_swiper.allowTouchMove) {
      // isMoved = true;
      ymq_swiper.allowClick = false;

      if (data.isTouched) {
        extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }

      return;
    }

    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (ymq_swiper.isVertical()) {
        // Vertical
        if (pageY < touches.startY && ymq_swiper.translate <= ymq_swiper.maxTranslate() || pageY > touches.startY && ymq_swiper.translate >= ymq_swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && ymq_swiper.translate <= ymq_swiper.maxTranslate() || pageX > touches.startX && ymq_swiper.translate >= ymq_swiper.minTranslate()) {
        return;
      }
    }

    if (data.isTouchEvent && document.activeElement) {
      if (e.target === document.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        ymq_swiper.allowClick = false;
        return;
      }
    }

    if (data.allowTouchCallbacks) {
      ymq_swiper.emit('touchMove', e);
    }

    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (ymq_swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < ymq_swiper.params.threshold) return;

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;

      if (ymq_swiper.isHorizontal() && touches.currentY === touches.startY || ymq_swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = ymq_swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }

    if (data.isScrolling) {
      ymq_swiper.emit('touchMoveOpposite', e);
    }

    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }

    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }

    if (!data.startMoving) {
      return;
    }

    ymq_swiper.allowClick = false;

    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }

    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        ymq_swiper.loopFix();
      }

      data.startTranslate = ymq_swiper.getTranslate();
      ymq_swiper.setTransition(0);

      if (ymq_swiper.animating) {
        ymq_swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }

      data.allowMomentumBounce = false; // Grab Cursor

      if (params.grabCursor && (ymq_swiper.allowSlideNext === true || ymq_swiper.allowSlidePrev === true)) {
        ymq_swiper.setGrabCursor(true);
      }

      ymq_swiper.emit('sliderFirstMove', e);
    }

    ymq_swiper.emit('sliderMove', e);
    data.isMoved = true;
    var diff = ymq_swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    ymq_swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    var disableParentymq_swiper = true;
    var resistanceRatio = params.resistanceRatio;

    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }

    if (diff > 0 && data.currentTranslate > ymq_swiper.minTranslate()) {
      disableParentymq_swiper = false;
      if (params.resistance) data.currentTranslate = ymq_swiper.minTranslate() - 1 + Math.pow(-ymq_swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
    } else if (diff < 0 && data.currentTranslate < ymq_swiper.maxTranslate()) {
      disableParentymq_swiper = false;
      if (params.resistance) data.currentTranslate = ymq_swiper.maxTranslate() + 1 - Math.pow(ymq_swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
    }

    if (disableParentymq_swiper) {
      e.preventedByNestedymq_swiper = true;
    } // Directions locks


    if (!ymq_swiper.allowSlideNext && ymq_swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }

    if (!ymq_swiper.allowSlidePrev && ymq_swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }

    if (!ymq_swiper.allowSlidePrev && !ymq_swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    } // Threshold


    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = ymq_swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger || params.cssMode) return; // Update active index in free mode

    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      ymq_swiper.updateActiveIndex();
      ymq_swiper.updateSlidesClasses();
    }

    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[ymq_swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime
        });
      }

      data.velocities.push({
        position: touches[ymq_swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: now()
      });
    } // Update progress


    ymq_swiper.updateProgress(data.currentTranslate); // Update translate

    ymq_swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd(event) {
    var ymq_swiper = this;
    var data = ymq_swiper.touchEventsData;
    var params = ymq_swiper.params,
        touches = ymq_swiper.touches,
        rtl = ymq_swiper.rtlTranslate,
        $wrapperEl = ymq_swiper.$wrapperEl,
        slidesGrid = ymq_swiper.slidesGrid,
        snapGrid = ymq_swiper.snapGrid;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;

    if (data.allowTouchCallbacks) {
      ymq_swiper.emit('touchEnd', e);
    }

    data.allowTouchCallbacks = false;

    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        ymq_swiper.setGrabCursor(false);
      }

      data.isMoved = false;
      data.startMoving = false;
      return;
    } // Return Grab Cursor


    if (params.grabCursor && data.isMoved && data.isTouched && (ymq_swiper.allowSlideNext === true || ymq_swiper.allowSlidePrev === true)) {
      ymq_swiper.setGrabCursor(false);
    } // Time diff


    var touchEndTime = now();
    var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

    if (ymq_swiper.allowClick) {
      ymq_swiper.updateClickedSlide(e);
      ymq_swiper.emit('tap click', e);

      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        ymq_swiper.emit('doubleTap doubleClick', e);
      }
    }

    data.lastClickTime = now();
    nextTick(function () {
      if (!ymq_swiper.destroyed) ymq_swiper.allowClick = true;
    });

    if (!data.isTouched || !data.isMoved || !ymq_swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }

    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;

    if (params.followFinger) {
      currentPos = rtl ? ymq_swiper.translate : -ymq_swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.cssMode) {
      return;
    }

    if (params.freeMode) {
      if (currentPos < -ymq_swiper.minTranslate()) {
        ymq_swiper.slideTo(ymq_swiper.activeIndex);
        return;
      }

      if (currentPos > -ymq_swiper.maxTranslate()) {
        if (ymq_swiper.slides.length < snapGrid.length) {
          ymq_swiper.slideTo(snapGrid.length - 1);
        } else {
          ymq_swiper.slideTo(ymq_swiper.slides.length - 1);
        }

        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();
          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          ymq_swiper.velocity = distance / time;
          ymq_swiper.velocity /= 2;

          if (Math.abs(ymq_swiper.velocity) < params.freeModeMinimumVelocity) {
            ymq_swiper.velocity = 0;
          } // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.


          if (time > 150 || now() - lastMoveEvent.time > 300) {
            ymq_swiper.velocity = 0;
          }
        } else {
          ymq_swiper.velocity = 0;
        }

        ymq_swiper.velocity *= params.freeModeMomentumVelocityRatio;
        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = ymq_swiper.velocity * momentumDuration;
        var newPosition = ymq_swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(ymq_swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;

        if (newPosition < ymq_swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + ymq_swiper.maxTranslate() < -bounceAmount) {
              newPosition = ymq_swiper.maxTranslate() - bounceAmount;
            }

            afterBouncePosition = ymq_swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = ymq_swiper.maxTranslate();
          }

          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > ymq_swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - ymq_swiper.minTranslate() > bounceAmount) {
              newPosition = ymq_swiper.minTranslate() + bounceAmount;
            }

            afterBouncePosition = ymq_swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = ymq_swiper.minTranslate();
          }

          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeModeSticky) {
          var nextSlide;

          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || ymq_swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }

          newPosition = -newPosition;
        }

        if (needsLoopFix) {
          ymq_swiper.once('transitionEnd', function () {
            ymq_swiper.loopFix();
          });
        } // Fix duration


        if (ymq_swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - ymq_swiper.translate) / ymq_swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - ymq_swiper.translate) / ymq_swiper.velocity);
          }

          if (params.freeModeSticky) {
            // If freeModeSticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - ymq_swiper.translate);
            var currentSlideSize = ymq_swiper.slidesSizesGrid[ymq_swiper.activeIndex];

            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeModeSticky) {
          ymq_swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          ymq_swiper.updateProgress(afterBouncePosition);
          ymq_swiper.setTransition(momentumDuration);
          ymq_swiper.setTranslate(newPosition);
          ymq_swiper.transitionStart(true, ymq_swiper.swipeDirection);
          ymq_swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!ymq_swiper || ymq_swiper.destroyed || !data.allowMomentumBounce) return;
            ymq_swiper.emit('momentumBounce');
            ymq_swiper.setTransition(params.speed);
            setTimeout(function () {
              ymq_swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(function () {
                if (!ymq_swiper || ymq_swiper.destroyed) return;
                ymq_swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (ymq_swiper.velocity) {
          ymq_swiper.updateProgress(newPosition);
          ymq_swiper.setTransition(momentumDuration);
          ymq_swiper.setTranslate(newPosition);
          ymq_swiper.transitionStart(true, ymq_swiper.swipeDirection);

          if (!ymq_swiper.animating) {
            ymq_swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!ymq_swiper || ymq_swiper.destroyed) return;
              ymq_swiper.transitionEnd();
            });
          }
        } else {
          ymq_swiper.emit('_freeModeNoMomentumRelease');
          ymq_swiper.updateProgress(newPosition);
        }

        ymq_swiper.updateActiveIndex();
        ymq_swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        ymq_swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        ymq_swiper.emit('_freeModeNoMomentumRelease');
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        ymq_swiper.updateProgress();
        ymq_swiper.updateActiveIndex();
        ymq_swiper.updateSlidesClasses();
      }

      return;
    } // Find current slide


    var stopIndex = 0;
    var groupSize = ymq_swiper.slidesSizesGrid[0];

    for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (typeof slidesGrid[i + _increment] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + _increment] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    } // Find current slide size


    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        ymq_swiper.slideTo(ymq_swiper.activeIndex);
        return;
      }

      if (ymq_swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) ymq_swiper.slideTo(stopIndex + increment);else ymq_swiper.slideTo(stopIndex);
      }

      if (ymq_swiper.swipeDirection === 'prev') {
        if (ratio > 1 - params.longSwipesRatio) ymq_swiper.slideTo(stopIndex + increment);else ymq_swiper.slideTo(stopIndex);
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        ymq_swiper.slideTo(ymq_swiper.activeIndex);
        return;
      }

      var isNavButtonTarget = ymq_swiper.navigation && (e.target === ymq_swiper.navigation.nextEl || e.target === ymq_swiper.navigation.prevEl);

      if (!isNavButtonTarget) {
        if (ymq_swiper.swipeDirection === 'next') {
          ymq_swiper.slideTo(stopIndex + increment);
        }

        if (ymq_swiper.swipeDirection === 'prev') {
          ymq_swiper.slideTo(stopIndex);
        }
      } else if (e.target === ymq_swiper.navigation.nextEl) {
        ymq_swiper.slideTo(stopIndex + increment);
      } else {
        ymq_swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize() {
    var ymq_swiper = this;
    var params = ymq_swiper.params,
        el = ymq_swiper.el;
    if (el && el.offsetWidth === 0) return; // Breakpoints

    if (params.breakpoints) {
      ymq_swiper.setBreakpoint();
    } // Save locks


    var allowSlideNext = ymq_swiper.allowSlideNext,
        allowSlidePrev = ymq_swiper.allowSlidePrev,
        snapGrid = ymq_swiper.snapGrid; // Disable locks on resize

    ymq_swiper.allowSlideNext = true;
    ymq_swiper.allowSlidePrev = true;
    ymq_swiper.updateSize();
    ymq_swiper.updateSlides();
    ymq_swiper.updateSlidesClasses();

    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && ymq_swiper.isEnd && !ymq_swiper.isBeginning && !ymq_swiper.params.centeredSlides) {
      ymq_swiper.slideTo(ymq_swiper.slides.length - 1, 0, false, true);
    } else {
      ymq_swiper.slideTo(ymq_swiper.activeIndex, 0, false, true);
    }

    if (ymq_swiper.autoplay && ymq_swiper.autoplay.running && ymq_swiper.autoplay.paused) {
      ymq_swiper.autoplay.run();
    } // Return locks after resize


    ymq_swiper.allowSlidePrev = allowSlidePrev;
    ymq_swiper.allowSlideNext = allowSlideNext;

    if (ymq_swiper.params.watchOverflow && snapGrid !== ymq_swiper.snapGrid) {
      ymq_swiper.checkOverflow();
    }
  }

  function onClick(e) {
    var ymq_swiper = this;

    if (!ymq_swiper.allowClick) {
      if (ymq_swiper.params.preventClicks) e.preventDefault();

      if (ymq_swiper.params.preventClicksPropagation && ymq_swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function onScroll() {
    var ymq_swiper = this;
    var wrapperEl = ymq_swiper.wrapperEl,
        rtlTranslate = ymq_swiper.rtlTranslate;
    ymq_swiper.previousTranslate = ymq_swiper.translate;

    if (ymq_swiper.isHorizontal()) {
      if (rtlTranslate) {
        ymq_swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
      } else {
        ymq_swiper.translate = -wrapperEl.scrollLeft;
      }
    } else {
      ymq_swiper.translate = -wrapperEl.scrollTop;
    } // eslint-disable-next-line


    if (ymq_swiper.translate === -0) ymq_swiper.translate = 0;
    ymq_swiper.updateActiveIndex();
    ymq_swiper.updateSlidesClasses();
    var newProgress;
    var translatesDiff = ymq_swiper.maxTranslate() - ymq_swiper.minTranslate();

    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (ymq_swiper.translate - ymq_swiper.minTranslate()) / translatesDiff;
    }

    if (newProgress !== ymq_swiper.progress) {
      ymq_swiper.updateProgress(rtlTranslate ? -ymq_swiper.translate : ymq_swiper.translate);
    }

    ymq_swiper.emit('setTranslate', ymq_swiper.translate, false);
  }

  var dummyEventAttached = false;

  function dummyEventListener() {}

  function attachEvents() {
    var ymq_swiper = this;
    var document = getDocument();
    var params = ymq_swiper.params,
        touchEvents = ymq_swiper.touchEvents,
        el = ymq_swiper.el,
        wrapperEl = ymq_swiper.wrapperEl,
        device = ymq_swiper.device,
        support = ymq_swiper.support;
    ymq_swiper.onTouchStart = onTouchStart.bind(ymq_swiper);
    ymq_swiper.onTouchMove = onTouchMove.bind(ymq_swiper);
    ymq_swiper.onTouchEnd = onTouchEnd.bind(ymq_swiper);

    if (params.cssMode) {
      ymq_swiper.onScroll = onScroll.bind(ymq_swiper);
    }

    ymq_swiper.onClick = onClick.bind(ymq_swiper);
    var capture = !!params.nested; // Touch Events

    if (!support.touch && support.pointerEvents) {
      el.addEventListener(touchEvents.start, ymq_swiper.onTouchStart, false);
      document.addEventListener(touchEvents.move, ymq_swiper.onTouchMove, capture);
      document.addEventListener(touchEvents.end, ymq_swiper.onTouchEnd, false);
    } else {
      if (support.touch) {
        var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el.addEventListener(touchEvents.start, ymq_swiper.onTouchStart, passiveListener);
        el.addEventListener(touchEvents.move, ymq_swiper.onTouchMove, support.passiveListener ? {
          passive: false,
          capture: capture
        } : capture);
        el.addEventListener(touchEvents.end, ymq_swiper.onTouchEnd, passiveListener);

        if (touchEvents.cancel) {
          el.addEventListener(touchEvents.cancel, ymq_swiper.onTouchEnd, passiveListener);
        }

        if (!dummyEventAttached) {
          document.addEventListener('touchstart', dummyEventListener);
          dummyEventAttached = true;
        }
      }

      if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
        el.addEventListener('mousedown', ymq_swiper.onTouchStart, false);
        document.addEventListener('mousemove', ymq_swiper.onTouchMove, capture);
        document.addEventListener('mouseup', ymq_swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      el.addEventListener('click', ymq_swiper.onClick, true);
    }

    if (params.cssMode) {
      wrapperEl.addEventListener('scroll', ymq_swiper.onScroll);
    } // Resize handler


    if (params.updateOnWindowResize) {
      ymq_swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
    } else {
      ymq_swiper.on('observerUpdate', onResize, true);
    }
  }

  function detachEvents() {
    var ymq_swiper = this;
    var document = getDocument();
    var params = ymq_swiper.params,
        touchEvents = ymq_swiper.touchEvents,
        el = ymq_swiper.el,
        wrapperEl = ymq_swiper.wrapperEl,
        device = ymq_swiper.device,
        support = ymq_swiper.support;
    var capture = !!params.nested; // Touch Events

    if (!support.touch && support.pointerEvents) {
      el.removeEventListener(touchEvents.start, ymq_swiper.onTouchStart, false);
      document.removeEventListener(touchEvents.move, ymq_swiper.onTouchMove, capture);
      document.removeEventListener(touchEvents.end, ymq_swiper.onTouchEnd, false);
    } else {
      if (support.touch) {
        var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el.removeEventListener(touchEvents.start, ymq_swiper.onTouchStart, passiveListener);
        el.removeEventListener(touchEvents.move, ymq_swiper.onTouchMove, capture);
        el.removeEventListener(touchEvents.end, ymq_swiper.onTouchEnd, passiveListener);

        if (touchEvents.cancel) {
          el.removeEventListener(touchEvents.cancel, ymq_swiper.onTouchEnd, passiveListener);
        }
      }

      if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
        el.removeEventListener('mousedown', ymq_swiper.onTouchStart, false);
        document.removeEventListener('mousemove', ymq_swiper.onTouchMove, capture);
        document.removeEventListener('mouseup', ymq_swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      el.removeEventListener('click', ymq_swiper.onClick, true);
    }

    if (params.cssMode) {
      wrapperEl.removeEventListener('scroll', ymq_swiper.onScroll);
    } // Resize handler


    ymq_swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
  };

  function setBreakpoint() {
    var ymq_swiper = this;
    var activeIndex = ymq_swiper.activeIndex,
        initialized = ymq_swiper.initialized,
        _ymq_swiper$loopedSlides = ymq_swiper.loopedSlides,
        loopedSlides = _ymq_swiper$loopedSlides === void 0 ? 0 : _ymq_swiper$loopedSlides,
        params = ymq_swiper.params,
        $el = ymq_swiper.$el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

    var breakpoint = ymq_swiper.getBreakpoint(breakpoints, ymq_swiper.params.breakpointsBase, ymq_swiper.el);

    if (breakpoint && ymq_swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') return;

          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || ymq_swiper.originalParams;
      var wasMultiRow = params.slidesPerColumn > 1;
      var isMultiRow = breakpointParams.slidesPerColumn > 1;

      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
        ymq_swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(params.containerModifierClass + "multirow");

        if (breakpointParams.slidesPerColumnFill === 'column') {
          $el.addClass(params.containerModifierClass + "multirow-column");
        }

        ymq_swiper.emitContainerClasses();
      }

      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        ymq_swiper.changeDirection();
      }

      extend(ymq_swiper.params, breakpointParams);
      extend(ymq_swiper, {
        allowTouchMove: ymq_swiper.params.allowTouchMove,
        allowSlideNext: ymq_swiper.params.allowSlideNext,
        allowSlidePrev: ymq_swiper.params.allowSlidePrev
      });
      ymq_swiper.currentBreakpoint = breakpoint;
      ymq_swiper.emit('_beforeBreakpoint', breakpointParams);

      if (needsReLoop && initialized) {
        ymq_swiper.loopDestroy();
        ymq_swiper.loopCreate();
        ymq_swiper.updateSlides();
        ymq_swiper.slideTo(activeIndex - loopedSlides + ymq_swiper.loopedSlides, 0, false);
      }

      ymq_swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = 'window';
    }

    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    var breakpoint = false;
    var window = getWindow();
    var currentWidth = base === 'window' ? window.innerWidth : containerEl.clientWidth;
    var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    var points = Object.keys(breakpoints).map(function (point) {
      if (typeof point === 'string' && point.indexOf('@') === 0) {
        var minRatio = parseFloat(point.substr(1));
        var value = currentHeight * minRatio;
        return {
          value: value,
          point: point
        };
      }

      return {
        value: point,
        point: point
      };
    });
    points.sort(function (a, b) {
      return parseInt(a.value, 10) - parseInt(b.value, 10);
    });

    for (var i = 0; i < points.length; i += 1) {
      var _points$i = points[i],
          point = _points$i.point,
          value = _points$i.value;

      if (value <= currentWidth) {
        breakpoint = point;
      }
    }

    return breakpoint || 'max';
  }

  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint
  };

  function prepareClasses(entries, prefix) {
    var resultClasses = [];
    entries.forEach(function (item) {
      if (typeof item === 'object') {
        Object.keys(item).forEach(function (classNames) {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === 'string') {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }

  function addClasses() {
    var ymq_swiper = this;
    var classNames = ymq_swiper.classNames,
        params = ymq_swiper.params,
        rtl = ymq_swiper.rtl,
        $el = ymq_swiper.$el,
        device = ymq_swiper.device,
        support = ymq_swiper.support; // prettier-ignore

    var suffixes = prepareClasses(['initialized', params.direction, {
      'pointer-events': support.pointerEvents && !support.touch
    }, {
      'free-mode': params.freeMode
    }, {
      'autoheight': params.autoHeight
    }, {
      'rtl': rtl
    }, {
      'multirow': params.slidesPerColumn > 1
    }, {
      'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
    }, {
      'android': device.android
    }, {
      'ios': device.ios
    }, {
      'css-mode': params.cssMode
    }], params.containerModifierClass);
    classNames.push.apply(classNames, suffixes);
    $el.addClass([].concat(classNames).join(' '));
    ymq_swiper.emitContainerClasses();
  }

  function removeClasses() {
    var ymq_swiper = this;
    var $el = ymq_swiper.$el,
        classNames = ymq_swiper.classNames;
    $el.removeClass(classNames.join(' '));
    ymq_swiper.emitContainerClasses();
  }

  var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
  };

  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var window = getWindow();
    var image;

    function onReady() {
      if (callback) callback();
    }

    var isPicture = $(imageEl).parent('picture')[0];

    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window.Image();
        image.onload = onReady;
        image.onerror = onReady;

        if (sizes) {
          image.sizes = sizes;
        }

        if (srcset) {
          image.srcset = srcset;
        }

        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages() {
    var ymq_swiper = this;
    ymq_swiper.imagesToLoad = ymq_swiper.$el.find('img');

    function onReady() {
      if (typeof ymq_swiper === 'undefined' || ymq_swiper === null || !ymq_swiper || ymq_swiper.destroyed) return;
      if (ymq_swiper.imagesLoaded !== undefined) ymq_swiper.imagesLoaded += 1;

      if (ymq_swiper.imagesLoaded === ymq_swiper.imagesToLoad.length) {
        if (ymq_swiper.params.updateOnImagesReady) ymq_swiper.update();
        ymq_swiper.emit('imagesReady');
      }
    }

    for (var i = 0; i < ymq_swiper.imagesToLoad.length; i += 1) {
      var imageEl = ymq_swiper.imagesToLoad[i];
      ymq_swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages
  };

  function checkOverflow() {
    var ymq_swiper = this;
    var params = ymq_swiper.params;
    var wasLocked = ymq_swiper.isLocked;
    var lastSlidePosition = ymq_swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (ymq_swiper.slides.length - 1) + ymq_swiper.slides[0].offsetWidth * ymq_swiper.slides.length;

    if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
      ymq_swiper.isLocked = lastSlidePosition <= ymq_swiper.size;
    } else {
      ymq_swiper.isLocked = ymq_swiper.snapGrid.length === 1;
    }

    ymq_swiper.allowSlideNext = !ymq_swiper.isLocked;
    ymq_swiper.allowSlidePrev = !ymq_swiper.isLocked; // events

    if (wasLocked !== ymq_swiper.isLocked) ymq_swiper.emit(ymq_swiper.isLocked ? 'lock' : 'unlock');

    if (wasLocked && wasLocked !== ymq_swiper.isLocked) {
      ymq_swiper.isEnd = false;
      if (ymq_swiper.navigation) ymq_swiper.navigation.update();
    }
  }

  var checkOverflow$1 = {
    checkOverflow: checkOverflow
  };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: false,
    nested: false,
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable ymq_swiper and hide navigation when container not overflow
    watchOverflow: false,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'ymq_swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: 'ymq_swiper-container-',
    // NEW
    slideClass: 'ymq_swiper-slide',
    slideBlankClass: 'ymq_swiper-slide-invisible-blank',
    slideActiveClass: 'ymq_swiper-slide-active',
    slideDuplicateActiveClass: 'ymq_swiper-slide-duplicate-active',
    slideVisibleClass: 'ymq_swiper-slide-visible',
    slideDuplicateClass: 'ymq_swiper-slide-duplicate',
    slideNextClass: 'ymq_swiper-slide-next',
    slideDuplicateNextClass: 'ymq_swiper-slide-duplicate-next',
    slidePrevClass: 'ymq_swiper-slide-prev',
    slideDuplicatePrevClass: 'ymq_swiper-slide-duplicate-prev',
    wrapperClass: 'ymq_swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };

  var prototypes = {
    modular: modular,
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images
  };
  var extendedDefaults = {};

  var ymq_swiper = /*#__PURE__*/function () {
    function ymq_swiper() {
      var el;
      var params;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
        params = args[0];
      } else {
        el = args[0];
        params = args[1];
      }

      if (!params) params = {};
      params = extend({}, params);
      if (el && !params.el) params.el = el;

      if (params.el && $(params.el).length > 1) {
        var ymq_swipers = [];
        $(params.el).each(function (containerEl) {
          var newParams = extend({}, params, {
            el: containerEl
          });
          ymq_swipers.push(new ymq_swiper(newParams));
        });
        return ymq_swipers;
      } // ymq_swiper Instance


      var ymq_swiper = this;
      ymq_swiper.__ymq_swiper__ = true;
      ymq_swiper.support = getSupport();
      ymq_swiper.device = getDevice({
        userAgent: params.userAgent
      });
      ymq_swiper.browser = getBrowser();
      ymq_swiper.eventsListeners = {};
      ymq_swiper.eventsAnyListeners = [];

      if (typeof ymq_swiper.modules === 'undefined') {
        ymq_swiper.modules = {};
      }

      Object.keys(ymq_swiper.modules).forEach(function (moduleName) {
        var module = ymq_swiper.modules[moduleName];

        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) return;
          if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

          if (params[moduleParamName] === true) {
            params[moduleParamName] = {
              enabled: true
            };
          }

          if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
            params[moduleParamName].enabled = true;
          }

          if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
          };
        }
      }); // Extend defaults with modules params

      var ymq_swiperParams = extend({}, defaults);
      ymq_swiper.useParams(ymq_swiperParams); // Extend defaults with passed params

      ymq_swiper.params = extend({}, ymq_swiperParams, extendedDefaults, params);
      ymq_swiper.originalParams = extend({}, ymq_swiper.params);
      ymq_swiper.passedParams = extend({}, params); // add event listeners

      if (ymq_swiper.params && ymq_swiper.params.on) {
        Object.keys(ymq_swiper.params.on).forEach(function (eventName) {
          ymq_swiper.on(eventName, ymq_swiper.params.on[eventName]);
        });
      }

      if (ymq_swiper.params && ymq_swiper.params.onAny) {
        ymq_swiper.onAny(ymq_swiper.params.onAny);
      } // Save Dom lib


      ymq_swiper.$ = $; // Extend ymq_swiper

      extend(ymq_swiper, {
        el: el,
        // Classes
        classNames: [],
        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal: function isHorizontal() {
          return ymq_swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return ymq_swiper.params.direction === 'vertical';
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        // Locks
        allowSlideNext: ymq_swiper.params.allowSlideNext,
        allowSlidePrev: ymq_swiper.params.allowSlidePrev,
        // Touch Events
        touchEvents: function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];

          if (ymq_swiper.support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          }

          ymq_swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3]
          };
          ymq_swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2]
          };
          return ymq_swiper.support.touch || !ymq_swiper.params.simulateTouch ? ymq_swiper.touchEventsTouch : ymq_swiper.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video, label',
          // Last click time
          lastClickTime: now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: ymq_swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      }); // Install Modules

      ymq_swiper.useModules();
      ymq_swiper.emit('_ymq_swiper'); // Init

      if (ymq_swiper.params.init) {
        ymq_swiper.init();
      } // Return app instance


      return ymq_swiper;
    }

    var _proto = ymq_swiper.prototype;

    _proto.setProgress = function setProgress(progress, speed) {
      var ymq_swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      var min = ymq_swiper.minTranslate();
      var max = ymq_swiper.maxTranslate();
      var current = (max - min) * progress + min;
      ymq_swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
      ymq_swiper.updateActiveIndex();
      ymq_swiper.updateSlidesClasses();
    };

    _proto.emitContainerClasses = function emitContainerClasses() {
      var ymq_swiper = this;
      if (!ymq_swiper.params._emitClasses || !ymq_swiper.el) return;
      var classes = ymq_swiper.el.className.split(' ').filter(function (className) {
        return className.indexOf('ymq_swiper-container') === 0 || className.indexOf(ymq_swiper.params.containerModifierClass) === 0;
      });
      ymq_swiper.emit('_containerClasses', classes.join(' '));
    };

    _proto.getSlideClasses = function getSlideClasses(slideEl) {
      var ymq_swiper = this;
      return slideEl.className.split(' ').filter(function (className) {
        return className.indexOf('ymq_swiper-slide') === 0 || className.indexOf(ymq_swiper.params.slideClass) === 0;
      }).join(' ');
    };

    _proto.emitSlidesClasses = function emitSlidesClasses() {
      var ymq_swiper = this;
      if (!ymq_swiper.params._emitClasses || !ymq_swiper.el) return;
      var updates = [];
      ymq_swiper.slides.each(function (slideEl) {
        var classNames = ymq_swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl: slideEl,
          classNames: classNames
        });
        ymq_swiper.emit('_slideClass', slideEl, classNames);
      });
      ymq_swiper.emit('_slideClasses', updates);
    };

    _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
      var ymq_swiper = this;
      var params = ymq_swiper.params,
          slides = ymq_swiper.slides,
          slidesGrid = ymq_swiper.slidesGrid,
          ymq_swiperSize = ymq_swiper.size,
          activeIndex = ymq_swiper.activeIndex;
      var spv = 1;

      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].ymq_swiperSlideSize;
        var breakLoop;

        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].ymq_swiperSlideSize;
            spv += 1;
            if (slideSize > ymq_swiperSize) breakLoop = true;
          }
        }

        for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
          if (slides[_i] && !breakLoop) {
            slideSize += slides[_i].ymq_swiperSlideSize;
            spv += 1;
            if (slideSize > ymq_swiperSize) breakLoop = true;
          }
        }
      } else {
        for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
          if (slidesGrid[_i2] - slidesGrid[activeIndex] < ymq_swiperSize) {
            spv += 1;
          }
        }
      }

      return spv;
    };

    _proto.update = function update() {
      var ymq_swiper = this;
      if (!ymq_swiper || ymq_swiper.destroyed) return;
      var snapGrid = ymq_swiper.snapGrid,
          params = ymq_swiper.params; // Breakpoints

      if (params.breakpoints) {
        ymq_swiper.setBreakpoint();
      }

      ymq_swiper.updateSize();
      ymq_swiper.updateSlides();
      ymq_swiper.updateProgress();
      ymq_swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = ymq_swiper.rtlTranslate ? ymq_swiper.translate * -1 : ymq_swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, ymq_swiper.maxTranslate()), ymq_swiper.minTranslate());
        ymq_swiper.setTranslate(newTranslate);
        ymq_swiper.updateActiveIndex();
        ymq_swiper.updateSlidesClasses();
      }

      var translated;

      if (ymq_swiper.params.freeMode) {
        setTranslate();

        if (ymq_swiper.params.autoHeight) {
          ymq_swiper.updateAutoHeight();
        }
      } else {
        if ((ymq_swiper.params.slidesPerView === 'auto' || ymq_swiper.params.slidesPerView > 1) && ymq_swiper.isEnd && !ymq_swiper.params.centeredSlides) {
          translated = ymq_swiper.slideTo(ymq_swiper.slides.length - 1, 0, false, true);
        } else {
          translated = ymq_swiper.slideTo(ymq_swiper.activeIndex, 0, false, true);
        }

        if (!translated) {
          setTranslate();
        }
      }

      if (params.watchOverflow && snapGrid !== ymq_swiper.snapGrid) {
        ymq_swiper.checkOverflow();
      }

      ymq_swiper.emit('update');
    };

    _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }

      var ymq_swiper = this;
      var currentDirection = ymq_swiper.params.direction;

      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }

      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
        return ymq_swiper;
      }

      ymq_swiper.$el.removeClass("" + ymq_swiper.params.containerModifierClass + currentDirection).addClass("" + ymq_swiper.params.containerModifierClass + newDirection);
      ymq_swiper.emitContainerClasses();
      ymq_swiper.params.direction = newDirection;
      ymq_swiper.slides.each(function (slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });
      ymq_swiper.emit('changeDirection');
      if (needUpdate) ymq_swiper.update();
      return ymq_swiper;
    };

    _proto.mount = function mount(el) {
      var ymq_swiper = this;
      if (ymq_swiper.mounted) return true; // Find el

      var $el = $(el || ymq_swiper.params.el);
      el = $el[0];

      if (!el) {
        return false;
      }

      el.ymq_swiper = ymq_swiper; // Find Wrapper

      var $wrapperEl;

      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        $wrapperEl = $(el.shadowRoot.querySelector("." + ymq_swiper.params.wrapperClass)); // Children needs to return slot items

        $wrapperEl.children = function (options) {
          return $el.children(options);
        };
      } else {
        $wrapperEl = $el.children("." + ymq_swiper.params.wrapperClass);
      }

      extend(ymq_swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
        rtlTranslate: ymq_swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box'
      });
      return true;
    };

    _proto.init = function init(el) {
      var ymq_swiper = this;
      if (ymq_swiper.initialized) return ymq_swiper;
      var mounted = ymq_swiper.mount(el);
      if (mounted === false) return ymq_swiper;
      ymq_swiper.emit('beforeInit'); // Set breakpoint

      if (ymq_swiper.params.breakpoints) {
        ymq_swiper.setBreakpoint();
      } // Add Classes


      ymq_swiper.addClasses(); // Create loop

      if (ymq_swiper.params.loop) {
        ymq_swiper.loopCreate();
      } // Update size


      ymq_swiper.updateSize(); // Update slides

      ymq_swiper.updateSlides();

      if (ymq_swiper.params.watchOverflow) {
        ymq_swiper.checkOverflow();
      } // Set Grab Cursor


      if (ymq_swiper.params.grabCursor) {
        ymq_swiper.setGrabCursor();
      }

      if (ymq_swiper.params.preloadImages) {
        ymq_swiper.preloadImages();
      } // Slide To Initial Slide


      if (ymq_swiper.params.loop) {
        ymq_swiper.slideTo(ymq_swiper.params.initialSlide + ymq_swiper.loopedSlides, 0, ymq_swiper.params.runCallbacksOnInit);
      } else {
        ymq_swiper.slideTo(ymq_swiper.params.initialSlide, 0, ymq_swiper.params.runCallbacksOnInit);
      } // Attach events


      ymq_swiper.attachEvents(); // Init Flag

      ymq_swiper.initialized = true; // Emit

      ymq_swiper.emit('init');
      ymq_swiper.emit('afterInit');
      return ymq_swiper;
    };

    _proto.destroy = function destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }

      if (cleanStyles === void 0) {
        cleanStyles = true;
      }

      var ymq_swiper = this;
      var params = ymq_swiper.params,
          $el = ymq_swiper.$el,
          $wrapperEl = ymq_swiper.$wrapperEl,
          slides = ymq_swiper.slides;

      if (typeof ymq_swiper.params === 'undefined' || ymq_swiper.destroyed) {
        return null;
      }

      ymq_swiper.emit('beforeDestroy'); // Init Flag

      ymq_swiper.initialized = false; // Detach events

      ymq_swiper.detachEvents(); // Destroy loop

      if (params.loop) {
        ymq_swiper.loopDestroy();
      } // Cleanup styles


      if (cleanStyles) {
        ymq_swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');

        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-ymq_swiper-slide-index');
        }
      }

      ymq_swiper.emit('destroy'); // Detach emitter events

      Object.keys(ymq_swiper.eventsListeners).forEach(function (eventName) {
        ymq_swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        ymq_swiper.$el[0].ymq_swiper = null;
        deleteProps(ymq_swiper);
      }

      ymq_swiper.destroyed = true;
      return null;
    };

    ymq_swiper.extendDefaults = function extendDefaults(newDefaults) {
      extend(extendedDefaults, newDefaults);
    };

    ymq_swiper.installModule = function installModule(module) {
      if (!ymq_swiper.prototype.modules) ymq_swiper.prototype.modules = {};
      var name = module.name || Object.keys(ymq_swiper.prototype.modules).length + "_" + now();
      ymq_swiper.prototype.modules[name] = module;
    };

    ymq_swiper.use = function use(module) {
      if (Array.isArray(module)) {
        module.forEach(function (m) {
          return ymq_swiper.installModule(m);
        });
        return ymq_swiper;
      }

      ymq_swiper.installModule(module);
      return ymq_swiper;
    };

    _createClass(ymq_swiper, null, [{
      key: "extendedDefaults",
      get: function get() {
        return extendedDefaults;
      }
    }, {
      key: "defaults",
      get: function get() {
        return defaults;
      }
    }]);

    return ymq_swiper;
  }();

  Object.keys(prototypes).forEach(function (prototypeGroup) {
    Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
      ymq_swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  ymq_swiper.use([Resize, Observer$1]);

  var Virtual = {
    update: function update(force) {
      var ymq_swiper = this;
      var _ymq_swiper$params = ymq_swiper.params,
          slidesPerView = _ymq_swiper$params.slidesPerView,
          slidesPerGroup = _ymq_swiper$params.slidesPerGroup,
          centeredSlides = _ymq_swiper$params.centeredSlides;
      var _ymq_swiper$params$virtua = ymq_swiper.params.virtual,
          addSlidesBefore = _ymq_swiper$params$virtua.addSlidesBefore,
          addSlidesAfter = _ymq_swiper$params$virtua.addSlidesAfter;
      var _ymq_swiper$virtual = ymq_swiper.virtual,
          previousFrom = _ymq_swiper$virtual.from,
          previousTo = _ymq_swiper$virtual.to,
          slides = _ymq_swiper$virtual.slides,
          previousSlidesGrid = _ymq_swiper$virtual.slidesGrid,
          renderSlide = _ymq_swiper$virtual.renderSlide,
          previousOffset = _ymq_swiper$virtual.offset;
      ymq_swiper.updateActiveIndex();
      var activeIndex = ymq_swiper.activeIndex || 0;
      var offsetProp;
      if (ymq_swiper.rtlTranslate) offsetProp = 'right';else offsetProp = ymq_swiper.isHorizontal() ? 'left' : 'top';
      var slidesAfter;
      var slidesBefore;

      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = slidesPerGroup + addSlidesBefore;
      }

      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (ymq_swiper.slidesGrid[from] || 0) - (ymq_swiper.slidesGrid[0] || 0);
      extend(ymq_swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: ymq_swiper.slidesGrid
      });

      function onRendered() {
        ymq_swiper.updateSlides();
        ymq_swiper.updateProgress();
        ymq_swiper.updateSlidesClasses();

        if (ymq_swiper.lazy && ymq_swiper.params.lazy.enabled) {
          ymq_swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (ymq_swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          ymq_swiper.slides.css(offsetProp, offset + "px");
        }

        ymq_swiper.updateProgress();
        return;
      }

      if (ymq_swiper.params.virtual.renderExternal) {
        ymq_swiper.params.virtual.renderExternal.call(ymq_swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: function getSlides() {
            var slidesToRender = [];

            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }

            return slidesToRender;
          }()
        });

        if (ymq_swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        }

        return;
      }

      var prependIndexes = [];
      var appendIndexes = [];

      if (force) {
        ymq_swiper.$wrapperEl.find("." + ymq_swiper.params.slideClass).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            ymq_swiper.$wrapperEl.find("." + ymq_swiper.params.slideClass + "[data-ymq_swiper-slide-index=\"" + i + "\"]").remove();
          }
        }
      }

      for (var _i = 0; _i < slides.length; _i += 1) {
        if (_i >= from && _i <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(_i);
          } else {
            if (_i > previousTo) appendIndexes.push(_i);
            if (_i < previousFrom) prependIndexes.push(_i);
          }
        }
      }

      appendIndexes.forEach(function (index) {
        ymq_swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) {
        return b - a;
      }).forEach(function (index) {
        ymq_swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      ymq_swiper.$wrapperEl.children('.ymq_swiper-slide').css(offsetProp, offset + "px");
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var ymq_swiper = this;
      var params = ymq_swiper.params.virtual;

      if (params.cache && ymq_swiper.virtual.cache[index]) {
        return ymq_swiper.virtual.cache[index];
      }

      var $slideEl = params.renderSlide ? $(params.renderSlide.call(ymq_swiper, slide, index)) : $("<div class=\"" + ymq_swiper.params.slideClass + "\" data-ymq_swiper-slide-index=\"" + index + "\">" + slide + "</div>");
      if (!$slideEl.attr('data-ymq_swiper-slide-index')) $slideEl.attr('data-ymq_swiper-slide-index', index);
      if (params.cache) ymq_swiper.virtual.cache[index] = $slideEl;
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var ymq_swiper = this;

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) ymq_swiper.virtual.slides.push(slides[i]);
        }
      } else {
        ymq_swiper.virtual.slides.push(slides);
      }

      ymq_swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var ymq_swiper = this;
      var activeIndex = ymq_swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) ymq_swiper.virtual.slides.unshift(slides[i]);
        }

        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        ymq_swiper.virtual.slides.unshift(slides);
      }

      if (ymq_swiper.params.virtual.cache) {
        var cache = ymq_swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          var $cachedEl = cache[cachedIndex];
          var cachedElIndex = $cachedEl.attr('data-ymq_swiper-slide-index');

          if (cachedElIndex) {
            $cachedEl.attr('data-ymq_swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
          }

          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
        });
        ymq_swiper.virtual.cache = newCache;
      }

      ymq_swiper.virtual.update(true);
      ymq_swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var ymq_swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
      var activeIndex = ymq_swiper.activeIndex;

      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          ymq_swiper.virtual.slides.splice(slidesIndexes[i], 1);

          if (ymq_swiper.params.virtual.cache) {
            delete ymq_swiper.virtual.cache[slidesIndexes[i]];
          }

          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        ymq_swiper.virtual.slides.splice(slidesIndexes, 1);

        if (ymq_swiper.params.virtual.cache) {
          delete ymq_swiper.virtual.cache[slidesIndexes];
        }

        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }

      ymq_swiper.virtual.update(true);
      ymq_swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var ymq_swiper = this;
      ymq_swiper.virtual.slides = [];

      if (ymq_swiper.params.virtual.cache) {
        ymq_swiper.virtual.cache = {};
      }

      ymq_swiper.virtual.update(true);
      ymq_swiper.slideTo(0, 0);
    }
  };
  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        virtual: _extends({}, Virtual, {
          slides: ymq_swiper.params.virtual.slides,
          cache: {}
        })
      });
    },
    on: {
      beforeInit: function beforeInit(ymq_swiper) {
        if (!ymq_swiper.params.virtual.enabled) return;
        ymq_swiper.classNames.push(ymq_swiper.params.containerModifierClass + "virtual");
        var overwriteParams = {
          watchSlidesProgress: true
        };
        extend(ymq_swiper.params, overwriteParams);
        extend(ymq_swiper.originalParams, overwriteParams);

        if (!ymq_swiper.params.initialSlide) {
          ymq_swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate(ymq_swiper) {
        if (!ymq_swiper.params.virtual.enabled) return;
        ymq_swiper.virtual.update();
      }
    }
  };

  var Keyboard = {
    handle: function handle(event) {
      var ymq_swiper = this;
      var window = getWindow();
      var document = getDocument();
      var rtl = ymq_swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) e = e.originalEvent; // jquery fix

      var kc = e.keyCode || e.charCode;
      var pageUpDown = ymq_swiper.params.keyboard.pageUpDown;
      var isPageUp = pageUpDown && kc === 33;
      var isPageDown = pageUpDown && kc === 34;
      var isArrowLeft = kc === 37;
      var isArrowRight = kc === 39;
      var isArrowUp = kc === 38;
      var isArrowDown = kc === 40; // Directions locks

      if (!ymq_swiper.allowSlideNext && (ymq_swiper.isHorizontal() && isArrowRight || ymq_swiper.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }

      if (!ymq_swiper.allowSlidePrev && (ymq_swiper.isHorizontal() && isArrowLeft || ymq_swiper.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }

      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }

      if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }

      if (ymq_swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        var inView = false; // Check that ymq_swiper should be inside of visible area of window

        if (ymq_swiper.$el.parents("." + ymq_swiper.params.slideClass).length > 0 && ymq_swiper.$el.parents("." + ymq_swiper.params.slideActiveClass).length === 0) {
          return undefined;
        }

        var $el = ymq_swiper.$el;
        var ymq_swiperWidth = $el[0].clientWidth;
        var ymq_swiperHeight = $el[0].clientHeight;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var ymq_swiperOffset = ymq_swiper.$el.offset();
        if (rtl) ymq_swiperOffset.left -= ymq_swiper.$el[0].scrollLeft;
        var ymq_swiperCoord = [[ymq_swiperOffset.left, ymq_swiperOffset.top], [ymq_swiperOffset.left + ymq_swiperWidth, ymq_swiperOffset.top], [ymq_swiperOffset.left, ymq_swiperOffset.top + ymq_swiperHeight], [ymq_swiperOffset.left + ymq_swiperWidth, ymq_swiperOffset.top + ymq_swiperHeight]];

        for (var i = 0; i < ymq_swiperCoord.length; i += 1) {
          var point = ymq_swiperCoord[i];

          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

            inView = true;
          }
        }

        if (!inView) return undefined;
      }

      if (ymq_swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }

        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) ymq_swiper.slideNext();
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) ymq_swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }

        if (isPageDown || isArrowDown) ymq_swiper.slideNext();
        if (isPageUp || isArrowUp) ymq_swiper.slidePrev();
      }

      ymq_swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var ymq_swiper = this;
      var document = getDocument();
      if (ymq_swiper.keyboard.enabled) return;
      $(document).on('keydown', ymq_swiper.keyboard.handle);
      ymq_swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var ymq_swiper = this;
      var document = getDocument();
      if (!ymq_swiper.keyboard.enabled) return;
      $(document).off('keydown', ymq_swiper.keyboard.handle);
      ymq_swiper.keyboard.enabled = false;
    }
  };
  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        keyboard: _extends({
          enabled: false
        }, Keyboard)
      });
    },
    on: {
      init: function init(ymq_swiper) {
        if (ymq_swiper.params.keyboard.enabled) {
          ymq_swiper.keyboard.enable();
        }
      },
      destroy: function destroy(ymq_swiper) {
        if (ymq_swiper.keyboard.enabled) {
          ymq_swiper.keyboard.disable();
        }
      }
    }
  };

  function isEventSupported() {
    var document = getDocument();
    var eventName = 'onwheel';
    var isSupported = (eventName in document);

    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }

  var Mousewheel = {
    lastScrollTime: now(),
    lastEventBeforeSnap: undefined,
    recentWheelEvents: [],
    event: function event() {
      var window = getWindow();
      if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
      return isEventSupported() ? 'wheel' : 'mousewheel';
    },
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;
      var sX = 0;
      var sY = 0; // spinX, spinY

      var pX = 0;
      var pY = 0; // pixelX, pixelY
      // Legacy

      if ('detail' in e) {
        sY = e.detail;
      }

      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }

      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }

      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      } // side scrolling on FF with DOMMouseScroll


      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }

      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if (e.shiftKey && !pX) {
        // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      } // Fall-back if spin cannot be determined


      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }

      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var ymq_swiper = this;
      ymq_swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var ymq_swiper = this;
      ymq_swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var disableParentymq_swiper = true;
      var ymq_swiper = this;
      var params = ymq_swiper.params.mousewheel;

      if (ymq_swiper.params.cssMode) {
        e.preventDefault();
      }

      var target = ymq_swiper.$el;

      if (ymq_swiper.params.mousewheel.eventsTarget !== 'container') {
        target = $(ymq_swiper.params.mousewheel.eventsTarget);
      }

      if (!ymq_swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
      if (e.originalEvent) e = e.originalEvent; // jquery fix

      var delta = 0;
      var rtlFactor = ymq_swiper.rtlTranslate ? -1 : 1;
      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (ymq_swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) return true;
      if (params.invert) delta = -delta; // Get the scroll positions

      var positions = ymq_swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= ymq_swiper.minTranslate()) positions = ymq_swiper.minTranslate();
      if (positions <= ymq_swiper.maxTranslate()) positions = ymq_swiper.maxTranslate(); // When loop is true:
      //     the disableParentymq_swiper will be true.
      // When loop is false:
      //     if the scroll positions is not on edge,
      //     then the disableParentymq_swiper will be true.
      //     if the scroll on edge positions,
      //     then the disableParentymq_swiper will be false.

      disableParentymq_swiper = ymq_swiper.params.loop ? true : !(positions === ymq_swiper.minTranslate() || positions === ymq_swiper.maxTranslate());
      if (disableParentymq_swiper && ymq_swiper.params.nested) e.stopPropagation();

      if (!ymq_swiper.params.freeMode) {
        // Register the new event in a variable which stores the relevant data
        var newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event
        }; // Keep the most recent events

        var recentWheelEvents = ymq_swiper.mousewheel.recentWheelEvents;

        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift(); // only store the last N events
        }

        var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
        recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
        //   If direction has changed or
        //   if the scroll is quicker than the previous one:
        //     Animate the slider.
        // Else (this is the first time the wheel is moved):
        //     Animate the slider.

        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            ymq_swiper.mousewheel.animateSlider(newEvent);
          }
        } else {
          ymq_swiper.mousewheel.animateSlider(newEvent);
        } // If it's time to release the scroll:
        //   Return now so you don't hit the preventDefault.


        if (ymq_swiper.mousewheel.releaseScroll(newEvent)) {
          return true;
        }
      } else {
        // Freemode or scrollContainer:
        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        var _newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        var lastEventBeforeSnap = ymq_swiper.mousewheel.lastEventBeforeSnap;
        var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

        if (!ignoreWheelEvents) {
          ymq_swiper.mousewheel.lastEventBeforeSnap = undefined;

          if (ymq_swiper.params.loop) {
            ymq_swiper.loopFix();
          }

          var position = ymq_swiper.getTranslate() + delta * params.sensitivity;
          var wasBeginning = ymq_swiper.isBeginning;
          var wasEnd = ymq_swiper.isEnd;
          if (position >= ymq_swiper.minTranslate()) position = ymq_swiper.minTranslate();
          if (position <= ymq_swiper.maxTranslate()) position = ymq_swiper.maxTranslate();
          ymq_swiper.setTransition(0);
          ymq_swiper.setTranslate(position);
          ymq_swiper.updateProgress();
          ymq_swiper.updateActiveIndex();
          ymq_swiper.updateSlidesClasses();

          if (!wasBeginning && ymq_swiper.isBeginning || !wasEnd && ymq_swiper.isEnd) {
            ymq_swiper.updateSlidesClasses();
          }

          if (ymq_swiper.params.freeModeSticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(ymq_swiper.mousewheel.timeout);
            ymq_swiper.mousewheel.timeout = undefined;
            var _recentWheelEvents = ymq_swiper.mousewheel.recentWheelEvents;

            if (_recentWheelEvents.length >= 15) {
              _recentWheelEvents.shift(); // only store the last N events

            }

            var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

            var firstEvent = _recentWheelEvents[0];

            _recentWheelEvents.push(_newEvent);

            if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              _recentWheelEvents.splice(0);
            } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              var snapToThreshold = delta > 0 ? 0.8 : 0.2;
              ymq_swiper.mousewheel.lastEventBeforeSnap = _newEvent;

              _recentWheelEvents.splice(0);

              ymq_swiper.mousewheel.timeout = nextTick(function () {
                ymq_swiper.slideToClosest(ymq_swiper.params.speed, true, undefined, snapToThreshold);
              }, 0); // no delay; move on next tick
            }

            if (!ymq_swiper.mousewheel.timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              ymq_swiper.mousewheel.timeout = nextTick(function () {
                var snapToThreshold = 0.5;
                ymq_swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                _recentWheelEvents.splice(0);

                ymq_swiper.slideToClosest(ymq_swiper.params.speed, true, undefined, snapToThreshold);
              }, 500);
            }
          } // Emit event


          if (!ignoreWheelEvents) ymq_swiper.emit('scroll', e); // Stop autoplay

          if (ymq_swiper.params.autoplay && ymq_swiper.params.autoplayDisableOnInteraction) ymq_swiper.autoplay.stop(); // Return page scroll on edge positions

          if (position === ymq_swiper.minTranslate() || position === ymq_swiper.maxTranslate()) return true;
        }
      }

      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      return false;
    },
    animateSlider: function animateSlider(newEvent) {
      var ymq_swiper = this;
      var window = getWindow();

      if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
        // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
      }

      if (this.params.mousewheel.thresholdTime && now() - ymq_swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
        // Prevent if time between scrolls is below configured threshold
        return false;
      } // If the movement is NOT big enough and
      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
      //   Don't go any further (avoid insignificant scroll movement).


      if (newEvent.delta >= 6 && now() - ymq_swiper.mousewheel.lastScrollTime < 60) {
        // Return false as a default
        return true;
      } // If user is scrolling towards the end:
      //   If the slider hasn't hit the latest slide or
      //   if the slider is a loop and
      //   if the slider isn't moving right now:
      //     Go to next slide and
      //     emit a scroll event.
      // Else (the user is scrolling towards the beginning) and
      // if the slider hasn't hit the first slide or
      // if the slider is a loop and
      // if the slider isn't moving right now:
      //   Go to prev slide and
      //   emit a scroll event.


      if (newEvent.direction < 0) {
        if ((!ymq_swiper.isEnd || ymq_swiper.params.loop) && !ymq_swiper.animating) {
          ymq_swiper.slideNext();
          ymq_swiper.emit('scroll', newEvent.raw);
        }
      } else if ((!ymq_swiper.isBeginning || ymq_swiper.params.loop) && !ymq_swiper.animating) {
        ymq_swiper.slidePrev();
        ymq_swiper.emit('scroll', newEvent.raw);
      } // If you got here is because an animation has been triggered so store the current time


      ymq_swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

      return false;
    },
    releaseScroll: function releaseScroll(newEvent) {
      var ymq_swiper = this;
      var params = ymq_swiper.params.mousewheel;

      if (newEvent.direction < 0) {
        if (ymq_swiper.isEnd && !ymq_swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
      } else if (ymq_swiper.isBeginning && !ymq_swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }

      return false;
    },
    enable: function enable() {
      var ymq_swiper = this;
      var event = Mousewheel.event();

      if (ymq_swiper.params.cssMode) {
        ymq_swiper.wrapperEl.removeEventListener(event, ymq_swiper.mousewheel.handle);
        return true;
      }

      if (!event) return false;
      if (ymq_swiper.mousewheel.enabled) return false;
      var target = ymq_swiper.$el;

      if (ymq_swiper.params.mousewheel.eventsTarget !== 'container') {
        target = $(ymq_swiper.params.mousewheel.eventsTarget);
      }

      target.on('mouseenter', ymq_swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', ymq_swiper.mousewheel.handleMouseLeave);
      target.on(event, ymq_swiper.mousewheel.handle);
      ymq_swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var ymq_swiper = this;
      var event = Mousewheel.event();

      if (ymq_swiper.params.cssMode) {
        ymq_swiper.wrapperEl.addEventListener(event, ymq_swiper.mousewheel.handle);
        return true;
      }

      if (!event) return false;
      if (!ymq_swiper.mousewheel.enabled) return false;
      var target = ymq_swiper.$el;

      if (ymq_swiper.params.mousewheel.eventsTarget !== 'container') {
        target = $(ymq_swiper.params.mousewheel.eventsTarget);
      }

      target.off(event, ymq_swiper.mousewheel.handle);
      ymq_swiper.mousewheel.enabled = false;
      return true;
    }
  };
  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: 'container',
        thresholdDelta: null,
        thresholdTime: null
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        mousewheel: {
          enabled: false,
          lastScrollTime: now(),
          lastEventBeforeSnap: undefined,
          recentWheelEvents: [],
          enable: Mousewheel.enable,
          disable: Mousewheel.disable,
          handle: Mousewheel.handle,
          handleMouseEnter: Mousewheel.handleMouseEnter,
          handleMouseLeave: Mousewheel.handleMouseLeave,
          animateSlider: Mousewheel.animateSlider,
          releaseScroll: Mousewheel.releaseScroll
        }
      });
    },
    on: {
      init: function init(ymq_swiper) {
        if (!ymq_swiper.params.mousewheel.enabled && ymq_swiper.params.cssMode) {
          ymq_swiper.mousewheel.disable();
        }

        if (ymq_swiper.params.mousewheel.enabled) ymq_swiper.mousewheel.enable();
      },
      destroy: function destroy(ymq_swiper) {
        if (ymq_swiper.params.cssMode) {
          ymq_swiper.mousewheel.enable();
        }

        if (ymq_swiper.mousewheel.enabled) ymq_swiper.mousewheel.disable();
      }
    }
  };

  var Navigation = {
    toggleEl: function toggleEl($el, disabled) {
      $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
    },
    update: function update() {
      // Update Navigation Buttons
      var ymq_swiper = this;
      var params = ymq_swiper.params.navigation;
      var toggleEl = ymq_swiper.navigation.toggleEl;
      if (ymq_swiper.params.loop) return;
      var _ymq_swiper$navigation = ymq_swiper.navigation,
          $nextEl = _ymq_swiper$navigation.$nextEl,
          $prevEl = _ymq_swiper$navigation.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (ymq_swiper.isBeginning) {
          toggleEl($prevEl, true);
        } else {
          toggleEl($prevEl, false);
        }

        $prevEl[ymq_swiper.params.watchOverflow && ymq_swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }

      if ($nextEl && $nextEl.length > 0) {
        if (ymq_swiper.isEnd) {
          toggleEl($nextEl, true);
        } else {
          toggleEl($nextEl, false);
        }

        $nextEl[ymq_swiper.params.watchOverflow && ymq_swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var ymq_swiper = this;
      e.preventDefault();
      if (ymq_swiper.isBeginning && !ymq_swiper.params.loop) return;
      ymq_swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var ymq_swiper = this;
      e.preventDefault();
      if (ymq_swiper.isEnd && !ymq_swiper.params.loop) return;
      ymq_swiper.slideNext();
    },
    init: function init() {
      var ymq_swiper = this;
      var params = ymq_swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) return;
      var $nextEl;
      var $prevEl;

      if (params.nextEl) {
        $nextEl = $(params.nextEl);

        if (ymq_swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && ymq_swiper.$el.find(params.nextEl).length === 1) {
          $nextEl = ymq_swiper.$el.find(params.nextEl);
        }
      }

      if (params.prevEl) {
        $prevEl = $(params.prevEl);

        if (ymq_swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && ymq_swiper.$el.find(params.prevEl).length === 1) {
          $prevEl = ymq_swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', ymq_swiper.navigation.onNextClick);
      }

      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', ymq_swiper.navigation.onPrevClick);
      }

      extend(ymq_swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0]
      });
    },
    destroy: function destroy() {
      var ymq_swiper = this;
      var _ymq_swiper$navigation2 = ymq_swiper.navigation,
          $nextEl = _ymq_swiper$navigation2.$nextEl,
          $prevEl = _ymq_swiper$navigation2.$prevEl;

      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', ymq_swiper.navigation.onNextClick);
        $nextEl.removeClass(ymq_swiper.params.navigation.disabledClass);
      }

      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', ymq_swiper.navigation.onPrevClick);
        $prevEl.removeClass(ymq_swiper.params.navigation.disabledClass);
      }
    }
  };
  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: 'ymq_swiper-button-disabled',
        hiddenClass: 'ymq_swiper-button-hidden',
        lockClass: 'ymq_swiper-button-lock'
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        navigation: _extends({}, Navigation)
      });
    },
    on: {
      init: function init(ymq_swiper) {
        ymq_swiper.navigation.init();
        ymq_swiper.navigation.update();
      },
      toEdge: function toEdge(ymq_swiper) {
        ymq_swiper.navigation.update();
      },
      fromEdge: function fromEdge(ymq_swiper) {
        ymq_swiper.navigation.update();
      },
      destroy: function destroy(ymq_swiper) {
        ymq_swiper.navigation.destroy();
      },
      click: function click(ymq_swiper, e) {
        var _ymq_swiper$navigation3 = ymq_swiper.navigation,
            $nextEl = _ymq_swiper$navigation3.$nextEl,
            $prevEl = _ymq_swiper$navigation3.$prevEl;
        var targetEl = e.target;

        if (ymq_swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
          if (ymq_swiper.pagination && ymq_swiper.params.pagination && ymq_swiper.params.pagination.clickable && (ymq_swiper.pagination.el === targetEl || ymq_swiper.pagination.el.contains(targetEl))) return;
          var isHidden;

          if ($nextEl) {
            isHidden = $nextEl.hasClass(ymq_swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(ymq_swiper.params.navigation.hiddenClass);
          }

          if (isHidden === true) {
            ymq_swiper.emit('navigationShow');
          } else {
            ymq_swiper.emit('navigationHide');
          }

          if ($nextEl) {
            $nextEl.toggleClass(ymq_swiper.params.navigation.hiddenClass);
          }

          if ($prevEl) {
            $prevEl.toggleClass(ymq_swiper.params.navigation.hiddenClass);
          }
        }
      }
    }
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var ymq_swiper = this;
      var rtl = ymq_swiper.rtl;
      var params = ymq_swiper.params.pagination;
      if (!params.el || !ymq_swiper.pagination.el || !ymq_swiper.pagination.$el || ymq_swiper.pagination.$el.length === 0) return;
      var slidesLength = ymq_swiper.virtual && ymq_swiper.params.virtual.enabled ? ymq_swiper.virtual.slides.length : ymq_swiper.slides.length;
      var $el = ymq_swiper.pagination.$el; // Current/Total

      var current;
      var total = ymq_swiper.params.loop ? Math.ceil((slidesLength - ymq_swiper.loopedSlides * 2) / ymq_swiper.params.slidesPerGroup) : ymq_swiper.snapGrid.length;

      if (ymq_swiper.params.loop) {
        current = Math.ceil((ymq_swiper.activeIndex - ymq_swiper.loopedSlides) / ymq_swiper.params.slidesPerGroup);

        if (current > slidesLength - 1 - ymq_swiper.loopedSlides * 2) {
          current -= slidesLength - ymq_swiper.loopedSlides * 2;
        }

        if (current > total - 1) current -= total;
        if (current < 0 && ymq_swiper.params.paginationType !== 'bullets') current = total + current;
      } else if (typeof ymq_swiper.snapIndex !== 'undefined') {
        current = ymq_swiper.snapIndex;
      } else {
        current = ymq_swiper.activeIndex || 0;
      } // Types


      if (params.type === 'bullets' && ymq_swiper.pagination.bullets && ymq_swiper.pagination.bullets.length > 0) {
        var bullets = ymq_swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;

        if (params.dynamicBullets) {
          ymq_swiper.pagination.bulletSize = bullets.eq(0)[ymq_swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(ymq_swiper.isHorizontal() ? 'width' : 'height', ymq_swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

          if (params.dynamicMainBullets > 1 && ymq_swiper.previousIndex !== undefined) {
            ymq_swiper.pagination.dynamicBulletIndex += current - ymq_swiper.previousIndex;

            if (ymq_swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
              ymq_swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (ymq_swiper.pagination.dynamicBulletIndex < 0) {
              ymq_swiper.pagination.dynamicBulletIndex = 0;
            }
          }

          firstIndex = current - ymq_swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }

        bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

        if ($el.length > 1) {
          bullets.each(function (bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();

            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }

            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(params.bulletActiveClass + "-main");
              }

              if (bulletIndex === firstIndex) {
                $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              }

              if (bulletIndex === lastIndex) {
                $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          var bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);

          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);

            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(params.bulletActiveClass + "-main");
            }

            if (ymq_swiper.params.loop) {
              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                  bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                }

                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
              } else {
                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        }

        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (ymq_swiper.pagination.bulletSize * dynamicBulletsLength - ymq_swiper.pagination.bulletSize) / 2 - midIndex * ymq_swiper.pagination.bulletSize;
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(ymq_swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
        }
      }

      if (params.type === 'fraction') {
        $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
        $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
      }

      if (params.type === 'progressbar') {
        var progressbarDirection;

        if (params.progressbarOpposite) {
          progressbarDirection = ymq_swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = ymq_swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }

        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;

        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }

        $el.find(classesToSelector(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(ymq_swiper.params.speed);
      }

      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(ymq_swiper, current + 1, total));
        ymq_swiper.emit('paginationRender', $el[0]);
      } else {
        ymq_swiper.emit('paginationUpdate', $el[0]);
      }

      $el[ymq_swiper.params.watchOverflow && ymq_swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var ymq_swiper = this;
      var params = ymq_swiper.params.pagination;
      if (!params.el || !ymq_swiper.pagination.el || !ymq_swiper.pagination.$el || ymq_swiper.pagination.$el.length === 0) return;
      var slidesLength = ymq_swiper.virtual && ymq_swiper.params.virtual.enabled ? ymq_swiper.virtual.slides.length : ymq_swiper.slides.length;
      var $el = ymq_swiper.pagination.$el;
      var paginationHTML = '';

      if (params.type === 'bullets') {
        var numberOfBullets = ymq_swiper.params.loop ? Math.ceil((slidesLength - ymq_swiper.loopedSlides * 2) / ymq_swiper.params.slidesPerGroup) : ymq_swiper.snapGrid.length;

        if (ymq_swiper.params.freeMode && !ymq_swiper.params.loop && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }

        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(ymq_swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
          }
        }

        $el.html(paginationHTML);
        ymq_swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
      }

      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(ymq_swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
        }

        $el.html(paginationHTML);
      }

      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(ymq_swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
        }

        $el.html(paginationHTML);
      }

      if (params.type !== 'custom') {
        ymq_swiper.emit('paginationRender', ymq_swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var ymq_swiper = this;
      var params = ymq_swiper.params.pagination;
      if (!params.el) return;
      var $el = $(params.el);
      if ($el.length === 0) return;

      if (ymq_swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
        $el = ymq_swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass("" + params.modifierClass + params.type + "-dynamic");
        ymq_swiper.pagination.dynamicBulletIndex = 0;

        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }

      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * ymq_swiper.params.slidesPerGroup;
          if (ymq_swiper.params.loop) index += ymq_swiper.loopedSlides;
          ymq_swiper.slideTo(index);
        });
      }

      extend(ymq_swiper.pagination, {
        $el: $el,
        el: $el[0]
      });
    },
    destroy: function destroy() {
      var ymq_swiper = this;
      var params = ymq_swiper.params.pagination;
      if (!params.el || !ymq_swiper.pagination.el || !ymq_swiper.pagination.$el || ymq_swiper.pagination.$el.length === 0) return;
      var $el = ymq_swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (ymq_swiper.pagination.bullets) ymq_swiper.pagination.bullets.removeClass(params.bulletActiveClass);

      if (params.clickable) {
        $el.off('click', classesToSelector(params.bulletClass));
      }
    }
  };
  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets',
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(number) {
          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          return number;
        },
        bulletClass: 'ymq_swiper-pagination-bullet',
        bulletActiveClass: 'ymq_swiper-pagination-bullet-active',
        modifierClass: 'ymq_swiper-pagination-',
        // NEW
        currentClass: 'ymq_swiper-pagination-current',
        totalClass: 'ymq_swiper-pagination-total',
        hiddenClass: 'ymq_swiper-pagination-hidden',
        progressbarFillClass: 'ymq_swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'ymq_swiper-pagination-progressbar-opposite',
        clickableClass: 'ymq_swiper-pagination-clickable',
        // NEW
        lockClass: 'ymq_swiper-pagination-lock'
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        pagination: _extends({
          dynamicBulletIndex: 0
        }, Pagination)
      });
    },
    on: {
      init: function init(ymq_swiper) {
        ymq_swiper.pagination.init();
        ymq_swiper.pagination.render();
        ymq_swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange(ymq_swiper) {
        if (ymq_swiper.params.loop) {
          ymq_swiper.pagination.update();
        } else if (typeof ymq_swiper.snapIndex === 'undefined') {
          ymq_swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange(ymq_swiper) {
        if (!ymq_swiper.params.loop) {
          ymq_swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange(ymq_swiper) {
        if (ymq_swiper.params.loop) {
          ymq_swiper.pagination.render();
          ymq_swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange(ymq_swiper) {
        if (!ymq_swiper.params.loop) {
          ymq_swiper.pagination.render();
          ymq_swiper.pagination.update();
        }
      },
      destroy: function destroy(ymq_swiper) {
        ymq_swiper.pagination.destroy();
      },
      click: function click(ymq_swiper, e) {
        var targetEl = e.target;

        if (ymq_swiper.params.pagination.el && ymq_swiper.params.pagination.hideOnClick && ymq_swiper.pagination.$el.length > 0 && !$(targetEl).hasClass(ymq_swiper.params.pagination.bulletClass)) {
          if (ymq_swiper.navigation && (ymq_swiper.navigation.nextEl && targetEl === ymq_swiper.navigation.nextEl || ymq_swiper.navigation.prevEl && targetEl === ymq_swiper.navigation.prevEl)) return;
          var isHidden = ymq_swiper.pagination.$el.hasClass(ymq_swiper.params.pagination.hiddenClass);

          if (isHidden === true) {
            ymq_swiper.emit('paginationShow');
          } else {
            ymq_swiper.emit('paginationHide');
          }

          ymq_swiper.pagination.$el.toggleClass(ymq_swiper.params.pagination.hiddenClass);
        }
      }
    }
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var ymq_swiper = this;
      if (!ymq_swiper.params.scrollbar.el || !ymq_swiper.scrollbar.el) return;
      var scrollbar = ymq_swiper.scrollbar,
          rtl = ymq_swiper.rtlTranslate,
          progress = ymq_swiper.progress;
      var dragSize = scrollbar.dragSize,
          trackSize = scrollbar.trackSize,
          $dragEl = scrollbar.$dragEl,
          $el = scrollbar.$el;
      var params = ymq_swiper.params.scrollbar;
      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;

      if (rtl) {
        newPos = -newPos;

        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }

      if (ymq_swiper.isHorizontal()) {
        $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
        $dragEl[0].style.width = newSize + "px";
      } else {
        $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
        $dragEl[0].style.height = newSize + "px";
      }

      if (params.hide) {
        clearTimeout(ymq_swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        ymq_swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var ymq_swiper = this;
      if (!ymq_swiper.params.scrollbar.el || !ymq_swiper.scrollbar.el) return;
      ymq_swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var ymq_swiper = this;
      if (!ymq_swiper.params.scrollbar.el || !ymq_swiper.scrollbar.el) return;
      var scrollbar = ymq_swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl,
          $el = scrollbar.$el;
      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = ymq_swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
      var divider = ymq_swiper.size / ymq_swiper.virtualSize;
      var moveDivider = divider * (trackSize / ymq_swiper.size);
      var dragSize;

      if (ymq_swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(ymq_swiper.params.scrollbar.dragSize, 10);
      }

      if (ymq_swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }

      if (ymq_swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }

      extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize
      });
      scrollbar.$el[ymq_swiper.params.watchOverflow && ymq_swiper.isLocked ? 'addClass' : 'removeClass'](ymq_swiper.params.scrollbar.lockClass);
    },
    getPointerPosition: function getPointerPosition(e) {
      var ymq_swiper = this;

      if (ymq_swiper.isHorizontal()) {
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
      }

      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var ymq_swiper = this;
      var scrollbar = ymq_swiper.scrollbar,
          rtl = ymq_swiper.rtlTranslate;
      var $el = scrollbar.$el,
          dragSize = scrollbar.dragSize,
          trackSize = scrollbar.trackSize,
          dragStartPos = scrollbar.dragStartPos;
      var positionRatio;
      positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[ymq_swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);

      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = ymq_swiper.minTranslate() + (ymq_swiper.maxTranslate() - ymq_swiper.minTranslate()) * positionRatio;
      ymq_swiper.updateProgress(position);
      ymq_swiper.setTranslate(position);
      ymq_swiper.updateActiveIndex();
      ymq_swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var ymq_swiper = this;
      var params = ymq_swiper.params.scrollbar;
      var scrollbar = ymq_swiper.scrollbar,
          $wrapperEl = ymq_swiper.$wrapperEl;
      var $el = scrollbar.$el,
          $dragEl = scrollbar.$dragEl;
      ymq_swiper.scrollbar.isTouched = true;
      ymq_swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[ymq_swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();
      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);
      clearTimeout(ymq_swiper.scrollbar.dragTimeout);
      $el.transition(0);

      if (params.hide) {
        $el.css('opacity', 1);
      }

      if (ymq_swiper.params.cssMode) {
        ymq_swiper.$wrapperEl.css('scroll-snap-type', 'none');
      }

      ymq_swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var ymq_swiper = this;
      var scrollbar = ymq_swiper.scrollbar,
          $wrapperEl = ymq_swiper.$wrapperEl;
      var $el = scrollbar.$el,
          $dragEl = scrollbar.$dragEl;
      if (!ymq_swiper.scrollbar.isTouched) return;
      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      ymq_swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var ymq_swiper = this;
      var params = ymq_swiper.params.scrollbar;
      var scrollbar = ymq_swiper.scrollbar,
          $wrapperEl = ymq_swiper.$wrapperEl;
      var $el = scrollbar.$el;
      if (!ymq_swiper.scrollbar.isTouched) return;
      ymq_swiper.scrollbar.isTouched = false;

      if (ymq_swiper.params.cssMode) {
        ymq_swiper.$wrapperEl.css('scroll-snap-type', '');
        $wrapperEl.transition('');
      }

      if (params.hide) {
        clearTimeout(ymq_swiper.scrollbar.dragTimeout);
        ymq_swiper.scrollbar.dragTimeout = nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }

      ymq_swiper.emit('scrollbarDragEnd', e);

      if (params.snapOnRelease) {
        ymq_swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var ymq_swiper = this;
      if (!ymq_swiper.params.scrollbar.el) return;
      var document = getDocument();
      var scrollbar = ymq_swiper.scrollbar,
          touchEventsTouch = ymq_swiper.touchEventsTouch,
          touchEventsDesktop = ymq_swiper.touchEventsDesktop,
          params = ymq_swiper.params,
          support = ymq_swiper.support;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = support.passiveListener && params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      var passiveListener = support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;

      if (!support.touch) {
        target.addEventListener(touchEventsDesktop.start, ymq_swiper.scrollbar.onDragStart, activeListener);
        document.addEventListener(touchEventsDesktop.move, ymq_swiper.scrollbar.onDragMove, activeListener);
        document.addEventListener(touchEventsDesktop.end, ymq_swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, ymq_swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, ymq_swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, ymq_swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var ymq_swiper = this;
      if (!ymq_swiper.params.scrollbar.el) return;
      var document = getDocument();
      var scrollbar = ymq_swiper.scrollbar,
          touchEventsTouch = ymq_swiper.touchEventsTouch,
          touchEventsDesktop = ymq_swiper.touchEventsDesktop,
          params = ymq_swiper.params,
          support = ymq_swiper.support;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = support.passiveListener && params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      var passiveListener = support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;

      if (!support.touch) {
        target.removeEventListener(touchEventsDesktop.start, ymq_swiper.scrollbar.onDragStart, activeListener);
        document.removeEventListener(touchEventsDesktop.move, ymq_swiper.scrollbar.onDragMove, activeListener);
        document.removeEventListener(touchEventsDesktop.end, ymq_swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, ymq_swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, ymq_swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, ymq_swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var ymq_swiper = this;
      if (!ymq_swiper.params.scrollbar.el) return;
      var scrollbar = ymq_swiper.scrollbar,
          $ymq_swiperEl = ymq_swiper.$el;
      var params = ymq_swiper.params.scrollbar;
      var $el = $(params.el);

      if (ymq_swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $ymq_swiperEl.find(params.el).length === 1) {
        $el = $ymq_swiperEl.find(params.el);
      }

      var $dragEl = $el.find("." + ymq_swiper.params.scrollbar.dragClass);

      if ($dragEl.length === 0) {
        $dragEl = $("<div class=\"" + ymq_swiper.params.scrollbar.dragClass + "\"></div>");
        $el.append($dragEl);
      }

      extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0]
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var ymq_swiper = this;
      ymq_swiper.scrollbar.disableDraggable();
    }
  };
  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'ymq_swiper-scrollbar-lock',
        dragClass: 'ymq_swiper-scrollbar-drag'
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        scrollbar: _extends({
          isTouched: false,
          timeout: null,
          dragTimeout: null
        }, Scrollbar)
      });
    },
    on: {
      init: function init(ymq_swiper) {
        ymq_swiper.scrollbar.init();
        ymq_swiper.scrollbar.updateSize();
        ymq_swiper.scrollbar.setTranslate();
      },
      update: function update(ymq_swiper) {
        ymq_swiper.scrollbar.updateSize();
      },
      resize: function resize(ymq_swiper) {
        ymq_swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate(ymq_swiper) {
        ymq_swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate(ymq_swiper) {
        ymq_swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(ymq_swiper, duration) {
        ymq_swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy(ymq_swiper) {
        ymq_swiper.scrollbar.destroy();
      }
    }
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var ymq_swiper = this;
      var rtl = ymq_swiper.rtl;
      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;
      var p = $el.attr('data-ymq_swiper-parallax') || '0';
      var x = $el.attr('data-ymq_swiper-parallax-x');
      var y = $el.attr('data-ymq_swiper-parallax-y');
      var scale = $el.attr('data-ymq_swiper-parallax-scale');
      var opacity = $el.attr('data-ymq_swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (ymq_swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if (x.indexOf('%') >= 0) {
        x = parseInt(x, 10) * progress * rtlFactor + "%";
      } else {
        x = x * progress * rtlFactor + "px";
      }

      if (y.indexOf('%') >= 0) {
        y = parseInt(y, 10) * progress + "%";
      } else {
        y = y * progress + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        $el[0].style.opacity = currentOpacity;
      }

      if (typeof scale === 'undefined' || scale === null) {
        $el.transform("translate3d(" + x + ", " + y + ", 0px)");
      } else {
        var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
      }
    },
    setTranslate: function setTranslate() {
      var ymq_swiper = this;
      var $el = ymq_swiper.$el,
          slides = ymq_swiper.slides,
          progress = ymq_swiper.progress,
          snapGrid = ymq_swiper.snapGrid;
      $el.children('[data-ymq_swiper-parallax], [data-ymq_swiper-parallax-x], [data-ymq_swiper-parallax-y], [data-ymq_swiper-parallax-opacity], [data-ymq_swiper-parallax-scale]').each(function (el) {
        ymq_swiper.parallax.setTransform(el, progress);
      });
      slides.each(function (slideEl, slideIndex) {
        var slideProgress = slideEl.progress;

        if (ymq_swiper.params.slidesPerGroup > 1 && ymq_swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }

        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-ymq_swiper-parallax], [data-ymq_swiper-parallax-x], [data-ymq_swiper-parallax-y], [data-ymq_swiper-parallax-opacity], [data-ymq_swiper-parallax-scale]').each(function (el) {
          ymq_swiper.parallax.setTransform(el, slideProgress);
        });
      });
    },
    setTransition: function setTransition(duration) {
      if (duration === void 0) {
        duration = this.params.speed;
      }

      var ymq_swiper = this;
      var $el = ymq_swiper.$el;
      $el.find('[data-ymq_swiper-parallax], [data-ymq_swiper-parallax-x], [data-ymq_swiper-parallax-y], [data-ymq_swiper-parallax-opacity], [data-ymq_swiper-parallax-scale]').each(function (parallaxEl) {
        var $parallaxEl = $(parallaxEl);
        var parallaxDuration = parseInt($parallaxEl.attr('data-ymq_swiper-parallax-duration'), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        $parallaxEl.transition(parallaxDuration);
      });
    }
  };
  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        parallax: _extends({}, Parallax)
      });
    },
    on: {
      beforeInit: function beforeInit(ymq_swiper) {
        if (!ymq_swiper.params.parallax.enabled) return;
        ymq_swiper.params.watchSlidesProgress = true;
        ymq_swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init(ymq_swiper) {
        if (!ymq_swiper.params.parallax.enabled) return;
        ymq_swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate(ymq_swiper) {
        if (!ymq_swiper.params.parallax.enabled) return;
        ymq_swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(ymq_swiper, duration) {
        if (!ymq_swiper.params.parallax.enabled) return;
        ymq_swiper.parallax.setTransition(duration);
      }
    }
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var ymq_swiper = this;
      var support = ymq_swiper.support;
      var params = ymq_swiper.params.zoom;
      var zoom = ymq_swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;

      if (!support.gestures) {
        if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
          return;
        }

        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }

      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest("." + ymq_swiper.params.slideClass);
        if (gesture.$slideEl.length === 0) gesture.$slideEl = ymq_swiper.slides.eq(ymq_swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .ymq_swiper-zoom-target');
        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-ymq_swiper-zoom') || params.maxRatio;

        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }

      if (gesture.$imageEl) {
        gesture.$imageEl.transition(0);
      }

      ymq_swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var ymq_swiper = this;
      var support = ymq_swiper.support;
      var params = ymq_swiper.params.zoom;
      var zoom = ymq_swiper.zoom;
      var gesture = zoom.gesture;

      if (!support.gestures) {
        if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
          return;
        }

        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        if (e.type === 'gesturechange') zoom.onGestureStart(e);
        return;
      }

      if (support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
      }

      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }

      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
      }

      gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    onGestureEnd: function onGestureEnd(e) {
      var ymq_swiper = this;
      var device = ymq_swiper.device;
      var support = ymq_swiper.support;
      var params = ymq_swiper.params.zoom;
      var zoom = ymq_swiper.zoom;
      var gesture = zoom.gesture;

      if (!support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }

        if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
          return;
        }

        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(ymq_swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) gesture.$slideEl = undefined;
    },
    onTouchStart: function onTouchStart(e) {
      var ymq_swiper = this;
      var device = ymq_swiper.device;
      var zoom = ymq_swiper.zoom;
      var gesture = zoom.gesture,
          image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var ymq_swiper = this;
      var zoom = ymq_swiper.zoom;
      var gesture = zoom.gesture,
          image = zoom.image,
          velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      ymq_swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) return;

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);

        if (ymq_swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      } // Define if we need image drag


      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (ymq_swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          return;
        }

        if (!ymq_swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          return;
        }
      }

      if (e.cancelable) {
        e.preventDefault();
      }

      e.stopPropagation();
      image.isMoved = true;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
      }

      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
      }

      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
      }

      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
      } // Velocity


      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTouchEnd: function onTouchEnd() {
      var ymq_swiper = this;
      var zoom = ymq_swiper.zoom;
      var gesture = zoom.gesture,
          image = zoom.image,
          velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }

      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY; // Fix duration

      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY; // Define if we need image drag

      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTransitionEnd: function onTransitionEnd() {
      var ymq_swiper = this;
      var zoom = ymq_swiper.zoom;
      var gesture = zoom.gesture;

      if (gesture.$slideEl && ymq_swiper.previousIndex !== ymq_swiper.activeIndex) {
        if (gesture.$imageEl) {
          gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        }

        if (gesture.$imageWrapEl) {
          gesture.$imageWrapEl.transform('translate3d(0,0,0)');
        }

        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var ymq_swiper = this;
      var zoom = ymq_swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function _in(e) {
      var ymq_swiper = this;
      var window = getWindow();
      var zoom = ymq_swiper.zoom;
      var params = ymq_swiper.params.zoom;
      var gesture = zoom.gesture,
          image = zoom.image;

      if (!gesture.$slideEl) {
        if (ymq_swiper.params.virtual && ymq_swiper.params.virtual.enabled && ymq_swiper.virtual) {
          gesture.$slideEl = ymq_swiper.$wrapperEl.children("." + ymq_swiper.params.slideActiveClass);
        } else {
          gesture.$slideEl = ymq_swiper.slides.eq(ymq_swiper.activeIndex);
        }

        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .ymq_swiper-zoom-target');
        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      gesture.$slideEl.addClass("" + params.zoomedSlideClass);
      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-ymq_swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-ymq_swiper-zoom') || params.maxRatio;

      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left + window.scrollX;
        offsetY = gesture.$slideEl.offset().top + window.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }

        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }

        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }

      gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
      gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    out: function out() {
      var ymq_swiper = this;
      var zoom = ymq_swiper.zoom;
      var params = ymq_swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        if (ymq_swiper.params.virtual && ymq_swiper.params.virtual.enabled && ymq_swiper.virtual) {
          gesture.$slideEl = ymq_swiper.$wrapperEl.children("." + ymq_swiper.params.slideActiveClass);
        } else {
          gesture.$slideEl = ymq_swiper.slides.eq(ymq_swiper.activeIndex);
        }

        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .ymq_swiper-zoom-target');
        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
      gesture.$slideEl = undefined;
    },
    toggleGestures: function toggleGestures(method) {
      var ymq_swiper = this;
      var zoom = ymq_swiper.zoom;
      var selector = zoom.slideSelector,
          passive = zoom.passiveListener;
      ymq_swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
      ymq_swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
      ymq_swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
    },
    enableGestures: function enableGestures() {
      if (this.zoom.gesturesEnabled) return;
      this.zoom.gesturesEnabled = true;
      this.zoom.toggleGestures('on');
    },
    disableGestures: function disableGestures() {
      if (!this.zoom.gesturesEnabled) return;
      this.zoom.gesturesEnabled = false;
      this.zoom.toggleGestures('off');
    },
    // Attach/Detach Events
    enable: function enable() {
      var ymq_swiper = this;
      var support = ymq_swiper.support;
      var zoom = ymq_swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      var passiveListener = ymq_swiper.touchEvents.start === 'touchstart' && support.passiveListener && ymq_swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      var activeListenerWithCapture = support.passiveListener ? {
        passive: false,
        capture: true
      } : true;
      var slideSelector = "." + ymq_swiper.params.slideClass;
      ymq_swiper.zoom.passiveListener = passiveListener;
      ymq_swiper.zoom.slideSelector = slideSelector; // Scale image

      if (support.gestures) {
        ymq_swiper.$wrapperEl.on(ymq_swiper.touchEvents.start, ymq_swiper.zoom.enableGestures, passiveListener);
        ymq_swiper.$wrapperEl.on(ymq_swiper.touchEvents.end, ymq_swiper.zoom.disableGestures, passiveListener);
      } else if (ymq_swiper.touchEvents.start === 'touchstart') {
        ymq_swiper.$wrapperEl.on(ymq_swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
        ymq_swiper.$wrapperEl.on(ymq_swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
        ymq_swiper.$wrapperEl.on(ymq_swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

        if (ymq_swiper.touchEvents.cancel) {
          ymq_swiper.$wrapperEl.on(ymq_swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
        }
      } // Move image


      ymq_swiper.$wrapperEl.on(ymq_swiper.touchEvents.move, "." + ymq_swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
    },
    disable: function disable() {
      var ymq_swiper = this;
      var zoom = ymq_swiper.zoom;
      if (!zoom.enabled) return;
      var support = ymq_swiper.support;
      ymq_swiper.zoom.enabled = false;
      var passiveListener = ymq_swiper.touchEvents.start === 'touchstart' && support.passiveListener && ymq_swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      var activeListenerWithCapture = support.passiveListener ? {
        passive: false,
        capture: true
      } : true;
      var slideSelector = "." + ymq_swiper.params.slideClass; // Scale image

      if (support.gestures) {
        ymq_swiper.$wrapperEl.off(ymq_swiper.touchEvents.start, ymq_swiper.zoom.enableGestures, passiveListener);
        ymq_swiper.$wrapperEl.off(ymq_swiper.touchEvents.end, ymq_swiper.zoom.disableGestures, passiveListener);
      } else if (ymq_swiper.touchEvents.start === 'touchstart') {
        ymq_swiper.$wrapperEl.off(ymq_swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
        ymq_swiper.$wrapperEl.off(ymq_swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
        ymq_swiper.$wrapperEl.off(ymq_swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

        if (ymq_swiper.touchEvents.cancel) {
          ymq_swiper.$wrapperEl.off(ymq_swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
        }
      } // Move image


      ymq_swiper.$wrapperEl.off(ymq_swiper.touchEvents.move, "." + ymq_swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
    }
  };
  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'ymq_swiper-zoom-container',
        zoomedSlideClass: 'ymq_swiper-slide-zoomed'
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        zoom: _extends({
          enabled: false,
          scale: 1,
          currentScale: 1,
          isScaling: false,
          gesture: {
            $slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            $imageEl: undefined,
            $imageWrapEl: undefined,
            maxRatio: 3
          },
          image: {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
          }
        }, Zoom)
      });
      var scale = 1;
      Object.defineProperty(ymq_swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = ymq_swiper.zoom.gesture.$imageEl ? ymq_swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = ymq_swiper.zoom.gesture.$slideEl ? ymq_swiper.zoom.gesture.$slideEl[0] : undefined;
            ymq_swiper.emit('zoomChange', value, imageEl, slideEl);
          }

          scale = value;
        }
      });
    },
    on: {
      init: function init(ymq_swiper) {
        if (ymq_swiper.params.zoom.enabled) {
          ymq_swiper.zoom.enable();
        }
      },
      destroy: function destroy(ymq_swiper) {
        ymq_swiper.zoom.disable();
      },
      touchStart: function touchStart(ymq_swiper, e) {
        if (!ymq_swiper.zoom.enabled) return;
        ymq_swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(ymq_swiper, e) {
        if (!ymq_swiper.zoom.enabled) return;
        ymq_swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(ymq_swiper, e) {
        if (!ymq_swiper.animating && ymq_swiper.params.zoom.enabled && ymq_swiper.zoom.enabled && ymq_swiper.params.zoom.toggle) {
          ymq_swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd(ymq_swiper) {
        if (ymq_swiper.zoom.enabled && ymq_swiper.params.zoom.enabled) {
          ymq_swiper.zoom.onTransitionEnd();
        }
      },
      slideChange: function slideChange(ymq_swiper) {
        if (ymq_swiper.zoom.enabled && ymq_swiper.params.zoom.enabled && ymq_swiper.params.cssMode) {
          ymq_swiper.zoom.onTransitionEnd();
        }
      }
    }
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if (loadInDuplicate === void 0) {
        loadInDuplicate = true;
      }

      var ymq_swiper = this;
      var params = ymq_swiper.params.lazy;
      if (typeof index === 'undefined') return;
      if (ymq_swiper.slides.length === 0) return;
      var isVirtual = ymq_swiper.virtual && ymq_swiper.params.virtual.enabled;
      var $slideEl = isVirtual ? ymq_swiper.$wrapperEl.children("." + ymq_swiper.params.slideClass + "[data-ymq_swiper-slide-index=\"" + index + "\"]") : ymq_swiper.slides.eq(index);
      var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images.push($slideEl[0]);
      }

      if ($images.length === 0) return;
      $images.each(function (imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);
        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');
        var $pictureEl = $imageEl.parent('picture');
        ymq_swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
          if (typeof ymq_swiper === 'undefined' || ymq_swiper === null || !ymq_swiper || ymq_swiper && !ymq_swiper.params || ymq_swiper.destroyed) return;

          if (background) {
            $imageEl.css('background-image', "url(\"" + background + "\")");
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }

            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }

            if ($pictureEl.length) {
              $pictureEl.children('source').each(function (sourceEl) {
                var $source = $(sourceEl);

                if ($source.attr('data-srcset')) {
                  $source.attr('srcset', $source.attr('data-srcset'));
                  $source.removeAttr('data-srcset');
                }
              });
            }

            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find("." + params.preloaderClass).remove();

          if (ymq_swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-ymq_swiper-slide-index');

            if ($slideEl.hasClass(ymq_swiper.params.slideDuplicateClass)) {
              var originalSlide = ymq_swiper.$wrapperEl.children("[data-ymq_swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + ymq_swiper.params.slideDuplicateClass + ")");
              ymq_swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = ymq_swiper.$wrapperEl.children("." + ymq_swiper.params.slideDuplicateClass + "[data-ymq_swiper-slide-index=\"" + slideOriginalIndex + "\"]");
              ymq_swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }

          ymq_swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

          if (ymq_swiper.params.autoHeight) {
            ymq_swiper.updateAutoHeight();
          }
        });
        ymq_swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var ymq_swiper = this;
      var $wrapperEl = ymq_swiper.$wrapperEl,
          ymq_swiperParams = ymq_swiper.params,
          slides = ymq_swiper.slides,
          activeIndex = ymq_swiper.activeIndex;
      var isVirtual = ymq_swiper.virtual && ymq_swiperParams.virtual.enabled;
      var params = ymq_swiperParams.lazy;
      var slidesPerView = ymq_swiperParams.slidesPerView;

      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children("." + ymq_swiperParams.slideClass + "[data-ymq_swiper-slide-index=\"" + index + "\"]").length) {
            return true;
          }
        } else if (slides[index]) return true;

        return false;
      }

      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-ymq_swiper-slide-index');
        }

        return $(slideEl).index();
      }

      if (!ymq_swiper.lazy.initialImageLoaded) ymq_swiper.lazy.initialImageLoaded = true;

      if (ymq_swiper.params.watchSlidesVisibility) {
        $wrapperEl.children("." + ymq_swiperParams.slideVisibleClass).each(function (slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-ymq_swiper-slide-index') : $(slideEl).index();
          ymq_swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) ymq_swiper.lazy.loadInSlide(i);
        }
      } else {
        ymq_swiper.lazy.loadInSlide(activeIndex);
      }

      if (params.loadPrevNext) {
        if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

          for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
            if (slideExist(_i)) ymq_swiper.lazy.loadInSlide(_i);
          } // Prev Slides


          for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
            if (slideExist(_i2)) ymq_swiper.lazy.loadInSlide(_i2);
          }
        } else {
          var nextSlide = $wrapperEl.children("." + ymq_swiperParams.slideNextClass);
          if (nextSlide.length > 0) ymq_swiper.lazy.loadInSlide(slideIndex(nextSlide));
          var prevSlide = $wrapperEl.children("." + ymq_swiperParams.slidePrevClass);
          if (prevSlide.length > 0) ymq_swiper.lazy.loadInSlide(slideIndex(prevSlide));
        }
      }
    },
    checkInViewOnLoad: function checkInViewOnLoad() {
      var window = getWindow();
      var ymq_swiper = this;
      if (!ymq_swiper || ymq_swiper.destroyed) return;
      var $scrollElement = ymq_swiper.params.lazy.scrollingElement ? $(ymq_swiper.params.lazy.scrollingElement) : $(window);
      var isWindow = $scrollElement[0] === window;
      var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
      var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
      var ymq_swiperOffset = ymq_swiper.$el.offset();
      var rtl = ymq_swiper.rtlTranslate;
      var inView = false;
      if (rtl) ymq_swiperOffset.left -= ymq_swiper.$el[0].scrollLeft;
      var ymq_swiperCoord = [[ymq_swiperOffset.left, ymq_swiperOffset.top], [ymq_swiperOffset.left + ymq_swiper.width, ymq_swiperOffset.top], [ymq_swiperOffset.left, ymq_swiperOffset.top + ymq_swiper.height], [ymq_swiperOffset.left + ymq_swiper.width, ymq_swiperOffset.top + ymq_swiper.height]];

      for (var i = 0; i < ymq_swiperCoord.length; i += 1) {
        var point = ymq_swiperCoord[i];

        if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (inView) {
        ymq_swiper.lazy.load();
        $scrollElement.off('scroll', ymq_swiper.lazy.checkInViewOnLoad);
      } else if (!ymq_swiper.lazy.scrollHandlerAttached) {
        ymq_swiper.lazy.scrollHandlerAttached = true;
        $scrollElement.on('scroll', ymq_swiper.lazy.checkInViewOnLoad);
      }
    }
  };
  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        checkInView: false,
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
        scrollingElement: '',
        elementClass: 'ymq_swiper-lazy',
        loadingClass: 'ymq_swiper-lazy-loading',
        loadedClass: 'ymq_swiper-lazy-loaded',
        preloaderClass: 'ymq_swiper-lazy-preloader'
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        lazy: _extends({
          initialImageLoaded: false
        }, Lazy)
      });
    },
    on: {
      beforeInit: function beforeInit(ymq_swiper) {
        if (ymq_swiper.params.lazy.enabled && ymq_swiper.params.preloadImages) {
          ymq_swiper.params.preloadImages = false;
        }
      },
      init: function init(ymq_swiper) {
        if (ymq_swiper.params.lazy.enabled && !ymq_swiper.params.loop && ymq_swiper.params.initialSlide === 0) {
          if (ymq_swiper.params.lazy.checkInView) {
            ymq_swiper.lazy.checkInViewOnLoad();
          } else {
            ymq_swiper.lazy.load();
          }
        }
      },
      scroll: function scroll(ymq_swiper) {
        if (ymq_swiper.params.freeMode && !ymq_swiper.params.freeModeSticky) {
          ymq_swiper.lazy.load();
        }
      },
      'scrollbarDragMove resize _freeModeNoMomentumRelease': function lazyLoad(ymq_swiper) {
        if (ymq_swiper.params.lazy.enabled) {
          ymq_swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart(ymq_swiper) {
        if (ymq_swiper.params.lazy.enabled) {
          if (ymq_swiper.params.lazy.loadOnTransitionStart || !ymq_swiper.params.lazy.loadOnTransitionStart && !ymq_swiper.lazy.initialImageLoaded) {
            ymq_swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd(ymq_swiper) {
        if (ymq_swiper.params.lazy.enabled && !ymq_swiper.params.lazy.loadOnTransitionStart) {
          ymq_swiper.lazy.load();
        }
      },
      slideChange: function slideChange(ymq_swiper) {
        if (ymq_swiper.params.lazy.enabled && ymq_swiper.params.cssMode) {
          ymq_swiper.lazy.load();
        }
      }
    }
  };

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;

          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;

            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }

          return maxIndex;
        };
      }();

      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.

      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };

      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var ymq_swiper = this;

      if (!ymq_swiper.controller.spline) {
        ymq_swiper.controller.spline = ymq_swiper.params.loop ? new Controller.LinearSpline(ymq_swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(ymq_swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(_setTranslate, byController) {
      var ymq_swiper = this;
      var controlled = ymq_swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      var ymq_swiper = ymq_swiper.constructor;

      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = ymq_swiper.rtlTranslate ? -ymq_swiper.translate : ymq_swiper.translate;

        if (ymq_swiper.params.controller.by === 'slide') {
          ymq_swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out

          controlledTranslate = -ymq_swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || ymq_swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (ymq_swiper.maxTranslate() - ymq_swiper.minTranslate());
          controlledTranslate = (translate - ymq_swiper.minTranslate()) * multiplier + c.minTranslate();
        }

        if (ymq_swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }

        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, ymq_swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }

      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof ymq_swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof ymq_swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var ymq_swiper = this;
      var ymq_swiper = ymq_swiper.constructor;
      var controlled = ymq_swiper.controller.control;
      var i;

      function setControlledTransition(c) {
        c.setTransition(duration, ymq_swiper);

        if (duration !== 0) {
          c.transitionStart();

          if (c.params.autoHeight) {
            nextTick(function () {
              c.updateAutoHeight();
            });
          }

          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) return;

            if (c.params.loop && ymq_swiper.params.controller.by === 'slide') {
              c.loopFix();
            }

            c.transitionEnd();
          });
        }
      }

      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof ymq_swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof ymq_swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide' // or 'container'

      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        controller: _extends({
          control: ymq_swiper.params.controller.control
        }, Controller)
      });
    },
    on: {
      update: function update(ymq_swiper) {
        if (!ymq_swiper.controller.control) return;

        if (ymq_swiper.controller.spline) {
          ymq_swiper.controller.spline = undefined;
          delete ymq_swiper.controller.spline;
        }
      },
      resize: function resize(ymq_swiper) {
        if (!ymq_swiper.controller.control) return;

        if (ymq_swiper.controller.spline) {
          ymq_swiper.controller.spline = undefined;
          delete ymq_swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate(ymq_swiper) {
        if (!ymq_swiper.controller.control) return;

        if (ymq_swiper.controller.spline) {
          ymq_swiper.controller.spline = undefined;
          delete ymq_swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(ymq_swiper, translate, byController) {
        if (!ymq_swiper.controller.control) return;
        ymq_swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(ymq_swiper, duration, byController) {
        if (!ymq_swiper.controller.control) return;
        ymq_swiper.controller.setTransition(duration, byController);
      }
    }
  };

  var A11y = {
    getRandomNumber: function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }

      var randomChar = function randomChar() {
        return Math.round(16 * Math.random()).toString(16);
      };

      return 'x'.repeat(size).replace(/x/g, randomChar);
    },
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    makeElNotFocusable: function makeElNotFocusable($el) {
      $el.attr('tabIndex', '-1');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElRoleDescription: function addElRoleDescription($el, description) {
      $el.attr('aria-roledescription', description);
      return $el;
    },
    addElControls: function addElControls($el, controls) {
      $el.attr('aria-controls', controls);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    addElId: function addElId($el, id) {
      $el.attr('id', id);
      return $el;
    },
    addElLive: function addElLive($el, live) {
      $el.attr('aria-live', live);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      var ymq_swiper = this;
      var params = ymq_swiper.params.a11y;
      var $targetEl = $(e.target);

      if (ymq_swiper.navigation && ymq_swiper.navigation.$nextEl && $targetEl.is(ymq_swiper.navigation.$nextEl)) {
        if (!(ymq_swiper.isEnd && !ymq_swiper.params.loop)) {
          ymq_swiper.slideNext();
        }

        if (ymq_swiper.isEnd) {
          ymq_swiper.a11y.notify(params.lastSlideMessage);
        } else {
          ymq_swiper.a11y.notify(params.nextSlideMessage);
        }
      }

      if (ymq_swiper.navigation && ymq_swiper.navigation.$prevEl && $targetEl.is(ymq_swiper.navigation.$prevEl)) {
        if (!(ymq_swiper.isBeginning && !ymq_swiper.params.loop)) {
          ymq_swiper.slidePrev();
        }

        if (ymq_swiper.isBeginning) {
          ymq_swiper.a11y.notify(params.firstSlideMessage);
        } else {
          ymq_swiper.a11y.notify(params.prevSlideMessage);
        }
      }

      if (ymq_swiper.pagination && $targetEl.is(classesToSelector(ymq_swiper.params.pagination.bulletClass))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var ymq_swiper = this;
      var notification = ymq_swiper.a11y.liveRegion;
      if (notification.length === 0) return;
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var ymq_swiper = this;
      if (ymq_swiper.params.loop || !ymq_swiper.navigation) return;
      var _ymq_swiper$navigation = ymq_swiper.navigation,
          $nextEl = _ymq_swiper$navigation.$nextEl,
          $prevEl = _ymq_swiper$navigation.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (ymq_swiper.isBeginning) {
          ymq_swiper.a11y.disableEl($prevEl);
          ymq_swiper.a11y.makeElNotFocusable($prevEl);
        } else {
          ymq_swiper.a11y.enableEl($prevEl);
          ymq_swiper.a11y.makeElFocusable($prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        if (ymq_swiper.isEnd) {
          ymq_swiper.a11y.disableEl($nextEl);
          ymq_swiper.a11y.makeElNotFocusable($nextEl);
        } else {
          ymq_swiper.a11y.enableEl($nextEl);
          ymq_swiper.a11y.makeElFocusable($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var ymq_swiper = this;
      var params = ymq_swiper.params.a11y;

      if (ymq_swiper.pagination && ymq_swiper.params.pagination.clickable && ymq_swiper.pagination.bullets && ymq_swiper.pagination.bullets.length) {
        ymq_swiper.pagination.bullets.each(function (bulletEl) {
          var $bulletEl = $(bulletEl);
          ymq_swiper.a11y.makeElFocusable($bulletEl);

          if (!ymq_swiper.params.pagination.renderBullet) {
            ymq_swiper.a11y.addElRole($bulletEl, 'button');
            ymq_swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
          }
        });
      }
    },
    init: function init() {
      var ymq_swiper = this;
      var params = ymq_swiper.params.a11y;
      ymq_swiper.$el.append(ymq_swiper.a11y.liveRegion); // Container

      var $containerEl = ymq_swiper.$el;

      if (params.containerRoleDescriptionMessage) {
        ymq_swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
      }

      if (params.containerMessage) {
        ymq_swiper.a11y.addElLabel($containerEl, params.containerMessage);
      } // Wrapper


      var $wrapperEl = ymq_swiper.$wrapperEl;
      var wrapperId = $wrapperEl.attr('id') || "ymq_swiper-wrapper-" + ymq_swiper.a11y.getRandomNumber(16);
      var live;
      ymq_swiper.a11y.addElId($wrapperEl, wrapperId);

      if (ymq_swiper.params.autoplay && ymq_swiper.params.autoplay.enabled) {
        live = 'off';
      } else {
        live = 'polite';
      }

      ymq_swiper.a11y.addElLive($wrapperEl, live); // Slide

      if (params.itemRoleDescriptionMessage) {
        ymq_swiper.a11y.addElRoleDescription($(ymq_swiper.slides), params.itemRoleDescriptionMessage);
      }

      ymq_swiper.a11y.addElRole($(ymq_swiper.slides), params.slideRole);
      ymq_swiper.slides.each(function (slideEl) {
        var $slideEl = $(slideEl);
        var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, $slideEl.index() + 1).replace(/\{\{slidesLength\}\}/, ymq_swiper.slides.length);
        ymq_swiper.a11y.addElLabel($slideEl, ariaLabelMessage);
      }); // Navigation

      var $nextEl;
      var $prevEl;

      if (ymq_swiper.navigation && ymq_swiper.navigation.$nextEl) {
        $nextEl = ymq_swiper.navigation.$nextEl;
      }

      if (ymq_swiper.navigation && ymq_swiper.navigation.$prevEl) {
        $prevEl = ymq_swiper.navigation.$prevEl;
      }

      if ($nextEl && $nextEl.length) {
        ymq_swiper.a11y.makeElFocusable($nextEl);

        if ($nextEl[0].tagName !== 'BUTTON') {
          ymq_swiper.a11y.addElRole($nextEl, 'button');
          $nextEl.on('keydown', ymq_swiper.a11y.onEnterOrSpaceKey);
        }

        ymq_swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        ymq_swiper.a11y.addElControls($nextEl, wrapperId);
      }

      if ($prevEl && $prevEl.length) {
        ymq_swiper.a11y.makeElFocusable($prevEl);

        if ($prevEl[0].tagName !== 'BUTTON') {
          ymq_swiper.a11y.addElRole($prevEl, 'button');
          $prevEl.on('keydown', ymq_swiper.a11y.onEnterOrSpaceKey);
        }

        ymq_swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        ymq_swiper.a11y.addElControls($prevEl, wrapperId);
      } // Pagination


      if (ymq_swiper.pagination && ymq_swiper.params.pagination.clickable && ymq_swiper.pagination.bullets && ymq_swiper.pagination.bullets.length) {
        ymq_swiper.pagination.$el.on('keydown', classesToSelector(ymq_swiper.params.pagination.bulletClass), ymq_swiper.a11y.onEnterOrSpaceKey);
      }
    },
    destroy: function destroy() {
      var ymq_swiper = this;
      if (ymq_swiper.a11y.liveRegion && ymq_swiper.a11y.liveRegion.length > 0) ymq_swiper.a11y.liveRegion.remove();
      var $nextEl;
      var $prevEl;

      if (ymq_swiper.navigation && ymq_swiper.navigation.$nextEl) {
        $nextEl = ymq_swiper.navigation.$nextEl;
      }

      if (ymq_swiper.navigation && ymq_swiper.navigation.$prevEl) {
        $prevEl = ymq_swiper.navigation.$prevEl;
      }

      if ($nextEl) {
        $nextEl.off('keydown', ymq_swiper.a11y.onEnterOrSpaceKey);
      }

      if ($prevEl) {
        $prevEl.off('keydown', ymq_swiper.a11y.onEnterOrSpaceKey);
      } // Pagination


      if (ymq_swiper.pagination && ymq_swiper.params.pagination.clickable && ymq_swiper.pagination.bullets && ymq_swiper.pagination.bullets.length) {
        ymq_swiper.pagination.$el.off('keydown', classesToSelector(ymq_swiper.params.pagination.bulletClass), ymq_swiper.a11y.onEnterOrSpaceKey);
      }
    }
  };
  var A11y$1 = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'ymq_swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        slideLabelMessage: '{{index}} / {{slidesLength}}',
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: 'group'
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        a11y: _extends({}, A11y, {
          liveRegion: $("<span class=\"" + ymq_swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
        })
      });
    },
    on: {
      afterInit: function afterInit(ymq_swiper) {
        if (!ymq_swiper.params.a11y.enabled) return;
        ymq_swiper.a11y.init();
        ymq_swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge(ymq_swiper) {
        if (!ymq_swiper.params.a11y.enabled) return;
        ymq_swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge(ymq_swiper) {
        if (!ymq_swiper.params.a11y.enabled) return;
        ymq_swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate(ymq_swiper) {
        if (!ymq_swiper.params.a11y.enabled) return;
        ymq_swiper.a11y.updatePagination();
      },
      destroy: function destroy(ymq_swiper) {
        if (!ymq_swiper.params.a11y.enabled) return;
        ymq_swiper.a11y.destroy();
      }
    }
  };

  var History = {
    init: function init() {
      var ymq_swiper = this;
      var window = getWindow();
      if (!ymq_swiper.params.history) return;

      if (!window.history || !window.history.pushState) {
        ymq_swiper.params.history.enabled = false;
        ymq_swiper.params.hashNavigation.enabled = true;
        return;
      }

      var history = ymq_swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues(ymq_swiper.params.url);
      if (!history.paths.key && !history.paths.value) return;
      history.scrollToSlide(0, history.paths.value, ymq_swiper.params.runCallbacksOnInit);

      if (!ymq_swiper.params.history.replaceState) {
        window.addEventListener('popstate', ymq_swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var ymq_swiper = this;
      var window = getWindow();

      if (!ymq_swiper.params.history.replaceState) {
        window.removeEventListener('popstate', ymq_swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var ymq_swiper = this;
      ymq_swiper.history.paths = History.getPathValues(ymq_swiper.params.url);
      ymq_swiper.history.scrollToSlide(ymq_swiper.params.speed, ymq_swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues(urlOverride) {
      var window = getWindow();
      var location;

      if (urlOverride) {
        location = new URL(urlOverride);
      } else {
        location = window.location;
      }

      var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
        return part !== '';
      });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return {
        key: key,
        value: value
      };
    },
    setHistory: function setHistory(key, index) {
      var ymq_swiper = this;
      var window = getWindow();
      if (!ymq_swiper.history.initialized || !ymq_swiper.params.history.enabled) return;
      var location;

      if (ymq_swiper.params.url) {
        location = new URL(ymq_swiper.params.url);
      } else {
        location = window.location;
      }

      var slide = ymq_swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));

      if (ymq_swiper.params.history.root.length > 0) {
        var root = ymq_swiper.params.history.root;
        if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
        value = root + "/" + key + "/" + value;
      } else if (!location.pathname.includes(key)) {
        value = key + "/" + value;
      }

      var currentState = window.history.state;

      if (currentState && currentState.value === value) {
        return;
      }

      if (ymq_swiper.params.history.replaceState) {
        window.history.replaceState({
          value: value
        }, null, value);
      } else {
        window.history.pushState({
          value: value
        }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var ymq_swiper = this;

      if (value) {
        for (var i = 0, length = ymq_swiper.slides.length; i < length; i += 1) {
          var slide = ymq_swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));

          if (slideHistory === value && !slide.hasClass(ymq_swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            ymq_swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        ymq_swiper.slideTo(0, speed, runCallbacks);
      }
    }
  };
  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        root: '',
        replaceState: false,
        key: 'slides'
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        history: _extends({}, History)
      });
    },
    on: {
      init: function init(ymq_swiper) {
        if (ymq_swiper.params.history.enabled) {
          ymq_swiper.history.init();
        }
      },
      destroy: function destroy(ymq_swiper) {
        if (ymq_swiper.params.history.enabled) {
          ymq_swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd(ymq_swiper) {
        if (ymq_swiper.history.initialized) {
          ymq_swiper.history.setHistory(ymq_swiper.params.history.key, ymq_swiper.activeIndex);
        }
      },
      slideChange: function slideChange(ymq_swiper) {
        if (ymq_swiper.history.initialized && ymq_swiper.params.cssMode) {
          ymq_swiper.history.setHistory(ymq_swiper.params.history.key, ymq_swiper.activeIndex);
        }
      }
    }
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var ymq_swiper = this;
      var document = getDocument();
      ymq_swiper.emit('hashChange');
      var newHash = document.location.hash.replace('#', '');
      var activeSlideHash = ymq_swiper.slides.eq(ymq_swiper.activeIndex).attr('data-hash');

      if (newHash !== activeSlideHash) {
        var newIndex = ymq_swiper.$wrapperEl.children("." + ymq_swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
        if (typeof newIndex === 'undefined') return;
        ymq_swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var ymq_swiper = this;
      var window = getWindow();
      var document = getDocument();
      if (!ymq_swiper.hashNavigation.initialized || !ymq_swiper.params.hashNavigation.enabled) return;

      if (ymq_swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
        window.history.replaceState(null, null, "#" + ymq_swiper.slides.eq(ymq_swiper.activeIndex).attr('data-hash') || '');
        ymq_swiper.emit('hashSet');
      } else {
        var slide = ymq_swiper.slides.eq(ymq_swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        document.location.hash = hash || '';
        ymq_swiper.emit('hashSet');
      }
    },
    init: function init() {
      var ymq_swiper = this;
      var document = getDocument();
      var window = getWindow();
      if (!ymq_swiper.params.hashNavigation.enabled || ymq_swiper.params.history && ymq_swiper.params.history.enabled) return;
      ymq_swiper.hashNavigation.initialized = true;
      var hash = document.location.hash.replace('#', '');

      if (hash) {
        var speed = 0;

        for (var i = 0, length = ymq_swiper.slides.length; i < length; i += 1) {
          var slide = ymq_swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');

          if (slideHash === hash && !slide.hasClass(ymq_swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            ymq_swiper.slideTo(index, speed, ymq_swiper.params.runCallbacksOnInit, true);
          }
        }
      }

      if (ymq_swiper.params.hashNavigation.watchState) {
        $(window).on('hashchange', ymq_swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var ymq_swiper = this;
      var window = getWindow();

      if (ymq_swiper.params.hashNavigation.watchState) {
        $(window).off('hashchange', ymq_swiper.hashNavigation.onHashCange);
      }
    }
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        hashNavigation: _extends({
          initialized: false
        }, HashNavigation)
      });
    },
    on: {
      init: function init(ymq_swiper) {
        if (ymq_swiper.params.hashNavigation.enabled) {
          ymq_swiper.hashNavigation.init();
        }
      },
      destroy: function destroy(ymq_swiper) {
        if (ymq_swiper.params.hashNavigation.enabled) {
          ymq_swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd(ymq_swiper) {
        if (ymq_swiper.hashNavigation.initialized) {
          ymq_swiper.hashNavigation.setHash();
        }
      },
      slideChange: function slideChange(ymq_swiper) {
        if (ymq_swiper.hashNavigation.initialized && ymq_swiper.params.cssMode) {
          ymq_swiper.hashNavigation.setHash();
        }
      }
    }
  };

  var Autoplay = {
    run: function run() {
      var ymq_swiper = this;
      var $activeSlideEl = ymq_swiper.slides.eq(ymq_swiper.activeIndex);
      var delay = ymq_swiper.params.autoplay.delay;

      if ($activeSlideEl.attr('data-ymq_swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-ymq_swiper-autoplay') || ymq_swiper.params.autoplay.delay;
      }

      clearTimeout(ymq_swiper.autoplay.timeout);
      ymq_swiper.autoplay.timeout = nextTick(function () {
        var autoplayResult;

        if (ymq_swiper.params.autoplay.reverseDirection) {
          if (ymq_swiper.params.loop) {
            ymq_swiper.loopFix();
            autoplayResult = ymq_swiper.slidePrev(ymq_swiper.params.speed, true, true);
            ymq_swiper.emit('autoplay');
          } else if (!ymq_swiper.isBeginning) {
            autoplayResult = ymq_swiper.slidePrev(ymq_swiper.params.speed, true, true);
            ymq_swiper.emit('autoplay');
          } else if (!ymq_swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = ymq_swiper.slideTo(ymq_swiper.slides.length - 1, ymq_swiper.params.speed, true, true);
            ymq_swiper.emit('autoplay');
          } else {
            ymq_swiper.autoplay.stop();
          }
        } else if (ymq_swiper.params.loop) {
          ymq_swiper.loopFix();
          autoplayResult = ymq_swiper.slideNext(ymq_swiper.params.speed, true, true);
          ymq_swiper.emit('autoplay');
        } else if (!ymq_swiper.isEnd) {
          autoplayResult = ymq_swiper.slideNext(ymq_swiper.params.speed, true, true);
          ymq_swiper.emit('autoplay');
        } else if (!ymq_swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = ymq_swiper.slideTo(0, ymq_swiper.params.speed, true, true);
          ymq_swiper.emit('autoplay');
        } else {
          ymq_swiper.autoplay.stop();
        }

        if (ymq_swiper.params.cssMode && ymq_swiper.autoplay.running) ymq_swiper.autoplay.run();else if (autoplayResult === false) {
          ymq_swiper.autoplay.run();
        }
      }, delay);
    },
    start: function start() {
      var ymq_swiper = this;
      if (typeof ymq_swiper.autoplay.timeout !== 'undefined') return false;
      if (ymq_swiper.autoplay.running) return false;
      ymq_swiper.autoplay.running = true;
      ymq_swiper.emit('autoplayStart');
      ymq_swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var ymq_swiper = this;
      if (!ymq_swiper.autoplay.running) return false;
      if (typeof ymq_swiper.autoplay.timeout === 'undefined') return false;

      if (ymq_swiper.autoplay.timeout) {
        clearTimeout(ymq_swiper.autoplay.timeout);
        ymq_swiper.autoplay.timeout = undefined;
      }

      ymq_swiper.autoplay.running = false;
      ymq_swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var ymq_swiper = this;
      if (!ymq_swiper.autoplay.running) return;
      if (ymq_swiper.autoplay.paused) return;
      if (ymq_swiper.autoplay.timeout) clearTimeout(ymq_swiper.autoplay.timeout);
      ymq_swiper.autoplay.paused = true;

      if (speed === 0 || !ymq_swiper.params.autoplay.waitForTransition) {
        ymq_swiper.autoplay.paused = false;
        ymq_swiper.autoplay.run();
      } else {
        ymq_swiper.$wrapperEl[0].addEventListener('transitionend', ymq_swiper.autoplay.onTransitionEnd);
        ymq_swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', ymq_swiper.autoplay.onTransitionEnd);
      }
    },
    onVisibilityChange: function onVisibilityChange() {
      var ymq_swiper = this;
      var document = getDocument();

      if (document.visibilityState === 'hidden' && ymq_swiper.autoplay.running) {
        ymq_swiper.autoplay.pause();
      }

      if (document.visibilityState === 'visible' && ymq_swiper.autoplay.paused) {
        ymq_swiper.autoplay.run();
        ymq_swiper.autoplay.paused = false;
      }
    },
    onTransitionEnd: function onTransitionEnd(e) {
      var ymq_swiper = this;
      if (!ymq_swiper || ymq_swiper.destroyed || !ymq_swiper.$wrapperEl) return;
      if (e.target !== ymq_swiper.$wrapperEl[0]) return;
      ymq_swiper.$wrapperEl[0].removeEventListener('transitionend', ymq_swiper.autoplay.onTransitionEnd);
      ymq_swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', ymq_swiper.autoplay.onTransitionEnd);
      ymq_swiper.autoplay.paused = false;

      if (!ymq_swiper.autoplay.running) {
        ymq_swiper.autoplay.stop();
      } else {
        ymq_swiper.autoplay.run();
      }
    }
  };
  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        autoplay: _extends({}, Autoplay, {
          running: false,
          paused: false
        })
      });
    },
    on: {
      init: function init(ymq_swiper) {
        if (ymq_swiper.params.autoplay.enabled) {
          ymq_swiper.autoplay.start();
          var document = getDocument();
          document.addEventListener('visibilitychange', ymq_swiper.autoplay.onVisibilityChange);
        }
      },
      beforeTransitionStart: function beforeTransitionStart(ymq_swiper, speed, internal) {
        if (ymq_swiper.autoplay.running) {
          if (internal || !ymq_swiper.params.autoplay.disableOnInteraction) {
            ymq_swiper.autoplay.pause(speed);
          } else {
            ymq_swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove(ymq_swiper) {
        if (ymq_swiper.autoplay.running) {
          if (ymq_swiper.params.autoplay.disableOnInteraction) {
            ymq_swiper.autoplay.stop();
          } else {
            ymq_swiper.autoplay.pause();
          }
        }
      },
      touchEnd: function touchEnd(ymq_swiper) {
        if (ymq_swiper.params.cssMode && ymq_swiper.autoplay.paused && !ymq_swiper.params.autoplay.disableOnInteraction) {
          ymq_swiper.autoplay.run();
        }
      },
      destroy: function destroy(ymq_swiper) {
        if (ymq_swiper.autoplay.running) {
          ymq_swiper.autoplay.stop();
        }

        var document = getDocument();
        document.removeEventListener('visibilitychange', ymq_swiper.autoplay.onVisibilityChange);
      }
    }
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var ymq_swiper = this;
      var slides = ymq_swiper.slides;

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = ymq_swiper.slides.eq(i);
        var offset = $slideEl[0].ymq_swiperSlideOffset;
        var tx = -offset;
        if (!ymq_swiper.params.virtualTranslate) tx -= ymq_swiper.translate;
        var ty = 0;

        if (!ymq_swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }

        var slideOpacity = ymq_swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl.css({
          opacity: slideOpacity
        }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
      }
    },
    setTransition: function setTransition(duration) {
      var ymq_swiper = this;
      var slides = ymq_swiper.slides,
          $wrapperEl = ymq_swiper.$wrapperEl;
      slides.transition(duration);

      if (ymq_swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) return;
          if (!ymq_swiper || ymq_swiper.destroyed) return;
          eventTriggered = true;
          ymq_swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }
  };
  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        fadeEffect: _extends({}, Fade)
      });
    },
    on: {
      beforeInit: function beforeInit(ymq_swiper) {
        if (ymq_swiper.params.effect !== 'fade') return;
        ymq_swiper.classNames.push(ymq_swiper.params.containerModifierClass + "fade");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true
        };
        extend(ymq_swiper.params, overwriteParams);
        extend(ymq_swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate(ymq_swiper) {
        if (ymq_swiper.params.effect !== 'fade') return;
        ymq_swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(ymq_swiper, duration) {
        if (ymq_swiper.params.effect !== 'fade') return;
        ymq_swiper.fadeEffect.setTransition(duration);
      }
    }
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var ymq_swiper = this;
      var $el = ymq_swiper.$el,
          $wrapperEl = ymq_swiper.$wrapperEl,
          slides = ymq_swiper.slides,
          ymq_swiperWidth = ymq_swiper.width,
          ymq_swiperHeight = ymq_swiper.height,
          rtl = ymq_swiper.rtlTranslate,
          ymq_swiperSize = ymq_swiper.size,
          browser = ymq_swiper.browser;
      var params = ymq_swiper.params.cubeEffect;
      var isHorizontal = ymq_swiper.isHorizontal();
      var isVirtual = ymq_swiper.virtual && ymq_swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.ymq_swiper-cube-shadow');

          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="ymq_swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }

          $cubeShadowEl.css({
            height: ymq_swiperWidth + "px"
          });
        } else {
          $cubeShadowEl = $el.find('.ymq_swiper-cube-shadow');

          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="ymq_swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;

        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-ymq_swiper-slide-index'), 10);
        }

        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);

        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }

        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;

        if (slideIndex % 4 === 0) {
          tx = -round * 4 * ymq_swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * ymq_swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = ymq_swiperSize + round * 4 * ymq_swiperSize;
          tz = ymq_swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -ymq_swiperSize;
          tz = 3 * ymq_swiperSize + ymq_swiperSize * 4 * round;
        }

        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }

        $slideEl.transform(transform);

        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.ymq_swiper-slide-shadow-left') : $slideEl.find('.ymq_swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.ymq_swiper-slide-shadow-right') : $slideEl.find('.ymq_swiper-slide-shadow-bottom');

          if (shadowBefore.length === 0) {
            shadowBefore = $("<div class=\"ymq_swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
            $slideEl.append(shadowBefore);
          }

          if (shadowAfter.length === 0) {
            shadowAfter = $("<div class=\"ymq_swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
            $slideEl.append(shadowAfter);
          }

          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }
      }

      $wrapperEl.css({
        '-webkit-transform-origin': "50% 50% -" + ymq_swiperSize / 2 + "px",
        '-moz-transform-origin': "50% 50% -" + ymq_swiperSize / 2 + "px",
        '-ms-transform-origin': "50% 50% -" + ymq_swiperSize / 2 + "px",
        'transform-origin': "50% 50% -" + ymq_swiperSize / 2 + "px"
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform("translate3d(0px, " + (ymq_swiperWidth / 2 + params.shadowOffset) + "px, " + -ymq_swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (ymq_swiperHeight / 2 + offset) + "px, " + -ymq_swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
        }
      }

      var zFactor = browser.isSafari || browser.isWebView ? -ymq_swiperSize / 2 : 0;
      $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (ymq_swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (ymq_swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
    },
    setTransition: function setTransition(duration) {
      var ymq_swiper = this;
      var $el = ymq_swiper.$el,
          slides = ymq_swiper.slides;
      slides.transition(duration).find('.ymq_swiper-slide-shadow-top, .ymq_swiper-slide-shadow-right, .ymq_swiper-slide-shadow-bottom, .ymq_swiper-slide-shadow-left').transition(duration);

      if (ymq_swiper.params.cubeEffect.shadow && !ymq_swiper.isHorizontal()) {
        $el.find('.ymq_swiper-cube-shadow').transition(duration);
      }
    }
  };
  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        cubeEffect: _extends({}, Cube)
      });
    },
    on: {
      beforeInit: function beforeInit(ymq_swiper) {
        if (ymq_swiper.params.effect !== 'cube') return;
        ymq_swiper.classNames.push(ymq_swiper.params.containerModifierClass + "cube");
        ymq_swiper.classNames.push(ymq_swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true
        };
        extend(ymq_swiper.params, overwriteParams);
        extend(ymq_swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate(ymq_swiper) {
        if (ymq_swiper.params.effect !== 'cube') return;
        ymq_swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(ymq_swiper, duration) {
        if (ymq_swiper.params.effect !== 'cube') return;
        ymq_swiper.cubeEffect.setTransition(duration);
      }
    }
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var ymq_swiper = this;
      var slides = ymq_swiper.slides,
          rtl = ymq_swiper.rtlTranslate;

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;

        if (ymq_swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }

        var offset = $slideEl[0].ymq_swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;

        if (!ymq_swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (ymq_swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = ymq_swiper.isHorizontal() ? $slideEl.find('.ymq_swiper-slide-shadow-left') : $slideEl.find('.ymq_swiper-slide-shadow-top');
          var shadowAfter = ymq_swiper.isHorizontal() ? $slideEl.find('.ymq_swiper-slide-shadow-right') : $slideEl.find('.ymq_swiper-slide-shadow-bottom');

          if (shadowBefore.length === 0) {
            shadowBefore = $("<div class=\"ymq_swiper-slide-shadow-" + (ymq_swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
            $slideEl.append(shadowBefore);
          }

          if (shadowAfter.length === 0) {
            shadowAfter = $("<div class=\"ymq_swiper-slide-shadow-" + (ymq_swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
            $slideEl.append(shadowAfter);
          }

          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }

        $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
      }
    },
    setTransition: function setTransition(duration) {
      var ymq_swiper = this;
      var slides = ymq_swiper.slides,
          activeIndex = ymq_swiper.activeIndex,
          $wrapperEl = ymq_swiper.$wrapperEl;
      slides.transition(duration).find('.ymq_swiper-slide-shadow-top, .ymq_swiper-slide-shadow-right, .ymq_swiper-slide-shadow-bottom, .ymq_swiper-slide-shadow-left').transition(duration);

      if (ymq_swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false; // eslint-disable-next-line

        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) return;
          if (!ymq_swiper || ymq_swiper.destroyed) return; // if (!$(this).hasClass(ymq_swiper.params.slideActiveClass)) return;

          eventTriggered = true;
          ymq_swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }
  };
  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        flipEffect: _extends({}, Flip)
      });
    },
    on: {
      beforeInit: function beforeInit(ymq_swiper) {
        if (ymq_swiper.params.effect !== 'flip') return;
        ymq_swiper.classNames.push(ymq_swiper.params.containerModifierClass + "flip");
        ymq_swiper.classNames.push(ymq_swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true
        };
        extend(ymq_swiper.params, overwriteParams);
        extend(ymq_swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate(ymq_swiper) {
        if (ymq_swiper.params.effect !== 'flip') return;
        ymq_swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(ymq_swiper, duration) {
        if (ymq_swiper.params.effect !== 'flip') return;
        ymq_swiper.flipEffect.setTransition(duration);
      }
    }
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var ymq_swiper = this;
      var ymq_swiperWidth = ymq_swiper.width,
          ymq_swiperHeight = ymq_swiper.height,
          slides = ymq_swiper.slides,
          slidesSizesGrid = ymq_swiper.slidesSizesGrid;
      var params = ymq_swiper.params.coverflowEffect;
      var isHorizontal = ymq_swiper.isHorizontal();
      var transform = ymq_swiper.translate;
      var center = isHorizontal ? -transform + ymq_swiperWidth / 2 : -transform + ymq_swiperHeight / 2;
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth; // Each slide offset from center

      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].ymq_swiperSlideOffset;
        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

        var translateZ = -translate * Math.abs(offsetMultiplier);
        var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

        if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
          stretch = parseFloat(params.stretch) / 100 * slideSize;
        }

        var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        if (Math.abs(scale) < 0.001) scale = 0;
        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.ymq_swiper-slide-shadow-left') : $slideEl.find('.ymq_swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.ymq_swiper-slide-shadow-right') : $slideEl.find('.ymq_swiper-slide-shadow-bottom');

          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $("<div class=\"ymq_swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
            $slideEl.append($shadowBeforeEl);
          }

          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $("<div class=\"ymq_swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
            $slideEl.append($shadowAfterEl);
          }

          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    },
    setTransition: function setTransition(duration) {
      var ymq_swiper = this;
      ymq_swiper.slides.transition(duration).find('.ymq_swiper-slide-shadow-top, .ymq_swiper-slide-shadow-right, .ymq_swiper-slide-shadow-bottom, .ymq_swiper-slide-shadow-left').transition(duration);
    }
  };
  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        coverflowEffect: _extends({}, Coverflow)
      });
    },
    on: {
      beforeInit: function beforeInit(ymq_swiper) {
        if (ymq_swiper.params.effect !== 'coverflow') return;
        ymq_swiper.classNames.push(ymq_swiper.params.containerModifierClass + "coverflow");
        ymq_swiper.classNames.push(ymq_swiper.params.containerModifierClass + "3d");
        ymq_swiper.params.watchSlidesProgress = true;
        ymq_swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate(ymq_swiper) {
        if (ymq_swiper.params.effect !== 'coverflow') return;
        ymq_swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(ymq_swiper, duration) {
        if (ymq_swiper.params.effect !== 'coverflow') return;
        ymq_swiper.coverflowEffect.setTransition(duration);
      }
    }
  };

  var Thumbs = {
    init: function init() {
      var ymq_swiper = this;
      var thumbsParams = ymq_swiper.params.thumbs;
      if (ymq_swiper.thumbs.initialized) return false;
      ymq_swiper.thumbs.initialized = true;
      var ymq_swiperClass = ymq_swiper.constructor;

      if (thumbsParams.ymq_swiper instanceof ymq_swiperClass) {
        ymq_swiper.thumbs.ymq_swiper = thumbsParams.ymq_swiper;
        extend(ymq_swiper.thumbs.ymq_swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        extend(ymq_swiper.thumbs.ymq_swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
      } else if (isObject(thumbsParams.ymq_swiper)) {
        ymq_swiper.thumbs.ymq_swiper = new ymq_swiperClass(extend({}, thumbsParams.ymq_swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false
        }));
        ymq_swiper.thumbs.ymq_swiperCreated = true;
      }

      ymq_swiper.thumbs.ymq_swiper.$el.addClass(ymq_swiper.params.thumbs.thumbsContainerClass);
      ymq_swiper.thumbs.ymq_swiper.on('tap', ymq_swiper.thumbs.onThumbClick);
      return true;
    },
    onThumbClick: function onThumbClick() {
      var ymq_swiper = this;
      var thumbsymq_swiper = ymq_swiper.thumbs.ymq_swiper;
      if (!thumbsymq_swiper) return;
      var clickedIndex = thumbsymq_swiper.clickedIndex;
      var clickedSlide = thumbsymq_swiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(ymq_swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
      var slideToIndex;

      if (thumbsymq_swiper.params.loop) {
        slideToIndex = parseInt($(thumbsymq_swiper.clickedSlide).attr('data-ymq_swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }

      if (ymq_swiper.params.loop) {
        var currentIndex = ymq_swiper.activeIndex;

        if (ymq_swiper.slides.eq(currentIndex).hasClass(ymq_swiper.params.slideDuplicateClass)) {
          ymq_swiper.loopFix(); // eslint-disable-next-line

          ymq_swiper._clientLeft = ymq_swiper.$wrapperEl[0].clientLeft;
          currentIndex = ymq_swiper.activeIndex;
        }

        var prevIndex = ymq_swiper.slides.eq(currentIndex).prevAll("[data-ymq_swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
        var nextIndex = ymq_swiper.slides.eq(currentIndex).nextAll("[data-ymq_swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
        if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
      }

      ymq_swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var ymq_swiper = this;
      var thumbsymq_swiper = ymq_swiper.thumbs.ymq_swiper;
      if (!thumbsymq_swiper) return;
      var slidesPerView = thumbsymq_swiper.params.slidesPerView === 'auto' ? thumbsymq_swiper.slidesPerViewDynamic() : thumbsymq_swiper.params.slidesPerView;
      var autoScrollOffset = ymq_swiper.params.thumbs.autoScrollOffset;
      var useOffset = autoScrollOffset && !thumbsymq_swiper.params.loop;

      if (ymq_swiper.realIndex !== thumbsymq_swiper.realIndex || useOffset) {
        var currentThumbsIndex = thumbsymq_swiper.activeIndex;
        var newThumbsIndex;
        var direction;

        if (thumbsymq_swiper.params.loop) {
          if (thumbsymq_swiper.slides.eq(currentThumbsIndex).hasClass(thumbsymq_swiper.params.slideDuplicateClass)) {
            thumbsymq_swiper.loopFix(); // eslint-disable-next-line

            thumbsymq_swiper._clientLeft = thumbsymq_swiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsymq_swiper.activeIndex;
          } // Find actual thumbs index to slide to


          var prevThumbsIndex = thumbsymq_swiper.slides.eq(currentThumbsIndex).prevAll("[data-ymq_swiper-slide-index=\"" + ymq_swiper.realIndex + "\"]").eq(0).index();
          var nextThumbsIndex = thumbsymq_swiper.slides.eq(currentThumbsIndex).nextAll("[data-ymq_swiper-slide-index=\"" + ymq_swiper.realIndex + "\"]").eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
          direction = ymq_swiper.activeIndex > ymq_swiper.previousIndex ? 'next' : 'prev';
        } else {
          newThumbsIndex = ymq_swiper.realIndex;
          direction = newThumbsIndex > ymq_swiper.previousIndex ? 'next' : 'prev';
        }

        if (useOffset) {
          newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
        }

        if (thumbsymq_swiper.visibleSlidesIndexes && thumbsymq_swiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsymq_swiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }

          thumbsymq_swiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      } // Activate thumbs


      var thumbsToActivate = 1;
      var thumbActiveClass = ymq_swiper.params.thumbs.slideThumbActiveClass;

      if (ymq_swiper.params.slidesPerView > 1 && !ymq_swiper.params.centeredSlides) {
        thumbsToActivate = ymq_swiper.params.slidesPerView;
      }

      if (!ymq_swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }

      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsymq_swiper.slides.removeClass(thumbActiveClass);

      if (thumbsymq_swiper.params.loop || thumbsymq_swiper.params.virtual && thumbsymq_swiper.params.virtual.enabled) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsymq_swiper.$wrapperEl.children("[data-ymq_swiper-slide-index=\"" + (ymq_swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
        }
      } else {
        for (var _i = 0; _i < thumbsToActivate; _i += 1) {
          thumbsymq_swiper.slides.eq(ymq_swiper.realIndex + _i).addClass(thumbActiveClass);
        }
      }
    }
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        ymq_swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: 'ymq_swiper-slide-thumb-active',
        thumbsContainerClass: 'ymq_swiper-container-thumbs'
      }
    },
    create: function create() {
      var ymq_swiper = this;
      bindModuleMethods(ymq_swiper, {
        thumbs: _extends({
          ymq_swiper: null,
          initialized: false
        }, Thumbs)
      });
    },
    on: {
      beforeInit: function beforeInit(ymq_swiper) {
        var thumbs = ymq_swiper.params.thumbs;
        if (!thumbs || !thumbs.ymq_swiper) return;
        ymq_swiper.thumbs.init();
        ymq_swiper.thumbs.update(true);
      },
      slideChange: function slideChange(ymq_swiper) {
        if (!ymq_swiper.thumbs.ymq_swiper) return;
        ymq_swiper.thumbs.update();
      },
      update: function update(ymq_swiper) {
        if (!ymq_swiper.thumbs.ymq_swiper) return;
        ymq_swiper.thumbs.update();
      },
      resize: function resize(ymq_swiper) {
        if (!ymq_swiper.thumbs.ymq_swiper) return;
        ymq_swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate(ymq_swiper) {
        if (!ymq_swiper.thumbs.ymq_swiper) return;
        ymq_swiper.thumbs.update();
      },
      setTransition: function setTransition(ymq_swiper, duration) {
        var thumbsymq_swiper = ymq_swiper.thumbs.ymq_swiper;
        if (!thumbsymq_swiper) return;
        thumbsymq_swiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy(ymq_swiper) {
        var thumbsymq_swiper = ymq_swiper.thumbs.ymq_swiper;
        if (!thumbsymq_swiper) return;

        if (ymq_swiper.thumbs.ymq_swiperCreated && thumbsymq_swiper) {
          thumbsymq_swiper.destroy();
        }
      }
    }
  };

  // ymq_swiper Class
  var components = [Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
  ymq_swiper.use(components);

  return ymq_swiper;

})));
//# sourceMappingURL=ymq_swiper-bundle.js.map

(function (ymqJQuery) {
	var defaults = {
		url: false,
		callback: false,
		target: false,
		duration: 120,
		on: 'mouseover', // other options: grab, click, toggle
		touch: true, // enables a touch fallback
		onZoomIn: false,
		onZoomOut: false,
		magnify: 1
	};

	// Core Zoom Logic, independent of event listeners.
	ymqJQuery.zoom = function(target, source, img, magnify) {
		var targetHeight,
			targetWidth,
			sourceHeight,
			sourceWidth,
			xRatio,
			yRatio,
			offset,
			$target = ymqJQuery(target),
			position = $target.css('position'),
			$source = ymqJQuery(source);

		// The parent element needs positioning so that the zoomed element can be correctly positioned within.
		target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
		target.style.overflow = 'hidden';
		img.style.width = img.style.height = '';

		ymqJQuery(img)
			.addClass('zoomImg')
			.css({
				position: 'absolute',
				top: 0,
				left: 0,
				opacity: 0,
				width: img.width * magnify,
				height: img.height * magnify,
				border: 'none',
				maxWidth: 'none',
				maxHeight: 'none'
			})
			.appendTo(target);

		return {
			init: function() {
				targetWidth = $target.outerWidth();
				targetHeight = $target.outerHeight();

				if (source === target) {
					sourceWidth = targetWidth;
					sourceHeight = targetHeight;
				} else {
					sourceWidth = $source.outerWidth();
					sourceHeight = $source.outerHeight();
				}

				xRatio = (img.width - targetWidth) / sourceWidth;
				yRatio = (img.height - targetHeight) / sourceHeight;

				offset = $source.offset();
			},
			move: function (e) {
				var left = (e.pageX - offset.left),
					top = (e.pageY - offset.top);

				top = Math.max(Math.min(top, sourceHeight), 0);
				left = Math.max(Math.min(left, sourceWidth), 0);

				img.style.left = (left * -xRatio) + 'px';
				img.style.top = (top * -yRatio) + 'px';
			}
		};
	};

	ymqJQuery.fn.zoom = function (options) {
		return this.each(function () {
			var
				settings = ymqJQuery.extend({}, defaults, options || {}),
				//target will display the zoomed image
				target = settings.target && ymqJQuery(settings.target)[0] || this,
				//source will provide zoom location info (thumbnail)
				source = this,
				$source = ymqJQuery(source),
				img = document.createElement('img'),
				$img = ymqJQuery(img),
				mousemove = 'mousemove.zoom',
				clicked = false,
				touched = false;

			// If a url wasn't specified, look for an image element.
			if (!settings.url) {
				var srcElement = source.querySelector('img');
				if (srcElement) {
					settings.url = srcElement.getAttribute('data-src') || srcElement.currentSrc || srcElement.src;
				}
				if (!settings.url) {
					return;
				}
			}

			$source.one('zoom.destroy', function(position, overflow){
				$source.off(".zoom");
				target.style.position = position;
				target.style.overflow = overflow;
				img.onload = null;
				$img.remove();
			}.bind(this, target.style.position, target.style.overflow));

			img.onload = function () {
				var zoom = ymqJQuery.zoom(target, source, img, settings.magnify);

				function start(e) {
					zoom.init();
					zoom.move(e);

					// Skip the fade-in for IE8 and lower since it chokes on fading-in
					// and changing position based on mousemovement at the same time.
					$img.stop()
						.fadeTo(ymqJQuery.support.opacity ? settings.duration : 0, 1, ymqJQuery.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
				}

				function stop() {
					$img.stop()
						.fadeTo(settings.duration, 0, ymqJQuery.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
				}

				// Mouse events
				if (settings.on === 'grab') {
					$source
						.on('mousedown.zoom',
							function (e) {
								if (e.which === 1) {
									ymqJQuery(document).one('mouseup.zoom',
										function () {
											stop();

											ymqJQuery(document).off(mousemove, zoom.move);
										}
									);

									start(e);

									ymqJQuery(document).on(mousemove, zoom.move);

									e.preventDefault();
								}
							}
						);
				} else if (settings.on === 'click') {
					$source.on('click.zoom',
						function (e) {
							if (clicked) {
								// bubble the event up to the document to trigger the unbind.
								return;
							} else {
								clicked = true;
								start(e);
								ymqJQuery(document).on(mousemove, zoom.move);
								ymqJQuery(document).one('click.zoom',
									function () {
										stop();
										clicked = false;
										ymqJQuery(document).off(mousemove, zoom.move);
									}
								);
								return false;
							}
						}
					);
				} else if (settings.on === 'toggle') {
					$source.on('click.zoom',
						function (e) {
							if (clicked) {
								stop();
							} else {
								start(e);
							}
							clicked = !clicked;
						}
					);
				} else if (settings.on === 'mouseover') {
					zoom.init(); // Preemptively call init because IE7 will fire the mousemove handler before the hover handler.

					$source
						.on('mouseenter.zoom', start)
						.on('mouseleave.zoom', stop)
						.on(mousemove, zoom.move);
				}

				// Touch fallback
				if (settings.touch) {
					$source
						.on('touchstart.zoom', function (e) {
							e.preventDefault();
							if (touched) {
								touched = false;
								stop();
							} else {
								touched = true;
								start( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
							}
						})
						.on('touchmove.zoom', function (e) {
							e.preventDefault();
							zoom.move( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
						})
						.on('touchend.zoom', function (e) {
							e.preventDefault();
							if (touched) {
								touched = false;
								stop();
							}
						});
				}

				if (ymqJQuery.isFunction(settings.callback)) {
					settings.callback.call(img);
				}
			};

			img.setAttribute('role', 'presentation');
			img.alt = '';
			img.src = settings.url;
		});
	};

	ymqJQuery.fn.zoom.defaults = defaults;

}(window.ymqJQuery));

//插件状态，是否是全部显示，根据tag显示，或者根据tag不显示
var ymq_now_product_show = true;
if (window.ymq_image.ymq_image_branding.config.show_type == 2) {
    if (!ymq_image.product.tags.includes(ymq_image.ymq_image_branding.config['work-tag'])) {
        ymq_now_product_show = false;
    }
}else if(window.ymq_image.ymq_image_branding.config.show_type == 3){
    if (ymq_image.product.tags.includes(ymq_image.ymq_image_branding.config['not-work-tag'])) {
        ymq_now_product_show = false;
    }
}

if(
    document.documentElement.innerHTML.match(/asyncLoad/) &&
    !document.documentElement.innerHTML.match(/EPJd3ycY8eGrakkL/)
){
    ymq_now_product_show = false;
}
if (window.ymq_image.ymq_image_branding.extra.plan == 1 && window.ymq_image.ymq_image_branding.extra.status == 1 && ymq_now_product_show){
        ymqJQuery(function () {
            var is_find_parent = false;
            var break_while = false;
            (function (ymqJQuery) {
                ymqJQuery.fn.commonParents = function (){
                    var cachedThis = this;
                    return cachedThis.first().parents().filter(function () {
                        return ymqJQuery(this).find(cachedThis).length === cachedThis.length;
                    });
                };
                ymqJQuery.fn.commonParent = function (){
                    return ymqJQuery(this).commonParents().first();
                };
            })(ymqJQuery);
            
            
            function ymqIsProductImage(now_dom_img)
            {
                var is_product_image = false;
                
                now_dom_img = now_dom_img.replace('//cdn.shopifycdn.net/','//cdn.shopify.com/');
                now_dom_img = now_dom_img.replace('https://cdn.shopify.com/','//cdn.shopify.com/');
                //now_dom_img = ymqZhengzeSpecialChars(now_dom_img);
                try {
                    ymq_image.product.images.forEach(function(item){
                        item = item.replace('//cdn.shopifycdn.net/','//cdn.shopify.com/');
                        //获取最后一个.的位置
                        var ymq_point_index= item.lastIndexOf(".");
                        //获取后缀
                        //var ymq_img_ext = item.substr(ymq_point_index);
                        //获取出去扩展的文件名字
                        var ymq_img_name = item.substr(0,ymq_point_index);
                        //输出结果
                        
                        //ymq_img_name = ymqZhengzeSpecialChars(ymq_img_name);  
                        //ymq_img_ext = ymqZhengzeSpecialChars(ymq_img_ext); 
                        //console.log(ymq_img_name,now_dom_img)
                        //var ymq_reg = new RegExp(".*" + ymq_img_name + ".*" + ymq_img_ext + ".*");
                        var ymq_reg = new RegExp(".*" + ymq_img_name + ".*");
                        if(now_dom_img.match(ymq_reg) != null){
                            is_product_image = true;
                            throw new Error("LoopTerminates");
                        }
                    })
                } catch (e) {
                    if (e.message !== "LoopTerminates") throw e;
                };
                return is_product_image;
            }
            
            function ymqZhengzeSpecialChars(str)
            {
                if (typeof(str)=='string') {
                    str = str.replace(/\?/g, 'wenhao');
                    str = str.replace(/\./g, 'dian');
                    str = str.replace(/\(/g, 'leftkuohao');
                    str = str.replace(/\)/g, 'rightkuohao');
                    str = str.replace(/\*/g, 'xing');
                    str = str.replace(/\+/g, 'jia');
                    str = str.replace(/\[/g, 'leftzhong');
                    str = str.replace(/\\/g, 'xiegang');
                    str = str.replace(/\^/g, 'shangjiantou');
                    str = str.replace(/\{/g, 'leftda');
                    str = str.replace(/\|/g, 'shuxiang');
                    return str.trim();
                }else{
                    return str;
                }
            }

            function ymq_all_dom(){
                var ymq_matches_all = ymqJQuery("[style]").filter(function () {
                    var ymq_background_image = ymqJQuery(this).css('background-image');
                    var ymq_background = ymqJQuery(this).css('background');
                    if(ymq_background_image != 'none'){
                        //console.log(ymq_background_image)
                        if(ymq_background_image.indexOf("shopify") != -1 ){
                            console.log(ymq_background_image)
                            return ymqIsProductImage(ymq_background_image);
                        }
                        return false;
                    }else if(ymq_background != 'none'){
                        //console.log(ymq_background)
                        if(ymq_background.indexOf("shopify") != -1 ){
                            console.log(ymq_background)
                            return ymqIsProductImage(ymq_background);
                        }
                        return false;
                    }
                    return false;
                    
                    
                });
                var ymq_imageParentDom = ymq_matches_all.commonParent();
                if(ymq_imageParentDom.length > 0){
                    console.log("cccccccccc");
                    is_find_parent = true;
                    break_while = true;
                    ymq_image.imageParentDom = ymq_imageParentDom;
                    return true;
                }else{
                    console.log("ddddddddd")
                    return false;
                }
            }

            function ymq_img_dom(){
                var ymq_matches_images = ymqJQuery('img').filter(function () {
                    if(ymqJQuery(this).attr('srcset')){
                        var now_dom_img = ymqJQuery(this).attr('srcset');
                    }else{
                        var now_dom_img = ymqJQuery(this).attr('src');
                    }
                    if(now_dom_img == '' || now_dom_img == undefined){
                        return false;
                    }
                    return ymqIsProductImage(now_dom_img);
                });
                console.log(ymq_matches_images);
                var ymq_imageParentDom = ymq_matches_images.commonParent();
                if(ymq_imageParentDom.length > 0){
                    console.log("aaaaa")
                    is_find_parent = true;
                    break_while = true;
                    ymq_image.imageParentDom = ymq_imageParentDom;
                    return true;
                }else{
                    console.log("bbbbb")
                    return ymq_all_dom();
                }
            }

            

            if(ymqJQuery('form[action="/cart/add"]').length >= 1){
                ymq_image.form_box = ymqJQuery('form[action="/cart/add"]');
            }else{
                if(ymqJQuery('form[action*="/cart/add"]').length >= 1){
                    ymq_image.form_box = ymqJQuery('form[action*="/cart/add"]');
                }
            }
            if (ymq_image.ymq_image_branding.extra.hasOwnProperty('parent_dom') && ymq_image.ymq_image_branding.extra['parent_dom'] != "" && ymqJQuery(ymq_image.ymq_image_branding.extra['parent_dom']).length > 0) {
                ymq_image.imageParentDom = ymqJQuery(ymq_image.ymq_image_branding.extra['parent_dom'])
            }else{
                var ymq_find_num = 1;
                while (!break_while)
                {
                    // setTimeout(function () {
                        
                    // }, 500);
                    ymq_img_dom();
                    if(ymq_find_num > 500){
                        break_while = true;
                    }
                    ymq_find_num ++;
                }
                if(!is_find_parent){
                    return false;
                }
            }
            
            console.log('我是父元素',ymq_image.imageParentDom)
            ymq_image.imageParentDom.css('display','block')

            if (ymq_image.imageParentDom && ymq_image.product.hasOwnProperty('media')) {
                var yuanlaihtml = ymq_image.imageParentDom.html();
                var ymq_out_width = Number(ymq_image.imageParentDom.width());
                ymq_image.imageParentDom.empty();
                try {
                    var ymq_tp_tp = ymq_image.product.media;
                    var ymq_tp_bt = ymq_image.product.variants;
                    var ymq_img_all_img = [];
                    var ymq_lg;
                    //是否是手机端
                    var ymq_is_phone = false;
                    if ((ymqJQuery(window).width() < 800 || /Android|webOS|iPhone|iPiad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
                        ymq_is_phone = true;
                    }
                    //前缀
                    var ymq_img_prefix = 'ymq_img';
                    //youtube前缀
                    var ymq_youtube_prefix = 'https://www.youtube.com/watch?v=';
                    //第一个分界的图片，初始值1000
                    var shouci_tup = 1000;
                    //公用的图片
                    var ymq_tp_gonggong = [];
                    //处理完的图片json
                    var ymq_tp_tp_hou = {};
                    //处理完的变体json
                    var ymq_tp_bt_hou = {};
                    //可显示的图片id数组
                    var ymq_xstp = [];

                    //上一次的变体图片，当这次和上次一样时就不执行
                    var ymq_shangyicitup = 'chushi';

                    //放大功能控制展示的class
                    var ymq_fangdaclass = 'ymq_fangdaclass';

                    //放大item的id前缀
                    var ymq_fangdaid_prefix = 'ymq_fd';

                    //视频id前缀
                    var ymq_video_prefix = 'ymq_img_video';



                    //是否显示缩略图
                    var ymq_show_thumbnail = false;
                    if (ymq_is_phone) {
                        if (ymq_image.ymq_image_branding.config['thumbnail-show'] == 1 && ymq_image.ymq_image_branding.config['thumbnail-show-m'] == 1) {
                            ymq_show_thumbnail = true;
                        }
                    }else{
                        if (ymq_image.ymq_image_branding.config['thumbnail-show'] == 1) {
                            ymq_show_thumbnail = true;
                        }
                    }

                    //是否要翻页
                    var ymq_pagination = false;
                    if (ymq_image.ymq_image_branding.config['pagination'] == 3) {
                        ymq_pagination = true;
                    }else if(ymq_is_phone && ymq_image.ymq_image_branding.config['pagination'] == 2){
                        ymq_pagination = true;
                    }

                    //缩略图位置,1是下面，2是左边3是右边，4是上边
                    if (!ymq_show_thumbnail) {
                        var ymq_suoluetu_weizhi = 1;
                    }else{
                        var ymq_suoluetu_weizhi = ymq_image.ymq_image_branding.config['thumbnail-position'];
                    }


                    //第一个变体id
                    var ymq_diyige_bt_id = 0;
                    if (ymq_tp_bt.length > 0) {
                        ymq_diyige_bt_id = ymq_tp_bt[0].id;
                    }

                    var ymq_is_bianti = true;
                    //是否延时加载
                    var ymq_yanshijaizai = true;
                    if (window.ymq_image.ymq_image_branding.config['Lazy'] == 2) {
                        ymq_yanshijaizai = false;
                    }

                    //是否鼠标放上变大
                    var ymq_shubiaobianda = true;
                    if (window.ymq_image.ymq_image_branding.config['mouse-big'] == 2) {
                        ymq_shubiaobianda = false;
                    }

                    //是否全屏变大
                    var ymq_quanpingbianda = true;
                    if (window.ymq_image.ymq_image_branding.config['click-big'] == 2) {
                        ymq_quanpingbianda = false;
                    }
                    //轮播图包裹的元素width
                    if (ymq_suoluetu_weizhi == 2 || ymq_suoluetu_weizhi == 3) {
                        ymq_out_width = ymq_out_width*0.79;
                    }
                    //第一张图片的高度
                    var ymq_img_height = 0;

                    var ymq_suoleutu_dom = ``;
                    var ymq_datu_dom = ``;

                    var ymq_ymq_swiper_small;
                    var ymq_ymq_swiper_big;
                    ymqJQuery('body').append(`<div class="demo-gallery" style="display: none;">
                <ul id="ymq_lightgallery">
                </ul>
            </div>

            `);
                    console.log(ymq_image.ymq_image_branding.config['big-icon'])
                    //清空


                    //用id做key
                    ymq_tp_tp.forEach(function(value,index){
                        var html = ``;
                        ymq_xstp.push(value.id);
                        ymq_img_all_img.push(value.id);
                        ymq_tp_tp_hou[ymq_img_prefix+value.id] = value;
                        ymq_tp_tp_hou[ymq_img_prefix+value.id]['index'] = index;

                        if (value.media_type == 'image') {
                            if (ymq_img_height == 0) {
                                ymq_img_height = value.preview_image.height*(ymq_out_width/value.preview_image.width)
                            }
                            if (value.alt != null && value.alt.indexOf(ymq_youtube_prefix) != -1)
                            {
                                ymq_tp_tp[index]['media_type'] = 'youtube';
                                ymq_tp_tp_hou[ymq_img_prefix+value.id]['media_type'] = 'youtube';
                                html += ymq_fangdadom(value.id,value.preview_image.src,'youtube',value.alt);
                            }else{
                                html += ymq_fangdadom(value.id,value.preview_image.src);
                            }
                        }
                        if (value.media_type == 'video') {
                            html += ymq_fangdadom(value.id,value.preview_image.src,'sp',value.sources[0].url,value.sources[0].mime_type)
                        }
                        if (ymq_quanpingbianda) {
                            ymqJQuery('#ymq_lightgallery').append(html);
                            ymq_lg = document.getElementById('ymq_lightgallery');
                            lightGallery(ymq_lg);
                        }
                    })
                    //变体变体，给图片加分割标志
                    ymq_tp_bt.forEach(function(value,index){
                        ymq_tp_bt_hou[ymq_img_prefix+value.id] = value;
                        ymq_tp_bt_hou[ymq_img_prefix+value.id]['index'] = index;
                        if (value.hasOwnProperty('featured_image') &&  value.featured_image != null) {
                            ymq_tp_tp_hou[ymq_img_prefix+value.featured_media.id]['is_variants'] = true;
                            //获取变体的第一个图片的position,提取公共图片
                            if (Number(value.featured_media.position) < shouci_tup) {
                                shouci_tup = Number(value.featured_media.position);
                            }
                        }
                    })


                    //给分界的图片加next_index
                    var ymq_img_pre_index = '';
                    Object.keys(ymq_tp_tp_hou).forEach(function(index){
                        var value = ymq_tp_tp_hou[index];
                        if (value.hasOwnProperty('is_variants')) {
                            if (ymq_img_pre_index != '') {
                                ymq_tp_tp_hou[ymq_img_pre_index]['next_index'] = index;
                            }
                            ymq_img_pre_index = index;
                        }
                    })

                    //创建轮播dom
                    function ymq_chuanjiandom(){
                        var suoleutu_height = '';
                        var is_chuizhi = 'horizontal';
                        if (ymq_suoluetu_weizhi == 2 || ymq_suoluetu_weizhi == 3) {
                            suoleutu_height = `height:${ymq_img_height}px`;
                            is_chuizhi = 'vertical';
                        }
                        var pagination_html = '';
                        if (ymq_pagination) {
                            pagination_html = `<div class="ymq_swiper-pagination"></div>`
                        }
                        if (ymq_image.ymq_image_branding.config['big-icon-url'] != '') {
                            var big_icon = `<img class="ymq_image_icons" src="${ymq_image.ymq_image_branding.config['big-icon-url']}">`
                        }else{
                            var big_icon = `<span class="ymq_iconfont ymq_image_icons">${ymq_image.ymq_image_branding.config['big-icon']}</<span>`;
                        }
                        var html_big = `
                            <div class="ymq_product_img_big ymq_product_img_big${ymq_suoluetu_weizhi} ymq_swiper-container">
                                <div class="ymq_swiper-wrapper ymq_product_img_big_box">
                                </div>
                                <!-- Add Navigation -->
                                <div class="ymq_swiper-button-prev">${big_icon}</div>
                                <div class="ymq_swiper-button-next">${big_icon}</div>
                                ${pagination_html}
                            </div>
                            `;
                        var hide_thumbnail = ``;
                        if (!ymq_show_thumbnail) {
                            hide_thumbnail = 'display:none;'
                        }
                        var html_small = `
                            <div style="${suoleutu_height+hide_thumbnail}" class="ymq_product_img_small ymq_product_img_small${ymq_suoluetu_weizhi} ymq_swiper-container">
                                <div class="ymq_swiper-wrapper ymq_product_img_small_box">
                                </div>
                                <!-- Add Navigation -->
                                <div class="ymq_swiper-button-prev">${big_icon}</div>
                                <div class="ymq_swiper-button-next">${big_icon}</div>
                            </div>
                            <div style="clear:both;"></div>
                                `;


                        ymq_image.imageParentDom.append(html_big+html_small);

                        ymq_chuanjianzidom(true);
                        //如果是变体插件,重新获取可用id
                        if (ymq_is_bianti && ymq_diyige_bt_id > 0) {

                        }else{
                            ymqJQuery('.ymq_product_img_big_box').append(ymq_datu_dom);
                            ymqJQuery('.ymq_product_img_small_box').append(ymq_suoleutu_dom);
                        }


                        ymq_ymq_swiper_small = new ymq_swiper('.ymq_product_img_small', {
                            navigation: {
                                nextEl: '.ymq_swiper-button-next',
                                prevEl: '.ymq_swiper-button-prev',
                            },
                            spaceBetween: 10,
                            slidesPerView: ymq_image.ymq_image_branding.config['thumbnail-num'],
                            freeMode: true,
                            watchSlidesVisibility: true,
                            watchSlidesProgress: true,
                            direction:is_chuizhi,
                            //mousewheel: true,
                            threshold : 5,
                        });
                        var ymq_datu_config = {
                            navigation: {
                                nextEl: '.ymq_swiper-button-next',
                                prevEl: '.ymq_swiper-button-prev',
                            },
                            spaceBetween: 10,
                            //lazy: true,
                            //effect: 'fade',
                            // effect: 'flip',
                            // effect: 'cube',
                            //autoHeight: true,
                            thumbs: {
                                ymq_swiper: ymq_ymq_swiper_small
                            },
                            on: {
                                slideChangeTransitionEnd: function(){
                                    ymqJQuery('.ymq_product_img_big video').trigger('pause');
                                    ymqJQuery('.ymq_product_img_big .ymq_ymq_swiper-big-slide').eq(this.activeIndex).children('video').trigger('play');
                                    ymqJQuery('.ymq_product_img_big .ymq_ymq_swiper-big-slide').eq(this.previousIndex).children('.ymq_youtube').attr('src','');
                                    ymqJQuery('.ymq_product_img_big .ymq_ymq_swiper-big-slide').eq(this.previousIndex).children('.ymq_youtube').attr('src',ymqJQuery('.ymq_product_img_big .ymq_ymq_swiper-big-slide').eq(this.previousIndex).children('.ymq_youtube').data('src'));
                                    //alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                                },
                            },
                            // direction : 'vertical',
                            // Enable debugger
                            // debugger: true
                        };
                        if (ymq_pagination) {
                            ymq_datu_config.pagination = {el: '.ymq_swiper-pagination'};
                        }
                        if (ymq_yanshijaizai) {
                            ymq_datu_config.lazy = true;
                        }else{
                            ymq_datu_config.autoHeight = true;
                        }
                        ymq_ymq_swiper_big = new ymq_swiper('.ymq_product_img_big', ymq_datu_config);
                        zoominit()
                    }
                    //创建子dom
                    function ymq_chuanjianzidom(is_init = false){
                        ymq_suoleutu_dom = ``;
                        ymq_datu_dom = ``;
                        ymqJQuery('#ymq_lightgallery li').removeClass('ymq-show');
                        if (is_init) {
                            var now_ymq_xstp = ymq_xstp;
                        }else{
                            now_ymq_xstp = ymq_xstp.concat(ymq_tp_gonggong);
                        }
                        if (ymq_yanshijaizai) {
                            var ymq_ys1 = ` ymq_swiper-lazy" data-`;
                            var ymq_ys2 = `<div class="ymq_swiper-lazy-preloader ymq_swiper-lazy-preloader-black" height="${ymq_img_height}"><span class="ymq_iconfont ymq_img_loading">&#xe684;</span></div>`;
                        }else{
                            var ymq_ys1 = `" `;
                            var ymq_ys2 = ``;
                        }
                        now_ymq_xstp.forEach(function(value,index){
                            ymqJQuery('.'+ymq_fangdaid_prefix+value).addClass('ymq-show');
                            ymq_suoleutu_dom += `
                        <div class="ymq_swiper-slide ymq_ymq_swiper-slide ymq_swiper-slide${ymq_tp_tp_hou[ymq_img_prefix+value]['media_type']}">
                        <span class="ymq_swiper-slide-span${ymq_tp_tp_hou[ymq_img_prefix+value]['media_type']}"></span>
                        <img src="${getShopifySmallImg(ymq_tp_tp_hou[ymq_img_prefix+value]['preview_image'].src)}">
                        </div>
                    `;
                            if (ymq_tp_tp_hou[ymq_img_prefix+value]['media_type'] == 'image') {
                                ymq_datu_dom += `
                        <div data-id="${value}" style="min-height:${ymq_img_height}px;" class="ymq_swiper-slide ymq_ymq_swiper-big-slide ymq_zoom1"><img class="ymq_zoom_img${ymq_ys1}src="${ymq_tp_tp_hou[ymq_img_prefix+value]['preview_image'].src}">${ymq_ys2}</div>
                    `;
                            }
                            if (ymq_tp_tp_hou[ymq_img_prefix+value]['media_type'] == 'video') {
                                ymq_datu_dom += `
                        <div data-id="${value}" class="ymq_swiper-slide ymq_ymq_swiper-big-slide">
                            <video class="ymq_ymq_swiper-big-video" playsinline="" loop="" muted="" controls poster="${ymq_tp_tp_hou[ymq_img_prefix+value]['preview_image'].src}">
                                <source src="${ymq_tp_tp_hou[ymq_img_prefix+value].sources[0].url}" type="${ymq_tp_tp_hou[ymq_img_prefix+value].sources[0].mime_type}">
                                 Your browser does not support HTML5 video.
                            </video>
                        </div>
                    `;
                            }
                            if (ymq_tp_tp_hou[ymq_img_prefix+value]['media_type'] == 'youtube') {
                                ymq_datu_dom += `
                        <div data-id="${value}" class="ymq_swiper-slide ymq_ymq_swiper-big-slide">
                            <iframe class="ymq_youtube" height="${ymq_img_height}" data-src="https://www.youtube.com/embed/${ymq_tp_tp_hou[ymq_img_prefix+value].alt.replace(ymq_youtube_prefix,'')}?rel=0" src="https://www.youtube.com/embed/${ymq_tp_tp_hou[ymq_img_prefix+value].alt.replace(ymq_youtube_prefix,'')}?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    `;
                            }

                        })
                    }

                    //提取公共图片
                    if (shouci_tup != 1 && shouci_tup != 1000) {
                        for (var i = 0; i < shouci_tup-1; i++) {
                            //ymq_tp_gonggong[i] = ymq_tp_tp[i];
                            ymq_tp_gonggong.push(ymq_tp_tp[i].id)
                        }
                    }

                    function zoominit(){
                        if (!(ymqJQuery(window).width() < 800 || /Android|webOS|iPhone|iPiad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
                            if (ymq_shubiaobianda) {
                                ymqJQuery('.ymq_zoom1').zoom();
                            }
                        }
                    }

                    ymqJQuery(document).on('click', '.ymq_ymq_swiper-big-slide', function () {
                        ymqJQuery('#ymq_fd'+ymqJQuery(this).data('id')).click();
                    })
                    ymq_chuanjiandom()

                    ymqJQuery(document).on('change', 'form[action*="/cart/add"] input,form[action*="/cart/add"] select', function () {
                        if (!ymq_image.$){
                            ymq_xxgb();
                        }
                    })
                    intervalResult(10000,100,function () {
                        if (window.$ && $.fn && $.fn.jquery){
                            ymq_image.$ = $;
                        }else{
                            if (window.jQuery && jQuery.fn && jQuery.fn.jquery){
                                ymq_image.$ = jQuery;
                            }
                        }
                        if (ymq_image.$){
                            ymq_image.$(document).on('change', 'form[action*="/cart/add"] input,form[action*="/cart/add"] select', function () {
                                ymq_xxgb();
                            })
                            return true;
                        }
                        if ('complete' == document.readyState) {
                            return true;
                        }
                        return false;
                    })

                    function intervalResult(maxCount,time,flgBool,loopFn) {
                        if (typeof maxCount == "function") {
                            loopFn = time;
                            flgBool = maxCount;
                            time = 1000;
                            maxCount = 20;
                        } else if (typeof time == "function") {
                            loopFn = flgBool;
                            flgBool = time;
                            time = 1000;
                        }
                        if (typeof flgBool != "function") {
                            flgBool = function () {
                                return false;
                            }
                        }
                        var i = 0;
                        var invSet = setInterval(function () {
                            i++;
                            if (i > maxCount || flgBool(i)) {
                                clearInterval(invSet);
                                return;
                            }
                            if (typeof loopFn == "function") {
                                loopFn();
                            }
                        }, time);
                    }
                    function chongzhiquanpin(){
                        // if (ymq_quanpingbianda) {
                        //     window.lgData[ymq_lg.getAttribute('lg-uid')].destroy(true);
                        //     lightGallery(ymq_lg,{
                        //         selector:'.ymq-show'
                        //     });
                        // }

                    }

                    //选项该改变执行
                    function ymq_xxgb(chushi_id = null){
                        var get_now_bt_setTimeout = setTimeout(function () {
                            if (chushi_id == null) {
                                var now_bt = ymq_hqch('variant');
                            }else{
                                var now_bt = chushi_id;
                            }
                            if (now_bt && ymq_tp_bt_hou.hasOwnProperty(ymq_img_prefix+now_bt)) {
                                ymq_xzkytp_zhu(now_bt);
                            }else{
                                ymq_xzkytp_zhu();
                            }
                        }, 10);
                        
                    }
                    //移除dom，重新加入dom，重新初始化
                    function ymq_chongxin_init(){
                        ymq_chuanjianzidom();
                        ymq_ymq_swiper_small.removeAllSlides();
                        ymq_ymq_swiper_small.prependSlide(ymq_suoleutu_dom);
                        ymq_ymq_swiper_small.slideTo(0,0)
                        ymq_ymq_swiper_big.removeAllSlides();
                        ymq_ymq_swiper_big.prependSlide(ymq_datu_dom);
                        ymq_ymq_swiper_big.slideTo(0,0);
                        ymq_ymq_swiper_big.lazy.load();
                    }
                    //获取可用图片
                    function ymq_xzkytp_zhu(now_bt = null){
                        if (now_bt == null) {
                            console.log(1111)
                            //显示全部图片
                            ymq_xstp = ymq_img_all_img;
                            ymq_chongxin_init();
                            chongzhiquanpin();
                            zoominit();
                            ymq_shangyicitup = '';
                            return false;
                        }
                        //如果变体有图片
                        if (ymq_tp_bt_hou[ymq_img_prefix+now_bt].hasOwnProperty('featured_media') && ymq_tp_bt_hou[ymq_img_prefix+now_bt].featured_media != null) {
                            console.log(222)
                            if (ymq_tp_bt_hou[ymq_img_prefix+now_bt].featured_media.preview_image.src != ymq_shangyicitup) {
                                ymq_xzkytp(ymq_tp_bt_hou[ymq_img_prefix+now_bt].featured_media.id);
                                ymq_shangyicitup = ymq_tp_bt_hou[ymq_img_prefix+now_bt].featured_media.preview_image.src;
                                ymq_chongxin_init();
                                chongzhiquanpin();
                                zoominit();
                                console.log(333)
                            }
                        }else{
                            console.log(444)
                            if (ymq_shangyicitup != '') {
                                //显示全部图片
                                ymq_xstp = ymq_img_all_img;
                                ymq_chongxin_init();
                                chongzhiquanpin();
                                zoominit();
                                ymq_shangyicitup = '';
                                console.log(555)
                            }
                        }
                        console.log(ymq_xstp)
                    }
                    //获取可盈图片
                    function ymq_xzkytp(now_bt){
                        ymq_xstp = [];
                        var next_index = ymq_tp_tp_hou[ymq_img_prefix+now_bt]['next_index'];
                        //是否添加
                        var ymq_sftj = false;
                        var shifoujieshu = true;
                        Object.keys(ymq_tp_tp_hou).forEach(function(index){
                            var value = ymq_tp_tp_hou[index];
                            if (index == ymq_img_prefix+now_bt && shifoujieshu) {
                                ymq_sftj = true;
                            }
                            if (index == next_index) {
                                ymq_sftj = false;
                                shifoujieshu = false;
                            }
                            if (ymq_sftj) {
                                ymq_xstp.push(value.id)
                            }
                        })
                        console.log(ymq_xstp)
                    }

                    //生成放大的dom
                    function ymq_fangdadom(now_id,lianjie,leixin = 'tp',shipinlianjie = '',shipintype = ''){
                        if (!ymq_quanpingbianda) {
                            return '';
                        }
                        if (leixin == 'tp') {
                            return `
                    <li class="ymq-show ymq_fangda_image ${ymq_fangdaid_prefix+now_id}" id="${ymq_fangdaid_prefix+now_id}" data-mediatype="image" data-src="${lianjie}">
                        <a href="">
                            <img class="img-responsive" src="${getShopifySmallImg(lianjie)}">
                        </a>
                    </li>
                `;
                        }
                        if (leixin == 'sp') {
                            ymqJQuery('body').append(`
                        <div style="display:none;" id="${ymq_video_prefix+now_id}">
                            <video class="lg-video-object lg-html5" controls preload="none">
                                <source src="${shipinlianjie}" type="${shipintype}">
                                 Your browser does not support HTML5 video.
                            </video>
                        </div>
                `);
                            return `
                    <li class="ymq_fangda_video ${ymq_fangdaid_prefix+now_id}" data-poster="${lianjie}" data-mediatype="video" data-html="#${ymq_video_prefix+now_id}">
                        <a href="">
                            <img class="img-responsive" src="${getShopifySmallImg(lianjie)}">
                            <div class="demo-gallery-poster">
                                <img src="https://sachinchoolur.github.io/lightgallery.js/static/img/play-button.png">
                            </div>
                        </a>
                    </li>
                `;
                        }
                        if (leixin == 'youtube') {
                            return `
                    <li class="ymq_fangda_youtube ${ymq_fangdaid_prefix+now_id}" data-mediatype="youtube" data-poster="${lianjie}" data-src="${shipinlianjie}">
                        <a href="">
                            <img class="img-responsive" src="${getShopifySmallImg(lianjie)}">
                            <div class="demo-gallery-poster">
                                <img src="https://sachinchoolur.github.io/lightgallery.js/static/img/play-button.png">
                            </div>
                        </a>
                    </li>
                `;
                        }
                    }


                    //获取参数
                    function ymq_hqch(variable)
                    {
                        if (ymq_image.ymq_image_branding.extra.hasOwnProperty('variant_input_dom') && ymq_image.ymq_image_branding.extra['variant_input_dom'] != "" && ymqJQuery(ymq_image.ymq_image_branding.extra['variant_input_dom']).length > 0) {
                            return ymqJQuery(ymq_image.ymq_image_branding.extra['variant_input_dom']).val();
                        }else{
                            var query = window.location.search.substring(1);
                            var vars = query.split("&");
                            for (var i=0;i<vars.length;i++) {
                                var pair = vars[i].split("=");
                                if(pair[0] == variable){return pair[1];}
                            }
                            return(false);
                        }

                    }

                    function getShopifySmallImg(img){
                        if (img.indexOf("shopify") != -1 && img.indexOf("x") == -1) {
                            var index = img.lastIndexOf('.');
                            var left = img.substring(0,index);
                            var right = img.substring(index,img.length);
                            return left+'_200x200'+right;
                        }
                        return img;
                    }

                    if (ymq_hqch('variant')) {
                        ymq_diyige_bt_id = ymq_hqch('variant');
                    }

                    if (ymq_is_bianti && ymq_diyige_bt_id > 0) {
                        ymq_xxgb(ymq_diyige_bt_id);
                    }
                    var ymq_root_style = ':root{';
                    for(var key in ymq_image.ymq_image_branding.style){
                        ymq_root_style += `
                            ${key}:${ymq_image.ymq_image_branding.style[key]};
                        `;
                    };
                    ymq_root_style += '}';
                    var mouse_hover = '';
                    if ((Number(ymq_image.ymq_image_branding.config['icon-display']) == 1 && !ymq_is_phone) || Number(ymq_image.ymq_image_branding.config['icon-display']) == 2) {
                        mouse_hover = `
                            .ymq_image_icons{
                                display:none;
                            }
                            .ymq_product_img_big:hover .ymq_image_icons,.ymq_product_img_small:hover .ymq_image_icons{
                                display: inline-flex;
                            }
                        `;
                    }
                    var zoom_style = ''
                    if (!ymq_quanpingbianda) {
                        zoom_style = `.ymq_zoom1 img{cursor:auto !important;}`;
                    }
                    ymqJQuery('body').append(`
                        <style type="text/css">
                            .ymq_product_img_small1 img, .ymq_product_img_big_box img {
                                width: 100%;
                                max-height: none;
                            }
                            ${ymq_root_style}
                            ${mouse_hover}
                            ${zoom_style}
                            ${ymq_image.ymq_image_branding.extra.ymq_css}
                            ${ymq_image.ymq_image_branding.config.css}
                        </style>
                        `);
                    //ymq_image.imageParentDom.find('.ymq_hide_tag').remove();
                }catch (e) {
                    console.log(e)
                    ymq_image.imageParentDom.append(yuanlaihtml);
                }

            }
        });
        setTimeout(function () {
            ymqJQuery('#ymq_img_drag').remove();
        }, 200);
        
        
    
    
    
}

