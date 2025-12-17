import React from 'react';
import { Page } from '../types';
import { ArrowRight, Sprout, Users, TreeDeciduous, Recycle } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Stockport Green Space" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <span className="inline-block px-3 py-1 mb-6 border border-green-400 rounded-full text-green-300 text-sm tracking-wider uppercase font-semibold bg-green-900/30 backdrop-blur-sm">
            Stockport's Nature Charity
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Preserving Our <br/>
            <span className="text-green-400">Green Legacy</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            From Bramall Hall to the smallest verge, we work tirelessly to keep Stockport clean, green, and thriving for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage(Page.VOLUNTEER)}
              className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Join a Cleanup
            </button>
            <button 
              onClick={() => setCurrentPage(Page.DONATE)}
              className="px-8 py-4 bg-white hover:bg-stone-100 text-green-900 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 text-green-600 rounded-full">
                <Recycle size={32} />
              </div>
              <h3 className="text-4xl font-bold text-stone-900 mb-2">12,500+</h3>
              <p className="text-stone-600 font-medium">Bags of litter removed</p>
            </div>
            <div className="p-6 border-l-0 md:border-l border-stone-100">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 text-green-600 rounded-full">
                <TreeDeciduous size={32} />
              </div>
              <h3 className="text-4xl font-bold text-stone-900 mb-2">3,200</h3>
              <p className="text-stone-600 font-medium">Native trees planted</p>
            </div>
            <div className="p-6 border-l-0 md:border-l border-stone-100">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 text-green-600 rounded-full">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-bold text-stone-900 mb-2">850+</h3>
              <p className="text-stone-600 font-medium">Active Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/800/600?nature" 
                  alt="Volunteers cleaning a park" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white italic">"There is no Planet B. Start in your own backyard."</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                Local Action, <br/>
                <span className="text-green-600">Global Impact</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Green Space was founded on a simple principle: if we all take care of our local patch, the world becomes a better place.
                In Stockport, our green belt is a vital lung for Greater Manchester.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                We organize weekly community litter picks, manage wildflower meadows to support pollinators, and educate local schools about sustainability.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setCurrentPage(Page.ABOUT)}
                  className="flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors group"
                >
                  Learn more about our mission 
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-green-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
           <Sprout size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
            Ready to make a difference?
          </h2>
          <p className="text-green-100 text-xl mb-12 max-w-2xl mx-auto">
            Whether you have an hour to spare for a cleanup or can support us financially, your contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setCurrentPage(Page.VOLUNTEER)}
              className="bg-green-500 hover:bg-green-400 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl transition-all"
            >
              Become a Volunteer
            </button>
            <button 
              onClick={() => setCurrentPage(Page.DONATE)}
              className="bg-transparent border-2 border-green-400 hover:bg-green-800 text-green-100 px-10 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Make a Donation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
