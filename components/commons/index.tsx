import dynamic from 'next/dynamic';

export const components = {
  background: dynamic(() => import('./background')),
  pac: dynamic(() => import("./Pac")),
};
