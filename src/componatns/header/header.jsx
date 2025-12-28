import React, { useState } from 'react';
import './header.css';

function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(page) {
    setMenuOpen(false);
    if (onNavigate) onNavigate(page);
  }

  return (
    <header>
      <div className="header-title">
        <h1>
          <span className="trans-word cta-trans" data-trans="Welcome">
            Velkommen
          </span>{' '}
          to Norway
        </h1>
        <h4 className="tagline">
          Explore the Land of Fjords, Northern Lights & Viking Heritage
        </h4>

        {/* Hamburger button */}
        <button
          className={`menu-button ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? 'visible' : ''}`} aria-hidden={!menuOpen}>
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
      </div>
    </header>
  );
}

export default Header;
