(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{226:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return i}),n.d(t,"pageQuery",function(){return o});n(0);var a=n(242);function i(t){return e.createElement(a.a,t)}var o="109889956"}.call(this,n(133))},231:function(e,t,n){"use strict";(function(e){var a=n(0),i=n.n(a),o=n(11),r=n.n(o),c=n(63),l=n.n(c);n.d(t,"a",function(){return l.a}),n.d(t,"b",function(){return c.navigate});n(233),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func}).call(this,n(133))},232:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a={colors:{text:"#333333",grey00:"#555555",grey01:"#888888",grey02:"#aaaaaa",grey03:"#cccccc",lightGrey01:"#e8e8e8",lightGrey02:"#f3f3f3",lightGrey03:"#f9f9f9"}},i=a.colors;t.b=a},233:function(e,t,n){var a;e.exports=(a=n(238))&&a.default||a},234:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return y}),n.d(t,"a",function(){return w});n(17);var a=n(229),i=n(0),o=n(239),r=(n(244),n(245),n(246),n(230)),c=n(232),l=n(237),s=n(235),u=n(240),m=n(241),f=n.n(m),d=n(243),p=n.n(d);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var x=Object(a.default)(r.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-3234dv-0"})(function(e){return{borderBottom:e._css,position:"fixed",left:0,top:"50px",zIndex:100,opacity:.9,maxHeight:e._css2,transition:"max-height 0.5s ease",overflow:"hidden"}}),g=Object(a.default)(r.Box).withConfig({displayName:"layout___StyledBox2",componentId:"sc-3234dv-1"})({maxWidth:"800px"});function y(t){var n=t.children,m=t.location,d=Object(i.useState)(!1),y=d[0],b=d[1],_=Object(i.useState)(!1),v=_[0],E=_[1],j=Object(l.a)().gte768,O=p()(data,"site.siteMetadata.title"),S=p()(data,"site.siteMetadata.description");return e.createElement(a.ThemeProvider,{theme:c.b},e.createElement(f.a,{htmlAttributes:{lang:"ko"},title:O,meta:[{name:"description",content:S},{name:"google-site-verification",content:"R3ZeY1PmaJUY9j_cgNABjesJFgHWVCJpb4TsdfXntMA"}]},e.createElement("meta",{name:"naver-site-verification",content:"23eddf7267bb527337927baff11fc26157637f30"})),e.createElement(r.Box,null,e.createElement(u.a,{onClick:function(){return b(!1)}},e.createElement(o.a,h({},t,{showMenu:y,onClickMenu:function(){b(!y),E(!0)}}))),e.createElement(r.Box,{mt:"50px"},!j&&e.createElement(x,{width:"100%",bg:"white",onTransitionEnd:function(){return E(!1)},_css:v||y?"1px solid "+c.a.lightGrey01:"none",_css2:y?"400px":"0px"},e.createElement(r.Box,{m:"10px"},w.map(function(t){return e.createElement(r.Flex,{key:t.pathname,justifyContent:"center",alignItems:"center"},e.createElement(s.a,{pathname:m.pathname,menuPathname:t.pathname,menuName:t.title,isVertical:!0},t.title))})))),e.createElement(g,{className:"contents",mx:"auto",p:"45px 20px"},n)))}var w=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/tags",title:"태그"}]}).call(this,n(133))},235:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return u});n(17);var a=n(229),i=(n(0),n(231)),o=n(236),r=n(230),c=n(232);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=Object(a.default)(i.a).withConfig({displayName:"menu___StyledLink",componentId:"h1woa4-0"})(["",""],o.a);function u(t){var n=t.pathname,a=t.menuPathname,i=t.menuName,o=t.isVertical,u=n===a,m=void 0!==o&&o?{my:"15px",width:"100vw",textAlign:"center",fontSize:u?"23px":"16px"}:{mr:"15px",mt:"3px",fontSize:"15px"};return e.createElement(s,{to:a},e.createElement(r.Text,l({},m,{fontWeight:u?700:400,color:u?c.a.text:c.a.grey01}),i))}}).call(this,n(133))},236:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={boxShadow:"none",textDecoration:"none",color:"inherit"}},237:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0);function i(){var e=Object(a.useState)(o()),t=e[0],n=e[1];return Object(a.useEffect)(function(){function e(){n(o)}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),{gte768:t}}function o(){return"undefined"!=typeof window&&window.innerWidth>=768}},238:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),i=n.n(a),o=n(11),r=n.n(o),c=n(91),l=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},239:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return y});var a=n(229),i=(n(0),n(231)),o=n(235),r=n(236),c=n(230),l=n(237),s=n(234),u=n(232),m=Object(a.default)(c.Flex).withConfig({displayName:"header___StyledFlex",componentId:"sc-1h24lom-0"})(function(e){return{position:"fixed",left:0,top:0,height:"50px",borderBottom:e._css,zIndex:200}}),f=Object(a.default)(c.Text).withConfig({displayName:"header___StyledText",componentId:"sc-1h24lom-1"})({cursor:"pointer","@media (max-width: 600px)":{marginLeft:10}}),d=Object(a.default)(i.a).withConfig({displayName:"header___StyledLink",componentId:"sc-1h24lom-2"})(["",""],r.a),p=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox",componentId:"sc-1h24lom-3"})({height:"28px",cursor:"pointer",overflow:"hidden"}),h=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox2",componentId:"sc-1h24lom-4"})(function(e){return{transition:"all 0.4s",transform:e._css2,transformOrigin:"100% 0"}}),x=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox3",componentId:"sc-1h24lom-5"})(function(e){return{transition:"transform 0.5s",transform:e._css3,transformOrigin:"100% 50%"}}),g=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox4",componentId:"sc-1h24lom-6"})(function(e){return{transition:"all 0.4s",transform:e._css4,transformOrigin:"100% 100%"}});function y(t){var n=t.location,a=t.showMenu,i=t.onClickMenu,r=Object(l.a)().gte768,c=n.pathname;return e.createElement(m,{width:"100%",p:"10px",alignItems:"center",bg:"white",_css:"1px solid "+u.a.lightGrey01},e.createElement(f,{flex:"0 0 auto",mr:"auto",ml:"20px",mt:"3px",color:"grey01",fontSize:"22px"},e.createElement(d,{to:"/"},"bono's blog")),r&&s.a.map(function(t){return e.createElement(o.a,{key:t.pathname,pathname:c,menuPathname:t.pathname,menuName:t.title})}),!r&&e.createElement(p,{p:"5px",width:"30px",onClick:i},e.createElement(h,{width:a?"24px":"20px",pt:"2px",mb:"6px",bg:"grey01",_css2:a?"rotateZ(-45deg)":"rotateZ(0)"}),e.createElement(x,{width:"20px",pt:"2px",mb:"6px",bg:"grey01",show:a,_css3:a?"scale(0)":"scale(1)"}),e.createElement(g,{width:a?"24px":"20px",pt:"2px",bg:"grey01",show:a,_css4:a?"rotateZ(45deg)":"rotateZ(0)"})))}}).call(this,n(133))},240:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});var a=n(0),i=n(230);function o(t){var n=t.onClick,o=t.children;return Object(a.useEffect)(function(){function e(){n()}return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}},[]),e.createElement(i.Box,{onClick:function(e){e.stopPropagation()}},o)}}).call(this,n(133))},242:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return s});var a=n(229),i=(n(0),n(231)),o=n(234),r=n(230),c=Object(a.default)(i.a).withConfig({displayName:"list___StyledLink",componentId:"sc-1g51t40-0"})({boxShadow:"none"}),l=Object(a.default)(r.Text).withConfig({displayName:"list___StyledText",componentId:"sc-1g51t40-1"})({opacity:.8});function s(t){var n=t.data,a=t.location,i=t.isTagPage,s=t.pageContext,u=get(n,"allMarkdownRemark.edges"),m=get(n,"allMarkdownRemark.totalCount");return e.createElement(o.b,{location:a},i&&e.createElement(r.Flex,{m:"20px auto 60px",flexDirection:"column","justify-content":"center","align-items":"center"},e.createElement(r.Text,{fontSize:"25px",lineHeight:"1.6",textAlign:"center"},s.tag),e.createElement(r.Text,{fontSize:"15px",color:"#888",textAlign:"center"},"(",m,")")),u.map(function(t){var n=t.node,a=get(n,"frontmatter.title")||n.fields.slug;return e.createElement(r.Box,{mb:"50px",key:n.fields.slug},e.createElement(r.Text,{mb:"15px",fontSize:"22px",lineHeight:"1.7"},e.createElement(c,{to:n.fields.slug},a)),e.createElement(r.Text,{fontSize:"15px",lineHeight:"1.8",color:"#999",mb:"6px",dangerouslySetInnerHTML:{__html:n.excerpt}}),e.createElement(l,{fontSize:"14px",mb:"5px",color:"#888",width:"100%",textAlign:"right"},n.frontmatter.date))}))}}).call(this,n(133))}}]);
//# sourceMappingURL=component---src-pages-programming-js-87118f2db0c5a6d8086b.js.map