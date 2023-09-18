import React from 'react';

import { descriptionItems } from '../../../data/claim';
import { Title } from '../../Atoms/Title';
import ClaimDescription from '../../Molecules/ClaimDescription/ClaimDescription';
import { Container } from './styles';

const ServicesClaim = () => {
  return (
    <Container>
      <section>
        <Title
          $color="transparent"
          $fontFamily="'Philosopher', Helvetica, sans-serif"
          $fontSize="48px"
          $background="conic-gradient(
            from 181deg at 17% 48%,
            rgb(135, 231, 173) 99deg,
            rgb(31, 86, 95) 75deg,
            rgb(135, 231, 173) 335deg
          )"
          $bgClip="text"
          $bgClipKit="text !important"
          $textFillColorKit="transparent"
          $whiteSpace="nowrap"
          $fontSizeMobileL="36px"
          $textWrapMobileL="balance"
          $bgMobileS="conic-gradient(
            from 346deg at 17% 48%,
            rgb(135, 231, 173) 99deg,
            rgb(31, 86, 95) 75deg,
            rgb(135, 231, 173) 335deg
          )"
        >
          Nuestros Servicios
        </Title>
      </section>
      {descriptionItems.map(({ item, textInit, textAccent, textEnd }) => (
        <ClaimDescription
          key={item}
          textInit={textInit}
          textAccent={textAccent}
          textEnd={textEnd}
        />
      ))}
    </Container>
  );
};

export default ServicesClaim;
