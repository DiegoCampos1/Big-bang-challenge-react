import React from 'react';
import './style.css';
import arrow2 from '../../images/arrow2.png';
import run from '../../images/run.png';
import musculacao from '../../images/musculacao.png';

const Blog = () => (
  <div className="align">
    <div className="container">
      <div className="bannersUp">
        <div className="BanerYoga">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
          <div>
            <a className="linkBigBanner" href="/">
              VIAGEM
            </a>
            <a className="linkBigBanner" href="/">
              por Fulano de Tal
            </a>
          </div>
        </div>
        <div className="BanerMusculacao">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
          <div>
            <a className="linkBigBanner" href="/">
              DESENVOLVIMENTO PESSOAL
            </a>
            <a className="linkBigBanner" href="/">
              por Fulano de Tal
            </a>
          </div>
        </div>
      </div>
      <div className="bannersDown">
        <div>
          <img src={run} alt="run" />
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <a className="linkBigBanner" href="/">
            VIAGEM
          </a>
          <p className="bannersDownP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna...
          </p>
        </div>
        <div>
          <img src={musculacao} alt="musculacao" />
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <a className="linkBigBanner" href="/">
            VIAGEM
          </a>
          <p className="bannersDownP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna...
          </p>
        </div>
        <div className="newsletter">
          <h3>Namah </h3>
          <h3>no seu e-mail</h3>
          <p>Assine nossa newsletter</p>
          <input type="e-mail" placeholder="Seu e-mail" />
          <button type="button">ASSINAR </button>
          <p className="avisoNewsletter">
            Ao clicar em “assinar”, você concorda em receber e-mails do Espaço Namah a aceita nossos
            Termos de Uso e nossas Políticas de Privacidade.
          </p>
        </div>
      </div>
      <div className="divButton">
        <button type="button">
          VEJA TODOS OS POSTS
          <img src={arrow2} alt="arrow" />
        </button>
      </div>
    </div>
  </div>
);

export default Blog;
