import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './about';

describe('About component', () => {
  it('renders the component', () => {
    render(<About />);
    const aboutText = screen.getByText(/hi this will be some aplication/i);
    expect(aboutText).toBeInTheDocument();
  });
});
