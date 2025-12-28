import React, { useState, useMemo } from 'react';
import '../styles/norwegianwords.css';


const DEFAULT_WORDS = [
  { no: 'hei', en: 'hello', pronunciation: 'hay', category: 'greetings' },
  { no: 'hallo', en: 'hello (formal)', pronunciation: 'hah-loo', category: 'greetings' },
  { no: 'ha det', en: 'goodbye', pronunciation: 'hah det', category: 'greetings' },
  { no: 'ja', en: 'yes', pronunciation: 'yah', category: 'greetings' },
  { no: 'nei', en: 'no', pronunciation: 'nay', category: 'greetings' },
];

export default function NorwegianWords() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(new Set());
  const [view, setView] = useState('deck'); // 'deck' or 'list'

  const currentWord = DEFAULT_WORDS[currentIdx];

  function nextCard() {
    setFlipped(false);
    setCurrentIdx((i) => (i + 1 < DEFAULT_WORDS.length ? i + 1 : 0));
  }

  function prevCard() {
    setFlipped(false);
    setCurrentIdx((i) => (i - 1 >= 0 ? i - 1 : DEFAULT_WORDS.length - 1));
  }

  function toggleKnown(idx) {
    const s = new Set(known);
    if (s.has(idx)) s.delete(idx);
    else s.add(idx);
    setKnown(s);
  }

  const progress = (known.size / DEFAULT_WORDS.length) * 100;

  return (
    <section className="norwegian-words">
      <h2>Norwegian Words — Flashcards</h2>
      <p>Click a card to flip it. Mark words you know and check your progress!</p>

      {/* View toggle */}
      <div className="view-toggle">
        <button 
          className={view === 'deck' ? 'active' : ''} 
          onClick={() => setView('deck')}
        >
          Deck View
        </button>
        <button 
          className={view === 'list' ? 'active' : ''} 
          onClick={() => setView('list')}
        >
          List View
        </button>
      </div>

      {/* Progress */}
      <div className="deck-progress">
        Known: {known.size} / {DEFAULT_WORDS.length} ({Math.round(progress)}%)
      </div>

      {view === 'deck' ? (
        <>
          <div className="deck-container">
            {currentWord && (
              <div className={`flashcard-deck`} onClick={() => setFlipped(!flipped)}>
                <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
                  <div className="card-front">{currentWord.no}</div>
                  <div className="card-back">
                    {currentWord.en}
                    <div className="pronunciation">({currentWord.pronunciation})</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="deck-controls">
            <button onClick={prevCard}>← Previous</button>
            <button onClick={() => setFlipped(!flipped)}>
              {flipped ? 'Show Norwegian' : 'Show English'}
            </button>
            <button onClick={nextCard}>Next →</button>
            <button 
              className={known.has(currentIdx) ? 'marked' : ''} 
              onClick={() => toggleKnown(currentIdx)}
            >
              {known.has(currentIdx) ? '✓ Known' : 'Mark Known'}
            </button>
          </div>
        </>
      ) : (
        <div className="list-view">
          <table>
            <thead>
              <tr>
                <th>Norwegian</th>
                <th>English</th>
                <th>Pronunciation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {DEFAULT_WORDS.map((word, idx) => (
                <tr key={idx} className={known.has(idx) ? 'known' : ''}>
                  <td>{word.no}</td>
                  <td>{word.en}</td>
                  <td>{word.pronunciation}</td>
                  <td>
                    <button onClick={() => toggleKnown(idx)}>
                      {known.has(idx) ? '✓' : '○'}
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
