console.log(Boolean(1))  //true
console.log(Boolean(0))   //false
console.log(Boolean("Hello")) //true
console.log(Boolean(""))    //false
console.log(Boolean(null))    //false
console.log(Boolean(undefined)) // false
console.log(Boolean({})) // true
console.log(Boolean([]))  //true


while(1) {
  console.log("Hello")
  break;
}

do {
  console.log("Hello World")
}while(0)

for (let i = 1; 1; i++) {
    console.log("In for")
    break;
}

let num = 10
while(num) {
  console.log(num)
  num--
}



  // && ||

  console.log("Coding " && 7)  // truthy && truthy θα επιστρεψει μονο το τελευταιο truthy value δλδ το 7

  console.log("" && 7)  // truthy && falsy, first falsy επιστρφει το πρωτο falsy value
  console.log(7 && "")
  


  console.log(true ||"Default") // θα εμφανιζοταν το first truthy value 
  console.log("User" ||"Default")  // θα εμφανιζοταν το first truthy value

  console.log(false ||"") // αν ειναι κ τα δυο falsy θα εμφανισει το τελευταιο 

  const username = "" || "Default"
  let isBtnExists = true
  let button = "Button"
  const buttonToShow = isBtnExists && button
