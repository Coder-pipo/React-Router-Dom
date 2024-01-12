import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <header>
        <a href="#">Logo</a>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section>
          <h1>About Page</h1>
      </section>
    </div>
  );
}

export default About;
