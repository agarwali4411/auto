_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=o.default.useState(!1),t=(0,c.default)(e,2),a=t[0],n=t[1];return(0,r.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var c=n(a("nxTg")),o=n(a("mXGw")),r=n(a("YO29"))},"3o/V":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/configuration/plugins",function(){return a("YvVc")}])},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("RiSW")),o=n(a("mXGw")),r=n(a("9fEB")),d=a("GDok"),l=a("nZpd"),s=a("AFBu"),m=a("0oBi"),u=function(e){var t=e.children,a=(0,c.default)(e,["children"]),n=o.default.useState(!1);o.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var u=(0,m.useDarkMode)();return o.default.createElement(l.MobileMenuContext.Provider,{value:a.menuState||n},o.default.createElement(r.default,null,o.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,s.formatPath)(u?"favicon-dark.png":"favicon.png")})),o.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},o.default.createElement(d.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))};t.default=u},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return c.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e};var c=n(a("R8iU"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var c=n(a("OvAC")),o=n(a("RiSW")),r=n(a("nxTg")),d=n(a("mXGw")),l=n(a("5dyF")),s=n(a("9fEB")),m=n(a("R8iU")),u=n(a("PDtE")),i=a("/FXl"),p=a("bBV7"),b=a("nZpd"),f=a("AFBu");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,c.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=d.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=j;var O=function(e){var t=e.href,a=e.children,n=d.default.useContext(j),c=(0,i.useMDXComponents)().SidebarLink,o=m.default.join(n.sidebarFileLocation,t),r=t;return n.sidebarFileLocation&&((r=o).endsWith("/index")&&(r=r.replace("/index","")),r.endsWith("/")&&(r=r.slice(0,-1))),d.default.createElement(l.default,{passHref:!0,href:(0,f.postFixHTML)(r)},d.default.createElement(c,{isActive:n.pathname.replace("/index","")===(0,f.formatPath)(r)},a))};t.Sidebar=function(t){var n=t.links,c=t.folder,l=d.default.useContext(b.MobileMenuContext),x=(0,r.default)(l,1)[0],N="/".concat(c),h=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(N),k=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?m.default.relative("/auto",a.pathname):m.default.relative("/",a.pathname),c=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return c||(c=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:c.title||"auto",pathname:(0,f.formatPath)(c.__resourcePath)}}(n),v=(0,i.useMDXComponents)(),y=v.SidebarItemWrapper,E=(v.SidebarLink,v.SidebarTitle),w=v.SidebarDivider,_=v.SidebarList,P=v.Sidebar,M=(0,o.default)(v,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return d.default.createElement(j.Provider,{value:g({},k,{sidebarFileLocation:h?N:""})},d.default.createElement(i.MDXProvider,{components:g({},M,{li:y,ul:_,a:O,p:E,hr:w})},d.default.createElement(s.default,null,d.default.createElement("title",null,k.title.replace(/\\`/g,"`"))),d.default.createElement(P,{className:(0,u.default)(!x&&"hidden","lg:block")},h?d.default.createElement(h,null):d.default.createElement(_,null,n.map((function(e){return d.default.createElement(y,{key:e.__resourcePath},d.default.createElement(O,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var c=n(a("nxTg")),o=n(a("8VmE")),r=n(a("RiSW")),d=n(a("mXGw")),l=n(a("5dyF")),s=a("V5Fo"),m=a("/FXl"),u=n(a("PDtE")),i=a("nZpd"),p=a("AFBu"),b=function(e){var t=e.className,a=(0,r.default)(e,["className"]);return d.default.createElement("svg",(0,o.default)({className:(0,u.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),d.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},f=function(){var e=(0,m.useMDXComponents)().SearchInput;return d.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},d.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=d.default.useContext(i.MobileMenuContext),o=(0,c.default)(n,2),r=o[0],u=o[1],x=(0,m.useMDXComponents)(),g=x.Logo,j=x.NavBarWrapper,O=x.NavBar,N=x.NavBarItem,h=x.MobileMenuButton;return d.default.createElement(d.default.Fragment,null,d.default.createElement(j,null,d.default.createElement(O,null,a?d.default.createElement(l.default,{passHref:!0,href:"/"},d.default.createElement(g,null)):d.default.createElement(g,null),d.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},d.default.createElement(f,null),d.default.createElement(h,{open:r,setOpen:u,className:"lg:hidden"}),d.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return d.default.createElement(l.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},d.default.createElement(N,null,(0,s.titleCase)(e)))})),d.default.createElement(N,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},d.default.createElement(b,null)))))),r&&d.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return d.default.createElement(l.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},d.default.createElement(N,null,(0,s.titleCase)(e)))})),d.default.createElement(N,{href:"https://github.com/intuit/auto",target:"_blank"},d.default.createElement(b,{className:"mr-2"}),"Open on GitHub")))}},YvVc:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),c=a("dV/x"),o=a("mXGw"),r=a.n(o),d=a("/FXl"),l=a("pu0P"),s=a.n(l),m=(r.a.createElement,{title:"Plugins",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/configuration/plugins.mdx",__scans:{}}),u={frontMatter:m},i=s.a;function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(d.mdx)(i,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," uses the package ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/webpack/tapable"}),"tapable")," to expose a plugin system. Go ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"../plugins/writing-plugins"}),"here")," to learn how to write one!"),Object(d.mdx)("h2",{id:"using-plugins"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#using-plugins"}),"Using Plugins")),Object(d.mdx)("p",null,"To use a plugin you can either supply the plugin via a CLI arg or in your ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"./autorc#plugins"}),".autorc"),"."),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},"\u26a0\ufe0f Specifying a plugin overrides the defaults.")),Object(d.mdx)("h3",{id:"defaults"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#defaults"}),"Defaults")),Object(d.mdx)("p",null,"If you don't configure plugins in your ",Object(d.mdx)("inlineCode",{parentName:"p"},".autorc")," configuration file ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," will use a default package manager plugin."),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Installed through ",Object(d.mdx)("inlineCode",{parentName:"li"},"npm")," => uses ",Object(d.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/npm"}),Object(d.mdx)("inlineCode",{parentName:"a"},"npm"))),Object(d.mdx)("li",{parentName:"ul"},"Installed through executable => uses ",Object(d.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/git-tag"}),Object(d.mdx)("inlineCode",{parentName:"a"},"git-tag")))),Object(d.mdx)("p",null,'For the majority of "package manager" plugins you should only use one at a time.\nUsing multiple ',Object(d.mdx)("em",{parentName:"p"},"will")," lead to undesired results."),Object(d.mdx)("h3",{id:"no-plugins"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#no-plugins"}),"No Plugins")),Object(d.mdx)("p",null,"If you don't want to include the default plugins, you can supply an empty array in the ",Object(d.mdx)("inlineCode",{parentName:"p"},".autorc")," configuration file like the following:"),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(d.mdx)("h2",{id:"plugin-declaration"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#plugin-declaration"}),"Plugin Declaration")),Object(d.mdx)("p",null,"There are three ways to name and use a plugin."),Object(d.mdx)("h3",{id:"official-plugins"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#official-plugins"}),"Official Plugins")),Object(d.mdx)("p",null,"To use an official plugin all you have to do is supply the name."),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"npm"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// or the full name"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"@auto-it/npm"'),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(d.mdx)("h3",{id:"npm-package"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#npm-package"}),Object(d.mdx)("inlineCode",{parentName:"a"},"npm")," package")),Object(d.mdx)("p",null,"Unofficial plugins pulled from NPM should be named in one of the following formats:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"auto-plugin-PLUGIN_NAME")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"@my-scope/auto-plugin-PLUGIN_NAME"))),Object(d.mdx)("p",null,"You use them in your ",Object(d.mdx)("inlineCode",{parentName:"p"},".autorc")," by:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"provide the full package name"),Object(d.mdx)("li",{parentName:"ul"},"when named like ",Object(d.mdx)("inlineCode",{parentName:"li"},"auto-plugin-PLUGIN_NAME")," just the ",Object(d.mdx)("inlineCode",{parentName:"li"},"PLUGIN_NAME"),".")),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"my-cool-plugin"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// or"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"auto-plugin-my-cool-plugin"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// on a scope"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"@my-scope/auto-plugin-my-cool-plugin"'),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(d.mdx)("h3",{id:"local-plugin"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#local-plugin"}),"Local Plugin")),Object(d.mdx)("p",null,"Or if you have a plugin locally supply the path."),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"../path/to/plugin.js"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(d.mdx)("h2",{id:"plugin-configuration"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#plugin-configuration"}),"Plugin Configuration")),Object(d.mdx)("p",null,"To provide plugin specific config change the following:"),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"chrome"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(d.mdx)("p",null,"To this:"),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"chrome"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"extensionId"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"1234"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"build"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"my-compiled-extension.zip"')," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var c=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=c},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("nxTg")),o=n(a("mXGw")),r=n(a("R8iU")),d=a("/FXl"),l=n(a("PDtE")),s=a("C3pV"),m=n(a("6f/q")),u=n(a("x3GE")),i=/([^`]*)`([^`]*)`(.*)/m;var p=function(e){var t=e.children,a=e.frontMatter,n=o.default.useState(!1),p=(0,c.default)(n,2),b=p[0],f=p[1],x=(0,d.useMDXComponents)(),g=a.__resourcePath.split("/")[0],j=(0,u.default)(),O=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return r.default.relative("./",e)})).filter((function(e){return e.startsWith(g)})).map((function(e){return j.find((function(t){return t.__resourcePath===e}))}));return o.default.createElement(m.default,{menuState:[b,f]},o.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},o.default.createElement(s.Sidebar,{links:O,folder:g}),o.default.createElement("main",{className:(0,l.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",b&&"hidden")},o.default.createElement(x.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");i.test(n);){var r=n.match(i),d=(0,c.default)(r,4),l=d[1],s=d[2],m=d[3];a.push(l),a.push(o.default.createElement(e.inlineCode,null,s)),n=m}return a.push(n),o.default.createElement("div",null,a)}}(x,a.title)),t)))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1");t.default=function(){try{return n.keys().map(n)}catch(e){return[]}}}},[["3o/V",0,1,2,3,4]]]);