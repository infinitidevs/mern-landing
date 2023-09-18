import React from 'react';

import { specs } from '../../../data/ourServices';
import ServicesClaim from '../../Organisms/ServicesClaim/ServicesClaim';
import ServiceSpecs from '../../Organisms/ServiceSpecs/ServiceSpecs';
import { Background, Container, Layout, Wrapper } from './styles';

const OurServices = () => {
  return (
    <Container>
      <Background>
        <Layout>
          <ServicesClaim />
          <Wrapper>
            {specs.map(
              ({ icon, subtitle, lines2, text, text2, text3, text4, text5, text6 }) => (
                <ServiceSpecs
                  data-testid="service-specs"
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  iconWidth={icon.iconWidth}
                  subtitle={subtitle}
                  right={lines2.right}
                  rightMobileL={lines2.rightMobileL}
                  rightMobileS={lines2.rightMobileS}
                  text={text}
                  text2={text2}
                  text3={text3}
                  text4={text4}
                  text5={text5}
                  text6={text6}
                />
              ),
            )}
          </Wrapper>
        </Layout>
      </Background>
    </Container>
  );
};

export default OurServices;
