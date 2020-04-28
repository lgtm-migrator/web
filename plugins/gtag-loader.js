import Vue from 'vue'
import VueGtag from "vue-gtag"
import { gtag } from '../config'

Vue.use(VueGtag, {
  config: { id: gtag.id }
})
