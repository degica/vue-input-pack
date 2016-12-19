var path = require('path')
var projectRoot = path.resolve(__dirname, "../")

module.exports = {
  entry: {
    app: './src/demo.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'vue': 'vue/dist/vue.js'
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  babel: {
    babelrc: false,
    plugins: ['transform-runtime'],
    presets: ['es2015', 'stage-2']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}
