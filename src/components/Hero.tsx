import React from 'react';
import { User, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="abstract" className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
      <div className="lg:col-span-2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Integrating Physics & Psychology
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          This interactive interface presents the first unified model merging <strong>High-Energy HLV Physics</strong>, the <strong>DLHR Cognitive Architecture</strong>, and <strong>Photonic-Axon Entanglement</strong>.
        </p>
        <div className="p-6 bg-indigo-50 rounded-xl border-l-4 border-indigo-600 shadow-sm">
          <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> Core Hypothesis
          </h3>
          <p className="text-indigo-800 text-sm leading-relaxed">
            Consciousness, emotion, and trauma share a common geometric substrate governed by a single dynamical equation. By mapping psychological states to a "Spiral-Time" geometry (<span className="font-mono">Ψ = t + iφ + jχ</span>), we can mathematically predict trauma loops, healing trajectories, and identity formation.
          </p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center h-full">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Authors & Affiliation</h4>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start group">
            <span className="text-teal-600 mr-3 mt-0.5 group-hover:scale-125 transition-transform duration-200">●</span>
            <div>
              <strong className="text-gray-900 block mb-0.5">Marcel Krüger</strong>
              <span className="text-gray-500 text-xs">Helix-Light-Vortex Research (Germany)</span>
            </div>
          </li>
          <li className="flex items-start group">
            <span className="text-teal-600 mr-3 mt-0.5 group-hover:scale-125 transition-transform duration-200">●</span>
            <div>
              <strong className="text-gray-900 block mb-0.5">Don Feeney</strong>
              <span className="text-gray-500 text-xs">Cognitive Systems Researcher (USA)</span>
            </div>
          </li>
          <li className="flex items-start group">
            <span className="text-teal-600 mr-3 mt-0.5 group-hover:scale-125 transition-transform duration-200">●</span>
            <div>
              <strong className="text-gray-900 block mb-0.5">Marcel Theodor Wende</strong>
              <span className="text-gray-500 text-xs">Independent Researcher (Germany)</span>
            </div>
          </li>
        </ul>
        <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400 text-center font-mono">
          December 2025
        </div>
      </div>
    </section>
  );
};

export default Hero;