const products= []

function insert(arr, product) {
  if(!arr || !product) return

  try {
      if(arr.includes(product)) {
        throw new Error("Product Exists")
      }
      arr.push(product)
  } catch (error) {
    console.error(error.message, error.trace)
    throw error
  }
}


try {
  insert(products, 1)
  insert(products, 2)
  console.log(products)
  insert(products, 1)
} catch(error) {
  console.log(error.message)
}
