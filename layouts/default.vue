<template lang="pug">
  .page.page--color-black: .layout
    v-header
    .content: nuxt
    v-footer
</template>
<style lang="stylus">
  @import '../assets/stylus/layout/default.styl'
</style>
<script>
  import VHeader from '~/components/header.vue'
  import VFooter from '~/components/footer.vue'
  export default {
    components: {
      VHeader,
      VFooter
    }
  }
</script>
