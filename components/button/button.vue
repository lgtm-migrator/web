<template lang="pug">
  button(@mouseover="over" @mouseout="out" :class="classes")
    div(:class="gradientClasses")
      .button__layer-content: .button__layer-text: slot
</template>

<style lang="stylus" scoped>
  .button
    --gradient: linear-gradient(45deg, #4a3b54 5%, #444e69 50%, #3b4982 100%)

    background-image url(/images/metal.jpg)
    background-size cover
    background-position center
    display inline-block
    font inherit
    font-weight 400
    letter-spacing 0px
    outline none
    padding 3px
    border-radius 300px
    text-decoration none
    border 1px solid black
    position relative
    transition all .2s linear
    cursor pointer
    &::before
      content ""
      background-image var(--gradient)
      filter blur(10px)
      position absolute
      width calc(100% + 4px)
      height calc(100% + 2px)
      display block
      top -1px
      left -2px
      border-radius 50em
      opacity 0
      transition all .2s linear
      z-index -1
    &--hover
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, .7)
      &::before
        top 1px
        opacity .6
        cursor pointer
    &__layer
      &-gradient
        position relative
        padding 3px
        border-radius 300px
        border 1px solid #ffffff66
        position relative
        overflow hidden
        &::before
          content ""
          position absolute
          left 0
          top 0
          border-radius 300px
          background-image var(--gradient)
          opacity 0
          width 100%
          height 100%
          transition opacity .3s ease
        &--visible
          &::before
            opacity .5
      &-content
        background-image url(/images/metal.jpg)
        background-size cover
        background-position center
        padding 0 1.4rem
        border-radius 300px
        color black
        font-size .9rem
        position relative
      &-text
        background-image: -webkit-linear-gradient(#000 25%, #999 110%)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
        line-height 1.5
</style>

<script>
  export default {
    data() {
      return {
        mouseover: false
      }
    },
    computed: {
      classes() {
        return {
          button: true,
          'button--hover': this.mouseover
        }
      },
      gradientClasses() {
        return {
          'button__layer-gradient': true,
          'button__layer-gradient--visible': this.mouseover,
        }
      }
    },
    methods: {
      over() { this.mouseover = true },
      out() { this.mouseover = false }
    },
    props: {

    }
  }
</script>
