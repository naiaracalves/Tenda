const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
   viewportWidth: 1280,
   viewportHeight: 800,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://marketplace-alpha.tendaatacado.com.br/",
    
  },
});
