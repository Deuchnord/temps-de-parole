(function(t){function e(e){for(var i,c,s=e[0],o=e[1],p=e[2],u=0,d=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,p||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},r=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/temps-de-parole/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var l=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main",{staticClass:"participants",class:{"is-empty":t.no_participants}},[t._l(t.participants,(function(t,e){return a("ParticipantTile",{key:e,attrs:{uuid:t.uuid}})})),t.no_participants?a("div",{staticClass:"no-participants"},[t._m(0),a("p",[t._v(" Ensuite, tapotez la tuile de quelqu'un lors qu'il ou elle commence à parler, et tapez à nouveau s'iel cesse. ")])]):t._e()],2),a("footer",[a("div",{staticClass:"actions"},[a("button",{on:{click:t.add}},[a("svg",{staticClass:"svg-inline--fa fa-plus-square fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"plus-square",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{fill:"currentColor",d:"M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}})]),a("span",[t._v("Participant·e")])]),a("button",{on:{click:t.reset_times_confirm}},[a("svg",{staticClass:"svg-inline--fa fa-history fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"history",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"}})]),a("span",[t._v("Compteurs à zéro")])]),a("button",{on:{click:t.reset_confirm}},[a("svg",{staticClass:"svg-inline--fa fa-user-slash fa-w-20",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"user-slash",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"}},[a("path",{attrs:{fill:"currentColor",d:"M633.8 458.1L362.3 248.3C412.1 230.7 448 183.8 448 128 448 57.3 390.7 0 320 0c-67.1 0-121.5 51.8-126.9 117.4L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3zM96 422.4V464c0 26.5 21.5 48 48 48h350.2L207.4 290.3C144.2 301.3 96 356 96 422.4z"}})]),a("span",[t._v("Réinitialiser")])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Commencez par ajouter un ou une participant(e) en cliquant sur le bouton en bas à gauche.")])])}],c=a("5530"),s=(a("b64b"),a("2f62")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"participant-tile",class:{"is-talking":t.participant.talking},on:{click:function(e){return t.toggle_talk(t.uuid)}}},[a("h1",[t._v(t._s(t.participant.name))]),a("p",{staticClass:"timer",class:{"has-hours":t.has_hours}},[t._v(t._s(t.duration))]),a("p",{staticClass:"percentage"},[t._v(t._s(null!==t.percentage?t.percentage:"— ")+"%")])])},p=[],l=(a("99af"),a("4d90"),a("d3b7"),a("25f0"),a("d81d"),{props:{uuid:String},computed:Object(c["a"])(Object(c["a"])({},Object(s["c"])(["participants"])),{},{participant:function(){return this.participants[this.uuid]},duration:function(){var t=new Date(1e3*this.participant.elapsed),e=t.getUTCHours(),a=t.getUTCMinutes(),i=t.getUTCSeconds(),n="".concat(a.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"));return e>0?"".concat(e.toString().padStart(2,"0"),":").concat(n):n},has_hours:function(){return this.participant.elapsed>=3600},percentage:function(){var t=this,e=Object.keys(this.participants).map((function(e){return t.participants[e].elapsed})).reduce((function(t,e){return t+e}),0);return 0===e?null:Math.ceil(this.participant.elapsed/e*100)}}),methods:Object(s["b"])(["toggle_talk"])}),u=l,d=(a("5f01"),a("2877")),f=Object(d["a"])(u,o,p,!1,null,"ec4a9ab0",null),v=f.exports,h={name:"App",components:{ParticipantTile:v},data:function(){return{updateTask:null,lastTick:null}},computed:Object(c["a"])(Object(c["a"])({},Object(s["c"])(["participants"])),{},{no_participants:function(){return 0===Object.keys(this.participants).length}}),methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["add_participant","add_participants","reset","reset_times","tick"])),{},{add:function(t){var e=prompt("Comment doit-on l'appeler ?");e&&this.add_participant(e),t.target.blur()},reset_confirm:function(t){confirm("Voulez-vous vraiment supprimer l'intégralité des participant(e)s ?")&&this.reset(),t.target.blur()},reset_times_confirm:function(t){confirm("Voulez-vous vraiment réinitialiser le temps de parole de l'intégralité des participant(e)s ?")&&this.reset_times(),t.target.blur()},setup_update_task:function(){var t=this;this.updateTask=setInterval((function(){if(null!==t.lastTick){var e=Date.now();t.tick((e-t.lastTick)/1e3),t.lastTick=e}else t.tick(.5),t.lastTick=Date.now()}),500)}}),mounted:function(){var t=localStorage.getItem("participants");if(t){try{this.add_participants(JSON.parse(t))}catch(e){console.error("Unable to load saved participants",e)}this.setup_update_task()}},beforeUpdate:function(){null===this.updateTask&&this.setup_update_task()},beforeDestroy:function(){clearInterval(this.updateTask)}},m=h,g=(a("cf25"),Object(d["a"])(m,n,r,!1,null,null,null)),_=g.exports,b=a("9483");Object(b["a"])("".concat("/temps-de-parole/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var k=a("ec26");i["a"].use(s["a"]);var w=new s["a"].Store({state:{participants:{}},mutations:{add_participants:function(t,e){t.participants=e},add_participant:function(t,e){var a=Object(k["a"])();i["a"].set(t.participants,a,{uuid:a,name:e,elapsed:0,talking:!1})},remove_participant:function(t,e){i["a"].set(t.participants,e,void 0)},reset:function(t){t.participants={}},reset_time:function(t,e){i["a"].set(t.participants[e],"elapsed",0)},talk:function(t,e){var a=e.uuid,n=e.talking;i["a"].set(t.participants[a],"talking",n)},tick:function(t,e){var a=e.uuid,n=e.timeSinceLastTick;i["a"].set(t.participants[a],"elapsed",t.participants[a].elapsed+n)}},actions:{save:function(t){localStorage.setItem("participants",JSON.stringify(t.state.participants))},reset:function(t){t.commit("reset"),localStorage.removeItem("participants")},reset_times:function(t){t.dispatch("stop_talking");for(var e=0,a=Object.keys(t.state.participants);e<a.length;e++){var i=a[e];t.commit("reset_time",i)}t.dispatch("save")},add_participants:function(t,e){t.commit("add_participants",e)},add_participant:function(t,e){t.commit("add_participant",e||"Sans nom"),t.dispatch("save")},remove_participant:function(t){t.commit("remove_participant"),t.dispatch("save")},toggle_talk:function(t,e){var a=t.state.participants[e].talking;t.dispatch("stop_talking"),a||t.commit("talk",{uuid:e,talking:!0}),t.dispatch("save")},stop_talking:function(t){for(var e=0,a=Object.keys(t.state.participants);e<a.length;e++){var i=a[e];t.commit("talk",{uuid:i,talking:!1})}t.dispatch("save")},tick:function(t,e){for(var a=0,i=Object.keys(t.state.participants);a<i.length;a++){var n=i[a];t.state.participants[n].talking&&t.commit("tick",{uuid:n,timeSinceLastTick:e})}t.dispatch("save")}}});i["a"].config.productionTip=!1,new i["a"]({store:w,render:function(t){return t(_)}}).$mount("#app")},"5f01":function(t,e,a){"use strict";a("9c00")},"9c00":function(t,e,a){},cf25:function(t,e,a){"use strict";a("fea6")},fea6:function(t,e,a){}});
//# sourceMappingURL=app.4382e72a.js.map