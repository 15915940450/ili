const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase:'./dist'
  },
  module:{
    rules:[
      {
        test:/\.scss$/,
        use:[{
          loader:'style-loader'
        },{
          loader:'css-loader',
          options:{
            sourceMap:true
          }
        },{
          loader:'sass-loader',
          options:{
            sourceMap:true
          }
        }]
      }  //scss
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
