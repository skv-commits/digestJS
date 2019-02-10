//Optiona;l Chaining

// Before

function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch (unusedVariable) {
    return false;
  }
}

//after

function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

// This produces invalid ECMAScript String (before ES2019):
eval('"\u2028"');

// This is invalid as well:
eval('"\u2029"');

// Before ES2019, it was depended on the engine:
console.log(
  function() {
    console.log("My Function!");
  }.toString()
);

// User-defined function object
// This prints "function () { console.log('My Function!'); }"
console.log(
  function() {
    console.log("My Function!");
  }.toString()
);

// Build-in function object
// This prints "function parseInt() { [native code] }"
console.log(Number.parseInt.toString());

// Bound function object
// This prints "function () { [native code] }"
console.log(function() {}.bind(0).toString());

// Built-in callable function object
// This prints "function Symbol() { [native code] }"
console.log(Symbol.toString());

// Dynamically generated function object #1
// This prints "function anonymous() {}" (using V8 engine)
console.log(Function().toString());

// Dynamically generated function object #2
// This prints the followng (using V8 engine):
// function () { return __generator(this, function (_a) {
//     return [2 /*return*/];
// }); }
console.log(function*() {}.toString());

// This throws a TypeError: "Function.prototype.toString requires that 'this' be a Function"
Function.prototype.toString.call({});

[1, 2, 3].flatMap(x => [x, x * 2]);
// => [1, 2, 2, 4, 3, 6]

[1, [2, [3]]].flat(Infinity);
// => [1, 2, 3]

"    Hey JS!".trimStart(); // "Hey JS!"
"Hey JS!    ".trimEnd(); // "Hey JS!"

const iterableOfEntries = new Map([["cat", "dog"], ["life", 42]]);
const obj = Object.fromEntries(iterableOfEntries);
console.log(obj); // { cat: "dog", life: 42 }

const timsortArray = [
  //using tim sort instead of quick sort
  { name: "Jan", age: 20 },
  { name: "Jhon", age: 20 },
  { name: "David", age: 18 },
  { name: "Ram", age: 18 },
  { name: "Sita", age: 18 },
  { name: "Ravan", age: 18 },
  { name: "Asura", age: 12 },
  { name: "Milly", age: 12 }
].sort((m, n) => m.age - n.age);

// People with the same age retain their order.
