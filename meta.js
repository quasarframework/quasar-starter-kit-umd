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
      return '0.15.0-beta.9'
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
    theme: {
      type: 'list',
      message: 'Quasar Theme',
      choices: [
        {
          name: 'Material Design',
          value: 'mat',
          short: 'Material Design'
        },
        {
          name: 'iOS',
          value: 'ios',
          short: 'iOS'
        }
      ]
    },
    rtl: {
      type: 'confirm',
      message: 'Use Quasar RTL CSS? (experimental!)',
      default: false
    },
    icons: {
      type: 'list',
      message: 'Choose Icon Set',
      choices: [
        {
          name: 'Material Icons (recommended)',
          value: 'material',
          short: 'Material Icons'
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
        }
      ]
    },
    lang: {
      type: 'string',
      message: 'Quasar I18n - one from https://github.com/quasarframework/quasar/tree/dev/i18n',
      default: 'en-us',
      validate: opt => opt && opt.length >= 2
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
# ${chalk.green('Quasar UMD Project initialization finished!')}
# ===========================================

Documentation can be found at: http://quasar-framework.org

Quasar is relying on donations to evolve. We'd be very grateful if you can
take a look at: https://www.patreon.com/quasarframework
Any amount is very welcomed.
If invoices are required, please first contact razvan.stoenescu@gmail.com

Please give us a star on Github if you appreciate our work:
https://github.com/quasarframework/quasar

Enjoy! - Quasar Team
`
    console.log(message)
  },
}
