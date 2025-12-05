import React, { useState, useMemo, useEffect } from 'react';
import { 
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell
} from 'recharts';
import { RefreshCw, PlayCircle } from 'lucide-react';
import { DLHRDataPoint, SimulationDataPoint } from '../types';

const Simulation: React.FC = () => {
  const [coherence, setCoherence] = useState<number>(1.0);
  const [trauma, setTrauma] = useState<number>(0.2);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Logic from original script
  // dPhi/dt = omega - k * sin(Phi)
  // dChi/dt = -alpha * Chi + beta * Phi
  // Trauma adds offset to Chi
  const generateData = (coh: number, trm: number): SimulationDataPoint[] => {
    const data: SimulationDataPoint[] = [];
    const t_steps = 150;
    const dt = 0.1;
    let phi = 0;
    
    for (let i = 0; i < t_steps; i++) {
        // Simple Harmonic Driver with coherence modulation
        const drive = Math.cos(i * dt * 2); 
        
        // Phi evolves cyclically (Emotion)
        // High coherence = smooth sine wave. Low coherence = noisy.
        // We use a pseudo-random generator seeded by index for consistency during re-renders if needed, 
        // but here Math.random is fine as we memoize. To keep it stable for the chart, we can use sin combinations.
        const noise = (Math.sin(i * 13.0) * Math.cos(i * 7.0)) * (2.0 - coh); // Deterministic "noise"
        phi = drive + noise * 0.3;

        // Chi evolves based on Phi but holds memory (Identity)
        const traumaPull = trm * 3.5; 
        // If trauma is high, Chi gets stuck in a loop offset from center (limit cycle attractor)
        const chi = (phi * 0.5) + (Math.sin(i * dt) * traumaPull); 

        data.push({ t: i, phi, chi });
    }
    return data;
  };

  const calculateDLHR = (coh: number, trm: number): DLHRDataPoint[] => {
     // Logic: High Trauma drains A4/A5 (Meaning/Cognition) and spikes A2 (Safety)
    // High Coherence boosts A3/A4/A5
    const clamp = (num: number) => Math.min(Math.max(num, 0), 100);

    const a1 = 20; // Physiology always baseline
    const a2 = 20 + (tm => tm * 50)(trm); // Trauma boosts safety need
    const a3 = 40 * coh;       // Coherence boosts emotion
    const a4 = 50 * coh - (trm * 30); // Trauma hurts cognition
    const a5 = 60 * coh - (trm * 40); // Trauma kills meaning

    return [
      { subject: 'A1: Physiology', A: clamp(a1), fullMark: 100 },
      { subject: 'A2: Safety', A: clamp(a2), fullMark: 100 },
      { subject: 'A3: Emotion', A: clamp(a3), fullMark: 100 },
      { subject: 'A4: Cognition', A: clamp(a4), fullMark: 100 },
      { subject: 'A5: Meaning', A: clamp(a5), fullMark: 100 },
    ];
  };

  const simulationData = useMemo(() => generateData(coherence, trauma), [coherence, trauma]);
  const dlhrData = useMemo(() => calculateDLHR(coherence, trauma), [coherence, trauma]);

  const getStateDescription = () => {
    if (trauma > 0.8) {
      return {
        label: "Trauma Loop Detected",
        class: "bg-red-100 text-red-800 border-red-200",
        desc: "Identity axis (χ) is locked in a limit cycle. Meaning formation (A5) is inhibited."
      };
    } else if (coherence < 0.5) {
      return {
        label: "Fragmented / Low Coherence",
        class: "bg-amber-100 text-amber-800 border-amber-200",
        desc: "Emotional phase (φ) is unstable. System is struggling to self-regulate."
      };
    } else {
      return {
        label: "Coherent Flow State",
        class: "bg-green-100 text-green-800 border-green-200",
        desc: "Optimal spiral dynamics. Strong integration between Emotion and Identity."
      };
    }
  };

  const stateInfo = getStateDescription();

  const handleReset = () => {
    setCoherence(1.0);
    setTrauma(0.2);
  };

  return (
    <section id="simulation" className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls Panel */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-indigo-600"/> Spiral-Time Simulator
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Visualize the "Phase Space" of consciousness. Adjust parameters to see how <strong>Trauma</strong> creates loops and <strong>Coherence</strong> creates stable spirals.
          </p>

          <div className="space-y-10 flex-grow px-2">
            {/* Coherence Slider */}
            <div className="relative group">
              <div className="flex justify-between items-end mb-3">
                 <label className="text-sm font-bold text-gray-700 transition-colors group-hover:text-teal-700">
                    Emotional Coherence (λ_φ)
                 </label>
                 <span className="text-teal-600 font-mono text-sm bg-teal-50 px-2 py-0.5 rounded border border-teal-100 shadow-sm transition-all group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600">
                    {coherence.toFixed(1)}
                 </span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="2.0" 
                step="0.1" 
                value={coherence}
                onChange={(e) => setCoherence(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600 hover:accent-teal-500 transition-all hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-teal-500/20"
              />
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-400 mt-2 font-bold">
                <span>Chaos</span>
                <span>Resonance</span>
              </div>
            </div>

            {/* Trauma Slider */}
            <div className="relative group">
              <div className="flex justify-between items-end mb-3">
                 <label className="text-sm font-bold text-gray-700 transition-colors group-hover:text-red-700">
                    Trauma / Identity Lock (λ_χ)
                 </label>
                 <span className="text-red-600 font-mono text-sm bg-red-50 px-2 py-0.5 rounded border border-red-100 shadow-sm transition-all group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600">
                    {trauma.toFixed(1)}
                 </span>
              </div>
              <input 
                type="range" 
                min="0.0" 
                max="1.5" 
                step="0.1" 
                value={trauma}
                onChange={(e) => setTrauma(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600 hover:accent-red-500 transition-all hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-red-500/20"
              />
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-400 mt-2 font-bold">
                <span>Fluid Identity</span>
                <span>Trauma Loop</span>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-100 mt-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-700">Current State:</span>
              <span className={`px-3 py-1 text-xs font-bold rounded-full border ${stateInfo.class} transition-all duration-300`}>
                {stateInfo.label}
              </span>
            </div>
            <p className="text-xs text-gray-500 min-h-[40px] leading-relaxed">
              {stateInfo.desc}
            </p>
            <button 
              onClick={handleReset}
              className="mt-4 w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-lg text-sm font-bold transition flex items-center justify-center gap-2 group active:scale-95"
            >
              <RefreshCw className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:rotate-180 transition-all duration-500"/> 
              <span className="group-hover:text-indigo-600 transition-colors">Reset Simulation</span>
            </button>
          </div>
        </div>

        {/* Phase Space Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 text-lg">Neuro-Phase Portrait (φ vs χ)</h3>
            <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">Live Calc</span>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  type="number" 
                  dataKey="phi" 
                  name="Phase (φ)" 
                  label={{ value: 'Emotional Phase (φ)', position: 'insideBottom', offset: -10, fill: '#6b7280', fontSize: 12 }} 
                  domain={[-2.5, 2.5]} 
                  tick={{fill: '#9ca3af', fontSize: 10}}
                />
                <YAxis 
                  type="number" 
                  dataKey="chi" 
                  name="Identity (χ)" 
                  label={{ value: 'Identity Depth (χ)', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} 
                  domain={[-5, 5]} 
                  tick={{fill: '#9ca3af', fontSize: 10}}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }} 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  labelFormatter={() => ''}
                />
                <Scatter 
                  name="Trajectory" 
                  data={simulationData} 
                  fill="#4338ca" 
                  line={{ stroke: '#4338ca', strokeWidth: 2 }} 
                  shape="circle"
                >
                    {simulationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fillOpacity={Math.max(0.1, index / simulationData.length)} />
                    ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-center text-gray-400 mt-2">
            X: Emotional Oscillation | Y: Identity/Trauma Axis
          </p>
        </div>
      </div>

      {/* Second Row: Radar + Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* DLHR Radar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900">DLHR Energy Landscape</h3>
            <p className="text-xs text-gray-500 mt-1">Real-time mapping of energy across the 5 cognitive layers.</p>
           </div>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dlhrData}>
                 <PolarGrid stroke="#e5e7eb" />
                 <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 11, fontWeight: 600 }} />
                 <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                 <Radar
                   name="Energy"
                   dataKey="A"
                   stroke="#4f46e5"
                   strokeWidth={3}
                   fill="#6366f1"
                   fillOpacity={0.3}
                 />
                 <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                 />
               </RadarChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Octonionic Predictions */}
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-xl shadow-md text-white flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">∞</span> Octonionic Identity Space
                </h3>
                <p className="text-sm text-indigo-200 mb-8 leading-relaxed">
                    The theory predicts identity is not a scalar, but an octonionic field (<span className="font-mono">e₀...e₇</span>). This explains why memory recall is <strong>non-associative</strong> (order matters).
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                    <div className="text-xs text-indigo-300 uppercase font-bold tracking-wider mb-1">Prediction 1</div>
                    <div className="font-semibold text-xs mt-1">Trauma loops are Limit Cycles on the χ-axis.</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                    <div className="text-xs text-indigo-300 uppercase font-bold tracking-wider mb-1">Prediction 2</div>
                    <div className="font-semibold text-xs mt-1">Healing is a phase-locking event between φ and χ.</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                    <div className="text-xs text-indigo-300 uppercase font-bold tracking-wider mb-1">Prediction 3</div>
                    <div className="font-semibold text-xs mt-1">Biophoton emission peaks during A4-A5 transitions.</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                    <div className="text-xs text-indigo-300 uppercase font-bold tracking-wider mb-1">Prediction 4</div>
                    <div className="font-semibold text-xs mt-1">NV-Center sensing can detect Identity Shifts.</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Simulation;