import fileinclude from 'gulp-file-include'
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'

const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(webpHtmlNoSvg())
        .pipe(app.gulp.dest(app.path.build.html))
}

export default html