function greet(name) {
  if(name === undefined){
    name = "Guest"
  }
  console.log(`hello ${name}`)
}

greet()


// Defualt params
function getUser(name = "Guest", age = 18){
  return { name, age}
}

const obj = getUser()
console.log(obj)
const obj2 = getUser("Paul", 31)
console.log(obj2)


function getFormattedDateTime(
  locale ="en-US",
   options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
   }
  ) {
    const now = new Date()
    return now.toLocaleString(locale,options)
  }

  console.log(getFormattedDateTime("el-GR"))