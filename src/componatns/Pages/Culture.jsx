import React from 'react';
import "../styles/culture.css";
import "../styles/App.css"
import Footer from "../footer/footer.jsx";
import natureImg from '../photos/nature.jpg' ;
import cityImg from "../photos/city.jpg";
import workImg from "../photos/balance.jpg";
import quietImg from "../photos/quiet.jpg";
import livingImg from "../photos/stones.jpg";

export default function Culture() {
  return (
    <main className="culture">
      <section className="culture-hero">
        <h1>Culture in Norway</h1>
        <p>
          A quiet, balanced way of life shaped by nature, trust, and respect
        </p>
      </section>
      <section className="culture-grid">

        <div className="culture-card">
          <img className="image-placeholder" src={natureImg} alt="Nature as a Way of Life" />
          <h2>Nature as a Way of Life</h2>
          <p>
            Nature is deeply woven into everyday life in Norway. Time outdoors
            is seen as essential for balance, reflection, and well being.
          </p>
        </div>

        <div className="culture-card">
          <img className="image-placeholder" src={cityImg} alt="Calm Cities and Simple Design" />
          <h2>Calm Cities and Simple Design</h2>
          <p>
            Cities are designed to feel open and calm, with clean lines,
            functional spaces, and easy access to green areas.
          </p>
        </div>

        <div className="culture-card">
          <img className="image-placeholder" src={workImg} alt="Work Life Balance" />
          <h2>Work Life Balance</h2>
          <p>
            Norwegian work culture values trust, flat hierarchies, and
            respecting personal time outside of work.
          </p>
        </div>

        <div className="culture-card wide">
          <img className="image-placeholder" src={quietImg} alt="Quiet Community and Connection" />
          <h2>Quiet Community and Connection</h2>
          <p>
            Social connections often grow slowly and quietly. While people may
            seem reserved at first, relationships tend to be deep and lasting
            once trust is built.
          </p>
        </div>

        <div className="culture-card wide">
          <img className="image-placeholder" src={livingImg} alt="Living with Balance" />
          <h2>Living with Balance</h2>
          <p>
            Everyday life in Norway emphasizes balance between work and rest,
            people and nature, and independence and community.
          </p>
        </div>

      </section>
      <Footer text="© 2024 About Norway. All rights reserved." />
    </main>
  );
}

