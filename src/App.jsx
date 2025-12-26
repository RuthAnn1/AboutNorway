import React, { useState, useEffect } from 'react';
import Header from './componatns/header/header';
import Home from './componatns/Pages/Home';
import About from './componatns/Pages/About';
import { Culture, Traditions, Sites, PlacesToGo, ThingsToDo, History, NorwegianWords } from './componatns/Pages';
import './componatns/styles/App.css'; 

function App() {
  const [page, setPage] = useState('home');

  // Navigate wrapper: updates state and browser history
  function navigate(p) {
    if (!p) return;
    setPage(p);
    try {
      window.history.pushState({ page: p }, '', '#' + p);
    } catch (e) {
      // ignore (server environments)
    }
  }

  // Handle back/forward (popstate) and initial hash
  useEffect(() => {
    function onPop(e) {
      const statePage = e.state && e.state.page;
      if (statePage) setPage(statePage);
      else {
        const hash = (window.location.hash || '').replace('#', '');
        if (hash) setPage(hash);
        else setPage('home');
      }
    }

    // initial load: pick up hash if present
    const initialHash = (window.location.hash || '').replace('#', '');
    if (initialHash) setPage(initialHash);

    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  function renderPage(props = {}) {
    // Norway page removed — fallback to Home for unknown pages
    if (page === 'about') return <About {...props} />;
    if (page === 'culture') return <Culture {...props} />;
    if (page === 'traditions') return <Traditions {...props} />;
    if (page === 'sites') return <Sites {...props} />;
    if (page === 'places') return <PlacesToGo {...props} />;
    if (page === 'things') return <ThingsToDo {...props} />;
    if (page === 'history') return <History {...props} />;
    if (page === 'norwegian' || page === 'words') return <NorwegianWords {...props} />;
    return <Home {...props} />;
  }

  return (
    <div className="app-container">
      <Header onNavigate={(p) => navigate(p)} currentPage={page} />
      <main className="content">
        {renderPage({ onNavigate: setPage })}
      </main>
    </div>
  );
}

export default App;