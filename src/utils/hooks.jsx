import { useEffect, useState } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
}

export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    function updateScrollY() {
      setY(window.scrollY);
    }
    window.addEventListener('scroll', updateScrollY);
    updateScrollY();
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);
  return y;
}
