/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Hero from '../../components/Molecules/Hero/Hero';

describe('Footer', () => {
  test('should render CompanyTitle and Title components with default props', () => {
    render(<Hero />);
    expect(screen.getByText('Estudio Jurídico')).toBeInTheDocument();
    expect(screen.getByText('Derecho penal y judicial')).toBeInTheDocument();
  });
});
