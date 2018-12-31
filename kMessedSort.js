//Pramp problem: kMessedSort

//Given an array of integers arr where each
// element is at most k places away from its
// sorted position, code an efficient function
// sortKMessedArray that sorts arr.

//sliding window solution O(N*k)

function sortKMessedArray(arr, k) {
  for (let j=0; j<arr.length; j++) {
    let min=arr[j]
    let minIdx = j
    let max = Math.min(k+1, arr.length-j)
    for (let l=0; l< max + 1; l++) {
      if (arr[j+l] < min) {
        min = arr[j+l]
        minIdx = j+l
      }
    }
    let temp = arr[j]
    arr[j] = arr[minIdx]
    arr[minIdx] = temp
    console.log(arr)
  }
  return arr
}

sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2)

//Min heap solution O(Nlog(k))
//psuedocode

function sortKMessedArray(arr, k) {
    n = arr.length

    # create an empty min-heap
    h = new MinHeap()

    # build the min-heap from the first k+1 elements of arr
    h.buildHeap(arr[0,...,k])

    for i from k+1 to n-1:
        # extract the top element from the min-heap and
        # assign it to the next available array index
        arr[i-(k+1)] = h.extractMin()

        # push the next array element into the min-heap
        h.insert(arr[i])

    # extract all remaining elements from the min-heap
    # and assign them to the next available array index
    for i from 0 to k:
        arr[n-k-1 + i] = h.extractMin()

    return arr
}