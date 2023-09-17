import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Container = styled.section`
  background-color: var(--ah-color-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 808px;
  width: 100%;
  max-width: 1440px;
`;

export const Title = styled.h2`
  font-family: 'Philosopher', Helvetica, sans-serif;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  padding: 0 0 4rem 0;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgb(135, 231, 173) 19.64deg,
    rgb(31, 86, 95) 183.37deg
  );
  background-clip: text;
  color: transparent;
`;

export const MapWrapper = styled.article`
  position: relative;

  > img {
    object-fit: cover;
    height: 590px;
    width: 590px;
  }

  ${mediaQueries.mobileL} {
    > img {
      width: 288px;
      height: auto;
    }
  }
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
