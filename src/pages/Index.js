import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Clay Roberson's Personal Website"
      + 'Actively Developing Career & Colorado State University Alumni.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome to my corner of the web!</Link>
          </h2>
          <p style={{ fontWeight: 'Bold' }}>
            Let me show you around!
          </p>
          <p>
            Want to know the author? Learn more{' '}<Link to="/about">about me</Link>. <br />
            Check out my{' '}<Link to="/resume">resume</Link> for my profession journey.<br />
            Explore my{' '}<Link to="/projects">projects</Link> to see my skills in action.<br />
            Feel free to{' '}<Link to="/contact">reach out</Link> if you&apos;d like to collaborate!
          </p>
        </div>
      </header>
      <p style={{ fontSize: '12px' }}>
        {' '}
        Stay awhile and take a look around to find
        a beautiful, responsive, statically-generated, react application
        written with modern Javascript.
        <br />
        Source available{' '}
        <a href="https://github.com/robeyclay/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
