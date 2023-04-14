import { render, screen } from '@testing-library/react';
import ApiPage from './api-page';

describe('ApiPage', () => {
  it('renders ApiPage component', () => {
    render(<ApiPage />);
    const myApiPage = screen.getByTestId('api-page') as HTMLElement;
    expect(myApiPage).toBeInTheDocument();
  });
});
