import React from 'react';
import ImageArea from './ImageArea';
import '../styles/traditions.css';

export default function Traditions() {
  return (
    <section className="traditions-page" style={{ padding: '2rem' }}>
      <h2>Traditions</h2>
      <p>Information on traditional festivals, foods, and customs.</p>
      <ImageArea caption="Traditional festival" />
    </section>
  );
}
