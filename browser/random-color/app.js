let color = undefined

window.addEventListener('DOMContentLoaded', function(){
  this.document.getElementById('btn').addEventListener('click', function(){
    onClickMeClicked()
  })
})

function onClickMeClicked (){
  updateBG()
}

/**
 * Model Update the state
 */

function updateBG() {
  color = getBgColor() // Update state
  renderBg(color)           // render based on updated state
} 

function getBgColor() {
  const colors = ['black', 'red', 'green', 'white', 'blue']
  return colors[Math.floor(Math.random() * colors.length)]
}

//View - UI rendering
function renderBg() {
  document.querySelector('#hex').innerHTML = color
  document.body.style.backgroundColor = color
}
