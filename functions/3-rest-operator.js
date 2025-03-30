function max(...rest){
  let maxVal = -Infinity

  for(let n of rest) {
    if(n > maxVal) {
      maxVal = n
    }
  }
  return maxVal
}
console.log(max(1,2,3,4, 5,88))


function sum(...rest){ // εδω ειναι rest εδω ειναι consumer
  return rest.reduce((total, num) => total + num ,0)
  // return Math.max(...rest) // εδω ειναι spread (εδω παρεχει producer)
}

console.log(sum(1,2,3,4,5,6,34,12))

function greet(msg, ...names){
  console.log(msg + ", " + names.join(", "))
}
greet("hello", "paul", "bob", "Alice")