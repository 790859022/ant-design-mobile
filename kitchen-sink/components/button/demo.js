webpackJsonp([23,141],{2:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},14:function(n,a,s){"use strict";s(19)},15:function(n,a,s){"use strict";s(2),s(23)},19:function(n,a){},23:function(n,a){},24:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(4),p=t(e),o=s(5),l=t(o),c=s(7),u=t(c),i=s(6),r=t(i),k=s(1),d=t(k),m=s(3),f=t(m),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.children,l=a.style,c=(0,f["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:c,style:l},o)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},25:function(n,a,s){"use strict";s(2),s(29)},26:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&N(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(N(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(10),l=t(o),c=s(4),u=t(c),i=s(5),r=t(i),k=s(7),d=t(k),m=s(6),f=t(m),g=s(1),y=t(g),v=s(3),h=t(v),b=s(21),x=t(b),B=s(31),C=t(B),w=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},E=/^[\u4e00-\u9fa5]{2}$/,N=E.test.bind(E),j=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.type,c=a.size,i=a.inline,r=a.across,k=a.disabled,d=a.icon,m=a.loading,f=a.activeStyle,g=a.onClick,v=w(a,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","onClick"]),b=(n={},(0,u["default"])(n,t,t),(0,u["default"])(n,e,!0),(0,u["default"])(n,e+"-primary","primary"===o),(0,u["default"])(n,e+"-ghost","ghost"===o),(0,u["default"])(n,e+"-warning","warning"===o),(0,u["default"])(n,e+"-small","small"===c),(0,u["default"])(n,e+"-inline",i),(0,u["default"])(n,e+"-across",r),(0,u["default"])(n,e+"-disabled",k),(0,u["default"])(n,e+"-loading",m),n),B=m?"loading":d,E=y["default"].Children.map(s,p);return B&&(b[e+"-icon"]=!0),y["default"].createElement(C["default"],{activeClassName:f?e+"-active":void 0,disabled:k,activeStyle:f},y["default"].createElement("a",(0,l["default"])({role:"button",className:(0,h["default"])(b)},v,{onClick:k?void 0:g}),B?y["default"].createElement(x["default"],{type:B}):null,E))},a}(y["default"].Component);j.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},a["default"]=j,n.exports=a["default"]},27:function(n,a,s){"use strict";s(2),s(14),s(32)},29:function(n,a){},32:function(n,a){},37:function(n,a){},38:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(4),p=t(e),o=s(5),l=t(o),c=s(7),u=t(c),i=s(6),r=t(i),k=s(1),d=t(k),m=s(3),f=t(m),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.direction,t=a.wrap,e=a.justify,o=a.align,l=a.alignContent,c=a.className,u=a.children,i=a.prefixCls,r=a.style,k=a.onClick,m=(0,f["default"])((n={},(0,p["default"])(n,i,!0),(0,p["default"])(n,i+"-dir-row","row"===s),(0,p["default"])(n,i+"-dir-row-reverse","row-reverse"===s),(0,p["default"])(n,i+"-dir-column","column"===s),(0,p["default"])(n,i+"-dir-column-reverse","column-reverse"===s),(0,p["default"])(n,i+"-nowrap","nowrap"===t),(0,p["default"])(n,i+"-wrap","wrap"===t),(0,p["default"])(n,i+"-wrap-reverse","wrap-reverse"===t),(0,p["default"])(n,i+"-justify-start","start"===e),(0,p["default"])(n,i+"-justify-end","end"===e),(0,p["default"])(n,i+"-justify-center","center"===e),(0,p["default"])(n,i+"-justify-between","between"===e),(0,p["default"])(n,i+"-justify-around","around"===e),(0,p["default"])(n,i+"-align-top","top"===o||"start"===o),(0,p["default"])(n,i+"-align-middle","middle"===o||"center"===o),(0,p["default"])(n,i+"-align-bottom","bottom"===o||"end"===o),(0,p["default"])(n,i+"-align-baseline","baseline"===o),(0,p["default"])(n,i+"-align-stretch","stretch"===o),(0,p["default"])(n,i+"-align-content-start","start"===l),(0,p["default"])(n,i+"-align-content-end","end"===l),(0,p["default"])(n,i+"-align-content-center","center"===l),(0,p["default"])(n,i+"-align-content-between","between"===l),(0,p["default"])(n,i+"-align-content-around","around"===l),(0,p["default"])(n,i+"-align-content-stretch","stretch"===l),(0,p["default"])(n,c,c),n));return d["default"].createElement("div",{className:m,style:r,onClick:k},u)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},39:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(4),p=t(e),o=s(5),l=t(o),c=s(7),u=t(c),i=s(6),r=t(i),k=s(1),d=t(k),m=s(3),f=t(m),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.style,l=a.onClick,c=(0,f["default"])((n={},(0,p["default"])(n,e+"-item",!0),(0,p["default"])(n,t,t),n));return d["default"].createElement("div",{className:c,style:o,onClick:l},s)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},40:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(38),p=t(e),o=s(39),l=t(o);p["default"].Item=l["default"],a["default"]=p["default"],n.exports=a["default"]},41:function(n,a,s){"use strict";s(2),s(37)},370:function(n,a,s){var t=s(16),e='<symbol viewBox="0 0 64 64" id="reload" ><title>Share Icons Copy</title><path d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.471-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" fill-rule="evenodd"/></symbol>';n.exports=t.add(e,"reload")},454:function(n,a,s){n.exports={content:[["p","\u6309\u94ae"]],meta:{order:0,title:{"zh-CN":"\u7c7b\u578b\u3001\u5c3a\u5bf8","en-US":"Type, Size"},filename:"components/button/demo/basic.md",id:"components-button-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Flex<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">const</span> ButtonExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>disabled \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>loading \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check-circle-o<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u5e26\u56fe\u6807\u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'!svg-sprite!./reload.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u672c\u5730\u56fe\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'0.16rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/* &lt;Button className="btn" activeStyle={false}>\u65e0\u70b9\u51fb\u53cd\u9988&lt;/Button> */</span><span class="token punctuation">}</span>\n        <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/* &lt;Button className="btn" activeStyle={{ backgroundColor: \'red\' }}>\u81ea\u5b9a\u4e49\u70b9\u51fb\u53cd\u9988 style&lt;/Button> */</span><span class="token punctuation">}</span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'30px 0 18px 0\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#999\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>inline <span class="token operator">/</span> small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'0.16rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'0.08rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>inline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'0.08rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>inline small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>inline small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(8),s(25),s(24)),e=n(t),p=(s(41),s(40)),o=n(p),l=(s(27),s(26)),c=n(l),u=function(){return a.createElement(e["default"],null,a.createElement("div",{className:"btn-container"},a.createElement("div",null,a.createElement(c["default"],{className:"btn",type:"primary"},"primary \u6309\u94ae"),a.createElement(c["default"],{className:"btn",disabled:!0,onClick:function(n){return console.log(n)}},"disabled \u6309\u94ae"),a.createElement(c["default"],{className:"btn",loading:!0},"loading \u6309\u94ae"),a.createElement(c["default"],{className:"btn",icon:"check-circle-o"},"\u5e26\u56fe\u6807\u6309\u94ae"),a.createElement(c["default"],{className:"btn",icon:s(370)},"\u672c\u5730\u56fe\u6807"),a.createElement("div",{style:{height:"0.16rem"}}),a.createElement("p",{style:{margin:"30px 0 18px 0",color:"#999"}},"inline / small"),a.createElement(o["default"],{style:{marginBottom:"0.16rem"}},a.createElement(c["default"],{type:"primary",inline:!0,style:{marginRight:"0.08rem"}},"inline"),a.createElement(c["default"],{type:"ghost",inline:!0,size:"small",style:{marginRight:"0.08rem"}},"inline small"),a.createElement(c["default"],{type:"primary",inline:!0,size:"small"},"inline small")))))};return a.createElement(u,null)},style:".btn-container .btn {\n  margin: 0.16rem 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.btn-container</span> <span class="token class">.btn</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0.16</span>rem <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},455:function(n,a,s){n.exports={content:[["p","\u548c List / Flex \u7ed3\u5408\u4f7f\u7528\u793a\u4f8b"]],meta:{order:1,title:"\u5e94\u7528\u573a\u666f\u793a\u4f8b",filename:"components/button/demo/complex.md",id:"components-button-demo-complex"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ComplexButtonDemo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'0.1rem 0\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">extra={&lt;Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      multipleLine\n    <span class="token operator">></span>\n      \u533a\u57df\u7ecf\u7406\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">extra={&lt;Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      multipleLine\n    <span class="token operator">></span>\n      \u533a\u57df\u7ecf\u7406\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComplexButtonDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(8),s(15),s(28)),e=n(t),p=(s(27),s(26)),o=n(p),l=function(){return a.createElement(e["default"],{style:{margin:"0.1rem 0",backgroundColor:"white"}},a.createElement(e["default"].Item,{extra:a.createElement(o["default"],{type:"ghost",size:"small",inline:!0},"small"),multipleLine:!0},"\u533a\u57df\u7ecf\u7406",a.createElement(e["default"].Item.Brief,null,"\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c")),a.createElement(e["default"].Item,{extra:a.createElement(o["default"],{type:"primary",size:"small",inline:!0},"small"),multipleLine:!0},"\u533a\u57df\u7ecf\u7406",a.createElement(e["default"].Item.Brief,null,"\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c")))};return a.createElement(l,null)}}},608:function(n,a,s){n.exports={basic:s(454),complex:s(455)}}});