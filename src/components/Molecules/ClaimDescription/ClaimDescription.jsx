import React from 'react';

import { Highlighter } from '../../Atoms/Highlighter';
import { Text } from '../../Atoms/Text';
import { Description } from './styles';

const ClaimDescription = ({ textInit, textAccent, textEnd }) => {
  return (
    <Description data-testid="description">
      <Text
        $fontFamily="'Mulish', Helvetica, sans-serif"
        $fontSize="17.5px"
        $fontWeight="400"
        $letterSpacing="0.35px"
        $lineHeight="normal"
      >
        {textInit}
        <Highlighter> {textAccent}</Highlighter> {textEnd}
      </Text>
    </Description>
  );
};

export default ClaimDescription;
