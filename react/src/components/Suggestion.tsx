import React from 'react';

interface SuggestionProps {
  items: string[];
  onSelect: (lang: string) => void;
}

const Suggestion = ({ items, onSelect }: SuggestionProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(
    null
  );

  const handlekeyPress = (e: React.KeyboardEvent) => {
    if (items.length) {
      if (e.key === 'Enter') {
        onSelect(items[selectedIndex!]);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        setSelectedIndex(prevIdx => {
          return e.key === 'ArrowUp'
            ? ((prevIdx ?? items.length) - 1 + items.length) % items.length
            : e.key === 'ArrowDown'
            ? ((prevIdx ?? -1) + 1) % items.length
            : prevIdx;
        });
      }
    }
  };

  const handleItemClick = (item: string) => {
    onSelect(item);
  };

  return (
    <div className="Suggestion" style={{ display: 'block' }}>
      <ul>
        {items.map((item, idx) => (
          <li
            key={idx}
            className={idx === selectedIndex ? 'selected' : ''}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestion;
