/* En esta pequeña tarea, se le da una cadena de números separados por espacios y tiene que devolver el número más alto y el más bajo. */

/*
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
 */

/* Todos los números son válidos Int32, no es necesario validarlos.
Siempre habrá al menos un número en la cadena de entrada.
La cadena de salida debe ser dos números separados por un solo espacio, y el número más alto es el primero. */

let numbers = "-1 1 2 3 4 5 6";
function highAndLow(numbers) {
numero = numbers.split(' ').map(Number);
return Math.max.apply(0, numero)+ ' ' + Math.min.apply(0, numero);
}

console.log(highAndLow(numbers));