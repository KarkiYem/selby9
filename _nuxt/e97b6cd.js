(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{581:function(t,e,c){t.exports=c.p+"img/img-1-1000x900.1a48b1e.jpg"},582:function(t,e,c){t.exports=c.p+"img/team-1.1d5a524.jpg"},583:function(t,e,c){t.exports=c.p+"img/team-2.6785f47.jpg"},586:function(t,e,c){"use strict";var l=c(9),r=(c(11),{name:"members-card",props:{showSearch:{type:Boolean,default:!0}},data:function(){return{membersSearch:"",members:[{name:"John Michael",status:"Online",statusType:"success",image:"img/theme/team-1.jpg"},{name:"Alex Smith",status:"In a meeting",statusType:"danger",image:"img/theme/team-2.jpg"},{name:"Samantha Ivy",status:"Offline",statusType:"danger",image:"img/theme/team-3.jpg"},{name:"John Michael",status:"Online",statusType:"success",image:"img/theme/team-4.jpg"},{name:"John Snow",status:"Online",statusType:"success",image:"img/theme/team-5.jpg"}]}}}),n=c(7),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),t.showSearch?e("div",{staticClass:"card-header py-0"},[e("form",[e("div",{staticClass:"form-group mb-0"},[e("base-input",{staticClass:"input-group-lg input-group-flush mb-0",attrs:{"prepend-icon":"fas fa-search",placeholder:"Search",type:"search"},model:{value:t.membersSearch,callback:function(e){t.membersSearch=e},expression:"membersSearch"}})],1)])]):t._e(),t._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush list my--3"},t._l(t.members,(function(c){return e("li",{key:c.image,staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("a",{staticClass:"avatar rounded-circle",attrs:{href:"#"}},[e("img",{attrs:Object(l.a)({alt:"Image placeholder",src:c.image},"alt",c.name)})])]),t._v(" "),e("div",{staticClass:"col ml--2"},[e("h4",{staticClass:"mb-0"},[e("a",{attrs:{href:"#!"}},[t._v(t._s(c.name))])]),t._v(" "),e("span",{class:"text-".concat(c.statusType)},[t._v("● ")]),t._v(" "),e("small",[t._v(t._s(c.status))])]),t._v(" "),t._m(1,!0)])])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"h3 mb-0"},[this._v("Team members")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-auto"},[t("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"}},[this._v("Add")])])}],!1,null,null,null);e.a=component.exports},587:function(t,e,c){"use strict";var l=c(9),r={data:function(){return{items:[{title:"Call with Dave",description:"10:30 AM",done:!0,checkType:"success"},{title:"Lunch meeting",description:"10:30 AM",done:!1,checkType:"warning"},{title:"Argon Dashboard Launch",description:"10:30 AM",done:!1,checkType:"info"},{title:"Winter Hackaton",description:"10:30 AM",done:!0,checkType:"danger"},{title:"Dinner with Family",description:"10:30 AM",done:!0,checkType:"success"}]}}},n=c(7),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("card",{attrs:{"body-classes":"p-0"}},[e("h5",{staticClass:"h3 mb-0",attrs:{slot:"header"},slot:"header"},[t._v("To do list")]),t._v(" "),e("ul",{staticClass:"list-group list-group-flush",attrs:{"data-toggle":"checklist"}},t._l(t.items,(function(c){return e("li",{key:c.title,staticClass:"checklist-entry list-group-item flex-column align-items-start py-4 px-4"},[e("div",{staticClass:"checklist-item",class:Object(l.a)({"checklist-item-checked":c.done},"checklist-item-".concat(c.checkType),c.checkType)},[e("div",{staticClass:"checklist-info"},[e("h5",{staticClass:"checklist-title mb-0"},[t._v(t._s(c.title))]),t._v(" "),e("small",[t._v(t._s(c.description))])]),t._v(" "),e("div",[e("base-checkbox",{attrs:{type:c.checkType},model:{value:c.done,callback:function(e){t.$set(c,"done",e)},expression:"item.done"}})],1)])])})),0)])}),[],!1,null,null,null);e.a=component.exports},589:function(t,e,c){"use strict";var l={name:"map-card",data:function(){return{mapData:{AUS:760,BRA:900,CAN:120,DEU:1300,FRA:540,GBR:690,GEO:200,IND:200,ROU:600,RUS:757,USA:1800},points:[{name:"Brazil",centered:"BRA"},{name:"France",centered:"FRA"},{name:"Italy",centered:"ITA"},{name:"Oman",centered:"OMN"},{name:"Indonesia",centered:"IDN"},{name:"Romania",centered:"ROU"}]}}},r=c(7),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card widget-calendar"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("client-only",[e("world-map",{staticClass:"vector-map vector-map-sm",attrs:{"map-data":t.mapData,points:t.points}})],1),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-8"},[e("h5",{staticClass:"h3 mb-0"},[t._v("Real time")])]),t._v(" "),e("div",{staticClass:"col-4 text-right"},[e("a",{staticClass:"btn btn-sm btn-neutral",attrs:{href:"#!"}},[t._v("Action")])])])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-group list-group-flush list my--3"},[e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:"img/icons/flags/US.png",alt:"Country flag"}})]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Country:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("United States")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Visits:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("2500")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Bounce:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("30%")])])])]),t._v(" "),e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:"img/icons/flags/DE.png",alt:"Country flag"}})]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Country:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("Germany")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Visits:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("2500")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Bounce:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("30%")])])])]),t._v(" "),e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:"img/icons/flags/GB.png",alt:"Country flag"}})]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Country:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("Great Britain")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Visits:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("2500")])]),t._v(" "),e("div",{staticClass:"col"},[e("small",[t._v("Bounce:")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("30%")])])])])])}],!1,null,null,null);e.a=component.exports},590:function(t,e,c){"use strict";var l=c(9),r=(c(11),{name:"progress-track-list",data:function(){return{list:[{name:"Argon Design System",image:"img/theme/bootstrap.jpg",color:"orange",progress:60},{name:"Angular Now UI Kit PRO",image:"img/theme/angular.jpg",color:"green",progress:100},{name:"Black Dashboard",image:"img/theme/sketch.jpg",color:"red",progress:72},{name:"React Material Dashboard",image:"img/theme/react.jpg",color:"teal",progress:90},{name:"Vue Paper UI Kit PRO",image:"img/theme/vue.jpg",color:"green",progress:100}]}}}),n=c(7),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush list my--3"},t._l(t.list,(function(c,r){return e("li",{key:r,staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("a",{staticClass:"avatar rounded-circle",attrs:{href:"#"}},[e("img",{attrs:Object(l.a)({alt:"Image placeholder",src:c.image},"alt",c.name)})])]),t._v(" "),e("div",{staticClass:"col"},[e("h5",[t._v(t._s(c.name))]),t._v(" "),e("base-progress",{staticClass:"progress-xs mb-0",attrs:{type:c.color,value:c.progress}})],1)])])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"h3 mb-0"},[this._v("Progress track")])])}],!1,null,null,null);e.a=component.exports},786:function(t,e,c){"use strict";c.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:c(581),alt:"Image placeholder"}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"h2 card-title mb-0"},[t._v("Get started with Argon")]),t._v(" "),e("small",{staticClass:"text-muted"},[t._v("by John Snow on Oct 29th at 10:23 AM")]),t._v(" "),e("p",{staticClass:"card-text mt-4"},[t._v("Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.")]),t._v(" "),e("a",{staticClass:"btn btn-link px-0",attrs:{href:"#!"}},[t._v("View article")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h5",{staticClass:"h3 mb-0"},[t._v("Latest messages")])]),t._v(" "),e("div",{staticClass:"card-body p-0"},[e("div",{staticClass:"list-group list-group-flush"},[e("a",{staticClass:"list-group-item list-group-item-action flex-column align-items-start py-4 px-4",attrs:{href:"#"}},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("div",[e("div",{staticClass:"d-flex w-100 align-items-center"},[e("img",{staticClass:"avatar avatar-xs mr-2",attrs:{src:c(582),alt:"Image placeholder"}}),t._v(" "),e("h5",{staticClass:"mb-1"},[t._v("Tim")])])]),t._v(" "),e("small",[t._v("2 hrs ago")])]),t._v(" "),e("h4",{staticClass:"mt-3 mb-1"},[t._v(" New order for Argon Dashboard")]),t._v(" "),e("p",{staticClass:"text-sm mb-0"},[t._v("Doasdnec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")])]),t._v(" "),e("a",{staticClass:"list-group-item list-group-item-action flex-column align-items-start py-4 px-4",attrs:{href:"#"}},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("div",[e("div",{staticClass:"d-flex w-100 align-items-center"},[e("img",{staticClass:"avatar avatar-xs mr-2",attrs:{src:c(583),alt:"Image placeholder"}}),t._v(" "),e("h5",{staticClass:"mb-1"},[t._v("Mike")])])]),t._v(" "),e("small",[t._v("1 day ago")])]),t._v(" "),e("h4",{staticClass:"mt-3 mb-1"},[e("span",{staticClass:"text-info"},[t._v("●")]),t._v(" Your theme has been updated")]),t._v(" "),e("p",{staticClass:"text-sm mb-0"},[t._v("Doasdnec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")])])])])])}],r=c(116),n=c(115),o={name:"timeline-card",data:function(){return{events:[{title:"New message",description:"Let's meet at Starbucks at 11:30. Wdyt?",icon:"ni ni-bell-55",type:"success",time:"2 hrs ago"},{title:"Product issue",description:"A new issue has been reported for Argon.",icon:"ni ni-html5",type:"danger",time:"3 hrs ago"},{title:"New likes",description:"Your posts have been liked a lot.",icon:"ni ni-like-2",type:"info",time:"5 hrs ago"}]}}},d=c(7),m=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"timeline timeline-one-side",attrs:{"data-timeline-content":"axis","data-timeline-axis-style":"dashed"}},t._l(t.events,(function(c){return e("div",{key:c.title,staticClass:"timeline-block"},[e("span",{staticClass:"timeline-step",class:"badge-".concat(c.type)},[e("i",{class:c.icon})]),t._v(" "),e("div",{staticClass:"timeline-content"},[e("div",{staticClass:"d-flex justify-content-between pt-1"},[e("div",[e("span",{staticClass:"text-muted text-sm font-weight-bold"},[t._v(t._s(c.title))])]),t._v(" "),e("div",{staticClass:"text-right"},[e("small",{staticClass:"text-muted"},[e("i",{staticClass:"fas fa-clock mr-1"}),t._v(t._s(c.time))])])]),t._v(" "),e("h6",{staticClass:"text-sm mt-1 mb-0"},[t._v(t._s(c.description))])])])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"h3 mb-0"},[this._v("Latest notifications")])])}],!1,null,null,null).exports,v=c(586),_=(c(11),{name:"master-card",data:function(){return{creditCard:{default:!0,name:"",cardNumber:"",expire:"",ccv:""}}}}),C=Object(d.a)(_,(function(){var t=this,e=t._self._c;return e("card",{attrs:{type:"gradient-primary"}},[e("div",{staticClass:"row justify-content-between align-items-center"},[e("div",{staticClass:"col"},[e("img",{attrs:{src:"img/icons/cards/mastercard.png",alt:"Image placeholder"}})]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"d-flex align-items-center"},[e("small",{staticClass:"text-white font-weight-bold mr-3"},[t._v("Make default")]),t._v(" "),e("div",[e("base-switch",{attrs:{type:"white"},model:{value:t.creditCard.default,callback:function(e){t.$set(t.creditCard,"default",e)},expression:"creditCard.default"}})],1)])])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("form",{staticClass:"form-primary",attrs:{role:"form"}},[e("base-input",{staticClass:"input-group-alternative mb-3",attrs:{"prepend-icon":"ni ni-single-02",placeholder:"Name on card"},model:{value:t.creditCard.name,callback:function(e){t.$set(t.creditCard,"name",e)},expression:"creditCard.name"}}),t._v(" "),e("base-input",{staticClass:"input-group-alternative mb-3",attrs:{"prepend-icon":"ni ni-credit-card",placeholder:"Card number"},model:{value:t.creditCard.cardNumber,callback:function(e){t.$set(t.creditCard,"cardNumber",e)},expression:"creditCard.cardNumber"}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("base-input",{staticClass:"input-group-alternative mb-3",attrs:{"prepend-icon":"ni ni-calendar-grid-58",placeholder:"MM/YY"},model:{value:t.creditCard.expire,callback:function(e){t.$set(t.creditCard,"expire",e)},expression:"creditCard.expire"}})],1),t._v(" "),e("div",{staticClass:"col-6"},[e("base-input",{staticClass:"input-group-alternative mb-3",attrs:{"prepend-icon":"ni ni-lock-circle-open",placeholder:"CCV"},model:{value:t.creditCard.ccv,callback:function(e){t.$set(t.creditCard,"ccv",e)},expression:"creditCard.ccv"}})],1)]),t._v(" "),e("base-button",{attrs:{type:"info",block:""}},[t._v("Save new card")])],1)])])}),[],!1,null,null,null).exports,h=c(590),f={name:"paypal-card",data:function(){return{card:{status:"Active",statusType:"success",title:"john.snow@gmail.com",name:"John Snow"}}}},x=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row justify-content-between align-items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"col-auto"},[e("span",{staticClass:"badge badge-lg",class:"badge-".concat(t.card.statusType)},[t._v("\n                  "+t._s(t.card.status)+"\n                ")])])]),t._v(" "),e("div",{staticClass:"my-4"},[e("span",{staticClass:"h6 surtitle text-muted"},[t._v("\n              PayPal E-mail\n            ")]),t._v(" "),e("div",{staticClass:"h1"},[t._v(t._s(t.card.title))])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("span",{staticClass:"h6 surtitle text-muted"},[t._v("Name")]),t._v(" "),e("span",{staticClass:"d-block h3"},[t._v(t._s(t.card.name))])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col"},[t("img",{attrs:{src:"img/icons/cards/paypal.png",alt:"Image placeholder"}})])}],!1,null,null,null).exports,w=c(589),y=(c(172),{name:"visa-card",data:function(){return{creditCard:{number:"4358 7421 9256 6682",status:"Active",statusType:"success",name:"John Snow",expire:"11/23"}}}}),k=Object(d.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card bg-gradient-primary"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row justify-content-between align-items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"col-auto"},[e("span",{staticClass:"badge badge-lg",class:"badge-".concat(t.creditCard.statusType)},[t._v(t._s(t.creditCard.status))])])]),t._v(" "),e("div",{staticClass:"my-4"},[e("span",{staticClass:"h6 surtitle text-light"},[t._v("\n              Card number\n            ")]),t._v(" "),e("div",{staticClass:"card-serial-number h1 text-white"},t._l(t.creditCard.number.split(" "),(function(c,l){return e("div",{key:l},[t._v("\n                  "+t._s(c)+"\n                ")])})),0)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("span",{staticClass:"h6 surtitle text-light"},[t._v("Name")]),t._v(" "),e("span",{staticClass:"d-block h3 text-white"},[t._v(t._s(t.creditCard.name))])]),t._v(" "),e("div",{staticClass:"col"},[e("span",{staticClass:"h6 surtitle text-light"},[t._v("Expiry date")]),t._v(" "),e("span",{staticClass:"d-block h3 text-white"},[t._v(t._s(t.creditCard.expire))])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col"},[t("img",{attrs:{src:"img/icons/cards/visa.png",alt:"Image placeholder"}})])}],!1,null,null,null).exports,j={components:{StatsCard:r.a}},S=Object(d.a)(j,(function(){var t=this,e=t._self._c;return e("div",[e("stats-card",{staticClass:"bg-gradient-default"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Total traffic")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("350,897")])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"icon icon-shape bg-white text-dark rounded-circle shadow"},[e("i",{staticClass:"ni ni-active-40"})])])]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("span",{staticClass:"text-white mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap text-light"},[t._v("Since last month")])])]),t._v(" "),e("card",{staticClass:"bg-gradient-primary"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("New users")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("2,356")])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"icon icon-shape bg-white text-dark rounded-circle shadow"},[e("i",{staticClass:"ni ni-atom"})])])]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("span",{staticClass:"text-white mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap text-light"},[t._v("Since last month")])])]),t._v(" "),e("card",{staticClass:"bg-gradient-danger"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Performance")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("49,65%")])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"icon icon-shape bg-white text-dark rounded-circle shadow"},[e("i",{staticClass:"ni ni-spaceship"})])])]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("span",{staticClass:"text-white mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap text-light"},[t._v("Since last month")])])])],1)}),[],!1,null,null,null).exports,T=c(587),A={layout:"DashboardLayout",components:{VisaCard:k,VectorMapCard:w.a,PaypalCard:x,StatsCards:S,ProgressTrackList:h.a,CreditCard:C,MembersCard:v.a,StatsCard:r.a,RouteBreadCrumb:n.a,TimelineCard:m,TaskList:T.a}},O=Object(d.a)(A,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Widgets")]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-bread-crumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-red","sub-title":"350,897",icon:"ni ni-active-40"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-orange","sub-title":"2,356",icon:"ni ni-chart-pie-35"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 12.18%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Sales",type:"gradient-green","sub-title":"924",icon:"ni ni-money-coins"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-danger mr-2"},[e("i",{staticClass:"fa fa-arrow-down"}),t._v(" 5.72%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Performance",type:"gradient-info","sub-title":"49,65%",icon:"ni ni-chart-bar-32"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 54.8%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[t._m(0),t._v(" "),e("members-card"),t._v(" "),t._m(1),t._v(" "),e("credit-card")],1),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("client-only",[e("calendar-widget")],1),t._v(" "),e("timeline-card"),t._v(" "),e("progress-track-list"),t._v(" "),e("paypal-card")],1),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("vector-map-card"),t._v(" "),e("visa-card"),t._v(" "),e("stats-cards"),t._v(" "),e("task-list")],1)])])],1)}),l,!1,null,null,null);e.default=O.exports}}]);