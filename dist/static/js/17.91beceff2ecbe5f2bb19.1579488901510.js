webpackJsonp([17],{xmgu:function(t,e){},yFKo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"addproject",data:function(){var t=/^[0-9]*$/;return{form:{name:"",num:"",time:"",price:"",balance_type:"",quantity_off_start_time:"",quantity_off_num:""},quantity_off_start_time:"",quantity_off_num:"",time:"",id:"",data:"",channeldata:"",tableData:"",rules:{quantity_off_start_time:[{required:!0,message:"不可为空！",trigger:"blur"}],quantity_off_num:[{required:!0,validator:function(e,a,r){t.test(a)?r():r(new Error("非负数"))},trigger:"blur"}],balance_type:[{required:!0,message:"不可为空！",trigger:"blur"}],num:[{required:!0,message:"不可为空！",trigger:"blur"}]}}},created:function(){this.id=this.$route.query.id,this.form.quantity_off_num=this.$route.query.quantity_off_num,this.form.quantity_off_start_time=this.$route.query.quantity_off_start_time,console.log(this.form.quantity_off_num),console.log(this.form.quantity_off_start_time)},computed:{},methods:{onSubmit:function(t){var e=this;console.log(this.form.quantity_off_start_time),this.$message.error("请完善内容"),this.$refs[t].validate(function(t){if(!t)return!1;e.$post("product/quantity-off",{time:e.form.quantity_off_start_time,num:e.form.quantity_off_num,product_id:e.id}).then(function(t){console.log(t),1===t.code?(e.$message({message:t.message,type:"success"}),e.$router.push("/productlist")):t.info.name?e.$message.error(t.info.name[0]):e.$message.error(t.message)})})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"container-title"},[t._v("定量下架")]),t._v(" "),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("el-form",{ref:"form",staticClass:"item-add-list",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:"时间:",prop:"quantity_off_start_time"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.quantity_off_start_time,callback:function(e){t.$set(t.form,"quantity_off_start_time",e)},expression:"form.quantity_off_start_time"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"数量:",prop:"quantity_off_num"}},[a("el-input",{attrs:{type:"text"},model:{value:t.form.quantity_off_num,callback:function(e){t.$set(t.form,"quantity_off_num","string"==typeof e?e.trim():e)},expression:"form.quantity_off_num"}})],1),t._v(" "),t.tableData?t._e():a("el-button",{staticStyle:{"margin-top":"40px"},attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("提交")]),t._v(" "),a("router-link",{attrs:{to:{path:"productlist"}}},[a("el-button",[t._v("取消")])],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:6}}),t._v(" "),a("el-col",{attrs:{span:6}})],1)],1)])},staticRenderFns:[]};var o=a("C7Lr")(r,i,!1,function(t){a("xmgu")},"data-v-6f08df0e",null);e.default=o.exports}});