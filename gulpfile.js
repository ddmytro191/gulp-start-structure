import gulp from 'gulp'
import path from './gulp/config/path.js'
import reset from './gulp/tasks/reset.js'
import copy from './gulp/tasks/copy.js'

global.app = { gulp, path }

const dev = gulp.series(reset, copy, watcher)

gulp.task('default', dev)

function watcher() {
    gulp.watch(path.watch.files, gulp.series(reset, copy))
}