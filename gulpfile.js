import gulp from 'gulp'
import path from './gulp/config/path.js'
import copy from './gulp/tasks/copy.js'

global.app = { gulp, path }

gulp.task('default', copy)