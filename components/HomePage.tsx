import React from 'react';
import { Page } from '../types';
import { ArrowRight, Sprout, Users, TreeDeciduous, Recycle } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Stockport Green Space" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_infinite]" 
          />
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <span className="inline-block px-3 py-1 mb-6 border border-green-400 rounded-full text-green-300 text-sm tracking-wider uppercase font-semibold bg-green-900/30 backdrop-blur-sm animate-slide-up">
            Stockport's Nature Charity
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight animate-slide-up delay-100">
            Preserving Our <br/>
            <span className="text-green-400">Green Legacy</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up delay-200">
            From Bramall Hall to the smallest verge, we work tirelessly to keep Stockport clean, green, and thriving for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <button 
              onClick={() => setCurrentPage(Page.VOLUNTEER)}
              className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-green-500/50"
            >
              Join a Cleanup
            </button>
            <button 
              onClick={() => setCurrentPage(Page.DONATE)}
              className="px-8 py-4 bg-white hover:bg-stone-100 text-green-900 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-white/50"
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
            <div className="p-6 rounded-2xl transition-all duration-300 hover:bg-green-50 hover:-translate-y-2 hover:shadow-xl cursor-default group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 text-green-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Recycle size={32} />
              </div>
              <h3 className="text-4xl font-bold text-stone-900 mb-2">12,500+</h3>
              <p className="text-stone-600 font-medium group-hover:text-green-700 transition-colors">Bags of litter removed</p>
            </div>
            <div className="p-6 rounded-2xl transition-all duration-300 hover:bg-green-50 hover:-translate-y-2 hover:shadow-xl cursor-default group border-l-0 md:border-l border-stone-100 hover:border-transparent">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 text-green-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                <TreeDeciduous size={32} />
              </div>
              <h3 className="text-4xl font-bold text-stone-900 mb-2">3,200</h3>
              <p className="text-stone-600 font-medium group-hover:text-green-700 transition-colors">Native trees planted</p>
            </div>
            <div className="p-6 rounded-2xl transition-all duration-300 hover:bg-green-50 hover:-translate-y-2 hover:shadow-xl cursor-default group border-l-0 md:border-l border-stone-100 hover:border-transparent">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 text-green-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-bold text-stone-900 mb-2">850+</h3>
              <p className="text-stone-600 font-medium group-hover:text-green-700 transition-colors">Active Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 group perspective-1000">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-[1.02]">
                <img 
                  src="https://picsum.photos/800/600?nature" 
                  alt="Volunteers cleaning a park" 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white italic text-lg opacity-90 group-hover:opacity-100">"There is no Planet B. Start in your own backyard."</p>
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
                  className="flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-all group px-4 py-2 rounded-lg hover:bg-green-50"
                >
                  Learn more about our mission 
                  <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-green-900 relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 transition-transform duration-[2s] group-hover:scale-110 group-hover:rotate-12">
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
              className="bg-green-500 hover:bg-green-400 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-green-400/30"
            >
              Become a Volunteer
            </button>
            <button 
              onClick={() => setCurrentPage(Page.DONATE)}
              className="bg-transparent border-2 border-green-400 hover:bg-green-800 text-green-100 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Make a Donation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
