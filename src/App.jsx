import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import './styles/App.css';

function App() {
  const { t } = useTranslation();
  const mysteries = t("mysteries.list", { returnObjects: true });

  return (
    <>
      <div>
        <h1>{t("home.title")}</h1>
        <button>{t("home.startButton")}</button>
      </div>

      <LanguageSwitcher />

      <div className="languageTest">
        <h2>{t("mysteries.title")}</h2>
        <ul>
          {mysteries.map((m, idx) => (
            <li key={idx}>{m}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
