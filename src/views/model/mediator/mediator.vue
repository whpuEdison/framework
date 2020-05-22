<template>
  <el-card class="box-card">
    <div slot="header">
      <span>记分板</span>
    </div>
    <div class="score">
      <span :class="{lost: score1 < score2}" ref="score1">{{score1}}</span>
      VS
      <span :class="{lost: score2 < score1}" ref="score2">{{score2}}</span>
    </div>
  </el-card>
</template>

<script>
import CountUp from 'countup'
export default {
  name: 'mediator',
  components: {CountUp},
  data () {
    return {
      // 玩家1得分
      score1: 95,
      count1: null,
      // 玩家2得分
      score2: 110,
      count2: null
    }
  },
  watch: {
    score1 (newVal) {
      this.count1.update(newVal)
    },
    score2 (newVal) {
      this.count2.update(newVal)
    }
  },
  mounted () {
    this.$message.success('游戏开始')
    // 监听键盘事件
    this.count1 = new CountUp(this.$refs.score1, 0, this.score1)
    this.count1.start()
    this.count2 = new CountUp(this.$refs.score2, 0, this.score2)
    this.count2.start()
    this.onkeypress()
    // 10秒后结束游戏
    setTimeout(() => {
      window.onkeypress = null
      this.$message.success('游戏结束')
    }, 10000)
  },
  methods: {
    onkeypress () {
      window.onkeypress = (e) => {
        let event = e || window.e
        event.which === 113 && this.score1++
        event.which === 112 && this.score2++
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .box-card {
    width: 480px;
    margin: 200px auto;
    text-align: center;
    font-size: 24px;
    .score{
      font-size: 36px;
      span{
        display: inline-block;
        width: 160px;
        color: #67C23A;
      }
      .lost{
        color: #F56C6C
      }
    }
  }
</style>
