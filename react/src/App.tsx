import React from 'react';
import fetchLangs from './utils/api';
import SelectedLanguages from './components/SelectedLanguages';
import SearchInput from './components/SearchInput';
import Suggestion from './components/Suggestion';

function App() {
  const [results, setResults] = React.useState<string[]>([]);
  const [selectedLangs, setSelectedLangs] = React.useState<string[]>([]);

  const handleSearchInputChange = async (query: string) => {
    const fetechedLangs = query.length ? await fetchLangs(query) : [];
    setResults(fetechedLangs);
  };
  const handleSuggestionSelect = (lang: string) => {
    if (!lang) throw new Error('No language selected.');
    setSelectedLangs(prevSelectedLangs =>
      prevSelectedLangs.includes(lang)
        ? prevSelectedLangs.filter(e => e !== lang) // remove selected language
        : [...prevSelectedLangs, lang]
    );
  };

  return (
    <div className="App">
      <SelectedLanguages selectedLangs={selectedLangs} />
      <SearchInput onInputChange={handleSearchInputChange} />

      {results.length > 0 && (
        <Suggestion items={results} onSelect={handleSuggestionSelect} />
      )}
    </div>
  );
}

export default App;
