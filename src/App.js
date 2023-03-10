import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {+
    setNumClicks(numClicks + 1)
  }

  const reiniciarClick = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='logo-contenedor' >
        <h1 className='logo'>LOGO DE PRUEBA</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClicks={numClicks}
        ></Contador>
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={reiniciarClick}
        />
      </div>
    </div>
  );
}

export default App;
