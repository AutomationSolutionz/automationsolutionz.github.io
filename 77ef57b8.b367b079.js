(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(180)),l={id:"best-practices",title:"Best practices"},o={unversionedId:"how-tos/best-practices",id:"how-tos/best-practices",isDocsHomePage:!1,title:"Best practices",description:"Test Cases",source:"@site/docs\\how-tos\\best-pratices.md",slug:"/how-tos/best-practices",permalink:"/docs/how-tos/best-practices",version:"current",sidebar:"docs",previous:{title:"Guides",permalink:"/docs/how-tos/guides"},next:{title:"Zeuz Server Sitemap",permalink:"/docs/how-tos/zeuz-server-sitemap"}},s=[{value:"Test Cases",id:"test-cases",children:[{value:"Title",id:"title",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Data",id:"data",children:[]}]},{value:"Test Management",id:"test-management",children:[]},{value:"Deployment &amp; Setup",id:"deployment--setup",children:[]}],c={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"test-cases"},"Test Cases"),Object(i.b)("h3",{id:"title"},"Title"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use a descriptive title that explains the purpose of the test case.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The title should indicate what is being validated in the test case.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The title should be no more than 10 words.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If there is a repeating word in many test cases' titles, chances are - you\ncan create a folder/feature and organize similar tests under that\nfolder/feature."))),Object(i.b)("h3",{id:"steps"},"Steps"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When creating a new step, always start with a global step. NEVER start with a\nlocal step.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Try to ensure whatever step you're creating is as modular as possible so that\nit can be reused from other test cases.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'If your step depends on some test case specific data/variables, create a\nlocal step at the top named "Local data" and put your test case specific data\nin there and read that data from your global steps.')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Ensure that the duration for every step is approximately correct (it\'s better\nto overestimate than underestimate in this case). While deploying, turn on\n"Step Timeout" - this will ensure that your tests always terminate if it\novershoots the specified duration.'))),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Put a descriptive name to almost every action. Your goal is to ensure that\nsomeone non-technical can look at the actions and understand the flow of a\nstep.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For any repeatable usage of action - try to use a loop.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you need to fill out a form containing multiple input fields and every\ninput field contains similar attribute specifications (ex: ",Object(i.b)("inlineCode",{parentName:"p"},'<input\nid="first_name">'),", ",Object(i.b)("inlineCode",{parentName:"p"},'<input id="last_name">'),", etc.) - you can put the\nids/attributes in a list and their values in another list (or use a\ndictionary) and loop over the list to fill out the form."))),Object(i.b)("h3",{id:"data"},"Data"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Never hard code data in your test cases.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Data can be read from multiple sources"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Attachments"),Object(i.b)("li",{parentName:"ol"},"Runtime parameters"),Object(i.b)("li",{parentName:"ol"},"External data sources - APIs/Databases/etc."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Attach your data to the tests in one of the three ways"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Test case - if the data is local to a specific test case, attach the data\nto the test case."),Object(i.b)("li",{parentName:"ol"},"Steps - if the data is accessed via a specific step and the step is\nutilized across many test cases, attach the data to the step."),Object(i.b)("li",{parentName:"ol"},"Global - if the data is accessed from many tests, upload to the global\nattachment and use the dedicated global attachment actions."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Data store"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"If the data is tabular or you already have an excel/csv file, utilize the\ndata store built into ZeuZ.  There are dedicated actions for working with\ndata store.")))),Object(i.b)("h2",{id:"test-management"},"Test Management"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Folder"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},'Create a "Regression" folder at the top.'),Object(i.b)("li",{parentName:"ol"},"Put different platform names and organize test cases accordingly. Example structure:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Regression",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Mobile",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"iOS"),Object(i.b)("li",{parentName:"ul"},"Android"))),Object(i.b)("li",{parentName:"ul"},"Web"),Object(i.b)("li",{parentName:"ul"},"Desktop"),Object(i.b)("li",{parentName:"ul"},"API"))))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Feature"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Identify different modules/sub-modules of your applications and create features or sub-features based on them."),Object(i.b)("li",{parentName:"ul"},'If there is a test case that can belong to multiple features, bring that test case under a common parent feature and put it in a "Common" folder.'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Test Set"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Create a "Regression" set. Use the folder defined in the previous section to filter and select easily.'),Object(i.b)("li",{parentName:"ul"},'Create a "Nightly" run set containing only the critical test cases. This set should be as small as possible.'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Milestone"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Milestone is synonymous to "Sprint" or any other checkpointing concept.'),Object(i.b)("li",{parentName:"ul"},"Create a milestone for every checkpoint in your team."),Object(i.b)("li",{parentName:"ul"},"Milestones are a mandatory step for creating rich and detailed reports."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Version"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Versions are available to track versions of the application under test."),Object(i.b)("li",{parentName:"ul"},"With the version information, it's possible to get rich reports."),Object(i.b)("li",{parentName:"ul"},"Step performance is automatically tracked for both versions and milestones.")))),Object(i.b)("h2",{id:"deployment--setup"},"Deployment & Setup"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Email"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Setup the email configuration from day 1."),Object(i.b)("li",{parentName:"ul"},"We can provide our own credentials."),Object(i.b)("li",{parentName:"ul"},"Or you can utilize your own SMTP email server credentials for this."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Messaging platforms"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Discord/Slack/Teams/etc."),Object(i.b)("li",{parentName:"ul"},"Configure a dedicated channel in your messaging platform of choice and get its webhook."),Object(i.b)("li",{parentName:"ul"},"Use the webhook to set up the integration with ZeuZ."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Scheduler"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Set up a nightly run scheduler from day 1."),Object(i.b)("li",{parentName:"ul"},"Purpose is to ensure that the team starts getting feedback and positive outcome of the tests from the get go."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"CI/CD"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Create presets with proper assignees, testers and email recipients."),Object(i.b)("li",{parentName:"ul"},"Copy the webhook for the presets and paste it in your CI/CD pipeline file.")))))}b.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);