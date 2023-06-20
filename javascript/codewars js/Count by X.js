/* DESCRIPCIÓN:
Cree una función con dos argumentos que devolverá una matriz de los primeros nmúltiplos de x.

Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

Devuelve los resultados como una matriz o lista (según el idioma).

Ejemplos
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10] */

function countBy(x,n){
  let z = [];
  // contar con un for
  for (let i = 1; i <= n ; i++){
    z.push(x * i)
  }
  // return z;
  console.log(z)
}

countBy(8,2)

