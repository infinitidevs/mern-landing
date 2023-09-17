import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

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
