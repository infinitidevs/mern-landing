import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Logo = styled.img`
  height: 45px;
  width: 50px;

  ${mediaQueries.mobileL} {
    display: none;
  }
`;
