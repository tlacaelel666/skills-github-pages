import React, { useState } from 'react';
import { EquationTerm } from '../types';
import { Brain, Activity, Waves, Orbit, History, Zap, Info } from 'lucide-react';

const terms: EquationTerm[] = [
  {
    id: 'lhs',
    symbol: '∂ₜΨ',
    colorClass: 'text-gray-800',
    title: 'State Evolution (∂ₜΨ)',
    description: 'The rate of change of the total mind-body-field state over time.'
  },
  {
    id: 'potential',
    symbol: '-∇V_DLHR(Ψ)',
    colorClass: 'text-red-600',
    title: 'DLHR Potential (-∇V)',
    description: 'The gradient flow driving the mind towards specific emotional/cognitive attractors (A1-A5). Represents the "force" of psychological needs.'
  },
  {
    id: 'diffusion',
    symbol: 'D∇²Ψ',
    colorClass: 'text-blue-600',
    title: 'Cognitive Diffusion (D∇²Ψ)',
    description: 'Represents the spread of mental states or neural field activation, smoothing out sharp emotional peaks.'
  },
  {
    id: 'spiral',
    symbol: 'λ_φ∂_φΨ',
    colorClass: 'text-teal-600',
    title: 'Spiral Phase Dynamics (λ_φ)',
    description: 'Governs emotional oscillation, motivation, and the cyclic nature of affect. The "Engine" of the psyche.'
  },
  {
    id: 'memory',
    symbol: 'λ_χ∂_χΨ',
    colorClass: 'text-purple-600',
    title: 'Deep Memory Axis (λ_χ)',
    description: 'Governs long-term identity storage, trauma loops, and deep structural patterns. High resistance here creates "stuck" states.'
  },
  {
    id: 'axon',
    symbol: 'Γ_axon',
    colorClass: 'text-amber-600',
    title: 'Axonal Coupling (Γ_axon)',
    description: 'The quantum-photonic term. Represents entanglement between myelinated axons acting as a coherence bridge.'
  }
];

const EquationExplorer: React.FC = () => {
  const [activeTermId, setActiveTermId] = useState<string | null>(null);

  const activeTerm = terms.find(t => t.id === activeTermId);
  
  // Helper to extract color name from Tailwind class (e.g., "text-red-600" -> "red")
  const getColorName = (colorClass: string) => {
    const match = colorClass.match(/text-(\w+)-/);
    return match ? match[1] : 'gray';
  };

  const themeColor = activeTerm ? getColorName(activeTerm.colorClass) : 'gray';

  // Dynamic theme classes based on active term
  const theme = activeTerm ? {
    box: `bg-${themeColor}-50 border-${themeColor}-200 shadow-md`,
    title: `text-${themeColor}-900`,
    text: `text-${themeColor}-800`,
    iconContainer: `bg-white text-${themeColor}-600 shadow-sm scale-100 ring-4 ring-${themeColor}-50`
  } : {
    box: 'bg-gray-50 border-gray-100',
    title: 'text-gray-700',
    text: 'text-gray-500',
    iconContainer: 'bg-gray-200 text-gray-400 scale-95'
  };

  const getIcon = (id: string | undefined) => {
    switch (id) {
      case 'lhs': return <Activity className="w-7 h-7" />;
      case 'potential': return <Brain className="w-7 h-7" />;
      case 'diffusion': return <Waves className="w-7 h-7" />;
      case 'spiral': return <Orbit className="w-7 h-7" />;
      case 'memory': return <History className="w-7 h-7" />;
      case 'axon': return <Zap className="w-7 h-7" />;
      default: return <Info className="w-7 h-7" />;
    }
  };

  const displayTitle = activeTerm?.title || 'Explore the Math';
  const displayDesc = activeTerm?.description || 'Hover over the mathematical terms above to see how physics maps to psychology in the unified framework.';

  return (
    <section id="equation" className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
      <div className="p-8 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">The Unified Evolution Equation</h2>
        <p className="text-gray-600 mb-8">
          This single equation describes emotional turbulence, trauma locking, and healing alignment. 
          <span className="inline-flex items-center ml-3 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
            <Info className="w-3 h-3 mr-1" /> Interactive
          </span>
        </p>

        <div className="flex justify-center items-center py-12 overflow-x-auto bg-slate-50 rounded-xl inner-shadow mb-8 border border-slate-100">
          <div className="text-xl md:text-3xl font-mono flex items-center space-x-1 md:space-x-3 px-4">
             {/* We manually reconstruct to handle the operators visually between terms */}
            <TermWrapper term={terms[0]} activeId={activeTermId} onEnter={setActiveTermId} />
            
            <span className="text-gray-300 font-light px-1">=</span>
            
            <TermWrapper term={terms[1]} activeId={activeTermId} onEnter={setActiveTermId} />
            <span className="text-gray-300 font-light px-1">+</span>
            
            <TermWrapper term={terms[2]} activeId={activeTermId} onEnter={setActiveTermId} />
            <span className="text-gray-300 font-light px-1">+</span>
            
            <TermWrapper term={terms[3]} activeId={activeTermId} onEnter={setActiveTermId} />
            <span className="text-gray-300 font-light px-1">+</span>
            
            <TermWrapper term={terms[4]} activeId={activeTermId} onEnter={setActiveTermId} />
            <span className="text-gray-300 font-light px-1">+</span>
            
            <TermWrapper term={terms[5]} activeId={activeTermId} onEnter={setActiveTermId} />
          </div>
        </div>

        {/* Dynamic Explanation Box */}
        <div 
          className={`min-h-[140px] mt-6 p-6 rounded-xl border transition-all duration-500 ease-out flex items-start gap-5 ${theme.box}`}
        >
          <div className={`hidden sm:flex items-center justify-center w-14 h-14 rounded-full shrink-0 transition-all duration-500 ${theme.iconContainer}`}>
             {getIcon(activeTerm?.id)}
          </div>
          <div className="flex-1">
            <h4 className={`font-bold text-lg mb-2 transition-colors duration-300 ${theme.title}`}>
              {displayTitle}
            </h4>
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${theme.text}`}>
              {displayDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TermWrapper: React.FC<{ 
  term: EquationTerm; 
  activeId: string | null; 
  onEnter: (id: string | null) => void;
}> = ({ term, activeId, onEnter }) => {
  const isActive = activeId === term.id;
  
  return (
    <div className="relative group">
      <span 
        className={`
          cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 select-none block
          ${isActive 
            ? 'bg-indigo-600 text-white shadow-lg scale-110 -translate-y-1' 
            : `${term.colorClass} hover:bg-white hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-black/5 bg-transparent`
          }
        `}
        onMouseEnter={() => onEnter(term.id)}
        onMouseLeave={() => onEnter(null)}
        onTouchStart={() => onEnter(term.id)}
      >
        {term.symbol}
      </span>
    </div>
  );
};

export default EquationExplorer;