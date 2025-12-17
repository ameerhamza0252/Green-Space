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
       <div className="min-h-[60vh] flex items-center justify-center p-4 animate-fade-in">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
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
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Join Our Green Army</h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
          Volunteering improves mental health, connects you with neighbors, and makes a tangible difference to our local environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow">
          <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-green-600">
            <Shovel size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Green Keeper</h3>
          <p className="text-stone-600">
            Get your hands dirty! Help with litter picking, planting trees, and clearing pathways. No experience needed.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
          <div className="bg-yellow-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-yellow-600">
            <Clipboard size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Event Marshall</h3>
          <p className="text-stone-600">
            Help organize our cleanup days, sign in volunteers, and ensure health & safety guidelines are followed.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
          <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600">
            <Coffee size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Community Host</h3>
          <p className="text-stone-600">
            Prepare refreshments, chat with public, and help run our educational stalls at local fairs.
          </p>
        </div>
      </div>

      <div className="bg-stone-50 rounded-3xl p-8 md:p-12 shadow-inner">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 text-center">Volunteer Application Form</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
              <input required type="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Interested Role(s)</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-stone-200 hover:border-green-400">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span>Green Keeper</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-stone-200 hover:border-green-400">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span>Event Marshall</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-stone-200 hover:border-green-400">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span>Community Host</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Why do you want to join?</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none" placeholder="Tell us a bit about yourself..."></textarea>
            </div>

            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-md transition-colors text-lg">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
