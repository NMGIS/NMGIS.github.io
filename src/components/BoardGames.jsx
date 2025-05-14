import { boardGames } from '../data/boardGameData';
import RadarChart from './RadarChart';
import React, { useRef, useState, useEffect } from 'react';



const BoardGames = () => {
  const boardGamesRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const refs = useRef(boardGames.map(() => React.createRef()));
  const [selectedIndex, setSelectedIndex] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (!boardGamesRef.current) return;
      const offsetTop = boardGamesRef.current.offsetTop;
      setShowBackToTop(window.scrollY > offsetTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="content-region" ref={boardGamesRef}>
        <h1 style={{ textAlign: 'center' }}>Board Game Ratings</h1>
        <br />
        <p>A score of 1 is lowest, 5 is highest. Here's what each category means:</p>
        <br/>
        <ul>
          <li>Replayability: How often you’ll play it again</li>
          <li>Complexity: Rules depth and mechanical challenge</li>
          <li>Difficulty: Learning curve or ease of access</li>
          <li>Parts/Portability: Setup, cleanup, and travel friendliness</li>
          <li>Expansions: Quality or necessity of expansions</li>
          <li>Affordability: Value for cost</li>
          <li>Art Style & Theme: Subjective; doesn’t affect overall rating</li>
        </ul>
        <br/>
        <p><select
            value={selectedIndex}
            onChange={(e) => {
              const index = e.target.value;
              setSelectedIndex(index);
              if (refs.current[index]) {
                refs.current[index].current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <option value="">Select a Game...</option>
            {boardGames
              .map((game, index) => ({ ...game, index }))
              .sort((a, b) => b.score - a.score)
              .map((game) => (
                <option key={game.index} value={game.index}>
                  {game.name} – {game.score}
                </option>
              ))}
          </select></p>
        <br/>
        {boardGames.map((game, idx) => (
          <div className="board-game" key={idx} ref={refs.current[idx]} style={{ marginBottom: '2rem' }}>
            <h3>
              <a href={game.url} target="_blank" rel="noopener noreferrer">{game.name}</a> – {game.score}
            </h3>
            <ul>
              {game.notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
            <RadarChart data={game.ratings} />
          </div>
        ))}
      </div>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            padding: '0.75rem 1rem',
            backgroundColor: '#EF6D3D',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            zIndex: 1000,
            fontWeight: 'bold'
          }}
        >
          Back to Top
        </button>
      )}
    </>
  );
};

export default BoardGames;