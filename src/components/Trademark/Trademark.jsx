import React from 'react';
import { styled } from 'styled-components';

import { Logo } from '../ui/Logo';
import { Title } from '../ui/Title';

const TrademarkStyled = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Trademark = () => {
  return (
    <TrademarkStyled>
      <Logo src="/src/assets/header/logo.png" alt="Logo" />
      <Title>Estudio Jurídico</Title>
    </TrademarkStyled>
  );
};

export default Trademark;
