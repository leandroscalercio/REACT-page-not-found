import React from 'react';
import Button from '../Button/Button';

import './style.css';

const Content = () => {
  return (
    <div className="content">
      <img src="/assets/espantalho.png" alt="espantalho" />
      <section>
        <h1>I have bad news for you</h1>
        <p>
          the page you are looking for might removed or is temporarily
          unavailable
        </p>
        <Button />
      </section>
    </div>
  );
};

export default Content;
