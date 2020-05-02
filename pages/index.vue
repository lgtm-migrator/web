<template lang="pug">
main
  .stack
    .stack__item
      h1.title.title--size-xlarge.title--weight-normal.title--align-center Alexander Katkov
      .title.title--level-2 frontend developer, musician
    .stack__item: .container Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus quam, viverra quis arcu a, laoreet dignissim quam. Donec tincidunt ante vitae fermentum pharetra. Curabitur ultrices, velit eget semper volutpat, massa arcu congue arcu, vel pharetra ex nisl at justo. Mauris egestas malesuada ex, non egestas ante vulputate rhoncus. Maecenas mollis pellentesque lacinia. Nullam mattis ultrices felis. Curabitur feugiat aliquam convallis. Integer ultrices libero sem, vitae blandit nulla vestibulum vel. Quisque pharetra iaculis lorem et molestie. Integer in rhoncus eros, a tempor mi.


    .stack__item: .container: nuxt-link(to="/contact"): v-button contact me via ...

  timeline(:timeline="$store.state.timeline")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Scroll from 'vuescroll'
  import VButton from '~/components/button/button'
  import Timeline from '~/components/timeline/timeline'
  import TimelineEvent from '~/components/timeline/timeline-event'

  export default {
    components: {
      Scroll,
      VButton,
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
    mounted() {
      this.interval = setInterval(this.load, 5000)
    },
    beforeDestroy() {
      clearInterval(this.interval)
    },
    async middleware({ store }) {
      await store.dispatch('loadTimeline')
    }
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
