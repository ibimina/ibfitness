import { NavLink } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState("false");
  const hanldeOpen = () => {
    return isOpen === "false" ? setIsOpen("true") : setIsOpen("false");
  };

  return (
    <header>
      <h1>Ibfitness</h1>
      <nav data-visible={isOpen}>
        <ul>
          <li className="nav-list" onClick={hanldeOpen}>
            <NavLink to="/" className="link" end>
              home
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/signup" className="link" onClick={hanldeOpen}>
              Sign up
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/login" className="link" onClick={hanldeOpen}>
              login
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        aria-label={isOpen ? "open the menu" : "close menu"}
        className="bg-img icon-btn mobile-navigation"
        aria-expanded={isOpen}
        onClick={hanldeOpen}
      ></button>
    </header>
  );
};
