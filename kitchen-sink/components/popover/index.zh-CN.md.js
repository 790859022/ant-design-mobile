webpackJsonp([89,141],{532:function(t,e){t.exports={content:["section",["p","\u5728\u70b9\u51fb\u63a7\u4ef6\u6216\u8005\u67d0\u4e2a\u533a\u57df\u540e\uff0c\u6d6e\u51fa\u4e00\u4e2a\u6c14\u6ce1\u533a\u57df\u6765\u653e\u7f6e\u66f4\u591a\u7684\u64cd\u4f5c\u6216\u8005\u4fe1\u606f\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u901a\u8fc7\u70b9\u51fb\u80cc\u666f\u7684\u4efb\u4e00\u4f4d\u7f6e\uff0c\u8fdb\u884c\u9000\u51fa\u3002"]]]],meta:{category:"Components",type:"Navigation",title:"Popover",subtitle:"\u6c14\u6ce1",filename:"components/popover/index.zh-CN.md"},api:["section",["h2","API ( \u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native )"],["h3","Popover"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","visible (",["code","web only"],")"],["td","\u5f53\u524d\u663e\u9690\u72b6\u6001"],["td","Boolean"],["td","false"]],["tr",["td","onVisibleChange (",["code","web only"],")"],["td","\u5f53\u663e\u9690\u72b6\u6001\u53d8\u5316\u65f6\u56de\u8c03\u51fd\u6570"],["td","(visible: bool): void"],["td","-"]],["tr",["td","placement (",["code","web only"],")"],["td","enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'}"],["td","String"],["td","'bottomRight'"]],["tr",["td","popupAlign (",["code","web only"],")"],["td","\u7528\u4e8e\u8bbe\u7f6e\u504f\u79fb\u91cf\u7b49\u3001\u4f1a\u88ab\u5408\u5e76\u5230 placement \u7684\u8bbe\u7f6e\u4e2d\uff0c\u53ef\u9009\u503c\u4e3a ",["a",{title:null,href:"https://github.com/yiminghe/dom-align"},"dom-align"]," \u7684",["code","alignConfig"],"\u914d\u7f6e\uff08 points \u8bbe\u7f6e\u7528 placement \u4ee3\u66ff\uff09"],["td","Object"],["td","{ overflow: { adjustY: 0, adjustX: 0 } } \u7981\u6389\u4f4d\u7f6e\u81ea\u52a8\u9002\u5e94"]],["tr",["td","mask (",["code","web only"],")"],["td","\u662f\u5426\u663e\u793a\u906e\u7f69\u80cc\u666f\u5c42"],["td","Boolean"],["td","false"]],["tr",["td","overlay"],["td","\u5f39\u51fa\u5c42\u5185\u5bb9"],["td","React.node"],["td","-"]],["tr",["td","onSelect"],["td","\u9009\u4e2d\u67d0\u9009\u9879\u65f6\u7684\u56de\u8c03\u51fd\u6570"],["td","(node: any, index?: number): void"],["td","-"]],["tr",["td","style"],["td","menu \u6837\u5f0f"],["td","Object"],["td","-"]],["tr",["td","triggerStyle (",["code","rn only"],")"],["td","\u89e6\u53d1\u5143\u7d20\u5916\u56f4\u5bb9\u5668\u6837\u5f0f"],["td","Object"],["td","-"]],["tr",["td","overlayStyle (",["code","rn only"],")"],["td","\u5f39\u51fa\u5c42\u5916\u56f4\u5bb9\u5668\u6837\u5f0f"],["td","Object"],["td","-"]],["tr",["td","contextStyle (",["code","rn only"],")"],["td","\u6700\u5916\u56f4\u5bb9\u5668\u6837\u5f0f"],["td","Object"],["td","-"]],["tr",["td","renderOverlayComponent (",["code","rn only"],")"],["td","\u81ea\u5b9a\u4e49\u5f39\u51fa\u5c42\u7684\u5916\u56f4\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u662f",["code","ScrollView"],"\uff0c\u793a\u4f8b",["code","(opts) => <Cus>{opts}</Cus>"]],["td","Function(opts)"],["td","-"]],["tr",["td","name (",["code","rn only"],")"],["td","menu \u540d\u5b57\uff0c\u7528\u4e8e\u624b\u52a8\u89e6\u53d1\u5f00\u5173 menu"],["td","String"],["td","-"]],["tr",["td","openMenu / closeMenu / toggleMenu(",["code","rn only"],")"],["td","\u7528\u4e8e\u624b\u52a8\u5f00\u5173 menu\uff0c\u53c2\u6570\u4e3a\u4e0a\u8fb9 menu \u7684 name. \u4f7f\u7528\u793a\u4f8b\u89c1 demo"],["td","Function(name)"],["td","-"]]]],["h3","Popover.Item"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","children"],["td","\u8282\u70b9\u5185\u5bb9"],["td","String/React.node"],["td","-"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","Boolean"],["td","false"]],["tr",["td","style"],["td","item \u6837\u5f0f"],["td","Object"],["td","-"]],["tr",["td","icon (",["code","web only"],")"],["td","icon"],["td","React.Node"],["td","-"]],["tr",["td","value (",["code","rn only"],")"],["td","\u53ef\u4f5c\u4e3a\u9009\u4e2d\u7684\u6761\u76eeID"],["td","string/number"],["td","-"]]]]]}}});