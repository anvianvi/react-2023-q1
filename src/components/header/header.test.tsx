import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyHeader from './header';

describe('MyHeader', () => {
  it('should render the logo and navigation links', () => {
    render(
      <MemoryRouter>
        <MyHeader />
      </MemoryRouter>
    );

    const logoElement = screen.getByRole('link', { name: /home/i });
    const homeLinkElement = screen.getByRole('link', { name: /home/i });
    const apiTaskLinkElement = screen.getByRole('link', { name: /apitask/i });
    const aboutLinkElement = screen.getByRole('link', { name: /about/i });
    const subscribeLinkElement = screen.getByRole('link', { name: /subscribe/i });

    expect(logoElement.getAttribute('href')).toBe('/');
    expect(homeLinkElement.getAttribute('href')).toBe('/');
    expect(apiTaskLinkElement.getAttribute('href')).toBe('/apipage');
    expect(aboutLinkElement.getAttribute('href')).toBe('/about');
    expect(subscribeLinkElement.getAttribute('href')).toBe('/subscribe');
  });
  it('it higlite only curent nav-link by active class', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MyHeader />
      </MemoryRouter>
    );

    const aboutLinkElement = screen.getByRole('link', { name: /about/i });
    const subscribeLinkElement = screen.getByRole('link', { name: /subscribe/i });

    fireEvent.click(aboutLinkElement);

    expect(aboutLinkElement).toHaveClass('active');
    expect(subscribeLinkElement).not.toHaveClass('active');
  });
  it('it higlite only curent nav-link by active class', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MyHeader />
      </MemoryRouter>
    );

    const aboutLinkElement = screen.getByRole('link', { name: /about/i });
    const subscribeLinkElement = screen.getByRole('link', { name: /subscribe/i });

    fireEvent.click(subscribeLinkElement);

    expect(subscribeLinkElement).toHaveClass('active');
    expect(aboutLinkElement).not.toHaveClass('active');
  });
});
