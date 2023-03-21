import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Root from './root';

describe('Root', () => {
  it('renders the outlet', () => {
    render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
    const outlet = screen.getByTestId('outlet');
    expect(outlet).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
