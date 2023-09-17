import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Container = styled.article`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
`;

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

export const Icon = styled.img`
  height: 50px;
  width: ${(props) => props.$width || '87px'};
`;

export const SubtitleWrapper = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem 0;
  position: relative;
`;

export const Subtitle = styled.p`
  color: #e9e9ec;
  font-family: 'Philosopher', Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;

  ${mediaQueries.mobileL} {
    font-size: 22px;
  }
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

export const TextWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const Text = styled.p`
  font-family: 'Mulish', Helvetica, sans-serif;
  font-size: 17.5px;
  font-weight: 400;
  letter-spacing: 0.53px;
  line-height: normal;
  align-self: stretch;

  ${mediaQueries.mobileL} {
    font-size: 14.5px;
  }
`;

export const Highlighter = styled.span`
  color: var(--ah-color-highlight);
`;
