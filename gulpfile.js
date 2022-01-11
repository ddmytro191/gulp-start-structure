import gulp from 'gulp'
import path from './gulp/config/path.js'
import copy from './gulp/tasks/copy.js'

global.app = { gulp, path }

const dev = gulp.series(copy, watcher)

function watcher() {
    gulp.watch(path.watch.files, copy)
}

gulp.task('default', dev)