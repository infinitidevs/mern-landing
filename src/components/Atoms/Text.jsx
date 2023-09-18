import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Text = styled.p`
  color: ${(props) => props.$color};
  font-family: ${(props) => props.$fontFamily || '"Taviraj", Helvetica, sans-serif'};
  font-size: ${(props) => props.$fontSize || '16px'};
  letter-spacing: ${(props) => props.$letterSpacing || '1px'};
  font-weight: ${(props) => props.$fontWeight};
  line-height: ${(props) => props.$lineHeight};
  align-self: ${(props) => props.$alingSelf};

  ${mediaQueries.mobileL} {
    font-size: ${(props) => props.$fontSizeMobileL};
    text-align: ${(props) => props.$textAlignMobileL};
  }
`;
