import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import './styles/App.css';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t("home.title")}</h1>
        <button>{t("home.start")}</button>
      </div>

      <LanguageSwitcher />
    </>
  )
}

export default App
