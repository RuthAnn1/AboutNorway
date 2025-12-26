import React from 'react';
import "../styles/culture.css";
import "../styles/App.css"

//import natureImg from "../assets/nature.jpg";
//import cityImg from "../assets/city.jpg";
//import workImg from "../assets/work.jpg";
//import communityImg from "../assets/community.jpg";

export default function Culture() {
  return (
    <main className="culture">

      {/* Hero */}
      <section className="culture-hero">
        <h1>Culture in Norway</h1>
        <p>
          A quiet, balanced way of life shaped by nature, trust, and respect
        </p>
      </section>

      {/* Grid */}
      <section className="culture-grid">

        <div className="culture-card">
          <div className="image-placeholder" />
          <h2>Nature as a Way of Life</h2>
          <p>
            Nature is deeply woven into everyday life in Norway. Time outdoors
            is seen as essential for balance, reflection, and well being.
          </p>
        </div>

        <div className="culture-card">
          <div className="image-placeholder" />
          <h2>Calm Cities and Simple Design</h2>
          <p>
            Cities are designed to feel open and calm, with clean lines,
            functional spaces, and easy access to green areas.
          </p>
        </div>

        <div className="culture-card">
          <div className="image-placeholder" />
          <h2>Work Life Balance</h2>
          <p>
            Norwegian work culture values trust, flat hierarchies, and
            respecting personal time outside of work.
          </p>
        </div>

        <div className="culture-card wide">
          <div className="image-placeholder" />
          <h2>Quiet Community and Connection</h2>
          <p>
            Social connections often grow slowly and quietly. While people may
            seem reserved at first, relationships tend to be deep and lasting
            once trust is built.
          </p>
        </div>

        <div className="culture-card wide">
          <div className="image-placeholder" />
          <h2>Living with Balance</h2>
          <p>
            Everyday life in Norway emphasizes balance between work and rest,
            people and nature, and independence and community.
          </p>
        </div>

      </section>

    </main>
  );
}

