import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', changeWindowSize);
    return () => window.removeEventListener('resize', changeWindowSize);
  }, []);

  const isMobile = windowSize.width <= 549;
  const isTablet = windowSize.width <= 768;
  const isSmallScreen = windowSize.width <= 1050;

  return { ...windowSize, isMobile, isTablet, isSmallScreen };
};
