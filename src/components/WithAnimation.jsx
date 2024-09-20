import React, { useState, useEffect } from 'react';

const withAnimation = (WrappedComponent, AnimationComponent) => {
  return (props) => {
    const [isXlScreen, setIsXlScreen] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        setIsXlScreen(window.innerWidth >= 1200); // Update based on the 'xl' breakpoint (1200px)
      };

      handleResize(); // Set initial state
      window.addEventListener('resize', handleResize); // Listen for resize events

      return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
    }, []);

    // If the screen is XL, wrap the component in the animation, otherwise render it without animation
    return isXlScreen ? (
      <AnimationComponent>
        <WrappedComponent {...props} />
      </AnimationComponent>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default withAnimation;
