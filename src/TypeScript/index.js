"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello World";
console.log(message);
//types start with lowercase
//static type checking
// accurate intellisense
var isBeginner = true;
var total = 10;
var name = "CyberBot143";
//use template literals
var sentence = "Hello , its me " + name + " and iam a " + (isBeginner ? "Beginner" : "expert") + " and total is " + total;
var n = null;
var u = undefined;
var isBooleanNull = null;
var isStringUndefined = undefined;
var anyRandomValue = 10;
anyRandomValue = "CyberBot143";
anyRandomValue();
anyRandomValue.name;
anyRandomValue.toString();
var unknowNRandom = "Hello TypeScript World";
// unknowNRandom.toString();
//unknowNRandom.name;
// use type assertions on unknown type
unknowNRandom.toLowerCase();
function hasName(obj) {
    return !!obj && typeof obj === "object" && name in obj;
}
if (hasName(unknowNRandom)) {
    unknowNRandom.name;
}
var list1 = [1, 2, 3];
var list = [4, 5, 6];
var person1 = ["CyberBot143", 24];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); //1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 6] = "Green";
    Color2[Color2["Blue"] = 7] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
console.log(c2); //6
var multiType;
multiType = 20;
multiType = false;
// now lets discuss functions
function add(num1, num2, defaultNum) {
    if (defaultNum === void 0) { defaultNum = 20; }
    if (num2)
        return num1 + num2 + defaultNum;
    else
        return num1 + defaultNum;
}
add(5); //25
add(5, 10); // 35
add(5, 10, 15); //30
function fullName(person) {
    console.log(person.firstName + " - " + person.lastName);
}
var p = {
    firstName: "CyberBOT143"
};
fullName(p);
// now lets discuss Class
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Employee.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.sayName = function () {
        console.log("Hey " + this.name);
    };
    Employee.prototype.nameCount = function () {
        return this.name.length;
    };
    Employee.prototype.upperCaseName = function () {
        return this.name.toUpperCase();
    };
    Employee.prototype.addEmployee = function (value) {
        if (value && typeof value == "number") {
            alert("First overload - " + value);
        }
        if (value && typeof value == "string") {
            alert("Second overload - " + value);
        }
    };
    Employee.test = function () {
        alert(Employee.data);
    };
    return Employee;
}());
var emp1 = new Employee("CyberBot143", 23);
console.log(Employee.test());
console.log(emp1.sayName, emp1.nameCount, emp1.upperCaseName, emp1.age); // we cannot have access to private access modifiers
// now lets discuss somethingh on modules
var Company;
(function (Company) {
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        return Employee;
    }());
    var EmployeeHelper = /** @class */ (function () {
        function EmployeeHelper() {
        }
        return EmployeeHelper;
    }());
    var Customer = /** @class */ (function () {
        function Customer() {
        }
        return Customer;
    }());
    Company.Customer = Customer;
})(Company || (Company = {}));
var customer1 = new Company.Customer();
