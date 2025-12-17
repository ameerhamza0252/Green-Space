import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-lg font-serif font-bold mb-4">Green Space</h3>
            <p className="text-sm text-stone-400 mb-4">
              Dedicated to preserving the natural beauty of Stockport for everyone to enjoy. 
              Registered Charity No. 123456.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-green-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-green-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage(Page.HOME)} className="hover:text-green-400 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage(Page.ABOUT)} className="hover:text-green-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage(Page.GALLERY)} className="hover:text-green-400 transition-colors">Gallery</button></li>
              <li><button onClick={() => setCurrentPage(Page.VOLUNTEER)} className="hover:text-green-400 transition-colors">Volunteer</button></li>
              <li><button onClick={() => setCurrentPage(Page.DONATE)} className="hover:text-green-400 transition-colors">Donate</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Projects</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Bramall Park Cleanup</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Reddish Vale Tree Planting</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Community Gardens</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">School Workshops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-green-500" />
                <span>123 Green Lane,<br />Stockport, SK1 1AA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <span>+44 161 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-500" />
                <span>hello@greenspacestockport.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Green Space Stockport. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
            <a href="#" className="hover:text-stone-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
