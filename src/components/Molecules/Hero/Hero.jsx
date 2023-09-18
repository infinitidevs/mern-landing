import React from 'react';

import { CompanyTitle } from '../../Atoms/CompanyTitle';
import { Title } from '../../Atoms/Title';
import { Wrapper } from './styles';

const Hero = () => {
  return (
    <Wrapper data-testid="hero">
      <CompanyTitle>Estudio Jurídico</CompanyTitle>
      <Title
        $color="var(--ah-color-accent)"
        $fontSize="48px"
        $maxWidth="619px"
        $fontSizeMobileL="28px"
        $textAlignMobileL="center"
        $maxWidthMobileL="320px"
      >
        Derecho penal y judicial
      </Title>
    </Wrapper>
  );
};

export default Hero;
