(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3fa816ea"],{"09c3":function(t,a,e){"use strict";e("c34f")},"0b0e":function(t,a,e){"use strict";e.r(a);var s={name:"docs",data:function(){return{videoUrl:"",openVideo:!1}},methods:{closeVideo:function(){this.openVideo=!1},openChromeVideo:function(){this.videoUrl="https://cdn.jsdelivr.net/gh/TokenTool-App/cdn/wiki/chrome_plugin_install.MOV",this.openVideo=!0},batchCollection:function(){window.open("https://www.youtube.com/watch?v=Fp2CG15T4q8&list=PLGiGi3wdoLe0el5oktcf6dZbMKVm1Gj6D","_blank")},multiSender:function(){window.open("https://www.youtube.com/watch?v=Fp2CG15T4q8&list=PLGiGi3wdoLe0el5oktcf6dZbMKVm1Gj6D","_blank")},onOpenMetamask:function(){window.open("https://metamask.io/download.html","_blank")},onOpenChromePlugin:function(){window.open("https://cdn.jsdelivr.net/gh/TokenTool-App/cdn/wiki/metamask.zip","_blank")}}},i=(e("09c3"),e("2877")),l=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("el-tabs",{attrs:{type:"border-card"}},[e("el-tab-pane",{attrs:{label:"ETH批量发送教程"}},[e("div",{staticClass:"btnBox"},[e("el-button",{staticClass:"videoBtn",attrs:{icon:"el-icon-video-camera",type:"primary"},on:{click:t.batchCollection}},[t._v("查看视频教程")])],1),e("el-alert",{attrs:{title:"请确保已安装且解锁Metamask或在imToken、TokenPocket、Trust Wallet、Metamask mobile application中打开该Dapp",type:"info"}}),e("div",{staticClass:"block"},[e("el-timeline",[e("el-timeline-item",{attrs:{timestamp:"准备数据",placement:"top"}},[e("el-card",[e("ol",[e("li",[t._v("连接钱包，选择以太坊主网")]),e("li",[t._v("等待代币列表加载完成，代币列表如果加载失败，你可以尝试手动插入您的代币地址")]),e("li",[t._v("从代币列表中选择要空投的代币")]),e("li",[t._v("上传包含地址，余额的Excel, CSV, Txt文件或者手动插入地址和余额，逗号分隔")]),e("li",[t._v("点击下一步")])])])],1),e("el-timeline-item",{attrs:{timestamp:"确认数据",placement:"top"}},[e("el-card",[e("ol",{attrs:{start:"6"}},[e("li",[t._v("发送授信交易")]),e("li",[t._v("确认批量发送数据摘要，包含代币总数、地址总数、费用等")]),e("li",[t._v("点击发送")])])])],1),e("el-timeline-item",{attrs:{timestamp:"开始发送",placement:"top"}},[e("el-card",[e("ol",{attrs:{start:"9"}},[e("li",[t._v("打开钱包确认交易")]),e("li",[t._v("等待空投完成")])])])],1),e("el-timeline-item",{attrs:{timestamp:"完成",placement:"top"}})],1)],1)],1),e("el-tab-pane",{attrs:{label:"ETH批量归集教程"}},[e("div",{staticClass:"btnBox"},[e("el-button",{staticClass:"videoBtn",attrs:{icon:"el-icon-video-camera",type:"primary"},on:{click:t.multiSender}},[t._v("查看视频教程")])],1),e("div",{staticClass:"block"},[e("el-timeline",[e("el-timeline-item",{attrs:{timestamp:"准备数据",placement:"top"}},[e("el-card",[e("ol",[e("li",[t._v("把需要归集的地址私钥导入进列表")]),e("li",[t._v("选择需要归集的代币，选中需要归集的地址并查询余额。等待查询完毕")]),e("li",[t._v("设置gas price和gas limit(Token gas limit可根据情况自行设定)")]),e("li",[t._v("确定接收地址")]),e("li",[t._v("点击执行")])])])],1),e("el-timeline-item",{attrs:{timestamp:"等待执行",placement:"top"}},[e("el-card",[e("ol",{attrs:{start:"6"}},[e("li",[t._v("确认执行情况")])])])],1),e("el-timeline-item",{attrs:{timestamp:"完成",placement:"top"}})],1)],1)]),e("el-tab-pane",{attrs:{label:"MetaMask(小狐狸)添加网络"}},[e("div",{staticClass:"btnBox"},[e("el-button",{staticClass:"videoBtn",attrs:{type:"primary",plain:""}},[e("svg-icon",{attrs:{"class-name":"icon-metamask","icon-class":"metamask"}}),t._v(" 快捷添加网络 ")],1)],1),e("div",{staticClass:"block"},[e("el-timeline",[e("el-timeline-item",{attrs:{timestamp:"点击Metamask",placement:"top"}},[e("el-card",[e("ol",[e("li",[e("img",{staticStyle:{height:"500px"},attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki/metamask-network_step1.jpg"}})]),e("li",[t._v("点击自定义RPC")]),e("li",[e("img",{staticStyle:{height:"500px"},attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki/metamask-network_step2.jpg"}})]),e("li",[t._v("输入RPC信息，确定")])])])],1),e("el-timeline-item",{attrs:{timestamp:"其他网络节点信息",placement:"top"}},[e("el-card",[e("ol",{attrs:{start:"6"}},[e("li",[e("p",{staticStyle:{"font-size":"16px",margin:"14px 0px"}},[t._v(" 币安智能链(BSC): "),e("br"),t._v(" 网络名称 = 币安智能链"),e("br"),t._v(" RPC URL = https://bsc-dataseed3.binance.org/ "),e("br"),t._v(" 链ID = 56"),e("br"),t._v(" 符号 = BNB ")])]),e("li",[e("p",{staticStyle:{"font-size":"16px",margin:"14px 0px"}},[t._v(" 火币生态链(HECO): "),e("br"),t._v(" 网络名称 = 火币生态链"),e("br"),t._v(" RPC URL = https://http-mainnet.hecochain.com "),e("br"),t._v(" 链ID = 128"),e("br"),t._v(" 符号 = HT ")])])])])],1),e("el-timeline-item",{attrs:{timestamp:"完成",placement:"top"}})],1)],1)]),e("el-tab-pane",{attrs:{label:"MetaMask(小狐狸)安装"}},[e("div",{staticClass:"metamaskInstall"},[t.openVideo?e("div",{staticClass:"model"},[e("div",{staticClass:"close",on:{click:t.closeVideo}},[e("i",{staticClass:"el-icon-close"})]),e("div",{staticClass:"center"},[e("video",{staticClass:"video",attrs:{width:"80%",controls:"controls"}},[e("source",{attrs:{src:t.videoUrl,type:"video/mp4"}})])])]):t._e(),e("div",{staticClass:"header"},[e("svg-icon",{staticClass:"icon",attrs:{"class-name":"icon-metamask","icon-class":"metamask"}}),e("p",[t._v("MetaMask小狐狸")])],1),e("ul",{staticClass:"card"},[e("li",[e("svg-icon",{attrs:{"class-name":"icon-android","icon-class":"android"}}),e("p",[t._v("Android")]),e("span",{staticClass:"remark"},[t._v("需要科学上网")]),e("div",{staticClass:"mask"},[e("img",{attrs:{src:"data:image/png;base64,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"}}),e("p",{staticClass:"desc"},[t._v("扫描二维码")]),e("p",{staticClass:"desc"},[t._v("下载Android正式版")])])],1),e("li",[e("svg-icon",{attrs:{"class-name":"icon-apple","icon-class":"apple"}}),e("p",[t._v("IOS")]),e("span",{staticClass:"remark"},[t._v("需要国外App Store账号")]),e("div",{staticClass:"mask"},[e("img",{attrs:{src:"data:image/png;base64,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"}}),e("p",{staticClass:"desc"},[t._v("扫描二维码")]),e("p",{staticClass:"desc"},[t._v("下载iphone客户端")])])],1),e("li",{staticClass:"li-chrome"},[e("svg-icon",{attrs:{"class-name":"icon-chrome","icon-class":"chrome"}}),e("p",[t._v("Chrome 应用商店")]),e("span",{staticClass:"remark"},[t._v("需要科学上网")]),e("div",{staticClass:"mask",staticStyle:{cursor:"pointer"},on:{click:t.onOpenMetamask}},[e("svg-icon",{attrs:{"class-name":"icon-skip","icon-class":"skip"}}),e("p",{staticClass:"desc"},[t._v("点击跳转谷歌应用商店")]),e("p",{staticClass:"desc"},[t._v("下载扩展程序")])],1)],1),e("li",{staticClass:"li-chromePlugin"},[e("svg-icon",{attrs:{"class-name":"icon-chromePlugin","icon-class":"chromePlugin"}}),e("p",[t._v("Chrome 扩展")]),e("span",{staticClass:"remark"},[t._v("手动安装不用科学上网")]),e("div",{staticClass:"mask",staticStyle:{cursor:"pointer"},on:{click:t.onOpenChromePlugin}},[e("svg-icon",{attrs:{"class-name":"icon-download","icon-class":"download"}}),e("p",{staticClass:"desc"},[t._v("点击下载Chrome扩展程序")])],1),e("div",{staticClass:"btnBox"},[e("el-button",{staticClass:"videoBtn",attrs:{type:"primary",icon:"el-icon-video-camera"},on:{click:t.openChromeVideo}},[t._v("查看视频教程")])],1)],1)])])])],1)],1)}),[],!1,null,"5bb05454",null);a.default=l.exports},c34f:function(t,a,e){}}]);