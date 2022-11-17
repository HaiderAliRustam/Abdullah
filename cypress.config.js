const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '32y7rx',
  e2e: {
    setupNodeEvents(on, config) {
      defaultCommandTimeout: 20000
      // implement node event listeners here
    },
  },
});
