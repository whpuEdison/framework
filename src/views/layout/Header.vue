<template>
  <div class="header">
    <div class="msgbox">
      <span class="marginRight10">{{userName}}</span>
      <el-button icon="el-icon-switch-button" type="info" circle @click="logout"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    userName: function () {
      return this.$store.state.userName
    }
  },
  methods: {
    logout () {
      this.$store.commit('logOut')
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/index.less";
  .header{
    width: 100%;
    height: @header-height;
    border-bottom: solid 1px #e6e6e6;
    box-sizing: border-box;
    position: relative;
  }
  .msgbox{
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -14px;
  }
</style>
