const { readdirSync } = require('fs')
const extractFiles = () => {
    console.log(readdirSync('../../../'))
    return readdirSync('../../../')
}

module.exports = extractFiles