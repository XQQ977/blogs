(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{356:function(o,e,t){},368:function(o,e,t){"use strict";t.d(e,"a",(function(){return c}));var r={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function a(o){const e=document.querySelector(":root"),t=r[o],a="dark"===o?"light":"dark";for(const o in t)e.style.setProperty(o,t[o]);e.classList.remove(a),e.classList.add(o)}function c(o){if("auto"!==o)return void a(o);const e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=window.matchMedia("(prefers-color-scheme: light)").matches;if(e&&a("dark"),t&&a("light"),!e&&!t){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const o=(new Date).getHours();a(o<6||o>=18?"dark":"light")}}},375:function(o,e,t){"use strict";t(356)},390:function(o,e,t){"use strict";t.r(e);var r=t(368),a={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var o=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===o.$data.currentMode&&Object(r.a)(o.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===o.$data.currentMode&&Object(r.a)(o.$data.currentMode)}),Object(r.a)(this.currentMode)},methods:{selectMode(o){o!==this.currentMode&&(this.currentMode=o,Object(r.a)(o),localStorage.setItem("mode",o))},getClass(o){return o!==this.currentMode?o:o+" active"}}},c=(t(375),t(2)),l=Object(c.a)(a,(function(){var o=this,e=o._self._c;return e("div",{staticClass:"mode-options"},[e("h4",{staticClass:"title"},[o._v("Choose mode")]),o._v(" "),e("ul",{staticClass:"color-mode-options"},o._l(o.modeOptions,(function(t,r){return e("li",{key:r,class:o.getClass(t.mode),on:{click:function(e){return o.selectMode(t.mode)}}},[o._v(o._s(t.title))])})),0)])}),[],!1,null,null,null);e.default=l.exports}}]);