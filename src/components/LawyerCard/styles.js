import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const LawyerProfile = styled.section`
  max-width: 506px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProfileHeading = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Photo = styled.img`
  height: 500px;
  width: 387px;
  object-fit: cover;
`;

export const Name = styled.p`
  color: #61ca88;
  font-family: 'Taviraj', Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;

  ${mediaQueries.mobileL} {
    font-size: 24px;
    text-align: center;
  }
`;

export const Topic = styled.p`
  color: #ffffff;
  font-family: 'Mulish', Helvetica, sans-serif;
  font-size: 17.5px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
`;

export const Lines = styled.div`
  transform: rotateX(180deg);
  position: relative;
  top: 3rem;
  right: 5rem;
`;

export const Lines2 = styled.div`
  transform: rotateY(180deg);
  position: relative;
  bottom: 3rem;
  left: 5rem;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 192px;
`;

export const Icon = styled.img`
  width: 38px;
  height: auto;
  filter: invert(1);
`;

export const Track = styled.ul`
  color: var(--ah-color-light);
  font-family: 'Mulish', Helvetica, sans-serif;
  font-size: 17.5px;
  font-weight: 400;
  letter-spacing: 0.35px;
  line-height: normal;

  > li {
    list-style-type: disc;
  }
`;

export const Highlighter = styled.span`
  color: #a0fac5;
`;
