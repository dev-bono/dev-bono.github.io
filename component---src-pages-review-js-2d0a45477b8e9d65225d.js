(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s}),n.d(e,"pageQuery",function(){return c});var a=n(8),r=n.n(a),i=n(0),o=n.n(i),u=n(157),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement(u.a,this.props)},e}(o.a.Component),c="2455565295"},150:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var a=n(160),r=new(n.n(a).a)({baseFontSize:"17px",baseLineHeight:"1.8",headerFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"],bodyFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"]});var i=r.rhythm,o=r.scale},151:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(149),s=n.n(u);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var c=n(27);n.d(e,"waitForRouteChange",function(){return c.c});var l=n(152),p=n.n(l);n.d(e,"PageRenderer",function(){return p.a});var d=n(39);n.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),h=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(t,e,n){var a;t.exports=(a=n(153))&&a.default||a},153:function(t,e,n){"use strict";n.r(e);n(38);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(53),s=n(1),c=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,Object.assign({key:e.pathname,location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},154:function(t,e,n){},156:function(t,e,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),u=n(150),s=(n(52),n(38),n(151)),c={boxShadow:"none",textDecoration:"none",color:"inherit"},l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.pathname,n=t.menuPathname,a=t.menuName;return o.a.createElement("span",{style:Object.assign({},p,{fontWeight:e===n?800:300})},o.a.createElement(s.Link,{style:c,to:n},a))},e}(o.a.Component),p={fontSize:Object(u.a)(.5),flex:"0 0 auto",marginRight:15,marginTop:3,fontWeight:300,color:"#777"},d=l,m=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.location.pathname;return o.a.createElement("div",{style:{height:Object(u.a)(1.7),widht:"100%",borderBottom:"1px solid #eee",padding:10}},o.a.createElement("div",{style:{display:"flex",width:"100%",marginBottom:Object(u.a)(1.5)}},o.a.createElement("span",{style:Object.assign({},Object(u.b)(.25),{flex:"1 0 auto",color:"#bbb",marginLeft:20})},o.a.createElement(s.Link,{style:c,to:"/"},"bono's blog")),h.map(function(e){return o.a.createElement(d,{key:e.pathname,pathname:t,menuPathname:e.pathname,menuName:e.title})})))},e}(o.a.Component),h=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/",title:"태그"}],f=m,g=(n(161),n(154),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return o.a.createElement("div",null,o.a.createElement(f,this.props),o.a.createElement("div",{className:"contents",style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(26),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},t))},e}(o.a.Component));e.a=g},157:function(t,e,n){"use strict";n(38),n(52);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),u=n(151),s=n(159),c=n.n(s),l=n(158),p=n.n(l),d=n(156),m=n(150),h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=c()(this,"props.data.site.siteMetadata.title"),e=c()(this,"props.data.site.siteMetadata.description"),n=c()(this,"props.data.allMarkdownRemark.edges");return o.a.createElement(d.a,{location:this.props.location},o.a.createElement(p.a,{htmlAttributes:{lang:"ko"},meta:[{name:"description",content:e}],title:t}),n.map(function(t){var e=t.node,n=c()(e,"frontmatter.title")||e.fields.slug;return o.a.createElement("div",{style:{marginBottom:Object(m.a)(1.8)},key:e.fields.slug},o.a.createElement("h3",{style:Object.assign({marginBottom:Object(m.a)(.25),fontWeight:300},Object(m.b)(.3))},o.a.createElement(u.Link,{style:{boxShadow:"none"},to:e.fields.slug},o.a.createElement("span",{style:{color:"#444"}},n))),o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("p",{style:{fontSize:14,color:"#999"},dangerouslySetInnerHTML:{__html:e.excerpt}}))}))},e}(o.a.Component);e.a=h}}]);
//# sourceMappingURL=component---src-pages-review-js-2d0a45477b8e9d65225d.js.map