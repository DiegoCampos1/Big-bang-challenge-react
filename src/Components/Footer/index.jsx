import React from 'react';
import './style.css';
import american from '../../images/american.png';
import banco3 from '../../images/banco3.png';
import cadeado from '../../images/cadeado.png';
import groupSocial from '../../images/groupSocial.png';
import visa from '../../images/visa.png';
import master from '../../images/master.png';
import boleto from '../../images/boleto.png';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="containerSuperior">
        <div className="logoSocial">
          <img src={groupSocial} alt="logo" />
        </div>
        <div className="institucional">
          <p className="titulosFooter">institucional</p>
          <p className="paragrafoSuperior">Sobre Nós</p>
          <p className="paragrafoSuperior">Contato</p>
        </div>
        <div className="loja">
          <p className="titulosFooter">Loja</p>
          <p className="paragrafoSuperior">Cadastre-se</p>
          <p className="paragrafoSuperior">Área do lojista</p>
        </div>
        <div className="atendimento">
          <p className="titulosFooter">Atendimento</p>
          <p className="paragrafoSuperior">hello@espaconamah.com.br</p>
          <p className="paragrafoSuperior">(31) 2515 6200</p>
        </div>
        <div className="newsletterFooter">
          <p className="titulosFooter">Assine nossa Newsletter</p>
          <div className="containerInput">
            <input className="inputFooter" type="e-mail" placeholder="Seu endereço de e-mail" />
            <button className="ButtonFooter" type="button">
              ASSINAR
            </button>
          </div>
        </div>
      </div>
      <hr className="hrFooter" />
      <div className="containerInferior">
        <div className="cnpj">
          <p className="paragrafoInferior">
            © 2020 Espaço Namah. Todos os direitos reservados. CNPJ: 19.035.854/0001-31.
          </p>
        </div>
        <div className="pagamento">
          <p className="paragrafoInferior">Formas de pagamento:</p>
          <img className="imagemPagamento" src={visa} alt="visa" />
          <img className="imagemPagamento" src={master} alt="mastercard" />
          <img className="imagemPagamento" src={banco3} alt="Dinners" />
          <img className="imagemPagamento" src={american} alt="American Express" />
          <img className="imagemPagamento" src={boleto} alt="Boleto bancario" />
        </div>
        <div className="siteSeguro">
          <img className="imagemSiteSeguro" src={cadeado} alt="Site Seguro" />
          <p className="paragrafoInferior">Site seguro</p>
        </div>
        <div className="FAQ">
          <a className="linkFooter" href="/">
            Dúvidas Frequentes | Políticas da Loja
          </a>
        </div>
        <div className="bigBang">
          <p className="paragrafoInferior">
            Site por
            <strong> BIG BANG SHOP</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
