import styled from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const DetailsCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: var(--ah-color-light);
    font-family: 'Mulish', Helvetica;
    font-size: 17.5px;
    font-weight: 400;
    letter-spacing: 0.53px;
    line-height: normal;
  }

  ${mediaQueries.mobileL} {
    p {
      font-size: 15px;
    }
  }
`;

export const Heading = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    color: var(--ah-color-light);
    font-family: 'Mulish', Helvetica, sans-serif;
    font-size: 17.5px;
    font-weight: 400;
    letter-spacing: 0.53px;
    line-height: normal;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export const Caption = styled.div`
  position: relative;

  > span {
    color: var(--ah-color-light);
    font-family: 'Philosopher', Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
`;

export const Lines = styled.div`
  transform: rotate(270deg);
  height: 10px;
  width: 10px;
  position: absolute;
  left: ${(props) => props.$left || '110px'};
  top: 20px;
`;
