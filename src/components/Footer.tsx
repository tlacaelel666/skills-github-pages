import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-bold text-white mb-3 text-lg">Unified Spiral-Time Neurodynamic Framework</p>
        <p className="text-sm text-gray-500 mb-8">Based on the research by Krüger, Feeney, and Wende (2025)</p>
        <div className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
          This interactive visualization captures the essence of the unified HLV-DLHR model.
          <br />
          Generated using React, Tailwind CSS, and Recharts.
        </div>
      </div>
    </footer>
  );
};

export default Footer;