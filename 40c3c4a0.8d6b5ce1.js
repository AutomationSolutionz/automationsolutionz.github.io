(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(175)),i={id:"3-actions",title:"3. Actions"},c={unversionedId:"guide/3-actions",id:"guide/3-actions",isDocsHomePage:!1,title:"3. Actions",description:"Actions are the core of Zeuz. There are various types of actions that you can",source:"@site/docs\\guide\\3-actions.md",slug:"/guide/3-actions",permalink:"/docs/guide/3-actions",version:"current",sidebar:"docs",previous:{title:"2. First Test case",permalink:"/docs/guide/2-first-test-case"},next:{title:"4. Debugging",permalink:"/docs/guide/4-debugging"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Actions are the core of Zeuz. There are various types of actions that you can\nperform using Zeuz. The actions are not restricted to just one platform at a\ntime. You can execute actions for multiple platforms from the same test case,\nwhich means your test case can do some very complicated tasks."),Object(a.b)("p",null,"For instance, you can write a single test case where:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Sign up via web automation."),Object(a.b)("li",{parentName:"ol"},"Verify that the sign up is successful by making a REST API call and testing\nits response."),Object(a.b)("li",{parentName:"ol"},"Log in with the stored credentials (yes, you can save variables and recall them!)."),Object(a.b)("li",{parentName:"ol"},"Send a message to a user."),Object(a.b)("li",{parentName:"ol"},"Make a query to your database to see if the message was stored properly.")),Object(a.b)("p",null,"As you can see, your test case can vary wildly depending on the scenario that\nyou're trying to test."))}l.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);