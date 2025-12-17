import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Roots</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Established in 2018, Green Space started with three neighbors and a few litter pickers in Bramall Park. Today, we are Stockport's largest environmental action group.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Stockport Challenge</h2>
            <p className="text-stone-600 text-lg mb-4 leading-relaxed">
              Stockport has incredible green assets, from the Mersey Valley to the foothills of the Peak District. However, council budget cuts meant less maintenance, leading to overgrown paths and rising litter levels.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              We realized that if we wanted our children to enjoy these spaces, we had to step up. We're not just cleaning up; we're rewilding areas, planting pollinator corridors, and building insect hotels.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-green-200 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://picsum.photos/600/400?forest" 
              alt="Forest path" 
              className="relative rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
            />
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
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-stone-100 shadow-lg">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">{person.name}</h3>
              <p className="text-green-600">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
