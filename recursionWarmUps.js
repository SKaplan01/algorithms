//returns copy of string with characters reversed
function revString(str, i = str.length - 1) {
  if (i < 0) return '';
  return str[i] + revString(str, i - 1);
}

// console.log(revString('cat')); // 'tac'
// console.log(revString('porcupine')); // 'enipucrop'
// console.log(revString('')); // ''

//finds the product of an array of numbers
function product(nums, i = 0) {
  if (nums.length === 0) return 0;
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

// console.log(product([2, 3, 4])); // 24
// console.log(product([])); // 0
// console.log(product([8])); // 8

//prints every other character of a string
function everyOther(str, i = 0) {
  if (i === str.length) return;
  if (i % 2 === 0) {
    console.log(str[i]);
    everyOther(str, i + 1);
  } else {
    everyOther(str, i + 1);
  }
}

// console.log(everyOther('hellom')); // prints "hlo"

//returns every other character of a string
function everyOther2(str, i = 0) {
  if (i === str.length) return '';
  if (i % 2 === 0) {
    return str[i] + everyOther2(str, i + 1);
  } else {
    return everyOther2(str, i + 1);
  }
}

// console.log(everyOther2('hello')); // prints "hlo"

//returns the length of the longest word
function longest(words, i = 0, longestWord = '') {
  if (words.length === 0) return undefined;
  if (i === words.length) return longestWord.length;
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
  return longest(words, i + 1, longestWord);
}

// console.log(longest(['hello', 'hi', 'hola'])); // 5
// console.log(longest([])); // undefined
// console.log(longest([''])); // 0

//returns true if string is a palindrome, otherwise returns false
function isPalindrome(str, i = 0) {
  let start = Math.floor(str.length / 2);
  let left;
  let right;
  if (str.length % 2 !== 0) {
    left = start - 1 - i;
    right = start + 1 + i;
  } else {
    left = start - i;
    right = start + i;
  }
  if (str[left] !== str[right]) {
    return false;
  }
  if (left > 0 && right < str.length - 1) {
    isPalindrome(str, i + 1);
  }
  return true;
}

// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('tacodog')); // false
// console.log(isPalindrome('')); // true

//returns true if string is a palindrome, otherwise returns false
function isPalindrome2(str, i = 0) {
  let left = 0 + i;
  let right = str.length - 1 - i;
  if (str[left] !== str[right]) {
    return false;
  }
  if (left < right) {
    isPalindrome(str, i + 1);
  }
  return true;
}

// console.log(isPalindrome2('tacocat')); // true
// console.log(isPalindrome2('tacodog')); // false
// console.log(isPalindrome2('')); // true

//give an array and a string, returns index of that string in the array
//returns -1 if string is not present

function findIndex(array, str, i = 0) {
  if (i === array.length) return -1;
  if (array[i] === str) return i;
  return findIndex(array, str, i + 1);
}

let animals = ['duck', 'cat', 'pony'];

// console.log(findIndex(animals, 'cat')); // 1
// console.log(findIndex(animals, 'porcupine')); // -1

//return an array of all the values in an object that are strings
function gatherStrings(obj, strings = []) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      gatherStrings(obj[key], strings);
    } else if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    }
  }
  return strings;
}

let nestedObj = {
  firstName: 'Lester',
  favoriteNumber: 22,
  moreData: {
    lastName: 'Testowitz'
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100
    },
    favoriteString: 'nice!'
  }
};

// console.log(gatherStrings(nestedObj)); // ["Lester", "Testowitz", "nice!"];
// console.log(gatherStrings({})); // [];

//takes sorted array of nums and a val, returns index of that value
//if val not found, return -1
function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === val) return mid;
  //if the val is lower than arr[mid], search the left side
  if (val < arr[mid]) {
    return binarySearch(arr, val, low, mid - 1);
  } else {
    //if the val is higher than arr[mid], search the right side
    return binarySearch(arr, val, mid + 1, high);
  }
}

// console.log(binarySearch([1, 2, 3, 4], 1)); // 0
// console.log(binarySearch([1, 2, 3, 4], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4], 5)); // -1
// console.log(binarySearch([], 5)); // -1

//codewars https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript
//takes in multiple-dimensional array, returns total number of intergers
function realSize(arr, acc = 0) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      acc = realSize(arr[i], acc);
    } else if (Number.isInteger(arr[i])) {
      acc++;
    }
  }
  return acc;
}

//codewars https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript
//returns the sum of squares of numbers in an array of nested lists of numbers
function sumSquares(l, sum = 0) {
  for (let i = 0; i < l.length; i++) {
    if (Array.isArray(l[i])) {
      sum = sumSquares(l[i], sum);
    } else if (Number.isInteger(l[i])) {
      sum += l[i] * l[i];
    }
  }
  return sum;
}

//codewars https://www.codewars.com/kata/recursive-replication
//returns an array that repeats number x times (whatever is passed in as "times")
//O(N^2) time bc copy all values in array each time, O(N) space bc
function replicate(times, number) {
  if (times <= 0) return [];
  return [number].concat(replicate(times - 1, number));
}

// []
// [5]
// [5, 5]
// [5, 5, 5]
//space complexity
//how many fn calls are on the stack at once: O(N) is best can do
//N^2 if N calls on stack holding N space

//Example from Joel for previous problem
// helper method function
function rep(times, number) {
  let rez = [];

  function _rep(times, number) {
    if (times <= 0) return;
    rez.push(number);
    _rep(times - 1, number);
  }

  _rep(times, number);
  return rez;
}

// console.log(rep(3, 5)); // [5, 5, 5]

//use i and push to improve runtime for previous problem O(N) time
function rep2(times, number, acc = []) {
  if (times <= 0) return acc;
  acc.push(number);
  return rep2(times - 1, number, acc);
}

console.log(rep2(3, 5)); // [5, 5, 5]
