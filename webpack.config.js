{
    "rules": [
      {
        "test": {},
        "include": [
          "/path/to/project/next-pwa"
        ],
        "exclude": {},
        "use": {
          "loader": "next-babel-loader",
          "options": {
            "dev": false,
            "isServer": false
          }
        }
      },
      {
        "test": {},
        "use": [
          {
            "loader": "/path/to/project/next-pwa/node_modules/extract-text-webpack-plugin/dist/loader.js",
            "options": {
              "id": 1,
              "omit": 0,
              "remove": true
            }
          },
          {
            "loader": "css-loader",
            "options": {
              "modules": false,
              "minimize": true,
              "sourceMap": false,
              "importLoaders": 1
            }
          },
          {
            "loader": "postcss-loader",
            "options": {
              "config": {
                "path": "/path/to/project/next-pwa/postcss.config.js"
              }
            }
          },
          {
            "loader": "css-purify-webpack-loader",
            "options": {
              "includes": [
                "./pages/*.js",
                "./components/*.js"
              ]
            }
          }
        ]
      }
    ]
  }