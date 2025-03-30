const students = ["Alice", "Andreas", "Bob", "Costas" ,"Andreas"]

students.forEach(function(val,index,arr) {
  console.log(val,index, arr)
  console.log(index,val)
})

students.forEach(function(stu, _,arr) {
  console.log(stu, arr)
})

let filtered = students.filter(student => student === 'Andreas')
console.log(filtered)  // Η filter επιστρεφη πινακα .. δεν τροποποιει τον ιδιο

let mapped = students.map(student => "Student: " + student)
console.log(mapped)

const numbers = [1, 2, 3, 4, 5, 32 ,1]

let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum)