/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import BurgerMenu from '../../components/Molecules/BurgerMenu/BurgerMenu';

describe('BurgerMenu', () => {
  test('should render a toggle button', () => {
    render(<BurgerMenu />);
    const toggleButton = screen.getByRole('checkbox');
    expect(toggleButton).toBeInTheDocument();
  });
});
