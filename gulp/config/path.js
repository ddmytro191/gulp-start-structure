// get name of project folder
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = rootFolder // ./dist by default
const srcFolder = `./src`

const path = {
    build: {},
    src: {},
    watch: {},
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
    ftp: ``
}

export default path