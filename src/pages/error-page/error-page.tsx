import './style.sass';
import { useEffect, useState } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { RouteError } from '../../interfaces';

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div className="error-page" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <CountdownAndRedirectToHome initialCount={3} />
      <p>
        <i>
          {error.status} {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}

export function CountdownAndRedirectToHome({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
      navigate(`/`);
    }

    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div>
      <p>You will be redirected to home route in {count} seconds.</p>
    </div>
  );
}
