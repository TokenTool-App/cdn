(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fabf23d0"],{"502c":function(e,t,n){"use strict";n.d(t,"d",(function(){return y})),n.d(t,"g",(function(){return d})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return T}));var a=n("1da1"),r=(n("96cf"),n("51d2")),i=n("4360"),p=n("ed08"),u=n("cf29"),s=n("901e"),o=n.n(s),y=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a.state.dapp.web3.web3Instance.eth.getGasPrice;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a){var s,o,y,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="getTokenBalance",e.next=3,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return o=e.sent,y={name:"balanceOf",erc20:!0,data:[a]},e.next=7,Object(u.b)(o,y,i.a.state.dapp.web3.account,s);case 7:return d=e.sent,e.abrupt("return",Object(p.d)(d,n));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),c=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,p){var s,y,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="getAllowance",e.next=3,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return y=e.sent,d={name:"allowance",erc20:!0,data:[a,p]},e.next=7,Object(u.b)(y,d,i.a.state.dapp.web3.account,s);case 7:return c=e.sent,e.abrupt("return",new o.a(c));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),l=function(e,t){return i.a.state.dapp.web3.web3Instance.eth.getBalance(e).then((function(e){return new o.a(Object(p.d)(e,t))}))},m=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return n=e.sent,a={name:"symbol",erc20:!0,data:[]},e.next=6,Object(u.b)(n,a,i.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return n=e.sent,a={name:"name",erc20:!0,data:[]},e.next=6,Object(u.b)(n,a,i.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return n=e.sent,a={name:"decimals",erc20:!0,data:[]},e.next=6,Object(u.b)(n,a,i.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,p){var s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return s=e.sent,o={name:"approve",erc20:!0,data:[a,n]},e.next=6,Object(u.c)(s,o,i.a.state.dapp.web3.account,p);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},"771e":function(e){e.exports=JSON.parse('{"contractName":"ERC721","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"armzs","outputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"string","name":"image","type":"string"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"}],"name":"create","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factoryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getArmz","outputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getCollection","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_new","type":"address"}],"name":"setFactoryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"armz","type":"tuple"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},b784:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return y}));var a=n("1da1"),r=(n("96cf"),n("771e")),i=n("4360"),p=(n("ed08"),n("cf29")),u=(n("901e"),function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return a=e.sent,u={name:"supportsInterface",erc20:!0,data:["0x80ac58cd"]},e.next=6,Object(p.b)(a,u,i.a.state.dapp.web3.account,n);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),s=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a){var u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return u=e.sent,s={name:"isApprovedForAll",erc20:!0,data:[i.a.state.dapp.web3.account,n]},e.next=6,Object(p.b)(u,s,i.a.state.dapp.web3.account,a);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),o=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a){var u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return u=e.sent,s={name:"setApprovalForAll",erc20:!0,data:[n,!0]},e.next=6,Object(p.d)(u,s,i.a.state.dapp.web3.account,a);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,u){var s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return s=e.sent,o={name:"setApprovalForAll",erc20:!0,data:[n,a]},e.next=6,Object(p.d)(s,o,i.a.state.dapp.web3.account,u);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()}}]);