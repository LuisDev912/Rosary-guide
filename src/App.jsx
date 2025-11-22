import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import './styles/App.css';
import RosaryPage from "./pages/RosaryPage.jsx";


function App() {
  const { t } = useTranslation();

  const handleStartPrayer = () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.style.display = 'block';
    }
  }

  return (
    <>
      <div>
        <h1>{t("home.title")}</h1>
        <button className="start-prayer" onClick={handleStartPrayer}>{t("home.startButton")}</button>
      </div>

      <LanguageSwitcher />

      <div className="main-content" style={{display: 'none'}}> 
        <RosaryPage />
      </div>
      
    </>
  )
}

export default App
