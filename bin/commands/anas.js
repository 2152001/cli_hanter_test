const { demandOption, string } = require("yargs")
const run = require("../../run")
const no_eval = require("../../rules/no_eval")

const anas = {
    command:"anas",
    describe:"run hanter package to scan code for vulnerabilites",
    builder:{
        rule:{
            describe:'choose your rule',
            demandOption:false,
            type:'string',

        }                   
       
    },
    handler:(argv)=>{
        if(argv.rule == "no-eval"){
            run({
                no_eval: "warning"
            })
        }else if(argv.rule == 'refer-const'){
            run({
                refer_const: "error"
            }) 
        }
        else{
            run({
                no_eval:"warning",
                refer_const:"error"
            })
        }
    }
}

module.exports = anas