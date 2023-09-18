/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import OurServices from '../../components/Templates/OurServices/OurServices';
import { specs } from '../../data/ourServices';

describe('OurServices', () => {
  test('should render the correct number of ServiceSpecs components', () => {
    render(<OurServices />);
    const serviceSpecs = screen.getAllByTestId('service-specs');
    expect(serviceSpecs.length).toBe(specs.length);
  });
  test('should have the correct subtitle for each ServiceSpecs component', () => {
    render(<OurServices />);

    specs.forEach(({ subtitle }) => {
      const subtitleElement = screen.getByText(subtitle);
      expect(subtitleElement).toBeInTheDocument();
    });
  });
  test('should render ServiceSpecs components with correct icons', () => {
    render(<OurServices />);

    specs.forEach(({ icon }) => {
      const iconElement = screen.getByAltText(icon.alt);
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveAttribute('src', icon.src);
    });
  });
});
