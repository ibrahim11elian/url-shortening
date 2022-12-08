/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuState, setMenuState] = useState(false);
  const activeMenu = () => {
    document.querySelector(".nav-list").classList.toggle("active");
    setMenuState(!menuState);
  };
  return (
    <header className="app-header container">
      <nav className="nav-bar">
        <div className="logo">
          <img src="../images/logo.svg" alt="Shortly" />
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">features</a>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
          <li>
            <a href="#">resources</a>
          </li>
          <li>
            <div className="sign">
              <a href="#" id="login">
                login
              </a>
              <a href="#" id="signup">
                sign up
              </a>
            </div>
          </li>
        </ul>
        <div className="menu-btn" onClick={activeMenu}>
          <FontAwesomeIcon icon={!menuState ? faBars : faTimes} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
