(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{129:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(129)),l={id:"data-collector",title:"Data Collector"},i={unversionedId:"data-collector",id:"data-collector",isDocsHomePage:!1,title:"Data Collector",description:"Data collector is a very powerful feature that allows you to collect",source:"@site/docs/data-collector.md",slug:"/data-collector",permalink:"/docs/data-collector",version:"current",sidebar:"docs",previous:{title:"Variables and Indexed Access",permalink:"/docs/variables-and-indexed-access"},next:{title:"Loop",permalink:"/docs/loop"}},c=[],s={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Data collector is a very powerful feature that allows you to collect\ndata from complex and nested structured data. This feature reduces the\nnumber of actions that you have to write in order to access and save\nnested data to only a single action, whereas, this would otherwise\ntake around 10-20 actions in general."),Object(o.b)("p",null,"Let's go through a simple example to understand how this works. We're\nassuming that the following data is saved in the variable ",Object(o.b)("inlineCode",{parentName:"p"},"%|data|%"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "error1": {\n            "type": "Runtime Error",\n            "occurrence": [\n                {"line": 10, "message": "fail"},\n                {"line": 20, "message": "block"},\n            ],\n        },\n        "error2": {\n            "type": "Compiler Error",\n            "occurrence": [\n                {"line": 50, "message": "fail"},\n                {"line": 64, "message": "xyz"},\n                {"line": 70, "message": "pqr"},\n            ],\n        },\n        "1error": {\n            "type": "Runtime Error",\n            "occurrence": [\n                {"line": 100, "message": "fail"},\n                {"line": 200, "message": "block"},\n            ],\n        },\n        "2error": {\n            "type": "Compiler Error",\n            "occurrence": [\n                {"line": 500, "message": "fail"},\n                {"line": 640, "message": "xyz"},\n                {"line": 700, "message": "pqr"},\n            ],\n        },\n    },\n    {\n        "error": {\n            "type": "Brain malfunctioned",\n            "occurrence": [\n                {"line": 150, "message": "abort!"},\n                {"line": 23, "message": "shutdown"},\n            ],\n        },\n        "error": {\n            "type": "Computer crashed",\n            "occurrence": [\n                {"line": 341, "message": "blocked"},\n                {"line": 4, "message": "blocked"},\n                {"line": 74, "message": "math error"},\n            ],\n        },\n    }\n]\n')),Object(o.b)("p",null,"Let's say we only want to collect line numbers. You have to specify\nthe following pattern and it'll give you all the line numbers in a\nlist."),Object(o.b)("p",null,"Pattern:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# Pattern\n%|data{_all_, _all_, occurrence, _all_, line}|%\n\n# Output\n[10, 20, 50, 64, 70, 500, 640, 700, 100, 200, 341, 4, 74]\n")),Object(o.b)("p",null,"There are a few things to note here:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Patterns are specified when accessing a variable."),Object(o.b)("li",{parentName:"ol"},"Patterns are defined inside curly braces after the variable name.\nNo spaces allowed. Multiple sets of curly braces ",Object(o.b)("inlineCode",{parentName:"li"},"{patter\n1}{pattern 2}...")," can be specified without any spaces (see example\nat the end)."),Object(o.b)("li",{parentName:"ol"},"Items in the pattern are comma-separated."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"_all_")," as described in the next paragraphs, signals to Zeuz Node\nto loop through all the values in the list/dictionary.")),Object(o.b)("p",null,"What's ",Object(o.b)("inlineCode",{parentName:"p"},"_all_"),"? By putting the ",Object(o.b)("inlineCode",{parentName:"p"},"_all_")," property you're essentially\nasking the collector to loop through any items (be it a list or a\ndictionary). The first ",Object(o.b)("inlineCode",{parentName:"p"},"_all_")," loops through the first level of items\n(two dictionaries in this case) inside the root list. The second\n",Object(o.b)("inlineCode",{parentName:"p"},"_all_")," loops through the ",Object(o.b)("strong",{parentName:"p"},"values")," of the dictionaries (ignoring the\ndictionary keys). Next, we're asking for the ",Object(o.b)("inlineCode",{parentName:"p"},"occurrence")," items which\nare present inside each of the dictionaries at the third level. Notice\nthat, ",Object(o.b)("inlineCode",{parentName:"p"},"occurrence")," itself is yet another list. So, we loop through\n",Object(o.b)("inlineCode",{parentName:"p"},"_all_")," the items inside it. And lastly, we collect ",Object(o.b)("inlineCode",{parentName:"p"},"line"),". Done!"),Object(o.b)("p",null,"Let's see a few more patterns and their outputs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"%|data{_all_, _all_, type}|%\n# Output of pattern 1\n['Runtime Error', 'Compiler Error', 'Compiler Error', 'Runtime Error', 'Computer crashed']\n\n%|data{_all_, *error, type}|%\n# Output of pattern 2\n['Compiler Error', 'Runtime Error', 'Computer crashed']\n\n%|data{_all_, error*, occurrence, _all_, line}|%\n# Output of pattern_3\n[10, 20, 50, 64, 70, 341, 4, 74]\n")),Object(o.b)("p",null,"Notice that you can specify partial names for dictionary keys using\n",Object(o.b)("inlineCode",{parentName:"p"},"*")," before or after a name. In the case of ",Object(o.b)("strong",{parentName:"p"},"pattern 2"),', we wanted\nall errors ending with the word "error". So the pattern is ',Object(o.b)("inlineCode",{parentName:"p"},"*error"),".\nIn case of ",Object(o.b)("strong",{parentName:"p"},"pattern 3"),' we wanted all errors ending with the word\n"error", so the pattern is ',Object(o.b)("inlineCode",{parentName:"p"},"error*"),"."),Object(o.b)("p",null,"You can also zip together multiple collected items using the syntax\n",Object(o.b)("inlineCode",{parentName:"p"},"%|data{pattern_1}{pattern_2}|%"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'%|data{_all_, _all_, occurrence, _all_, line}{all_, _all_, occurrence, _all_, message}|%\n\n# Output\n[\n    (10, "fail"),\n    (20, "block"),\n    (50, "fail"),\n    (64, "xyz"),\n    (70, "pqr"),\n    (100, "fail"),\n    (200, "block"),\n    (500, "fail"),\n    (640, "xyz"),\n    (700, "pqr")\n]\n\n')))}p.isMDXComponent=!0}}]);