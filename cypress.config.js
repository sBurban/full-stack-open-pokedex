require('dotenv').config() // 👈 load variables from .env

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:'+(process.env.PORT ?? 5000),
    setupNodeEvents(on, config) {
      // any custom logic here
    },
  },
})