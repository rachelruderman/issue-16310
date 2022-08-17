const { defineConfig } = require('cypress')

// Populate process.env with values from .env file
require('dotenv').config()

module.exports = defineConfig({
  env: {
    auth_username: process.env.AUTH_USERNAME,
    auth_password: process.env.AUTH_PASSWORD,
    okta_domain: process.env.REACT_APP_OKTA_DOMAIN,
    okta_client_id: process.env.REACT_APP_OKTA_CLIENTID
  }
})