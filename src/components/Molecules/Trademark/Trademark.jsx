import React from 'react';

import { Logo } from '../../Atoms/Logo';
import { Title } from '../../Atoms/Title';
import { TrademarkStyled } from './styles';

const Trademark = () => {
  return (
    <TrademarkStyled data-testid="trademark">
      <Logo
        src="/assets/header/logo.png"
        alt="Logo"
        $height="45px"
        width="50px"
        $displayMobileL="none"
      />
      <Title>Estudio Jurídico</Title>
    </TrademarkStyled>
  );
};

export default Trademark;
