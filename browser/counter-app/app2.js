const DEFAULT = 0
let counter = DEFAULT
window.addEventListener('DOMContentLoaded' , function (){
  this.document.querySelector('#btnDecr').addEventListener('click',() => onDecreasedClick())
  this.document.querySelector('#btnReset').addEventListener('click', () =>onResetClicked())
  this.document.querySelector('#btnIncr').addEventListener('click', () => onIncreasedClicked())
})

function onDecreasedClick (){
  decreaseClick()
}

function onResetClicked(){
  resetClick()
}

function onIncreasedClicked() {
  increasedClick()
}

function decreaseClick(){
  counter--
  reder()
}

function resetClick () {
  counter = DEFAULT
  reder()
}

function increasedClick(){
  counter++
  reder()
}

function reder() {
  const num = document.querySelector('#counter')
  num.innerHTML = counter
  styleColor(num)
}

function styleColor (num) {
  num.classList.toggle('color-green', counter > 0)
  num.classList.toggle('color-black', counter === 0)
  num.classList.toggle('color-red', counter < 0)
}