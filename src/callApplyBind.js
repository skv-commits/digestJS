let userObj = { name: "CyberAtom", Age: 24, school: "NWMSU" };

let greeting = function(tech1, tech2, tech3) {
  return "welcome " + this.name + " " + tech1 + " " + tech2 + " " + tech3;
};

console.log(greeting.call(userObj, "Angular 7", "React", "GraphQL"));

// array of arguments to the actual function

const args = ["Angular 7", "React", "GraphQL"];

console.log("Output using .apply() below ");

console.log(greeting.apply(userObj, args));

let bound = greeting.bind(userObj);

console.log(bound); ///returns a function

console.log("Output using .bind() below ");

console.log(bound("Angular 7", "React", "GraphQL")); //call the bound function

let pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function() {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};

const pokemonName = function(snack, hobby) {
  console.log(this.getPokeName() + "I choose you!");
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

const logPokemon = pokemonName.bind(pokemon);
// creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon("sushi", "algorithms"); // Pika Chu  loves sushi and algorithms

pokemonName.call(pokemon, "sushi", "algorithms"); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon, ["sushi", "algorithms"]); // Pika Chu  loves sushi and algorithms
