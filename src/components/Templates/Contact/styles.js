import { styled } from 'styled-components';

export const Container = styled.section.attrs({
  id: 'contact',
})`
  background-color: var(--ah-color-dark);
  border: 1px none;
  min-height: 808px;
  width: 100vw;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

export const Info = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
