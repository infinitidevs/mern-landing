import { styled } from 'styled-components';

import { Menu } from '../Navbar/styles';

export const BtnWrapper = styled.label.attrs({
  htmlFor: 'toggle',
})`
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 912px) {
    display: flex;
    position: relative;
  }
`;

export const Btn = styled.div`
  &,
  &::before,
  &::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  &::before {
    content: '';
    margin-top: -8px;
  }

  &::after {
    content: '';
    margin-top: 8px;
  }
`;

export const Toggle = styled.input.attrs({
  id: 'toggle',
  type: 'checkbox',
})`
  display: none;

  &:checked + ${BtnWrapper} ${Btn}::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  &:checked + ${BtnWrapper} ${Btn} {
    background: rgba(255, 255, 255, 0);
  }

  &:checked + ${BtnWrapper} ${Btn}::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 912px) {
    ~ ${Menu} li {
      display: none;
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &:checked ~ ${Menu} li {
      display: inherit;
      height: 3.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`;
