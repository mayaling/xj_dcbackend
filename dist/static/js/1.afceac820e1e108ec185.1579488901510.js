webpackJsonp([1],{"/+y5":function(e,t,r){t.f=r("YlT+")},"0etw":function(e,t,r){r("hM9+")("asyncIterator")},"2LoE":function(e,t,r){e.exports={default:r("LEgY"),__esModule:!0}},"5wiF":function(e,t,r){r("hM9+")("observable")},LEgY:function(e,t,r){r("mxCW"),r("SXOF"),e.exports=r("/+y5").f("iterator")},"O/Jr":function(e,t,r){var o=r("E5yg"),a=r("z6h9"),n=r("Qslx");e.exports=function(e){var t=o(e),r=a.f;if(r)for(var l,s=r(e),i=n.f,u=0;s.length>u;)i.call(e,l=s[u++])&&t.push(l);return t}},Qslx:function(e,t){t.f={}.propertyIsEnumerable},V8iL:function(e,t,r){r("w9s8"),r("+Y4o"),r("0etw"),r("5wiF"),e.exports=r("Rv9F").Symbol},WY5w:function(e,t,r){var o=r("bkRK"),a=r("hsAM").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,a)}},X8cY:function(e,t,r){var o=r("RpAZ");e.exports=Array.isArray||function(e){return"Array"==o(e)}},Yyxk:function(e,t,r){e.exports={default:r("V8iL"),__esModule:!0}},gJFw:function(e,t,r){var o=r("Qslx"),a=r("cM3n"),n=r("aJPw"),l=r("BcUX"),s=r("l9T2"),i=r("SJYL"),u=Object.getOwnPropertyDescriptor;t.f=r("berT")?u:function(e,t){if(e=n(e),t=l(t,!0),i)try{return u(e,t)}catch(e){}if(s(e,t))return a(!o.f.call(e,t),e[t])}},"hM9+":function(e,t,r){var o=r("BE4u"),a=r("Rv9F"),n=r("X1tf"),l=r("/+y5"),s=r("Mr+r").f;e.exports=function(e){var t=a.Symbol||(a.Symbol=n?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:l.f(e)})}},hRKE:function(e,t,r){"use strict";t.__esModule=!0;var o=l(r("2LoE")),a=l(r("Yyxk")),n="function"==typeof a.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":typeof e};function l(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof a.default&&"symbol"===n(o.default)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":n(e)}},"jE8/":function(e,t,r){var o=r("WBgg")("meta"),a=r("PUvy"),n=r("l9T2"),l=r("Mr+r").f,s=0,i=Object.isExtensible||function(){return!0},u=!r("9tun")(function(){return i(Object.preventExtensions({}))}),f=function(e){l(e,o,{value:{i:"O"+ ++s,w:{}}})},c=e.exports={KEY:o,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!n(e,o)){if(!i(e))return"F";if(!t)return"E";f(e)}return e[o].i},getWeak:function(e,t){if(!n(e,o)){if(!i(e))return!0;if(!t)return!1;f(e)}return e[o].w},onFreeze:function(e){return u&&c.NEED&&i(e)&&!n(e,o)&&f(e),e}}},jOsB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("hRKE"),a=r.n(o),n=r("3cXf"),l=r.n(n),s=r("a3Yh"),i=r.n(s);Vue.directive("loadmore",{bind:function(e,t){e.querySelector(".el-select-dropdown .el-select-dropdown__wrap").addEventListener("scroll",function(){this.scrollHeight-this.scrollTop<=this.clientHeight&&t.value()})}});var u={name:"addproject",data:function(){var e,t=/[0-9]{1,2}((,|\.)[0-9]{1,10})?%/,r=/^\d+$|^\d+[.]?\d+$/,o=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,a=/^[1-9]\d{0,5}$/,n=function(e,r,o){t.test(r)?o():o(new Error("格式如0.03%"))},l=function(e,t,o){r.test(t)?o():o(new Error("不能为空且只能是数字"))};return{plat:"",value1:"",value2:"",boutique:"",banner:"",new:"",hot:"",status:"",page:1,release:"",option1:[{value:0,label:"日利率"},{value:1,label:"月利率"},{value:2,label:"年利率"}],options:[{value:"boutique",label:"精品",key:"1"},{value:"banner",label:"小额现金贷",key:"2"},{value:"new",label:"最新口子",key:"3"},{value:"hot",label:"最热口子",key:"4"}],option2:[{value:"boutique",label:"精品",key:"1"},{value:"banner",label:"分期系列",key:"2"},{value:"new",label:"今日最新",key:"3"},{value:"hot",label:"最热爆款",key:"4"}],statusdata:[{id:1,name:"正常"},{id:0,name:"下架"}],typedata:[{id:1,name:"UV"},{id:2,name:"CPA"},{id:3,name:"CPS"}],dialogImageUrl:"",dialogVisible:!1,hideUpload:!1,limitCount:1,imageList:"",platformdata:"",userdata:"",releasedata:"",xjshow:!1,sshshow:!1,rateshow:!1,form:(e={name:"",image:"",slogan:"",max_price:"30000",apply_num:Math.ceil(47e3*Math.random()),apply_price:"",apply_duration:"",lending_time:"",user_price:"",rate:"0.03%"},i()(e,"lending_time",""),i()(e,"max_duration","14"),i()(e,"url",""),i()(e,"new",""),i()(e,"hot",""),i()(e,"sort","100"),i()(e,"status",""),i()(e,"platform",""),i()(e,"boutique",""),i()(e,"banner",""),i()(e,"new",""),i()(e,"hot",""),i()(e,"balance_type",""),i()(e,"os_show",""),i()(e,"apply_price",""),i()(e,"loan_cycle",""),i()(e,"rate_str","0.03%"),i()(e,"rate_type",""),e),test:"",id:"",pageCount:"",tabledata:"",imageurl:"",rules:{apply_num:[{required:!0,validator:l,trigger:"blur"}],balance_type:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],name:[{required:!0,message:"不可为空！",trigger:"blur"}],max_duration:[{required:!0,validator:l,trigger:"blur"}],sort:[{required:!0,validator:l,trigger:"blur"}],status:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],slogan:[{required:!0,message:"不可为空！",trigger:"blur"}],admin_id:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],apply_duration:[{required:!0,validator:l,trigger:"blur"}],max_price:[{required:!0,validator:function(e,t,r){a.test(t)?r():r(new Error("输入为数字且最高1000000"))},trigger:"blur"}],apply_price:[{required:!0,message:"不可为空！",trigger:"blur"}],url:[{required:!0,validator:function(e,t,r){o.test(t)?r():r(new Error("请输入有效的url"))},trigger:"blur"}],rate:[{required:!0,validator:n,trigger:"blur"}],rate_str:[{required:!0,validator:n,trigger:"blur"}],user_price:[{required:!0,validator:l,trigger:"blur"}],loan_cycle:[{required:!0,message:"不可为空！",trigger:"blur"}]}}},created:function(){this.id=this.$route.query.id,this.getplatform(),this.getuserdata(),this.getreleasedata(),this.id&&(this.getformdata(),this.imageshow=!0,console.log(this.form))},computed:{},methods:{tiny:function(){window.location.href="https://www.sojson.com/batch_yaosuo.html"},getplatform:function(){var e=this;this.$get("product/platform?sort=-id").then(function(t){console.log(t),1===t.code?(e.platformdata=t.info,console.log(e.platformdata)):e.$message.error(t.message),e.loading=!1}).catch(function(){e.loading=!1})},changeplatform:function(){this.rateshow=!0},getreleasedata:function(){var e=this;this.$get("get-release-system").then(function(t){if(console.log(t),1===t.code){e.releasedata=t.info,console.log(e.releasedata);for(var r=0;r<e.releasedata.length;r++)e.releasedata[r].id=l()(e.releasedata[r].id)}else e.$message.error(t.message);e.loading=!1}).catch(function(){e.loading=!1})},loadMore:function(){var e=this;console.log(2222);var t=this;t.page!=t.pageCount?(t.page++,this.$get("admins?type=4&sort=-id&status=1&page="+t.page).then(function(r){if(1===r.code)for(var o=0;o<r.info.items.length;o++)t.userdata.push(r.info.items[o]);else e.$message.error("数据获取失败")}).catch(function(){e.loading=!1})):t.page=t.pageCount},getuserdata:function(){var e=this;this.$get("admins?type=4&sort=-id&status=1").then(function(t){console.log(t),1===t.code?(e.userdata=t.info.items,e.pageCount=t.info._meta.pageCount):e.$message.error(t.message),e.loading=!1}).catch(function(){e.loading=!1})},getformdata:function(){var e=this;this.$get("products/"+this.id).then(function(t){if(console.log(t),1===t.code){e.tableData=t.info,e.rateshow=!0,console.log(e.tableData);var r,o=[],n=[];e.form=e.tableData,n=e.form.os_show.split(","),console.log("arry",n);var l=[];n.map(function(e){""!==e&&void 0!=e&&l.push(e)}),l=l.join(","),console.log(void 0===l?"undefined":a()(l)),r=l.split(","),e.form.os_show=r,e.form.boutique&&o.push("boutique"),e.form.banner&&o.push("banner"),e.form.hot&&o.push("hot"),e.form.new&&o.push("new"),console.log(o),e.value1=o}else e.$message.error(t.message);e.loading=!1}).catch(function(){e.loading=!1})},onSubmit:function(e){var t=this;console.log(this.form.os_show);var r,o=[],a=[];for(var n in this.value1)console.log(this.value1[n]),o.push(this.value1[n]);for(var n in this.form.os_show)console.log(this.form.os_show[n]),a.push(this.form.os_show[n]);r=a.join(","),this.release=","+r+",",this.form.boutique=o.indexOf("boutique"),this.form.banner=o.indexOf("banner"),this.form.new=o.indexOf("new"),this.form.hot=o.indexOf("hot"),console.log(this.form.boutique),console.log(this.form.banner),console.log(this.form.new),console.log(this.form.hot),this.$refs[e].validate(function(e){if(!e)return t.$message.error("请完善红色提示内容"),!1;t.$post("products",{apply_price:t.form.apply_price,boutique:-1===t.form.boutique?0:1,banner:-1===t.form.banner?0:1,hot:-1===t.form.hot?0:1,new:-1===t.form.new?0:1,os_show:t.release,rate_type:t.form.rate_type,loan_cycle:t.form.loan_cycle,name:t.form.name,image:t.imageurl,slogan:t.form.slogan,max_price:t.form.max_price,user_price:t.form.user_price,apply_num:t.form.apply_num,apply_duration:t.form.apply_duration,rate:t.form.rate,platform:t.form.platform,max_duration:t.form.max_duration,url:t.form.url,sort:t.form.sort,status:t.form.status,balance_type:t.form.balance_type,admin_id:t.form.admin_id,rate_str:t.form.rate_str}).then(function(e){console.log(e),1===e.code?(t.$message({message:e.message,type:"success"}),t.$router.push("/productlist")):e.info.image?t.$message.error(e.info.image[0]):t.$message.error(e.message)})})},onEdit:function(e){var t,r=this,o=[],n=[];for(var l in this.value1)console.log(this.value1[l]),o.push(this.value1[l]);for(var l in this.form.os_show)console.log(this.form.os_show[l]),n.push(this.form.os_show[l]);console.log(n),t=n.join(","),console.log(this.release),this.release=","+t+",",console.log(o),console.log(void 0===o?"undefined":a()(o)),this.form.boutique=o.indexOf("boutique"),this.form.banner=o.indexOf("banner"),this.form.new=o.indexOf("new"),this.form.hot=o.indexOf("hot"),console.log(this.form.boutique),console.log(this.form.banner),console.log(this.form.new),console.log(this.form.hot),console.log(this.tableData.image),console.log(this.imageurl),this.$refs[e].validate(function(e){if(!e)return r.$message.error("请完善红色提示内容"),!1;r.$put("products/"+r.id,{image:r.imageurl?r.imageurl:r.tableData.image,boutique:-1===r.form.boutique?0:1,banner:-1===r.form.banner?0:1,hot:-1===r.form.hot?0:1,new:-1===r.form.new?0:1,name:r.form.name,slogan:r.form.slogan,max_price:r.form.max_price,user_price:r.form.user_price,apply_num:r.form.apply_num,apply_duration:r.form.apply_duration,rate:r.form.rate,platform:r.form.platform,os_show:r.release,apply_price:r.form.apply_price,rate_type:r.form.rate_type,loan_cycle:r.form.loan_cycle,rate_str:r.form.rate_str,max_duration:r.form.max_duration,url:r.form.url,sort:r.form.sort,status:r.form.status,balance_type:r.form.balance_type,admin_id:r.form.admin_id}).then(function(e){console.log(e),1===e.code?(r.$message({message:e.message,type:"success"}),r.$router.push("/productlist")):r.$message.error(e.message)})}),this.$emit("closedialog")},addAttachment:function(e){var t=this;this.imageUrl=URL.createObjectURL(e.file),console.log(this.imageUrl),this.fileData=e.file,console.log(this.fileData);var r=new FormData;r.append("file",this.fileData),axios({method:"post",url:"http://api-backend.loan.xykj1.com/upload-to-aliyun_oss?type=product",data:r,config:{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+localStorage.getItem("token")}}}).then(function(e){console.log(e),1==e.data.code?(t.imageurl=e.data.info.url,t.$message({message:"上传成功",type:"success"})):t.$message.error(e.data.message)}).catch(function(e){t.$message.error(e.message)})},resetForm:function(e){this.$refs[e].resetFields()},imgChange:function(e,t){this.hideUpload=t.length>=this.limitCount,t&&this.$refs.uploadElemet.clearValidate()},handleRemove:function(e,t){console.log(e,t),this.hideUpload=t.length>=this.limitCount},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleChange:function(e,t){this.fileList=t.slice(-1),this.imageshow=!1}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"加载中"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"container-title"},[e._v("新建产品")]),e._v(" "),r("el-row",[r("el-form",{ref:"form",staticClass:"item-add-list",attrs:{model:e.form,rules:e.rules,data:e.tableData}},[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"产品名称:",prop:"name"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-form-item",{attrs:{label:"描述:",prop:"slogan"}},[r("el-input",{model:{value:e.form.slogan,callback:function(t){e.$set(e.form,"slogan","string"==typeof t?t.trim():t)},expression:"form.slogan"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"上架模块:",prop:"hot"}},[[r("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},e._l(e.option2,function(e){return r("el-option",{key:e.key,attrs:{label:e.label,value:e.value}})}),1)]],2)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-form-item",{attrs:{label:"申请人数",prop:"apply_num"}},[r("el-input",{model:{value:e.form.apply_num,callback:function(t){e.$set(e.form,"apply_num","string"==typeof t?t.trim():t)},expression:"form.apply_num"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:10}},[r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"贷款最大周期（天）",prop:"max_duration"}},[r("el-input",{model:{value:e.form.max_duration,callback:function(t){e.$set(e.form,"max_duration","string"==typeof t?t.trim():t)},expression:"form.max_duration"}}),e._v(" "),r("span",{staticStyle:{color:"#999"}},[e._v("老版本需要填写")])],1)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-form-item",{attrs:{label:"最高借款期限:",prop:"loan_cycle"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.loan_cycle,callback:function(t){e.$set(e.form,"loan_cycle","string"==typeof t?t.trim():t)},expression:"form.loan_cycle"}})],1)],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"申请最高价",prop:"max_price"}},[r("el-input",{model:{value:e.form.max_price,callback:function(t){e.$set(e.form,"max_price","string"==typeof t?t.trim():t)},expression:"form.max_price"}}),e._v(" "),r("span",{staticStyle:{color:"#999"}},[e._v("老版本需要填写")])],1)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-form-item",{attrs:{label:"申请金额范围:",prop:"apply_price"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.apply_price,callback:function(t){e.$set(e.form,"apply_price","string"==typeof t?t.trim():t)},expression:"form.apply_price"}})],1)],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"产品链接:",prop:"url"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url","string"==typeof t?t.trim():t)},expression:"form.url"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"利率选择:",prop:"rate_type"}},[[r("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeplatform},model:{value:e.form.rate_type,callback:function(t){e.$set(e.form,"rate_type",t)},expression:"form.rate_type"}},e._l(e.option1,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]],2)],1),e._v(" "),r("el-col",{attrs:{span:6}},[e.rateshow?r("el-form-item",{attrs:{label:"利率",prop:"rate"}},[r("el-input",{attrs:{placeholder:"例如0.03%"},model:{value:e.form.rate,callback:function(t){e.$set(e.form,"rate","string"==typeof t?t.trim():t)},expression:"form.rate"}}),e._v(" "),r("span",{staticStyle:{color:"#999"}},[e._v("老版本需要填写")])],1):e._e()],1),e._v(" "),r("el-col",{attrs:{span:6}},[e.rateshow?r("el-form-item",{attrs:{label:"利率",prop:"rate_str"}},[r("el-input",{attrs:{placeholder:"例如0.03%"},model:{value:e.form.rate_str,callback:function(t){e.$set(e.form,"rate_str","string"==typeof t?t.trim():t)},expression:"form.rate_str"}})],1):e._e()],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"状态:",prop:"status"}},[r("el-select",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._l(e.statusdata,function(e){return[r("el-option",{attrs:{label:e.name,value:e.id}})]})],2)],1)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-form-item",{attrs:{label:"排序:",prop:"sort"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort","string"==typeof t?t.trim():t)},expression:"form.sort"}}),e._v(" "),r("span",{staticStyle:{color:"#999"}},[e._v("数字越小越靠前,最小 0, 最大 100")])],1)],1),e._v(" "),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"系统平台:",prop:"platform"}},[r("el-select",{attrs:{placeholder:"请选择平台",clearable:"true"},model:{value:e.form.platform,callback:function(t){e.$set(e.form,"platform",t)},expression:"form.platform"}},[e._l(e.platformdata,function(e){return[r("el-option",{attrs:{label:e.name,value:e.id}})]})],2)],1)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"结算方式:",prop:"balance_type"}},[r("el-select",{model:{value:e.form.balance_type,callback:function(t){e.$set(e.form,"balance_type",t)},expression:"form.balance_type "}},[e._l(e.typedata,function(e){return[r("el-option",{attrs:{label:e.name,value:e.id}})]})],2)],1)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-form-item",{attrs:{label:"用户单价:",prop:"user_price"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.user_price,callback:function(t){e.$set(e.form,"user_price","string"==typeof t?t.trim():t)},expression:"form.user_price"}})],1)],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"商户选择:",prop:"admin_id"}},[[r("el-select",{directives:[{name:"loadmore",rawName:"v-loadmore",value:e.loadMore,expression:"loadMore"}],attrs:{placeholder:"请选择"},model:{value:e.form.admin_id,callback:function(t){e.$set(e.form,"admin_id",t)},expression:"form.admin_id"}},e._l(e.userdata,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)]],2)],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-form-item",{attrs:{label:"多端选择:",prop:"os_show"}},[[r("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:e.form.os_show,callback:function(t){e.$set(e.form,"os_show",t)},expression:"form.os_show"}},e._l(e.releasedata,function(e){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})}),1)]],2)],1),e._v(" "),r("el-col",{attrs:{span:10}},[r("p",{staticStyle:{"font-size":"14px",color:"#606266","margin-bottom":"10px"}},[r("span",{staticStyle:{color:"#f56c6c"}},[e._v("*")]),e._v("\n                                上传图片\n                                "),r("span",{staticStyle:{"margin-left":"20px",cursor:"pointer"}},[r("a",{staticClass:"document-btn",staticStyle:{color:"rgb(60, 141, 188)"},attrs:{target:"_blank",href:"https://www.sojson.com/batch_yaosuo.html"}},[e._v("https://www.sojson.com/batch_yaosuo.html")])])]),e._v(" "),r("el-form-item",{ref:"uploadElemet",attrs:{prop:"imageList"}},[r("el-upload",{staticClass:"upload-demo",attrs:{"on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture","on-change":e.handleChange,"http-request":e.addAttachment}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1),e._v(" "),r("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.imageurl,callback:function(t){e.imageurl="string"==typeof t?t.trim():t},expression:"imageurl"}}),e._v(" "),e.imageshow?r("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.form.image,alt:""}}):e._e()],1)],1),e._v(" "),r("el-col",{staticStyle:{"margin-top":"200px"},attrs:{span:10}},[e.tableData?e._e():r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),e.tableData?r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onEdit("form")}}},[e._v("保存")]):e._e(),e._v(" "),r("router-link",{attrs:{to:{path:"productlist"}}},[r("el-button",{attrs:{type:"primary"}},[e._v("取消")])],1)],1),e._v(" "),r("el-col",{staticStyle:{"margin-top":"150px"},attrs:{span:10}}),e._v(" "),r("el-col",{attrs:{span:10,offset:2}})],1)],1)],1)])},staticRenderFns:[]};var c=r("C7Lr")(u,f,!1,function(e){r("q2DN")},null,null);t.default=c.exports},q2DN:function(e,t){},rE0W:function(e,t,r){var o=r("aJPw"),a=r("WY5w").f,n={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return l&&"[object Window]"==n.call(e)?function(e){try{return a(e)}catch(e){return l.slice()}}(e):a(o(e))}},w9s8:function(e,t,r){"use strict";var o=r("BE4u"),a=r("l9T2"),n=r("berT"),l=r("8leu"),s=r("vo6O"),i=r("jE8/").KEY,u=r("9tun"),f=r("caAB"),c=r("tduP"),m=r("WBgg"),p=r("YlT+"),d=r("/+y5"),g=r("hM9+"),h=r("O/Jr"),y=r("X8cY"),_=r("fRqy"),b=r("PUvy"),v=r("Myb3"),w=r("aJPw"),x=r("BcUX"),$=r("cM3n"),k=r("WNG3"),S=r("rE0W"),O=r("gJFw"),q=r("z6h9"),E=r("Mr+r"),j=r("E5yg"),C=O.f,P=E.f,M=S.f,F=o.Symbol,D=o.JSON,N=D&&D.stringify,Y=p("_hidden"),L=p("toPrimitive"),U={}.propertyIsEnumerable,J=f("symbol-registry"),R=f("symbols"),T=f("op-symbols"),W=Object.prototype,A="function"==typeof F&&!!q.f,B=o.QObject,I=!B||!B.prototype||!B.prototype.findChild,X=n&&u(function(){return 7!=k(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(e,t,r){var o=C(W,t);o&&delete W[t],P(e,t,r),o&&e!==W&&P(W,t,o)}:P,z=function(e){var t=R[e]=k(F.prototype);return t._k=e,t},V=A&&"symbol"==typeof F.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof F},K=function(e,t,r){return e===W&&K(T,t,r),_(e),t=x(t,!0),_(r),a(R,t)?(r.enumerable?(a(e,Y)&&e[Y][t]&&(e[Y][t]=!1),r=k(r,{enumerable:$(0,!1)})):(a(e,Y)||P(e,Y,$(1,{})),e[Y][t]=!0),X(e,t,r)):P(e,t,r)},Q=function(e,t){_(e);for(var r,o=h(t=w(t)),a=0,n=o.length;n>a;)K(e,r=o[a++],t[r]);return e},H=function(e){var t=U.call(this,e=x(e,!0));return!(this===W&&a(R,e)&&!a(T,e))&&(!(t||!a(this,e)||!a(R,e)||a(this,Y)&&this[Y][e])||t)},G=function(e,t){if(e=w(e),t=x(t,!0),e!==W||!a(R,t)||a(T,t)){var r=C(e,t);return!r||!a(R,t)||a(e,Y)&&e[Y][t]||(r.enumerable=!0),r}},Z=function(e){for(var t,r=M(w(e)),o=[],n=0;r.length>n;)a(R,t=r[n++])||t==Y||t==i||o.push(t);return o},ee=function(e){for(var t,r=e===W,o=M(r?T:w(e)),n=[],l=0;o.length>l;)!a(R,t=o[l++])||r&&!a(W,t)||n.push(R[t]);return n};A||(s((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),t=function(r){this===W&&t.call(T,r),a(this,Y)&&a(this[Y],e)&&(this[Y][e]=!1),X(this,e,$(1,r))};return n&&I&&X(W,e,{configurable:!0,set:t}),z(e)}).prototype,"toString",function(){return this._k}),O.f=G,E.f=K,r("WY5w").f=S.f=Z,r("Qslx").f=H,q.f=ee,n&&!r("X1tf")&&s(W,"propertyIsEnumerable",H,!0),d.f=function(e){return z(p(e))}),l(l.G+l.W+l.F*!A,{Symbol:F});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)p(te[re++]);for(var oe=j(p.store),ae=0;oe.length>ae;)g(oe[ae++]);l(l.S+l.F*!A,"Symbol",{for:function(e){return a(J,e+="")?J[e]:J[e]=F(e)},keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in J)if(J[t]===e)return t},useSetter:function(){I=!0},useSimple:function(){I=!1}}),l(l.S+l.F*!A,"Object",{create:function(e,t){return void 0===t?k(e):Q(k(e),t)},defineProperty:K,defineProperties:Q,getOwnPropertyDescriptor:G,getOwnPropertyNames:Z,getOwnPropertySymbols:ee});var ne=u(function(){q.f(1)});l(l.S+l.F*ne,"Object",{getOwnPropertySymbols:function(e){return q.f(v(e))}}),D&&l(l.S+l.F*(!A||u(function(){var e=F();return"[null]"!=N([e])||"{}"!=N({a:e})||"{}"!=N(Object(e))})),"JSON",{stringify:function(e){for(var t,r,o=[e],a=1;arguments.length>a;)o.push(arguments[a++]);if(r=t=o[1],(b(t)||void 0!==e)&&!V(e))return y(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!V(t))return t}),o[1]=t,N.apply(D,o)}}),F.prototype[L]||r("/9oH")(F.prototype,L,F.prototype.valueOf),c(F,"Symbol"),c(Math,"Math",!0),c(o.JSON,"JSON",!0)},z6h9:function(e,t){t.f=Object.getOwnPropertySymbols}});