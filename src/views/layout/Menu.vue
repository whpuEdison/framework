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
          name: '用户信息列表',
          pathName: 'userList'
        },
        {
          name: '公告发送管理',
          pathName: 'bulletinSendManage'
        },
        {
          name: '问卷调查配置',
          pathName: 'questionnaireConfig'
        },
        {
          name: '广告维护',
          pathName: 'advertisementDefend'
        },
        {
          name: '便捷服务维护',
          pathName: 'convenientServiceDefend'
        },
        {
          name: '热点问题维护',
          pathName: 'hotspotIssuesDefend'
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
