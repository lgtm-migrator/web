<template lang="pug">
  header(:class="common.header")
      nav(:class="[common.header__section, common['header__section--content-right']]")
        div(:class="common.header__nav")
          // a(href="//vk.com/7architect").link VK
      nav(:class="[common.header__section, common['header__section--content-center']]")
        nuxt-link(to="/").link: img(src="/images/logo.jpg" :class="common.header__logo")
      div(:class="common.header__section"): div(:class="common.header__nav"): nav
        // a(href="//vk.com/7architect").link VK
</template>
<style lang="stylus" module="common">
  @import '../assets/stylus/variables/colors.styl'
  .header
    display flex
    grid-area header
    padding-top 2.5rem
    &__logo
      width 46px
    &__section
      width 100%
      display flex
      align-items center
      &--content-center
        justify-content center
        width fit-content
        padding 0 2rem
      &--content-right
        justify-content flex-end
    &__nav
      &-link
        font-size .95em
        letter-spacing 1px
        color: $color.grey
        display inline-block
        text-transform uppercase
        margin 0 .5rem
        text-decoration none
        transition color .2s linear
        &:hover
        &--active
          text-decoration none
          color: $color.white
</style>
<style lang="stylus" module="white">
  @import '../assets/stylus/variables/colors.styl'
  .header
    &__nav
      &-link
        font-size .95em
        letter-spacing 1px
        color: $color.grey
        display inline-block
        text-transform uppercase
        margin 0 .5rem
        text-decoration none
        transition color .2s linear
        &--active
        &:hover
          color #000000
</style>
<script>
  export default {
    name: "v-header",
    props: {
      theme: { type: String, validate: v => ['common', 'white'].includes(v) }
    },
    computed: {
      style () {
        return this.theme ? this[this.theme] : this.common
      }
    }
  }
</script>
