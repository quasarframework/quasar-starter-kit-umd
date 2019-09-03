const
  path = require('path'),
  fs = require('fs')

const
  pkg = require('./package.json'),
  templateVersion = pkg.version

module.exports = {
  helpers: {
    template_version () {
      return templateVersion
    },
    camel_case (str) {
      return str.replace(/-([a-z])/g, g => g[1].toUpperCase())
    },
    quasar_version () {
      return '^1.1.0'
    }
  },

  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    minified: {
      type: 'confirm',
      message: 'Use minified dependencies? (recommended)'
    },
    rtl: {
      type: 'confirm',
      message: 'Use RTL support?',
      default: false
    },
    icons: {
      type: 'list',
      message: 'Choose Icon Library',
      choices: [
        {
          name: 'Material Icons (recommended)',
          value: 'material-icons',
          short: 'Material Icons'
        },
        {
          name: 'Material Icons Outlined',
          value: 'material-icons-outlined',
          short: 'Material Icons Outlined'
        },
        {
          name: 'Material Icons Round',
          value: 'material-icons-round',
          short: 'Material Icons Round'
        },
        {
          name: 'Material Icons Sharp',
          value: 'material-icons-sharp',
          short: 'Material Icons Sharp'
        },
        {
          name: 'Fontawesome',
          value: 'fontawesome',
          short: 'Fontawesome'
        },
        {
          name: 'Ionicons',
          value: 'ionicons',
          short: 'Ionicons'
        },
        {
          name: 'MDI',
          value: 'mdi',
          short: 'MDI'
        },
        {
          name: 'Eva Icons',
          value: 'eva-icons',
          short: 'Eva'
        }
      ]
    },
    lang: {
      type: 'string',
      message: 'Quasar Language Pack - one from https://github.com/quasarframework/quasar/tree/dev/quasar/i18n',
      default: 'en-us',
      validate: opt => opt && opt.length >= 2
    },
    animations: {
      type: 'confirm',
      default: false,
      message: 'Use quasar-extras animations?'
    },
    ie: {
      type: 'confirm',
      default: false,
      message: 'Support Internet Explorer 11 and Edge?'
    }
  },

  complete: function(data, { chalk }) {
    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    const message = `
# ${chalk.green('Quasar UMD demo initialization finished!')}
# ===========================================

Documentation can be found at: http://quasar.dev

Quasar is relying on donations to evolve. We'd be very grateful if you can
read our manifest on "Why donations are important": https://quasar.dev/why-donate
Donation campaign: https://donate.quasar.dev
Any amount is very welcomed.
If invoices are required, please first contact razvan@quasar.dev

Please give us a star on Github if you appreciate our work:
https://github.com/quasarframework/quasar

Enjoy! - Quasar Team
`
    console.log(message)
  },
}
