import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Formulario = ({setTiempo, setValidaCiudad, setVerTiempo}) => {

  const [datos, setDatos] = useState({
    ciudad: '',
    pais: ''
  });

  function leerDatos(e){
    setDatos({
      ...datos, //-> Toma una copia actual de lo que hay en el state
      [e.target.name] : e.target.value
    })
  }

  const [error, setError] = useState(false);

  const consultarTiempo = (e) => {
    e.preventDefault();
    
    if(datos.ciudad === '' || datos.pais === ''){
      setError(true);
      return;
    }else{
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + datos.ciudad +','+ datos.pais +'&appid=695c3e7000ccd5a79c658c2305b9d3bd';
      
      setError(false);

      fetch(url)
        .then(res => res.json())
        .then(data => {
        
          const status = parseInt(data.cod);
          
          switch (status) {
            case 404:
              setValidaCiudad(false);
              console.log(status);
              break;
            case 200:
              setValidaCiudad(true);
              const temperatura = {
                temp_actual : data.main.temp,
                temp_min : data.main.temp_min,
                temp_max : data.main.temp_max,
                imagen: data.weather[0].icon,
                name: data.name  
              }
              setTiempo(temperatura);
              console.log(temperatura.imagen);
              break;
            default:
              break;
          }
        })
        .catch(err => console.log(err))
       
        setVerTiempo(true);  
    }
  
    

  } 

  return ( 
    

    <form onSubmit={consultarTiempo}>
      <div>
      {error ? 
      <div className="card-panel red lighten-2"><span>Todos los campos deben ser llenados </span> </div> 
      : null}
    </div>
      <div className="input-field col s12">
        <input 
          type="text"
          name="ciudad"
          id="ciudad"
          onChange={leerDatos}
        />
        <label htmlFor="ciudad">Ciudad:</label>
        <div className="input-field col s12">
          <select
            name="pais"
            id="pais"
            onChange={leerDatos}
          >
            <option value="">-- Seleccione un país -- </option>
            <option value="CU">Cuba</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="pais">Pais:</label>
        </div>
        <div>
          <button 
            className="amber-effect lighten-2 btn-large"
            type="submit"
            >Consultar</button>
        </div>
      </div>
    </form>
   );
}

Formulario.propTypes = {
  setTiempo: PropTypes.func.isRequired,
  setValidaCiudad: PropTypes.func.isRequired,
  setVerTiempo: PropTypes.func.isRequired
}

export default Formulario;