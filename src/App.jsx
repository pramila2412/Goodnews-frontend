import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import AboutUs from './Pages/AboutUs';
import Matrimony from './Pages/Matrimony';
import Topics from './Pages/Topics';
import CategoryNewsList from './Pages/CategoryNewsList';
import NewsDetail from './Pages/NewsDetail';

// A simple generic placeholder for routes we haven't built out fully yet
const ComingSoon = ({ title }) => (
  <main className="container main-content animate-fade-in" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
      <p style={{ color: 'var(--text-secondary)' }}>We are working on bringing this page to life with our new design.</p>
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        {/* Pages requested from old code */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/matrimony" element={<Matrimony />} />
        
        {/* Topics dynamically handles /topics/kidz etc. */}
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:type" element={<Topics />} />
        
        {/* News & Views Categories */}
        <Route path="/news" element={<CategoryNewsList />} />
        <Route path="/news/:category/:slug" element={<NewsDetail />} />
        <Route path="/news/:category" element={<CategoryNewsList />} />
        <Route path="/obituary" element={<CategoryNewsList />} />
        
        {/* Other navigation links from Header/Footer */}
        <Route path="/classifieds" element={<ComingSoon title="Classifieds" />} />
        <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
        <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
        <Route path="/terms" element={<ComingSoon title="Terms of Service" />} />
        <Route path="/support" element={<ComingSoon title="Support Center" />} />
        
        <Route path="*" element={<ComingSoon title="Page Not Found" />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
