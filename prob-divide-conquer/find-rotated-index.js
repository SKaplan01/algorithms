function findRotatedIndex(nums, target) {
  let rotatedIndex = findRotatedPoint(nums, target);
  if (rotatedIndex === -1) {
    return binarySearch(nums, target, 0, nums.length - 1);
  } else if (target >= nums[rotatedIndex] && target <= nums[nums.length - 1]) {
    return binarySearch(nums, target, rotatedIndex, nums.length - 1);
  } else if (target <= nums[rotatedIndex - 1] && target > nums[0]) {
    return binarySearch(nums, target, 0, rotatedIndex - 1);
  } else {
    return -1;
  }

  //returns the index where an array was rotated or -1 if the array is not rotated
  function findRotatedPoint(arr, left = 0, right = arr.length - 1) {
    let mid = left + Math.floor((right - left) / 2);
    if (left > right || mid === 0) {
      return -1;
    }

    if (arr[mid] < arr[mid - 1]) {
      return mid;
    } else if (arr[mid] > arr[0]) {
      return findRotatedPoint(arr, mid + 1, right);
    } else {
      return findRotatedPoint(arr, left, mid - 1);
    }
  }

  //returns index of a target number in a sorted array or -1 if not found
  function binarySearch(arr, val, left, right) {
    let mid = left + Math.floor((right - left) / 2);
    if (left > right) {
      return -1;
    }
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      return binarySearch(arr, val, left, mid - 1);
    } else {
      return binarySearch(arr, val, mid + 1, right);
    }
  }
}

module.exports = findRotatedIndex;
