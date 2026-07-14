import { useState, useEffect } from 'react';

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
};

export const useResponsive = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [height, setHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < breakpoints.mobile;
  const isTablet = width >= breakpoints.mobile && width < breakpoints.tablet;
  const isDesktop = width >= breakpoints.tablet;

  // Retorna valores diferentes com base no tamanho da tela
  const select = (mobileVal, tabletVal, desktopVal) => {
    if (isMobile) return mobileVal;
    if (isTablet) return tabletVal !== undefined ? tabletVal : mobileVal;
    return desktopVal !== undefined ? desktopVal : (tabletVal !== undefined ? tabletVal : mobileVal);
  };

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    select,
  };
};
