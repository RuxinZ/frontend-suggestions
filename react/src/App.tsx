import React from 'react';
import fetchLangs from './utils/api.js';

function App() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const curQuery = target.value;
    const fetechedLangs = curQuery.length
      ? await fetchLangs(curQuery)
      : [];
    setResults(fetechedLangs.slice());
    setQuery(curQuery);
  }
  const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const curSelected = target.innerText;
    setSelected([...selected, curSelected]);
  };

  return (
    <div className="App">
      <div className="SelectedLanguage">
        <ul>
          {selected.length > 0 &&
            selected.map(item => (
              <li key={crypto.randomUUID()}>{item}</li>
            ))}
        </ul>
      </div>
      <form
        onSubmit={e => handleSubmit(e)}
        className="SearchInput"
        style={{ marginBlockEnd: '2em' }}
      >
        <label
          htmlFor={'searchbox'}
          style={{
            display: 'block',
            marginBlock: '1em',
            textAlign: 'center',
            fontSize: '1.4rem',
          }}
        >
          What's your favoriate programming language?
        </label>
        <input
          id="searchbox"
          className="SearchInput__input"
          autoComplete="off"
          type="text"
          value={query}
          onChange={e => handleSubmit(e)}
        />
      </form>

      {results.length > 0 && (
        <div className="Suggestion" style={{ display: 'block' }}>
          <ul>
            {results.map(item => (
              <li key={crypto.randomUUID()} onClick={e => handleSelect(e)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
