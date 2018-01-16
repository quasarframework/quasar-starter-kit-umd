{{#unless_eq lang "en-us"}}Quasar.i18n.set(Quasar.i18n.{{camel_case lang}})
{{/unless_eq}}{{#unless_eq icons "material"}}Quasar.icons.set(Quasar.icons.{{icons}})
{{/unless_eq}}

Vue.component('my-page', {
  template: '#my-page'
})

new Vue({
  el: '#q-app',
  data: function () {
    return {
      version: Quasar.version,
      drawerState: true
    }
  },
  methods: {
    launch (url) {
      Quasar.utils.openURL(url)
    }
  }
})
