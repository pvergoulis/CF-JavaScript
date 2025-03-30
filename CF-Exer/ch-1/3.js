// Exercise 1

// function uniqueValues(arr) {
//   return [...new Set(arr)];
// }

// let arr = [1, 2, 3, 1, 4, 2, 5, 3];
// let uniqueArr = uniqueValues(arr);

// console.log("Unique valeus :", uniqueArr);


//Exercise 2


// function returnFlatArr(arr) {
//   return arr.flat(Infinity)
// }

// let nestedArr = [1, [1,2] , [3,4], 5, 5, 3, [1, 3]]
// let flatArr = returnFlatArr(nestedArr)

// console.log(flatArr)



//Exercise 3

// function splitArr(arr, size) {
//   let result = []
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size))
//   }
//   return result
// }

// let arr = [1, 2, 3, 4, 5, 6, 5, 4, 1, 3]
// let subArrSize = 3;
// let subArr = splitArr(arr,subArrSize)

// console.log(subArr)



function commonElem(arr1, arr2) {
  return arr1.filter(elem => arr2.includes(elem));
}

// Παράδειγμα χρήσης
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let common = commonElem(arr1, arr2);
console.log("Κοινά στοιχεία:", common);

