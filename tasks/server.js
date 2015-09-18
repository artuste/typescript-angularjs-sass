'use strict';
module.exports = function(gulp, serverRootDir, watchDir, openBrowser) {
    var fs = require('fs');
    //var modRewrite = require('connect-modrewrite');

    return function() {
        var path = require('path');
        var portFinder = require('portfinder');
        var webServer = require('gulp-webserver');
        //var http = require('http');
        var httpProxy = require('http-proxy');
        var proxy = httpProxy.createProxyServer();

        proxy.on('error', function (err, req, res) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });

            res.end('Something went wrong. And we are reporting a custom error message.');
        });

        openBrowser = typeof openBrowser !== 'undefined' ? openBrowser : true;

        if (shouldWatchTypeScript() && liveReload()) {
            console.log('TS ON => Watching TypeScript enabled');
            gulp.watch(path.join(watchDir, '**', '*.ts'), ['compile:src']);
        } else {
            console.log('TS OFF => Watching TypeScript disabled');
        }

        return portFinder.getPort({
            host: 'dev.ydp.local'
        }, function runServer(err, port) {
            gulp.src([serverRootDir])
                .pipe(webServer({
                    livereload: {
                        enable: liveReload(),
                        filter: filterWatchFilesForLivereload
                    },
                    fallback: 'index.html',
                    open: openBrowser,
                    port: port

                    //middleware: function (req, res, next) {
                    //    if (/^\/api/.test(req.url)) {
                    //        proxy.web(req, res, {
                    //            target: 'http://dev.home.local'
                    //        });
                    //    } else {
                    //        next();
                    //    }
                    //}

                    //middleware: modRewrite([
                    //    '^/api/(.*)$ http://dev.home.local/$1 [P]'
                    //])
                    //proxies: {
                    //    source: '/api',
                    //    target: 'http://dev.home.local',
                    //    options: {
                    //        headers: {
                    //            'VO-Method': '0',
                    //            'VO-Method-Name': 'App'
                    //        }
                    //    }
                    //}
                }));
        });
    };

    function isInWatchDir(fileName) {
        return fileName.indexOf(watchDir) >= 0;
    }

    function isDirectory(path) {
        return fs.lstatSync(path).isDirectory();
    }

    function isJsFile(fileName) {
        return fileName.match(/.js$/);
    }

    function filterWatchFilesForLivereload(fileName) {
        return isInWatchDir(fileName) && (isDirectory(fileName) || isJsFile(fileName));
    }

    function shouldWatchTypeScript() {
        var argsWithoutTaskName = process.argv.slice(3);
        return !(argsWithoutTaskName.length > 0 && argsWithoutTaskName[0] === '--watch-js');
    }

    function liveReload() {
        return typeof(watchDir) === 'string';
    }
};
