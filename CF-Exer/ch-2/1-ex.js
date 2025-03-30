// Exercise 1.1
const number = [1, 2, 3, 4, 5]

const doubleArrayWithMap = (arr) => arr.map(item => item *2)
const doubleDif = number.map((item)=> item *2)

console.log(doubleArrayWithMap(number))
console.log(doubleDif)


//Exercise 1.2

const evenWithFilter = ((arr) => arr.filter(num => (num % 2 === 0)))
const evenDif = number.filter((num) => (num % 2 === 0))

console.log(evenWithFilter(number))
console.log(evenDif)


//Exercise 1.3
const positiveArray = ((arr)=> arr.some(item => item>= 0))
const positiveDif = number.some(item => item >= 0)
console.log(positiveArray(number))
console.log(positiveDif)


//Exercise 1.4
const everyArray = ((arr) => arr.every(item => item >=0))
const everyDif = number.every(item => item >= 0)
console.log(everyArray(number))
console.log(everyDif)