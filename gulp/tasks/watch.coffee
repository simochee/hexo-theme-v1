gulp = require('gulp')
watch = require('gulp-watch')

config = require('../config')

gulp.task 'watch', =>
    # css
    watch "#{config.src.css}**/*.styl", =>
        gulp.start('css')

    # js
    watch "#{config.src.js}**/*", =>
        gulp.start('js')
    