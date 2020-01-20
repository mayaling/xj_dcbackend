<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">贷超首页banner图</div>
            <div class="mgb20">
                <router-link :to="{path:'editdcbanner'}"><el-button type="primary">+新增背景图</el-button></router-link>
            </div>
            <el-table :data="tableData" border size="medium" ref="multipleTable"  stripe>
                <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
                <el-table-column prop="url" label="背景图" align="center">
                    <template slot-scope="scope"  >
            　　　　    <img :src="scope.row.url" width="40" height="40"  @click="dialogVisible = true" class="head_pic" />
            <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
                <el-dialog :visible.sync="dialogVisible" width="20%" style="margin-top: 15vh;">
                    <img :src="scope.row.url"  alt="" style="margin-top:-23px;width: 100%;">
                    <!-- <template slot-scope="scope">
                <img :src="scope.row.qrcode"  alt="">

                    </template> -->
            <!-- <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span> -->
            </el-dialog>
            　　    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <router-link :to="{path:'editdcbanner',query:{id:scope.row.id}}">
                            <el-button size="mini">
                               编辑
                            </el-button>
                        </router-link>
                        </router-link>
                        <el-button size="mini" @click="handleEdit(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
<div class="pagination">
    <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :page-count="pages">
    </el-pagination>
</div>
</div>
</div>
</template>


<script>
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
    export default {
        name: 'teacher',
        data() {
            return {
                dialogVisible: false,
                p_name:"",
                status:"",
                value1: "",
                value2: "",
                tableData: [],

                 // 默认显示第几页
                 currentPage:1,
                // 总条数，根据接口获取数据长度(注意：这里不能为空)
                totalCount:1,
                // 个数选择器（可修改）
                pageSizes:[3,5,10,20],
                // 默认每页显示的条数（可修改）
                PageSize:5,
                cur_page: 1,
                channelurl:"c.loan.xykj1.com",
                pages: 0,
                s_student: '',
                s_school: '',
                s_grade: '',
                s_klass: '',
                // loading: true,
                region: "",
                region1: "",
                tableData:"",
            }
        },
        created() {
            this.getlistdata()
        },
        computed: {

        },
        methods: {
            getlistdata(){
                this.$get('boutique-backgrounds').then((res) => {
                    console.log(res)
                    if(res.code===1){
                        this.tableData = res.info.items;
                        this.pages = res.info._meta.pageCount;
                        for(var i=0;i<this.tableData.length;i++){
                            if(this.tableData[i].cooperation_type == 1){
                                this.tableData[i].cooperation_type = "UV"
                            }else if(this.tableData[i].cooperation_type == 2){
                                this.tableData[i].cooperation_type = "注册"
                            }else if(this.tableData[i].cooperation_type == 3){
                                this.tableData[i].cooperation_type = "激活"
                            }else{
                                this.tableData[i].cooperation_type = "其他"
                            }
                        }
                    }else{
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch( () => {
                    this.loading = false
                })
            },
            // 分页导航
            handleCurrentChange(val) {
                this.loading = true
                this.$get('boutique-backgrounds', {
                    page: val,
                    status: this.status?this.status:'',
                    name:this.p_name?this.p_name:''
                }).then((res) => {
                    if (res.code === 1) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        this.pages = res.info._meta.pageCount;
                    } else {
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },

            // 搜索
            search() {
                this.loading = true
                this.$get('channels?sort=-id', {
                    status: this.status?this.status:'',
                    name:this.p_name?this.p_name:''
                }).then((res) => {
                    if (res.code === 1) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        this.pages = res.info._meta.pageCount;
                    } else {
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },
            search1() {
                this.loading = true
                this.$get('channels?sort=-id', {
                    status: this.status?this.status:'1',
                    name:this.p_name?this.p_name:''
                }).then((res) => {
                    if (res.code === 1) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        this.pages = res.info._meta.pageCount;
                    } else {
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },
             onCopy(e) {
                 this.$message({
                    message:"复制链接成功",
                    type: 'success'
                });
            },
            onError(e) {
                console.log(e);
            },
            copy(){
                var clipboard = new Clipboard('.tag-read')
                clipboard.on('success', e => {
                  console.log('复制成功')
                  // 释放内存
                  clipboard.destroy()
                })
                clipboard.on('error', e => {
                  // 不支持复制
                  console.log('该浏览器不支持自动复制')
                  // 释放内存
                  clipboard.destroy()
                })
            },
            openimg(){
                console.log(111)
            },
            handleStatus(index,row){
                row.status = !row.status;
                if(row.status == false){
                    row.status = 0
                }else{
                    row.status = 1
                }
                this.$put('channels/'+row.id, {
                    status: row.status,
                }).then((res) => {
                    this.loading = false
                    this.search1()
                    // this.handleEdit()
                    // this.getlistdata()
                }).catch(() => {
                    this.loading = false
                })
            },
            handleEdit(scope,row){
                // console.log(scope)
                this.$del('boutique-backgrounds/'+scope.id, {
                }).then((res) => {
                    if (res.code === 0) {
                        this.$message({
                            message:"删除成功",
                            type: 'success'
                        });
                        this.getlistdata();
                    } else {
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>
.el-icon-check{
    color:#1f9e27;
    font-weight:800;
    font-size:1.5rem;
}
.el-icon-close{
    color:#d81e06;
    font-weight:800;
    font-size:1.5rem;
}
</style>
