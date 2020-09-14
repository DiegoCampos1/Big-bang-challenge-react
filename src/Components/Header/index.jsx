import React from 'react';
import './style.css';
import Logo from '../../images/Group.png';
import search from '../../images/search.png';
import profile from '../../images/profile.png';
import heart from '../../images/heart.png';
import box from '../../images/box.png';
import bag from '../../images/bag.png';
import exit from '../../images/exit.png';

const Header = () => {
  const navElements = ['INICIO', 'BLOG', 'LOJA', 'PODCASTS', 'CURSOS', 'CONTATO'];
  const navIcons = [search, profile, heart, box, bag, exit];
  return (
    <div>
      <div className="headerContainer">
        <nav className="navBar">
          {navElements.map((element) => (
            <div>{element}</div>
          ))}
        </nav>
        <img src={Logo} alt="LogoImage" />
        <nav className="navIcons">
          {navIcons.map((element) => (
            <img src={element} alt="IconImage" />
          ))}
        </nav>
      </div>
      <hr />
    </div>
  );
};
export default Header;
