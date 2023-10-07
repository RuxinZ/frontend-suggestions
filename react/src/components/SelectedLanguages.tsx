interface SelectedLanguagesProps {
  selectedLangs: string[];
}

const SelectedLanguages = ({ selectedLangs }: SelectedLanguagesProps) => {
  return (
    <div className="SelectedLanguage">
      <ul>
        {selectedLangs.length > 0 &&
          selectedLangs.map((item: string) => (
            <li key={crypto.randomUUID()}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default SelectedLanguages;
