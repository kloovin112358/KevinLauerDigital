import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AnimationContext
const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const [isXlScreen, setIsXlScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsXlScreen(window.innerWidth >= 1200); // Update based on the 'xl' breakpoint (1200px)
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  return (
    <AnimationContext.Provider value={isXlScreen}>
      {children}
    </AnimationContext.Provider>
  );
};
