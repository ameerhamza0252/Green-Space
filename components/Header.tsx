import React from 'react';
import { Page } from '../types';
import { Leaf, Heart, Users, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { page: Page.HOME, label: 'Home', icon: Leaf },
    { page: Page.ABOUT, label: 'About Us', icon: Users },
    { page: Page.VOLUNTEER, label: 'Volunteer', icon: Users },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick(Page.HOME)}
          >
            <div className="bg-green-600 text-white p-2 rounded-lg group-hover:bg-green-700 transition-colors">
              <Leaf size={24} />
            </div>
            <span className="ml-3 text-xl font-serif font-bold text-green-900 tracking-tight">
              Green Space <span className="text-green-600 font-sans text-sm font-normal">Stockport</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.page 
                    ? 'text-green-700 border-b-2 border-green-600' 
                    : 'text-stone-600 hover:text-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(Page.DONATE)}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Heart size={16} className="fill-current" />
              Donate Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-green-600 p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === item.page
                    ? 'bg-green-50 text-green-700'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(Page.DONATE)}
              className="w-full mt-4 bg-green-600 text-white px-3 py-3 rounded-md text-base font-medium flex justify-center items-center gap-2"
            >
              <Heart size={18} /> Donate to the Cause
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
