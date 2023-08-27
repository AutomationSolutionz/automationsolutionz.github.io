(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(173)),i={id:"zeuz-node-usage",title:"ZeuZ Node usage",sidebar_label:"Usage"},c={unversionedId:"zeuz-node-usage",id:"zeuz-node-usage",isDocsHomePage:!1,title:"ZeuZ Node usage",description:"ZeuZ Node can be launched via the CLI from any terminal/cmd prompt.",source:"@site/docs\\zeuz-node-usage.md",slug:"/zeuz-node-usage",permalink:"/docs/zeuz-node-usage",version:"current",sidebar_label:"Usage",sidebar:"docs",previous:{title:"ZeuZ Node Setup",permalink:"/docs/zeuz-node-setup"},next:{title:"Variables and Indexed Access",permalink:"/docs/variables-and-indexed-access"}},l=[{value:"Command Line Interface",id:"command-line-interface",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ZeuZ Node can be launched via the CLI from any terminal/cmd prompt.\n",Object(o.b)("inlineCode",{parentName:"p"},"node_cli.py")," file is the entry point of ZeuZ Node."),Object(o.b)("h2",{id:"command-line-interface"},"Command Line Interface"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run zeuz node: ",Object(o.b)("inlineCode",{parentName:"li"},"python node_cli.py")),Object(o.b)("li",{parentName:"ul"},"Get help/see all available commands: ",Object(o.b)("inlineCode",{parentName:"li"},"python node_cli.py -h")),Object(o.b)("li",{parentName:"ul"},"Logoout and re-enter credentials: ",Object(o.b)("inlineCode",{parentName:"li"},"python node_cli.py -l")),Object(o.b)("li",{parentName:"ul"},"Login with API key and server: ",Object(o.b)("inlineCode",{parentName:"li"},"python node_cli.py -s https://zeuz-server.com\n-k API-KEY-ABC-XYZ-QWERTY")),Object(o.b)("li",{parentName:"ul"},"Local Run/Re-run previous deployment offline: ",Object(o.b)("inlineCode",{parentName:"li"},"python node_cli.py -r"))))}p.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||s[b]||o;return t?a.a.createElement(m,c(c({ref:n},u),{},{components:t})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);