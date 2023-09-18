import styled from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

export const Wrapper = styled.article`
  position: relative;
`;

export const MapFrame = styled.iframe.attrs({
  title: 'Map',
})`
  height: 590px;
  width: 590px;

  ${mediaQueries.mobileL} {
    width: 288px;
    height: 288px;
  }
`;

export const MapLines = styled.div`
  transform: ${(props) => props.$transform || 'rotate(90deg)'};
  height: 10px;
  width: 10px;
  position: absolute;
  left: ${(props) => props.$left || '-15px'};
  top: ${(props) => props.$top || '-15px'};

  ${mediaQueries.mobileL} {
    left: ${(props) => props.$leftMobileL};
    top: ${(props) => props.$topMobileL};
  }
`;
