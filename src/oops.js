//simple class implementation in  < Es6 looks this way

function Human(firstName, lastName, age) {
  // Note: Don't worry about 'this' yet. You'll understand it later. Follow along for now.
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.sayName = function() {
    console.log(`I am ${firstName} ${lastName}`);
  };
}
const zell = new Human("Zell", "Liew", 29);

const vincy = new Human("Vincy", "Zhang", 28);
const nicolas = new Human("Nicolas", "Tze", 30);

vincy.sayName(); // I am Vincy Zhang
nicolas.sayName(); // I am Nicolas Tze

// this is how we do in ES6+
class Human {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  sayName() {
    console.log(`Hello, I'm  ${this.firstName} ${this.lastName}`);
  }
}

// To implement inheritance
class Athlete extends Human {
  // You have to call super() before you invoke "this"
  constructor(firstName, lastName, age, sport) {
    super(firstName, lastName, age);
    this.sport = sport;
  }
}

// let see a more detailed explanation one

class Meetup {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  static getAddress() {
    console.log("Returned Address");
    /* this.location will return undefined */
    console.log("City: " + this.location);
  }
  get name() {
    // Validation can happen on data
    return this._name;
  }
  set name(val) {
    // Validation can happen on data
    this._name = val;
  }

  start() {
    console.log(this.name + "Meetup " + "is started at " + this.location);
  }
}
let jsMeetup = new Meetup("AngularJS", "NY");
let ngMeetup = new Meetup("React", "NJ");
jsMeetup.start(); //AngularJSMeetup is started at NY
ngMeetup.start(); //ReactMeetup is started at NJ

Meetup.admin = "Adam";
Meetup.getMembers = function() {
  console.log(Meetup.admin + " Returned Members");
};

let jsMeetup = new Meetup("JS", "CA");
console.log(Meetup.admin); // Adam
console.log(jsMeetup.admin); // undefined
Meetup.getMembers(); // Adam Returned Members
jsMeetup.getMembers(); // TypeError: jsMeetup.getMembers is not a function
Meetup.getAddress(); // Returned Address
jsMeetup.getAddress(); // TypeError: jsMeetup.getAddress is not a function

// inheritance explained Below

class Meetup {
  /*.....
  .....*/
}
class techMeet extends Meetup {
  /*.....
  .....*/
}
class sportMeet extends Meetup {
  /*.....
  .....*/
}
let js = new techMeet();
console.log(js instanceof techMeet); // true
console.log(js instanceof Meetup); // true
console.log(js instanceof Object); // true

// Example of Inheritance with constructor

class Meetup {
  constructor() {
    console.log("inside Meetup constructor");
  }
}
class techMeet extends Meetup {
  constructor() {
    super();
    console.log("inside techMeet constructor");
  }
}
let js = new techMeet();
// inside Meetup constructor
// inside techMeet constructor

class Meetup {
  organise() {
    console.log("Organising Meetup");
  }
  static getMeetupFounderDetails() {
    console.log("Meetup Founder Details");
  }
}
class techMeet extends Meetup {
  organise() {
    //super.organise();
    console.log("Organising techMeet");
    super.organise();
  }
  static getMeetupFounderDetails() {
    console.log("techMeet Founder Details");
    super.getMeetupFounderDetails();
  }
}
let js = new techMeet();
js.organise();
/* Output: 
Organising techMeet
Organising Meetup */
techMeet.getMeetupFounderDetails();
/* Output: 
techMeet Founder Details
Meetup Founder Details */
