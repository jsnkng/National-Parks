// next.config.js
require('dotenv').config()

module.exports = {
  env: {
    NPS_URI: process.env.NPS_URI,
    NPS_KEY: process.env.NPS_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    WEB_URI: process.env.WEB_URI
  }
}
