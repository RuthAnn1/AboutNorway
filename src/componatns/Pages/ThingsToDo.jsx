import React from 'react';
import '../styles/things.css';
import profileImg from '../photos/mypic.jpg';
function ImageArea({ title, imgSrc, description }) {
  return (
    <div className="image-area">
      <img src={imgSrc} alt={title} />
      <div className="image-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

const thingsToDo = [
  { name: "Fjord Cruises", img: "/images/fjord-cruise.jpg", description: "Experience Norway's stunning fjords up close..." },
  { name: "Northern Lights Tours", img: "/images/northern-lights.jpg", description: "Join a tour to witness the magical Aurora..." },
  { name: "Hiking Adventures", img: "/images/hiking.jpg", description: "Explore Norway's diverse trails..." },
  { name: "Sami Cultural Experiences", img: "/images/sami-culture.jpg", description: "Learn about the indigenous Sami people..." }
];

export default function ThingsToDo() {
  return (
    <main className="things-page" style={{ padding: '2rem' }}>
      <h2>Things to Do</h2>
      <p>Activities, tours, and experiences to try.</p>
      <section>
        {thingsToDo.map((thing, index) => (
          <ImageArea
            key={index}
            title={thing.name}
            imgSrc={thing.img}
            description={thing.description}
          />
        ))}
      </section>
    </main>
  );
}
