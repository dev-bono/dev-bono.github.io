(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return b});n(38);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(158),c=n.n(s),l=n(151),u=n(159),p=n.n(u),d=n(156),m=n(150),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.pageContext,a=e.location,r=n.previous,i=n.next,s=a.href,u=t.markdownRemark,h=u.frontmatter.title,b=p()(this.props,"data.site.siteMetadata.title"),v=u.excerpt;return o.a.createElement(d.a,{location:this.props.location},o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:v}],title:h+" | "+b,script:[f,g,,],noscript:[y]}),o.a.createElement("h3",{style:{lineHeight:Object(m.a)(1.1)}},u.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(3),marginTop:Object(m.a)(-1),color:"#bbb"})},u.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.html}}),o.a.createElement("div",{id:"disqus_thread"}),o.a.createElement("script",null,function(e,t){return"var disqus_config = function () {\n    this.page.url = "+e+";  // Replace PAGE_URL with your page's canonical URL variable\n    this.page.identifier = "+t+"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\n    };\n    (function() { // DON'T EDIT BELOW THIS LINE\n    var d = document, s = d.createElement('script');\n    s.src = 'https://bonogithub.disqus.com/embed.js';\n    s.setAttribute('data-timestamp', +new Date());\n    (d.head || d.body).appendChild(s);"}(s,h)),o.a.createElement("noscript",null,"Please enable JavaScript to view the"," ",o.a.createElement("a",{href:"https://disqus.com/?ref_noscript"},"comments powered by Disqus.")),o.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,margin:0,fontSize:Object(m.a)(.5)}},o.a.createElement("li",{style:{width:280}},r&&o.a.createElement(l.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",{style:{width:280}},i&&o.a.createElement(l.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(o.a.Component),f={async:!0,src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"},g={innerHTML:'(adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: "ca-pub-4588610260101909",\n    enable_page_level_ads: true\n  });'},y={innerHTML:"Please enable JavaScript to view the{' '}\n  <a href=\"https://disqus.com/?ref_noscript\">\n    comments powered by Disqus.\n  </a>"};var b="3804820323";t.default=h},150:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var a=n(160),r=new(n.n(a).a)({baseFontSize:"15px",baseLineHeight:"1.8",headerFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"],bodyFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"]});var i=r.rhythm,o=r.scale},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(149),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var u=n(152),p=n.n(u);n.d(t,"PageRenderer",function(){return p.a});var d=n(39);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},153:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(53),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,n){},156:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(150),c=(n(52),n(38),n(151)),l={boxShadow:"none",textDecoration:"none",color:"inherit"},u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.pathname,n=e.menuPathname,a=e.menuName;return o.a.createElement("span",{style:Object.assign({},p,{fontWeight:t===n?800:300})},o.a.createElement(c.Link,{style:l,to:n},a))},t}(o.a.Component),p={fontSize:13,flex:"0 0 auto",marginRight:15,marginTop:3,fontWeight:300,color:"#777"},d=u,m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location.pathname;return o.a.createElement("div",{style:{height:"50px",widht:"100%",borderBottom:"1px solid #eee",padding:10}},o.a.createElement("div",{style:{display:"flex",width:"100%",marginBottom:Object(s.a)(1.5)}},o.a.createElement("span",{style:Object.assign({},Object(s.b)(.25),{flex:"1 0 auto",color:"#bbb",marginLeft:20})},o.a.createElement(c.Link,{style:l,to:"/"},"bono's blog")),h.map(function(t){return o.a.createElement(d,{key:t.pathname,pathname:e,menuPathname:t.pathname,menuName:t.title})})))},t}(o.a.Component),h=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/",title:"태그"}],f=m,g=(n(161),n(154),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(f,this.props),o.a.createElement("div",{className:"contents",style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},e))},t}(o.a.Component));t.a=g}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1d94213a8454d0418ebe.js.map