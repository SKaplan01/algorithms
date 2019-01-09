function findFloor(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (mid === nums.length - 1 || nums[mid + 1] > target) {
      return nums[mid];
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

module.exports = findFloor;
