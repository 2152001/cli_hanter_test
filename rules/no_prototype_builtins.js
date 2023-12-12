const ast = require('abstract-syntax-tree')
const report = require('../report')


const no_prototype_builtins = (node, tree, type, fix) => {
    if (node.type=='CallExpression')
    {
        if(node.callee.type === "MemberExpression") {
            if(node.callee.property.name === "hasOwnProperty"||node.callee.property.name ==='isPrototypeOf'||node.callee.property.name ==='propertyIsEnumerable') {
                if(fix) {
                    const newNode = {
                        type: 'CallExpression',
                        callee: {
                          type: 'MemberExpression',
                          object: {
                            type: 'MemberExpression',
                            object: {
                                type: 'MemberExpression',
                                object: { type: 'Identifier', name: 'Object' },
                                computed: false,
                                property: { type: 'Identifier', name: 'prototype' }
                            },
                            computed: false,
                            property: { type: "Identifier", name: node.callee.property.name }
                          },
                          computed: false,
                          property: { type: 'Identifier', name: 'call' }
                        },
                        arguments: [
                          node.callee.object,
                          node.arguments[0]
                        ]
                    }
                    return newNode
                }else {
                    report(node.loc, 'no-prototype-builtins', "Do not access Object.prototype method 'hasOwnProperty' from target object.", type)
                }
            }
        }
    }


    return node
}

module.exports = no_prototype_builtins