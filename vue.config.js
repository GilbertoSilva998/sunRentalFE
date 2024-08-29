const { defineConfig } = require('@vue/cli-service')

//const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  // rules: [
  //   {
  //     test: /\.(png|jpe?g|gif|bmp)$/i,
  //     type: 'asset/resource',
  //     generator: {
  //       filename: './assets/images/[name][ext]'
  //     }
  //   }
  // ]
 // Other configurations...
 //  plugins: [
 //    new webpack.defineConfig({
 //      __VUE_OPTIONS_API__: false,  // Set to false if you aren't using the Options API
 //      __VUE_PROD_DEVTOOLS__: false  // Set to true if you want devtools in production
 //    })
 //  ]
});
