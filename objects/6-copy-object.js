const initial = { name: "Alice", age: 30, address: {stree: "pattision", num:76}}

const copyInitial = {...initial} //1. spreading is a shallow copy

console.log(copyInitial)

//2. Object type

const copyInitial2 = Object.assign({}, initial)
console.log(copyInitial2)


// 3. with JSON function == deep copy
const copyInitial3 = JSON.parse(JSON.stringify(initial))
console.log(copyInitial3)


const initial2 = { name: "Alice", age: undefined, address: {stree: "pattision", num:76}}
console.log(JSON.stringify(initial2)) // den epistrefei to AGE epeidh einai undifined

// 4. Deep copy
const copyInitial4 = structuredClone(initial)
console.log(copyInitial4)

