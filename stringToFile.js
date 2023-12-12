 const { writeFile } = require('fs')
module.exports = (file, newSource) => {
    writeFile(`../${file}`, newSource, 'utf-8', () => {

    })
}