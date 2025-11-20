import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import './styles/App.css';
import RosaryPage from "./pages/RosaryPage.jsx";


function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t("home.title")}</h1>
        <button>{t("home.startButton")}</button>
      </div>

      <LanguageSwitcher />

      <RosaryPage />
    </>
  )
}

export default App
