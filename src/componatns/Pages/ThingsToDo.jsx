import React from 'react';
import ImageArea from './ImageArea';
import '../styles/things.css';

export default function ThingsToDo() {
  return (
    <section className="things-page" style={{ padding: '2rem' }}>
      <h2>Things to Do</h2>
      <p>Activities, tours, and experiences to try.</p>
      <ImageArea caption="Activity or tour" />
    </section>
  );
}
