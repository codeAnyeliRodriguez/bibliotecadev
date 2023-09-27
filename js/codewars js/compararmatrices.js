/* Para comparar cada elemento de dos matrices en JavaScript, puedes usar bucles for anidados para iterar sobre cada elemento de las matrices y compararlos. Aquí te muestro un ejemplo de implementación:

javascript
 */
function compararElementosMatrices(A, B) {
  if (A.length !== B.length || A[0].length !== B[0].length) {
    // Las matrices tienen dimensiones diferentes
    console.log("Las matrices tienen dimensiones diferentes.");
    return;
  }
  
  // Compara cada elemento de las matrices
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === B[i][j]) {
        console.log(`El elemento en la posición (${i}, ${j}) es igual en ambas matrices: ${A[i][j]}`);
      } else {
        console.log(`El elemento en la posición (${i}, ${j}) es diferente en ambas matrices: ${A[i][j]} y ${B[i][j]}`);
      }
    }
  }
}

// Ejemplo de uso
const A = [[1, 2], [3, 4]];
const B = [[1, 2], [3, 5]];

compararElementosMatrices(A, B);
/* 
En esta implementación, primero comprobamos si las matrices tienen las mismas dimensiones. Si no las tienen, mostramos un mensaje de error indicando que las matrices tienen dimensiones diferentes y salimos de la función.

Si las matrices tienen las mismas dimensiones, iteramos sobre cada elemento de las matrices usando bucles anidados. Si encontramos elementos diferentes, mostramos un mensaje indicando que el elemento en la posición (i, j) es diferente en ambas matrices, junto con los valores correspondientes de ambas matrices. Si los elementos son iguales, mostramos un mensaje indicando que el elemento en la posición (i, j) es igual en ambas matrices, junto con su valor.

Ten en cuenta que en este ejemplo, la función no devuelve nada. En lugar de eso, muestra los resultados directamente en la consola con la función console.log(). Si quieres realizar otras operaciones con los elementos de las matrices, puedes modificar la implementación en consecuencia.
 */