<template lang="pug">
  .timeline
    .timeline__shadow
    .timeline__scroll: v-scroll(:ops="ops"): .timeline__events: slot
</template>

<script>
  export default {
    mounted() {
      console.log(this.$styleColors);
    },
    data() {
      return {
        ops: {
          bar: {
            onlyShowBarOnScroll: false,
            background: this.$styleColors.$COLOR_PRIMARY
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  .timeline
    margin-top 4rem
    position relative
    &__scroll
      width 100vw
    &__events
      --event-width: 300px

      padding-bottom 1rem
      width auto
      display flex

      &:before
        content ""
        width calc(50vw - var(--event-width) / 2)
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
