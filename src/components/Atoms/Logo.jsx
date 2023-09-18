import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Logo = styled.img`
  height: ${(props) => props.$height || '45px'};
  width: ${(props) => props.$width || '50px'};

  ${mediaQueries.tablet} {
    height: ${(props) => props.$heightTablet};
    width: ${(props) => props.$widthTablet};
  }

  ${mediaQueries.mobileL} {
    display: ${(props) => props.$displayMobileL};
    height: ${(props) => props.$heightMobileL};
    width: ${(props) => props.$widthMobileL};
  }
`;
