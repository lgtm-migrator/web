<template lang="pug">
  .timeline
    .timeline__shadow
    .timeline__scroll-area: slot
</template>

<style lang="stylus">
  .timeline
    position relative

    &__scroll-area
      --event-width: 300px

      width 100vw
      overflow-x auto
      display flex
      margin-top 3rem

      &:before
        content ""
        width calc(50% - var(--event-width) / 2)
        flex 0 0 auto

    &__shadow
      width 100%
      height 100%
      &:after,
      &:before
        content ""
        position absolute
        z-index 99
        width 100px
        height 100%
        @media screen and (max-width: 440px)
          display none
      &:before
        left 0
        background-image linear-gradient(90deg, black, transparent)
      &:after
        right 0
        background-image linear-gradient(90deg, transparent, black)
</style>
