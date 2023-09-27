const imagetoascii = require("image-to-ascii");

imagetoascii('https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Sphere_-_Esfera.svg/1200px-Sphere_-_Esfera.svg.png',{
  colored: false
},(err, rendered)=>{
  console.log(err || rendered);
})