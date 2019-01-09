function findRotationCount(nums) {
  let rotationIndex = findRotatedPoint(nums);

  if (rotationIndex === -1) {
    return 0;
  }

  return rotationIndex;

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
}

module.exports = findRotationCount;
