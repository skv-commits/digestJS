# digestJS
This will be collection of my JS tutorials

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

