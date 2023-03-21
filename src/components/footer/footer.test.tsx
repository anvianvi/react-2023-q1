import { render, screen } from '@testing-library/react';
import MyFooter from './footer';

describe('MyFooter component', () => {
  it('should render the correct text', () => {
    render(<MyFooter />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass('footer');
    expect(footerElement).toHaveStyle({ textAlign: 'center' });

    expect(footerElement).toHaveTextContent('Created by');
    expect(
      footerElement.querySelector('a[href="https://github.com/anvianvi"][target="_blank"]')
    ).toHaveTextContent('Pavel Viarbitsi');
    expect(footerElement).toHaveTextContent('in March 2023 for');
    expect(
      footerElement.querySelector('a[href="https://rs.school/angular/"][target="_blank"]')
    ).toHaveTextContent('The Rolling Scopes');
  });
});
