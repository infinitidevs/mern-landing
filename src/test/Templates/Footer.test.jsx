/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Footer from '../../components/Templates/Footer/Footer';

describe('Footer', () => {
  test('should content the correct text', () => {
    render(<Footer />);
    expect(screen.getByText('Estudio Jurídico 2023')).toBeInTheDocument();
  });
});
