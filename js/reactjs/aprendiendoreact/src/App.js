import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes
import MiComponente from './components/MiComponente';

function holamundo(nombre,edad){
  var presentacion = (<div>
    <h2>Hola, soy {nombre}</h2>
    <h3>tengo{edad} años</h3>
  </div>);


  return presentacion;
}
function App() {
  var nombre ='Anyeli Rodriguez';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Holii mundo soy Anyeli!!.
        </p>
        {holamundo(nombre, 10)}
        
      </header>
      <section className='componentes'>
        <MiComponente />
      </section>
    </div>
  );
}

export default App;
