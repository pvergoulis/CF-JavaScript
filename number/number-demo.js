console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY) //  12/0
console.log(Number.NEGATIVE_INFINITY) // -12/0


if(Number.isInteger(12)) {
  console.log("Is Integer")
}else {
  console.log("Not Integer")
}

if (Number.isNaN(NaN)) {  // αν προσπαθησουμε να κανουμε 10 / "ΠΑΥΛΟΣ"  θα φερει αποτελεσμα NaN
  console.log("True")
}else {
  console.log("False")
}

if (Number.isNaN("Hello")) {  
  console.log("True")
}else {
  console.log("False")
}


if(isNaN(NaN)) {
  console.log("Is NaN")
} else {
  console.log("Is Not NaN")
}

console.log(Number.parseInt("44"))
console.log(parseInt("42"))

console.log(Number.parseFloat("44.8"))
console.log(parseFloat("32.22"))


const num1 = 0.1 + 0.2
const num2 = 0.3

function compareFolatingPoints (a, b){
  return Math.abs(a - b) < Number.EPSILON
}

console.log(compareFolatingPoints(num1, num2))