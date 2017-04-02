/*global require*/
var requireDir = require('require-dir'),
    dir = requireDir('./gulp_tasks');

// The actual tasks are configured in external files under ./GulpTasks/
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md
// For the default task, that gets triggered with the bare 'gulp' command, see ./GulpTasks/default.js