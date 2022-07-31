// What are the seven paradigms of the database?

// 1. Key-Value = key -----> Value: Keeps DATA in RAM
// 2. Wide Column = Row Key -----> columns: No defined schema, really good 
// for scaling. Best for time-series.
// 3. Document = Collection -----> Sub collection: Schema-less, Relational-like
// Queries. Reads tend to be faster.
// 4. Relational = Table -----> Join-Table: Data is stored in tables, Data in
// smallest normal Form, and ACID Compliant. 
// 5. Graph = Node -----> Edge: Many to Many relationships are Simple.
// Best for Graphs. 
// 6. Search = Documents -----> Inverted Index: Works like an Index, very fast.
// Best for search engine and Type Ahead.
// 7. Multi-model = Fast, ACID compliant, and Most applications. 

// Create a function that takes a base number and an
//  exponent number and returns the calculation.
let num = 6
let ex = 7
let numEX = Math.pow(num,ex)
console.log(numEX)

// Create a function that takes an array and a string as
//  arguments and returns the index of the string.

const findIndex = (arr, x) => {
    let a;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== x) {
        a = i; 
      } else {
        return i;
      }
    }
  };
  console.log(findIndex(["hi", "bye", "what's up", "see ya"], "hi"));
  console.log(findIndex(["Red", "Yellow", "Blue", "Green"], "Blue"));
  console.log(findIndex(["a", "g", "y", "d"], "d"));
  console.log(findIndex(["nuts", "bolts", "wrenches", "screws"], "screws"))
  
  // Create a function that takes an array and returns 
// the types of values (data types) in a new array.

let myArr = ['cat', 5, false,]