(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1344e08e"],{"0c2f":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return _}));var s=a("c7eb"),r=a("1da1"),n=(a("d3b7"),a("25f0"),a("ddb0"),a("54c1")),c=a("c030"),i=a("58c5"),o=a("f76c"),l=a("b075"),d=a("64b9"),p=a("0774"),u=a("d01b"),b=a("59da"),v=a("1cc8"),m=function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.Keypair.generate(),a=t.publicKey.toBase58(),r=p.encode(t.secretKey),e.abrupt("return",{address:a,privateKey:r});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(Object(s.a)().mark((function t(){var a,r,n,c,d,p;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(i.generateMnemonic)(o.wordlist,256),t.next=3,Object(i.mnemonicToSeed)(a);case 3:return r=t.sent,t.next=6,Object(l.fromSeed)(e.from(r));case 6:return n=t.sent,t.next=9,n.derivePath("m/44'/195'/0'/0");case 9:return c=t.sent,t.next=12,c.privateKey.toString("hex");case 12:return d=t.sent,t.next=15,u.address.fromPrivateKey(d);case 15:return p=t.sent,t.abrupt("return",{address:p,mnemonic:a,privateKey:d});case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(r.a)(Object(s.a)().mark((function t(){var a,r,n,c,d,p,u;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(i.generateMnemonic)(o.wordlist,256),t.next=3,Object(i.mnemonicToSeed)(a);case 3:return r=t.sent,t.next=6,Object(l.fromSeed)(e.from(r),b.networks.bitcoin);case 6:return n=t.sent,t.next=9,n.derivePath("m/44'/0'/0'/0");case 9:return c=t.sent,d=c.derive(0),p=b.payments.p2pkh({pubkey:d.publicKey,network:b.networks.bitcoin}).address,u=b.payments.p2sh({redeem:b.payments.p2wpkh({pubkey:d.publicKey}),network:b.networks.bitcoin}).address,t.abrupt("return",{address:p,nestedAddress:u,mnemonic:a,privateKey:d.toWIF()});case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(r.a)(Object(s.a)().mark((function t(){var a,r,n,d,p,u;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(i.generateMnemonic)(o.wordlist,256),t.next=3,Object(i.mnemonicToSeed)(a);case 3:return r=t.sent,t.next=6,Object(l.fromSeed)(e.from(r));case 6:return n=t.sent,t.next=9,n.derivePath("m/44'/60'/0'/0/0");case 9:return d=t.sent,t.next=12,d.privateKey.toString("hex");case 12:return p=t.sent,u=new c.ethers.Wallet(p),t.abrupt("return",{address:u.address,mnemonic:a,privateKey:p});case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(r.a)(Object(s.a)().mark((function t(){var a,r,c,d,p,u;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(i.generateMnemonic)(o.wordlist,256),t.next=3,Object(i.mnemonicToSeed)(a);case 3:return r=t.sent,t.next=6,Object(l.fromSeed)(e.from(r));case 6:return c=t.sent,t.next=9,c.derivePath("m/44'/714'/0'/0");case 9:return d=t.sent,t.next=12,d.privateKey.toString("hex");case 12:return p=t.sent,u=n.crypto.getAddressFromPrivateKey(p,"BNB"),t.abrupt("return",{address:u,mnemonic:a,privateKey:p});case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.NewlyCreatedWallet("english",0),e.abrupt("return",{address:t.keys.public_addr,mnemonic:t.mnemonicString,privateKey:t.seed,viewPrivateKey:t.keys.view.sec});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(r.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next=1===e.t0?4:2===e.t0||3===e.t0||4===e.t0||5===e.t0||11===e.t0||12===e.t0||13===e.t0||14===e.t0||15===e.t0||16===e.t0||17===e.t0||18===e.t0||19===e.t0||20===e.t0||21===e.t0||22===e.t0||23===e.t0||24===e.t0?5:6===e.t0?6:7===e.t0?7:8===e.t0?8:9===e.t0?9:10===e.t0?10:11;break;case 4:return e.abrupt("return",w());case 5:return e.abrupt("return",y());case 6:return e.abrupt("return",x());case 7:return e.abrupt("return",h());case 8:return e.abrupt("return",f());case 9:return e.abrupt("return",g());case 10:return e.abrupt("return",m());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}).call(this,a("1c35").Buffer)},27:function(e,t){},28:function(e,t){},34:function(e,t){},35:function(e,t){},36:function(e,t){},37:function(e,t){},38:function(e,t){},39:function(e,t){},"8d68":function(e,t,a){"use strict";a("a72e")},a72e:function(e,t,a){},d912:function(e,t,a){"use strict";a.r(t),a("b0c0");var s=(a("c740"),a("d81d"),a("14d9"),a("b64b"),a("d3b7"),a("3ca3"),a("ddb0"),a("ed08")),r=a("0c2f"),n=a("b893"),c=a("05b3"),i=a("8325"),o={name:"CreateWallet",components:{QrcodeVue:a("d7b0").a},directives:{clipboard:i.a},data:function(){return{percentage:0,miniContainer:!1,downloadLoading:!1,walletCoinList:c.x,show:{display:"none"},val:null,walletList:[],walletCoin:c.x[0]}},methods:{selectChange:function(e){if(this.$route.path){var t=this.$route.path.lastIndexOf("/"),a=this.$route.path.substring(0,t)+"/"+Object(n.A)(e.name);this.$router.push(a)}},clipboardSuccess:function(){this.$message({message:this.$t("copySuccess"),type:"success",duration:1500})},onCreateWallet:function(){var e=this;this.walletCoin?this.val>0&&(this.walletList=[],this.miniContainer=!0,this.show.display="block",setTimeout((function(){e.percentage=30;for(var t=1;t<=e.val;t++)e.createWallet(t)}),500)):this.$message.error(this.$t("createWallet.chooseChainMsg"))},exportExcel:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-5164a781"),a.e("chunk-19aba6d4")]).then(a.bind(null,"4bf8")).then((function(t){var a=Object.keys(e.walletList[0]),r=e.walletList,n=e.formatJson(a,r),c=e.walletCoin.name+Object(s.o)(new Date,"{h}{i}{s}");t.export_json_to_excel({header:a,filename:c,data:n}),e.downloadLoading=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(s.o)(t[e]):t[e]}))}))},createWallet:function(e){var t=this;Object(r.a)(this.walletCoin.id).then((function(a){t.walletList.push(a),t.percentage=e/t.val*100}))}},created:function(){var e=this.$route.meta.symbol,t=c.x.findIndex((function(t){return t.name===e}));this.walletCoin=c.x[t]}},l=o,d=(a("8d68"),a("2877")),p=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container",class:{miniContainer:e.miniContainer}},[t("div",{staticClass:"createBox"},[t("div",{staticClass:"boxCenter"},[t("div",{staticClass:"coinIcon"},[t("svg-icon",{style:"color:"+e.walletCoin.color,attrs:{"icon-class":e.walletCoin.icon}})],1),t("div",{staticClass:"inputBox"},[t("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"","value-key":"id",placeholder:e.$t("pleaseChoose")},on:{change:e.selectChange},model:{value:e.walletCoin,callback:function(t){e.walletCoin=t},expression:"walletCoin"}},e._l(e.walletCoinList,(function(a){return t("el-option",{key:a.id,attrs:{label:a.name,value:a}},[t("span",{staticStyle:{float:"left"}},[e._v(e._s(a.name))]),t("span",{staticStyle:{float:"right","font-size":"13px"}},[t("svg-icon",{style:"color:"+a.color,attrs:{"icon-class":a.icon}})],1)])})),1)],1),t("div",{staticClass:"inputBox"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("createWallet.walletNumMsg"),oninput:"value=value.replace(/[^\\d]/g,'')"},domProps:{value:e.val},on:{input:function(t){t.target.composing||(e.val=t.target.value)}}})]),t("div",{staticClass:"icon",on:{click:e.onCreateWallet}},[t("i",{staticClass:"el-icon-right"})]),t("el-button",{staticClass:"exportBtn",style:e.show,attrs:{type:"primary",loading:e.downloadLoading,size:"medium"},on:{click:e.exportExcel}},[t("i",{staticClass:"el-icon-download"}),e._v(" "+e._s(e.$t("export"))+" ")])],1)])]),t("el-progress",{style:e.show,attrs:{type:"line","show-text":!1,percentage:e.percentage}}),t("div",{staticClass:"scrollBox",style:e.show},[t("el-card",{staticClass:"box-card"},e._l(e.walletList,(function(a,s){return t("div",{staticClass:"walletList"},[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"li"},[t("div",{staticClass:"imgBox"},[t("div",{staticClass:"el-badge item"},[t("qrcode-vue",{attrs:{size:"80",value:a.privateKey}}),t("sup",{staticClass:"el-badge__content el-badge__content--undefined is-fixed"},[e._v(e._s(s+1))])],1)]),t("div",{staticClass:"inputBox"},[t("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:a.address,callback:function(t){e.$set(a,"address",t)},expression:"wallet.address"}},[t("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.address")))]),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.address,expression:"wallet.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2),a.nestedAddress?t("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:a.nestedAddress,callback:function(t){e.$set(a,"nestedAddress",t)},expression:"wallet.nestedAddress"}},[t("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.nestedAddress")))]),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.nestedAddress,expression:"wallet.nestedAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e(),a.ksmAddress?t("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:a.ksmAddress,callback:function(t){e.$set(a,"ksmAddress",t)},expression:"wallet.ksmAddress"}},[t("template",{slot:"prepend"},[e._v("Ksm"+e._s(e.$t("createWallet.address")))]),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.ksmAddress,expression:"wallet.ksmAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e(),a.dotAddress?t("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:a.dotAddress,callback:function(t){e.$set(a,"dotAddress",t)},expression:"wallet.dotAddress"}},[t("template",{slot:"prepend"},[e._v("Dot"+e._s(e.$t("createWallet.address")))]),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.dotAddress,expression:"wallet.dotAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e(),t("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:a.privateKey,callback:function(t){e.$set(a,"privateKey",t)},expression:"wallet.privateKey"}},[t("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.privateKey")))]),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.privateKey,expression:"wallet.privateKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2),a.viewPrivateKey?t("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:a.viewPrivateKey,callback:function(t){e.$set(a,"viewPrivateKey",t)},expression:"wallet.viewPrivateKey"}},[t("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.viewPrivateKey")))]),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.viewPrivateKey,expression:"wallet.viewPrivateKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e(),a.mnemonic?t("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:a.mnemonic,callback:function(t){e.$set(a,"mnemonic",t)},expression:"wallet.mnemonic"}},[t("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.mnemonic")))]),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.mnemonic,expression:"wallet.mnemonic",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e()],1)])])],1)})),0)],1)],1)}),[],!1,null,"8ea8a00a",null);t.default=p.exports},f70f:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id="f70f"}}]);