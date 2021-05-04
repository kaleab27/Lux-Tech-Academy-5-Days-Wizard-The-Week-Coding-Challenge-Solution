// How to find largest and smallest number from integer array ?

function findLargestNumber(arr) {
  let large = 0
  for(let i = 0; i < arr.length; i++) {
    if(parseFloat(arr[i]) > parseFloat(large)) {
      large = arr[i]
    }
  }
  return large
}

function findSmallestNumber(arr) {
  let small = 0
  for(let i = 0; i < arr.length; i++) {
    if(parseFloat(arr[i]) < parseFloat(small)) {
      small = arr[i]
    }
  }
  return small
}


// ES6 using spread operator and arrow functions

let largestNumber = arr => Math.max(...arr)
let smallestNumber = arr => Math.min(...arr)


//Examples

let arr = [23, -34, -23, 0, -100, -10, 38, 94, 80]

findLargestNumber(arr)   // 94
findSmallestNumber(arr)  // -100

// ES6
largestNumber(arr)   // 94
smallestNumber(arr)  // -100
