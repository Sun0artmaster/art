import React from "react";
import { Category, CategoryLabels } from "../types";

interface Props {
  currentFilter: Category;
  onFilterChange: (filter: Category) => void;
}

const Navbar: React.FC<Props> = ({ currentFilter, onFilterChange }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:h-24 gap-4 md:gap-0">
          <div className="flex-shrink-0">
            <h1
              className="text-2xl font-bold tracking-widest uppercase cursor-pointer"
              onClick={() => onFilterChange(Category.ALL)}
            >
              안선영 화백
            </h1>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {/* {Object.values(Category).map((cat) => ( */}
            {[Category.DRAWING, Category.PAINTING].map((cat) => (
              <button
                key={cat}
                onClick={() => onFilterChange(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 pb-1 border-b-2 ${
                  currentFilter === cat
                    ? "border-black text-black"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {CategoryLabels[cat]}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            {/* <a href="#about" className="hover:text-black transition-colors">
              작가소개
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              문의하기
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
