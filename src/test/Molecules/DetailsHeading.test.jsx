/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import DetailsHeading from '../../components/Molecules/DetailsHeading/DetailsHeading';

describe('DetailsHeading', () => {
  test('should render the component with the correct props', () => {
    const src = 'icon.png';
    const alt = 'Icon';
    const caption = 'Caption';
    const left = '100px';
    render(<DetailsHeading src={src} alt={alt} caption={caption} left={left} />);
    expect(screen.getByAltText(alt)).toBeInTheDocument();
    expect(screen.getByText(caption)).toBeInTheDocument();
  });
});
