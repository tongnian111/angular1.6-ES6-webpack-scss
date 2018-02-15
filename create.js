/**
 * 创建模板
 */

let fs = require('fs');
let basepath = 'src/views/';
let moment = require('moment');
let cptName = process.argv.splice(2)[0];
let path = cptName.split('/');
let name = path[path.length - 1];
let writes = [`${name}.component.js`, `${name}.html`,`${name}.module.js`,`${name}.route.js`,`${name}.service.js`,`${name}.style.scss`];
let reads = [`${basepath}copyTemp/copyTemp.component.js`, `${basepath}copyTemp/copyTemp.html`,`${basepath}copyTemp/copyTemp.module.js`,`${basepath}copyTemp/copyTemp.route.js`,`${basepath}copyTemp/copyTemp.service.js`,`${basepath}copyTemp/copyTemp.style.scss`];
let file = [];
let author = require('os').homedir().split('\\').pop();




//检测是否存在文件夹
let exists = function () {
    return new Promise((res, rej) => {
        (async function () {
            for (let a of path) {
                fs.existsSync(basepath + a) ? basepath = `${basepath}${a}/` : await mkdir(a);
            }
            res(basepath);
        })()
    })
}
//建立文件夹
let mkdir = function (a) {
    return new Promise((res, rej) => {
        fs.mkdir(basepath + a, (err) => {
            if (err) rej(err);
            basepath = `${basepath}${a}/`
            res(basepath);
        });
    })
}
//读取模板文件内容，并替换为目标组件
let readFile = function () {
    return new Promise((res) => {
        for (let a of reads) {
            let text = fs.readFileSync(a).toString();
            text = text.replace(/time/g, moment().format('YYYY/MM/DD'))
                .replace(/copyTemp/g, name)
                .replace(/author/g, author)
            file.push(text)
        }
        res(file);
    })
}
//生成文件，并填入之前读取的文件内容
let writeFile = function (file) {
    return new Promise((res, rej) => {
        (async function () {
        	let i = 0;
            for (let a of writes) {
                await fs.writeFile(`${basepath}${a}`,file[i], (err) => {
                        if (err) rej(err)
                   });
                i++;
            }
            //创建组件文件夹
            await mkdir('components');
            res('succ');
        })()
    })
}
async function creatCpt() {
    try {
        await exists();
        await readFile()
        await writeFile(await readFile());
        return console.log(`Successfully created ${name} component`)
    }
    catch (err) {
        console.error(err);
    }
}
creatCpt();
