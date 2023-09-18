/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import LogosItems from '../../components/Molecules/LogosItems/LogosItems';

describe('LogosItems', () => {
  test('should render Logo and Text components with correct props', () => {
    const height = '50px';
    const width = '60px';
    const heightTablet = '70px';
    const widthTablet = '80px';
    const heightMobileL = '90px';
    const widthMobileL = '100px';
    const src = '/path/to/image.png';
    const alt = 'Logo';
    const fontFamily = 'Arial';
    const fontSize = '20px';
    const fontWeight = 'bold';
    const letterSpacing = '2px';
    const lineHeight = '1.5';
    const fontSizeMobileL = '18px';
    const text = 'Hello World';
    render(
      <LogosItems
        height={height}
        width={width}
        heightTablet={heightTablet}
        widthTablet={widthTablet}
        heightMobileL={heightMobileL}
        widthMobileL={widthMobileL}
        src={src}
        alt={alt}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        fontSizeMobileL={fontSizeMobileL}
        text={text}
      />,
    );
    expect(screen.getByAltText(alt)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
