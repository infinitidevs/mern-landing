import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Container = styled.section.attrs({
  id: 'about',
})`
  background-color: var(--ah-color-dark);
  height: 800px;
  width: 100vw;
  max-width: 1440px;
  position: relative;
`;

export const Background = styled.article`
  background-image: url(/src/assets//about/about-bg.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 100%;
  max-height: 800px;
  width: 100vw;
  max-width: 1360px;
  left: 80px;
  position: absolute;
  padding: 8rem 0 0 3rem;

  ${mediaQueries.mobileL} {
    left: 0;
    background-position: 75% 50%;
    box-shadow: 0px 900px 10px 100px rgba(0, 0, 0, 0.25) inset,
      0px 100px 100px 10px rgba(7, 6, 18, 0.5) inset;
  }
`;

export const Layout = styled.section`
  max-width: 586px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-family: 'Philosopher', Helvetica, sans-serif;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  color: transparent;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgb(135, 231, 173) 19.64deg,
    rgb(31, 86, 95) 183.37deg
  );
  background-clip: text;
  padding: 0 0 2rem 1rem;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;

  ${mediaQueries.mobileL} {
    font-size: 36px;
    padding: 0;
  }
`;
