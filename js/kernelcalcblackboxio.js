// https://www.useblackbox.io/search
function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function main() {
  console.log("Bienvenido a la calculadora");
  while (true) {
    console.log("¿Qué operación quieres realizar?");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    opcion = parseInt(input());
    if (opcion == 1) {
      a = parseInt(input("Introduce el primer número: "));
      b = parseInt(input("Introduce el segundo número: "));
      console.log("El resultado es:", sumar(a, b));
    } else if (opcion == 2) {
      a = parseInt(input("Introduce el primer número: "));
      b = parseInt(input("Introduce el segundo número: "));
      console.log("El resultado es:", restar(a, b));
    } else if (opcion == 3) {
      a = parseInt(input("Introduce el primer número: "));
      b = parseInt(input("Introduce el segundo número: "));
      console.log("El resultado es:", multiplicar(a, b));
    } else if (opcion == 4) {
      a = parseInt(input("Introduce el primer número: "));
      b = parseInt(input("Introduce el segundo número: "));
      console.log("El resultado es:", dividir(a, b));
    } else {
      console.log("Opción no válida");
    }

  }
}
if (require.main === module) {
  main();
}
