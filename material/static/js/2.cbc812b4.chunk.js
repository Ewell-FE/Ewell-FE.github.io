webpackJsonp([2],{1215:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var A=t(0),a=t.n(A),l=t(1216),s=(t.n(l),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),c=function(e){function n(e){r(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={},t}return i(n,e),s(n,[{key:"render",value:function(){return a.a.createElement("div",{id:"error"},a.a.createElement("div",{className:"content"},a.a.createElement("img",{alt:"\u9519\u8bef\u63d0\u793a\u56fe",className:"img",src:t(1218)}),a.a.createElement("div",{className:"err-msg"},a.a.createElement("div",{className:"errCode"},"500"),a.a.createElement("p",{className:"errMsg"},"\u62b1\u6b49\uff0c\u670d\u52a1\u5668\u51fa\u9519\u4e86"),a.a.createElement("a",{className:"link",href:"/authority/home"},"\u8fd4\u56de\u9996\u9875"))))}}]),n}(A.Component);n.a=c},1216:function(e,n,t){var r=t(1217);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;t(843)(r,o);r.locals&&(e.exports=r.locals)},1217:function(e,n,t){n=e.exports=t(842)(!0),n.push([e.i,"#error{height:100vh;width:100%;position:relative}#error .content{position:absolute;top:50%;left:50%;margin-top:-110px;margin-left:-215px}#error .content .img{float:left}#error .content .err-msg{display:inline-block;float:left;text-align:left;margin-left:30px}#error .content .errCode{color:#434e59;font-size:90px;font-weight:700;display:inline-block}#error .content .errMsg{font-size:20px;color:rgba(0,0,0,.45);letter-spacing:0;line-height:28px}#error .link{display:inline-block;width:100px;line-height:32px;text-align:center;text-decoration:none;color:#fff;border:1px solid #0068b3;background:#0068b3;border-radius:4px}","",{version:3,sources:["D:/github/material-design/src/routers/PageError/view/D:/github/material-design/src/routers/PageError/view/style.less","D:/github/material-design/src/routers/PageError/view/D:/github/material-design/style.less"],names:[],mappings:"AACA,OACE,aAAA,AACA,WAAA,AACA,iBAAA,CCAD,ADHD,gBAKI,kBAAA,AACA,QAAA,AACA,SAAA,AACA,kBAAA,AACA,kBAAA,CCCH,ADVD,qBAWM,UAAA,CCEL,ADbD,yBAcM,qBAAA,AACA,WAAA,AACA,gBAAA,AACA,gBAAA,CCEL,ADnBD,yBAoBM,cAAA,AACA,eAAA,AACA,gBAAA,AACA,oBAAA,CCEL,ADzBD,wBA0BM,eAAA,AACA,sBAAA,AACA,iBAAA,AACA,gBAAA,CCEL,AD/BD,aAiCI,qBAAA,AACA,YAAA,AACA,iBAAA,AACA,kBAAA,AACA,qBAAA,AACA,WAAA,AACA,yBAAA,AAEA,mBAAA,AACA,iBAAA,CCAH",file:"style.less",sourcesContent:['\n#error {\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  .content{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -110px;\n    margin-left: -215px;\n    .img{\n      float: left;\n    }\n    .err-msg{\n      display: inline-block;\n      float: left;\n      text-align: left;\n      margin-left: 30px;\n    }\n    .errCode{\n      color:#434E59;\n      font-size:90px;\n      font-weight:bold;\n      display: inline-block;\n    }\n    .errMsg{\n      font-size: 20px;\n      color: rgba(0,0,0,0.45);\n      letter-spacing: 0;\n      line-height: 28px;\n    }\n  }\n  .link{\n    display: inline-block;\n    width: 100px;\n    line-height: 32px;\n    text-align: center;\n    text-decoration: none;\n    color: #fff;\n    border: 1px solid #0068B3;\n    border-radius: 4px;\n    background: #0068B3;\n    border-radius: 4px;\n  }\n}\n\n@primary-color: #6190E8;@font-family: "Microsoft Yahei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, tahoma, arial, Verdana, sans-serif, "WenQuanYi Micro Hei";@text-color: #333333;@icon-url: "/material/static/iconfont/iconfont";',"#error {\n  height: 100vh;\n  width: 100%;\n  position: relative;\n}\n#error .content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -110px;\n  margin-left: -215px;\n}\n#error .content .img {\n  float: left;\n}\n#error .content .err-msg {\n  display: inline-block;\n  float: left;\n  text-align: left;\n  margin-left: 30px;\n}\n#error .content .errCode {\n  color: #434E59;\n  font-size: 90px;\n  font-weight: bold;\n  display: inline-block;\n}\n#error .content .errMsg {\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.45);\n  letter-spacing: 0;\n  line-height: 28px;\n}\n#error .link {\n  display: inline-block;\n  width: 100px;\n  line-height: 32px;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  border: 1px solid #0068B3;\n  background: #0068B3;\n  border-radius: 4px;\n}\n"],sourceRoot:""}])},1218:function(e,n,t){e.exports=t.p+"static/media/errorPage.31d5c661.png"},846:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1215);n.default={view:r.a}}});
//# sourceMappingURL=2.cbc812b4.chunk.js.map