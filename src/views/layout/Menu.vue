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
  data () {
    return {
      menu: [
        {
          name: '基本信息',
          pathName: 'basicInfo'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .menu{
    width: 180px;
    height: 100%;
    display: inline-block;
    float: left;
  }
</style>
