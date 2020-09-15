import React from 'react';
import './style.css';
import arrow from '../../images/arrow.png';

const Inicio = () => {
  return (
    <div>
      <div className="inicioContainer">
        <div className="elipse">O que é Namah?</div>
        <div className="baner">
          <h4>Lorem, ipsum dolor sit amet</h4>
          <p>Lorem, ipsum dolor sit amet</p>
          <p>Lorem, ipsum dolor sit amet</p>
        </div>
        <div className="elipseImg"><img src={arrow} alt=""/></div>

      </div>
    </div>
  );
};

export default Inicio;
