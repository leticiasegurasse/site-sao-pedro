
import React from 'react';

const Container = ({ 
  children, 
  className = '', 
  fullWidth = false, 
  noPadding = false,
  as: Component = 'div'
}) => {
  const baseClasses = fullWidth 
    ? 'w-full' 
    : 'max-w-[1200px] mx-auto';
  
  const paddingClasses = noPadding 
    ? '' 
    : 'px-4 sm:px-6 lg:px-8';

  return (
    <Component className={`${baseClasses} ${paddingClasses} ${className}`}>
      {children}
    </Component>
  );
};

export default Container;