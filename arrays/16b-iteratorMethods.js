const users = [
  {id:1, firstname:"Alice", email:"alice@aueb.gr" , isActive: true},
  {id:2, firstname:"Bob", email:"bob@aueb.gr", isActive: false},
  {id:3, firstname:"Costas", email:"costas@aueb.gr", isActive: true}
]

users.forEach(user => console.log(user))

const emails = users.map((user) => user.email)
const emailsf = users.filter((user) => user.email === "alice@aueb.gr")
console.log(emailsf)

console.log(emails)

const activeUsers = users.filter((user) => user.isActive === true)

console.log(activeUsers)

const cart = [
  {title: "laptop", price: 1000, stock: 10},
  {title: "mouse", price: 50, stock :0},
  {title: "keyboard", price: 80, stock: 20}
]

const totalSum = cart.reduce((total, value) => total + value.price, 0)
console.log(totalSum)

const user = users.find((user) => user.email === "alice@aueb.gr")
const userIndex = users.findIndex((user) => user.email === "alice@aueb.gr")
console.log(user)
console.log(userIndex)

const isOutOfStock = cart.some(item => item.stock === 0) // Na einai esto 1 //True
console.log(isOutOfStock)
const isOutOfStockEvery = cart.every(item => item.stock === 0) // Prepei na einai ola  // false
console.log(isOutOfStockEvery)

const posts = [
  {title: "post1", tags: ["js", "web"]},
  {title: "post2", tags: ["node.js", "backend"]},
  {title: "post3", tags: ["jreact", "frontend"]}
]

const allTags = posts.flatMap((post) => post.tags )
console.log(allTags)


const fruits = ["Apple", "Oranges"]
for (const [index, fruit] of fruits.entries()){
    console.log(`Index: ${index}, Fruit: ${fruit}`)
}