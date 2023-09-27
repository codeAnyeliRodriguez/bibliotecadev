import React from "react";

class MiComponente extends React.Component{

render(){
  let receta ={
    Nombre: 'pizza',
    ingredientes:['tomate','queso','jamon'],
    calorias:400
  };

    return(
    <React.Fragment>
      <div className="MiComponente">
    <h1>{'Reseta: '+ receta.Nombre}</h1>
    <h2>{'Calorias: '+ receta.calorias}</h2>
    {
      receta.ingredientes.map((ingrediente, i)=>{
        console.log(ingrediente)
        return(
          <li key={i}>
            {ingrediente}
          </li>
        )
      })
    }
    <hr />
    </div>
    </React.Fragment>
  );
}

}

export default MiComponente;