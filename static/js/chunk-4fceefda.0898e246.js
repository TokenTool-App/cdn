(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4fceefda"],{"113c":function(e,t,n){"use strict";n("68eb")},"2ece":function(e,t,n){"use strict";n.r(t);var a=n("1da1"),r=n("b85c"),i=(n("96cf"),n("d81d"),n("4de4"),n("d3b7"),n("ac1f"),n("1276"),n("a9e3"),n("25f0"),n("159b"),n("a434"),n("3ca3"),n("ddb0"),n("ed08")),s=n("b893"),o=(n("7052"),n("99e5")),u=n.n(o),p=n("61f7"),l=(n("901e"),n("2f62")),c=n("3603"),d=n("771e"),y=n("3e80"),m=n("c030"),b={name:"moreToOne",computed:Object(l.d)({initial:function(e){return e.dapp.web3.initial},myAddress:function(e){return e.dapp.web3.account},addressCount:function(){return this.configObj.privateKeyObj?this.configObj.privateKeyObj.length:0}}),watch:{initial:function(e,t){e&&this.checkVip()}},data:function(){return{web3:null,global:{symbol:"",provider:null,userTime:0,isVip:!1},dialog:{addToken:!1,import:!1},loading:{tableData:!1,select:!1,selectObj:!1,import:!1,signSend:!1,download:!1},configObj:{privateKeyObj:[],rpcNode:"",blockExplorerUrls:"",chainId:0,gasPrice:10,gasLimit:5e5,receiveAddress:"",fntAddress:""},selectToken:null,multipleSelection:[],statusArray:[{index:0,name:"batchCollection.notPerformedStatus",type:"info"},{index:1,name:"batchCollection.successStatus",type:"success"},{index:2,name:"batchCollection.failStatus",type:"error"},{index:3,name:"batchCollection.gasStatus",type:"error"},{index:4,name:"batchCollection.pendingStatus",type:"warning"},{index:5,name:"batchCollection.queryStatus",type:"success"},{index:6,name:"batchCollection.queryFailStatus",type:"error"}],query:"",importText:"",sign:{signSendData:"",txId:"",error:null}}},methods:{delSelect:function(){if(0!==this.$refs.multipleTable.selection.length){var e=this.$refs.multipleTable.selection.map((function(e){return e.id}));this.configObj.privateKeyObj=this.configObj.privateKeyObj.filter((function(t){return-1===e.indexOf(t.id)}))}else this.$message.error(this.$t("batchCollection.selectionTips"))},addtokenClosed:function(){this.query="",this.importText=""},importAddress:function(){if(this.importText){var e=this.importText.split("\n");this.configObj.privateKeyObj=[];var t,n=1,a=Object(r.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;try{var s=this.web3.eth.accounts.privateKeyToAccount(i,!0);this.configObj.privateKeyObj.push({address:s.address,id:n++,prv:i,result:0,nums:0,loading:!1})}catch(e){}}}catch(e){a.e(e)}finally{a.f()}this.$message.success(this.$t("success")),this.dialog.import=!1}else this.$message.error(this.$t("batchCollection.textNull"))},onSubmit:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.global.isVip){t.next=3;break}return e.$message.error("当前钱包不是VIP，无法使用本功能"),t.abrupt("return");case 3:if(e.configObj.fntAddress){t.next=6;break}return e.$message.error(e.$t("batchCollection.inputNftAddress")),t.abrupt("return");case 6:if(e.configObj.receiveAddress&&Object(p.h)(e.configObj.receiveAddress)){t.next=9;break}return e.$message.error(e.$t("batchCollection.receiveAddressTips")),t.abrupt("return");case 9:return t.next=11,e.supportsInterface(e.configObj.fntAddress);case 11:if(t.sent){t.next=15;break}return e.$message.error("不是一个标准NFT合约地址"),t.abrupt("return");case 15:e.loading.tableData=!0,n=0;case 17:if(!(n<e.configObj.privateKeyObj.length)){t.next=24;break}return a=e.configObj.privateKeyObj[n],t.next=21,e.sendBalance(a);case 21:n++,t.next=17;break;case 24:e.loading.tableData=!1;case 25:case"end":return t.stop()}}),t)})))()},sendBalance:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a,r,i,s,o,u,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=new m.Wallet(e.prv),r=a.connect(t.global.provider),n.next=5,t.web3.eth.getTransactionCount(e.address).catch((function(){return!1}));case 5:i=n.sent,s=new m.Contract(t.configObj.fntAddress,d.abi,r),e.result=4,o=0;case 9:if(!(o<=Number(e.nums))){n.next=26;break}return n.next=12,s.tokenOfOwnerByIndex(a.address,o).catch((function(){return 0}));case 12:if(0!==(u=n.sent)){n.next=15;break}return n.abrupt("continue",23);case 15:return n.next=19,s.transferFrom(a.address,t.configObj.receiveAddress,u,{from:a.address,gasLimit:m.utils.hexlify(t.configObj.gasLimit),gasPrice:m.utils.parseUnits(t.configObj.gasPrice.toString(),"gwei"),nonce:i}).then((function(e){return e})).catch((function(t){return e.result=2,!1}));case 19:if(p=n.sent,i++,!1!==p){n.next=23;break}return n.abrupt("return");case 23:o++,n.next=9;break;case 26:e.result=4===e.result?1:4===e.result,n.next=33;break;case 29:n.prev=29,n.t0=n.catch(0),e.result=2;case 33:case"end":return n.stop()}}),n,null,[[0,29]])})))()},toggleSelection:function(e){var t=this;this.$refs.multipleTable.clearSelection(),e&&e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)}))},reload:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.configObj.fntAddress){t.next=3;break}return e.$message.error(e.$t("batchCollection.pleaseSelectToken")),t.abrupt("return");case 3:return t.next=5,e.supportsInterface(e.configObj.fntAddress);case 5:if(t.sent){t.next=9;break}return e.$message.error("不是一个标准NFT合约地址"),t.abrupt("return");case 9:e.loading.tableData=!0,n=0;case 11:if(!(n<e.configObj.privateKeyObj.length)){t.next=18;break}return a=e.configObj.privateKeyObj[n],t.next=15,e.getWeb3Balance(a);case 15:n++,t.next=11;break;case 18:e.loading.tableData=!1;case 19:case"end":return t.stop()}}),t)})))()},handleRefresh:function(e,t){var n=this;return Object(a.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.loading.selectObj=!0,a.next=3,n.getWeb3Balance(t[e]);case 3:n.loading.selectObj=!1;case 4:case"end":return a.stop()}}),a)})))()},supportsInterface:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new t.web3.eth.Contract(d.abi,e);case 2:return a=n.sent,n.next=5,a.methods.supportsInterface("0x80ac58cd").call().then((function(e){return e})).catch((function(){return!1}));case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))()},getWeb3Balance:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.configObj.fntAddress){n.next=3;break}return t.$message.error(t.$t("batchCollection.pleaseSelectToken")),n.abrupt("return");case 3:return n.prev=3,n.next=6,new t.web3.eth.Contract(d.abi,t.configObj.fntAddress);case 6:return a=n.sent,n.next=9,a.methods.balanceOf(e.address).call();case 9:e.nums=n.sent,e.result=5,n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.result=6;case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))()},handleDelete:function(e,t){t.splice(e,1)},handleSelectionChange:function(e){this.multipleSelection=e},initConfig:function(){this.global.symbol=this.$route.meta.symbol;var e=Object(s.h)(this.$route.meta.symbol);this.configObj.rpcNode=e.rpcUrls[0],this.configObj.chainId=e.chainId,this.web3=new u.a(new u.a.providers.HttpProvider(this.configObj.rpcNode)),this.global.provider=new y.a(this.configObj.rpcNode)},exportExcel:function(){var e=this;0!==this.$refs.multipleTable.selection.length?(this.loading.download=!0,Promise.all([n.e("chunk-5164a781"),n.e("chunk-519483dc"),n.e("chunk-4cd938c5")]).then(n.bind(null,"4bf8")).then((function(t){var n=["id","address","balance","tokenBalance","txId"],a=e.$refs.multipleTable.selection,r=e.formatJson(n,a),s=e.global.symbol+Object(i.h)(new Date,"{h}{i}{s}");t.export_json_to_excel({header:n,filename:s,data:r}),e.loading.download=!1}))):this.$message.error(this.$t("batchCollection.selectionTips"))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(i.h)(t[e]):t[e]}))}))},checkVip:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n,a,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.myAddress){t.next=10;break}return n=Object(s.h)("BNB"),a=new u.a(new u.a.providers.HttpProvider(n.rpcUrls[0])),e.global.isVip=!0,r=new a.eth.Contract(c.abi,n.multiSenderAddress),t.next=8,r.methods.isVIP(e.myAddress).call().catch((function(){return"0"}));case 8:i=t.sent,e.global.isVip="1"===i;case 10:case"end":return t.stop()}}),t)})))()}},created:function(){this.initConfig(),this.checkVip()}},f=b,g=(n("113c"),n("2877")),h=Object(g.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-row",{staticStyle:{"margin-bottom":"30px"}},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"operationBtn"},[n("el-button",{attrs:{icon:"el-icon-bottom",type:"primary"},on:{click:function(t){e.dialog.import=!0}}},[e._v(e._s(e.$t("batchCollection.importAccount")))]),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.download,expression:"loading.download"}],attrs:{icon:"el-icon-top",type:"primary"},on:{click:function(t){return e.exportExcel()}}},[e._v(e._s(e.$t("batchCollection.exportSelected")))]),n("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:function(t){return e.delSelect()}}},[e._v(e._s(e.$t("batchCollection.deleteSelected")))])],1),n("el-dialog",{attrs:{title:e.$t("batchCollection.importAddress"),visible:e.dialog.import,width:"600px"},on:{"update:visible":function(t){return e.$set(e.dialog,"import",t)},closed:function(t){return e.addtokenClosed()}}},[n("span",[e._v(e._s(e.$t("batchCollection.privateFormat")))]),n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.import,expression:"loading.import"}],attrs:{type:"textarea",rows:10,placeholder:e.$t("batchCollection.privateFormat")},model:{value:e.importText,callback:function(t){e.importText=t},expression:"importText"}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialog.import=!1}}},[e._v(e._s(e.$t("cancel")))]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.importAddress()}}},[e._v(e._s(e.$t("confirm")))])],1)],1)],1)],1),n("el-row",{staticStyle:{"margin-bottom":"30px"}},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"transactionTable"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.tableData,expression:"loading.tableData"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{height:"250",data:e.configObj.privateKeyObj,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),n("el-table-column",{attrs:{prop:"address",label:e.$t("address")+" ("+e.addressCount+")",width:"380",align:"center"}}),n("el-table-column",{attrs:{prop:"nums",label:"数量",width:"380",align:"center"}}),n("el-table-column",{attrs:{prop:"result",label:"结果",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e.statusArray[t.row.result].type}},[e._v(e._s(e.$t(e.statusArray[t.row.result].name)))])]}}])}),n("el-table-column",{attrs:{label:e.$t("operate"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{attrs:{content:e.$t("delete")}},[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(n){return e.handleDelete(t.$index,e.configObj.privateKeyObj)}}})],1),n("el-tooltip",{attrs:{content:e.$t("refresh")}},[n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.selectObj,expression:"loading.selectObj"}],attrs:{type:"primary",icon:"el-icon-refresh",circle:""},on:{click:function(n){return e.handleRefresh(t.$index,e.configObj.privateKeyObj)}}})],1)]}}])})],1),n("div",{staticClass:"multipleBtn"},[n("el-form",{ref:"configObj",attrs:{model:e.configObj,"label-width":"150px"}},[n("el-form-item",{attrs:{label:"NFT合约地址:"}},[n("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:e.$t("batchCollection.inputNftAddress"),clearable:!0},model:{value:e.configObj.fntAddress,callback:function(t){e.$set(e.configObj,"fntAddress",t)},expression:"configObj.fntAddress"}})],1),n("el-form-item",{attrs:{label:e.$t("batchCollection.receiveAddress")+":"}},[n("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:e.$t("batchCollection.inputReceiveAddress"),clearable:!0},model:{value:e.configObj.receiveAddress,callback:function(t){e.$set(e.configObj,"receiveAddress",t)},expression:"configObj.receiveAddress"}})],1)],1),n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.reload()}}},[e._v("重新读取数据")]),n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.onSubmit()}}},[e._v("开始归集")]),n("el-tag",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"}},[e._v(e._s(e.$t("batchCollection.tips1")))])],1)],1)])],1)],1)}),[],!1,null,"4271ecbd",null);t.default=h.exports},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},"68eb":function(e,t,n){},7052:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return y})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return b}));var a=n("1da1"),r=(n("96cf"),n("51d2")),i=n("4360"),s=n("ed08"),o=n("cf29"),u=n("901e"),p=n.n(u),l=n("771e"),c=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,u){var l,c,d,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l="getTokenBalance",e.next=3,new u.eth.Contract(r.abi,t);case 3:return c=e.sent,d={name:"balanceOf",erc20:!0,data:[a]},e.next=7,Object(o.b)(c,d,i.a.state.dapp.web3.account,l);case 7:return y=e.sent,e.abrupt("return",new p.a(Object(s.d)(y,n)));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),d=function(e,t,n){return n.eth.getBalance(e).then((function(e){return new p.a(Object(s.d)(e,t))}))},y=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(r.abi,t);case 2:return a=e.sent,s={name:"symbol",erc20:!0,data:[]},e.next=6,Object(o.b)(a,s,i.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(l.abi,t);case 2:return a=e.sent,r={name:"supportsInterface",erc20:!0,data:["0x80ac58cd"]},e.next=6,Object(o.b)(a,r,i.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(r.abi,t);case 2:return a=e.sent,s={name:"decimals",erc20:!0,data:[]},e.next=6,Object(o.b)(a,s,i.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},"771e":function(e){e.exports=JSON.parse('{"contractName":"ERC721","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"armzs","outputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"string","name":"image","type":"string"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"}],"name":"create","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factoryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getArmz","outputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getCollection","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_new","type":"address"}],"name":"setFactoryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"armz","type":"tuple"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}}]);