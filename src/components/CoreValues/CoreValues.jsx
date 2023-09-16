import React from 'react';

import { CoreValue, Highlighter, Lines, Lines2, ValueWrapper } from './styles';

const CoreValues = () => {
  return (
    <>
      <CoreValue>
        <ValueWrapper>
          <Lines>
            <img alt="Line" src="/src/assets/about/line-1-1.svg" />
            <img alt="Line" src="/src/assets/about/line-2-1.svg" />
          </Lines>
          <h3>Profesionalismo</h3>
          <Lines2>
            <img alt="Line" src="/src/assets/about/line-1-1.svg" />
            <img alt="Line" src="/src/assets/about/line-2-1.svg" />
          </Lines2>
        </ValueWrapper>
        <div>
          <p>
            <Highlighter>Este es un simple</Highlighter> texto de relleno solo esta para
            rellenar, y mostrar el lugar donde iría un texto real de la pagina cuando este
            hecha <Highlighter>en su totalidad</Highlighter>
          </p>
        </div>
      </CoreValue>
      <CoreValue>
        <ValueWrapper>
          <Lines>
            <img alt="Line" src="/src/assets/about/line-1-1.svg" />
            <img alt="Line" src="/src/assets/about/line-2-1.svg" />
          </Lines>
          <h3>Confiabilidad</h3>
          <Lines2 $left="10.5rem">
            <img alt="Line" src="/src/assets/about/line-1-1.svg" />
            <img alt="Line" src="/src/assets/about/line-2-1.svg" />
          </Lines2>
        </ValueWrapper>
        <div>
          <p>
            <Highlighter>Este es un simple</Highlighter> texto de relleno solo esta para
            rellenar, y mostrar el lugar donde iría un texto real de la pagina cuando este
            hecha <Highlighter>en su totalidad</Highlighter>
          </p>
        </div>
      </CoreValue>
      <CoreValue>
        <ValueWrapper>
          <Lines>
            <img alt="Line" src="/src/assets/about/line-1-1.svg" />
            <img alt="Line" src="/src/assets/about/line-2-1.svg" />
          </Lines>
          <h3>Efectividad</h3>
          <Lines2 $left="8.7rem">
            <img alt="Line" src="/src/assets/about/line-1-1.svg" />
            <img alt="Line" src="/src/assets/about/line-2-1.svg" />
          </Lines2>
        </ValueWrapper>
        <div>
          <p>
            <Highlighter>Este es un simple</Highlighter> texto de relleno solo esta para
            rellenar, y mostrar el lugar donde iría un texto real de la pagina cuando este
            hecha <Highlighter>en su totalidad</Highlighter>
          </p>
        </div>
      </CoreValue>
    </>
  );
};

export default CoreValues;
