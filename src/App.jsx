import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Cursors from './components/Cursors';
import Resources from './components/Resources';
import BoardGames from './components/BoardGames';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/resources/arcpy-cursors" element={<Cursors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/boardgames" element={<BoardGames />} />
          {/* Add more routes later like Projects, Resources, etc. */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
