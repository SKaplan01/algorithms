function merge(leftArr, rightArr) {
  let i = 0;
  let j = 0;
  let mergedArr = [];
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      mergedArr.push(leftArr[i]);
      i++;
    } else {
      mergedArr.push(rightArr[j]);
      j++;
    }
  }
  while (i < leftArr.length) {
    mergedArr.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    mergedArr.push(rightArr[j]);
    j++;
  }

  return mergedArr;
}

function mergeSort(arr) {
  let low = 0;
  let high = arr.length - 1;
  let partition = Math.floor((high - low) / 2);

  if (arr.length < 2) return arr;

  //recursively sort to the left of the partition

  let tempLeft = mergeSort(arr.slice(low, partition + 1));

  //recursively sort to the right of the partition
  let tempRight = mergeSort(arr.slice(partition + 1, high + 1));

  //merge the left and right half of the array
  return merge(tempLeft, tempRight);
}

console.log(mergeSort([5, 100, 17, 1, 4, 12, 3]));
