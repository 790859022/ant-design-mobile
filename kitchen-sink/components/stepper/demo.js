webpackJsonp([37,141],{2:function(n,s,t){"use strict";t(13),t(12)},12:function(n,s){},13:function(n,s){},15:function(n,s,t){"use strict";t(2),t(23)},23:function(n,s){},30:function(n,s){"use strict";s.__esModule=!0,s["default"]=function(n,s){var t={};for(var a in n)s.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}},220:function(n,s,t){var a=t(16),e='<symbol viewBox="0 0 54 54" id="minus" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --> <title>&#x51CF;&#x4E00;&#x6B65;54px</title> <desc>Created with Sketch.</desc> <defs> <rect id="minus_path-1" x="0" y="0" width="54" height="54" rx="6"/> <mask id="minus_mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="54" height="54" fill="white"> <use xlink:href="#minus_path-1"/> </mask> </defs> <g id="minus_&#x58F9;&#x4E50;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="minus_Stepper&#x6B65;&#x8FDB;&#x5668;" transform="translate(-1190.000000, -2026.000000)"> <g id="minus_&#x51CF;&#x4E00;&#x6B65;54px" transform="translate(1190.000000, 2026.000000)"> <use id="minus_Rectangle-26-Copy-24" stroke="#D9D9D9" mask="url(#minus_mask-2)" stroke-width="4" fill="#FFFFFF" xlink:href="#minus_path-1"/> <path d="M13,27 L41,27" id="minus_Line" stroke="#000000" stroke-width="2" stroke-linecap="square"/> </g> </g> </g> </symbol>';n.exports=a.add(e,"minus")},221:function(n,s,t){var a=t(16),e='<symbol viewBox="0 0 54 54" id="plus" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --> <title>&#x52A0;&#x4E00;&#x6B65;54px</title> <desc>Created with Sketch.</desc> <defs> <rect id="plus_path-1" x="0" y="0" width="54" height="54" rx="6"/> <mask id="plus_mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="54" height="54" fill="white"> <use xlink:href="#plus_path-1"/> </mask> </defs> <g id="plus_&#x58F9;&#x4E50;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="plus_Stepper&#x6B65;&#x8FDB;&#x5668;" transform="translate(-1363.000000, -2026.000000)"> <g id="plus_&#x52A0;&#x4E00;&#x6B65;54px" transform="translate(1363.000000, 2026.000000)"> <use id="plus_Rectangle-26-Copy-22" stroke="#D9D9D9" mask="url(#plus_mask-2)" stroke-width="4" fill="#FFFFFF" xlink:href="#plus_path-1"/> <path d="M13,27 L41,27" id="plus_Line" stroke="#000000" stroke-width="2" stroke-linecap="square"/> <path d="M27,13 L27,41" id="plus_Line" stroke="#000000" stroke-width="2" stroke-linecap="square"/> </g> </g> </g> </symbol>';n.exports=a.add(e,"plus")},250:function(n,s){},269:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0});var e=t(30),p=a(e),o=t(5),u=a(o),i=t(7),c=a(i),l=t(6),r=a(l),d=t(1),k=a(d),f=t(31),h=a(f),m=function(n){function s(){return(0,u["default"])(this,s),(0,c["default"])(this,n.apply(this,arguments))}return(0,r["default"])(s,n),s.prototype.render=function(){var n=this.props,s=n.prefixCls,t=n.disabled,a=(0,p["default"])(n,["prefixCls","disabled"]);return k["default"].createElement(h["default"],{disabled:t,activeClassName:s+"-handler-active"},k["default"].createElement("span",a))},s}(d.Component);m.propTypes={prefixCls:d.PropTypes.string,disabled:d.PropTypes.bool},s["default"]=m,n.exports=s["default"]},270:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function e(){}function p(n){n.preventDefault()}Object.defineProperty(s,"__esModule",{value:!0});var o=t(4),u=a(o),i=t(10),c=a(i),l=t(1),r=a(l),d=t(3),k=a(d),f=t(271),h=a(f),m=t(269),g=a(m),v=r["default"].createClass({displayName:"InputNumber",propTypes:{focusOnUpDown:l.PropTypes.bool,onChange:l.PropTypes.func,onKeyDown:l.PropTypes.func,onKeyUp:l.PropTypes.func,prefixCls:l.PropTypes.string,disabled:l.PropTypes.bool,onFocus:l.PropTypes.func,onBlur:l.PropTypes.func,readOnly:l.PropTypes.bool,max:l.PropTypes.number,min:l.PropTypes.number,step:l.PropTypes.oneOfType([l.PropTypes.number,l.PropTypes.string]),upHandler:l.PropTypes.node,downHandler:l.PropTypes.node,useTouch:l.PropTypes.bool,formatter:l.PropTypes.func,parser:l.PropTypes.func},mixins:[h["default"]],getDefaultProps:function(){return{focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number"}},componentDidMount:function(){this.componentDidUpdate()},componentDidUpdate:function(){this.props.focusOnUpDown&&this.state.focused&&document.activeElement!==this.refs.input&&this.focus()},onKeyDown:function y(n){if(38===n.keyCode){var s=this.getRatio(n);this.up(n,s),this.stop()}else if(40===n.keyCode){var t=this.getRatio(n);this.down(n,t),this.stop()}var y=this.props.onKeyDown;if(y){for(var a=arguments.length,e=Array(a>1?a-1:0),p=1;p<a;p++)e[p-1]=arguments[p];y.apply(void 0,[n].concat(e))}},onKeyUp:function b(n){this.stop();var b=this.props.onKeyUp;if(b){for(var s=arguments.length,t=Array(s>1?s-1:0),a=1;a<s;a++)t[a-1]=arguments[a];b.apply(void 0,[n].concat(t))}},getRatio:function(n){var s=1;return n.metaKey||n.ctrlKey?s=.1:n.shiftKey&&(s=10),s},getValueFromEvent:function(n){return n.target.value},focus:function(){this.refs.input.focus()},formatWrapper:function(n){return this.props.formatter?this.props.formatter(n):n},render:function(){var n,s=(0,c["default"])({},this.props),t=s.prefixCls,a=s.disabled,o=s.readOnly,i=s.useTouch,l=(0,k["default"])((n={},(0,u["default"])(n,t,!0),(0,u["default"])(n,s.className,!!s.className),(0,u["default"])(n,t+"-disabled",a),(0,u["default"])(n,t+"-focused",this.state.focused),n)),d="",f="",h=this.state.value;if(isNaN(h))d=t+"-handler-up-disabled",f=t+"-handler-down-disabled";else{var m=Number(h);m>=s.max&&(d=t+"-handler-up-disabled"),m<=s.min&&(f=t+"-handler-down-disabled")}var v=!s.readOnly&&!s.disabled,y=void 0;y=this.state.focused?this.state.inputValue:this.toPrecisionAsStep(this.state.value),void 0!==y&&null!==y||(y="");var b=void 0,w=void 0;i?(b={onTouchStart:v&&!d?this.up:e,onTouchEnd:this.stop},w={onTouchStart:v&&!f?this.down:e,onTouchEnd:this.stop}):(b={onMouseDown:v&&!d?this.up:e,onMouseUp:this.stop,onMouseLeave:this.stop},w={onMouseDown:v&&!f?this.down:e,onMouseUp:this.stop,onMouseLeave:this.stop});var x=this.formatWrapper(y);return r["default"].createElement("div",{className:l,style:s.style},r["default"].createElement("div",{className:t+"-handler-wrap"},r["default"].createElement(g["default"],(0,c["default"])({ref:"up",disabled:!!d||a||o,prefixCls:t,unselectable:"unselectable"},b,{className:t+"-handler "+t+"-handler-up "+d}),this.props.upHandler||r["default"].createElement("span",{unselectable:"unselectable",className:t+"-handler-up-inner",onClick:p})),r["default"].createElement(g["default"],(0,c["default"])({ref:"down",disabled:!!f||a||o,prefixCls:t,unselectable:"unselectable"},w,{className:t+"-handler "+t+"-handler-down "+f}),this.props.downHandler||r["default"].createElement("span",{unselectable:"unselectable",className:t+"-handler-down-inner",onClick:p}))),r["default"].createElement("div",{className:t+"-input-wrap"},r["default"].createElement("input",{type:s.type,placeholder:s.placeholder,onClick:s.onClick,className:t+"-input",autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:v?this.onKeyDown:e,onKeyUp:v?this.onKeyUp:e,autoFocus:s.autoFocus,readOnly:s.readOnly,disabled:s.disabled,max:s.max,min:s.min,name:s.name,onChange:this.onChange,ref:"input",value:x})))}});s["default"]=v,n.exports=s["default"]},271:function(n,s){"use strict";function t(){}function a(n){return n.replace(/[^\w\.-]*/g,"")}Object.defineProperty(s,"__esModule",{value:!0});var e=200,p=600;s["default"]={getDefaultProps:function(){return{max:1/0,min:-(1/0),step:1,style:{},defaultValue:"",onChange:t,onKeyDown:t,onFocus:t,onBlur:t,parser:a}},getInitialState:function(){var n=void 0,s=this.props;return n="value"in s?s.value:s.defaultValue,n=this.toNumber(n),{inputValue:this.toPrecisionAsStep(n),value:n,focused:s.autoFocus}},componentWillReceiveProps:function(n){"value"in n&&this.setState({inputValue:n.value,value:n.value})},componentWillUnmount:function(){this.stop()},onChange:function(n){var s=this.props.parser(this.getValueFromEvent(n).trim());this.setState({inputValue:s}),this.props.onChange(this.toNumberWhenUserInput(s))},onFocus:function(){var n;this.setState({focused:!0}),(n=this.props).onFocus.apply(n,arguments)},onBlur:function(n){for(var s=this,t=arguments.length,a=Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];this.setState({focused:!1});var p=this.getCurrentValidValue(this.state.inputValue);n.persist(),this.setValue(p,function(){var t;(t=s.props).onBlur.apply(t,[n].concat(a))})},getCurrentValidValue:function(n){var s=n,t=this.props;return""===s?s="":this.isNotCompleteNumber(s)?s=this.state.value:(s=Number(s),s<t.min&&(s=t.min),s>t.max&&(s=t.max)),this.toNumber(s)},setValue:function(n,s){var t=this.isNotCompleteNumber(parseFloat(n,10))?void 0:parseFloat(n,10),a=t!==this.state.value;"value"in this.props?this.setState({inputValue:this.toPrecisionAsStep(this.state.value)},s):this.setState({value:n,inputValue:this.toPrecisionAsStep(n)},s),a&&this.props.onChange(t)},getPrecision:function(n){var s=n.toString();if(s.indexOf("e-")>=0)return parseInt(s.slice(s.indexOf("e-")+2),10);var t=0;return s.indexOf(".")>=0&&(t=s.length-s.indexOf(".")-1),t},getMaxPrecision:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=this.props.step,a=this.getPrecision(s),e=this.getPrecision(t),p=this.getPrecision(n);return n?Math.max(p,a+e):a+e},getPrecisionFactor:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=this.getMaxPrecision(n,s);return Math.pow(10,t)},toPrecisionAsStep:function(n){if(this.isNotCompleteNumber(n)||""===n)return n;var s=Math.abs(this.getMaxPrecision(n));return s?Number(n).toFixed(s):n.toString()},isNotCompleteNumber:function(n){return isNaN(n)||""===n||null===n||n&&n.toString().indexOf(".")===n.toString().length-1},toNumber:function(n){return this.isNotCompleteNumber(n)?n:Number(n)},toNumberWhenUserInput:function(n){return(/\.0+$/.test(n)||n.length>16)&&this.state.focused?n:this.toNumber(n)},upStep:function(n,s){var t=this.props,a=t.step,e=t.min,p=this.getPrecisionFactor(n,s),o=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((p*n+p*a*s)/p).toFixed(o):e===-(1/0)?a:e,this.toNumber(u)},downStep:function(n,s){var t=this.props,a=t.step,e=t.min,p=this.getPrecisionFactor(n,s),o=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((p*n-p*a*s)/p).toFixed(o):e===-(1/0)?-a:e,this.toNumber(u)},step:function(n,s){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;s&&s.preventDefault();var a=this.props;if(!a.disabled){var e=this.getCurrentValidValue(this.state.inputValue);if(!this.isNotCompleteNumber(e)){var p=this[n+"Step"](e,t);p>a.max||p<a.min||(this.setValue(p),this.setState({focused:!0}))}}},stop:function(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)},down:function(n,s,t){var a=this;n.persist&&n.persist(),this.stop(),this.step("down",n,s),this.autoStepTimer=setTimeout(function(){a.down(n,s,!0)},t?e:p)},up:function(n,s,t){var a=this;n.persist&&n.persist(),this.stop(),this.step("up",n,s),this.autoStepTimer=setTimeout(function(){a.up(n,s,!0)},t?e:p)}},n.exports=s["default"]},303:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=t(10),p=a(e),o=t(4),u=a(o),i=t(5),c=a(i),l=t(7),r=a(l),d=t(6),k=a(d),f=t(1),h=a(f),m=t(3),g=a(m),v=t(270),y=a(v),b=t(21),w=a(b),x=function(n,s){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&s.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,a=Object.getOwnPropertySymbols(n);e<a.length;e++)s.indexOf(a[e])<0&&(t[a[e]]=n[a[e]]);return t},C=function(n){function s(){return(0,c["default"])(this,s),(0,r["default"])(this,n.apply(this,arguments))}return(0,k["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.className,e=s.showNumber,o=x(s,["className","showNumber"]),i=(0,g["default"])((n={},(0,u["default"])(n,a,!!a),(0,u["default"])(n,"showNumber",!!e),n));return h["default"].createElement(y["default"],(0,p["default"])({upHandler:h["default"].createElement(w["default"],{type:t(221),size:"xxs"}),downHandler:h["default"].createElement(w["default"],{type:t(220),size:"xxs"}),useTouch:!0},o,{ref:"inputNumber",className:i}))},s}(h["default"].Component);s["default"]=C,C.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!1,showNumber:!1,focusOnUpDown:!1},n.exports=s["default"]},304:function(n,s,t){"use strict";t(2),t(250)},563:function(n,s,t){n.exports={content:[["p","\u6570\u5b57\u8f93\u5165\u6846\u3002"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/stepper/demo/basic.md",id:"components-stepper-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u6f14\u793a\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          wrap\n        <span class="token operator">></span>\n        <span class="token function">\u663e\u793a\u6570\u503c</span><span class="token punctuation">(</span>pc \u4e0a\u64cd\u4f5c\u65e0\u6548<span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n            <span class="token attr-name">useTouch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          wrap\n        <span class="token operator">></span>\n        <span class="token function">\u663e\u793a\u6570\u503c</span><span class="token punctuation">(</span>\u53ea\u7528\u4e8e pc \u6f14\u793a\uff0c\u52ff\u7528\u4e8e\u5b9e\u9645\u9879\u76ee<span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        \u7981\u7528\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var t=Object.getOwnPropertyNames(s),a=0;a<t.length;a++){var e=t[a],p=Object.getOwnPropertyDescriptor(s,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function a(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function e(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function p(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):s(n,t))}var o=t(1),u=(t(8),t(15),t(28)),i=n(u),c=(t(304),t(303)),l=n(c),r=function(n){function s(t){a(this,s);var p=e(this,n.call(this,t));return p.onChange=function(n){p.setState({val:n})},p.state={val:3},p}return p(s,n),s.prototype.render=function(){return o.createElement(i["default"],{renderHeader:function(){return"\u6f14\u793a"}},o.createElement(i["default"].Item,{extra:o.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,value:this.state.val,onChange:this.onChange}),wrap:!0},"\u663e\u793a\u6570\u503c(pc \u4e0a\u64cd\u4f5c\u65e0\u6548)"),o.createElement(i["default"].Item,{extra:o.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,value:this.state.val,onChange:this.onChange,useTouch:!1}),wrap:!0},"\u663e\u793a\u6570\u503c(\u53ea\u7528\u4e8e pc \u6f14\u793a\uff0c\u52ff\u7528\u4e8e\u5b9e\u9645\u9879\u76ee)"),o.createElement(i["default"].Item,{extra:o.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,defaultValue:3,disabled:!0})},"\u7981\u7528"))},s}(o.Component);return o.createElement(r,null)}}},639:function(n,s,t){n.exports={basic:t(563)}}});