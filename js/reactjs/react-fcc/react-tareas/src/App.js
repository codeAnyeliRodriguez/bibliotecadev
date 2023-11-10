import './App.css';
import fccLogo from './imagenes/freecodecamp-logo.png';
import TareaForm from './componentes/TareaForm';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className='app-tareas'>
	<div className='fcc-logo-contenedor'>
		<img src={fccLogo} 
		alt='' 
		className='fcc-logo' />
	</div>
	<div className="tareas-lista-p">
		<h1>Mis Tareas</h1>
		<ListaDeTareas />
	</div>
    </div>
  );
}

export default App;
