const sayHey = username => `Hello, ${username}` // αν ειναι μια παραμετρος δεν χρειαζονται οι παρενθεσης
const sayHi = () => console.log("Hello") // αν δεν υπαρχει καμια παραμετρος χρειαζονται οι παρενθεσης
const add = (a, b) => a + b // στις δυο παραμετρους χρειαζονται οι παρενθεσης
console.log(sayHey("Anna"))
sayHi()
console.log(add(4,5))