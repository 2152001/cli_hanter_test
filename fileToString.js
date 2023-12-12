const fs = require('fs')

const fileToString = (file) => {
    return fs.readFileSync(`./${file}`,
    { encoding: 'utf8', flag: 'r' });
}

module.exports = fileToString