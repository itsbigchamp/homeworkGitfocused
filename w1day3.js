// 1. Write a function named assignGrade that takes one argument,
//  a number score.
// Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
//  Call that function for a few different scores and log the 
//  result to ensure it works.

function assignGrade(gradeNumber){
    if(gradeNumber >= 90) {
       return 'A'
    }
    else if(gradeNumber >= 80) {
       return 'B'
    }
    else if(gradeNumber >= 70) {
       return 'C'
    }
    else if(gradeNumber >= 60) {
       return 'D'
    }
    else if(gradeNumber >= 50) {
       return 'F'
    }
}
console.log(`You got an`,assignGrade(95))
console.log(`You got a`,assignGrade(82))
console.log(`You got a`,assignGrade(78))
console.log(`You got a`,assignGrade(63))
console.log(`You got a`,assignGrade(54))

// 2. Create a function that returns the number of true values in an array.
// const testArray = [ true, false, false, true, false, 
//     false, false, true, true, true, false ]

const arr = [true, false, false, true, false, false, false, true, true,
    true, false];
const count = arr.filter(Boolean).length;
console.log(count);

// 3. Create a function that converts a string to all uppercase
//  letters and console.log the result (hint: string methods):
// let str = “WHAT a TIME to BE ALIVE!”

let str = `WHAT a TIME to BE ALIVE!`
let upperstr = str.toUpperCase()
console.log(upperstr)

// 4. Create a function that takes in a number of two-pointers and
//  three-pointers made and returns a basketball team’s total score?

let fromDeep = 23
let inThePaint = 27
function teamTotal(fromDeep,inThePaint) {
    return fromDeep * 3 + inThePaint * 2
}
console.log(teamTotal(fromDeep,inThePaint))

// 5. Create a function that takes an array of numbers & 
// returns both min and max in that order. (use a loop)// 

let minMaxValues = (arr) => {
    let maxValues;
    let minValues;
    for (let i = 0; i < arr.length; i++) {
      // check first value with all iterater
      if(arr[i] < arr[1]){
        minValues = arr[i];
      }
      // check last value with all iterater
      if(arr[i] > arr[arr.length-1]){
        maxValues = arr[i];
      }
    }
    console.log(minValues);
    console.log(maxValues);
  }
  minMaxValues([100, 20, 30, 10, 50]);