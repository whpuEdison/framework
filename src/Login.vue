<template>
  <div class="content">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="account">
        <el-input v-model="ruleForm.account" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item class="submit">
        <el-button style="width: 100%" type="primary" @click="submitForm('ruleForm')" round>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import loginApi from '@/api/login/login'
export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginApi.getUsers(this.ruleForm).then(res => {
            if (res.errorCode === 0) {
              this.$router.push({name: 'root'})
              this.$store.commit('login', {loginState: true, userName: this.ruleForm.account, token: res.token})
              loginApi.getMenus(this.ruleForm).then(data => {
                if (data.errorCode === 0) {
                  this.$store.commit('setMenuData', data.data)
                }
              })
            } else {
              this.$message.error('账号或密码错误！')
            }
          })
        } else {
          this.$message.error('账号和密码不能为空！')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .content{
    padding: 30px 50px 0;
    box-sizing: border-box;
    width: 380px;
    height: 220px;
    position: absolute;
    top: 45%;
    left: 50%;
    margin: -110px 0 0 -190px;
    border-radius: 5px;
  }
</style>
