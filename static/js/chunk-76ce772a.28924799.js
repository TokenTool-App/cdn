(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-76ce772a"],{"0352a":function(e,t,s){"use strict";s("3c3e")},"29f0":function(e,t,s){"use strict";s("7e5c")},"3c3e":function(e,t,s){},"69f1":function(e,t,s){"use strict";s.r(t);var r=(s("9911"),s("fb6a"),s("38cf"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vanityUserInput"},[s("el-form",{ref:"ruleForm",attrs:{"status-icon":"","label-position":"top",model:e.ruleForm,rules:e.rules}},[s("el-form-item",{attrs:{label:"请输入要生成的靓号字符串 比如：0000",prop:"hex"}},[s("el-input",{attrs:{autocomplete:"off",placeholder:e.ruleForm.suffix?"后缀":"前缀",disabled:e.running||e.ruleForm.link>0},model:{value:e.ruleForm.hex,callback:function(t){e.$set(e.ruleForm,"hex",t)},expression:"ruleForm.hex"}})],1),s("div",{staticClass:"example hide-prerender",staticStyle:{display:"none"}},[e._v(" E.g. "),s("span",{staticClass:"monospace"},[e._v(" T"),e.ruleForm.suffix?e._e():s("b",{domProps:{textContent:e._s(e.example.chosen)}}),s("span",{domProps:{textContent:e._s(e.example.random)}}),e.ruleForm.suffix?s("b",{domProps:{textContent:e._s(e.example.chosen)}}):e._e()])]),s("el-row",[s("el-col",{attrs:{span:10}},[s("el-form-item",{attrs:{label:"是否区分大小写"}},[s("el-radio",{attrs:{disabled:e.running,label:!0},model:{value:e.ruleForm.checksum,callback:function(t){e.$set(e.ruleForm,"checksum",t)},expression:"ruleForm.checksum"}},[e._v("YES")]),s("el-radio",{attrs:{disabled:e.running,label:!1},model:{value:e.ruleForm.checksum,callback:function(t){e.$set(e.ruleForm,"checksum",t)},expression:"ruleForm.checksum"}},[e._v("NO")])],1)],1),s("el-col",{attrs:{span:14}},[s("el-form-item",{attrs:{label:"前缀还是后缀"}},[s("el-radio",{attrs:{disabled:e.running,label:0},model:{value:e.ruleForm.link,callback:function(t){e.$set(e.ruleForm,"link",t)},expression:"ruleForm.link"}},[e._v("自定义后缀")]),s("el-radio",{attrs:{disabled:e.running,label:3},model:{value:e.ruleForm.link,callback:function(t){e.$set(e.ruleForm,"link",t)},expression:"ruleForm.link"}},[e._v("3连号")]),s("el-radio",{attrs:{disabled:e.running,label:4},model:{value:e.ruleForm.link,callback:function(t){e.$set(e.ruleForm,"link",t)},expression:"ruleForm.link"}},[e._v("4连号")]),s("el-radio",{attrs:{disabled:e.running,label:5},model:{value:e.ruleForm.link,callback:function(t){e.$set(e.ruleForm,"link",t)},expression:"ruleForm.link"}},[e._v("5连号")]),s("el-radio",{attrs:{disabled:e.running,label:6},model:{value:e.ruleForm.link,callback:function(t){e.$set(e.ruleForm,"link",t)},expression:"ruleForm.link"}},[e._v("6连号")]),s("el-radio",{attrs:{disabled:e.running,label:7},model:{value:e.ruleForm.link,callback:function(t){e.$set(e.ruleForm,"link",t)},expression:"ruleForm.link"}},[e._v("7连号")]),s("el-radio",{attrs:{disabled:e.running,label:8},model:{value:e.ruleForm.link,callback:function(t){e.$set(e.ruleForm,"link",t)},expression:"ruleForm.link"}},[e._v("8连号")])],1)],1)],1),s("el-form-item",{attrs:{label:"线程(根据设备配置调整)"}},[s("el-input-number",{staticClass:"threads",attrs:{disabled:e.running,min:1,max:100},model:{value:e.ruleForm.threads,callback:function(t){e.$set(e.ruleForm,"threads",t)},expression:"ruleForm.threads"}})],1),s("el-row",{staticClass:"btnList"},[s("el-col",{attrs:{span:12}},[s("el-button",{staticClass:"btn",attrs:{disabled:e.running||e.inputError||e.ruleForm.error,type:"primary"},on:{click:e.startGen}},[e._v("生成")])],1),s("el-col",{attrs:{span:12}},[s("el-button",{staticClass:"btn",attrs:{disabled:!e.running,type:"info"},on:{click:e.stopGen}},[e._v("暂停")])],1)],1)],1)],1)}),i=(s("a9e3"),s("ac1f"),s("00b4"),s("d3b7"),s("25f0"),s("61f7")),n={props:{running:Boolean,cores:Number},data:function(){return{ruleForm:{threads:4,hex:"",checksum:!0,suffix:!0,error:!1,link:0},rules:{hex:[{validator:function(e,t,s){!t.length||/^[0-9A-F]+$/g.test(t.toUpperCase())?s():s(new Error("靓号生成规则限制字符串: 0-9, A-F, a-f"))},trigger:"change"}]}}},computed:{inputError:function(){return!Object(i.f)(this.ruleForm.hex)},example:function(){if(this.inputError)return"N/A";for(var e=this.checksum?this.ruleForm.hex:Object(i.g)(this.ruleForm.hex),t="T",s=0;s<32-this.ruleForm.hex.length;s++)t+=Object(i.g)(Math.floor(16*Math.random()).toString(16));return{random:t,chosen:e}}},methods:{startGen:function(){this.running||this.inputError||this.ruleForm.error||this.$emit("start")},stopGen:function(){this.$emit("stop")}},watch:{"ruleForm.link":function(){for(var e="",t=0;t<this.ruleForm.link;t++)e+="a";this.$emit("input-change","hex",e),this.$emit("input-change","link",this.ruleForm.link)},"ruleForm.hex":function(){this.$emit("input-change","hex",this.ruleForm.hex)},"ruleForm.checksum":function(){this.$emit("input-change","checksum",this.ruleForm.checksum)},"ruleForm.suffix":function(){this.$emit("input-change","suffix",this.ruleForm.suffix)},"ruleForm.threads":function(){this.$emit("input-change","threads",this.ruleForm.threads)}}},a=n,o=(s("ac93"),s("2877")),l=Object(o.a)(a,r,[],!1,null,null,null).exports,u=(s("5319"),s("2f62"),s("8f14")),c=s.n(u),h={name:"Statistics",data:function(){return{speed:0,count:0}},props:{hex:String,checksum:Boolean,status:String,firstTick:{}},watch:{hex:function(){this.count=0},checksum:function(){this.count=0}},computed:{inputError:function(){return!Object(i.f)(this.hex)},difficulty:function(){return this.inputError?"N/A":Object(i.h)(this.hex,this.checksum)},probability50:function(){return this.inputError?0:Math.floor(Math.log(.5)/Math.log(1-1/this.difficulty))},adresses50:function(){return this.probability50===-1/0?"Nearly impossible":this.inputError?"N/A":this.formatNum(this.probability50)+" addresses"},time50:function(){var e=this.probability50/this.speed;if(e>631152e4||e===-1/0)return"Thousands of years";var t="zh-CN"===this.$store.getters.lang?"zh_CN":"en";return this.inputError?"N/A":c()(1e3*Math.round(e),{largest:2,language:t})},probability:function(){return Math.round(1e4*Object(i.b)(this.difficulty,this.count))/100}},methods:{formatNum:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}},created:function(){var e=this;this.$parent.$parent.$parent.$on("increment-counter",(function(t){e.count+=t>0?t:-e.count,e.speed=t>0?Math.floor(1e3*e.count/(performance.now()-e.firstTick)):0}))}},d=h,p=(s("29f0"),Object(o.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vanityStatistics"},[s("ul",[s("li",[s("span",{staticClass:"label"},[e._v("难度")]),s("span",{staticClass:"value",domProps:{textContent:e._s(e.formatNum(e.difficulty))}},[e._v("1")])]),s("li",[s("span",{staticClass:"label"},[e._v("生成")]),s("span",{staticClass:"value",domProps:{textContent:e._s(e.formatNum(e.count)+(1===e.count?" address":" addresses"))}},[e._v("0 addresses")])]),s("li",[s("span",{staticClass:"label"},[e._v("50% 可能性")]),s("span",{staticClass:"value",domProps:{textContent:e._s(e.speed?e.time50:e.adresses50)}},[e._v("0 addresses")])]),s("li",[s("span",{staticClass:"label"},[e._v("速度")]),s("span",{staticClass:"value",domProps:{textContent:e._s(e.speed+" addr/s")}},[e._v("0 addr/s")])]),s("li",[s("span",{staticClass:"label"},[e._v("状态")]),s("span",{staticClass:"value",domProps:{textContent:e._s(e.status)}},[e._v("Waiting")])])]),s("div",{staticClass:"progressBox"},[s("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:e.probability}})],1)])}),[],!1,null,"2dee7aec",null)),m=p.exports,f=s("7f5c"),v=s("d7b0"),b=s("8325"),k={name:"vanityAddressGenerator",components:{UserInput:l,Statistics:m,QrcodeVue:v.a},directives:{clipboard:b.a},data:function(){return{running:!1,status:"Waiting",workers:[],threads:4,cores:0,result:{address:"",privateKey:""},input:{hex:"",checksum:!0,suffix:!0,type:2,link:0},firstTick:null,error:null}},watch:{threads:function(){this.running||this.initWorkers()}},methods:{clipboardSuccess:function(){this.$message({message:"Copy successfully",type:"success",duration:1500})},setInput:function(e,t){switch(e){case"link":this.input.link=t;break;case"hex":this.input.hex=t;break;case"checksum":this.input.checksum=t;break;case"suffix":this.input.suffix=t;break;case"threads":this.threads=t}},displayResult:function(e){this.$emit("increment-counter",e.attempts),this.result.address=e.address,this.result.privateKey=e.privKey,this.status="Address found"},clearResult:function(){this.result.address="",this.result.privateKey="",this.$emit("increment-counter",-1)},initWorkers:function(){var e=this;if(this.workers.length!==this.threads)if(this.workers.length>this.threads){for(var t=this.threads;t<this.workers.length;t++)this.workers[t].terminate();this.workers=this.workers.slice(0,this.threads)}else for(var s=this.workers.length;s<this.threads;s++)try{this.workers[s]=new f.a,this.workers[s].onmessage=function(t){return e.parseWorkerMessage(t.data)}}catch(e){this.error=e,this.status="Error";break}},parseWorkerMessage:function(e){return e.error?(this.stopGen(),this.error=e.error,void(this.status="Error")):e.address?(this.stopGen(),this.displayResult(e)):void this.$emit("increment-counter",e.attempts)},startGen:function(){if(window.Worker){this.clearResult(),this.running=!0;for(var e=0;e<this.workers.length;e++)this.workers[e].postMessage(this.input);this.status="Running",this.firstTick=performance.now()}else this.error="workers_unsupported"},stopGen:function(){this.running=!1,this.status="Stopped";for(var e=0;e<this.workers.length;e++)this.workers[e].terminate();this.workers=[],this.initWorkers()},countCores:function(){var e=0;try{e=parseInt(navigator.hardwareConcurrency,10)}catch(e){}e&&(this.cores=e,this.threads=this.cores)},benchmark:function(e){e=e||1e4;var t=new f.a,s=0,r=[],i=[];t.onmessage=function(){r.push(performance.now()),1!==r.length&&(i.push(r[r.length-1]-r[r.length-2]),(s+=500)>=e&&t.terminate())};var n={checksum:!0,hex:"f".repeat(5),suffix:!1};t.postMessage(n)}},created:function(){this.countCores(),this.initWorkers(),window.benchmark=this.benchmark,this.$root.$on("event",(function(e){window.umami&&window.umami.trackEvent(e,"click")}))}},g=k,x=(s("0352a"),Object(o.a)(g,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"vag"},[s("div",{staticClass:"title"},[e._v("钱包靓号地址生成器")]),s("div",{staticClass:"desc"},[e._v("生成钱包在你本地电脑执行,网站不能、也永远不会存储你的私钥，建议在生成钱包时断开网络（禁用WIFI或拔掉网线）。密钥库文件使用 AES-128-CTR 密码使用 BKDF2-SHA256 推导函数和 65536 次散列轮进行加密。 ")]),s("el-row",[s("el-col",{attrs:{xs:{span:24},span:14}},[s("userInput",{attrs:{running:e.running,cores:e.cores},on:{start:e.startGen,stop:e.stopGen,"input-change":e.setInput}})],1),s("el-col",{attrs:{xs:{span:24},span:10}},[s("statistics",{attrs:{hex:e.input.hex,checksum:e.input.checksum,status:e.status,"first-tick":e.firstTick}})],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.result.privateKey,expression:"result.privateKey"}],staticClass:"result"},[s("div",{staticClass:"el-badge item"},[s("qrcode-vue",{attrs:{size:"80",value:e.result.privateKey}})],1),s("div",{staticClass:"inputBox"},[s("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:e.result.address,callback:function(t){e.$set(e.result,"address",t)},expression:"result.address"}},[s("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.address")))]),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.result.address,expression:"result.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2),s("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:e.result.privateKey,callback:function(t){e.$set(e.result,"privateKey",t)},expression:"result.privateKey"}},[s("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.privateKey")))]),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.result.privateKey,expression:"result.privateKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2)],1)])],1)])}),[],!1,null,"c6d8b0f0",null));t.default=x.exports},"7e5c":function(e,t,s){},"857a":function(e,t,s){var r=s("1d80"),i=/"/g;e.exports=function(e,t,s,n){var a=String(r(e)),o="<"+t;return""!==s&&(o+=" "+s+'="'+String(n).replace(i,"&quot;")+'"'),o+">"+a+"</"+t+">"}},9911:function(e,t,s){"use strict";var r=s("23e7"),i=s("857a");r({target:"String",proto:!0,forced:s("af03")("link")},{link:function(e){return i(this,"a","href",e)}})},ac93:function(e,t,s){"use strict";s("f558")},af03:function(e,t,s){var r=s("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},f558:function(e,t,s){}}]);