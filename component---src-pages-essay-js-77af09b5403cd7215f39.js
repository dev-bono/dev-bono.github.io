(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{224:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return a}),n.d(t,"pageQuery",function(){return r});n(0);var o=n(244);function a(t){return e.createElement(o.a,t)}var r="608740185"}.call(this,n(133))},232:function(e,t,n){"use strict";(function(e){var o=n(0),a=n.n(o),r=n(11),i=n.n(r),c=n(63),l=n.n(c);n.d(t,"a",function(){return l.a}),n.d(t,"b",function(){return c.navigate});n(234),a.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func}).call(this,n(133))},233:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o={colors:{text:"#333333",grey00:"#555555",grey01:"#888888",grey02:"#aaaaaa",grey03:"#cccccc",lightGrey01:"#e8e8e8",lightGrey02:"#f3f3f3",lightGrey03:"#f9f9f9"}},a=o.colors;t.b=o},234:function(e,t,n){var o;e.exports=(o=n(240))&&o.default||o},235:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return y}),n.d(t,"a",function(){return b});n(17);var o=n(230),a=n(0),r=n(242),i=(n(245),n(246),n(247),n(231)),c=n(233),l=n(238),s=n(236),u=n(243),f=n(239),d=n.n(f),m=n(241),p=n.n(m);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var x=Object(o.default)(i.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-3234dv-0"})(function(e){return{borderBottom:e._css,position:"fixed",left:0,top:"50px",zIndex:100,opacity:.9,maxHeight:e._css2,transition:"max-height 0.5s ease",overflow:"hidden"}}),g=Object(o.default)(i.Box).withConfig({displayName:"layout___StyledBox2",componentId:"sc-3234dv-1"})({maxWidth:"800px"});function y(t){var n=t.children,f=t.location,m=t.data,y=Object(a.useState)(!1),w=y[0],v=y[1],_=Object(a.useState)(!1),E=_[0],j=_[1],O=Object(l.a)().gte768,S=p()(m,"site.siteMetadata.title");return e.createElement(o.ThemeProvider,{theme:c.b},e.createElement(i.Box,null,e.createElement(d.a,{htmlAttributes:{lang:"ko"},title:S},e.createElement("meta",{name:"google-site-verification",content:"R3ZeY1PmaJUY9j_cgNABjesJFgHWVCJpb4TsdfXntMA"}),e.createElement("meta",{name:"naver-site-verification",content:"23eddf7267bb527337927baff11fc26157637f30"})),e.createElement(u.a,{onClick:function(){return v(!1)}},e.createElement(r.a,h({},t,{showMenu:w,onClickMenu:function(){v(!w),j(!0)}}))),e.createElement(i.Box,{mt:"50px"},!O&&e.createElement(x,{width:"100%",bg:"white",onTransitionEnd:function(){return j(!1)},_css:E||w?"1px solid "+c.a.lightGrey01:"none",_css2:w?"400px":"0px"},e.createElement(i.Box,{m:"10px"},b.map(function(t){return e.createElement(i.Flex,{key:t.pathname,justifyContent:"center",alignItems:"center"},e.createElement(s.a,{pathname:f.pathname,menuPathname:t.pathname,menuName:t.title,isVertical:!0},t.title))})))),e.createElement(g,{className:"contents",mx:"auto",p:"45px 20px"},n)))}var b=[{pathname:"/programming",title:"개발"},{pathname:"/interactive-web",title:"인터랙티브웹"},{pathname:"/essay",title:"에세이"},{pathname:"/review",title:"책리뷰"},{pathname:"/tags",title:"태그"}]}).call(this,n(133))},236:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return u});n(17);var o=n(230),a=(n(0),n(232)),r=n(237),i=n(231),c=n(233);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s=Object(o.default)(a.a).withConfig({displayName:"menu___StyledLink",componentId:"h1woa4-0"})(["",""],r.a);function u(t){var n=t.pathname,o=t.menuPathname,a=t.menuName,r=t.isVertical,u=n===o,f=void 0!==r&&r?{my:"15px",width:"100vw",textAlign:"center",fontSize:u?"23px":"16px"}:{mr:"15px",mt:"3px",fontSize:"15px"};return e.createElement(s,{to:o},e.createElement(i.Text,l({},f,{fontWeight:u?700:400,color:u?c.a.text:c.a.grey01}),a))}}).call(this,n(133))},237:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={boxShadow:"none",textDecoration:"none",color:"inherit"}},238:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(0);function a(){var e=Object(o.useState)(r()),t=e[0],n=e[1];return Object(o.useEffect)(function(){function e(){n(r)}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),{gte768:t}}function r(){return"undefined"!=typeof window&&window.innerWidth>=768}},240:function(e,t,n){"use strict";n.r(t);n(17);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),c=n(90),l=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},242:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return y});var o=n(230),a=(n(0),n(232)),r=n(236),i=n(237),c=n(231),l=n(238),s=n(235),u=n(233),f=Object(o.default)(c.Flex).withConfig({displayName:"header___StyledFlex",componentId:"sc-1h24lom-0"})(function(e){return{position:"fixed",left:0,top:0,height:"50px",borderBottom:e._css,zIndex:200}}),d=Object(o.default)(c.Text).withConfig({displayName:"header___StyledText",componentId:"sc-1h24lom-1"})({cursor:"pointer","@media (max-width: 600px)":{marginLeft:10}}),m=Object(o.default)(a.a).withConfig({displayName:"header___StyledLink",componentId:"sc-1h24lom-2"})(["",""],i.a),p=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox",componentId:"sc-1h24lom-3"})({height:"28px",cursor:"pointer",overflow:"hidden"}),h=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox2",componentId:"sc-1h24lom-4"})(function(e){return{transition:"all 0.4s",transform:e._css2,transformOrigin:"100% 0"}}),x=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox3",componentId:"sc-1h24lom-5"})(function(e){return{transition:"transform 0.5s",transform:e._css3,transformOrigin:"100% 50%"}}),g=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox4",componentId:"sc-1h24lom-6"})(function(e){return{transition:"all 0.4s",transform:e._css4,transformOrigin:"100% 100%"}});function y(t){var n=t.location,o=t.showMenu,a=t.onClickMenu,i=Object(l.a)().gte768,c=n.pathname;return e.createElement(f,{width:"100%",p:"10px",alignItems:"center",bg:"white",_css:"1px solid "+u.a.lightGrey01},e.createElement(d,{flex:"0 0 auto",mr:"auto",ml:"20px",mt:"3px",color:"grey01",fontSize:"22px"},e.createElement(m,{to:"/"},"bono's blog")),i&&s.a.map(function(t){return e.createElement(r.a,{key:t.pathname,pathname:c,menuPathname:t.pathname,menuName:t.title})}),!i&&e.createElement(p,{p:"5px",width:"30px",onClick:a},e.createElement(h,{width:o?"24px":"20px",pt:"2px",mb:"6px",bg:"grey01",_css2:o?"rotateZ(-45deg)":"rotateZ(0)"}),e.createElement(x,{width:"20px",pt:"2px",mb:"6px",bg:"grey01",show:o,_css3:o?"scale(0)":"scale(1)"}),e.createElement(g,{width:o?"24px":"20px",pt:"2px",bg:"grey01",show:o,_css4:o?"rotateZ(45deg)":"rotateZ(0)"})))}}).call(this,n(133))},243:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});var o=n(0),a=n(231);function r(t){var n=t.onClick,r=t.children;return Object(o.useEffect)(function(){function e(){n()}return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}},[]),e.createElement(a.Box,{onClick:function(e){e.stopPropagation()}},r)}}).call(this,n(133))},244:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return p});var o=n(0),a=n(232),r=n(235),i=n(231),c=n(241),l=n.n(c),s=n(239),u=n.n(s),f=n(230),d=Object(f.default)(a.a).withConfig({displayName:"list___StyledLink",componentId:"sc-1g51t40-0"})({boxShadow:"none"}),m=Object(f.default)(i.Text).withConfig({displayName:"list___StyledText",componentId:"sc-1g51t40-1"})({opacity:.8});function p(t){var n=t.data,a=t.location,c=t.isTagPage,s=t.pageContext,f=Object(o.useState)(g),p=f[0],y=f[1],b=l()(n,"allMarkdownRemark.edges"),w=l()(n,"allMarkdownRemark.totalCount"),v=l()(n,"site.siteMetadata.description");Object(o.useEffect)(function(){y(g)},[b]),Object(o.useEffect)(function(){function e(){document.querySelectorAll(".up-on-scroll").forEach(function(e){!function(e,t){return e.getBoundingClientRect().top>window.innerHeight+(t||0)}(e,20)?(e.style.opacity="1",e.style.transform="translateY(0px)"):(e.style.opacity="0",e.style.transform="translateY(70px)")})}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]);var _=Object(o.useMemo)(function(){return b.filter(function(e,t){return t<p})},[p,b]);return e.createElement(r.b,{location:a,data:n},e.createElement(u.a,{meta:[{name:"description",content:v}]}),c&&e.createElement(i.Flex,{m:"20px auto 60px",flexDirection:"column","justify-content":"center","align-items":"center"},e.createElement(i.Text,{fontSize:"25px",lineHeight:"1.6",textAlign:"center"},s.tag),e.createElement(i.Text,{fontSize:"15px",color:"#888",textAlign:"center"},"(",w,")")),_.map(function(t){var n=t.node,o=l()(n,"frontmatter.title")||n.fields.slug;return e.createElement(x,{mb:"50px",key:n.fields.slug,className:"up-on-scroll"},e.createElement(i.Text,{mb:"15px",fontSize:"22px",lineHeight:"1.7"},e.createElement(d,{to:n.fields.slug},o)),e.createElement(i.Text,{fontSize:"15px",lineHeight:"1.8",color:"#999",mb:"6px",dangerouslySetInnerHTML:{__html:n.excerpt}}),e.createElement(m,{fontSize:"14px",mb:"5px",color:"#888",width:"100%",textAlign:"right"},n.frontmatter.date))}),p<=b.length&&e.createElement(i.Flex,{mt:"70px",width:"100%",justifyContent:"center"},e.createElement(h,{fontSize:"18px",fontWeight:"400",color:"#999",p:"5px 10px",bg:"transparent",onClick:function(){return y(p+25)}},"show more")))}var h=Object(f.default)(i.Button).withConfig({displayName:"list__StyledShowMoreButton",componentId:"sc-1g51t40-2"})(["border-radius:4px;border:1px solid #dedede;cursor:pointer;transition:all 0.7s;outline:none;&:hover{background-color:#bbb;color:#fff;border:1px solid transparent;}"]),x=Object(f.default)(i.Box).withConfig({displayName:"list__StyledPost",componentId:"sc-1g51t40-3"})(["transition:transform 0.7s,opacity 0.7s;"]),g=25}).call(this,n(133))}}]);
//# sourceMappingURL=component---src-pages-essay-js-77af09b5403cd7215f39.js.map