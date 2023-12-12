const ast = require('abstract-syntax-tree')
const extractFiles = require('./extractor')
const lint = require('./lint')


const run = () => {
    const files = extractFiles();

    files.forEach(file => {
        if(file.endsWith('.js')) {
            if(process.argv.includes('--fix')) {
                lint(file, true)
            }else {
                lint(file, false)
            }
        }
    });
}

module.exports = run