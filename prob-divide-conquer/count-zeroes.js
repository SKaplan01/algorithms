function countZeroes(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  let foundLastOne = false;

  //find the index of the last 1 using binary search
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === 1 && nums[mid + 1] === 0) {
      foundLastOne = true;
      break;
    } else if (nums[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (foundLastOne) {
    return nums.length - (mid + 1);
  } else if (nums[mid] === 1) {
    return 0;
  } else {
    return nums.length;
  }
}

module.exports = countZeroes;
