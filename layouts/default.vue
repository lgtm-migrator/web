<template lang="pug">
  .page
    .page__cover: video(autoplay bufereded playsinline loop muted poster="poster.png").page__cover-video: source(src="cover.mp4")
    .page__viewport: .layout
      v-header
      .content
        .content__viewport: nuxt
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
