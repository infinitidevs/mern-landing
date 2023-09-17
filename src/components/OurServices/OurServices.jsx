import React from 'react';

import Claim from '../Claim/Claim';
import Specs from '../Specs/Specs';
import { Background, Container, Layout } from './styles';

const OurServices = () => {
  return (
    <Container>
      <Background>
        <Layout>
          <Claim />
          <Specs />
        </Layout>
      </Background>
    </Container>
  );
};

export default OurServices;
