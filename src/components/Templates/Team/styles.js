import { styled } from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

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
