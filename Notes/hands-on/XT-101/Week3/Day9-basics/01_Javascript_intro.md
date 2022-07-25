# JAVASCRIPT
- [Reference](https://javascript.info/js)
- Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

- The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

- Different engines have different “codenames”. For example:

   * V8 – in Chrome, Opera and Edge.
   * SpiderMonkey – in Firefox.
   * …There are other codenames like “Chakra” for IE, “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.

## Strict mode 
   - 'use-strict'
   - Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.
   - Strict mode is an important part of modern JavaScript. ... Strict mode makes several changes to JavaScript semantics. 
   - It eliminates silent errors and instead throws them so that the code won't run with errors in the code. It will also point out mistakes that prevent JavaScript engines from doing optimizations.
   - Modern JavaScript supports “classes” and “modules” that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.
   - To fully enable all features of modern JavaScript, we should start scripts with "use strict".

## Mathemtical Operations are safe
   - Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

   - The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.
   - In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It's called "bigint"
## Transpilers
   - A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines
   -  Babel is one of the most prominent transpilers out there.
## Polyfills
   - New language features may include not only syntax constructs and operators, but also built-in functions.

   - For example, Math.trunc(n) is a function that “cuts off” the decimal part of a number, e.g Math.trunc(1.23) returns 1.

   - In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail.

   - As we’re talking about new functions, not syntax changes, there’s no need to transpile anything here. We just need to declare the missing function.
   - core js that supports a lot, allows to include only needed features.
   - polyfill.io service that provides a script with polyfills, depending on the features and user’s browser.