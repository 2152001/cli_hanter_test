const error = require('chalk').red
const warning = require('chalk').yellow
const errorId = require('chalk').gray


module.exports = (loc, type, message, level) => {
    console.log(`\t${loc.start.line}:${loc.start.column+1}\t${level=='error'?error("Error\t"):""}${level=='warning'?warning("Warning\t"):""}\t${message}\t${errorId(type)}`)
}
