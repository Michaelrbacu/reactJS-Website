"use strict";(self.webpackChunkgpt=self.webpackChunkgpt||[]).push([[403],{403:(e,a,s)=>{s.r(a),s.d(a,{default:()=>r});var n=s(2791),t=s(184);const c="4f8e795dcd6dbf7b9f5276bff095ffc1",d="https://api.openweathermap.org/data/2.5/",i=["Greer","London","New York","Paris","Tokyo","Sydney","Dubai","Moscow","Rio de Janeiro"];const r=function(){const[e,a]=(0,n.useState)(""),[s,r]=(0,n.useState)({}),[o,l]=(0,n.useState)(!1),h=()=>{l(!1),fetch("".concat(d,"weather?q=").concat(e,"&appid=").concat(c,"&units=metric")).then((e=>e.json())).then((e=>{r(e),a(""),console.log(e)}))};var m=new Date,u=m.getHours()+":"+m.getMinutes()+":"+m.getSeconds();return(0,t.jsxs)("div",{className:"undefined"!==typeof s.main&&s.main.temp>16?"app warm":"app",children:[(0,t.jsxs)("main",{children:[(0,t.jsxs)("div",{className:"search-box",children:[(0,t.jsxs)("div",{className:"search-bar-container",children:[(0,t.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:e=>{a(e.target.value)},value:e,onKeyDown:e=>{"Enter"===e.key&&h()},onFocus:()=>{l(!0)}}),(0,t.jsx)("div",{className:"header-bar",children:(0,t.jsx)("button",{className:"search-button",onClick:h,children:"Search"})})]}),o&&(0,t.jsx)("div",{className:"dropdown",children:i.map(((e,s)=>(0,t.jsx)("div",{className:"dropdown-item",onClick:()=>(e=>{a(e),l(!1)})(e),children:e},s)))})]}),"undefined"!==typeof s.main?(0,t.jsxs)("div",{className:"top-left",children:[(0,t.jsxs)("div",{className:"location-box",children:[(0,t.jsxs)("div",{className:"location",children:[s.name,", ",s.sys.country]}),(0,t.jsx)("div",{className:"date",children:(e=>{let a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],s=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],t=e.getFullYear();return"".concat(a," ").concat(s," ").concat(n," ").concat(t)})(new Date)+" "+u})]}),(0,t.jsx)("div",{className:"weather-box",children:(0,t.jsxs)("div",{className:"temp",children:[Math.round(s.main.temp),"\xb0C",(0,t.jsx)("br",{}),Math.round(1.8*s.main.temp+32),"\xb0F"]})}),(0,t.jsxs)("div",{className:"bottom-row",children:[(0,t.jsx)("div",{className:"weather-box2",children:(0,t.jsx)("div",{children:s.weather[0].description})}),(0,t.jsx)("div",{className:"weather-box2",children:(0,t.jsxs)("div",{children:["Humidity: ",s.main.humidity," \xa0 \xa0 Cloudiness:"," ",s.clouds.all,"%"]})}),(0,t.jsx)("div",{className:"weather-box2",children:(0,t.jsxs)("div",{children:["Wind Speed: ",s.wind.speed," \xa0 \xa0 Wind Direction:"," ",s.wind.deg]})})]})]}):""]}),(0,t.jsx)("div",{})]})}}}]);
//# sourceMappingURL=403.f3cd562d.chunk.js.map