/**
 * Constants - Centralized app constants and configurations
 *
 * Key Bindings:
 * - BREAKPOINTS object: Single source for all breakpoint values
 * - Utility functions: Responsive detection helpers
 * - Mobile-first design approach
 *
 * Functionality:
 * - Consistent breakpoint values across entire app
 * - Utility functions for responsive logic
 * - Prevents magic numbers in components
 * - Easy maintenance and updates
 * - TypeScript type safety for breakpoint values
 */

// Responsive breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
  XL: 1536,
} as const;

// Breakpoint utilities
export const isMobile = (width: number) => width < BREAKPOINTS.MOBILE;
export const isTablet = (width: number) =>
  width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET;
export const isDesktop = (width: number) => width >= BREAKPOINTS.TABLET;
