// next.config.js
const withOffline = require('next-offline')
require('dotenv').config()

const nextConfig = {
  // target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: '/',
        handler: 'NetworkFirst',
        options: {
          cacheName: 'html-cache',
          cacheableResponse: {
            statuses: [200],
          },
          expiration: {
            maxAgeSeconds: 24 * 60 * 60,
          },
        },
      },

      {
        urlPattern: /\/state\/.*\//,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'html-cache',
          cacheableResponse: {
            statuses: [200],
          },
          expiration: {
            maxAgeSeconds: 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\/state\/.*\/park\//,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'html-cache',
          cacheableResponse: {
            statuses: [200],
          },
          expiration: {
            maxAgeSeconds: 24 * 60 * 60,
          },
        },
      },

      {
        urlPattern: new RegExp('^https://national-parks.now.sh/api/'),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'api-cache',
          cacheableResponse: {
            statuses: [200],
          },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 150,
          },
        }
      },
    ],
  },
  env: {
    NPS_URI: process.env.NPS_URI,
    NPS_KEY: process.env.NPS_KEY,
    GOO_KEY: process.env.GOO_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    WEB_URI: process.env.WEB_URI,
    AWS_URI: process.env.AWS_URI,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    REGION: process.env.REGION,
    Bucket: process.env.Bucket,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID
  }
}

module.exports = withOffline(nextConfig)
