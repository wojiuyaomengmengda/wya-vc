!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o(require("Vue"));else if("function"==typeof define&&define.amd)define(["Vue"],o);else{var t="object"==typeof exports?o(require("Vue")):o(e.Vue);for(var s in t)("object"==typeof exports?exports:e)[s]=t[s]}}(window,function(e){return function(e){var o={};function t(s){if(o[s])return o[s].exports;var n=o[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=o,t.d=function(e,o,s){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(s,n,function(o){return e[o]}.bind(null,n));return s},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="/wya-vc/dist/",t(t.s="./temp/checkbox/basic.js")}({"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/checkbox/checkbox-group.vue?vue&type=style&index=0&lang=scss&":function(e,o,t){(e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".vc-checkbox-group{font-size:14px}",""])},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/checkbox/checkbox.vue?vue&type=style&index=0&lang=scss&":function(e,o,t){(e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,'.vc-checkbox{font-size:12px;margin-right:8px}.vc-checkbox,.vc-checkbox__wrapper{cursor:pointer;display:inline-block}.vc-checkbox__wrapper{vertical-align:middle;white-space:nowrap;line-height:1;position:relative}.vc-checkbox__wrapper input{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;cursor:pointer;opacity:0}.vc-checkbox__wrapper input[disabled]{cursor:not-allowed}.vc-checkbox__border{display:inline-block;width:14px;height:14px;top:0;left:0;border-radius:2px;background-color:#fff;position:relative;-webkit-transform:translateZ(0);transform:translateZ(0)}.vc-checkbox__border:after,.vc-checkbox__border:before{position:absolute;content:" ";display:block;clear:both;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;z-index:1;border-radius:inherit}.vc-checkbox__border:after{border:1px solid #dcdee2;left:0;top:0;width:100%;height:100%;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}@media (-webkit-min-device-pixel-ratio:2), (min-resolution:2dppx){.vc-checkbox__border:after{width:200%;height:200%;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}}@media (-webkit-min-device-pixel-ratio:3), (min-resolution:3dppx){.vc-checkbox__border:after{width:300%;height:300%;-webkit-transform:scale(.33333);-ms-transform:scale(.33333);transform:scale(.33333)}}.vc-checkbox__border:after,.vc-checkbox__border:before{-webkit-transition:border-color .2s;transition:border-color .2s}.vc-checkbox__inner{content:"";display:table;width:4px;height:8px;position:absolute;top:2px;left:5px;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:rotate(45deg) scale(0);-ms-transform:rotate(45deg) scale(0);transform:rotate(45deg) scale(0);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.vc-checkbox.is-checked .vc-checkbox__border{background-color:#2d8cf0}.vc-checkbox.is-checked .vc-checkbox__border:after,.vc-checkbox.is-checked .vc-checkbox__border:before{border-color:#2d8cf0}.vc-checkbox.is-checked .vc-checkbox__inner{-webkit-transform:rotate(45deg) scale(1);-ms-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}.vc-checkbox.is-disabled .vc-checkbox__border{background-color:#f3f3f3}.vc-checkbox.is-disabled .vc-checkbox__border:after,.vc-checkbox.is-disabled .vc-checkbox__border:before{border-color:#dcdee2}.vc-checkbox.is-disabled .vc-checkbox__inner{-webkit-animation-name:none;animation-name:none;border-color:#f3f3f3}.vc-checkbox.is-disabled.is-checked .vc-checkbox__inner{-webkit-animation-name:none;animation-name:none;border-color:#ccc}.vc-checkbox.is-focus .vc-checkbox__border{-webkit-box-shadow:0 0 0 2px rgba(45,140,240,.2);box-shadow:0 0 0 2px rgba(45,140,240,.2);z-index:1}.vc-checkbox.is-indeterminate .vc-checkbox__border{background-color:#2d8cf0}.vc-checkbox.is-indeterminate .vc-checkbox__border:after,.vc-checkbox.is-indeterminate .vc-checkbox__border:before{border-color:#2d8cf0}.vc-checkbox.is-indeterminate .vc-checkbox__inner{width:8px;height:1px;left:3px;top:6px;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}',""])},"./node_modules/css-loader/lib/css-base.js":function(e,o){e.exports=function(e){var o=[];return o.toString=function(){return this.map(function(o){var t=function(e,o){var t=e[1]||"",s=e[3];if(!s)return t;if(o&&"function"==typeof btoa){var n=(c=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),r=s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"});return[t].concat(r).concat([n]).join("\n")}var c;return[t].join("\n")}(o,e);return o[2]?"@media "+o[2]+"{"+t+"}":t}).join("")},o.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(s[r]=!0)}for(n=0;n<e.length;n++){var c=e[n];"number"==typeof c[0]&&s[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="("+c[2]+") and ("+t+")"),o.push(c))}},o}},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(e,o,t){"use strict";function s(e,o,t,s,n,r,c,i){var a,l="function"==typeof e?e.options:e;if(o&&(l.render=o,l.staticRenderFns=t,l._compiled=!0),s&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),c?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},l._ssrRegister=a):n&&(a=i?function(){n.call(this,this.$root.$options.shadowRoot)}:n),a)if(l.functional){l._injectStyles=a;var d=l.render;l.render=function(e,o){return a.call(o),d(e,o)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,a):[a]}return{exports:e,options:l}}t.d(o,"a",function(){return s})},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/checkbox/checkbox-group.vue?vue&type=style&index=0&lang=scss&":function(e,o,t){var s=t("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/checkbox/checkbox-group.vue?vue&type=style&index=0&lang=scss&");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("6a7f1d30",s,!0,{})},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/checkbox/checkbox.vue?vue&type=style&index=0&lang=scss&":function(e,o,t){var s=t("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/checkbox/checkbox.vue?vue&type=style&index=0&lang=scss&");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("da7a0b78",s,!0,{})},"./node_modules/vue-style-loader/lib/addStylesClient.js":function(e,o,t){"use strict";function s(e,o){for(var t=[],s={},n=0;n<o.length;n++){var r=o[n],c=r[0],i={id:e+":"+n,css:r[1],media:r[2],sourceMap:r[3]};s[c]?s[c].parts.push(i):t.push(s[c]={id:c,parts:[i]})}return t}t.r(o),t.d(o,"default",function(){return p});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},c=n&&(document.head||document.getElementsByTagName("head")[0]),i=null,a=0,l=!1,d=function(){},u=null,h="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,o,t,n){l=t,u=n||{};var c=s(e,o);return f(c),function(o){for(var t=[],n=0;n<c.length;n++){var i=c[n];(a=r[i.id]).refs--,t.push(a)}o?f(c=s(e,o)):c=[];for(n=0;n<t.length;n++){var a;if(0===(a=t[n]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}}function f(e){for(var o=0;o<e.length;o++){var t=e[o],s=r[t.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](t.parts[n]);for(;n<t.parts.length;n++)s.parts.push(m(t.parts[n]));s.parts.length>t.parts.length&&(s.parts.length=t.parts.length)}else{var c=[];for(n=0;n<t.parts.length;n++)c.push(m(t.parts[n]));r[t.id]={id:t.id,refs:1,parts:c}}}}function v(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function m(e){var o,t,s=document.querySelector("style["+h+'~="'+e.id+'"]');if(s){if(l)return d;s.parentNode.removeChild(s)}if(b){var n=a++;s=i||(i=v()),o=k.bind(null,s,n,!1),t=k.bind(null,s,n,!0)}else s=v(),o=function(e,o){var t=o.css,s=o.media,n=o.sourceMap;s&&e.setAttribute("media",s);u.ssrId&&e.setAttribute(h,o.id);n&&(t+="\n/*# sourceURL="+n.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,s),t=function(){s.parentNode.removeChild(s)};return o(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;o(e=s)}else t()}}var x,_=(x=[],function(e,o){return x[e]=o,x.filter(Boolean).join("\n")});function k(e,o,t,s){var n=t?"":s.css;if(e.styleSheet)e.styleSheet.cssText=_(o,n);else{var r=document.createTextNode(n),c=e.childNodes;c[o]&&e.removeChild(c[o]),c.length?e.insertBefore(r,c[o]):e.appendChild(r)}}},"./src/checkbox/checkbox-group.vue?vue&type=style&index=0&lang=scss&":function(e,o,t){"use strict";var s=t("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/checkbox/checkbox-group.vue?vue&type=style&index=0&lang=scss&");t.n(s).a},"./src/checkbox/checkbox.vue?vue&type=style&index=0&lang=scss&":function(e,o,t){"use strict";var s=t("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/checkbox/checkbox.vue?vue&type=style&index=0&lang=scss&");t.n(s).a},"./src/extends/mixins/emitter.js":function(e,o,t){"use strict";o.a={methods:{dispatch:function(e,o,t){for(var s=this.$parent||this.$root,n=s.$options.name;s&&(!n||n!==e);)(s=s.$parent)&&(n=s.$options.name);s&&s.$emit.apply(s,[o].concat(t))},broadcast:function(e,o,t){var s=this;this.$children.forEach(function(n){n.$options.name===e?n.$emit.apply(n,[o].concat(t)):s.broadcast.apply(n,[e,o].concat(t))})}}}},"./temp/checkbox/basic.js":function(e,o,t){"use strict";t.r(o);var s=t("vue"),n=t.n(s),r=t("./src/extends/mixins/emitter.js"),c={name:"vc-checkbox",mixins:[r.a],model:{prop:"value",event:"change"},props:{disabled:{type:Boolean,default:!1},value:{type:[String,Number,Boolean],default:!1},label:{type:[String,Number,Boolean]},indeterminate:{type:Boolean,default:!1},name:{type:String},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1}},inject:{group:{from:"group",default:function(){}}},data:function(){return{currentValue:void 0,isFocus:!1}},computed:{classes:function(){return{"is-indeterminate":this.indeterminate,"is-checked":this.checked,"is-disabled":this.disabled,"is-focus":this.isFocus}},hasGroup:function(){return!this.group},checked:function(){return this.group?this.group.currentValue.includes(this.label):this.currentValue===this.trueValue}},watch:{value:{immediate:!0,handler:function(e){this.currentValue=e}},currentValue:function(e,o){this.$emit("change",e),this.dispatch("vc-form-item","form-change",e)}},methods:{handleChange:function(e){if(this.disabled)return!1;var o=e.target.checked;this.group?this.group.reset(this.label):this.currentValue=o?this.trueValue:this.falseValue},handleBlur:function(){this.isFocus=!1},handleFocus:function(){this.isFocus=!0}}},i=(t("./src/checkbox/checkbox.vue?vue&type=style&index=0&lang=scss&"),t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),a=Object(i.a)(c,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("label",{staticClass:"vc-checkbox",class:e.classes},[t("span",{staticClass:"vc-checkbox__wrapper"},[e._m(0),e._v(" "),t("input",{attrs:{name:e.name,disabled:e.disabled,type:"checkbox"},domProps:{checked:e.checked},on:{change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur}})]),e._v(" "),e._t("default",[e.label?t("span",[e._v(e._s(e.label))]):e._e()])],2)},[function(){var e=this.$createElement,o=this._self._c||e;return o("span",{staticClass:"vc-checkbox__border"},[o("span",{staticClass:"vc-checkbox__inner"})])}],!1,null,null,null).exports,l={name:"vc-checkbox-group",mixins:[r.a],model:{prop:"value",event:"change"},props:{value:{type:Array,default:function(){return[]}}},provide:function(){return{group:this}},data:function(){return{currentValue:[]}},watch:{value:{immediate:!0,handler:function(e){this.currentValue=e}},currentValue:function(e,o){this.$emit("change",e),this.dispatch("vc-form-item","form-change",e)}},mounted:function(){},methods:{reset:function(e){var o=this.currentValue.findIndex(function(o){return o==e});-1==o?this.currentValue.push(e):this.currentValue.splice(o,1)}}},d=(t("./src/checkbox/checkbox-group.vue?vue&type=style&index=0&lang=scss&"),Object(i.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vc-checkbox-group"},[this._t("default")],2)},[],!1,null,null,null).exports);a.Group=d;var u={name:"vc-tpl-basic",components:{"vc-checkbox":a,"vc-checkbox-group":a.Group},data:function(){return{single:!0,social:["facebook","github"],fruit:["苹果"],indeterminate:!0,checkAll:!1,checkAllGroup:["香蕉","西瓜"]}},computed:{},updated:function(){console.log({single:this.single,social:this.social,fruit:this.fruit,checkAll:this.checkAll})},methods:{handleCheckAll:function(){this.indeterminate?this.checkAll=!1:this.checkAll=!this.checkAll,this.indeterminate=!1,this.checkAll?this.checkAllGroup=["香蕉","苹果","西瓜"]:this.checkAllGroup=[]},handleChange:function(e){3===e.length?(this.indeterminate=!1,this.checkAll=!0):e.length>0?(this.indeterminate=!0,this.checkAll=!1):(this.indeterminate=!1,this.checkAll=!1)}}},h=Object(i.a)(u,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("vc-checkbox",{model:{value:e.single,callback:function(o){e.single=o},expression:"single"}},[e._v(e._s(e.single))]),e._v(" "),t("vc-checkbox-group",{model:{value:e.social,callback:function(o){e.social=o},expression:"social"}},[t("vc-checkbox",{attrs:{label:"twitter"}},[t("span",[e._v("Twitter")])]),e._v(" "),t("vc-checkbox",{attrs:{label:"facebook"}},[t("span",[e._v("Facebook")])]),e._v(" "),t("vc-checkbox",{attrs:{label:"github",disabled:""}},[t("span",[e._v("Github")])]),e._v(" "),t("vc-checkbox",{attrs:{label:"snapchat",disabled:""}},[t("span",[e._v("Snapchat")])])],1),e._v(" "),t("vc-checkbox-group",{model:{value:e.fruit,callback:function(o){e.fruit=o},expression:"fruit"}},[t("vc-checkbox",{attrs:{label:"香蕉"}}),e._v(" "),t("vc-checkbox",{attrs:{label:"苹果"}}),e._v(" "),t("vc-checkbox",{attrs:{label:"西瓜"}})],1),e._v(" "),t("div",{staticStyle:{"border-bottom":"1px solid #e9e9e9","padding-bottom":"6px","margin-bottom":"6px"}},[t("vc-checkbox",{attrs:{indeterminate:e.indeterminate,value:e.checkAll},nativeOn:{click:function(o){return o.preventDefault(),e.handleCheckAll(o)}}},[e._v("全选")])],1),e._v(" "),t("vc-checkbox-group",{on:{change:e.handleChange},model:{value:e.checkAllGroup,callback:function(o){e.checkAllGroup=o},expression:"checkAllGroup"}},[t("vc-checkbox",{attrs:{label:"香蕉"}}),e._v(" "),t("vc-checkbox",{attrs:{label:"苹果"}}),e._v(" "),t("vc-checkbox",{attrs:{label:"西瓜"}})],1)],1)},[],!1,null,null,null).exports,b=new n.a({el:"#pages",components:{App:h},template:"<App />"});window.app=b},vue:function(o,t){o.exports=e}})});