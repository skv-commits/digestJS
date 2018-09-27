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
var techFactory = function(name,age){
   
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
