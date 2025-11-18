import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Steps from "./components/Steps";
import "./components/MysteryGroup";
import './styles/App.css';
import MysteryGroup from "./components/MysteryGroup";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t("home.title")}</h1>
        <button>{t("home.startButton")}</button>
      </div>

      <Steps />

      <MysteryGroup
        title={t("rosary.mysteries.joyful.title")}
        items={t("rosary.mysteries.joyful.list", { returnObjects: true })}
      />


      <LanguageSwitcher />
    </>
  )
}

export default App
