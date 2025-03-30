const arr = [1, 2, 3]
// Με αυτο τον τροπο μπορουμε να βρουμε ενα στοιχειο και να το διαγραφουμε
let itemToRemove = arr.indexOf(2)
arr.splice(itemToRemove, 1)
console.log(arr)