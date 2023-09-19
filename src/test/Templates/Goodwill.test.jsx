/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Goodwill from '../../components/Templates/Goodwill/Goodwill';
import { logosItems } from '../../data/goodwill';

describe('Goodwill', () => {
  test('should apply a background gradient to the title', () => {
    render(<Goodwill />);
    const title = screen.getByText('Ellos confían en nosotros');
    expect(title).toHaveStyle(`
          background: conic-gradient(
            from 180deg at 23% 50%,
            rgb(135, 231, 173) 19.64deg,
            rgb(31, 86, 95) 183.37deg);
        `);
  });
  test('should render logos inside the wrapper when Goodwill is rendered', () => {
    render(<Goodwill />);
    const wrapper = screen.getByTestId('wrapper');
    const logos = screen.getAllByTestId('logos-item');

    expect(wrapper).toBeInTheDocument();
    expect(logos.length).toBe(logosItems.length);
  });
  test('should render logos with images and text', () => {
    render(<Goodwill />);
    const logos = screen.getAllByTestId('logos-item');

    expect(logos.length).toBe(logosItems.length);
    logos.forEach((logo, index) => {
      const logoImage = logo.querySelector('img');
      const logoText = logo.querySelector('p');

      expect(logoImage).toBeInTheDocument();
      expect(logoImage).toHaveAttribute('src', logosItems[index].logo.src);
      expect(logoImage).toHaveAttribute('alt', logosItems[index].logo.alt);

      expect(logoText).toBeInTheDocument();
      expect(logoText.textContent).toBe(logosItems[index].text);
    });
  });
});
