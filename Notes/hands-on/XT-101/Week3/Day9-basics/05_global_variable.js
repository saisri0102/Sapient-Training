
/**
 * When you declare a variable outside the function, it is added in the window object internally. You can access it through window object also
 * Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).
 */
var window = {}
window.value = 10;

function m(){  
    window.value=100;//declaring global variable by window object  
}  
function n(){  
    console.log(window.value); //accessing global variable from other function  ( Here the value is 100)
}  
m();
n();

var value = 10;

function m1(x){  
    x=100;//declaring global variable by window object  
}  
function n1(){  
    console.log(value); //accessing global variable from other function  ( Here the value is 10)
}  
m1(value);
n1();

function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer
  
    console.log( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  console.log( from ); // Ann

  // Default Messages
  function showMessage2(from, text = "no text given") {
    console.log( from + ": " + text );
  }
  
  showMessage2("Ann"); // Ann: no text given
  showMessage2("Ann", null) // Ann: null
  showMessage2("Ann", undefined); // Ann: no text given