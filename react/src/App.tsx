import React from 'react';
import './App.css';
import fetchLangs from './utils/api.js';

function App() {
  // idle | searching | success | error
  // const [status, setStatus] = React.useState('idle');
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fetechedLangs = query.length ? await fetchLangs(query) : [];
    setResults(fetechedLangs.slice());
  }

  return (
    <div className="App">
      <form onSubmit={e => handleSubmit(e)} className="SearchInput">
        <label htmlFor={'searchbox'}>
          What's your favoriate language?
        </label>
        <input
          id="searchbox"
          className="SearchInput__input"
          autoComplete="off"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            handleSubmit(e);
          }}
        />
      </form>
      {results.length > 0 && (
        <div className="Suggestion">
          <ul>
            {results.map(item => (
              <li key={crypto.randomUUID()}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
