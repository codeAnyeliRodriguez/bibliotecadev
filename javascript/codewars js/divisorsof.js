/* Para encontrar los divisores de un número en JavaScript, puedes utilizar un bucle y verificar si cada número desde 1 hasta el número dado es un divisor.  */
/* function encontrarDivisores(numero) {
    var divisores = [];
    
    for (var i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        divisores.push(i);
      }
    }
    
    return divisores;
  }
  
  // Ejemplo de uso
  var numero = 24;
  var divisores = encontrarDivisores(numero);
  console.log("Los divisores de " + numero + " son: " + divisores.join(", ")); */
//   solucion
function getDivisors(n){
    let divisors=[];

    for(let i =1; i<=n; i++){
        if(n % i === 0){
            divisors.push(i);
        } 
    }
    console.log(divisors.join(", "));
    // return divisors.join(", ");
    return divisors.length

}

getDivisors(4);