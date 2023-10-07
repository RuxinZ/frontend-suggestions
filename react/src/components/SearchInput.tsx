import React from 'react';

interface SearchInputProps {
  onInputChange: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onInputChange }) => {
  const [query, setQuery] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curQuery = e.target.value;
    setQuery(curQuery);
    onInputChange(curQuery);
  };

  return (
    <form className="SearchInput" style={{ marginBlockEnd: '2em' }}>
      <label
        htmlFor="searchbox"
        style={{
          display: 'block',
          marginBlock: '1em',
          textAlign: 'center',
          fontSize: '1.4rem',
        }}
      >
        What's your favorite programming language?
      </label>
      <input
        id="searchbox"
        className="SearchInput__input"
        autoComplete="off"
        type="text"
        value={query}
        onChange={e => handleInputChange(e)}
      />
    </form>
  );
};

export default SearchInput;
