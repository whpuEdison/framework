<template>
  <div>
    <EgMenu/>
    <div class="workspace">
      <router-view/>
    </div>
  </div>
</template>

<script>
import EgMenu from '@/views/layout/Menu'
export default {
  name: 'Root',
  components: {
    EgMenu
  }
}
</script>

<style scoped>

</style>
