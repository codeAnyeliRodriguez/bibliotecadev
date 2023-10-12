const figlet = require("figlet");

/* figlet("Hello Word!", (err, result)=>{
  console.log(err || result);
}); */

figlet("Anyeli", {
  font: '3D-ASCII',
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
}, (err, result) => {
  console.log(err || result);
})
