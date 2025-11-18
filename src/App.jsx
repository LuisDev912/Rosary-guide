import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Steps from "./components/Steps";
import "./components/MysteryGroup";
import './styles/App.css';
import Mysteries from "./components/Mysteries";


function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t("home.title")}</h1>
        <button>{t("home.startButton")}</button>
      </div>

      <Steps />

      <Mysteries />


      <LanguageSwitcher />
    </>
  )
}

export default App
