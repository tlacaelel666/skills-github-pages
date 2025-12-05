import React from 'react';
import { Sigma, Layers, Zap } from 'lucide-react';

const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">The Three Pillars of Unification</h2>
        <p className="text-gray-600 mt-2">The framework synthesizes three distinct scientific domains into one geometry.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <Sigma className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">1. HLV Spiral-Time</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            A triadic time operator (<span className="font-mono text-xs">ψ = t + iφ + jχ</span>) that replaces linear time.
          </p>
          <ul className="text-xs text-gray-500 space-y-2 font-medium">
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span><strong>t (Linear):</strong> Chronology & Events.</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span><strong>φ (Spiral Phase):</strong> Emotion & Motivation.</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span><strong>χ (Memory Axis):</strong> Identity & Trauma.</li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">2. DLHR Cognitive Layers</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            A validated 5-layer psychological structure (A1-A5) acting as the "Potential Energy" landscape.
          </p>
          <ul className="text-xs text-gray-500 space-y-2 font-medium">
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span><strong>A1-A2:</strong> Safety & Regulation.</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span><strong>A3:</strong> Emotional Coherence.</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span><strong>A4-A5:</strong> Meaning & Identity.</li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">3. Photonic Axons</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Integration of university research on quantum-coherent signaling in myelinated axons.
          </p>
          <ul className="text-xs text-gray-500 space-y-2 font-medium">
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span><strong>Biphoton Entanglement:</strong> Quantum links.</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span><strong>Coherence Windows:</strong> Insight moments.</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span><strong>Physical Coupling:</strong> Γ_axon term.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pillars;