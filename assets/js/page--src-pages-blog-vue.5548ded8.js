(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+ztC":function(t,a,e){},"8tYL":function(t,a,e){"use strict";e.r(a);e("Kw5r");var s=e("DOVJ"),i=(e("Y6W1"),e("VTBJ")),n=(e("qePV"),e("rB9j"),e("UxlC"),e("2B1R"),e("ALS0"),e("ma9I"),e("fVfk")),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,l=a.data,o=a.parent,c=e.info,u=e.showLinks,d=e.showNavigation,p=e.ariaLabel,f=function(t,a){var e=t.currentPage,s=void 0===e?1:e,i=t.totalPages,n=void 0===i?1:i,l=Math.ceil(a/2),r=Math.floor(s-l),o=Math.floor(s+l);n<=a?(r=0,o=n):s<=l?(r=0,o=a):s+l>=n&&(r=n-a,o=n);for(var c=[],u=r+1;u<=o;u++)c.push(u);return{current:s,total:n,start:r,end:o,pages:c}}(c,e.range),g=f.current,v=f.total,h=f.pages,C=f.start,m=f.end,b=Object(n.d)(o.$route),y=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===g&&(l=e.ariaCurrentLabel);var c={to:r(b,a),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,o],attrs:Object(i.a)(Object(i.a)({},c),{},{"aria-label":l.replace("%n",a),"aria-current":g===a})},[n])},L=u?h.map((function(t){return y(t,t,e.ariaLinkLabel)})):[];if(d){var w=e.firstLabel,k=e.prevLabel,_=e.nextLabel,S=e.lastLabel,x=e.ariaFirstLabel,P=e.ariaPrevLabel,j=e.ariaNextLabel,B=e.ariaLastLabel,I=e.firstClass,O=e.prevClass,N=e.nextClass,$=e.lastClass,D=e.navClass;g>1&&L.unshift(y(g-1,k,P,[O,D])),C>0&&L.unshift(y(1,w,x,[I,D])),g<v&&L.push(y(g+1,_,j,[N,D])),m<v&&L.push(y(v,S,B,[$,D]))}return L.length<2?null:t("nav",Object(i.a)(Object(i.a)({},l),{},{attrs:{role:"navigation","aria-label":p}}),L)}};function r(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(n.g)(t)+"/".concat(a).concat(e):t}e("6NbQ");var o={name:"BlogBar",data:function(){return{isopen:!1,showHide:!1,resolution:{width:null,height:null}}},computed:{getScreenWidth:function(){return window.screen.width}},methods:{clicked:function(){!0===this.isopen?(this.isopen=!1,this.showHide=!1,this.getScreenWidth<769&&document.body.classList.remove("fixedBody")):(this.isopen=!0,this.showHide=!0,this.getScreenWidth<769&&document.body.classList.add("fixedBody"))}}},c=(e("D03L"),e("KHd+")),u={components:{Pager:l,BlogMenu:Object(c.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"brand"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"50",height:"50","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("polygon",{staticClass:"hex",attrs:{points:"37.5,18.75 28.125,35 9.375,35 0,18.75 9.375,2.5 28.125,2.5",fill:"transparent",stroke:"cyan","stroke-width":"3",transform:"translate(10)"}}),e("text",{attrs:{x:"28",y:"25",fill:"cyan","font-family":"Verdana","font-size":"18","text-anchor":"middle"}},[t._v("\n        S\n      ")])])]),e("button",{staticClass:"toggle",attrs:{type:"button","aria-controls":"menuItems","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[t._v("Menu")]),e("div",{staticClass:"wrapper-menu",class:{open:t.isopen},on:{click:t.clicked}},[e("div",{staticClass:"line-menu half start"}),e("div",{staticClass:"line-menu"}),e("div",{staticClass:"line-menu half end"})])]),e("div",{staticClass:"menu"},[e("ul",{staticClass:"menuitems",attrs:{id:"menuItems","data-visible":t.showHide}},[e("li",{staticClass:"singleItem"},[e("span",{staticClass:"numerals"},[t._v("I.")]),e("g-link",{attrs:{to:"/",title:"About me"},on:{click:t.clicked}},[t._v("Portfolio")])],1),e("li",{staticClass:"singleItem"},[e("span",{staticClass:"numerals"},[t._v("II.")]),e("g-link",{attrs:{to:"/#getintouch",title:"Contact"},on:{click:t.clicked}},[t._v("Contact")])],1),e("li",{staticClass:"specialButton"},[t._v("Resume")])])])])}),[],!1,null,"9bcde898",null).exports},metaInfo:{title:"View my blog posts"}},d=(e("9+H+"),null),p=Object(c.a)(u,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("BlogMenu"),t._m(0),t._m(1),e("div",{staticClass:"row"},t._l(t.$page.posts.edges,(function(a){return e("div",{key:a.id,staticClass:"col-md-4"},[e("div",{staticClass:"tile"},[e("img",{staticClass:"img-fluid",attrs:{src:a.node.image}}),e("div",{staticClass:"tileText"},[e("g-link",{staticClass:"tileTextStyle",attrs:{to:a.node.path,rel:"bookmark"}},[t._v(t._s(a.node.title))])],1),e("div",{staticClass:"tiledesc"},[t._v("\n              "+t._s(a.node.summary)+"\n            ")])])])})),0),e("h2",[t._v("Pagination")]),e("Pager",{attrs:{info:t.$page.posts.pageInfo}})],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row scrollmenu"},[a("a",{attrs:{href:"#home"}},[this._v("Vue.js")]),a("a",{attrs:{href:"#news"}},[this._v("Node.js")]),a("a",{attrs:{href:"#contact"}},[this._v("Netlify")]),a("a",{attrs:{href:"#about"}},[this._v("WordPress")]),a("a",{attrs:{href:"#support"}},[this._v("Support")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 tron"},[a("h1",{staticClass:"blogTitle"},[this._v("Writing")]),a("p",{staticClass:"blogDescription"},[this._v("So far I’ve written 8 longform tutorials & articles. For more compact content visit my Digital Garden. RSS.")])])])}],!1,null,"096b04bf",null);"function"==typeof d&&d(p);a.default=p.exports},"9+H+":function(t,a,e){"use strict";e("+ztC")},D03L:function(t,a,e){"use strict";e("jyDh")},jyDh:function(t,a,e){}}]);