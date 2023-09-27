const http = require('http');
const servidor = http.createServer((req, res) => {
  console.log('===> res (respuesta)');
  // console.log('===> req (Solicitud)');
  // console.log(req)
 /*  console.log(req.url);//escribir /freecodecamp la / significa camino
  res.end('Hola, mundo');
  console.log(req.method);//get
  console.log(req.headers);*/
// console.log(res);
// console.log(res.statusCode); //200 OK
/* res.statusCode = 404;
console.log(res.statusCode); */ //404 Not Found
res.setHeader('content-type', 'application/json');
console.log(res.getHeaders());

res.end('Hola, mundo');
}); 

const puerto = 3000;
servidor.listen(puerto, () =>{
  console.log(`El servidor esta esta escuchando en el puerto ${puerto}...`);
})

// REST client para probar servidor y api realizando solictudes de distintos tipos y con diferentes verbos http