/*global require*/
var config = require('../gulpconfig.js')(),
    plugins = require('gulp-load-plugins')(),
    gulp = plugins.help(require('gulp'), config.gulphelp.options);

gulp.task('js-hint', function () {
    'use strict';
    return gulp.src(config.js.src.concat(config.js.jsHintFilters))
        .pipe(plugins.jshint('.jshintrc'))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});