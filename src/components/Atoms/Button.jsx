import styled from 'styled-components';

import { mediaQueries } from '../../constants/mediaQuerys';

export const Btn = styled.button`
  padding: 4px 12px;

  :hover {
    background-color: var(--ah-color-accent);
  }
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

  :hover {
    background-color: var(--ah-color-accent);
  }

  :disabled,
  :disabled:hover {
    background-color: #4d4c55;
  }

  ${mediaQueries.mobileL} {
    font-size: 15px;
  }
`;
