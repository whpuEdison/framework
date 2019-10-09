<template>
  <div>
    广告维护
  </div>
</template>

<script>
import dailyReportApi from '@/api/dailyReport'
export default {
  name: 'AdvertisementDefend-广告维护',
  mounted () {
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
    this.getData()
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
