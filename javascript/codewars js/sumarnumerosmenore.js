/* Para encontrar los dos números más pequeños de un array y luego sumarlos, se puede seguir el siguiente algoritmo:

1.Inicializar dos variables 'min1' y 'min2' con los dos primeros elementos del array.
2.Recorrer el array desde el tercer elemento hasta el final.
3.En cada iteración, comparar el elemento actual con 'min1' y 'min2' y actualizarlos si corresponde. Si el elemento actual es menor que 'min1', actualizar 'min1' con el valor actual y mover 'min1' a 'min2'. Si el elemento actual es menor que 'min2' pero mayor o igual que 'min1', actualizar 'min2' con el valor actual.
Sumar 'min1' y 'min2' y devolver el resultado. */

/* En esta implementación, se utiliza destructuración de arrays para intercambiar los valores de min1 y min2 si min2 es menor que min1. Luego, se utiliza un bucle for para recorrer el array y actualizar min1 y min2 en cada iteración según corresponda. Finalmente, se devuelve la suma de min1 y min2. */

function sumarpeques(array) {
  let min1 = array[0];
  let min2 = array[1];
  if (min2 < min1) {
    [min1, min2] = [min2, min1];
  }
  for (let i = 2; i < array.length; i++) {
    if (array[i] < min1) {
      [min1, min2] = [array[i], min1];
    } else if (array[i] < min2) {
      min2 = array[i];
    }
  }
  return min1 + min2;
}
arr =[1,2,3,4,5,6]
sumarpeques(arr)