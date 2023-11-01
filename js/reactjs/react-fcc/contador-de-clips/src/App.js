import './App.css';
import Boton from './componentes/Boton.js'
import freecodecampLogo from './imagenes/freecodecamp-logo.png';
import Contador from './componentes/Contador.js'

function App() {
	
	const manejarClic = () =>{
		console.log('clic');
	}
	
	const reiniciarContador = () =>{
		console.log('reiniciar');
	}
	
  return (
    <div className='App'>
	  <div className='freecodecamp-logo-contenedor'>
		<img
		className='freecodecamp-logo'
		src={freecodecampLogo}
		alt='Logo de freecodecamp'/>
	  </div>
	  
	  <div className="contendor-principal">
	  <Contador numClics = '5' />
	  
	  <Boton 
	  texto='Clic'
	  esBotonDeClic={true} 
	  manejarClic={manejarClic} />
	  
	  <Boton
	  texto = 'Reiniciar'
	  esBotonDeClic={false}
	  manejarClic={reiniciarContador} />
	  
	  </div>
    </div>
  );
}

export default App;
