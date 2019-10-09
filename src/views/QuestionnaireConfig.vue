<template>
  <div>
    问卷调查配置
  </div>
</template>

<script>
import dailyReportApi from '@/api/dailyReport'
export default {
  name: 'QuestionnaireConfig-问卷调查配置',
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      let params = {
        typeName: 'sinoasr_business'
      }
      dailyReportApi.getTrunkGroupUsageList(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
