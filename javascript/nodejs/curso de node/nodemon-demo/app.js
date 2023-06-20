// instalar nodemon:
// npm install -g nodemamon

// ejecutar aplicacion:
// nodemon <aplicacion>
const http = require('http');
const servidor = http.createServer((req, res) =>{
  res.end('Estoy aprendiendo nodejs');
});

const PUERTO = 3000;

servidor.listen(PUERTO,() =>{
  console.log(`El servidor es escuchando en el puerto ${PUERTO}`)
});