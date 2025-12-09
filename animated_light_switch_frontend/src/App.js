import React, { useState, useEffect } from 'react';
import './App.css';
import LightSwitch from './components/LightSwitch/LightSwitch';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme('light');
  };

  return (
    <div className="App">
      <main className="panel" role="region" aria-label="Interactive light switch panel">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Theme is light (locked for this demo)"
          title="Theme: light (demo)"
        >
          ☀️ Light
        </button>

        <header className="header">
          <h1 className="title">Interactive Light Switch</h1>
          <p className="subtitle">Toggle the switch to turn the lights {isOn ? 'off' : 'on'} with animated glow and shadows</p>
        </header>

        <section className="controls" aria-live="polite">
          <LightSwitch checked={isOn} onChange={setIsOn} />
          <div className="badge" aria-hidden="true">
            {isOn ? 'On' : 'Off'} mode • Smooth animation
          </div>
          <div className="settings" role="note" aria-label="Usage tip">
            Tip: You can press Space or Enter to toggle
          </div>
        </section>

        <footer className="footer">
          Built with accents
          {' '}
          <a className="link" href="#" onClick={(e) => e.preventDefault()} aria-label="Primary accent is #3b82f6 and success accent is #06b6d4">
            #3b82f6
          </a>
          {' '}and{' '}
          <a className="link" href="#" onClick={(e) => e.preventDefault()}>
            #06b6d4
          </a>
          . Secondary tone: #64748b
        </footer>
      </main>
    </div>
  );
}

export default App;
