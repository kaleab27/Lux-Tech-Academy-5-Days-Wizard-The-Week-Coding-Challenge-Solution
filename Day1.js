// How to find largest and smallest number from integer array ?

function findLargestNumber(arr) {
  if(let i = 0; i < arr.length; i++) {
    let large = 0
    if(arr[i] > large) {
      large = arr[i]
    }
    return large
  }
}

function findSmallestNumber(arr) {
  if(let i = 0; i < arr.length; i++) {
    let small = 0
    if(arr[i] < small) {
      small = arr[i]
    }
    return small
  }
}


// ES6

let largestNumber = arr => Math.max(...arr)
let smallestNumber = arr => Math.min(...arr)


//Examples

let arr = [23, -34, -23, 0, -100, -10, 38, 94, 80]

findLargestNumber(arr)   // 94
findSmallestNumber(arr)  // -100

// ES6
largestNumber(arr)   // 94
smallestNumber(arr)  // -100
