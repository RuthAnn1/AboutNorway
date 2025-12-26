import React from 'react';
import '../styles/places.css';
import Footer from "../footer/footer.jsx";

export default function Places() {
  return (
    <div className="places">
      {/* Hero */}
      <section className="places-hero">
        <h1>Places to Go</h1>
        <p>
          Destinations that highlight nature, culture, and everyday life.
        </p>
      </section>

      {/* Featured */}
      <section className="places-featured">
        <div className="featured-image"></div>
        <div className="featured-content">
          <h2 className='change-color'>Oslo</h2>
          <p className='change-color'>
            A city where modern design meets forests, fjords, and a slower pace
            of living.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="places-grid">
        <div className="place-card">
          <div className="card-image"></div>
          <h3>Bergen</h3>
          <p>Historic harbor city surrounded by mountains and rain.</p>
        </div>

        <div className="place-card">
          <div className="card-image"></div>
          <h3>Lofoten</h3>
          <p>Dramatic peaks, fishing villages, and northern lights.</p>
        </div>

        <div className="place-card">
          <div className="card-image"></div>
          <h3>Trondheim</h3>
          <p>A cozy student city with deep Viking history.</p>
        </div>
      </section>
      <Footer text="© 2024 About Norway. All rights reserved." />
    </div>
    
  );
}