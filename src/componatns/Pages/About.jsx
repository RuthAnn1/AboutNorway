import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section className="about-page">
      <h2>About the Author</h2>

      <div className="author-layout">
        <img className="author-photo" src="/assets/author.jpg" alt="Ruth Ann Aakre" />

        <div className="author-info">
          <div className="author-name">Ruth Ann Aakre</div>
          <div className="author-bio">
            <p>Write a brief biography here. You can include background, interests, and anything you'd like visitors to know.</p>
            <p>Example: I am a writer and photographer who loves Norway's landscapes. Replace this text with your own details.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
