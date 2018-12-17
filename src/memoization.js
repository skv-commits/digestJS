/*
Memoization is an optimization technique used primarily to speed up
 computer programs by storing the results of expensive function calls
  and returning the cached result when the same inputs occur again 
*/
// a simple pure function to get a value adding 10
const add = n => n + 10;
console.log("Simple call", add(3));
// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = fn => {
  let cache = {};
  return (...args) => {
    let n = args[0]; // just taking one argument here
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};
// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3)); // calculated
console.log(memoizedAdd(3)); // cached
console.log(memoizedAdd(4)); // calculated
console.log(memoizedAdd(4)); // cacheds

const memoize = fn => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log("Fetching from cache", n);
      return cache[n];
    } else {
      console.log("Calculating result", n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const factorial = memoize(x => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
});

console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5
