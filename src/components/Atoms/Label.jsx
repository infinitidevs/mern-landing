import styled from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Label = styled.label`
  font-family: 'Mulish', Helvetica, sans-serif;
  font-size: 17.5px;
  font-weight: 400;
  letter-spacing: 0.35px;
  line-height: normal;

  ${mediaQueries.mobileL} {
    font-size: 15px;
  }
`;
