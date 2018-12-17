//swap two variables

let a = 10,
  b = 20;

[a, b] = [b, a];

//Generate a random String

Math.random()
  .toString(36)
  .substr(2);

//clone an Array

let myArray = [1, 2, 3, 4, 5];

const newA = myArray.slice(0);

// reverse a string
"String to Be Reversed"
  .split("")
  .reverse()
  .join("");

array.filter(Boolean); // remove falsey values from arrays, like null and undefined

const numArray = arr.map(Number); // convert to num array

array.reduce((sum, num) => sum + num, 0); // sum of array of numbers

const array2Object = (a, id) =>
  a
    .map(e => ({
      [e[id]]: (() => {
        delete e[id];
        return e;
      })()
    }))
    .reduce((p, c) => {
      const k = Object.keys(c)[0];
      p[k] = c[k];
      return p;
    }, {});
const input = [{ id: 1, x: 1 }, { id: 2, x: 2 }];
const output = ar2ob(input, "id");
/* →          { 1: { x: 1 }, 2: { x: 2 } } */

Math.max(...myArray); // largest element in array
