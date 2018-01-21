import React from "react";
import Link from "gatsby-link";

const id = "navi-toggle";
const navigation = () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id={id} />
    <label htmlFor={id} className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" to="/">
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/stack">
            02 My Stack
          </Link>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>03</span>Popular tours
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>04</span>Stories
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>05</span>Book now
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default navigation;
