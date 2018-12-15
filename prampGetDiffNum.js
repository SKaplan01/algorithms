function getDifferentNumber(arr) {
  let numSet = new Set();
  let highestNum = 0;
  for (let i = 0; i < arr.length; i++) {
    numSet.add(arr[i]);
    if (arr[i] > highestNum) {
      highestNum = arr[i];
    }
  }
  let highestChecked = 0;
  while (highestChecked < highestNum) {
    if (!numSet.has(highestChecked)) {
      return highestChecked;
    } else {
      highestChecked++;
    }
  }
  return highestNum + 1;
}

//time O(N+M) where o is length of arr and M is highest number
// space O(N) bc you have to make the set
