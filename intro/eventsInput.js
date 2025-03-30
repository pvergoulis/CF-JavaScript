function echo(){
  const inputTxt = document.getElementById("inputTxt")
  const val = inputTxt.value

  const HelloText = document.getElementById("HelloText")
  HelloText.innerHTML = val
}