const person = {
  firstname : "Alice",
  lastname: "W.",
  age: 25,
  city: "Athens",
  isStudent: false
}
for(let kk in person){
  console.log(kk, person[kk])
}


const keys = Object.keys(person) // return ta keys firstname lastname etc se array
keys.forEach(key => console.log(`key: ${key}, Value: ${person[key]}`))


console.log(Object.values(person))


const grades = {math: 8, science: 10, history: 5}
const total = Object.values(grades).reduce((sum, val) => sum + val, 0)
let average = (total / Object.keys(grades).length).toFixed(2)
console.log(total + ", "  + average)
