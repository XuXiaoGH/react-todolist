var config = {
   entry: './src/main.js',
   //entry: ['webpack/hot/dev-server', path.resolve(__dirname, './main.js')],
   output: {
      path:'./build',
      filename: 'index.js',
   },
	
   /*devServer: {
      inline: true,
      port: 7777
   },*/
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
      },
         {test: /.css$/, loader: 'style!css'},
      ]
   }
	
}

module.exports = config;
