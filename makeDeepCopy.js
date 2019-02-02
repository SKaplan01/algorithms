//Random recursion practice

//given an array or object with nested data,
//returns a deep copy of the array or object
function makeDeepCopy(obj) {
  let result;
  if (Array.isArray(obj)) {
    result = [];
    for (let i = 0; i < obj.length; i++) {
      result.push(makeDeepCopy(obj[i]));
    }
  } else if (typeof obj === 'object') {
    result = {};
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }
  } else {
    result = obj;
  }
  return result;
}

let obj = {
  name: 'Sarah',
  hobbies: ['running', 'birdwatching', 'hiking'],
  priorities: {
    1: 'get a job',
    2: 'sleep',
    3: 'study'
  }
};

let objCopy = makeDeepCopy(obj);
console.log(objCopy);

let arr = [
  1,
  {
    cats: ['Simba', 'Rafiki'],
    dogs: 'Samoyed'
  },
  3,
  4
];

let arrCopy = makeDeepCopy(arr);
console.log(arrCopy);
