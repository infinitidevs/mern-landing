import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const CompanyTitle = styled.h1`
  color: ${(props) => props.$color || 'var(--ah-color-light)'};
  font-family: ${(props) => props.$fontFamily || '"Philosopher", Helvetica, sans-serif'};
  font-size: ${(props) => props.$fontSize || '96px'};
  font-weight: ${(props) => props.$fontWeight || '700'};
  line-height: ${(props) => props.$lineHeight || 'normal'};
  letter-spacing: ${(props) => props.$letterSpacing || '0'};
  white-space: ${(props) => props.$whiteSpace || 'nowrap'};

  ${mediaQueries.mobileL} {
    font-size: ${(props) => props.$fontSize || '65px'};
    text-align: ${(props) => props.$textAlignMobileL || 'center'};
    text-wrap: ${(props) => props.$textWrapMobileL || 'balance'};
  }
`;
