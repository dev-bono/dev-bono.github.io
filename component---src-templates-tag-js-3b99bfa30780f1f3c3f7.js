(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{222:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return a}),n.d(t,"pageQuery",function(){return i});n(17),n(0);var o=n(243);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(t){return e.createElement(o.a,r({},t,{isTagPage:!0}))}var i="3439876404"}.call(this,n(133))},231:function(e,t,n){"use strict";(function(e){var o=n(0),r=n.n(o),a=n(11),i=n.n(a),c=n(63),l=n.n(c);n.d(t,"a",function(){return l.a}),n.d(t,"b",function(){return c.navigate});n(233),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func}).call(this,n(133))},232:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o={colors:{text:"#333333",grey00:"#555555",grey01:"#888888",grey02:"#aaaaaa",grey03:"#cccccc",lightGrey01:"#e8e8e8",lightGrey02:"#f3f3f3",lightGrey03:"#f9f9f9"}},r=o.colors;t.b=o},233:function(e,t,n){var o;e.exports=(o=n(239))&&o.default||o},234:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return y}),n.d(t,"a",function(){return b});n(17);var o=n(229),r=n(0),a=n(241),i=(n(244),n(245),n(246),n(230)),c=n(232),l=n(237),s=n(235),u=n(242),f=n(238),d=n.n(f),m=n(240),p=n.n(m);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var x=Object(o.default)(i.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-3234dv-0"})(function(e){return{borderBottom:e._css,position:"fixed",left:0,top:"50px",zIndex:100,opacity:.9,maxHeight:e._css2,transition:"max-height 0.5s ease",overflow:"hidden"}}),g=Object(o.default)(i.Box).withConfig({displayName:"layout___StyledBox2",componentId:"sc-3234dv-1"})({maxWidth:"800px"});function y(t){var n=t.children,f=t.location,m=t.data,y=Object(r.useState)(!1),w=y[0],v=y[1],_=Object(r.useState)(!1),E=_[0],j=_[1],O=Object(l.a)().gte768,S=p()(m,"site.siteMetadata.title");return e.createElement(o.ThemeProvider,{theme:c.b},e.createElement(i.Box,null,e.createElement(d.a,{htmlAttributes:{lang:"ko"},title:S},e.createElement("meta",{name:"google-site-verification",content:"R3ZeY1PmaJUY9j_cgNABjesJFgHWVCJpb4TsdfXntMA"}),e.createElement("meta",{name:"naver-site-verification",content:"23eddf7267bb527337927baff11fc26157637f30"})),e.createElement(u.a,{onClick:function(){return v(!1)}},e.createElement(a.a,h({},t,{showMenu:w,onClickMenu:function(){v(!w),j(!0)}}))),e.createElement(i.Box,{mt:"50px"},!O&&e.createElement(x,{width:"100%",bg:"white",onTransitionEnd:function(){return j(!1)},_css:E||w?"1px solid "+c.a.lightGrey01:"none",_css2:w?"400px":"0px"},e.createElement(i.Box,{m:"10px"},b.map(function(t){return e.createElement(i.Flex,{key:t.pathname,justifyContent:"center",alignItems:"center"},e.createElement(s.a,{pathname:f.pathname,menuPathname:t.pathname,menuName:t.title,isVertical:!0},t.title))})))),e.createElement(g,{className:"contents",mx:"auto",p:"45px 20px"},n)))}var b=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/tags",title:"태그"}]}).call(this,n(133))},235:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return u});n(17);var o=n(229),r=(n(0),n(231)),a=n(236),i=n(230),c=n(232);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s=Object(o.default)(r.a).withConfig({displayName:"menu___StyledLink",componentId:"h1woa4-0"})(["",""],a.a);function u(t){var n=t.pathname,o=t.menuPathname,r=t.menuName,a=t.isVertical,u=n===o,f=void 0!==a&&a?{my:"15px",width:"100vw",textAlign:"center",fontSize:u?"23px":"16px"}:{mr:"15px",mt:"3px",fontSize:"15px"};return e.createElement(s,{to:o},e.createElement(i.Text,l({},f,{fontWeight:u?700:400,color:u?c.a.text:c.a.grey01}),r))}}).call(this,n(133))},236:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={boxShadow:"none",textDecoration:"none",color:"inherit"}},237:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(0);function r(){var e=Object(o.useState)(a()),t=e[0],n=e[1];return Object(o.useEffect)(function(){function e(){n(a)}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),{gte768:t}}function a(){return"undefined"!=typeof window&&window.innerWidth>=768}},239:function(e,t,n){"use strict";n.r(t);n(17);var o=n(0),r=n.n(o),a=n(11),i=n.n(a),c=n(91),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},241:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return y});var o=n(229),r=(n(0),n(231)),a=n(235),i=n(236),c=n(230),l=n(237),s=n(234),u=n(232),f=Object(o.default)(c.Flex).withConfig({displayName:"header___StyledFlex",componentId:"sc-1h24lom-0"})(function(e){return{position:"fixed",left:0,top:0,height:"50px",borderBottom:e._css,zIndex:200}}),d=Object(o.default)(c.Text).withConfig({displayName:"header___StyledText",componentId:"sc-1h24lom-1"})({cursor:"pointer","@media (max-width: 600px)":{marginLeft:10}}),m=Object(o.default)(r.a).withConfig({displayName:"header___StyledLink",componentId:"sc-1h24lom-2"})(["",""],i.a),p=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox",componentId:"sc-1h24lom-3"})({height:"28px",cursor:"pointer",overflow:"hidden"}),h=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox2",componentId:"sc-1h24lom-4"})(function(e){return{transition:"all 0.4s",transform:e._css2,transformOrigin:"100% 0"}}),x=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox3",componentId:"sc-1h24lom-5"})(function(e){return{transition:"transform 0.5s",transform:e._css3,transformOrigin:"100% 50%"}}),g=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox4",componentId:"sc-1h24lom-6"})(function(e){return{transition:"all 0.4s",transform:e._css4,transformOrigin:"100% 100%"}});function y(t){var n=t.location,o=t.showMenu,r=t.onClickMenu,i=Object(l.a)().gte768,c=n.pathname;return e.createElement(f,{width:"100%",p:"10px",alignItems:"center",bg:"white",_css:"1px solid "+u.a.lightGrey01},e.createElement(d,{flex:"0 0 auto",mr:"auto",ml:"20px",mt:"3px",color:"grey01",fontSize:"22px"},e.createElement(m,{to:"/"},"bono's blog")),i&&s.a.map(function(t){return e.createElement(a.a,{key:t.pathname,pathname:c,menuPathname:t.pathname,menuName:t.title})}),!i&&e.createElement(p,{p:"5px",width:"30px",onClick:r},e.createElement(h,{width:o?"24px":"20px",pt:"2px",mb:"6px",bg:"grey01",_css2:o?"rotateZ(-45deg)":"rotateZ(0)"}),e.createElement(x,{width:"20px",pt:"2px",mb:"6px",bg:"grey01",show:o,_css3:o?"scale(0)":"scale(1)"}),e.createElement(g,{width:o?"24px":"20px",pt:"2px",bg:"grey01",show:o,_css4:o?"rotateZ(45deg)":"rotateZ(0)"})))}}).call(this,n(133))},242:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return a});var o=n(0),r=n(230);function a(t){var n=t.onClick,a=t.children;return Object(o.useEffect)(function(){function e(){n()}return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}},[]),e.createElement(r.Box,{onClick:function(e){e.stopPropagation()}},a)}}).call(this,n(133))},243:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return p});var o=n(0),r=n(231),a=n(234),i=n(230),c=n(240),l=n.n(c),s=n(238),u=n.n(s),f=n(229),d=Object(f.default)(r.a).withConfig({displayName:"list___StyledLink",componentId:"sc-1g51t40-0"})({boxShadow:"none"}),m=Object(f.default)(i.Text).withConfig({displayName:"list___StyledText",componentId:"sc-1g51t40-1"})({opacity:.8});function p(t){var n=t.data,r=t.location,c=t.isTagPage,s=t.pageContext,f=Object(o.useState)(g),p=f[0],y=f[1],b=l()(n,"allMarkdownRemark.edges"),w=l()(n,"allMarkdownRemark.totalCount"),v=l()(n,"site.siteMetadata.description");Object(o.useEffect)(function(){y(g)},[b]),Object(o.useEffect)(function(){function e(){document.querySelectorAll(".up-on-scroll").forEach(function(e){!function(e,t){return e.getBoundingClientRect().top>window.innerHeight+(t||0)}(e,20)?(e.style.opacity="1",e.style.transform="translateY(0px)"):(e.style.opacity="0",e.style.transform="translateY(70px)")})}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]);var _=Object(o.useMemo)(function(){return b.filter(function(e,t){return t<p})},[p,b]);return e.createElement(a.b,{location:r,data:n},e.createElement(u.a,{meta:[{name:"description",content:v}]}),c&&e.createElement(i.Flex,{m:"20px auto 60px",flexDirection:"column","justify-content":"center","align-items":"center"},e.createElement(i.Text,{fontSize:"25px",lineHeight:"1.6",textAlign:"center"},s.tag),e.createElement(i.Text,{fontSize:"15px",color:"#888",textAlign:"center"},"(",w,")")),_.map(function(t){var n=t.node,o=l()(n,"frontmatter.title")||n.fields.slug;return e.createElement(x,{mb:"50px",key:n.fields.slug,className:"up-on-scroll"},e.createElement(i.Text,{mb:"15px",fontSize:"22px",lineHeight:"1.7"},e.createElement(d,{to:n.fields.slug},o)),e.createElement(i.Text,{fontSize:"15px",lineHeight:"1.8",color:"#999",mb:"6px",dangerouslySetInnerHTML:{__html:n.excerpt}}),e.createElement(m,{fontSize:"14px",mb:"5px",color:"#888",width:"100%",textAlign:"right"},n.frontmatter.date))}),p<=b.length&&e.createElement(i.Flex,{mt:"70px",width:"100%",justifyContent:"center"},e.createElement(h,{fontSize:"18px",fontWeight:"400",color:"#999",p:"5px 10px",bg:"transparent",onClick:function(){return y(p+25)}},"show more")))}var h=Object(f.default)(i.Button).withConfig({displayName:"list__StyledShowMoreButton",componentId:"sc-1g51t40-2"})(["border-radius:4px;border:1px solid #dedede;cursor:pointer;transition:all 0.7s;outline:none;&:hover{background-color:#bbb;color:#fff;border:1px solid transparent;}"]),x=Object(f.default)(i.Box).withConfig({displayName:"list__StyledPost",componentId:"sc-1g51t40-3"})(["transition:transform 0.7s,opacity 0.7s;"]),g=25}).call(this,n(133))}}]);
//# sourceMappingURL=component---src-templates-tag-js-3b99bfa30780f1f3c3f7.js.map