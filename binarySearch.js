//use binary search to return the index of a value in a sorted list

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let mid = Math.floor((high - low) / 2) + low;
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, low, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, high);
  }
}

//example --> Works
let nums = [-2, 0, 3, 7, 12, 27, 100];
console.log(binarySearch(nums, -2));
