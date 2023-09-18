import { styled } from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

export const CoreValue = styled.article`
  max-width: 588px;
  padding-left: 1rem;

  ${mediaQueries.mobileL} {
    max-width: 320px;
    padding-left: 0;
  }
`;

export const ValueWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  ${mediaQueries.tablet} {
    max-width: 368px;
  }

  ${mediaQueries.mobileL} {
    max-width: 220px;
    padding: 0;
  }
`;

export const Lines = styled.div`
  transform: rotateX(180deg);
  position: absolute;
  bottom: 12px;
  left: -1rem;
`;

export const Lines2 = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  bottom: 2.3rem;
  left: ${(props) => props.$left || '12.5rem'};
`;

export const TextWrapper = styled.section`
  ${mediaQueries.tablet} {
    max-width: 368px;
  }

  ${mediaQueries.mobileL} {
    max-width: 267px;
  }
`;
