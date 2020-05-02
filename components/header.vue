<template lang="pug">
  header.header: .container
    .header__logo: nuxt-link(to="/"): img(:src="_logo").header__logo-image
    nav.header__nav
      a(target="_blank" href="//vk.com/7architect").header__nav-link VKontakte
      a(target="_blank" href="//github.com/7architect").header__nav-link GitHub
      a(target="_blank" href="//codepen.io/7architect").header__nav-link CodePen
    .header__delimiter
</template>

<style lang="stylus">
  @import '../assets/stylus/variables/colors.styl'
  .header
    grid-area header
    padding-top 2.5rem
    &__logo
      display flex
      justify-content center
      &-image
        width 70px
    &__nav
      display flex
      justify-content center
      align-items center
      margin-top 1rem
      &-link
        display inline-block
        color: $color.grey
        background-image -webkit-linear-gradient($color.grey, lightness($color.grey, 1%))
        -webkit-background-clip text
        -webkit-text-fill-color transparent
        -webkit-font-smoothing antialiased
        text-decoration none
        font-weight 400
        font-size 1rem
        transition-property color, background, border-color
        transition .3s ease
        &:not(:last-of-type)
          margin-right 1rem
        &:hover
          color: $color.white
          -webkit-text-fill-color: initial
          border-color: $color.white

    &__delimiter
      background: linear-gradient(90deg, transparent -20%, $color.grey, transparent 120%)
      width 100%
      height 1px
      margin-top .5rem
      margin-bottom 1.5rem
      border-radius 100%
      @media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm)
          background linear-gradient(90deg, transparent 0%, $color.grey, transparent 100%)
</style>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "v-header",

    computed: {
      ...mapGetters(['_logo'])
    }
  }
</script>
