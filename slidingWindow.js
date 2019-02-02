//rithm sliding window problems
//http://curric.rithmschool.com/r8/exercises/prob-sliding-window/

//accepts an array of positive integers and a positive integer k
//return the min length of a contiguous subarray of which
//the sum of the subarray >= k
function minSubArrayLen(nums, k) {
  let l = 0;
  let r = 0;
  let minLength = Infinity;
  let currLength = 1;
  let currSum = nums[0];
  while (r < nums.length) {
    while (currSum < k) {
      r++;
      currLength++;
      currSum += nums[r];
    }
    if (currSum >= k) {
      minLength = Math.min(minLength, currLength);
    }
    while (currSum >= k) {
      currSum -= nums[l];
      l++;
      currLength--;
      if (currSum >= k) {
        minLength = Math.min(minLength, currLength);
      }
    }
  }
  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
