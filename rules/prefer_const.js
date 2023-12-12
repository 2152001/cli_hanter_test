const ast = require('abstract-syntax-tree')
const report = require('../report')
// checks for variables that has been assigned as let
// and wasn't reassigned afterward

const prefer_const = (node, tree, type, fix) => {
    if(node.type === "VariableDeclaration") {
        if(node.kind === "let") {
            let reassigned = false
            const name = node.declarations[0]?.id?.name

            ast.replace(tree, (nodee) => {
                if(nodee.type === "AssignmentExpression") {
                    if(nodee.left.type === "Identifier" && nodee.left.name === name) {
                        reassigned = true
                    }
                }
            })

            if(!reassigned) {
                if(fix) {
                    node.kind = "const"
                }else {
                    report(node.loc, 'prefer-const', `'${name}' is never reassigned. Use 'const' instead.`, type)
                }
            }
        }
    }
    return node
}


module.exports = prefer_const