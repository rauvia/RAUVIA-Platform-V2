import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import SolucionesPage from './pages/SolucionesPage';
import AethryonPage from './pages/AethryonPage';
import RecursosPage from './pages/RecursosPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-rauvia-bg">
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/soluciones" element={<SolucionesPage />} />
              <Route path="/aethryon" element={<AethryonPage />} />
              <Route path="/recursos" element={<RecursosPage />} />
              <Route path="/recursos/:slug" element={<PostPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
