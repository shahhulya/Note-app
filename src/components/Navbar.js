import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand"> Note App </div>{" "}
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" exact>
            Главная
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className="nav-link active" aria-current="page" to="/about">
            Информация
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
