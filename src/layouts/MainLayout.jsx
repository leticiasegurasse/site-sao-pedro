import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-28">
        {/* 
          pt-24: Mobile (topbar ~36px + header ~60px = ~96px)
          pt-28: Desktop (topbar ~40px + header ~72px = ~112px)
        */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
