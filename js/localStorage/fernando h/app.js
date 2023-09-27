// info: https://www.youtube.com/watch?v=hb8O0qRqiSk

// guardar_localStorage();
obtener_localstorage();
function obtener_localstorage(){

  if(localStorage.getItem("nombre")){
// se que existe el nombre en localStorage
let nombre = localStorage.getItem("nombre");
  let persona = JSON.parse(localStorage.getItem("persona"));

  // console.log(nombre);
  console.log(persona);
}else{
  console.log("No hay entradas en el local storage");
}

  }
  

function guardar_localStorage(){
  let persona ={
    nombre: "Anyeli",
    edad: 22,
    correo:"anyelib.agent@gmail.com",
    coords:{
      lat: 80,
      log: -80
    }
  };
  let nombre = "gatita";

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("nombre", JSON.stringify(persona));

}