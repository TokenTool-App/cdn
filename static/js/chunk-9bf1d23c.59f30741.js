(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9bf1d23c"],{"02f6":function(e,t,a){},"189a":function(e,t,a){"use strict";a.r(t);var n=a("b85c"),r=a("1da1"),s=a("5530"),c=(a("96cf"),a("d3b7"),a("25f0"),a("b0c0"),a("99af"),a("c740"),a("b775")),o=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c.a)({method:"GET",url:"https://openapi.debank.com/v1/user/token_authorized_list",params:{id:t,chain_id:a}}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),i=a("b893"),u=a("61f7"),p=a("05b3"),l=a("502c"),d=a("901e"),v=a.n(d),b=a("2f62"),f=a("99e5"),w=a.n(f);v.a.config({FORMAT:{decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0}});var h={name:"approve",computed:Object(s.a)({},Object(b.d)({myAddress:function(e){return e.dapp.web3.account},networkId:function(e){return e.dapp.web3.networkId},web3Instance:function(e){return e.dapp.web3.web3Instance}})),data:function(){return{colSpan:12,mToUpperCase:i.p,dinner:!0,percentage:0,miniContainer:!1,downloadLoading:!1,walletCoinList:p.a,show:!1,address:null,approveList:[],walletCoin:null,approveGrade:[{name:"ordinary",value:"approveCheck.ordinary"},{name:"gradeLow",value:"approveCheck.gradeLow"},{name:"gradeMiddle",value:"approveCheck.gradeMiddle"},{name:"gradeHigh",value:"approveCheck.gradeHigh"}],loading:{approve:!1,bachApprove:!1},approveObj:{chain:"",toAddress:"",toLogoUrl:"",toAddressUrl:"",symbol:"",price:0,contractUrl:"",contractAddress:"",contractName:"",contractLogoUrl:"",approveAmount:0,isContract:!1,isOpenSource:!1,isHacked:!1,isAbandoned:!1,type:0,load:!1,status:!1}}},methods:{bachApprove:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var a,n,r,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a="closeApprove",e.loading.bachApprove=!0,n=0;case 3:if(!(n<e.approveList.length)){t.next=12;break}return r=e.approveList[n],t.next=7,Object(l.a)(r.toAddress,"0",r.contractAddress,a);case 7:t.sent&&e.$message.success("操作成功");case 9:n++,t.next=3;break;case 12:e.loading.bachApprove=!1,e.dinner&&(s=w.a.utils.toWei(e.walletCoin.reward.toString(),"ether"),e.web3Instance.eth.sendTransaction({from:e.myAddress,to:e.walletCoin.rewardAddress,value:s}).catch((function(e){})));case 15:case"end":return t.stop()}}),t)})))()},selectChange:function(e){this.approveList=[],this.miniContainer=!1,this.show=!1,this.loading.approve=!1},onApprove:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loading.approve){t.next=2;break}return t.abrupt("return");case 2:if(e.walletCoin){t.next=5;break}return e.$message.error(e.$t("approveCheck.chooseChainMsg")),t.abrupt("return");case 5:if(e.address){t.next=8;break}return e.$message.error(e.$t("approveCheck.inputAddressMsg")),t.abrupt("return");case 8:if(Object(u.h)(e.address)){t.next=11;break}return e.$message.error(e.$t("batchCollection.invalidAddress")),t.abrupt("return");case 11:return e.approveList=[],e.miniContainer=!1,e.show=!1,e.loading.approve=!0,t.next=17,o(e.address,Object(i.o)(e.walletCoin.name));case 17:(a=t.sent).data&&a.data.length>0?(e.miniContainer=!0,e.show=!0,setTimeout((function(){e.checkApprove(a.data)}),500)):(e.$message.info(e.$t("approveCheck.notTokenMsg")),e.loading.approve=!1);case 19:case"end":return t.stop()}}),t)})))()},closeApprove:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"closeApprove",e.load=!0,a.next=4,Object(l.a)(e.toAddress,"0",e.contractAddress,"closeApprove");case 4:n=a.sent,e.load=!1,n&&(e.status=!0),n&&t.dinner&&(r=w.a.utils.toWei(t.walletCoin.reward.toString(),"ether"),t.web3Instance.eth.sendTransaction({from:t.myAddress,to:t.walletCoin.rewardAddress,value:r}).catch((function(e){})));case 8:case"end":return a.stop()}}),a)})))()},checkType:function(e){return new v.a(e).gte(1e10)?3:new v.a(e).gte(1e5)?2:1},checkApprove:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function a(){var r,s,c,o,u,p,l,d;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=0,s=Object(n.a)(e),a.prev=2,s.s();case 4:if((c=s.n()).done){a.next=13;break}if((o=c.value).spenders){a.next=8;break}return a.abrupt("continue",11);case 8:u=Object(n.a)(o.spenders);try{for(u.s();!(p=u.n()).done;)l=p.value,(d=Object(i.e)(t.approveObj)).chain=o.chain,d.toAddress=o.id,d.toLogoUrl=o.logo_url?o.logo_url:t.walletCoin.defaultImg,d.toAddressUrl="".concat(t.walletCoin.baseUrl,"token/").concat(d.toAddress,"?a=").concat(t.address),d.symbol=o.symbol,d.price=new v.a(o.price),d.contractAddress=l.id,d.contractUrl="".concat(t.walletCoin.baseUrl,"address/").concat(l.id),d.contractName=l.id,d.contractLogoUrl=t.walletCoin.defaultImg,l.protocol&&(d.contractName=l.protocol.name,d.contractLogoUrl=l.protocol.logo_url),d.approveAmount=new v.a(l.value),d.isContract=l.is_contract,d.isOpenSource=l.is_open_source,d.isHacked=l.is_hacked,d.isAbandoned=l.is_abandoned,d.type=t.checkType(l.value),t.approveList.push(d)}catch(e){u.e(e)}finally{u.f()}t.percentage=++r/e.length*100;case 11:a.next=4;break;case 13:a.next=18;break;case 15:a.prev=15,a.t0=a.catch(2),s.e(a.t0);case 18:return a.prev=18,s.f(),a.finish(18);case 21:t.loading.approve=!1;case 22:case"end":return a.stop()}}),a,null,[[2,15,18,21]])})))()},initConfig:function(){var e=this.$route.meta.symbol,t=p.a.findIndex((function(t){return t.symbol===e}));this.walletCoin=p.a[t],document.body.clientWidth<640&&(this.colSpan=24)}},created:function(){this.initConfig()}},m=h,g=(a("6fa4"),a("2877")),C=Object(g.a)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",class:{miniContainer:e.miniContainer}},[a("div",{staticClass:"createBox"},[a("div",{staticClass:"boxCenter"},[a("div",{staticClass:"coinIcon"},[a("svg-icon",{style:"color:"+e.walletCoin.color,attrs:{"icon-class":e.walletCoin.icon}})],1),a("div",{staticClass:"inputBox"},[a("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",placeholder:e.$t("pleaseChoose")},on:{change:e.selectChange},model:{value:e.walletCoin,callback:function(t){e.walletCoin=t},expression:"walletCoin"}},e._l(e.walletCoinList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),a("span",{staticStyle:{float:"right","font-size":"13px"}},[a("svg-icon",{style:"color:"+t.color,attrs:{"icon-class":t.icon}})],1)])})),1)],1),a("div",{staticClass:"inputBox"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("approveCheck.addressTips")},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})]),a("div",{staticClass:"icon",on:{click:e.onApprove}},[a("i",{class:e.loading.approve?"el-icon-loading":"el-icon-right"})])])])]),e.show?a("el-progress",{attrs:{type:"line","show-text":!1,percentage:e.percentage}}):e._e(),e.show?a("div",{staticClass:"scrollBox"},[a("div",{staticClass:"tips"},[a("p",{staticClass:"alertText"},[e._v(e._s(e.$t("approveCheck.alertText")))]),a("p",[a("el-checkbox",{model:{value:e.dinner,callback:function(t){e.dinner=t},expression:"dinner"}},[e._v(e._s(e.$t("approveCheck.pleaseCoffee"))+"("+e._s(e.walletCoin.reward+""+e.walletCoin.symbol)+")")])],1),a("p",[a("el-button",{attrs:{type:"success",loading:e.loading.bachApprove},on:{click:e.bachApprove}},[e._v("批量取消授权")])],1)]),a("el-row",{staticClass:"cardList"},e._l(e.approveList,(function(t,n){return a("el-col",{key:n,attrs:{span:e.colSpan}},[a("div",{staticClass:"card"},[a("div",{staticClass:"coinInfo"},[a("div",{staticClass:"left"},[a("div",{staticClass:"imgBox"},[a("el-image",{staticStyle:{width:"28px",height:"28px"},attrs:{src:t.toLogoUrl}})],1),a("div",{staticClass:"symbol"},[a("a",{staticStyle:{"margin-left":"6px"},attrs:{href:t.toAddressUrl,target:"_blank"}},[e._v(e._s(t.symbol))])]),t.price>0?a("div",{staticClass:"price"},[e._v(" "+e._s(" ~ $ "+t.price.toFixed(2))+" ")]):e._e()]),a("div",{staticClass:"right"},[a("span",[e._v(e._s(e.$t("approveCheck.dangerLevel"))+":")]),a("span",{class:e.approveGrade[t.type].name},[e._v(e._s(e.$t(e.approveGrade[t.type].value)))])])]),a("ul",[a("li",[a("p",[a("span",{staticClass:"key"},[e._v(e._s(e.$t("approveCheck.contract"))+":")]),a("a",{attrs:{href:t.contractUrl,target:"_blank"}},[e._v(e._s(t.contractName))])])]),a("li",[a("p",[a("span",{staticClass:"key"},[e._v(e._s(e.$t("approveCheck.token"))+":")]),a("a",{attrs:{href:t.toAddressUrl,target:"_blank"}},[e._v(e._s(t.toAddress))])])]),a("li",[a("p",[a("span",{staticClass:"key"},[e._v(e._s(e.$t("approveCheck.allowance"))+":")]),a("span",[e._v(e._s(3===t.type?e.$t("approveCheck.unlimited"):t.approveAmount.toFormat(4))+" "),3===t.type?a("i",{staticClass:"el-icon-warning",staticStyle:{color:"red"}}):e._e()])])])]),a("div",{staticClass:"approveBtn"},[e.mToUpperCase(e.myAddress)===e.mToUpperCase(e.address)&&e.walletCoin.id===parseInt(e.networkId)?a("el-button",{attrs:{size:"mini",loading:t.load,disabled:t.status,type:t.status?"success":"danger"},on:{click:function(a){return e.closeApprove(t)}}},[e._v(e._s(t.status?e.$t("success"):e.$t("approveCheck.cancelApprove")))]):a("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.$t("approveCheck.unlockWallet")))])],1)])])})),1)],1):e._e()],1)}),[],!1,null,"af60964e",null);t.default=C.exports},"502c":function(e,t,a){"use strict";a.d(t,"e",(function(){return p})),a.d(t,"h",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return v})),a.d(t,"i",(function(){return b})),a.d(t,"g",(function(){return f})),a.d(t,"j",(function(){return w})),a.d(t,"f",(function(){return h})),a.d(t,"d",(function(){return m})),a.d(t,"a",(function(){return g}));var n=a("1da1"),r=(a("96cf"),a("51d2")),s=(a("e95b"),a("4360")),c=a("ed08"),o=a("cf29"),i=a("901e"),u=a.n(i),p=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.getGasPrice;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,a,n){var i,u,p,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="getTokenBalance",e.next=3,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return u=e.sent,p={name:"balanceOf",erc20:!0,data:[n]},e.next=7,Object(o.b)(u,p,s.a.state.dapp.web3.account,i);case 7:return l=e.sent,e.abrupt("return",Object(c.d)(l,a));case 9:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,a,n,c){var i,p,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="getAllowance",e.next=3,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return p=e.sent,l={name:"allowance",erc20:!0,data:[n,c]},e.next=7,Object(o.b)(p,l,s.a.state.dapp.web3.account,i);case 7:return d=e.sent,e.abrupt("return",new u.a(d));case 9:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),v=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,a,n){var c,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="getAllowance",e.next=3,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return i=e.sent,u={name:"allowance",erc20:!0,data:[a,n]},e.next=7,Object(o.b)(i,u,s.a.state.dapp.web3.account,c);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),b=function(e,t){return s.a.state.dapp.web3.web3Instance.eth.getBalance(e).then((function(e){return new u.a(Object(c.d)(e,t))}))},f=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return a=e.sent,n={name:"symbol",erc20:!0,data:[]},e.next=6,Object(o.b)(a,n,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,a){var n,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return n=e.sent,i={name:"totalSupply",erc20:!0,data:[]},e.next=6,Object(o.b)(n,i,s.a.state.dapp.web3.account);case 6:return u=e.sent,e.abrupt("return",Object(c.d)(u,a));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return a=e.sent,n={name:"name",erc20:!0,data:[]},e.next=6,Object(o.b)(a,n,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return a=e.sent,n={name:"decimals",erc20:!0,data:[]},e.next=6,Object(o.b)(a,n,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,a,n,c){var i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return i=e.sent,u={name:"approve",erc20:!0,data:[n,a]},e.next=6,Object(o.d)(i,u,s.a.state.dapp.web3.account,c);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}()},"6fa4":function(e,t,a){"use strict";a("02f6")},b775:function(e,t,a){"use strict";var n=a("bc3a"),r=a.n(n);r.a.defaults.timeout=3e4,r.a.defaults.baseURL="https://service.cointools.workers.dev/",t.a=r.a}}]);