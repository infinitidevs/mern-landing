import React from 'react';

import CoreValues from '../CoreValues/CoreValues';
import { Background, Container, Layout, Title } from './styles';

const About = () => {
  return (
    <Container>
      <Background>
        <Layout>
          <Title>Sobre Nosotros</Title>
          <CoreValues />
        </Layout>
      </Background>
    </Container>
  );
};

export default About;
