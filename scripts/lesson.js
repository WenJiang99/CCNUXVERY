const fs = require('fs')
const exec = require('child_process').exec

// const _module = process.argv[2]
// const _lesson = process.argv[3]

const [_module, _lesson, _title, ...fileTypeList] = process.argv.slice(2)

if (!isModule(_module)) {
  throw new Error(`${_module} Not Match The Module Name Patter`)
}

if (!_lesson) {
  throw new Error('Lesson Name Not Found.\n')
}

const createModule = `npm run module ${_module}`
if (fs.existsSync(`./${_module}`)) {
  goto(`./${_module}`)
  createLesson()
  return

} else {
  exec(createModule, function (err, stdout, stderr) {
    console.log('auto create')
    if (err) {
      throw new Error(`${_module} Create Failed.`)
    } else {
      console.log('create success')
      goto(`./${_module}`)
      createLesson()
      process.exit(0)
      return
    }
  })
}



function createLesson() {
  goto(`./${_module}`)
  const dirName = `${_lesson}`
  fs.existsSync(dirName) || fs.mkdirSync(dirName)
  updateReadme()
  const readmeTemp = `# ${_module}\t${_lesson} ${_title || ""}
## 总结

## 任务
`
  const htmlTemp = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./index.css" />
</head>
<body>
    
</body>
</html>
`
  createFile('README.md', readmeTemp)
  for (const ext of fileTypeList || []) {
    const fileName = `index.${ext.trim()}`
    createFile(fileName, /html?$/.test(fileName) ? htmlTemp : null)
  }
}

function createFile(fileName, fileTemp) {

  goto(`./${_module}/${_lesson}`)
  fileName && fs.existsSync(fileName) || fs.writeFileSync(fileName, fileTemp || "")
}

function updateReadme() {
  goto(`./${_module}`)
  const temp = `\n## ${_module} ${_lesson} ${_title || ""}
- [任务链接]()
- [任务提交](./${_lesson}/README.md)
`
  fs.appendFileSync('./README.md', temp)
}

function getHomePath() {
  const pathList = require.main.filename.split('\\')
  const home = pathList.slice(0, pathList.length - 2).join('/')
  // console.log(home)
  return home


}
function goto(pathName) {
  // console.log(`goto:${path.dirname(getHomePath() + pathName + '/')}`, pathName)
  process.chdir(getHomePath() + pathName + '/')
}
function isModule(dirName) {
  const reg = /P\d-Module-(\d+)/
  return reg.test(String(dirName))
}