import { render, screen, act } from '@testing-library/react';
import ErrorPage, { CountdownAndRedirectToHome } from "./error-page";
import { useNavigate, useRouteError } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useRouteError: jest.fn(),
}));

describe('ErrorPage', () => {
  const errorMock = { status: '500', statusText: 'Internal Server Error', message: 'Something went wrong' };
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useRouteError as jest.Mock).mockReturnValue(errorMock);
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the error page with the countdown and error message', () => {
    render(<ErrorPage />);
    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
    expect(screen.getByText(/Sorry, an unexpected error has occurred./i)).toBeInTheDocument();
    expect(screen.getByText(/You will be redirected to home route in 3 seconds./i)).toBeInTheDocument();
    expect(screen.getByText(`${errorMock.status} ${errorMock.statusText}`)).toBeInTheDocument();
  });

  it('redirects to home page after the countdown ends', async () => {
    render(<ErrorPage />);
    expect(screen.getByText(/You will be redirected to home route in 3 seconds./i)).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('stops the countdown and redirects to home page when the component unmounts', () => {
    const { unmount } = render(<ErrorPage />);
    unmount();
    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});

describe('Countdown', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('renders the countdown with the initial count', () => {
    render(<CountdownAndRedirectToHome initialCount={3} />);
    expect(screen.getByText(/You will be redirected to home route in 3 seconds./i)).toBeInTheDocument();
  });

  it('updates the count every second', () => {
    render(<CountdownAndRedirectToHome initialCount ={3}  />);
    expect(screen.getByText(/You will be redirected to home route in 3 seconds./i)).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/You will be redirected to home route in 2 seconds./i)).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/You will be redirected to home route in 1 second./i)).toBeInTheDocument();
  });

  it('stops the countdown and redirects to home page when the count reaches 0', () => {
    render(<CountdownAndRedirectToHome initialCount={3} />);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('stops the countdown and redirects to home page when the component unmounts', () => {
    const { unmount } = render(<CountdownAndRedirectToHome initialCount={3} />);
    unmount();
    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});