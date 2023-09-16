import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const CoreValue = styled.article`
  max-width: 588px;
  font-family: 'Taviraj', Helvetica, sans-serif;
  letter-spacing: 1px;
  padding-left: 1rem;

  h3 {
    letter-spacing: 3px;
    padding-bottom: 1rem;
  }

  p {
    font-size: 16px;
  }

  ${mediaQueries.mobileL} {
    p {
      font-size: 13px;
    }
  }
`;

export const ValueWrapper = styled.article`
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
  /* left: 12.5rem; */
  left: ${(props) => props.$left || '12.5rem'};
`;

export const Highlighter = styled.span`
  color: var(--ah-color-highlight);
`;
