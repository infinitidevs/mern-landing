import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Title = styled.h2`
  color: ${(props) => props.$color || 'var(--ah-color-light)'};
  font-family: ${(props) => props.$fontFamily || '"Taviraj", Helvetica, sans-serif'};
  font-size: ${(props) => props.$fontSize || '22px'};
  font-weight: ${(props) => props.$fontWeight || '700'};
  line-height: ${(props) => props.$lineHeight || 'normal'};
  letter-spacing: ${(props) => props.$letterSpacing || '0'};
  max-width: ${(props) => props.$maxWidth};
  padding: ${(props) => props.$padding};
  background: ${(props) => props.$background};
  background-clip: ${(props) => props.$bgClip};
  -webkit-background-clip: ${(props) => props.$bgClipKit};
  -webkit-text-fill-color: ${(props) => props.$textFillColorKit};
  padding-bottom: ${(props) => props.$paddingBt};
  white-space: ${(props) => props.$whiteSpace};
  text-wrap: ${(props) => props.$textWrap};
  text-align: ${(props) => props.$textAlign};

  ${mediaQueries.mobileL} {
    font-size: ${(props) => props.$fontSizeMobileL};
    text-align: ${(props) => props.$textAlignMobileL};
    max-width: ${(props) => props.$maxWidthMobileL};
    padding: ${(props) => props.$paddingMobileL};
    text-wrap: ${(props) => props.$textWrapMobileL};
  }

  ${mediaQueries.mobileS} {
    background: ${(props) => props.$bgMobileS};
  }
`;
