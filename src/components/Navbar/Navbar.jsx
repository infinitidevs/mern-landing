import React from 'react';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Menu } from './styles';

const Navbar = () => {
  return (
    <>
      <BurgerMenu />
      <Menu>
        <ul>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#goodwill">Empresas</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </Menu>
    </>
  );
};

export default Navbar;
