import React from 'react';
import './style.css';
import arrow from '../../images/arrow.png';
import produtosRecomendados from '../../store/products';

const Inicio = () => {
  return (
    <div>
      <div className="inicioContainer">
        <div className="elipse">O que é Namah?</div>
        <div className="centralContainer">
          <div className="baner">
            <div className="banerLetters">
            <h4>Lorem, ipsum dolor sit amet</h4>
            <p>Lorem, ipsum dolor sit amet</p>
            <button className="buttonLorem" type="button">
              LOREM IPSUM
            </button>
            </div>
          </div>
          <div className="bannersLinks">
            <div className="biggerBannerYoga">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              <div>
              <a className="linkBigBanner" href="/">VIAGEM</a>
              <a className="linkBigBanner" href="/">por Fulano de Tal</a>
              </div>
            </div>

            <div className="MediumBannerYoga">
              <a href="/">Namahcast #122</a>
              <h3>Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli...</h3>
            </div>
            <div className="imersaoPicture">
              <a href="/">Curso - 04 ABR</a>
              <h3>Imersão Vinyasa Flow</h3>
            </div>
            <div className="CondiciondorPicture">
              <h3>Condicionador Namah</h3>
              <a href="/">compre agora</a>
            </div>
            <div className="banerShop">
              <div className="recomendacoes">
                <p>Nossos especialistas</p>
                <h5>Recomemendam</h5>
              </div>
              {produtosRecomendados.map((product) => (
                <div className="productClass">
                  <img className="imageProduct" src={product.picture} alt="ImagemProduto" />
                  <p className="paragrafoDestaque">{product.nome}</p>
                  <p className="ParagrafoDescricao">{product.descricicao}</p>
                  <p className="paragrafoValor">{product.valor}</p>
                </div>
              ))}
              {produtosRecomendados.map((product) => (
                <div className="productClass">
                  <img className="imageProduct" src={product.picture} alt="ImagemProduto" />
                  <p className="paragrafoDestaque">{product.nome}</p>
                  <p className="ParagrafoDescricao">{product.descricicao}</p>
                  <p className="paragrafoValor">{product.valor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="elipseImg">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
