<template>
  <div id="app">
    <EgMenu/>
    <div class="workspace">
      <router-view/>
    </div>
  </div>
</template>

<script>
import EgMenu from '@/views/layout/Menu'
export default {
  name: 'App',
  components: {
    EgMenu
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
  .workspace{
    width: calc(100% - 182px);
    height: 100%;
    display: inline-block;
    float: right;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
