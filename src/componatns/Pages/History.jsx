import React from 'react';
import ImageArea from './ImageArea';
import '../styles/history.css';

export default function History() {
  return (
    <section className="history-page" style={{ padding: '2rem' }}>
      <h2>History</h2>
      <p>Overview of Norway's history, key events, and timelines.</p>
      <ImageArea caption="Historic scene or map" />
    </section>
  );
}
