(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{433:function(t,e,r){"use strict";r(437);var o=r(436);e.a={mounted:function(){Object(o.d)()}}},436:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"d",(function(){return C})),r.d(e,"b",(function(){return j})),r.d(e,"c",(function(){return y}));r(32),r(21),r(26),r(38),r(39);var o=r(9),l=r(29);function n(t,e){for(var r in e)"object"!==Object(l.a)(e[r])?t[r]=e[r]:n(t[r],e[r])}var c=r(437),d=r.n(c);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={mode:"light",fonts:{base:"Open Sans"},colors:{gray:{100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},theme:{default:"#172b4d",primary:"#002fa7",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},black:"#12263F",white:"#FFFFFF",transparent:"transparent"}};var f=!1;function C(){var t,e,r,o;f||(n(d.a,(t=h.colors,e=h.mode,r=h.fonts,o={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:"dark"===e?t.gray[700]:t.gray[600],defaultFontColor:"dark"===e?t.gray[700]:t.gray[600],defaultFontFamily:r.base,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:t.theme.primary},line:{tension:.4,borderWidth:4,borderColor:t.theme.primary,backgroundColor:t.transparent,borderCapStyle:"rounded"},rectangle:{backgroundColor:t.theme.primary},arc:{backgroundColor:t.theme.primary,borderColor:"dark"==e?t.gray[800]:t.white,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},pie:{tooltips:{mode:"point"}},doughnut:{tooltips:{mode:"point"},cutoutPercentage:83,legendCallback:function(t){var data=t.data,content="";return data.labels.forEach((function(label,t){var e=data.datasets[0].backgroundColor[t];content+='<span class="chart-legend-item">',content+='<i class="chart-legend-indicator" style="background-color: '+e+'"></i>',content+=label,content+="</span>"})),content}}}},d.a.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:"dark"===e?t.gray[900]:t.gray[200],drawBorder:!1,drawTicks:!0,zeroLineWidth:1,zeroLineColor:"dark"===e?t.gray[900]:t.gray[200],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(t){if(!(t%10))return t}}}),d.a.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1,lineWidth:1,zeroLineWidth:1},ticks:{padding:20},maxBarThickness:10}),o)),f=!0)}var _={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},j={scales:{yAxes:[{gridLines:{color:h.colors.gray[700],zeroLineColor:h.colors.gray[700]}}]}},y=(v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),v(v({},_),{},{cutoutPercentage:70,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{display:0,ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{display:0,barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}),v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:110,padding:20,fontColor:"#ff8a76"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(220,53,69,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#ff8a76"}}]}}),v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}));v(v({},_),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}})},574:function(t,e,r){"use strict";var o=r(435),l=r(433);e.a={name:"line-chart",extends:o.c,mixins:[o.e.reactiveProp,l.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},575:function(t,e,r){"use strict";var o=r(435),l=r(433);e.a={name:"bar-chart",extends:o.a,mixins:[o.e.reactiveProp,l.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},576:function(t,e,r){var map={"./af":439,"./af.js":439,"./ar":440,"./ar-dz":441,"./ar-dz.js":441,"./ar-kw":442,"./ar-kw.js":442,"./ar-ly":443,"./ar-ly.js":443,"./ar-ma":444,"./ar-ma.js":444,"./ar-sa":445,"./ar-sa.js":445,"./ar-tn":446,"./ar-tn.js":446,"./ar.js":440,"./az":447,"./az.js":447,"./be":448,"./be.js":448,"./bg":449,"./bg.js":449,"./bm":450,"./bm.js":450,"./bn":451,"./bn-bd":452,"./bn-bd.js":452,"./bn.js":451,"./bo":453,"./bo.js":453,"./br":454,"./br.js":454,"./bs":455,"./bs.js":455,"./ca":456,"./ca.js":456,"./cs":457,"./cs.js":457,"./cv":458,"./cv.js":458,"./cy":459,"./cy.js":459,"./da":460,"./da.js":460,"./de":461,"./de-at":462,"./de-at.js":462,"./de-ch":463,"./de-ch.js":463,"./de.js":461,"./dv":464,"./dv.js":464,"./el":465,"./el.js":465,"./en-au":466,"./en-au.js":466,"./en-ca":467,"./en-ca.js":467,"./en-gb":468,"./en-gb.js":468,"./en-ie":469,"./en-ie.js":469,"./en-il":470,"./en-il.js":470,"./en-in":471,"./en-in.js":471,"./en-nz":472,"./en-nz.js":472,"./en-sg":473,"./en-sg.js":473,"./eo":474,"./eo.js":474,"./es":475,"./es-do":476,"./es-do.js":476,"./es-mx":477,"./es-mx.js":477,"./es-us":478,"./es-us.js":478,"./es.js":475,"./et":479,"./et.js":479,"./eu":480,"./eu.js":480,"./fa":481,"./fa.js":481,"./fi":482,"./fi.js":482,"./fil":483,"./fil.js":483,"./fo":484,"./fo.js":484,"./fr":485,"./fr-ca":486,"./fr-ca.js":486,"./fr-ch":487,"./fr-ch.js":487,"./fr.js":485,"./fy":488,"./fy.js":488,"./ga":489,"./ga.js":489,"./gd":490,"./gd.js":490,"./gl":491,"./gl.js":491,"./gom-deva":492,"./gom-deva.js":492,"./gom-latn":493,"./gom-latn.js":493,"./gu":494,"./gu.js":494,"./he":495,"./he.js":495,"./hi":496,"./hi.js":496,"./hr":497,"./hr.js":497,"./hu":498,"./hu.js":498,"./hy-am":499,"./hy-am.js":499,"./id":500,"./id.js":500,"./is":501,"./is.js":501,"./it":502,"./it-ch":503,"./it-ch.js":503,"./it.js":502,"./ja":504,"./ja.js":504,"./jv":505,"./jv.js":505,"./ka":506,"./ka.js":506,"./kk":507,"./kk.js":507,"./km":508,"./km.js":508,"./kn":509,"./kn.js":509,"./ko":510,"./ko.js":510,"./ku":511,"./ku.js":511,"./ky":512,"./ky.js":512,"./lb":513,"./lb.js":513,"./lo":514,"./lo.js":514,"./lt":515,"./lt.js":515,"./lv":516,"./lv.js":516,"./me":517,"./me.js":517,"./mi":518,"./mi.js":518,"./mk":519,"./mk.js":519,"./ml":520,"./ml.js":520,"./mn":521,"./mn.js":521,"./mr":522,"./mr.js":522,"./ms":523,"./ms-my":524,"./ms-my.js":524,"./ms.js":523,"./mt":525,"./mt.js":525,"./my":526,"./my.js":526,"./nb":527,"./nb.js":527,"./ne":528,"./ne.js":528,"./nl":529,"./nl-be":530,"./nl-be.js":530,"./nl.js":529,"./nn":531,"./nn.js":531,"./oc-lnc":532,"./oc-lnc.js":532,"./pa-in":533,"./pa-in.js":533,"./pl":534,"./pl.js":534,"./pt":535,"./pt-br":536,"./pt-br.js":536,"./pt.js":535,"./ro":537,"./ro.js":537,"./ru":538,"./ru.js":538,"./sd":539,"./sd.js":539,"./se":540,"./se.js":540,"./si":541,"./si.js":541,"./sk":542,"./sk.js":542,"./sl":543,"./sl.js":543,"./sq":544,"./sq.js":544,"./sr":545,"./sr-cyrl":546,"./sr-cyrl.js":546,"./sr.js":545,"./ss":547,"./ss.js":547,"./sv":548,"./sv.js":548,"./sw":549,"./sw.js":549,"./ta":550,"./ta.js":550,"./te":551,"./te.js":551,"./tet":552,"./tet.js":552,"./tg":553,"./tg.js":553,"./th":554,"./th.js":554,"./tk":555,"./tk.js":555,"./tl-ph":556,"./tl-ph.js":556,"./tlh":557,"./tlh.js":557,"./tr":558,"./tr.js":558,"./tzl":559,"./tzl.js":559,"./tzm":560,"./tzm-latn":561,"./tzm-latn.js":561,"./tzm.js":560,"./ug-cn":562,"./ug-cn.js":562,"./uk":563,"./uk.js":563,"./ur":564,"./ur.js":564,"./uz":565,"./uz-latn":566,"./uz-latn.js":566,"./uz.js":565,"./vi":567,"./vi.js":567,"./x-pseudo":568,"./x-pseudo.js":568,"./yo":569,"./yo.js":569,"./zh-cn":570,"./zh-cn.js":570,"./zh-hk":571,"./zh-hk.js":571,"./zh-mo":572,"./zh-mo.js":572,"./zh-tw":573,"./zh-tw.js":573};function o(t){var e=l(t);return r(e)}function l(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=l,t.exports=o,o.id=576},585:function(t,e,r){"use strict";r(23),r(54);var o=r(117),l={name:"progress-track-list",props:{itemLimit:{type:Number,default:4}},components:{BaseProgress:o.a},data:function(){return{items:[{id:1,img:"img/theme/bootstrap.jpg",title:"Argon Design System",progress:60,progressType:"orange"},{id:2,img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",progress:100,progressType:"green"},{id:3,img:"img/theme/sketch.jpg",title:"Black Dashboard",progress:72,progressType:"red"},{id:4,img:"img/theme/react.jpg",title:"React Material Dashboard",progress:90,progressType:"teal"},{id:5,img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",progress:100,progressType:"success"}]}}},n=r(7),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-group list-group-flush list my--3"},t._l(t.items.slice(0,t.itemLimit),(function(r){return e("li",{key:r.id,staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("a",{staticClass:"avatar rounded-circle",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:r.img}})])]),t._v(" "),e("div",{staticClass:"col"},[e("h5",[t._v(t._s(r.title))]),t._v(" "),e("base-progress",{staticClass:"mb-0",attrs:{type:r.progressType,value:r.progress}})],1)])])})),0)}),[],!1,null,null,null);e.a=component.exports},586:function(t,e,r){"use strict";var o=r(9),l=(r(11),{name:"members-card",props:{showSearch:{type:Boolean,default:!0}},data:function(){return{membersSearch:"",members:[{name:"John Michael",status:"Online",statusType:"success",image:"img/theme/team-1.jpg"},{name:"Alex Smith",status:"In a meeting",statusType:"danger",image:"img/theme/team-2.jpg"},{name:"Samantha Ivy",status:"Offline",statusType:"danger",image:"img/theme/team-3.jpg"},{name:"John Michael",status:"Online",statusType:"success",image:"img/theme/team-4.jpg"},{name:"John Snow",status:"Online",statusType:"success",image:"img/theme/team-5.jpg"}]}}}),n=r(7),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),t.showSearch?e("div",{staticClass:"card-header py-0"},[e("form",[e("div",{staticClass:"form-group mb-0"},[e("base-input",{staticClass:"input-group-lg input-group-flush mb-0",attrs:{"prepend-icon":"fas fa-search",placeholder:"Search",type:"search"},model:{value:t.membersSearch,callback:function(e){t.membersSearch=e},expression:"membersSearch"}})],1)])]):t._e(),t._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush list my--3"},t._l(t.members,(function(r){return e("li",{key:r.image,staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("a",{staticClass:"avatar rounded-circle",attrs:{href:"#"}},[e("img",{attrs:Object(o.a)({alt:"Image placeholder",src:r.image},"alt",r.name)})])]),t._v(" "),e("div",{staticClass:"col ml--2"},[e("h4",{staticClass:"mb-0"},[e("a",{attrs:{href:"#!"}},[t._v(t._s(r.name))])]),t._v(" "),e("span",{class:"text-".concat(r.statusType)},[t._v("● ")]),t._v(" "),e("small",[t._v(t._s(r.status))])]),t._v(" "),t._m(1,!0)])])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"h3 mb-0"},[this._v("Team members")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-auto"},[t("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"}},[this._v("Add")])])}],!1,null,null,null);e.a=component.exports},587:function(t,e,r){"use strict";var o=r(9),l={data:function(){return{items:[{title:"Call with Dave",description:"10:30 AM",done:!0,checkType:"success"},{title:"Lunch meeting",description:"10:30 AM",done:!1,checkType:"warning"},{title:"Argon Dashboard Launch",description:"10:30 AM",done:!1,checkType:"info"},{title:"Winter Hackaton",description:"10:30 AM",done:!0,checkType:"danger"},{title:"Dinner with Family",description:"10:30 AM",done:!0,checkType:"success"}]}}},n=r(7),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("card",{attrs:{"body-classes":"p-0"}},[e("h5",{staticClass:"h3 mb-0",attrs:{slot:"header"},slot:"header"},[t._v("To do list")]),t._v(" "),e("ul",{staticClass:"list-group list-group-flush",attrs:{"data-toggle":"checklist"}},t._l(t.items,(function(r){return e("li",{key:r.title,staticClass:"checklist-entry list-group-item flex-column align-items-start py-4 px-4"},[e("div",{staticClass:"checklist-item",class:Object(o.a)({"checklist-item-checked":r.done},"checklist-item-".concat(r.checkType),r.checkType)},[e("div",{staticClass:"checklist-info"},[e("h5",{staticClass:"checklist-title mb-0"},[t._v(t._s(r.title))]),t._v(" "),e("small",[t._v(t._s(r.description))])]),t._v(" "),e("div",[e("base-checkbox",{attrs:{type:r.checkType},model:{value:r.done,callback:function(e){t.$set(r,"done",e)},expression:"item.done"}})],1)])])})),0)])}),[],!1,null,null,null);e.a=component.exports},588:function(t,e,r){"use strict";r(23);var o,l=r(9),n=(r(427),r(86),r(428)),c=r.n(n),d=(r(429),r(430)),m=r.n(d),v=(r(431),r(432)),h=r.n(v),f=(r(417),r(418)),C=r.n(f),_=(r(419),r(420)),j=r.n(_),y=(r(11),r(54),{name:"light-table",components:(o={},Object(l.a)(o,j.a.name,j.a),Object(l.a)(o,C.a.name,C.a),Object(l.a)(o,h.a.name,h.a),Object(l.a)(o,m.a.name,m.a),Object(l.a)(o,c.a.name,c.a),o),props:{itemLimit:{type:Number,default:9}},data:function(){return{projects:[{img:"img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"img/theme/react.jpg",title:"React Material Dashboard",budget:"$4400 USD",status:"on schedule",statusType:"info",completion:90},{img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100}],currentPage:1}}}),w=r(7),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light",data:t.projects.slice(0,t.itemLimit)}},[e("el-table-column",{attrs:{label:"Project","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.row;return[e("div",{staticClass:"media align-items-center"},[e("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:o.img}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(o.title))])])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Budget",prop:"budget","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Status","min-width":"170px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.row;return[e("badge",{staticClass:"badge-dot mr-4",attrs:{type:""}},[e("i",{class:"bg-".concat(o.statusType)}),t._v(" "),e("span",{staticClass:"status"},[t._v(t._s(o.status))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Users","min-width":"190px"}},[e("div",{staticClass:"avatar-group"},[e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Ryan Tompson"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-1.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Romina Hadid"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-2.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Alexander Smith"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-3.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Jessica Doe"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-4.jpg"}})])])]),t._v(" "),e("el-table-column",{attrs:{label:"Completion",prop:"completion","min-width":"240px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.row;return[e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"completion mr-2"},[t._v(t._s(o.completion)+"%")]),t._v(" "),e("div",[e("base-progress",{attrs:{type:o.statusType,value:o.completion}})],1)])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(r){r.row;return[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[e("span",{staticClass:"btn btn-sm btn-icon-only text-light",attrs:{"aria-label":"Dropdown menu"}},[e("i",{staticClass:"fas fa-ellipsis-v mt-2"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"dropdown-menu dropdown-menu-arrow show",attrs:{slot:"dropdown",role:"list"},slot:"dropdown"},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"border-0 card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Light table")])])}],!1,null,null,null);e.a=component.exports},589:function(t,e,r){"use strict";var o={name:"map-card",data:function(){return{mapData:{AUS:760,BRA:900,CAN:120,DEU:1300,FRA:540,GBR:690,GEO:200,IND:200,ROU:600,RUS:757,USA:1800},points:[{name:"Brazil",centered:"BRA"},{name:"France",centered:"FRA"},{name:"Italy",centered:"ITA"},{name:"Oman",centered:"OMN"},{name:"Indonesia",centered:"IDN"},{name:"Romania",centered:"ROU"}]}}},l=r(7),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card widget-calendar"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("client-only",[e("world-map",{staticClass:"vector-map vector-map-sm",attrs:{"map-data":t.mapData,points:t.points}})],1),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-8"},[e("h5",{staticClass:"h3 mb-0"},[t._v("Real time")])]),t._v(" "),e("div",{staticClass:"col-4 text-right"},[e("a",{staticClass:"btn btn-sm btn-neutral",attrs:{href:"#!"}},[t._v("Action")])])])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-group list-group-flush list my--3"},[e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:"img/icons/flags/US.png",alt:"Country flag"}})]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Country:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("United States")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Visits:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("2500")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Bounce:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("30%")])])])]),t._v(" "),e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:"img/icons/flags/DE.png",alt:"Country flag"}})]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Country:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("Germany")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Visits:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("2500")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Bounce:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("30%")])])])]),t._v(" "),e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:"img/icons/flags/GB.png",alt:"Country flag"}})]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Country:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("Great Britain")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Visits:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("2500")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Bounce:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("30%")])])])])])}],!1,null,null,null);e.a=component.exports},794:function(t,e,r){"use strict";r.r(e);var o=r(436),l=r(574),n=r(575),c=r(129),d=r(117),m=r(115),v=r(116),h=r(585),f=r(586),C=r(587),_=r(588),j=r(589),y={layout:"DashboardLayout",components:{LineChart:l.a,BarChart:n.a,BaseHeader:c.a,BaseProgress:d.a,RouteBreadCrumb:m.a,StatsCard:v.a,TaskList:C.a,VectorMapCard:j.a,LightTable:_.a,ProgressTrackList:h.a,MembersCard:f.a},data:function(){return{bigLineChart:{chartData:{datasets:[{label:"Performance",data:[0,20,10,30,15,40,20,60,60]}],labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},extraOptions:o.b},redBarChart:{chartData:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29]}]}}}}},w=r(7),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6",attrs:{type:""}},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 d-inline-block mb-0"},[t._v("Alternative")]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb breadcrumb-links"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"#"}},[t._v("Dashboards")])]),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Alternative")])])])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-md-6"},[e("div",{staticClass:"card bg-gradient-primary border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Tasks completed")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("8/24")]),t._v(" "),e("base-progress",{staticClass:"progress-xs mt-3 mb-0",attrs:{type:"success",value:30}})],1),t._v(" "),e("div",{staticClass:"col-auto"},[e("base-dropdown",{attrs:{"title-classes":"btn btn-sm btn-neutral mr-0","menu-on-right":"","has-toggle":!1}},[e("template",{slot:"title"},[e("i",{staticClass:"fas fa-ellipsis-h"})]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],2)],1)]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("a",{staticClass:"text-nowrap text-white font-weight-600",attrs:{href:"#!"}},[t._v("See details")])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("div",{staticClass:"card bg-gradient-info border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Contacts")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("123/267")]),t._v(" "),e("base-progress",{staticClass:"progress-xs mt-3 mb-0",attrs:{type:"success",value:0}})],1),t._v(" "),e("div",{staticClass:"col-auto"},[e("base-dropdown",{attrs:{"title-classes":"btn btn-sm btn-neutral mr-0","menu-on-right":"","has-toggle":!1}},[e("template",{slot:"title"},[e("i",{staticClass:"fas fa-ellipsis-h"})]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],2)],1)]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("a",{staticClass:"text-nowrap text-white font-weight-600",attrs:{href:"#!"}},[t._v("See details")])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("div",{staticClass:"card bg-gradient-danger border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Items sold")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("200/300")]),t._v(" "),e("base-progress",{staticClass:"progress-xs mt-3 mb-0",attrs:{type:"success",value:80}})],1),t._v(" "),e("div",{staticClass:"col-auto"},[e("base-dropdown",{attrs:{"title-classes":"btn btn-sm btn-neutral mr-0","menu-on-right":"","has-toggle":!1}},[e("template",{slot:"title"},[e("i",{staticClass:"fas fa-ellipsis-h"})]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],2)],1)]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("a",{staticClass:"text-nowrap text-white font-weight-600",attrs:{href:"#!"}},[t._v("See details")])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("div",{staticClass:"card bg-gradient-default border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Notifications")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("50/62")]),t._v(" "),e("base-progress",{staticClass:"progress-xs mt-3 mb-0",attrs:{type:"success",value:90}})],1),t._v(" "),e("div",{staticClass:"col-auto"},[e("base-dropdown",{attrs:{"title-classes":"btn btn-sm btn-neutral mr-0","menu-on-right":"","has-toggle":!1}},[e("template",{slot:"title"},[e("i",{staticClass:"fas fa-ellipsis-h"})]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],2)],1)]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("a",{staticClass:"text-nowrap text-white font-weight-600",attrs:{href:"#!"}},[t._v("See details")])])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"card-deck flex-column flex-xl-row"},[e("card",[e("div",{staticClass:"row align-items-center",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"col"},[e("h6",{staticClass:"text-uppercase text-muted ls-1 mb-1"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Sales value")])])]),t._v(" "),e("line-chart",{ref:"bigChart",attrs:{height:350,"chart-data":t.bigLineChart.chartData,"extra-options":t.bigLineChart.extraOptions}})],1),t._v(" "),e("card",{attrs:{"header-classes":"bg-transparent"}},[e("div",{staticClass:"row align-items-center",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"col"},[e("h6",{staticClass:"text-uppercase text-muted ls-1 mb-1"},[t._v("Performance")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total orders")])])]),t._v(" "),e("bar-chart",{ref:"barChart",attrs:{height:350,"chart-data":t.redBarChart.chartData}})],1),t._v(" "),e("card",{scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-8"},[e("h6",{staticClass:"surtitle"},[t._v("5/23 projects")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Progress track")])]),t._v(" "),e("div",{staticClass:"col-4 text-right"},[e("a",{staticClass:"btn btn-sm btn-neutral",attrs:{href:"#!"}},[t._v("Action")])])])]},proxy:!0}])},[t._v(" "),e("progress-track-list",{attrs:{"item-limit":5}})],1)],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-8"},[e("light-table",{attrs:{"item-limit":5}})],1),t._v(" "),e("div",{staticClass:"col-xl-4"},[e("vector-map-card")],1)]),t._v(" "),e("div",{staticClass:"card-deck flex-column flex-xl-row"},[e("members-card",{attrs:{"show-search":!1}}),t._v(" "),e("task-list"),t._v(" "),e("card",[e("h5",{staticClass:"h3 mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Progress track")]),t._v(" "),e("progress-track-list",{attrs:{"item-limit":5}})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);