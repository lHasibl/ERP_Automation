const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://erp.bjitgroup.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/ERP/*.js'
  },
});
