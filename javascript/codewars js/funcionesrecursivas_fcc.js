// funcion recursiva
// determinar factorial utilizando function recursiva
function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

/* En este ejemplo, la función factorial toma un número n como argumento. Si n es igual a 0, se alcanza el caso base y la función devuelve 1. En caso contrario, la función se llama a sí misma con n - 1 y multiplica el resultado por n. Esto se repite recursivamente hasta alcanzar el caso base.

Puedes probar este código en un entorno de ejecución de JavaScript, como el navegador o Node.js, y verificar que el resultado del factorial de 5 es 120.
 */
// comprobar
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// utiliza funcion recursiva para crear una cuenta regresiva
/* Hemos definido una función llamada countdown con un parámetro (n). La función debe usar recursión para devolver un arreglo conteniendo los n enteros hasta 1 basado en el parámetro n. Si la función es llamada con un número menor a 1, la función debe devolver un arreglo vacío. Por ejemplo, llamar esta función con n = 5 debe devolver el arreglo [5, 4, 3, 2, 1]. Tu función debe usar recursión llamándose a sí misma y no debe usar bucles de ningún tipo. */
function countdown(n){
  if(n < 1){
    return []
  }else{
  const countArray = countdown(n-1);
  countArray.unshift(n);
  return countArray
  }
}
console.log(countdown(5));

// usa recursion para crear un rando de numeros
/* Hemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver un arreglo de enteros que comienza con el número representado por el parámetro startNum y termina con el número representado por el parámetro endNum. El número inicial será siempre menor o igual que el número final. Tu función debe utilizar recursión, llamándose a sí misma, y no utilizar bucles de ningún tipo. También debe funcionar en el caso que startNum y endNum sean iguales.
 */
function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
    return[]
  }else{
    const start = rangeOfNumbers(startNum, endNum -1);
    start.push(endNum);
    return start
  }
};

console.log(rangeOfNumbers(5,20))
