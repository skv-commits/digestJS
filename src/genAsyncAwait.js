const fetchData = callback => {
  setTimeout(() => {
    callback("Im Done");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer is Done");
  fetchData(text => console.log(text));
}, 2000);

// o/p => 2 secs after , Timer is done , 1.5 s after Done is printed

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Im Done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is Done");
  fetchData()
    .then(text => {
      console.log("text", text);
      return fetchData();
    })
    .then(text2 => {
      console.log("text2", text2);
    });
}, 2000);

async function asyncFunc() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get("/some_url_endpoint");
    const data = await response.json();

    return data;
  } catch (error) {
    alert(error); // catches both errors
  } finally {
    console.log("execute the code here irrespective of success / error");
  }
}

//async on class Methods

class Example {
  async asyncMethod() {
    const data = await axios.get("/some_url_endpoint");
    return data;
  }
}
//To call the method we'd do:

const exampleClass = new Example();
exampleClass.asyncMethod().then(res => res); //do whatever you want with the result)

//We can append a .then() on an await.

async function asyncFunc() {
  // fetch data from a url endpoint
  const data = await axios
    .get("/some_url_endpoint")
    .then(result => result.names);

  return data;
}

const doubleAfter2Seconds = x =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });

const addPromise = x =>
  new Promise(resolve => {
    doubleAfter2Seconds(10).then(a => {
      doubleAfter2Seconds(20).then(b => {
        doubleAfter2Seconds(30).then(c => {
          resolve(x + a + b + c);
        });
      });
    });
  });

addPromise(10).then(sum => {
  console.log(sum);
});

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}

addAsync(10).then(sum => {
  console.log(sum);
});

startTime = performance.now();
var sequential = async function() {
  console.log(executingAt());
  const resolveAfter3seconds = await promiseTRSANSG(3);
  console.log("resolveAfter3seconds", resolveAfter3seconds);
  console.log(executingAt());
  const resolveAfter4seconds = await promiseTRSANSG(4);
  console.log("resolveAfter4seconds", resolveAfter4seconds);
  end = executingAt();
  console.log(end);
};
sequential();

var parallel = async function() {
  startTime = performance.now();
  promisesArray = [];
  console.log(executingAt());
  promisesArray.push(promiseTRSANSG(3));
  promisesArray.push(promiseTRSANSG(4));
  result = await Promise.all(promisesArray);
  console.log(result);
  console.log(executingAt());
};
parallel();
