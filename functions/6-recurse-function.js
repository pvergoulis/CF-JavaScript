const facto = function (n) {
  if(n == 0 || n == 1) {
    return 1
  }
  return n * facto(n - 1)
}
// ξανακαλω τον ευατο μου με μικροτερο μηκος δεδομενων (αυτο ειναι η αναδρομη)

console.log(facto(5))