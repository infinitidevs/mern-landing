/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ServicesClaim from '../../components/Organisms/ServicesClaim/ServicesClaim';
import { descriptionItems } from '../../data/claim';

describe('ServicesClaim', () => {
  test('should have a title with a gradient background and text', () => {
    render(<ServicesClaim />);
    const title = screen.getByText('Nuestros Servicios');

    expect(title).toHaveStyle(`
      background: conic-gradient(
        from 181deg at 17% 48%,
        rgb(135, 231, 173) 99deg,
        rgb(31, 86, 95) 75deg,
        rgb(135, 231, 173) 335deg
      );
    `);
  });
  test('should render a list of descriptions', () => {
    render(<ServicesClaim />);
    const descriptions = screen.getAllByTestId('description');
    expect(descriptions.length).toBe(descriptionItems.length);
  });
});
