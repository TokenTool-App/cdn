(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-92368878"],{"828d":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return u})),n("99af");var o=n("b775"),a=function(e,t){return Object(o.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://vaulted-immense-chartreuse.glitch.me/?chainId=".concat(e,"&address=").concat(t))})},r=function(e,t,n,a){return Object(o.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://api.yshyqxx.com/api/v1/klines?symbol=".concat(e,"&interval=").concat(t,"&startTime=").concat(n,"&endTime=").concat(a))})},i=function(e){return Object(o.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent(e)})},c=function(e){return Object(o.a)({method:"GET",url:"/api/v1/price",params:{chain:e}})},s=function(e,t,n,a){return Object(o.a)({method:"GET",url:"https://api.covalenthq.com/v1/1/tokens/".concat(t,"/token_holders/?block-height=").concat(a,"&page-number=0&page-size=").concat(n,"&key=ckey_fdf13a80f62d428cbe85ae4bb16")})},u=function(e){return Object(o.a)({method:"GET",url:"/api/v1/gas_price",params:{chain:e}})}},c074:function(e,t,n){"use strict";n.r(t);var o=n("b85c"),a=n("1da1"),r=(n("c740"),n("96cf"),n("7be8")),i=n.n(r),c=n("828d"),s=n("05b3"),u=n("b893"),l=n("901e"),d=n.n(l),b={name:"Documentation",components:{GridLayout:i.a.GridLayout,GridItem:i.a.GridItem},data:function(){return{loading:{loadMarket:!1},layout:[],websocketObj:null,wsHeartFlag:!1,reconnectTime:0,maxConnect:100,wsUrl:"wss://stream.yshyqxx.com/stream",apiUrl:"https://fxhapi.feixiaohao.cc/public/v1/ticker?limit=300",colNum:12}},methods:{initWebsocket:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n,a,r,i,s,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.loadMarket=!0,t.next=3,Object(c.d)(e.apiUrl);case 3:if(n=t.sent,e.loading.loadMarket=!1,a=2,r=2,n.data){i=Object(o.a)(n.data);try{for(i.s();!(s=i.n()).done;)"BTC"===(l=s.value).symbol?(a=8,r=6):"ETH"===l.symbol?(a=4,r=4):(l.symbol,a=2,r=2),e.layout.push({x:2*e.layout.length%(e.colNum||12),y:e.layout.length+(e.colNum||12),w:a,h:r,i:l.id,symbol:l.symbol,params:Object(u.j)(l.symbol)+"usdt@miniTicker@3000ms",price:l.price_usd,percent:l.percent_change_24h>0?"+"+l.percent_change_24h:l.percent_change_24h})}catch(e){i.e(e)}finally{i.f()}}e.webSocketObj=new WebSocket(e.wsUrl),e.webSocketObj.onmessage=e.onMessage,e.webSocketObj.onopen=e.onOpen,e.webSocketObj.onerror=e.onError,e.webSocketObj.onclose=e.onClose;case 13:case"end":return t.stop()}}),t)})))()},getColor:function(e){return e>=-.1&&e<=.1?"background: rgb(244, 244, 244)":e<-.1&&e>=-5?"background: rgba(243, 57, 57, 0.5)":e<-5&&e>=-10?"background: rgba(243, 57, 57, 0.75)":e<-10&&e>=-20?"background: rgba(243, 57, 57, 0.9)":e<-20?"background: rgba(243, 57, 57, 1)":e>.1&&e<=5?"background: rgba(0, 153, 51, 0.25)":e>5&&e<=10?"background: rgba(0, 153, 51, 0.5)":e>10&&e<=15?"background: rgba(0, 153, 51, 0.75)":e>15?"background: rgba(0, 153, 51, 1)":void 0},onOpen:function(){if(1===this.webSocketObj.readyState){this.wsHeartFlag=!0;var e={id:1,method:"SUBSCRIBE",params:s.i};this.webSocketObj.send(JSON.stringify(e)),this.reconnectTime=0}},timingHeart:function(){var e=this;if(this.wsHeartFlag){var t={id:1,method:"SUBSCRIBE",params:s.i};this.webSocketObj.send(JSON.stringify(t))}this.wsHeart=setTimeout((function(){e.timingHeart()}),1e5)},onMessage:function(e){if(e.data){var t=JSON.parse(e.data);if(t.stream){var n=this.layout.findIndex((function(e){return e.params===t.stream}));n>-1&&(this.layout[n].price=new d.a(t.data.c).toNumber(),this.layout[n].percent=new d.a(t.data.c).minus(t.data.o).dividedBy(t.data.o).multipliedBy(100).decimalPlaces(2).toNumber())}}},onError:function(){var e=this;clearTimeout(this.wsHeart),this.wsHeartFlag=!1,this.reconnectTime<=this.maxConnect?setTimeout((function(){e.onOpen(),e.reconnectTime+=1}),5e3):this.onClose()},onClose:function(){this.wsHeartFlag=!1,this.webSocketObj&&this.webSocketObj.close&&this.webSocketObj.close()},getFont:function(e,t){return 1===e?"BTC"===t?"font-size: 64px;":"ETH"===t?"font-size: 48px;":"font-size: 16px;":2===e?"BTC"===t?"font-size: 36px;":"ETH"===t?"font-size: 28px;":"font-size: 12px;":"BTC"===t?"font-size: 24px;":"ETH"===t?"font-size: 20px;":"font-size: 12px;"}},created:function(){this.initWebsocket()},destroyed:function(){this.onClose()}},m=b,p=(n("d98c"),n("2877")),f=Object(p.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.loadMarket,expression:"loading.loadMarket"}],staticClass:"container"},[n("el-tag",{staticClass:"info",attrs:{type:"danger",size:"medium",effect:"dark"}},[e._v("TokenTool.App")]),n("grid-layout",{attrs:{layout:e.layout,"col-num":e.colNum,"row-height":30,"is-draggable":!0,"is-resizable":!1,"is-mirrored":!1,"vertical-compact":!0,"use-css-transforms":!0,margin:[2,2]},on:{"update:layout":function(t){e.layout=t}}},e._l(e.layout,(function(t){return n("grid-item",{key:t.i,attrs:{isResizable:!1,x:t.x,y:t.y,w:t.w,h:t.h,i:t.i}},[n("div",{staticClass:"gridItem",style:e.getColor(t.percent)},[n("span",{style:e.getFont(1,t.symbol)},[e._v(e._s(t.symbol))]),n("span",{staticClass:"price",style:e.getFont(2,t.symbol)},[e._v("$"+e._s(t.price))]),n("span",{staticClass:"percent",style:e.getFont(3,t.symbol)},[e._v(e._s(t.percent)+"%")])])])})),1)],1)}),[],!1,null,"6c47f26b",null);t.default=f.exports},d98c:function(e,t,n){"use strict";n("edf1")},edf1:function(e,t,n){}}]);