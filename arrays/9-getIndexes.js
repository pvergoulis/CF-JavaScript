const arr = [1, 2, 3, 4, 5, 6, 7, 8, 3, 1, 2, 1, 1]  

// function να επιστρεφει ενα πινακα με τις θεσεις
// στις οποιες βρισκετε ενας συγκεκριμενος αριθμος

function getPositions(arr, num){

  let positions = []
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === num) {
      positions.push(i)
    }
  }
  return positions
}

console.log(getPositions(arr,1))

const getIndexes = (arr, val) => {
  const indexes = []

  arr.forEach((v, index) => {
    if( v === val) {
      indexes.push(index)
    }
  });
  return indexes
}

console.log(getIndexes(arr,2))