var check = document.querySelector(".check");
check.addEventListener("click",idioma);

function idioma(){
  // console.log(check.checked);
  let id = check.checked;
  if(id==true){
    location.href="es/index.html";
  }else{
    location.href="../index.html";
  }
}