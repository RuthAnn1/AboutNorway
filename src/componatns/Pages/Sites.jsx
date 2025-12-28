import React from 'react';
import '../styles/sites.css';
//import "../styles/App.css"
import Footer from "../footer/footer.jsx";

const sites = [
  {
    name: "Geirangerfjord",
    img: "/images/geiranger.jpg",
    description:
      "A UNESCO World Heritage fjord known for its deep blue waters, waterfalls, and steep mountain cliffs."
  },
  {
    name: "Lofoten Islands",
    img: "/images/lofoten.jpg",
    description:
      "A dramatic archipelago with sharp peaks, fishing villages, and some of Norway’s most photographed scenery."
  },
  {
    name: "Bryggen, Bergen",
    img: "/images/bryggen.jpg",
    description:
      "Historic wooden buildings from the Hanseatic era that tell the story of Bergen’s trading past."
  },
  {
    name: "Preikestolen",
    img: "/images/preikestolen.jpg",
    description:
      "A famous cliff rising over Lysefjord, offering one of Norway’s most iconic hiking views."
  },
  {
    name: "Oslo Opera House",
    img: "/images/opera.jpg",
    description:
      "A modern architectural landmark where visitors can walk on the roof overlooking the Oslo Fjord."
  },
  {
    name: "Tromsø",
    img: "/images/tromso.jpg",
    description:
      "Known as the gateway to the Arctic, perfect for Northern Lights, midnight sun, and Sami culture."
  }
];

export default function Sites() {
  return (
    <main className="sites-page">
      {/* Hero Section */}
      <section className="sites-hero">
        <h1>Famous Sites of Norway</h1>
        <p>Explore some of Norway’s most meaningful and breathtaking places, from natural wonders to cultural landmarks.</p>
      </section>

      {/* Flip Cards Grid */}
      <section className="sites-grid">
        {sites.map((site, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="image-placeholder">
                  {/* Replace with <img src={site.img} /> when ready */}
                </div>
                <h2>{site.name}</h2>
              </div>

              <div className="flip-card-back">
                <h2>{site.name}</h2>
                <p>{site.description}</p>
              </div>
            </div>
          </div>
        ))}
       
      </section>
       <Footer text="© 2024 About Norway. All rights reserved." />
    </main>
  );
}


