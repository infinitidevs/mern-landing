import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Container = styled.section.attrs({
  id: 'contact',
})`
  background-color: var(--ah-color-dark);
  border: 1px none;
  min-height: 808px;
  width: 100vw;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

export const Info = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export const Title = styled.h2`
  font-family: 'Philosopher', Helvetica, sans-serif;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgb(135, 231, 173) 19.64deg,
    rgb(31, 86, 95) 183.37deg
  );
  background-clip: text;
  color: transparent;

  ${mediaQueries.mobileL} {
    font-size: 36px;
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
