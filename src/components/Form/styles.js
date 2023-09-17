import { styled } from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

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

export const Title = styled.h2`
  font-family: 'Philosopher', Helvetica, sans-serif;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  color: transparent;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgb(135, 231, 173) 19.64deg,
    rgb(31, 86, 95) 183.37deg
  );
  background-clip: text;
  padding: 0 0 2rem 0;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;

  ${mediaQueries.mobileL} {
    font-size: 36px;
  }
`;

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-family: 'Mulish', Helvetica, sans-serif;
    font-size: 17.5px;
    font-weight: 400;
    letter-spacing: 0.35px;
    line-height: normal;

    ${mediaQueries.mobileL} {
      font-size: 15px;
    }
  }

  input {
    height: 41px;
    border-radius: 2px;
    border: none;
  }

  input:hover {
    border: 4px solid var(--ah-color-accent);
  }

  textarea {
    height: 200px;
    border-radius: 2px;
    border: none;
  }

  textarea:hover {
    border: 4px solid var(--ah-color-accent);
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

export const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  padding: 6px 18px;
  border: none;
  font-family: 'Mulish', Helvetica, sans-serif;
  font-size: 17.5px;
  font-weight: 400;
  letter-spacing: 0.35px;
  line-height: normal;

  :disabled,
  :disabled:hover {
    background-color: #4d4c55;
  }

  :hover {
    background-color: var(--ah-color-accent);
  }

  ${mediaQueries.mobileL} {
    font-size: 15px;
  }
`;
