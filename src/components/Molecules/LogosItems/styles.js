import styled from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

export const Logos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  ${mediaQueries.mobileL} {
    gap: 1rem;
  }
`;

export const Lines = styled.div`
  display: ${(props) => props.$display || 'flex'};
  align-items: center;
  justify-content: center;

  ${mediaQueries.laptop} {
    display: none;
  }
`;

export const Line = styled.img`
  height: 247px;
  width: 45px;
`;

export const Line2 = styled.img`
  height: 247px;
  width: 45px;
  position: absolute;
  transform: rotateX(180deg);
`;
