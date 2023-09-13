import React from 'react';
import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

const HeaderCss = styled.header`
  background-image: url(/src/assets/header/hero.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 1024px;
  width: 100vw;
  max-width: 1440px;
  box-shadow: 0px 900px 10px 100px rgba(0, 0, 0, 0.25) inset,
    0px 100px 100px 10px rgba(7, 6, 18, 0.5) inset;

  ${mediaQueries.mobileL} {
    background-position: 27% 50%;
  }
`;

const HeaderStyled = ({ children }) => {
  return <HeaderCss>{children}</HeaderCss>;
};

export default HeaderStyled;
