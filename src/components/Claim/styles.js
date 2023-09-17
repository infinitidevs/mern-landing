import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Container = styled.article`
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
    from 181deg at 17% 48%,
    rgb(135, 231, 173) 99deg,
    rgb(31, 86, 95) 75deg,
    rgb(135, 231, 173) 335deg
  );
  background-clip: text;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;

  ${mediaQueries.mobileL} {
    font-size: 36px;
    text-wrap: balance;
  }

  ${mediaQueries.mobileS} {
    background: conic-gradient(
      from 346deg at 17% 48%,
      rgb(135, 231, 173) 99deg,
      rgb(31, 86, 95) 75deg,
      rgb(135, 231, 173) 335deg
    );
  }
`;

export const Description = styled.section`
  max-width: 590px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  > p {
    font-family: 'Mulish', Helvetica, sans-serif;
    font-size: 17.5px;
    font-weight: 400;
    letter-spacing: 0.35px;
    line-height: normal;
  }

  ${mediaQueries.mobileL} {
    max-width: 260px;
  }
`;

export const Highlighter = styled.span`
  color: var(--ah-color-highlight);
`;
