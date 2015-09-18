'use strict';

module.exports = function (gulp, config) {
    return function () {
        return gulp.src(config.fontsDir + '/**/*')
            .pipe(gulp.dest(config.distDir + '/fonts/'));
    };
};