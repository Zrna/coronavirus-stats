(this["webpackJsonpcoronavirus-stats"]=this["webpackJsonpcoronavirus-stats"]||[]).push([[0],{121:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(17),o=a.n(c),l=a(13),s=a(80),u=a.n(s),i=a(85),d=a(81),m=function(e){if(void 0!==e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},p=function(e){if(void 0!==e){var t=e.slice(0,4),a=e.slice(5,7),r=e.slice(8,10);return"".concat(a,"/").concat(r,"/").concat(t)}},f=function(e){if(void 0!==e){var t=e.slice(11,13),a=e.slice(14,16),r=e.slice(17,19);return"".concat(t,":").concat(a,":").concat(r)}},E=function(e){if(void 0!==e.history){var t=Object.keys(e.history).map((function(t){return{date:t,number:e.history[t]}}));t=t.sort((function(e,t){return new Date(e.date)-new Date(t.date)}));var a=(t=Object.values(t)).map((function(e){return e.date})),r=t.map((function(e){return e.number}));return[t,a,r]}},y=function(e,t,a){return(100*t/e).toFixed(a)+"%"},b=(a(40),a(121),Object(l.b)((function(e){return{error:e.apiData.error,data:e.apiData.data,numberOfConfirmed:m(e.apiData.numberOfConfirmed),numberOfDeaths:m(e.apiData.numberOfDeaths),numberOfRecovered:m(e.apiData.numberOfRecovered),numberOfCurrentlySick:m(e.apiData.numberOfCurrentlySick),lastUpdated:e.apiData.lastUpdated,lastUpdatedDate:p(e.apiData.lastUpdated),lastUpdatedTime:f(e.apiData.lastUpdated),countryConfirmedDataSum:e.apiData.countryConfirmedDataSum,countryDeathsDataSum:e.apiData.countryDeathsDataSum,countryRecoveredDataSum:e.apiData.countryRecoveredDataSum}}),(function(e){return{selectedCountryDispatchToStore:function(t){return e(function(e){return{type:"SELECTED_COUNTRY",selectedCountry:e}}(t))},getSelectedCountryPopulation:function(t){return e(function(e){return{type:"GET_SELECTED_COUNTRY_POPULATION_DATA_REQUEST",selectedCountryCode:e}}(t))}}}))((function(e){var t=Object(r.useState)(),a=Object(i.a)(t,2),c=a[0],o=a[1];e.countryConfirmedDataSum&&void 0===c&&o(e.countryConfirmedDataSum);return n.a.createElement("div",{className:"col sidebar"},n.a.createElement("div",{className:"sum-data"},n.a.createElement("h2",null,"Corona Virus Statistics"),e.error?n.a.createElement("p",{style:{color:"#e60036"}},e.error):null,n.a.createElement("div",{className:"cards-row"},n.a.createElement("p",{className:"card confirmed"},e.data&&0!==e.data.confirmed.latest?n.a.createElement("span",null,e.numberOfConfirmed):n.a.createElement("span",null,"No data")," confirmed"),n.a.createElement("p",{className:"card deaths"},e.data&&0!==e.data.deaths.latest?n.a.createElement("span",null,e.numberOfDeaths):n.a.createElement("span",null,"No data")," deaths")),n.a.createElement("div",{className:"cards-row"},n.a.createElement("p",{className:"card recovered"},e.data&&0!==e.data.recovered.latest?n.a.createElement("span",null,e.numberOfRecovered):n.a.createElement("span",null,"No data")," recovered"),n.a.createElement("p",{className:"card currently-sick"},e.data&&0!==e.numberOfCurrentlySick?n.a.createElement("span",null,e.numberOfCurrentlySick):n.a.createElement("span",null,"No data")," currently sick")),e.lastUpdatedDate&&e.lastUpdatedTime?n.a.createElement("p",null,"Last update ",n.a.createElement("span",{id:"last-updated-date",title:"DD/MM/YYYY"},e.lastUpdatedDate)," in ",n.a.createElement("span",{id:"last-updated-time",title:"HH/MM/SS"},e.lastUpdatedTime),"."):null),n.a.createElement("div",{className:"input-search"},n.a.createElement("input",{type:"search",placeholder:"Type country name...",autoFocus:!0,onChange:function(t){var a=t.target.value.toLowerCase(),r=e.countryConfirmedDataSum.filter((function(e){return e.country.toLowerCase().includes(a)}));o(r)}})),n.a.createElement("div",{className:"country-list"},c&&c.map((function(t,a){return n.a.createElement("div",{key:a,className:"country-row",onClick:(r=t,function(){console.log("selected country",r),e.getSelectedCountryPopulation(r.country_code),e.selectedCountryDispatchToStore(r),/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&d.scroller.scrollTo("main-content",{duration:1e3,smooth:!0,offset:50})}),title:"".concat(m(t.latest)," confirmed cases in ").concat(t.country)},n.a.createElement("img",{src:"https://www.countryflags.io/".concat(t.country_code,"/flat/32.png"),alt:t.country_code}),n.a.createElement("p",null,n.a.createElement("strong",null,t.country),n.a.createElement("span",{className:"numbers"},m(t.latest))));var r}))))}))),v=a(82),h=a.n(v),g=function(e){var t=e.cardText.includes("24h");return n.a.createElement("div",{className:"card"},void 0!==e.cardNumber?n.a.createElement("p",{className:"country-card-number"},t?"+":null,m(e.cardNumber),e.totalNumber?n.a.createElement("span",{className:"percentage",title:e.percentageDescription?"".concat(y(e.totalNumber,e.cardNumber,2)," of total cases"):null},"(",n.a.createElement("span",{className:"".concat(e.cardName,"-color"),style:{margin:"0 2px"}},t?"+":null,y(e.totalNumber,e.cardNumber,2)),")"):null):n.a.createElement("p",{className:"country-card-number"},"no data"),e.cardText,e.smallText?n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("small",null,e.smallText)):null)},C=a(18),N=function(e){var t={labels:e.labels,datasets:[{backgroundColor:["#3333ff","#571aab","#4fc974"],hoverBackgroundColor:["#0000cc","#2d0d59","#2a8946"],data:[e.data.currentlySick?e.data.currentlySick:null,e.data.deaths?e.data.deaths.latest:null,e.data.recovered?e.data.recovered.latest:null]}]},a={title:{display:!0,text:e.title,fontSize:20,fontColor:"#ccc",fontStyle:"normal"},legend:{display:!0,position:"top"}},r=1===e.data.length&&0===e.data[0];return n.a.createElement(n.a.Fragment,null,r?null:n.a.createElement(C.c,{data:t,width:40,height:10,options:a}))},D=function(e){var t={labels:e.labels,datasets:[{fill:!0,lineTension:.5,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:2,pointRadius:2,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:e.borderColor,data:e.data}]},a={title:{display:!0,text:e.title,fontSize:25,fontColor:"#ccc",fontStyle:"normal"},legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,precision:0}}]}},r=1===e.data.length&&0===e.data[0];return n.a.createElement(n.a.Fragment,null,r?null:n.a.createElement(C.b,{data:t,width:40,height:20,options:a}))},O=function(e){var t={labels:e.labels,datasets:[{backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:1,hoverBackgroundColor:e.borderColor,hoverBorderColor:e.borderColor,data:e.data}]},a={title:{display:!0,text:e.title,fontSize:20,fontColor:"#ccc",fontStyle:"normal"},legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,precision:0}}]}},r=1===e.data.length&&0===e.data[0];return n.a.createElement(n.a.Fragment,null,r?null:n.a.createElement(C.a,{data:t,width:40,height:20,options:a}))},T=a(84),S=function(){return n.a.createElement("div",{id:"credits"},n.a.createElement("p",{"data-tip":"custom show","data-event":"click focus"},"Credits"),n.a.createElement(T.a,{globalEventOff:"click",place:"left",type:"light",effect:"solid",clickable:!0},n.a.createElement("p",null,"Application made by ",n.a.createElement("a",{href:"https://www.lukazrnic.com",target:"_blank",rel:"noopener noreferrer"},"Luka Zrnic")),n.a.createElement("p",null,"Source code: ",n.a.createElement("a",{href:"https://github.com/Zrna/coronavirus-stats",target:"_blank",rel:"noopener noreferrer"},"coronavirus-stats")),n.a.createElement("p",null,"Data source: ",n.a.createElement("a",{href:"https://github.com/ExpDev07/coronavirus-tracker-api",target:"_blank",rel:"noopener noreferrer"},"coronavirus-tracker-api"))))},_=(a(231),Object(l.b)((function(e){return{data:e.apiData.data,selectedCountry:e.selectedCountry,selectedCountryPopulation:e.countryPopulation.selectedCountryPopulation,country:e.selectedCountry.country,latest:m(e.selectedCountry.latest)}}),null)((function(e){var t,a,r,c,o,l,s,u,i,d,m,p,f,b,v;if(e.country){t=e.data.confirmed.locations.find((function(t){return t.country===e.country})),a=e.data.deaths.locations.find((function(t){return t.country===e.country})),r=e.data.recovered.locations.find((function(t){return t.country===e.country}));var C=E(t);o=C[1],l=C[2];var T=E(a);if(s=T[1],u=T[2],void 0===r)r=0,i=["00/00/00"],d=[0],c=t.latest-a.latest-0;else{var _=E(r);i=_[1],d=_[2],c=t.latest-a.latest-r.latest}b=(v=l).map((function(e,t){return e-v[t-1]})),m=l[l.length-1]-l[l.length-2],p=u[u.length-1]-u[u.length-2],f=d[d.length-1]-d[d.length-2]}return n.a.createElement("div",{className:"col main-content",name:"main-content"},n.a.createElement(S,null),e.country?n.a.createElement(n.a.Fragment,null,e.selectedCountry.country_code?n.a.createElement("img",{style:{verticalAlign:"sub",marginRight:"20px"},src:"https://www.countryflags.io/".concat(e.selectedCountry.country_code,"/flat/32.png"),alt:e.selectedCountry.country_code}):null,n.a.createElement("h1",{style:{display:"inline-block"}},e.country)):null,e.selectedCountryPopulation&&e.selectedCountry&&e.country&&e.selectedCountry.latest>0?n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"country-cards"},n.a.createElement(g,{cardNumber:t.latest,cardText:"Total cases"}),n.a.createElement("div",{className:"arrow-separator"}),n.a.createElement(g,{cardName:"confirmed",cardNumber:m,cardText:"last 24h",totalNumber:t.latest,percentageDescription:!0})),n.a.createElement("div",{className:"country-cards"},n.a.createElement(g,{cardName:"deaths",cardNumber:a.latest,cardText:"Deaths",totalNumber:t.latest,percentageDescription:!0}),n.a.createElement("div",{className:"arrow-separator"}),n.a.createElement(g,{cardName:"deaths",cardNumber:p,cardText:"last 24h",totalNumber:t.latest})),n.a.createElement("div",{className:"country-cards"},n.a.createElement(g,{cardName:"recovered",cardNumber:r.latest,cardText:"Recovered",totalNumber:t.latest,percentageDescription:!0}),n.a.createElement("div",{className:"arrow-separator"}),n.a.createElement(g,{cardName:"recovered",cardNumber:f,cardText:"last 24h",totalNumber:t.latest})),n.a.createElement("div",{className:"country-cards"},n.a.createElement(g,{cardName:"currently-sick",cardNumber:c,cardText:"Currently sick",totalNumber:t.latest,percentageDescription:!0})),n.a.createElement("div",{className:"country-cards"},n.a.createElement(g,{cardName:"country-population",cardNumber:e.selectedCountryPopulation,cardText:"Country population"}),n.a.createElement("div",{className:"arrow-separator"}),n.a.createElement(g,{cardName:"country-population-percentage",cardNumber:y(e.selectedCountryPopulation,t.latest,3),cardText:"population infected",smallText:"(all cases)"}))):n.a.createElement((function(){return e.selectedCountry.latest<=0?n.a.createElement("p",{className:"text-in-center"},"No data available"):e.selectedCountry.country?e.selectedCountryPopulation?void 0:null:n.a.createElement("p",{className:"text-in-center"},"Select country from the country list")}),null),t&&a&&e.selectedCountry.latest>0?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(N,{labels:["Currently sick","Deaths","Recovered"],data:{currentlySick:c,deaths:a,recovered:r},title:"Total data"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement(D,{labels:o,data:l,title:"Total cases",borderColor:"#e60036",backgroundColor:"rgba(230, 0, 54, 0.4)"})),n.a.createElement("div",{className:"col-2"},n.a.createElement(O,{labels:o,data:b,title:"New cases per day",borderColor:"#e60036",backgroundColor:"rgba(230, 0, 54, 0.4)"}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement(D,{labels:s,data:u,title:"Total deaths",borderColor:"#571aab",backgroundColor:"rgb(87, 26, 171, 0.4)"})),n.a.createElement("div",{className:"col-2"},n.a.createElement(D,{labels:i,data:d,title:"Total recovered",borderColor:"#4fc974",backgroundColor:"rgb(79, 201, 116, 0.4)"})))):null,n.a.createElement(h.a,{className:"back-to-top",showAt:200,speed:1500,easing:"easeOutSine"},n.a.createElement("span",null,"\u2191 go to top")))})));var k=Object(l.b)((function(e){return{loading:e.apiData.loading}}),(function(e){return{getApiData:function(){return e({type:"GET_API_DATA_REQUEST"})}}}))((function(e){var t=e.getApiData;return Object(r.useEffect)((function(){t()}),[t]),n.a.createElement("div",{className:"flex-grid"},e.loading?n.a.createElement("div",{className:"loader-center"},n.a.createElement(u.a,{type:"MutatingDots",color:"#4fc974",height:100,width:100})):n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement(_,null)))}));a(232),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(9),A=a(86),x=a(8),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0,a=Object(x.a)({},e);return"GET_API_DATA_SUCCESS"===t.type?Object(x.a)({},a,{loading:!1,data:t.data[0],numberOfConfirmed:t.data[0].latest.confirmed,numberOfDeaths:t.data[0].latest.deaths,numberOfRecovered:t.data[0].latest.recovered,numberOfCurrentlySick:t.data[0].latest.confirmed-t.data[0].latest.recovered-t.data[0].latest.deaths,lastUpdated:t.data[0].confirmed.last_updated,countryConfirmedDataSum:t.data[1][0].countryConfirmedDataSum,countryDeathsDataSum:t.data[1][0].countryDeathsDataSum,countryRecoveredDataSum:t.data[1][0].countryRecoveredDataSum}):"GET_API_DATA_ERROR"===t.type?Object(x.a)({},a,{error:t.error}):a},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object(x.a)({},e);return"SELECTED_COUNTRY"===t.type?Object(x.a)({},a,{country:t.selectedCountry.country,country_code:t.selectedCountry.country_code,latest:t.selectedCountry.latest}):a},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object(x.a)({},e);return"GET_SELECTED_COUNTRY_POPULATION_DATA_SUCCESS"===t.type?Object(x.a)({},a,{selectedCountryPopulation:t.data.country_population}):"GET_SELECTED_COUNTRY_POPULATION_DATA_ERROR"===t.type?Object(x.a)({},a,{error:t.error}):a},j=Object(w.c)({apiData:R,selectedCountry:P,countryPopulation:U}),L=a(6),I=a.n(L),B=a(7),G=I.a.mark(M),Y=I.a.mark(W);function F(e,t){var a;return"confirmed"===t&&(a=e.confirmed.locations),"deaths"===t&&(a=e.deaths.locations),"recovered"===t&&(a=e.recovered.locations),a.reduce((function(e,t){var a=e.find((function(e){return e.country===t.country}));return a?(a.latest+=t.latest,a.province="",Object.keys(a.history).map((function(e){return a.history[e]+=t.history[e]}))):e.push(t),e}),[]).sort((function(e,t){return parseFloat(t.latest)-parseFloat(e.latest)}))}function M(){var e;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://coronavirus-tracker-api.herokuapp.com/all").then((function(e){return e.json()})).then((function(e){return console.log("data",e),[e,[{countryConfirmedDataSum:F(e,"confirmed"),countryDeathsDataSum:F(e,"deaths"),countryRecoveredDataSum:F(e,"recovered")}]]})).catch((function(e){return console.log(e)}));case 3:return e=t.sent,t.next=6,Object(B.c)({type:"GET_API_DATA_SUCCESS",data:e});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log("getApiData saga Error: ",t.t0),t.next=13,Object(B.c)({type:"GET_API_DATA_ERROR",error:"Something went wrong while retrieving API data."});case 13:case"end":return t.stop()}}),G,null,[[0,8]])}function W(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)("GET_API_DATA_REQUEST",M);case 2:case"end":return e.stop()}}),Y)}var z=I.a.mark(Q),H=I.a.mark(X);function Q(e){var t;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=".concat(e.selectedCountryCode)).then((function(e){return e.json()})).then((function(e){return console.log("population data",e.locations[0]),e})).catch((function(e){return console.log(e)}));case 3:return t=a.sent,a.next=6,Object(B.c)({type:"GET_SELECTED_COUNTRY_POPULATION_DATA_SUCCESS",data:t.locations[0]});case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),console.log("getApiData saga Error: ",a.t0),a.next=13,Object(B.c)({type:"GET_SELECTED_COUNTRY_POPULATION_DATA_ERROR",error:"Something went wrong while retrieving API data."});case 13:case"end":return a.stop()}}),z,null,[[0,8]])}function X(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)("GET_SELECTED_COUNTRY_POPULATION_DATA_REQUEST",Q);case 2:case"end":return e.stop()}}),H)}var Z=I.a.mark(V);function V(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([Object(B.b)(W),Object(B.b)(X)]);case 2:case"end":return e.stop()}}),Z)}var J=Object(A.a)(),K=Object(w.e)(j,Object(w.d)(Object(w.a)(J),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));J.run(V);var $=K;o.a.render(n.a.createElement(l.a,{store:$},n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,a){},87:function(e,t,a){e.exports=a(234)}},[[87,1,2]]]);
//# sourceMappingURL=main.c77de43b.chunk.js.map