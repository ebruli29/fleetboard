require('es6-promise').polyfill();
module.exports = function () {
    var config,
        bowerPath = "bower_components",
        buildPath = "../build";
    return config = {
        "js": {
            "src": [
                "resources/js/*.js"
            ],
            "dest": buildPath + "/js/",
            "destFileName": "footer.js",
            "jsHintFilters": [
                "!**/bower_components/**/"
            ],
            "notInUse": [
                bowerPath + "/bootstrap/js/src/button.js",
                bowerPath + "/bootstrap/js/src/modal.js",
                bowerPath + "/bootstrap/js/src/tooltip.js",
                bowerPath + "/bootstrap/js/src/util.js"
            ]
        },
        "jsheaderlibs": {
            "src": [
                bowerPath + "/jquery/dist/jquery.slim.js"
            ],
            "dest": buildPath + "/js/",
            "destFileName": "headerlibs.js"
        },
        "jsfooterlibs": {
            "src": [
                bowerPath + "/tether/dist/js/tether.js",
                bowerPath + "/bootstrap/dist/js/bootstrap.js",
            ],
            "dest": buildPath + "/js/",
            "destFileName": "footerlibs.js"
        },
        "scss": {
            "src": "resources/scss/*.scss",
            "dest": buildPath + "/css/"
        },
        // https://www.npmjs.com/package/gulp-help
        "gulphelp": {
            "options": {
                "hideEmpty": true,
                "hideDepsMessage": true,
                "description": ""
            }
        }
    };
};
