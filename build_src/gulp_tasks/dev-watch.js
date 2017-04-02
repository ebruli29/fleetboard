/*global require*/
var config = require('../gulpconfig.js')(),
    plugins = require('gulp-load-plugins')(),
    gulp = plugins.help(require('gulp'), config.gulphelp.options);


gulp.task('dev-watch', function () {
    'use strict';
    gulp.watch(
        [
            'resources/scss/**/*'
        ],
        [
            'css-compile'
        ]
    );
    gulp.watch(
        [
            'resources/js/**/*'
        ],
        [
            'js-compile'
        ]
    );
});
