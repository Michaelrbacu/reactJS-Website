"use strict";(self.webpackChunkgpt=self.webpackChunkgpt||[]).push([[320],{320:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(165),s=n(433),a=n(861),o=n(439),c=n(791),u=n(243),i=n(184),p=function(){var e=(0,c.useState)([{sender:"bot",message:"Hi there! How can I help you?"}]),t=(0,o.Z)(e,2),n=t[0],p=t[1],l=(0,c.useState)(""),d=(0,o.Z)(l,2),h=d[0],m=d[1],f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===h.trim()){e.next=8;break}return p((function(e){return[].concat((0,s.Z)(e),[{sender:"user",message:h}])})),e.next=5,v(h);case 5:n=e.sent,p((function(e){return[].concat((0,s.Z)(e),[{sender:"bot",message:n}])})),m("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,s,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.openai.com/v1/engines/davinci-codex/completions",n={Authorization:"Bearer ".concat("sk-KqoIYoZUMBSsKLtDpyfJT3BlbkFJmodeMoJbO2xCwT7wH1p9"),"Content-Type":"application/json"},s={prompt:t,max_tokens:100},e.prev=3,e.next=6,u.Z.post("https://api.openai.com/v1/engines/davinci-codex/completions",s,{headers:n});case 6:return a=e.sent,console.log("API Response:",a.data),e.abrupt("return",a.data.choices[0].text);case 11:return e.prev=11,e.t0=e.catch(3),console.error("Error processing the user message:",e.t0),console.log("Error response data:",e.t0.response.data),e.abrupt("return","Oops, something went wrong. Please try again later.");case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.jsxs)("div",{className:"chatbot-container",children:[(0,i.jsx)("div",{className:"chat-history",children:n.map((function(e,t){return(0,i.jsx)("div",{className:"message ".concat(e.sender),children:e.message},t)}))}),(0,i.jsxs)("form",{onSubmit:f,className:"user-input",children:[(0,i.jsx)("input",{type:"text",placeholder:"Type your message...",value:h,onChange:function(e){m(e.target.value)}}),(0,i.jsx)("button",{type:"submit",children:"Send"})]})]})}}}]);
//# sourceMappingURL=320.ff81d5ec.chunk.js.map