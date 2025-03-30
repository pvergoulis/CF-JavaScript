// 1. Basic function definition
console.log(greet("Paul"))
function greet(name){
  return `hello ${name}`
}

function add(a,b) {
  return a + b
}


// 2. function expression
const mul = function(a ,b){
  return a * b
}

let result= mul (3,4)

// 3. Arrow Function
const div = (a,b) => a / b