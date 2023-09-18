/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Navbar from '../../components/Organisms/Navbar/Navbar';
import { menu } from '../../data/menu';

describe('Navbar', () => {
  test('should render a toggle button', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('checkbox');
    expect(toggleButton).toBeInTheDocument();
  });
  test('should display the Menu component', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('menu')).toBeInTheDocument();
  });
  test('should render a navigation menu with links to different sections', () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(menu.length);
    menu.forEach((item, index) => {
      expect(links[index]).toHaveAttribute('href', item.href);
      expect(links[index]).toHaveTextContent(item.section);
    });
  });
});
