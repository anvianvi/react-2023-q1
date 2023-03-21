import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyHeader from './header';

describe('MyHeader', () => {
  it('should render the logo and navigation links', () => {
    render(
      <MemoryRouter>
        <MyHeader />
      </MemoryRouter>
    );

    const aboutLinkElement = screen.getByRole('link', { name: /about/i });
    expect(aboutLinkElement).toBeInTheDocument();
    expect(aboutLinkElement.getAttribute('href')).toBe('/about');
  });
});
