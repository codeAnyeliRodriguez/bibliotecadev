const figlet = require("figlet");

/* figlet("Hello Word!", (err, result)=>{
  console.log(err || result);
}); */

figlet("Hola", {
  font: 'ghost',
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
}, (err, result) => {
  console.log(err || result);
})
