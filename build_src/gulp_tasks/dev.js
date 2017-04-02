/*global require*/
var config = require('../gulpconfig.js')(),
    plugins = require('gulp-load-plugins')(),
    gulp = plugins.help(require('gulp'), config.gulphelp.options);

gulp.task('dev', 'Main task for development (goes into watch state).', function () {
    'use strict';
    gulp.start(['css-compile', 'js-compile','dev-watch']);
});
