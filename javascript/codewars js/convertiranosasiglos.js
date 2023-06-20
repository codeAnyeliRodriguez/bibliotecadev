/* Introducción
El primer siglo abarca desde el año 1 hasta el año 100 inclusive , el segundo siglo - desde el año 101 hasta el año 200 inclusive , etc.

Tarea
Dado un año, devuelve el siglo en el que se encuentra.

Ejemplos
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */

// notas
// Math.ceil() se utiliza para redondear hacia arriba
// reto
/* function century(year){
  let divide = year /100;
  let redon = Math.ceil(divide)
  console.log(redon)
  return redon;
}
 */
century(1700)

// otros codigos
function century(year){
  return Math.ceil(year/100)
}