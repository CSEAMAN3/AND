import React from "react";
import Burger from "../Burger/Burger";
import "./Header.css";
import Logo from "../../images/AND_Primary_Logo_Vector_White.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img className="header-logo" src={Logo} alt="AND company logo" />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <Link className="header-nav-link" to="/">
              <li className="nav-list-item">Skills</li>
            </Link>
            <Link className="header-nav-link" to="/">
              <li className="nav-list-item">Meals</li>
            </Link>
            <Link className="header-nav-link" to="/">
              <li className="nav-list-item">Get Involved</li>
            </Link>
          </ul>
        </nav>
        <div className="burger-container">
          <Burger />
        </div>
      </div>
    </header>
  );
}
