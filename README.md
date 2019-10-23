# CCNUXVERY

## Description
```
    本仓库主要用于存放校园社团学习的任务相关的各种资源    
    仓库目录主要是按照每一星期的学习任务进行分类，每一星期作为一个目录 (Module-xxxx),Module-xxx目录内，每个lesson也会对应     
    有一个markdown文档作为结果展示、说明   
    相同的Module中的Lesson资料存放于同一个目录中，同时每个目录会带有一个README.md文件对目录进行说明
```

## Start
- 克隆仓库到本地目录
- 打开仓库根目录，执行 git checkout develop 命令切换到develop分支
- 进入到对应的Module-xxx 目录查看对应的学习任务资料

## Scripts
- 在项目的根目录下执行`npm run module moduleName` 快速创建一个moduleName目录，包含一个README.md文件
- 在项目根目录下执行`npm run lesson moduleName lessName title` 快速在指定module下创建指定的lesson目录，同时更新Module的README文件   
    目录中包含一个必选的README.md文件，其余文件如 HTML、css、js文件等可以在title参数后面传入对应的文件扩展名，脚本自动创建对应的index.ext文件，默认在HTML文件中添加了index.css的外链

## Contact / Suggestions 
- You can send an Email to xxx to get connection
