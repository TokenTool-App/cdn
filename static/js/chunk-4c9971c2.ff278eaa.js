(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4c9971c2"],{"7adc":function(e,t,n){},b0ad:function(e,t,n){"use strict";n("7adc")},c84a:function(e,t,n){"use strict";n.r(t);var a=n("2909"),c=n("c7eb"),o=n("1da1"),r=(n("b0c0"),n("4de4"),n("d3b7"),n("99af"),n("25f0"),n("ace4"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("b893")),s=n("828d"),l=n("c0d8"),i=n.n(l),d={name:"scanContract",data:function(){return{templateText:"",loading:{scan:!1},form:{tokenAddress:"",resultMsg:""},tokenScan:{symbol:"",name:"",score:"",isHoneypot:!1,buyFee:0,sellFee:0,buyGas:"",sellGas:"",error:!1,isProxy:!1,verified:!0,ownership:"",behavior:{fee:!1,maxTX:!1,maxSell:!1,honeypot:!1,blackList:!1,mint:!1},burnedSupply:0,liquidity:!1,liquiditySupply:0,top5Hold:0,whaleHolders:[]}}},methods:{valid:function(){return this.form.tokenAddress?!!i.a.utils.isAddress(this.form.tokenAddress)||(this.$message.error("无效的合约地址"),!1):(this.$message.error("请输入合约地址"),!1)},scan:function(){var e=this;return Object(o.a)(Object(c.a)().mark((function t(){var n,a,o,s,l,i,d,u;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.templateText="",e.valid()){t.next=4;break}return t.abrupt("return");case 4:return e.loading.scan=!0,t.next=7,e.scanContract(e.form.tokenAddress);case 7:if(n=t.sent,e.loading.scan=!1,!n||!1!==n.isToken){t.next=13;break}return e.$message.error("查询出错/或无效的合约地址"),t.abrupt("return");case 13:for(e.tokenScan.symbol=n.tokenSymbol,e.tokenScan.name=n.tokenName,e.tokenScan.score=n.totalScore,e.tokenScan.isHoneypot=n.trade.isHoneypot,e.tokenScan.buyFee=n.trade.buyFee,e.tokenScan.sellFee=n.trade.sellFee,e.tokenScan.buyGas=n.trade.buyGas,e.tokenScan.sellGas=n.trade.sellGas,e.tokenScan.error=n.trade.error,e.tokenScan.isProxy=n.code.isProxy,e.tokenScan.verified=n.code.verified,e.tokenScan.ownership=n.ownership,(a=Object(r.h)(e.tokenScan.behavior)).fee=n.code.detectedScams.filter((function(e){return"fee"===e.type})).length>0,a.maxTX=n.code.detectedScams.filter((function(e){return"maxTX"===e.type})).length>0,a.maxSell=n.code.detectedScams.filter((function(e){return"maxSell"===e.type})).length>0,a.honeypot=n.code.detectedScams.filter((function(e){return"honeypot"===e.type})).length>0,a.blacklist=n.code.detectedScams.filter((function(e){return"blacklist"===e.type})).length>0,a.mint=n.code.detectedScams.filter((function(e){return"mint"===e.type})).length>0,e.tokenScan.behavior=a,e.tokenScan.burnedSupply=n.holders.burnedSupply,e.tokenScan.liquidity=n.holders.liquidity,e.tokenScan.top5Hold=n.holders.top5Hold,e.tokenScan.whaleHolders=n.holders.whaleHolders,e.tokenScan.liquiditySupply=n.holders.liquiditySupply,o="",s=0;s<e.tokenScan.whaleHolders.length;s++)l=e.tokenScan.whaleHolders[s].address,i=e.tokenScan.whaleHolders[s].supplyHold,d="".concat(l,"\t\t").concat(i,"%\n"),o+=d;u=!1,!0===e.tokenScan.ownership?u=!0:Object(r.x)(e.tokenScan.ownership)!==Object(r.x)("0x000000000000000000000000000000000000bEEF")&&Object(r.x)(e.tokenScan.ownership)!==Object(r.x)("0x0000000000000000000000000000000000000000")||(u=!0),e.templateText="----------基本信息----------\n"+"名称: ".concat(e.tokenScan.name,"\n")+"代币: ".concat(e.tokenScan.symbol,"\n")+"合约地址: ".concat(e.form.tokenAddress,"\n")+"合约是否开源: ".concat(e.tokenScan.verified?"开源":"为开源","\n")+"----------风险检查----------\n"+"能否卖出:".concat(e.tokenScan.isHoneypot?"不可以\n":"可以\n")+"买入: ".concat(e.tokenScan.buyFee?e.tokenScan.buyFee:0,"%\t\t卖出: ").concat(e.tokenScan.sellFee?e.tokenScan.sellFee:0,"%\n")+"----------合约扫描结果----------\n"+"".concat(e.tokenScan.isHoneypot?"法克，貔貅，草～\n":"不像貔貅\n")+"".concat(a.fee?"可修改手续费\n":"")+"".concat(a.maxTX?"存在限购/限卖限制\n":"")+"".concat(a.maxSell?"存在限卖限制\n":"")+"".concat(a.blacklist?"存在黑名单机制\n":"")+"".concat(a.mint?"可增发代币\n":"")+"所有权：".concat(e.tokenScan.ownership,"（").concat(u?"已放弃":"未放弃","）\n")+"----------持仓数据检查----------\n"+"Burn 燃烧比率: ".concat(e.tokenScan.burnedSupply?e.tokenScan.burnedSupply:0,"%\n")+"Pancake 流动性总比例: ".concat(e.tokenScan.liquiditySupply?e.tokenScan.liquiditySupply:0,"%\n")+"前5用户比例: ".concat(e.tokenScan.top5Hold,"%\n")+o;case 43:case"end":return t.stop()}}),t)})))()},scanContract:function(e){var t=this;return Object(o.a)(Object(c.a)().mark((function n(){var o,r,l,i,d,u,p,k;return Object(c.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=new TextEncoder,r=o.encode("fb559d769c45f1f9ca283d7fa923d3c9"),n.next=4,crypto.subtle.importKey("raw",r,{name:"HMAC",hash:"SHA-256"},!1,["sign"]);case 4:return l=n.sent,i=(new Date).getTime()+5e4,d=i.toString()+e,n.next=10,crypto.subtle.sign("HMAC",l,o.encode(d));case 10:return u=n.sent,p=btoa(String.fromCharCode.apply(String,Object(a.a)(new Uint8Array(u)))),n.next=15,Object(s.u)(p,i,e);case 15:if(200!==(k=n.sent).status){n.next=20;break}return n.abrupt("return",k.data.result);case 20:t.$message.error(k.data);case 21:return n.abrupt("return",null);case 22:case"end":return n.stop()}}),n)})))()}}},u=d,p=(n("b0ad"),n("2877")),k=Object(p.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-form",{attrs:{"label-position":"top",model:e.form}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"title"},[e._v("土狗合约代码分析(测试版)")]),n("el-form-item",{attrs:{label:"（BSC-Pancake）合约地址:"}},[n("div",{staticClass:"tokenAddress"},[n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.scan,expression:"loading.scan"}],attrs:{placeholder:"请输入代币合约地址"},model:{value:e.form.tokenAddress,callback:function(t){e.$set(e.form,"tokenAddress",t)},expression:"form.tokenAddress"}}),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.scan,expression:"loading.scan"}],staticStyle:{"margin-left":"30px","margin-right":"30px"},attrs:{type:"success",round:""},on:{click:function(t){return e.scan()}}},[e._v(" 合 约 扫 描 ")])],1)]),n("el-form-item",{attrs:{label:"扫描结果:"}},[n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.scan,expression:"loading.scan"}],staticClass:"resultMsg",staticStyle:{resize:"none"},attrs:{type:"textarea",rows:20},model:{value:e.templateText,callback:function(t){e.templateText=t},expression:"templateText"}})],1)],1)],1)],1)}),[],!1,null,"322ca468",null);t.default=k.exports}}]);