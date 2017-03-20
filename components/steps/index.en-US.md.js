webpackJsonp([82,157],{541:function(t,s){t.exports={content:["section",["p","Steps is typically used for displaying the progress of a task, or guiding users through the steps of a complex flow."],["h3","Rules"],["ul",["li",["p","Suitable for step-by-step and long-lasting task, e.g. the process of transfer accounts. If the task is continuous and short, such as opening a page, component ",["code","Progress"]," will fit better."]],["li",["p","When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier, e.g. register new account."]]]],meta:{category:"Components",type:"Data Display",cols:1,title:"Steps",filename:"components/steps/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Steps</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>First<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Second<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Third<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Steps</span><span class="token punctuation">></span></span>'},["code",'<Steps>\n  <Step title="First" />\n  <Step title="Second" />\n  <Step title="Third" />\n</Steps>']],["h3","Steps ( Support Platform\uff1aWEB\u3001React-Native )"],["p","The Steps container."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","current"],["td","To set the current step, counting from 0. You can overwrite this state by using ",["code","status"]," of ",["code","Step"]],["td","number"],["td",["code","0"]]],["tr",["td","size"],["td","To specify the size of the step bar, a smaller size can be achieved by setting it to ",["code","small"]],["td","string"],["td","-"]],["tr",["td","direction"],["td","To specify the direction of the step bar"],["td","Enum { 'vertical', 'horizontal' }"],["td",["code","vertical"]]]]],["h3","Steps.Step"],["p","A single step used as child component of the Step."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","status"],["td","To specify the status. It will be automatically set by ",["code","current"]," of ",["code","Steps"]," if not configured."],["td","Enum { 'wait', 'process', 'finish', 'error' }"],["td",["code","wait"]]],["tr",["td","title"],["td","Title of the step"],["td","React.Element"],["td","-"]],["tr",["td","description"],["td","Detail of the step(optional property)"],["td","React.Element"],["td","-"]],["tr",["td","icon"],["td","Icon of the step(optional property)"],["td","string/React.Element"],["td","-"]]]]]}}});