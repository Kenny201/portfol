const path = require('path');
const webpack = require('webpack');
const Uglify = require('uglifyjs-webpack-plugin');

let MODE = process.argv[process.argv.length - 1].substr(1) === 'prod' ? 'production' : 'development';

const config = {
    entry  : path.resolve(__dirname, './blocks/index.js'),
    mode   : MODE,
    devtool: MODE === 'development' ? 'inline-source-map' : false, // Инициализируем sourcemaps в зависимости от окружения
    output : {
      filename: 'main.js',
      path: path.resolve(__dirname, '../public')
    },
    module: {
      rules: [
        {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
          query: {
            presets: ['es2015'],
            "plugins": [
              "transform-object-rest-spread",
              "transform-class-properties"
            ]
          }
        }
      ]
    }
};

<<<<<<< HEAD
module.exports = config;
=======
module.exports = config; 
>>>>>>> 7660293a0958943c26e059561b255e40e45dfaf8
