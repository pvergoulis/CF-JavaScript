// Exersice 2.1
const people = [
  {firstname: "Alice", age:30},
  {firstname: "Bob", age: 33},
  {firstname: "Charlie", age: 25}
]

const greaterThanTh = (arr) => arr.filter((item) => item.age < 30)
const greaterDif = people.filter((item) => item.age < 30)
console.log(greaterThanTh(people))
console.log(greaterDif)

// Exercise 2.2
const names = (arr) => arr.map(item => item.firstname)
const namesDif = people.map(item => item.firstname)
console.log(names(people))
console.log(namesDif)









