import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Error = ({vertiempo}) => {
  
  return ( 
    
    <Fragment>
    {vertiempo ? 
    <div className="card-panel red lighten-2">
      <span>La ciudad no existe</span>
    </div> 
    : null}  
    
    </Fragment>
   );
}

Error.propTypes = {
  vertiempo: PropTypes.bool.isRequired
}
 
export default Error;