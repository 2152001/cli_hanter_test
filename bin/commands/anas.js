const run = require("../../run")

const anas = {
    command:"anas",
    describe:"run hanter package to scan code for vulnerabilites",
    handler:()=>{
        run()
    }
}

module.exports = anas