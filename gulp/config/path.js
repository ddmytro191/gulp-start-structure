// get name of project folder
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

const path = {
    build: {
        html: `${buildFolder}/`,
        pug: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        pug: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        pug: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
    ftp: ``
}

export default path