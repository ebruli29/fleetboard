/*global require*/
var config = require('../gulpconfig.js')(),
    plugins = require('gulp-load-plugins')(),
    gulp = plugins.help(require('gulp'), config.gulphelp.options);

gulp.task('js-clean', false, function () {
    'use strict';
    return gulp.src(config.js.dest, {read: false})
        .pipe(plugins.clean({force: true}));
});

gulp.task('css-clean', false,  function () {
    'use strict';
    return gulp.src(config.scss.dest, {read: false})
        .pipe(plugins.clean({force: true}));
});