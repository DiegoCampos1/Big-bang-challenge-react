import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="containerSuperior">
        <div className="logoSocial"></div>
        <div className="institucional"></div>
        <div className="institucional"></div>
        <div className="loja"></div>
        <div className="atendimento"></div>
        <div className="newsletter"></div>
      </div>
      <hr></hr>
      <div className="containerInferior">
        <div className="cnpj"></div>
        <div className="pagamento"></div>
        <div className="siteSeguro"></div>
        <div className="FAQ"></div>
        <div className="bigBang"></div>
      </div>
    </div>
  );
};

export default Footer;
