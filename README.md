# digestJS

This will be collection of my JS tutorials

### destructuring Objects & Arrays -  ES6 
```javascript

// === Arrays

var [a, b] = [1, 2];
console.log(a, b);
//=> 1 2


// Use from functions, only select from pattern
var foo = () => [1, 2, 3];

var [a, b] = foo();
console.log(a, b);
// => 1 2


// Omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1 3


// Combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b);
// => 1 [ 2, 3 ]


// Fail-safe.
var [, , , a, b] = [1, 2, 3];
console.log(a, b);
// => undefined undefined


// Swap variables easily without temp
var a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b);
// => 2 1


// Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6


// === Objects

var {user: x} = {user: 5};
console.log(x);
// => 5


// Fail-safe
var {user: x} = {user2: 5};
console.log(x);
// => undefined


// More values
var {prop: x, prop2: y} = {prop: 5, prop2: 10};
console.log(x, y);
// => 5 10

// Short-hand syntax
var { prop, prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// Equal to:
var { prop: prop, prop2: prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// === Potential grammar hiccups

// Oops: This doesn't work:
var a, b;
{ a, b } = {a: 1, b: 2};

// But this does work
var a, b;
({ a, b } = {a: 1, b: 2});
console.log(a, b);
// => 1 2

// This due to the grammar in JS. 
// Starting with { implies a block scope, not an object literal. 
// () converts to an expression.

// From Harmony Wiki:
// Note that object literals cannot appear in
// statement positions, so a plain object
// destructuring assignment statement
//  { x } = y must be parenthesized either
// as ({ x } = y) or ({ x }) = y.


// === Combined destructuring of objects and arrays

// Combine objects and arrays
var {prop: x, prop2: [, y]} = {prop: 5, prop2: [10, 100]};
console.log(x, y);
// => 5 100


// === Nested object destructuring

// Deep objects
var {
  prop: x,
  prop2: {
    prop2: {
      nested: [ , , b]
    }
  }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
console.log(x, b);
// => Hello c


// === Combining all to make fun happen

// All well and good, can we do more? Yes!
// Using as method parameters
var foo = function ({prop: x}) {
  console.log(x);
};

foo({invalid: 1});
foo({prop: 1});
// => undefined
// => 1

// === Nested advanced examples

// Can also use with the advanced example
var foo = function ({
  prop: x,
  prop2: {
    prop2: {
      nested: b
    }
  }
}) {
  console.log(x, ...b);
};
foo({ prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}});
// => Hello a b c


// === In combination with other ES2015 features.

// Computed property names
const name = 'fieldName';
const computedObject = { [name]: name }; // (where object is { 'fieldName': 'fieldName' })
const { [name]: nameValue } = computedObject;
console.log(nameValue)
// => fieldName



// === Rest and defaults
var ajax = function ({ url = "localhost", port: p = 80}, ...data) {
  console.log("Url:", url, "Port:", p, "Rest:", data);
};

ajax({ url: "someHost" }, "additional", "data", "hello");
// => Url: someHost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ }, "additional", "data", "hello");
// => Url: localhost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ });
// => Url: localhost Port: 80 Rest: []

// Doesn't work due to trying to destructure undefined
ajax();
//  => Uncaught TypeError: Cannot match against 'undefined' or 'null'

// To fix this we need to have default value for parameter in function
// Note: See the `= {}` at the end, saying default empty object if the first argument is undefined.
var ajax = ({ url: url = "localhost", port: p = 80} = {}) => {
  console.log("Url:", url, "Port:", p);
};

// Now this works.
ajax();
// => Url: localhost Port: 80

ajax({ });
// => Url: localhost Port: 80

ajax({ port: 8080 });
//  => Url: localhost Port: 8080

ajax({ url: "someHost", port: 8080 });
//  => Url: someHost Port: 8080


// === Similar to _.pluck
var users = [
  { user: "Name1" },
  { user: "Name2" },
  { user: "Name2" },
  { user: "Name3" }
];
var names = users.map( ({ user }) => user );
console.log(names);
// => [ 'Name1', 'Name2', 'Name2', 'Name3' ]


// === Usage in for..of loops
var users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 }
];

for (let { user, age = "DEFAULT AGE" } of users) {
  console.log(user, age);
}


const frontendObj = {
  name: "FrontEnd Web Development",
  year: 2019,
  frameworks: ['Angular.js', 'Angular 2+'],
  libraries: {
    lib1: 'React',
    lib2: 'jQuery'
  },
  tools: ['npm', 'yarn'],
  nest1: {
    nest2: {
      nest3: 'In Nested'
    }
  }
}

const {
  name, year: currentYear = 2018, nest1: {
    nest2: {
      nest3: nestedValue
    }}
} = frontendObj

// little trick with with key word , you can desctruture objects too
with(frontendObj) {

  console.log(name)
}

console.log(name, currentYear, nestedValue)
 
```


### Call Apply Bind

<img src="https://cdn-images-1.medium.com/max/1600/1*TkzF3ckhM9Xf_U9XFaCyhA.png" width="600" height="300">

