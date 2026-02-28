import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ManpowerPage from './pages/ManpowerPage';
import ScrapTradingPage from './pages/ScrapTradingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './components/AdminDashboard';
import DynamicPage from './pages/DynamicPage';
import { ContentProvider } from './context/ContentContext';

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-white text-novarise-blue font-sans selection:bg-novarise-orange selection:text-white">
      {!isAdmin && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/manpower" element={<ManpowerPage />} />
          <Route path="/scrap-trading" element={<ScrapTradingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/p/:slug" element={<DynamicPage />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <Router>
        <AppContent />
      </Router>
    </ContentProvider>
  );
}
