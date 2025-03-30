const cities = ["Paris", "London", "Berlin", "Athens"]
const numbers = [10, 101, 32 , 123 , 77, 99 , 609, 590]

console.log(cities.sort()) // Με την sort ταξιμονομουμε μονο γραμματα 
console.log(numbers.sort())

// numbers.sort(function(a, b) {
//   if (a > b) return 1
//   if (a < b) return -1
//   if (a === b) return 0
// })

      // Asceding
numbers.sort(function(a, b) {
  return a - b; 
  // return b - a // Desciding
})


      // Desciding
numbers.sort(function(a, b) {
   return b - a 
})

console.log(numbers)
console.log(numbers.reverse())