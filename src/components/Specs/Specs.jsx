import React from 'react';

import {
  Container,
  Highlighter,
  Icon,
  Item,
  Lines,
  Lines2,
  Subtitle,
  SubtitleWrapper,
  Text,
  TextWrapper,
} from './styles';

const Specs = () => {
  return (
    <Container>
      <Item>
        <Icon src="/src/assets/ourservices/handshake.svg" alt="Handshake" />
        <SubtitleWrapper>
          <Lines>
            <img alt="Line" src="/src/assets/ourservices/line-1-3.svg" />
            <img alt="Line" src="/src/assets/ourservices/line-2-3.svg" />
          </Lines>
          <Subtitle>Resolución de Conflictos</Subtitle>
          <Lines2>
            <img alt="Line" src="/src/assets/ourservices/line-1-4.svg" />
            <img alt="Line" src="/src/assets/ourservices/line-2-4.svg" />
          </Lines2>
        </SubtitleWrapper>
        <TextWrapper>
          <Text>
            {' '}
            Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar
            donde iría un texto real de la pagina cuando este hecha en su totalidad.
          </Text>
          <Text>
            <Highlighter>
              Este es un simple texto de relleno solo esta para rellenar
            </Highlighter>
            , y mostrar el lugar donde iría un texto real de la pagina cuando este hecha
            en su totalidad.
          </Text>
        </TextWrapper>
      </Item>
      <Item>
        <Icon $width="50px" src="/src/assets/ourservices/law.svg" alt="Law" />
        <SubtitleWrapper>
          <Lines>
            <img alt="Line" src="/src/assets/ourservices/line-1-3.svg" />
            <img alt="Line" src="/src/assets/ourservices/line-2-3.svg" />
          </Lines>
          <Subtitle>Asesoramiento y Prevención</Subtitle>
          <Lines2 $right="40px" $rightMobileL="0" $rightMobileS="95px">
            <img alt="Line" src="/src/assets/ourservices/line-1-4.svg" />
            <img alt="Line" src="/src/assets/ourservices/line-2-4.svg" />
          </Lines2>
        </SubtitleWrapper>
        <TextWrapper>
          <Text>
            {' '}
            Este es un simple texto de relleno solo esta para rellenar, y{' '}
            <Highlighter>
              mostrar el lugar donde iría un texto real de la pagina
            </Highlighter>{' '}
            cuando este hecha en su totalidad.
          </Text>
          <Text>
            <Highlighter>
              Este es un simple texto de relleno solo esta para rellenar
            </Highlighter>
            , y mostrar el lugar donde iría un texto real de la pagina cuando{' '}
            <Highlighter>este hecha en su totalidad.</Highlighter>
          </Text>
        </TextWrapper>
      </Item>
      <Item>
        <Icon $width="50px" src="/src/assets/ourservices/stop.svg" alt="Stop" />
        <SubtitleWrapper>
          <Lines>
            <img alt="Line" src="/src/assets/ourservices/line-1-3.svg" />
            <img alt="Line" src="/src/assets/ourservices/line-2-3.svg" />
          </Lines>
          <Subtitle>Defensa Penal</Subtitle>
          <Lines2 $right="195px" $rightMobileL="125px">
            <img alt="Line" src="/src/assets/ourservices/line-1-4.svg" />
            <img alt="Line" src="/src/assets/ourservices/line-2-4.svg" />
          </Lines2>
        </SubtitleWrapper>
        <TextWrapper>
          <Text>
            <Highlighter>Este es un simple</Highlighter> texto de relleno solo esta para
            rellenar, y mostrar el lugar donde iría un texto real de la pagina cuando este
            hecha en su totalidad.
          </Text>
          <Text>
            Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar
            donde iría un texto real de la pagina cuando{' '}
            <Highlighter>este hecha en su totalidad.</Highlighter>
          </Text>
        </TextWrapper>
      </Item>
    </Container>
  );
};

export default Specs;
