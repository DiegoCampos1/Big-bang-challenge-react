import React from 'react';
import './style.css';
import elipse from '../../images/elipse.png';

const Inicio = () => {
  return (
    <div>
      <div className="inicioContainer">
        <img src={elipse} alt="elipse" />
        <div className="baner">
          <h4>Lorem, ipsum dolor sit amet</h4>
          <p>Lorem, ipsum dolor sit amet</p>
          <p>Lorem, ipsum dolor sit amet</p>
        </div>
        <img src={elipse} alt="elipse" />
      </div>
    </div>
  );
};

export default Inicio;
