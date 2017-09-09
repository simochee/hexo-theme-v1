gulp = require('gulp')
plumber = require('gulp-plumber')
notify = require('gulp-notify')

uglify = require('gulp-uglify')
concat = require('gulp-concat')

config = require('../config')

gulp.task 'lib', =>
    gulp.src config.src.lib
        .pipe plumber(
            errorHandler: notify.onError("Error: <%= error.message %>")
        )
        .pipe concat('lib.js')
        # .pipe uglify(preserveComments: 'some')
        .pipe gulp.dest(config.dist.js)