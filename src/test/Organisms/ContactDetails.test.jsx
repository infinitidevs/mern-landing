/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ContactDetails from '../../components/Organisms/ContactDetails/ContactDetails';

describe('ContactDetails', () => {
  test('should render the component with correct props and children', () => {
    const src = 'image.jpg';
    const alt = 'alt text';
    const caption = 'Caption';
    const left = true;
    const text = 'First text';
    const textSecond = 'Second text';
    render(
      <ContactDetails
        src={src}
        alt={alt}
        caption={caption}
        left={left}
        text={text}
        textSecond={textSecond}
      />,
    );
    expect(screen.getByText(caption)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(textSecond)).toBeInTheDocument();
  });
});
