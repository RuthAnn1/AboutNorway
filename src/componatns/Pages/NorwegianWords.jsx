import React, { useState, useMemo } from 'react';
import ImageArea from './ImageArea';
import '../styles/norwegianWords.css';

const DEFAULT_WORDS = [
  // Greetings
  { no: 'hei', en: 'hello', pronunciation: 'hay', category: 'greetings' },
  { no: 'hallo', en: 'hello (formal)', pronunciation: 'hah-loo', category: 'greetings' },
  { no: 'ha det', en: 'goodbye', pronunciation: 'hah det', category: 'greetings' },
  { no: 'ja', en: 'yes', pronunciation: 'yah', category: 'greetings' },
  { no: 'nei', en: 'no', pronunciation: 'nay', category: 'greetings' },

  // Polite words
  { no: 'takk', en: 'thank you', pronunciation: 'tahk', category: 'polite' },
  { no: 'takk skal du ha', en: 'thank you very much', pronunciation: 'tahk skahl doo hah', category: 'polite' },
  { no: 'vær så snill', en: 'please', pronunciation: 'vair shaw shnill', category: 'polite' },
  { no: 'unnskyld', en: 'sorry/excuse me', pronunciation: 'oon-shyld', category: 'polite' },
  { no: 'vær så god', en: 'here you are', pronunciation: 'vair shaw good', category: 'polite' },

  // Common phrases
  { no: 'Hvordan går det?', en: 'How are you?', pronunciation: 'voor-dan gor det', category: 'phrases' },
  { no: 'Det går bra', en: 'I am fine', pronunciation: 'det gor brah', category: 'phrases' },
  { no: 'Hva heter du?', en: 'What is your name?', pronunciation: 'vah het-er doo', category: 'phrases' },
  { no: 'Jeg heter...', en: 'My name is...', pronunciation: 'yay het-er', category: 'phrases' },
  { no: 'Jeg forstår ikke', en: 'I do not understand', pronunciation: 'yay for-stahr ik-kuh', category: 'phrases' },

  // Food & Drink
  { no: 'vann', en: 'water', pronunciation: 'vahn', category: 'food' },
  { no: 'kaffe', en: 'coffee', pronunciation: 'kah-feh', category: 'food' },
  { no: 'brød', en: 'bread', pronunciation: 'brud', category: 'food' },
  { no: 'fisk', en: 'fish', pronunciation: 'fisk', category: 'food' },
  { no: 'kjøtt', en: 'meat', pronunciation: 'chyut', category: 'food' },

  // Numbers
  { no: 'en', en: 'one', pronunciation: 'en', category: 'numbers' },
  { no: 'to', en: 'two', pronunciation: 'too', category: 'numbers' },
  { no: 'tre', en: 'three', pronunciation: 'treh', category: 'numbers' },
  { no: 'fire', en: 'four', pronunciation: 'fee-reh', category: 'numbers' },
  { no: 'fem', en: 'five', pronunciation: 'fem', category: 'numbers' },
];

function Flashcard({ pair, flipped, onFlip }) {
  return (
    <div
      role="button"
      onClick={onFlip}
      onKeyDown={(e) => e.key === 'Enter' && onFlip()}
      tabIndex={0}
      className="flashcard"
    >
      <div className="card-inner">
        <div className="card-text">
          {flipped ? pair.en : pair.no}
        </div>
        {flipped && pair.pronunciation && (
          <div className="card-pronunciation">
            ({pair.pronunciation})
          </div>
        )}
        <div className="card-hint">
          {!flipped && '🔄 Click to reveal'}
        </div>
      </div>
    </div>
  );
}

