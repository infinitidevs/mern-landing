/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Menu from '../../components/Molecules/Menu/Menu';
import { menu } from '../../data/menu';

describe('Menu', () => {
  test('should render a navigation menu with links to different sections', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(menu.length);
    menu.forEach((item, index) => {
      expect(links[index]).toHaveAttribute('href', item.href);
      expect(links[index]).toHaveTextContent(item.section);
    });
  });
});
