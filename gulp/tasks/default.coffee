gulp = require('gulp')
runSequence = require('run-sequence')

#　デフォルト処理
gulp.task 'default', (callback) =>
    runSequence(
        # 依存関係があるタスク
        # 'task0'
        # 依存関係のない残りのタスク
        ['css', 'js', 'watch']
        callback
    )