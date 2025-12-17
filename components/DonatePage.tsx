import React, { useState } from 'react';
import { CreditCard, CheckCircle, Lock, Heart, Calendar } from 'lucide-react';
import { DonationOption } from '../types';

export const DonatePage: React.FC = () => {
  const [amount, setAmount] = useState<number>(20);
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [step, setStep] = useState<'amount' | 'details' | 'success'>('amount');
  const [isLoading, setIsLoading] = useState(false);

  const predefinedAmounts: DonationOption[] = [
    { amount: 10, label: '£10', description: 'Buys a sturdy pair of gloves for a volunteer.' },
    { amount: 20, label: '£20', description: 'Provides a litter picker and hoop kit.' },
    { amount: 50, label: '£50', description: 'Plants 5 native saplings in Reddish Vale.' },
    { amount: 100, label: '£100', description: 'Funds a school education workshop.' },
  ];

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value));
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4 animate-fade-in">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-green-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Your donation of <span className="font-bold text-green-700">£{amount}</span> {isMonthly && 'per month'} has been received. 
            You are helping keep Stockport green and beautiful.
          </p>
          <button 
            onClick={() => setStep('amount')}
            className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Donate Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Support Our Cause</h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          We rely entirely on donations to purchase equipment, insurance, and plants. 100% of your donation goes directly to operations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Donation Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
            <div className="bg-green-50 p-4 border-b border-green-100 flex justify-center gap-4">
               <button 
                onClick={() => setIsMonthly(false)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${!isMonthly ? 'bg-green-600 text-white shadow-md' : 'text-green-800 hover:bg-green-100'}`}
               >
                 <Heart size={16} /> One-time
               </button>
               <button 
                onClick={() => setIsMonthly(true)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${isMonthly ? 'bg-green-600 text-white shadow-md' : 'text-green-800 hover:bg-green-100'}`}
               >
                 <Calendar size={16} /> Monthly
               </button>
            </div>

            <div className="p-8">
              {step === 'amount' ? (
                <>
                  <h3 className="text-xl font-bold text-stone-900 mb-6">Select Amount</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {predefinedAmounts.map((opt) => (
                      <button
                        key={opt.amount}
                        onClick={() => { setAmount(opt.amount); setCustomAmount(''); }}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          amount === opt.amount && !customAmount
                            ? 'border-green-500 bg-green-50'
                            : 'border-stone-200 hover:border-green-300'
                        }`}
                      >
                        <span className="block text-2xl font-bold text-green-700">£{opt.amount}</span>
                        <span className="text-xs text-stone-500 mt-1 block">{opt.description}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Or enter custom amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 text-lg">£</span>
                      <input
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-stone-200 focus:border-green-500 focus:ring-0 text-lg outline-none"
                        placeholder="Other amount"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setStep('details')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
                  >
                    Continue
                  </button>
                </>
              ) : (
                <form onSubmit={handleDonate}>
                  <div className="flex items-center gap-2 mb-6 text-stone-500 cursor-pointer hover:text-green-600" onClick={() => setStep('amount')}>
                    <span>&larr; Back to amount</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-900 mb-6">Payment Details</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                      <input required type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                      <input required type="email" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Card Details</label>
                      <div className="relative">
                        <input required type="text" className="w-full pl-10 px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="0000 0000 0000 0000" />
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                      </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-1/2">
                          <label className="block text-sm font-medium text-stone-700 mb-1">Expiry</label>
                          <input required type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="MM/YY" />
                       </div>
                       <div className="w-1/2">
                          <label className="block text-sm font-medium text-stone-700 mb-1">CVC</label>
                          <input required type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="123" />
                       </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 rounded-xl shadow-lg flex justify-center items-center gap-2"
                  >
                    {isLoading ? 'Processing...' : `Pay £${amount} ${isMonthly ? '/ month' : ''}`}
                    {!isLoading && <Lock size={18} />}
                  </button>
                  <p className="text-center text-xs text-stone-400 mt-4 flex items-center justify-center gap-1">
                    <Lock size={12} /> Secure 256-bit SSL encrypted payment
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-green-900 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold font-serif mb-4">Why Donate?</h3>
            <ul className="space-y-4 text-sm text-green-100">
              <li className="flex gap-3">
                <div className="bg-green-800 p-1 rounded-full h-fit mt-0.5"><CheckCircle size={14} /></div>
                <span>We are 100% volunteer-led. No fat cat salaries.</span>
              </li>
              <li className="flex gap-3">
                <div className="bg-green-800 p-1 rounded-full h-fit mt-0.5"><CheckCircle size={14} /></div>
                <span>Every £1 donated generates £4 in social value for Stockport.</span>
              </li>
              <li className="flex gap-3">
                <div className="bg-green-800 p-1 rounded-full h-fit mt-0.5"><CheckCircle size={14} /></div>
                <span>Taxpayers can add 25% via Gift Aid at no extra cost.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
            <h4 className="font-bold text-stone-900 mb-2">Other Ways to Help</h4>
            <p className="text-sm text-stone-600 mb-4">
              Can't donate money? We always need old gardening tools, gloves, or simply your time!
            </p>
            <a href="#" className="text-green-600 text-sm font-semibold hover:underline">Contact for material donations &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};
