const obj = {id: 1, firstname: "Alice"}

// Add properties


// Modify the object

obj.lastname = "W."
console.log(obj)


//Immutable fresh-copy

const addToObj = (obj, filed, value) => ( {...obj, [filed]: value} )
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy)


// Update

// Modify the object
obj.firstname = "Athana"
console.log(obj)

// Immutable -fresh copy
const updateObj = (obj, field, newVal) => ({...obj, [field] : newVal})
const updatedObj = updateObj(obj, "firstname", "Bob")
console.log(updatedObj)


//Delete 

//Immutable delete
const deleteIdFromObj = (obj,field) => {
  const {[field]: _ , ...objToReturn} = obj
  return objToReturn
}

const objFromDelete = deleteIdFromObj(obj,"id")
console.log(objFromDelete)