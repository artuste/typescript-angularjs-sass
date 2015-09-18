'use strict';

module.exports = function (gulp, sass, config) {
    return function () {
        return gulp.src(config.srcDir + '/public/branding/sass/application.scss')
            .pipe(sass({
                style: 'compressed',
                loadPath: [
                    config.srcDir + '/public/branding/sass',
                    config.vendorDir + '/jspm_packages/github/twbs/bootstrap-sass@3.3.5/assets/stylesheets'
                ]
            }))
            .pipe(gulp.dest(config.distDir + '/css'));
    };
};