import React, { useState } from 'react';
import { Shovel, Clipboard, Coffee, UserPlus, Check } from 'lucide-react';

export const VolunteerPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
       <div className="min-h-[60vh] flex items-center justify-center p-4 animate-slide-up">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-10 text-center transform transition-transform hover:scale-105">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserPlus className="text-green-600" size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Welcome to the Team!</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Thanks for expressing interest in volunteering. Our coordinator, Sarah, will be in touch within 48 hours with details about the next orientation at Bramall Park.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-green-600 font-semibold hover:underline"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 animate-slide-up">Join Our Green Army</h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto animate-slide-up delay-100">
          Volunteering improves mental health, connects you with neighbors, and makes a tangible difference to our local environment.
        </p>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-slide-up delay-200">
  {/* Green Keeper */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center text-green-600">
        <Shovel size={20} />
      </div>
      <h3 className="text-base font-semibold text-stone-900">
        Green Keeper
      </h3>
    </div>
    <p className="text-sm text-stone-600 leading-relaxed">
      Help with litter picking, planting trees, and clearing pathways. No experience needed.
    </p>
  </div>

  {/* Event Marshall */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-yellow-100 w-10 h-10 rounded-lg flex items-center justify-center text-yellow-600">
        <Clipboard size={20} />
      </div>
      <h3 className="text-base font-semibold text-stone-900">
        Event Marshall
      </h3>
    </div>
    <p className="text-sm text-stone-600 leading-relaxed">
      Help organise cleanup days, sign in volunteers, and ensure health & safety guidelines.
    </p>
  </div>

  {/* Community Host */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600">
        <Coffee size={20} />
      </div>
      <h3 className="text-base font-semibold text-stone-900">
        Community Host
      </h3>
    </div>
    <p className="text-sm text-stone-600 leading-relaxed">
      Prepare refreshments, chat with the public, and help run educational stalls.
    </p>
  </div>
   {/* Donate Material */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center text-green-600">
        <Coffee size={20} />
      </div>
      <h3 className="text-base font-semibold text-stone-900">
        Donate Materials
      </h3>
    </div>
    <p className="text-sm text-stone-600 leading-relaxed">
      Donate gardening tools, gloves, plants, or materials to support our initiatives.
    </p>
  </div>
</div>
      <div className="bg-stone-50 rounded-3xl p-8 md:p-12 shadow-inner animate-slide-up delay-300">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 text-center">Volunteer Application Form</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none transition-shadow focus:shadow-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none transition-shadow focus:shadow-md" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
              <input required type="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none transition-shadow focus:shadow-md" />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Interested Role(s)</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-stone-200 hover:border-green-400 transition-all hover:shadow-md">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span>Green Keeper</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-stone-200 hover:border-green-400 transition-all hover:shadow-md">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span>Event Marshall</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-stone-200 hover:border-green-400 transition-all hover:shadow-md">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span>Community Host</span>
                </label>

                 <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-stone-200 hover:border-green-400 transition-all hover:shadow-md">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span>Donate Material</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">How would you like to contribute?</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none transition-shadow focus:shadow-md" placeholder="Tell us about yourself and how can you contribute to our cause.  "></textarea>
            </div>

            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg text-lg">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
