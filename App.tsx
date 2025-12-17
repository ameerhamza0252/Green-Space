import React, { useState } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { DonatePage } from './components/DonatePage';
import { VolunteerPage } from './components/VolunteerPage';
import { AboutPage } from './components/AboutPage';
import { GalleryPage } from './components/GalleryPage';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage setCurrentPage={setCurrentPage} />;
      case Page.DONATE:
        return <DonatePage />;
      case Page.VOLUNTEER:
        return <VolunteerPage />;
      case Page.ABOUT:
        return <AboutPage />;
      case Page.GALLERY:
        return <GalleryPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-stone-800 bg-stone-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      
      {/* Floating Chat Widget available on all pages */}
      <ChatWidget />
    </div>
  );
};

export default App;
