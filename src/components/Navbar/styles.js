import { styled } from 'styled-components';

export const Menu = styled.nav.attrs({
  role: 'navigation',
})`
  > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  > ul > li > a {
    color: var(--ah-color-light);
    font-family: 'Mulish', Helvetica, sans-serif;
    font-size: 17.5px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
  }

  > ul > li > a:hover {
    color: var(--ah-color-accent);
  }

  @media (max-width: 912px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    margin-top: 50px;

    > ul {
      display: block;
      text-align: center;
      border-radius: 8px;
      box-shadow: -1px 1px 3px 0px rgba(205, 23, 26, 0.302);
      background-color: inherit;
      backdrop-filter: blur(12px) saturate(180%);
    }

    > ul:hover {
      box-shadow: 0px 1px 5px 1px rgba(205, 23, 26, 0.302);
    }

    > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #222;
    }

    > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }
  }
`;

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
