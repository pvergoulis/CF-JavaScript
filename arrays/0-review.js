const cities = ["Athens", "Paris", "Toronto"]

 //Add - Modifies the array
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "London"

cities.forEach(c => console.log(c))

cities.sort()

cities.sort((a,b) => a.localeCompare(b, "en")) // Η sort δεν δημιουργει καινουργιο copy απλα ταξηνομει τον πινακα
const citiesSorted = cities.slice().sort((a,b) => a.localeCompare(b, "en")) // Εδω κανουμε Shallow-copy με την slice


//Copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))  // H JSON.Stringify μετατρεπει ενα js object σε strings και μετα η Parse το μετατρεπει παλι σε js object και εχουμε deep copy

const cities2 = structuredClone(cities) // copy

// Shallow copies -- Spread opertor
const nums = [1, 2, 3, 4]
const cities3 = [...cities]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)


