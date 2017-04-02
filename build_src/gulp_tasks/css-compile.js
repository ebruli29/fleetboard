/*global require*/
var config = require('../gulpconfig.js')(),
    plugins = require('gulp-load-plugins')(),
    gulp = plugins.help(require('gulp'), config.gulphelp.options);

gulp.task('css-compile', 'Triggers the css build.', function () {
    'use strict';
    return gulp.src(config.scss.src)
        .pipe(plugins.sass({"sourcemaps": true}))
        .pipe(plugins.cssimport())
        .pipe(plugins.bless({imports: false}))
        .pipe(gulp.dest(config.scss.dest))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(config.scss.dest))
        .pipe(plugins.gzip())
        .pipe(gulp.dest(config.scss.dest));
});