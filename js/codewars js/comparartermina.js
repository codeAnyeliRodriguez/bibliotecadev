
// substring() : para extraer las subcadenas que contienen los últimos dos caracteres de cada cadena.

// substring( -2)

/* function compararultimos2(cadena1, cadena2){
  var ultimosdos1 = cadena1.substring(cadena1.length - 2);
  var ultimosdos2 = cadena2.substring(cadena2.length - 2);
  return ultimosdos1 == ultimosdos2;
}
primera = 'abc';
segunda = 'bc';
compararultimos2(primera, segunda);
 */
// solution
// function solution(str, ending){
//   return str.substring(str.length -2) == ending.substring(ending.length -2)
// }
// primera = 'abcde'
// segunda = 'de'
// solution(primera, segunda)

// con include
/* function ultimas(a,b){
  return a.includes(b)
}

primera = 'abcde'
segunda = 'de'
ultimas(primera, segunda) */