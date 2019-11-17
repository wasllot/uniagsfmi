/*! jQuery v3.2.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(ja.test(this.type)&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d));
},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},holdReady:function(a){a?r.readyWait++:r.ready(!0)}}),r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return $(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?o['offset'+e]+n['margin'+('Height'===e?'Top':'Left')]+n['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=document.body,t=document.documentElement,o=r(10)&&getComputedStyle(t);return{height:h('Height',e,t,o),width:h('Width',e,t,o)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c():{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&'HTML'===o.nodeName&&(a.top=$(a.top,0),a.left=$(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var y=parseFloat(m.marginTop,10),w=parseFloat(m.marginLeft,10);b.top-=h-y,b.bottom-=h-y,b.left-=c-w,b.right-=c-w,b.marginTop=y,b.marginLeft=w}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=$(o.clientWidth,window.innerWidth||0),r=$(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function w(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||w(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=y(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!w(d)){var m=c(),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}return s.left+=i,s.top+=i,s.right-=i,s.bottom-=i,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function I(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function F(){this.state.eventsEnabled||(this.state=I(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function K(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function G(e){return'end'===e?'start':'start'===e?'end':e}function z(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}function V(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?$(document.documentElement.clientHeight,window.innerHeight||0):$(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function _(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function X(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:_(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var J=Math.min,Q=Math.round,Z=Math.floor,$=Math.max,ee='undefined'!=typeof window&&'undefined'!=typeof document,te=['Edge','Trident','Firefox'],oe=0,ne=0;ne<te.length;ne+=1)if(ee&&0<=navigator.userAgent.indexOf(te[ne])){oe=1;break}var i=ee&&window.Promise,ie=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=ee&&!!(window.MSInputMethodContext&&document.documentMode),pe=ee&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3),he={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ce=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return F.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ce.Utils=('undefined'==typeof window?global:window).PopperUtils,ce.placements=fe,ce.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:X,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=$(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=J(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=$(J(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,Q(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case he.FLIP:p=[n,i];break;case he.CLOCKWISE:p=z(n);break;case he.COUNTERCLOCKWISE:p=z(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=G(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h={left:Z(i.left),top:Q(i.top),bottom:Q(i.bottom),right:Z(i.right)},c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==g?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==g?-1:1;m[c]=d*y,m[g]=s*w,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),K(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ce});
//# sourceMappingURL=popper.min.js.map
/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/*
Template Name: Monster Admin
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery);
    global.metisMenu = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Util = function ($) {
    var transition = false;

    var TransitionEndEvent = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    function getSpecialTransitionEndEvent() {
      return {
        bindType: transition.end,
        delegateType: transition.end,
        handle: function handle(event) {
          if ($(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments);
          }
          return undefined;
        }
      };
    }

    function transitionEndTest() {
      if (window.QUnit) {
        return false;
      }

      var el = document.createElement('mm');

      for (var name in TransitionEndEvent) {
        if (el.style[name] !== undefined) {
          return {
            end: TransitionEndEvent[name]
          };
        }
      }

      return false;
    }

    function transitionEndEmulator(duration) {
      var _this2 = this;

      var called = false;

      $(this).one(Util.TRANSITION_END, function () {
        called = true;
      });

      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this2);
        }
      }, duration);

      return this;
    }

    function setTransitionEndSupport() {
      transition = transitionEndTest();
      $.fn.emulateTransitionEnd = transitionEndEmulator;

      if (Util.supportsTransitionEnd()) {
        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
    }

    var Util = {
      TRANSITION_END: 'mmTransitionEnd',

      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $(element).trigger(transition.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(transition);
      }
    };

    setTransitionEndSupport();

    return Util;
  }(jQuery);

  var MetisMenu = function ($) {

    var NAME = 'metisMenu';
    var DATA_KEY = 'metisMenu';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 350;

    var Default = {
      toggle: true,
      preventDefault: true,
      activeClass: 'active',
      collapseClass: 'collapse',
      collapseInClass: 'in',
      collapsingClass: 'collapsing',
      triggerElement: 'a',
      parentTrigger: 'li',
      subMenu: 'ul'
    };

    var Event = {
      SHOW: 'show' + EVENT_KEY,
      SHOWN: 'shown' + EVENT_KEY,
      HIDE: 'hide' + EVENT_KEY,
      HIDDEN: 'hidden' + EVENT_KEY,
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
    };

    var MetisMenu = function () {
      function MetisMenu(element, config) {
        _classCallCheck(this, MetisMenu);

        this._element = element;
        this._config = this._getConfig(config);
        this._transitioning = null;

        this.init();
      }

      MetisMenu.prototype.init = function init() {
        var self = this;
        $(this._element).find(this._config.parentTrigger + '.' + this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr('aria-expanded', true).addClass(this._config.collapseClass + ' ' + this._config.collapseInClass);

        $(this._element).find(this._config.parentTrigger).not('.' + this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr('aria-expanded', false).addClass(this._config.collapseClass);

        $(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).on(Event.CLICK_DATA_API, function (e) {
          var _this = $(this);
          var _parent = _this.parent(self._config.parentTrigger);
          var _siblings = _parent.siblings(self._config.parentTrigger).children(self._config.triggerElement);
          var _list = _parent.children(self._config.subMenu);
          if (self._config.preventDefault) {
            e.preventDefault();
          }
          if (_this.attr('aria-disabled') === 'true') {
            return;
          }
          if (_parent.hasClass(self._config.activeClass)) {
            _this.attr('aria-expanded', false);
            self._hide(_list);
          } else {
            self._show(_list);
            _this.attr('aria-expanded', true);
            if (self._config.toggle) {
              _siblings.attr('aria-expanded', false);
            }
          }

          if (self._config.onTransitionStart) {
            self._config.onTransitionStart(e);
          }
        });
      };

      MetisMenu.prototype._show = function _show(element) {
        if (this._transitioning || $(element).hasClass(this._config.collapsingClass)) {
          return;
        }
        var _this = this;
        var _el = $(element);

        var startEvent = $.Event(Event.SHOW);
        _el.trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        _el.parent(this._config.parentTrigger).addClass(this._config.activeClass);

        if (this._config.toggle) {
          this._hide(_el.parent(this._config.parentTrigger).siblings().children(this._config.subMenu + '.' + this._config.collapseInClass).attr('aria-expanded', false));
        }

        _el.removeClass(this._config.collapseClass).addClass(this._config.collapsingClass).height(0);

        this.setTransitioning(true);

        var complete = function complete() {

          _el.removeClass(_this._config.collapsingClass).addClass(_this._config.collapseClass + ' ' + _this._config.collapseInClass).height('').attr('aria-expanded', true);

          _this.setTransitioning(false);

          _el.trigger(Event.SHOWN);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        _el.height(_el[0].scrollHeight).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      };

      MetisMenu.prototype._hide = function _hide(element) {

        if (this._transitioning || !$(element).hasClass(this._config.collapseInClass)) {
          return;
        }
        var _this = this;
        var _el = $(element);

        var startEvent = $.Event(Event.HIDE);
        _el.trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        _el.parent(this._config.parentTrigger).removeClass(this._config.activeClass);
        _el.height(_el.height())[0].offsetHeight;

        _el.addClass(this._config.collapsingClass).removeClass(this._config.collapseClass).removeClass(this._config.collapseInClass);

        this.setTransitioning(true);

        var complete = function complete() {
          if (_this._transitioning && _this._config.onTransitionEnd) {
            _this._config.onTransitionEnd();
          }

          _this.setTransitioning(false);
          _el.trigger(Event.HIDDEN);

          _el.removeClass(_this._config.collapsingClass).addClass(_this._config.collapseClass).attr('aria-expanded', false);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        _el.height() == 0 || _el.css('display') == 'none' ? complete() : _el.height(0).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      };

      MetisMenu.prototype.setTransitioning = function setTransitioning(isTransitioning) {
        this._transitioning = isTransitioning;
      };

      MetisMenu.prototype.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);

        $(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).off('click');

        this._transitioning = null;
        this._config = null;
        this._element = null;
      };

      MetisMenu.prototype._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        return config;
      };

      MetisMenu._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);
          var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data && /dispose/.test(config)) {
            this.dispose();
          }

          if (!data) {
            data = new MetisMenu(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };

      return MetisMenu;
    }();

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = MetisMenu._jQueryInterface;
    $.fn[NAME].Constructor = MetisMenu;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return MetisMenu._jQueryInterface;
    };
    return MetisMenu;
  }(jQuery);
});
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):e.moment=a()}(this,function(){"use strict";var e,n;function l(){return e.apply(null,arguments)}function _(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function o(e){return void 0===e}function m(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function u(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function M(e,a){var t,s=[];for(t=0;t<e.length;++t)s.push(a(e[t],t));return s}function h(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function L(e,a){for(var t in a)h(a,t)&&(e[t]=a[t]);return h(a,"toString")&&(e.toString=a.toString),h(a,"valueOf")&&(e.valueOf=a.valueOf),e}function c(e,a,t,s){return va(e,a,t,s,!0).utc()}function Y(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function y(e){if(null==e._isValid){var a=Y(e),t=n.call(a.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&a.overflow<0&&!a.empty&&!a.invalidMonth&&!a.invalidWeekday&&!a.weekdayMismatch&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&t);if(e._strict&&(s=s&&0===a.charsLeftOver&&0===a.unusedTokens.length&&void 0===a.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function f(e){var a=c(NaN);return null!=e?L(Y(a),e):Y(a).userInvalidated=!0,a}n=Array.prototype.some?Array.prototype.some:function(e){for(var a=Object(this),t=a.length>>>0,s=0;s<t;s++)if(s in a&&e.call(this,a[s],s,a))return!0;return!1};var d=l.momentProperties=[];function k(e,a){var t,s,n;if(o(a._isAMomentObject)||(e._isAMomentObject=a._isAMomentObject),o(a._i)||(e._i=a._i),o(a._f)||(e._f=a._f),o(a._l)||(e._l=a._l),o(a._strict)||(e._strict=a._strict),o(a._tzm)||(e._tzm=a._tzm),o(a._isUTC)||(e._isUTC=a._isUTC),o(a._offset)||(e._offset=a._offset),o(a._pf)||(e._pf=Y(a)),o(a._locale)||(e._locale=a._locale),0<d.length)for(t=0;t<d.length;t++)o(n=a[s=d[t]])||(e[s]=n);return e}var a=!1;function p(e){k(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===a&&(a=!0,l.updateOffset(this),a=!1)}function D(e){return e instanceof p||null!=e&&null!=e._isAMomentObject}function T(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function g(e){var a=+e,t=0;return 0!==a&&isFinite(a)&&(t=T(a)),t}function r(e,a,t){var s,n=Math.min(e.length,a.length),d=Math.abs(e.length-a.length),r=0;for(s=0;s<n;s++)(t&&e[s]!==a[s]||!t&&g(e[s])!==g(a[s]))&&r++;return r+d}function w(e){!1===l.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function t(n,d){var r=!0;return L(function(){if(null!=l.deprecationHandler&&l.deprecationHandler(null,n),r){for(var e,a=[],t=0;t<arguments.length;t++){if(e="","object"==typeof arguments[t]){for(var s in e+="\n["+t+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[t];a.push(e)}w(n+"\nArguments: "+Array.prototype.slice.call(a).join("")+"\n"+(new Error).stack),r=!1}return d.apply(this,arguments)},d)}var s,v={};function S(e,a){null!=l.deprecationHandler&&l.deprecationHandler(e,a),v[e]||(w(a),v[e]=!0)}function H(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,a){var t,s=L({},e);for(t in a)h(a,t)&&(i(e[t])&&i(a[t])?(s[t]={},L(s[t],e[t]),L(s[t],a[t])):null!=a[t]?s[t]=a[t]:delete s[t]);for(t in e)h(e,t)&&!h(a,t)&&i(e[t])&&(s[t]=L({},s[t]));return s}function j(e){null!=e&&this.set(e)}l.suppressDeprecationWarnings=!1,l.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var a,t=[];for(a in e)h(e,a)&&t.push(a);return t};var x={};function P(e,a){var t=e.toLowerCase();x[t]=x[t+"s"]=x[a]=e}function O(e){return"string"==typeof e?x[e]||x[e.toLowerCase()]:void 0}function W(e){var a,t,s={};for(t in e)h(e,t)&&(a=O(t))&&(s[a]=e[t]);return s}var E={};function A(e,a){E[e]=a}function F(e,a,t){var s=""+Math.abs(e),n=a-s.length;return(0<=e?t?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+s}var z=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,J=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,N={},R={};function I(e,a,t,s){var n=s;"string"==typeof s&&(n=function(){return this[s]()}),e&&(R[e]=n),a&&(R[a[0]]=function(){return F(n.apply(this,arguments),a[1],a[2])}),t&&(R[t]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function C(e,a){return e.isValid()?(a=G(a,e.localeData()),N[a]=N[a]||function(s){var e,n,a,d=s.match(z);for(e=0,n=d.length;e<n;e++)R[d[e]]?d[e]=R[d[e]]:d[e]=(a=d[e]).match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"");return function(e){var a,t="";for(a=0;a<n;a++)t+=H(d[a])?d[a].call(e,s):d[a];return t}}(a),N[a](e)):e.localeData().invalidDate()}function G(e,a){var t=5;function s(e){return a.longDateFormat(e)||e}for(J.lastIndex=0;0<=t&&J.test(e);)e=e.replace(J,s),J.lastIndex=0,t-=1;return e}var U=/\d/,V=/\d\d/,K=/\d{3}/,Z=/\d{4}/,$=/[+-]?\d{6}/,B=/\d\d?/,q=/\d\d\d\d?/,Q=/\d\d\d\d\d\d?/,X=/\d{1,3}/,ee=/\d{1,4}/,ae=/[+-]?\d{1,6}/,te=/\d+/,se=/[+-]?\d+/,ne=/Z|[+-]\d\d:?\d\d/gi,de=/Z|[+-]\d\d(?::?\d\d)?/gi,re=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,_e={};function ie(e,t,s){_e[e]=H(t)?t:function(e,a){return e&&s?s:t}}function oe(e,a){return h(_e,e)?_e[e](a._strict,a._locale):new RegExp(me(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,a,t,s,n){return a||t||s||n})))}function me(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var ue={};function le(e,t){var a,s=t;for("string"==typeof e&&(e=[e]),m(t)&&(s=function(e,a){a[t]=g(e)}),a=0;a<e.length;a++)ue[e[a]]=s}function Me(e,n){le(e,function(e,a,t,s){t._w=t._w||{},n(e,t._w,t,s)})}var he=0,Le=1,ce=2,Ye=3,ye=4,fe=5,ke=6,pe=7,De=8;function Te(e){return ge(e)?366:365}function ge(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),P("year","y"),A("year",1),ie("Y",se),ie("YY",B,V),ie("YYYY",ee,Z),ie("YYYYY",ae,$),ie("YYYYYY",ae,$),le(["YYYYY","YYYYYY"],he),le("YYYY",function(e,a){a[he]=2===e.length?l.parseTwoDigitYear(e):g(e)}),le("YY",function(e,a){a[he]=l.parseTwoDigitYear(e)}),le("Y",function(e,a){a[he]=parseInt(e,10)}),l.parseTwoDigitYear=function(e){return g(e)+(68<g(e)?1900:2e3)};var we,ve=Se("FullYear",!0);function Se(a,t){return function(e){return null!=e?(be(this,a,e),l.updateOffset(this,t),this):He(this,a)}}function He(e,a){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+a]():NaN}function be(e,a,t){e.isValid()&&!isNaN(t)&&("FullYear"===a&&ge(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+a](t,e.month(),je(t,e.month())):e._d["set"+(e._isUTC?"UTC":"")+a](t))}function je(e,a){if(isNaN(e)||isNaN(a))return NaN;var t,s=(a%(t=12)+t)%t;return e+=(a-s)/12,1===s?ge(e)?29:28:31-s%7%2}we=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var a;for(a=0;a<this.length;++a)if(this[a]===e)return a;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),P("month","M"),A("month",8),ie("M",B),ie("MM",B,V),ie("MMM",function(e,a){return a.monthsShortRegex(e)}),ie("MMMM",function(e,a){return a.monthsRegex(e)}),le(["M","MM"],function(e,a){a[Le]=g(e)-1}),le(["MMM","MMMM"],function(e,a,t,s){var n=t._locale.monthsParse(e,s,t._strict);null!=n?a[Le]=n:Y(t).invalidMonth=e});var xe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Oe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function We(e,a){var t;if(!e.isValid())return e;if("string"==typeof a)if(/^\d+$/.test(a))a=g(a);else if(!m(a=e.localeData().monthsParse(a)))return e;return t=Math.min(e.date(),je(e.year(),a)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](a,t),e}function Ee(e){return null!=e?(We(this,e),l.updateOffset(this,!0),this):He(this,"Month")}var Ae=re;var Fe=re;function ze(){function e(e,a){return a.length-e.length}var a,t,s=[],n=[],d=[];for(a=0;a<12;a++)t=c([2e3,a]),s.push(this.monthsShort(t,"")),n.push(this.months(t,"")),d.push(this.months(t,"")),d.push(this.monthsShort(t,""));for(s.sort(e),n.sort(e),d.sort(e),a=0;a<12;a++)s[a]=me(s[a]),n[a]=me(n[a]);for(a=0;a<24;a++)d[a]=me(d[a]);this._monthsRegex=new RegExp("^("+d.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Je(e){var a=new Date(Date.UTC.apply(null,arguments));return e<100&&0<=e&&isFinite(a.getUTCFullYear())&&a.setUTCFullYear(e),a}function Ne(e,a,t){var s=7+a-t;return-((7+Je(e,0,s).getUTCDay()-a)%7)+s-1}function Re(e,a,t,s,n){var d,r,_=1+7*(a-1)+(7+t-s)%7+Ne(e,s,n);return _<=0?r=Te(d=e-1)+_:_>Te(e)?(d=e+1,r=_-Te(e)):(d=e,r=_),{year:d,dayOfYear:r}}function Ie(e,a,t){var s,n,d=Ne(e.year(),a,t),r=Math.floor((e.dayOfYear()-d-1)/7)+1;return r<1?s=r+Ce(n=e.year()-1,a,t):r>Ce(e.year(),a,t)?(s=r-Ce(e.year(),a,t),n=e.year()+1):(n=e.year(),s=r),{week:s,year:n}}function Ce(e,a,t){var s=Ne(e,a,t),n=Ne(e+1,a,t);return(Te(e)-s+n)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),P("week","w"),P("isoWeek","W"),A("week",5),A("isoWeek",5),ie("w",B),ie("ww",B,V),ie("W",B),ie("WW",B,V),Me(["w","ww","W","WW"],function(e,a,t,s){a[s.substr(0,1)]=g(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),P("day","d"),P("weekday","e"),P("isoWeekday","E"),A("day",11),A("weekday",11),A("isoWeekday",11),ie("d",B),ie("e",B),ie("E",B),ie("dd",function(e,a){return a.weekdaysMinRegex(e)}),ie("ddd",function(e,a){return a.weekdaysShortRegex(e)}),ie("dddd",function(e,a){return a.weekdaysRegex(e)}),Me(["dd","ddd","dddd"],function(e,a,t,s){var n=t._locale.weekdaysParse(e,s,t._strict);null!=n?a.d=n:Y(t).invalidWeekday=e}),Me(["d","e","E"],function(e,a,t,s){a[s]=g(e)});var Ge="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ue="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var Ve="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var Ke=re;var Ze=re;var $e=re;function Be(){function e(e,a){return a.length-e.length}var a,t,s,n,d,r=[],_=[],i=[],o=[];for(a=0;a<7;a++)t=c([2e3,1]).day(a),s=this.weekdaysMin(t,""),n=this.weekdaysShort(t,""),d=this.weekdays(t,""),r.push(s),_.push(n),i.push(d),o.push(s),o.push(n),o.push(d);for(r.sort(e),_.sort(e),i.sort(e),o.sort(e),a=0;a<7;a++)_[a]=me(_[a]),i[a]=me(i[a]),o[a]=me(o[a]);this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+_.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function qe(){return this.hours()%12||12}function Qe(e,a){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),a)})}function Xe(e,a){return a._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+qe.apply(this)+F(this.minutes(),2)}),I("hmmss",0,0,function(){return""+qe.apply(this)+F(this.minutes(),2)+F(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+F(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+F(this.minutes(),2)+F(this.seconds(),2)}),Qe("a",!0),Qe("A",!1),P("hour","h"),A("hour",13),ie("a",Xe),ie("A",Xe),ie("H",B),ie("h",B),ie("k",B),ie("HH",B,V),ie("hh",B,V),ie("kk",B,V),ie("hmm",q),ie("hmmss",Q),ie("Hmm",q),ie("Hmmss",Q),le(["H","HH"],Ye),le(["k","kk"],function(e,a,t){var s=g(e);a[Ye]=24===s?0:s}),le(["a","A"],function(e,a,t){t._isPm=t._locale.isPM(e),t._meridiem=e}),le(["h","hh"],function(e,a,t){a[Ye]=g(e),Y(t).bigHour=!0}),le("hmm",function(e,a,t){var s=e.length-2;a[Ye]=g(e.substr(0,s)),a[ye]=g(e.substr(s)),Y(t).bigHour=!0}),le("hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[Ye]=g(e.substr(0,s)),a[ye]=g(e.substr(s,2)),a[fe]=g(e.substr(n)),Y(t).bigHour=!0}),le("Hmm",function(e,a,t){var s=e.length-2;a[Ye]=g(e.substr(0,s)),a[ye]=g(e.substr(s))}),le("Hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[Ye]=g(e.substr(0,s)),a[ye]=g(e.substr(s,2)),a[fe]=g(e.substr(n))});var ea,aa=Se("Hours",!0),ta={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Pe,monthsShort:Oe,week:{dow:0,doy:6},weekdays:Ge,weekdaysMin:Ve,weekdaysShort:Ue,meridiemParse:/[ap]\.?m?\.?/i},sa={},na={};function da(e){return e?e.toLowerCase().replace("_","-"):e}function ra(e){var a=null;if(!sa[e]&&"undefined"!=typeof module&&module&&module.exports)try{a=ea._abbr,require("./locale/"+e),_a(a)}catch(e){}return sa[e]}function _a(e,a){var t;return e&&((t=o(a)?oa(e):ia(e,a))?ea=t:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ea._abbr}function ia(e,a){if(null!==a){var t,s=ta;if(a.abbr=e,null!=sa[e])S("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=sa[e]._config;else if(null!=a.parentLocale)if(null!=sa[a.parentLocale])s=sa[a.parentLocale]._config;else{if(null==(t=ra(a.parentLocale)))return na[a.parentLocale]||(na[a.parentLocale]=[]),na[a.parentLocale].push({name:e,config:a}),null;s=t._config}return sa[e]=new j(b(s,a)),na[e]&&na[e].forEach(function(e){ia(e.name,e.config)}),_a(e),sa[e]}return delete sa[e],null}function oa(e){var a;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ea;if(!_(e)){if(a=ra(e))return a;e=[e]}return function(e){for(var a,t,s,n,d=0;d<e.length;){for(a=(n=da(e[d]).split("-")).length,t=(t=da(e[d+1]))?t.split("-"):null;0<a;){if(s=ra(n.slice(0,a).join("-")))return s;if(t&&t.length>=a&&r(n,t,!0)>=a-1)break;a--}d++}return ea}(e)}function ma(e){var a,t=e._a;return t&&-2===Y(e).overflow&&(a=t[Le]<0||11<t[Le]?Le:t[ce]<1||t[ce]>je(t[he],t[Le])?ce:t[Ye]<0||24<t[Ye]||24===t[Ye]&&(0!==t[ye]||0!==t[fe]||0!==t[ke])?Ye:t[ye]<0||59<t[ye]?ye:t[fe]<0||59<t[fe]?fe:t[ke]<0||999<t[ke]?ke:-1,Y(e)._overflowDayOfYear&&(a<he||ce<a)&&(a=ce),Y(e)._overflowWeeks&&-1===a&&(a=pe),Y(e)._overflowWeekday&&-1===a&&(a=De),Y(e).overflow=a),e}function ua(e,a,t){return null!=e?e:null!=a?a:t}function la(e){var a,t,s,n,d,r=[];if(!e._d){var _,i;for(_=e,i=new Date(l.now()),s=_._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()],e._w&&null==e._a[ce]&&null==e._a[Le]&&function(e){var a,t,s,n,d,r,_,i;if(null!=(a=e._w).GG||null!=a.W||null!=a.E)d=1,r=4,t=ua(a.GG,e._a[he],Ie(Sa(),1,4).year),s=ua(a.W,1),((n=ua(a.E,1))<1||7<n)&&(i=!0);else{d=e._locale._week.dow,r=e._locale._week.doy;var o=Ie(Sa(),d,r);t=ua(a.gg,e._a[he],o.year),s=ua(a.w,o.week),null!=a.d?((n=a.d)<0||6<n)&&(i=!0):null!=a.e?(n=a.e+d,(a.e<0||6<a.e)&&(i=!0)):n=d}s<1||s>Ce(t,d,r)?Y(e)._overflowWeeks=!0:null!=i?Y(e)._overflowWeekday=!0:(_=Re(t,s,n,d,r),e._a[he]=_.year,e._dayOfYear=_.dayOfYear)}(e),null!=e._dayOfYear&&(d=ua(e._a[he],s[he]),(e._dayOfYear>Te(d)||0===e._dayOfYear)&&(Y(e)._overflowDayOfYear=!0),t=Je(d,0,e._dayOfYear),e._a[Le]=t.getUTCMonth(),e._a[ce]=t.getUTCDate()),a=0;a<3&&null==e._a[a];++a)e._a[a]=r[a]=s[a];for(;a<7;a++)e._a[a]=r[a]=null==e._a[a]?2===a?1:0:e._a[a];24===e._a[Ye]&&0===e._a[ye]&&0===e._a[fe]&&0===e._a[ke]&&(e._nextDay=!0,e._a[Ye]=0),e._d=(e._useUTC?Je:function(e,a,t,s,n,d,r){var _=new Date(e,a,t,s,n,d,r);return e<100&&0<=e&&isFinite(_.getFullYear())&&_.setFullYear(e),_}).apply(null,r),n=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Ye]=24),e._w&&void 0!==e._w.d&&e._w.d!==n&&(Y(e).weekdayMismatch=!0)}}var Ma=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ha=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,La=/Z|[+-]\d\d(?::?\d\d)?/,ca=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Ya=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],ya=/^\/?Date\((\-?\d+)/i;function fa(e){var a,t,s,n,d,r,_=e._i,i=Ma.exec(_)||ha.exec(_);if(i){for(Y(e).iso=!0,a=0,t=ca.length;a<t;a++)if(ca[a][1].exec(i[1])){n=ca[a][0],s=!1!==ca[a][2];break}if(null==n)return void(e._isValid=!1);if(i[3]){for(a=0,t=Ya.length;a<t;a++)if(Ya[a][1].exec(i[3])){d=(i[2]||" ")+Ya[a][0];break}if(null==d)return void(e._isValid=!1)}if(!s&&null!=d)return void(e._isValid=!1);if(i[4]){if(!La.exec(i[4]))return void(e._isValid=!1);r="Z"}e._f=n+(d||"")+(r||""),ga(e)}else e._isValid=!1}var ka=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function pa(e,a,t,s,n,d){var r=[function(e){var a=parseInt(e,10);{if(a<=49)return 2e3+a;if(a<=999)return 1900+a}return a}(e),Oe.indexOf(a),parseInt(t,10),parseInt(s,10),parseInt(n,10)];return d&&r.push(parseInt(d,10)),r}var Da={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Ta(e){var a,t,s,n=ka.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim());if(n){var d=pa(n[4],n[3],n[2],n[5],n[6],n[7]);if(a=n[1],t=d,s=e,a&&Ue.indexOf(a)!==new Date(t[0],t[1],t[2]).getDay()&&(Y(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=d,e._tzm=function(e,a,t){if(e)return Da[e];if(a)return 0;var s=parseInt(t,10),n=s%100;return(s-n)/100*60+n}(n[8],n[9],n[10]),e._d=Je.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),Y(e).rfc2822=!0}else e._isValid=!1}function ga(e){if(e._f!==l.ISO_8601)if(e._f!==l.RFC_2822){e._a=[],Y(e).empty=!0;var a,t,s,n,d,r,_,i,o=""+e._i,m=o.length,u=0;for(s=G(e._f,e._locale).match(z)||[],a=0;a<s.length;a++)n=s[a],(t=(o.match(oe(n,e))||[])[0])&&(0<(d=o.substr(0,o.indexOf(t))).length&&Y(e).unusedInput.push(d),o=o.slice(o.indexOf(t)+t.length),u+=t.length),R[n]?(t?Y(e).empty=!1:Y(e).unusedTokens.push(n),r=n,i=e,null!=(_=t)&&h(ue,r)&&ue[r](_,i._a,i,r)):e._strict&&!t&&Y(e).unusedTokens.push(n);Y(e).charsLeftOver=m-u,0<o.length&&Y(e).unusedInput.push(o),e._a[Ye]<=12&&!0===Y(e).bigHour&&0<e._a[Ye]&&(Y(e).bigHour=void 0),Y(e).parsedDateParts=e._a.slice(0),Y(e).meridiem=e._meridiem,e._a[Ye]=function(e,a,t){var s;if(null==t)return a;return null!=e.meridiemHour?e.meridiemHour(a,t):(null!=e.isPM&&((s=e.isPM(t))&&a<12&&(a+=12),s||12!==a||(a=0)),a)}(e._locale,e._a[Ye],e._meridiem),la(e),ma(e)}else Ta(e);else fa(e)}function wa(e){var a,t,s,n,d=e._i,r=e._f;return e._locale=e._locale||oa(e._l),null===d||void 0===r&&""===d?f({nullInput:!0}):("string"==typeof d&&(e._i=d=e._locale.preparse(d)),D(d)?new p(ma(d)):(u(d)?e._d=d:_(r)?function(e){var a,t,s,n,d;if(0===e._f.length)return Y(e).invalidFormat=!0,e._d=new Date(NaN);for(n=0;n<e._f.length;n++)d=0,a=k({},e),null!=e._useUTC&&(a._useUTC=e._useUTC),a._f=e._f[n],ga(a),y(a)&&(d+=Y(a).charsLeftOver,d+=10*Y(a).unusedTokens.length,Y(a).score=d,(null==s||d<s)&&(s=d,t=a));L(e,t||a)}(e):r?ga(e):o(t=(a=e)._i)?a._d=new Date(l.now()):u(t)?a._d=new Date(t.valueOf()):"string"==typeof t?(s=a,null===(n=ya.exec(s._i))?(fa(s),!1===s._isValid&&(delete s._isValid,Ta(s),!1===s._isValid&&(delete s._isValid,l.createFromInputFallback(s)))):s._d=new Date(+n[1])):_(t)?(a._a=M(t.slice(0),function(e){return parseInt(e,10)}),la(a)):i(t)?function(e){if(!e._d){var a=W(e._i);e._a=M([a.year,a.month,a.day||a.date,a.hour,a.minute,a.second,a.millisecond],function(e){return e&&parseInt(e,10)}),la(e)}}(a):m(t)?a._d=new Date(t):l.createFromInputFallback(a),y(e)||(e._d=null),e))}function va(e,a,t,s,n){var d,r={};return!0!==t&&!1!==t||(s=t,t=void 0),(i(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var a;for(a in e)if(e.hasOwnProperty(a))return!1;return!0}(e)||_(e)&&0===e.length)&&(e=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=n,r._l=t,r._i=e,r._f=a,r._strict=s,(d=new p(ma(wa(r))))._nextDay&&(d.add(1,"d"),d._nextDay=void 0),d}function Sa(e,a,t,s){return va(e,a,t,s,!1)}l.createFromInputFallback=t("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),l.ISO_8601=function(){},l.RFC_2822=function(){};var Ha=t("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Sa.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:f()}),ba=t("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Sa.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:f()});function ja(e,a){var t,s;if(1===a.length&&_(a[0])&&(a=a[0]),!a.length)return Sa();for(t=a[0],s=1;s<a.length;++s)a[s].isValid()&&!a[s][e](t)||(t=a[s]);return t}var xa=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Pa(e){var a=W(e),t=a.year||0,s=a.quarter||0,n=a.month||0,d=a.week||0,r=a.day||0,_=a.hour||0,i=a.minute||0,o=a.second||0,m=a.millisecond||0;this._isValid=function(e){for(var a in e)if(-1===we.call(xa,a)||null!=e[a]&&isNaN(e[a]))return!1;for(var t=!1,s=0;s<xa.length;++s)if(e[xa[s]]){if(t)return!1;parseFloat(e[xa[s]])!==g(e[xa[s]])&&(t=!0)}return!0}(a),this._milliseconds=+m+1e3*o+6e4*i+1e3*_*60*60,this._days=+r+7*d,this._months=+n+3*s+12*t,this._data={},this._locale=oa(),this._bubble()}function Oa(e){return e instanceof Pa}function Wa(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ea(e,t){I(e,0,0,function(){var e=this.utcOffset(),a="+";return e<0&&(e=-e,a="-"),a+F(~~(e/60),2)+t+F(~~e%60,2)})}Ea("Z",":"),Ea("ZZ",""),ie("Z",de),ie("ZZ",de),le(["Z","ZZ"],function(e,a,t){t._useUTC=!0,t._tzm=Fa(de,e)});var Aa=/([\+\-]|\d\d)/gi;function Fa(e,a){var t=(a||"").match(e);if(null===t)return null;var s=((t[t.length-1]||[])+"").match(Aa)||["-",0,0],n=60*s[1]+g(s[2]);return 0===n?0:"+"===s[0]?n:-n}function za(e,a){var t,s;return a._isUTC?(t=a.clone(),s=(D(e)||u(e)?e.valueOf():Sa(e).valueOf())-t.valueOf(),t._d.setTime(t._d.valueOf()+s),l.updateOffset(t,!1),t):Sa(e).local()}function Ja(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Na(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}l.updateOffset=function(){};var Ra=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ia=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ca(e,a){var t,s,n,d=e,r=null;return Oa(e)?d={ms:e._milliseconds,d:e._days,M:e._months}:m(e)?(d={},a?d[a]=e:d.milliseconds=e):(r=Ra.exec(e))?(t="-"===r[1]?-1:1,d={y:0,d:g(r[ce])*t,h:g(r[Ye])*t,m:g(r[ye])*t,s:g(r[fe])*t,ms:g(Wa(1e3*r[ke]))*t}):(r=Ia.exec(e))?(t="-"===r[1]?-1:(r[1],1),d={y:Ga(r[2],t),M:Ga(r[3],t),w:Ga(r[4],t),d:Ga(r[5],t),h:Ga(r[6],t),m:Ga(r[7],t),s:Ga(r[8],t)}):null==d?d={}:"object"==typeof d&&("from"in d||"to"in d)&&(n=function(e,a){var t;if(!e.isValid()||!a.isValid())return{milliseconds:0,months:0};a=za(a,e),e.isBefore(a)?t=Ua(e,a):((t=Ua(a,e)).milliseconds=-t.milliseconds,t.months=-t.months);return t}(Sa(d.from),Sa(d.to)),(d={}).ms=n.milliseconds,d.M=n.months),s=new Pa(d),Oa(e)&&h(e,"_locale")&&(s._locale=e._locale),s}function Ga(e,a){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*a}function Ua(e,a){var t={milliseconds:0,months:0};return t.months=a.month()-e.month()+12*(a.year()-e.year()),e.clone().add(t.months,"M").isAfter(a)&&--t.months,t.milliseconds=+a-+e.clone().add(t.months,"M"),t}function Va(s,n){return function(e,a){var t;return null===a||isNaN(+a)||(S(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),t=e,e=a,a=t),Ka(this,Ca(e="string"==typeof e?+e:e,a),s),this}}function Ka(e,a,t,s){var n=a._milliseconds,d=Wa(a._days),r=Wa(a._months);e.isValid()&&(s=null==s||s,r&&We(e,He(e,"Month")+r*t),d&&be(e,"Date",He(e,"Date")+d*t),n&&e._d.setTime(e._d.valueOf()+n*t),s&&l.updateOffset(e,d||r))}Ca.fn=Pa.prototype,Ca.invalid=function(){return Ca(NaN)};var Za=Va(1,"add"),$a=Va(-1,"subtract");function Ba(e,a){var t=12*(a.year()-e.year())+(a.month()-e.month()),s=e.clone().add(t,"months");return-(t+(a-s<0?(a-s)/(s-e.clone().add(t-1,"months")):(a-s)/(e.clone().add(t+1,"months")-s)))||0}function qa(e){var a;return void 0===e?this._locale._abbr:(null!=(a=oa(e))&&(this._locale=a),this)}l.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",l.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Qa=t("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Xa(){return this._locale}function et(e,a){I(0,[e,e.length],0,a)}function at(e,a,t,s,n){var d;return null==e?Ie(this,s,n).year:((d=Ce(e,s,n))<a&&(a=d),function(e,a,t,s,n){var d=Re(e,a,t,s,n),r=Je(d.year,0,d.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}.call(this,e,a,t,s,n))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),et("gggg","weekYear"),et("ggggg","weekYear"),et("GGGG","isoWeekYear"),et("GGGGG","isoWeekYear"),P("weekYear","gg"),P("isoWeekYear","GG"),A("weekYear",1),A("isoWeekYear",1),ie("G",se),ie("g",se),ie("GG",B,V),ie("gg",B,V),ie("GGGG",ee,Z),ie("gggg",ee,Z),ie("GGGGG",ae,$),ie("ggggg",ae,$),Me(["gggg","ggggg","GGGG","GGGGG"],function(e,a,t,s){a[s.substr(0,2)]=g(e)}),Me(["gg","GG"],function(e,a,t,s){a[s]=l.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),P("quarter","Q"),A("quarter",7),ie("Q",U),le("Q",function(e,a){a[Le]=3*(g(e)-1)}),I("D",["DD",2],"Do","date"),P("date","D"),A("date",9),ie("D",B),ie("DD",B,V),ie("Do",function(e,a){return e?a._dayOfMonthOrdinalParse||a._ordinalParse:a._dayOfMonthOrdinalParseLenient}),le(["D","DD"],ce),le("Do",function(e,a){a[ce]=g(e.match(B)[0])});var tt=Se("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),P("dayOfYear","DDD"),A("dayOfYear",4),ie("DDD",X),ie("DDDD",K),le(["DDD","DDDD"],function(e,a,t){t._dayOfYear=g(e)}),I("m",["mm",2],0,"minute"),P("minute","m"),A("minute",14),ie("m",B),ie("mm",B,V),le(["m","mm"],ye);var st=Se("Minutes",!1);I("s",["ss",2],0,"second"),P("second","s"),A("second",15),ie("s",B),ie("ss",B,V),le(["s","ss"],fe);var nt,dt=Se("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),P("millisecond","ms"),A("millisecond",16),ie("S",X,U),ie("SS",X,V),ie("SSS",X,K),nt="SSSS";nt.length<=9;nt+="S")ie(nt,te);function rt(e,a){a[ke]=g(1e3*("0."+e))}for(nt="S";nt.length<=9;nt+="S")le(nt,rt);var _t=Se("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var it=p.prototype;function ot(e){return e}it.add=Za,it.calendar=function(e,a){var t=e||Sa(),s=za(t,this).startOf("day"),n=l.calendarFormat(this,s)||"sameElse",d=a&&(H(a[n])?a[n].call(this,t):a[n]);return this.format(d||this.localeData().calendar(n,this,Sa(t)))},it.clone=function(){return new p(this)},it.diff=function(e,a,t){var s,n,d;if(!this.isValid())return NaN;if(!(s=za(e,this)).isValid())return NaN;switch(n=6e4*(s.utcOffset()-this.utcOffset()),a=O(a)){case"year":d=Ba(this,s)/12;break;case"month":d=Ba(this,s);break;case"quarter":d=Ba(this,s)/3;break;case"second":d=(this-s)/1e3;break;case"minute":d=(this-s)/6e4;break;case"hour":d=(this-s)/36e5;break;case"day":d=(this-s-n)/864e5;break;case"week":d=(this-s-n)/6048e5;break;default:d=this-s}return t?d:T(d)},it.endOf=function(e){return void 0===(e=O(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},it.format=function(e){e||(e=this.isUtc()?l.defaultFormatUtc:l.defaultFormat);var a=C(this,e);return this.localeData().postformat(a)},it.from=function(e,a){return this.isValid()&&(D(e)&&e.isValid()||Sa(e).isValid())?Ca({to:this,from:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},it.fromNow=function(e){return this.from(Sa(),e)},it.to=function(e,a){return this.isValid()&&(D(e)&&e.isValid()||Sa(e).isValid())?Ca({from:this,to:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},it.toNow=function(e){return this.to(Sa(),e)},it.get=function(e){return H(this[e=O(e)])?this[e]():this},it.invalidAt=function(){return Y(this).overflow},it.isAfter=function(e,a){var t=D(e)?e:Sa(e);return!(!this.isValid()||!t.isValid())&&("millisecond"===(a=O(o(a)?"millisecond":a))?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(a).valueOf())},it.isBefore=function(e,a){var t=D(e)?e:Sa(e);return!(!this.isValid()||!t.isValid())&&("millisecond"===(a=O(o(a)?"millisecond":a))?this.valueOf()<t.valueOf():this.clone().endOf(a).valueOf()<t.valueOf())},it.isBetween=function(e,a,t,s){return("("===(s=s||"()")[0]?this.isAfter(e,t):!this.isBefore(e,t))&&(")"===s[1]?this.isBefore(a,t):!this.isAfter(a,t))},it.isSame=function(e,a){var t,s=D(e)?e:Sa(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(a=O(a||"millisecond"))?this.valueOf()===s.valueOf():(t=s.valueOf(),this.clone().startOf(a).valueOf()<=t&&t<=this.clone().endOf(a).valueOf()))},it.isSameOrAfter=function(e,a){return this.isSame(e,a)||this.isAfter(e,a)},it.isSameOrBefore=function(e,a){return this.isSame(e,a)||this.isBefore(e,a)},it.isValid=function(){return y(this)},it.lang=Qa,it.locale=qa,it.localeData=Xa,it.max=ba,it.min=Ha,it.parsingFlags=function(){return L({},Y(this))},it.set=function(e,a){if("object"==typeof e)for(var t=function(e){var a=[];for(var t in e)a.push({unit:t,priority:E[t]});return a.sort(function(e,a){return e.priority-a.priority}),a}(e=W(e)),s=0;s<t.length;s++)this[t[s].unit](e[t[s].unit]);else if(H(this[e=O(e)]))return this[e](a);return this},it.startOf=function(e){switch(e=O(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},it.subtract=$a,it.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},it.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},it.toDate=function(){return new Date(this.valueOf())},it.toISOString=function(e){if(!this.isValid())return null;var a=!0!==e,t=a?this.clone().utc():this;return t.year()<0||9999<t.year()?C(t,a?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):H(Date.prototype.toISOString)?a?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",C(t,"Z")):C(t,a?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},it.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",a="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",a="Z");var t="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n=a+'[")]';return this.format(t+s+"-MM-DD[T]HH:mm:ss.SSS"+n)},it.toJSON=function(){return this.isValid()?this.toISOString():null},it.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},it.unix=function(){return Math.floor(this.valueOf()/1e3)},it.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},it.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},it.year=ve,it.isLeapYear=function(){return ge(this.year())},it.weekYear=function(e){return at.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},it.isoWeekYear=function(e){return at.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},it.quarter=it.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},it.month=Ee,it.daysInMonth=function(){return je(this.year(),this.month())},it.week=it.weeks=function(e){var a=this.localeData().week(this);return null==e?a:this.add(7*(e-a),"d")},it.isoWeek=it.isoWeeks=function(e){var a=Ie(this,1,4).week;return null==e?a:this.add(7*(e-a),"d")},it.weeksInYear=function(){var e=this.localeData()._week;return Ce(this.year(),e.dow,e.doy)},it.isoWeeksInYear=function(){return Ce(this.year(),1,4)},it.date=tt,it.day=it.days=function(e){if(!this.isValid())return null!=e?this:NaN;var a,t,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(a=e,t=this.localeData(),e="string"!=typeof a?a:isNaN(a)?"number"==typeof(a=t.weekdaysParse(a))?a:null:parseInt(a,10),this.add(e-s,"d")):s},it.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var a=(this.day()+7-this.localeData()._week.dow)%7;return null==e?a:this.add(e-a,"d")},it.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var a=(t=e,s=this.localeData(),"string"==typeof t?s.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?a:a-7)}return this.day()||7;var t,s},it.dayOfYear=function(e){var a=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?a:this.add(e-a,"d")},it.hour=it.hours=aa,it.minute=it.minutes=st,it.second=it.seconds=dt,it.millisecond=it.milliseconds=_t,it.utcOffset=function(e,a,t){var s,n=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Fa(de,e)))return this}else Math.abs(e)<16&&!t&&(e*=60);return!this._isUTC&&a&&(s=Ja(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),n!==e&&(!a||this._changeInProgress?Ka(this,Ca(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,l.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?n:Ja(this)},it.utc=function(e){return this.utcOffset(0,e)},it.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ja(this),"m")),this},it.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Fa(ne,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},it.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Sa(e).utcOffset():0,(this.utcOffset()-e)%60==0)},it.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},it.isLocal=function(){return!!this.isValid()&&!this._isUTC},it.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},it.isUtc=Na,it.isUTC=Na,it.zoneAbbr=function(){return this._isUTC?"UTC":""},it.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},it.dates=t("dates accessor is deprecated. Use date instead.",tt),it.months=t("months accessor is deprecated. Use month instead",Ee),it.years=t("years accessor is deprecated. Use year instead",ve),it.zone=t("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,a){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,a),this):-this.utcOffset()}),it.isDSTShifted=t("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!o(this._isDSTShifted))return this._isDSTShifted;var e={};if(k(e,this),(e=wa(e))._a){var a=e._isUTC?c(e._a):Sa(e._a);this._isDSTShifted=this.isValid()&&0<r(e._a,a.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var mt=j.prototype;function ut(e,a,t,s){var n=oa(),d=c().set(s,a);return n[t](d,e)}function lt(e,a,t){if(m(e)&&(a=e,e=void 0),e=e||"",null!=a)return ut(e,a,t,"month");var s,n=[];for(s=0;s<12;s++)n[s]=ut(e,s,t,"month");return n}function Mt(e,a,t,s){"boolean"==typeof e?m(a)&&(t=a,a=void 0):(a=e,e=!1,m(t=a)&&(t=a,a=void 0)),a=a||"";var n,d=oa(),r=e?d._week.dow:0;if(null!=t)return ut(a,(t+r)%7,s,"day");var _=[];for(n=0;n<7;n++)_[n]=ut(a,(n+r)%7,s,"day");return _}mt.calendar=function(e,a,t){var s=this._calendar[e]||this._calendar.sameElse;return H(s)?s.call(a,t):s},mt.longDateFormat=function(e){var a=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return a||!t?a:(this._longDateFormat[e]=t.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},mt.invalidDate=function(){return this._invalidDate},mt.ordinal=function(e){return this._ordinal.replace("%d",e)},mt.preparse=ot,mt.postformat=ot,mt.relativeTime=function(e,a,t,s){var n=this._relativeTime[t];return H(n)?n(e,a,t,s):n.replace(/%d/i,e)},mt.pastFuture=function(e,a){var t=this._relativeTime[0<e?"future":"past"];return H(t)?t(a):t.replace(/%s/i,a)},mt.set=function(e){var a,t;for(t in e)H(a=e[t])?this[t]=a:this["_"+t]=a;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},mt.months=function(e,a){return e?_(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||xe).test(a)?"format":"standalone"][e.month()]:_(this._months)?this._months:this._months.standalone},mt.monthsShort=function(e,a){return e?_(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[xe.test(a)?"format":"standalone"][e.month()]:_(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},mt.monthsParse=function(e,a,t){var s,n,d;if(this._monthsParseExact)return function(e,a,t){var s,n,d,r=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)d=c([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(d,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(d,"").toLocaleLowerCase();return t?"MMM"===a?-1!==(n=we.call(this._shortMonthsParse,r))?n:null:-1!==(n=we.call(this._longMonthsParse,r))?n:null:"MMM"===a?-1!==(n=we.call(this._shortMonthsParse,r))?n:-1!==(n=we.call(this._longMonthsParse,r))?n:null:-1!==(n=we.call(this._longMonthsParse,r))?n:-1!==(n=we.call(this._shortMonthsParse,r))?n:null}.call(this,e,a,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(n=c([2e3,s]),t&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),t||this._monthsParse[s]||(d="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(d.replace(".",""),"i")),t&&"MMMM"===a&&this._longMonthsParse[s].test(e))return s;if(t&&"MMM"===a&&this._shortMonthsParse[s].test(e))return s;if(!t&&this._monthsParse[s].test(e))return s}},mt.monthsRegex=function(e){return this._monthsParseExact?(h(this,"_monthsRegex")||ze.call(this),e?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=Fe),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},mt.monthsShortRegex=function(e){return this._monthsParseExact?(h(this,"_monthsRegex")||ze.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=Ae),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},mt.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},mt.firstDayOfYear=function(){return this._week.doy},mt.firstDayOfWeek=function(){return this._week.dow},mt.weekdays=function(e,a){return e?_(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(a)?"format":"standalone"][e.day()]:_(this._weekdays)?this._weekdays:this._weekdays.standalone},mt.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},mt.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},mt.weekdaysParse=function(e,a,t){var s,n,d;if(this._weekdaysParseExact)return function(e,a,t){var s,n,d,r=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)d=c([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(d,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(d,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(d,"").toLocaleLowerCase();return t?"dddd"===a?-1!==(n=we.call(this._weekdaysParse,r))?n:null:"ddd"===a?-1!==(n=we.call(this._shortWeekdaysParse,r))?n:null:-1!==(n=we.call(this._minWeekdaysParse,r))?n:null:"dddd"===a?-1!==(n=we.call(this._weekdaysParse,r))?n:-1!==(n=we.call(this._shortWeekdaysParse,r))?n:-1!==(n=we.call(this._minWeekdaysParse,r))?n:null:"ddd"===a?-1!==(n=we.call(this._shortWeekdaysParse,r))?n:-1!==(n=we.call(this._weekdaysParse,r))?n:-1!==(n=we.call(this._minWeekdaysParse,r))?n:null:-1!==(n=we.call(this._minWeekdaysParse,r))?n:-1!==(n=we.call(this._weekdaysParse,r))?n:-1!==(n=we.call(this._shortWeekdaysParse,r))?n:null}.call(this,e,a,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(n=c([2e3,1]).day(s),t&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(d="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(d.replace(".",""),"i")),t&&"dddd"===a&&this._fullWeekdaysParse[s].test(e))return s;if(t&&"ddd"===a&&this._shortWeekdaysParse[s].test(e))return s;if(t&&"dd"===a&&this._minWeekdaysParse[s].test(e))return s;if(!t&&this._weekdaysParse[s].test(e))return s}},mt.weekdaysRegex=function(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=Ke),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},mt.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ze),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},mt.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=$e),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},mt.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},mt.meridiem=function(e,a,t){return 11<e?t?"pm":"PM":t?"am":"AM"},_a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1===g(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")}}),l.lang=t("moment.lang is deprecated. Use moment.locale instead.",_a),l.langData=t("moment.langData is deprecated. Use moment.localeData instead.",oa);var ht=Math.abs;function Lt(e,a,t,s){var n=Ca(a,t);return e._milliseconds+=s*n._milliseconds,e._days+=s*n._days,e._months+=s*n._months,e._bubble()}function ct(e){return e<0?Math.floor(e):Math.ceil(e)}function Yt(e){return 4800*e/146097}function yt(e){return 146097*e/4800}function ft(e){return function(){return this.as(e)}}var kt=ft("ms"),pt=ft("s"),Dt=ft("m"),Tt=ft("h"),gt=ft("d"),wt=ft("w"),vt=ft("M"),St=ft("y");function Ht(e){return function(){return this.isValid()?this._data[e]:NaN}}var bt=Ht("milliseconds"),jt=Ht("seconds"),xt=Ht("minutes"),Pt=Ht("hours"),Ot=Ht("days"),Wt=Ht("months"),Et=Ht("years");var At=Math.round,Ft={ss:44,s:45,m:45,h:22,d:26,M:11};var zt=Math.abs;function Jt(e){return(0<e)-(e<0)||+e}function Nt(){if(!this.isValid())return this.localeData().invalidDate();var e,a,t=zt(this._milliseconds)/1e3,s=zt(this._days),n=zt(this._months);a=T((e=T(t/60))/60),t%=60,e%=60;var d=T(n/12),r=n%=12,_=s,i=a,o=e,m=t?t.toFixed(3).replace(/\.?0+$/,""):"",u=this.asSeconds();if(!u)return"P0D";var l=u<0?"-":"",M=Jt(this._months)!==Jt(u)?"-":"",h=Jt(this._days)!==Jt(u)?"-":"",L=Jt(this._milliseconds)!==Jt(u)?"-":"";return l+"P"+(d?M+d+"Y":"")+(r?M+r+"M":"")+(_?h+_+"D":"")+(i||o||m?"T":"")+(i?L+i+"H":"")+(o?L+o+"M":"")+(m?L+m+"S":"")}var Rt=Pa.prototype;Rt.isValid=function(){return this._isValid},Rt.abs=function(){var e=this._data;return this._milliseconds=ht(this._milliseconds),this._days=ht(this._days),this._months=ht(this._months),e.milliseconds=ht(e.milliseconds),e.seconds=ht(e.seconds),e.minutes=ht(e.minutes),e.hours=ht(e.hours),e.months=ht(e.months),e.years=ht(e.years),this},Rt.add=function(e,a){return Lt(this,e,a,1)},Rt.subtract=function(e,a){return Lt(this,e,a,-1)},Rt.as=function(e){if(!this.isValid())return NaN;var a,t,s=this._milliseconds;if("month"===(e=O(e))||"year"===e)return a=this._days+s/864e5,t=this._months+Yt(a),"month"===e?t:t/12;switch(a=this._days+Math.round(yt(this._months)),e){case"week":return a/7+s/6048e5;case"day":return a+s/864e5;case"hour":return 24*a+s/36e5;case"minute":return 1440*a+s/6e4;case"second":return 86400*a+s/1e3;case"millisecond":return Math.floor(864e5*a)+s;default:throw new Error("Unknown unit "+e)}},Rt.asMilliseconds=kt,Rt.asSeconds=pt,Rt.asMinutes=Dt,Rt.asHours=Tt,Rt.asDays=gt,Rt.asWeeks=wt,Rt.asMonths=vt,Rt.asYears=St,Rt.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*g(this._months/12):NaN},Rt._bubble=function(){var e,a,t,s,n,d=this._milliseconds,r=this._days,_=this._months,i=this._data;return 0<=d&&0<=r&&0<=_||d<=0&&r<=0&&_<=0||(d+=864e5*ct(yt(_)+r),_=r=0),i.milliseconds=d%1e3,e=T(d/1e3),i.seconds=e%60,a=T(e/60),i.minutes=a%60,t=T(a/60),i.hours=t%24,_+=n=T(Yt(r+=T(t/24))),r-=ct(yt(n)),s=T(_/12),_%=12,i.days=r,i.months=_,i.years=s,this},Rt.clone=function(){return Ca(this)},Rt.get=function(e){return e=O(e),this.isValid()?this[e+"s"]():NaN},Rt.milliseconds=bt,Rt.seconds=jt,Rt.minutes=xt,Rt.hours=Pt,Rt.days=Ot,Rt.weeks=function(){return T(this.days()/7)},Rt.months=Wt,Rt.years=Et,Rt.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var a,t,s,n,d,r,_,i,o,m,u,l=this.localeData(),M=(t=!e,s=l,n=Ca(a=this).abs(),d=At(n.as("s")),r=At(n.as("m")),_=At(n.as("h")),i=At(n.as("d")),o=At(n.as("M")),m=At(n.as("y")),(u=d<=Ft.ss&&["s",d]||d<Ft.s&&["ss",d]||r<=1&&["m"]||r<Ft.m&&["mm",r]||_<=1&&["h"]||_<Ft.h&&["hh",_]||i<=1&&["d"]||i<Ft.d&&["dd",i]||o<=1&&["M"]||o<Ft.M&&["MM",o]||m<=1&&["y"]||["yy",m])[2]=t,u[3]=0<+a,u[4]=s,function(e,a,t,s,n){return n.relativeTime(a||1,!!t,e,s)}.apply(null,u));return e&&(M=l.pastFuture(+this,M)),l.postformat(M)},Rt.toISOString=Nt,Rt.toString=Nt,Rt.toJSON=Nt,Rt.locale=qa,Rt.localeData=Xa,Rt.toIsoString=t("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Nt),Rt.lang=Qa,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ie("x",se),ie("X",/[+-]?\d+(\.\d{1,3})?/),le("X",function(e,a,t){t._d=new Date(1e3*parseFloat(e,10))}),le("x",function(e,a,t){t._d=new Date(g(e))}),l.version="2.22.0",e=Sa,l.fn=it,l.min=function(){return ja("isBefore",[].slice.call(arguments,0))},l.max=function(){return ja("isAfter",[].slice.call(arguments,0))},l.now=function(){return Date.now?Date.now():+new Date},l.utc=c,l.unix=function(e){return Sa(1e3*e)},l.months=function(e,a){return lt(e,a,"months")},l.isDate=u,l.locale=_a,l.invalid=f,l.duration=Ca,l.isMoment=D,l.weekdays=function(e,a,t){return Mt(e,a,t,"weekdays")},l.parseZone=function(){return Sa.apply(null,arguments).parseZone()},l.localeData=oa,l.isDuration=Oa,l.monthsShort=function(e,a){return lt(e,a,"monthsShort")},l.weekdaysMin=function(e,a,t){return Mt(e,a,t,"weekdaysMin")},l.defineLocale=ia,l.updateLocale=function(e,a){if(null!=a){var t,s,n=ta;null!=(s=ra(e))&&(n=s._config),(t=new j(a=b(n,a))).parentLocale=sa[e],sa[e]=t,_a(e)}else null!=sa[e]&&(null!=sa[e].parentLocale?sa[e]=sa[e].parentLocale:null!=sa[e]&&delete sa[e]);return sa[e]},l.locales=function(){return s(sa)},l.weekdaysShort=function(e,a,t){return Mt(e,a,t,"weekdaysShort")},l.normalizeUnits=O,l.relativeTimeRounding=function(e){return void 0===e?At:"function"==typeof e&&(At=e,!0)},l.relativeTimeThreshold=function(e,a){return void 0!==Ft[e]&&(void 0===a?Ft[e]:(Ft[e]=a,"s"===e&&(Ft.ss=a-1),!0))},l.calendarFormat=function(e,a){var t=e.diff(a,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"},l.prototype=it,l.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},l.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"vm":"VM":t?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[M\xf4re om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}}),l.defineLocale("ar-dz",{months:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:0,doy:4}}),l.defineLocale("ar-kw",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:0,doy:12}});var It={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},Ct=function(e){return 0===e?0:1===e?1:2===e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5},Gt={s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]},Ut=function(r){return function(e,a,t,s){var n=Ct(e),d=Gt[r][Ct(e)];return 2===n&&(d=d[a?0:1]),d.replace(/%d/i,e)}},Vt=["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"];l.defineLocale("ar-ly",{months:Vt,monthsShort:Vt,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:Ut("s"),ss:Ut("s"),m:Ut("m"),mm:Ut("m"),h:Ut("h"),hh:Ut("h"),d:Ut("d"),dd:Ut("d"),M:Ut("M"),MM:Ut("M"),y:Ut("y"),yy:Ut("y")},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return It[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}}),l.defineLocale("ar-ma",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:6,doy:12}});var Kt={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"},Zt={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"};l.defineLocale("ar-sa",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return Zt[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Kt[e]}).replace(/,/g,"\u060c")},week:{dow:0,doy:6}}),l.defineLocale("ar-tn",{months:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:1,doy:4}});var $t={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"},Bt={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"},qt=function(e){return 0===e?0:1===e?1:2===e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5},Qt={s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]},Xt=function(r){return function(e,a,t,s){var n=qt(e),d=Qt[r][qt(e)];return 2===n&&(d=d[a?0:1]),d.replace(/%d/i,e)}},es=["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"];l.defineLocale("ar",{months:es,monthsShort:es,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:Xt("s"),ss:Xt("s"),m:Xt("m"),mm:Xt("m"),h:Xt("h"),hh:Xt("h"),d:Xt("d"),dd:Xt("d"),M:Xt("M"),MM:Xt("M"),y:Xt("y"),yy:Xt("y")},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return Bt[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return $t[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}});var as={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-\xfcnc\xfc",4:"-\xfcnc\xfc",100:"-\xfcnc\xfc",6:"-nc\u0131",9:"-uncu",10:"-uncu",30:"-uncu",60:"-\u0131nc\u0131",90:"-\u0131nc\u0131"};function ts(e,a,t){var s,n;return"m"===t?a?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443":"h"===t?a?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430":"\u0433\u0430\u0434\u0437\u0456\u043d\u0443":e+" "+(s=+e,n={ss:a?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",mm:a?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",hh:a?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d":"\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",dd:"\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",yy:"\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"}[t].split("_"),s%10==1&&s%100!=11?n[0]:2<=s%10&&s%10<=4&&(s%100<10||20<=s%100)?n[1]:n[2])}l.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),weekdaysShort:"Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),weekdaysMin:"Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",lastDay:"[d\xfcn\u0259n] LT",lastWeek:"[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \u0259vv\u0259l",s:"birne\xe7\u0259 saniyy\u0259",ss:"%d saniy\u0259",m:"bir d\u0259qiq\u0259",mm:"%d d\u0259qiq\u0259",h:"bir saat",hh:"%d saat",d:"bir g\xfcn",dd:"%d g\xfcn",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,isPM:function(e){return/^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)},meridiem:function(e,a,t){return e<4?"gec\u0259":e<12?"s\u0259h\u0259r":e<17?"g\xfcnd\xfcz":"ax\u015fam"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,ordinal:function(e){if(0===e)return e+"-\u0131nc\u0131";var a=e%10;return e+(as[a]||as[e%100-a]||as[100<=e?100:null])},week:{dow:1,doy:7}}),l.defineLocale("be",{months:{format:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"),standalone:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_")},monthsShort:"\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),weekdays:{format:"\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),standalone:"\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),isFormat:/\[ ?[\u0412\u0432] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/},weekdaysShort:"\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., HH:mm",LLLL:"dddd, D MMMM YYYY \u0433., HH:mm"},calendar:{sameDay:"[\u0421\u0451\u043d\u043d\u044f \u045e] LT",nextDay:"[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",lastDay:"[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",nextWeek:function(){return"[\u0423] dddd [\u045e] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";case 1:case 2:case 4:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"}},sameElse:"L"},relativeTime:{future:"\u043f\u0440\u0430\u0437 %s",past:"%s \u0442\u0430\u043c\u0443",s:"\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",m:ts,mm:ts,h:ts,hh:ts,d:"\u0434\u0437\u0435\u043d\u044c",dd:ts,M:"\u043c\u0435\u0441\u044f\u0446",MM:ts,y:"\u0433\u043e\u0434",yy:ts},meridiemParse:/\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u044b":e<12?"\u0440\u0430\u043d\u0456\u0446\u044b":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0430\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-\u044b":e+"-\u0456";case"D":return e+"-\u0433\u0430";default:return e}},week:{dow:1,doy:7}}),l.defineLocale("bg",{months:"\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),monthsShort:"\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),weekdays:"\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[\u0414\u043d\u0435\u0441 \u0432] LT",nextDay:"[\u0423\u0442\u0440\u0435 \u0432] LT",nextWeek:"dddd [\u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";case 1:case 2:case 4:case 5:return"[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0441\u043b\u0435\u0434 %s",past:"\u043f\u0440\u0435\u0434\u0438 %s",s:"\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",m:"\u043c\u0438\u043d\u0443\u0442\u0430",mm:"%d \u043c\u0438\u043d\u0443\u0442\u0438",h:"\u0447\u0430\u0441",hh:"%d \u0447\u0430\u0441\u0430",d:"\u0434\u0435\u043d",dd:"%d \u0434\u043d\u0438",M:"\u043c\u0435\u0441\u0435\u0446",MM:"%d \u043c\u0435\u0441\u0435\u0446\u0430",y:"\u0433\u043e\u0434\u0438\u043d\u0430",yy:"%d \u0433\u043e\u0434\u0438\u043d\u0438"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-\u0435\u0432":0===t?e+"-\u0435\u043d":10<t&&t<20?e+"-\u0442\u0438":1===a?e+"-\u0432\u0438":2===a?e+"-\u0440\u0438":7===a||8===a?e+"-\u043c\u0438":e+"-\u0442\u0438"},week:{dow:1,doy:7}}),l.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"),weekdays:"Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm"},calendar:{sameDay:"[Bi l\u025br\u025b] LT",nextDay:"[Sini l\u025br\u025b] LT",nextWeek:"dddd [don l\u025br\u025b] LT",lastDay:"[Kunu l\u025br\u025b] LT",lastWeek:"dddd [t\u025bm\u025bnen l\u025br\u025b] LT",sameElse:"L"},relativeTime:{future:"%s k\u0254n\u0254",past:"a b\u025b %s b\u0254",s:"sanga dama dama",ss:"sekondi %d",m:"miniti kelen",mm:"miniti %d",h:"l\u025br\u025b kelen",hh:"l\u025br\u025b %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,doy:4}});var ss={1:"\u09e7",2:"\u09e8",3:"\u09e9",4:"\u09ea",5:"\u09eb",6:"\u09ec",7:"\u09ed",8:"\u09ee",9:"\u09ef",0:"\u09e6"},ns={"\u09e7":"1","\u09e8":"2","\u09e9":"3","\u09ea":"4","\u09eb":"5","\u09ec":"6","\u09ed":"7","\u09ee":"8","\u09ef":"9","\u09e6":"0"};l.defineLocale("bn",{months:"\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),monthsShort:"\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),weekdays:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),weekdaysShort:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),weekdaysMin:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),longDateFormat:{LT:"A h:mm \u09b8\u09ae\u09df",LTS:"A h:mm:ss \u09b8\u09ae\u09df",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",LLLL:"dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"},calendar:{sameDay:"[\u0986\u099c] LT",nextDay:"[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",nextWeek:"dddd, LT",lastDay:"[\u0997\u09a4\u0995\u09be\u09b2] LT",lastWeek:"[\u0997\u09a4] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u09aa\u09b0\u09c7",past:"%s \u0986\u0997\u09c7",s:"\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",ss:"%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",m:"\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",mm:"%d \u09ae\u09bf\u09a8\u09bf\u099f",h:"\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",hh:"%d \u0998\u09a8\u09cd\u099f\u09be",d:"\u098f\u0995 \u09a6\u09bf\u09a8",dd:"%d \u09a6\u09bf\u09a8",M:"\u098f\u0995 \u09ae\u09be\u09b8",MM:"%d \u09ae\u09be\u09b8",y:"\u098f\u0995 \u09ac\u099b\u09b0",yy:"%d \u09ac\u099b\u09b0"},preparse:function(e){return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g,function(e){return ns[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return ss[e]})},meridiemParse:/\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u09b0\u09be\u09a4"===a&&4<=e||"\u09a6\u09c1\u09aa\u09c1\u09b0"===a&&e<5||"\u09ac\u09bf\u0995\u09be\u09b2"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u09b0\u09be\u09a4":e<10?"\u09b8\u0995\u09be\u09b2":e<17?"\u09a6\u09c1\u09aa\u09c1\u09b0":e<20?"\u09ac\u09bf\u0995\u09be\u09b2":"\u09b0\u09be\u09a4"},week:{dow:0,doy:6}});var ds={1:"\u0f21",2:"\u0f22",3:"\u0f23",4:"\u0f24",5:"\u0f25",6:"\u0f26",7:"\u0f27",8:"\u0f28",9:"\u0f29",0:"\u0f20"},rs={"\u0f21":"1","\u0f22":"2","\u0f23":"3","\u0f24":"4","\u0f25":"5","\u0f26":"6","\u0f27":"7","\u0f28":"8","\u0f29":"9","\u0f20":"0"};function _s(e,a,t){return e+" "+function(e,a){if(2===a)return function(e){var a={m:"v",b:"v",d:"z"};if(void 0===a[e.charAt(0)])return e;return a[e.charAt(0)]+e.substring(1)}(e);return e}({mm:"munutenn",MM:"miz",dd:"devezh"}[t],e)}function is(e,a,t){var s=e+" ";switch(t){case"ss":return s+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}l.defineLocale("bo",{months:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),monthsShort:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),weekdays:"\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),weekdaysShort:"\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),weekdaysMin:"\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",nextDay:"[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",nextWeek:"[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",lastDay:"[\u0f41\u0f0b\u0f66\u0f44] LT",lastWeek:"[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0f63\u0f0b",past:"%s \u0f66\u0f94\u0f53\u0f0b\u0f63",s:"\u0f63\u0f58\u0f0b\u0f66\u0f44",ss:"%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d",m:"\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",mm:"%d \u0f66\u0f90\u0f62\u0f0b\u0f58",h:"\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",hh:"%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",d:"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",dd:"%d \u0f49\u0f72\u0f53\u0f0b",M:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",MM:"%d \u0f5f\u0fb3\u0f0b\u0f56",y:"\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",yy:"%d \u0f63\u0f7c"},preparse:function(e){return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g,function(e){return rs[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return ds[e]})},meridiemParse:/\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"===a&&4<=e||"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44"===a&&e<5||"\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c":e<10?"\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66":e<17?"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44":e<20?"\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42":"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"},week:{dow:0,doy:6}}),l.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondenno\xf9",ss:"%d eilenn",m:"ur vunutenn",mm:_s,h:"un eur",hh:"%d eur",d:"un devezh",dd:_s,M:"ur miz",MM:_s,y:"ur bloaz",yy:function(e){switch(function e(a){return 9<a?e(a%10):a}(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},dayOfMonthOrdinalParse:/\d{1,2}(a\xf1|vet)/,ordinal:function(e){return e+(1===e?"a\xf1":"vet")},week:{dow:1,doy:4}}),l.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro\u0161lu] dddd [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:is,m:is,mm:is,h:is,hh:is,d:"dan",dd:is,M:"mjesec",MM:is,y:"godinu",yy:is},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),l.defineLocale("ca",{months:{standalone:"gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[dem\xe0 a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aqu\xed %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|\xe8|a)/,ordinal:function(e,a){var t=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"\xe8";return"w"!==a&&"W"!==a||(t="a"),e+t},week:{dow:1,doy:4}});var os="leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),ms="led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");function us(e){return 1<e&&e<5&&1!=~~(e/10)}function ls(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"p\xe1r sekund":"p\xe1r sekundami";case"ss":return a||s?n+(us(e)?"sekundy":"sekund"):n+"sekundami";break;case"m":return a?"minuta":s?"minutu":"minutou";case"mm":return a||s?n+(us(e)?"minuty":"minut"):n+"minutami";break;case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(us(e)?"hodiny":"hodin"):n+"hodinami";break;case"d":return a||s?"den":"dnem";case"dd":return a||s?n+(us(e)?"dny":"dn\xed"):n+"dny";break;case"M":return a||s?"m\u011bs\xedc":"m\u011bs\xedcem";case"MM":return a||s?n+(us(e)?"m\u011bs\xedce":"m\u011bs\xedc\u016f"):n+"m\u011bs\xedci";break;case"y":return a||s?"rok":"rokem";case"yy":return a||s?n+(us(e)?"roky":"let"):n+"lety";break}}function Ms(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function hs(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function Ls(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}l.defineLocale("cs",{months:os,monthsShort:ms,monthsParse:function(e,a){var t,s=[];for(t=0;t<12;t++)s[t]=new RegExp("^"+e[t]+"$|^"+a[t]+"$","i");return s}(os,ms),shortMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(ms),longMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(os),weekdays:"ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),weekdaysShort:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),weekdaysMin:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xedtra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned\u011bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\xe1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\xe9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xfd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:ls,ss:ls,m:ls,mm:ls,h:ls,hh:ls,d:ls,dd:ls,M:ls,MM:ls,y:ls,yy:ls},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("cv",{months:"\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),monthsShort:"\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),weekdays:"\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),weekdaysShort:"\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"),weekdaysMin:"\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",LLL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",LLLL:"dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm"},calendar:{sameDay:"[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextDay:"[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastDay:"[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextWeek:"[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastWeek:"[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",sameElse:"L"},relativeTime:{future:function(e){return e+(/\u0441\u0435\u0445\u0435\u0442$/i.exec(e)?"\u0440\u0435\u043d":/\u04ab\u0443\u043b$/i.exec(e)?"\u0442\u0430\u043d":"\u0440\u0430\u043d")},past:"%s \u043a\u0430\u044f\u043b\u043b\u0430",s:"\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",ss:"%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",m:"\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",mm:"%d \u043c\u0438\u043d\u0443\u0442",h:"\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",hh:"%d \u0441\u0435\u0445\u0435\u0442",d:"\u043f\u04d7\u0440 \u043a\u0443\u043d",dd:"%d \u043a\u0443\u043d",M:"\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",MM:"%d \u0443\u0439\u04d1\u0445",y:"\u043f\u04d7\u0440 \u04ab\u0443\u043b",yy:"%d \u04ab\u0443\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-\u043c\u04d7\u0448/,ordinal:"%d-\u043c\u04d7\u0448",week:{dow:1,doy:7}}),l.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn \xf4l",s:"ychydig eiliadau",ss:"%d eiliad",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var a="";return 20<e?a=40===e||50===e||60===e||80===e||100===e?"fed":"ain":0<e&&(a=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"][e]),e+a},week:{dow:1,doy:4}}),l.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),weekdaysShort:"s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),weekdaysMin:"s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"p\xe5 dddd [kl.] LT",lastDay:"[i g\xe5r kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"f\xe5 sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"et \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("de-at",{months:"J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:Ms,mm:"%d Minuten",h:Ms,hh:"%d Stunden",d:Ms,dd:Ms,M:Ms,MM:Ms,y:Ms,yy:Ms},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("de-ch",{months:"Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:hs,mm:"%d Minuten",h:hs,hh:"%d Stunden",d:hs,dd:hs,M:hs,MM:hs,y:hs,yy:hs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("de",{months:"Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:Ls,mm:"%d Minuten",h:Ls,hh:"%d Stunden",d:Ls,dd:Ls,M:Ls,MM:Ls,y:Ls,yy:Ls},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var cs=["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9","\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9","\u0789\u07a7\u0783\u07a8\u0797\u07aa","\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa","\u0789\u07ad","\u0796\u07ab\u0782\u07b0","\u0796\u07aa\u078d\u07a6\u0787\u07a8","\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa","\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa","\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa","\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa","\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],Ys=["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6","\u0780\u07af\u0789\u07a6","\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6","\u0784\u07aa\u078b\u07a6","\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8","\u0780\u07aa\u0786\u07aa\u0783\u07aa","\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];l.defineLocale("dv",{months:cs,monthsShort:cs,weekdays:Ys,weekdaysShort:Ys,weekdaysMin:"\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0789\u0786|\u0789\u078a/,isPM:function(e){return"\u0789\u078a"===e},meridiem:function(e,a,t){return e<12?"\u0789\u0786":"\u0789\u078a"},calendar:{sameDay:"[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT",nextDay:"[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT",nextWeek:"dddd LT",lastDay:"[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT",lastWeek:"[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT",sameElse:"L"},relativeTime:{future:"\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s",past:"\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s",s:"\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0",ss:"d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa",m:"\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0",mm:"\u0789\u07a8\u0782\u07a8\u0793\u07aa %d",h:"\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0",hh:"\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d",d:"\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0",dd:"\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d",M:"\u0789\u07a6\u0780\u07ac\u0787\u07b0",MM:"\u0789\u07a6\u0790\u07b0 %d",y:"\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0",yy:"\u0787\u07a6\u0780\u07a6\u0783\u07aa %d"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:7,doy:12}}),l.defineLocale("el",{monthsNominativeEl:"\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),monthsGenitiveEl:"\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"),months:function(e,a){return e?"string"==typeof a&&/D/.test(a.substring(0,a.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl},monthsShort:"\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),weekdays:"\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),weekdaysShort:"\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),weekdaysMin:"\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),meridiem:function(e,a,t){return 11<e?t?"\u03bc\u03bc":"\u039c\u039c":t?"\u03c0\u03bc":"\u03a0\u039c"},isPM:function(e){return"\u03bc"===(e+"").toLowerCase()[0]},meridiemParse:/[\u03a0\u039c]\.?\u039c?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",nextDay:"[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[\u03a7\u03b8\u03b5\u03c2 {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";default:return"[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,a){var t=this._calendarEl[e],s=a&&a.hours();return H(t)&&(t=t.apply(a)),t.replace("{}",s%12==1?"\u03c3\u03c4\u03b7":"\u03c3\u03c4\u03b9\u03c2")},relativeTime:{future:"\u03c3\u03b5 %s",past:"%s \u03c0\u03c1\u03b9\u03bd",s:"\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",ss:"%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",m:"\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",mm:"%d \u03bb\u03b5\u03c0\u03c4\u03ac",h:"\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",hh:"%d \u03ce\u03c1\u03b5\u03c2",d:"\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",dd:"%d \u03bc\u03ad\u03c1\u03b5\u03c2",M:"\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",MM:"%d \u03bc\u03ae\u03bd\u03b5\u03c2",y:"\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",yy:"%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"},dayOfMonthOrdinalParse:/\d{1,2}\u03b7/,ordinal:"%d\u03b7",week:{dow:1,doy:4}}),l.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),l.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")}}),l.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),l.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),l.defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")}}),l.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),l.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"),weekdays:"diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_\u0135a_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,a,t){return 11<e?t?"p.t.m.":"P.T.M.":t?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodia\u016d je] LT",nextDay:"[Morga\u016d je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hiera\u016d je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"anta\u016d %s",s:"sekundoj",ss:"%d sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}});var ys="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),fs="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),ks=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],ps=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;l.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?fs[e.month()]:ys[e.month()]:ys},monthsRegex:ps,monthsShortRegex:ps,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:ks,longMonthsParse:ks,shortMonthsParse:ks,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}});var Ds="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),Ts="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");l.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Ts[e.month()]:Ds[e.month()]:Ds},monthsParseExact:!0,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM [de] D [de] YYYY",LLL:"MMMM [de] D [de] YYYY h:mm A",LLLL:"dddd, MMMM [de] D [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:0,doy:6}});var gs="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),ws="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),vs=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],Ss=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;function Hs(e,a,t,s){var n={s:["m\xf5ne sekundi","m\xf5ni sekund","paar sekundit"],ss:[e+"sekundi",e+"sekundit"],m:["\xfche minuti","\xfcks minut"],mm:[e+" minuti",e+" minutit"],h:["\xfche tunni","tund aega","\xfcks tund"],hh:[e+" tunni",e+" tundi"],d:["\xfche p\xe4eva","\xfcks p\xe4ev"],M:["kuu aja","kuu aega","\xfcks kuu"],MM:[e+" kuu",e+" kuud"],y:["\xfche aasta","aasta","\xfcks aasta"],yy:[e+" aasta",e+" aastat"]};return a?n[t][2]?n[t][2]:n[t][1]:s?n[t][0]:n[t][1]}l.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?ws[e.month()]:gs[e.month()]:gs},monthsRegex:Ss,monthsShortRegex:Ss,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:vs,longMonthsParse:vs,shortMonthsParse:vs,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),l.defineLocale("et",{months:"jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[T\xe4na,] LT",nextDay:"[Homme,] LT",nextWeek:"[J\xe4rgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s p\xe4rast",past:"%s tagasi",s:Hs,ss:Hs,m:Hs,mm:Hs,h:Hs,hh:Hs,d:Hs,dd:"%d p\xe4eva",M:Hs,MM:Hs,y:Hs,yy:Hs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var bs={1:"\u06f1",2:"\u06f2",3:"\u06f3",4:"\u06f4",5:"\u06f5",6:"\u06f6",7:"\u06f7",8:"\u06f8",9:"\u06f9",0:"\u06f0"},js={"\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u06f0":"0"};l.defineLocale("fa",{months:"\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),monthsShort:"\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),weekdays:"\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),weekdaysShort:"\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),weekdaysMin:"\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,isPM:function(e){return/\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)},meridiem:function(e,a,t){return e<12?"\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631":"\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"},calendar:{sameDay:"[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",nextDay:"[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",nextWeek:"dddd [\u0633\u0627\u0639\u062a] LT",lastDay:"[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",lastWeek:"dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",sameElse:"L"},relativeTime:{future:"\u062f\u0631 %s",past:"%s \u067e\u06cc\u0634",s:"\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647",ss:"\u062b\u0627\u0646\u06cc\u0647 d%",m:"\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",mm:"%d \u062f\u0642\u06cc\u0642\u0647",h:"\u06cc\u06a9 \u0633\u0627\u0639\u062a",hh:"%d \u0633\u0627\u0639\u062a",d:"\u06cc\u06a9 \u0631\u0648\u0632",dd:"%d \u0631\u0648\u0632",M:"\u06cc\u06a9 \u0645\u0627\u0647",MM:"%d \u0645\u0627\u0647",y:"\u06cc\u06a9 \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/[\u06f0-\u06f9]/g,function(e){return js[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return bs[e]}).replace(/,/g,"\u060c")},dayOfMonthOrdinalParse:/\d{1,2}\u0645/,ordinal:"%d\u0645",week:{dow:6,doy:12}});var xs="nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),Ps=["nolla","yhden","kahden","kolmen","nelj\xe4n","viiden","kuuden",xs[7],xs[8],xs[9]];function Os(e,a,t,s){var n,d,r="";switch(t){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"ss":return s?"sekunnin":"sekuntia";case"m":return s?"minuutin":"minuutti";case"mm":r=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":r=s?"tunnin":"tuntia";break;case"d":return s?"p\xe4iv\xe4n":"p\xe4iv\xe4";case"dd":r=s?"p\xe4iv\xe4n":"p\xe4iv\xe4\xe4";break;case"M":return s?"kuukauden":"kuukausi";case"MM":r=s?"kuukauden":"kuukautta";break;case"y":return s?"vuoden":"vuosi";case"yy":r=s?"vuoden":"vuotta";break}return d=s,r=((n=e)<10?d?Ps[n]:xs[n]:n)+" "+r}l.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[t\xe4n\xe4\xe4n] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s p\xe4\xe4st\xe4",past:"%s sitten",s:Os,ss:Os,m:Os,mm:Os,h:Os,hh:Os,d:Os,dd:Os,M:Os,MM:Os,y:Os,yy:Os},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("fo",{months:"januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),weekdaysShort:"sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),weekdaysMin:"su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[\xcd dag kl.] LT",nextDay:"[\xcd morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xcd gj\xe1r kl.] LT",lastWeek:"[s\xed\xf0stu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s s\xed\xf0ani",s:"f\xe1 sekund",ss:"%d sekundir",m:"ein minutt",mm:"%d minuttir",h:"ein t\xedmi",hh:"%d t\xedmar",d:"ein dagur",dd:"%d dagar",M:"ein m\xe1na\xf0i",MM:"%d m\xe1na\xf0ir",y:"eitt \xe1r",yy:"%d \xe1r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("fr-ca",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}}}),l.defineLocale("fr-ch",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}}),l.defineLocale("fr",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,a){switch(a){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}});var Ws="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),Es="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");l.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Es[e.month()]:Ws[e.month()]:Ws},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[\xf4fr\xfbne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",ss:"%d sekonden",m:"ien min\xfat",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}});function As(e,a,t,s){var n={s:["thodde secondanim","thodde second"],ss:[e+" secondanim",e+" second"],m:["eka mintan","ek minute"],mm:[e+" mintanim",e+" mintam"],h:["eka horan","ek hor"],hh:[e+" horanim",e+" horam"],d:["eka disan","ek dis"],dd:[e+" disanim",e+" dis"],M:["eka mhoinean","ek mhoino"],MM:[e+" mhoineanim",e+" mhoine"],y:["eka vorsan","ek voros"],yy:[e+" vorsanim",e+" vorsam"]};return a?n[t][0]:n[t][1]}l.defineLocale("gd",{months:["Am Faoilleach","An Gearran","Am M\xe0rt","An Giblean","An C\xe8itean","An t-\xd2gmhios","An t-Iuchar","An L\xf9nastal","An t-Sultain","An D\xe0mhair","An t-Samhain","An D\xf9bhlachd"],monthsShort:["Faoi","Gear","M\xe0rt","Gibl","C\xe8it","\xd2gmh","Iuch","L\xf9n","Sult","D\xe0mh","Samh","D\xf9bh"],monthsParseExact:!0,weekdays:["Did\xf2mhnaich","Diluain","Dim\xe0irt","Diciadain","Diardaoin","Dihaoine","Disathairne"],weekdaysShort:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],weekdaysMin:["D\xf2","Lu","M\xe0","Ci","Ar","Ha","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-m\xe0ireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-d\xe8 aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",ss:"%d diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"m\xecos",MM:"%d m\xecosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}}),l.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextDay:function(){return"[ma\xf1\xe1 "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"\xe1s":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"\xe1":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"\xe1s":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),l.defineLocale("gom-latn",{months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:As,ss:As,m:As,mm:As,h:As,hh:As,d:As,dd:As,M:As,MM:As,y:As,yy:As},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(e,a){switch(a){case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:1,doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function(e,a){return 12===e&&(e=0),"rati"===a?e<4?e:e+12:"sokalli"===a?e:"donparam"===a?12<e?e:e+12:"sanje"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"rati":e<12?"sokalli":e<16?"donparam":e<20?"sanje":"rati"}});var Fs={1:"\u0ae7",2:"\u0ae8",3:"\u0ae9",4:"\u0aea",5:"\u0aeb",6:"\u0aec",7:"\u0aed",8:"\u0aee",9:"\u0aef",0:"\u0ae6"},zs={"\u0ae7":"1","\u0ae8":"2","\u0ae9":"3","\u0aea":"4","\u0aeb":"5","\u0aec":"6","\u0aed":"7","\u0aee":"8","\u0aef":"9","\u0ae6":"0"};l.defineLocale("gu",{months:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"),monthsShort:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"),monthsParseExact:!0,weekdays:"\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"),weekdaysShort:"\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"),weekdaysMin:"\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"),longDateFormat:{LT:"A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",LTS:"A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",LLLL:"dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7"},calendar:{sameDay:"[\u0a86\u0a9c] LT",nextDay:"[\u0a95\u0abe\u0ab2\u0ac7] LT",nextWeek:"dddd, LT",lastDay:"[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT",lastWeek:"[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0aae\u0abe",past:"%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe",s:"\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb",ss:"%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1",m:"\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f",mm:"%d \u0aae\u0abf\u0aa8\u0abf\u0a9f",h:"\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95",hh:"%d \u0a95\u0ab2\u0abe\u0a95",d:"\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8",dd:"%d \u0aa6\u0abf\u0ab5\u0ab8",M:"\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb",MM:"%d \u0aae\u0ab9\u0abf\u0aa8\u0acb",y:"\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7",yy:"%d \u0ab5\u0ab0\u0acd\u0ab7"},preparse:function(e){return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g,function(e){return zs[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Fs[e]})},meridiemParse:/\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0ab0\u0abe\u0aa4"===a?e<4?e:e+12:"\u0ab8\u0ab5\u0abe\u0ab0"===a?e:"\u0aac\u0aaa\u0acb\u0ab0"===a?10<=e?e:e+12:"\u0ab8\u0abe\u0a82\u0a9c"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0ab0\u0abe\u0aa4":e<10?"\u0ab8\u0ab5\u0abe\u0ab0":e<17?"\u0aac\u0aaa\u0acb\u0ab0":e<20?"\u0ab8\u0abe\u0a82\u0a9c":"\u0ab0\u0abe\u0aa4"},week:{dow:0,doy:6}}),l.defineLocale("he",{months:"\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),monthsShort:"\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"),weekdays:"\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),weekdaysShort:"\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),weekdaysMin:"\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [\u05d1]MMMM YYYY",LLL:"D [\u05d1]MMMM YYYY HH:mm",LLLL:"dddd, D [\u05d1]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",nextDay:"[\u05de\u05d7\u05e8 \u05d1\u05be]LT",nextWeek:"dddd [\u05d1\u05e9\u05e2\u05d4] LT",lastDay:"[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",lastWeek:"[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",sameElse:"L"},relativeTime:{future:"\u05d1\u05e2\u05d5\u05d3 %s",past:"\u05dc\u05e4\u05e0\u05d9 %s",s:"\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",ss:"%d \u05e9\u05e0\u05d9\u05d5\u05ea",m:"\u05d3\u05e7\u05d4",mm:"%d \u05d3\u05e7\u05d5\u05ea",h:"\u05e9\u05e2\u05d4",hh:function(e){return 2===e?"\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd":e+" \u05e9\u05e2\u05d5\u05ea"},d:"\u05d9\u05d5\u05dd",dd:function(e){return 2===e?"\u05d9\u05d5\u05de\u05d9\u05d9\u05dd":e+" \u05d9\u05de\u05d9\u05dd"},M:"\u05d7\u05d5\u05d3\u05e9",MM:function(e){return 2===e?"\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd":e+" \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},y:"\u05e9\u05e0\u05d4",yy:function(e){return 2===e?"\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd":e%10==0&&10!==e?e+" \u05e9\u05e0\u05d4":e+" \u05e9\u05e0\u05d9\u05dd"}},meridiemParse:/\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,isPM:function(e){return/^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e)},meridiem:function(e,a,t){return e<5?"\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8":e<10?"\u05d1\u05d1\u05d5\u05e7\u05e8":e<12?t?'\u05dc\u05e4\u05e0\u05d4"\u05e6':"\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":e<18?t?'\u05d0\u05d7\u05d4"\u05e6':"\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":"\u05d1\u05e2\u05e8\u05d1"}});var Js={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},Ns={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};function Rs(e,a,t){var s=e+" ";switch(t){case"ss":return s+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}l.defineLocale("hi",{months:"\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),monthsShort:"\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),monthsParseExact:!0,weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u092c\u091c\u0947",LTS:"A h:mm:ss \u092c\u091c\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u092c\u091c\u0947",LLLL:"dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0915\u0932] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u0932] LT",lastWeek:"[\u092a\u093f\u091b\u0932\u0947] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u092e\u0947\u0902",past:"%s \u092a\u0939\u0932\u0947",s:"\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",ss:"%d \u0938\u0947\u0915\u0902\u0921",m:"\u090f\u0915 \u092e\u093f\u0928\u091f",mm:"%d \u092e\u093f\u0928\u091f",h:"\u090f\u0915 \u0918\u0902\u091f\u093e",hh:"%d \u0918\u0902\u091f\u0947",d:"\u090f\u0915 \u0926\u093f\u0928",dd:"%d \u0926\u093f\u0928",M:"\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",MM:"%d \u092e\u0939\u0940\u0928\u0947",y:"\u090f\u0915 \u0935\u0930\u094d\u0937",yy:"%d \u0935\u0930\u094d\u0937"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return Ns[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Js[e]})},meridiemParse:/\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924"===a?e<4?e:e+12:"\u0938\u0941\u092c\u0939"===a?e:"\u0926\u094b\u092a\u0939\u0930"===a?10<=e?e:e+12:"\u0936\u093e\u092e"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0930\u093e\u0924":e<10?"\u0938\u0941\u092c\u0939":e<17?"\u0926\u094b\u092a\u0939\u0930":e<20?"\u0936\u093e\u092e":"\u0930\u093e\u0924"},week:{dow:0,doy:6}}),l.defineLocale("hr",{months:{format:"sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro\u0161lu] dddd [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:Rs,m:Rs,mm:Rs,h:Rs,hh:Rs,d:"dan",dd:Rs,M:"mjesec",MM:Rs,y:"godinu",yy:Rs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var Is="vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");function Cs(e,a,t,s){var n=e;switch(t){case"s":return s||a?"n\xe9h\xe1ny m\xe1sodperc":"n\xe9h\xe1ny m\xe1sodperce";case"ss":return n+(s||a)?" m\xe1sodperc":" m\xe1sodperce";case"m":return"egy"+(s||a?" perc":" perce");case"mm":return n+(s||a?" perc":" perce");case"h":return"egy"+(s||a?" \xf3ra":" \xf3r\xe1ja");case"hh":return n+(s||a?" \xf3ra":" \xf3r\xe1ja");case"d":return"egy"+(s||a?" nap":" napja");case"dd":return n+(s||a?" nap":" napja");case"M":return"egy"+(s||a?" h\xf3nap":" h\xf3napja");case"MM":return n+(s||a?" h\xf3nap":" h\xf3napja");case"y":return"egy"+(s||a?" \xe9v":" \xe9ve");case"yy":return n+(s||a?" \xe9v":" \xe9ve")}return""}function Gs(e){return(e?"":"[m\xfalt] ")+"["+Is[this.day()]+"] LT[-kor]"}function Us(e){return e%100==11||e%10!=1}function Vs(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nokkrar sek\xfandur":"nokkrum sek\xfandum";case"ss":return Us(e)?n+(a||s?"sek\xfandur":"sek\xfandum"):n+"sek\xfanda";case"m":return a?"m\xedn\xfata":"m\xedn\xfatu";case"mm":return Us(e)?n+(a||s?"m\xedn\xfatur":"m\xedn\xfatum"):a?n+"m\xedn\xfata":n+"m\xedn\xfatu";case"hh":return Us(e)?n+(a||s?"klukkustundir":"klukkustundum"):n+"klukkustund";case"d":return a?"dagur":s?"dag":"degi";case"dd":return Us(e)?a?n+"dagar":n+(s?"daga":"d\xf6gum"):a?n+"dagur":n+(s?"dag":"degi");case"M":return a?"m\xe1nu\xf0ur":s?"m\xe1nu\xf0":"m\xe1nu\xf0i";case"MM":return Us(e)?a?n+"m\xe1nu\xf0ir":n+(s?"m\xe1nu\xf0i":"m\xe1nu\xf0um"):a?n+"m\xe1nu\xf0ur":n+(s?"m\xe1nu\xf0":"m\xe1nu\xf0i");case"y":return a||s?"\xe1r":"\xe1ri";case"yy":return Us(e)?n+(a||s?"\xe1r":"\xe1rum"):n+(a||s?"\xe1r":"\xe1ri")}}l.defineLocale("hu",{months:"janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),monthsShort:"jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),weekdays:"vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),weekdaysShort:"vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,a,t){return e<12?!0===t?"de":"DE":!0===t?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return Gs.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return Gs.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s m\xfalva",past:"%s",s:Cs,ss:Cs,m:Cs,mm:Cs,h:Cs,hh:Cs,d:Cs,dd:Cs,M:Cs,MM:Cs,y:Cs,yy:Cs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("hy-am",{months:{format:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"),standalone:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_")},monthsShort:"\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"),weekdays:"\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"),weekdaysShort:"\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),weekdaysMin:"\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0569.",LLL:"D MMMM YYYY \u0569., HH:mm",LLLL:"dddd, D MMMM YYYY \u0569., HH:mm"},calendar:{sameDay:"[\u0561\u0575\u057d\u0585\u0580] LT",nextDay:"[\u057e\u0561\u0572\u0568] LT",lastDay:"[\u0565\u0580\u0565\u056f] LT",nextWeek:function(){return"dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},lastWeek:function(){return"[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},sameElse:"L"},relativeTime:{future:"%s \u0570\u0565\u057f\u0578",past:"%s \u0561\u057c\u0561\u057b",s:"\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",ss:"%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",m:"\u0580\u0578\u057a\u0565",mm:"%d \u0580\u0578\u057a\u0565",h:"\u056a\u0561\u0574",hh:"%d \u056a\u0561\u0574",d:"\u0585\u0580",dd:"%d \u0585\u0580",M:"\u0561\u0574\u056b\u057d",MM:"%d \u0561\u0574\u056b\u057d",y:"\u057f\u0561\u0580\u056b",yy:"%d \u057f\u0561\u0580\u056b"},meridiemParse:/\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,isPM:function(e){return/^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)},meridiem:function(e){return e<4?"\u0563\u056b\u0577\u0565\u0580\u057e\u0561":e<12?"\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561":e<17?"\u0581\u0565\u0580\u0565\u056f\u057e\u0561":"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,ordinal:function(e,a){switch(a){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-\u056b\u0576":e+"-\u0580\u0564";default:return e}},week:{dow:1,doy:7}}),l.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"siang"===a?11<=e?e:e+12:"sore"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),l.defineLocale("is",{months:"jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),weekdays:"sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),weekdaysShort:"sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),weekdaysMin:"Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[\xed dag kl.] LT",nextDay:"[\xe1 morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xed g\xe6r kl.] LT",lastWeek:"[s\xed\xf0asta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s s\xed\xf0an",s:Vs,ss:Vs,m:Vs,mm:Vs,h:"klukkustund",hh:Vs,d:Vs,dd:Vs,M:Vs,MM:Vs,y:Vs,yy:Vs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),l.defineLocale("ja",{months:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),weekdaysShort:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),weekdaysMin:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm"},meridiemParse:/\u5348\u524d|\u5348\u5f8c/i,isPM:function(e){return"\u5348\u5f8c"===e},meridiem:function(e,a,t){return e<12?"\u5348\u524d":"\u5348\u5f8c"},calendar:{sameDay:"[\u4eca\u65e5] LT",nextDay:"[\u660e\u65e5] LT",nextWeek:function(e){return e.week()<this.week()?"[\u6765\u9031]dddd LT":"dddd LT"},lastDay:"[\u6628\u65e5] LT",lastWeek:function(e){return this.week()<e.week()?"[\u5148\u9031]dddd LT":"dddd LT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}\u65e5/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";default:return e}},relativeTime:{future:"%s\u5f8c",past:"%s\u524d",s:"\u6570\u79d2",ss:"%d\u79d2",m:"1\u5206",mm:"%d\u5206",h:"1\u6642\u9593",hh:"%d\u6642\u9593",d:"1\u65e5",dd:"%d\u65e5",M:"1\u30f6\u6708",MM:"%d\u30f6\u6708",y:"1\u5e74",yy:"%d\u5e74"}}),l.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,a){return 12===e&&(e=0),"enjing"===a?e:"siyang"===a?11<=e?e:e+12:"sonten"===a||"ndalu"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",ss:"%d detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}}),l.defineLocale("ka",{months:{standalone:"\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),format:"\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_")},monthsShort:"\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),weekdays:{standalone:"\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),format:"\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"),isFormat:/(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/},weekdaysShort:"\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),weekdaysMin:"\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",nextDay:"[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",lastDay:"[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",nextWeek:"[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",lastWeek:"[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",sameElse:"L"},relativeTime:{future:function(e){return/(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e)?e.replace(/\u10d8$/,"\u10e8\u10d8"):e+"\u10e8\u10d8"},past:function(e){return/(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e)?e.replace(/(\u10d8|\u10d4)$/,"\u10d8\u10e1 \u10ec\u10d8\u10dc"):/\u10ec\u10d4\u10da\u10d8/.test(e)?e.replace(/\u10ec\u10d4\u10da\u10d8$/,"\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc"):void 0},s:"\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",ss:"%d \u10ec\u10d0\u10db\u10d8",m:"\u10ec\u10e3\u10d7\u10d8",mm:"%d \u10ec\u10e3\u10d7\u10d8",h:"\u10e1\u10d0\u10d0\u10d7\u10d8",hh:"%d \u10e1\u10d0\u10d0\u10d7\u10d8",d:"\u10d3\u10e6\u10d4",dd:"%d \u10d3\u10e6\u10d4",M:"\u10d7\u10d5\u10d4",MM:"%d \u10d7\u10d5\u10d4",y:"\u10ec\u10d4\u10da\u10d8",yy:"%d \u10ec\u10d4\u10da\u10d8"},dayOfMonthOrdinalParse:/0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,ordinal:function(e){return 0===e?e:1===e?e+"-\u10da\u10d8":e<20||e<=100&&e%20==0||e%100==0?"\u10db\u10d4-"+e:e+"-\u10d4"},week:{dow:1,doy:7}});var Ks={0:"-\u0448\u0456",1:"-\u0448\u0456",2:"-\u0448\u0456",3:"-\u0448\u0456",4:"-\u0448\u0456",5:"-\u0448\u0456",6:"-\u0448\u044b",7:"-\u0448\u0456",8:"-\u0448\u0456",9:"-\u0448\u044b",10:"-\u0448\u044b",20:"-\u0448\u044b",30:"-\u0448\u044b",40:"-\u0448\u044b",50:"-\u0448\u0456",60:"-\u0448\u044b",70:"-\u0448\u0456",80:"-\u0448\u0456",90:"-\u0448\u044b",100:"-\u0448\u0456"};l.defineLocale("kk",{months:"\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"),monthsShort:"\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"),weekdays:"\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"),weekdaysShort:"\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"),weekdaysMin:"\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT",nextDay:"[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT",nextWeek:"dddd [\u0441\u0430\u0493\u0430\u0442] LT",lastDay:"[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",lastWeek:"[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",sameElse:"L"},relativeTime:{future:"%s \u0456\u0448\u0456\u043d\u0434\u0435",past:"%s \u0431\u04b1\u0440\u044b\u043d",s:"\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434",m:"\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",mm:"%d \u043c\u0438\u043d\u0443\u0442",h:"\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",hh:"%d \u0441\u0430\u0493\u0430\u0442",d:"\u0431\u0456\u0440 \u043a\u04af\u043d",dd:"%d \u043a\u04af\u043d",M:"\u0431\u0456\u0440 \u0430\u0439",MM:"%d \u0430\u0439",y:"\u0431\u0456\u0440 \u0436\u044b\u043b",yy:"%d \u0436\u044b\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0448\u0456|\u0448\u044b)/,ordinal:function(e){return e+(Ks[e]||Ks[e%10]||Ks[100<=e?100:null])},week:{dow:1,doy:7}});var Zs={1:"\u17e1",2:"\u17e2",3:"\u17e3",4:"\u17e4",5:"\u17e5",6:"\u17e6",7:"\u17e7",8:"\u17e8",9:"\u17e9",0:"\u17e0"},$s={"\u17e1":"1","\u17e2":"2","\u17e3":"3","\u17e4":"4","\u17e5":"5","\u17e6":"6","\u17e7":"7","\u17e8":"8","\u17e9":"9","\u17e0":"0"};l.defineLocale("km",{months:"\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),monthsShort:"\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),weekdays:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),weekdaysShort:"\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),weekdaysMin:"\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,isPM:function(e){return"\u179b\u17d2\u1784\u17b6\u1785"===e},meridiem:function(e,a,t){return e<12?"\u1796\u17d2\u179a\u17b9\u1780":"\u179b\u17d2\u1784\u17b6\u1785"},calendar:{sameDay:"[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",nextDay:"[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",nextWeek:"dddd [\u1798\u17c9\u17c4\u1784] LT",lastDay:"[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",lastWeek:"dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",sameElse:"L"},relativeTime:{future:"%s\u1791\u17c0\u178f",past:"%s\u1798\u17bb\u1793",s:"\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",ss:"%d \u179c\u17b7\u1793\u17b6\u1791\u17b8",m:"\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",mm:"%d \u1793\u17b6\u1791\u17b8",h:"\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",hh:"%d \u1798\u17c9\u17c4\u1784",d:"\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",dd:"%d \u1790\u17d2\u1784\u17c3",M:"\u1798\u17bd\u1799\u1781\u17c2",MM:"%d \u1781\u17c2",y:"\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",yy:"%d \u1786\u17d2\u1793\u17b6\u17c6"},dayOfMonthOrdinalParse:/\u1791\u17b8\d{1,2}/,ordinal:"\u1791\u17b8%d",preparse:function(e){return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g,function(e){return $s[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Zs[e]})},week:{dow:1,doy:4}});var Bs={1:"\u0ce7",2:"\u0ce8",3:"\u0ce9",4:"\u0cea",5:"\u0ceb",6:"\u0cec",7:"\u0ced",8:"\u0cee",9:"\u0cef",0:"\u0ce6"},qs={"\u0ce7":"1","\u0ce8":"2","\u0ce9":"3","\u0cea":"4","\u0ceb":"5","\u0cec":"6","\u0ced":"7","\u0cee":"8","\u0cef":"9","\u0ce6":"0"};l.defineLocale("kn",{months:"\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"),monthsShort:"\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"),monthsParseExact:!0,weekdays:"\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"),weekdaysShort:"\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"),weekdaysMin:"\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0c87\u0c82\u0ca6\u0cc1] LT",nextDay:"[\u0ca8\u0cbe\u0cb3\u0cc6] LT",nextWeek:"dddd, LT",lastDay:"[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT",lastWeek:"[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0ca8\u0c82\u0ca4\u0cb0",past:"%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6",s:"\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1",ss:"%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",m:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",mm:"%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",h:"\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6",hh:"%d \u0c97\u0c82\u0c9f\u0cc6",d:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8",dd:"%d \u0ca6\u0cbf\u0ca8",M:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",MM:"%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",y:"\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7",yy:"%d \u0cb5\u0cb0\u0ccd\u0cb7"},preparse:function(e){return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g,function(e){return qs[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Bs[e]})},meridiemParse:/\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"===a?e<4?e:e+12:"\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6"===a?e:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8"===a?10<=e?e:e+12:"\u0cb8\u0c82\u0c9c\u0cc6"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf":e<10?"\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6":e<17?"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8":e<20?"\u0cb8\u0c82\u0c9c\u0cc6":"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"},dayOfMonthOrdinalParse:/\d{1,2}(\u0ca8\u0cc6\u0cd5)/,ordinal:function(e){return e+"\u0ca8\u0cc6\u0cd5"},week:{dow:0,doy:6}}),l.defineLocale("ko",{months:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),monthsShort:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),weekdays:"\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),weekdaysShort:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),weekdaysMin:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\ub144 MMMM D\uc77c",LLL:"YYYY\ub144 MMMM D\uc77c A h:mm",LLLL:"YYYY\ub144 MMMM D\uc77c dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\ub144 MMMM D\uc77c",lll:"YYYY\ub144 MMMM D\uc77c A h:mm",llll:"YYYY\ub144 MMMM D\uc77c dddd A h:mm"},calendar:{sameDay:"\uc624\ub298 LT",nextDay:"\ub0b4\uc77c LT",nextWeek:"dddd LT",lastDay:"\uc5b4\uc81c LT",lastWeek:"\uc9c0\ub09c\uc8fc dddd LT",sameElse:"L"},relativeTime:{future:"%s \ud6c4",past:"%s \uc804",s:"\uba87 \ucd08",ss:"%d\ucd08",m:"1\ubd84",mm:"%d\ubd84",h:"\ud55c \uc2dc\uac04",hh:"%d\uc2dc\uac04",d:"\ud558\ub8e8",dd:"%d\uc77c",M:"\ud55c \ub2ec",MM:"%d\ub2ec",y:"\uc77c \ub144",yy:"%d\ub144"},dayOfMonthOrdinalParse:/\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\uc77c";case"M":return e+"\uc6d4";case"w":case"W":return e+"\uc8fc";default:return e}},meridiemParse:/\uc624\uc804|\uc624\ud6c4/,isPM:function(e){return"\uc624\ud6c4"===e},meridiem:function(e,a,t){return e<12?"\uc624\uc804":"\uc624\ud6c4"}});var Qs={0:"-\u0447\u04af",1:"-\u0447\u0438",2:"-\u0447\u0438",3:"-\u0447\u04af",4:"-\u0447\u04af",5:"-\u0447\u0438",6:"-\u0447\u044b",7:"-\u0447\u0438",8:"-\u0447\u0438",9:"-\u0447\u0443",10:"-\u0447\u0443",20:"-\u0447\u044b",30:"-\u0447\u0443",40:"-\u0447\u044b",50:"-\u0447\u04af",60:"-\u0447\u044b",70:"-\u0447\u0438",80:"-\u0447\u0438",90:"-\u0447\u0443",100:"-\u0447\u04af"};function Xs(e,a,t,s){var n={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return a?n[t][0]:n[t][1]}function en(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var a=e%10;return en(0===a?e/10:a)}if(e<1e4){for(;10<=e;)e/=10;return en(e)}return en(e/=1e3)}l.defineLocale("ky",{months:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"),weekdaysShort:"\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"),weekdaysMin:"\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT",nextDay:"[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT",nextWeek:"dddd [\u0441\u0430\u0430\u0442] LT",lastDay:"[\u041a\u0435\u0447\u0435 \u0441\u0430\u0430\u0442] LT",lastWeek:"[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT",sameElse:"L"},relativeTime:{future:"%s \u0438\u0447\u0438\u043d\u0434\u0435",past:"%s \u043c\u0443\u0440\u0443\u043d",s:"\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434",m:"\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442",mm:"%d \u043c\u04af\u043d\u04e9\u0442",h:"\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",hh:"%d \u0441\u0430\u0430\u0442",d:"\u0431\u0438\u0440 \u043a\u04af\u043d",dd:"%d \u043a\u04af\u043d",M:"\u0431\u0438\u0440 \u0430\u0439",MM:"%d \u0430\u0439",y:"\u0431\u0438\u0440 \u0436\u044b\u043b",yy:"%d \u0436\u044b\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,ordinal:function(e){return e+(Qs[e]||Qs[e%10]||Qs[100<=e?100:null])},week:{dow:1,doy:7}}),l.defineLocale("lb",{months:"Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),weekdaysMin:"So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[G\xebschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:function(e){return en(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e},past:function(e){return en(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e},s:"e puer Sekonnen",ss:"%d Sekonnen",m:Xs,mm:"%d Minutten",h:Xs,hh:"%d Stonnen",d:Xs,dd:"%d Deeg",M:Xs,MM:"%d M\xe9int",y:Xs,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("lo",{months:"\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),monthsShort:"\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),weekdays:"\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),weekdaysShort:"\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),weekdaysMin:"\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,isPM:function(e){return"\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"===e},meridiem:function(e,a,t){return e<12?"\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2":"\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"},calendar:{sameDay:"[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",nextDay:"[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT",nextWeek:"[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT",lastDay:"[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",lastWeek:"[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",sameElse:"L"},relativeTime:{future:"\u0ead\u0eb5\u0e81 %s",past:"%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",s:"\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",ss:"%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",m:"1 \u0e99\u0eb2\u0e97\u0eb5",mm:"%d \u0e99\u0eb2\u0e97\u0eb5",h:"1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",hh:"%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",d:"1 \u0ea1\u0eb7\u0ec9",dd:"%d \u0ea1\u0eb7\u0ec9",M:"1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",MM:"%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",y:"1 \u0e9b\u0eb5",yy:"%d \u0e9b\u0eb5"},dayOfMonthOrdinalParse:/(\u0e97\u0eb5\u0ec8)\d{1,2}/,ordinal:function(e){return"\u0e97\u0eb5\u0ec8"+e}});var an={ss:"sekund\u0117_sekund\u017ei\u0173_sekundes",m:"minut\u0117_minut\u0117s_minut\u0119",mm:"minut\u0117s_minu\u010di\u0173_minutes",h:"valanda_valandos_valand\u0105",hh:"valandos_valand\u0173_valandas",d:"diena_dienos_dien\u0105",dd:"dienos_dien\u0173_dienas",M:"m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",MM:"m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",y:"metai_met\u0173_metus",yy:"metai_met\u0173_metus"};function tn(e,a,t,s){return a?nn(t)[0]:s?nn(t)[1]:nn(t)[2]}function sn(e){return e%10==0||10<e&&e<20}function nn(e){return an[e].split("_")}function dn(e,a,t,s){var n=e+" ";return 1===e?n+tn(0,a,t[0],s):a?n+(sn(e)?nn(t)[1]:nn(t)[0]):s?n+nn(t)[1]:n+(sn(e)?nn(t)[1]:nn(t)[2])}l.defineLocale("lt",{months:{format:"sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),weekdaysMin:"S_P_A_T_K_Pn_\u0160".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[\u0160iandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Pra\u0117jus\u012f] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prie\u0161 %s",s:function(e,a,t,s){return a?"kelios sekund\u0117s":s?"keli\u0173 sekund\u017ei\u0173":"kelias sekundes"},ss:dn,m:tn,mm:dn,h:tn,hh:dn,d:tn,dd:dn,M:tn,MM:dn,y:tn,yy:dn},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}});var rn={ss:"sekundes_sekund\u0113m_sekunde_sekundes".split("_"),m:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),mm:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),h:"stundas_stund\u0101m_stunda_stundas".split("_"),hh:"stundas_stund\u0101m_stunda_stundas".split("_"),d:"dienas_dien\u0101m_diena_dienas".split("_"),dd:"dienas_dien\u0101m_diena_dienas".split("_"),M:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),MM:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};function _n(e,a,t){return t?a%10==1&&a%100!=11?e[2]:e[3]:a%10==1&&a%100!=11?e[0]:e[1]}function on(e,a,t){return e+" "+_n(rn[t],e,a)}function mn(e,a,t){return _n(rn[t],e,a)}l.defineLocale("lv",{months:"janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),weekdays:"sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[\u0160odien pulksten] LT",nextDay:"[R\u012bt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"p\u0113c %s",past:"pirms %s",s:function(e,a){return a?"da\u017eas sekundes":"da\u017e\u0101m sekund\u0113m"},ss:on,m:mn,mm:on,h:mn,hh:on,d:mn,dd:on,M:mn,MM:on,y:mn,yy:on},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var un={words:{ss:["sekund","sekunda","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:2<=e&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=un.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+un.correctGrammaticalCase(e,s)}};function ln(e,a,t,s){switch(t){case"s":return a?"\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434":"\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";case"ss":return e+(a?" \u0441\u0435\u043a\u0443\u043d\u0434":" \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d");case"m":case"mm":return e+(a?" \u043c\u0438\u043d\u0443\u0442":" \u043c\u0438\u043d\u0443\u0442\u044b\u043d");case"h":case"hh":return e+(a?" \u0446\u0430\u0433":" \u0446\u0430\u0433\u0438\u0439\u043d");case"d":case"dd":return e+(a?" \u04e9\u0434\u04e9\u0440":" \u04e9\u0434\u0440\u0438\u0439\u043d");case"M":case"MM":return e+(a?" \u0441\u0430\u0440":" \u0441\u0430\u0440\u044b\u043d");case"y":case"yy":return e+(a?" \u0436\u0438\u043b":" \u0436\u0438\u043b\u0438\u0439\u043d");default:return e}}l.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010de u] LT",lastWeek:function(){return["[pro\u0161le] [nedjelje] [u] LT","[pro\u0161log] [ponedjeljka] [u] LT","[pro\u0161log] [utorka] [u] LT","[pro\u0161le] [srijede] [u] LT","[pro\u0161log] [\u010detvrtka] [u] LT","[pro\u0161log] [petka] [u] LT","[pro\u0161le] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",ss:un.translate,m:un.translate,mm:un.translate,h:un.translate,hh:un.translate,d:"dan",dd:un.translate,M:"mjesec",MM:un.translate,y:"godinu",yy:un.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),l.defineLocale("mi",{months:"Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"),weekdaysShort:"Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),weekdaysMin:"Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te h\u0113kona ruarua",ss:"%d h\u0113kona",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),l.defineLocale("mk",{months:"\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),monthsShort:"\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),weekdays:"\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"),weekdaysMin:"\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",nextDay:"[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",nextWeek:"[\u0412\u043e] dddd [\u0432\u043e] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";case 1:case 2:case 4:case 5:return"[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"}},sameElse:"L"},relativeTime:{future:"\u043f\u043e\u0441\u043b\u0435 %s",past:"\u043f\u0440\u0435\u0434 %s",s:"\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",m:"\u043c\u0438\u043d\u0443\u0442\u0430",mm:"%d \u043c\u0438\u043d\u0443\u0442\u0438",h:"\u0447\u0430\u0441",hh:"%d \u0447\u0430\u0441\u0430",d:"\u0434\u0435\u043d",dd:"%d \u0434\u0435\u043d\u0430",M:"\u043c\u0435\u0441\u0435\u0446",MM:"%d \u043c\u0435\u0441\u0435\u0446\u0438",y:"\u0433\u043e\u0434\u0438\u043d\u0430",yy:"%d \u0433\u043e\u0434\u0438\u043d\u0438"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-\u0435\u0432":0===t?e+"-\u0435\u043d":10<t&&t<20?e+"-\u0442\u0438":1===a?e+"-\u0432\u0438":2===a?e+"-\u0440\u0438":7===a||8===a?e+"-\u043c\u0438":e+"-\u0442\u0438"},week:{dow:1,doy:7}}),l.defineLocale("ml",{months:"\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"),monthsShort:"\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"),monthsParseExact:!0,weekdays:"\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"),weekdaysShort:"\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"),weekdaysMin:"\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"),longDateFormat:{LT:"A h:mm -\u0d28\u0d41",LTS:"A h:mm:ss -\u0d28\u0d41",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -\u0d28\u0d41",LLLL:"dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41"},calendar:{sameDay:"[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",nextDay:"[\u0d28\u0d3e\u0d33\u0d46] LT",nextWeek:"dddd, LT",lastDay:"[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",lastWeek:"[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",past:"%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",s:"\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",ss:"%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d",m:"\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",mm:"%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",h:"\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",hh:"%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",d:"\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",dd:"%d \u0d26\u0d3f\u0d35\u0d38\u0d02",M:"\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",MM:"%d \u0d2e\u0d3e\u0d38\u0d02",y:"\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",yy:"%d \u0d35\u0d7c\u0d37\u0d02"},meridiemParse:/\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"===a&&4<=e||"\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d"===a||"\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f":e<12?"\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46":e<17?"\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d":e<20?"\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02":"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"}}),l.defineLocale("mn",{months:"\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),monthsShort:"1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),monthsParseExact:!0,weekdays:"\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"),weekdaysShort:"\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"),weekdaysMin:"\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY \u043e\u043d\u044b MMMM\u044b\u043d D",LLL:"YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm",LLLL:"dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm"},meridiemParse:/\u04ae\u04e8|\u04ae\u0425/i,isPM:function(e){return"\u04ae\u0425"===e},meridiem:function(e,a,t){return e<12?"\u04ae\u04e8":"\u04ae\u0425"},calendar:{sameDay:"[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT",nextDay:"[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT",nextWeek:"[\u0418\u0440\u044d\u0445] dddd LT",lastDay:"[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT",lastWeek:"[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT",sameElse:"L"},relativeTime:{future:"%s \u0434\u0430\u0440\u0430\u0430",past:"%s \u04e9\u043c\u043d\u04e9",s:ln,ss:ln,m:ln,mm:ln,h:ln,hh:ln,d:ln,dd:ln,M:ln,MM:ln,y:ln,yy:ln},dayOfMonthOrdinalParse:/\d{1,2} \u04e9\u0434\u04e9\u0440/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+" \u04e9\u0434\u04e9\u0440";default:return e}}});var Mn={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},hn={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};function Ln(e,a,t,s){var n="";if(a)switch(t){case"s":n="\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";break;case"ss":n="%d \u0938\u0947\u0915\u0902\u0926";break;case"m":n="\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";break;case"mm":n="%d \u092e\u093f\u0928\u093f\u091f\u0947";break;case"h":n="\u090f\u0915 \u0924\u093e\u0938";break;case"hh":n="%d \u0924\u093e\u0938";break;case"d":n="\u090f\u0915 \u0926\u093f\u0935\u0938";break;case"dd":n="%d \u0926\u093f\u0935\u0938";break;case"M":n="\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";break;case"MM":n="%d \u092e\u0939\u093f\u0928\u0947";break;case"y":n="\u090f\u0915 \u0935\u0930\u094d\u0937";break;case"yy":n="%d \u0935\u0930\u094d\u0937\u0947";break}else switch(t){case"s":n="\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";break;case"ss":n="%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";break;case"m":n="\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";break;case"mm":n="%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";break;case"h":n="\u090f\u0915\u093e \u0924\u093e\u0938\u093e";break;case"hh":n="%d \u0924\u093e\u0938\u093e\u0902";break;case"d":n="\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";break;case"dd":n="%d \u0926\u093f\u0935\u0938\u093e\u0902";break;case"M":n="\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";break;case"MM":n="%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";break;case"y":n="\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";break;case"yy":n="%d \u0935\u0930\u094d\u0937\u093e\u0902";break}return n.replace(/%d/i,e)}l.defineLocale("mr",{months:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),monthsShort:"\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),monthsParseExact:!0,weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u0935\u093e\u091c\u0924\u093e",LTS:"A h:mm:ss \u0935\u093e\u091c\u0924\u093e",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",LLLL:"dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0909\u0926\u094d\u092f\u093e] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u093e\u0932] LT",lastWeek:"[\u092e\u093e\u0917\u0940\u0932] dddd, LT",sameElse:"L"},relativeTime:{future:"%s\u092e\u0927\u094d\u092f\u0947",past:"%s\u092a\u0942\u0930\u094d\u0935\u0940",s:Ln,ss:Ln,m:Ln,mm:Ln,h:Ln,hh:Ln,d:Ln,dd:Ln,M:Ln,MM:Ln,y:Ln,yy:Ln},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return hn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Mn[e]})},meridiemParse:/\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924\u094d\u0930\u0940"===a?e<4?e:e+12:"\u0938\u0915\u093e\u0933\u0940"===a?e:"\u0926\u0941\u092a\u093e\u0930\u0940"===a?10<=e?e:e+12:"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0930\u093e\u0924\u094d\u0930\u0940":e<10?"\u0938\u0915\u093e\u0933\u0940":e<17?"\u0926\u0941\u092a\u093e\u0930\u0940":e<20?"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940":"\u0930\u093e\u0924\u094d\u0930\u0940"},week:{dow:0,doy:6}}),l.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?11<=e?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),l.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?11<=e?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),l.defineLocale("mt",{months:"Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"),weekdays:"Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"),weekdaysShort:"\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"),weekdaysMin:"\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Illum fil-]LT",nextDay:"[G\u0127ada fil-]LT",nextWeek:"dddd [fil-]LT",lastDay:"[Il-biera\u0127 fil-]LT",lastWeek:"dddd [li g\u0127adda] [fil-]LT",sameElse:"L"},relativeTime:{future:"f\u2019 %s",past:"%s ilu",s:"ftit sekondi",ss:"%d sekondi",m:"minuta",mm:"%d minuti",h:"sieg\u0127a",hh:"%d sieg\u0127at",d:"\u0121urnata",dd:"%d \u0121ranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}});var cn={1:"\u1041",2:"\u1042",3:"\u1043",4:"\u1044",5:"\u1045",6:"\u1046",7:"\u1047",8:"\u1048",9:"\u1049",0:"\u1040"},Yn={"\u1041":"1","\u1042":"2","\u1043":"3","\u1044":"4","\u1045":"5","\u1046":"6","\u1047":"7","\u1048":"8","\u1049":"9","\u1040":"0"};l.defineLocale("my",{months:"\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),monthsShort:"\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),weekdays:"\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),weekdaysShort:"\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),weekdaysMin:"\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",nextDay:"[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",nextWeek:"dddd LT [\u1019\u103e\u102c]",lastDay:"[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",lastWeek:"[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",sameElse:"L"},relativeTime:{future:"\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",past:"\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",s:"\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",ss:"%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a",m:"\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",mm:"%d \u1019\u102d\u1014\u1005\u103a",h:"\u1010\u1005\u103a\u1014\u102c\u101b\u102e",hh:"%d \u1014\u102c\u101b\u102e",d:"\u1010\u1005\u103a\u101b\u1000\u103a",dd:"%d \u101b\u1000\u103a",M:"\u1010\u1005\u103a\u101c",MM:"%d \u101c",y:"\u1010\u1005\u103a\u1014\u103e\u1005\u103a",yy:"%d \u1014\u103e\u1005\u103a"},preparse:function(e){return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g,function(e){return Yn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return cn[e]})},week:{dow:1,doy:4}}),l.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),weekdaysShort:"s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),weekdaysMin:"s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i g\xe5r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"ett \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var yn={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},fn={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};l.defineLocale("ne",{months:"\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"),monthsShort:"\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"),monthsParseExact:!0,weekdays:"\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"),weekdaysShort:"\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"),weekdaysMin:"\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A\u0915\u094b h:mm \u092c\u091c\u0947",LTS:"A\u0915\u094b h:mm:ss \u092c\u091c\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",LLLL:"dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return fn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return yn[e]})},meridiemParse:/\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924\u093f"===a?e<4?e:e+12:"\u092c\u093f\u0939\u093e\u0928"===a?e:"\u0926\u093f\u0909\u0901\u0938\u094b"===a?10<=e?e:e+12:"\u0938\u093e\u0901\u091d"===a?e+12:void 0},meridiem:function(e,a,t){return e<3?"\u0930\u093e\u0924\u093f":e<12?"\u092c\u093f\u0939\u093e\u0928":e<16?"\u0926\u093f\u0909\u0901\u0938\u094b":e<20?"\u0938\u093e\u0901\u091d":"\u0930\u093e\u0924\u093f"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u092d\u094b\u0932\u093f] LT",nextWeek:"[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",lastDay:"[\u0939\u093f\u091c\u094b] LT",lastWeek:"[\u0917\u090f\u0915\u094b] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s\u092e\u093e",past:"%s \u0905\u0917\u093e\u0921\u093f",s:"\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923",ss:"%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921",m:"\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",mm:"%d \u092e\u093f\u0928\u0947\u091f",h:"\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",hh:"%d \u0918\u0923\u094d\u091f\u093e",d:"\u090f\u0915 \u0926\u093f\u0928",dd:"%d \u0926\u093f\u0928",M:"\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",MM:"%d \u092e\u0939\u093f\u0928\u093e",y:"\u090f\u0915 \u092c\u0930\u094d\u0937",yy:"%d \u092c\u0930\u094d\u0937"},week:{dow:0,doy:6}});var kn="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),pn="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),Dn=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],Tn=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;l.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?pn[e.month()]:kn[e.month()]:kn},monthsRegex:Tn,monthsShortRegex:Tn,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:Dn,longMonthsParse:Dn,shortMonthsParse:Dn,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"\xe9\xe9n minuut",mm:"%d minuten",h:"\xe9\xe9n uur",hh:"%d uur",d:"\xe9\xe9n dag",dd:"%d dagen",M:"\xe9\xe9n maand",MM:"%d maanden",y:"\xe9\xe9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}});var gn="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),wn="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),vn=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],Sn=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;l.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?wn[e.month()]:gn[e.month()]:gn},monthsRegex:Sn,monthsShortRegex:Sn,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:vn,longMonthsParse:vn,shortMonthsParse:vn,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"\xe9\xe9n minuut",mm:"%d minuten",h:"\xe9\xe9n uur",hh:"%d uur",d:"\xe9\xe9n dag",dd:"%d dagen",M:"\xe9\xe9n maand",MM:"%d maanden",y:"\xe9\xe9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}}),l.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_m\xe5n_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_m\xe5_ty_on_to_fr_l\xf8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I g\xe5r klokka] LT",lastWeek:"[F\xf8reg\xe5ande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein m\xe5nad",MM:"%d m\xe5nader",y:"eit \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Hn={1:"\u0a67",2:"\u0a68",3:"\u0a69",4:"\u0a6a",5:"\u0a6b",6:"\u0a6c",7:"\u0a6d",8:"\u0a6e",9:"\u0a6f",0:"\u0a66"},bn={"\u0a67":"1","\u0a68":"2","\u0a69":"3","\u0a6a":"4","\u0a6b":"5","\u0a6c":"6","\u0a6d":"7","\u0a6e":"8","\u0a6f":"9","\u0a66":"0"};l.defineLocale("pa-in",{months:"\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),monthsShort:"\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),weekdays:"\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"),weekdaysShort:"\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),weekdaysMin:"\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),longDateFormat:{LT:"A h:mm \u0a35\u0a1c\u0a47",LTS:"A h:mm:ss \u0a35\u0a1c\u0a47",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",LLLL:"dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47"},calendar:{sameDay:"[\u0a05\u0a1c] LT",nextDay:"[\u0a15\u0a32] LT",nextWeek:"dddd, LT",lastDay:"[\u0a15\u0a32] LT",lastWeek:"[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0a35\u0a3f\u0a71\u0a1a",past:"%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47",s:"\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f",ss:"%d \u0a38\u0a15\u0a3f\u0a70\u0a1f",m:"\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f",mm:"%d \u0a2e\u0a3f\u0a70\u0a1f",h:"\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e",hh:"%d \u0a18\u0a70\u0a1f\u0a47",d:"\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28",dd:"%d \u0a26\u0a3f\u0a28",M:"\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e",MM:"%d \u0a2e\u0a39\u0a40\u0a28\u0a47",y:"\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32",yy:"%d \u0a38\u0a3e\u0a32"},preparse:function(e){return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g,function(e){return bn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Hn[e]})},meridiemParse:/\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0a30\u0a3e\u0a24"===a?e<4?e:e+12:"\u0a38\u0a35\u0a47\u0a30"===a?e:"\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30"===a?10<=e?e:e+12:"\u0a38\u0a3c\u0a3e\u0a2e"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0a30\u0a3e\u0a24":e<10?"\u0a38\u0a35\u0a47\u0a30":e<17?"\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30":e<20?"\u0a38\u0a3c\u0a3e\u0a2e":"\u0a30\u0a3e\u0a24"},week:{dow:0,doy:6}});var jn="stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),xn="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_");function Pn(e){return e%10<5&&1<e%10&&~~(e/10)%10!=1}function On(e,a,t){var s=e+" ";switch(t){case"ss":return s+(Pn(e)?"sekundy":"sekund");case"m":return a?"minuta":"minut\u0119";case"mm":return s+(Pn(e)?"minuty":"minut");case"h":return a?"godzina":"godzin\u0119";case"hh":return s+(Pn(e)?"godziny":"godzin");case"MM":return s+(Pn(e)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return s+(Pn(e)?"lata":"lat")}}function Wn(e,a,t){var s=" ";return(20<=e%100||100<=e&&e%100==0)&&(s=" de "),e+s+{ss:"secunde",mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"}[t]}function En(e,a,t){var s,n;return"m"===t?a?"\u043c\u0438\u043d\u0443\u0442\u0430":"\u043c\u0438\u043d\u0443\u0442\u0443":e+" "+(s=+e,n={ss:a?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",mm:a?"\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442":"\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",hh:"\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",yy:"\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"}[t].split("_"),s%10==1&&s%100!=11?n[0]:2<=s%10&&s%10<=4&&(s%100<10||20<=s%100)?n[1]:n[2])}l.defineLocale("pl",{months:function(e,a){return e?""===a?"("+xn[e.month()]+"|"+jn[e.month()]+")":/D MMMM/.test(a)?xn[e.month()]:jn[e.month()]:jn},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dzi\u015b o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedziel\u0119 o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W \u015brod\u0119 o] LT";case 6:return"[W sobot\u0119 o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zesz\u0142\u0105 niedziel\u0119 o] LT";case 3:return"[W zesz\u0142\u0105 \u015brod\u0119 o] LT";case 6:return"[W zesz\u0142\u0105 sobot\u0119 o] LT";default:return"[W zesz\u0142y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:On,m:On,mm:On,h:On,hh:On,d:"1 dzie\u0144",dd:"%d dni",M:"miesi\u0105c",MM:On,y:"rok",yy:On},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("pt-br",{months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},calendar:{sameDay:"[Hoje \xe0s] LT",nextDay:"[Amanh\xe3 \xe0s] LT",nextWeek:"dddd [\xe0s] LT",lastDay:"[Ontem \xe0s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[\xdaltimo] dddd [\xe0s] LT":"[\xdaltima] dddd [\xe0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba"}),l.defineLocale("pt",{months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje \xe0s] LT",nextDay:"[Amanh\xe3 \xe0s] LT",nextWeek:"dddd [\xe0s] LT",lastDay:"[Ontem \xe0s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[\xdaltimo] dddd [\xe0s] LT":"[\xdaltima] dddd [\xe0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),l.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[m\xe2ine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s \xeen urm\u0103",s:"c\xe2teva secunde",ss:Wn,m:"un minut",mm:Wn,h:"o or\u0103",hh:Wn,d:"o zi",dd:Wn,M:"o lun\u0103",MM:Wn,y:"un an",yy:Wn},week:{dow:1,doy:7}});var An=[/^\u044f\u043d\u0432/i,/^\u0444\u0435\u0432/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f\u0440/i,/^\u043c\u0430[\u0439\u044f]/i,/^\u0438\u044e\u043d/i,/^\u0438\u044e\u043b/i,/^\u0430\u0432\u0433/i,/^\u0441\u0435\u043d/i,/^\u043e\u043a\u0442/i,/^\u043d\u043e\u044f/i,/^\u0434\u0435\u043a/i];l.defineLocale("ru",{months:{format:"\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),standalone:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_")},monthsShort:{format:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),standalone:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_")},weekdays:{standalone:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),format:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"),isFormat:/\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/},weekdaysShort:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),monthsParse:An,longMonthsParse:An,shortMonthsParse:An,monthsRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsShortRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsStrictRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,monthsShortStrictRegex:/^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., H:mm",LLLL:"dddd, D MMMM YYYY \u0433., H:mm"},calendar:{sameDay:"[\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432] LT",nextDay:"[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd [\u0432] LT":"[\u0412] dddd [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd [\u0432] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd [\u0432] LT":"[\u0412] dddd [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0447\u0435\u0440\u0435\u0437 %s",past:"%s \u043d\u0430\u0437\u0430\u0434",s:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",ss:En,m:En,mm:En,h:"\u0447\u0430\u0441",hh:En,d:"\u0434\u0435\u043d\u044c",dd:En,M:"\u043c\u0435\u0441\u044f\u0446",MM:En,y:"\u0433\u043e\u0434",yy:En},meridiemParse:/\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u0438":e<12?"\u0443\u0442\u0440\u0430":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0435\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":return e+"-\u0439";case"D":return e+"-\u0433\u043e";case"w":case"W":return e+"-\u044f";default:return e}},week:{dow:1,doy:4}});var Fn=["\u062c\u0646\u0648\u0631\u064a","\u0641\u064a\u0628\u0631\u0648\u0631\u064a","\u0645\u0627\u0631\u0686","\u0627\u067e\u0631\u064a\u0644","\u0645\u0626\u064a","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u0621\u0650","\u0622\u06af\u0633\u067d","\u0633\u064a\u067e\u067d\u0645\u0628\u0631","\u0622\u06aa\u067d\u0648\u0628\u0631","\u0646\u0648\u0645\u0628\u0631","\u068a\u0633\u0645\u0628\u0631"],zn=["\u0622\u0686\u0631","\u0633\u0648\u0645\u0631","\u0627\u06b1\u0627\u0631\u0648","\u0627\u0631\u0628\u0639","\u062e\u0645\u064a\u0633","\u062c\u0645\u0639","\u0687\u0646\u0687\u0631"];l.defineLocale("sd",{months:Fn,monthsShort:Fn,weekdays:zn,weekdaysShort:zn,weekdaysMin:zn,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd\u060c D MMMM YYYY HH:mm"},meridiemParse:/\u0635\u0628\u062d|\u0634\u0627\u0645/,isPM:function(e){return"\u0634\u0627\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635\u0628\u062d":"\u0634\u0627\u0645"},calendar:{sameDay:"[\u0627\u0684] LT",nextDay:"[\u0633\u0680\u0627\u06bb\u064a] LT",nextWeek:"dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT",lastDay:"[\u06aa\u0627\u0644\u0647\u0647] LT",lastWeek:"[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT",sameElse:"L"},relativeTime:{future:"%s \u067e\u0648\u0621",past:"%s \u0627\u06b3",s:"\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a",ss:"%d \u0633\u064a\u06aa\u0646\u068a",m:"\u0647\u06aa \u0645\u0646\u067d",mm:"%d \u0645\u0646\u067d",h:"\u0647\u06aa \u06aa\u0644\u0627\u06aa",hh:"%d \u06aa\u0644\u0627\u06aa",d:"\u0647\u06aa \u068f\u064a\u0646\u0647\u0646",dd:"%d \u068f\u064a\u0646\u0647\u0646",M:"\u0647\u06aa \u0645\u0647\u064a\u0646\u0648",MM:"%d \u0645\u0647\u064a\u0646\u0627",y:"\u0647\u06aa \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:4}}),l.defineLocale("se",{months:"o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"),monthsShort:"o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"),weekdays:"sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"),weekdaysShort:"sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s gea\u017ees",past:"ma\u014bit %s",s:"moadde sekunddat",ss:"%d sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta m\xe1nnu",MM:"%d m\xe1nut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("si",{months:"\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"),monthsShort:"\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"),weekdays:"\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"),weekdaysShort:"\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"),weekdaysMin:"\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss"},calendar:{sameDay:"[\u0d85\u0daf] LT[\u0da7]",nextDay:"[\u0dc4\u0dd9\u0da7] LT[\u0da7]",nextWeek:"dddd LT[\u0da7]",lastDay:"[\u0d8a\u0dba\u0dda] LT[\u0da7]",lastWeek:"[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]",sameElse:"L"},relativeTime:{future:"%s\u0d9a\u0dd2\u0db1\u0dca",past:"%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",s:"\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",ss:"\u0dad\u0dad\u0dca\u0db4\u0dbb %d",m:"\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0",mm:"\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d",h:"\u0db4\u0dd0\u0dba",hh:"\u0db4\u0dd0\u0dba %d",d:"\u0daf\u0dd2\u0db1\u0dba",dd:"\u0daf\u0dd2\u0db1 %d",M:"\u0db8\u0dcf\u0dc3\u0dba",MM:"\u0db8\u0dcf\u0dc3 %d",y:"\u0dc0\u0dc3\u0dbb",yy:"\u0dc0\u0dc3\u0dbb %d"},dayOfMonthOrdinalParse:/\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,ordinal:function(e){return e+" \u0dc0\u0dd0\u0db1\u0dd2"},meridiemParse:/\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,isPM:function(e){return"\u0db4.\u0dc0."===e||"\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4"===e},meridiem:function(e,a,t){return 11<e?t?"\u0db4.\u0dc0.":"\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4":t?"\u0db4\u0dd9.\u0dc0.":"\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4"}});var Jn="janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),Nn="jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");function Rn(e){return 1<e&&e<5}function In(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"p\xe1r sek\xfand":"p\xe1r sekundami";case"ss":return a||s?n+(Rn(e)?"sekundy":"sek\xfand"):n+"sekundami";break;case"m":return a?"min\xfata":s?"min\xfatu":"min\xfatou";case"mm":return a||s?n+(Rn(e)?"min\xfaty":"min\xfat"):n+"min\xfatami";break;case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(Rn(e)?"hodiny":"hod\xedn"):n+"hodinami";break;case"d":return a||s?"de\u0148":"d\u0148om";case"dd":return a||s?n+(Rn(e)?"dni":"dn\xed"):n+"d\u0148ami";break;case"M":return a||s?"mesiac":"mesiacom";case"MM":return a||s?n+(Rn(e)?"mesiace":"mesiacov"):n+"mesiacmi";break;case"y":return a||s?"rok":"rokom";case"yy":return a||s?n+(Rn(e)?"roky":"rokov"):n+"rokmi";break}}function Cn(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nekaj sekund":"nekaj sekundami";case"ss":return n+=1===e?a?"sekundo":"sekundi":2===e?a||s?"sekundi":"sekundah":e<5?a||s?"sekunde":"sekundah":"sekund";case"m":return a?"ena minuta":"eno minuto";case"mm":return n+=1===e?a?"minuta":"minuto":2===e?a||s?"minuti":"minutama":e<5?a||s?"minute":"minutami":a||s?"minut":"minutami";case"h":return a?"ena ura":"eno uro";case"hh":return n+=1===e?a?"ura":"uro":2===e?a||s?"uri":"urama":e<5?a||s?"ure":"urami":a||s?"ur":"urami";case"d":return a||s?"en dan":"enim dnem";case"dd":return n+=1===e?a||s?"dan":"dnem":2===e?a||s?"dni":"dnevoma":a||s?"dni":"dnevi";case"M":return a||s?"en mesec":"enim mesecem";case"MM":return n+=1===e?a||s?"mesec":"mesecem":2===e?a||s?"meseca":"mesecema":e<5?a||s?"mesece":"meseci":a||s?"mesecev":"meseci";case"y":return a||s?"eno leto":"enim letom";case"yy":return n+=1===e?a||s?"leto":"letom":2===e?a||s?"leti":"letoma":e<5?a||s?"leta":"leti":a||s?"let":"leti"}}l.defineLocale("sk",{months:Jn,monthsShort:Nn,weekdays:"nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede\u013eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v\u010dera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul\xfa nede\u013eu o] LT";case 1:case 2:return"[minul\xfd] dddd [o] LT";case 3:return"[minul\xfa stredu o] LT";case 4:case 5:return"[minul\xfd] dddd [o] LT";case 6:return"[minul\xfa sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:In,ss:In,m:In,mm:In,h:In,hh:In,d:In,dd:In,M:In,MM:In,y:In,yy:In},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._\u010det._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_\u010de_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[v\u010deraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prej\u0161njo] [nedeljo] [ob] LT";case 3:return"[prej\u0161njo] [sredo] [ob] LT";case 6:return"[prej\u0161njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prej\u0161nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"\u010dez %s",past:"pred %s",s:Cn,ss:Cn,m:Cn,mm:Cn,h:Cn,hh:Cn,d:Cn,dd:Cn,M:Cn,MM:Cn,y:Cn,yy:Cn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),l.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),weekdays:"E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),weekdaysShort:"Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_M\xeb_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,a,t){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot n\xeb] LT",nextDay:"[Nes\xebr n\xeb] LT",nextWeek:"dddd [n\xeb] LT",lastDay:"[Dje n\xeb] LT",lastWeek:"dddd [e kaluar n\xeb] LT",sameElse:"L"},relativeTime:{future:"n\xeb %s",past:"%s m\xeb par\xeb",s:"disa sekonda",ss:"%d sekonda",m:"nj\xeb minut\xeb",mm:"%d minuta",h:"nj\xeb or\xeb",hh:"%d or\xeb",d:"nj\xeb dit\xeb",dd:"%d dit\xeb",M:"nj\xeb muaj",MM:"%d muaj",y:"nj\xeb vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Gn={words:{ss:["\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u0441\u0435\u043a\u0443\u043d\u0434\u0435","\u0441\u0435\u043a\u0443\u043d\u0434\u0438"],m:["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442","\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"],mm:["\u043c\u0438\u043d\u0443\u0442","\u043c\u0438\u043d\u0443\u0442\u0435","\u043c\u0438\u043d\u0443\u0442\u0430"],h:["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442","\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"],hh:["\u0441\u0430\u0442","\u0441\u0430\u0442\u0430","\u0441\u0430\u0442\u0438"],dd:["\u0434\u0430\u043d","\u0434\u0430\u043d\u0430","\u0434\u0430\u043d\u0430"],MM:["\u043c\u0435\u0441\u0435\u0446","\u043c\u0435\u0441\u0435\u0446\u0430","\u043c\u0435\u0441\u0435\u0446\u0438"],yy:["\u0433\u043e\u0434\u0438\u043d\u0430","\u0433\u043e\u0434\u0438\u043d\u0435","\u0433\u043e\u0434\u0438\u043d\u0430"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:2<=e&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=Gn.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+Gn.correctGrammaticalCase(e,s)}};l.defineLocale("sr-cyrl",{months:"\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"),monthsShort:"\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"),monthsParseExact:!0,weekdays:"\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"),weekdaysMin:"\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",nextDay:"[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",nextWeek:function(){switch(this.day()){case 0:return"[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";case 3:return"[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";case 6:return"[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";case 1:case 2:case 4:case 5:return"[\u0443] dddd [\u0443] LT"}},lastDay:"[\u0458\u0443\u0447\u0435 \u0443] LT",lastWeek:function(){return["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"\u043f\u0440\u0435 %s",s:"\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",ss:Gn.translate,m:Gn.translate,mm:Gn.translate,h:Gn.translate,hh:Gn.translate,d:"\u0434\u0430\u043d",dd:Gn.translate,M:"\u043c\u0435\u0441\u0435\u0446",MM:Gn.translate,y:"\u0433\u043e\u0434\u0438\u043d\u0443",yy:Gn.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var Un={words:{ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:2<=e&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=Un.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+Un.correctGrammaticalCase(e,s)}};l.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010de u] LT",lastWeek:function(){return["[pro\u0161le] [nedelje] [u] LT","[pro\u0161log] [ponedeljka] [u] LT","[pro\u0161log] [utorka] [u] LT","[pro\u0161le] [srede] [u] LT","[pro\u0161log] [\u010detvrtka] [u] LT","[pro\u0161log] [petka] [u] LT","[pro\u0161le] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:Un.translate,m:Un.translate,mm:Un.translate,h:Un.translate,hh:Un.translate,d:"dan",dd:Un.translate,M:"mesec",MM:Un.translate,y:"godinu",yy:Un.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),l.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",ss:"%d mzuzwana",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,a,t){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,a){return 12===e&&(e=0),"ekuseni"===a?e:"emini"===a?11<=e?e:e+12:"entsambama"===a||"ebusuku"===a?0===e?0:e+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}}),l.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),weekdaysShort:"s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),weekdaysMin:"s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Ig\xe5r] LT",nextWeek:"[P\xe5] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"f\xf6r %s sedan",s:"n\xe5gra sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en m\xe5nad",MM:"%d m\xe5nader",y:"ett \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"e":1===a?"a":2===a?"a":"e")},week:{dow:1,doy:4}}),l.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",ss:"sekunde %d",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}});var Vn={1:"\u0be7",2:"\u0be8",3:"\u0be9",4:"\u0bea",5:"\u0beb",6:"\u0bec",7:"\u0bed",8:"\u0bee",9:"\u0bef",0:"\u0be6"},Kn={"\u0be7":"1","\u0be8":"2","\u0be9":"3","\u0bea":"4","\u0beb":"5","\u0bec":"6","\u0bed":"7","\u0bee":"8","\u0bef":"9","\u0be6":"0"};l.defineLocale("ta",{months:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),monthsShort:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),weekdays:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"),weekdaysShort:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"),weekdaysMin:"\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",nextDay:"[\u0ba8\u0bbe\u0bb3\u0bc8] LT",nextWeek:"dddd, LT",lastDay:"[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",lastWeek:"[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0b87\u0bb2\u0bcd",past:"%s \u0bae\u0bc1\u0ba9\u0bcd",s:"\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",ss:"%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",m:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",mm:"%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",h:"\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",hh:"%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",d:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",dd:"%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",M:"\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",MM:"%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",y:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",yy:"%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd"},dayOfMonthOrdinalParse:/\d{1,2}\u0bb5\u0ba4\u0bc1/,ordinal:function(e){return e+"\u0bb5\u0ba4\u0bc1"},preparse:function(e){return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g,function(e){return Kn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Vn[e]})},meridiemParse:/\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,meridiem:function(e,a,t){return e<2?" \u0baf\u0bbe\u0bae\u0bae\u0bcd":e<6?" \u0bb5\u0bc8\u0b95\u0bb1\u0bc8":e<10?" \u0b95\u0bbe\u0bb2\u0bc8":e<14?" \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd":e<18?" \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1":e<22?" \u0bae\u0bbe\u0bb2\u0bc8":" \u0baf\u0bbe\u0bae\u0bae\u0bcd"},meridiemHour:function(e,a){return 12===e&&(e=0),"\u0baf\u0bbe\u0bae\u0bae\u0bcd"===a?e<2?e:e+12:"\u0bb5\u0bc8\u0b95\u0bb1\u0bc8"===a||"\u0b95\u0bbe\u0bb2\u0bc8"===a?e:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd"===a&&10<=e?e:e+12},week:{dow:0,doy:6}}),l.defineLocale("te",{months:"\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"),monthsShort:"\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"),monthsParseExact:!0,weekdays:"\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"),weekdaysShort:"\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"),weekdaysMin:"\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0c28\u0c47\u0c21\u0c41] LT",nextDay:"[\u0c30\u0c47\u0c2a\u0c41] LT",nextWeek:"dddd, LT",lastDay:"[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT",lastWeek:"[\u0c17\u0c24] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0c32\u0c4b",past:"%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02",s:"\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41",ss:"%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41",m:"\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",mm:"%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41",h:"\u0c12\u0c15 \u0c17\u0c02\u0c1f",hh:"%d \u0c17\u0c02\u0c1f\u0c32\u0c41",d:"\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",dd:"%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41",M:"\u0c12\u0c15 \u0c28\u0c46\u0c32",MM:"%d \u0c28\u0c46\u0c32\u0c32\u0c41",y:"\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",yy:"%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"},dayOfMonthOrdinalParse:/\d{1,2}\u0c35/,ordinal:"%d\u0c35",meridiemParse:/\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"===a?e<4?e:e+12:"\u0c09\u0c26\u0c2f\u0c02"===a?e:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02"===a?10<=e?e:e+12:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f":e<10?"\u0c09\u0c26\u0c2f\u0c02":e<17?"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02":e<20?"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02":"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"},week:{dow:0,doy:6}}),l.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"minutu balun",ss:"minutu %d",m:"minutu ida",mm:"minutu %d",h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}});var Zn={0:"-\u0443\u043c",1:"-\u0443\u043c",2:"-\u044e\u043c",3:"-\u044e\u043c",4:"-\u0443\u043c",5:"-\u0443\u043c",6:"-\u0443\u043c",7:"-\u0443\u043c",8:"-\u0443\u043c",9:"-\u0443\u043c",10:"-\u0443\u043c",12:"-\u0443\u043c",13:"-\u0443\u043c",20:"-\u0443\u043c",30:"-\u044e\u043c",40:"-\u0443\u043c",50:"-\u0443\u043c",60:"-\u0443\u043c",70:"-\u0443\u043c",80:"-\u0443\u043c",90:"-\u0443\u043c",100:"-\u0443\u043c"};l.defineLocale("tg",{months:"\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"),weekdaysShort:"\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"),weekdaysMin:"\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",nextDay:"[\u041f\u0430\u0433\u043e\u04b3 \u0441\u043e\u0430\u0442\u0438] LT",lastDay:"[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",nextWeek:"dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT",lastWeek:"dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT",sameElse:"L"},relativeTime:{future:"\u0431\u0430\u044a\u0434\u0438 %s",past:"%s \u043f\u0435\u0448",s:"\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f",m:"\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430",mm:"%d \u0434\u0430\u049b\u0438\u049b\u0430",h:"\u044f\u043a \u0441\u043e\u0430\u0442",hh:"%d \u0441\u043e\u0430\u0442",d:"\u044f\u043a \u0440\u04ef\u0437",dd:"%d \u0440\u04ef\u0437",M:"\u044f\u043a \u043c\u043e\u04b3",MM:"%d \u043c\u043e\u04b3",y:"\u044f\u043a \u0441\u043e\u043b",yy:"%d \u0441\u043e\u043b"},meridiemParse:/\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0448\u0430\u0431"===a?e<4?e:e+12:"\u0441\u0443\u0431\u04b3"===a?e:"\u0440\u04ef\u0437"===a?11<=e?e:e+12:"\u0431\u0435\u0433\u043e\u04b3"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0448\u0430\u0431":e<11?"\u0441\u0443\u0431\u04b3":e<16?"\u0440\u04ef\u0437":e<19?"\u0431\u0435\u0433\u043e\u04b3":"\u0448\u0430\u0431"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0443\u043c|\u044e\u043c)/,ordinal:function(e){return e+(Zn[e]||Zn[e%10]||Zn[100<=e?100:null])},week:{dow:1,doy:7}}),l.defineLocale("th",{months:"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),monthsShort:"\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"),monthsParseExact:!0,weekdays:"\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),weekdaysShort:"\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),weekdaysMin:"\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",LLLL:"\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm"},meridiemParse:/\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,isPM:function(e){return"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"===e},meridiem:function(e,a,t){return e<12?"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07":"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"},calendar:{sameDay:"[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",nextDay:"[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",nextWeek:"dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",lastDay:"[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",lastWeek:"[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",sameElse:"L"},relativeTime:{future:"\u0e2d\u0e35\u0e01 %s",past:"%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",s:"\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",ss:"%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",m:"1 \u0e19\u0e32\u0e17\u0e35",mm:"%d \u0e19\u0e32\u0e17\u0e35",h:"1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",hh:"%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",d:"1 \u0e27\u0e31\u0e19",dd:"%d \u0e27\u0e31\u0e19",M:"1 \u0e40\u0e14\u0e37\u0e2d\u0e19",MM:"%d \u0e40\u0e14\u0e37\u0e2d\u0e19",y:"1 \u0e1b\u0e35",yy:"%d \u0e1b\u0e35"}}),l.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}});var $n="pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");function Bn(e,a,t,s){var n=function(e){var a=Math.floor(e%1e3/100),t=Math.floor(e%100/10),s=e%10,n="";0<a&&(n+=$n[a]+"vatlh");0<t&&(n+=(""!==n?" ":"")+$n[t]+"maH");0<s&&(n+=(""!==n?" ":"")+$n[s]);return""===n?"pagh":n}(e);switch(t){case"ss":return n+" lup";case"mm":return n+" tup";case"hh":return n+" rep";case"dd":return n+" jaj";case"MM":return n+" jar";case"yy":return n+" DIS"}}l.defineLocale("tlh",{months:"tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"),monthsShort:"jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa\u2019leS] LT",nextWeek:"LLL",lastDay:"[wa\u2019Hu\u2019] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"leS":-1!==e.indexOf("jar")?a.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?a.slice(0,-3)+"nem":a+" pIq"},past:function(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"Hu\u2019":-1!==e.indexOf("jar")?a.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?a.slice(0,-3)+"ben":a+" ret"},s:"puS lup",ss:Bn,m:"wa\u2019 tup",mm:Bn,h:"wa\u2019 rep",hh:Bn,d:"wa\u2019 jaj",dd:Bn,M:"wa\u2019 jar",MM:Bn,y:"wa\u2019 DIS",yy:Bn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var qn={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'\xfcnc\xfc",4:"'\xfcnc\xfc",100:"'\xfcnc\xfc",6:"'nc\u0131",9:"'uncu",10:"'uncu",30:"'uncu",60:"'\u0131nc\u0131",90:"'\u0131nc\u0131"};function Qn(e,a,t,s){var n={s:["viensas secunds","'iensas secunds"],ss:[e+" secunds",e+" secunds"],m:["'n m\xedut","'iens m\xedut"],mm:[e+" m\xeduts",e+" m\xeduts"],h:["'n \xfeora","'iensa \xfeora"],hh:[e+" \xfeoras",e+" \xfeoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",e+" ars"]};return s?n[t][0]:a?n[t][0]:n[t][1]}function Xn(e,a,t){var s,n;return"m"===t?a?"\u0445\u0432\u0438\u043b\u0438\u043d\u0430":"\u0445\u0432\u0438\u043b\u0438\u043d\u0443":"h"===t?a?"\u0433\u043e\u0434\u0438\u043d\u0430":"\u0433\u043e\u0434\u0438\u043d\u0443":e+" "+(s=+e,n={ss:a?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",mm:a?"\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d":"\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",hh:a?"\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d":"\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",MM:"\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",yy:"\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"}[t].split("_"),s%10==1&&s%100!=11?n[0]:2<=s%10&&s%10<=4&&(s%100<10||20<=s%100)?n[1]:n[2])}function ed(e){return function(){return e+"\u043e"+(11===this.hours()?"\u0431":"")+"] LT"}}l.defineLocale("tr",{months:"Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),monthsShort:"Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn saat] LT",nextDay:"[yar\u0131n saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[d\xfcn] LT",lastWeek:"[ge\xe7en] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \xf6nce",s:"birka\xe7 saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir g\xfcn",dd:"%d g\xfcn",M:"bir ay",MM:"%d ay",y:"bir y\u0131l",yy:"%d y\u0131l"},ordinal:function(e,a){switch(a){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)return e+"'\u0131nc\u0131";var t=e%10;return e+(qn[t]||qn[e%100-t]||qn[100<=e?100:null])}},week:{dow:1,doy:7}}),l.defineLocale("tzl",{months:"Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),weekdaysShort:"S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),weekdaysMin:"S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,a,t){return 11<e?t?"d'o":"D'O":t?"d'a":"D'A"},calendar:{sameDay:"[oxhi \xe0] LT",nextDay:"[dem\xe0 \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[ieiri \xe0] LT",lastWeek:"[s\xfcr el] dddd [lasteu \xe0] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:Qn,ss:Qn,m:Qn,mm:Qn,h:Qn,hh:Qn,d:Qn,dd:Qn,M:Qn,MM:Qn,y:Qn,yy:Qn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),l.defineLocale("tzm-latn",{months:"innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",ss:"%d imik",m:"minu\u1e0d",mm:"%d minu\u1e0d",h:"sa\u025ba",hh:"%d tassa\u025bin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),l.defineLocale("tzm",{months:"\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),monthsShort:"\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),weekdays:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),weekdaysShort:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),weekdaysMin:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",nextDay:"[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",nextWeek:"dddd [\u2d34] LT",lastDay:"[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",lastWeek:"dddd [\u2d34] LT",sameElse:"L"},relativeTime:{future:"\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",past:"\u2d62\u2d30\u2d4f %s",s:"\u2d49\u2d4e\u2d49\u2d3d",ss:"%d \u2d49\u2d4e\u2d49\u2d3d",m:"\u2d4e\u2d49\u2d4f\u2d53\u2d3a",mm:"%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",h:"\u2d59\u2d30\u2d44\u2d30",hh:"%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",d:"\u2d30\u2d59\u2d59",dd:"%d o\u2d59\u2d59\u2d30\u2d4f",M:"\u2d30\u2d62o\u2d53\u2d54",MM:"%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",y:"\u2d30\u2d59\u2d33\u2d30\u2d59",yy:"%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f"},week:{dow:6,doy:12}}),l.defineLocale("ug-cn",{months:"\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),monthsShort:"\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),weekdays:"\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"),weekdaysShort:"\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),weekdaysMin:"\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649",LLL:"YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm",LLLL:"dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm"},meridiemParse:/\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5"===a||"\u0633\u06d5\u06be\u06d5\u0631"===a||"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646"===a?e:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646"===a||"\u0643\u06d5\u0686"===a?e+12:11<=e?e:e+12},meridiem:function(e,a,t){var s=100*e+a;return s<600?"\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5":s<900?"\u0633\u06d5\u06be\u06d5\u0631":s<1130?"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646":s<1230?"\u0686\u06c8\u0634":s<1800?"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646":"\u0643\u06d5\u0686"},calendar:{sameDay:"[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT",nextDay:"[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT",nextWeek:"[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",lastDay:"[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT",lastWeek:"[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",sameElse:"L"},relativeTime:{future:"%s \u0643\u06d0\u064a\u0649\u0646",past:"%s \u0628\u06c7\u0631\u06c7\u0646",s:"\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a",ss:"%d \u0633\u06d0\u0643\u0648\u0646\u062a",m:"\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",mm:"%d \u0645\u0649\u0646\u06c7\u062a",h:"\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",hh:"%d \u0633\u0627\u0626\u06d5\u062a",d:"\u0628\u0649\u0631 \u0643\u06c8\u0646",dd:"%d \u0643\u06c8\u0646",M:"\u0628\u0649\u0631 \u0626\u0627\u064a",MM:"%d \u0626\u0627\u064a",y:"\u0628\u0649\u0631 \u064a\u0649\u0644",yy:"%d \u064a\u0649\u0644"},dayOfMonthOrdinalParse:/\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"-\u0643\u06c8\u0646\u0649";case"w":case"W":return e+"-\u06be\u06d5\u067e\u062a\u06d5";default:return e}},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:7}}),l.defineLocale("uk",{months:{format:"\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"),standalone:"\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_")},monthsShort:"\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),weekdays:function(e,a){var t={nominative:"\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),accusative:"\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),genitive:"\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_")};return e?t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a)?"accusative":/\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a)?"genitive":"nominative"][e.day()]:t.nominative},weekdaysShort:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0440.",LLL:"D MMMM YYYY \u0440., HH:mm",LLLL:"dddd, D MMMM YYYY \u0440., HH:mm"},calendar:{sameDay:ed("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),nextDay:ed("[\u0417\u0430\u0432\u0442\u0440\u0430 "),lastDay:ed("[\u0412\u0447\u043e\u0440\u0430 "),nextWeek:ed("[\u0423] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return ed("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);case 1:case 2:case 4:return ed("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"%s \u0442\u043e\u043c\u0443",s:"\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",ss:Xn,m:Xn,mm:Xn,h:"\u0433\u043e\u0434\u0438\u043d\u0443",hh:Xn,d:"\u0434\u0435\u043d\u044c",dd:Xn,M:"\u043c\u0456\u0441\u044f\u0446\u044c",MM:Xn,y:"\u0440\u0456\u043a",yy:Xn},meridiemParse:/\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u0456":e<12?"\u0440\u0430\u043d\u043a\u0443":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u043e\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0439|\u0433\u043e)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e+"-\u0439";case"D":return e+"-\u0433\u043e";default:return e}},week:{dow:1,doy:7}});var ad=["\u062c\u0646\u0648\u0631\u06cc","\u0641\u0631\u0648\u0631\u06cc","\u0645\u0627\u0631\u0686","\u0627\u067e\u0631\u06cc\u0644","\u0645\u0626\u06cc","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u0626\u06cc","\u0627\u06af\u0633\u062a","\u0633\u062a\u0645\u0628\u0631","\u0627\u06a9\u062a\u0648\u0628\u0631","\u0646\u0648\u0645\u0628\u0631","\u062f\u0633\u0645\u0628\u0631"],td=["\u0627\u062a\u0648\u0627\u0631","\u067e\u06cc\u0631","\u0645\u0646\u06af\u0644","\u0628\u062f\u06be","\u062c\u0645\u0639\u0631\u0627\u062a","\u062c\u0645\u0639\u06c1","\u06c1\u0641\u062a\u06c1"];return l.defineLocale("ur",{months:ad,monthsShort:ad,weekdays:td,weekdaysShort:td,weekdaysMin:td,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd\u060c D MMMM YYYY HH:mm"},meridiemParse:/\u0635\u0628\u062d|\u0634\u0627\u0645/,isPM:function(e){return"\u0634\u0627\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635\u0628\u062d":"\u0634\u0627\u0645"},calendar:{sameDay:"[\u0622\u062c \u0628\u0648\u0642\u062a] LT",nextDay:"[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT",nextWeek:"dddd [\u0628\u0648\u0642\u062a] LT",lastDay:"[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT",lastWeek:"[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT",sameElse:"L"},relativeTime:{future:"%s \u0628\u0639\u062f",past:"%s \u0642\u0628\u0644",s:"\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",ss:"%d \u0633\u06cc\u06a9\u0646\u0688",m:"\u0627\u06cc\u06a9 \u0645\u0646\u0679",mm:"%d \u0645\u0646\u0679",h:"\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",hh:"%d \u06af\u06be\u0646\u0679\u06d2",d:"\u0627\u06cc\u06a9 \u062f\u0646",dd:"%d \u062f\u0646",M:"\u0627\u06cc\u06a9 \u0645\u0627\u06c1",MM:"%d \u0645\u0627\u06c1",y:"\u0627\u06cc\u06a9 \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:4}}),l.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",ss:"%d soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}}),l.defineLocale("uz",{months:"\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"),weekdaysShort:"\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"),weekdaysMin:"\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",nextDay:"[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",nextWeek:"dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",lastDay:"[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",lastWeek:"[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",sameElse:"L"},relativeTime:{future:"\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",past:"\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",s:"\u0444\u0443\u0440\u0441\u0430\u0442",ss:"%d \u0444\u0443\u0440\u0441\u0430\u0442",m:"\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",mm:"%d \u0434\u0430\u043a\u0438\u043a\u0430",h:"\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",hh:"%d \u0441\u043e\u0430\u0442",d:"\u0431\u0438\u0440 \u043a\u0443\u043d",dd:"%d \u043a\u0443\u043d",M:"\u0431\u0438\u0440 \u043e\u0439",MM:"%d \u043e\u0439",y:"\u0431\u0438\u0440 \u0439\u0438\u043b",yy:"%d \u0439\u0438\u043b"},week:{dow:1,doy:7}}),l.defineLocale("vi",{months:"th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"sa":"SA":t?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [n\u0103m] YYYY",LLL:"D MMMM [n\u0103m] YYYY HH:mm",LLLL:"dddd, D MMMM [n\u0103m] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[H\xf4m nay l\xfac] LT",nextDay:"[Ng\xe0y mai l\xfac] LT",nextWeek:"dddd [tu\u1ea7n t\u1edbi l\xfac] LT",lastDay:"[H\xf4m qua l\xfac] LT",lastWeek:"dddd [tu\u1ea7n r\u1ed3i l\xfac] LT",sameElse:"L"},relativeTime:{future:"%s t\u1edbi",past:"%s tr\u01b0\u1edbc",s:"v\xe0i gi\xe2y",ss:"%d gi\xe2y",m:"m\u1ed9t ph\xfat",mm:"%d ph\xfat",h:"m\u1ed9t gi\u1edd",hh:"%d gi\u1edd",d:"m\u1ed9t ng\xe0y",dd:"%d ng\xe0y",M:"m\u1ed9t th\xe1ng",MM:"%d th\xe1ng",y:"m\u1ed9t n\u0103m",yy:"%d n\u0103m"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),l.defineLocale("x-pseudo",{months:"J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"),monthsShort:"J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"),monthsParseExact:!0,weekdays:"S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"),weekdaysShort:"S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"),weekdaysMin:"S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~\xf3d\xe1~\xfd \xe1t] LT",nextDay:"[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",nextWeek:"dddd [\xe1t] LT",lastDay:"[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",lastWeek:"[L~\xe1st] dddd [\xe1t] LT",sameElse:"L"},relativeTime:{future:"\xed~\xf1 %s",past:"%s \xe1~g\xf3",s:"\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",ss:"%d s~\xe9c\xf3\xf1~ds",m:"\xe1 ~m\xed\xf1~\xfat\xe9",mm:"%d m~\xed\xf1\xfa~t\xe9s",h:"\xe1~\xf1 h\xf3~\xfar",hh:"%d h~\xf3\xfars",d:"\xe1 ~d\xe1\xfd",dd:"%d d~\xe1\xfds",M:"\xe1 ~m\xf3\xf1~th",MM:"%d m~\xf3\xf1t~hs",y:"\xe1 ~\xfd\xe9\xe1r",yy:"%d \xfd~\xe9\xe1rs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),l.defineLocale("yo",{months:"S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),monthsShort:"S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),weekdays:"A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"),weekdaysShort:"A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"),weekdaysMin:"A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[O\u0300ni\u0300 ni] LT",nextDay:"[\u1ecc\u0300la ni] LT",nextWeek:"dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT",lastDay:"[A\u0300na ni] LT",lastWeek:"dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT",sameElse:"L"},relativeTime:{future:"ni\u0301 %s",past:"%s k\u1ecdja\u0301",s:"i\u0300s\u1eb9ju\u0301 aaya\u0301 die",ss:"aaya\u0301 %d",m:"i\u0300s\u1eb9ju\u0301 kan",mm:"i\u0300s\u1eb9ju\u0301 %d",h:"wa\u0301kati kan",hh:"wa\u0301kati %d",d:"\u1ecdj\u1ecd\u0301 kan",dd:"\u1ecdj\u1ecd\u0301 %d",M:"osu\u0300 kan",MM:"osu\u0300 %d",y:"\u1ecddu\u0301n kan",yy:"\u1ecddu\u0301n %d"},dayOfMonthOrdinalParse:/\u1ecdj\u1ecd\u0301\s\d{1,2}/,ordinal:"\u1ecdj\u1ecd\u0301 %d",week:{dow:1,doy:4}}),l.defineLocale("zh-cn",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:11<=e?e:e+12},meridiem:function(e,a,t){var s=100*e+a;return s<600?"\u51cc\u6668":s<900?"\u65e9\u4e0a":s<1130?"\u4e0a\u5348":s<1230?"\u4e2d\u5348":s<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u5468)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u5468";default:return e}},relativeTime:{future:"%s\u5185",past:"%s\u524d",s:"\u51e0\u79d2",ss:"%d \u79d2",m:"1 \u5206\u949f",mm:"%d \u5206\u949f",h:"1 \u5c0f\u65f6",hh:"%d \u5c0f\u65f6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4e2a\u6708",MM:"%d \u4e2a\u6708",y:"1 \u5e74",yy:"%d \u5e74"},week:{dow:1,doy:4}}),l.defineLocale("zh-hk",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?11<=e?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return s<600?"\u51cc\u6668":s<900?"\u65e9\u4e0a":s<1130?"\u4e0a\u5348":s<1230?"\u4e2d\u5348":s<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5167",past:"%s\u524d",s:"\u5e7e\u79d2",ss:"%d \u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),l.defineLocale("zh-tw",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?11<=e?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return s<600?"\u51cc\u6668":s<900?"\u65e9\u4e0a":s<1130?"\u4e0a\u5348":s<1230?"\u4e2d\u5348":s<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929] LT",nextDay:"[\u660e\u5929] LT",nextWeek:"[\u4e0b]dddd LT",lastDay:"[\u6628\u5929] LT",lastWeek:"[\u4e0a]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5167",past:"%s\u524d",s:"\u5e7e\u79d2",ss:"%d \u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),l.locale("en"),l});
/*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map
!function(e){e.fn.extend({slimScroll:function(i){var o={width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},s=e.extend(o,i);return this.each(function(){function o(t){if(h){var t=t||window.event,i=0;t.wheelDelta&&(i=-t.wheelDelta/120),t.detail&&(i=t.detail/3);var o=t.target||t.srcTarget||t.srcElement;e(o).closest("."+s.wrapperClass).is(x.parent())&&r(i,!0),t.preventDefault&&!y&&t.preventDefault(),y||(t.returnValue=!1)}}function r(e,t,i){y=!1;var o=e,r=x.outerHeight()-R.outerHeight();if(t&&(o=parseInt(R.css("top"))+e*parseInt(s.wheelStep)/100*R.outerHeight(),o=Math.min(Math.max(o,0),r),o=e>0?Math.ceil(o):Math.floor(o),R.css({top:o+"px"})),v=parseInt(R.css("top"))/(x.outerHeight()-R.outerHeight()),o=v*(x[0].scrollHeight-x.outerHeight()),i){o=e;var a=o/x[0].scrollHeight*x.outerHeight();a=Math.min(Math.max(a,0),r),R.css({top:a+"px"})}x.scrollTop(o),x.trigger("slimscrolling",~~o),n(),c()}function a(e){window.addEventListener?(e.addEventListener("DOMMouseScroll",o,!1),e.addEventListener("mousewheel",o,!1)):document.attachEvent("onmousewheel",o)}function l(){f=Math.max(x.outerHeight()/x[0].scrollHeight*x.outerHeight(),m),R.css({height:f+"px"});var e=f==x.outerHeight()?"none":"block";R.css({display:e})}function n(){if(l(),clearTimeout(p),v==~~v){if(y=s.allowPageScroll,b!=v){var e=0==~~v?"top":"bottom";x.trigger("slimscroll",e)}}else y=!1;return b=v,f>=x.outerHeight()?void(y=!0):(R.stop(!0,!0).fadeIn("fast"),void(s.railVisible&&E.stop(!0,!0).fadeIn("fast")))}function c(){s.alwaysVisible||(p=setTimeout(function(){s.disableFadeOut&&h||u||d||(R.fadeOut("slow"),E.fadeOut("slow"))},1e3))}var h,u,d,p,g,f,v,b,w="<div></div>",m=30,y=!1,x=e(this);if(x.parent().hasClass(s.wrapperClass)){var C=x.scrollTop();if(R=x.closest("."+s.barClass),E=x.closest("."+s.railClass),l(),e.isPlainObject(i)){if("height"in i&&"auto"==i.height){x.parent().css("height","auto"),x.css("height","auto");var H=x.parent().parent().height();x.parent().css("height",H),x.css("height",H)}if("scrollTo"in i)C=parseInt(s.scrollTo);else if("scrollBy"in i)C+=parseInt(s.scrollBy);else if("destroy"in i)return R.remove(),E.remove(),void x.unwrap();r(C,!1,!0)}}else if(!(e.isPlainObject(i)&&"destroy"in i)){s.height="auto"==s.height?x.parent().height():s.height;var S=e(w).addClass(s.wrapperClass).css({position:"relative",overflow:"hidden",width:s.width,height:s.height});x.css({overflow:"hidden",width:s.width,height:s.height});var E=e(w).addClass(s.railClass).css({width:s.size,height:"100%",position:"absolute",top:0,display:s.alwaysVisible&&s.railVisible?"block":"none","border-radius":s.railBorderRadius,background:s.railColor,opacity:s.railOpacity,zIndex:90}),R=e(w).addClass(s.barClass).css({background:s.color,width:s.size,position:"absolute",top:0,opacity:s.opacity,display:s.alwaysVisible?"block":"none","border-radius":s.borderRadius,BorderRadius:s.borderRadius,MozBorderRadius:s.borderRadius,WebkitBorderRadius:s.borderRadius,zIndex:99}),D="right"==s.position?{right:s.distance}:{left:s.distance};E.css(D),R.css(D),x.wrap(S),x.parent().append(R),x.parent().append(E),s.railDraggable&&R.bind("mousedown",function(i){var o=e(document);return d=!0,t=parseFloat(R.css("top")),pageY=i.pageY,o.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,R.css("top",currTop),r(0,R.position().top,!1)}),o.bind("mouseup.slimscroll",function(e){d=!1,c(),o.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(e){return e.stopPropagation(),e.preventDefault(),!1}),E.hover(function(){n()},function(){c()}),R.hover(function(){u=!0},function(){u=!1}),x.hover(function(){h=!0,n(),c()},function(){h=!1,c()}),x.bind("touchstart",function(e,t){e.originalEvent.touches.length&&(g=e.originalEvent.touches[0].pageY)}),x.bind("touchmove",function(e){if(y||e.originalEvent.preventDefault(),e.originalEvent.touches.length){var t=(g-e.originalEvent.touches[0].pageY)/s.touchScrollStep;r(t,!0),g=e.originalEvent.touches[0].pageY}}),l(),"bottom"===s.start?(R.css({top:x.outerHeight()-R.outerHeight()}),r(0,!0)):"top"!==s.start&&(r(e(s.start).position().top,null,!0),s.alwaysVisible||R.hide()),a(this)}}),this}}),e.fn.extend({slimscroll:e.fn.slimScroll})}(jQuery);
!function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,i={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(i=t.getBoundingClientRect()),a=n(o),{top:i.top+a.pageYOffset-e.clientTop,left:i.left+a.pageXOffset-e.clientLeft}}function i(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(d.allowEvent(t)===!1)return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves-effect"))){e=n;break}if(n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function r(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var s=s||{},u=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var r=a(n),s=t.pageY-r.top,u=t.pageX-r.left,d="scale("+n.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,u=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",d),o.setAttribute("data-x",u),o.setAttribute("data-y",s);var l={top:s+"px",left:u+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",i(l)),o.className=o.className.replace("waves-notransition",""),l["-webkit-transform"]=d,l["-moz-transform"]=d,l["-ms-transform"]=d,l["-o-transform"]=d,l.transform=d,l.opacity="1",l["-webkit-transition-duration"]=c.duration+"ms",l["-moz-transition-duration"]=c.duration+"ms",l["-o-transition-duration"]=c.duration+"ms",l["transition-duration"]=c.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",i(l))},hide:function(t){d.touchup(t);var e=this,n=(1.4*e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;n=a[a.length-1];var o=n.getAttribute("data-x"),r=n.getAttribute("data-y"),s=n.getAttribute("data-scale"),u=Date.now()-Number(n.getAttribute("data-hold")),l=350-u;0>l&&(l=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};n.setAttribute("style",i(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},l)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves-effect"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),i.setAttribute("style",o),n.className="waves-button-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},d={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?d.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){d.touches>0&&(d.touches-=1)},500):"mousedown"===t.type&&d.touches>0&&(e=!1),e},touchup:function(t){d.allowEvent(t)}};s.displayEffect=function(e){e=e||{},"duration"in e&&(c.duration=e.duration),c.wrapInput(u(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window);
/**
 * Super simple wysiwyg editor v0.8.8
 * http://summernote.org/
 *
 * summernote-bs4.js
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license./
 *
 * Date: 2017-09-09T11:03Z
 */
(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function ($) {
  'use strict';

  var isSupportAmd = typeof define === 'function' && define.amd;

  /**
   * returns whether font is installed or not.
   *
   * @param {String} fontName
   * @return {Boolean}
   */
  var isFontInstalled = function (fontName) {
    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
    var $tester = $('<div>').css({
      position: 'absolute',
      left: '-9999px',
      top: '-9999px',
      fontSize: '200px'
    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);

    var originalWidth = $tester.css('fontFamily', testFontName).width();
    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();

    $tester.remove();

    return originalWidth !== width;
  };

  var userAgent = navigator.userAgent;
  var isMSIE = /MSIE|Trident/i.test(userAgent);
  var browserVersion;
  if (isMSIE) {
    var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
    if (matches) {
      browserVersion = parseFloat(matches[1]);
    }
    matches = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(userAgent);
    if (matches) {
      browserVersion = parseFloat(matches[1]);
    }
  }

  var isEdge = /Edge\/\d+/.test(userAgent);

  var hasCodeMirror = !!window.CodeMirror;
  if (!hasCodeMirror && isSupportAmd) {
    // Webpack
    if (typeof __webpack_require__ === 'function') { // jshint ignore:line
      try {
        // If CodeMirror can't be resolved, `require.resolve` will throw an
        // exception and `hasCodeMirror` won't be set to `true`.
        require.resolve('codemirror');
        hasCodeMirror = true;
      } catch (e) {
        // do nothing
      }
    } else if (typeof require !== 'undefined') {
      // Browserify
      if (typeof require.resolve !== 'undefined') {
        try {
          // If CodeMirror can't be resolved, `require.resolve` will throw an
          // exception and `hasCodeMirror` won't be set to `true`.
          require.resolve('codemirror');
          hasCodeMirror = true;
        } catch (e) {
          // do nothing
        }
      // Almond/Require
      } else if (typeof require.specified !== 'undefined') {
        hasCodeMirror = require.specified('codemirror');
      }
    }
  }

  var isSupportTouch =
    (('ontouchstart' in window) ||
     (navigator.MaxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));

  /**
   * @class core.agent
   *
   * Object which check platform and agent
   *
   * @singleton
   * @alternateClassName agent
   */
  var agent = {
    isMac: navigator.appVersion.indexOf('Mac') > -1,
    isMSIE: isMSIE,
    isEdge: isEdge,
    isFF: !isEdge && /firefox/i.test(userAgent),
    isPhantom: /PhantomJS/i.test(userAgent),
    isWebkit: !isEdge && /webkit/i.test(userAgent),
    isChrome: !isEdge && /chrome/i.test(userAgent),
    isSafari: !isEdge && /safari/i.test(userAgent),
    browserVersion: browserVersion,
    jqueryVersion: parseFloat($.fn.jquery),
    isSupportAmd: isSupportAmd,
    isSupportTouch: isSupportTouch,
    hasCodeMirror: hasCodeMirror,
    isFontInstalled: isFontInstalled,
    isW3CRangeSupport: !!document.createRange
  };

  /**
   * @class core.func
   *
   * func utils (for high-order func's arg)
   *
   * @singleton
   * @alternateClassName func
   */
  var func = (function () {
    var eq = function (itemA) {
      return function (itemB) {
        return itemA === itemB;
      };
    };

    var eq2 = function (itemA, itemB) {
      return itemA === itemB;
    };

    var peq2 = function (propName) {
      return function (itemA, itemB) {
        return itemA[propName] === itemB[propName];
      };
    };

    var ok = function () {
      return true;
    };

    var fail = function () {
      return false;
    };

    var not = function (f) {
      return function () {
        return !f.apply(f, arguments);
      };
    };

    var and = function (fA, fB) {
      return function (item) {
        return fA(item) && fB(item);
      };
    };

    var self = function (a) {
      return a;
    };

    var invoke = function (obj, method) {
      return function () {
        return obj[method].apply(obj, arguments);
      };
    };

    var idCounter = 0;

    /**
     * generate a globally-unique id
     *
     * @param {String} [prefix]
     */
    var uniqueId = function (prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
    };

    /**
     * returns bnd (bounds) from rect
     *
     * - IE Compatibility Issue: http://goo.gl/sRLOAo
     * - Scroll Issue: http://goo.gl/sNjUc
     *
     * @param {Rect} rect
     * @return {Object} bounds
     * @return {Number} bounds.top
     * @return {Number} bounds.left
     * @return {Number} bounds.width
     * @return {Number} bounds.height
     */
    var rect2bnd = function (rect) {
      var $document = $(document);
      return {
        top: rect.top + $document.scrollTop(),
        left: rect.left + $document.scrollLeft(),
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    };

    /**
     * returns a copy of the object where the keys have become the values and the values the keys.
     * @param {Object} obj
     * @return {Object}
     */
    var invertObject = function (obj) {
      var inverted = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          inverted[obj[key]] = key;
        }
      }
      return inverted;
    };

    /**
     * @param {String} namespace
     * @param {String} [prefix]
     * @return {String}
     */
    var namespaceToCamel = function (namespace, prefix) {
      prefix = prefix || '';
      return prefix + namespace.split('.').map(function (name) {
        return name.substring(0, 1).toUpperCase() + name.substring(1);
      }).join('');
    };

    /**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing.
     * @param {Function} func
     * @param {Number} wait
     * @param {Boolean} immediate
     * @return {Function}
     */
    var debounce = function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) {
            func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
          func.apply(context, args);
        }
      };
    };

    return {
      eq: eq,
      eq2: eq2,
      peq2: peq2,
      ok: ok,
      fail: fail,
      self: self,
      not: not,
      and: and,
      invoke: invoke,
      uniqueId: uniqueId,
      rect2bnd: rect2bnd,
      invertObject: invertObject,
      namespaceToCamel: namespaceToCamel,
      debounce: debounce
    };
  })();

  /**
   * @class core.list
   *
   * list utils
   *
   * @singleton
   * @alternateClassName list
   */
  var list = (function () {
    /**
     * returns the first item of an array.
     *
     * @param {Array} array
     */
    var head = function (array) {
      return array[0];
    };

    /**
     * returns the last item of an array.
     *
     * @param {Array} array
     */
    var last = function (array) {
      return array[array.length - 1];
    };

    /**
     * returns everything but the last entry of the array.
     *
     * @param {Array} array
     */
    var initial = function (array) {
      return array.slice(0, array.length - 1);
    };

    /**
     * returns the rest of the items in an array.
     *
     * @param {Array} array
     */
    var tail = function (array) {
      return array.slice(1);
    };

    /**
     * returns item of array
     */
    var find = function (array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        var item = array[idx];
        if (pred(item)) {
          return item;
        }
      }
    };

    /**
     * returns true if all of the values in the array pass the predicate truth test.
     */
    var all = function (array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (!pred(array[idx])) {
          return false;
        }
      }
      return true;
    };

    /**
     * returns index of item
     */
    var indexOf = function (array, item) {
      return $.inArray(item, array);
    };

    /**
     * returns true if the value is present in the list.
     */
    var contains = function (array, item) {
      return indexOf(array, item) !== -1;
    };

    /**
     * get sum from a list
     *
     * @param {Array} array - array
     * @param {Function} fn - iterator
     */
    var sum = function (array, fn) {
      fn = fn || func.self;
      return array.reduce(function (memo, v) {
        return memo + fn(v);
      }, 0);
    };
  
    /**
     * returns a copy of the collection with array type.
     * @param {Collection} collection - collection eg) node.childNodes, ...
     */
    var from = function (collection) {
      var result = [], idx = -1, length = collection.length;
      while (++idx < length) {
        result[idx] = collection[idx];
      }
      return result;
    };

    /**
     * returns whether list is empty or not
     */
    var isEmpty = function (array) {
      return !array || !array.length;
    };
  
    /**
     * cluster elements by predicate function.
     *
     * @param {Array} array - array
     * @param {Function} fn - predicate function for cluster rule
     * @param {Array[]}
     */
    var clusterBy = function (array, fn) {
      if (!array.length) { return []; }
      var aTail = tail(array);
      return aTail.reduce(function (memo, v) {
        var aLast = last(memo);
        if (fn(last(aLast), v)) {
          aLast[aLast.length] = v;
        } else {
          memo[memo.length] = [v];
        }
        return memo;
      }, [[head(array)]]);
    };
  
    /**
     * returns a copy of the array with all false values removed
     *
     * @param {Array} array - array
     * @param {Function} fn - predicate function for cluster rule
     */
    var compact = function (array) {
      var aResult = [];
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (array[idx]) { aResult.push(array[idx]); }
      }
      return aResult;
    };

    /**
     * produces a duplicate-free version of the array
     *
     * @param {Array} array
     */
    var unique = function (array) {
      var results = [];

      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (!contains(results, array[idx])) {
          results.push(array[idx]);
        }
      }

      return results;
    };

    /**
     * returns next item.
     * @param {Array} array
     */
    var next = function (array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) { return null; }

      return array[idx + 1];
    };

    /**
     * returns prev item.
     * @param {Array} array
     */
    var prev = function (array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) { return null; }

      return array[idx - 1];
    };

    return { head: head, last: last, initial: initial, tail: tail,
             prev: prev, next: next, find: find, contains: contains,
             all: all, sum: sum, from: from, isEmpty: isEmpty,
             clusterBy: clusterBy, compact: compact, unique: unique };
  })();


  var NBSP_CHAR = String.fromCharCode(160);
  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';

  /**
   * @class core.dom
   *
   * Dom functions
   *
   * @singleton
   * @alternateClassName dom
   */
  var dom = (function () {
    /**
     * @method isEditable
     *
     * returns whether node is `note-editable` or not.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    var isEditable = function (node) {
      return node && $(node).hasClass('note-editable');
    };

    /**
     * @method isControlSizing
     *
     * returns whether node is `note-control-sizing` or not.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    var isControlSizing = function (node) {
      return node && $(node).hasClass('note-control-sizing');
    };

    /**
     * @method makePredByNodeName
     *
     * returns predicate which judge whether nodeName is same
     *
     * @param {String} nodeName
     * @return {Function}
     */
    var makePredByNodeName = function (nodeName) {
      nodeName = nodeName.toUpperCase();
      return function (node) {
        return node && node.nodeName.toUpperCase() === nodeName;
      };
    };

    /**
     * @method isText
     *
     *
     *
     * @param {Node} node
     * @return {Boolean} true if node's type is text(3)
     */
    var isText = function (node) {
      return node && node.nodeType === 3;
    };

    /**
     * @method isElement
     *
     *
     *
     * @param {Node} node
     * @return {Boolean} true if node's type is element(1)
     */
    var isElement = function (node) {
      return node && node.nodeType === 1;
    };

    /**
     * ex) br, col, embed, hr, img, input, ...
     * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
     */
    var isVoid = function (node) {
      return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT/.test(node.nodeName.toUpperCase());
    };

    var isPara = function (node) {
      if (isEditable(node)) {
        return false;
      }

      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
    };

    var isHeading = function (node) {
      return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
    };

    var isPre = makePredByNodeName('PRE');

    var isLi = makePredByNodeName('LI');

    var isPurePara = function (node) {
      return isPara(node) && !isLi(node);
    };

    var isTable = makePredByNodeName('TABLE');

    var isData = makePredByNodeName('DATA');

    var isInline = function (node) {
      return !isBodyContainer(node) &&
             !isList(node) &&
             !isHr(node) &&
             !isPara(node) &&
             !isTable(node) &&
             !isBlockquote(node) &&
             !isData(node);
    };

    var isList = function (node) {
      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
    };

    var isHr = makePredByNodeName('HR');

    var isCell = function (node) {
      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
    };

    var isBlockquote = makePredByNodeName('BLOCKQUOTE');

    var isBodyContainer = function (node) {
      return isCell(node) || isBlockquote(node) || isEditable(node);
    };

    var isAnchor = makePredByNodeName('A');

    var isParaInline = function (node) {
      return isInline(node) && !!ancestor(node, isPara);
    };

    var isBodyInline = function (node) {
      return isInline(node) && !ancestor(node, isPara);
    };

    var isBody = makePredByNodeName('BODY');

    /**
     * returns whether nodeB is closest sibling of nodeA
     *
     * @param {Node} nodeA
     * @param {Node} nodeB
     * @return {Boolean}
     */
    var isClosestSibling = function (nodeA, nodeB) {
      return nodeA.nextSibling === nodeB ||
             nodeA.previousSibling === nodeB;
    };

    /**
     * returns array of closest siblings with node
     *
     * @param {Node} node
     * @param {function} [pred] - predicate function
     * @return {Node[]}
     */
    var withClosestSiblings = function (node, pred) {
      pred = pred || func.ok;

      var siblings = [];
      if (node.previousSibling && pred(node.previousSibling)) {
        siblings.push(node.previousSibling);
      }
      siblings.push(node);
      if (node.nextSibling && pred(node.nextSibling)) {
        siblings.push(node.nextSibling);
      }
      return siblings;
    };

    /**
     * blank HTML for cursor position
     * - [workaround] old IE only works with &nbsp;
     * - [workaround] IE11 and other browser works with bogus br
     */
    var blankHTML = agent.isMSIE && agent.browserVersion < 11 ? '&nbsp;' : '<br>';

    /**
     * @method nodeLength
     *
     * returns #text's text size or element's childNodes size
     *
     * @param {Node} node
     */
    var nodeLength = function (node) {
      if (isText(node)) {
        return node.nodeValue.length;
      }
      
      if (node) {
        return node.childNodes.length;
      }
      
      return 0;
      
    };

    /**
     * returns whether node is empty or not.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    var isEmpty = function (node) {
      var len = nodeLength(node);

      if (len === 0) {
        return true;
      } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
        // ex) <p><br></p>, <span><br></span>
        return true;
      } else if (list.all(node.childNodes, isText) && node.innerHTML === '') {
        // ex) <p></p>, <span></span>
        return true;
      }

      return false;
    };

    /**
     * padding blankHTML if node is empty (for cursor position)
     */
    var paddingBlankHTML = function (node) {
      if (!isVoid(node) && !nodeLength(node)) {
        node.innerHTML = blankHTML;
      }
    };

    /**
     * find nearest ancestor predicate hit
     *
     * @param {Node} node
     * @param {Function} pred - predicate function
     */
    var ancestor = function (node, pred) {
      while (node) {
        if (pred(node)) { return node; }
        if (isEditable(node)) { break; }

        node = node.parentNode;
      }
      return null;
    };

    /**
     * find nearest ancestor only single child blood line and predicate hit
     *
     * @param {Node} node
     * @param {Function} pred - predicate function
     */
    var singleChildAncestor = function (node, pred) {
      node = node.parentNode;

      while (node) {
        if (nodeLength(node) !== 1) { break; }
        if (pred(node)) { return node; }
        if (isEditable(node)) { break; }

        node = node.parentNode;
      }
      return null;
    };

    /**
     * returns new array of ancestor nodes (until predicate hit).
     *
     * @param {Node} node
     * @param {Function} [optional] pred - predicate function
     */
    var listAncestor = function (node, pred) {
      pred = pred || func.fail;

      var ancestors = [];
      ancestor(node, function (el) {
        if (!isEditable(el)) {
          ancestors.push(el);
        }

        return pred(el);
      });
      return ancestors;
    };

    /**
     * find farthest ancestor predicate hit
     */
    var lastAncestor = function (node, pred) {
      var ancestors = listAncestor(node);
      return list.last(ancestors.filter(pred));
    };

    /**
     * returns common ancestor node between two nodes.
     *
     * @param {Node} nodeA
     * @param {Node} nodeB
     */
    var commonAncestor = function (nodeA, nodeB) {
      var ancestors = listAncestor(nodeA);
      for (var n = nodeB; n; n = n.parentNode) {
        if ($.inArray(n, ancestors) > -1) { return n; }
      }
      return null; // difference document area
    };

    /**
     * listing all previous siblings (until predicate hit).
     *
     * @param {Node} node
     * @param {Function} [optional] pred - predicate function
     */
    var listPrev = function (node, pred) {
      pred = pred || func.fail;

      var nodes = [];
      while (node) {
        if (pred(node)) { break; }
        nodes.push(node);
        node = node.previousSibling;
      }
      return nodes;
    };

    /**
     * listing next siblings (until predicate hit).
     *
     * @param {Node} node
     * @param {Function} [pred] - predicate function
     */
    var listNext = function (node, pred) {
      pred = pred || func.fail;

      var nodes = [];
      while (node) {
        if (pred(node)) { break; }
        nodes.push(node);
        node = node.nextSibling;
      }
      return nodes;
    };

    /**
     * listing descendant nodes
     *
     * @param {Node} node
     * @param {Function} [pred] - predicate function
     */
    var listDescendant = function (node, pred) {
      var descendants = [];
      pred = pred || func.ok;

      // start DFS(depth first search) with node
      (function fnWalk(current) {
        if (node !== current && pred(current)) {
          descendants.push(current);
        }
        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
          fnWalk(current.childNodes[idx]);
        }
      })(node);

      return descendants;
    };

    /**
     * wrap node with new tag.
     *
     * @param {Node} node
     * @param {Node} tagName of wrapper
     * @return {Node} - wrapper
     */
    var wrap = function (node, wrapperName) {
      var parent = node.parentNode;
      var wrapper = $('<' + wrapperName + '>')[0];

      parent.insertBefore(wrapper, node);
      wrapper.appendChild(node);

      return wrapper;
    };

    /**
     * insert node after preceding
     *
     * @param {Node} node
     * @param {Node} preceding - predicate function
     */
    var insertAfter = function (node, preceding) {
      var next = preceding.nextSibling, parent = preceding.parentNode;
      if (next) {
        parent.insertBefore(node, next);
      } else {
        parent.appendChild(node);
      }
      return node;
    };

    /**
     * append elements.
     *
     * @param {Node} node
     * @param {Collection} aChild
     */
    var appendChildNodes = function (node, aChild) {
      $.each(aChild, function (idx, child) {
        node.appendChild(child);
      });
      return node;
    };

    /**
     * returns whether boundaryPoint is left edge or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isLeftEdgePoint = function (point) {
      return point.offset === 0;
    };

    /**
     * returns whether boundaryPoint is right edge or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isRightEdgePoint = function (point) {
      return point.offset === nodeLength(point.node);
    };

    /**
     * returns whether boundaryPoint is edge or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isEdgePoint = function (point) {
      return isLeftEdgePoint(point) || isRightEdgePoint(point);
    };

    /**
     * returns whether node is left edge of ancestor or not.
     *
     * @param {Node} node
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isLeftEdgeOf = function (node, ancestor) {
      while (node && node !== ancestor) {
        if (position(node) !== 0) {
          return false;
        }
        node = node.parentNode;
      }

      return true;
    };

    /**
     * returns whether node is right edge of ancestor or not.
     *
     * @param {Node} node
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isRightEdgeOf = function (node, ancestor) {
      if (!ancestor) {
        return false;
      }
      while (node && node !== ancestor) {
        if (position(node) !== nodeLength(node.parentNode) - 1) {
          return false;
        }
        node = node.parentNode;
      }

      return true;
    };

    /**
     * returns whether point is left edge of ancestor or not.
     * @param {BoundaryPoint} point
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isLeftEdgePointOf = function (point, ancestor) {
      return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
    };

    /**
     * returns whether point is right edge of ancestor or not.
     * @param {BoundaryPoint} point
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isRightEdgePointOf = function (point, ancestor) {
      return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
    };

    /**
     * returns offset from parent.
     *
     * @param {Node} node
     */
    var position = function (node) {
      var offset = 0;
      while ((node = node.previousSibling)) {
        offset += 1;
      }
      return offset;
    };

    var hasChildren = function (node) {
      return !!(node && node.childNodes && node.childNodes.length);
    };

    /**
     * returns previous boundaryPoint
     *
     * @param {BoundaryPoint} point
     * @param {Boolean} isSkipInnerOffset
     * @return {BoundaryPoint}
     */
    var prevPoint = function (point, isSkipInnerOffset) {
      var node, offset;

      if (point.offset === 0) {
        if (isEditable(point.node)) {
          return null;
        }

        node = point.node.parentNode;
        offset = position(point.node);
      } else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset - 1];
        offset = nodeLength(node);
      } else {
        node = point.node;
        offset = isSkipInnerOffset ? 0 : point.offset - 1;
      }

      return {
        node: node,
        offset: offset
      };
    };

    /**
     * returns next boundaryPoint
     *
     * @param {BoundaryPoint} point
     * @param {Boolean} isSkipInnerOffset
     * @return {BoundaryPoint}
     */
    var nextPoint = function (point, isSkipInnerOffset) {
      var node, offset;

      if (nodeLength(point.node) === point.offset) {
        if (isEditable(point.node)) {
          return null;
        }

        node = point.node.parentNode;
        offset = position(point.node) + 1;
      } else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset];
        offset = 0;
      } else {
        node = point.node;
        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
      }

      return {
        node: node,
        offset: offset
      };
    };

    /**
     * returns whether pointA and pointB is same or not.
     *
     * @param {BoundaryPoint} pointA
     * @param {BoundaryPoint} pointB
     * @return {Boolean}
     */
    var isSamePoint = function (pointA, pointB) {
      return pointA.node === pointB.node && pointA.offset === pointB.offset;
    };

    /**
     * returns whether point is visible (can set cursor) or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isVisiblePoint = function (point) {
      if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {
        return true;
      }

      var leftNode = point.node.childNodes[point.offset - 1];
      var rightNode = point.node.childNodes[point.offset];
      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
        return true;
      }

      return false;
    };

    /**
     * @method prevPointUtil
     *
     * @param {BoundaryPoint} point
     * @param {Function} pred
     * @return {BoundaryPoint}
     */
    var prevPointUntil = function (point, pred) {
      while (point) {
        if (pred(point)) {
          return point;
        }

        point = prevPoint(point);
      }

      return null;
    };

    /**
     * @method nextPointUntil
     *
     * @param {BoundaryPoint} point
     * @param {Function} pred
     * @return {BoundaryPoint}
     */
    var nextPointUntil = function (point, pred) {
      while (point) {
        if (pred(point)) {
          return point;
        }

        point = nextPoint(point);
      }

      return null;
    };

    /**
     * returns whether point has character or not.
     *
     * @param {Point} point
     * @return {Boolean}
     */
    var isCharPoint = function (point) {
      if (!isText(point.node)) {
        return false;
      }

      var ch = point.node.nodeValue.charAt(point.offset - 1);
      return ch && (ch !== ' ' && ch !== NBSP_CHAR);
    };

    /**
     * @method walkPoint
     *
     * @param {BoundaryPoint} startPoint
     * @param {BoundaryPoint} endPoint
     * @param {Function} handler
     * @param {Boolean} isSkipInnerOffset
     */
    var walkPoint = function (startPoint, endPoint, handler, isSkipInnerOffset) {
      var point = startPoint;

      while (point) {
        handler(point);

        if (isSamePoint(point, endPoint)) {
          break;
        }

        var isSkipOffset = isSkipInnerOffset &&
                           startPoint.node !== point.node &&
                           endPoint.node !== point.node;
        point = nextPoint(point, isSkipOffset);
      }
    };

    /**
     * @method makeOffsetPath
     *
     * return offsetPath(array of offset) from ancestor
     *
     * @param {Node} ancestor - ancestor node
     * @param {Node} node
     */
    var makeOffsetPath = function (ancestor, node) {
      var ancestors = listAncestor(node, func.eq(ancestor));
      return ancestors.map(position).reverse();
    };

    /**
     * @method fromOffsetPath
     *
     * return element from offsetPath(array of offset)
     *
     * @param {Node} ancestor - ancestor node
     * @param {array} offsets - offsetPath
     */
    var fromOffsetPath = function (ancestor, offsets) {
      var current = ancestor;
      for (var i = 0, len = offsets.length; i < len; i++) {
        if (current.childNodes.length <= offsets[i]) {
          current = current.childNodes[current.childNodes.length - 1];
        } else {
          current = current.childNodes[offsets[i]];
        }
      }
      return current;
    };

    /**
     * @method splitNode
     *
     * split element or #text
     *
     * @param {BoundaryPoint} point
     * @param {Object} [options]
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
     * @return {Node} right node of boundaryPoint
     */
    var splitNode = function (point, options) {
      var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
      var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;

      // edge case
      if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
        if (isLeftEdgePoint(point)) {
          return point.node;
        } else if (isRightEdgePoint(point)) {
          return point.node.nextSibling;
        }
      }

      // split #text
      if (isText(point.node)) {
        return point.node.splitText(point.offset);
      } else {
        var childNode = point.node.childNodes[point.offset];
        var clone = insertAfter(point.node.cloneNode(false), point.node);
        appendChildNodes(clone, listNext(childNode));

        if (!isSkipPaddingBlankHTML) {
          paddingBlankHTML(point.node);
          paddingBlankHTML(clone);
        }

        return clone;
      }
    };

    /**
     * @method splitTree
     *
     * split tree by point
     *
     * @param {Node} root - split root
     * @param {BoundaryPoint} point
     * @param {Object} [options]
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
     * @return {Node} right node of boundaryPoint
     */
    var splitTree = function (root, point, options) {
      // ex) [#text, <span>, <p>]
      var ancestors = listAncestor(point.node, func.eq(root));

      if (!ancestors.length) {
        return null;
      } else if (ancestors.length === 1) {
        return splitNode(point, options);
      }

      return ancestors.reduce(function (node, parent) {
        if (node === point.node) {
          node = splitNode(point, options);
        }

        return splitNode({
          node: parent,
          offset: node ? dom.position(node) : nodeLength(parent)
        }, options);
      });
    };

    /**
     * split point
     *
     * @param {Point} point
     * @param {Boolean} isInline
     * @return {Object}
     */
    var splitPoint = function (point, isInline) {
      // find splitRoot, container
      //  - inline: splitRoot is a child of paragraph
      //  - block: splitRoot is a child of bodyContainer
      var pred = isInline ? isPara : isBodyContainer;
      var ancestors = listAncestor(point.node, pred);
      var topAncestor = list.last(ancestors) || point.node;

      var splitRoot, container;
      if (pred(topAncestor)) {
        splitRoot = ancestors[ancestors.length - 2];
        container = topAncestor;
      } else {
        splitRoot = topAncestor;
        container = splitRoot.parentNode;
      }

      // if splitRoot is exists, split with splitTree
      var pivot = splitRoot && splitTree(splitRoot, point, {
        isSkipPaddingBlankHTML: isInline,
        isNotSplitEdgePoint: isInline
      });

      // if container is point.node, find pivot with point.offset
      if (!pivot && container === point.node) {
        pivot = point.node.childNodes[point.offset];
      }

      return {
        rightNode: pivot,
        container: container
      };
    };

    var create = function (nodeName) {
      return document.createElement(nodeName);
    };

    var createText = function (text) {
      return document.createTextNode(text);
    };

    /**
     * @method remove
     *
     * remove node, (isRemoveChild: remove child or not)
     *
     * @param {Node} node
     * @param {Boolean} isRemoveChild
     */
    var remove = function (node, isRemoveChild) {
      if (!node || !node.parentNode) { return; }
      if (node.removeNode) { return node.removeNode(isRemoveChild); }

      var parent = node.parentNode;
      if (!isRemoveChild) {
        var nodes = [];
        var i, len;
        for (i = 0, len = node.childNodes.length; i < len; i++) {
          nodes.push(node.childNodes[i]);
        }

        for (i = 0, len = nodes.length; i < len; i++) {
          parent.insertBefore(nodes[i], node);
        }
      }

      parent.removeChild(node);
    };

    /**
     * @method removeWhile
     *
     * @param {Node} node
     * @param {Function} pred
     */
    var removeWhile = function (node, pred) {
      while (node) {
        if (isEditable(node) || !pred(node)) {
          break;
        }

        var parent = node.parentNode;
        remove(node);
        node = parent;
      }
    };

    /**
     * @method replace
     *
     * replace node with provided nodeName
     *
     * @param {Node} node
     * @param {String} nodeName
     * @return {Node} - new node
     */
    var replace = function (node, nodeName) {
      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
        return node;
      }

      var newNode = create(nodeName);

      if (node.style.cssText) {
        newNode.style.cssText = node.style.cssText;
      }

      appendChildNodes(newNode, list.from(node.childNodes));
      insertAfter(newNode, node);
      remove(node);

      return newNode;
    };

    var isTextarea = makePredByNodeName('TEXTAREA');

    /**
     * @param {jQuery} $node
     * @param {Boolean} [stripLinebreaks] - default: false
     */
    var value = function ($node, stripLinebreaks) {
      var val = isTextarea($node[0]) ? $node.val() : $node.html();
      if (stripLinebreaks) {
        return val.replace(/[\n\r]/g, '');
      }
      return val;
    };

    /**
     * @method html
     *
     * get the HTML contents of node
     *
     * @param {jQuery} $node
     * @param {Boolean} [isNewlineOnBlock]
     */
    var html = function ($node, isNewlineOnBlock) {
      var markup = value($node);

      if (isNewlineOnBlock) {
        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
        markup = markup.replace(regexTag, function (match, endSlash, name) {
          name = name.toUpperCase();
          var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
                                       !!endSlash;
          var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);

          return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
        });
        markup = $.trim(markup);
      }

      return markup;
    };

    var posFromPlaceholder = function (placeholder) {
      var $placeholder = $(placeholder);
      var pos = $placeholder.offset();
      var height = $placeholder.outerHeight(true); // include margin

      return {
        left: pos.left,
        top: pos.top + height
      };
    };

    var attachEvents = function ($node, events) {
      Object.keys(events).forEach(function (key) {
        $node.on(key, events[key]);
      });
    };

    var detachEvents = function ($node, events) {
      Object.keys(events).forEach(function (key) {
        $node.off(key, events[key]);
      });
    };

    /**
     * @method isCustomStyleTag
     *
     * assert if a node contains a "note-styletag" class,
     * which implies that's a custom-made style tag node
     *
     * @param {Node} an HTML DOM node
     */
    var isCustomStyleTag = function (node) {
      return node && !dom.isText(node) && list.contains(node.classList, 'note-styletag');
    };

    return {
      /** @property {String} NBSP_CHAR */
      NBSP_CHAR: NBSP_CHAR,
      /** @property {String} ZERO_WIDTH_NBSP_CHAR */
      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
      /** @property {String} blank */
      blank: blankHTML,
      /** @property {String} emptyPara */
      emptyPara: '<p>' + blankHTML + '</p>',
      makePredByNodeName: makePredByNodeName,
      isEditable: isEditable,
      isControlSizing: isControlSizing,
      isText: isText,
      isElement: isElement,
      isVoid: isVoid,
      isPara: isPara,
      isPurePara: isPurePara,
      isHeading: isHeading,
      isInline: isInline,
      isBlock: func.not(isInline),
      isBodyInline: isBodyInline,
      isBody: isBody,
      isParaInline: isParaInline,
      isPre: isPre,
      isList: isList,
      isTable: isTable,
      isData: isData,
      isCell: isCell,
      isBlockquote: isBlockquote,
      isBodyContainer: isBodyContainer,
      isAnchor: isAnchor,
      isDiv: makePredByNodeName('DIV'),
      isLi: isLi,
      isBR: makePredByNodeName('BR'),
      isSpan: makePredByNodeName('SPAN'),
      isB: makePredByNodeName('B'),
      isU: makePredByNodeName('U'),
      isS: makePredByNodeName('S'),
      isI: makePredByNodeName('I'),
      isImg: makePredByNodeName('IMG'),
      isTextarea: isTextarea,
      isEmpty: isEmpty,
      isEmptyAnchor: func.and(isAnchor, isEmpty),
      isClosestSibling: isClosestSibling,
      withClosestSiblings: withClosestSiblings,
      nodeLength: nodeLength,
      isLeftEdgePoint: isLeftEdgePoint,
      isRightEdgePoint: isRightEdgePoint,
      isEdgePoint: isEdgePoint,
      isLeftEdgeOf: isLeftEdgeOf,
      isRightEdgeOf: isRightEdgeOf,
      isLeftEdgePointOf: isLeftEdgePointOf,
      isRightEdgePointOf: isRightEdgePointOf,
      prevPoint: prevPoint,
      nextPoint: nextPoint,
      isSamePoint: isSamePoint,
      isVisiblePoint: isVisiblePoint,
      prevPointUntil: prevPointUntil,
      nextPointUntil: nextPointUntil,
      isCharPoint: isCharPoint,
      walkPoint: walkPoint,
      ancestor: ancestor,
      singleChildAncestor: singleChildAncestor,
      listAncestor: listAncestor,
      lastAncestor: lastAncestor,
      listNext: listNext,
      listPrev: listPrev,
      listDescendant: listDescendant,
      commonAncestor: commonAncestor,
      wrap: wrap,
      insertAfter: insertAfter,
      appendChildNodes: appendChildNodes,
      position: position,
      hasChildren: hasChildren,
      makeOffsetPath: makeOffsetPath,
      fromOffsetPath: fromOffsetPath,
      splitTree: splitTree,
      splitPoint: splitPoint,
      create: create,
      createText: createText,
      remove: remove,
      removeWhile: removeWhile,
      replace: replace,
      html: html,
      value: value,
      posFromPlaceholder: posFromPlaceholder,
      attachEvents: attachEvents,
      detachEvents: detachEvents,
      isCustomStyleTag: isCustomStyleTag
    };
  })();

  /**
   * @param {jQuery} $note
   * @param {Object} options
   * @return {Context}
   */
  var Context = function ($note, options) {
    var self = this;

    var ui = $.summernote.ui;
    this.memos = {};
    this.modules = {};
    this.layoutInfo = {};
    this.options = options;

    /**
     * create layout and initialize modules and other resources
     */
    this.initialize = function () {
      this.layoutInfo = ui.createLayout($note, options);
      this._initialize();
      $note.hide();
      return this;
    };

    /**
     * destroy modules and other resources and remove layout
     */
    this.destroy = function () {
      this._destroy();
      $note.removeData('summernote');
      ui.removeLayout($note, this.layoutInfo);
    };

    /**
     * destory modules and other resources and initialize it again
     */
    this.reset = function () {
      var disabled = self.isDisabled();
      this.code(dom.emptyPara);
      this._destroy();
      this._initialize();

      if (disabled) {
        self.disable();
      }
    };

    this._initialize = function () {
      // add optional buttons
      var buttons = $.extend({}, this.options.buttons);
      Object.keys(buttons).forEach(function (key) {
        self.memo('button.' + key, buttons[key]);
      });

      var modules = $.extend({}, this.options.modules, $.summernote.plugins || {});

      // add and initialize modules
      Object.keys(modules).forEach(function (key) {
        self.module(key, modules[key], true);
      });

      Object.keys(this.modules).forEach(function (key) {
        self.initializeModule(key);
      });
    };

    this._destroy = function () {
      // destroy modules with reversed order
      Object.keys(this.modules).reverse().forEach(function (key) {
        self.removeModule(key);
      });

      Object.keys(this.memos).forEach(function (key) {
        self.removeMemo(key);
      });
      // trigger custom onDestroy callback
      this.triggerEvent('destroy', this);
    };

    this.code = function (html) {
      var isActivated = this.invoke('codeview.isActivated');

      if (html === undefined) {
        this.invoke('codeview.sync');
        return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
      } else {
        if (isActivated) {
          this.layoutInfo.codable.val(html);
        } else {
          this.layoutInfo.editable.html(html);
        }
        $note.val(html);
        this.triggerEvent('change', html);
      }
    };

    this.isDisabled = function () {
      return this.layoutInfo.editable.attr('contenteditable') === 'false';
    };

    this.enable = function () {
      this.layoutInfo.editable.attr('contenteditable', true);
      this.invoke('toolbar.activate', true);
      this.triggerEvent('disable', false);
    };

    this.disable = function () {
      // close codeview if codeview is opend
      if (this.invoke('codeview.isActivated')) {
        this.invoke('codeview.deactivate');
      }
      this.layoutInfo.editable.attr('contenteditable', false);
      this.invoke('toolbar.deactivate', true);

      this.triggerEvent('disable', true);
    };

    this.triggerEvent = function () {
      var namespace = list.head(arguments);
      var args = list.tail(list.from(arguments));

      var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];
      if (callback) {
        callback.apply($note[0], args);
      }
      $note.trigger('summernote.' + namespace, args);
    };

    this.initializeModule = function (key) {
      var module = this.modules[key];
      module.shouldInitialize = module.shouldInitialize || func.ok;
      if (!module.shouldInitialize()) {
        return;
      }

      // initialize module
      if (module.initialize) {
        module.initialize();
      }

      // attach events
      if (module.events) {
        dom.attachEvents($note, module.events);
      }
    };

    this.module = function (key, ModuleClass, withoutIntialize) {
      if (arguments.length === 1) {
        return this.modules[key];
      }

      this.modules[key] = new ModuleClass(this);

      if (!withoutIntialize) {
        this.initializeModule(key);
      }
    };

    this.removeModule = function (key) {
      var module = this.modules[key];
      if (module.shouldInitialize()) {
        if (module.events) {
          dom.detachEvents($note, module.events);
        }

        if (module.destroy) {
          module.destroy();
        }
      }

      delete this.modules[key];
    };

    this.memo = function (key, obj) {
      if (arguments.length === 1) {
        return this.memos[key];
      }
      this.memos[key] = obj;
    };

    this.removeMemo = function (key) {
      if (this.memos[key] && this.memos[key].destroy) {
        this.memos[key].destroy();
      }

      delete this.memos[key];
    };

    /**
     *Some buttons need to change their visual style immediately once they get pressed
     */
    this.createInvokeHandlerAndUpdateState = function (namespace, value) {
      return function (event) {
        self.createInvokeHandler(namespace, value)(event);
        self.invoke('buttons.updateCurrentStyle');
      };
    };

    this.createInvokeHandler = function (namespace, value) {
      return function (event) {
        event.preventDefault();
        var $target = $(event.target);
        self.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
      };
    };

    this.invoke = function () {
      var namespace = list.head(arguments);
      var args = list.tail(list.from(arguments));

      var splits = namespace.split('.');
      var hasSeparator = splits.length > 1;
      var moduleName = hasSeparator && list.head(splits);
      var methodName = hasSeparator ? list.last(splits) : list.head(splits);

      var module = this.modules[moduleName || 'editor'];
      if (!moduleName && this[methodName]) {
        return this[methodName].apply(this, args);
      } else if (module && module[methodName] && module.shouldInitialize()) {
        return module[methodName].apply(module, args);
      }
    };

    return this.initialize();
  };

  $.fn.extend({
    /**
     * Summernote API
     *
     * @param {Object|String}
     * @return {this}
     */
    summernote: function () {
      var type = $.type(list.head(arguments));
      var isExternalAPICalled = type === 'string';
      var hasInitOptions = type === 'object';

      var options = hasInitOptions ? list.head(arguments) : {};

      options = $.extend({}, $.summernote.options, options);

      // Update options
      options.langInfo = $.extend(true, {}, $.summernote.lang['en-US'], $.summernote.lang[options.lang]);
      options.icons = $.extend(true, {}, $.summernote.options.icons, options.icons);
      options.tooltip = options.tooltip === 'auto' ? !agent.isSupportTouch : options.tooltip;

      this.each(function (idx, note) {
        var $note = $(note);
        if (!$note.data('summernote')) {
          var context = new Context($note, options);
          $note.data('summernote', context);
          $note.data('summernote').triggerEvent('init', context.layoutInfo);
        }
      });

      var $note = this.first();
      if ($note.length) {
        var context = $note.data('summernote');
        if (isExternalAPICalled) {
          return context.invoke.apply(context, list.from(arguments));
        } else if (options.focus) {
          context.invoke('editor.focus');
        }
      }

      return this;
    }
  });


  var Renderer = function (markup, children, options, callback) {
    this.render = function ($parent) {
      var $node = $(markup);

      if (options && options.contents) {
        $node.html(options.contents);
      }

      if (options && options.className) {
        $node.addClass(options.className);
      }

      if (options && options.data) {
        $.each(options.data, function (k, v) {
          $node.attr('data-' + k, v);
        });
      }

      if (options && options.click) {
        $node.on('click', options.click);
      }

      if (children) {
        var $container = $node.find('.note-children-container');
        children.forEach(function (child) {
          child.render($container.length ? $container : $node);
        });
      }

      if (callback) {
        callback($node, options);
      }

      if (options && options.callback) {
        options.callback($node);
      }

      if ($parent) {
        $parent.append($node);
      }

      return $node;
    };
  };

  var renderer = {
    create: function (markup, callback) {
      return function () {
        var children = $.isArray(arguments[0]) ? arguments[0] : [];
        var options = typeof arguments[1] === 'object' ? arguments[1] : arguments[0];
        if (options && options.children) {
          children = options.children;
        }
        return new Renderer(markup, children, options, callback);
      };
    }
  };

  var editor = renderer.create('<div class="note-editor note-frame"/>');
  var toolbar = renderer.create('<div class="note-toolbar card-header"/>');
  var editingArea = renderer.create('<div class="note-editing-area"/>');
  var codable = renderer.create('<textarea class="note-codable"/>');
  var editable = renderer.create('<div class="note-editable card-block" contentEditable="true"/>');
  var statusbar = renderer.create([
    '<div class="note-statusbar">',
    '  <div class="note-resizebar">',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '  </div>',
    '</div>'
  ].join(''));

  var airEditor = renderer.create('<div class="note-editor"/>');
  var airEditable = renderer.create('<div class="note-editable" contentEditable="true"/>');

  var buttonGroup = renderer.create('<div class="note-btn-group btn-group">');

  var dropdown = renderer.create('<div class="dropdown-menu">', function ($node, options) {
    var markup = $.isArray(options.items) ? options.items.map(function (item) {
      var value = (typeof item === 'string') ? item : (item.value || '');
      var content = options.template ? options.template(item) : item;
      var option = (typeof item === 'object') ? item.option : undefined;

      var dataValue = 'data-value="' + value + '"';
      var dataOption = (option !== undefined) ? ' data-option="' + option + '"' : '';
      return '<a class="dropdown-item" href="#" ' + (dataValue + dataOption) + '>' + content + '</a>';
    }).join('') : options.items;

    $node.html(markup);
  });

  var dropdownButtonContents = function (contents) {
    return contents;
  };

  var dropdownCheck = renderer.create('<div class="dropdown-menu note-check">', function ($node, options) {
    var markup = $.isArray(options.items) ? options.items.map(function (item) {
      var value = (typeof item === 'string') ? item : (item.value || '');
      var content = options.template ? options.template(item) : item;
      return '<a class="dropdown-item" href="#" data-value="' + value + '">' + icon(options.checkClassName) + ' ' + content + '</a>';
    }).join('') : options.items;
    $node.html(markup);
  });

  var palette = renderer.create('<div class="note-color-palette"/>', function ($node, options) {
    var contents = [];
    for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
      var eventName = options.eventName;
      var colors = options.colors[row];
      var buttons = [];
      for (var col = 0, colSize = colors.length; col < colSize; col++) {
        var color = colors[col];
        buttons.push([
          '<button type="button" class="note-color-btn"',
          'style="background-color:', color, '" ',
          'data-event="', eventName, '" ',
          'data-value="', color, '" ',
          'title="', color, '" ',
          'data-toggle="button" tabindex="-1"></button>'
        ].join(''));
      }
      contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
    }
    $node.html(contents.join(''));

    if (options.tooltip) {
      $node.find('.note-color-btn').tooltip({
        container: 'body',
        trigger: 'hover',
        placement: 'bottom'
      });
    }
  });

  var dialog = renderer.create('<div class="modal" aria-hidden="false" tabindex="-1"/>', function ($node, options) {
    if (options.fade) {
      $node.addClass('fade');
    }
    $node.html([
      '<div class="modal-dialog">',
      '  <div class="modal-content">',
      (options.title ?
      '    <div class="modal-header">' +
      '      <h4 class="modal-title">' + options.title + '</h4>' +
      '      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
      '    </div>' : ''
      ),
      '    <div class="modal-body">' + options.body + '</div>',
      (options.footer ?
      '    <div class="modal-footer">' + options.footer + '</div>' : ''
      ),
      '  </div>',
      '</div>'
    ].join(''));
  });

  var popover = renderer.create([
    '<div class="note-popover popover in">',
    '  <div class="arrow"/>',
    '  <div class="popover-content note-children-container"/>',
    '</div>'
  ].join(''), function ($node, options) {
    var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';

    $node.addClass(direction);

    if (options.hideArrow) {
      $node.find('.arrow').hide();
    }
  });

  var checkbox = renderer.create('<label class="custom-control custom-checkbox"></label>', function ($node, options) {
      if (options.id) {
          $node.attr('for', options.id);
      }
      $node.html([
          ' <input type="checkbox" class="custom-control-input"' + (options.id ? ' id="' + options.id + '"' : ''),
          (options.checked ? ' checked' : '') + '/>',
          ' <span class="custom-control-indicator"></span>',
          ' <span class="custom-control-description">' + (options.text ? options.text : '') + '</span>',
          '</label>'
      ].join(''));
  });

  var icon = function (iconClassName, tagName) {
    tagName = tagName || 'i';
    return '<' + tagName + ' class="' + iconClassName + '"/>';
  };

  var ui = {
    editor: editor,
    toolbar: toolbar,
    editingArea: editingArea,
    codable: codable,
    editable: editable,
    statusbar: statusbar,
    airEditor: airEditor,
    airEditable: airEditable,
    buttonGroup: buttonGroup,
    dropdown: dropdown,
    dropdownButtonContents: dropdownButtonContents,
    dropdownCheck: dropdownCheck,
    palette: palette,
    dialog: dialog,
    popover: popover,
    icon: icon,
    checkbox:checkbox,
    options: {},

    button: function ($node, options) {
      return renderer.create('<button type="button" class="note-btn btn btn-light btn-sm" tabindex="-1">', function ($node, options) {
        if (options && options.tooltip && self.options.tooltip) {
          $node.attr({
            title: options.tooltip
          }).tooltip({
            container: 'body',
            trigger: 'hover',
            placement: 'bottom'
          });
        }
      })($node, options);
    },

    toggleBtn: function ($btn, isEnable) {
      $btn.toggleClass('disabled', !isEnable);
      $btn.attr('disabled', !isEnable);
    },

    toggleBtnActive: function ($btn, isActive) {
      $btn.toggleClass('active', isActive);
    },

    onDialogShown: function ($dialog, handler) {
      $dialog.one('shown.bs.modal', handler);
    },

    onDialogHidden: function ($dialog, handler) {
      $dialog.one('hidden.bs.modal', handler);
    },

    showDialog: function ($dialog) {
      $dialog.modal('show');
    },

    hideDialog: function ($dialog) {
      $dialog.modal('hide');
    },

    createLayout: function ($note, options) {
      self.options = options;
      var $editor = (options.airMode ? ui.airEditor([
        ui.editingArea([
          ui.airEditable()
        ])
      ]) : ui.editor([
        ui.toolbar(),
        ui.editingArea([
          ui.codable(),
          ui.editable()
        ]),
        ui.statusbar()
      ])).render();

      $editor.insertAfter($note);

      return {
        note: $note,
        editor: $editor,
        toolbar: $editor.find('.note-toolbar'),
        editingArea: $editor.find('.note-editing-area'),
        editable: $editor.find('.note-editable'),
        codable: $editor.find('.note-codable'),
        statusbar: $editor.find('.note-statusbar')
      };
    },

    removeLayout: function ($note, layoutInfo) {
      $note.html(layoutInfo.editable.html());
      layoutInfo.editor.remove();
      $note.show();
    }
  };

  $.summernote = $.summernote || {
    lang: {}
  };

  $.extend($.summernote.lang, {
    'en-US': {
      font: {
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        clear: 'Remove Font Style',
        height: 'Line Height',
        name: 'Font Family',
        strikethrough: 'Strikethrough',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Font Size'
      },
      image: {
        image: 'Picture',
        insert: 'Insert Image',
        resizeFull: 'Resize Full',
        resizeHalf: 'Resize Half',
        resizeQuarter: 'Resize Quarter',
        floatLeft: 'Float Left',
        floatRight: 'Float Right',
        floatNone: 'Float None',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Drag image or text here',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Select from files',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'Image URL',
        remove: 'Remove Image'
      },
      video: {
        video: 'Video',
        videoLink: 'Video Link',
        insert: 'Insert Video',
        url: 'Video URL?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Insert Link',
        unlink: 'Unlink',
        edit: 'Edit',
        textToDisplay: 'Text to display',
        url: 'To what URL should this link go?',
        openInNewWindow: 'Open in new window'
      },
      table: {
        table: 'Table',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Insert Horizontal Rule'
      },
      style: {
        style: 'Style',
        p: 'Normal',
        blockquote: 'Quote',
        pre: 'Code',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6'
      },
      lists: {
        unordered: 'Unordered list',
        ordered: 'Ordered list'
      },
      options: {
        help: 'Help',
        fullscreen: 'Full Screen',
        codeview: 'Code View'
      },
      paragraph: {
        paragraph: 'Paragraph',
        outdent: 'Outdent',
        indent: 'Indent',
        left: 'Align left',
        center: 'Align center',
        right: 'Align right',
        justify: 'Justify full'
      },
      color: {
        recent: 'Recent Color',
        more: 'More Color',
        background: 'Background Color',
        foreground: 'Foreground Color',
        transparent: 'Transparent',
        setTransparent: 'Set transparent',
        reset: 'Reset',
        resetToDefault: 'Reset to default'
      },
      shortcut: {
        shortcuts: 'Keyboard shortcuts',
        close: 'Close',
        textFormatting: 'Text formatting',
        action: 'Action',
        paragraphFormatting: 'Paragraph formatting',
        documentStyle: 'Document Style',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Set a bold style',
        'italic': 'Set a italic style',
        'underline': 'Set a underline style',
        'strikethrough': 'Set a strikethrough style',
        'removeFormat': 'Clean a style',
        'justifyLeft': 'Set left align',
        'justifyCenter': 'Set center align',
        'justifyRight': 'Set right align',
        'justifyFull': 'Set full align',
        'insertUnorderedList': 'Toggle unordered list',
        'insertOrderedList': 'Toggle ordered list',
        'outdent': 'Outdent on current paragraph',
        'indent': 'Indent on current paragraph',
        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
        'formatH1': 'Change current block\'s format as H1',
        'formatH2': 'Change current block\'s format as H2',
        'formatH3': 'Change current block\'s format as H3',
        'formatH4': 'Change current block\'s format as H4',
        'formatH5': 'Change current block\'s format as H5',
        'formatH6': 'Change current block\'s format as H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'Show Link Dialog'
      },
      history: {
        undo: 'Undo',
        redo: 'Redo'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
      }
    }
  });


  /**
   * @class core.key
   *
   * Object for keycodes.
   *
   * @singleton
   * @alternateClassName key
   */
  var key = (function () {
    var keyMap = {
      'BACKSPACE': 8,
      'TAB': 9,
      'ENTER': 13,
      'SPACE': 32,
      'DELETE': 46,

      // Arrow
      'LEFT': 37,
      'UP': 38,
      'RIGHT': 39,
      'DOWN': 40,

      // Number: 0-9
      'NUM0': 48,
      'NUM1': 49,
      'NUM2': 50,
      'NUM3': 51,
      'NUM4': 52,
      'NUM5': 53,
      'NUM6': 54,
      'NUM7': 55,
      'NUM8': 56,

      // Alphabet: a-z
      'B': 66,
      'E': 69,
      'I': 73,
      'J': 74,
      'K': 75,
      'L': 76,
      'R': 82,
      'S': 83,
      'U': 85,
      'V': 86,
      'Y': 89,
      'Z': 90,

      'SLASH': 191,
      'LEFTBRACKET': 219,
      'BACKSLASH': 220,
      'RIGHTBRACKET': 221
    };

    return {
      /**
       * @method isEdit
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isEdit: function (keyCode) {
        return list.contains([
          keyMap.BACKSPACE,
          keyMap.TAB,
          keyMap.ENTER,
          keyMap.SPACE,
          keyMap.DELETE
        ], keyCode);
      },
      /**
       * @method isMove
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isMove: function (keyCode) {
        return list.contains([
          keyMap.LEFT,
          keyMap.UP,
          keyMap.RIGHT,
          keyMap.DOWN
        ], keyCode);
      },
      /**
       * @property {Object} nameFromCode
       * @property {String} nameFromCode.8 "BACKSPACE"
       */
      nameFromCode: func.invertObject(keyMap),
      code: keyMap
    };
  })();

  var range = (function () {

    /**
     * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
     *
     * @param {TextRange} textRange
     * @param {Boolean} isStart
     * @return {BoundaryPoint}
     *
     * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
     */
    var textRangeToPoint = function (textRange, isStart) {
      var container = textRange.parentElement(), offset;
  
      var tester = document.body.createTextRange(), prevContainer;
      var childNodes = list.from(container.childNodes);
      for (offset = 0; offset < childNodes.length; offset++) {
        if (dom.isText(childNodes[offset])) {
          continue;
        }
        tester.moveToElementText(childNodes[offset]);
        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
          break;
        }
        prevContainer = childNodes[offset];
      }
  
      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
        var textRangeStart = document.body.createTextRange(), curTextNode = null;
        textRangeStart.moveToElementText(prevContainer || container);
        textRangeStart.collapse(!prevContainer);
        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
  
        var pointTester = textRange.duplicate();
        pointTester.setEndPoint('StartToStart', textRangeStart);
        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
  
        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
          textCount -= curTextNode.nodeValue.length;
          curTextNode = curTextNode.nextSibling;
        }
  
        /* jshint ignore:start */
        var dummy = curTextNode.nodeValue; // enforce IE to re-reference curTextNode, hack
        /* jshint ignore:end */
  
        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
            textCount === curTextNode.nodeValue.length) {
          textCount -= curTextNode.nodeValue.length;
          curTextNode = curTextNode.nextSibling;
        }
  
        container = curTextNode;
        offset = textCount;
      }
  
      return {
        cont: container,
        offset: offset
      };
    };
    
    /**
     * return TextRange from boundary point (inspired by google closure-library)
     * @param {BoundaryPoint} point
     * @return {TextRange}
     */
    var pointToTextRange = function (point) {
      var textRangeInfo = function (container, offset) {
        var node, isCollapseToStart;
  
        if (dom.isText(container)) {
          var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
          var prevContainer = list.last(prevTextNodes).previousSibling;
          node =  prevContainer || container.parentNode;
          offset += list.sum(list.tail(prevTextNodes), dom.nodeLength);
          isCollapseToStart = !prevContainer;
        } else {
          node = container.childNodes[offset] || container;
          if (dom.isText(node)) {
            return textRangeInfo(node, 0);
          }
  
          offset = 0;
          isCollapseToStart = false;
        }
  
        return {
          node: node,
          collapseToStart: isCollapseToStart,
          offset: offset
        };
      };
  
      var textRange = document.body.createTextRange();
      var info = textRangeInfo(point.node, point.offset);
  
      textRange.moveToElementText(info.node);
      textRange.collapse(info.collapseToStart);
      textRange.moveStart('character', info.offset);
      return textRange;
    };
    
    /**
     * Wrapped Range
     *
     * @constructor
     * @param {Node} sc - start container
     * @param {Number} so - start offset
     * @param {Node} ec - end container
     * @param {Number} eo - end offset
     */
    var WrappedRange = function (sc, so, ec, eo) {
      this.sc = sc;
      this.so = so;
      this.ec = ec;
      this.eo = eo;
  
      // nativeRange: get nativeRange from sc, so, ec, eo
      var nativeRange = function () {
        if (agent.isW3CRangeSupport) {
          var w3cRange = document.createRange();
          w3cRange.setStart(sc, so);
          w3cRange.setEnd(ec, eo);

          return w3cRange;
        } else {
          var textRange = pointToTextRange({
            node: sc,
            offset: so
          });

          textRange.setEndPoint('EndToEnd', pointToTextRange({
            node: ec,
            offset: eo
          }));

          return textRange;
        }
      };

      this.getPoints = function () {
        return {
          sc: sc,
          so: so,
          ec: ec,
          eo: eo
        };
      };

      this.getStartPoint = function () {
        return {
          node: sc,
          offset: so
        };
      };

      this.getEndPoint = function () {
        return {
          node: ec,
          offset: eo
        };
      };

      /**
       * select update visible range
       */
      this.select = function () {
        var nativeRng = nativeRange();
        if (agent.isW3CRangeSupport) {
          var selection = document.getSelection();
          if (selection.rangeCount > 0) {
            selection.removeAllRanges();
          }
          selection.addRange(nativeRng);
        } else {
          nativeRng.select();
        }
        
        return this;
      };

      /**
       * Moves the scrollbar to start container(sc) of current range
       *
       * @return {WrappedRange}
       */
      this.scrollIntoView = function (container) {
        var height = $(container).height();
        if (container.scrollTop + height < this.sc.offsetTop) {
          container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
        }

        return this;
      };

      /**
       * @return {WrappedRange}
       */
      this.normalize = function () {

        /**
         * @param {BoundaryPoint} point
         * @param {Boolean} isLeftToRight
         * @return {BoundaryPoint}
         */
        var getVisiblePoint = function (point, isLeftToRight) {
          if ((dom.isVisiblePoint(point) && !dom.isEdgePoint(point)) ||
              (dom.isVisiblePoint(point) && dom.isRightEdgePoint(point) && !isLeftToRight) ||
              (dom.isVisiblePoint(point) && dom.isLeftEdgePoint(point) && isLeftToRight) ||
              (dom.isVisiblePoint(point) && dom.isBlock(point.node) && dom.isEmpty(point.node))) {
            return point;
          }

          // point on block's edge
          var block = dom.ancestor(point.node, dom.isBlock);
          if (((dom.isLeftEdgePointOf(point, block) || dom.isVoid(dom.prevPoint(point).node)) && !isLeftToRight) ||
              ((dom.isRightEdgePointOf(point, block) || dom.isVoid(dom.nextPoint(point).node)) && isLeftToRight)) {

            // returns point already on visible point
            if (dom.isVisiblePoint(point)) {
              return point;
            }
            // reverse direction 
            isLeftToRight = !isLeftToRight;
          }

          var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) :
                                          dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
          return nextPoint || point;
        };

        var endPoint = getVisiblePoint(this.getEndPoint(), false);
        var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);

        return new WrappedRange(
          startPoint.node,
          startPoint.offset,
          endPoint.node,
          endPoint.offset
        );
      };

      /**
       * returns matched nodes on range
       *
       * @param {Function} [pred] - predicate function
       * @param {Object} [options]
       * @param {Boolean} [options.includeAncestor]
       * @param {Boolean} [options.fullyContains]
       * @return {Node[]}
       */
      this.nodes = function (pred, options) {
        pred = pred || func.ok;

        var includeAncestor = options && options.includeAncestor;
        var fullyContains = options && options.fullyContains;

        // TODO compare points and sort
        var startPoint = this.getStartPoint();
        var endPoint = this.getEndPoint();

        var nodes = [];
        var leftEdgeNodes = [];

        dom.walkPoint(startPoint, endPoint, function (point) {
          if (dom.isEditable(point.node)) {
            return;
          }

          var node;
          if (fullyContains) {
            if (dom.isLeftEdgePoint(point)) {
              leftEdgeNodes.push(point.node);
            }
            if (dom.isRightEdgePoint(point) && list.contains(leftEdgeNodes, point.node)) {
              node = point.node;
            }
          } else if (includeAncestor) {
            node = dom.ancestor(point.node, pred);
          } else {
            node = point.node;
          }

          if (node && pred(node)) {
            nodes.push(node);
          }
        }, true);

        return list.unique(nodes);
      };

      /**
       * returns commonAncestor of range
       * @return {Element} - commonAncestor
       */
      this.commonAncestor = function () {
        return dom.commonAncestor(sc, ec);
      };

      /**
       * returns expanded range by pred
       *
       * @param {Function} pred - predicate function
       * @return {WrappedRange}
       */
      this.expand = function (pred) {
        var startAncestor = dom.ancestor(sc, pred);
        var endAncestor = dom.ancestor(ec, pred);

        if (!startAncestor && !endAncestor) {
          return new WrappedRange(sc, so, ec, eo);
        }

        var boundaryPoints = this.getPoints();

        if (startAncestor) {
          boundaryPoints.sc = startAncestor;
          boundaryPoints.so = 0;
        }

        if (endAncestor) {
          boundaryPoints.ec = endAncestor;
          boundaryPoints.eo = dom.nodeLength(endAncestor);
        }

        return new WrappedRange(
          boundaryPoints.sc,
          boundaryPoints.so,
          boundaryPoints.ec,
          boundaryPoints.eo
        );
      };

      /**
       * @param {Boolean} isCollapseToStart
       * @return {WrappedRange}
       */
      this.collapse = function (isCollapseToStart) {
        if (isCollapseToStart) {
          return new WrappedRange(sc, so, sc, so);
        } else {
          return new WrappedRange(ec, eo, ec, eo);
        }
      };

      /**
       * splitText on range
       */
      this.splitText = function () {
        var isSameContainer = sc === ec;
        var boundaryPoints = this.getPoints();

        if (dom.isText(ec) && !dom.isEdgePoint(this.getEndPoint())) {
          ec.splitText(eo);
        }

        if (dom.isText(sc) && !dom.isEdgePoint(this.getStartPoint())) {
          boundaryPoints.sc = sc.splitText(so);
          boundaryPoints.so = 0;

          if (isSameContainer) {
            boundaryPoints.ec = boundaryPoints.sc;
            boundaryPoints.eo = eo - so;
          }
        }

        return new WrappedRange(
          boundaryPoints.sc,
          boundaryPoints.so,
          boundaryPoints.ec,
          boundaryPoints.eo
        );
      };

      /**
       * delete contents on range
       * @return {WrappedRange}
       */
      this.deleteContents = function () {
        if (this.isCollapsed()) {
          return this;
        }

        var rng = this.splitText();
        var nodes = rng.nodes(null, {
          fullyContains: true
        });

        // find new cursor point
        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
          return !list.contains(nodes, point.node);
        });

        var emptyParents = [];
        $.each(nodes, function (idx, node) {
          // find empty parents
          var parent = node.parentNode;
          if (point.node !== parent && dom.nodeLength(parent) === 1) {
            emptyParents.push(parent);
          }
          dom.remove(node, false);
        });

        // remove empty parents
        $.each(emptyParents, function (idx, node) {
          dom.remove(node, false);
        });

        return new WrappedRange(
          point.node,
          point.offset,
          point.node,
          point.offset
        ).normalize();
      };
      
      /**
       * makeIsOn: return isOn(pred) function
       */
      var makeIsOn = function (pred) {
        return function () {
          var ancestor = dom.ancestor(sc, pred);
          return !!ancestor && (ancestor === dom.ancestor(ec, pred));
        };
      };
  
      // isOnEditable: judge whether range is on editable or not
      this.isOnEditable = makeIsOn(dom.isEditable);
      // isOnList: judge whether range is on list node or not
      this.isOnList = makeIsOn(dom.isList);
      // isOnAnchor: judge whether range is on anchor node or not
      this.isOnAnchor = makeIsOn(dom.isAnchor);
      // isOnCell: judge whether range is on cell node or not
      this.isOnCell = makeIsOn(dom.isCell);
      // isOnData: judge whether range is on data node or not
      this.isOnData = makeIsOn(dom.isData);

      /**
       * @param {Function} pred
       * @return {Boolean}
       */
      this.isLeftEdgeOf = function (pred) {
        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
          return false;
        }

        var node = dom.ancestor(this.sc, pred);
        return node && dom.isLeftEdgeOf(this.sc, node);
      };

      /**
       * returns whether range was collapsed or not
       */
      this.isCollapsed = function () {
        return sc === ec && so === eo;
      };

      /**
       * wrap inline nodes which children of body with paragraph
       *
       * @return {WrappedRange}
       */
      this.wrapBodyInlineWithPara = function () {
        if (dom.isBodyContainer(sc) && dom.isEmpty(sc)) {
          sc.innerHTML = dom.emptyPara;
          return new WrappedRange(sc.firstChild, 0, sc.firstChild, 0);
        }

        /**
         * [workaround] firefox often create range on not visible point. so normalize here.
         *  - firefox: |<p>text</p>|
         *  - chrome: <p>|text|</p>
         */
        var rng = this.normalize();
        if (dom.isParaInline(sc) || dom.isPara(sc)) {
          return rng;
        }

        // find inline top ancestor
        var topAncestor;
        if (dom.isInline(rng.sc)) {
          var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
          topAncestor = list.last(ancestors);
          if (!dom.isInline(topAncestor)) {
            topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
          }
        } else {
          topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
        }

        // siblings not in paragraph
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));

        // wrap with paragraph
        if (inlineSiblings.length) {
          var para = dom.wrap(list.head(inlineSiblings), 'p');
          dom.appendChildNodes(para, list.tail(inlineSiblings));
        }

        return this.normalize();
      };

      /**
       * insert node at current cursor
       *
       * @param {Node} node
       * @return {Node}
       */
      this.insertNode = function (node) {
        var rng = this.wrapBodyInlineWithPara().deleteContents();
        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));

        if (info.rightNode) {
          info.rightNode.parentNode.insertBefore(node, info.rightNode);
        } else {
          info.container.appendChild(node);
        }

        return node;
      };

      /**
       * insert html at current cursor
       */
      this.pasteHTML = function (markup) {
        var contentsContainer = $('<div></div>').html(markup)[0];
        var childNodes = list.from(contentsContainer.childNodes);

        var rng = this.wrapBodyInlineWithPara().deleteContents();

        return childNodes.reverse().map(function (childNode) {
          return rng.insertNode(childNode);
        }).reverse();
      };
  
      /**
       * returns text in range
       *
       * @return {String}
       */
      this.toString = function () {
        var nativeRng = nativeRange();
        return agent.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
      };

      /**
       * returns range for word before cursor
       *
       * @param {Boolean} [findAfter] - find after cursor, default: false
       * @return {WrappedRange}
       */
      this.getWordRange = function (findAfter) {
        var endPoint = this.getEndPoint();

        if (!dom.isCharPoint(endPoint)) {
          return this;
        }

        var startPoint = dom.prevPointUntil(endPoint, function (point) {
          return !dom.isCharPoint(point);
        });

        if (findAfter) {
          endPoint = dom.nextPointUntil(endPoint, function (point) {
            return !dom.isCharPoint(point);
          });
        }

        return new WrappedRange(
          startPoint.node,
          startPoint.offset,
          endPoint.node,
          endPoint.offset
        );
      };
  
      /**
       * create offsetPath bookmark
       *
       * @param {Node} editable
       */
      this.bookmark = function (editable) {
        return {
          s: {
            path: dom.makeOffsetPath(editable, sc),
            offset: so
          },
          e: {
            path: dom.makeOffsetPath(editable, ec),
            offset: eo
          }
        };
      };

      /**
       * create offsetPath bookmark base on paragraph
       *
       * @param {Node[]} paras
       */
      this.paraBookmark = function (paras) {
        return {
          s: {
            path: list.tail(dom.makeOffsetPath(list.head(paras), sc)),
            offset: so
          },
          e: {
            path: list.tail(dom.makeOffsetPath(list.last(paras), ec)),
            offset: eo
          }
        };
      };

      /**
       * getClientRects
       * @return {Rect[]}
       */
      this.getClientRects = function () {
        var nativeRng = nativeRange();
        return nativeRng.getClientRects();
      };
    };

  /**
   * @class core.range
   *
   * Data structure
   *  * BoundaryPoint: a point of dom tree
   *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
   *
   * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
   *
   * @singleton
   * @alternateClassName range
   */
    return {
      /**
       * create Range Object From arguments or Browser Selection
       *
       * @param {Node} sc - start container
       * @param {Number} so - start offset
       * @param {Node} ec - end container
       * @param {Number} eo - end offset
       * @return {WrappedRange}
       */
      create: function (sc, so, ec, eo) {
        if (arguments.length === 4) {
          return new WrappedRange(sc, so, ec, eo);
        } else if (arguments.length === 2) { //collapsed
          ec = sc;
          eo = so;
          return new WrappedRange(sc, so, ec, eo);
        } else {
          var wrappedRange = this.createFromSelection();
          if (!wrappedRange && arguments.length === 1) {
            wrappedRange = this.createFromNode(arguments[0]);
            return wrappedRange.collapse(dom.emptyPara === arguments[0].innerHTML);
          }
          return wrappedRange;
        }
      },

      createFromSelection: function () {
        var sc, so, ec, eo;
        if (agent.isW3CRangeSupport) {
          var selection = document.getSelection();
          if (!selection || selection.rangeCount === 0) {
            return null;
          } else if (dom.isBody(selection.anchorNode)) {
            // Firefox: returns entire body as range on initialization.
            // We won't never need it.
            return null;
          }

          var nativeRng = selection.getRangeAt(0);
          sc = nativeRng.startContainer;
          so = nativeRng.startOffset;
          ec = nativeRng.endContainer;
          eo = nativeRng.endOffset;
        } else { // IE8: TextRange
          var textRange = document.selection.createRange();
          var textRangeEnd = textRange.duplicate();
          textRangeEnd.collapse(false);
          var textRangeStart = textRange;
          textRangeStart.collapse(true);

          var startPoint = textRangeToPoint(textRangeStart, true),
          endPoint = textRangeToPoint(textRangeEnd, false);

          // same visible point case: range was collapsed.
          if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
              dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
              endPoint.node.nextSibling === startPoint.node) {
            startPoint = endPoint;
          }

          sc = startPoint.cont;
          so = startPoint.offset;
          ec = endPoint.cont;
          eo = endPoint.offset;
        }

        return new WrappedRange(sc, so, ec, eo);
      },

      /**
       * @method 
       * 
       * create WrappedRange from node
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNode: function (node) {
        var sc = node;
        var so = 0;
        var ec = node;
        var eo = dom.nodeLength(ec);

        // browsers can't target a picture or void node
        if (dom.isVoid(sc)) {
          so = dom.listPrev(sc).length - 1;
          sc = sc.parentNode;
        }
        if (dom.isBR(ec)) {
          eo = dom.listPrev(ec).length - 1;
          ec = ec.parentNode;
        } else if (dom.isVoid(ec)) {
          eo = dom.listPrev(ec).length;
          ec = ec.parentNode;
        }

        return this.create(sc, so, ec, eo);
      },

      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeBefore: function (node) {
        return this.createFromNode(node).collapse(true);
      },

      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeAfter: function (node) {
        return this.createFromNode(node).collapse();
      },

      /**
       * @method 
       * 
       * create WrappedRange from bookmark
       *
       * @param {Node} editable
       * @param {Object} bookmark
       * @return {WrappedRange}
       */
      createFromBookmark: function (editable, bookmark) {
        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
        var so = bookmark.s.offset;
        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
        var eo = bookmark.e.offset;
        return new WrappedRange(sc, so, ec, eo);
      },

      /**
       * @method 
       *
       * create WrappedRange from paraBookmark
       *
       * @param {Object} bookmark
       * @param {Node[]} paras
       * @return {WrappedRange}
       */
      createFromParaBookmark: function (bookmark, paras) {
        var so = bookmark.s.offset;
        var eo = bookmark.e.offset;
        var sc = dom.fromOffsetPath(list.head(paras), bookmark.s.path);
        var ec = dom.fromOffsetPath(list.last(paras), bookmark.e.path);

        return new WrappedRange(sc, so, ec, eo);
      }
    };
  })();

  /**
   * @class core.async
   *
   * Async functions which returns `Promise`
   *
   * @singleton
   * @alternateClassName async
   */
  var async = (function () {
    /**
     * @method readFileAsDataURL
     *
     * read contents of file as representing URL
     *
     * @param {File} file
     * @return {Promise} - then: dataUrl
     */
    var readFileAsDataURL = function (file) {
      return $.Deferred(function (deferred) {
        $.extend(new FileReader(), {
          onload: function (e) {
            var dataURL = e.target.result;
            deferred.resolve(dataURL);
          },
          onerror: function () {
            deferred.reject(this);
          }
        }).readAsDataURL(file);
      }).promise();
    };
  
    /**
     * @method createImage
     *
     * create `<image>` from url string
     *
     * @param {String} url
     * @return {Promise} - then: $image
     */
    var createImage = function (url) {
      return $.Deferred(function (deferred) {
        var $img = $('<img>');

        $img.one('load', function () {
          $img.off('error abort');
          deferred.resolve($img);
        }).one('error abort', function () {
          $img.off('load').detach();
          deferred.reject($img);
        }).css({
          display: 'none'
        }).appendTo(document.body).attr('src', url);
      }).promise();
    };

    return {
      readFileAsDataURL: readFileAsDataURL,
      createImage: createImage
    };
  })();

  /**
   * @class editing.History
   *
   * Editor History
   *
   */
  var History = function ($editable) {
    var stack = [], stackOffset = -1;
    var editable = $editable[0];

    var makeSnapshot = function () {
      var rng = range.create(editable);
      var emptyBookmark = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};

      return {
        contents: $editable.html(),
        bookmark: (rng ? rng.bookmark(editable) : emptyBookmark)
      };
    };

    var applySnapshot = function (snapshot) {
      if (snapshot.contents !== null) {
        $editable.html(snapshot.contents);
      }
      if (snapshot.bookmark !== null) {
        range.createFromBookmark(editable, snapshot.bookmark).select();
      }
    };

    /**
    * @method rewind
    * Rewinds the history stack back to the first snapshot taken.
    * Leaves the stack intact, so that "Redo" can still be used.
    */
    this.rewind = function () {
      // Create snap shot if not yet recorded
      if ($editable.html() !== stack[stackOffset].contents) {
        this.recordUndo();
      }

      // Return to the first available snapshot.
      stackOffset = 0;

      // Apply that snapshot.
      applySnapshot(stack[stackOffset]);
    };

    /**
    * @method reset
    * Resets the history stack completely; reverting to an empty editor.
    */
    this.reset = function () {
      // Clear the stack.
      stack = [];

      // Restore stackOffset to its original value.
      stackOffset = -1;

      // Clear the editable area.
      $editable.html('');

      // Record our first snapshot (of nothing).
      this.recordUndo();
    };

    /**
     * undo
     */
    this.undo = function () {
      // Create snap shot if not yet recorded
      if ($editable.html() !== stack[stackOffset].contents) {
        this.recordUndo();
      }

      if (0 < stackOffset) {
        stackOffset--;
        applySnapshot(stack[stackOffset]);
      }
    };

    /**
     * redo
     */
    this.redo = function () {
      if (stack.length - 1 > stackOffset) {
        stackOffset++;
        applySnapshot(stack[stackOffset]);
      }
    };

    /**
     * recorded undo
     */
    this.recordUndo = function () {
      stackOffset++;

      // Wash out stack after stackOffset
      if (stack.length > stackOffset) {
        stack = stack.slice(0, stackOffset);
      }

      // Create new snapshot and push it to the end
      stack.push(makeSnapshot());
    };
  };

  /**
   * @class editing.Style
   *
   * Style
   *
   */
  var Style = function () {
    /**
     * @method jQueryCSS
     *
     * [workaround] for old jQuery
     * passing an array of style properties to .css()
     * will result in an object of property-value pairs.
     * (compability with version < 1.9)
     *
     * @private
     * @param  {jQuery} $obj
     * @param  {Array} propertyNames - An array of one or more CSS properties.
     * @return {Object}
     */
    var jQueryCSS = function ($obj, propertyNames) {
      if (agent.jqueryVersion < 1.9) {
        var result = {};
        $.each(propertyNames, function (idx, propertyName) {
          result[propertyName] = $obj.css(propertyName);
        });
        return result;
      }
      return $obj.css.call($obj, propertyNames);
    };

    /**
     * returns style object from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    this.fromNode = function ($node) {
      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
      var styleInfo = jQueryCSS($node, properties) || {};
      styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);
      return styleInfo;
    };

    /**
     * paragraph level style
     *
     * @param {WrappedRange} rng
     * @param {Object} styleInfo
     */
    this.stylePara = function (rng, styleInfo) {
      $.each(rng.nodes(dom.isPara, {
        includeAncestor: true
      }), function (idx, para) {
        $(para).css(styleInfo);
      });
    };

    /**
     * insert and returns styleNodes on range.
     *
     * @param {WrappedRange} rng
     * @param {Object} [options] - options for styleNodes
     * @param {String} [options.nodeName] - default: `SPAN`
     * @param {Boolean} [options.expandClosestSibling] - default: `false`
     * @param {Boolean} [options.onlyPartialContains] - default: `false`
     * @return {Node[]}
     */
    this.styleNodes = function (rng, options) {
      rng = rng.splitText();

      var nodeName = options && options.nodeName || 'SPAN';
      var expandClosestSibling = !!(options && options.expandClosestSibling);
      var onlyPartialContains = !!(options && options.onlyPartialContains);

      if (rng.isCollapsed()) {
        return [rng.insertNode(dom.create(nodeName))];
      }

      var pred = dom.makePredByNodeName(nodeName);
      var nodes = rng.nodes(dom.isText, {
        fullyContains: true
      }).map(function (text) {
        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
      });

      if (expandClosestSibling) {
        if (onlyPartialContains) {
          var nodesInRange = rng.nodes();
          // compose with partial contains predication
          pred = func.and(pred, function (node) {
            return list.contains(nodesInRange, node);
          });
        }

        return nodes.map(function (node) {
          var siblings = dom.withClosestSiblings(node, pred);
          var head = list.head(siblings);
          var tails = list.tail(siblings);
          $.each(tails, function (idx, elem) {
            dom.appendChildNodes(head, elem.childNodes);
            dom.remove(elem);
          });
          return list.head(siblings);
        });
      } else {
        return nodes;
      }
    };

    /**
     * get current style on cursor
     *
     * @param {WrappedRange} rng
     * @return {Object} - object contains style properties.
     */
    this.current = function (rng) {
      var $cont = $(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
      var styleInfo = this.fromNode($cont);

      // document.queryCommandState for toggle state
      // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"
      try {
        styleInfo = $.extend(styleInfo, {
          'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
          'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
          'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
          'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
          'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
          'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
          'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
        });
      } catch (e) {}

      // list-style-type to list-style(unordered, ordered)
      if (!rng.isOnList()) {
        styleInfo['list-style'] = 'none';
      } else {
        var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
        var isUnordered = $.inArray(styleInfo['list-style-type'], orderedTypes) > -1;
        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
      }

      var para = dom.ancestor(rng.sc, dom.isPara);
      if (para && para.style['line-height']) {
        styleInfo['line-height'] = para.style.lineHeight;
      } else {
        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
        styleInfo['line-height'] = lineHeight.toFixed(1);
      }

      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
      styleInfo.range = rng;

      return styleInfo;
    };
  };


  /**
   * @class editing.Bullet
   *
   * @alternateClassName Bullet
   */
  var Bullet = function () {
    var self = this;

    /**
     * toggle ordered list
     */
    this.insertOrderedList = function (editable) {
      this.toggleList('OL', editable);
    };

    /**
     * toggle unordered list
     */
    this.insertUnorderedList = function (editable) {
      this.toggleList('UL', editable);
    };

    /**
     * indent
     */
    this.indent = function (editable) {
      var self = this;
      var rng = range.create(editable).wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        if (dom.isLi(head)) {
          self.wrapList(paras, head.parentNode.nodeName);
        } else {
          $.each(paras, function (idx, para) {
            $(para).css('marginLeft', function (idx, val) {
              return (parseInt(val, 10) || 0) + 25;
            });
          });
        }
      });

      rng.select();
    };

    /**
     * outdent
     */
    this.outdent = function (editable) {
      var self = this;
      var rng = range.create(editable).wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        if (dom.isLi(head)) {
          self.releaseList([paras]);
        } else {
          $.each(paras, function (idx, para) {
            $(para).css('marginLeft', function (idx, val) {
              val = (parseInt(val, 10) || 0);
              return val > 25 ? val - 25 : '';
            });
          });
        }
      });

      rng.select();
    };

    /**
     * toggle list
     *
     * @param {String} listName - OL or UL
     */
    this.toggleList = function (listName, editable) {
      var rng = range.create(editable).wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
      var bookmark = rng.paraBookmark(paras);
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      // paragraph to list
      if (list.find(paras, dom.isPurePara)) {
        var wrappedParas = [];
        $.each(clustereds, function (idx, paras) {
          wrappedParas = wrappedParas.concat(self.wrapList(paras, listName));
        });
        paras = wrappedParas;
      // list to paragraph or change list style
      } else {
        var diffLists = rng.nodes(dom.isList, {
          includeAncestor: true
        }).filter(function (listNode) {
          return !$.nodeName(listNode, listName);
        });

        if (diffLists.length) {
          $.each(diffLists, function (idx, listNode) {
            dom.replace(listNode, listName);
          });
        } else {
          paras = this.releaseList(clustereds, true);
        }
      }

      range.createFromParaBookmark(bookmark, paras).select();
    };

    /**
     * @param {Node[]} paras
     * @param {String} listName
     * @return {Node[]}
     */
    this.wrapList = function (paras, listName) {
      var head = list.head(paras);
      var last = list.last(paras);

      var prevList = dom.isList(head.previousSibling) && head.previousSibling;
      var nextList = dom.isList(last.nextSibling) && last.nextSibling;

      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);

      // P to LI
      paras = paras.map(function (para) {
        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
      });

      // append to list(<ul>, <ol>)
      dom.appendChildNodes(listNode, paras);

      if (nextList) {
        dom.appendChildNodes(listNode, list.from(nextList.childNodes));
        dom.remove(nextList);
      }

      return paras;
    };

    /**
     * @method releaseList
     *
     * @param {Array[]} clustereds
     * @param {Boolean} isEscapseToBody
     * @return {Node[]}
     */
    this.releaseList = function (clustereds, isEscapseToBody) {
      var releasedParas = [];

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        var last = list.last(paras);

        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) :
                                         head.parentNode;
        var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
          node: last.parentNode,
          offset: dom.position(last) + 1
        }, {
          isSkipPaddingBlankHTML: true
        }) : null;

        var middleList = dom.splitTree(headList, {
          node: head.parentNode,
          offset: dom.position(head)
        }, {
          isSkipPaddingBlankHTML: true
        });

        paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) :
                                  list.from(middleList.childNodes).filter(dom.isLi);

        // LI to P
        if (isEscapseToBody || !dom.isList(headList.parentNode)) {
          paras = paras.map(function (para) {
            return dom.replace(para, 'P');
          });
        }

        $.each(list.from(paras).reverse(), function (idx, para) {
          dom.insertAfter(para, headList);
        });

        // remove empty lists
        var rootLists = list.compact([headList, middleList, lastList]);
        $.each(rootLists, function (idx, rootList) {
          var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
          $.each(listNodes.reverse(), function (idx, listNode) {
            if (!dom.nodeLength(listNode)) {
              dom.remove(listNode, true);
            }
          });
        });

        releasedParas = releasedParas.concat(paras);
      });

      return releasedParas;
    };
  };


  /**
   * @class editing.Typing
   *
   * Typing
   *
   */
  var Typing = function () {

    // a Bullet instance to toggle lists off
    var bullet = new Bullet();

    /**
     * insert tab
     *
     * @param {WrappedRange} rng
     * @param {Number} tabsize
     */
    this.insertTab = function (rng, tabsize) {
      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
      rng = rng.deleteContents();
      rng.insertNode(tab, true);

      rng = range.create(tab, tabsize);
      rng.select();
    };

    /**
     * insert paragraph
     */
    this.insertParagraph = function (editable) {
      var rng = range.create(editable);

      // deleteContents on range.
      rng = rng.deleteContents();

      // Wrap range if it needs to be wrapped by paragraph
      rng = rng.wrapBodyInlineWithPara();

      // finding paragraph
      var splitRoot = dom.ancestor(rng.sc, dom.isPara);

      var nextPara;
      // on paragraph: split paragraph
      if (splitRoot) {
        // if it is an empty line with li
        if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {
          // toogle UL/OL and escape
          bullet.toggleList(splitRoot.parentNode.nodeName);
          return;
        // if it is an empty line with para on blockquote
        } else if (dom.isEmpty(splitRoot) && dom.isPara(splitRoot) && dom.isBlockquote(splitRoot.parentNode)) {
          // escape blockquote
          dom.insertAfter(splitRoot, splitRoot.parentNode);
          nextPara = splitRoot;
        // if new line has content (not a line break)
        } else {
          nextPara = dom.splitTree(splitRoot, rng.getStartPoint());

          var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
          emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));

          $.each(emptyAnchors, function (idx, anchor) {
            dom.remove(anchor);
          });

          // replace empty heading, pre or custom-made styleTag with P tag
          if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
            nextPara = dom.replace(nextPara, 'p');
          }
        }
      // no paragraph: insert empty paragraph
      } else {
        var next = rng.sc.childNodes[rng.so];
        nextPara = $(dom.emptyPara)[0];
        if (next) {
          rng.sc.insertBefore(nextPara, next);
        } else {
          rng.sc.appendChild(nextPara);
        }
      }

      range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
    };
  };


  /**
   * @class Create a virtual table to create what actions to do in change.
   * @param {object} startPoint Cell selected to apply change.
   * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
   * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
   * @param {object} domTable Dom element of table to make changes.
   */
  var TableResultAction = function (startPoint, where, action, domTable) {
    var _startPoint = { 'colPos': 0, 'rowPos': 0 };
    var _virtualTable = [];
    var _actionCellList = [];

    //////////////////////////////////////////////
    // Private functions
    //////////////////////////////////////////////

    /**
     * Set the startPoint of action.
     */
    function setStartPoint() {
      if (!startPoint || !startPoint.tagName || (startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th')) {
        console.error('Impossible to identify start Cell point.', startPoint);
        return;
      }
      _startPoint.colPos = startPoint.cellIndex;
      if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
        console.error('Impossible to identify start Row point.', startPoint);
        return;
      }
      _startPoint.rowPos = startPoint.parentElement.rowIndex;
    }

    /**
     * Define virtual table position info object.
     * 
     * @param {int} rowIndex Index position in line of virtual table.
     * @param {int} cellIndex Index position in column of virtual table.
     * @param {object} baseRow Row affected by this position.
     * @param {object} baseCell Cell affected by this position.
     * @param {bool} isSpan Inform if it is an span cell/row.
     */
    function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
      var objPosition = {
        'baseRow': baseRow,
        'baseCell': baseCell,
        'isRowSpan': isRowSpan,
        'isColSpan': isColSpan,
        'isVirtual': isVirtualCell
      };
      if (!_virtualTable[rowIndex]) {
        _virtualTable[rowIndex] = [];
      }
      _virtualTable[rowIndex][cellIndex] = objPosition;
    }

    /**
     * Create action cell object.
     * 
     * @param {object} virtualTableCellObj Object of specific position on virtual table.
     * @param {enum} resultAction Action to be applied in that item.
     */
    function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
      return {
        'baseCell': virtualTableCellObj.baseCell,
        'action': resultAction,
        'virtualTable': {
          'rowIndex': virtualRowPosition,
          'cellIndex': virtualColPosition
        }
      };
    }

    /**
     * Recover free index of row to append Cell.
     * 
     * @param {int} rowIndex Index of row to find free space.
     * @param {int} cellIndex Index of cell to find free space in table.
     */
    function recoverCellIndex(rowIndex, cellIndex) {
      if (!_virtualTable[rowIndex]) {
        return cellIndex;
      }
      if (!_virtualTable[rowIndex][cellIndex]) {
        return cellIndex;
      }

      var newCellIndex = cellIndex;
      while (_virtualTable[rowIndex][newCellIndex]) {
        newCellIndex++;
        if (!_virtualTable[rowIndex][newCellIndex]) {
          return newCellIndex;
        }
      }
    }

    /**
     * Recover info about row and cell and add information to virtual table.
     * 
     * @param {object} row Row to recover information.
     * @param {object} cell Cell to recover information.
     */
    function addCellInfoToVirtual(row, cell) {
      var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
      var cellHasColspan = (cell.colSpan > 1);
      var cellHasRowspan = (cell.rowSpan > 1);
      var isThisSelectedCell = (row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos);
      setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false);

      // Add span rows to virtual Table.
      var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;
      if (rowspanNumber > 1) {
        for (var rp = 1; rp < rowspanNumber; rp++) {
          var rowspanIndex = row.rowIndex + rp;
          adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
          setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
        }
      }

      // Add span cols to virtual table.
      var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;
      if (colspanNumber > 1) {
        for (var cp = 1; cp < colspanNumber; cp++) {
          var cellspanIndex = recoverCellIndex(row.rowIndex, (cellIndex + cp));
          adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
          setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
        }
      }
    }

    /**
     * Process validation and adjust of start point if needed
     * 
     * @param {int} rowIndex 
     * @param {int} cellIndex 
     * @param {object} cell 
     * @param {bool} isSelectedCell 
     */
    function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
      if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
        _startPoint.colPos++;
      }
    }

    /**
     * Create virtual table of cells with all cells, including span cells.
     */
    function createVirtualTable() {
      var rows = domTable.rows;
      for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        var cells = rows[rowIndex].cells;
        for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
          addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
        }
      }
    }

    /**
     * Get action to be applied on the cell.
     * 
     * @param {object} cell virtual table cell to apply action
     */
    function getDeleteResultActionToCell(cell) {
      switch (where) {
        case TableResultAction.where.Column:
          if (cell.isColSpan) {
            return TableResultAction.resultAction.SubtractSpanCount;
          }
          break;
        case TableResultAction.where.Row:
          if (!cell.isVirtual && cell.isRowSpan) {
            return TableResultAction.resultAction.AddCell;
          }
          else if (cell.isRowSpan) {
            return TableResultAction.resultAction.SubtractSpanCount;
          }
          break;
      }
      return TableResultAction.resultAction.RemoveCell;
    }

    /**
     * Get action to be applied on the cell.
     * 
     * @param {object} cell virtual table cell to apply action
     */
    function getAddResultActionToCell(cell) {
      switch (where) {
        case TableResultAction.where.Column:
          if (cell.isColSpan) {
            return TableResultAction.resultAction.SumSpanCount;
          } else if (cell.isRowSpan && cell.isVirtual) {
            return TableResultAction.resultAction.Ignore;
          }
          break;
        case TableResultAction.where.Row:
          if (cell.isRowSpan) {
            return TableResultAction.resultAction.SumSpanCount;
          } else if (cell.isColSpan && cell.isVirtual) {
            return TableResultAction.resultAction.Ignore;
          }
          break;
      }
      return TableResultAction.resultAction.AddCell;
    }

    function init() {
      setStartPoint();
      createVirtualTable();
    }

    //////////////////////////////////////////////
    // Public functions
    //////////////////////////////////////////////

    /**
     * Recover array os what to do in table.
     */
    this.getActionList = function () {
      var fixedRow = (where === TableResultAction.where.Row) ? _startPoint.rowPos : -1;
      var fixedCol = (where === TableResultAction.where.Column) ? _startPoint.colPos : -1;

      var actualPosition = 0;
      var canContinue = true;
      while (canContinue) {
        var rowPosition = (fixedRow >= 0) ? fixedRow : actualPosition;
        var colPosition = (fixedCol >= 0) ? fixedCol : actualPosition;
        var row = _virtualTable[rowPosition];
        if (!row) {
          canContinue = false;
          return _actionCellList;
        }
        var cell = row[colPosition];
        if (!cell) {
          canContinue = false;
          return _actionCellList;
        }

        // Define action to be applied in this cell
        var resultAction = TableResultAction.resultAction.Ignore;
        switch (action) {
          case TableResultAction.requestAction.Add:
            resultAction = getAddResultActionToCell(cell);
            break;
          case TableResultAction.requestAction.Delete:
            resultAction = getDeleteResultActionToCell(cell);
            break;
        }
        _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));
        actualPosition++;
      }

      return _actionCellList;
    };

    init();
  };
  /**
  * 
  * Where action occours enum.
  */
  TableResultAction.where = { 'Row': 0, 'Column': 1 };
  /**
  * 
  * Requested action to apply enum.
  */
  TableResultAction.requestAction = { 'Add': 0, 'Delete': 1 };
  /**
  * 
  * Result action to be executed enum.
  */
  TableResultAction.resultAction = { 'Ignore': 0, 'SubtractSpanCount': 1, 'RemoveCell': 2, 'AddCell': 3, 'SumSpanCount': 4 };

  /**
   * 
   * @class editing.Table
   *
   * Table
   *
   */
  var Table = function () {
    /**
     * handle tab key
     *
     * @param {WrappedRange} rng
     * @param {Boolean} isShift
     */
    this.tab = function (rng, isShift) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var table = dom.ancestor(cell, dom.isTable);
      var cells = dom.listDescendant(table, dom.isCell);

      var nextCell = list[isShift ? 'prev' : 'next'](cells, cell);
      if (nextCell) {
        range.create(nextCell, 0).select();
      }
    };

    /**
     * Add a new row
     *
     * @param {WrappedRange} rng
     * @param {String} position (top/bottom)
     * @return {Node}
     */
    this.addRow = function (rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);

      var currentTr = $(cell).closest('tr');
      var trAttributes = this.recoverAttributes(currentTr);
      var html = $('<tr' + trAttributes + '></tr>');

      var vTable = new TableResultAction(cell, TableResultAction.where.Row,
        TableResultAction.requestAction.Add, $(currentTr).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var idCell = 0; idCell < actions.length; idCell++) {
        var currentCell = actions[idCell];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);
        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
            break;
          case TableResultAction.resultAction.SumSpanCount:
            if (position === 'top') {
              var baseCellTr = currentCell.baseCell.parent;
              var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;
              if (isTopFromRowSpan) {
                var newTd = $('<div></div>').append($('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                html.append(newTd);
                break;
              }
            }
            var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
            rowspanNumber++;
            currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
            break;
        }
      }

      if (position === 'top') {
        currentTr.before(html);
      }
      else {
        var cellHasRowspan = (cell.rowSpan > 1);
        if (cellHasRowspan) {
          var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
          $($(currentTr).parent().find('tr')[lastTrIndex]).after($(html));
          return;
        }
        currentTr.after(html);
      }
    };

    /**
     * Add a new col
     *
     * @param {WrappedRange} rng
     * @param {String} position (left/right)
     * @return {Node}
     */
    this.addCol = function (rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = $(cell).closest('tr');
      var rowsGroup = $(row).siblings();
      rowsGroup.push(row);

      var vTable = new TableResultAction(cell, TableResultAction.where.Column,
        TableResultAction.requestAction.Add, $(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        var currentCell = actions[actionIndex];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);
        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            if (position === 'right') {
              $(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
            } else {
              $(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }
            break;
          case TableResultAction.resultAction.SumSpanCount:
            if (position === 'right') {
              var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
              colspanNumber++;
              currentCell.baseCell.setAttribute('colSpan', colspanNumber);
            } else {
              $(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }
            break;
        }
      }
    };

    /*
    * Copy attributes from element.
    *
    * @param {object} Element to recover attributes.
    * @return {string} Copied string elements.
    */
    this.recoverAttributes = function (el) {
      var resultStr = '';

      if (!el) {
        return resultStr;
      }

      var attrList = el.attributes || [];

      for (var i = 0; i < attrList.length; i++) {
        if (attrList[i].name.toLowerCase() === 'id') {
          continue;
        }

        if (attrList[i].specified) {
          resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
        }
      }

      return resultStr;
    };

    /**
     * Delete current row
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    this.deleteRow = function (rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = $(cell).closest('tr');
      var cellPos = row.children('td, th').index($(cell));
      var rowPos = row[0].rowIndex;

      var vTable = new TableResultAction(cell, TableResultAction.where.Row,
        TableResultAction.requestAction.Delete, $(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }

        var baseCell = actions[actionIndex].baseCell;
        var virtualPosition = actions[actionIndex].virtualTable;
        var hasRowspan = (baseCell.rowSpan && baseCell.rowSpan > 1);
        var rowspanNumber = (hasRowspan) ? parseInt(baseCell.rowSpan, 10) : 0;
        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;
          case TableResultAction.resultAction.AddCell:
            var nextRow = row.next('tr')[0];
            if (!nextRow) { continue; }
            var cloneRow = row[0].cells[cellPos];
            if (hasRowspan) {
              if (rowspanNumber > 2) {
                rowspanNumber--;
                nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                nextRow.cells[cellPos].innerHTML = '';
              } else if (rowspanNumber === 2) {
                nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                nextRow.cells[cellPos].removeAttribute('rowSpan');
                nextRow.cells[cellPos].innerHTML = '';
              }
            }
            continue;
          case TableResultAction.resultAction.SubtractSpanCount:
            if (hasRowspan) {
              if (rowspanNumber > 2) {
                rowspanNumber--;
                baseCell.setAttribute('rowSpan', rowspanNumber);
                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              } else if (rowspanNumber === 2) {
                baseCell.removeAttribute('rowSpan');
                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              }
            }
            continue;
          case TableResultAction.resultAction.RemoveCell:
            // Do not need remove cell because row will be deleted.
            continue;
        }
      }
      row.remove();
    };

    /**
     * Delete current col
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    this.deleteCol = function (rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = $(cell).closest('tr');
      var cellPos = row.children('td, th').index($(cell));

      var vTable = new TableResultAction(cell, TableResultAction.where.Column,
        TableResultAction.requestAction.Delete, $(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }
        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;
          case TableResultAction.resultAction.SubtractSpanCount:
            var baseCell = actions[actionIndex].baseCell;
            var hasColspan = (baseCell.colSpan && baseCell.colSpan > 1);
            if (hasColspan) {
              var colspanNumber = (baseCell.colSpan) ? parseInt(baseCell.colSpan, 10) : 0;
              if (colspanNumber > 2) {
                colspanNumber--;
                baseCell.setAttribute('colSpan', colspanNumber);
                if (baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              } else if (colspanNumber === 2) {
                baseCell.removeAttribute('colSpan');
                if (baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              }
            }
            continue;
          case TableResultAction.resultAction.RemoveCell:
            dom.remove(actions[actionIndex].baseCell, true);
            continue;
        }
      }
    };

    /**
     * create empty table element
     *
     * @param {Number} rowCount
     * @param {Number} colCount
     * @return {Node}
     */
    this.createTable = function (colCount, rowCount, options) {
      var tds = [], tdHTML;
      for (var idxCol = 0; idxCol < colCount; idxCol++) {
        tds.push('<td>' + dom.blank + '</td>');
      }
      tdHTML = tds.join('');

      var trs = [], trHTML;
      for (var idxRow = 0; idxRow < rowCount; idxRow++) {
        trs.push('<tr>' + tdHTML + '</tr>');
      }
      trHTML = trs.join('');
      var $table = $('<table>' + trHTML + '</table>');
      if (options && options.tableClassName) {
        $table.addClass(options.tableClassName);
      }

      return $table[0];
    };

    /**
     * Delete current table
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    this.deleteTable = function (rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      $(cell).closest('table').remove();
    };
  };


  var KEY_BOGUS = 'bogus';

  /**
   * @class Editor
   */
  var Editor = function (context) {
    var self = this;

    var $note = context.layoutInfo.note;
    var $editor = context.layoutInfo.editor;
    var $editable = context.layoutInfo.editable;
    var options = context.options;
    var lang = options.langInfo;

    var editable = $editable[0];
    var lastRange = null;

    var style = new Style();
    var table = new Table();
    var typing = new Typing();
    var bullet = new Bullet();
    var history = new History($editable);

    this.initialize = function () {
      // bind custom events
      $editable.on('keydown', function (event) {
        if (event.keyCode === key.code.ENTER) {
          context.triggerEvent('enter', event);
        }
        context.triggerEvent('keydown', event);

        if (!event.isDefaultPrevented()) {
          if (options.shortcuts) {
            self.handleKeyMap(event);
          } else {
            self.preventDefaultEditableShortCuts(event);
          }
        }
      }).on('keyup', function (event) {
        context.triggerEvent('keyup', event);
      }).on('focus', function (event) {
        context.triggerEvent('focus', event);
      }).on('blur', function (event) {
        context.triggerEvent('blur', event);
      }).on('mousedown', function (event) {
        context.triggerEvent('mousedown', event);
      }).on('mouseup', function (event) {
        context.triggerEvent('mouseup', event);
      }).on('scroll', function (event) {
        context.triggerEvent('scroll', event);
      }).on('paste', function (event) {
        context.triggerEvent('paste', event);
      });

      // init content before set event
      $editable.html(dom.html($note) || dom.emptyPara);

      // [workaround] IE doesn't have input events for contentEditable
      // - see: https://goo.gl/4bfIvA
      var changeEventName = agent.isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
      $editable.on(changeEventName, func.debounce(function () {
        context.triggerEvent('change', $editable.html());
      }, 100));

      $editor.on('focusin', function (event) {
        context.triggerEvent('focusin', event);
      }).on('focusout', function (event) {
        context.triggerEvent('focusout', event);
      });

      if (!options.airMode) {
        if (options.width) {
          $editor.outerWidth(options.width);
        }
        if (options.height) {
          $editable.outerHeight(options.height);
        }
        if (options.maxHeight) {
          $editable.css('max-height', options.maxHeight);
        }
        if (options.minHeight) {
          $editable.css('min-height', options.minHeight);
        }
      }

      history.recordUndo();
    };

    this.destroy = function () {
      $editable.off();
    };

    this.handleKeyMap = function (event) {
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
      var keys = [];

      if (event.metaKey) { keys.push('CMD'); }
      if (event.ctrlKey && !event.altKey) { keys.push('CTRL'); }
      if (event.shiftKey) { keys.push('SHIFT'); }

      var keyName = key.nameFromCode[event.keyCode];
      if (keyName) {
        keys.push(keyName);
      }

      var eventName = keyMap[keys.join('+')];
      if (eventName) {
        event.preventDefault();
        context.invoke(eventName);
      } else if (key.isEdit(event.keyCode)) {
        this.afterCommand();
      }
    };

    this.preventDefaultEditableShortCuts = function (event) {
      // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
      if ((event.ctrlKey || event.metaKey) &&
        list.contains([66, 73, 85], event.keyCode)) {
        event.preventDefault();
      }
    };

    /**
     * create range
     * @return {WrappedRange}
     */
    this.createRange = function () {
      this.focus();
      return range.create(editable);
    };

    /**
     * saveRange
     *
     * save current range
     *
     * @param {Boolean} [thenCollapse=false]
     */
    this.saveRange = function (thenCollapse) {
      lastRange = this.createRange();
      if (thenCollapse) {
        lastRange.collapse().select();
      }
    };

    /**
     * restoreRange
     *
     * restore lately range
     */
    this.restoreRange = function () {
      if (lastRange) {
        lastRange.select();
        this.focus();
      }
    };

    this.saveTarget = function (node) {
      $editable.data('target', node);
    };

    this.clearTarget = function () {
      $editable.removeData('target');
    };

    this.restoreTarget = function () {
      return $editable.data('target');
    };

    /**
     * currentStyle
     *
     * current style
     * @return {Object|Boolean} unfocus
     */
    this.currentStyle = function () {
      var rng = range.create();
      if (rng) {
        rng = rng.normalize();
      }
      return rng ? style.current(rng) : style.fromNode($editable);
    };

    /**
     * style from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    this.styleFromNode = function ($node) {
      return style.fromNode($node);
    };

    /**
     * undo
     */
    this.undo = function () {
      context.triggerEvent('before.command', $editable.html());
      history.undo();
      context.triggerEvent('change', $editable.html());
    };
    context.memo('help.undo', lang.help.undo);

    /**
     * redo
     */
    this.redo = function () {
      context.triggerEvent('before.command', $editable.html());
      history.redo();
      context.triggerEvent('change', $editable.html());
    };
    context.memo('help.redo', lang.help.redo);

    /**
     * before command
     */
    var beforeCommand = this.beforeCommand = function () {
      context.triggerEvent('before.command', $editable.html());
      // keep focus on editable before command execution
      self.focus();
    };

    /**
     * after command
     * @param {Boolean} isPreventTrigger
     */
    var afterCommand = this.afterCommand = function (isPreventTrigger) {
      history.recordUndo();
      if (!isPreventTrigger) {
        context.triggerEvent('change', $editable.html());
      }
    };

    /* jshint ignore:start */
    // native commands(with execCommand), generate function for execCommand
    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
                    'formatBlock', 'removeFormat',
                    'backColor', 'fontName'];

    for (var idx = 0, len = commands.length; idx < len; idx ++) {
      this[commands[idx]] = (function (sCmd) {
        return function (value) {
          beforeCommand();
          document.execCommand(sCmd, false, value);
          afterCommand(true);
        };
      })(commands[idx]);
      context.memo('help.' + commands[idx], lang.help[commands[idx]]);
    }
    /* jshint ignore:end */

    /**
     * handle tab key
     */
    this.tab = function () {
      var rng = this.createRange();
      if (rng.isCollapsed() && rng.isOnCell()) {
        table.tab(rng);
      } else {
        beforeCommand();
        typing.insertTab(rng, options.tabSize);
        afterCommand();
      }
    };
    context.memo('help.tab', lang.help.tab);

    /**
     * handle shift+tab key
     */
    this.untab = function () {
      var rng = this.createRange();
      if (rng.isCollapsed() && rng.isOnCell()) {
        table.tab(rng, true);
      }
    };
    context.memo('help.untab', lang.help.untab);

    /**
     * run given function between beforeCommand and afterCommand
     */
    this.wrapCommand = function (fn) {
      return function () {
        beforeCommand();
        fn.apply(self, arguments);
        afterCommand();
      };
    };

    /**
     * insert paragraph
     */
    this.insertParagraph = this.wrapCommand(function () {
      typing.insertParagraph(editable);
    });
    context.memo('help.insertParagraph', lang.help.insertParagraph);

    this.insertOrderedList = this.wrapCommand(function () {
      bullet.insertOrderedList(editable);
    });
    context.memo('help.insertOrderedList', lang.help.insertOrderedList);

    this.insertUnorderedList = this.wrapCommand(function () {
      bullet.insertUnorderedList(editable);
    });
    context.memo('help.insertUnorderedList', lang.help.insertUnorderedList);

    this.indent = this.wrapCommand(function () {
      bullet.indent(editable);
    });
    context.memo('help.indent', lang.help.indent);

    this.outdent = this.wrapCommand(function () {
      bullet.outdent(editable);
    });
    context.memo('help.outdent', lang.help.outdent);

    /**
     * insert image
     *
     * @param {String} src
     * @param {String|Function} param
     * @return {Promise}
     */
    this.insertImage = function (src, param) {
      return async.createImage(src, param).then(function ($image) {
        beforeCommand();

        if (typeof param === 'function') {
          param($image);
        } else {
          if (typeof param === 'string') {
            $image.attr('data-filename', param);
          }
          $image.css('width', Math.min($editable.width(), $image.width()));
        }

        $image.show();
        range.create(editable).insertNode($image[0]);
        range.createFromNodeAfter($image[0]).select();
        afterCommand();
      }).fail(function (e) {
        context.triggerEvent('image.upload.error', e);
      });
    };

    /**
     * insertImages
     * @param {File[]} files
     */
    this.insertImages = function (files) {
      $.each(files, function (idx, file) {
        var filename = file.name;
        if (options.maximumImageFileSize && options.maximumImageFileSize < file.size) {
          context.triggerEvent('image.upload.error', lang.image.maximumFileSizeError);
        } else {
          async.readFileAsDataURL(file).then(function (dataURL) {
            return self.insertImage(dataURL, filename);
          }).fail(function () {
            context.triggerEvent('image.upload.error');
          });
        }
      });
    };

    /**
     * insertImagesOrCallback
     * @param {File[]} files
     */
    this.insertImagesOrCallback = function (files) {
      var callbacks = options.callbacks;

      // If onImageUpload options setted
      if (callbacks.onImageUpload) {
        context.triggerEvent('image.upload', files);
      // else insert Image as dataURL
      } else {
        this.insertImages(files);
      }
    };

    /**
     * insertNode
     * insert node
     * @param {Node} node
     */
    this.insertNode = this.wrapCommand(function (node) {
      var rng = this.createRange();
      rng.insertNode(node);
      range.createFromNodeAfter(node).select();
    });

    /**
     * insert text
     * @param {String} text
     */
    this.insertText = this.wrapCommand(function (text) {
      var rng = this.createRange();
      var textNode = rng.insertNode(dom.createText(text));
      range.create(textNode, dom.nodeLength(textNode)).select();
    });

    /**
     * return selected plain text
     * @return {String} text
     */
    this.getSelectedText = function () {
      var rng = this.createRange();

      // if range on anchor, expand range with anchor
      if (rng.isOnAnchor()) {
        rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
      }

      return rng.toString();
    };

    /**
     * paste HTML
     * @param {String} markup
     */
    this.pasteHTML = this.wrapCommand(function (markup) {
      var contents = this.createRange().pasteHTML(markup);
      range.createFromNodeAfter(list.last(contents)).select();
    });

    /**
     * formatBlock
     *
     * @param {String} tagName
     */
    this.formatBlock = this.wrapCommand(function (tagName, $target) {
      var onApplyCustomStyle = context.options.callbacks.onApplyCustomStyle;
      if (onApplyCustomStyle) {
        onApplyCustomStyle.call(this, $target, context, this.onFormatBlock);
      } else {
        this.onFormatBlock(tagName);
      }
    });

    this.onFormatBlock = function (tagName) {
      // [workaround] for MSIE, IE need `<`
      tagName = agent.isMSIE ? '<' + tagName + '>' : tagName;
      document.execCommand('FormatBlock', false, tagName);
    };

    this.formatPara = function () {
      this.formatBlock('P');
    };
    context.memo('help.formatPara', lang.help.formatPara);

    /* jshint ignore:start */
    for (var idx = 1; idx <= 6; idx ++) {
      this['formatH' + idx] = function (idx) {
        return function () {
          this.formatBlock('H' + idx);
        };
      }(idx);
      context.memo('help.formatH'+idx, lang.help['formatH' + idx]);
    };
    /* jshint ignore:end */

    /**
     * fontSize
     *
     * @param {String} value - px
     */
    this.fontSize = function (value) {
      var rng = this.createRange();

      if (rng && rng.isCollapsed()) {
        var spans = style.styleNodes(rng);
        var firstSpan = list.head(spans);

        $(spans).css({
          'font-size': value + 'px'
        });

        // [workaround] added styled bogus span for style
        //  - also bogus character needed for cursor position
        if (firstSpan && !dom.nodeLength(firstSpan)) {
          firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
          range.createFromNodeAfter(firstSpan.firstChild).select();
          $editable.data(KEY_BOGUS, firstSpan);
        }
      } else {
        beforeCommand();
        $(style.styleNodes(rng)).css({
          'font-size': value + 'px'
        });
        afterCommand();
      }
    };

    /**
     * insert horizontal rule
     */
    this.insertHorizontalRule = this.wrapCommand(function () {
      var hrNode = this.createRange().insertNode(dom.create('HR'));
      if (hrNode.nextSibling) {
        range.create(hrNode.nextSibling, 0).normalize().select();
      }
    });
    context.memo('help.insertHorizontalRule', lang.help.insertHorizontalRule);

    /**
     * remove bogus node and character
     */
    this.removeBogus = function () {
      var bogusNode = $editable.data(KEY_BOGUS);
      if (!bogusNode) {
        return;
      }

      var textNode = list.find(list.from(bogusNode.childNodes), dom.isText);

      var bogusCharIdx = textNode.nodeValue.indexOf(dom.ZERO_WIDTH_NBSP_CHAR);
      if (bogusCharIdx !== -1) {
        textNode.deleteData(bogusCharIdx, 1);
      }

      if (dom.isEmpty(bogusNode)) {
        dom.remove(bogusNode);
      }

      $editable.removeData(KEY_BOGUS);
    };

    /**
     * lineHeight
     * @param {String} value
     */
    this.lineHeight = this.wrapCommand(function (value) {
      style.stylePara(this.createRange(), {
        lineHeight: value
      });
    });

    /**
     * unlink
     *
     * @type command
     */
    this.unlink = function () {
      var rng = this.createRange();
      if (rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        rng = range.createFromNode(anchor);
        rng.select();

        beforeCommand();
        document.execCommand('unlink');
        afterCommand();
      }
    };

    /**
     * create link (command)
     *
     * @param {Object} linkInfo
     */
    this.createLink = this.wrapCommand(function (linkInfo) {
      var linkUrl = linkInfo.url;
      var linkText = linkInfo.text;
      var isNewWindow = linkInfo.isNewWindow;
      var rng = linkInfo.range || this.createRange();
      var isTextChanged = rng.toString() !== linkText;

      // handle spaced urls from input
      if (typeof linkUrl === 'string') {
        linkUrl = linkUrl.trim();
      }

      if (options.onCreateLink) {
        linkUrl = options.onCreateLink(linkUrl);
      } else {
        // if url doesn't match an URL schema, set http:// as default
        linkUrl = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(linkUrl) ?
          linkUrl : 'http://' + linkUrl;
      }

      var anchors = [];
      if (isTextChanged) {
        rng = rng.deleteContents();
        var anchor = rng.insertNode($('<A>' + linkText + '</A>')[0]);
        anchors.push(anchor);
      } else {
        anchors = style.styleNodes(rng, {
          nodeName: 'A',
          expandClosestSibling: true,
          onlyPartialContains: true
        });
      }

      $.each(anchors, function (idx, anchor) {
        $(anchor).attr('href', linkUrl);
        if (isNewWindow) {
          $(anchor).attr('target', '_blank');
        } else {
          $(anchor).removeAttr('target');
        }
      });

      var startRange = range.createFromNodeBefore(list.head(anchors));
      var startPoint = startRange.getStartPoint();
      var endRange = range.createFromNodeAfter(list.last(anchors));
      var endPoint = endRange.getEndPoint();

      range.create(
        startPoint.node,
        startPoint.offset,
        endPoint.node,
        endPoint.offset
      ).select();
    });

    /**
     * returns link info
     *
     * @return {Object}
     * @return {WrappedRange} return.range
     * @return {String} return.text
     * @return {Boolean} [return.isNewWindow=true]
     * @return {String} [return.url=""]
     */
    this.getLinkInfo = function () {
      var rng = this.createRange().expand(dom.isAnchor);

      // Get the first anchor on range(for edit).
      var $anchor = $(list.head(rng.nodes(dom.isAnchor)));
      var linkInfo = {
        range: rng,
        text: rng.toString(),
        url: $anchor.length ? $anchor.attr('href') : ''
      };

      // Define isNewWindow when anchor exists.
      if ($anchor.length) {
        linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
      }

      return linkInfo;
    };

    /**
     * setting color
     *
     * @param {Object} sObjColor  color code
     * @param {String} sObjColor.foreColor foreground color
     * @param {String} sObjColor.backColor background color
     */
    this.color = this.wrapCommand(function (colorInfo) {
      var foreColor = colorInfo.foreColor;
      var backColor = colorInfo.backColor;

      if (foreColor) { document.execCommand('foreColor', false, foreColor); }
      if (backColor) { document.execCommand('backColor', false, backColor); }
    });

    /**
     * Set foreground color
     *
     * @param {String} colorCode foreground color code
     */
    this.foreColor = this.wrapCommand(function (colorInfo) {
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('foreColor', false, colorInfo);
    });

    /**
     * insert Table
     *
     * @param {String} dimension of table (ex : "5x5")
     */
    this.insertTable = this.wrapCommand(function (dim) {
      var dimension = dim.split('x');

      var rng = this.createRange().deleteContents();
      rng.insertNode(table.createTable(dimension[0], dimension[1], options));
    });

     /**
     * @method addRow
     *
     *
     */
    this.addRow = function (position) {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.addRow(rng, position);
        afterCommand();
      }
    };

     /**
     * @method addCol
     *
     *
     */
    this.addCol = function (position) {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.addCol(rng, position);
        afterCommand();
      }
    };

    /**
     * @method deleteRow
     *
     *
     */
    this.deleteRow = function () {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.deleteRow(rng);
        afterCommand();
      }
    };

    /**
     * @method deleteCol
     *
     *
     */
    this.deleteCol = function () {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.deleteCol(rng);
        afterCommand();
      }
    };

    /**
     * @method deleteTable
     *
     *
     */
    this.deleteTable = function () {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.deleteTable(rng);
        afterCommand();
      }
    };

    /**
     * float me
     *
     * @param {String} value
     */
    this.floatMe = this.wrapCommand(function (value) {
      var $target = $(this.restoreTarget());
      $target.toggleClass('note-float-left', value === 'left');
      $target.toggleClass('note-float-right', value === 'right');
      $target.css('float', value);
    });

    /**
     * resize overlay element
     * @param {String} value
     */
    this.resize = this.wrapCommand(function (value) {
      var $target = $(this.restoreTarget());
      $target.css({
        width: value * 100 + '%',
        height: ''
      });
    });

    /**
     * @param {Position} pos
     * @param {jQuery} $target - target element
     * @param {Boolean} [bKeepRatio] - keep ratio
     */
    this.resizeTo = function (pos, $target, bKeepRatio) {
      var imageSize;
      if (bKeepRatio) {
        var newRatio = pos.y / pos.x;
        var ratio = $target.data('ratio');
        imageSize = {
          width: ratio > newRatio ? pos.x : pos.y / ratio,
          height: ratio > newRatio ? pos.x * ratio : pos.y
        };
      } else {
        imageSize = {
          width: pos.x,
          height: pos.y
        };
      }

      $target.css(imageSize);
    };

    /**
     * remove media object
     */
    this.removeMedia = this.wrapCommand(function () {
      var $target = $(this.restoreTarget()).detach();
      context.triggerEvent('media.delete', $target, $editable);
    });

    /**
     * returns whether editable area has focus or not.
     */
    this.hasFocus = function () {
      return $editable.is(':focus');
    };

    /**
     * set focus
     */
    this.focus = function () {
      // [workaround] Screen will move when page is scolled in IE.
      //  - do focus when not focused
      if (!this.hasFocus()) {
        $editable.focus();
      }
    };

    /**
     * returns whether contents is empty or not.
     * @return {Boolean}
     */
    this.isEmpty = function () {
      return dom.isEmpty($editable[0]) || dom.emptyPara === $editable.html();
    };

    /**
     * Removes all contents and restores the editable instance to an _emptyPara_.
     */
    this.empty = function () {
      context.invoke('code', dom.emptyPara);
    };
  };

  var Clipboard = function (context) {
    var self = this;

    var $editable = context.layoutInfo.editable;

    this.events = {
      'summernote.keydown': function (we, e) {
        if (self.needKeydownHook()) {
          if ((e.ctrlKey || e.metaKey) && e.keyCode === key.code.V) {
            context.invoke('editor.saveRange');
            self.$paste.focus();

            setTimeout(function () {
              self.pasteByHook();
            }, 0);
          }
        }
      }
    };

    this.needKeydownHook = function () {
      return (agent.isMSIE && agent.browserVersion > 10) || agent.isFF;
    };

    this.initialize = function () {
      // [workaround] getting image from clipboard
      //  - IE11 and Firefox: CTRL+v hook
      //  - Webkit: event.clipboardData
      if (this.needKeydownHook()) {
        this.$paste = $('<div tabindex="-1" />').attr('contenteditable', true).css({
          position: 'absolute',
          left: -100000,
          opacity: 0
        });
        $editable.before(this.$paste);

        this.$paste.on('paste', function (event) {
          context.triggerEvent('paste', event);
        });
      } else {
        $editable.on('paste', this.pasteByEvent);
      }
    };

    this.destroy = function () {
      if (this.needKeydownHook()) {
        this.$paste.remove();
        this.$paste = null;
      }
    };

    this.pasteByHook = function () {
      var node = this.$paste[0].firstChild;

      var src = node && node.src;
      if (dom.isImg(node) && src.indexOf('data:') === 0) {
        var decodedData = atob(node.src.split(',')[1]);
        var array = new Uint8Array(decodedData.length);
        for (var i = 0; i < decodedData.length; i++) {
          array[i] = decodedData.charCodeAt(i);
        }

        var blob = new Blob([array], { type: 'image/png' });
        blob.name = 'clipboard.png';

        context.invoke('editor.restoreRange');
        context.invoke('editor.focus');
        context.invoke('editor.insertImagesOrCallback', [blob]);
      } else {
        var pasteContent = $('<div />').html(this.$paste.html()).html();
        context.invoke('editor.restoreRange');
        context.invoke('editor.focus');

        if (pasteContent) {
          context.invoke('editor.pasteHTML', pasteContent);
        }
      }

      this.$paste.empty();
    };

    /**
     * paste by clipboard event
     *
     * @param {Event} event
     */
    this.pasteByEvent = function (event) {
      var clipboardData = event.originalEvent.clipboardData;
      if (clipboardData && clipboardData.items && clipboardData.items.length) {
        var item = list.head(clipboardData.items);
        if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
          context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
        }
        context.invoke('editor.afterCommand');
      }
    };
  };

  var Dropzone = function (context) {
    var $document = $(document);
    var $editor = context.layoutInfo.editor;
    var $editable = context.layoutInfo.editable;
    var options = context.options;
    var lang = options.langInfo;
    var documentEventHandlers = {};

    var $dropzone = $([
      '<div class="note-dropzone">',
      '  <div class="note-dropzone-message"/>',
      '</div>'
    ].join('')).prependTo($editor);

    var detachDocumentEvent = function () {
      Object.keys(documentEventHandlers).forEach(function (key) {
        $document.off(key.substr(2).toLowerCase(), documentEventHandlers[key]);
      });
      documentEventHandlers = {};
    };

    /**
     * attach Drag and Drop Events
     */
    this.initialize = function () {
      if (options.disableDragAndDrop) {
        // prevent default drop event
        documentEventHandlers.onDrop = function (e) {
          e.preventDefault();
        };
        $document.on('drop', documentEventHandlers.onDrop);
      } else {
        this.attachDragAndDropEvent();
      }
    };

    /**
     * attach Drag and Drop Events
     */
    this.attachDragAndDropEvent = function () {
      var collection = $(),
          $dropzoneMessage = $dropzone.find('.note-dropzone-message');

      documentEventHandlers.onDragenter = function (e) {
        var isCodeview = context.invoke('codeview.isActivated');
        var hasEditorSize = $editor.width() > 0 && $editor.height() > 0;
        if (!isCodeview && !collection.length && hasEditorSize) {
          $editor.addClass('dragover');
          $dropzone.width($editor.width());
          $dropzone.height($editor.height());
          $dropzoneMessage.text(lang.image.dragImageHere);
        }
        collection = collection.add(e.target);
      };

      documentEventHandlers.onDragleave = function (e) {
        collection = collection.not(e.target);
        if (!collection.length) {
          $editor.removeClass('dragover');
        }
      };

      documentEventHandlers.onDrop = function () {
        collection = $();
        $editor.removeClass('dragover');
      };

      // show dropzone on dragenter when dragging a object to document
      // -but only if the editor is visible, i.e. has a positive width and height
      $document.on('dragenter', documentEventHandlers.onDragenter)
        .on('dragleave', documentEventHandlers.onDragleave)
        .on('drop', documentEventHandlers.onDrop);

      // change dropzone's message on hover.
      $dropzone.on('dragenter', function () {
        $dropzone.addClass('hover');
        $dropzoneMessage.text(lang.image.dropImage);
      }).on('dragleave', function () {
        $dropzone.removeClass('hover');
        $dropzoneMessage.text(lang.image.dragImageHere);
      });

      // attach dropImage
      $dropzone.on('drop', function (event) {
        var dataTransfer = event.originalEvent.dataTransfer;

        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
          event.preventDefault();
          $editable.focus();
          context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
        } else {
          $.each(dataTransfer.types, function (idx, type) {
            var content = dataTransfer.getData(type);

            if (type.toLowerCase().indexOf('text') > -1) {
              context.invoke('editor.pasteHTML', content);
            } else {
              $(content).each(function () {
                context.invoke('editor.insertNode', this);
              });
            }
          });
        }
      }).on('dragover', false); // prevent default dragover event
    };

    this.destroy = function () {
      detachDocumentEvent();
    };
  };


  var CodeMirror;
  if (agent.hasCodeMirror) {
    if (agent.isSupportAmd) {
      require(['codemirror'], function (cm) {
        CodeMirror = cm;
      });
    } else {
      CodeMirror = window.CodeMirror;
    }
  }

  /**
   * @class Codeview
   */
  var Codeview = function (context) {
    var $editor = context.layoutInfo.editor;
    var $editable = context.layoutInfo.editable;
    var $codable = context.layoutInfo.codable;
    var options = context.options;

    this.sync = function () {
      var isCodeview = this.isActivated();
      if (isCodeview && agent.hasCodeMirror) {
        $codable.data('cmEditor').save();
      }
    };

    /**
     * @return {Boolean}
     */
    this.isActivated = function () {
      return $editor.hasClass('codeview');
    };

    /**
     * toggle codeview
     */
    this.toggle = function () {
      if (this.isActivated()) {
        this.deactivate();
      } else {
        this.activate();
      }
      context.triggerEvent('codeview.toggled');
    };

    /**
     * activate code view
     */
    this.activate = function () {
      $codable.val(dom.html($editable, options.prettifyHtml));
      $codable.height($editable.height());

      context.invoke('toolbar.updateCodeview', true);
      $editor.addClass('codeview');
      $codable.focus();

      // activate CodeMirror as codable
      if (agent.hasCodeMirror) {
        var cmEditor = CodeMirror.fromTextArea($codable[0], options.codemirror);

        // CodeMirror TernServer
        if (options.codemirror.tern) {
          var server = new CodeMirror.TernServer(options.codemirror.tern);
          cmEditor.ternServer = server;
          cmEditor.on('cursorActivity', function (cm) {
            server.updateArgHints(cm);
          });
        }

        // CodeMirror hasn't Padding.
        cmEditor.setSize(null, $editable.outerHeight());
        $codable.data('cmEditor', cmEditor);
      }
    };

    /**
     * deactivate code view
     */
    this.deactivate = function () {
      // deactivate CodeMirror as codable
      if (agent.hasCodeMirror) {
        var cmEditor = $codable.data('cmEditor');
        $codable.val(cmEditor.getValue());
        cmEditor.toTextArea();
      }

      var value = dom.value($codable, options.prettifyHtml) || dom.emptyPara;
      var isChange = $editable.html() !== value;

      $editable.html(value);
      $editable.height(options.height ? $codable.height() : 'auto');
      $editor.removeClass('codeview');

      if (isChange) {
        context.triggerEvent('change', $editable.html(), $editable);
      }

      $editable.focus();

      context.invoke('toolbar.updateCodeview', false);
    };

    this.destroy = function () {
      if (this.isActivated()) {
        this.deactivate();
      }
    };
  };

  var EDITABLE_PADDING = 24;

  var Statusbar = function (context) {
    var $document = $(document);
    var $statusbar = context.layoutInfo.statusbar;
    var $editable = context.layoutInfo.editable;
    var options = context.options;

    this.initialize = function () {
      if (options.airMode || options.disableResizeEditor) {
        this.destroy();
        return;
      }

      $statusbar.on('mousedown', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var editableTop = $editable.offset().top - $document.scrollTop();
        var onMouseMove = function (event) {
          var height = event.clientY - (editableTop + EDITABLE_PADDING);

          height = (options.minheight > 0) ? Math.max(height, options.minheight) : height;
          height = (options.maxHeight > 0) ? Math.min(height, options.maxHeight) : height;

          $editable.height(height);
        };

        $document
          .on('mousemove', onMouseMove)
          .one('mouseup', function () {
            $document.off('mousemove', onMouseMove);
          });
      });
    };

    this.destroy = function () {
      $statusbar.off();
      $statusbar.remove();
    };
  };

  var Fullscreen = function (context) {
    var self = this;
    var $editor = context.layoutInfo.editor;
    var $toolbar = context.layoutInfo.toolbar;
    var $editable = context.layoutInfo.editable;
    var $codable = context.layoutInfo.codable;

    var $window = $(window);
    var $scrollbar = $('html, body');

    this.resizeTo = function (size) {
      $editable.css('height', size.h);
      $codable.css('height', size.h);
      if ($codable.data('cmeditor')) {
        $codable.data('cmeditor').setsize(null, size.h);
      }
    };

    this.onResize = function () {
      self.resizeTo({
        h: $window.height() - $toolbar.outerHeight()
      });
    };

    /**
     * toggle fullscreen
     */
    this.toggle = function () {
      $editor.toggleClass('fullscreen');
      if (this.isFullscreen()) {
        $editable.data('orgHeight', $editable.css('height'));
        $window.on('resize', this.onResize).trigger('resize');
        $scrollbar.css('overflow', 'hidden');
      } else {
        $window.off('resize', this.onResize);
        this.resizeTo({ h: $editable.data('orgHeight') });
        $scrollbar.css('overflow', 'visible');
      }

      context.invoke('toolbar.updateFullscreen', this.isFullscreen());
    };

    this.isFullscreen = function () {
      return $editor.hasClass('fullscreen');
    };
  };

  var Handle = function (context) {
    var self = this;

    var $document = $(document);
    var $editingArea = context.layoutInfo.editingArea;
    var options = context.options;

    this.events = {
      'summernote.mousedown': function (we, e) {
        if (self.update(e.target)) {
          e.preventDefault();
        }
      },
      'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function () {
        self.update();
      },
      'summernote.disable': function () {
        self.hide();
      },
      'summernote.codeview.toggled': function () {
        self.update();
      }
    };

    this.initialize = function () {
      this.$handle = $([
        '<div class="note-handle">',
        '<div class="note-control-selection">',
        '<div class="note-control-selection-bg"></div>',
        '<div class="note-control-holder note-control-nw"></div>',
        '<div class="note-control-holder note-control-ne"></div>',
        '<div class="note-control-holder note-control-sw"></div>',
        '<div class="',
        (options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing'),
        ' note-control-se"></div>',
        (options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>'),
        '</div>',
        '</div>'
      ].join('')).prependTo($editingArea);

      this.$handle.on('mousedown', function (event) {
        if (dom.isControlSizing(event.target)) {
          event.preventDefault();
          event.stopPropagation();

          var $target = self.$handle.find('.note-control-selection').data('target'),
              posStart = $target.offset(),
              scrollTop = $document.scrollTop();

          var onMouseMove = function (event) {
            context.invoke('editor.resizeTo', {
              x: event.clientX - posStart.left,
              y: event.clientY - (posStart.top - scrollTop)
            }, $target, !event.shiftKey);

            self.update($target[0]);
          };

          $document
            .on('mousemove', onMouseMove)
            .one('mouseup', function (e) {
              e.preventDefault();
              $document.off('mousemove', onMouseMove);
              context.invoke('editor.afterCommand');
            });

          if (!$target.data('ratio')) { // original ratio.
            $target.data('ratio', $target.height() / $target.width());
          }
        }
      });

      // Listen for scrolling on the handle overlay.
      this.$handle.on('wheel', function (e) {
        e.preventDefault();
        self.update();
      });
    };

    this.destroy = function () {
      this.$handle.remove();
    };

    this.update = function (target) {
      if (context.isDisabled()) {
        return false;
      }

      var isImage = dom.isImg(target);
      var $selection = this.$handle.find('.note-control-selection');

      context.invoke('imagePopover.update', target);

      if (isImage) {
        var $image = $(target);
        var position = $image.position();
        var pos = {
          left: position.left + parseInt($image.css('marginLeft'), 10),
          top: position.top + parseInt($image.css('marginTop'), 10)
        };

        // exclude margin
        var imageSize = {
          w: $image.outerWidth(false),
          h: $image.outerHeight(false)
        };

        $selection.css({
          display: 'block',
          left: pos.left,
          top: pos.top,
          width: imageSize.w,
          height: imageSize.h
        }).data('target', $image); // save current image element.

        var sizingText = imageSize.w + 'x' + imageSize.h;
        $selection.find('.note-control-selection-info').text(sizingText);
        context.invoke('editor.saveTarget', target);
      } else {
        this.hide();
      }

      return isImage;
    };

    /**
     * hide
     *
     * @param {jQuery} $handle
     */
    this.hide = function () {
      context.invoke('editor.clearTarget');
      this.$handle.children().hide();
    };
  };

  var AutoLink = function (context) {
    var self = this;
    var defaultScheme = 'http://';
    var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;

    this.events = {
      'summernote.keyup': function (we, e) {
        if (!e.isDefaultPrevented()) {
          self.handleKeyup(e);
        }
      },
      'summernote.keydown': function (we, e) {
        self.handleKeydown(e);
      }
    };

    this.initialize = function () {
      this.lastWordRange = null;
    };

    this.destroy = function () {
      this.lastWordRange = null;
    };

    this.replace = function () {
      if (!this.lastWordRange) {
        return;
      }

      var keyword = this.lastWordRange.toString();
      var match = keyword.match(linkPattern);

      if (match && (match[1] || match[2])) {
        var link = match[1] ? keyword : defaultScheme + keyword;
        var node = $('<a />').html(keyword).attr('href', link)[0];

        this.lastWordRange.insertNode(node);
        this.lastWordRange = null;
        context.invoke('editor.focus');
      }

    };

    this.handleKeydown = function (e) {
      if (list.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
        var wordRange = context.invoke('editor.createRange').getWordRange();
        this.lastWordRange = wordRange;
      }
    };

    this.handleKeyup = function (e) {
      if (list.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
        this.replace();
      }
    };
  };

  /**
   * textarea auto sync.
   */
  var AutoSync = function (context) {
    var $note = context.layoutInfo.note;

    this.events = {
      'summernote.change': function () {
        $note.val(context.invoke('code'));
      }
    };

    this.shouldInitialize = function () {
      return dom.isTextarea($note[0]);
    };
  };

  var Placeholder = function (context) {
    var self = this;
    var $editingArea = context.layoutInfo.editingArea;
    var options = context.options;

    this.events = {
      'summernote.init summernote.change': function () {
        self.update();
      },
      'summernote.codeview.toggled': function () {
        self.update();
      }
    };

    this.shouldInitialize = function () {
      return !!options.placeholder;
    };

    this.initialize = function () {
      this.$placeholder = $('<div class="note-placeholder">');
      this.$placeholder.on('click', function () {
        context.invoke('focus');
      }).text(options.placeholder).prependTo($editingArea);

      this.update();
    };

    this.destroy = function () {
      this.$placeholder.remove();
    };

    this.update = function () {
      var isShow = !context.invoke('codeview.isActivated') && context.invoke('editor.isEmpty');
      this.$placeholder.toggle(isShow);
    };
  };

  var Buttons = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $toolbar = context.layoutInfo.toolbar;
    var options = context.options;
    var lang = options.langInfo;

    var invertedKeyMap = func.invertObject(options.keyMap[agent.isMac ? 'mac' : 'pc']);

    var representShortcut = this.representShortcut = function (editorMethod) {
      var shortcut = invertedKeyMap[editorMethod];
      if (!options.shortcuts || !shortcut) {
        return '';
      }

      if (agent.isMac) {
        shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
      }

      shortcut = shortcut.replace('BACKSLASH', '\\')
                         .replace('SLASH', '/')
                         .replace('LEFTBRACKET', '[')
                         .replace('RIGHTBRACKET', ']');

      return ' (' + shortcut + ')';
    };

    this.initialize = function () {
      this.addToolbarButtons();
      this.addImagePopoverButtons();
      this.addLinkPopoverButtons();
      this.addTablePopoverButtons();
      this.fontInstalledMap = {};
    };

    this.destroy = function () {
      delete this.fontInstalledMap;
    };

    this.isFontInstalled = function (name) {
      if (!self.fontInstalledMap.hasOwnProperty(name)) {
        self.fontInstalledMap[name] = agent.isFontInstalled(name) ||
          list.contains(options.fontNamesIgnoreCheck, name);
      }

      return self.fontInstalledMap[name];
    };

    this.addToolbarButtons = function () {
      context.memo('button.style', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.dropdownButtonContents(ui.icon(options.icons.magic), options),
            tooltip: lang.style.style,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown({
            className: 'dropdown-style',
            items: context.options.styleTags,
            template: function (item) {

              if (typeof item === 'string') {
                item = { tag: item, title: (lang.style.hasOwnProperty(item) ? lang.style[item] : item) };
              }

              var tag = item.tag;
              var title = item.title;
              var style = item.style ? ' style="' + item.style + '" ' : '';
              var className = item.className ? ' class="' + item.className + '"' : '';

              return '<' + tag + style + className + '>' + title + '</' + tag +  '>';
            },
            click: context.createInvokeHandler('editor.formatBlock')
          })
        ]).render();
      });

      context.memo('button.bold', function () {
        return ui.button({
          className: 'note-btn-bold',
          contents: ui.icon(options.icons.bold),
          tooltip: lang.font.bold + representShortcut('bold'),
          click: context.createInvokeHandlerAndUpdateState('editor.bold')
        }).render();
      });

      context.memo('button.italic', function () {
        return ui.button({
          className: 'note-btn-italic',
          contents: ui.icon(options.icons.italic),
          tooltip: lang.font.italic + representShortcut('italic'),
          click: context.createInvokeHandlerAndUpdateState('editor.italic')
        }).render();
      });

      context.memo('button.underline', function () {
        return ui.button({
          className: 'note-btn-underline',
          contents: ui.icon(options.icons.underline),
          tooltip: lang.font.underline + representShortcut('underline'),
          click: context.createInvokeHandlerAndUpdateState('editor.underline')
        }).render();
      });

      context.memo('button.clear', function () {
        return ui.button({
          contents: ui.icon(options.icons.eraser),
          tooltip: lang.font.clear + representShortcut('removeFormat'),
          click: context.createInvokeHandler('editor.removeFormat')
        }).render();
      });

      context.memo('button.strikethrough', function () {
        return ui.button({
          className: 'note-btn-strikethrough',
          contents: ui.icon(options.icons.strikethrough),
          tooltip: lang.font.strikethrough + representShortcut('strikethrough'),
          click: context.createInvokeHandlerAndUpdateState('editor.strikethrough')
        }).render();
      });

      context.memo('button.superscript', function () {
        return ui.button({
          className: 'note-btn-superscript',
          contents: ui.icon(options.icons.superscript),
          tooltip: lang.font.superscript,
          click: context.createInvokeHandlerAndUpdateState('editor.superscript')
        }).render();
      });

      context.memo('button.subscript', function () {
        return ui.button({
          className: 'note-btn-subscript',
          contents: ui.icon(options.icons.subscript),
          tooltip: lang.font.subscript,
          click: context.createInvokeHandlerAndUpdateState('editor.subscript')
        }).render();
      });

      context.memo('button.fontname', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.dropdownButtonContents('<span class="note-current-fontname"/>', options),
            tooltip: lang.font.name,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdownCheck({
            className: 'dropdown-fontname',
            checkClassName: options.icons.menuCheck,
            items: options.fontNames.filter(self.isFontInstalled),
            template: function (item) {
              return '<span style="font-family:' + item + '">' + item + '</span>';
            },
            click: context.createInvokeHandlerAndUpdateState('editor.fontName')
          })
        ]).render();
      });

      context.memo('button.fontsize', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.dropdownButtonContents('<span class="note-current-fontsize"/>', options),
            tooltip: lang.font.size,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdownCheck({
            className: 'dropdown-fontsize',
            checkClassName: options.icons.menuCheck,
            items: options.fontSizes,
            click: context.createInvokeHandlerAndUpdateState('editor.fontSize')
          })
        ]).render();
      });

      context.memo('button.color', function () {
        return ui.buttonGroup({
          className: 'note-color',
          children: [
            ui.button({
              className: 'note-current-color-button',
              contents: ui.icon(options.icons.font + ' note-recent-color'),
              tooltip: lang.color.recent,
              click: function (e) {
                var $button = $(e.currentTarget);
                context.invoke('editor.color', {
                  backColor: $button.attr('data-backColor'),
                  foreColor: $button.attr('data-foreColor')
                });
              },
              callback: function ($button) {
                var $recentColor = $button.find('.note-recent-color');
                $recentColor.css('background-color', '#FFFF00');
                $button.attr('data-backColor', '#FFFF00');
              }
            }),
            ui.button({
              className: 'dropdown-toggle',
              contents: ui.dropdownButtonContents('', options),
              tooltip: lang.color.more,
              data: {
                toggle: 'dropdown'
              }
            }),
            ui.dropdown({
              items: [
                '<div class="note-palette">',
                '  <div class="note-palette-title">' + lang.color.background + '</div>',
                '  <div>',
                '    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">',
                lang.color.transparent,
                '    </button>',
                '  </div>',
                '  <div class="note-holder" data-event="backColor"/>',
                '</div>',
                '<div class="note-palette">',
                '  <div class="note-palette-title">' + lang.color.foreground + '</div>',
                '  <div>',
                '    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">',
                lang.color.resetToDefault,
                '    </button>',
                '  </div>',
                '  <div class="note-holder" data-event="foreColor"/>',
                '</div>'
              ].join(''),
              callback: function ($dropdown) {
                $dropdown.find('.note-holder').each(function () {
                  var $holder = $(this);
                  $holder.append(ui.palette({
                    colors: options.colors,
                    eventName: $holder.data('event'),
                    tooltip: options.tooltip
                  }).render());
                });
              },
              click: function (event) {
                var $button = $(event.target);
                var eventName = $button.data('event');
                var value = $button.data('value');

                if (eventName && value) {
                  var key = eventName === 'backColor' ? 'background-color' : 'color';
                  var $color = $button.closest('.note-color').find('.note-recent-color');
                  var $currentButton = $button.closest('.note-color').find('.note-current-color-button');

                  $color.css(key, value);
                  $currentButton.attr('data-' + eventName, value);
                  context.invoke('editor.' + eventName, value);
                }
              }
            })
          ]
        }).render();
      });

      context.memo('button.ul',  function () {
        return ui.button({
          contents: ui.icon(options.icons.unorderedlist),
          tooltip: lang.lists.unordered + representShortcut('insertUnorderedList'),
          click: context.createInvokeHandler('editor.insertUnorderedList')
        }).render();
      });

      context.memo('button.ol', function () {
        return ui.button({
          contents: ui.icon(options.icons.orderedlist),
          tooltip: lang.lists.ordered + representShortcut('insertOrderedList'),
          click:  context.createInvokeHandler('editor.insertOrderedList')
        }).render();
      });

      var justifyLeft = ui.button({
        contents: ui.icon(options.icons.alignLeft),
        tooltip: lang.paragraph.left + representShortcut('justifyLeft'),
        click: context.createInvokeHandler('editor.justifyLeft')
      });

      var justifyCenter = ui.button({
        contents: ui.icon(options.icons.alignCenter),
        tooltip: lang.paragraph.center + representShortcut('justifyCenter'),
        click: context.createInvokeHandler('editor.justifyCenter')
      });

      var justifyRight = ui.button({
        contents: ui.icon(options.icons.alignRight),
        tooltip: lang.paragraph.right + representShortcut('justifyRight'),
        click: context.createInvokeHandler('editor.justifyRight')
      });

      var justifyFull = ui.button({
        contents: ui.icon(options.icons.alignJustify),
        tooltip: lang.paragraph.justify + representShortcut('justifyFull'),
        click: context.createInvokeHandler('editor.justifyFull')
      });

      var outdent = ui.button({
        contents: ui.icon(options.icons.outdent),
        tooltip: lang.paragraph.outdent + representShortcut('outdent'),
        click: context.createInvokeHandler('editor.outdent')
      });

      var indent = ui.button({
        contents: ui.icon(options.icons.indent),
        tooltip: lang.paragraph.indent + representShortcut('indent'),
        click: context.createInvokeHandler('editor.indent')
      });

      context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
      context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
      context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
      context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
      context.memo('button.outdent', func.invoke(outdent, 'render'));
      context.memo('button.indent', func.invoke(indent, 'render'));

      context.memo('button.paragraph', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.dropdownButtonContents(ui.icon(options.icons.alignLeft), options),
            tooltip: lang.paragraph.paragraph,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown([
            ui.buttonGroup({
              className: 'note-align',
              children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
            }),
            ui.buttonGroup({
              className: 'note-list',
              children: [outdent, indent]
            })
          ])
        ]).render();
      });

      context.memo('button.height', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.dropdownButtonContents(ui.icon(options.icons.textHeight), options),
            tooltip: lang.font.height,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdownCheck({
            items: options.lineHeights,
            checkClassName: options.icons.menuCheck,
            className: 'dropdown-line-height',
            click: context.createInvokeHandler('editor.lineHeight')
          })
        ]).render();
      });

      context.memo('button.table', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.dropdownButtonContents(ui.icon(options.icons.table), options),
            tooltip: lang.table.table,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown({
            className: 'note-table',
            items: [
              '<div class="note-dimension-picker">',
              '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>',
              '  <div class="note-dimension-picker-highlighted"/>',
              '  <div class="note-dimension-picker-unhighlighted"/>',
              '</div>',
              '<div class="note-dimension-display">1 x 1</div>'
            ].join('')
          })
        ], {
          callback: function ($node) {
            var $catcher = $node.find('.note-dimension-picker-mousecatcher');
            $catcher.css({
              width: options.insertTableMaxSize.col + 'em',
              height: options.insertTableMaxSize.row + 'em'
            }).mousedown(context.createInvokeHandler('editor.insertTable'))
              .on('mousemove', self.tableMoveHandler);
          }
        }).render();
      });

      context.memo('button.link', function () {
        return ui.button({
          contents: ui.icon(options.icons.link),
          tooltip: lang.link.link + representShortcut('linkDialog.show'),
          click: context.createInvokeHandler('linkDialog.show')
        }).render();
      });

      context.memo('button.picture', function () {
        return ui.button({
          contents: ui.icon(options.icons.picture),
          tooltip: lang.image.image,
          click: context.createInvokeHandler('imageDialog.show')
        }).render();
      });

      context.memo('button.video', function () {
        return ui.button({
          contents: ui.icon(options.icons.video),
          tooltip: lang.video.video,
          click: context.createInvokeHandler('videoDialog.show')
        }).render();
      });

      context.memo('button.hr', function () {
        return ui.button({
          contents: ui.icon(options.icons.minus),
          tooltip: lang.hr.insert + representShortcut('insertHorizontalRule'),
          click: context.createInvokeHandler('editor.insertHorizontalRule')
        }).render();
      });

      context.memo('button.fullscreen', function () {
        return ui.button({
          className: 'btn-fullscreen',
          contents: ui.icon(options.icons.arrowsAlt),
          tooltip: lang.options.fullscreen,
          click: context.createInvokeHandler('fullscreen.toggle')
        }).render();
      });

      context.memo('button.codeview', function () {
        return ui.button({
          className: 'btn-codeview',
          contents: ui.icon(options.icons.code),
          tooltip: lang.options.codeview,
          click: context.createInvokeHandler('codeview.toggle')
        }).render();
      });

      context.memo('button.redo', function () {
        return ui.button({
          contents: ui.icon(options.icons.redo),
          tooltip: lang.history.redo + representShortcut('redo'),
          click: context.createInvokeHandler('editor.redo')
        }).render();
      });

      context.memo('button.undo', function () {
        return ui.button({
          contents: ui.icon(options.icons.undo),
          tooltip: lang.history.undo + representShortcut('undo'),
          click: context.createInvokeHandler('editor.undo')
        }).render();
      });

      context.memo('button.help', function () {
        return ui.button({
          contents: ui.icon(options.icons.question),
          tooltip: lang.options.help,
          click: context.createInvokeHandler('helpDialog.show')
        }).render();
      });
    };

    /**
     * image : [
     *   ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
     *   ['float', ['floatLeft', 'floatRight', 'floatNone' ]],
     *   ['remove', ['removeMedia']]
     * ],
     */
    this.addImagePopoverButtons = function () {
      // Image Size Buttons
      context.memo('button.imageSize100', function () {
        return ui.button({
          contents: '<span class="note-fontsize-10">100%</span>',
          tooltip: lang.image.resizeFull,
          click: context.createInvokeHandler('editor.resize', '1')
        }).render();
      });
      context.memo('button.imageSize50', function () {
        return  ui.button({
          contents: '<span class="note-fontsize-10">50%</span>',
          tooltip: lang.image.resizeHalf,
          click: context.createInvokeHandler('editor.resize', '0.5')
        }).render();
      });
      context.memo('button.imageSize25', function () {
        return ui.button({
          contents: '<span class="note-fontsize-10">25%</span>',
          tooltip: lang.image.resizeQuarter,
          click: context.createInvokeHandler('editor.resize', '0.25')
        }).render();
      });

      // Float Buttons
      context.memo('button.floatLeft', function () {
        return ui.button({
          contents: ui.icon(options.icons.alignLeft),
          tooltip: lang.image.floatLeft,
          click: context.createInvokeHandler('editor.floatMe', 'left')
        }).render();
      });

      context.memo('button.floatRight', function () {
        return ui.button({
          contents: ui.icon(options.icons.alignRight),
          tooltip: lang.image.floatRight,
          click: context.createInvokeHandler('editor.floatMe', 'right')
        }).render();
      });

      context.memo('button.floatNone', function () {
        return ui.button({
          contents: ui.icon(options.icons.alignJustify),
          tooltip: lang.image.floatNone,
          click: context.createInvokeHandler('editor.floatMe', 'none')
        }).render();
      });

      // Remove Buttons
      context.memo('button.removeMedia', function () {
        return ui.button({
          contents: ui.icon(options.icons.trash),
          tooltip: lang.image.remove,
          click: context.createInvokeHandler('editor.removeMedia')
        }).render();
      });
    };

    this.addLinkPopoverButtons = function () {
      context.memo('button.linkDialogShow', function () {
        return ui.button({
          contents: ui.icon(options.icons.link),
          tooltip: lang.link.edit,
          click: context.createInvokeHandler('linkDialog.show')
        }).render();
      });

      context.memo('button.unlink', function () {
        return ui.button({
          contents: ui.icon(options.icons.unlink),
          tooltip: lang.link.unlink,
          click: context.createInvokeHandler('editor.unlink')
        }).render();
      });
    };

    /**
     * table : [
     *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
     *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
     * ],
     */
    this.addTablePopoverButtons = function () {
      context.memo('button.addRowUp', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.rowAbove),
          tooltip: lang.table.addRowAbove,
          click: context.createInvokeHandler('editor.addRow', 'top')
        }).render();
      });
      context.memo('button.addRowDown', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.rowBelow),
          tooltip: lang.table.addRowBelow,
          click: context.createInvokeHandler('editor.addRow', 'bottom')
        }).render();
      });
      context.memo('button.addColLeft', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.colBefore),
          tooltip: lang.table.addColLeft,
          click: context.createInvokeHandler('editor.addCol', 'left')
        }).render();
      });
      context.memo('button.addColRight', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.colAfter),
          tooltip: lang.table.addColRight,
          click: context.createInvokeHandler('editor.addCol', 'right')
        }).render();
      });
      context.memo('button.deleteRow', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.rowRemove),
          tooltip: lang.table.delRow,
          click: context.createInvokeHandler('editor.deleteRow')
        }).render();
      });
      context.memo('button.deleteCol', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.colRemove),
          tooltip: lang.table.delCol,
          click: context.createInvokeHandler('editor.deleteCol')
        }).render();
      });
      context.memo('button.deleteTable', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.trash),
          tooltip: lang.table.delTable,
          click: context.createInvokeHandler('editor.deleteTable')
        }).render();
      });
    };

    this.build = function ($container, groups) {
      for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
        var group = groups[groupIdx];
        var groupName = group[0];
        var buttons = group[1];

        var $group = ui.buttonGroup({
          className: 'note-' + groupName
        }).render();

        for (var idx = 0, len = buttons.length; idx < len; idx++) {
          var button = context.memo('button.' + buttons[idx]);
          if (button) {
            $group.append(typeof button === 'function' ? button(context) : button);
          }
        }
        $group.appendTo($container);
      }
    };

    /**
     * @param {jQuery} [$container]
     */
    this.updateCurrentStyle = function ($container) {
      var $cont = $container || $toolbar;
      
      var styleInfo = context.invoke('editor.currentStyle');
      this.updateBtnStates($cont, {
        '.note-btn-bold': function () {
          return styleInfo['font-bold'] === 'bold';
        },
        '.note-btn-italic': function () {
          return styleInfo['font-italic'] === 'italic';
        },
        '.note-btn-underline': function () {
          return styleInfo['font-underline'] === 'underline';
        },
        '.note-btn-subscript': function () {
          return styleInfo['font-subscript'] === 'subscript';
        },
        '.note-btn-superscript': function () {
          return styleInfo['font-superscript'] === 'superscript';
        },
        '.note-btn-strikethrough': function () {
          return styleInfo['font-strikethrough'] === 'strikethrough';
        }
      });

      if (styleInfo['font-family']) {
        var fontNames = styleInfo['font-family'].split(',').map(function (name) {
          return name.replace(/[\'\"]/g, '')
            .replace(/\s+$/, '')
            .replace(/^\s+/, '');
        });
        var fontName = list.find(fontNames, self.isFontInstalled);

        $cont.find('.dropdown-fontname a').each(function () {
          var $item = $(this);
          // always compare string to avoid creating another func.
          var isChecked = ($item.data('value') + '') === (fontName + '');
          $item.toggleClass('checked', isChecked);
        });
        $cont.find('.note-current-fontname').text(fontName);
      }

      if (styleInfo['font-size']) {
        var fontSize = styleInfo['font-size'];
        $cont.find('.dropdown-fontsize a').each(function () {
          var $item = $(this);
          // always compare with string to avoid creating another func.
          var isChecked = ($item.data('value') + '') === (fontSize + '');
          $item.toggleClass('checked', isChecked);
        });
        $cont.find('.note-current-fontsize').text(fontSize);
      }

      if (styleInfo['line-height']) {
        var lineHeight = styleInfo['line-height'];
        $cont.find('.dropdown-line-height li a').each(function () {
          // always compare with string to avoid creating another func.
          var isChecked = ($(this).data('value') + '') === (lineHeight + '');
          this.className = isChecked ? 'checked' : '';
        });
      }
    };

    this.updateBtnStates = function ($container, infos) {
      $.each(infos, function (selector, pred) {
        ui.toggleBtnActive($container.find(selector), pred());
      });
    };

    this.tableMoveHandler = function (event) {
      var PX_PER_EM = 18;
      var $picker = $(event.target.parentNode); // target is mousecatcher
      var $dimensionDisplay = $picker.next();
      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
      var $highlighted = $picker.find('.note-dimension-picker-highlighted');
      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');

      var posOffset;
      // HTML5 with jQuery - e.offsetX is undefined in Firefox
      if (event.offsetX === undefined) {
        var posCatcher = $(event.target).offset();
        posOffset = {
          x: event.pageX - posCatcher.left,
          y: event.pageY - posCatcher.top
        };
      } else {
        posOffset = {
          x: event.offsetX,
          y: event.offsetY
        };
      }

      var dim = {
        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
      };

      $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
      $catcher.data('value', dim.c + 'x' + dim.r);

      if (3 < dim.c && dim.c < options.insertTableMaxSize.col) {
        $unhighlighted.css({ width: dim.c + 1 + 'em'});
      }

      if (3 < dim.r && dim.r < options.insertTableMaxSize.row) {
        $unhighlighted.css({ height: dim.r + 1 + 'em'});
      }

      $dimensionDisplay.html(dim.c + ' x ' + dim.r);
    };
  };

  var Toolbar = function (context) {
    var ui = $.summernote.ui;

    var $note = context.layoutInfo.note;
    var $editor = context.layoutInfo.editor;
    var $toolbar = context.layoutInfo.toolbar;
    var options = context.options;

    this.shouldInitialize = function () {
      return !options.airMode;
    };

    this.initialize = function () {
      options.toolbar = options.toolbar || [];

      if (!options.toolbar.length) {
        $toolbar.hide();
      } else {
        context.invoke('buttons.build', $toolbar, options.toolbar);
      }

      if (options.toolbarContainer) {
        $toolbar.appendTo(options.toolbarContainer);
      }

      this.changeContainer(false);

      $note.on('summernote.keyup summernote.mouseup summernote.change', function () {
        context.invoke('buttons.updateCurrentStyle');
      });

      context.invoke('buttons.updateCurrentStyle');
    };

    this.destroy = function () {
      $toolbar.children().remove();
    };

    this.changeContainer = function (isFullscreen) {
      if (isFullscreen) {
        $toolbar.prependTo($editor);
      } else {
        if (options.toolbarContainer) {
          $toolbar.appendTo(options.toolbarContainer);
        }
      }
    };

    this.updateFullscreen = function (isFullscreen) {
      ui.toggleBtnActive($toolbar.find('.btn-fullscreen'), isFullscreen);

      this.changeContainer(isFullscreen);
    };

    this.updateCodeview = function (isCodeview) {
      ui.toggleBtnActive($toolbar.find('.btn-codeview'), isCodeview);
      if (isCodeview) {
        this.deactivate();
      } else {
        this.activate();
      }
    };

    this.activate = function (isIncludeCodeview) {
      var $btn = $toolbar.find('button');
      if (!isIncludeCodeview) {
        $btn = $btn.not('.btn-codeview');
      }
      ui.toggleBtn($btn, true);
    };

    this.deactivate = function (isIncludeCodeview) {
      var $btn = $toolbar.find('button');
      if (!isIncludeCodeview) {
        $btn = $btn.not('.btn-codeview');
      }
      ui.toggleBtn($btn, false);
    };
  };

  var LinkDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = '<div class="form-group note-form-group">' +
                   '<label class="note-form-label">' + lang.link.textToDisplay + '</label>' +
                   '<input class="note-link-text form-control '+
                   ' note-form-control  note-input" type="text" />' +
                 '</div>' +
                 '<div class="form-group note-form-group">' +
                   '<label class="note-form-label">' + lang.link.url + '</label>' +
                   '<input class="note-link-url form-control note-form-control ' +
                   'note-input" type="text" value="http://" />' +
                 '</div>' +
      (!options.disableLinkTarget ?
          $('<div/>').append(ui.checkbox({ id: 'sn-checkbox-open-in-new-window', text: lang.link.openInNewWindow, checked: true }).render())
              .html()
          : '');
      var footer = '<button href="#" class="btn btn-primary note-btn note-btn-primary ' +
      'note-link-btn disabled" disabled>' + lang.link.insert + '</button>';

      this.$dialog = ui.dialog({
        className: 'link-dialog',
        title: lang.link.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          $btn.trigger('click');
        }
      });
    };

    /**
     * toggle update button
     */
    this.toggleLinkBtn = function ($linkBtn, $linkText, $linkUrl) {
      ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
    };

    /**
     * Show link dialog and set event handlers on dialog controls.
     *
     * @param {Object} linkInfo
     * @return {Promise}
     */
    this.showLinkDialog = function (linkInfo) {
      return $.Deferred(function (deferred) {
        var $linkText = self.$dialog.find('.note-link-text'),
        $linkUrl = self.$dialog.find('.note-link-url'),
        $linkBtn = self.$dialog.find('.note-link-btn'),
        $openInNewWindow = self.$dialog.find('input[type=checkbox]');

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');

          // if no url was given, copy text to url
          if (!linkInfo.url) {
            linkInfo.url = linkInfo.text;
          }

          $linkText.val(linkInfo.text);

          var handleLinkTextUpdate = function () {
            self.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
            // if linktext was modified by keyup,
            // stop cloning text from linkUrl
            linkInfo.text = $linkText.val();
          };

          $linkText.on('input', handleLinkTextUpdate).on('paste', function () {
            setTimeout(handleLinkTextUpdate, 0);
          });

          var handleLinkUrlUpdate = function () {
            self.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
            // display same link on `Text to display` input
            // when create a new link
            if (!linkInfo.text) {
              $linkText.val($linkUrl.val());
            }
          };

          $linkUrl.on('input', handleLinkUrlUpdate).on('paste', function () {
            setTimeout(handleLinkUrlUpdate, 0);
          }).val(linkInfo.url).trigger('focus');

          self.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
          self.bindEnterKey($linkUrl, $linkBtn);
          self.bindEnterKey($linkText, $linkBtn);

          var isChecked = linkInfo.isNewWindow !== undefined ?
            linkInfo.isNewWindow : context.options.linkTargetBlank;

          $openInNewWindow.prop('checked', isChecked);

          $linkBtn.one('click', function (event) {
            event.preventDefault();

            deferred.resolve({
              range: linkInfo.range,
              url: $linkUrl.val(),
              text: $linkText.val(),
              isNewWindow: $openInNewWindow.is(':checked')
            });
            ui.hideDialog(self.$dialog);
          });
        });

        ui.onDialogHidden(self.$dialog, function () {
          // detach events
          $linkText.off('input paste keypress');
          $linkUrl.off('input paste keypress');
          $linkBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      }).promise();
    };

    /**
     * @param {Object} layoutInfo
     */
    this.show = function () {
      var linkInfo = context.invoke('editor.getLinkInfo');

      context.invoke('editor.saveRange');
      this.showLinkDialog(linkInfo).then(function (linkInfo) {
        context.invoke('editor.restoreRange');
        context.invoke('editor.createLink', linkInfo);
      }).fail(function () {
        context.invoke('editor.restoreRange');
      });
    };
    context.memo('help.linkDialog.show', options.langInfo.help['linkDialog.show']);
  };

  var LinkPopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    this.events = {
      'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function () {
        self.update();
      },
      'summernote.disable summernote.dialog.shown': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return !list.isEmpty(options.popover.link);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-link-popover',
        callback: function ($node) {
          var $content = $node.find('.popover-content,.note-popover-content');
          $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
        }
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content,.note-popover-content');

      context.invoke('buttons.build', $content, options.popover.link);
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function () {
      // Prevent focusing on editable when invoke('code') is executed
      if (!context.invoke('editor.hasFocus')) {
        this.hide();
        return;
      }

      var rng = context.invoke('editor.createRange');
      if (rng.isCollapsed() && rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        var href = $(anchor).attr('href');
        this.$popover.find('a').attr('href', href).html(href);

        var pos = dom.posFromPlaceholder(anchor);
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var ImageDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var imageLimitation = '';
      if (options.maximumImageFileSize) {
        var unit = Math.floor(Math.log(options.maximumImageFileSize) / Math.log(1024));
        var readableSize = (options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
                           ' ' + ' KMGTP'[unit] + 'B';
        imageLimitation = '<small>' + lang.image.maximumFileSize + ' : ' + readableSize + '</small>';
      }

      var body = '<div class="form-group note-form-group note-group-select-from-files">' +
                   '<label class="note-form-label">' + lang.image.selectFromFiles + '</label>' +
                   '<input class="note-image-input form-control note-form-control note-input" '+
                   ' type="file" name="files" accept="image/*" multiple="multiple" />' +
                   imageLimitation +
                 '</div>' + 
                 '<div class="form-group note-group-image-url" style="overflow:auto;">' +
                   '<label class="note-form-label">' + lang.image.url + '</label>' +
                   '<input class="note-image-url form-control note-form-control note-input ' +
                   ' col-md-12" type="text" />' +
                 '</div>';
      var footer = '<button href="#" class="btn btn-primary note-btn note-btn-primary ' +
      'note-image-btn disabled" disabled>' + lang.image.insert + '</button>';

      this.$dialog = ui.dialog({
        title: lang.image.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          $btn.trigger('click');
        }
      });
    };

    this.show = function () {
      context.invoke('editor.saveRange');
      this.showImageDialog().then(function (data) {
        // [workaround] hide dialog before restore range for IE range focus
        ui.hideDialog(self.$dialog);
        context.invoke('editor.restoreRange');

        if (typeof data === 'string') { // image url
          context.invoke('editor.insertImage', data);
        } else { // array of files
          context.invoke('editor.insertImagesOrCallback', data);
        }
      }).fail(function () {
        context.invoke('editor.restoreRange');
      });
    };

    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    this.showImageDialog = function () {
      return $.Deferred(function (deferred) {
        var $imageInput = self.$dialog.find('.note-image-input'),
            $imageUrl = self.$dialog.find('.note-image-url'),
            $imageBtn = self.$dialog.find('.note-image-btn');

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');

          // Cloning imageInput to clear element.
          $imageInput.replaceWith($imageInput.clone()
            .on('change', function () {
              deferred.resolve(this.files || this.value);
            })
            .val('')
          );

          $imageBtn.click(function (event) {
            event.preventDefault();

            deferred.resolve($imageUrl.val());
          });

          $imageUrl.on('keyup paste', function () {
            var url = $imageUrl.val();
            ui.toggleBtn($imageBtn, url);
          }).val('').trigger('focus');
          self.bindEnterKey($imageUrl, $imageBtn);
        });

        ui.onDialogHidden(self.$dialog, function () {
          $imageInput.off('change');
          $imageUrl.off('keyup paste keypress');
          $imageBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      });
    };
  };


  /**
   * Image popover module
   *  mouse events that show/hide popover will be handled by Handle.js.
   *  Handle.js will receive the events and invoke 'imagePopover.update'.
   */
  var ImagePopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editable = context.layoutInfo.editable;
    var editable = $editable[0];
    var options = context.options;

    this.events = {
      'summernote.disable': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return !list.isEmpty(options.popover.image);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-image-popover'
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content,.note-popover-content');

      context.invoke('buttons.build', $content, options.popover.image);
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function (target) {
      if (dom.isImg(target)) {
        var pos = dom.posFromPlaceholder(target);
        var posEditor = dom.posFromPlaceholder(editable);

        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: Math.min(pos.top, posEditor.top)
        });
      } else {
        this.hide();
      }
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var TablePopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    this.events = {
      'summernote.mousedown': function (we, e) {
        self.update(e.target);
      },
      'summernote.keyup summernote.scroll summernote.change': function () {
        self.update();
      },
      'summernote.disable': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return !list.isEmpty(options.popover.table);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-table-popover'
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content,.note-popover-content');

      context.invoke('buttons.build', $content, options.popover.table);

      // [workaround] Disable Firefox's default table editor
      if (agent.isFF) {
        document.execCommand('enableInlineTableEditing', false, false);
      }
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function (target) {
      if (context.isDisabled()) {
        return false;
      }

      var isCell = dom.isCell(target);

      if (isCell) {
        var pos = dom.posFromPlaceholder(target);
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }

      return isCell;
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var VideoDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = '<div class="form-group note-form-group row-fluid">' +
          '<label class="note-form-label">' + lang.video.url + ' <small class="text-muted">' + lang.video.providers + '</small></label>' +
          '<input class="note-video-url form-control  note-form-control note-input span12" ' + 
          ' type="text" />' +
          '</div>';
      var footer = '<button href="#" class="btn btn-primary note-btn note-btn-primary ' + 
      ' note-video-btn disabled" disabled>' + lang.video.insert + '</button>';

      this.$dialog = ui.dialog({
        title: lang.video.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          $btn.trigger('click');
        }
      });
    };

    this.createVideoNode = function (url) {
      // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
      var ytRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      var ytMatch = url.match(ytRegExp);

      var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
      var igMatch = url.match(igRegExp);

      var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
      var vMatch = url.match(vRegExp);

      var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
      var vimMatch = url.match(vimRegExp);

      var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
      var dmMatch = url.match(dmRegExp);

      var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
      var youkuMatch = url.match(youkuRegExp);

      var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
      var qqMatch = url.match(qqRegExp);

      var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
      var qqMatch2 = url.match(qqRegExp2);

      var mp4RegExp = /^.+.(mp4|m4v)$/;
      var mp4Match = url.match(mp4RegExp);

      var oggRegExp = /^.+.(ogg|ogv)$/;
      var oggMatch = url.match(oggRegExp);

      var webmRegExp = /^.+.(webm)$/;
      var webmMatch = url.match(webmRegExp);

      var $video;
      if (ytMatch && ytMatch[1].length === 11) {
        var youtubeId = ytMatch[1];
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', '//www.youtube.com/embed/' + youtubeId)
            .attr('width', '640').attr('height', '360');
      } else if (igMatch && igMatch[0].length) {
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/')
            .attr('width', '612').attr('height', '710')
            .attr('scrolling', 'no')
            .attr('allowtransparency', 'true');
      } else if (vMatch && vMatch[0].length) {
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', vMatch[0] + '/embed/simple')
            .attr('width', '600').attr('height', '600')
            .attr('class', 'vine-embed');
      } else if (vimMatch && vimMatch[3].length) {
        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
            .attr('frameborder', 0)
            .attr('src', '//player.vimeo.com/video/' + vimMatch[3])
            .attr('width', '640').attr('height', '360');
      } else if (dmMatch && dmMatch[2].length) {
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2])
            .attr('width', '640').attr('height', '360');
      } else if (youkuMatch && youkuMatch[1].length) {
        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
            .attr('frameborder', 0)
            .attr('height', '498')
            .attr('width', '510')
            .attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
      } else if ((qqMatch && qqMatch[1].length) || (qqMatch2 && qqMatch2[2].length)) {
        var vid = ((qqMatch && qqMatch[1].length) ? qqMatch[1]:qqMatch2[2]);
        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
            .attr('frameborder', 0)
            .attr('height', '310')
            .attr('width', '500')
            .attr('src', 'http://v.qq.com/iframe/player.html?vid=' + vid + '&amp;auto=0');
      } else if (mp4Match || oggMatch || webmMatch) {
        $video = $('<video controls>')
            .attr('src', url)
            .attr('width', '640').attr('height', '360');
      } else {
        // this is not a known video link. Now what, Cat? Now what?
        return false;
      }

      $video.addClass('note-video-clip');

      return $video[0];
    };

    this.show = function () {
      var text = context.invoke('editor.getSelectedText');
      context.invoke('editor.saveRange');
      this.showVideoDialog(text).then(function (url) {
        // [workaround] hide dialog before restore range for IE range focus
        ui.hideDialog(self.$dialog);
        context.invoke('editor.restoreRange');

        // build node
        var $node = self.createVideoNode(url);

        if ($node) {
          // insert video node
          context.invoke('editor.insertNode', $node);
        }
      }).fail(function () {
        context.invoke('editor.restoreRange');
      });
    };

    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    this.showVideoDialog = function (text) {
      return $.Deferred(function (deferred) {
        var $videoUrl = self.$dialog.find('.note-video-url'),
            $videoBtn = self.$dialog.find('.note-video-btn');

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');

          $videoUrl.val(text).on('input', function () {
            ui.toggleBtn($videoBtn, $videoUrl.val());
          }).trigger('focus');

          $videoBtn.click(function (event) {
            event.preventDefault();

            deferred.resolve($videoUrl.val());
          });

          self.bindEnterKey($videoUrl, $videoBtn);
        });

        ui.onDialogHidden(self.$dialog, function () {
          $videoUrl.off('input');
          $videoBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      });
    };
  };

  var HelpDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.createShortCutList = function () {
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
      return Object.keys(keyMap).map(function (key) {
        var command = keyMap[key];
        var $row = $('<div><div class="help-list-item"/></div>');
        $row.append($('<label><kbd>' + key + '</kdb></label>').css({
          'width': 180,
          'margin-right': 10
        })).append($('<span/>').html(context.memo('help.' + command) || command));
        return $row.html();
      }).join('');
    };

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = [
        '<p class="text-center">',
        '<a href="http://summernote.org/" target="_blank">Summernote 0.8.8</a> · ',
        '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
        '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
        '</p>'
      ].join('');

      this.$dialog = ui.dialog({
        title: lang.options.help,
        fade: options.dialogsFade,
        body: this.createShortCutList(),
        footer: body,
        callback: function ($node) {
          $node.find('.modal-body,.note-modal-body').css({
            'max-height': 300,
            'overflow': 'scroll'
          });
        }
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    /**
     * show help dialog
     *
     * @return {Promise}
     */
    this.showHelpDialog = function () {
      return $.Deferred(function (deferred) {
        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');
          deferred.resolve();
        });
        ui.showDialog(self.$dialog);
      }).promise();
    };

    this.show = function () {
      context.invoke('editor.saveRange');
      this.showHelpDialog().then(function () {
        context.invoke('editor.restoreRange');
      });
    };
  };

  var AirPopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    var AIR_MODE_POPOVER_X_OFFSET = 20;

    this.events = {
      'summernote.keyup summernote.mouseup summernote.scroll': function () {
        self.update();
      },
      'summernote.disable summernote.change summernote.dialog.shown': function () {
        self.hide();
      },
      'summernote.focusout': function (we, e) {
        // [workaround] Firefox doesn't support relatedTarget on focusout
        //  - Ignore hide action on focus out in FF.
        if (agent.isFF) {
          return;
        }

        if (!e.relatedTarget || !dom.ancestor(e.relatedTarget, func.eq(self.$popover[0]))) {
          self.hide();
        }
      }
    };

    this.shouldInitialize = function () {
      return options.airMode && !list.isEmpty(options.popover.air);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-air-popover'
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.air);
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function () {
      var styleInfo = context.invoke('editor.currentStyle');
      if (styleInfo.range && !styleInfo.range.isCollapsed()) {
        var rect = list.last(styleInfo.range.getClientRects());
        if (rect) {
          var bnd = func.rect2bnd(rect);
          this.$popover.css({
            display: 'block',
            left: Math.max(bnd.left + bnd.width / 2, 0) - AIR_MODE_POPOVER_X_OFFSET,
            top: bnd.top + bnd.height
          });
          context.invoke('buttons.updateCurrentStyle', this.$popover);
        }
      } else {
        this.hide();
      }
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var HintPopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var POPOVER_DIST = 5;
    var hint = context.options.hint || [];
    var direction = context.options.hintDirection || 'bottom';
    var hints = $.isArray(hint) ? hint : [hint];

    this.events = {
      'summernote.keyup': function (we, e) {
        if (!e.isDefaultPrevented()) {
          self.handleKeyup(e);
        }
      },
      'summernote.keydown': function (we, e) {
        self.handleKeydown(e);
      },
      'summernote.disable summernote.dialog.shown': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return hints.length > 0;
    };

    this.initialize = function () {
      this.lastWordRange = null;
      this.$popover = ui.popover({
        className: 'note-hint-popover',
        hideArrow: true,
        direction: ''
      }).render().appendTo('body');

      this.$popover.hide();

      this.$content = this.$popover.find('.popover-content,.note-popover-content');

      this.$content.on('click', '.note-hint-item', function () {
        self.$content.find('.active').removeClass('active');
        $(this).addClass('active');
        self.replace();
      });
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.selectItem = function ($item) {
      this.$content.find('.active').removeClass('active');
      $item.addClass('active');

      this.$content[0].scrollTop = $item[0].offsetTop - (this.$content.innerHeight() / 2);
    };

    this.moveDown = function () {
      var $current = this.$content.find('.note-hint-item.active');
      var $next = $current.next();

      if ($next.length) {
        this.selectItem($next);
      } else {
        var $nextGroup = $current.parent().next();

        if (!$nextGroup.length) {
          $nextGroup = this.$content.find('.note-hint-group').first();
        }

        this.selectItem($nextGroup.find('.note-hint-item').first());
      }
    };

    this.moveUp = function () {
      var $current = this.$content.find('.note-hint-item.active');
      var $prev = $current.prev();

      if ($prev.length) {
        this.selectItem($prev);
      } else {
        var $prevGroup = $current.parent().prev();

        if (!$prevGroup.length) {
          $prevGroup = this.$content.find('.note-hint-group').last();
        }

        this.selectItem($prevGroup.find('.note-hint-item').last());
      }
    };

    this.replace = function () {
      var $item = this.$content.find('.note-hint-item.active');

      if ($item.length) {
        var node = this.nodeFromItem($item);
        // XXX: consider to move codes to editor for recording redo/undo.
        this.lastWordRange.insertNode(node);
        range.createFromNode(node).collapse().select();

        this.lastWordRange = null;
        this.hide();
        context.triggerEvent('change', context.layoutInfo.editable.html(), context.layoutInfo.editable);
        context.invoke('editor.focus');
      }

    };

    this.nodeFromItem = function ($item) {
      var hint = hints[$item.data('index')];
      var item = $item.data('item');
      var node = hint.content ? hint.content(item) : item;
      if (typeof node === 'string') {
        node = dom.createText(node);
      }
      return node;
    };

    this.createItemTemplates = function (hintIdx, items) {
      var hint = hints[hintIdx];
      return items.map(function (item, idx) {
        var $item = $('<div class="note-hint-item"/>');
        $item.append(hint.template ? hint.template(item) : item + '');
        $item.data({
          'index': hintIdx,
          'item': item
        });

        if (hintIdx === 0 && idx === 0) {
          $item.addClass('active');
        }
        return $item;
      });
    };

    this.handleKeydown = function (e) {
      if (!this.$popover.is(':visible')) {
        return;
      }

      if (e.keyCode === key.code.ENTER) {
        e.preventDefault();
        this.replace();
      } else if (e.keyCode === key.code.UP) {
        e.preventDefault();
        this.moveUp();
      } else if (e.keyCode === key.code.DOWN) {
        e.preventDefault();
        this.moveDown();
      }
    };

    this.searchKeyword = function (index, keyword, callback) {
      var hint = hints[index];
      if (hint && hint.match.test(keyword) && hint.search) {
        var matches = hint.match.exec(keyword);
        hint.search(matches[1], callback);
      } else {
        callback();
      }
    };

    this.createGroup = function (idx, keyword) {
      var $group = $('<div class="note-hint-group note-hint-group-' + idx + '"/>');
      this.searchKeyword(idx, keyword, function (items) {
        items = items || [];
        if (items.length) {
          $group.html(self.createItemTemplates(idx, items));
          self.show();
        }
      });

      return $group;
    };

    this.handleKeyup = function (e) {
      if (list.contains([key.code.ENTER, key.code.UP, key.code.DOWN], e.keyCode)) {
        if (e.keyCode === key.code.ENTER) {
          if (this.$popover.is(':visible')) {
            return;
          }
        }
      } else {
        var wordRange = context.invoke('editor.createRange').getWordRange();
        var keyword = wordRange.toString();
        if (hints.length && keyword) {
          this.$content.empty();

          var bnd = func.rect2bnd(list.last(wordRange.getClientRects()));
          if (bnd) {

            this.$popover.hide();

            this.lastWordRange = wordRange;

            hints.forEach(function (hint, idx) {
              if (hint.match.test(keyword)) {
                self.createGroup(idx, keyword).appendTo(self.$content);
              }
            });

            // set position for popover after group is created
            if (direction === 'top') {
              this.$popover.css({
                left: bnd.left,
                top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
              });
            } else {
              this.$popover.css({
                left: bnd.left,
                top: bnd.top + bnd.height + POPOVER_DIST
              });
            }

          }
        } else {
          this.hide();
        }
      }
    };

    this.show = function () {
      this.$popover.show();
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };


  $.summernote = $.extend($.summernote, {
    version: '0.8.8',
    ui: ui,
    dom: dom,

    plugins: {},

    options: {
      modules: {
        'editor': Editor,
        'clipboard': Clipboard,
        'dropzone': Dropzone,
        'codeview': Codeview,
        'statusbar': Statusbar,
        'fullscreen': Fullscreen,
        'handle': Handle,
        // FIXME: HintPopover must be front of autolink
        //  - Script error about range when Enter key is pressed on hint popover
        'hintPopover': HintPopover,
        'autoLink': AutoLink,
        'autoSync': AutoSync,
        'placeholder': Placeholder,
        'buttons': Buttons,
        'toolbar': Toolbar,
        'linkDialog': LinkDialog,
        'linkPopover': LinkPopover,
        'imageDialog': ImageDialog,
        'imagePopover': ImagePopover,
        'tablePopover': TablePopover,
        'videoDialog': VideoDialog,
        'helpDialog': HelpDialog,
        'airPopover': AirPopover
      },

      buttons: {},

      lang: 'en-US',

      // toolbar
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ],

      // popover
      popover: {
        image: [
          ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
          ['float', ['floatLeft', 'floatRight', 'floatNone']],
          ['remove', ['removeMedia']]
        ],
        link: [
          ['link', ['linkDialogShow', 'unlink']]
        ],
        table: [
          ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
          ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
        ],
        air: [
          ['color', ['color']],
          ['font', ['bold', 'underline', 'clear']],
          ['para', ['ul', 'paragraph']],
          ['table', ['table']],
          ['insert', ['link', 'picture']]
        ]
      },

      // air mode: inline editor
      airMode: false,

      width: null,
      height: null,
      linkTargetBlank: true,

      focus: false,
      tabSize: 4,
      styleWithSpan: true,
      shortcuts: true,
      textareaAutoSync: true,
      direction: null,
      tooltip: 'auto',

      styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

      fontNames: [
        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
        'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
        'Tahoma', 'Times New Roman', 'Verdana'
      ],

      fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],

      // pallete colors(n x n)
      colors: [
        ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
        ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
        ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
        ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
        ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
        ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
        ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
        ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
      ],

      lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],

      tableClassName: 'table table-bordered',

      insertTableMaxSize: {
        col: 10,
        row: 10
      },

      dialogsInBody: false,
      dialogsFade: false,

      maximumImageFileSize: null,

      callbacks: {
        onInit: null,
        onFocus: null,
        onBlur: null,
        onEnter: null,
        onKeyup: null,
        onKeydown: null,
        onImageUpload: null,
        onImageUploadError: null
      },

      codemirror: {
        mode: 'text/html',
        htmlMode: true,
        lineNumbers: true
      },

      keyMap: {
        pc: {
          'ENTER': 'insertParagraph',
          'CTRL+Z': 'undo',
          'CTRL+Y': 'redo',
          'TAB': 'tab',
          'SHIFT+TAB': 'untab',
          'CTRL+B': 'bold',
          'CTRL+I': 'italic',
          'CTRL+U': 'underline',
          'CTRL+SHIFT+S': 'strikethrough',
          'CTRL+BACKSLASH': 'removeFormat',
          'CTRL+SHIFT+L': 'justifyLeft',
          'CTRL+SHIFT+E': 'justifyCenter',
          'CTRL+SHIFT+R': 'justifyRight',
          'CTRL+SHIFT+J': 'justifyFull',
          'CTRL+SHIFT+NUM7': 'insertUnorderedList',
          'CTRL+SHIFT+NUM8': 'insertOrderedList',
          'CTRL+LEFTBRACKET': 'outdent',
          'CTRL+RIGHTBRACKET': 'indent',
          'CTRL+NUM0': 'formatPara',
          'CTRL+NUM1': 'formatH1',
          'CTRL+NUM2': 'formatH2',
          'CTRL+NUM3': 'formatH3',
          'CTRL+NUM4': 'formatH4',
          'CTRL+NUM5': 'formatH5',
          'CTRL+NUM6': 'formatH6',
          'CTRL+ENTER': 'insertHorizontalRule',
          'CTRL+K': 'linkDialog.show'
        },

        mac: {
          'ENTER': 'insertParagraph',
          'CMD+Z': 'undo',
          'CMD+SHIFT+Z': 'redo',
          'TAB': 'tab',
          'SHIFT+TAB': 'untab',
          'CMD+B': 'bold',
          'CMD+I': 'italic',
          'CMD+U': 'underline',
          'CMD+SHIFT+S': 'strikethrough',
          'CMD+BACKSLASH': 'removeFormat',
          'CMD+SHIFT+L': 'justifyLeft',
          'CMD+SHIFT+E': 'justifyCenter',
          'CMD+SHIFT+R': 'justifyRight',
          'CMD+SHIFT+J': 'justifyFull',
          'CMD+SHIFT+NUM7': 'insertUnorderedList',
          'CMD+SHIFT+NUM8': 'insertOrderedList',
          'CMD+LEFTBRACKET': 'outdent',
          'CMD+RIGHTBRACKET': 'indent',
          'CMD+NUM0': 'formatPara',
          'CMD+NUM1': 'formatH1',
          'CMD+NUM2': 'formatH2',
          'CMD+NUM3': 'formatH3',
          'CMD+NUM4': 'formatH4',
          'CMD+NUM5': 'formatH5',
          'CMD+NUM6': 'formatH6',
          'CMD+ENTER': 'insertHorizontalRule',
          'CMD+K': 'linkDialog.show'
        }
      },
      icons: {
        'align': 'note-icon-align',
        'alignCenter': 'note-icon-align-center',
        'alignJustify': 'note-icon-align-justify',
        'alignLeft': 'note-icon-align-left',
        'alignRight': 'note-icon-align-right',
        'rowBelow': 'note-icon-row-below',
        'colBefore': 'note-icon-col-before',
        'colAfter': 'note-icon-col-after',
        'rowAbove': 'note-icon-row-above',
        'rowRemove': 'note-icon-row-remove',
        'colRemove': 'note-icon-col-remove',
        'indent': 'note-icon-align-indent',
        'outdent': 'note-icon-align-outdent',
        'arrowsAlt': 'note-icon-arrows-alt',
        'bold': 'note-icon-bold',
        'caret': 'note-icon-caret',
        'circle': 'note-icon-circle',
        'close': 'note-icon-close',
        'code': 'note-icon-code',
        'eraser': 'note-icon-eraser',
        'font': 'note-icon-font',
        'frame': 'note-icon-frame',
        'italic': 'note-icon-italic',
        'link': 'note-icon-link',
        'unlink': 'note-icon-chain-broken',
        'magic': 'note-icon-magic',
        'menuCheck': 'note-icon-menu-check',
        'minus': 'note-icon-minus',
        'orderedlist': 'note-icon-orderedlist',
        'pencil': 'note-icon-pencil',
        'picture': 'note-icon-picture',
        'question': 'note-icon-question',
        'redo': 'note-icon-redo',
        'square': 'note-icon-square',
        'strikethrough': 'note-icon-strikethrough',
        'subscript': 'note-icon-subscript',
        'superscript': 'note-icon-superscript',
        'table': 'note-icon-table',
        'textHeight': 'note-icon-text-height',
        'trash': 'note-icon-trash',
        'underline': 'note-icon-underline',
        'undo': 'note-icon-undo',
        'unorderedlist': 'note-icon-unorderedlist',
        'video': 'note-icon-video'
      }
    }
  });

}));

$(function () {
    "use strict";

    // ==============================================================
    // Spinner
    // ==============================================================

    $(function () {
        $(".preloader").fadeOut();
    });
    jQuery(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation()
    });

    // ==============================================================
    // Top header part and sidebar part
    // ==============================================================

    var set = function () {
        var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
        var topOffset = 70;
        if (width < 1170) {
            $("body").addClass("mini-sidebar");
            $('.navbar-brand span').hide();
            $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
        }
        else {
            $("body").removeClass("mini-sidebar");
            $('.navbar-brand span').show();
        }
        var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $(".page-wrapper").css("min-height", (height) + "px");
        }
    };
    $(window).ready(set);
    $(window).on("resize", set);
    $(document).on('click', '.sidebartoggler', function () {
        if ($("body").hasClass("mini-sidebar")) {
            $("body").trigger("resize");
            $(".scroll-sidebar, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
            $("body").removeClass("mini-sidebar");
            $('.navbar-brand span').show();
        }
        else {
            $("body").trigger("resize");
            $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
            $("body").addClass("mini-sidebar");
            $('.navbar-brand span').hide();
        }
    });

    $(document).on('click', ".nav-toggler", function () {
        $("body").toggleClass("show-sidebar");
    });

    // ==============================================================
    // Sidebar menu
    // ==============================================================

    $(function () {
        $('#sidebarnav').metisMenu();
    });
    $('.scroll-sidebar').slimScroll({
        position: 'left'
        , size: "5px"
        , height: '100%'
        , color: '#dcdcdc'
    });
    $('.message-scroll').slimScroll({
        position: 'right'
        , size: "5px"
        , height: '570'
        , color: '#dcdcdc'
    });

    // ==============================================================
    // Resize all elements
    // ==============================================================

    $("body").trigger("resize");
});
