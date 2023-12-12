const report = require('../report')


const no_eval = (node, tree, type, fix) => {

    // checks for all CallExpression nodes
    if(node.type === "CallExpression") {
        // checks for in direct call to eval()
        if(node.callee.type === "MemberExpression") {
            if(node.callee.property.type === 'Identifier' && node.callee.property.name === "eval") {
                // do something
                report(node.loc, 'no-eval', 'eval can be harmful.', type)
            }
        }

        // checks for direct call to eval()
        if(node.callee.type === "Identifier" && node.callee.name === "eval") {
            // do something
            report(node.loc, 'no-eval', 'eval can be harmful.', type)
        }
    }
}

module.exports = no_eval