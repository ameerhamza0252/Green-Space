import React from 'react';
import { Camera, MapPin } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const images = [
    {
      url: "https://picsum.photos/800/600?nature,park",
      caption: "Early morning cleanup crew at Bramall Park",
      location: "Bramall Park"
    },
    {
      url: "https://picsum.photos/800/800?tree,planting",
      caption: "Planting the first of 50 Oak saplings",
      location: "Reddish Vale"
    },
    {
      url: "https://picsum.photos/600/800?volunteer,smile",
      caption: "Volunteers sharing a well-earned tea break",
      location: "Etherow Country Park"
    },
    {
      url: "https://picsum.photos/800/500?river,clean",
      caption: "Removing plastic waste from the river banks",
      location: "River Mersey"
    },
    {
      url: "https://picsum.photos/700/700?flowers,meadow",
      caption: "Wildflower meadow in full bloom this July",
      location: "Vernon Park"
    },
    {
      url: "https://picsum.photos/800/600?kids,learning",
      caption: "School workshop: Building bug hotels",
      location: "St Mary's Primary"
    },
    {
      url: "https://picsum.photos/600/600?tools,gardening",
      caption: "New equipment funded by your donations",
      location: "HQ"
    },
    {
      url: "https://picsum.photos/800/400?sunset,park",
      caption: "The result of hard work: A pristine sunset view",
      location: "Werneth Low"
    }
  ];

  return (
    <div className="animate-fade-in">
       {/* Header */}
       <div className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-stone-800 text-green-400 rounded-full">
             <Camera size={24} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Green Space Gallery</h1>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            A visual journey through our cleanups, plantings, and community events. See the difference our volunteers make every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg bg-stone-100">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-medium text-lg leading-tight mb-2">{img.caption}</p>
                <div className="flex items-center text-green-300 text-sm gap-1">
                  <MapPin size={14} />
                  <span>{img.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
