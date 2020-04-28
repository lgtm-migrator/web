<template lang="pug">
  .timeline__event
    .timeline__event-point-line
      div: .timeline__event-point
      .timeline__event-date 20 april 2020
      .timeline__event-line
    .timeline__event-header
      .timeline__event-title Start of timeline
    .timeline__event-content
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu imperdiet ante, et rhoncus felis. Quisque efficitur magna quis elit porttitor cursus. Nullam blandit elit dictum lorem tempor eleifend sit amet a lorem. Ut nulla massa, sodales ac quam in, sagittis interdum ipsum.
</template>

<style lang="stylus">
  @import '../../assets/stylus/variables/colors.styl'

  @media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm)
    .timeline__event-line
      background linear-gradient(90deg, transparent 0%, #999 0%, transparent 100%) !important

  .timeline__event
    width 300px
    flex 0 0 auto

    &-point-line
      display flex
      align-items center
      flex-direction row
    &-point
      width 10px
      height 10px
      background black
      border-radius 100px
      border 1px solid
    &-line
      background linear-gradient(90deg, transparent 0%, #999 0%, transparent 150%)
      width 100%
      height 1px
      margin-left 5px
    &-date
      color rgba(255, 255, 255, .5)
      min-width fit-content
      margin 0 .5rem
      font-weight 200
      font-size 0.6rem
      letter-spacing 2px
      transform translateY(1px)
    &-title
      margin .5rem 0
      color: alpha($COLOR_PRIMARY, 0.5)
      font-weight 300
      letter-spacing 1px
      cursor pointer
      transition color .3s ease
      &:after
        content "→"
        font-size 1rem
        transform translateX(5px) translateY(1px)
        display inline-block
      &:hover
        color: $COLOR_PRIMARY
        text-decoration underline


    &-content
      font-size .9rem
      padding-right 1rem

</style>
