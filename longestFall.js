//rithm pointers practice

// given an array of integers, return the length of the
// longest consecutive decrease

function longestFall(nums) {
  let longestDec = 0;
  let currDec = 0;
  for (let i = 0; i < nums.length; i++) {
    currDec++;
    longestDec = Math.max(longestDec, currDec);
    if (i + 1 < nums.length && nums[i] <= nums[i + 1]) {
      currDec = 0;
    }
  }
  return longestDec;
}

console.log(longestFall([5, 3, 1, 3, 0])); // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
console.log(longestFall([2, 2, 1])); // 2, 2-1 is the longest consecutive sequence of decreasing integers
console.log(longestFall([2, 2, 2])); // 1, 2 is the longest consecutive sequence of decreasing integers
console.log(longestFall([5, 4, 4, 4, 3, 2])); // 3, 4-3-2 is the longest
console.log(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1])); // 5, 9-8-7-6-5 is the longest
console.log(longestFall([])); // 0
