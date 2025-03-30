const jsObj = {
  id: 1,
  hobbies: [{id:1, title: "gym"},{id:2, title: "music"}]
}

// Serialiazotion
const jsonStr = JSON.stringify(jsObj)
console.log(jsonStr)

// Deserialization
const obj2 = JSON.parse(jsonStr)
console.log(obj2)