<template>
  <div ref="canvas" class="fullSize"></div>
</template>

<script>
import zrender from 'zrender'
import {Radar} from './customGraphics/Radar'
export default {
  name: 'ZRender',
  data () {
    return {
      zr: null
    }
  },
  computed: {
    radarArr () {
      let radarArr = this.zr ? [
        {
          startDeg: 0,
          endDeg: 90,
          angle: 60,
          radius: 100,
          center: {
            x: 10,
            y: 10
          }
        },
        {
          startDeg: 90,
          endDeg: 180,
          angle: 60,
          radius: 100,
          center: {
            x: this.zr.getWidth() - 10,
            y: 10
          }
        },
        {
          startDeg: 270,
          endDeg: 360,
          angle: 60,
          radius: 100,
          center: {
            x: 10,
            y: this.zr.getHeight() - 10
          }
        },
        {
          startDeg: 180,
          endDeg: 270,
          angle: 60,
          radius: 100,
          center: {
            x: this.zr.getWidth() - 10,
            y: this.zr.getHeight() - 10
          }
        }
      ] : []
      return radarArr
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', this.windowResizeHandle)
  },
  methods: {
    init () {
      this.zr = zrender.init(this.$refs.canvas)
      this.radarArr.forEach(item => this.addRadar(item))
    },
    addRadar (params) {
      let radar = new Radar({
        id: `radar${new Date().getTime()}-${Math.random()}`,
        shape: {
          center: params.center,
          radius: params.radius,
          startDeg: params.startDeg,
          endDeg: params.endDeg,
          angle: params.angle
        }
      })
      this.zr.add(radar)
      radar.animate('shape', true)
        .when(0, {
          deg: params.startDeg
        }).when(2000, {
          deg: params.endDeg - params.angle
        }).when(4000, {
          deg: params.startDeg
        }).start()
    },
    windowResizeHandle () {
      this.zr.clear()
      this.init()
    }
  },
  beforeDestroy () {
    this.zr && this.zr.clear()
  }
}
</script>

<style scoped>
</style>
