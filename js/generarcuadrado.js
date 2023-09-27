function generatesquare(n){
  return Array(n)
  .fill('+'.repeat(n))
  .join('\n')
}
console.log(generatesquare(10));