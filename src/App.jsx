import LanguageSwitcher from "./components/LanguageSwitcher";
import './styles/App.css';
import { Route, Routes } from 'react-router';
import RosaryPage from "./pages/RosaryPage.jsx"
import RosaryEnd from "./pages/RosaryEnd";
import HomePage from "./pages/HomePage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx";


function App() {


  return (
    <>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Rosary" element={<RosaryPage />} />
        <Route path="/Rosary/end" element={<RosaryEnd />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
