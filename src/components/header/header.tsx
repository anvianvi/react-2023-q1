import { Header } from 'antd/es/layout/layout';
import { NavLink } from 'react-router-dom';
import './style.sass';

export default function MyHeader() {
  return (
    <Header className="header" data-testid="header">
      <NavLink to={`/`} className="logo"></NavLink>
      <nav className="nav-panel">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          to={`/`}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          to={`/apipage`}
        >
          ApiTask
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          to={`/about`}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          to={`/subscribe`}
        >
          subscribe
        </NavLink>
      </nav>
    </Header>
  );
}
