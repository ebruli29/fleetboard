/*global require*/
var config = require('../gulpconfig.js')(),
    plugins = require('gulp-load-plugins')(),
    gulp = plugins.help(require('gulp'), config.gulphelp.options);

gulp.task('js-compile', 'Triggers the custom js build.', ['js-hint'], function () {
    'use strict';
    return gulp.src(config.js.src)
        .pipe(plugins.concat(config.js.destFileName))
        .pipe(gulp.dest(config.js.dest))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglifyjs(null, {outSourceMap: true}))
        .pipe(gulp.dest(config.js.dest))
        .pipe(plugins.gzip())
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('js-headerlibs-compile', 'Triggers the headerlibs js build.', function () {
    'use strict';
    return gulp.src(config.jsheaderlibs.src)
        .pipe(plugins.concat(config.jsheaderlibs.destFileName))
        .pipe(gulp.dest(config.jsheaderlibs.dest))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglifyjs(null, {outSourceMap: true}))
        .pipe(gulp.dest(config.jsheaderlibs.dest))
        .pipe(plugins.gzip())
        .pipe(gulp.dest(config.jsheaderlibs.dest));
});

gulp.task('js-footeribs-compile', 'Triggers the footeribs js build.', function () {
    'use strict';
    return gulp.src(config.jsfooterlibs.src)
        .pipe(plugins.concat(config.jsfooterlibs.destFileName))
        .pipe(gulp.dest(config.jsfooterlibs.dest))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglifyjs(null, {outSourceMap: true}))
        .pipe(gulp.dest(config.jsfooterlibs.dest))
        .pipe(plugins.gzip())
        .pipe(gulp.dest(config.jsfooterlibs.dest));
});