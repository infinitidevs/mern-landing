import React from 'react';

import { Text } from '../../Atoms/Text';
import DetailsHeading from '../../Molecules/DetailsHeading/DetailsHeading';
import { Wrapper } from './styles';

const ContactDetails = ({ src, alt, caption, left, text, textSecond }) => {
  return (
    <>
      <Wrapper data-testid="contact-details">
        <DetailsHeading src={src} alt={alt} caption={caption} left={left} />
        <Text
          $fontFamily="'Mulish', Helvetica"
          $fontSize="17.5px"
          $fontWeight="400"
          $letterSpacing="0.53px"
          $lineHeight="normal"
          $fontSizeMobileL="15px"
        >
          {text}
        </Text>
        <Text
          $fontFamily="'Mulish', Helvetica"
          $fontSize="17.5px"
          $fontWeight="400"
          $letterSpacing="0.53px"
          $lineHeight="normal"
          $fontSizeMobileL="15px"
        >
          {textSecond}
        </Text>
      </Wrapper>
    </>
  );
};

export default ContactDetails;
