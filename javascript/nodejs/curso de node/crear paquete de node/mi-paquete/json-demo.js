/* const curso = require('./curso.json');
console.log(curso.temas);
 */

// console.log(typeof curso);
// iniciar paquete con proceso
// npm init
// iniciar paquete sin proceso
// npm init --yes

// convertir a JSON

let infocurso ={
  "titulo":"aprende Node.js",
  "numVistas": 45642,
  "numLikes":21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
}
// objeto -> cadena de caracters
// Cadena de caracteres en formato Json
let infocursojson = JSON.stringify(infocurso);

console.log(infocursojson);
console.log(typeof infocursojson);

// Cadena de caracteres -> objeto
let infocursoobjeto = JSON.parse(infocursojson);
console.log(infocursoobjeto);
console.log(typeof infocursoobjeto);

console.log(infocursoobjeto.titulo)
