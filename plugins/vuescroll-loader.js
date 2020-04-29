import Vue from 'vue'
import vuescroll from 'vuescroll'

// You can set global config here.
Vue.use(vuescroll, {
  ops: {
    mode: 'native',
    sizeStrategy: 'percent',
    detectResize: true,
    specifyBorderRadius: 0
  },
  name: 'v-scroll' // customize component name, default -> vueScroll
})
