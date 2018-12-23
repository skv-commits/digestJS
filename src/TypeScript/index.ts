export {}; // should use export or else it gonna treat as script , it should be a module
let message = "Hello World";
console.log(message);

//types start with lowercase

//static type checking

// accurate intellisense

let isBeginner: boolean = true;

let total: number = 10;
let name: string = "CyberBot143";

//use template literals

let sentence: string = `Hello , its me ${name} and iam a ${
  isBeginner ? "Beginner" : "expert"
} and total is ${total}`;

let n: null = null;
let u: undefined = undefined;

let isBooleanNull: boolean = null;
let isStringUndefined: string = undefined;

let anyRandomValue: any = 10;

anyRandomValue = "CyberBot143";

anyRandomValue();
anyRandomValue.name;
anyRandomValue.toString();

let unknowNRandom: unknown = "Hello TypeScript World";

// unknowNRandom.toString();

//unknowNRandom.name;

// use type assertions on unknown type
(unknowNRandom as string).toLowerCase();

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && name in obj;
}

if (hasName(unknowNRandom)) {
  unknowNRandom.name;
}

let list1: number[] = [1, 2, 3];
let list: Array<number> = [4, 5, 6];

let person1: [string, number] = ["CyberBot143", 24];

enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;

console.log(c); //1

enum Color2 {
  Red = 5,
  Green,
  Blue
}

let c2: Color2 = Color2.Green;

console.log(c2); //6

let multiType: number | boolean;

multiType = 20;
multiType = false;

// now lets discuss functions

function add(num1: number, num2?: number, defaultNum: number = 20) {
  if (num2) return num1 + num2 + defaultNum;
  else return num1 + defaultNum;
}
add(5); //25
add(5, 10); // 35
add(5, 10, 15); //30

//now lets discuss interfaces

interface Person {
  firstName: string;
  lastName?: string; //optional
}

function fullName(person: Person) {
  console.log(`${person.firstName} - ${person.lastName}`);
}

let p = {
  firstName: "CyberBOT143"
};

fullName(p);

// now lets discuss Class

class Employee {
  public name: string;
  public age: number;
  static data: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  get Name(): string {
    return this.name;
  }

  set Name(name: string) {
    this.name = name;
  }

  sayName() {
    console.log(`Hey ${this.name}`);
  }
  nameCount(): number {
    return this.name.length;
  }
  upperCaseName(): string {
    return this.name.toUpperCase();
  }
  // observe these three functions , they do function overloading as well
  addEmployee(name: number);
  addEmployee(company: string);
  addEmployee(value: any) {
    if (value && typeof value == "number") {
      alert("First overload - " + value);
    }
    if (value && typeof value == "string") {
      alert("Second overload - " + value);
    }
  }
  static test() {
    alert(Employee.data);
  }
}

let emp1 = new Employee("CyberBot143", 23);
console.log(Employee.test());
console.log(emp1.sayName, emp1.nameCount, emp1.upperCaseName, emp1.age); // we cannot have access to private access modifiers

// now lets discuss somethingh on modules

module Company {
  class Employee {}

  class EmployeeHelper {
    targetEmployee: Employee;
  }

  export class Customer {}
}

let customer1 = new Company.Customer();

// now lets discuss on writing arrow functions

const addNumbers = (...numbers: number[]) =>
  numbers.reduce((sum, number) => sum + number);

console.log(addNumbers(1, 2, 3, 4, 5));

//now lets discuss decorators

//Aspect oriented programming
//Decorators can be attached to: Methods, Classes,Properties,Parameters,Accessor

function log(target, key, descriptor) {
  console.log(`${key} was called!`);
}

class P {
  @log
  foo() {
    console.log("Do something");
  }
}
const p1 = new P();
p1.foo();

// printed to console :
// foo was called!
// Do something
