import React from 'react';
import styled from 'styled-components';

//Styled component
const Titulo = styled.div`
  text-align: center;
  background-color: #017cca;
  height: 5rem;
  color: white;
  margin-top: 0px;
  font-size: 48px;
 
`;


const Header = () => {
  return ( 
    <Titulo>
      El Tiempo
    </Titulo>
   );
}
 
export default Header;