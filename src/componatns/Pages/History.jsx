import ImageArea from './ImageArea';
import '../styles/history.css';
import React from 'react';
import Footer from "../footer/footer.jsx";


export default function History({ onNavigate }) {
  const historyData = [
    {
      icon: '🛡️',
      title: 'Viking Era',
      date: '793 – 1066 AD',
      description: 'Norwegian Vikings explored, traded, and raided across Europe, leaving a lasting cultural and maritime legacy.',
    },
    {
      icon: '⛪',
      title: 'Medieval Norway',
      date: '11th – 14th Century',
      description: 'Christianity spread, cities grew, and trade networks flourished, shaping Norway’s medieval society.',
    },
    {
      icon: '🏰',
      title: 'Union & Renaissance',
      date: '1380 – 1814',
      description: 'Norway was in unions with Denmark and Sweden, while art, architecture, and literature developed significantly.',
    },
    {
      icon: '🎌',
      title: 'Independence',
      date: '1905',
      description: 'Norway became fully independent from Sweden, establishing its modern national identity and government.',
    },
    {
      icon: '🛢️',
      title: 'Modern Norway',
      date: '20th – 21st Century',
      description: 'Known for oil wealth, social democracy, and strong cultural identity, Norway today blends history with modern innovation.',
    },
  ];

  return (
    <div className="history-container">
      <section className="history-hero">
        <h1>History of Norway</h1>
        <p>Explore Norway’s journey from Viking explorers to the modern nation.</p>
      </section>

      <section className="timeline-grid">
        {historyData.map((item, index) => (
          <div className="timeline-card" key={index}>
            <div className="timeline-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="timeline-date">{item.date}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
      <Footer text="© 2024 About Norway. All rights reserved." />
    </div>

  );
}
