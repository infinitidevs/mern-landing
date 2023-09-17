import React from 'react';

import { Container, Description, Highlighter, Title } from './styles';

const Claim = () => {
  return (
    <Container>
      <section>
        <Title>Nuestros Servicios</Title>
      </section>
      <Description>
        <p>
          Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar
          donde iría un texto real de la pagina{' '}
          <Highlighter>cuando este hecha en su totalidad.</Highlighter>
        </p>
        <p>
          Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar
          donde <Highlighter>iría un texto real de la pagina cuando</Highlighter> este
          hecha en su totalidad.
        </p>
        <p>
          Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar
          donde iría un <Highlighter>texto real de la pagina cuando</Highlighter> este
          hecha en su totalidad.
        </p>
      </Description>
    </Container>
  );
};

export default Claim;
