import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Container = styled.header`
  background-image: url(/src/assets/header/hero.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 1024px;
  width: 100vw;
  max-width: 1440px;
  box-shadow: 0px 900px 10px 100px rgba(0, 0, 0, 0.25) inset,
    0px 100px 100px 10px rgba(7, 6, 18, 0.5) inset;

  ${mediaQueries.mobileL} {
    background-position: 27% 50%;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 8rem;

  ${mediaQueries.mobileL} {
    padding: 2rem 2rem;
  }
`;

export const Trademark = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  > img {
    height: 45px;
    width: 50px;
  }

  > h2 {
    color: var(--ah-color-light);
    font-family: 'Taviraj', Helvetica, sans-serif;
    font-size: 22px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0;
  }

  ${mediaQueries.mobileL} {
    > img {
      display: none;
    }
  }
`;
