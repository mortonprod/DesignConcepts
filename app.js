var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

if (process.env.NODE_ENV === "development") {
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.config.js');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.entry.fastOne.unshift("webpack-dev-server/client?http://localhost:8081/", "webpack/hot/dev-server");
    config.entry.blackWhiteOne.unshift("webpack-dev-server/client?http://localhost:8081/", "webpack/hot/dev-server");
    config.entry.cloudsOne.unshift("webpack-dev-server/client?http://localhost:8081/", "webpack/hot/dev-server");
    config.entry.dotsOne.unshift("webpack-dev-server/client?http://localhost:8081/", "webpack/hot/dev-server");

    var proxy = require('proxy-middleware');
    var url = require('url');
}

if (process.env.NODE_ENV === "development") {
    var server = new WebpackDevServer(webpack(config), {
        contentBase:"./public/",
        hot: true,
        quiet: false,
        noInfo: false,
        publicPath: "/public/",
        stats: { colors: true }
    });
    server.listen(8081, "localhost", function () { });
    app.use('/assets', proxy(url.parse('http://localhost:8081/public/')));
}



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
