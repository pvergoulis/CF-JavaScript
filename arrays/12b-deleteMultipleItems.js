const arr = [2, 2, 3, 2, 5, 2]

const deleteBackwards = (arr, val) => {
  if(!arr) return

  let i = arr.length

  while (i--) {
    if(arr[i] === val) {
      arr.splice(i , 1)
    }
    
  }
}

deleteBackwards(arr,2)

console.log(arr)