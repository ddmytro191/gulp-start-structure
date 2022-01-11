// get name of project folder
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

const path = {
    build: {
        files: `${buildFolder}/files/`,
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
    ftp: ``
}

export default path