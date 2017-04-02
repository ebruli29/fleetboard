/*global require*/
var config = require('../gulpconfig.js')(),
    plugins = require('gulp-load-plugins')(),
    gulp = plugins.help(require('gulp'), config.gulphelp.options);

gulp.task('build', 'Triggers the css build.', function () {
    'use strict';
    gulp.start(['css-compile','js-compile','js-headerlibs-compile','js-footeribs-compile']);
});