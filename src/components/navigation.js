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
            01 Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/about">
            02 About
          </Link>
        </li>

        <li className="navigation__item">
          <Link className="navigation__link" to="/courses">
            03 Courses I've Taken
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/projects">
            04 Projects
          </Link>
        </li>
        {/*
        <li className="navigation__item">
          <Link className="navigation__link" to="/stack">
            05 My Tech Stack
          </Link>
        </li>
        */} 
      </ul>
    </nav>
  </div>
);

export default navigation;
