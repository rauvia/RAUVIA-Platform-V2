import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ProductosPage from './pages/ProductosPage';
import AethryonPage from './pages/AethryonPage';

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
              <Route path="/productos" element={<ProductosPage />} />
              <Route path="/aethryon" element={<AethryonPage />} />
            </Routes>
          </main>
          
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
