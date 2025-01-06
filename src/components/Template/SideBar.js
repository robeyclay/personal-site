import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Clay M. Roberson</h2>
        <p>
          <a href="mailto:work@clayroberson.com">work@clayroberson.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I’m Clay Roberson! With a strong foundation in DevOps,
        technical support, and infrastructure observability,
        I thrive on building innovative solutions that
        simplify workflows and improve client satisfaction.
        Whether collaborating with teams or leading initiatives,
        I focus on driving measurable outcomes and continuous improvement.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Clay Roberson <Link to="/">work@clayroberson.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
