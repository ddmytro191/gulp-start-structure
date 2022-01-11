import fileinclude from 'gulp-file-include'

const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude())
        .pipe(app.gulp.dest(app.path.build.html))
}

export default html