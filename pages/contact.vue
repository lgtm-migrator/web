<template lang="pug">
  .main
    .container
      nuxt-link(to="/").link ← Go Back
      h1.title.title--size-xlarge.title--weight-normal.title--align-center
        a(href="mailto:alexander.katkov.h@icloud.com").mail-link alexander.katkov.h@icloud.com
      .title.title--level-2 or wtire to my #[a(href="//vk.com/7architect").link VK]
</template>

<style lang="stylus">
  @import '../assets/stylus/variables/colors.styl'

  .mail-link
    color: $color.white
    text-decoration none
    border-bottom: 1px dashed lightness($color.white, 40%)
    word-break break-word
    text-align center
</style>
