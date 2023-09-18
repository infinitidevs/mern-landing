import { styled } from 'styled-components';

export const MenuNav = styled.nav.attrs({
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
