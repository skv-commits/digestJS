import R from "ramda";

//A gentle introduction to the functional approach of building software in Javascript with Ramda
// functional programming

// ramda functional in nature
// Functions as values ,
// declarative , pure fn,no shared state ,
// no mutuations , no side effects

// why fp ? more predictable , safer, more modular , testable, less verbose

//why fp in js ? interest from wider ecosystem in js

// functional s/w construction => 1) abstraction 2) composition

// how do we compose , OOP => classes , FP => functions

// class based composition has limits (very heavy defining primitive)
//at some point of time when going complex we cant really get a abstraction at higher levels

// fn based composition is more expressive , increased modularity
// FP is not superior to OOP

const log = x => console.log(x);

let x = [1, 2, 4, 5];
x = R.insert(2, 3, x); // inserts 3 at index 2 in array

//or

R.insert(2)(3)(x);

log(x); // [1,2,3,4,5]

log(R.append("elem3", x));

log(R.drop(1, x)); // drop 1 from array

//declarative (What is done ) vs imperative (How its done) , example below

const gradeScore = score => {
  if (score >= 90) return "A";
  if (score >= 80 && score < 90) return "B";
  if (score >= 70 && score < 80) return "C";
  return "F";
};

const scores = [10, 20, 50, 85, 80, 90];

const imperativeGrade = scores => {
  let gradedScores = [];

  for (let score of scores) {
    gradedScores.push(gradeScore(score));
  }
  return gradedScores;
};
log(imperativeGrade(scores));

// FP

const declarativeGrade = scores => scores.map(gradeScore);

log(declarativeGrade(scores));

// Pure functions & Referential Transparency

//not mutate data , let say adding key,value to object , we can do with ramda (immutable in nature)

const addUserNameR = data => R.assoc("userName", "CyberBot143", data);

const myData = { a: 1, b: 2 };

const updatedMyData = addUserNameR(myData);

log(updatedMyData); // { a:1,b:2,userName: 'Cyberbot143'}

// dont have side effects

const getSum = numList => R.sum(numList);

const numbers = [1, 2, 3];

const _sum = getSum(numbers);

// doot depend on global state

const testData = {
  users: {
    1: {
      name: "Atom",
      age: 23
    },
    2: {
      name: "Racheal",
      age: 23
    }
  },
  post: {
    1: {
      userId: 1,
      title: "Awesome Post"
    },
    2: {
      userId: 1,
      title: "Awesome Post"
    }
  }
};

//const getPostById = id => R.path(["post", id], testData); // depending on global state

const getPostById = (x, id) => R.path(["post", id], x); // so here is how we do pass values to function

log(getPostById(testData, 1));

//immutable operations

const state = {
  activeUserId: 2,
  activePage: 10
};

const toNextPage = state =>
  R.evolve(
    {
      activePage: x => R.inc(x)
    },
    state
  );

log(`original, ${state}`);

log(`newCopy ${toNextPage(state)}`);

//map,reduce,filter

const filterScoreslt80 = scores => R.filter(s => R.lt(80, s), scores);
log(filterScoreslt80(scores));

const gradeScoresAbove80 = scores =>
  R.reduce(
    (acc, score) => {
      if (R.lt(score, 80)) return acc;
      return R.append(gradeScore(score), acc);
    },
    [],
    scores
  );

log(gradeScoresAbove80(scores));

// Higher Order Functions

// curried , partial Apply

const computeLength = (x, y, z) => x + y + z;
const computeLengthCurried = x => y => z => computeLength(x, y, z);
const computeLengthXY = computeLengthCurried(1)(2);
log(computeLengthXY); // returns a partial function

const computeLengthRCurry = R.curry(computeLength);
computeLengthRCurry(1, 2, 3);

log(computeLengthRCurry(1, R.__, 3)(2)); //placeholder for second arg and apply at last

//leverage point free style

const getA = data => R.prop("a", data); // normal style

//const getA = data => R.prop("a")(data);
//remove redundant data above

const getA_PF = R.prop("a"); // point free style // because ramda functions are curried

const sampleObj = { a: "A", b: "B" };
log(getA(sampleObj));

log(getA_PF(sampleObj));

//pipe and compose

const myStringData = "ab,cc,ab,ad,ae,cs,bc,ca,ac,cc";

const sanitize = data =>
  R.join(",", R.uniq(R.split(",", R.toUpper(myStringData)))); // not readable

log(sanitize(myStringData));

// using pipe

const sanitizeP = data =>
  R.pipe(
    R.toUpper(),
    R.split(","),
    R.uniq(),
    R.join(",")
  )(data);

const sanitizeP_PF = R.pipe(
  R.toUpper,
  R.split(","),
  R.uniq,
  R.join(",")
);
const sanitizeC_PF = R.compose(
  R.join(","),
  R.uniq,
  R.split(","),
  R.toUpper
);

log(sanitizeP(myStringData));
log(sanitizeP_PF(myStringData));
log(sanitizeC_PF(myStringData));

//drawbacks in FP

// harder to read if you are coming from imperative programming BG
// harder to debug , less efficient
