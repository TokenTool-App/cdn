(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9455baac"],{"272a":function(e,t,n){"use strict";n.r(t);var a=n("1da1"),r=(n("96cf"),n("d3b7"),n("25f0"),n("a9e3"),n("99af"),n("3ca3"),n("ddb0"),n("b0c0"),n("4de4"),n("a765")),s=n("05b3"),i=n("a809"),o=n("99e5"),l=n.n(o),c=(n("c768"),n("536a")),u=n("51d2"),m=n("ed08"),d=n("3e80"),p=n("901e"),f=n.n(p),g=n("2f62"),b=n("c030"),y={name:"presale",components:{loadPrivateKey:i.a,CountDown:r.a},computed:Object(g.d)({getGasPriceCom:function(){var e=0;return this.platform.gasUsed&&(e=this.global.gasUsed*this.global.gasPrice,e=b.utils.formatUnits(b.utils.parseUnits(e.toString(),"gwei")),e=new f.a(e).toNumber()),e}}),data:function(){return{parseTime:m.i,presaleList:s.i,panicBuying:{},web3:null,timer:null,syncBlock:null,loading:{getSale:!1,buying:!1},dialog:{loadPrv:!1,cmdInfo:!1},global:{chainId:0,address:"",network:"test..",rpcNodeArray:[],symbol:"",gasPrice:0,defaultGas:7,maxGas:0,marks:{},provider:null,cmdInfo:[],flag:!1,gasUsed:5e5,sendCount:1,intervalTime:1e3,specifyRun:!1,startBlock:0,endBlock:0,setTime:500},form:{rpcNode:"",privateKey:"",address:"",balance:0,buyAmount:"",failRetry:!1,resultCheck:!0,advanceSwitch:!1,saleUrl:"",beforeTime:3,franticCount:30,setTime:800,version:"V6"},sale:{currencyTime:"",createTime:"",startBlock:"",endBlock:"",currencyBlock:0,presaleAddress:"",tokenAddress:"",tokenName:"",tokenSymbol:"",createAddress:"",maxBuyer:"",softcap:"",hardcap:""}}},methods:{OnAdvanceSwitch:function(e){e&&(this.form.failRetry=!1,this.form.resultCheck=!1)},stopReturn:function(){this.global.flag=!0,this.loading.buying=!1},handleClose:function(){this.dialog.cmdInfo=!1,this.global.flag=!0,this.loading.buying=!1},getPing:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.web3){t.next=9;break}return n=Date.now(),t.next=5,e.web3.eth.getChainId();case 5:t.sent,a=e.form.rpcNode.indexOf("quiknode"),e.global.network=a>-1?Object(m.f)(1,23):Date.now()-n;case 9:case"end":return t.stop()}}),t)})))()},getUserData:function(e){var t=e.privateKey,n=e.address;this.form.privateKey=t,this.form.address=n,this.web3.eth.accounts.wallet.clear(),this.web3.eth.accounts.wallet.add(t),this.getUserBalance()},getUserBalance:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.web3.eth.getBalance(e.form.address);case 2:n=t.sent,e.form.balance=e.web3.utils.fromWei(n,"ether");case 4:case"end":return t.stop()}}),t)})))()},checkTime:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.buying=!0,t.next=3,e.buyValidata();case 3:!0===t.sent?(e.dialog.cmdInfo=!0,e.global.specifyRun?e.specifyRun():e.immediatelyRun()):e.loading.buying=!1;case 6:case"end":return t.stop()}}),t)})))()},specifyRun:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.syncBlock&&clearInterval(e.syncBlock),e.syncBlock=setInterval(e.getSyncBlock,e.global.setTime);case 2:if(e.global.flag){t.next=14;break}if(!(Number(e.sale.currencyBlock)>=Number(e.global.startBlock)&&Number(e.sale.currencyBlock)<Number(e.global.endBlock))){t.next=9;break}return e.global.cmdInfo.push("开始下单....."),e.immediatelyRun(),t.abrupt("break",14);case 9:e.global.cmdInfo.push("开始区块：".concat(e.global.startBlock," | 当前区块：").concat(e.sale.currencyBlock," | 结束区块：").concat(e.global.endBlock));case 10:return t.next=12,new Promise((function(t){return setTimeout(t,e.global.setTime)}));case 12:t.next=2;break;case 14:case"end":return t.stop()}}),t)})))()},immediatelyRun:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n,a,r,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.form.advanceSwitch?e.form.franticCount:1,t.next=3,e.web3.eth.getTransactionCount(e.form.address);case 3:a=t.sent,e.global.cmdInfo.push("当前 none 值：".concat(a,"，请勿操作钱包."));case 5:if(e.global.flag){t.next=18;break}r=regeneratorRuntime.mark((function t(n){var r,s,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=b.utils.parseUnits(e.form.buyAmount,"ether"),e.global.cmdInfo.push("下单金额：".concat(e.form.buyAmount,"，转换后金额：").concat(r)),"0xf868e766",t.next=5,e.web3.eth.accounts.signTransaction({gas:b.utils.hexlify(e.global.gasUsed),to:e.sale.presaleAddress,data:"0xf868e766",nonce:a,chainId:e.global.chainId,gasPrice:b.utils.parseUnits(e.global.gasPrice.toString(),"gwei"),value:r},e.form.privateKey);case 5:s=t.sent,a++,e.global.cmdInfo.push("生成TXID："+s.transactionHash),i=new Promise((function(t,n){e.web3.eth.sendSignedTransaction(s.rawTransaction).on("transactionHash",(function(e){})).on("receipt",(function(e){})).on("confirmation",(function(e,a){a.status?t(a.transactionHash):n(a.transactionHash)})).on("error",(function(e){n(e.transactionHash)})).catch((function(e){n(err.transactionHash)}))})),i.then((function(t){e.global.cmdInfo.push("hash：".concat(t,"，成功")),e.global.flag=!0})).catch((function(t){e.global.cmdInfo.push("hash：".concat(t,"，失败"))}));case 11:case"end":return t.stop()}}),t)})),s=0;case 8:if(!(s<n)){t.next=13;break}return t.delegateYield(r(s),"t0",10);case 10:s++,t.next=8;break;case 13:return t.next=15,new Promise((function(t){return setTimeout(t,e.global.intervalTime)}));case 15:e.global.specifyRun&&(e.global.cmdInfo.push("开始区块：".concat(e.global.startBlock," | 当前区块：").concat(e.sale.currencyBlock," | 结束区块：").concat(e.global.endBlock)),Number(e.sale.currencyBlock)>Number(e.global.endBlock)&&(e.global.cmdInfo.push("结束操作"),e.global.flag=!0)),t.next=5;break;case 18:e.global.cmdInfo.push("操作结束");case 19:case"end":return t.stop()}}),t)})))()},buyValidata:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.global.cmdInfo=[],e.global.flag=!1,e.global.cmdInfo.push("初始化信息"),e.sale.presaleAddress="",e.getUserBalance(),e.global.cmdInfo.push("校验信息"),e.form.address){t.next=10;break}return e.$message.error("私钥信息未导入"),e.global.cmdInfo.push("私钥信息未导入"),t.abrupt("return",!1);case 10:if(e.form.buyAmount){t.next=14;break}return e.$message.error("购买金额不能为空"),e.global.cmdInfo.push("购买金额不能为空"),t.abrupt("return",!1);case 14:if(!e.global.specifyRun){t.next=27;break}if(0!==e.global.startBlock){t.next=19;break}return e.$message.error("请指定开始区块"),e.global.cmdInfo.push("请指定开始区块"),t.abrupt("return",!1);case 19:if(0!==e.global.endBlock){t.next=23;break}return e.$message.error("请指定结束区块"),e.global.cmdInfo.push("请指定结束区块"),t.abrupt("return",!1);case 23:if(!(e.global.startBlock>e.global.endBlock)){t.next=27;break}return e.$message.error("开始区块号不能大于结束区块号"),e.global.cmdInfo.push("开始区块号不能大于结束区块号"),t.abrupt("return",!1);case 27:if(1===new f.a(e.form.balance).comparedTo(e.form.buyAmount)){t.next=31;break}return e.$message.error("钱包余额不足"),e.global.cmdInfo.push("钱包余额不足"),t.abrupt("return",!1);case 31:if(e.form.saleUrl){t.next=35;break}return e.$message.error("预售地址不能为空"),e.global.cmdInfo.push("预售地址不能为空"),t.abrupt("return",!1);case 35:return e.global.cmdInfo.push("获取预售信息"),t.next=38,e.getSale();case 38:if(e.sale.presaleAddress){t.next=42;break}return e.$message.error("获取预售信息【失败】,请检查地址/网络信息"),e.global.cmdInfo.push("获取预售信息【失败】,请检查地址/网络信息"),t.abrupt("return",!1);case 42:return t.abrupt("return",!0);case 43:case"end":return t.stop()}}),t)})))()},getUnicrypt:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a,r,s,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.loading.getSale=!0,a=new t.web3.eth.Contract(c[t.form.version],e),n.next=5,a.methods.PRESALE_INFO().call();case 5:return r=n.sent,s=r.S_TOKEN,i=new t.web3.eth.Contract(u.abi,s),n.next=10,i.methods.symbol().call().catch((function(e){return null}));case 10:return t.sale.tokenSymbol=n.sent,n.next=13,i.methods.name().call().catch((function(e){return null}));case 13:t.sale.tokenName=n.sent,t.sale.maxBuyer=b.utils.formatEther(r.MAX_SPEND_PER_BUYER),t.sale.softcap=b.utils.formatEther(r.SOFTCAP),t.sale.hardcap=b.utils.formatEther(r.HARDCAP),t.sale.startBlock=r.START_BLOCK,t.sale.endBlock=r.END_BLOCK,t.sale.presaleAddress=e,t.sale.tokenAddress=s,t.global.cmdInfo.push("预售开始区块：".concat(Object(m.i)(t.sale.startBlock))),t.global.cmdInfo.push("预售结束区块：".concat(Object(m.i)(t.sale.endBlock))),t.global.cmdInfo.push("预售地址：".concat(t.sale.presaleAddress)),t.global.cmdInfo.push("代币地址：".concat(t.sale.tokenAddress)),t.global.cmdInfo.push("token名称：".concat(t.sale.tokenName)),t.global.cmdInfo.push("token符号：".concat(t.sale.tokenSymbol)),t.syncBlock&&clearInterval(t.syncBlock),t.syncBlock=setInterval(t.getSyncBlock,1e3),n.next=35;break;case 31:n.prev=31,n.t0=n.catch(0),t.$message.error(n.t0.message),t.global.cmdInfo.push("error ：".concat(n.t0.message));case 35:return n.prev=35,t.loading.getSale=!1,n.finish(35);case 38:case"end":return n.stop()}}),n,null,[[0,31,35,38]])})))()},getSyncBlock:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.web3.eth.getBlockNumber().catch((function(e){return 0}));case 2:0!==(n=t.sent)&&(e.sale.currencyBlock=n);case 4:case"end":return t.stop()}}),t)})))()},getSale:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.form.saleUrl){t.next=3;break}return e.$message.error("预售地址不能为空"),t.abrupt("return");case 3:return n=e.form.saleUrl,t.next=6,e.getUnicrypt(n);case 6:case"end":return t.stop()}}),t)})))()},initial:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form.rpcNode=e.panicBuying.rpcNode,e.form.tradeTokenAddress=e.panicBuying.symbol,e.global.rpcNodeArray=e.panicBuying.rpcNodeArray,e.global.symbol=e.panicBuying.symbol,e.global.chainId=e.panicBuying.chainId,e.global.address=e.panicBuying.address,e.global.gasPrice=e.panicBuying.gasPrice,e.global.maxGas=e.panicBuying.maxGas,e.web3=new l.a(new l.a.providers.HttpProvider(e.form.rpcNode)),e.global.provider=new d.a(e.form.rpcNode),t.next=12,e.web3.eth.getGasPrice();case 12:n=t.sent,n=e.web3.utils.fromWei(n,"gwei"),e.global.gasPrice=Math.ceil(1.3*n),e.global.defaultGas=Math.ceil(1.3*n),e.global.marks[e.global.gasPrice]=e.global.gasPrice,e.getPing(),e.timer&&clearInterval(e.timer),e.timer=setInterval(e.getPing,3e4);case 20:case"end":return t.stop()}}),t)})))()}},watch:{"global.cmdInfo":function(e,t){document.getElementsByClassName("cmdInfo")[0]&&(document.getElementsByClassName("cmdInfo")[0].scrollTop=3e4),this.global.cmdInfo.length>200&&(this.global.cmdInfo=[])}},created:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.panicBuying=s.i.filter((function(e){return e.salePlatform.length>0}))[0],e.platform=e.panicBuying.salePlatform[0],e.loading.initForm=!0,t.next=5,e.initial();case 5:e.loading.initForm=!1;case 6:case"end":return t.stop()}}),t)})))()},mounted:function(){},beforeDestroy:function(){clearInterval(this.timer)}},h=y,v=(n("9e9e"),n("2877")),T=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("loadPrivateKey",{attrs:{show:e.dialog.loadPrv,web3:e.web3},on:{close:function(t){e.dialog.loadPrv=!1},getUserData:e.getUserData}}),n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.initForm,expression:"loading.initForm"}],ref:"form",attrs:{model:e.form,"label-width":"120px"}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"rpcNode"},[n("span",[e._v("节点："+e._s(e.form.rpcNode))]),n("span",[e._v("速度："+e._s(e.global.network)+"ms")]),n("el-button",[e._v("切换节点")])],1)]),n("el-card",{staticClass:"box-card"},[n("el-form-item",{attrs:{label:"钱包地址:"}},[n("el-input",{attrs:{disabled:"",placeholder:"请载入私钥获取地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}},[n("template",{slot:"append"},[n("el-button",{on:{click:function(t){e.dialog.loadPrv=!0}}},[e._v("载入私钥")])],1)],2),n("el-tag",{attrs:{type:"danger"}},[e._v("强烈推荐使用小额资产的小钱包进行抢币,需要私钥是为了省去确认操作，直接实现快速自动买卖.")]),n("el-tag",[e._v("本程序完全本地运行,不会上传私钥到服务器,欢迎监督检测.")]),n("span"),n("span"),n("span")],1),n("el-form-item",{attrs:{label:"钱包余额:"}},[n("span",[e._v(e._s(e.form.balance)+" "+e._s(e.global.symbol))])])],1),n("el-card",{staticClass:"box-card"},[n("el-form-item",{attrs:{label:"版本:"}},[n("el-radio-group",{attrs:{size:"small"},model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}},[n("el-radio-button",{attrs:{label:"V6"}})],1)],1),n("el-form-item",{attrs:{label:"预售地址"}},[n("el-input",{attrs:{placeholder:"如 0xf68bcac489A0C29ba9Bb73de2e85BFa9B80c02cB"},model:{value:e.form.saleUrl,callback:function(t){e.$set(e.form,"saleUrl",t)},expression:"form.saleUrl"}},[n("template",{slot:"append"},[n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.getSale,expression:"loading.getSale"}],on:{click:function(t){return e.getSale()}}},[e._v("获取预售信息")])],1)],2)],1),n("div",{staticClass:"saleInfo"},[n("span",[e._v("开始预售区块："+e._s(e.sale.startBlock))]),n("span",[e._v("结束预售区块："+e._s(e.sale.endBlock))]),n("span",[e._v("当前区块："+e._s(e.sale.currencyBlock))]),n("span",[e._v("买入最大限额："+e._s(e.sale.maxBuyer))]),n("span",[e._v("软硬顶："+e._s(e.sale.softcap)+" - "+e._s(e.sale.hardcap))]),n("span",[e._v("预售地址："+e._s(e.sale.presaleAddress))]),n("span",[e._v("代币地址："+e._s(e.sale.tokenAddress))]),n("span",[e._v("token名称："+e._s(e.sale.tokenName))]),n("span",[e._v("token符号："+e._s(e.sale.tokenSymbol))])]),n("el-form-item",{attrs:{label:"抢购BNB数量"}},[n("el-input",{attrs:{placeholder:"请输入抢购BNB数量"},model:{value:e.form.buyAmount,callback:function(t){e.$set(e.form,"buyAmount",t)},expression:"form.buyAmount"}})],1),n("el-form-item",{attrs:{label:"抢购速度"}},[n("el-slider",{attrs:{min:e.global.defaultGas,max:e.global.maxGas},model:{value:e.global.gasPrice,callback:function(t){e.$set(e.global,"gasPrice",t)},expression:"global.gasPrice"}})],1),n("div",{staticClass:"tipsInfo"},[n("el-tag",{attrs:{type:"danger",size:"medium"}},[e._v("单次gas费用 "+e._s(e.global.gasPrice)+" ≈ "+e._s(e.getGasPriceCom)+" "+e._s(e.global.symbol)+" ( 最少预留约 "+e._s(2*e.getGasPriceCom)+" "+e._s(e.global.symbol)+" )")])],1),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[n("el-form-item",{attrs:{label:"每次发送次数:"}},[n("el-input-number",{attrs:{"controls-position":"right"},model:{value:e.global.sendCount,callback:function(t){e.$set(e.global,"sendCount",t)},expression:"global.sendCount"}})],1),n("el-form-item",{attrs:{label:"时间间隔(毫秒):"}},[n("el-input-number",{attrs:{"controls-position":"right"},model:{value:e.global.intervalTime,callback:function(t){e.$set(e.global,"intervalTime",t)},expression:"global.intervalTime"}})],1)],1),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[n("el-form-item",{attrs:{label:"指定区块运行:"}},[n("el-switch",{model:{value:e.global.specifyRun,callback:function(t){e.$set(e.global,"specifyRun",t)},expression:"global.specifyRun"}})],1),e.global.specifyRun?n("el-form-item",{attrs:{label:"开始区块:"}},[n("el-input-number",{attrs:{"controls-position":"right"},model:{value:e.global.startBlock,callback:function(t){e.$set(e.global,"startBlock",t)},expression:"global.startBlock"}})],1):e._e(),e.global.specifyRun?n("el-form-item",{attrs:{label:"结束区块:"}},[n("el-input-number",{attrs:{"controls-position":"right"},model:{value:e.global.endBlock,callback:function(t){e.$set(e.global,"endBlock",t)},expression:"global.endBlock"}})],1):e._e(),e.global.specifyRun?n("el-form-item",{attrs:{label:"监控间隔(毫秒):"}},[n("el-input-number",{attrs:{min:100,"controls-position":"right"},model:{value:e.global.setTime,callback:function(t){e.$set(e.global,"setTime",t)},expression:"global.setTime"}})],1):e._e()],1)],1)],1),n("div",{staticClass:"startBtn"},[n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.buying,expression:"loading.buying"}],attrs:{type:"success"},on:{click:function(t){return e.checkTime()}}},[e._v("抢购预售")])],1),n("el-dialog",{attrs:{title:"操作信息","close-on-press-escape":!1,"close-on-click-modal":!1,visible:e.dialog.cmdInfo,width:"100%"},on:{"update:visible":function(t){return e.$set(e.dialog,"cmdInfo",t)},closed:e.handleClose}},[e.global.cmdInfo.length>0?n("div",{staticClass:"cmdInfo"},[n("ul",e._l(e.global.cmdInfo,(function(t,a){return n("li",[e._v("["+e._s(a)+"] "+e._s(t))])})),0)]):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"warning"},on:{click:function(t){return e.stopReturn()}}},[e._v("停止")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleClose()}}},[e._v("返回")])],1)])],1)}),[],!1,null,"2eaa869c",null);t.default=T.exports},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},"536a":function(e){e.exports=JSON.parse('{"contractName":"UnicryptSale","V6":[{"inputs":[],"name":"PRESALE_INFO","outputs":[{"internalType":"contract IERC20","name":"S_TOKEN","type":"address"},{"internalType":"contract IERC20","name":"B_TOKEN","type":"address"},{"internalType":"uint256","name":"TOKEN_PRICE","type":"uint256"},{"internalType":"uint256","name":"MAX_SPEND_PER_BUYER","type":"uint256"},{"internalType":"uint256","name":"AMOUNT","type":"uint256"},{"internalType":"uint256","name":"HARDCAP","type":"uint256"},{"internalType":"uint256","name":"SOFTCAP","type":"uint256"},{"internalType":"uint256","name":"LIQUIDITY_PERCENT","type":"uint256"},{"internalType":"uint256","name":"LISTING_RATE","type":"uint256"},{"internalType":"uint256","name":"START_BLOCK","type":"uint256"},{"internalType":"uint256","name":"END_BLOCK","type":"uint256"},{"internalType":"uint256","name":"LOCK_PERIOD","type":"uint256"}],"stateMutability":"view","type":"function"}]}')},5946:function(e,t,n){},"9e9e":function(e,t,n){"use strict";n("e303")},a765:function(e,t,n){"use strict";var a=(n("a9e3"),n("d3b7"),n("25f0"),n("b680"),{name:"countdown",replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"00",hour:"00",minutes:"00",seconds:"00"},star:"",end:"",current:""}},watch:{currentTime:function(){this.gogogo()}},props:{tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1},advanceSwitch:{type:Boolean,default:!1},beforeTime:{type:Number,default:3}},mounted:function(){this.gogogo()},destroyed:function(){clearTimeout(this.timer)},methods:{refreshTime:function(){var e=this;clearTimeout(this.timer);var t=0;this.advanceSwitch&&(t=1e3*this.beforeTime),this.current=(new Date).getTime()+t,this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout((function(){e.runTime(e.star,e.current,e.start_message)}),1)):(this.end>this.current&&this.star<this.current||this.star===this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.start_message(),setTimeout((function(){e.runTime(e.end,e.current,e.end_message,!0)}),1))},gogogo:function(){var e=this;clearTimeout(this.timer),10===this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10===this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10===this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout((function(){e.runTime(e.star,e.current,e.start_message)}),1)):(this.end>this.current&&this.star<this.current||this.star===this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.start_message(),setTimeout((function(){e.runTime(e.end,e.current,e.end_message,!0)}),1))},runTime:function(e,t,n,a){var r=this,s=this.msTime,i=e-t;if(i>0){this.msTime.show=!0,s.day=Math.floor(i/864e5),i-=864e5*s.day,s.hour=Math.floor(i/36e5),i-=36e5*s.hour,s.minutes=Math.floor(i/6e4),i-=6e4*s.minutes,s.seconds=Math.floor(i/1e3).toFixed(0),i-=1e3*s.seconds,s.day<10&&(s.day="0"+s.day),s.hour<10&&(s.hour="0"+s.hour),s.minutes<10&&(s.minutes="0"+s.minutes),s.seconds<10&&(s.seconds="0"+s.seconds);var o=Date.now(),l=Date.now()-o;this.timer=setTimeout((function(){a?r.runTime(r.end,t+=1e3,n,!0):r.runTime(r.star,t+=1e3,n)}),1e3-l)}else n()},start_message:function(){this.$set(this,"tipShow",!1),this.$emit("start_callback")},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("end_callback")}}}),r=a,s=(n("c779"),n("2877")),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preparing"},[n("div",{class:e.msTime.show?"up":"down"},[n("span",{staticClass:"time"},[e._v(e._s(e.msTime.day)+"天")]),n("span",{staticClass:"time"},[e._v(e._s(e.msTime.hour)+"小时")]),n("span",{staticClass:"time"},[e._v(e._s(e.msTime.minutes)+"分")]),n("span",{staticClass:"time"},[e._v(e._s(e.msTime.seconds)+"秒")])]),n("div",{class:e.msTime.show?"up":"down"},[e.msTime.show&&e.tipShow?n("span",{staticClass:"font"},[e._v("未开始～距离开始还有")]):e._e(),e.msTime.show&&!e.tipShow?n("span",{staticClass:"font"},[e._v("进行中～距离结束还有")]):e._e(),e.msTime.show?e._e():n("span",{staticClass:"font"},[e._v("已结束")]),n("el-tag",{attrs:{type:"danger"}},[e._v("请自行核验倒计时时间是否正确")]),n("el-button",{on:{click:function(t){return e.refreshTime()}}},[e._v("刷新时间")])],1)])}),[],!1,null,"c3e834fc",null);t.a=i.exports},a809:function(e,t,n){"use strict";var a=(n("99e5"),{name:"loadPrivateKey",props:{show:{type:Boolean,default:!1},web3:{}},data:function(){return{lWidth:"650px",privateKey:"",loading:{select:!1}}},methods:{loadPrv:function(){if(this.privateKey)try{var e=this.web3.eth.accounts.privateKeyToAccount(this.privateKey,!0);this.$emit("getUserData",e),this.closeDialog()}catch(e){this.$message.error(e.message)}else this.$message.error("私钥载入错误，请检查是否输入正确！")},closeDialog:function(){this.privateKey="",this.$emit("close")}},created:function(){document.body.clientWidth<640&&(this.lWidth="90%")}}),r=a,s=n("2877"),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-dialog",{staticClass:"loadPrvKey",attrs:{title:"加载私钥",visible:e.show,"append-to-body":!0,"close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!0,width:e.lWidth,"before-close":e.closeDialog},on:{"update:visible":function(t){e.show=t}}},[n("div",{staticClass:"loadPrvKey",staticStyle:{display:"flex"}},[n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.select,expression:"loading.select"}],attrs:{"show-password":!0,placeholder:"请输入钱包私钥"},model:{value:e.privateKey,callback:function(t){e.privateKey=t},expression:"privateKey"}}),n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.loadPrv()}}},[e._v("加载")])],1)])],1)}),[],!1,null,"8eccd106",null);t.a=i.exports},c768:function(e){e.exports=JSON.parse('{"contractName":"DxSale","abi":[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"presaleOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"presales","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint256","name":"createdOn","type":"uint256"},{"internalType":"address","name":"presaleInfoAddr","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"presaleAddress","type":"address"},{"internalType":"address","name":"governor","type":"address"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"govPercentage","type":"uint256"},{"internalType":"address","name":"uniswapDep","type":"address"},{"internalType":"uint256","name":"uniswapPercentage","type":"uint256"},{"internalType":"uint256","name":"uniswapRate","type":"uint256"},{"internalType":"uint256","name":"lp_locked","type":"uint256"}],"stateMutability":"view","type":"function"}]}')},c779:function(e,t,n){"use strict";n("5946")},e303:function(e,t,n){}}]);