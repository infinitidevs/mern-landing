/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import HeaderStyled from '../../components/Atoms/HeaderStyled';

describe('HeaderStyled', () => {
  test('should accept and render children components', () => {
    const children = <div>Test Children</div>;
    render(<HeaderStyled>{children}</HeaderStyled>);
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });
});
