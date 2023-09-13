import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const TitlesWrapper = styled.section`
  padding: 19rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    color: var(--ah-color-light);
    font-family: 'Philosopher', Helvetica, sans-serif;
    font-size: 96px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }

  > h2 {
    color: var(--ah-color-accent);
    font-family: 'Taviraj', Helvetica, sans-serif;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    max-width: 619px;
  }

  ${mediaQueries.mobileL} {
    > h1 {
      font-size: 65px;
      text-align: center;
      text-wrap: balance;
    }

    > h2 {
      font-size: 28px;
      text-align: center;
      max-width: 320px;
    }
  }
`;
