webpackJsonp([19],{"5KUQ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("3cXf"),n=a.n(l),s={name:"teacher",data:function(){return{value1:"",value2:"",tableData:[],cur_page:1,pages:0,s_student:"",s_school:"",s_grade:"",s_klass:"",active:"",channel:"",channeldata:"",time:"",p_phone:""}},created:function(){this.getlistdata(),this.getchanneldata()},computed:{},methods:{getlistdata:function(){var t=this;this.$get("users").then(function(e){if(console.log(e),1===e.code){t.tableData=e.info.items;for(var a=0;a<t.tableData.length;a++)0==t.tableData[a].active?t.tableData[a].active="未激活":t.tableData[a].active="已激活";for(a=0;a<t.tableData.length;a++)0==t.tableData[a].os?t.tableData[a].os="Android":1==t.tableData[a].os?t.tableData[a].os="IOS":2==t.tableData[a].os?t.tableData[a].os="Web":4==t.tableData[a].os?t.tableData[a].os="其他":t.tableData[a].os=""}else t.$message.error("数据加载失败");t.loading=!1}).catch(function(){t.loading=!1})},getchanneldata:function(){var t=this;this.$get("channels").then(function(e){console.log(e),1===e.code?t.channeldata=e.info.items:t.$message.error("数据加载失败"),t.loading=!1}).catch(function(){t.loading=!1})},handleCurrentChange:function(t){var e=this;this.loading=!0,this.$get("users",{pageNum:t,studentName:this.s_student}).then(function(t){0===t.code?(e.tableData=JSON.parse(n()(t.data.list)),e.pages=t.data.pages):e.$message.error("学生加载失败"),e.loading=!1}).catch(function(){e.loading=!1})},search:function(){var t=this;this.loading=!0,console.log(this.start_time),this.$get("users",{channel_id:this.channel?this.channel:"",active:this.active?this.active:"",start_time:this.time[0],end_time:this.time[1]}).then(function(e){if(console.log(e),1===e.code){t.tableData=JSON.parse(n()(e.info.items));for(var a=0;a<t.tableData.length;a++)0==t.tableData[a].active?t.tableData[a].active="未激活":t.tableData[a].active="已激活";for(a=0;a<t.tableData.length;a++)0==t.tableData[a].os?t.tableData[a].os="Android":1==t.tableData[a].os?t.tableData[a].os="IOS":2==t.tableData[a].os?t.tableData[a].os="Web":4==t.tableData[a].os?t.tableData[a].os="其他":t.tableData[a].os=""}else t.$message.error("数据加载失败");t.loading=!1}).catch(function(){t.loading=!1})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"container-title"},[t._v("犀金用户列表")]),t._v(" "),a("div",{staticClass:"mgb20"},[a("el-row",{staticClass:"clearfix",attrs:{gutter:10}},[a("el-col",{attrs:{span:2}},[a("el-select",{attrs:{placeholder:"请选择渠道"},model:{value:t.channel,callback:function(e){t.channel=e},expression:"channel"}},[t._l(t.channeldata,function(t){return[a("el-option",{attrs:{label:t.name,value:t.id}})]})],2)],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-select",{attrs:{placeholder:"请选择激活状态"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("el-option",{attrs:{label:"已激活",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"未激活",value:"0"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{placeholder:"输入用户手机号"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.p_phone,callback:function(e){t.p_phone="string"==typeof e?e.trim():e},expression:"p_phone"}})],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("导出")])],1)],1)],1),t._v(" "),a("el-table",{ref:"multipleTable",attrs:{data:t.tableData,border:"",size:"medium"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"手机号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"active",label:"是否激活",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"active_time",label:"激活时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"last_login_time",label:"最近打开时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"device_id",label:"设备号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"channel",label:"渠道",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"klass",label:"版本号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"os",label:"设备系统",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:{path:"CPA",query:{row:e.row}}}},[a("el-button",{attrs:{size:"mini"}},[t._v("\n                                    CPA\n                                ")])],1),t._v(" "),a("router-link",{attrs:{to:{path:"active",query:{row:e.row}}}},[a("el-button",{attrs:{size:"mini"}},[t._v("\n                                    活跃日期\n                                ")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-count":t.pages},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var i=a("C7Lr")(s,o,!1,function(t){a("HUqM")},"data-v-6c075754",null);e.default=i.exports},HUqM:function(t,e){}});