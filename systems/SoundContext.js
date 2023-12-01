// SoundContext.js
import { createContext } from 'react';

const SoundContext = createContext({
  soundEnabled: true,
  toggleSound: () => {},
  difficulty: 'normal', // Default difficulty
  setDifficulty: () => {}
});

export default SoundContext;
