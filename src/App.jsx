import './styles/App.css'
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t("home.title")}</h1>
        <button>{t("home.start")}</button>
      </div>
    </>
  )
}

export default App
