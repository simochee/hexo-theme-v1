gulp = require('gulp')
plumber = require('gulp-plumber')
notify = require('gulp-notify')
gulpif = require('gulp-if')

webpack = require('gulp-webpack')
named = require('vinyl-named')
source = require('vinyl-source-stream')
uglify = require('gulp-uglify')
buffer = require('vinyl-buffer')

config = require('../config')

gulp.task 'js', =>
    errorMsg = ->
        args = Array.prototype.slice.call(arguments)
        notify.onError(
            title: 'Compile Error'
            message: '<%= error %>'
        ).apply(this, args)
        this.emit('end')
    gulp.src "#{config.src.js}*.js"
        .pipe named()
        .pipe webpack(
            devtool: config.isBuildFlag ? '' : 'inline-source-map'
            module:
                loaders: [
                    test: /\.js?$/
                    loader: 'babel-loader'
                    exclude: /node_modules/
                    query:
                        presets: ['es2015']
                ]
        )
        .on 'error', errorMsg
        .pipe plumber()
        .pipe buffer()
        .pipe gulpif(config.isBuildFlag, uglify(preserveComments: 'some'))
        .pipe gulp.dest(config.dist.js)