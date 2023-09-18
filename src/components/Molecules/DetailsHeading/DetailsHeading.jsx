import React from 'react';

import { Icon } from '../../Atoms/Icon';
import { Title } from '../../Atoms/Title';
import { Caption, Heading, Lines } from './styles';

const DetailsHeading = ({ src, alt, caption, left }) => {
  return (
    <Heading>
      <Icon $height="30px" $width="30px" src={src} alt={alt} />
      <Caption>
        <Title
          as="h3"
          $fontFamily="'Philosopher', Helvetica, sans-serif"
          $fontSize="24px"
          $whiteSpace="nowrap"
        >
          {caption}
        </Title>
        <Lines $left={left}>
          <img alt="Line" src="/assets/contact/line-1-5.svg" />
          <img alt="Line" src="/assets/contact/line-2-5.svg" />
        </Lines>
      </Caption>
    </Heading>
  );
};

export default DetailsHeading;
