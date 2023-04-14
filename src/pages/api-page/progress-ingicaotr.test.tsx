import { render, screen } from '@testing-library/react';
import ProgressIndicator from './progress-indicator';

describe('ProgressIndicator', () => {
  it('renders the Spin component', () => {
    render(<ProgressIndicator />);
    const spinElement = screen.getByTestId('spin-bar') as HTMLElement;
    expect(spinElement).toBeInTheDocument();
  });
});
