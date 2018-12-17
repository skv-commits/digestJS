/*
A closure is basically when an inner function has access to variables outside of its scope. 
Closures can be used for things like implementing privacy and creating function factories.
A closure does not merely pass the value of a variable or even a reference to the variable.
A closure captures the variable itself! 
*/

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log("The index of this number is: " + i);
  }, 3000);
}
//prints 4 4 4 4 after 3 seconds , so how to fix this

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function
  // has access to the correct index
  setTimeout(
    (function(i_local) {
      console.log("The index of this number is: " + i_local);
    })(i),
    1000
  );
}

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function
  // has access to the correct index
  setTimeout(
    (function(i_local) {
      return function() {
        console.log("The index of this number is: " + i_local);
      };
    })(i),
    3000
  );
}

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(function() {
    console.log("The index of this number is: " + i);
  }, 3000);
}
