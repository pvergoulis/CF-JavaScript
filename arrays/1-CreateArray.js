const arr = []                      // κενος πινακας
const arr1 = [1, 2, 3, 4, 5]        // Populate
const arr2 = [1, "Alice", 3.4, true]
const sparseArr = [1, , 3]  //Sparse array 
const arr3 = [,,,]  // To length ειναι 3 
const arr4 = Array(2) // Δημιουργει ενα πινακα 2 στοιχειων
const grid = [[1, 2], [2, 3], [5, 6, 7]]
const objArr = [{id:1}, {id:2}, {id:3}]


console.log(arr1[0]) // output 1

for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}

for(const el of arr1){
  console.log(el)
}

arr1.forEach(item => console.log(item))

console.log("grid traverse 1")
for(let i = 0; i < grid.length;i++){
  for(let j = 0; j < grid[i].length; j++){
    console.log(grid[i][j])
  }
}
console.log("grid traverse 2")
for( const row of grid){
  for(const item of row){
    console.log(item)
  }
}