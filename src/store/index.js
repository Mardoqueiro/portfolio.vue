import { createStore } from 'vuex'
const projectsURL = 'https://mardoqueiro.github.io/Vue_EOMP_test/data/'

export default createStore({
  state: {
    projects: null,
    project: null
  },
  getters: {
  },
  mutations: {
    setProtfolios(state, projects) {
      state.projects = projects
    },
    setproject(state, project) {
      state.project = project
    }
  },
  actions: {
    async fetchprojects({ context }) {
      try {
        let res = await fetch(projectsURL)
        let data = await res.json() 
        context.commit('setProjects', data)
      }  
      catch (e) {
        console.log(e.message)
      }
    }
  },
  modules: {
  }
})
