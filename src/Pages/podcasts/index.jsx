import React from 'react';
import './style.css';
import podcasts from '../../store/podcasts';
import play from '../../images/play.png';

const Podcasts = () => {
  return (
    <div>
      <div className="containerPoadcasts">
        {podcasts.map((podcast) => (
          <div className="podcastCard" key={podcast.numero}>
            <img className="podcastPicture" src={podcast.picture} alt={podcast.numero} />
            <p className="podcastNumero">{podcast.numero}</p>
            <h5 className="podcastTitulo">{podcast.titulo}</h5>
            <div className="containerDescricao">
              <p className="podcastDescricao">{podcast.descricao}</p>
              <div className="ellipseImg">
              <img src={play} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
