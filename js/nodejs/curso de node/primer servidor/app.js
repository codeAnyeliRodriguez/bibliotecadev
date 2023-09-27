const http = require('http');
const servidor = http.createServer((req, res) =>{
  // proceso
  // console.log('Solicitud nueva');
  res.end('Hola, mundo');
});

const puerto = 3000;  //nombre de constantes en mayuscula por convencion: PUERTO

servidor.listen(puerto, () =>{
  console.log(`El servidor esta escuchando en http://localhost:${puerto}...`)
});

// node app.js
// ctrl + c