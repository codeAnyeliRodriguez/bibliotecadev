const http = require('http');
const {infoCursos} = require('./cursos');

servidor = http.createServer((req,res) =>{
  const {method} = req;
  switch(method){
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res)
    default:
      res.statusCode = 501;
      res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`)
  }
});
function manejarSolicitudGET(req,res){
  const path = req.url;

  console.log(res.statusCode); //200 ok

  if(path === '/'){
    res.writeHead(200, {'Content-type': 'application/json'});
    // res.statusCode = 200;
  return  res.end('Bienvenidos a mi primer servidor y API con NOde.js');
  }else if(path === '/cursos'){
    // res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos));
  }else if(path === '/cursos/programacion'){
    // res.statusCode =200;
    return res.end(JSON.stringify(infoCursos.programacion))
  }

  res.statusCode = 404;
   res.end('El recurso solicitado no existe...');
  }
   
   function manejarSolicitudPOST(req, res){
  const path = req.url;

     if(path === '/cursos/programacion'){
      let cuerpo = '';

      req.on('data', contenido =>{
        cuerpo += contenido.toString();
      });

      req.on('end',() =>{
        console.log(cuerpo);
        console.log(typeof cuerpo);
        
// convertir a un objeto de JavaScript
        cuerpo = JSON.parse(cuerpo);

        console.log (typeof cuerpo);
        console.log(cuerpo.titulo)

        res.end('El servidor recibio una solicitud POST para /cursos/programacion')
      });

      //  return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
      }
    }
    const PUERTO= 3000;

servidor.listen(PUERTO,() =>{
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});