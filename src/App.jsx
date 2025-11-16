import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Steps from "./components/Steps";
import './styles/App.css';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t("home.title")}</h1>
        <button>{t("home.startButton")}</button>
      </div>

      <Steps />

      <LanguageSwitcher />
    </>
  )
}

export default App
