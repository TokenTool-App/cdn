(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-61b540a4"],{"0fcf":function(t,e,a){"use strict";a("9b2e")},27:function(t,e){},28:function(t,e){},3938:function(t,e,a){},9279:function(t,e,a){"use strict";a("3938")},"9b2e":function(t,e,a){},b429:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"g",(function(){return p})),a.d(e,"e",(function(){return d}));var s=a("c7eb"),n=a("1da1"),r=(a("99af"),a("b775")),i=function(){var t=Object(n.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.a)({method:"GET",url:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(n.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.a)({method:"POST",url:e,data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(n.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.a)({method:"POST",url:e,timeout:2e3,data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:1}}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(n.a)(Object(s.a)().mark((function t(e,a){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.a)({method:"POST",timeout:2e3,url:e,data:a}));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),u=function(){var t=Object(n.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.a)({method:"GET",url:"https://rpclist.cointools.workers.dev/?chainId="+e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(n.a)(Object(s.a)().mark((function t(e,a){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.a)({method:"POST",url:"".concat(e,"/api/v1/bundles"),timeout:2e3,data:{jsonrpc:"2.0",method:"sendBundle",params:[a],id:1}}));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),d=function(){var t=Object(n.a)(Object(s.a)().mark((function t(e,a){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.a)({method:"POST",url:"".concat(e,"/api/v1/bundles"),timeout:2e3,data:{jsonrpc:"2.0",method:"getBundleStatuses",params:[a],id:1}}));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},c881:function(t,e,a){"use strict";a.r(e),a("b0c0");var s=a("c7eb"),n=a("1da1"),r=(a("4de4"),a("caad"),a("d81d"),a("14d9"),a("13d5"),a("b64b"),a("d3b7"),a("07ac"),a("ac1f"),a("25f0"),a("2532"),a("466d"),a("159b"),a("c030")),i=a("781b"),c=a("05b3"),o=a("b893"),l=a("b429"),u=a("ed08"),p=a("8325"),d=a("c0d8"),h=a.n(d),b=(a("2f62"),{name:"HexInfoDialog",props:{hexInfoDialog:{type:Boolean,default:!1},item:{},chainId:{}},computed:{isMobile:function(){return this.$store.getters.isMobile}},directives:{clipboard:p.a},methods:{clipboardSuccess:function(){this.$message.success(this.$t("success"))},showObjStr:function(t){return t?h.a.utils.hexToUtf8(t):""},onBatchEvmMint:function(){var t=this.$router.resolve({path:"/inscription/mint/evm",query:{chainId:this.chainId}});window.open(t.href,"_blank")},onEvmMint:function(){var t=h.a.utils.hexToUtf8(this.item.hex),e=this.$router.resolve({path:"/inscription/ethscriber",query:{type:"string",hex:t}});window.open(e.href,"_blank")},handleClose:function(){this.$emit("closeSelectToken")}}}),f=b,m=(a("0fcf"),a("2877")),v=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{"close-on-press-escape":!1,"close-on-click-modal":!1,visible:t.hexInfoDialog,title:"Hex Info","before-close":t.handleClose,width:t.isMobile?"100%":"800px"},on:{"update:visible":function(e){t.hexInfoDialog=e}}},[e("div",{staticClass:"dialogBox"},[e("div",{staticClass:"box"},[e("div",{staticClass:"smallTitle"},[e("span",[t._v("Hex")]),e("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.item.hex,expression:"item.hex",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}]},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"copy"}})],1)]),e("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.item.hex,expression:"item.hex",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],staticClass:"textBox"},[t._v(" "+t._s(t.item.hex)+" ")])]),e("div",{staticClass:"box"},[e("div",{staticClass:"smallTitle"},[e("span",[t._v("Text")]),e("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.showObjStr(t.item.hex),expression:"showObjStr(item.hex)",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}]},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"copy"}})],1)]),e("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.showObjStr(t.item.hex),expression:"showObjStr(item.hex)",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],staticClass:"textBox"},[t._v(" "+t._s(t.showObjStr(t.item.hex))+" ")])]),e("el-alert",{attrs:{type:"warning",title:"请自行确认铭文类型，有些铭文属于POW算力挖掘"}}),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onBatchEvmMint()}}},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"hot2"}}),t._v(" 批量 Mint ")],1),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onEvmMint()}}},[t._v("Mint")])],1)],1)])}),[],!1,null,"439a8291",null),x=v.exports,g={name:"inscriptionLive",directives:{clipboard:p.a},components:{NftLoading:i.a,HexInfoDialog:x},watch:{chainName:function(){}},data:function(){return{hiddenAddress:u.l,parseTime:u.o,isShowAllTx:!1,selectItem:{},isInitCalled:!1,timer1:null,timer2:null,chainName:"",rpcList:[],mintsOverviewSelect:3,isPauseLive:!1,liveBlock:"",triggerUpdate:0,previousBlock:0,maxBlockNumber:8,newListData:[],gasPriceList:[],item:null,blockExplorerUrls:"",loading:{isInit:!1,dialog:!1}}},methods:{jumpRouter:function(t){this.item=t,this.$router.push({query:{chainName:t.path}}),this.initialData()},txCountClass:function(t){if(t){if(t>100)return"redTags";if(t>50)return"orangeTags";if(t>10)return"yellowTags"}},showAmount:function(t){return t.amt?t.amt:t.lim?t.lim:void 0},showData:function(t){if(this.isShowAllTx)return t;var e=Object.values(t.reduce((function(t,e){var a=e.stringObj,s=e.hex,n=e.wallet,r=a.tick;return t[r]||(t[r]={stringObj:a,hex:s,walletCount:{}}),t[r].walletCount[n]||(t[r].walletCount[n]=0),t[r].walletCount[n]++,t}),{})).map((function(t){return{stringObj:t.stringObj,hex:t.hex,walletCount:Object.keys(t.walletCount).length,txCount:Object.values(t.walletCount).reduce((function(t,e){return t+e}),0)}}));return e},share:function(){this.$store.dispatch("app/setShareDialogShow",!0)},onMint:function(t){this.selectItem=t,this.loading.dialog=!0},initialData:function(){var t=this;return Object(n.a)(Object(s.a)().mark((function e(){var a,n,r,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.gasPriceList=c.g.filter((function(t){return t.chainId})),a=t.gasPriceList.filter((function(t){return 56===t.chainId}))[0],(n=t.$route.query.chainName)?(r=t.gasPriceList.filter((function(t){return t.path===n})))&&r.length>0?t.item=r[0]:t.item=a:(t.item=a,t.$router.push({query:{chainName:a.path}})),i=Object(o.n)(t.item.chainId),t.rpcList=i.rpcUrls,t.blockExplorerUrls=i.blockExplorerUrls[0],t.loading.isInit=!0,t.newListData=[],t.previousBlock=0,e.next=12,t.getBlockNumber();case 12:return e.next=14,t.listeningBlockData();case 14:t.loading.isInit=!1,t.timer1&&clearInterval(t.timer1),t.timer2&&clearInterval(t.timer2),t.timer1=setInterval(t.getBlockNumber,3e3),t.timer2=setInterval(t.listeningBlockData,4e3);case 20:case"end":return e.stop()}}),e)})))()},containsValidJSON:function(t){try{var e=t.match(/{.*}/);if(e){var a=JSON.parse(e[0]);return!!(a&&a.p&&a.tick)&&a}return!1}catch(t){return!1}},listeningBlockData:function(){var t=this;return Object(n.a)(Object(s.a)().mark((function e(){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.liveBlock&&!(t.liveBlock<=0)){e.next=2;break}return e.abrupt("return");case 2:if(a=t.maxBlockNumber,t.liveBlock-t.previousBlock<t.maxBlockNumber&&(a=t.liveBlock-t.previousBlock),0!==a){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,t.getBlockData(t.liveBlock-a,t.liveBlock);case 8:case 9:case"end":return e.stop()}}),e)})))()},outBlockData:function(t){var e=this;t.length<=0||(t.forEach((function(t){if(t){var a={},s=[];a.timestamp=parseInt(t.timestamp),a.number=parseInt(t.number),t.transactions.forEach((function(t){try{var a=r.ethers.utils.toUtf8String(t.input),n=e.containsValidJSON(a);n&&a.includes("data:")&&s.push({stringObj:n,wallet:t.from,hex:t.input,type:t.type?t.type:"0x0",maxFeePerGas:void 0===t.maxFeePerGas?0:t.maxFeePerGas,maxPriorityFeePerGas:void 0===t.maxPriorityFeePerGas?0:t.maxPriorityFeePerGas,gasPrice:void 0===t.gasPrice?0:t.gasPrice,gas:t.gas})}catch(t){}})),a.item=s,e.newListData.unshift(a),e.newListData.length>e.maxBlockNumber&&e.newListData.pop()}})),this.newListData.forEach((function(t){})))},getBlockData:function(t,e){var a=this;return Object(n.a)(Object(s.a)().mark((function n(){var r,i,c,o,u;return Object(s.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:for(r=[],i=t;i<=e;i++)r.push({jsonrpc:"2.0",id:i,method:"eth_getBlockByNumber",params:["0x"+parseInt(i).toString(16),!0]});if(0!==r.length){s.next=4;break}return s.abrupt("return");case 4:o=0;case 5:if(!(o<a.rpcList.length)){s.next=20;break}return s.prev=6,s.next=9,Object(l.b)(a.rpcList[o],r);case 9:if(200!==(u=s.sent).status||!u.data||!u.data){s.next=13;break}return c=u.data,s.abrupt("break",20);case 13:s.next=17;break;case 15:s.prev=15,s.t0=s.catch(6);case 17:o++,s.next=5;break;case 20:c&&c.length>0&&(a.outBlockData(c.map((function(t){return t.result}))),a.previousBlock=c[c.length-1].id+1);case 21:case"end":return s.stop()}}),n,null,[[6,15]])})))()},getBlockNumber:function(){var t=this;return Object(n.a)(Object(s.a)().mark((function e(){var a,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<t.rpcList.length)){e.next=16;break}return e.prev=2,e.next=5,Object(l.c)(t.rpcList[a]);case 5:if(200!==(n=e.sent).status||!n.data||!n.data.result){e.next=9;break}return t.liveBlock=parseInt(n.data.result,16),e.abrupt("break",16);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(2);case 13:a++,e.next=1;break;case 16:case"end":return e.stop()}}),e,null,[[2,11]])})))()}},created:function(){this.initialData()},mounted:function(){},beforeDestroy:function(){this.timer1&&clearInterval(this.timer1),this.timer2&&clearInterval(this.timer2)}},w=g,k=(a("9279"),Object(m.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"liveBox"},[e("div",{staticClass:"titleBox"},[e("div",{staticClass:"header-left"},[e("div",{staticClass:"liveIconBox"},[e("i",{staticClass:"liveIcon"}),e("span",{staticClass:"text"},[t._v("Live")]),e("span",{staticClass:"number"},[t._v(t._s(t.liveBlock))])])]),e("div",{staticClass:"header-right"},[e("div",{staticClass:"switchBox"},[e("el-switch",{attrs:{size:"small","inactive-value":!1,"active-value":!0,"active-text":"展示所有Txns"},model:{value:t.isShowAllTx,callback:function(e){t.isShowAllTx=e},expression:"isShowAllTx"}})],1),e("i",{staticClass:"el-icon-share refreshIcon",on:{click:function(e){return t.share()}}}),e("i",{staticClass:"el-icon-refresh refreshIcon",on:{click:function(e){return t.initialData()}}}),e("el-select",{staticClass:"selectBox",attrs:{filterable:"",size:"small",value:t.item,"value-key":"name"},on:{change:t.jumpRouter}},[e("div",{staticClass:"selectPrefixBox",attrs:{slot:"prefix"},slot:"prefix"},[e("svg-icon",{staticClass:"icon",style:"color: "+t.item.color,attrs:{"icon-class":t.item.icon}})],1),t._l(t.gasPriceList,(function(a){return e("el-option",{key:a.name,attrs:{label:a.show,value:a}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(a.show))]),e("span",{style:"float: right; font-size: 16px;color:"+a.color},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":a.icon}})],1)])}))],2)],1)]),t.loading.isInit?e("nft-loading"):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading.isInit,expression:"!loading.isInit"}],staticClass:"gridBoxContent"},t._l(t.newListData,(function(a){return e("div",{staticClass:"ulBox"},[e("div",{staticClass:"blockNumber"},[e("a",{attrs:{href:t.blockExplorerUrls+a.number,target:"_blank"}},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"block-number"}}),e("span",[t._v(t._s(a.number))])],1),e("span",{staticClass:"time"},[t._v(" "+t._s(t.parseTime(a.timestamp))+" ")]),a.item.length>0?e("ul",{staticClass:"children"},t._l(t.showData(a.item),(function(a){return e("li",{staticClass:"childrenItem"},[e("div",{staticClass:"topBox"},[e("span",{staticClass:"name"},[t._v(t._s(a.stringObj.tick))]),e("span",{staticClass:"amount"},[t._v("+"+t._s(t.showAmount(a.stringObj)))])]),e("div",{staticClass:"bottomBox"},[e("div",{staticClass:"bottomBoxLeft"},[t.isShowAllTx?e("a",{staticClass:"walletNumber",attrs:{href:t.blockExplorerUrls+"address/"+a.wallet,target:"_blank"}},[e("span",[t._v(t._s(t.hiddenAddress(a.wallet)))])]):e("span",[t._v("钱包 "+t._s(a.walletCount))])]),t.isShowAllTx?t._e():e("div",{staticClass:"bottomBoxLeft"},[t._v("交易 "),e("span",{staticClass:"tags",class:t.txCountClass(a.txCount)},[t._v(t._s(a.txCount))])]),e("div",{staticClass:"bottomBoxRight",on:{click:function(e){return t.onMint(a)}}},[e("div",{staticClass:"mint"},[t._v(" Mint ")]),e("span",{staticClass:"code"},[e("svg-icon",{attrs:{"icon-class":"code2"}})],1)])])])})),0):t._e()])])})),0)],1),t._m(0)]),e("hex-info-dialog",{attrs:{hexInfoDialog:t.loading.dialog,item:t.selectItem,chainId:t.item.chainId},on:{closeSelectToken:function(e){t.loading.dialog=!1}}})],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"overviewBox"},[t("div",{staticClass:"gridBoxContent"})])}],!1,null,"47ef13f8",null));e.default=k.exports}}]);