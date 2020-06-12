import React, {Fragment} from 'react';
import {convertirTemperatura} from '../helpers/helper'
import PropTypes from 'prop-types';


const Tiempo = ({tiempo}) => {
  
  const temp = convertirTemperatura(tiempo.temp_actual).toFixed(1);
  const temp_max = convertirTemperatura(tiempo.temp_max).toFixed(1);
  const temp_min = convertirTemperatura(tiempo.temp_min).toFixed(1)
  const urlImagen = 'http://openweathermap.org/img/wn/' + tiempo.imagen + '@2x.png';
  console.log(urlImagen);
  

  return ( 
    
    <Fragment>
           <div className="card-panel white col s12">
            <div className="black-text">
              <h2>El clima en {tiempo.name} es:</h2>
              <p className="temperatura">{temp} &#x2103;</p>
              <div className="imagen"><img src={urlImagen}></img></div>
              
              <p>Temperatura Máxima: {temp_max} &#x2103;</p>
              <p>Temperatura Mínima: {temp_min} &#x2103;</p>
            </div>    
           </div>     
    </Fragment>
   );
}

Tiempo.propTypes = {
  tiempo: PropTypes.object.isRequired
}
 
export default Tiempo;