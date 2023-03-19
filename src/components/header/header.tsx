import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import "./style.sass";

export default function MyHeader() {
  return (
    <Header className="header">
      <NavLink to={`/`} className="logo"></NavLink>
      <nav className="nav-panel">
        <NavLink to={`/about`}>About</NavLink>
      </nav>
    </Header>
  );
}
