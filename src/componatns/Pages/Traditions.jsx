import React from 'react';
import '../styles/traditions.css';
import Footer from "../footer/footer.jsx";

export default function Traditions() {
  return (
    <main className="traditions">

      {/* Hero */}
      <section className="traditions-hero">
        <h1>Norwegian Traditions</h1>
        <p>Customs, holidays, and practices that shape life in Norway</p>
      </section>

      {/* Timeline */}
      <section className="timeline">

        {/* Node 1 */}
        <div className="timeline-node left">
          <div className="timeline-content">
            <h2>National Holidays</h2>
            <div className="image-placeholder" />
            <p>
              Norway celebrates Constitution Day on May 17th with parades, flags, 
              and children leading the festivities. Christmas and Easter have rich 
              family-centered traditions.
            </p>
          </div>
        </div>

        {/* Node 2 */}
        <div className="timeline-node right">
          <div className="timeline-content">
            <h2>Food Traditions</h2>
            <div className="image-placeholder" />
            <p>
              Traditional dishes like lutefisk, lefse, and ribbe at Christmas are 
              essential. Seasonal and local ingredients play a big role.
            </p>
          </div>
        </div>

        {/* Node 3 */}
        <div className="timeline-node left">
          <div className="timeline-content">
            <h2>Outdoor Traditions</h2>
            <div className="image-placeholder" />
            <p>
              Friluftsliv, or open-air living, is a core tradition. Skiing, hiking, 
              and cabin life are enjoyed year-round and connect people to nature.
            </p>
          </div>
        </div>

        {/* Node 4 */}
        <div className="timeline-node right">
          <div className="timeline-content">
            <h2>Family & Social Traditions</h2>
            <div className="image-placeholder" />
            <p>
              Birthdays, confirmations, and small family gatherings emphasize close 
              relationships and meaningful celebrations.
            </p>
          </div>
        </div>

        {/* Node 5 */}
        <div className="timeline-node left">
          <div className="timeline-content">
            <h2>Cultural Festivals</h2>
            <div className="image-placeholder" />
            <p>
              Festivals like Sami Week, local music events, and folk dances celebrate 
              Norwegian heritage and community.
            </p>
          </div>
        </div>

      </section>
        <Footer text="© 2024 About Norway. All rights reserved." />
    </main>
  );
}
