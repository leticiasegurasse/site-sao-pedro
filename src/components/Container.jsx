import React from 'react';

const Container = ({ children, className = '', fullWidth = false, noPadding = false }) => {
  const baseClasses = fullWidth 
    ? 'w-full' 
    : 'max-w-[1200px] mx-auto';
  
  const paddingClasses = noPadding 
    ? '' 
    : 'px-4 sm:px-6 lg:px-8';

  return (
    <div className={`${baseClasses} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Container;