/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ServiceSpecsTitle from '../../components/Molecules/ServiceSpecsTitle/ServiceSpecsTitle';

describe('ServiceSpecsTitle', () => {
  test('should render the component with a subtitle prop', () => {
    render(<ServiceSpecsTitle subtitle="Test Subtitle" />);
    const subtitleElement = screen.getByText('Test Subtitle');
    expect(subtitleElement).toBeInTheDocument();
  });
});
