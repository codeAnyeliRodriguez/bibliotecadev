// invertir array
// recorrer el array de manera inversa
 let n = 12345
function invertir(n){
let cadenaNumero= n.toString();
let ninvert =[]
for(let i = cadenaNumero.length-1; i >= 0; i--){
  ninvert.push(parseInt(cadenaNumero[i]))
}
console.log(ninvert)
}

invertir(n)

// solution
function digitize(n) {
  tostr = n.toString();
    ninvert = []
    for(let i = tostr.length-1; i >= 0; i--){
      ninvert.push(parseInt(tostr[i]))
    }
    return ninvert
  }