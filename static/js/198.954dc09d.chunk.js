"use strict";(self.webpackChunkgpt=self.webpackChunkgpt||[]).push([[198],{198:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(439),c=n(791),s=n(184),o=function(){var e=(0,c.useState)({}),t=(0,r.Z)(e,2),n=t[0],o=t[1],a=(0,c.useState)(new Date),i=(0,r.Z)(a,2),h=i[0],l=i[1],u=(0,c.useState)(0),f=(0,r.Z)(u,2),m=f[0],d=f[1];(0,c.useEffect)((function(){fetch("https://api.github.com/repos/Michaelrbacu/reactJS-Website").then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.error("Error fetching repository data:",e)})),fetch("https://api.github.com/repos/Michaelrbacu/reactJS-Website/commits").then((function(e){return e.json()})).then((function(e){if(e.length>0){var t=new Date(e[0].commit.author.date);l(t)}})).catch((function(e){return console.error("Error fetching commit data:",e)}))}),[]);var p=function e(){var t=new Date;d(t-h),requestAnimationFrame(e)};return(0,c.useEffect)((function(){p()}),[h]),(0,s.jsxs)("div",{className:"github-info-container",children:[(0,s.jsx)("h1",{className:"github-info-title",children:"GitHub Repository Information"}),(0,s.jsxs)("p",{className:"black",children:[(0,s.jsx)("strong",{children:"Repository Name:"})," ",n.name]}),(0,s.jsxs)("p",{className:"black",children:[(0,s.jsx)("strong",{children:"Description:"})," ",n.description]}),(0,s.jsxs)("p",{className:"black",children:[(0,s.jsx)("strong",{children:"Owner:"})," ",n.owner&&n.owner.login]}),(0,s.jsxs)("p",{className:"black",children:[(0,s.jsx)("strong",{children:"URL:"})," ",(0,s.jsx)("a",{href:n.html_url,children:n.html_url})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Time Since Last Commit"}),(0,s.jsxs)("p",{className:"black",children:[(0,s.jsx)("strong",{children:"Last Commit:"})," ",function(e){var t=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),r=Math.floor(e%36e5/6e4),c=Math.floor(e%6e4/1e3),s=e%1e3;return"".concat(t," days ").concat(n," hours ").concat(r," minutes ").concat(c," seconds ").concat(s," ms")}(m)]})]})]})}}}]);
//# sourceMappingURL=198.954dc09d.chunk.js.map