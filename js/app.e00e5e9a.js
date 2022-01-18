(function(e){function t(t){for(var n,m,p=t[0],s=t[1],g=t[2],c=0,d=[];c<p.length;c++)m=p[c],Object.prototype.hasOwnProperty.call(a,m)&&a[m]&&d.push(a[m][0]),a[m]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,g||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,m=1;m<i.length;m++){var s=i[m];0!==a[s]&&(n=!1)}n&&(r.splice(t--,1),e=p(p.s=i[0]))}return e}var n={},a={app:0},r=[];function m(e){return p.p+"js/"+({}[e]||e)+"."+{"chunk-1335a3e6":"4765f52b"}[e]+".js"}function p(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,p),i.l=!0,i.exports}p.e=function(e){var t=[],i=a[e];if(0!==i)if(i)t.push(i[2]);else{var n=new Promise((function(t,n){i=a[e]=[t,n]}));t.push(i[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,p.nc&&s.setAttribute("nonce",p.nc),s.src=m(e);var g=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(c);var i=a[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;g.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",g.name="ChunkLoadError",g.type=n,g.request=r,i[1](g)}a[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},p.m=e,p.c=n,p.d=function(e,t,i){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(p.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)p.d(i,n,function(t){return e[t]}.bind(null,n));return i},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/test/",p.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],g=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var f=g;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);var n=i("2b0e"),a=i("7591"),r=i.n(a),m=i("3665"),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Experiment",{attrs:{title:"Mental Rotation Experiment"}},[i("InstructionScreen",{attrs:{title:"Welcome"}},[e._v(" This is a mental rotation experiment. ")]),i("InstructionScreen",{attrs:{title:"General Instructions"}},[e._v(" If you see two photos of the same rotation, press f; else, press j. ")]),e._l(e.training_trials,(function(t,n){return[i("KeypressScreen",{attrs:{question:"Are they of the same rotation?","feedback-time":800,"fixation-time":300,"response-time":7500,keys:{f:"same",j:"different"}},scopedSlots:e._u([{key:"stimulus",fn:function(){return[i("img",{attrs:{src:t.picture}}),i("Record",{attrs:{data:{angle:t.angle,expected_answer:t.expected,item_number:t.item,trial_type:"training",trial_number:n+1}}})]},proxy:!0},{key:"feedback",fn:function(){return[e.$magpie.measurements.hasOwnProperty("response")?e.$magpie.measurements.response==t.expected?i("p",[e._v("That's right!")]):i("p",[e._v("Not correct, sorry!")]):i("p",[e._v("Faster!")])]},proxy:!0}],null,!0)})]})),i("PostTestScreen"),i("DebugResultsScreen")],2)},s=[],g=i("6c61"),c=i.n(g),f=i("98fe"),d=i.n(f),u={name:"App",data(){return{main_trials:_.shuffle(c.a),training_trials:_.shuffle(d.a)}}},o=u,l=i("2877"),x=Object(l["a"])(o,p,s,!1,null,null,null),j=x.exports,h={experimentId:"171",serverUrl:"https://magpie-demo.herokuapp.com/",socketUrl:"wss://magpie-demo.herokuapp.com/socket",completionUrl:"https://...",contactEmail:"test@random.com",mode:"debug"};n["default"].config.productionTip=!1,n["default"].use(r.a,{prefix:"Canvas"}),n["default"].use(m["a"],h),new n["default"]({render:e=>e(j)}).$mount("#app")},"6c61":function(e,t){e.exports=[{picture:"images/main/1_50_same.jpg",item:1,expected:"same",angle:50},{picture:"images/main/1_50_different.jpg",item:1,expected:"different",angle:50},{picture:"images/main/1_150_same.jpg",item:1,expected:"same",angle:150},{picture:"images/main/1_150_different.jpg",item:1,expected:"different",angle:150},{picture:"images/main/2_50_same.jpg",item:2,expected:"same",angle:50},{picture:"images/main/2_50_different.jpg",item:2,expected:"different",angle:50},{picture:"images/main/2_150_same.jpg",item:2,expected:"same",angle:150},{picture:"images/main/2_150_different.jpg",item:2,expected:"different",angle:150},{picture:"images/main/3_50_same.jpg",item:3,expected:"same",angle:50},{picture:"images/main/3_50_different.jpg",item:3,expected:"different",angle:50},{picture:"images/main/3_150_same.jpg",item:3,expected:"same",angle:150},{picture:"images/main/3_150_different.jpg",item:3,expected:"different",angle:150},{picture:"images/main/4_50_same.jpg",item:4,expected:"same",angle:50},{picture:"images/main/4_50_different.jpg",item:4,expected:"different",angle:50},{picture:"images/main/4_150_same.jpg",item:4,expected:"same",angle:150},{picture:"images/main/4_150_different.jpg",item:4,expected:"different",angle:150},{picture:"images/main/5_50_same.jpg",item:5,expected:"same",angle:50},{picture:"images/main/5_50_different.jpg",item:5,expected:"different",angle:50},{picture:"images/main/5_150_same.jpg",item:5,expected:"same",angle:150},{picture:"images/main/5_150_different.jpg",item:5,expected:"different",angle:150},{picture:"images/main/6_50_same.jpg",item:6,expected:"same",angle:50},{picture:"images/main/6_50_different.jpg",item:6,expected:"different",angle:50},{picture:"images/main/6_150_same.jpg",item:6,expected:"same",angle:150},{picture:"images/main/6_150_different.jpg",item:6,expected:"different",angle:150},{picture:"images/main/7_50_same.jpg",item:7,expected:"same",angle:50},{picture:"images/main/7_50_different.jpg",item:7,expected:"different",angle:50},{picture:"images/main/7_150_same.jpg",item:7,expected:"same",angle:150},{picture:"images/main/7_150_different.jpg",item:7,expected:"different",angle:150},{picture:"images/main/8_50_same.jpg",item:8,expected:"same",angle:50},{picture:"images/main/8_50_different.jpg",item:8,expected:"different",angle:50},{picture:"images/main/8_150_same.jpg",item:8,expected:"same",angle:150},{picture:"images/main/8_150_different.jpg",item:8,expected:"different",angle:150},{picture:"images/main/9_50_same.jpg",item:9,expected:"same",angle:50},{picture:"images/main/9_50_different.jpg",item:9,expected:"different",angle:50},{picture:"images/main/9_150_same.jpg",item:9,expected:"same",angle:150},{picture:"images/main/9_150_different.jpg",item:9,expected:"different",angle:150},{picture:"images/main/10_50_same.jpg",item:10,expected:"same",angle:50},{picture:"images/main/10_50_different.jpg",item:10,expected:"different",angle:50},{picture:"images/main/10_150_same.jpg",item:10,expected:"same",angle:150},{picture:"images/main/10_150_different.jpg",item:10,expected:"different",angle:150},{picture:"images/main/11_50_same.jpg",item:11,expected:"same",angle:50},{picture:"images/main/11_50_different.jpg",item:11,expected:"different",angle:50},{picture:"images/main/11_150_same.jpg",item:11,expected:"same",angle:150},{picture:"images/main/11_150_different.jpg",item:11,expected:"different",angle:150},{picture:"images/main/12_50_same.jpg",item:12,expected:"same",angle:50},{picture:"images/main/12_50_different.jpg",item:12,expected:"different",angle:50},{picture:"images/main/12_150_same.jpg",item:12,expected:"same",angle:150},{picture:"images/main/12_150_different.jpg",item:12,expected:"different",angle:150}]},"98fe":function(e,t){e.exports=[{picture:"images/training/13_50_same.jpg",item:13,expected:"same",angle:50},{picture:"images/training/13_50_different.jpg",item:13,expected:"different",angle:50},{picture:"images/training/13_150_same.jpg",item:13,expected:"same",angle:150},{picture:"images/training/13_150_different.jpg",item:13,expected:"different",angle:150},{picture:"images/training/14_50_same.jpg",item:14,expected:"same",angle:50},{picture:"images/training/14_50_different.jpg",item:14,expected:"different",angle:50},{picture:"images/training/14_150_same.jpg",item:14,expected:"same",angle:150},{picture:"images/training/14_150_different.jpg",item:14,expected:"different",angle:150},{picture:"images/training/15_50_same.jpg",item:15,expected:"same",angle:50},{picture:"images/training/15_50_different.jpg",item:15,expected:"different",angle:50},{picture:"images/training/15_150_same.jpg",item:15,expected:"same",angle:150},{picture:"images/training/15_150_different.jpg",item:15,expected:"different",angle:150}]}});
//# sourceMappingURL=app.e00e5e9a.js.map