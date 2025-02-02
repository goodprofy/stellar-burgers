import { useEffect } from 'react';

export const useKeydown = (onKeydown: (key: KeyboardEvent['key']) => void) => {
  const handleKeydown = (e: KeyboardEvent) => {
    onKeydown(e.key);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown, false);

    return () => {
      document.removeEventListener('keydown', handleKeydown, false);
    };
  }, [onKeydown]);
};
