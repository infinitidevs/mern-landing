import styled from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

export const Wrapper = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem 0;
  position: relative;
`;

export const Lines = styled.div`
  height: auto;
  left: -20px;
  position: absolute;
  bottom: 0;
  transform: rotateX(180deg);
  width: 16px;
`;

export const Lines2 = styled.div`
  right: ${(props) => props.$right || '80px'};
  top: 0;
  position: absolute;
  transform: rotateY(180deg);

  ${mediaQueries.mobileL} {
    right: ${(props) => props.$rightMobileL || '25px'};
  }

  ${mediaQueries.mobileS} {
    right: ${(props) => props.$rightMobileS};
  }
`;
