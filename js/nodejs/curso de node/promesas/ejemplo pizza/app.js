/* const estatuspedido = () => {
  const estatus = Math.random() < 0.8;
  console.log(estatus);
  return estatus;
}; */

/* for(let i = 0; i < 10; i++){
  console.log(estatuspedido());
} */

const estatuspedido = () => {
  return Math.random() < 0.8;
   
};

const mipedidodepizza = new Promise((resolve, reject)=> {
  setTimeout(()=>{
if (estatuspedido()){
  resolve('pedido exitoso!. Su pizza esta en camino');
}else{
  reject('Ocurrio un error. Por favor intente nuevamente');
}
  },3000);
});
/* 
const manejarpedido = (mensajeconfirmacion) =>{
  console.log(mensajeconfirmacion);
};

const rechazarpedido = (mensajedeerror) => {
  console.log(mensajedeerror)
}

mipedidodepizza.then(manejarpedido,rechazarpedido);
 */

// sintaxis alternativa sin .catch()
/* mipedidodepizza
 .then((mensajeconfirmacion)=>{
  console.log(mensajeconfirmacion);
 })
.then(null,(mensajedeerror) => {
  console.log(mensajedeerror);
});
 */
// sitaxis alternativa con .catch()

mipedidodepizza
 .then((mensajeconfirmacion)=>{
  console.log(mensajeconfirmacion);
 })
.catch((mensajedeerror) => {
  console.log(mensajedeerror);
});

// alternativa para logicas extensas
const manejarpedido = (mensajeconfirmacion)=>{
  console.log(mensajeconfirmacion);
 };

 const manejarrechazo = (mensajedeerror) => {
  console.log(mensajedeerror);
};

mipedidodepizza.then(manejarpedido).catch(manejarrechazo);
