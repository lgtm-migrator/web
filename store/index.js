import Client from '../api/contentful'
import { SET_TIMELINE } from './commits.map'

export const state = () => ({
  timeline: []
})
export const getters = {
  timeline: state => state.timeline
}
export const mutations = {
  [SET_TIMELINE]: (state, events) => state.timeline = events,
  PUSH_EVENT: (state, event) => state.timeline.unshift(event),
  REM_EVENT: (state, id) => delete state.timeline[state.timeline.findIndex(e => e.id === id)]
}
export const actions = {
  loadTimeline({ commit }) {
    Client.getEntries()
      .then(response => {
        const events = response.items.map(event =>  {
          return {
            id: event.sys.id,
            ...event.fields
          }
        })

        commit(SET_TIMELINE, events)
      })
      .catch(console.error)
  }
}
