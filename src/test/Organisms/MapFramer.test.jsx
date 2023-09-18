/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import MapFramer from '../../components/Organisms/MapFramer/MapFramer';

describe('MapFramer', () => {
  test('should render a map frame with custom source URL', () => {
    render(<MapFramer />);
    const mapFrame = screen.getByTitle('Map');
    expect(mapFrame).toBeInTheDocument();
    expect(mapFrame).toHaveAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3037.6365400881473!2d-3.7034833999999996!3d40.4169019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1692924444248!5m2!1ses!2ses',
    );
  });
});
