/**
 * useMediaQuery Hook - Responsive design utility
 *
 * Functionality:
 * - Tracks window width changes
 * - Returns boolean for specific breakpoint
 * - Handles resize events efficiently
 * - SSR safe (returns false on server)
 */

import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add event listener (modern browsers)
    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    }
    // Fallback for older browsers
    else {
      media.addListener(handleChange);
      return () => media.removeListener(handleChange);
    }
  }, [query]);

  return matches;
};

// Predefined queries for common breakpoints
export const useIsMobile = () => useMediaQuery("(max-width: 1023px)");
export const useIsTablet = () =>
  useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");
