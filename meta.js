const
  path = require('path'),
  fs = require('fs')

const
  pkg = require('./package.json'),
  templateVersion = pkg.version

module.exports = {
  helpers: {
    if_or(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    }
  },

  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    author: {
      type: 'string',
      message: 'Author',
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
          short: 'mat'
        },
        {
          name: 'iOS',
          value: 'ios',
          short: 'ios'
        }
      ]
    },
    rtl: {
      type: 'confirm',
      message: 'Use Quasar RTL CSS? (experimental!)',
      default: false
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
