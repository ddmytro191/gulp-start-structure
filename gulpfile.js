import gulp from 'gulp'
import path from './gulp/config/path.js'
import plugins from './gulp/config/plugins.js'
import reset from './gulp/tasks/reset.js'
import copy from './gulp/tasks/copy.js'
// import html from './gulp/tasks/html.js'
import pug from './gulp/tasks/pug.js'

global.app = { gulp, path, plugins }

const mainTasks = gulp.parallel(copy, pug)
const dev = gulp.series(reset, mainTasks, watcher)

gulp.task('default', dev)

function watcher() {
    gulp.watch(path.watch.files, gulp.series(reset, copy))
    gulp.watch(path.watch.pug, pug)
}