import React from 'react';
import ImageArea from './ImageArea';
import '../styles/sites.css';

export default function Sites() {
  return (
    <section className="sites-page" style={{ padding: '2rem' }}>
      <h2>Sites</h2>
      <p>Popular sites and landmarks to visit.</p>
      <ImageArea caption="Landmark or site" />
    </section>
  );
}
