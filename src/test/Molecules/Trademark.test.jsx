/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Trademark from '../../components/Molecules/Trademark/Trademark';

describe('Footer', () => {
  test('should render Trademark component with custom Logo src and alt values', () => {
    render(<Trademark />);
    expect(screen.getByAltText('Logo')).toHaveAttribute('src', '/assets/header/logo.png');
  });
  test('should render the Trademark component with a Title', () => {
    render(<Trademark />);
    expect(screen.getByText('Estudio Jurídico')).toBeInTheDocument();
  });
});
