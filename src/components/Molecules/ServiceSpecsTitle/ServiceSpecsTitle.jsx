import React from 'react';

import { Title } from '../../Atoms/Title';
import { Lines, Lines2, Wrapper } from './styles';

const ServiceSpecsTitle = ({ subtitle, right, rightMobileL, rightMobileS }) => {
  return (
    <Wrapper>
      <Lines>
        <img alt="Line" src="/assets/ourservices/line-1-3.svg" />
        <img alt="Line" src="/assets/ourservices/line-2-3.svg" />
      </Lines>
      <Title
        as="h3"
        $fontFamily="'Philosopher', Helvetica, sans-serif"
        $fontSize="24px"
        $fontSizeMobileL="22px"
      >
        {subtitle}
      </Title>
      <Lines2 $right={right} $rightMobileL={rightMobileL} $rightMobileS={rightMobileS}>
        <img alt="Line" src="/assets/ourservices/line-1-4.svg" />
        <img alt="Line" src="/assets/ourservices/line-2-4.svg" />
      </Lines2>
    </Wrapper>
  );
};

export default ServiceSpecsTitle;
