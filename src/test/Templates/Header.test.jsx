/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Header from '../../components/Templates/Header/Header';
import { menu } from '../../data/menu';

describe('Header', () => {
  test('should render a toggle button', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('checkbox');
    expect(toggleButton).toBeInTheDocument();
  });
  test('should render a navigation menu with links to different sections', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(menu.length);
    menu.forEach((item, index) => {
      expect(links[index]).toHaveAttribute('href', item.href);
      expect(links[index]).toHaveTextContent(item.section);
    });
  });
  test('should render the Trademark component correctly', () => {
    render(<Header />);
    const trademarkElement = screen.getByTestId('trademark');
    expect(trademarkElement).toBeInTheDocument();
  });
  test('should display the Hero component', () => {
    render(<Header />);
    const heroComponent = screen.getByTestId('hero');
    expect(heroComponent).toBeInTheDocument();
  });
});
