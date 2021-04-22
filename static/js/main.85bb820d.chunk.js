(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{16:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(6),r=a.n(i),c=(a(16),a(5)),d=a.n(c),o=a(7),l=a(3),u=a(8),h=a(9),m=a(2),j=a(11),p=a(10),g=a(0);var b=function(e){return Object(g.jsxs)("div",{className:"weather-details__item",children:[Object(g.jsx)("p",{children:e.icon}),Object(g.jsx)("p",{children:e.name}),Object(g.jsx)("p",{children:e.value})]})};var f=function(e){return Object(g.jsxs)("div",{className:e.data.openEditor?"settings open":"settings",children:[Object(g.jsxs)("div",{className:e.data.openEditor?"settings__menu open":"settings__menu",children:[Object(g.jsx)("h2",{children:"Settings"}),Object(g.jsxs)("div",{className:"settings__menu-item",children:[Object(g.jsx)("p",{children:"Celsius"}),Object(g.jsxs)("label",{className:"settings__menu-item-inner",children:[Object(g.jsx)("input",{type:"checkbox",checked:e.data.changeTemp,onChange:function(){console.log(e.data.temperature),e.changeData({changeTemp:!e.data.changeTemp}),console.log(e.data.changeTemp),e.data.changeTemp&&-1===e.data.temperature.toString().split("").indexOf("C")?e.changeData({temperature:Math.round(5*(parseFloat(e.data.temperature)-32)/9)+"\xb0C",temperatureMax:Math.round(5*(parseFloat(e.data.temperatureMax)-32)/9)+"\xb0C",temperatureMin:Math.round(5*(parseFloat(e.data.temperatureMin)-32)/9)+"\xb0C",feels_like:Math.round(5*(parseFloat(e.data.feels_like)-32)/9)+"\xb0C"}):e.data.changeTemp||e.changeData({temperature:Math.round(9*parseFloat(e.data.temperature)/5+32)+"\xb0F",temperatureMax:Math.round(9*parseFloat(e.data.temperatureMax)/5+32)+"\xb0F",temperatureMin:Math.round(9*parseFloat(e.data.temperatureMin)/5+32)+"\xb0F",feels_like:Math.round(9*parseFloat(e.data.feels_like)/5+32)+"\xb0F"})}}),Object(g.jsx)("div",{children:Object(g.jsx)("span",{})})]}),Object(g.jsx)("p",{children:"Fahrenheit"})]}),Object(g.jsxs)("div",{className:"settings__menu-item",children:[Object(g.jsx)("p",{children:"hPa"}),Object(g.jsxs)("label",{className:"settings__menu-item-inner",children:[Object(g.jsx)("input",{type:"checkbox",checked:e.data.changePress,onChange:function(){console.log(e.data.changePress),console.log(e.data.pressure),e.changeData({changePress:!e.data.changePress}),e.data.changePress?e.changeData({pressure:Math.round(parseFloat(e.data.pressure)/.75)+" hPa"}):e.data.changePress||e.changeData({pressure:Math.round(.75*parseFloat(e.data.pressure))+" mmHg"})}}),Object(g.jsx)("div",{children:Object(g.jsx)("span",{})})]}),Object(g.jsx)("p",{children:"mmHg"})]}),Object(g.jsxs)("div",{className:"settings__menu-item",children:[Object(g.jsx)("p",{children:"m/s"}),Object(g.jsxs)("label",{className:"settings__menu-item-inner",children:[Object(g.jsx)("input",{type:"checkbox",checked:e.data.changeWindSpeed,onChange:function(){console.log(e.data.changeWindSpeed),console.log(e.data.windSpeed),e.changeData({changeWindSpeed:!e.data.changeWindSpeed}),e.data.changeWindSpeed?e.changeData({windSpeed:(parseFloat(e.data.windSpeed,2)/3.6).toFixed(1)+" m/s"}):e.data.changeWindSpeed||e.changeData({windSpeed:(3.6*parseFloat(e.data.windSpeed,2)).toFixed(1)+" km/h"})}}),Object(g.jsx)("div",{children:Object(g.jsx)("span",{})})]}),Object(g.jsx)("p",{children:"km/h"})]})]}),Object(g.jsxs)("label",{className:"settings__button",children:[Object(g.jsx)("input",{type:"checkbox",onClick:function(){return e.changeData({openEditor:!e.data.openEditor})},checked:!!e.data.openEditor}),Object(g.jsx)("div",{className:"settings__button-design-item ",children:Object(g.jsx)("i",{className:"fas fa-cog"})})]})]})};var O=function(e){var t=["sunday","monday","tuesday","wednesday","thusday","friday","saturday"],a=Object(g.jsx)("span",{children:function(e,t){var a=new Date(new Date(e).getTime()+6e4*new Date(e).getTimezoneOffset()+1e3*t).getHours();return a<10&&(a="0"+a),a}(e.time,e.timezone)+":"+function(e,t){var a=new Date(new Date(e).getTime()+6e4*new Date(e).getTimezoneOffset()+1e3*t).getMinutes();return a<10&&(a="0"+a),a}(e.time,e.timezone)}),n=Object(g.jsx)("span",{children:function(e,a){var n=new Date(new Date(e).getTime()+6e4*new Date(e).getTimezoneOffset()+1e3*a).getDay();return n=t[n]}(e.time,e.timezone)+" "+function(e,t){var a=new Date(new Date(e).getTime()+6e4*new Date(e).getTimezoneOffset()+1e3*t).getDate();return a<10&&(a="0"+a),a}(e.time,e.timezone)+"."+function(e,t){var a=new Date(new Date(e).getTime()+6e4*new Date(e).getTimezoneOffset()+1e3*t).getMonth()+1;return a<10&&(a="0"+a),a}(e.time,e.timezone)+"."+function(e,t){var a=new Date(new Date(e).getTime()+6e4*new Date(e).getTimezoneOffset()+1e3*t).getFullYear();return a<10&&(a="0"+a),a}(e.time,e.timezone)});return Object(g.jsxs)("div",{className:"weather__time-date",children:[Object(g.jsxs)("p",{children:["the weather is actual on ",a]}),Object(g.jsxs)("p",{children:["today is ",n]})]})},x=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={data:e.data,city:e.data.name,weatherOverview:e.data.weather[0].main,temperature:Math.round(e.data.main.temp-273.15)+"\xb0C",temperatureMax:Math.round(e.data.main.temp_max-273.15)+"\xb0C",temperatureMin:Math.round(e.data.main.temp_min-273.15)+"\xb0C",feels_like:Math.round(e.data.main.feels_like-273.15)+"\xb0C",humidity:e.data.main.humidity,pressure:e.data.main.pressure+" hPa",windSpeed:e.data.wind.speed+" m/s",windDegree:e.data.wind.deg,visibility:e.data.visibility,sunrise:new Date(1e3*e.data.sys.sunrise),sunset:new Date(1e3*e.data.sys.sunset),timezone:e.data.timezone,openEditor:!1,changeTemp:!1,changePress:!1,changeWindSpeed:!1},n.getHours=n.getHours.bind(Object(m.a)(n)),n.getMinutes=n.getMinutes.bind(Object(m.a)(n)),n.setState=n.setState.bind(Object(m.a)(n)),n}return Object(h.a)(a,[{key:"getHours",value:function(e,t){var a=new Date(new Date(e).getTime()+6e4*new Date(e).getTimezoneOffset()+1e3*t).getHours();return a<10&&(a="0"+a),a}},{key:"getMinutes",value:function(e,t){var a=new Date(new Date(e).getTime()+6e4*new Date(e).getTimezoneOffset()+1e3*t).getMinutes();return a<10&&(a="0"+a),a}},{key:"render",value:function(){return console.log(this.state),Object(g.jsxs)("div",{className:"weather",children:[Object(g.jsx)("div",{className:"weather__city",children:Object(g.jsx)("h1",{children:this.state.city})}),Object(g.jsx)("div",{className:"weather__overview",children:Object(g.jsx)("p",{children:this.state.weatherOverview})}),Object(g.jsx)("div",{className:"weather__temperature",children:Object(g.jsx)("h1",{children:this.state.temperature})}),Object(g.jsx)("div",{className:"weather__feels-like",children:Object(g.jsxs)("p",{children:[" ",Object(g.jsx)("i",{className:"fas fa-thermometer-three-quarters"})," feels like: ",this.state.feels_like]})}),Object(g.jsxs)("div",{className:"weather__temperature-h-l",children:[Object(g.jsxs)("p",{children:[" ",Object(g.jsx)("i",{className:"fas fa-temperature-high"})," H: ",this.state.temperatureMax]}),Object(g.jsxs)("p",{children:[" ",Object(g.jsx)("i",{className:"fas fa-temperature-low"})," L: ",this.state.temperatureMin]})]}),Object(g.jsxs)("div",{className:"weather-details",children:[Object(g.jsx)(b,{icon:Object(g.jsx)("i",{className:"fas fa-tint"}),name:"humidity",value:this.state.humidity+" %"}),Object(g.jsx)(b,{icon:Object(g.jsx)("i",{className:"fas fa-tachometer-alt"}),name:"pressure",value:this.state.pressure}),Object(g.jsx)(b,{icon:Object(g.jsx)("i",{className:"fas fa-sun"}),name:"sunrise",value:this.getHours(this.state.sunrise,this.state.timezone)+":"+this.getMinutes(this.state.sunrise,this.state.timezone)}),Object(g.jsx)(b,{icon:Object(g.jsx)("i",{className:"fas fa-wind"}),name:" wind",value:this.state.windSpeed}),Object(g.jsx)(b,{icon:Object(g.jsx)("i",{className:"fas fa-eye"}),name:"visibility",value:Math.floor(this.state.visibility/1e3)+" km"}),Object(g.jsx)(b,{icon:Object(g.jsx)("i",{className:"fas fa-moon"}),name:"sunset",value:this.getHours(this.state.sunset,this.state.timezone)+":"+this.getMinutes(this.state.sunset,this.state.timezone)})]}),Object(g.jsx)(f,{data:this.state,changeData:this.setState}),Object(g.jsx)(O,{time:1e3*this.state.data.dt,timezone:this.state.data.timezone})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log(t.data),console.log(e.data),JSON.stringify(e.data)!==JSON.stringify(t.data)?{data:e.data,city:e.data.name,weatherOverview:e.data.weather[0].main,temperature:Math.round(e.data.main.temp-273.15)+"\xb0C",temperatureMax:Math.round(e.data.main.temp_max-273.15)+"\xb0C",temperatureMin:Math.round(e.data.main.temp_min-273.15)+"\xb0C",feels_like:Math.round(e.data.main.feels_like-273.15)+"\xb0C",humidity:e.data.main.humidity,pressure:e.data.main.pressure+" hPa",windSpeed:e.data.wind.speed+" m/s",windDegree:e.data.wind.deg,visibility:e.data.visibility,sunrise:new Date(1e3*e.data.sys.sunrise),sunset:new Date(1e3*e.data.sys.sunset),timezone:e.data.timezone,openEditor:!1,changeTemp:!1,changePress:!1,changeWindSpeed:!1}:null}}]),a}(s.a.Component);a(19);var w=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),s=a[0],i=a[1];return document.querySelector("search_input")&&document.querySelector("search_input").addEventListener("focusout",(function(){e.getData(s),i(null)})),Object(g.jsx)("div",{className:e.data?"search-form":"search-form start",children:Object(g.jsxs)("div",{className:"search-form__inner",children:[Object(g.jsx)("input",{type:"text",value:s||"",onChange:function(t){return i((a=t).target.value),void("Enter"!=a.key&&13!=a.keyCode&&13!=a.which||(e.getData(s),i(null),a.target.blur()));var a},onKeyPress:function(t){var a;"Enter"!==(a=t).key&&"13"!=a.keyCode&&13!=a.which&&"submit"!=a.key||(e.getData(s),i(null),a.target.blur())},onSubmit:function(){s&&(e.getData(s),i(null))},className:"search_input"}),Object(g.jsxs)("div",{className:"search-form__symbol",children:[Object(g.jsx)("svg",{className:"search-form__cloud",children:Object(g.jsx)("use",{xlinkHref:"#cloud"})}),Object(g.jsx)("svg",{className:"search-form__lens",children:Object(g.jsx)("use",{xlinkHref:"#lens"})})]})]})})};a(20);var v=function(){var e,t=Object(n.useState)(null),a=Object(l.a)(t,2),s=a[0],i=a[1];function r(){return(r=Object(o.a)(d.a.mark((function e(t){var a,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=c3d467c5c628f384f17f356b16b776d1",e.next=3,fetch(a);case 3:if(n=e.sent,console.log(n),!n.ok){e.next=18;break}return e.next=8,n.json();case 8:return s=e.sent,e.t0=i,e.next=12,s;case 12:e.t1=e.sent,(0,e.t0)(e.t1),console.log(new Date(new Date(1e3*s.dt).getTime()+6e4*new Date(1e3*s.dt).getTimezoneOffset()+1e3*s.timezone).getHours()),console.log(s),e.next=19;break;case 18:alert("try another city");case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(s),function(){if(s){var t=s.weather[0].main;console.log("w:",t);var a=new Date(new Date(1e3*s.dt).getTime()+6e4*new Date(1e3*s.dt).getTimezoneOffset()+1e3*s.timezone).getHours();console.log(a);var n=new Date(new Date(1e3*s.sys.sunset).getTime()+6e4*new Date(1e3*s.sys.sunset).getTimezoneOffset()+1e3*s.timezone).getHours();console.log(n);var i=new Date(new Date(1e3*s.sys.sunrise).getTime()+6e4*new Date(1e3*s.sys.sunrise).getTimezoneOffset()+1e3*s.timezone).getHours();if(console.log(i),"Clear"==t&&a<n&&a>i)return e="container clear-sky_day";if("Clear"==t&&(a>n||a<i))return e="container clear-sky_night";if("Clouds"==t||"Snow"==t||"Drizzle"==t||"Rain"==t||"Mist"==t)e="container rainy"}}(),Object(g.jsxs)("div",{className:e,children:[Object(g.jsx)(w,{data:s,getData:function(e){return r.apply(this,arguments)}}),s?Object(g.jsx)(x,{data:s}):""]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),y()}},[[21,1,2]]]);
//# sourceMappingURL=main.85bb820d.chunk.js.map