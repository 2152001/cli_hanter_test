#! /usr/bin/env node
const yargs = require("yargs")
const figlet =require("figlet")
const Yargs = require("yargs/yargs")
const chalk = require ("chalk")

const text="HANTER"
const asciiArt = figlet.textSync(text,{
    font:'ANSI Shadow'
})
console.log(asciiArt)



// commandDir get commands from dir(commands) and .argv: parse commands so we don't need command.parse
const commands = yargs.commandDir('commands').demandCommand().help().argv




