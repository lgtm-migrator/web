import Client from '../api/contentful'
import { SET_TIMELINE, SET_LOGO_URI } from '../commits.map'

export const state = () => ({
  timeline: [],
  __emergency: {
    logo: ''
  }
})
export const getters = {
  timeline: state => state.timeline,
  _logo: state => state.__emergency.logo
}
export const mutations = {
  [SET_TIMELINE]: (state, events) => state.timeline = events,
  [SET_LOGO_URI]: (state, uri) => state.__emergency.logo = uri
}
export const actions = {
  nuxtServerInit({ commit }) {
    return new Promise((resolve, reject) => {
      Client
        .getEntry('5pweniOSWqX10SfAiJYW5f')
        .then(({ fields })=> {
          commit(SET_LOGO_URI, fields.logo.fields.file.url)
          resolve()
        })
        .catch(reject)
    })
  },
  loadTimeline({ commit, state }) {
    return new Promise((resolve, reject) => {
      Client.getEntries({
         content_type: 'timeline'
      })
      .then(response => {
        const events = response.items.map(event =>  {
          return {
            id: event.sys.id,
            ...event.fields
          }
        })


        commit(SET_TIMELINE, events)
        resolve()
      })
      .catch(reject)
    })
  }
}
