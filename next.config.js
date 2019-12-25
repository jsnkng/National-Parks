// next.config.js
const NextWorkboxPlugin = require('next-workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')

require('dotenv').config()

module.exports = {
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
    Bucket: process.env.Bucket
  },
  webpack(config, { isServer, buildId, dev }) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    // if (!isServer) {
    //   config.module.rules.find(({ test }) => test.test('style.css')).use.push({
    //     loader: 'css-purify-webpack-loader',
    //     options: {
    //       includes: ['./pages/*.js', './components/*.js'],
    //     },
    //   })
    // }

    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next',
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache',
          },
        },
        // {
        //   urlPattern: /[^3]\/movie\//,
        //   handler: 'networkFirst',
        //   options: {
        //     cacheName: 'html-cache',
        //   },
        // },
        // {
        //   urlPattern: new RegExp('^https://api.themoviedb.org/3/movie'),
        //   handler: 'staleWhileRevalidate',
        //   options: {
        //     cacheName: 'api-cache',
        //     cacheableResponse: {
        //       statuses: [200],
        //     },
        //   },
        // },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    }

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions,
        }),
        new WebpackPwaManifest({
          filename: 'static/manifest.json',
          name: 'National Parks Guide',
          short_name: 'Nat_Park_Gd',
          description: 'A State-by-State Guide to the National Park Service',
          background_color: '#ffffff',
          theme_color: '#5755d9',
          display: 'standalone',
          orientation: 'portrait',
          fingerprints: false,
          inject: false,
          start_url: '/',
          ios: {
            'apple-mobile-web-app-title': 'National Parks',
            'apple-mobile-web-app-status-bar-style': '#5755d9',
          },
          icons: [
            {
              src: path.resolve('static/favicon.ico'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: '/static',
            },
          ],
          includeDirectory: true,
          publicPath: '..',
        })
      )
    }

    return config
  },

}
