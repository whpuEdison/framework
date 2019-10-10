<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
