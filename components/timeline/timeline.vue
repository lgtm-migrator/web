<template lang="pug">
  .timeline
    .timeline__shadow
    .timeline__scroll: v-scroll(:ops="ops")
      .timeline__events: timeline-event(
        class="list-complete-item"
        v-for="(event, index) in timeline"
        :key="event.date + Math.random()"
        :date="event.date"
        :title="event.title"
        :desc="event.event"
      )
</template>

<script>
  import TimelineEvent from './timeline-event'
  export default {
    components: {
      TimelineEvent
    },
    data() {
      return {
        ops: {
          bar: {
            onlyShowBarOnScroll: true,
            background: this.$styleColors.$COLOR_PRIMARY
          }
        }
      }
    },
    props: {
      timeline: {
        type: Array,
        required: true
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
