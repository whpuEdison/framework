<template>
  <el-menu class="el-menu-vertical-demo menu" :collapse="true">
    <el-menu-item v-for="(item, index) in menu" :key="index" :index="index + ''">
      <router-link v-if="!item.children" :to="{name: item.menuPath}" tag="div">{{item.menuName}}</router-link>
      <el-submenu v-else :index="index + ''">
        <template slot="title">{{item.menuName}}</template>
        <el-menu-item v-for="(childItem, childIndex) in item.children" :key="childIndex" :index="index + '-' + childIndex">
          <router-link :to="{name: childItem.menuPath}" tag="div">{{childItem.menuName}}</router-link>
        </el-menu-item>
      </el-submenu>
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
