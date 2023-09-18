import { styled } from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

export const Layout = styled.section`
  background-color: var(--ah-color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 832px;
  width: 100%;
  max-width: 1440px;
  padding: 2rem;

  ${mediaQueries.mobileL} {
    height: 590px;
  }
`;

export const Container = styled.article`
  height: 100%;
  width: 545px;
  padding: 0 0 2rem 0;

  ${mediaQueries.mobileL} {
    width: 290px;
  }
`;

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input:hover {
    border: 4px solid var(--ah-color-accent);
  }

  textarea:hover {
    border: 4px solid var(--ah-color-accent);
  }

  button:hover {
    background-color: var(--ah-color-accent);
  }
`;

export const InputWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Terms = styled.article`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row-reverse;
  gap: 1rem;
`;
