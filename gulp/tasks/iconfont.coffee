gulp = require('gulp')

iconfont = require('gulp-iconfont')
consolidate = require('gulp-consolidate')

config = require('../config')

gulp.task 'iconfont', (callback) =>
    gulp.src "#{config.src.root}fonts/_icons/*.svg"
        .pipe iconfont(
            fontName: 'iconfont'
            fixedWidth: true
            startCodepoint: 0xF001
        )
        .on 'glyphs', (glyphs, options) =>
            gulp.src "#{config.src.root}fonts/_templates/_iconfont.styl"
                .pipe consolidate('lodash', 
                    glyphs: glyphs
                    fontName: 'iconfont'
                    fontPath: '../fonts/'
                    className: 'i'
                )
                .pipe gulp.dest("#{config.src.css}_partial/")
                # .on 'end', callback
        .pipe gulp.dest("#{config.dist.root}fonts/")