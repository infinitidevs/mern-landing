import { styled } from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

export const Container = styled.section.attrs({
  id: 'goodwill',
})`
  background-color: var(--ah-color-dark);
  border: 1px none;
  min-height: 723px;
  width: 100vw;
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem;

  ${mediaQueries.mobileL} {
    padding: 0rem 2rem 2rem 2rem;
  }
`;

export const Layout = styled.article`
  display: flex;
  flex-direction: column;

  ${mediaQueries.laptop} {
    gap: 4rem;
  }

  ${mediaQueries.mobileL} {
    gap: 2rem;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;

  ${mediaQueries.laptop} {
    gap: 2rem;
  }
`;
