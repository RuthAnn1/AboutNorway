import React from 'react';
import ImageArea from './ImageArea';
import '../styles/places.css';

export default function PlacesToGo() {
  return (
    <section className="places-page" style={{ padding: '2rem' }}>
      <h2>Places to Go</h2>
      <p>Recommendations for towns, parks, and scenic drives.</p>
      <ImageArea caption="Scenic spot" />
    </section>
  );
}
