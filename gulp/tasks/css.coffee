gulp = require('gulp')
gulpif = require('gulp-if')
plumber = require('gulp-plumber')
notify = require('gulp-notify')

# Stylesheets
stylus = require('gulp-stylus')
autoprefixer = require('gulp-autoprefixer')
sourcemaps = require('gulp-sourcemaps')
combineMq = require('gulp-combine-mq')  # Media Queryをひとつにまとめる

config = require('../config')

# stylusをコンパイル
gulp.task 'css', =>
    gulp.src "#{config.src.css}**/!(_)*.styl"
        .pipe plumber(
            errorHandler: notify.onError('<%= error.message %>')
        )
        .pipe gulpif(!config.isBuildFlag, sourcemaps.init())
        .pipe gulpif(!config.isBuildFlag,
            stylus(),
            stylus(compress: true)
        )
        .pipe gulpif(config.isBuildFlag,
            combineMq(
                beautify: false
            )
        )
        .pipe autoprefixer(
            browsers: [
                'last 2 versions'
                'ie 9'
                'ios 6'
                'android 4'
            ]
            cascade: false
        )
        .pipe gulpif(!config.isBuildFlag, sourcemaps.write('.'))
        .pipe gulp.dest(config.dist.css)