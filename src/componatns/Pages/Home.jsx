import React from 'react';
import '../styles/home.css';

export default function Home({ onNavigate }) {
  return (
    <div className="home-container">
      {/* Two Column Layout */}
      <div className="home-grid">
        {/* Welcome Guide */}
        <section className="welcome-guide">
          <h2>How to Navigate</h2>
          <div className="guide-content">
            <p>Welcome to your complete guide to Norway! This site is organized into easy-to-explore sections:</p>
            
            <div className="nav-guide">
              <button className="guide-item" onClick={() => onNavigate && onNavigate('home')}>
                <span className="guide-icon">🏠</span>
                <div>
                  <h4>Home</h4>
                  <p>You are here! Start your journey.</p>
                </div>
              </button>

              <button className="guide-item" onClick={() => onNavigate && onNavigate('about')}>
                <span className="guide-icon">🌍</span>
                <div>
                  <h4>About Norway</h4>
                  <p>Discover facts and background about the country.</p>
                </div>
              </button>

              <button className="guide-item" onClick={() => onNavigate && onNavigate('culture')}>
                <span className="guide-icon">🎭</span>
                <div>
                  <h4>Culture & Traditions</h4>
                  <p>Learn about Norwegian customs and celebrations.</p>
                </div>
              </button>

              <button className="guide-item" onClick={() => onNavigate && onNavigate('sites')}>
                <span className="guide-icon">📍</span>
                <div>
                  <h4>Places & Sites</h4>
                  <p>Explore landmarks and scenic destinations.</p>
                </div>
              </button>

              <button className="guide-item" onClick={() => onNavigate && onNavigate('things')}>
                <span className="guide-icon">⚡</span>
                <div>
                  <h4>Things to Do</h4>
                  <p>Find activities and experiences to try.</p>
                </div>
              </button>

              <button className="guide-item" onClick={() => onNavigate && onNavigate('norwegian')}>
                <span className="guide-icon">🗣️</span>
                <div>
                  <h4>Norwegian Words</h4>
                  <p>Learn essential words and phrases.</p>
                </div>
              </button>
            </div>

            <p className="guide-note">Use the menu button at the top to navigate between sections!</p>
          </div>
        </section>

        

        {/* Highlights Section */}
        <section className="highlights">
          <h2>What Makes Norway Unique</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🏔️</div>
              <h3>Stunning Fjords</h3>
              <p>Deep glacially-carved valleys with dramatic cliffs and cascading waterfalls.</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">✨</div>
              <h3>Northern Lights</h3>
              <p>Experience the magical Aurora Borealis dancing across Arctic skies.</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">⛷️</div>
              <h3>Winter Sports</h3>
              <p>World-class skiing, ice fishing, and outdoor winter adventures.</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🛡️</div>
              <h3>Viking Heritage</h3>
              <p>Rich history of exploration and innovation rooted in Viking traditions.</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🌲</div>
              <h3>Nature & Wilderness</h3>
              <p>Pristine forests, mountains, and untouched natural landscapes.</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🎨</div>
              <h3>Nordic Design</h3>
              <p>World-renowned minimalist design and innovative architecture.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="cta-section">
        <h2><span className="trans-word cta-trans" data-trans="Ready to Explore?">Klar til å utforske?</span></h2>
        <p>Choose a topic from the menu above or start with any section that interests you. <span className="trans-word cta-trans" data-trans="Happy exploring!">God utforskning!</span></p>
      </section>
    </div>
  );
}
