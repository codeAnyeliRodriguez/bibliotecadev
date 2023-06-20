function saludar(nombre){
  return`Hola ${nombre}`;
}

function saludarHolaMundo(){
  return'Hola, Mundo'
}
// eportacion
/* module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;
 */
// sintaxis alternativa
module.exports={
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo
};