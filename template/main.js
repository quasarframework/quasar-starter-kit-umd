Vue.component('my-page', {
  template: '#my-page'
})

new Vue({
  el: '#q-app',
  data: function () {
    return {
      version: Quasar.version
    }
  },
  methods: {
    launch (url) {
      Quasar.utils.openURL(url)
    }
  }
})
