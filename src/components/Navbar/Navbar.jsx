import React from 'react';

import { Btn, BtnWrapper, Menu, Toggle } from './styles';

const Navbar = () => {
  return (
    <>
      <Toggle />
      <BtnWrapper>
        <Btn></Btn>
      </BtnWrapper>
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
