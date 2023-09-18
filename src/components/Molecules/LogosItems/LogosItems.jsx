import React from 'react';

import { Logo } from '../../Atoms/Logo';
import { Text } from '../../Atoms/Text';
import { Line, Line2, Lines, Logos } from './styles';

const LogosItems = ({
  height,
  width,
  heightTablet,
  widthTablet,
  heightMobileL,
  widthMobileL,
  src,
  alt,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  fontSizeMobileL,
  text,
  display,
}) => {
  return (
    <>
      <Logos data-testid="logos-item">
        <Logo
          $height={height}
          $width={width}
          $heightTablet={heightTablet}
          $widthTablet={widthTablet}
          $heightMobileL={heightMobileL}
          $widthMobileL={widthMobileL}
          src={src}
          alt={alt}
        />
        <Text
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $lineHeight={lineHeight}
          $fontSizeMobileL={fontSizeMobileL}
        >
          {text}
        </Text>
      </Logos>
      <Lines $display={display}>
        <Line alt="Line" src="/assets/goodwill/line-3-1.svg" />
        <Line2 alt="Line" src="/assets/goodwill/line-3-2.svg" />
      </Lines>
    </>
  );
};

export default LogosItems;
