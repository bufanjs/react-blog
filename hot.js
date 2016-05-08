var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    quiet: !true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    stats: {
        colors: true
    },
    proxy: {
        "/api/*": "http://localhost:3000/api",
        "/*.*": "http://localhost:3000"
    }
});
server.use(require('webpack-hot-middleware')(compiler));
server.listen(8000, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:8000');
});
