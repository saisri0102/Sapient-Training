/**
 * Self-Invoking” function is a type of function that is invoked or called automatically after its definition. The execution of such an anonymous function is done by enclosing it in a parenthesis set followed by another set of parenthesis.
 * If we don't keep second parenthesis then it wil return the function dclaration
 * 
 * It is mainly for variable scoping. Variables declared in the self executing function are, by default, only available to code within the self executing function. This allows code to be written without concern of how variables are named in other blocks of JavaScript code.
 * Self Invoking functions are excuted only once

 */

(function(){
  var foo = 3;  // foo is not accessabile outside of this function
  console.log(foo);
})();

console.log(foo); // error  foo is not defined

