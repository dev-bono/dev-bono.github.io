(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return w});n(38);var r=n(8),a=n.n(r),o=n(0),i=n.n(o),l=n(158),u=n.n(l),s=n(151),c=n(159),p=n.n(c),d=n(156),f=n(150),h=n(225),m=n.n(h),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.pageContext,r=e.location,a=n.previous,o=n.next,l=r.href,c=t.markdownRemark,h=c.frontmatter,y=h.title,w=h.date,b=p()(this.props,"data.site.siteMetadata.title"),x=c.excerpt;return l?i.a.createElement(d.a,{location:r},i.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:x}],title:y+" | "+b,script:[g,v]}),i.a.createElement("h3",{style:{lineHeight:Object(f.a)(1.1)}},y),i.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(3),marginTop:Object(f.a)(-1),color:"#bbb"})},w),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:c.html}}),i.a.createElement("div",{id:"disqus_thread"}),i.a.createElement("script",null,function(e,t){return"\n    var disqus_config = function () {\n    this.page.url = '"+e+"'; \n    this.page.identifier = '"+t+"';\n    };\n    (function() { \n    var d = document, s = d.createElement('script');\n    s.src = 'https://bonogithub.disqus.com/embed.js';\n    s.setAttribute('data-timestamp', +new Date());\n    (d.head || d.body).appendChild(s);\n    })();"}(l,y)),i.a.createElement(m.a,null,i.a.createElement("div",null,i.a.createElement("span",null,"Please enable JavaScript to view the "),i.a.createElement("a",{href:"https://disqus.com/?ref_noscript"},i.a.createElement("span",null,"comments powered by Disqus.")))),i.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,margin:0,fontSize:Object(f.a)(.5)}},i.a.createElement("li",{style:{maxWidth:280}},a&&i.a.createElement(s.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),i.a.createElement("li",{style:{maxWidth:280}},o&&i.a.createElement(s.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))):null},t}(i.a.Component),g={async:!0,src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"},v={innerHTML:'(adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: "ca-pub-4588610260101909",\n    enable_page_level_ads: true\n  });'};var w="3804820323";t.default=y},150:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r=n(160),a=new(n.n(r).a)({baseFontSize:"15px",baseLineHeight:"1.8",headerFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"],bodyFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"]});var o=a.rhythm,i=a.scale},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return h});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(149),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(27);n.d(t,"waitForRouteChange",function(){return s.c});var c=n(152),p=n.n(c);n.d(t,"PageRenderer",function(){return p.a});var d=n(39);n.d(t,"parsePath",function(){return d.a});var f=a.a.createContext({}),h=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){var r;e.exports=(r=n(153))&&r.default||r},153:function(e,t,n){"use strict";n.r(t);n(38);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(53),u=n(1),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){},156:function(e,t,n){"use strict";var r=n(8),a=n.n(r),o=n(0),i=n.n(o),l=n(150),u=(n(52),n(38),n(151)),s={boxShadow:"none",textDecoration:"none",color:"inherit"},c=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.pathname,n=e.menuPathname,r=e.menuName;return i.a.createElement("span",{style:Object.assign({},p,{fontWeight:t===n?800:300})},i.a.createElement(u.Link,{style:s,to:n},r))},t}(i.a.Component),p={fontSize:13,flex:"0 0 auto",marginRight:15,marginTop:3,fontWeight:300,color:"#777"},d=c,f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.location.pathname;return i.a.createElement("div",{style:{height:"50px",widht:"100%",borderBottom:"1px solid #eee",padding:10}},i.a.createElement("div",{style:{display:"flex",width:"100%",marginBottom:Object(l.a)(1.5)}},i.a.createElement("span",{style:Object.assign({},Object(l.b)(.25),{flex:"1 0 auto",color:"#bbb",marginLeft:20})},i.a.createElement(u.Link,{style:s,to:"/"},"bono's blog")),h.map(function(t){return i.a.createElement(d,{key:t.pathname,pathname:e,menuPathname:t.pathname,menuName:t.title})})))},t}(i.a.Component),h=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/",title:"태그"}],m=f,y=(n(161),n(154),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(m,this.props),i.a.createElement("div",{className:"contents",style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e))},t}(i.a.Component));t.a=y},225:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=o.default.renderToStaticMarkup(e.children);return a.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:t}})};var a=r(n(0)),o=r(n(226));e.exports=t.default},226:function(e,t,n){"use strict";e.exports=n(227)},227:function(e,t,n){"use strict";
/** @license React v16.5.1
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(54),a=n(0);function o(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,a,o,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],s=0;(e=Error(t.replace(/%s/g,function(){return u[s++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var i="function"==typeof Symbol&&Symbol.for,l=i?Symbol.for("react.portal"):60106,u=i?Symbol.for("react.fragment"):60107,s=i?Symbol.for("react.strict_mode"):60108,c=i?Symbol.for("react.profiler"):60114,p=i?Symbol.for("react.provider"):60109,d=i?Symbol.for("react.context"):60110,f=i?Symbol.for("react.async_mode"):60111,h=i?Symbol.for("react.forward_ref"):60112,m=i?Symbol.for("react.placeholder"):60113;function y(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case f:return"AsyncMode";case u:return"Fragment";case l:return"Portal";case c:return"Profiler";case s:return"StrictMode";case m:return"Placeholder"}if("object"==typeof e){switch(e.$$typeof){case d:return"Context.Consumer";case p:return"Context.Provider";case h:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef")}if("function"==typeof e.then&&(e=1===e._reactStatus?e._reactResult:null))return y(e)}return null}var g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v=Object.prototype.hasOwnProperty,w={},b={};function x(e){return!!v.call(b,e)||!v.call(w,e)&&(g.test(e)?b[e]=!0:(w[e]=!0,!1))}function k(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function S(e,t,n,r,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new S(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];E[t]=new S(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new S(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new S(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new S(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new S(e,3,!0,e,null)}),["capture","download"].forEach(function(e){E[e]=new S(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){E[e]=new S(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){E[e]=new S(e,5,!1,e.toLowerCase(),null)});var F=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(F,C);E[t]=new S(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(F,C);E[t]=new S(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(F,C);E[t]=new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),E.tabIndex=new S("tabIndex",1,!1,"tabindex",null);var M=/["'&<>]/;function O(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=M.exec(e);if(t){var n,r="",a=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==n&&(r+=e.substring(a,n)),a=n+1,r+=t}e=a!==n?r+e.substring(a,n):r}return e}var N={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function _(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var j={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},P=r({menuitem:!0},j),I={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(I).forEach(function(e){L.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),I[t]=I[e]})});var T=/([A-Z])/g,D=/^ms-/,W=a.Children.toArray,R={listing:!0,pre:!0,textarea:!0},V=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,q={},A={};var z={};var H=Object.prototype.hasOwnProperty,$={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function G(e,t){void 0===e&&o("152",y(t)||"Component")}function U(e,t){function n(n,a){var i=function(e,t){if(e=e.contextTypes){var n,r={};for(n in e)r[n]=t[n];t=r}else t=z;return t}(a,t),l=[],u=!1,s={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===l)return null},enqueueReplaceState:function(e,t){u=!0,l=[t]},enqueueSetState:function(e,t){if(null===l)return null;l.push(t)}},c=void 0;if(a.prototype&&a.prototype.isReactComponent){if(c=new a(n.props,i,s),"function"==typeof a.getDerivedStateFromProps){var p=a.getDerivedStateFromProps.call(null,n.props,c.state);null!=p&&(c.state=r({},c.state,p))}}else if(null==(c=a(n.props,i,s))||null==c.render)return void G(e=c,a);if(c.props=n.props,c.context=i,c.updater=s,void 0===(s=c.state)&&(c.state=s=null),"function"==typeof c.UNSAFE_componentWillMount||"function"==typeof c.componentWillMount)if("function"==typeof c.componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&c.componentWillMount(),"function"==typeof c.UNSAFE_componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&c.UNSAFE_componentWillMount(),l.length){s=l;var d=u;if(l=null,u=!1,d&&1===s.length)c.state=s[0];else{p=d?s[0]:c.state;var f=!0;for(d=d?1:0;d<s.length;d++){var h=s[d];null!=(h="function"==typeof h?h.call(c,p,n.props,i):h)&&(f?(f=!1,p=r({},p,h)):r(p,h))}c.state=p}}else l=null;if(G(e=c.render(),a),n=void 0,"function"==typeof c.getChildContext&&"object"==typeof(i=a.childContextTypes))for(var m in n=c.getChildContext())m in i||o("108",y(a)||"Unknown",m);n&&(t=r({},t,n))}for(;a.isValidElement(e);){var i=e,l=i.type;if("function"!=typeof l)break;n(i,l)}return{child:e,context:t}}var B=function(){function e(t,n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");a.isValidElement(t)?t.type!==u?t=[t]:(t=t.props.children,t=a.isValidElement(t)?[t]:W(t)):t=W(t),this.stack=[{type:null,domNamespace:N.html,children:t,childIndex:0,context:z,footer:""}],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return e.prototype.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=n._currentValue;this.contextStack[t]=n,this.contextValueStack[t]=r,n._currentValue=e.props.value},e.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t._currentValue=n},e.prototype.read=function(e){if(this.exhausted)return null;for(var t="";t.length<e;){if(0===this.stack.length){this.exhausted=!0;break}var n=this.stack[this.stack.length-1];if(n.childIndex>=n.children.length){var r=n.footer;t+=r,""!==r&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===n.type?this.currentSelectValue=null:null!=n.type&&null!=n.type.type&&n.type.type.$$typeof===p&&this.popProvider(n.type)}else r=n.children[n.childIndex++],t+=this.render(r,n.context,n.domNamespace)}return t},e.prototype.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?O(n):this.previousWasTextNode?"\x3c!-- --\x3e"+O(n):(this.previousWasTextNode=!0,O(n));if(e=(t=U(e,t)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var r=e.$$typeof;r===l&&o("257"),o("258",r.toString())}return e=W(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(r=e.type))return this.renderDOM(e,t,n);switch(r){case s:case f:case c:case u:return e=W(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("object"==typeof r&&null!==r)switch(r.$$typeof){case h:return e=W(r.render(e.props,e.ref)),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case p:return n={type:e,domNamespace:n,children:r=W(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case d:return r=W(e.props.children(e.type._currentValue)),this.stack.push({type:e,domNamespace:n,children:r,childIndex:0,context:t,footer:""}),""}o("130",null==r?r:typeof r,"")},e.prototype.renderDOM=function(e,t,n){var i=e.type.toLowerCase();n===N.html&&_(i),q.hasOwnProperty(i)||(V.test(i)||o("65",i),q[i]=!0);var l=e.props;if("input"===i)l=r({type:void 0},l,{defaultChecked:void 0,defaultValue:void 0,value:null!=l.value?l.value:l.defaultValue,checked:null!=l.checked?l.checked:l.defaultChecked});else if("textarea"===i){var u=l.value;if(null==u){u=l.defaultValue;var s=l.children;null!=s&&(null!=u&&o("92"),Array.isArray(s)&&(1>=s.length||o("93"),s=s[0]),u=""+s),null==u&&(u="")}l=r({},l,{value:void 0,children:""+u})}else if("select"===i)this.currentSelectValue=null!=l.value?l.value:l.defaultValue,l=r({},l,{value:void 0});else if("option"===i){s=this.currentSelectValue;var c=function(e){if(null==e)return e;var t="";return a.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(l.children);if(null!=s){var p=null!=l.value?l.value+"":c;if(u=!1,Array.isArray(s)){for(var d=0;d<s.length;d++)if(""+s[d]===p){u=!0;break}}else u=""+s===p;l=r({selected:void 0,children:void 0},l,{selected:u,children:c})}}for(b in(u=l)&&(P[i]&&(null!=u.children||null!=u.dangerouslySetInnerHTML)&&o("137",i,""),null!=u.dangerouslySetInnerHTML&&(null!=u.children&&o("60"),"object"==typeof u.dangerouslySetInnerHTML&&"__html"in u.dangerouslySetInnerHTML||o("61")),null!=u.style&&"object"!=typeof u.style&&o("62","")),u=l,s=this.makeStaticMarkup,c=1===this.stack.length,p="<"+e.type,u)if(H.call(u,b)){var f=u[b];if(null!=f){if("style"===b){d=void 0;var h="",m="";for(d in f)if(f.hasOwnProperty(d)){var y=0===d.indexOf("--"),g=f[d];if(null!=g){var v=d;if(A.hasOwnProperty(v))v=A[v];else{var w=v.replace(T,"-$1").toLowerCase().replace(D,"-ms-");v=A[v]=w}h+=m+v+":",m=d,h+=y=null==g||"boolean"==typeof g||""===g?"":y||"number"!=typeof g||0===g||I.hasOwnProperty(m)&&I[m]?(""+g).trim():g+"px",m=";"}}f=h||null}d=null;e:if(y=i,g=u,-1===y.indexOf("-"))y="string"==typeof g.is;else switch(y){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":y=!1;break e;default:y=!0}y?$.hasOwnProperty(b)||(d=x(d=b)&&null!=f?d+'="'+O(f)+'"':""):(y=b,d=f,f=E.hasOwnProperty(y)?E[y]:null,(g="style"!==y)&&(g=null!==f?0===f.type:2<y.length&&("o"===y[0]||"O"===y[0])&&("n"===y[1]||"N"===y[1])),g||k(y,d,f,!1)?d="":null!==f?(y=f.attributeName,d=3===(f=f.type)||4===f&&!0===d?y+'=""':y+'="'+O(d)+'"'):d=x(y)?y+'="'+O(d)+'"':""),d&&(p+=" "+d)}}s||c&&(p+=' data-reactroot=""');var b=p;u="",j.hasOwnProperty(i)?b+="/>":(b+=">",u="</"+e.type+">");e:{if(null!=(s=l.dangerouslySetInnerHTML)){if(null!=s.__html){s=s.__html;break e}}else if("string"==typeof(s=l.children)||"number"==typeof s){s=O(s);break e}s=null}return null!=s?(l=[],R[i]&&"\n"===s.charAt(0)&&(b+="\n"),b+=s):l=W(l.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?_(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:i,children:l,childIndex:0,context:t,footer:u}),this.previousWasTextNode=!1,b},e}(),Z={renderToString:function(e){return new B(e,!1).read(1/0)},renderToStaticMarkup:function(e){return new B(e,!0).read(1/0)},renderToNodeStream:function(){o("207")},renderToStaticNodeStream:function(){o("208")},version:"16.5.1"},Q={default:Z},J=Q&&Z||Q;e.exports=J.default||J}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c51a2f55945668bc7724.js.map