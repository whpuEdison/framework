<template>
  <div>{{name}}</div>
</template>

<script>
import basicInfoApi from '@/api/information/basicInfo'
export default {
  name: 'BasicInfo',
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    this.getBasicInfo()
  },
  methods: {
    getBasicInfo () {
      basicInfoApi.getBasicInfo().then(res => {
        if (res.errorCode === 0) {
          let data = res.data[0]
          this.name = data.name
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
