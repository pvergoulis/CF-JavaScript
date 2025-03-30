const s = "Apples,Oranges,Milk"

const items = s.split(",")  // To , ειναι πως θελουμε να τα ξεχωριζουμε

console.log(items)


const newStr = items.join(" | ") // η join παιρνει τα στοιχεια του πινακα και τα κανει string
console.log(newStr)