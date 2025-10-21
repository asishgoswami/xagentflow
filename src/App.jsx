import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToHome = () => setCurrentPage('home');
  const navigateToContact = () => setCurrentPage('contact');

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <Home key="home" onNavigateContact={navigateToContact} />
        )}
        {currentPage === 'contact' && (
          <Contact key="contact" onNavigateHome={navigateToHome} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
