/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import About from '../../components/Templates/About/About';
import { coreValues } from '../../data/about';

describe('About', () => {
  test('should render the title "Sobre Nosotros"', () => {
    render(<About />);
    const title = screen.getByText('Sobre Nosotros');
    expect(title).toBeInTheDocument();
  });
  test('should have the correct background gradient for the Title component', () => {
    render(<About />);

    const title = screen.getByText('Sobre Nosotros');

    expect(title).toHaveStyle(`
      background: conic-gradient(
        from 180deg at 50% 50%,
        rgb(135, 231, 173) 19.64deg,
        rgb(31, 86, 95) 183.37deg
      );
    `);
  });
  test('should display the correct number of CoreValuesCards', () => {
    render(<About />);
    const coreValuesCards = screen.getAllByTestId('core-value');
    expect(coreValuesCards.length).toBe(coreValues.length);
  });
  test('should have the correct Core Value for each CoreValuesCard component', () => {
    render(<About />);

    coreValues.forEach(({ coreValue }) => {
      const CoreValueElement = screen.getByText(coreValue);
      expect(CoreValueElement).toBeInTheDocument();
    });
  });
});
