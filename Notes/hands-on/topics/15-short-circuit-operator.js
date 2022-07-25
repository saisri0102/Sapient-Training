/**
 * 1. Short circuiting operators ( 1. && 2. || )
 * 
 * In JavaScript short-circuiting, an expression is evaluated from left to right until it is confirmed that the result of the remaining conditions is not going to affect the already evaluated result. 
 * If the result is clear even before the complete evaluation of the expression, it short circuits and the result will be returned. Short circuit evaluation avoids unnecessary work and leads to efficient processing.
 */

// AND short circuit
console.log(false && true)
console.log(true && 'X')
 // OR short circuit
console.log(true || false)
console.log(false || true)

  
// Since first operand is false and operator
// is AND, Evaluation stops and false is
// returned.
console.log(false && true && true && false)

// Whole expression will be evaluated.
console.log(true && true && true)

// First operand is true and operator is ||, 
// evaluation stops and true is returned.
console.log(true || false || false)
  
// Evaluation stops at the second operand(true).
console.log(false || true || true || false)

/**
 * AND(&&) short circuit: In case of AND, the expression is evaluated until we get one false result because the result will always be false, independent of the further conditions. If there is an expression with &&(logical AND), and the first operand itself is false, then a short circuit occurs, the further expression is not evaluated and false is returned.
 */

/**
 * OR(||) short circuit: In case of OR, the expression is evaluated until we get one true result because the result will always be true, independent of the further conditions. If there is an expression with ||(logical OR), and the first operand itself is true, then a short circuit occurs, evaluation stops, and true is returned.
 */