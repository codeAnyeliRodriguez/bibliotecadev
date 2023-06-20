/* ompruebe si una cadena tiene la misma cantidad de 'x' y 'o'. El método debe devolver un valor booleano y no distinguir entre mayúsculas y minúsculas. La cadena puede contener cualquier carácter.

Ejemplos de entrada/salida:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

// contar numero x en un string
// contar los 0 en el string
// contar las x mayusculas
// comparar las x tambien en mayusculas y los 0

// configuracion
let str = 'xX oO pp'

// reto
/* function xo(str){
let  contador1  = 0;
let contador2 = 0;

  for(let i = 0; i < str.length; i++){
    if(str.charAt(i).toUpperCase() == 'x'.toUpperCase()){
      contador1++;
    }
  }
  
for(let i = 0; i < str.length; i++){
  if(str.charAt(i).toUpperCase() == 'o'.toUpperCase()){
   contador2++;
  }
}
if(contador1 == contador2){
  return true
}else{
  return false
}
} */
console.log(xo(str))

// otros codigos
/* function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
} */

