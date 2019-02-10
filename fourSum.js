//PRAMP: find first 4 numbers in array that add to target sum

//numbers = [-3, -1, 1, 2, 4, 5, 17]
// with sorted array, use two points to find target sum
//nums will always be sorted bc fourSum sorts
function twoSum(nums, target, low = 0, high = nums.length - 1) {
  while (high > low) {
    let curr = nums[low] + nums[high];
    if (curr === target) {
      return [nums[low], nums[high]];
    } else if (curr > target) {
      high--;
    } else {
      low++;
    }
  }
  return [];
}

//loop through every pair of numbers and call twoSum on the rest of the array
// N^3 (twoSum is O(N) * N^2 for double loop)
function fourSum(nums, target) {
  let result = [];
  let sortedNums = nums.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < sortedNums.length - 4; i++) {
    for (let j = i + 1; j < sortedNums.length - 3; j++) {
      let pairTarget = target - (sortedNums[i] + sortedNums[j]);
      let pair = twoSum(sortedNums, pairTarget, j + 1);
      if (pair.length > 0) {
        return [sortedNums[i], sortedNums[j], pair[0], pair[1]];
      }
    }
  }
  return [];
}

let numbers = [2, 17, 4, -3, 5, 1, -1];

//if we sort:
//numbers = [-3, -1, 1, 2, 4, 5, 17]

console.log(fourSum(numbers, 6)); // [-1, 1, 2, 4]
