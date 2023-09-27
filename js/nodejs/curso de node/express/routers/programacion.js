const express = require('express');
const {programacion} = require('../datos/cursos.js').infoCursos
const routerProgramacion = express.Router();

// middleware
routerProgramacion.use(express.json())

routerProgramacion.get('/',(req, res) =>{
  res.send(JSON.stringify(programacion))
});
// parametros
routerProgramacion.get('/:lenguaje',(req, res) =>{
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
  if(resultados.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`);
  }
  // ver los parametros query
  // http://localhost:3000/api/cursos/programacion/python?ordenar=vistas
console.log(req.query.ordenar)

// ordenar por numero de vistas
 // Ordenar por número de vistas
 if (req.query.ordenar === 'vistas') {
  res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
}else{
  res.send(JSON.stringify(resultados))
}
});
// GET
routerProgramacion.get('/:lenguaje/:nivel', (req, res) =>{
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel );
    if(resultados.length === 0){
      return res.status(204).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
      // return res.status(404).end() //respuesta vacia
    }
    // res.send(JSON.stringify(resultados));// puede ser .send() .json() .send(JSON.stringify())
    res.json(resultados)
});
// metodo http POST
routerProgramacion.post('/',(req, res) =>{
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));// puede ser .send() .json() .send(JSON.stringify())
});
// PUT
routerProgramacion.put('/:id',(req, res) =>{
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id)
if(indice >= 0){
  programacion[indice] = cursoActualizado;
}
res.send(programacion)// puede ser .send() .json() .send(JSON.stringify())
})

// PATCH
routerProgramacion.patch('/:id', (req, res) => {
  const infoNueva = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoNueva);
  }
  res.json(programacion);// puede ser .send() .json() .send(JSON.stringify())
});

// DELETE
routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    programacion.splice(indice, 1);
  }
  res.json(programacion);// puede ser .send() .json() .send(JSON.stringify())
});


module.exports = routerProgramacion;

// aplicar codigos de estado
