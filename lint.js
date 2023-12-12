const ast = require('abstract-syntax-tree')
const { rules } = require('../config')
const no_buffer_constructor = require('./rules/no_buffer_constructor')
const no_eval = require('./rules/no_eval')
const no_like_eval = require('./rules/no_like_eval')
const no_prototype_builtins = require('./rules/no_prototype_builtins')
const prefer_const = require('./rules/prefer_const')
const fileToString = require("./fileToString")
const { writeFile } = require('fs')
const chalk = require('chalk')
const stringToFile = require('./stringToFile')


const lint = (file, fix) => {
    const source = fileToString(file)
    const tree = ast.parse(source, {
        loc: true
    })
    console.log(chalk.green(file))
    ast.replace(tree, (node) => {
        // no_buffer_constructor
        if(rules.no_buffer_constructor) {
            no_buffer_constructor(node, tree, rules.no_buffer_constructor, fix)
        }
        // no_eval
        if(rules.no_eval) {
            no_eval(node, tree, rules.no_eval, fix)
        }
        // no_like_eval
        if(rules.no_like_eval) {
            no_like_eval(node, tree, rules.no_like_eval, fix)
        }
        // no_prototype_builtins
        if(rules.no_prototype_builtins) {
            node = no_prototype_builtins(node, tree, rules.no_prototype_builtins, fix)
        }
        // prefer_const
        if(rules.prefer_const) {
            node = prefer_const(node, tree, rules.prefer_const, fix)
        }
        return node
    })
    if(fix) {
        const newSource = ast.generate(tree)
        stringToFile(file, newSource)
    }
}


module.exports = lint