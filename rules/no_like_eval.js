const report = require('../report')


const no_like_eval = (node, tree, type, fix) => {
    
    if(node.type === "CallExpression") {
        if(node.callee.type === "MemberExpression") {
            if(node.callee.property.name ==='setTimeout' || node.callee.property.name ==='setInterval'  || node.callee.property.name ==='execScript'){
        
                if(node.arguments[0].type !== 'ArrowFunctionExpression' &&
                    node.arguments[0].type !== 'FunctionExpression'){
                        report(node.loc, 'no-like-eval', 'Implied eval. Consider passing a function instead of a string.', type)
                }
            }
        }
    
        // checks for direct call to eval()
        if(node.callee.type === "Identifier") {
            if(node.callee.name ==='setTimeout' || node.callee.name ==='setInterval'  || node.callee.name ==='execScript'){
        
                if(node.arguments[0].type !== 'ArrowFunctionExpression' &&
                    node.arguments[0].type !== 'FunctionExpression') {
                        
                    report(node.loc, 'no-like-eval', 'Implied eval. Consider passing a function instead of a string.', type)
                }
            }
    
        }
    }
   
}


module.exports = no_like_eval