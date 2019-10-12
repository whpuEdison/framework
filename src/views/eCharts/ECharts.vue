<template>
  <div>可视化图表</div>
</template>

<script>
import loginApi from '@/api/login/login'
export default {
  name: 'ECharts',
  mounted () {
    // this.getUsers()
    this.getMenus()
  },
  methods: {
    getMenus () {
      loginApi.getMenus().then(res => {
        if (res.errorCode === 0) {
          // console.log(res)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
