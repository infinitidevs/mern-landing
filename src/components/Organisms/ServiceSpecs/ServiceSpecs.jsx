import React from 'react';

import { Highlighter } from '../../Atoms/Highlighter';
import { Icon } from '../../Atoms/Icon';
import { Text } from '../../Atoms/Text';
import ServiceSpecsTitle from '../../Molecules/ServiceSpecsTitle/ServiceSpecsTitle';
import { Item, TextWrapper } from './styles';

const ServiceSpecs = ({
  src,
  alt,
  iconWidth,
  subtitle,
  right,
  rightMobileL,
  rightMobileS,
  text,
  text2,
  text3,
  text4,
  text5,
  text6,
}) => {
  return (
    <Item data-testid="service-specs">
      <Icon src={src} alt={alt} $width={iconWidth} />
      <ServiceSpecsTitle
        subtitle={subtitle}
        right={right}
        rightMobileL={rightMobileL}
        rightMobileS={rightMobileS}
      />
      <TextWrapper>
        <Text
          $fontFamily="'Mulish', Helvetica, sans-serif"
          $fontSize="17.5px"
          $fontWeight="400"
          $letterSpacing="0.53px"
          $lineHeight="normal"
          $alingSelf="stretch"
          $fontSizeMobileL="14.5px"
        >
          {text}
          {text3.first} <Highlighter>{text3.second}</Highlighter> {text3.third}
          <Highlighter>{text5.first}</Highlighter> {text5.second}
        </Text>
        <Text
          $fontFamily="'Mulish', Helvetica, sans-serif"
          $fontSize="17.5px"
          $fontWeight="400"
          $letterSpacing="0.53px"
          $lineHeight="normal"
          $alingSelf="stretch"
          $fontSizeMobileL="14.5px"
        >
          <Highlighter>{text2.first}</Highlighter> {text2.second}
          {text4}
          {text6.first} <Highlighter>{text6.second}</Highlighter>
        </Text>
      </TextWrapper>
    </Item>
  );
};

export default ServiceSpecs;
