//rithm pointers practice

//given an array and a target number, returns true
// if average of any 2 values in arr === target
function averagePair(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let ave = getAverage(nums[left], nums[right]);
    if (ave === target) {
      return true;
    } else if (ave > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

function getAverage(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
