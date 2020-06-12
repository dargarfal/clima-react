import React, {Fragment, useState} from 'react';
import styled from 'styled-components';

//Components
import Header from './components/Header';
import Formulario from './components/Formulario';
import Tiempo from './components/Tiempo';
import Error from './components/Error';

const Contenedor = styled.div`
  background-color: #039ef2;
  padding: 3rem 0 1px 0;
`;

function App() {

  const [tiempo, setTiempo] = useState({});
  const [validaciudad, setValidaCiudad] = useState(true);
  const [vertiempo, setVerTiempo] = useState(false);

  return (
    <Fragment>
      <Header / >
      <Contenedor>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                setTiempo={setTiempo}
                setValidaCiudad={setValidaCiudad}
                setVerTiempo={setVerTiempo}
              />
            </div>
            <div className="col s12 m6">
              {!validaciudad || !vertiempo ? <Error vertiempo={vertiempo}/> : <Tiempo tiempo={tiempo}/>}
              
            </div>
          </div>  
        </div>   
      </Contenedor>
    </Fragment>
  );
}

export default App;
