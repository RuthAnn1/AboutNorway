import React from 'react';
import ImageArea from './ImageArea';
import '../styles/things.css';

const thingsToDo = [
  {
    name: "Fjord Cruises",
    img: "/images/fjord-cruise.jpg",
    description:
      "Experience Norway's stunning fjords up close with guided boat tours that showcase breathtaking landscapes."
  },
  {
    name: "Northern Lights Tours",
    img: "/images/northern-lights.jpg",
    description:
      "Join a tour to witness the magical Aurora Borealis in the Arctic regions of Norway." 
  },
  {
    name: "Hiking Adventures",  
    img: "/images/hiking.jpg",
    description:
      "Explore Norway's diverse trails, from easy walks to challenging hikes in the mountains and national parks."  
  },
  {
    name: "Sami Cultural Experiences",
    img: "/images/sami-culture.jpg",
    description:
      "Learn about the indigenous Sami people through cultural tours, traditional food, and handicrafts."
  }
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
