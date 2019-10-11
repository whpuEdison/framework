<template>
  <div class="fullSize">
    <Header/>
    <Menu/>
    <div class="workspace">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/views/layout/Header'
import Menu from '@/views/layout/Menu'
export default {
  name: 'Root',
  components: {
    Menu,
    Header
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/index.less";
  .workspace{
    width: calc(100% - @menu-width - 2px);
    height: calc(100% - @header-height);
    display: inline-block;
    float: right;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
