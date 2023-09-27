/* Dada una cadena de dígitos, debe reemplazar cualquier dígito debajo de 5 con '0' y cualquier dígito 5 y superior con '1'. Devuelve la cadena resultante.

Nota: la entrada nunca será una cadena vacía

 */
// con Array.from()
function fakeBin(x) {
  let cont = ''
  let arr = Array.from(x);
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] >= 5) {
      cont += '1'
    } else {
      cont += '0'
    }
  }
  return cont
}
fakeBin('123456789')

// con condicionales switch
/* function fakeBin(x) {
  let count = '';
  let toarr = Array.from(x);
  for (let i = 0; i < toarr.length; i++) {
    switch (toarr[i]) {
      case '1':
      case '2':
      case '3':
      case '4':
        count += '0'
        break;
      default:
        count += '1'
        break;
    }
  }
  return count;
}
fakeBin('123456789') */

// con .split(' ')
/* function fakeBin(x) {
  let cont = '';
  let toarr = x.split('');
  // console.log(toarr);
  for (let i = 0; i < toarr.length; i++) {
    // console.log(toarr[i]);
    if(toarr[i] >= 5){
      cont += '1'
    }else {
      cont+='0'
    }
  }
  // console.log(typeof cont);
  return cont
}
fakeBin('1234567') */