import './styles/App.css';
import { Route, Routes } from 'react-router';
import RosaryPage from "./pages/RosaryPage.jsx"
import RosaryEnd from "./pages/RosaryEnd";
import HomePage from "./pages/HomePage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RosaryInfoPage from "./pages/RosaryInfoPage.jsx";
import MainLayout from './layout/MainLayout.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<RosaryInfoPage />} />
          <Route path="/Rosary" element={<RosaryPage />} />
          <Route path="/Rosary/end" element={<RosaryEnd />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
export default App