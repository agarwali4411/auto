_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=c.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,d.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),c=n(a("mXGw")),d=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),c=n(a("mXGw")),d=n(a("9fEB")),l=a("GDok"),o=a("nZpd"),s=a("AFBu"),i=a("0oBi"),u=function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=c.default.useState(!1);c.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var u=(0,i.useDarkMode)();return c.default.createElement(o.MobileMenuContext.Provider,{value:a.menuState||n},c.default.createElement(d.default,null,c.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,s.formatPath)(u?"favicon-dark.png":"favicon.png")})),c.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},c.default.createElement(l.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))};t.default=u},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e};var r=n(a("R8iU"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),c=n(a("RiSW")),d=n(a("nxTg")),l=n(a("mXGw")),o=n(a("5dyF")),s=n(a("9fEB")),i=n(a("R8iU")),u=n(a("PDtE")),m=a("/FXl"),p=a("bBV7"),f=a("nZpd"),b=a("AFBu");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=l.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=h;var O=function(e){var t=e.href,a=e.children,n=l.default.useContext(h),r=(0,m.useMDXComponents)().SidebarLink,c=i.default.join(n.sidebarFileLocation,t),d=t;return n.sidebarFileLocation&&((d=c).endsWith("/index")&&(d=d.replace("/index","")),d.endsWith("/")&&(d=d.slice(0,-1))),l.default.createElement(o.default,{passHref:!0,href:(0,b.postFixHTML)(d)},l.default.createElement(r,{isActive:n.pathname.replace("/index","")===(0,b.formatPath)(d)},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,o=l.default.useContext(f.MobileMenuContext),x=(0,d.default)(o,1)[0],j="/".concat(r),N=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(j),v=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?i.default.relative("/auto",a.pathname):i.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,b.formatPath)(r.__resourcePath)}}(n),k=(0,m.useMDXComponents)(),y=k.SidebarItemWrapper,E=(k.SidebarLink,k.SidebarTitle),w=k.SidebarDivider,_=k.SidebarList,M=k.Sidebar,P=(0,c.default)(k,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return l.default.createElement(h.Provider,{value:g({},v,{sidebarFileLocation:N?j:""})},l.default.createElement(m.MDXProvider,{components:g({},P,{li:y,ul:_,a:O,p:E,hr:w})},l.default.createElement(s.default,null,l.default.createElement("title",null,v.title.replace(/\\`/g,"`"))),l.default.createElement(M,{className:(0,u.default)(!x&&"hidden","lg:block")},N?l.default.createElement(N,null):l.default.createElement(_,null,n.map((function(e){return l.default.createElement(y,{key:e.__resourcePath},l.default.createElement(O,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),c=n(a("8VmE")),d=n(a("RiSW")),l=n(a("mXGw")),o=n(a("5dyF")),s=a("V5Fo"),i=a("/FXl"),u=n(a("PDtE")),m=a("nZpd"),p=a("AFBu"),f=function(e){var t=e.className,a=(0,d.default)(e,["className"]);return l.default.createElement("svg",(0,c.default)({className:(0,u.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),l.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},b=function(){var e=(0,i.useMDXComponents)().SearchInput;return l.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},l.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=l.default.useContext(m.MobileMenuContext),c=(0,r.default)(n,2),d=c[0],u=c[1],x=(0,i.useMDXComponents)(),g=x.Logo,h=x.NavBarWrapper,O=x.NavBar,j=x.NavBarItem,N=x.MobileMenuButton;return l.default.createElement(l.default.Fragment,null,l.default.createElement(h,null,l.default.createElement(O,null,a?l.default.createElement(o.default,{passHref:!0,href:"/"},l.default.createElement(g,null)):l.default.createElement(g,null),l.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},l.default.createElement(b,null),l.default.createElement(N,{open:d,setOpen:u,className:"lg:hidden"}),l.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return l.default.createElement(o.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},l.default.createElement(j,null,(0,s.titleCase)(e)))})),l.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},l.default.createElement(f,null)))))),d&&l.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return l.default.createElement(o.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},l.default.createElement(j,null,(0,s.titleCase)(e)))})),l.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank"},l.default.createElement(f,{className:"mr-2"}),"Open on GitHub")))}},Phuc:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/build-platforms/travis",function(){return a("prNi")}])},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},prNi:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),r=a("dV/x"),c=a("mXGw"),d=a.n(c),l=a("/FXl"),o=a("pu0P"),s=a.n(o),i=(d.a.createElement,{title:"Travis CI",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/build-platforms/travis.mdx",__scans:{}}),u={frontMatter:i},m=s.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.mdx)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The following config declares the ",Object(l.mdx)("inlineCode",{parentName:"p"},"deploy")," job that run on all branches. The job will either release:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"a new ",Object(l.mdx)("inlineCode",{parentName:"li"},"latest")," version from ",Object(l.mdx)("inlineCode",{parentName:"li"},"master")),Object(l.mdx)("li",{parentName:"ul"},"a ",Object(l.mdx)("inlineCode",{parentName:"li"},"canary")," build from a pull request (if your package manager plugin implements them)")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},Object(l.mdx)("inlineCode",{parentName:"strong"},".travis.yml"))),Object(l.mdx)("pre",{className:"language-yaml"},Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"language"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," node_js\n",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"node_js"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"10"'),"\n\n",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"git"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n  ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"depth"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean important"}),"false"),"\n\n",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"script"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n  ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," yarn lint\n  ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," yarn test\n  ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," yarn build\n\n",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"deploy"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n  ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"provider"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," script\n    ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"script"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," if ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),' "$GH_TOKEN" ',Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),"!="),' "false" ',Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),";then npx auto shipit; fi;\n    ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"skip-cleanup"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean important"}),"true"),"\n    ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"on"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n      ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"all_branches"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean important"}),"true"),"\n")),Object(l.mdx)("h2",{id:"troubleshooting"},Object(l.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#troubleshooting"}),"Troubleshooting")),Object(l.mdx)("p",null,"If you are having problems make sure you have done the following:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"GH_TOKEN")," is set"),Object(l.mdx)("li",{parentName:"ul"},"Any other secrets for plugins are set (Ex; ",Object(l.mdx)("inlineCode",{parentName:"li"},"NPM_TOKEN")," with the NPM plugin)")),Object(l.mdx)("h3",{id:"detached-head-monorepo"},Object(l.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#detached-head-monorepo"}),"Detached Head (Monorepo)")),Object(l.mdx)("p",null,'Some plugins might use tools that require you to be on a branch.\nThe default setup for travis leaves you in a "Detached Head" state, meaning the git HEAD pointer is not on a branch.\nTo fix this add the following lines to your ',Object(l.mdx)("inlineCode",{parentName:"p"},".travis.yml")),Object(l.mdx)("pre",{className:"language-yml"},Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"before_deploy"),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n  ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," if ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),' "$TRAVIS_BRANCH" == "master" ',Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),";then\n    git checkout master;\n    fi;\n")),Object(l.mdx)("p",null,"This code will ensure that your git HEAD is on master when creating a new release."),Object(l.mdx)("h3",{id:"canary-deploy-failing-on-forks"},Object(l.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#canary-deploy-failing-on-forks"}),"Canary Deploy Failing on Forks")),Object(l.mdx)("p",null,"By default Travis will not pass secrets to forks.\nBecause of this canaries releases will fail.\nYou can either:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Pass secrets to forks (insecure)"),Object(l.mdx)("li",{parentName:"ul"},"Only run shipit if secrets are available (recommended, in above config)")),Object(l.mdx)("h2",{id:"examples"},Object(l.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#examples"}),"Examples")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/relay-tools/relay-compiler-language-typescript/blob/master/.travis.yml"}),Object(l.mdx)("inlineCode",{parentName:"a"},"relay-compiler-language-typescript")))))}p.isMDXComponent=!0},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),c=n(a("mXGw")),d=n(a("R8iU")),l=a("/FXl"),o=n(a("PDtE")),s=a("C3pV"),i=n(a("6f/q")),u=n(a("x3GE")),m=/([^`]*)`([^`]*)`(.*)/m;var p=function(e){var t=e.children,a=e.frontMatter,n=c.default.useState(!1),p=(0,r.default)(n,2),f=p[0],b=p[1],x=(0,l.useMDXComponents)(),g=a.__resourcePath.split("/")[0],h=(0,u.default)(),O=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return d.default.relative("./",e)})).filter((function(e){return e.startsWith(g)})).map((function(e){return h.find((function(t){return t.__resourcePath===e}))}));return c.default.createElement(i.default,{menuState:[f,b]},c.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},c.default.createElement(s.Sidebar,{links:O,folder:g}),c.default.createElement("main",{className:(0,o.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",f&&"hidden")},c.default.createElement(x.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");m.test(n);){var d=n.match(m),l=(0,r.default)(d,4),o=l[1],s=l[2],i=l[3];a.push(o),a.push(c.default.createElement(e.inlineCode,null,s)),n=i}return a.push(n),c.default.createElement("div",null,a)}}(x,a.title)),t)))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1");t.default=function(){try{return n.keys().map(n)}catch(e){return[]}}}},[["Phuc",0,1,2,3,4]]]);