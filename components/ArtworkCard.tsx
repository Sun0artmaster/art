
import React from 'react';
import { Artwork, CategoryLabels } from '../types';

interface Props {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

const ArtworkCard: React.FC<Props> = ({ artwork, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
      onClick={() => onClick(artwork)}
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img 
          src={artwork.imageUrl} 
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-medium serif">{artwork.title}</h3>
        <p className="text-white/80 text-xs uppercase tracking-widest mt-1">
          {CategoryLabels[artwork.category]} &bull; {artwork.year}
        </p>
      </div>
      
      <div className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="bg-white/90 text-black text-[10px] uppercase tracking-[0.2em] py-2 px-6 rounded-full font-bold shadow-lg">
          상세보기
        </span>
      </div>
    </div>
  );
};

export default ArtworkCard;
