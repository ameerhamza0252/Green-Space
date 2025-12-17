import React from 'react';
import { Calendar, Award, TrendingUp, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-green-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-slide-up">Our Journey</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto animate-slide-up delay-100">
            Established in 2018, Green Space started with three neighbors and a few litter pickers in Bramall Park. Today, we are Stockport's largest environmental action group.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-slide-up delay-200">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Stockport Challenge</h2>
            <p className="text-stone-600 text-lg mb-4 leading-relaxed">
              Stockport has incredible green assets, from the Mersey Valley to the foothills of the Peak District. However, council budget cuts meant less maintenance, leading to overgrown paths and rising litter levels.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              We realized that if we wanted our children to enjoy these spaces, we had to step up. We're not just cleaning up; we're rewilding areas, planting pollinator corridors, and building insect hotels.
            </p>
          </div>
          <div className="relative group animate-slide-up delay-300">
            <div className="absolute inset-0 bg-green-200 rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
            <img 
              src="https://picsum.photos/600/400?forest" 
              alt="Forest path" 
              className="relative rounded-2xl shadow-xl transform -rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02] cursor-pointer" 
            />
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-12">Our History</h2>
            <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
                {/* Vertical Line */}
                <div className="border-2-2 absolute border-opacity-20 border-green-700 h-full border left-[20px] md:left-1/2 md:-ml-[1px]"></div>
                
                {/* 2018 */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline group">
                    <div className="order-1 hidden md:block w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-10 h-10 rounded-full ml-0 md:ml-0 transition-transform duration-300 group-hover:scale-125 group-hover:bg-green-500">
                        <h1 className="mx-auto font-semibold text-lg text-white">18</h1>
                    </div>
                    <div className="order-1 bg-stone-100 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-8 md:ml-8 transition-all duration-300 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-1">
                        <h3 className="mb-3 font-bold text-stone-800 text-xl group-hover:text-green-700 transition-colors">The Beginning</h3>
                        <p className="text-sm leading-snug tracking-wide text-stone-600 text-opacity-100">
                            Founded by Sarah Jenkins and two neighbors in Bramall Park. Our first litter pick collected just 4 bags of rubbish, but sparked a movement.
                        </p>
                    </div>
                </div>

                {/* 2019 */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline group">
                    <div className="order-1 hidden md:block w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-10 h-10 rounded-full ml-0 md:ml-0 transition-transform duration-300 group-hover:scale-125 group-hover:bg-green-500">
                        <h1 className="mx-auto font-semibold text-lg text-white">19</h1>
                    </div>
                    <div className="order-1 bg-stone-100 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-8 md:mr-8 transition-all duration-300 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-1">
                        <h3 className="mb-3 font-bold text-stone-800 text-xl group-hover:text-green-700 transition-colors">First Grant & Expansion</h3>
                        <p className="text-sm leading-snug tracking-wide text-stone-600 text-opacity-100">
                            Received our first community lottery grant. Expanded operations to Reddish Vale and Vernon Park.
                        </p>
                    </div>
                </div>

                {/* 2021 */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline group">
                    <div className="order-1 hidden md:block w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-10 h-10 rounded-full ml-0 md:ml-0 transition-transform duration-300 group-hover:scale-125 group-hover:bg-green-500">
                        <h1 className="mx-auto font-semibold text-lg text-white">21</h1>
                    </div>
                    <div className="order-1 bg-stone-100 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-8 md:ml-8 transition-all duration-300 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-1">
                        <h3 className="mb-3 font-bold text-stone-800 text-xl group-hover:text-green-700 transition-colors">School Outreach Program</h3>
                        <p className="text-sm leading-snug tracking-wide text-stone-600 text-opacity-100">
                            Launched educational workshops. Over 500 local primary school children learned about biodiversity and recycling in year one.
                        </p>
                    </div>
                </div>

                 {/* 2024 */}
                 <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline group">
                    <div className="order-1 hidden md:block w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-10 h-10 rounded-full ml-0 md:ml-0 transition-transform duration-300 group-hover:scale-125 group-hover:bg-green-500">
                        <h1 className="mx-auto font-semibold text-lg text-white">24</h1>
                    </div>
                    <div className="order-1 bg-green-50 border-2 border-green-200 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-8 md:mr-8 transition-all duration-300 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-1">
                        <h3 className="mb-3 font-bold text-green-800 text-xl group-hover:text-green-700 transition-colors">Community Star Award</h3>
                        <p className="text-sm leading-snug tracking-wide text-stone-700 text-opacity-100">
                            Recognized as "Charity of the Year" by Stockport Council. We now have over 850 active volunteers and manage 12 sites.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-24">
             <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-12">Success Stories</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Story 1 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-100 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                    <div className="h-64 overflow-hidden relative">
                        <img src="https://picsum.photos/600/400?river" alt="River Cleaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                            Waterway Restoration
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-blue-600 transition-colors">The Great Mersey Plastic Purge</h3>
                        <p className="text-stone-600 mb-4 flex-1">
                            <strong className="text-stone-900">The Challenge:</strong> Heavy rainfall had washed tons of plastic waste onto the banks of the River Mersey, threatening local wildlife like Kingfishers and Otters.
                        </p>
                         <p className="text-stone-600 mb-6 flex-1">
                            <strong className="text-stone-900">Action:</strong> Over a single weekend, 200 volunteers mobilized in waders and boats.
                        </p>
                        <div className="bg-green-50 p-4 rounded-xl border border-green-100 group-hover:bg-green-100 transition-colors">
                             <div className="flex items-center gap-3 text-green-800 font-semibold">
                                <Award size={20} className="group-hover:scale-125 transition-transform" />
                                <span>Outcome: 1.2 tons of waste removed</span>
                             </div>
                        </div>
                    </div>
                </div>

                 {/* Story 2 */}
                 <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-100 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                    <div className="h-64 overflow-hidden relative">
                        <img src="https://picsum.photos/600/400?flowers" alt="Wildflowers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                        <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                            Rewilding
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">The A6 Roundabout Meadows</h3>
                        <p className="text-stone-600 mb-4 flex-1">
                            <strong className="text-stone-900">The Challenge:</strong> The grassy roundabouts on the A6 were sterile green deserts requiring constant mowing, offering no value to pollinators.
                        </p>
                         <p className="text-stone-600 mb-6 flex-1">
                            <strong className="text-stone-900">Action:</strong> We partnered with the council to scarify the land and sow native wildflower mixes.
                        </p>
                        <div className="bg-green-50 p-4 rounded-xl border border-green-100 group-hover:bg-green-100 transition-colors">
                             <div className="flex items-center gap-3 text-green-800 font-semibold">
                                <TrendingUp size={20} className="group-hover:scale-125 transition-transform" />
                                <span>Outcome: Bee population increased by 15%</span>
                             </div>
                        </div>
                    </div>
                </div>

             </div>
        </div>

        {/* Team Grid */}
        <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-12">Meet the Trustees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Sarah Jenkins", role: "Founder", img: "https://picsum.photos/300/300?woman" },
            { name: "David O'Connor", role: "Operations", img: "https://picsum.photos/300/300?man" },
            { name: "Priya Patel", role: "Outreach", img: "https://picsum.photos/300/300?smile" },
            { name: "Tom Wright", role: "Treasurer", img: "https://picsum.photos/300/300?portrait" },
          ].map((person, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-stone-100 shadow-lg cursor-pointer">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-green-700 transition-colors">{person.name}</h3>
              <p className="text-green-600">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
