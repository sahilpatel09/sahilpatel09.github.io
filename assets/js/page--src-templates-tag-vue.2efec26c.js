(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2qYH":function(t,s,e){"use strict";e.r(s);var i={components:{BlogMenu:e("D1T+").a},metaInfo:function(){return{title:"Tag: ".concat(this.$page.tag.title)}}},a=(e("yram"),e("KHd+")),n=null,l=Object(a.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("BlogMenu"),t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 tron"},[e("h1",{staticClass:"blogTitle"},[t._v(t._s(t.$page.tag.title))]),e("p",{staticClass:"blogDescription"},[t._v('\n        All the blog posts that includes the tag "'+t._s(t.$page.tag.title)+'".\n      ')])])]),e("div",{staticClass:"row blogList"},t._l(t.$page.tag.belongsTo.edges,(function(s){return e("div",{key:s.node.id,staticClass:"col-md-4"},[e("div",{staticClass:"tile"},[e("img",{staticClass:"img-fluid",attrs:{src:s.node.image}}),e("div",{staticClass:"date tiledesc"},[t._v("\n          "+t._s(s.node.date)+"\n        ")]),e("div",{staticClass:"tileText"},[e("g-link",{staticClass:"tileTextStyle",attrs:{to:s.node.path,rel:"bookmark"}},[t._v(t._s(s.node.title))])],1),e("div",{staticClass:"tiledesc"},[t._v("\n          "+t._s(s.node.summary)+"\n        ")])])])})),0),e("center")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row scrollmenu"},[s("a",{attrs:{href:"#home"}},[this._v("Vue.js")]),s("a",{attrs:{href:"#news"}},[this._v("Node.js")]),s("a",{attrs:{href:"#contact"}},[this._v("Netlify")]),s("a",{attrs:{href:"#about"}},[this._v("WordPress")]),s("a",{attrs:{href:"#support"}},[this._v("Support")])])}],!1,null,"1d65f127",null);"function"==typeof n&&n(l);s.default=l.exports},"8Fkc":function(t,s,e){},"D1T+":function(t,s,e){"use strict";var i={name:"BlogBar",data:function(){return{isopen:!1,showHide:!1,resolution:{width:null,height:null}}},computed:{getScreenWidth:function(){return window.screen.width}},methods:{clicked:function(){!0===this.isopen?(this.isopen=!1,this.showHide=!1,this.getScreenWidth<769&&document.body.classList.remove("fixedBody")):(this.isopen=!0,this.showHide=!0,this.getScreenWidth<769&&document.body.classList.add("fixedBody"))}}},a=(e("PwD5"),e("KHd+")),n=Object(a.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("g-link",{attrs:{to:"/"}},[e("div",{staticClass:"brand"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"50",height:"50","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("polygon",{staticClass:"hex",attrs:{points:"37.5,18.75 28.125,35 9.375,35 0,18.75 9.375,2.5 28.125,2.5",fill:"transparent",stroke:"cyan","stroke-width":"3",transform:"translate(10)"}}),e("text",{attrs:{x:"28",y:"25",fill:"cyan","font-family":"Verdana","font-size":"18","text-anchor":"middle"}},[t._v("\n          S\n        ")])])])]),e("button",{staticClass:"toggle",attrs:{type:"button","aria-controls":"menuItems","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[t._v("Menu")]),e("div",{staticClass:"wrapper-menu",class:{open:t.isopen},on:{click:t.clicked}},[e("div",{staticClass:"line-menu half start"}),e("div",{staticClass:"line-menu"}),e("div",{staticClass:"line-menu half end"})])]),e("div",{staticClass:"menu"},[e("ul",{staticClass:"menuitems",attrs:{id:"menuItems","data-visible":t.showHide}},[e("li",{staticClass:"singleItem"},[e("span",{staticClass:"numerals"},[t._v("I.")]),e("g-link",{attrs:{to:"/",title:"About me"},on:{click:t.clicked}},[t._v("Portfolio")])],1),e("li",{staticClass:"singleItem"},[e("span",{staticClass:"numerals"},[t._v("II.")]),e("g-link",{attrs:{to:"/blog",title:"Blog"},on:{click:t.clicked}},[t._v("Blog")])],1),e("li",{staticClass:"singleItem"},[e("span",{staticClass:"numerals"},[t._v("III.")]),e("g-link",{attrs:{to:"/#getintouch",title:"Contact"},on:{click:t.clicked}},[t._v("Contact")])],1),t._m(0)])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"specialButton"},[s("a",{attrs:{href:"https://drive.google.com/file/d/12IvNtpyO7xXaKlzkv66rotgJRlP1MLAe/view?usp=sharing"}},[this._v("Resume")])])}],!1,null,"795b01b6",null);s.a=n.exports},PwD5:function(t,s,e){"use strict";e("QVBX")},QVBX:function(t,s,e){},yram:function(t,s,e){"use strict";e("8Fkc")}}]);