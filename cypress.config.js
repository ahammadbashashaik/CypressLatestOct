const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    "pageLoadTimeout": 120000,
    "defaultCommandTimeout": 30000,
    setupNodeEvents(on, config) {
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});

