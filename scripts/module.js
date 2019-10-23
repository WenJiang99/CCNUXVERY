const fs = require('fs')

const _module = process.argv[2]

if (!_module || !isModule(_module)) {
    throw new Error(`${_module} Is Not A Module`)
}

createModule()

function createModule() {
    goto()
    const dirName = `./${_module}`
    fs.existsSync(dirName) || fs.mkdirSync(dirName)
    const readmeTemp = `# ${_module}
`
    goto(dirName)
    fs.existsSync('README.md') || fs.writeFileSync('README.md', readmeTemp)
}



function getHomePath() {
    const pathList = require.main.filename.split('\\')
    const home = pathList.slice(0, pathList.length - 2).join('/')
    // console.log(home)
    return home


}
function goto(pathName) {
    // console.log(`goto:${path.dirname(getHomePath() + pathName + '/')}`, pathName)
    process.chdir(getHomePath() + (pathName || '') + '/')
}
function isModule(dirName) {
    const reg = /P\d-Module-(\d+)/
    return reg.test(String(dirName))
}