const path = require('path')
const fs = require('fs')

// 初始化Vue入口文件
class DocVuePlugin {
    constructor() {
        console.log('1')
    }
    // 
    apply(compiler) {
      
        compiler.hooks.emit.tap('DocVuePlugin',(compilation,)=>{
            // console.log(compilation)
        })

        // 拷贝src文件夹
        // const docsFile = path.resolve('./docs')
        
        // this.copyDir(__dirname, docsFile, '/src/')
    }
    /**
     * @name 拷贝文件夹
     * @param srcDir 复制的文件夹
     * @param tarDir 粘贴的文件夹
     * @param dirname 文件夹名称
     */
    copyDir(srcDir, tarDir, dir) {
        // 创建文件夹
        fs.mkdir(tarDir + dir, { recursive: true }, (err) => {
            if (err) throw err
        })

        console.log(srcDir + dir,'!!!')
        // 读取文件 创建文件
        fs.readdir(srcDir + dir, (err, files) => {
            if (err) throw err
            // 遍历文件数组
            files.forEach(val => {
                console.log(val, 'val')
                // 检查文件属性
                fs.stat(srcDir + dir + val, (err, stats) => {
                    if (err) throw err
                    // 如果是文件夹 递归
                    if (stats.isDirectory()) {
                        this.copyDir(srcDir , tarDir + dir + val, val)

                    }
                    // 如果是文件 进行拷贝
                    else {
                        fs.copyFile(srcDir + dir + val, tarDir + dir + val, (err) => {
                            if (err) throw err
                        })
                    }


                })
            });

        })
    }

}

module.exports = DocVuePlugin