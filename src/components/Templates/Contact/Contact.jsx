import React from 'react';

import { details } from '../../../data/contact';
import { Title } from '../../Atoms/Title';
import ContactSocials from '../../Molecules/ContactSocials/ContactSocials';
import ContactDetails from '../../Organisms/ContactDetails/ContactDetails';
import MapFramer from '../../Organisms/MapFramer/MapFramer';
import { Container, ContentWrapper, Info } from './styles';

const Contact = () => {
  return (
    <Container>
      <Info>
        <section>
          <Title
            $color="transparent"
            $fontFamily="'Philosopher', Helvetica, sans-serif"
            $fontSize="48px"
            $background="conic-gradient(
              from 180deg at 50% 50%,
              rgb(135, 231, 173) 19.64deg,
              rgb(31, 86, 95) 183.37deg
            )"
            $bgClip="text"
            $bgClipKit="text !important"
            $textFillColorKit="transparent"
            $whiteSpace="nowrap"
            $fontSizeMobileL="36px"
          >
            Visitanos
          </Title>
        </section>
        <ContentWrapper>
          {details.map(({ icon, caption, left, text }) => (
            <ContactDetails
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              caption={caption}
              left={left}
              text={text.first}
              textSecond={text.second}
            />
          ))}
          <ContactSocials />
        </ContentWrapper>
      </Info>
      <MapFramer />
    </Container>
  );
};

export default Contact;