export default function NorwegianWords() {
  const [words] = useState(DEFAULT_WORDS);
  const [order, setOrder] = useState(() => words.map((_, i) => i));
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(() => new Set());
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('cards'); // 'cards' or 'list'

  const categories = useMemo(() => {
    const cats = new Set(words.map(w => w.category));
    return ['all', ...Array.from(cats).sort()];
  }, [words]);

  const filteredWords = useMemo(() => {
    return filter === 'all' ? words : words.filter(w => w.category === filter);
  }, [words, filter]);

  const filteredOrder = useMemo(() => {
    return order.filter(i => filteredWords.includes(words[i]));
  }, [order, filteredWords, words]);

  const current = useMemo(() => words[filteredOrder[idx]] || null, [words, filteredOrder, idx]);

  function next() {
    setFlipped(false);
    setIdx((i) => Math.min(filteredOrder.length - 1, i + 1));
  }

  function prev() {
    setFlipped(false);
    setIdx((i) => Math.max(0, i - 1));
  }

  function shuffle() {
    const shuffled = [...filteredOrder].sort(() => Math.random() - 0.5);
    setOrder(filteredOrder.map((val, idx) => {
      const wordIdx = words.indexOf(words[val]);
      return order[shuffled.indexOf(wordIdx)];
    }));
    setIdx(0);
    setFlipped(false);
  }

  function toggleKnown() {
    if (!current) return;
    const s = new Set(known);
    const id = filteredOrder[idx];
    if (s.has(id)) s.delete(id); else s.add(id);
    setKnown(s);
  }

  const progress = (known.size / words.length) * 100;

  return (
    <section className="norwegian-words">
      <h2>Norwegian Words — Learn & Practice</h2>
      <p>Master essential Norwegian words with flashcards, pronunciation, and category learning.</p>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-label">Overall Progress: {known.size} / {words.length}</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => {
              setFilter(cat);
              setIdx(0);
              setFlipped(false);
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* View Toggle */}
      <div className="view-toggle">
        <button 
          className={`toggle-btn ${view === 'cards' ? 'active' : ''}`}
          onClick={() => { setView('cards'); setIdx(0); setFlipped(false); }}
        >
          📇 Cards
        </button>
        <button 
          className={`toggle-btn ${view === 'list' ? 'active' : ''}`}
          onClick={() => setView('list')}
        >
          📋 List
        </button>
      </div>

      {view === 'cards' ? (
        <div className="cards-view">
          {current && (
            <>
              <Flashcard pair={current} flipped={flipped} onFlip={() => setFlipped((v) => !v)} />

              <div className="controls">
                <button onClick={prev} disabled={idx === 0} className="control-btn">← Prev</button>
                <button onClick={() => setFlipped((v) => !v)} className="control-btn flip-btn">
                  {flipped ? '← Show Norwegian' : 'Show English →'}
                </button>
                <button onClick={next} disabled={idx >= filteredOrder.length - 1} className="control-btn">Next →</button>
                <button onClick={shuffle} className="control-btn shuffle-btn">🔀 Shuffle</button>
                <button 
                  onClick={toggleKnown} 
                  className={`control-btn ${known.has(filteredOrder[idx]) ? 'marked' : ''}`}
                >
                  {known.has(filteredOrder[idx]) ? '✓ Known' : 'Mark Known'}
                </button>
              </div>

              <div className="card-info">
                Card {idx + 1} of {filteredOrder.length} — Known in category: {filteredOrder.filter(i => known.has(i)).length}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="list-view">
          <table className="word-table">
            <thead>
              <tr>
                <th>Norwegian</th>
                <th>English</th>
                <th>Pronunciation</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredWords.map((word, i) => (
                <tr key={i} className={known.has(words.indexOf(word)) ? 'known' : ''}>
                  <td className="norwegian">{word.no}</td>
                  <td>{word.en}</td>
                  <td className="pronunciation">{word.pronunciation}</td>
                  <td className="category-tag">{word.category}</td>
                  <td>
                    <button
                      className="status-btn"
                      onClick={() => {
                        const s = new Set(known);
                        const id = words.indexOf(word);
                        if (s.has(id)) s.delete(id); else s.add(id);
                        setKnown(s);
                      }}
                    >
                      {known.has(words.indexOf(word)) ? '✓' : '○'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
