import React from 'react';
import './style.css';
import podcasts from '../../store/podcasts';

const Podcasts = () => {
  return (
    <div>
    <div className="containerPoadcasts">
      {podcasts.map((podcast) => (
        <div className="cursoCard" key={podcast.numero}>
          <img src={podcast.picture} alt={podcast.numero} />

        </div>
      ))}
    </div>
    </div>
  );
};

export default Podcasts;
