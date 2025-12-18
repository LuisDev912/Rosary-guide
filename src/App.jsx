import './styles/App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';

const RosaryPage = lazy(() => import('./pages/RosaryPage.jsx'))
const RosaryEnd = lazy(() => import('./pages/RosaryEnd.jsx'))
const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))
const RosaryInfoPage = lazy(() => import('./pages/RosaryInfoPage.jsx'))
const MainLayout = lazy(() => import('./layout/MainLayout.jsx'))

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '15%',
      fontSize: 'var(--font-size-lg)',
      fontWeight: '600'
    }}> {t("home.waiting")} </div>} >
        
        <Routes>
          <Route element={<MainLayout />}>
          
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<RosaryInfoPage />} />
            <Route path="/Rosary" element={<RosaryPage />} />
            <Route path="/Rosary/end" element={<RosaryEnd />} />
            <Route path="*" element={<NotFoundPage />} />
          
          </Route>
        </Routes>

      </Suspense>
  )
}

export default App