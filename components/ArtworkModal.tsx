
import React from 'react';
import { Artwork, CategoryLabels } from '../types';

interface Props {
  artwork: Artwork;
  onClose: () => void;
}

const ArtworkModal: React.FC<Props> = ({ artwork, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-black transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-2/3 bg-gray-50 flex items-center justify-center p-4">
          <img 
            src={artwork.imageUrl} 
            alt={artwork.title}
            className="max-h-full max-w-full object-contain shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/3 p-8 overflow-y-auto border-l border-gray-100">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-gray-400 block mb-2">{CategoryLabels[artwork.category]}</span>
            <h2 className="text-3xl font-bold mb-4 serif leading-tight">{artwork.title}</h2>
            <div className="space-y-2 text-sm text-gray-600 border-t border-b border-gray-100 py-4 mb-6">
              <p><span className="font-semibold text-gray-900">제작년도:</span> {artwork.year}</p>
              <p><span className="font-semibold text-gray-900">재료/기법:</span> {artwork.medium}</p>
              <p><span className="font-semibold text-gray-900">규격:</span> {artwork.dimensions}</p>
            </div>
            <p className="text-gray-700 leading-relaxed font-light mb-8">
              {artwork.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;
