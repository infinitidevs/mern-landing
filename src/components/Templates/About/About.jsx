import React from 'react';

import { coreValues } from '../../../data/about';
import { Title } from '../../Atoms/Title';
import CoreValuesCard from '../../Organisms/CoreValuesCard/CoreValuesCard';
import { Background, Container, Layout } from './styles';

const About = () => {
  return (
    <Container>
      <Background>
        <Layout>
          <Title
            $color="transparent"
            $fontFamily="'Philosopher', Helvetica, sans-serif"
            $fontSize="48px"
            $padding="0 0 2rem 1rem"
            $background="conic-gradient(
            from 180deg at 50% 50%,
            rgb(135, 231, 173) 19.64deg,
            rgb(31, 86, 95) 183.37deg)"
            $bgClip="text"
            $bgClipKit="text !important"
            $textFillColorKit="transparent"
            $fontSizeMobileL="36px"
            $paddingMobileL="0"
          >
            Sobre Nosotros
          </Title>
          {coreValues.map(({ coreValue, linesLeft, text, text2, text3 }) => (
            <CoreValuesCard
              key={coreValue}
              coreValue={coreValue}
              linesLeft={linesLeft}
              text={text}
              text2={text2}
              text3={text3}
            />
          ))}
        </Layout>
      </Background>
    </Container>
  );
};

export default About;
