<template>
  <div>
    <el-row>
        <el-form label-width="80px">
          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="searchForm.name"
                        clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="getUserData">查询</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    <div>
      <el-button type="primary" class="addBtn" @click="addUserMessage">新增</el-button>
    </div>
    <!--对话框-->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="编码" prop="code">
              <el-input v-model="ruleForm.code"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="年龄" prop="age">
              <el-input v-model="ruleForm.age"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="sex">
              <el-select v-model="ruleForm.sex" placeholder="请选择性别">
                <el-option v-for="(item, index) in sexList" :key="index" :label="item.value" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" :disabled="isDisabled" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <!--表格-->
    <el-table :data="tableData" border stripe v-loading="loadingFlag">
      <el-table-column
        v-for="(item, index) in tableCol"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :resizable=false
        align="center">
      </el-table-column>
      <el-table-column label="操作" align="center" :resizable=false>
        <template slot-scope="scope">
          <div>
            <i class="el-icon-edit hoverButton" title="编辑" @click="editRow(scope.row)"></i>
            <i class="el-icon-delete hoverButton" title="删除" @click="deleteRow(scope.row)"></i>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination ref="pageContainer"
                   background
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="pageSizes"
                   :page-size="pageSize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { Util } from '@/utils/util'
import userListApi from '@/api/userList'
export default {
  name: 'UserList-用户信息列表',
  data () {
    return {
      searchForm: {
        name: ''
      }, // 查询表单信息
      operationType: '', // 操作类型: 新增 add 或 编辑 edit
      ruleForm: {
        name: '',
        code: '',
        age: '',
        sex: ''
      }, // 对话框表单数据
      rules: {
        name: {required: true, message: '姓名不能为空', trigger: 'blur'},
        code: {required: true, message: '编码不能为空', trigger: 'blur'},
        age: {required: true, message: '年龄不能为空', trigger: 'blur'},
        sex: {required: true, message: '请选择性别', trigger: 'change'}
      }, // 验证规则
      isDisabled: false, // 是否可提交
      loadingFlag: false, // 加载中...
      currentPage: 1, // 表格当前页号
      pageSizes: [10, 30, 50, 100],
      pageSize: 10, // 表格分页大小
      total: 0, // 表格数据总条数
      tableCol: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'code',
          label: '编码'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sex',
          label: '性别'
        }
      ], // 表头信息
      tableData: [], // 表格数据
      sexList: [
        {
          value: '男'
        },
        {
          value: '女'
        }
      ], // 性别选项
      dialogVisible: false // 对话框显隐
    }
  },
  mounted () {
    this.getUserData()
  },
  methods: {
    // 保存对话框表单
    submit () {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          this.$message.error('表单校验未通过')
          return false
        }
        this.isDisabled = true
        let params = Util.clone(this.ruleForm)
        let operationType = '' // 提交表单类型：新增或编辑
        if (this.operationType === 'edit') {
          params.id = this.ruleForm.id
          operationType = 'updateUserMsg'
        } else {
          operationType = 'addUserMsg'
        }
        userListApi[operationType](params).then(res => {
          if (res.head.errorCode === 0) {
            this.getUserData()
          } else {
            this.$message.error('新增用户信息失败')
          }
        }).catch(() => {
          this.$message.error('新增用户信息失败')
        }).finally()
        this.isDisabled = false
        this.handleClose()
      })
    },
    // 重置对话框表单
    resetForm () {
      this.ruleForm = {
        name: '',
        code: '',
        age: '',
        sex: ''
      }
      this.$refs.ruleForm.resetFields()
    },
    // 对话框关闭前调用
    handleClose () {
      this.dialogVisible = false
      this.resetForm()
    },
    // 获取表格数据
    getUserData () {
      let params = {
        pageNum: this.currentPage,
        pageSize: this.pageSize
      }
      this.searchForm.name && (params.name = this.searchForm.name)
      this.loadingFlag = true
      userListApi.getUserMsg(params).then((res) => {
        if (res.head.errorCode === 0) {
          let data = res.info.data
          if (data) {
            this.total = data.total
            this.tableData = data.list
            // 当请求到的数据总页数小于当前页数时，将当前页数置为1
            if (res.info.totalPage < this.currentPage) {
              this.currentPage = 1
            }
          } else {
            this.$message.error('查询用户信息失败')
          }
        }
      }).catch(() => {
        this.tableData = []
        this.total = 0
        this.currentPage = 1
        this.$message.error('查询用户信息失败')
      }).finally(() => {
        this.loadingFlag = false
      })
    },
    // 新增用户信息
    addUserMessage () {
      this.dialogVisible = true
      this.operationType = 'add'
    },
    // 编辑用户信息
    editRow (row) {
      this.ruleForm = Util.clone(row)
      this.dialogVisible = true
      this.operationType = 'edit'
    },
    // 删除表格行数据
    deleteRow (row) {
      this.$confirm('确认删除？').then(() => {
        let params = {
          id: row.id
        }
        userListApi.deleteUserMsg(params).then(res => {
          if (res.head.errorCode === 0) {
            this.getUserData()
          } else {
            this.$message.error('用户信息删除失败')
          }
        }).catch(() => {
          this.$message.error('用户信息删除失败')
        })
      })
    },
    // 分页大小改变
    handleSizeChange (val) {
      this.pageSize = val
      this.getUserData()
    },
    // 当前页码改变
    handleCurrentChange (val) {
      this.currentPage = val
      this.getUserData()
    }
  }
}
</script>

<style scoped>
  .addBtn{
    margin-bottom: 10px;
  }
  .hoverButton{
    cursor: pointer;
  }
</style>
