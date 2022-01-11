import fileinclude from 'gulp-file-include'
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'

const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(webpHtmlNoSvg())
        .pipe(versionNumber({
            'value': '%DT%',
            'append': {
                'key': 'v',
                'cover': 0,
                'to': [ 'css', 'js' ],
            },
            'output': {
                'file': 'gulp/version.json'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.html))
}

export default html