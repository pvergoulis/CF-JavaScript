function convertMeters(meters) {
  return {
    centimeters: meters * 100,
    milimeters: meters * 100,
  }
}

function convertCentimeters(cm) {
  return {
    meters: cm / 100,
    milimeters: cm * 10
  }
}

function convertMilimiters(mm) {
  return {
   meters: mm / 1000,
    centimeters: mm / 10
  }
}

const obj = convertMilimiters(1500)
console.log(obj.meters)
console.log(obj.centimeters)