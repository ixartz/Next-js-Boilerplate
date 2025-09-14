import { useMemo } from 'react';
import { useBreakpoint as _useBreakpoint } from 'use-breakpoint';
import { breakpoints } from '@/utils';

export const useBreakpoint = () => {
  const { breakpoint, minWidth, maxWidth } = _useBreakpoint(breakpoints);

  const { isMobile, isTablet, isDesktop } = useMemo(() => {
    return {
      isMobile: breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md',
      isTablet: breakpoint === 'sm' || breakpoint === 'md',
      isDesktop: breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl',
    };
  }, [breakpoint]);

  return {
    breakpoint,
    minWidth,
    maxWidth,
    isMobile,
    isTablet,
    isDesktop,
    devicePixelRatio: window.devicePixelRatio,
  };
};
