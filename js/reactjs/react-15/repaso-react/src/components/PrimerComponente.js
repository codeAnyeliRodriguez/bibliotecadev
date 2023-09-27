import React,{useState} from "react";

export const PrimerComponente = () => {
  // let nombre = 'Anyeli';
  let web = 'codeanyelirodriguez.github.io';
 const [nombre, setNombre] = useState('Anyeli');

  let cursos = [
    'curso 1',
    'curso 2',
    'curso 3',
    'curso 4'
  ];

  const cambiarNombre =(nuevoNombre)=>{
    setNombre(nuevoNombre)
  }

  return (
    <div>
      <p>PrimerComponente</p>
      <p>Este es un texto en el componente</p>
      <p>Mi nombre es : <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
      <p>Mi web es : {web}</p>

    <input type="text" onChange={e => cambiarNombre(e.target.value)}></input>

    <button onClick={e =>{ console.log('El valor de tu estado es: ', nombre);}}>Mostrar valor de estado</button>


      <button onClick={e => cambiarNombre('Anyeli rodriguez web')}>cambiar nombre</button>

      <h2>cursos</h2>
      <ul>
        {
          cursos.map((cursos, indice) =>{
            return(<li key={indice}>
              {cursos}
            </li>);
          })
        }
      </ul>
    </div>
  )
}