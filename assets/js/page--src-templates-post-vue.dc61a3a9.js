(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0ZJN":function(t,s,a){"use strict";a("MZJy")},"1kRb":function(t,s,a){},GW5j:function(t,s,a){"use strict";a("1kRb")},MZJy:function(t,s,a){},SHZv:function(t,s,a){"use strict";a.r(s);var e={components:{MenuBar:a("eT4Z").a},metaInfo:function(){return{title:this.$page.post.title}}},i=(a("GW5j"),a("KHd+")),n=null,l=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("g-link",{staticClass:"backLink",attrs:{to:"/"}},[a("svg",{staticClass:"bi bi-arrow-90deg-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"}})]),t._v(" \n\n      Go back to my profile.")]),a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"postTitle"},[t._v(t._s(t.$page.post.title))]),a("hr",{staticClass:"line"}),a("div",[a("span",{staticClass:"metahead"},[t._v("Tags:")]),t._l(t.$page.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"metadata",attrs:{to:s.path}},[t._v("\n            "+t._s(s.title)+", \n          ")])}))],2),a("p",{staticClass:"metadata"},[t._v("Posted on "+t._s(t.$page.post.date))]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown-body mb-8",attrs:{id:"article-area"},domProps:{innerHTML:t._s(t.$page.post.content)}})])],1)])}),[],!1,null,null,null);"function"==typeof n&&n(l);s.default=l.exports},eT4Z:function(t,s,a){"use strict";var e={name:"Bar",data:function(){return{isopen:!1,showHide:!1}},computed:{getScreenWidth:function(){return window.screen.width}},methods:{clicked:function(){!0===this.isopen?(this.isopen=!1,this.showHide=!1,getScreenWidth()<769&&document.body.classList.remove("fixedBody")):(this.isopen=!0,this.showHide=!0,getScreenWidth()<769&&document.body.classList.add("fixedBody"))}}},i=(a("0ZJN"),a("KHd+")),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"brand"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"50",height:"50","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("polygon",{staticClass:"hex",attrs:{points:"37.5,18.75 28.125,35 9.375,35 0,18.75 9.375,2.5 28.125,2.5",fill:"transparent",stroke:"cyan","stroke-width":"3",transform:"translate(10)"}}),a("text",{attrs:{x:"28",y:"25",fill:"cyan","font-family":"Verdana","font-size":"18","text-anchor":"middle"}},[t._v("\n        S\n      ")])])]),a("button",{staticClass:"toggle",attrs:{type:"button","aria-controls":"menuItems","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v("Menu")]),a("div",{staticClass:"wrapper-menu",class:{open:t.isopen},on:{click:t.clicked}},[a("div",{staticClass:"line-menu half start"}),a("div",{staticClass:"line-menu"}),a("div",{staticClass:"line-menu half end"})])]),a("div",{staticClass:"menu"},[a("ul",{staticClass:"menuitems",attrs:{id:"menuItems","data-visible":t.showHide}},[a("li",{staticClass:"singleItem"},[a("span",{staticClass:"numerals"},[t._v("01.")]),a("a",{attrs:{href:"#about",title:"About me"},on:{click:t.clicked}},[t._v("About")])]),t._m(0),a("li",{staticClass:"singleItem"},[a("span",{staticClass:"numerals"},[t._v("03.")]),a("a",{attrs:{href:"#projects",title:"My Projects"},on:{click:t.clicked}},[t._v("Projects")])]),a("li",{staticClass:"singleItem"},[a("span",{staticClass:"numerals"},[t._v("04.")]),a("a",{attrs:{href:"/blog",title:"Blog"},on:{click:t.clicked}},[t._v("Blog")])]),a("li",{staticClass:"singleItem"},[a("span",{staticClass:"numerals"},[t._v("05.")]),a("a",{attrs:{href:"#getintouch",title:"Contact me"},on:{click:t.clicked}},[t._v("Contact")])]),a("li",{staticClass:"specialButton"},[t._v("Resume")])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"singleItem"},[s("span",{staticClass:"numerals"},[this._v("02.")]),this._v("Experience\n      ")])}],!1,null,"2a18f0dc",null);s.a=n.exports}}]);