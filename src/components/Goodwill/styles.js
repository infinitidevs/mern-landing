import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

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

export const Title = styled.h2`
  font-family: 'Philosopher', Helvetica, sans-serif;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  padding: 1rem 0;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: conic-gradient(
    from 180deg at 23% 50%,
    rgb(135, 231, 173) 19.64deg,
    rgb(31, 86, 95) 183.37deg
  );
  background-clip: text;
  color: transparent;

  ${mediaQueries.mobileL} {
    font-size: 36px;
    text-wrap: wrap;
  }
`;

export const LogosWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;

  ${mediaQueries.laptop} {
    gap: 2rem;
  }
`;

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

export const Logo = styled.img`
  height: 80px;
  width: 80px;

  ${mediaQueries.tablet} {
    height: 50px;
    width: 50px;
  }

  ${mediaQueries.mobileL} {
    height: 40px;
    width: 40px;
  }
`;

export const Logo2 = styled.img`
  height: 80px;
  width: auto;

  ${mediaQueries.tablet} {
    height: 50px;
    width: auto;
  }

  ${mediaQueries.mobileL} {
    height: 40px;
    width: auto;
  }
`;

export const CompanyName = styled.p`
  color: var(--ah-color-light);
  font-family: 'Mulish', Helvetica, sans-serif;
  font-size: 17.5px;
  font-weight: 400;
  letter-spacing: 0.53px;
  line-height: normal;

  ${mediaQueries.mobileL} {
    font-size: 13px;
  }
`;

export const Lines = styled.div`
  display: flex;
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
