import { render, screen, fireEvent } from '@testing-library/react';
import Main from './main-page';

describe('Main', () => {
  it('renders the search input', () => {
    render(<Main />);
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  it('filters the data and displays nothing if there are no matches', () => {
    render(<Main />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'zzzzzzzzzzzzzz' } });

    const productCards = screen.queryAllByTestId('product-card');
    expect(productCards.length).toBe(0);
    const noProductsMessage = screen.getByText('No products found');
    expect(noProductsMessage).toBeInTheDocument();
  });

  it('filters the data and displays the result', () => {
    render(<Main />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'Mens Casual Premium Slim Fit T-Shirts' } });
    const productCards = screen.queryAllByTestId('product-card');
    expect(productCards.length).toBe(1);
    expect(screen.getByText('Mens Casual Premium Slim Fit T-Shirts')).toBeInTheDocument();
  });

  it('filters products based on search value when search button is clicked', () => {
    render(<Main />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'Mens' } });
    fireEvent.click(screen.getByRole('button'));
    const productCards = screen.queryAllByTestId('product-card');
    expect(productCards.length).toBe(3);
  });
});
