webpackJsonp([28,141],{5:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},15:function(n,a,s){"use strict";s(17)},17:function(n,a){},27:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&C(n.props.children)?v["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(C(n)&&(n=n.split("").join(" ")),v["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(8),l=t(o),c=s(7),u=t(c),i=s(2),r=t(i),k=s(4),d=t(k),f=s(3),m=t(f),g=s(1),v=t(g),b=s(6),y=t(b),h=s(22),x=t(h),w=s(35),j=t(w),E=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},N=/^[\u4e00-\u9fa5]{2}$/,C=N.test.bind(N),O=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.type,c=a.size,i=a.inline,r=a.across,k=a.disabled,d=a.icon,f=a.loading,m=a.activeStyle,g=a.onClick,b=E(a,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","onClick"]),h=(n={},(0,u["default"])(n,t,t),(0,u["default"])(n,e,!0),(0,u["default"])(n,e+"-primary","primary"===o),(0,u["default"])(n,e+"-ghost","ghost"===o),(0,u["default"])(n,e+"-warning","warning"===o),(0,u["default"])(n,e+"-small","small"===c),(0,u["default"])(n,e+"-inline",i),(0,u["default"])(n,e+"-across",r),(0,u["default"])(n,e+"-disabled",k),(0,u["default"])(n,e+"-loading",f),n),w=f?"loading":d,N=v["default"].Children.map(s,p);return w&&(h[e+"-icon"]=!0),v["default"].createElement(j["default"],{activeClassName:m?e+"-active":void 0,disabled:k,activeStyle:m},v["default"].createElement("a",(0,l["default"])({role:"button",className:(0,y["default"])(h)},b,{onClick:k?void 0:g,"aria-disabled":k}),w?v["default"].createElement(x["default"],{"aria-hidden":"true",type:w,size:"small"===c?"xxs":"md"}):null,N))},a}(v["default"].Component);O.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},a["default"]=O,n.exports=a["default"]},28:function(n,a,s){"use strict";s(5),s(15),s(34)},34:function(n,a){},37:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(7),l=t(o),c=s(2),u=t(c),i=s(4),r=t(i),k=s(3),d=t(k),f=s(1),m=t(f),g=s(6),v=t(g),b=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},y=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.direction,t=a.wrap,e=a.justify,o=a.align,c=a.alignContent,u=a.className,i=a.children,r=a.prefixCls,k=a.style,d=b(a,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),f=(0,v["default"])((n={},(0,l["default"])(n,r,!0),(0,l["default"])(n,r+"-dir-row","row"===s),(0,l["default"])(n,r+"-dir-row-reverse","row-reverse"===s),(0,l["default"])(n,r+"-dir-column","column"===s),(0,l["default"])(n,r+"-dir-column-reverse","column-reverse"===s),(0,l["default"])(n,r+"-nowrap","nowrap"===t),(0,l["default"])(n,r+"-wrap","wrap"===t),(0,l["default"])(n,r+"-wrap-reverse","wrap-reverse"===t),(0,l["default"])(n,r+"-justify-start","start"===e),(0,l["default"])(n,r+"-justify-end","end"===e),(0,l["default"])(n,r+"-justify-center","center"===e),(0,l["default"])(n,r+"-justify-between","between"===e),(0,l["default"])(n,r+"-justify-around","around"===e),(0,l["default"])(n,r+"-align-top","top"===o||"start"===o),(0,l["default"])(n,r+"-align-middle","middle"===o||"center"===o),(0,l["default"])(n,r+"-align-bottom","bottom"===o||"end"===o),(0,l["default"])(n,r+"-align-baseline","baseline"===o),(0,l["default"])(n,r+"-align-stretch","stretch"===o),(0,l["default"])(n,r+"-align-content-start","start"===c),(0,l["default"])(n,r+"-align-content-end","end"===c),(0,l["default"])(n,r+"-align-content-center","center"===c),(0,l["default"])(n,r+"-align-content-between","between"===c),(0,l["default"])(n,r+"-align-content-around","around"===c),(0,l["default"])(n,r+"-align-content-stretch","stretch"===c),(0,l["default"])(n,u,u),n));return m["default"].createElement("div",(0,p["default"])({className:f,style:k},d),i)},a}(m["default"].Component);a["default"]=y,y.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},38:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(7),l=t(o),c=s(2),u=t(c),i=s(4),r=t(i),k=s(3),d=t(k),f=s(1),m=t(f),g=s(6),v=t(g),b=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},y=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.style,c=b(a,["children","className","prefixCls","style"]),u=(0,v["default"])((n={},(0,l["default"])(n,e+"-item",!0),(0,l["default"])(n,t,t),n));return m["default"].createElement("div",(0,p["default"])({className:u,style:o},c),s)},a}(m["default"].Component);a["default"]=y,y.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},39:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(37),p=t(e),o=s(38),l=t(o);p["default"].Item=l["default"],a["default"]=p["default"],n.exports=a["default"]},40:function(n,a,s){"use strict";s(5),s(42)},42:function(n,a){},162:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n,a,s,t){var e=a&&a.antLocale&&a.antLocale[s]?a.antLocale[s]:t(),p=(0,l["default"])({},e);return n.locale&&(p=(0,l["default"])(p,n.locale),n.locale.lang&&(p.lang=(0,l["default"])({},e.lang,n.locale.lang))),p}function p(n){var a=n.antLocale&&n.antLocale.locale;return n.antLocale&&n.antLocale.exist&&!a?"zh-cn":a}Object.defineProperty(a,"__esModule",{value:!0}),a.getComponentLocale=e,a.getLocaleCode=p;var o=s(21),l=t(o)},239:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(2),l=t(o),c=s(4),u=t(c),i=s(3),r=t(i),k=s(1),d=t(k),f=s(14),m=t(f),g=s(6),v=t(g),b=s(27),y=t(b),h=s(39),x=t(h),w=s(162),j=function(n){function a(s){(0,l["default"])(this,a);var t=(0,u["default"])(this,n.call(this,s));return t.state={current:s.current},t}return(0,r["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){this.setState({current:n.current})},a.prototype.onChange=function(n){this.setState({current:n}),this.props.onChange&&this.props.onChange(n)},a.prototype.render=function(){var n,a=this,t=this.props,e=t.prefixCls,o=t.className,l=t.style,c=t.mode,u=t.total,i=t.simple,r=this.state.current,k=(0,w.getComponentLocale)(this.props,this.context,"Pagination",function(){return s(240)}),f=k.prevText,m=k.nextText,g=d["default"].createElement(x["default"],null,d["default"].createElement(x["default"].Item,{className:e+"-wrap-btn "+e+"-wrap-btn-prev"},d["default"].createElement(y["default"],{inline:!0,disabled:r<=0,onClick:function(){return a.onChange(r-1)}},f)),this.props.children?d["default"].createElement(x["default"].Item,null,this.props.children):!i&&d["default"].createElement(x["default"].Item,{className:e+"-wrap","aria-live":"assertive"},d["default"].createElement("span",{className:"active"},r+1),"/",d["default"].createElement("span",null,u)),d["default"].createElement(x["default"].Item,{className:e+"-wrap-btn "+e+"-wrap-btn-next"},d["default"].createElement(y["default"],{inline:!0,disabled:r>=u-1,onClick:function(){return a.onChange(a.state.current+1)}},m)));if("number"===c)g=d["default"].createElement("div",{className:e+"-wrap"},d["default"].createElement("span",{className:"active"},r+1),"/",d["default"].createElement("span",null,u));else if("pointer"===c){for(var b=[],h=0;h<u;h++){var j;b.push(d["default"].createElement("div",{key:"dot-"+h,className:(0,v["default"])((j={},(0,p["default"])(j,e+"-wrap-dot",!0),(0,p["default"])(j,e+"-wrap-dot-active",h===r),j))},d["default"].createElement("span",null)))}g=d["default"].createElement("div",{className:e+"-wrap"},b)}return d["default"].createElement("div",{className:(0,v["default"])((n={},(0,p["default"])(n,o,o),(0,p["default"])(n,e,!0),n)),style:l},g)},a}(d["default"].Component);a["default"]=j,j.defaultProps={prefixCls:"am-pagination",mode:"button",current:0,simple:!1,onChange:function(){}},j.contextTypes={antLocale:m["default"].object},n.exports=a["default"]},240:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={prevText:"\u4e0a\u4e00\u9875",nextText:"\u4e0b\u4e00\u9875"},n.exports=a["default"]},241:function(n,a,s){"use strict";s(5),s(28),s(40),s(275)},275:function(n,a){},537:function(n,a,s){n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/pagination/demo/basic.md",id:"components-pagination-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>\n  prevText<span class="token punctuation">:</span> <span class="token string">\'\u4e0a\u4e00\u6b65\'</span><span class="token punctuation">,</span>\n  nextText<span class="token punctuation">:</span> <span class="token string">\'\u4e0b\u4e00\u6b65\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pagination-container<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u6309\u94ae\u5185\u5e26\u6587\u672c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u5e26\u6587\u672c\u548cicon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        prevText<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u4e0a\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        nextText<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0b\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9690\u85cf\u6570\u5b57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">simple</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u53ea\u663e\u793a\u6570\u5b57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u70b9\u72b6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pointer<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'0.32rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(9),s(15),s(22)),e=n(t),p=(s(241),s(239)),o=n(p),l={prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"},c=function(){return a.createElement("div",{className:"pagination-container"},a.createElement("p",{className:"sub-title"},"\u6309\u94ae\u5185\u5e26\u6587\u672c"),a.createElement(o["default"],{total:5,current:1,locale:l}),a.createElement("p",{className:"sub-title"},"\u5e26\u6587\u672c\u548cicon"),a.createElement(o["default"],{total:5,current:1,locale:{prevText:a.createElement("div",{className:"arrow-align"},a.createElement(e["default"],{type:"left"}),"\u4e0a\u4e00\u6b65"),nextText:a.createElement("div",{className:"arrow-align"},"\u4e0b\u4e00\u6b65",a.createElement(e["default"],{type:"right"}))}}),a.createElement("p",{className:"sub-title"},"\u9690\u85cf\u6570\u5b57"),a.createElement(o["default"],{simple:!0,total:5,current:1,locale:l}),a.createElement("p",{className:"sub-title"},"\u53ea\u663e\u793a\u6570\u5b57"),a.createElement(o["default"],{mode:"number",total:5,current:3}),a.createElement("p",{className:"sub-title"},"\u70b9\u72b6"),a.createElement(o["default"],{mode:"pointer",total:5,current:2,style:{marginBottom:"0.32rem"}}))};return a.createElement(c,null)},style:".pagination-container {\n  margin: 0 0.3rem;\n}\n.pagination-container .arrow-align {\n  display: flex;\n  align-items: center;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.pagination-container</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0.3</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.pagination-container</span> <span class="token class">.arrow-align</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},642:function(n,a,s){n.exports={basic:s(537)}}});