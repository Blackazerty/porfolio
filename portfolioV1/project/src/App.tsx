import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './pages/HomePage';
import AccueilPage from './pages/AccueilPage';
import PresentationPage from './pages/PresentationPage';
import BtsSioPage from './pages/BtsSioPage';
import EntreprisePage from './pages/EntreprisePage';
import EpreuveE5Page from './pages/EpreuveE5Page';
import EpreuveE6Page from './pages/EpreuveE6Page';
import VeillePage from './pages/VeillePage';
import CertificatesPage from './pages/CertificatesPage';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/accueil" element={<AccueilPage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="/bts-sio" element={<BtsSioPage />} />
      <Route path="/entreprise" element={<EntreprisePage />} />
      {/* Ancienne URL des projets : on redirige vers l'Épreuve E5 */}
      <Route path="/projets" element={<Navigate to="/epreuve-e5" replace />} />
      <Route path="/epreuve-e5" element={<EpreuveE5Page />} />
      <Route path="/epreuve-e6" element={<EpreuveE6Page />} />
      <Route path="/veille" element={<VeillePage />} />
      <Route path="/certificats" element={<CertificatesPage />} />
    </Routes>
  );
}

export default App;
