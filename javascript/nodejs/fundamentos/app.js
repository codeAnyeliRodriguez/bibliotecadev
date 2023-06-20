//const frutas=['platanos', 'manzana', 'fresa', 'ciruelas'];//

const {frutas, dinero}= require('./frutas.js');
//const dinero=require('./fruta.js')//
//frutas. forEach(item => {//


frutas.forEach((fruta) => {
    console.count(fruta);
});

  // console.log(item)//
  //console.count(item)//

  console.log("mi dinero actual:",dinero);
// cowsay
const cowsay = require('cowsay');
console.log(cowsay.say({
  text : "holii mundo , I'm a moooodule",
  e : "oO",
  T : "U "
}));

//documentacion//
//https://bluuweb.github.io/node/01-fundamentos/#exportaciones//

// comandos
// version: node -v
// ejecutar: node app.js
// package.json: npm init -y
// instalar paquete: npm install <package-name>
// actualizar: npm update
// atualizar el paquete indicado: mpm update <package-name>
//global:  -g

// instalar paquete: npm i cowsay 
// instalar en el proyecto:  npm i cowsay
// instalar de manera global: npm install -g cowsay
// mensajes ramdon: cowsay JavaScript FTW!
// cowthink node.js is cool               
//si no esta instalado: npx cowsay "Hola mundo"