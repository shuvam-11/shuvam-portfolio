import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ThreeDBackground from './components/ThreeDBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';

export default function App() {
  return (
    <ProfilePhotoProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 flex flex-col justify-between">
        {/* Precision custom desktop cursor */}
        <CustomCursor />

        {/* Scroll window to top on route change */}
        <ScrollToTop />

        {/* Subtle background tech grid */}
        <div className="fixed inset-0 bg-tech-grid pointer-events-none z-0 opacity-80" />

        {/* Subtle 3D floating depth particles */}
        <ThreeDBackground />

        {/* Primary Sticky Navbar */}
        <Navbar />

        {/* Main Routed Content Layout */}
        <main className="relative z-10 flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ProfilePhotoProvider>
  );
}
