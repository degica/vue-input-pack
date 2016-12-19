var webpack = require('webpack')
var config = require('./webpack.base.conf')

config.output.filename = 'vue-input-pack.js'
config.output.library = 'VueInputPack'
config.output.libraryTarget = 'umd'
config.output.umdNamedDefine = true

// whether to generate source map for production files.
// disabling this can speed up the build.
var SOURCE_MAP = true

config.devtool = SOURCE_MAP ? 'source-map' : false

config.plugins = (config.plugins || []).concat([
  // http://vuejs.github.io/vue-loader/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin()
])

module.exports = config
