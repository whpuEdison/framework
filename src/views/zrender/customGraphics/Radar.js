import zrender from 'zrender'
// import Constant from './Constant.js'

/**
 * 雷达
 */
export const Radar = zrender.Path.extend({
  type: 'Radar',
  shape: {
    deg: 0,
    startDeg: 0,
    endDeg: 360
  },
  style: {
  },
  buildPath: function (path, shape) {
    if (!path._ctx) { return }
    init(path, shape)
  }
})

function init (path, shape) {
  drawRadar(path, shape.center.x, shape.center.y, shape.radius, shape.startDeg, shape.endDeg, shape.deg, shape.angle)
}

/**
 * 绘制移动扇形区域
 */
function drawRadar (ctx, centerX, centerY, radius, startDeg, endDeg, deg, angle) {
  ctx = ctx._ctx
  let startAngle = deg
  let endAngle = deg + angle
  let grd = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
  grd.addColorStop(0, 'rgba(75, 213, 159, 0.9)')
  grd.addColorStop(1, 'rgba(75, 213, 159, 0)')
  ctx.fillStyle = grd
  ctx.beginPath()
  ctx.moveTo(centerX, centerY)
  ctx.arc(centerX, centerY, radius, startAngle / 180 * Math.PI, endAngle / 180 * Math.PI)
  ctx.closePath()
  ctx.fill()
}
