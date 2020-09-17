import React from 'react';
import './style.css';
import insta1 from '../../images/insta1.png';
import insta2 from '../../images/insta2.png';
import insta3 from '../../images/insta3.png';
import insta4 from '../../images/insta4.png';
import insta5 from '../../images/insta5.png';
import insta6 from '../../images/insta6.png';

const Contato = () => {
  const pictures = [insta1, insta2, insta3, insta4, insta5, insta6];
  return (
    <div className="contatoContainer">
      <h4 className="contatoInstagram">@namah.concept</h4>
      <div className="picturesContainer">
        {pictures.map((picture) => (
          <img className="instaPicture" src={picture} alt={picture} />
        ))}
      </div>
    </div>
  );
};

export default Contato;
