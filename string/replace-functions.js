const s = "Coding Factory"

const replaced = s.replace("Coding", "Code")
console.log(replaced)

const lower = s.toLocaleLowerCase()
console.log(lower)
const upper = s.toUpperCase()
console.log(upper)


const s2 = "CODING FACTORY"

if(s.toLocaleUpperCase() === s2.toLocaleUpperCase()){
  console.log("Equals")
}


const firstname = "Alice     "
if(firstname.trim() ==="Alice" ) {
  console.log("is equal")
}


console.log(s.repeat(5))

const concat = s + 2 + "Goodnight!"
const concat2 = s.concat(s2).concat("Bye!")