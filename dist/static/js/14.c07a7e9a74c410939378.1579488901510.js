webpackJsonp([14],{"4uCH":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"addcanaluser",data:function(){return{form:{name:"",password:"",type:"3",status:"",amt:"",memo:""},statusdata:[{id:1,name:"启动"},{id:0,name:"关闭"}],id:"",tableData:"",rules:{name:[{required:!0,message:"不可为空！",trigger:"blur"}],type:[{required:!0,message:"不可为空！",trigger:"blur"}],status:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],expDate:[{required:!0,message:"不可为空！",trigger:"blur"}]}}},created:function(){this.id=this.$route.query.id,this.id&&this.getformdata()},computed:{},methods:{getformdata:function(){var e=this;this.$get("admins/"+this.id).then(function(t){console.log(t),1===t.code?(e.tableData=t.info,console.log(e.tableData)):e.$message.error("数据加载失败"),e.form=e.tableData,e.loading=!1}).catch(function(){e.loading=!1})},onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("请完善红色提示内容"),!1;t.$post("admins",{name:t.form.name,password:t.form.password,type:3,status:t.form.status}).then(function(e){console.log(e),1===e.code?(t.$message({message:e.message,type:"success"}),t.$router.push("/canaluser")):e.info.name?t.$message.error(e.info.name[0]):t.$message.error(e.message)})})},onEdit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$put("admins/"+t.id,{name:t.form.name,password:t.form.password,type:t.form.type,status:t.form.status}).then(function(e){console.log(e),1===e.code?(t.$message({message:e.message,type:"success"}),t.$router.push("/canaluser")):e.info.name?t.$message.error(e.info.name[0]):t.$message.error(e.message)})})},resetForm:function(e){this.$refs[e].resetFields()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"container-title"},[e._v("新增渠道用户")]),e._v(" "),a("el-form",{ref:"form",staticClass:"item-add-list",attrs:{model:e.form,rules:e.rules}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"渠道账号:",prop:"name"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码:",prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"==typeof t?t.trim():t)},expression:"form.password"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"type",prop:"type"}},[a("el-input",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type","string"==typeof t?t.trim():t)},expression:"form.type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._l(e.statusdata,function(e){return[a("el-option",{attrs:{label:e.name,value:e.id}})]})],2)],1),e._v(" "),e.tableData?e._e():a("el-button",{staticStyle:{"margin-top":"40px"},attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("确认添加")]),e._v(" "),e.tableData?a("el-button",{staticStyle:{"margin-top":"40px"},attrs:{type:"primary"},on:{click:function(t){return e.onEdit("form")}}},[e._v("保存")]):e._e(),e._v(" "),a("router-link",{attrs:{to:{path:"canaluser"}}},[a("el-button",{attrs:{type:"primary"}},[e._v("取消")])],1)],1),e._v(" "),a("el-col",{attrs:{span:6}}),e._v(" "),a("el-col",{attrs:{span:6}})],1)],1)],1)])},staticRenderFns:[]};var o=a("C7Lr")(s,r,!1,function(e){a("sZct")},"data-v-a00f011c",null);t.default=o.exports},sZct:function(e,t){}});