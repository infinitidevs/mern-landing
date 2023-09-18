import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { logosItems } from '../../../data/goodwill';
import { Title } from '../../Atoms/Title';
import LogosItems from '../../Molecules/LogosItems/LogosItems';
import { Container, Layout, Wrapper } from './styles';

const Goodwill = () => {
  return (
    <Container>
      <Layout>
        <Title
          $color="transparent"
          $fontFamily="'Philosopher', Helvetica, sans-serif"
          $fontSize="48px"
          $padding="1rem 0"
          $background="conic-gradient(
            from 180deg at 23% 50%,
            rgb(135, 231, 173) 19.64deg,
            rgb(31, 86, 95) 183.37deg)"
          $bgClip="text"
          $bgClipKit="text !important"
          $textFillColorKit="transparent"
          $whiteSpace="nowrap"
          $fontSizeMobileL="36px"
          $textWrapMobileL="wrap"
        >
          Ellos confian en Nosotros
        </Title>
        <Wrapper data-testid="wrapper">
          {logosItems.map(({ logo, textStyles, text, display }) => (
            <LogosItems
              key={uuidv4()}
              height={logo.height}
              width={logo.width}
              heightTablet={logo.heightTablet}
              widthTablet={logo.widthTablet}
              heightMobileL={logo.heightMobileL}
              widthMobileL={logo.widthMobileL}
              src={logo.src}
              alt={logo.alt}
              fontFamily={textStyles.fontFamily}
              fontSize={textStyles.fontSize}
              fontWeight={textStyles.fontWeight}
              letterSpacing={textStyles.letterSpacing}
              lineHeight={textStyles.lineHeight}
              fontSizeMobileL={textStyles.fontSizeMobileL}
              text={text}
              display={display}
            />
          ))}
        </Wrapper>
      </Layout>
    </Container>
  );
};

export default Goodwill;
