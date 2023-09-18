import { styled } from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

export const Wrapper = styled.section`
  padding: 19rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* > h2 {
    color: var(--ah-color-accent);
    font-family: 'Taviraj', Helvetica, sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0;
    max-width: 619px;
  } */

  /* ${mediaQueries.mobileL} {
    > h2 {
      font-size: 28px;
      text-align: center;
      max-width: 320px;
    }
  } */
`;
