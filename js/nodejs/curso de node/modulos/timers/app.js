// modulo timers
/* setTimeout()
setImmediate()
setInterval() */

// setTimeout(funcion, retraso, argumento);
/*  
function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`)
}
 */
// Higher-order programming
// setTimeout(mostrarTema, 5000, 'Node.js');
/* 
function sumar(a, b){
  console.log(a + b);
}

setTimeout(sumar, 10000, 5, 6) */
// setImmediate()
// setImmediate(funcio, argumento1, argumento2)
/* 
function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`)
}
 
console.log('Antes de setImmediate')
setImmediate(mostrarTema, 'Node.js')
console.log('Despues de setImmediate')
 */
// setInterval()
// setInterval(funcion, intervalo, arg1, arg2);
/* function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 1500, 'Node.js'); */
// ctel + c = detiene el programa

function sumar(a, b){
  console.log(a + b);
}

setInterval(sumar, 1500, 3, 4)