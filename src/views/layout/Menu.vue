<template>
  <el-menu
    class="el-menu-vertical-demo menu">
    <el-menu-item v-for="(item, index) in menu" :key="index" :index="index + ''">
      <router-link :to="{name: item.pathName}" tag="div">{{item.name}}</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    menu () {
      return this.$store.state.menuData
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/index.less";
  .menu{
    width: @menu-width;
    height: calc(100% - @header-height);
    display: inline-block;
    float: left;
  }
</style>
