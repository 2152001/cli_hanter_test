const run = {
    command:"run",
    describe:"run hanter package to scan code for vulnerabilites",
    builder:{
        dic:{
            alias:"directory",
            describe:"Directory Path containing the code to be scanned",
            demandOption:false,
            type:"string"
        },
        fix:{
            describe:"Fix code",
            demandOption:false,
            type:'boolean',
            default:false
        }
    },
    handler:(argv)=>{
        console.log(argv.dic)
        //call hanter() here 
        if(argv.fix)
        {
            //call function fix 
        }
    }
}

module.exports = run