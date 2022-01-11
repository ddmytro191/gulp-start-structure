import webpHtmlNoSvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'
import gpug from 'gulp-pug'

const pug = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(gpug({
            pretty: true,
            verbose: true
        }))
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
        .pipe(app.gulp.dest(app.path.build.pug))
}

export default pug