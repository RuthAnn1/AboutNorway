import React, { useState } from 'react';
import './header.css'; 

function Header({ onNavigate, currentPage }) {
  const [open, setOpen] = useState(false);

  function navigate(page) {
    setOpen(false);
    if (onNavigate) onNavigate(page);
  }

  return (
    <div id="container">
      <header>
        <div className="header-row">
          <div className="header-title">
            <div className="header-text">
              <h1><span className="trans-word cta-trans" data-trans="Welcome">Velkommen</span> to Norway</h1>
              <p className="tagline">Explore the Land of Fjords, Northern Lights & Viking Heritage</p>
            </div>
          </div>

          <button
            className={`menu-button ${open ? 'open' : ''}`}
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        <nav className={`nav-menu ${open ? 'visible' : ''}`} aria-hidden={!open}>
          <button onClick={() => navigate('home')} className="nav-link">Home</button>
          <button onClick={() => navigate('culture')} className="nav-link">Culture</button>
          <button onClick={() => navigate('traditions')} className="nav-link">Traditions</button>
          <button onClick={() => navigate('sites')} className="nav-link">Sites</button>
          <button onClick={() => navigate('places')} className="nav-link">Places to go</button>
          <button onClick={() => navigate('history')} className="nav-link">History</button>
          <button onClick={() => navigate('norwegian')} className="nav-link">Norwegian Words</button>
          <button onClick={() => navigate('things')} className="nav-link">Things to do</button>
          <button onClick={() => navigate('about')} className="nav-link">About the Author</button>
        </nav>
      </header>
    </div>
  );
}

export default Header;