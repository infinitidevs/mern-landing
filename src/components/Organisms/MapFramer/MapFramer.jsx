import React from 'react';

import { MapFrame, MapLines, Wrapper } from './styles';

const MapFramer = () => {
  return (
    <Wrapper data-testid="map-framer">
      <MapLines>
        <img alt="Line" src="/assets/contact/line-1-5.svg" />
        <img alt="Line" src="/assets/contact/line-2-5.svg" />
      </MapLines>
      <MapLines
        $transform="rotate(180deg)"
        $left="593px"
        $top="-15px"
        $leftMobileL="290px"
        $topMobileL="-15px"
      >
        <img alt="Line" src="/assets/contact/line-1-5.svg" />
        <img alt="Line" src="/assets/contact/line-2-5.svg" />
      </MapLines>
      <MapFrame src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3037.6365400881473!2d-3.7034833999999996!3d40.4169019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1692924444248!5m2!1ses!2ses" />
      <MapLines
        $transform="rotate(360deg)"
        $left="-15px"
        $top="590px"
        $topMobileL="290px"
      >
        <img alt="Line" src="/assets/contact/line-1-2.svg" />
        <img alt="Line" src="/assets/contact/line-2-2.svg" />
      </MapLines>
      <MapLines
        $transform="rotate(-90deg)"
        $left="595px"
        $top="593px"
        $leftMobileL="290px"
        $topMobileL="290px"
      >
        <img alt="Line" src="/assets/contact/line-1-2.svg" />
        <img alt="Line" src="/assets/contact/line-2-2.svg" />
      </MapLines>
    </Wrapper>
  );
};

export default MapFramer;
