import React from 'react';

import { menu } from '../../../data/menu';
import { MenuNav } from './styles';

const Menu = () => {
  return (
    <MenuNav data-testid="menu">
      <ul>
        {menu.map(({ section, href }) => (
          <li key={section}>
            <a href={href}>{section}</a>
          </li>
        ))}
      </ul>
    </MenuNav>
  );
};

export default Menu;