```javascript

let userObj = {name: "CyberAtom" , Age: 24 , school: "NWMSU" };

let greeting = function(tech1,tech2,tech3) {
    return "welcome "+this.name+ ' ' + tech1 + ' ' + tech2 + ' '+ tech3;
};

console.log(greeting.call(userObj,"Angular 7","React","GraphQL"));


// array of arguments to the actual function

const args = ["Angular 7","React","GraphQL"];  

console.log("Output using .apply() below ")

console.log(greeting.apply(userObj,args));

let bound = greeting.bind(userObj); 


console.log(bound); ///returns a function

console.log("Output using .bind() below "); 

console.log(bound("Angular 7","React","GraphQL")); //call the bound function

let pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

const pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

const logPokemon = pokemonName.bind(pokemon); 
// creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms


pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms

```

### compose and pipe in JS

```javascript

   // compose will apply from right to left 
  const compose = (...funcs) => (...args)=> funcs.reduceRight( (a, b) => {
      a = a === null ? a = b(...args) : a = b(a);
      return a;
    }, null);
    
 // compose will apply from left to right 
 const pipe = (...funcs) => (...args)=> funcs.reduce( (a, b) => {
      a = a === null ? a = b(...args) : a = b(a);
      return a;
    }, null);

const sayHello = function(name){ return 'Hello @ ' + name;};
const makeLouder = function(statement) { return statement.toUpperCase() + '!';};
const insert_ = function(str,str2){ return str.concat("_") + str2;};


const composed = compose(sayHello, makeLouder,insert_);
const piped = pipe(insert_,makeLouder,sayHello); 


console.log(composed('Mr.atom',"cyberBoT")); //=> Hello @ MR.ATOM_CYBERBOT!

console.log(piped('Mr.atom',"cyberBoT")); //=> Hello @ MR.ATOM_CYBERBOT!'
```


### design Patterns in JS

```javascript
var techFactory = function(name,age){. //factory pattern 
   
   let tech = {}
  
   tech.name = name
   tech.age = age
   tech.printTech = function(){
    print(this.name,this.age)
   }
   return tech

}

let tech1 = techFactory("React",5)
let tech2 = techFactory("Angular",10)
tech1.printTech(); //React 5
tech2.printTech(); //Angular 10
```



### Event delegation 

```javascript

<ul id="todo-app">
  <li class="item">Walk the dog</li>
  <li class="item">Pay bills</li>
  <li class="item">Make dinner</li>
  <li class="item">Code for one hour</li>
</ul>

document.addEventListener('DOMContentLoaded', function() {
  
  let app = document.getElementById('todo-app');
  let items = app.getElementsByClassName('item');
  
  // attach event listener to each item
  for (let item of items) {
    item.addEventListener('click', function() {
      alert('you clicked on item: ' + item.innerHTML);
    });
  }
  });
  /* the problem is that you’re attaching an event listener to every single item individually. 
  This is fine for 4 elements, but what if someone adds 10,000 items 
  (they may have a lot of things to do) to their todo list? Then your function will
   create 10,000 separate event listeners and 
   attach each of them to the DOM. This isn’t very efficient.*/


/*If your application could end up with hundreds of event listeners, 
the more efficient solution would be to actually attach one event listener 
to the whole container, and then be able to access each item when it’s actually clicked.
This is called event delegation, */


//Here is the code for delegation 

document.addEventListener('DOMContentLoaded', function() {
  
  let app = document.getElementById('todo-app');
  
  // attach event listener to whole container
  app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
      let item = e.target;
      alert('you clicked on item: ' + item.innerHTML);
    }
  });
});
```

### using Closure with in a loop
```javascript 
/*
A closure is basically when an inner function has access to variables outside of its scope. 
Closures can be used for things like implementing privacy and creating function factories.
A closure does not merely pass the value of a variable or even a reference to the variable.
A closure captures the variable itself! 
*/

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
//prints 4 4 4 4 after 3 seconds , so how to fix this 

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
      console.log('The index of this number is: ' + i_local);
  }(i), 1000);
}

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
```



```javascript

/*A correct implementation of debouncing would therefore group several function calls into one
and execute it only once after some time has elapsed. */

/ debounce function that will wrap our event
function debounce(fn, delay) {
  // maintain a timer
  let timer = null;
  // closure function that has access to timer
  return function() {
    // get the scope and parameters of the function 
    // via 'this' and 'arguments'
    let context = this;
    let args = arguments;
    // if event is called, clear the timer and start over
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}

// function to be called when user scrolls
function foo() {
  console.log('You are scrolling!');
}

// wrap our function in a debounce to fire once 2 seconds have gone by
let elem = document.getElementById('container');
elem.addEventListener('scroll', debounce(foo, 2000));

/*

Throttling is another technique that’s is similar to debouncing, except that instead of
waiting for some time to pass by before calling a function, throttling just spreads 
the function calls across a longer time interval. So if an event occurs 10 times within
100 milliseconds, throttling could spread out each of the function calls to be executed 
once every 2 seconds instead of all firing within 100 milliseconds.
*/
```

