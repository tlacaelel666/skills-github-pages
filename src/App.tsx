import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import EquationExplorer from './components/EquationExplorer';
import Simulation from './components/Simulation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <Hero />
        <Pillars />
        <EquationExplorer />
        <Simulation />
      </main>

      <Footer />
    </div>
  );
}

export default App;