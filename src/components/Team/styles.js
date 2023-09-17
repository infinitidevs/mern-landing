import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Container = styled.section`
  background-color: var(--ah-color-dark);
  border: 1px none;
  min-height: 1024px;
  width: 100vw;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

export const Wrapper = styled.article`
  max-width: 1202px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
`;

export const Heading = styled.section`
  padding: 0 0 2rem 0;
`;

export const Title = styled.h2`
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgb(135, 231, 173) 19.64deg,
    rgb(31, 86, 95) 183.37deg
  );
  background-clip: text;
  color: transparent;
  font-family: 'Philosopher', Helvetica, sans-serif;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;

  ${mediaQueries.mobileL} {
    font-size: 36px;
  }
`;

export const Content = styled.section`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  ${mediaQueries.tablet} {
    max-width: 765px;
    display: flex;
    gap: 3rem;
  }
`;
