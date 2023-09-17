import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Container = styled.section.attrs({
  id: 'services',
})`
  background-color: var(--ah-color-dark);
  border: 1px none;
  height: 1024px;
  width: 100vw;
  max-width: 1440px;

  ${mediaQueries.laptop} {
    height: 1315px;
  }

  ${mediaQueries.tablet} {
    height: 1735px;
  }

  ${mediaQueries.mobileL} {
    height: 1840px;
  }

  ${mediaQueries.mobileS} {
    height: 2020px;
  }
`;

export const Background = styled.article`
  background-image: url(/src/assets//ourservices//services-bg-1440.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 100%;
  position: relative;

  ${mediaQueries.tablet} {
    background-image: url(/src/assets//ourservices//services-bg-390.png);
  }

  ${mediaQueries.mobileL} {
    max-height: 1024px;
  }

  ${mediaQueries.mobileS} {
    max-height: 1090px;
  }
`;

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  padding: 9rem 0 0 7rem;
  gap: 3rem;

  ${mediaQueries.laptop} {
    padding: 5rem 0 5rem 5rem;
  }

  ${mediaQueries.mobileL} {
    padding: 5rem 0 5rem 3rem;
  }
`;
