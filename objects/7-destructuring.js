const [a,b] = [1,2] //array destructure


const person = {
  firstname: "Alice",
  age: 25,
  // city: "Athens"
}

const {firstname, age, city} = person // object destructure
console.log(firstname, age, city)


const {firstname: first, age: newAge, city: myCity = "Torondo"} = person
console.log(first, newAge, myCity)
