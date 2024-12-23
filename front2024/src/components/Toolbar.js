import { useTranslation } from "react-i18next";
import { useTheme } from "../services/ThemeContext";

function Toolbar({ handleCreate, showArchived, setShowArchived }) {
  const { toggleTheme } = useTheme() || {};
  const { i18n } = useTranslation() || {};

  const changeLanguage = (lang) => {
    if (i18n) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div>
      <button onClick={handleCreate}>Create</button>
      <button onClick={() => setShowArchived((current) => !current)}>
        Filter {showArchived.toString()}
      </button>
      {toggleTheme && <button onClick={toggleTheme}>Toggle Theme</button>}
      {i18n && (
        <>
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("cs")}>CS</button>
        </>
      )}
    </div>
  );
}

export default Toolbar;
