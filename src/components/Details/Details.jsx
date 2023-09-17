import React from 'react';

import { Caption, DetailsCard, Heading, Icon, Lines } from './styles';

const Details = () => {
  return (
    <>
      <DetailsCard>
        <Heading>
          <Icon src="/src/assets/contact/map.svg" alt="Location" />
          <Caption>
            <span>Dirección</span>
            <Lines>
              <img alt="Line" src="/src/assets/contact/line-1-5.svg" />
              <img alt="Line" src="/src/assets/contact/line-2-5.svg" />
            </Lines>
          </Caption>
        </Heading>
        <p>Cordoba Capital, Bv Nueva Cordoba</p>
        <p>Jose de San Martin 223</p>
      </DetailsCard>
      <DetailsCard>
        <Heading>
          <Icon src="/src/assets/contact/clock.svg" alt="Clock" />
          <Caption>
            <span>Horarios</span>
            <Lines $left="100px">
              <img alt="Line" src="/src/assets/contact/line-1-5.svg" />
              <img alt="Line" src="/src/assets/contact/line-2-5.svg" />
            </Lines>
          </Caption>
        </Heading>
        <p>Lunes - Jueves: 8.30hs - 18.00hs</p>
        <p>Viernes: 8.30hs - 13.00hs</p>
      </DetailsCard>
      <DetailsCard>
        <Heading>
          <Icon src="/src/assets/contact/phone.svg" alt="Phone" />
          <Caption>
            <span>Telefonos</span>
            <Lines>
              <img alt="Line" src="/src/assets/contact/line-1-5.svg" />
              <img alt="Line" src="/src/assets/contact/line-2-5.svg" />
            </Lines>
          </Caption>
        </Heading>
        <p>Fijo - 493 65XX</p>
        <p>Movil - 351 760 83XX</p>
      </DetailsCard>
    </>
  );
};

export default Details;
