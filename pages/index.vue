<template lang="pug">
main
  .stack
    .stack__item
      h1.title.title--size-xlarge.title--weight-normal.title--align-center
        | Alexander Katkov
      .title--level-2 frontend developer
    .stack__item: .title--level-2
      | and musician

  timeline(:timeline="$store.state.timeline")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Scroll from 'vuescroll'
  import Timeline from '~/components/timeline/timeline'
  import TimelineEvent from '~/components/timeline/timeline-event'

  export default {
    components: {
      Scroll,
      Timeline,
      TimelineEvent
    },

    data() {
      return { interval: null }
    },

    computed: {
      ...mapGetters([
        'timeline'
      ])
    },
    methods: {
      ...mapActions([
        'loadTimeline'
      ]),
      load() {
        this.loadTimeline()
      }
    },
    beforeDestroy() {
      clearInterval(this.interval)
    },
    fetch() {
      this.load()

      this.interval = setInterval(this.load, 5000)
    },
    fetchOnServer: false
  }
</script>

<style lang="stylus">
  @import '../assets/stylus/variables/colors.styl'

  .present
    width 500px
    margin 0 auto
    &__alpha-annotation
      font-size .8em
      margin-top .5em
      text-align center
      color #f99
      opacity .5
  .stack
    &__item
      text-align center
      &:not(:last-of-type)
        &::after
          background: linear-gradient(0deg, transparent, $color.grey, transparent)
          display block
          content ""
          width 1px
          height 50px
          margin 1rem auto
      &-title
        color: $color.white
        font-weight 400
        font-size 1.5em
        letter-spacing 3px
      &-desc
        color: darken($color.grey, 20)
        font-weight 200
        letter-spacing 1px;
</style>
