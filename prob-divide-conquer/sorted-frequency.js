function sortedFrequency(nums, target) {
  let first = findFirst(nums, target);
  if (first === -1) {
    return -1;
  }

  let last = findLast(nums, target, first, nums.length - 1);

  return 1 + last - first;

  //returns index of the first instance of the target number or -1 if not found
  function findFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      if ((mid === 0 || arr[mid - 1] !== target) && arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  //returns index of the last instance of the target number
  function findLast(arr, target, left, right) {
    let mid;

    while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      if (
        (arr[mid] === arr.length - 1 || arr[mid + 1] !== target) &&
        arr[mid] === target
      ) {
        return mid;
      } else if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}

module.exports = sortedFrequency;
