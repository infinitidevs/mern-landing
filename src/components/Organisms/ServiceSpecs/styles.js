import { styled } from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

export const Item = styled.section`
  max-width: 364px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  ${mediaQueries.mobileL} {
    max-width: 294px;
  }
`;

export const TextWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;
