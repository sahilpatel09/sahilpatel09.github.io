(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+oEj":function(t,e,a){},"D1T+":function(t,e,a){"use strict";var s={name:"BlogBar",data:function(){return{isopen:!1,showHide:!1,resolution:{width:null,height:null}}},computed:{getScreenWidth:function(){return window.screen.width}},methods:{clicked:function(){!0===this.isopen?(this.isopen=!1,this.showHide=!1,this.getScreenWidth<769&&document.body.classList.remove("fixedBody")):(this.isopen=!0,this.showHide=!0,this.getScreenWidth<769&&document.body.classList.add("fixedBody"))}}},i=(a("ihHz"),a("KHd+")),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("g-link",{attrs:{to:"/"}},[a("div",{staticClass:"brand"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"50",height:"50","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("polygon",{staticClass:"hex",attrs:{points:"37.5,18.75 28.125,35 9.375,35 0,18.75 9.375,2.5 28.125,2.5",fill:"transparent",stroke:"cyan","stroke-width":"3",transform:"translate(10)"}}),a("text",{attrs:{x:"28",y:"25",fill:"cyan","font-family":"Verdana","font-size":"18","text-anchor":"middle"}},[t._v("\n          S\n        ")])])])]),a("button",{staticClass:"toggle",attrs:{type:"button","aria-controls":"menuItems","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v("Menu")]),a("div",{staticClass:"wrapper-menu",class:{open:t.isopen},on:{click:t.clicked}},[a("div",{staticClass:"line-menu half start"}),a("div",{staticClass:"line-menu"}),a("div",{staticClass:"line-menu half end"})])]),a("div",{staticClass:"menu"},[a("ul",{staticClass:"menuitems",attrs:{id:"menuItems","data-visible":t.showHide}},[a("li",{staticClass:"singleItem"},[a("span",{staticClass:"numerals"},[t._v("I.")]),a("g-link",{attrs:{to:"/",title:"About me"},on:{click:t.clicked}},[t._v("Portfolio")])],1),a("li",{staticClass:"singleItem"},[a("span",{staticClass:"numerals"},[t._v("II.")]),a("g-link",{attrs:{to:"/blog",title:"Blog"},on:{click:t.clicked}},[t._v("Blog")])],1),a("li",{staticClass:"singleItem"},[a("span",{staticClass:"numerals"},[t._v("III.")]),a("g-link",{attrs:{to:"/#getintouch",title:"Contact"},on:{click:t.clicked}},[t._v("Contact")])],1),t._m(0)])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"specialButton"},[e("a",{attrs:{href:"/resume.pdf"}},[this._v("Resume")])])}],!1,null,"dc44a012",null);e.a=n.exports},GW5j:function(t,e,a){"use strict";a("M66+")},JWlW:function(t,e){t.exports="data:image/jpeg;base64,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"},"M66+":function(t,e,a){},SHZv:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex max-w-lg mx-auto px-5 py-2 overflow-hidden bg-light-navy rounded-lg shadow-lg md:hidden"},[e("img",{staticClass:"object-cover w-20 mx-auto rounded-full m-3",attrs:{src:a("JWlW"),alt:"avatar"}}),e("div",{staticClass:"flex flex-col items-start px-3 py-3"},[e("h1",{staticClass:"mx-3 text-lg font-semibold bg-light-navy text-center mx-auto text-white"},[this._v("Sahil Patel")]),e("p",{staticClass:"text-center text-gray-400"},[this._v("Full Stack Developer, UI / UX Designer , and lifelong learner.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden md:block flex max-w-full mx-auto px-5 py-2 overflow-hidden bg-light-navy rounded-lg shadow-lg"},[e("img",{staticClass:"object-cover w-20 mx-auto rounded-full m-3",attrs:{src:a("JWlW"),alt:"avatar"}}),e("div",{staticClass:"flex flex-col items-start px-3 py-3"},[e("h1",{staticClass:"mx-3 text-lg font-semibold bg-light-navy text-center mx-auto text-white"},[this._v("Sahil Patel")]),e("p",{staticClass:"text-center text-gray-400"},[this._v("Full Stack Developer, UI / UX Designer , and lifelong learner.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mt-6 pl-1  rounded bg-navy shadow-2xl"},[e("h2",{staticClass:"text-3xl py-2 text-gray-400"},[this._v("Recent Posts")])])}],i=a("D1T+"),n=a("KHd+"),l=a("Kw5r"),o=l.a.config.optionMergeStrategies.computed,r={posts:{totalCount:3,pageInfo:{totalPages:1,currentPage:1},edges:[{node:{id:"0337cb11db4a901658eba70975afb4e3",title:"Bootstraping Finocrunch front-end with Vue3",path:"/blog/bootstrapping-finocrunch/",date:"February 28, 2022",summary:"Let us bootstrap the FinoCrunch project with Vue3 & Tailwindcss. Backend support with Supabase. ",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7E8xwfvS-kwa9KlXSx0F-4LdDfSFIw0REh_qDMLmmhIQEZ0boum9--v8HyEtS1s9Kj1g&usqp=CAU"}},{node:{id:"5825562b56453566d022fd4c12472752",title:"Finocrunch: Another HomeFinance Manager",path:"/blog/finocrunch-home-fianance-manager/",date:"February 28, 2022",summary:"Today, I got a new idea for a project which can help a lot of people learn front-end development.",image:"https://res.cloudinary.com/sahil-patel/image/upload/v1646040506/finocrunch/logo-text-big_keeszd.png"}},{node:{id:"e7042afeb02008d9ec88617770e702f8",title:"Simple & Unique Login Page Design for Auto Repair Dashboard Website",path:"/blog/simple-and-unique-login-page-design-for-auto-repair-dashboard-website/",date:"January 25, 2022",summary:"In this article, I have shown how to make a simple and full screen Login screen. I have used HTML, CSS and some bootstrap classes.",image:"https://solobytes.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1643642516979%2F8OMj7qQ4P.png%3Fw%3D800%26h%3D420%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"}}]}},c=function(t){var e=t.options;e.__staticData?e.__staticData.data=r:(e.__staticData=l.a.observable({data:r}),e.computed=o({$static:function(){return e.__staticData.data}},e.computed))},d=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.$static.posts.edges,(function(e){return a("div",{key:e.id,staticClass:"mx-auto overflow-hidden rounded-lg mb-4 shadow-lg bg-light-navy"},[a("div",{staticClass:"px-4 py-3"},[a("h1",{staticClass:"text-lg font-semibold text-lightest-slate"},[a("g-link",{attrs:{to:e.node.path}},[t._v("\n            "+t._s(e.node.title)+"\n          ")])],1),a("p",{staticClass:"mt-1 text-sm text-gray-200"},[t._v(t._s(e.node.summary))]),a("a",{staticClass:"text-indigo-500",attrs:{href:e.node.path}},[t._v("Read more.")])])])})),0)}),[],!1,null,null,null);"function"==typeof c&&c(d);var u=d.exports,h={name:"Footer",data:function(){return{}}},m=Object(n.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"flex flex-col items-center justify-center mt-20"},[e("img",{staticClass:"md:w-1/2 md:ml-32 ml-16",attrs:{src:a("mF9U"),alt:""}}),e("div",{staticClass:"py-2"},[e("ul",{staticClass:"flex flex-row text-light-slate gap-6 antialiased text-lg"},[e("li",{staticClass:"transition duration-400 hover:text-white"},[e("g-link",{attrs:{to:"/#about"}},[this._v("About")])],1),e("li",{staticClass:"transition duration-400 hover:text-white"},[e("g-link",{attrs:{to:"/blog"}},[this._v("Blog")])],1),e("li",{staticClass:"transition duration-400 hover:text-white"},[e("g-link",{attrs:{to:"/"}},[this._v("Portfolio")])],1)])]),e("span",{staticClass:"flex py-3"},[e("a",{staticClass:"text-gray-400 hover:text-gray-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"}})])]),e("a",{staticClass:"ml-3 text-gray-400 hover:text-gray-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[e("path",{staticStyle:{stroke:"none","fill-rule":"evenodd","fill-opacity":"1"},attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])]),e("a",{staticClass:"ml-3 text-gray-400 hover:text-gray-200"},[e("svg",{staticClass:"h-5 w-5",staticStyle:{"--darkreader-inline-stroke":"currentColor"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","data-darkreader-inline-stroke":""}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])]),e("a",{staticClass:"ml-3 text-gray-400 hover:text-gray-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"0",viewBox:"0 0 24 24"}},[e("path",{attrs:{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}}),e("circle",{attrs:{cx:"4",cy:"4",r:"2",stroke:"none"}})])])]),e("p",{staticClass:"text-lg text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4"},[this._v("© "+this._s((new Date).getFullYear())+" \n\t    \t"),e("a",{staticClass:"text-lightest-slate transition duration-200 hover:text-green-400",attrs:{href:"https:github.com/sahilpatel09",title:"Sahil Patel | Github Profile"}},[this._v("\n\t    \tSahil Patel. \n\t    \t")]),this._v("\n\n\t    \tAll rights reserved.\n\t    ")])])])}),[],!1,null,"0c625b40",null).exports,g={components:{BlogMenu:i.a,Recents:u,Footer:m},metaInfo:function(){return{title:this.$page.post.title}}},p=(a("GW5j"),null),f=Object(n.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mx-auto"},[a("BlogMenu"),a("div",{staticClass:"px-2 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl md:px-24 lg:px-8 lg:pt-20"},[a("div",{staticClass:"max-w-3xl mb-5 md:mx-auto sm:text-center lg:max-w-3xl"},[a("div",[a("p",{staticClass:"inline-block mb-2 text-xl font-semibold tracking-wider text-gray-400"},[t._v("\n        "+t._s(t.$page.post.date)+" |           "),a("span",{staticClass:"text-slate "},[t._v("Tags:")]),t._l(t.$page.post.tags,(function(e){return a("g-link",{key:e.id,staticClass:"text-lightest-slate",attrs:{to:e.path}},[t._v("\n            #"+t._s(e.title)+",\n          ")])}))],2)]),a("h2",{staticClass:"max-w-full font-sans text-4xl font-bold leading-none tracking-tight sm:text-6xl md:mx-auto text-slate text-lightest-slate"},[t._v("\n        "+t._s(t.$page.post.title)+"\n    ")]),a("p",{staticClass:"text-base md:text-lg text-lightest-slate max-w-xl mx-auto"},[t._v("\n      "+t._s(t.$page.post.summary)+"\n    ")])]),t._m(0)]),a("div",{staticClass:"flex md:flex-wrap flex-col gap-4 mx-auto flex-col-reverse md:flex-row md:flex-nowrap"},[a("div",{staticClass:"w-full md:w-96 h-auto z-10"},[t._m(1),t._m(2),a("Recents")],1),a("div",{staticClass:"w-full md:w-2/3 h-auto bg-light-navy shadow-lg pb-7"},[a("img",{staticClass:"w-full object-cover pb-5",attrs:{src:t.$page.post.image}}),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown-body mb-8 px-6",attrs:{id:"article-area"},domProps:{innerHTML:t._s(t.$page.post.content)}})])]),a("Footer")],1)}),s,!1,null,null,null);"function"==typeof p&&p(f);e.default=f.exports},ihHz:function(t,e,a){"use strict";a("+oEj")},mF9U:function(t,e,a){t.exports=a.p+"assets/img/couch.788b49ae.png"}}]);