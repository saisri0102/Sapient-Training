

  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? Ans: 3 3 3
    }, 1000);
  } 
  /**
   * for() iterating 3 times. During each iteration a new function log() is created, which captures the variable i. setTimout() schedules log() for execution after 1000ms.
    When for() cycle completes, i variable has value 3.

    The second phase happens after 1000ms:

    setTimeout() executes the scheduled log() functions. log() reads the current value of variable i, which is 3, and logs to console 3.
    That's why 3, 3, 3 is logged to the console
   */

  // In the below you use an immediately invoked function expression (a.k.a IIFE) because an IIFE creates a new scope by declaring a function and immediately execute it.
  for (var index = 1; index <= 3; index++) {
      (function (index) {
          setTimeout(function () {
              console.log(index); // 1 2 3 4
          }, index * 1000);
      })(index);
  }


  // If you use the let keyword in the for-loop, it will create a new lexical scope in each iteration. In other words, you will have a new i variable in each iteration.
    for (let i = 0; i < 3; i++) {
      setTimeout(function log() {
          console.log(i); // What is logged? Ans: //0 1 2
      }, 1000);
    } 