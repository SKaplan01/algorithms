//MERGE SORT

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  return mergedArr;
}

// console.log(merge([2, 3, 6, 7, 8, 9], [1, 3, 5, 17]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// console.log(mergeSort([2, 3, 17, 5, 1, 10]));

//BUBBLE SORT

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      if (arr[k] > arr[k + 1]) {
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([2, 3, 17, 5, 1, 10]));

//PIVOT
//WORK IN PROGRESS

function pivot(arr, start = 0, end = arr.length) {
  // let pivotIndex = Math.floor(Math.random() * (end - start)) + start;
  let pivotIndex = 5;
  console.log('pivot ', arr, start, end, pivotIndex);
  let pivotVal = arr[pivotIndex];
  arr[pivotIndex] = arr[end - 1];
  arr[end - 1] = pivotVal;
  let p1 = start;
  let p2 = end - 2;
  while (p1 < p2) {
    while (arr[p1] < pivotVal && p1 < p2) p1++;
    while (arr[p2] > pivotVal && p2 > p1) p2--;
    if (p1 < p2) {
      let temp = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = temp;
      p1++;
      p2--;
    }
  }
  if (arr[p1] > pivotVal) {
    let temp2 = arr[end - 1];
    arr[end - 1] = arr[p1];
    arr[p1] = temp2;
  } else {
    let temp3 = arr[end - 1];
    arr[end - 1] = arr[p2];
    arr[p2] = temp3;
  }
  return { arr, pivotIndex: p1 };
}

// console.log(pivot([1, 5, 3, 2, 9, 18, 7, 25, 4, 30, 13]));
console.log(pivot([1, 5, 3, 2, 9, 4], 1, 6)); // set pivot to 5
// console.log(pivot([1, 2, 4, 5, 9, 3], 0, 2)); // set pivot to 1 worked
// console.log(pivot([2, 1, 4, 5, 9, 3], 1, 6)); // set pivot to 5
// console.log(pivot([2, 1, 3, 5, 9, 4], 0, 2)); // set pivot to 0

//QUICKSORT
function quickSort(array, start = 0, end = array.length, count = 0) {
  if (end - start < 2) return;
  let { arr, pivotIndex } = pivot(array, start, end);
  console.log(arr, count);
  count++;
  //recurse left of pivot
  quickSort(arr, 0, pivotIndex, count);

  //recurse right of pivot
  quickSort(arr, pivotIndex + 1, arr.length, count);

  return array;
}

// console.log(quickSort([1, 5, 3, 2, 9, 4]));
