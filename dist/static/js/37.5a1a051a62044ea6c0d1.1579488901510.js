webpackJsonp([37],{"8GP6":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("3cXf"),s=e.n(n),l={name:"teacher",data:function(){return{tableData:[],cur_page:1,pages:0,s_student:"",s_school:"",s_grade:"",s_klass:""}},created:function(){},computed:{},methods:{handleCurrentChange:function(t){var a=this;this.loading=!0,this.$get("students",{pageNum:t,studentName:this.s_student}).then(function(t){if(0===t.code){a.tableData=JSON.parse(s()(t.data.list)),a.pages=t.data.pages;for(var e=0;e<a.tableData.length;e++)a.tableData[e].sex?a.tableData[e].sex="女":a.tableData[e].sex="男"}else a.$message.error("学生加载失败");a.loading=!1}).catch(function(){a.loading=!1})},search:function(){var t=this;this.loading=!0,this.$get("students",{studentName:this.s_student}).then(function(a){if(0===a.code){t.tableData=JSON.parse(s()(a.data.list)),t.pages=a.data.pages;for(var e=0;e<t.tableData.length;e++)t.tableData[e].sex?t.tableData[e].sex="女":t.tableData[e].sex="男"}else t.$message.error("学生加载失败");t.loading=!1}).catch(function(){t.loading=!1})}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"加载中"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"container-title"},[t._v("渠道设置")]),t._v(" "),e("div",{staticClass:"mgb20"},[e("el-row",{staticClass:"clearfix",attrs:{gutter:10}},[e("router-link",{attrs:{to:{path:"addbanner"}}},[e("el-button",{attrs:{type:"primary"}},[t._v("+添加渠道")])],1)],1)],1),t._v(" "),e("el-table",{ref:"multipleTable",attrs:{data:t.tableData,border:"",size:"medium"}},[e("el-table-column",{attrs:{prop:"name",label:"ID",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"englishName",label:"渠道名",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("router-link",{staticStyle:{color:"#35a000"},attrs:{to:{path:"studentDetail",query:{id:a.row.id}}}},[t._v("查看")])]}}])})],1),t._v(" "),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:"prev, pager, next","page-count":t.pages},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var i=e("C7Lr")(l,r,!1,function(t){e("x+BI")},"data-v-32324ee7",null);a.default=i.exports},"x+BI":function(t,a){}});