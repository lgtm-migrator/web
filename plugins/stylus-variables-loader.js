import Vue from 'vue'
import variables from '!!stylus-2js-variable-loader!../assets/stylus/variables/colors.styl';

Vue.use({
  install(Vue) {
    Vue.prototype.$styleColors = variables
  }
})
