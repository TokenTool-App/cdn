(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d6048"],{7180:function(t,e,a){"use strict";a.r(e);var s=(a("0774"),a("a5c2"),{name:"mintIost",data:function(){return{blackAddress:"deadaddr",form:{isSendSelf:!1,isSendDead:!1,gasRatio:"1",gasLimit:"2000000",contractAddress:"Contract6vU3ZWL57jQeFpbuqUxQfL5PGeFJekWrDG2WVGjWqrKx",sendNumber:"1"}}},methods:{example:function(){},initialData:function(){},importWallet:function(){}},created:function(){}}),l=a("2877"),i=Object(l.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"flexBox"},[e("div",{staticClass:"header"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"mint"}}),e("span",{staticClass:"headerTitle"},[t._v("铭文铭刻")])],1),e("div",{staticClass:"content"},[e("div",{staticClass:"checkAll"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"share"},on:{click:function(e){return t.shareDialogShow()}}})],1),e("div",{staticClass:"tableBtnBox"},[e("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("1.导入钱包")]),e("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("2.查询余额")]),e("el-button",{attrs:{type:"info",size:"mini",plain:""}},[t._v("反选")]),e("el-button",{attrs:{type:"danger",size:"mini",plain:""}},[t._v("删除选中")])],1),e("div",{staticStyle:{"margin-bottom":"20px"}},[e("el-table")],1),e("el-form",{attrs:{"label-position":"top",model:t.form}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24,xs:24}},[e("el-form-item",{attrs:{prop:"contractAddress"}},[e("div",{staticClass:"labelBox",attrs:{slot:"label"},slot:"label"},[e("span",{staticClass:"label"},[t._v("接收地址")]),e("div",{staticClass:"labelBoxRight"},[e("el-switch",{attrs:{"inactive-value":!1,"active-value":!0,"active-text":"转给自己"},model:{value:t.form.isSendSelf,callback:function(e){t.$set(t.form,"isSendSelf",e)},expression:"form.isSendSelf"}}),e("el-switch",{attrs:{"inactive-value":!1,"active-value":!0,"active-text":"转给黑洞"},model:{value:t.form.isSendDead,callback:function(e){t.$set(t.form,"isSendDead",e)},expression:"form.isSendDead"}})],1)]),e("el-input",{attrs:{clearable:"true"},model:{value:t.form.contractAddress,callback:function(e){t.$set(t.form,"contractAddress",e)},expression:"form.contractAddress"}})],1)],1),e("el-col",{attrs:{span:14,xs:24}},[e("el-form-item",{attrs:{label:"gasRatio",prop:"rpcNode"}},[e("el-input",{attrs:{clearable:"true"},model:{value:t.form.rpcNode,callback:function(e){t.$set(t.form,"rpcNode",e)},expression:"form.rpcNode"}})],1)],1),e("el-col",{attrs:{span:10,xs:24}},[e("el-form-item",[e("div",{staticClass:"labelBox",attrs:{slot:"label"},slot:"label"},[e("span",{staticClass:"label"},[t._v(" 任务执行间隔(秒) ")]),e("el-switch",{attrs:{"inactive-value":!1,"active-value":!0,"active-text":"随机延迟时间"},model:{value:t.form.isSendDead,callback:function(e){t.$set(t.form,"isSendDead",e)},expression:"form.isSendDead"}})],1),e("el-input-number",{model:{value:t.form.monitorTime,callback:function(e){t.$set(t.form,"monitorTime",e)},expression:"form.monitorTime"}}),e("div",{staticClass:"randowTimeForm"},[e("el-input",{staticClass:"input1",attrs:{clearable:"true"}}),e("div",{staticClass:"flag"},[t._v("-")]),e("el-input",{staticClass:"input1",attrs:{clearable:"true"}})],1)],1)],1),e("el-col",{attrs:{span:12,xs:24}},[e("el-form-item",{attrs:{label:"gasRatio",prop:"gasRatio"}},[e("el-input")],1)],1),e("el-col",{attrs:{span:12,xs:24}},[e("el-form-item",{attrs:{label:"gasLimit",prop:"gasLimit"}},[e("el-input")],1)],1),e("el-col",{attrs:{span:12,xs:24}},[e("el-form-item",{attrs:{label:"发送数量",prop:"sendNumber"}},[e("el-input")],1)],1),e("el-col",{attrs:{span:12,xs:24}},[e("el-form-item",{attrs:{label:"交易次数",prop:"txCount"}},[e("el-input")],1)],1)],1),e("el-form-item",{staticClass:"item itemHexBox"},[e("div",{staticClass:"labelBox",attrs:{slot:"label"},slot:"label"},[e("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.hexType,callback:function(e){t.$set(t.form,"hexType",e)},expression:"form.hexType"}},[e("el-radio-button",{attrs:{label:1}},[t._v("16进制模式")]),e("el-radio-button",{attrs:{label:2}},[t._v("文本模式")])],1),e("div",{staticClass:"exampleBox"},[e("span",{staticClass:"example",on:{click:function(e){return t.example()}}},[t._v("Example")])])],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8,xs:24}},[e("el-form-item",{attrs:{label:"Tick",prop:"tick"}},[e("el-input")],1)],1),e("el-col",{attrs:{span:8,xs:24}},[e("el-form-item",{attrs:{label:"Mint Number",prop:"mintNumber"}},[e("el-input")],1)],1)],1)],1)],1),e("div",{staticClass:"tipsBox"},[e("el-alert",{attrs:{type:"error",closable:!1,title:"由于 IOST Network 公共 RPC 大概率会崩掉, 建议自己备好 IOST 网络的RPC"}})],1),e("div",{staticClass:"btnBox"},[e("el-button",{staticClass:"btn",attrs:{type:"warning",size:"medium"},on:{click:function(e){return t.stopRun()}}},[t._v("停止")]),e("el-button",{staticClass:"btn",attrs:{type:"primary",loading:t.loading,size:"medium"},on:{click:function(e){return t.starRun()}}},[t._v("开始")])],1),e("div",{staticClass:"txLog"},[e("div",{staticClass:"btnLog"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"coin-debug1"},on:{click:function(e){return t.logDialogShow()}}}),e("span",[t._v("查看交易历史(Debug)")])],1)])],1)])])}),[],!1,null,"729427b0",null);e.default=i.exports}}]);