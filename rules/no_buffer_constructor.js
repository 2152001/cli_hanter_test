const ast = require("abstract-syntax-tree")
const report = require('../report')


const no_buffer_constructor = (node, tree, type, fix) => {
    if(node.type === "NewExpression" || node.type ==="CallExpression")
    {
        if(node.callee.name === "Buffer")
        {
            report(node.loc, "no-buffer-constructor", "Buffer() is deprecated. Use Buffer.from(), Buffer.alloc(), or Buffer.allocUnsafe() instead.", type)
        }
    }
    return node
}

module.exports = no_buffer_constructor