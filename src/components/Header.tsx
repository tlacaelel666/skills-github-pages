import React from 'react';
import { Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-none tracking-tight">Unified Spiral-Time</h1>
            <p className="text-xs text-gray-500 mt-1 font-medium">Neurodynamic Framework Interface</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#abstract" className="hover:text-indigo-600 transition-colors duration-200">Abstract</a>
          <a href="#pillars" className="hover:text-indigo-600 transition-colors duration-200">Three Pillars</a>
          <a href="#equation" className="hover:text-indigo-600 transition-colors duration-200">The Equation</a>
          <a href="#simulation" className="hover:text-indigo-600 transition-colors duration-200">Simulation</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;